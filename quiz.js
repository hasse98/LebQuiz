// ── Daily quiz seeding ──────────────────────────────────────────────────────

/**
 * Returns the quiz day key (YYYY-MM-DD in Stockholm timezone).
 * The quiz refreshes at 08:00 Stockholm time — before that, the previous
 * day's key is returned so users still see yesterday's quiz.
 */
function getQuizDayKey() {
  const now = new Date();

  const fmt = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', hour12: false
  });

  const parts = fmt.formatToParts(now);
  const get = (t) => parts.find(p => p.type === t).value;
  const hour = parseInt(get('hour'), 10);

  if (hour >= 8) {
    return `${get('year')}-${get('month')}-${get('day')}`;
  } else {
    // Before 08:00 — use yesterday's date in Stockholm timezone
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    return new Intl.DateTimeFormat('sv-SE', {
      timeZone: 'Europe/Stockholm',
      year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(yesterday);
  }
}

/** Mulberry32 PRNG seeded from a string. */
function makeRng(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let s = h >>> 0;
  return function () {
    s += 0x6D2B79F5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 0xFFFFFFFF;
  };
}

function fisherYates(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getDailyQuestions() {
  const dayKey = getQuizDayKey();
  const rng = makeRng(dayKey);

  // Shuffle the pool and take 15
  const shuffled = fisherYates(ALL_QUESTIONS, rng).slice(0, 15);

  // Shuffle each question's options (maintaining correct answer tracking)
  return shuffled.map(q => {
    const correctOption = q.options[q.answer];
    const newOptions = fisherYates(q.options, rng);
    return { ...q, options: newOptions, answer: newOptions.indexOf(correctOption) };
  });
}

/** Swedish label for the quiz day, e.g. "Måndag 29 mars" */
function getDailyLabel(dayKey) {
  const [y, m, d] = dayKey.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  const label = date.toLocaleDateString('sv-SE', { weekday: 'long', day: 'numeric', month: 'long' });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** Returns the UTC Date of the next 08:00 Stockholm quiz refresh. */
function getNextQuizUTC() {
  const now = new Date();
  const nowStockholm = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Stockholm' }));

  const target = new Date(nowStockholm);
  target.setHours(8, 0, 0, 0);
  if (nowStockholm >= target) target.setDate(target.getDate() + 1);

  const offset = now.getTime() - nowStockholm.getTime();
  return new Date(target.getTime() + offset);
}

function formatCountdown(ms) {
  if (ms <= 0) return '00:00:00';
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// ── Quiz state ──────────────────────────────────────────────────────────────

let dailyQuestions = [];
let current = 0;
let score = 0;
let answered = false;
let results = []; // true/false per question

// ── Build & render ──────────────────────────────────────────────────────────

function buildQuiz() {
  const area = document.getElementById('quizArea');
  area.innerHTML = '';
  results = new Array(dailyQuestions.length).fill(null);

  dailyQuestions.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'question-card' + (i === 0 ? ' active' : '');
    card.id = `card-${i}`;
    card.innerHTML = `
      <div class="q-number">Fråga ${i + 1} av 15</div>
      <div class="arabic-word">${q.arabic}</div>
      <div class="romanized">${q.roman}</div>
      <p style="font-size:0.9rem;color:var(--muted);margin-bottom:16px;">
        Vad betyder ${q.arabic} (${q.roman})?
      </p>
      <div class="options">
        ${q.options.map((opt, j) => `
          <button class="option-btn" onclick="answer(${i}, ${j})" id="opt-${i}-${j}">${opt}</button>
        `).join('')}
      </div>
      <div class="feedback" id="fb-${i}"></div>
      <button class="nav-btn" id="next-${i}" onclick="nextQuestion()">
        ${i === dailyQuestions.length - 1 ? 'Se resultat →' : 'Nästa fråga →'}
      </button>
    `;
    area.appendChild(card);
  });
}

function answer(qIdx, optIdx) {
  if (answered) return;
  answered = true;
  const q = dailyQuestions[qIdx];
  const correct = q.answer;

  for (let j = 0; j < q.options.length; j++) {
    const btn = document.getElementById(`opt-${qIdx}-${j}`);
    btn.disabled = true;
    if (j === correct) btn.classList.add('correct');
    else if (j === optIdx && optIdx !== correct) btn.classList.add('wrong');
  }

  const isCorrect = (optIdx === correct);
  results[qIdx] = isCorrect;

  const fb = document.getElementById(`fb-${qIdx}`);
  if (isCorrect) {
    score++;
    document.getElementById('scoreNum').textContent = score;
    fb.className = 'feedback show correct-fb';
    fb.textContent = `✓ Rätt! ${q.note}`;
  } else {
    fb.className = 'feedback show wrong-fb';
    fb.textContent = `✗ Rätt svar: "${q.options[correct]}". ${q.note}`;
  }

  document.getElementById(`next-${qIdx}`).classList.add('show');
  updateProgress();
}

function nextQuestion() {
  document.getElementById(`card-${current}`).classList.remove('active');
  current++;
  answered = false;

  if (current >= dailyQuestions.length) {
    showResults();
    return;
  }

  document.getElementById(`card-${current}`).classList.add('active');
  document.getElementById('qNum').textContent = current + 1;
  updateProgress();
}

function updateProgress() {
  const pct = ((current + (answered ? 1 : 0)) / 15) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
}

// ── Results ─────────────────────────────────────────────────────────────────

function showResults() {
  document.getElementById('quizArea').style.display = 'none';
  document.querySelector('.score-display').style.display = 'none';
  const rs = document.getElementById('resultScreen');
  rs.classList.add('show');

  const pct = score / 15;
  let emoji, title, msg;
  if (pct === 1)       { emoji = '🌲'; title = 'Ahla w sahla!';        msg = 'Perfekt! Du talar nästan libanesiska som en infödd.'; }
  else if (pct >= 0.8) { emoji = '🎉'; title = 'Ktīr mniḥ!';           msg = 'Väldigt bra! Du kan libanesiska riktigt väl.'; }
  else if (pct >= 0.6) { emoji = '👏'; title = 'Mniḥ!';                msg = 'Inte illa alls! Fortsätt öva.'; }
  else if (pct >= 0.4) { emoji = '📖'; title = 'Yalla, studera mer!';  msg = 'Du kan några ord. Mer övning behövs.'; }
  else                  { emoji = '😅'; title = 'La, la, la...';        msg = 'Libanesisk arabiska är svårt — försök igen!'; }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('finalScore').textContent = `${score} / 15`;
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('progressBar').style.width = '100%';

  // Answer key
  const rows = document.getElementById('answerRows');
  rows.innerHTML = dailyQuestions.map((q, i) => `
    <div class="answer-row">
      <span class="aw">${q.arabic}</span>
      <span class="ar">${q.roman}</span>
      <span class="ac">${q.options[q.answer]}</span>
      <span class="tick">${results[i] === true ? '✅' : results[i] === false ? '❌' : '—'}</span>
    </div>
  `).join('');

  // Countdown
  startCountdown();
}

// ── Countdown ────────────────────────────────────────────────────────────────

let countdownInterval = null;

function startCountdown() {
  const el = document.getElementById('countdown');
  function tick() {
    const diff = getNextQuizUTC() - Date.now();
    el.textContent = formatCountdown(diff);
    if (diff <= 0) {
      clearInterval(countdownInterval);
      el.textContent = 'Nytt quiz tillgängligt!';
    }
  }
  tick();
  countdownInterval = setInterval(tick, 1000);
}

// ── Share ────────────────────────────────────────────────────────────────────

function buildShareText() {
  const dayKey = getQuizDayKey();
  const [y, m, d] = dayKey.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const dateStr = dateObj.toLocaleDateString('sv-SE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const capitalized = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  const grid = results.map(r => r === true ? '✅' : '❌').join('');
  const scoreEmoji = score === 15 ? '🌲' : score >= 12 ? '🎉' : score >= 9 ? '👏' : score >= 6 ? '📖' : '😅';

  return `🇱🇧 Libanesisk Arabiska Quiz
${capitalized}

Jag fick ${score}/15! ${scoreEmoji}
${grid}

Testa din libanesiska:
${window.location.href}`;
}

function openShareModal() {
  document.getElementById('sharePreview').textContent = buildShareText();
  document.getElementById('shareModal').classList.add('open');
  document.getElementById('copyConfirm').classList.remove('show');

  const nativeBtn = document.getElementById('nativeShareBtn');
  nativeBtn.style.display = navigator.share ? 'block' : 'none';
}

function closeShareModal() {
  document.getElementById('shareModal').classList.remove('open');
}

function closeShareModalOutside(e) {
  if (e.target === document.getElementById('shareModal')) closeShareModal();
}

function copyToClipboard() {
  const text = buildShareText();
  navigator.clipboard.writeText(text).then(() => {
    const el = document.getElementById('copyConfirm');
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2500);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    const el = document.getElementById('copyConfirm');
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2500);
  });
}

function shareWhatsApp() {
  const text = encodeURIComponent(buildShareText());
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareTwitter() {
  const dayKey = getQuizDayKey();
  const scoreEmoji = score === 15 ? '🌲' : score >= 12 ? '🎉' : score >= 9 ? '👏' : score >= 6 ? '📖' : '😅';
  const grid = results.map(r => r === true ? '✅' : '❌').join('');
  const tweet = `🇱🇧 Libanesisk Arabiska Quiz — ${dayKey}\nJag fick ${score}/15! ${scoreEmoji}\n${grid}`;
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${url}`, '_blank');
}

function shareNative() {
  if (!navigator.share) return;
  navigator.share({
    title: 'Libanesisk Arabiska Quiz',
    text: buildShareText(),
    url: window.location.href
  }).catch(() => {});
}

// ── Restart ──────────────────────────────────────────────────────────────────

function restartQuiz() {
  current = 0;
  score = 0;
  answered = false;
  results = [];
  if (countdownInterval) clearInterval(countdownInterval);

  document.getElementById('scoreNum').textContent = 0;
  document.getElementById('qNum').textContent = 1;
  document.getElementById('progressBar').style.width = '0%';
  document.getElementById('resultScreen').classList.remove('show');
  document.getElementById('quizArea').style.display = 'block';
  document.querySelector('.score-display').style.display = 'flex';
  buildQuiz();
}

// ── Init ─────────────────────────────────────────────────────────────────────

(function init() {
  const dayKey = getQuizDayKey();
  document.getElementById('dailyLabel').textContent =
    `Daglig quiz · ${getDailyLabel(dayKey)}`;

  dailyQuestions = getDailyQuestions();
  buildQuiz();
})();
