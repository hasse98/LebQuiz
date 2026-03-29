// Full question bank — Lebanese Arabic → Swedish
// 58 questions; 15 are selected daily via a seeded shuffle

const ALL_QUESTIONS = [
  {
    arabic: "يلّا",
    roman: "yalla",
    options: ["God morgon", "Kör igång / Kom igen", "Tack", "Förlåt"],
    answer: 1,
    note: "Ett av de vanligaste orden på libanesiska — det betyder 'kom igen', 'kör på' eller 'skynda dig'."
  },
  {
    arabic: "كتير",
    roman: "ktīr",
    options: ["Lite", "Aldrig", "Mycket / Väldigt", "Ibland"],
    answer: 2,
    note: "'Ktīr' betyder 'mycket' eller 'väldigt'. T.ex. 'ktīr mniḥ' = väldigt bra."
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
    roman: "mniḥ",
    options: ["Dålig", "Bra / Okej", "Konstig", "Trött"],
    answer: 1,
    note: "'Mniḥ' betyder bra eller okej. Ett vanligt svar på 'Kifak?' (Hur mår du?)."
  },
  {
    arabic: "هلق",
    roman: "halla'",
    options: ["Igår", "Senare", "Nu", "Alltid"],
    answer: 2,
    note: "'Halla'' betyder 'nu'. Motsvarar Modern Standardarabiska 'al-ān'."
  },
  {
    arabic: "عنجد",
    roman: "'anjad",
    options: ["Kanske", "Verkligen? / Seriöst?", "Självklart", "Jag vet inte"],
    answer: 1,
    note: "'Anjad' betyder 'verkligen' eller 'seriöst'. Används både som påstående och fråga."
  },
  {
    arabic: "بدّي",
    roman: "baddī",
    options: ["Jag vet inte", "Jag glömde", "Jag vill", "Jag kom"],
    answer: 2,
    note: "'Baddī' betyder 'jag vill'. 'Baddak' = du vill, 'baddha' = hon vill."
  },
  {
    arabic: "تعبان",
    roman: "ta'bān",
    options: ["Glad", "Hungrig", "Trött / Sjuk", "Uttråkad"],
    answer: 2,
    note: "'Ta'bān' betyder trött eller sjuk. 'Ana ta'bān' = Jag är trött."
  },
  {
    arabic: "شاطر",
    roman: "shāṭer",
    options: ["Lat", "Duktig / Smart", "Otrevlig", "Tyst"],
    answer: 1,
    note: "'Shāṭer' betyder duktig eller bra jobbat. Föräldrar säger det ofta för att berömma barn."
  },
  {
    arabic: "مش",
    roman: "mish",
    options: ["Ja", "Också", "Inte / Är inte", "Men"],
    answer: 2,
    note: "'Mish' är negationsprefixet. 'Mish mniḥ' = inte bra."
  },
  {
    arabic: "فوت",
    roman: "fūt",
    options: ["Gå ut", "Kom in / Gå in", "Sätt dig", "Titta"],
    answer: 1,
    note: "'Fūt' betyder 'kom in' eller 'gå in'. 'Fūt la jouwwa' = kom in."
  },
  {
    arabic: "صحتين",
    roman: "saḥtēn",
    options: ["När någon nyser", "Som en skål / efter en måltid", "God natt", "Grattis"],
    answer: 1,
    note: "'Saḥtēn' betyder bokstavligen 'två hälsor'. Sägs som en skål eller när någon är klar med sin mat."
  },
  {
    arabic: "روق",
    roman: "rūq",
    options: ["Skynda dig", "Var tyst", "Lugna ner dig / Ta det lugnt", "Gå iväg"],
    answer: 2,
    note: "'Rūq' betyder slappna av eller lugna ner. 'Rūq shwayy' = ta det lite lugnt."
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
    roman: "kīfak",
    options: ["Var är du?", "Vad heter du?", "Hur mår du?", "Vad vill du ha?"],
    answer: 2,
    note: "'Kīfak' (mask.) / 'Kīfik' (fem.) betyder 'Hur mår du?' — den klassiska libanesiska hälsningen."
  },
  {
    arabic: "حبيبي",
    roman: "ḥabībī",
    options: ["Fiende", "Granne", "Älskling / Vän", "Kollega"],
    answer: 2,
    note: "'Ḥabībī' (mask.) / 'Ḥabībti' (fem.) betyder 'älskling' eller 'kära vän'. Används väldigt ofta."
  },
  {
    arabic: "انشالله",
    roman: "inshallah",
    options: ["Definitivt", "Om Gud vill / Förhoppningsvis", "Aldrig", "Absolut inte"],
    answer: 1,
    note: "'Inshallah' betyder 'om Gud vill'. Kan vara ett genuint hopp eller ett artigt avböjande."
  },
  {
    arabic: "يعني",
    roman: "ya'ni",
    options: ["Verkligen", "Aldrig", "Det vill säga / Typ", "Dessutom"],
    answer: 2,
    note: "'Ya'ni' används som 'det vill säga', 'liksom' eller 'typ' — ett vanligt fyllnadsord."
  },
  {
    arabic: "زاكي",
    roman: "zāki",
    options: ["Dyrt", "Läckert / Gott", "Bittert", "Gammalt"],
    answer: 1,
    note: "'Zāki' betyder läckert eller gott om mat. 'Ktīr zāki' = väldigt gott!"
  },
  {
    arabic: "برّا",
    roman: "barra",
    options: ["Inne", "Uppe", "Ute / Utanför", "Nere"],
    answer: 2,
    note: "'Barra' betyder ute eller utanför. Motsatsen är 'jouwwa' (inne)."
  },
  {
    arabic: "ليش",
    roman: "lēsh",
    options: ["Hur", "Varför", "När", "Var"],
    answer: 1,
    note: "'Lēsh' är det libanesiska ordet för 'varför'. 'Lēsh hēk?' = Varför så?"
  },
  {
    arabic: "وين",
    roman: "wēn",
    options: ["Vem", "Vad", "Var", "Hur"],
    answer: 2,
    note: "'Wēn' är det libanesiska ordet för 'var'. 'Wēn inta?' = Var är du?"
  },
  {
    arabic: "مين",
    roman: "mīn",
    options: ["Vad", "Vem", "Var", "Varför"],
    answer: 1,
    note: "'Mīn' är det libanesiska ordet för 'vem'. 'Mīn huwwe?' = Vem är han?"
  },
  {
    arabic: "كمان",
    roman: "kamān",
    options: ["Aldrig", "Men", "Också / Dessutom", "Utan"],
    answer: 2,
    note: "'Kamān' betyder 'också' eller 'dessutom'. 'Ana kamān' = Jag med / Jag också."
  },
  {
    arabic: "بس",
    roman: "bas",
    options: ["Och", "Kanske", "Men / Bara", "Alltid"],
    answer: 2,
    note: "'Bas' kan betyda 'men', 'bara' eller 'nog'. 'Bas shwayy' = bara lite."
  },
  {
    arabic: "هيك",
    roman: "hēk",
    options: ["Ingenstans", "Ingenting", "Aldrig", "Så / Sådär"],
    answer: 3,
    note: "'Hēk' betyder 'så' eller 'sådär'. 'Lēsh hēk?' = Varför så?"
  },
  {
    arabic: "عادي",
    roman: "'ādi",
    options: ["Speciellt", "Normalt / Det är okej", "Omöjligt", "Oväntat"],
    answer: 1,
    note: "'Ādi' betyder normalt eller det är okej. 'Ādi, mā fi moshkle' = Det är okej, inget problem."
  },
  {
    arabic: "شوي",
    roman: "shwayy",
    options: ["Ingenting", "Allt", "Lite / Lite grann", "Massor"],
    answer: 2,
    note: "'Shwayy' betyder lite eller lite grann. 'Shwayy shwayy' = sakta sakta / lite i taget."
  },
  {
    arabic: "فاضي",
    roman: "fādi",
    options: ["Upptagen", "Ledig / Inte upptagen", "Trött", "Arg"],
    answer: 1,
    note: "'Fādi' (mask.) / 'Fādye' (fem.) betyder ledig eller inte upptagen. 'Inta fādi?' = Är du ledig?"
  },
  {
    arabic: "مضبوط",
    roman: "maḍbūṭ",
    options: ["Fel", "Trasig", "Rätt / Korrekt", "Konstig"],
    answer: 2,
    note: "'Maḍbūṭ' betyder rätt, korrekt eller precis. Används för att bekräfta att något stämmer."
  },
  {
    arabic: "خلص",
    roman: "khalaṣ",
    options: ["Börja", "Vänta", "Klart / Färdigt", "Fortsätt"],
    answer: 2,
    note: "'Khalaṣ' betyder klart eller färdigt. Kan också betyda 'det är över' eller 'låt det bero'."
  },
  {
    arabic: "مبسوط",
    roman: "mabsūṭ",
    options: ["Ledsen", "Arg", "Glad / Nöjd", "Rädd"],
    answer: 2,
    note: "'Mabsūṭ' (mask.) / 'Mabsūṭa' (fem.) betyder glad eller nöjd. 'Ana mabsūṭ ktīr' = Jag är väldigt glad."
  },
  {
    arabic: "زعلان",
    roman: "za'lān",
    options: ["Glad", "Ledsen / Upprörd", "Förvånad", "Stolt"],
    answer: 1,
    note: "'Za'lān' (mask.) / 'Za'lāne' (fem.) betyder ledsen eller upprörd. 'Lēsh za'lān?' = Varför är du ledsen?"
  },
  {
    arabic: "قديش",
    roman: "addēsh",
    options: ["Varför", "Hur länge", "Hur mycket / Hur många", "Vad"],
    answer: 2,
    note: "'Addēsh' betyder 'hur mycket' eller 'hur många'. 'Addēsh el-taman?' = Hur mycket kostar det?"
  },
  {
    arabic: "طيّب",
    roman: "ṭayyib",
    options: ["Nej", "Kanske", "Okej / Bra", "Nej tack"],
    answer: 2,
    note: "'Ṭayyib' används som en bekräftelse, ungefär som 'okej' eller 'alright' på svenska."
  },
  {
    arabic: "كلّو",
    roman: "killo",
    options: ["Ingenting", "Lite", "Allt / Alla", "Några"],
    answer: 2,
    note: "'Killo' betyder 'allt' eller 'alla'. 'Killo tamām' = allt är bra."
  },
  {
    arabic: "بحبك",
    roman: "biḥibbak",
    options: ["Jag saknar dig", "Jag hatar dig", "Jag älskar dig", "Jag respekterar dig"],
    answer: 2,
    note: "'Biḥibbak' (till man) / 'Biḥibbik' (till kvinna) betyder 'jag älskar dig'."
  },
  {
    arabic: "روح",
    roman: "rūḥ",
    options: ["Stanna", "Sitt ner", "Gå / Dra iväg", "Kom tillbaka"],
    answer: 2,
    note: "'Rūḥ' är imperativ för 'gå' eller 'dra iväg'. 'Rūḥ, yalla' = Gå nu, skynda dig."
  },
  {
    arabic: "تعا",
    roman: "ta'a",
    options: ["Gå bort", "Titta", "Lyssna", "Kom hit"],
    answer: 3,
    note: "'Ta'a' (mask.) / 'Ta'i' (fem.) är imperativ för 'kom hit'. 'Ta'a hon' = Kom hit."
  },
  {
    arabic: "مرحبا",
    roman: "marḥaba",
    options: ["Hej då", "God natt", "Hej / Välkommen", "Ursäkta"],
    answer: 2,
    note: "'Marḥaba' är den vanliga hälsningen på libanesiska, som 'hej' eller 'välkommen'."
  },
  {
    arabic: "اشتقتلك",
    roman: "ishtaqtillak",
    options: ["Jag glömde dig", "Jag förlåter dig", "Jag saknar dig", "Jag behöver dig"],
    answer: 2,
    note: "'Ishtaqtillak' (till man) / 'Ishtaqtillik' (till kvinna) betyder 'jag saknar dig'."
  },
  {
    arabic: "صباح الخير",
    roman: "ṣabāḥ el-khēr",
    options: ["God kväll", "God natt", "God morgon", "Välkommen"],
    answer: 2,
    note: "'Ṣabāḥ el-khēr' betyder 'god morgon'. Svaret är 'ṣabāḥ el-nūr' (morgon av ljus)."
  },
  {
    arabic: "مساء الخير",
    roman: "masā el-khēr",
    options: ["God morgon", "Hej", "God natt", "God kväll"],
    answer: 3,
    note: "'Masā el-khēr' betyder 'god kväll'. Svaret är 'masā el-nūr'."
  },
  {
    arabic: "لأ",
    roman: "la'",
    options: ["Ja", "Kanske", "Nej", "Aldrig"],
    answer: 2,
    note: "'La'' är det libanesiska ordet för 'nej'. Uttals med ett glottalt stopp i slutet."
  },
  {
    arabic: "آه",
    roman: "āh",
    options: ["Nej", "Kanske", "Ja", "Aldrig"],
    answer: 2,
    note: "'Āh' är det libanesiska ordet för 'ja'. Mer informellt än 'na'am' (standardarabiska)."
  },
  {
    arabic: "معلوم",
    roman: "ma'lūm",
    options: ["Omöjligt", "Okänt", "Självklart / Givetvis", "Osäkert"],
    answer: 2,
    note: "'Ma'lūm' betyder självklart eller givetvis. Används för att bekräfta något uppenbart."
  },
  {
    arabic: "ضروري",
    roman: "ḍarūri",
    options: ["Valfritt", "Nödvändigt / Viktigt", "Omöjligt", "Ovanligt"],
    answer: 1,
    note: "'Ḍarūri' betyder nödvändigt eller viktigt. 'Ḍarūri trūḥ' = Det är viktigt att du åker."
  },
  {
    arabic: "نحنا",
    roman: "niḥna",
    options: ["De", "Ni", "Vi", "Jag"],
    answer: 2,
    note: "'Niḥna' är det libanesiska pronomenet för 'vi'. Standardarabiska är 'naḥnu'."
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
    roman: "ḥaki",
    options: ["Lyssna", "Prata / Tal", "Skriva", "Läsa"],
    answer: 1,
    note: "'Ḥaki' betyder prata eller tal. 'Ḥkīna' = Vi pratade. 'Shu el-ḥaki?' = Vad är snacket?"
  },
  {
    arabic: "بالهنا",
    roman: "bil-hanā",
    options: ["Välkommen", "Smaklig måltid", "God tur", "Ta hand om dig"],
    answer: 1,
    note: "'Bil-hanā' (kort för 'bil-hanā wil-shifā') är 'smaklig måltid'. Sägs vid mat."
  },
  {
    arabic: "ع راسي",
    roman: "'a rāsi",
    options: ["Jag vet inte", "Det är svårt", "Absolut / Med nöjet är mitt", "Kanske"],
    answer: 2,
    note: "'A rāsi' betyder bokstavligen 'på mitt huvud'. Används för att visa total villighet att hjälpa."
  },
  {
    arabic: "تصبح على خير",
    roman: "tiṣbaḥ 'ala khēr",
    options: ["God morgon", "God kväll", "Hej då", "God natt"],
    answer: 3,
    note: "'Tiṣbaḥ 'ala khēr' är 'god natt'. Bokstavligen 'vakna upp till det goda'."
  },
  {
    arabic: "يسلمو",
    roman: "yislamu",
    options: ["Förlåt mig", "Grattis", "Tack / Välgjort", "Lycka till"],
    answer: 2,
    note: "'Yislamu' är ett tack för ett fint arbete eller en gåva. Bokstavligen 'må du bevaras'."
  },
  {
    arabic: "هيدا",
    roman: "hayda",
    options: ["Det där / Den där", "Ingen", "Den här / Det här", "Allt"],
    answer: 2,
    note: "'Hayda' (mask.) / 'Hayde' (fem.) betyder 'den här' eller 'det här'. 'Hayda shu?' = Vad är det här?"
  },
  {
    arabic: "جوّا",
    roman: "jouwwa",
    options: ["Ute", "Ovanför", "Nedanför", "Inne / Inuti"],
    answer: 3,
    note: "'Jouwwa' betyder inne eller inuti. Motsatsen är 'barra' (ute)."
  },
  {
    arabic: "معي",
    roman: "ma'i",
    options: ["Utan mig", "Mot mig", "Med mig / Jag har", "Från mig"],
    answer: 2,
    note: "'Ma'i' betyder 'med mig' eller 'jag har'. 'Ma'i massari' = Jag har pengar."
  },
  {
    arabic: "تعبت",
    roman: "ta'abt",
    options: ["Jag sov", "Jag åt", "Jag tröttnade / Jag blev trött", "Jag kom"],
    answer: 2,
    note: "'Ta'abt' är dåtidsformen — 'jag tröttnade' eller 'jag är slut nu'."
  },
  {
    arabic: "نامت",
    roman: "nāmet",
    options: ["Hon åt", "Hon kom", "Hon sov", "Hon gick"],
    answer: 2,
    note: "'Nāmet' betyder 'hon sov'. Maskulin form: 'nām' (han sov). Imperativ: 'nām' = sov!"
  },
  {
    arabic: "طلعت",
    roman: "ṭle'et",
    options: ["Jag kom in", "Jag åkte hem", "Jag gick ut", "Jag stannade"],
    answer: 2,
    note: "'Ṭle'et' betyder 'jag gick ut'. 'Ṭle'' (imperativ) = gå ut / åk iväg."
  }
];
