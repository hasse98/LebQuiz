// Full question bank — Lebanese Arabic → Swedish
// 101 questions; 15 are selected daily via a seeded shuffle
//
// Phonetics use Lebanese chat alphabet:
//   2 = ء / ق (glottal stop)   3 = ع (ain)   5 = خ (kha)
//   6 = ط (emphatic t)         7 = ح (ha)
//
// IMPORTANT: No "/" characters in any option text — users can use them to
// identify the correct answer. Write each option as one clean phrase.

const ALL_QUESTIONS = [
  {
    arabic: "يلّا",
    roman: "yalla",
    options: ["God morgon", "Kom igen", "Tack", "Förlåt"],
    answer: 1,
    note: "Ett av de vanligaste orden på libanesiska — 'yalla' betyder 'kom igen', 'kör på' eller 'skynda dig'."
  },
  {
    arabic: "كتير",
    roman: "ktir",
    options: ["Lite", "Aldrig", "Väldigt mycket", "Ibland"],
    answer: 2,
    note: "'Ktir' betyder 'mycket' eller 'väldigt'. T.ex. 'ktir mni7' = väldigt bra."
  },
  {
    arabic: "شو",
    roman: "shu",
    options: ["Vem", "När", "Var", "Vad"],
    answer: 3,
    note: "'Shu' är det libanesiska ordet för 'vad'. 'Shu baddak?' = Vad vill du?"
  },
  {
    arabic: "منيح",
    roman: "mni7",
    options: ["Dålig", "Bra", "Konstig", "Trött"],
    answer: 1,
    note: "'Mni7' betyder bra eller okej. Ett vanligt svar på 'Kifak?' (Hur mår du?)."
  },
  {
    arabic: "هلق",
    roman: "halla2",
    options: ["Igår", "Senare", "Nu", "Alltid"],
    answer: 2,
    note: "'Halla2' betyder 'nu'. Motsvarar Modern Standardarabiska 'al-ān'."
  },
  {
    arabic: "عنجد",
    roman: "3anjad",
    options: ["Kanske", "Verkligen?", "Självklart", "Jag vet inte"],
    answer: 1,
    note: "'3anjad' betyder 'verkligen' eller 'seriöst'. Används både som påstående och fråga."
  },
  {
    arabic: "بدّي",
    roman: "baddi",
    options: ["Jag vet inte", "Jag glömde", "Jag vill", "Jag kom"],
    answer: 2,
    note: "'Baddi' betyder 'jag vill'. 'Baddak' = du vill, 'baddha' = hon vill."
  },
  {
    arabic: "تعبان",
    roman: "ta3ban",
    options: ["Glad", "Hungrig", "Trött", "Uttråkad"],
    answer: 2,
    note: "'Ta3ban' betyder trött eller sjuk. 'Ana ta3ban' = Jag är trött."
  },
  {
    arabic: "شاطر",
    roman: "sha6er",
    options: ["Lat", "Duktig", "Otrevlig", "Tyst"],
    answer: 1,
    note: "'Sha6er' betyder duktig eller bra jobbat. Föräldrar säger det ofta för att berömma barn."
  },
  {
    arabic: "مش",
    roman: "mish",
    options: ["Ja", "Också", "Inte", "Men"],
    answer: 2,
    note: "'Mish' är negationsprefixet. 'Mish mni7' = inte bra."
  },
  {
    arabic: "فوت",
    roman: "fut",
    options: ["Gå ut", "Kom in", "Sätt dig", "Titta"],
    answer: 1,
    note: "'Fut' betyder 'kom in' eller 'gå in'. 'Fut la jouwwa' = kom in."
  },
  {
    arabic: "صحتين",
    roman: "sa7ten",
    options: ["När någon nyser", "Som en skål", "God natt", "Grattis"],
    answer: 1,
    note: "'Sa7ten' betyder bokstavligen 'två hälsor'. Sägs som en skål eller när någon är klar med sin mat."
  },
  {
    arabic: "روق",
    roman: "ruu2",
    options: ["Skynda dig", "Var tyst", "Slappna av", "Gå iväg"],
    answer: 2,
    note: "'Ruu2' betyder slappna av eller lugna ner. 'Ruu2 shwayy' = ta det lite lugnt."
  },
  {
    arabic: "بكرا",
    roman: "bukra",
    options: ["Igår", "Idag", "Imorgon", "Nästa vecka"],
    answer: 2,
    note: "'Bukra' betyder imorgon. 'Bukra inshallah' är ett berömt optimistiskt uttryck."
  },
  {
    arabic: "كيفك",
    roman: "kifak",
    options: ["Var är du?", "Vad heter du?", "Hur mår du?", "Vad vill du ha?"],
    answer: 2,
    note: "'Kifak' (mask.) / 'Kifik' (fem.) betyder 'Hur mår du?' — den klassiska libanesiska hälsningen."
  },
  {
    arabic: "حبيبي",
    roman: "7abibi",
    options: ["Fiende", "Granne", "Älskling", "Kollega"],
    answer: 2,
    note: "'7abibi' (mask.) / '7abibti' (fem.) betyder 'älskling' eller 'kära vän'. Används väldigt ofta."
  },
  {
    arabic: "انشالله",
    roman: "inshallah",
    options: ["Definitivt", "Om Gud vill", "Aldrig", "Absolut inte"],
    answer: 1,
    note: "'Inshallah' betyder 'om Gud vill'. Kan vara ett genuint hopp eller ett artigt avböjande."
  },
  {
    arabic: "يعني",
    roman: "ya3ni",
    options: ["Verkligen", "Aldrig", "Det vill säga", "Dessutom"],
    answer: 2,
    note: "'Ya3ni' används som 'det vill säga', 'liksom' eller 'typ' — ett vanligt fyllnadsord."
  },
  {
    arabic: "زاكي",
    roman: "zaki",
    options: ["Dyrt", "Läckert", "Bittert", "Gammalt"],
    answer: 1,
    note: "'Zaki' betyder läckert eller gott om mat. 'Ktir zaki' = väldigt gott!"
  },
  {
    arabic: "برّا",
    roman: "barra",
    options: ["Inne", "Uppe", "Utanför", "Nere"],
    answer: 2,
    note: "'Barra' betyder ute eller utanför. Motsatsen är 'jouwwa' (inne)."
  },
  {
    arabic: "ليش",
    roman: "lesh",
    options: ["Hur", "Varför", "När", "Var"],
    answer: 1,
    note: "'Lesh' är det libanesiska ordet för 'varför'. 'Lesh heyk?' = Varför så?"
  },
  {
    arabic: "وين",
    roman: "wayn",
    options: ["Vem", "Vad", "Var", "Hur"],
    answer: 2,
    note: "'Wayn' är det libanesiska ordet för 'var'. 'Wayn inta?' = Var är du?"
  },
  {
    arabic: "مين",
    roman: "meen",
    options: ["Vad", "Vem", "Var", "Varför"],
    answer: 1,
    note: "'Meen' är det libanesiska ordet för 'vem'. 'Meen huwwe?' = Vem är han?"
  },
  {
    arabic: "كمان",
    roman: "kaman",
    options: ["Aldrig", "Men", "Också", "Utan"],
    answer: 2,
    note: "'Kaman' betyder 'också' eller 'dessutom'. 'Ana kaman' = Jag med / Jag också."
  },
  {
    arabic: "بس",
    roman: "bas",
    options: ["Och", "Kanske", "Men", "Alltid"],
    answer: 2,
    note: "'Bas' kan betyda 'men', 'bara' eller 'nog'. 'Bas shwayy' = bara lite."
  },
  {
    arabic: "هيك",
    roman: "heyk",
    options: ["Ingenstans", "Ingenting", "Aldrig", "Sådär"],
    answer: 3,
    note: "'Heyk' betyder 'så' eller 'sådär'. 'Lesh heyk?' = Varför så?"
  },
  {
    arabic: "عادي",
    roman: "3adi",
    options: ["Speciellt", "Normalt", "Omöjligt", "Oväntat"],
    answer: 1,
    note: "'3adi' betyder normalt eller det är okej. '3adi, ma fi moshkle' = Det är okej, inget problem."
  },
  {
    arabic: "شوي",
    roman: "shwayy",
    options: ["Ingenting", "Allt", "Lite", "Massor"],
    answer: 2,
    note: "'Shwayy' betyder lite eller lite grann. 'Shwayy shwayy' = sakta sakta / lite i taget."
  },
  {
    arabic: "فاضي",
    roman: "fadi",
    options: ["Upptagen", "Ledig", "Trött", "Arg"],
    answer: 1,
    note: "'Fadi' (mask.) / 'Fadye' (fem.) betyder ledig eller inte upptagen. 'Inta fadi?' = Är du ledig?"
  },
  {
    arabic: "مضبوط",
    roman: "madbuu6",
    options: ["Fel", "Trasig", "Korrekt", "Konstig"],
    answer: 2,
    note: "'Madbuu6' betyder rätt, korrekt eller precis. Används för att bekräfta att något stämmer."
  },
  {
    arabic: "خلص",
    roman: "5alas",
    options: ["Börja", "Vänta", "Klart", "Fortsätt"],
    answer: 2,
    note: "'5alas' betyder klart eller färdigt. Kan också betyda 'det är över' eller 'låt det bero'."
  },
  {
    arabic: "مبسوط",
    roman: "mabsuu6",
    options: ["Ledsen", "Arg", "Nöjd", "Rädd"],
    answer: 2,
    note: "'Mabsuu6' (mask.) / 'Mabsuu6a' (fem.) betyder glad eller nöjd. 'Ana mabsuu6 ktir' = Jag är väldigt glad."
  },
  {
    arabic: "زعلان",
    roman: "za3lan",
    options: ["Glad", "Ledsen", "Förvånad", "Stolt"],
    answer: 1,
    note: "'Za3lan' (mask.) / 'Za3lane' (fem.) betyder ledsen eller upprörd. 'Lesh za3lan?' = Varför är du ledsen?"
  },
  {
    arabic: "قديش",
    roman: "addeish",
    options: ["Varför", "Hur länge", "Hur mycket", "Vad"],
    answer: 2,
    note: "'Addeish' betyder 'hur mycket' eller 'hur många'. 'Addeish el-taman?' = Hur mycket kostar det?"
  },
  {
    arabic: "طيّب",
    roman: "6ayyib",
    options: ["Nej", "Kanske", "Okej", "Nej tack"],
    answer: 2,
    note: "'6ayyib' används som en bekräftelse, ungefär som 'okej' eller 'alright' på svenska."
  },
  {
    arabic: "كلّو",
    roman: "killo",
    options: ["Ingenting", "Lite", "Allt", "Några"],
    answer: 2,
    note: "'Killo' betyder 'allt' eller 'alla'. 'Killo tamam' = allt är bra."
  },
  {
    arabic: "بحبك",
    roman: "bi7ibbak",
    options: ["Jag saknar dig", "Jag hatar dig", "Jag älskar dig", "Jag respekterar dig"],
    answer: 2,
    note: "'Bi7ibbak' (till man) / 'Bi7ibbik' (till kvinna) betyder 'jag älskar dig'."
  },
  {
    arabic: "روح",
    roman: "ruu7",
    options: ["Stanna", "Sitt ner", "Gå", "Kom tillbaka"],
    answer: 2,
    note: "'Ruu7' är imperativ för 'gå' eller 'dra iväg'. 'Ruu7, yalla' = Gå nu, skynda dig."
  },
  {
    arabic: "تعا",
    roman: "ta3a",
    options: ["Gå bort", "Titta", "Lyssna", "Kom hit"],
    answer: 3,
    note: "'Ta3a' (mask.) / 'Ta3i' (fem.) är imperativ för 'kom hit'. 'Ta3a hon' = Kom hit."
  },
  {
    arabic: "مرحبا",
    roman: "mar7aba",
    options: ["Hej då", "God natt", "Hej", "Ursäkta"],
    answer: 2,
    note: "'Mar7aba' är den vanliga hälsningen på libanesiska, som 'hej' eller 'välkommen'."
  },
  {
    arabic: "اشتقتلك",
    roman: "ishta2tillak",
    options: ["Jag glömde dig", "Jag förlåter dig", "Jag saknar dig", "Jag behöver dig"],
    answer: 2,
    note: "'Ishta2tillak' (till man) / 'Ishta2tillik' (till kvinna) betyder 'jag saknar dig'."
  },
  {
    arabic: "صباح الخير",
    roman: "saba7 el-5eer",
    options: ["God kväll", "God natt", "God morgon", "Välkommen"],
    answer: 2,
    note: "'Saba7 el-5eer' betyder 'god morgon'. Svaret är 'saba7 el-nuur' (morgon av ljus)."
  },
  {
    arabic: "مساء الخير",
    roman: "masa el-5eer",
    options: ["God morgon", "Hej", "God natt", "God kväll"],
    answer: 3,
    note: "'Masa el-5eer' betyder 'god kväll'. Svaret är 'masa el-nuur'."
  },
  {
    arabic: "لأ",
    roman: "la2",
    options: ["Ja", "Kanske", "Nej", "Aldrig"],
    answer: 2,
    note: "'La2' är det libanesiska ordet för 'nej'. Uttals med ett glottalt stopp i slutet."
  },
  {
    arabic: "آه",
    roman: "ah",
    options: ["Nej", "Kanske", "Ja", "Aldrig"],
    answer: 2,
    note: "'Ah' är det libanesiska ordet för 'ja'. Mer informellt än 'na3am' (standardarabiska)."
  },
  {
    arabic: "معلوم",
    roman: "ma3loom",
    options: ["Omöjligt", "Okänt", "Självklart", "Osäkert"],
    answer: 2,
    note: "'Ma3loom' betyder självklart eller givetvis. Används för att bekräfta något uppenbart."
  },
  {
    arabic: "ضروري",
    roman: "daruri",
    options: ["Valfritt", "Nödvändigt", "Omöjligt", "Ovanligt"],
    answer: 1,
    note: "'Daruri' betyder nödvändigt eller viktigt. 'Daruri truu7' = Det är viktigt att du åker."
  },
  {
    arabic: "نحنا",
    roman: "ni7na",
    options: ["De", "Ni", "Vi", "Jag"],
    answer: 2,
    note: "'Ni7na' är det libanesiska pronomenet för 'vi'. Standardarabiska är 'na7nu'."
  },
  {
    arabic: "انتَ",
    roman: "inta",
    options: ["Han", "Hon", "Jag", "Du"],
    answer: 3,
    note: "'Inta' är 'du' i maskulin form. Feminin form är 'inti'. Standardarabiska: 'anta/anti'."
  },
  {
    arabic: "حكي",
    roman: "7aki",
    options: ["Lyssna", "Prata", "Skriva", "Läsa"],
    answer: 1,
    note: "'7aki' betyder prata eller tal. '7kina' = Vi pratade. 'Shu el-7aki?' = Vad är snacket?"
  },
  {
    arabic: "بالهنا",
    roman: "bil-hana",
    options: ["Välkommen", "Smaklig måltid", "God tur", "Ta hand om dig"],
    answer: 1,
    note: "'Bil-hana' (kort för 'bil-hana wil-shifa') är 'smaklig måltid'. Sägs vid mat."
  },
  {
    arabic: "ع راسي",
    roman: "3a rasi",
    options: ["Jag vet inte", "Det är svårt", "Med nöjet är mitt", "Kanske"],
    answer: 2,
    note: "'3a rasi' betyder bokstavligen 'på mitt huvud'. Används för att visa total villighet att hjälpa."
  },
  {
    arabic: "تصبح على خير",
    roman: "tsba7 3a 5eer",
    options: ["God morgon", "God kväll", "Hej då", "God natt"],
    answer: 3,
    note: "'Tsba7 3a 5eer' är 'god natt'. Bokstavligen 'vakna upp till det goda'."
  },
  {
    arabic: "يسلمو",
    roman: "yislamo",
    options: ["Förlåt mig", "Grattis", "Välgjort", "Lycka till"],
    answer: 2,
    note: "'Yislamo' är ett tack för ett fint arbete eller en gåva. Bokstavligen 'må du bevaras'."
  },
  {
    arabic: "هيدا",
    roman: "hayda",
    options: ["Det där", "Ingen", "Den här", "Allt"],
    answer: 2,
    note: "'Hayda' (mask.) / 'Hayde' (fem.) betyder 'den här' eller 'det här'. 'Hayda shu?' = Vad är det här?"
  },
  {
    arabic: "جوّا",
    roman: "jouwwa",
    options: ["Ute", "Ovanför", "Nedanför", "Inne"],
    answer: 3,
    note: "'Jouwwa' betyder inne eller inuti. Motsatsen är 'barra' (ute)."
  },
  {
    arabic: "معي",
    roman: "ma3i",
    options: ["Utan mig", "Mot mig", "Med mig", "Från mig"],
    answer: 2,
    note: "'Ma3i' betyder 'med mig' eller 'jag har'. 'Ma3i massari' = Jag har pengar."
  },
  {
    arabic: "تعبت",
    roman: "ta3abt",
    options: ["Jag sov", "Jag åt", "Jag tröttnade", "Jag kom"],
    answer: 2,
    note: "'Ta3abt' är dåtidsformen — 'jag tröttnade' eller 'jag är slut nu'."
  },
  {
    arabic: "نامت",
    roman: "namet",
    options: ["Hon åt", "Hon kom", "Hon sov", "Hon gick"],
    answer: 2,
    note: "'Namet' betyder 'hon sov'. Maskulin form: 'nam' (han sov). Imperativ: 'nam' = sov!"
  },
  {
    arabic: "طلعت",
    roman: "6le3et",
    options: ["Jag kom in", "Jag åkte hem", "Jag gick ut", "Jag stannade"],
    answer: 2,
    note: "'6le3et' betyder 'jag gick ut'. '6la3' (imperativ) = gå ut / åk iväg."
  },

  // ── Andra omgången ────────────────────────────────────────────────────────

  {
    arabic: "نسيت",
    roman: "nsiit",
    options: ["Jag hittade det", "Jag förstod", "Jag glömde", "Jag minns"],
    answer: 2,
    note: "'Nsiit' är dåtidsform av 'att glömma'. 'Nsiit el-mifta7' = Jag glömde nyckeln."
  },
  {
    arabic: "وجع",
    roman: "waja3",
    options: ["Det kliar", "Det gör ont", "Det är varmt", "Det är bra"],
    answer: 1,
    note: "'Waja3' betyder smärta eller 'det gör ont'. 'Waja3 ras' = huvudvärk (används också om en jobbig person)."
  },
  {
    arabic: "كبير",
    roman: "kbir",
    options: ["Liten", "Ung", "Ny", "Stor"],
    answer: 3,
    note: "'Kbir' betyder stor eller gammal (om personer). Motsatsen är 'zghir' (liten/ung)."
  },
  {
    arabic: "زغير",
    roman: "zghir",
    options: ["Stor", "Gammal", "Lång", "Liten"],
    answer: 3,
    note: "'Zghir' betyder liten eller ung. Motsatsen är 'kbir' (stor/gammal)."
  },
  {
    arabic: "حلو",
    roman: "7elo",
    options: ["Ful", "Tråkig", "Svår", "Vacker"],
    answer: 3,
    note: "'7elo' (mask.) / '7elwe' (fem.) betyder vacker, fin eller söt. '7elwe ktir!' = Väldigt vacker!"
  },
  {
    arabic: "سريع",
    roman: "sari3",
    options: ["Sen", "Långsam", "Tidig", "Snabb"],
    answer: 3,
    note: "'Sari3' betyder snabb. 'Sari3 ktir!' = Väldigt snabb! Motsatsen är 'ba6i2' (långsam)."
  },
  {
    arabic: "بطيء",
    roman: "ba6i2",
    options: ["Snabb", "Stark", "Tyst", "Långsam"],
    answer: 3,
    note: "'Ba6i2' betyder långsam. Motsatsen är 'sari3' (snabb). 'Ba6i2 ktir' = väldigt långsam."
  },
  {
    arabic: "أكل",
    roman: "akl",
    options: ["Dryck", "Musik", "Kläder", "Mat"],
    answer: 3,
    note: "'Akl' betyder mat eller ätande. 'El-akl mni7' = Maten är god. 'Wakt el-akl' = Mattid."
  },
  {
    arabic: "ماي",
    roman: "may",
    options: ["Mjölk", "Juice", "Kaffe", "Vatten"],
    answer: 3,
    note: "'May' är det libanesiska ordet för vatten. Standardarabiska använder 'ma2'."
  },
  {
    arabic: "بيت",
    roman: "bayt",
    options: ["Skola", "Butik", "Bil", "Hem"],
    answer: 3,
    note: "'Bayt' betyder hus eller hem. 'Ruu7 3a bayt' = Åk hem. 'Baytna' = Vårt hem."
  },
  {
    arabic: "لازم",
    roman: "lazem",
    options: ["Förbjudet", "Valfritt", "Kanske", "Måste"],
    answer: 3,
    note: "'Lazem' betyder måste eller behöver. 'Lazem truu7' = Du måste åka."
  },
  {
    arabic: "ممكن",
    roman: "mumkin",
    options: ["Omöjligt", "Förbjudet", "Säkert", "Möjligt"],
    answer: 3,
    note: "'Mumkin' betyder möjligt eller 'kan jag'. 'Mumkin tsa3idni?' = Kan du hjälpa mig?"
  },
  {
    arabic: "فرحان",
    roman: "far7an",
    options: ["Ledsen", "Trött", "Arg", "Glad"],
    answer: 3,
    note: "'Far7an' (mask.) / 'Far7ane' (fem.) betyder glad. 'Ana far7an ktir' = Jag är väldigt glad."
  },
  {
    arabic: "عطشان",
    roman: "3a6shan",
    options: ["Hungrig", "Sömnig", "Mätt", "Törstig"],
    answer: 3,
    note: "'3a6shan' (mask.) / '3a6shame' (fem.) betyder törstig. 'Ana 3a6shan la may' = Jag är törstig på vatten."
  },
  {
    arabic: "جوعان",
    roman: "jou3an",
    options: ["Törstig", "Mätt", "Sömnig", "Hungrig"],
    answer: 3,
    note: "'Jou3an' (mask.) / 'Jou3ane' (fem.) betyder hungrig. 'Ana jou3an ktir' = Jag är väldigt hungrig."
  },
  {
    arabic: "إيمتى",
    roman: "emta",
    options: ["Varför", "Var", "Vem", "När"],
    answer: 3,
    note: "'Emta' är det libanesiska frågeordet för 'när'. 'Emta ra7 tiji?' = När kommer du?"
  },
  {
    arabic: "بعدين",
    roman: "ba3dein",
    options: ["Innan", "Nu", "Aldrig", "Senare"],
    answer: 3,
    note: "'Ba3dein' betyder senare eller sedan. 'Ba3dein bshoufak' = Jag ser dig senare."
  },
  {
    arabic: "دايماً",
    roman: "daymen",
    options: ["Ibland", "Aldrig", "Sällan", "Alltid"],
    answer: 3,
    note: "'Daymen' betyder alltid. 'Daymen mni7' = Alltid bra. Standardarabiska: 'da2iman'."
  },
  {
    arabic: "صديق",
    roman: "sadeek",
    options: ["Fiende", "Familj", "Granne", "Vän"],
    answer: 3,
    note: "'Sadeek' (mask.) / 'Sadee2a' (fem.) betyder vän. 'Sadeeki' = min vän."
  },
  {
    arabic: "غالي",
    roman: "ghali",
    options: ["Billig", "Vanlig", "Gammal", "Dyr"],
    answer: 3,
    note: "'Ghali' betyder dyr eller dyrbar. 'Ghali ktir' = för dyrt. 'Inta ghali 3aleyyi' = Du är dyrbar för mig."
  },
  {
    arabic: "رخيص",
    roman: "r5ees",
    options: ["Dyr", "Ny", "Gammal", "Billig"],
    answer: 3,
    note: "'R5ees' betyder billig. Motsatsen är 'ghali' (dyr). 'R5ees ktir' = väldigt billigt."
  },
  {
    arabic: "نضيف",
    roman: "ndeef",
    options: ["Smutsig", "Rörig", "Gammal", "Ren"],
    answer: 3,
    note: "'Ndeef' (mask.) / 'Ndeefe' (fem.) betyder ren eller snygg. 'El-bayt ndeef' = Huset är rent."
  },
  {
    arabic: "وسخ",
    roman: "was5",
    options: ["Ren", "Ny", "Fin", "Smutsig"],
    answer: 3,
    note: "'Was5' (mask.) / 'Was5a' (fem.) betyder smutsig. Motsatsen är 'ndeef' (ren)."
  },

  // ── Nya ord från ordlistan ────────────────────────────────────────────────

  {
    arabic: "دَهَب",
    roman: "dahab",
    options: ["Silver", "Koppar", "Järn", "Guld"],
    answer: 3,
    note: "'Dahab' betyder guld. '3omri w dahabee' = du är mitt guld — ett kärleksfullt uttryck."
  },
  {
    arabic: "طَبيب",
    roman: "6abeeb",
    options: ["Lärare", "Polis", "Läkare", "Ingenjör"],
    answer: 2,
    note: "'6abeeb' betyder läkare. Mer vardagligt säger libanesier ibland '7akeem'."
  },
  {
    arabic: "حَلم",
    roman: "7elem",
    options: ["Verklighet", "Minne", "Tanke", "Dröm"],
    answer: 3,
    note: "'7elem' betyder dröm. '7elamit' = jag drömde. Plural: 'a7leim'."
  },
  {
    arabic: "سَما",
    roman: "sama",
    options: ["Hav", "Berg", "Mark", "Himmel"],
    answer: 3,
    note: "'Sama' betyder himmel eller sky. 'El-sama zaraa2' = himlen är blå."
  },
  {
    arabic: "صيف",
    roman: "seif",
    options: ["Vinter", "Höst", "Vår", "Sommar"],
    answer: 3,
    note: "'Seif' betyder sommar. 'El-jaww 7ar bi-seif' = vädret är varmt på sommaren."
  },
  {
    arabic: "رَبيع",
    roman: "rabee3",
    options: ["Sommar", "Höst", "Vinter", "Vår"],
    answer: 3,
    note: "'Rabee3' betyder vår. Det är också ett populärt arabiskt namn."
  },
  {
    arabic: "قلب",
    roman: "2alb",
    options: ["Lever", "Hjärna", "Mage", "Hjärta"],
    answer: 3,
    note: "'2alb' betyder hjärta. '2albi' = mitt hjärta — ett kärleksfullt tilltal."
  },
  {
    arabic: "مْراية",
    roman: "mreiye",
    options: ["Fönster", "Lampa", "Dörr", "Spegel"],
    answer: 3,
    note: "'Mreiye' betyder spegel. 'Shuuf bi-l-mreiye' = titta i spegeln."
  },
  {
    arabic: "مُستَقبل",
    roman: "musta2bal",
    options: ["Det förflutna", "Nutiden", "Minnet", "Framtiden"],
    answer: 3,
    note: "'Musta2bal' betyder framtid. 'El-musta2bal 7elo' = framtiden är ljus."
  },
  {
    arabic: "عُطلة",
    roman: "3utleh",
    options: ["Jobb", "Skola", "Träning", "Ledighet"],
    answer: 3,
    note: "'3utleh' betyder ledighet eller semester. '3utlt el-seif' = sommarlovet."
  },
  {
    arabic: "بيرة",
    roman: "beera",
    options: ["Vin", "Juice", "Kaffe", "Öl"],
    answer: 3,
    note: "'Beera' betyder öl. Ordet är lånat från franskan eller engelskan."
  },
  {
    arabic: "فَراشة",
    roman: "faraasheh",
    options: ["Bi", "Myra", "Nyckelpiga", "Fjäril"],
    answer: 3,
    note: "'Faraasheh' betyder fjäril. Plural: 'faraasheet'."
  },
  {
    arabic: "إحساس",
    roman: "i7seis",
    options: ["Tanke", "Röst", "Smärta", "Känsla"],
    answer: 3,
    note: "'I7seis' betyder känsla. 'Shu 7asas?' = Vad kände du?"
  },
  {
    arabic: "رَقِم",
    roman: "ra2im",
    options: ["Bokstav", "Ord", "Mening", "Nummer"],
    answer: 3,
    note: "'Ra2im' betyder nummer eller siffra. 'Shu ra2im tilifonak?' = Vad är ditt telefonnummer?"
  },
  {
    arabic: "جيش",
    roman: "jeish",
    options: ["Polis", "Brandkår", "Regering", "Armé"],
    answer: 3,
    note: "'Jeish' betyder armé. 'El-jeish L Lubneinee' = den libanesiska armén."
  },
  {
    arabic: "أَرنَب",
    roman: "2arnab",
    options: ["Katt", "Hund", "Mus", "Kanin"],
    answer: 3,
    note: "'2arnab' betyder kanin. Plural: '2arnabeit'."
  },
  {
    arabic: "مَسجِد",
    roman: "masjid",
    options: ["Kyrka", "Synagoga", "Tempel", "Moské"],
    answer: 3,
    note: "'Masjid' betyder moské. Används om alla moskéer, stora som små."
  },
  {
    arabic: "قَريب",
    roman: "2areeb",
    options: ["Långt bort", "Bakom", "Framför", "Nära"],
    answer: 3,
    note: "'2areeb' betyder nära. '2areeb menna' = nära härifrån. Feminin: '2areebe'."
  },
  {
    arabic: "كَلام",
    roman: "kaleim",
    options: ["Musik", "Skrift", "Bild", "Prat"],
    answer: 3,
    note: "'Kaleim' betyder prat, tal eller konversation. 'Shu el-kaleim?' = Vad pratar ni om?"
  },
  {
    arabic: "عَنيد",
    roman: "3aneed",
    options: ["Snäll", "Lat", "Lugn", "Envis"],
    answer: 3,
    note: "'3aneed' (mask.) / '3aneedeh' (fem.) betyder envis. '3aneed ktir!' = väldigt envis!"
  }
];
