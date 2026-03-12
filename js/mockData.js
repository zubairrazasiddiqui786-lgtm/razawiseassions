const seedCategories = [
  { id: 1, name: "Salah", icon: "🕌", count: 4 },
  { id: 2, name: "Zakat", icon: "🤲", count: 2 },
  { id: 3, name: "Sawm", icon: "🌙", count: 2 },
  { id: 4, name: "Hajj", icon: "🕋", count: 1 },
  { id: 5, name: "Nikah", icon: "💍", count: 2 },
  { id: 6, name: "Talaq", icon: "📜", count: 1 },
  { id: 7, name: "Halal & Haram", icon: "🥘", count: 2 },
  { id: 8, name: "Aqeedah", icon: "📖", count: 2 },
  { id: 9, name: "Taharah", icon: "💧", count: 1 },
  { id: 10, name: "Business", icon: "🏪", count: 1 },
  { id: 11, name: "Wills", icon: "🧾", count: 1 },
  { id: 12, name: "Misc", icon: "✨", count: 1 },
];

const seedQaData = [
  {
    id: 1,
    slug: "late-asr-time",
    title: "Is it permissible to delay Asr until just before Maghrib?",
    question:
      "Sometimes I am busy and pray Asr very late. Is it allowed to delay it until just before Maghrib without a valid excuse?",
    answer:
      "Asr should be performed in its prescribed time. Delaying it without a valid excuse is disliked, and one should strive to pray promptly within the time window.",
    category: "Salah",
    language: "EN",
    date: "2026-02-18",
    references: "Fatawa Razawiyyah, Book of Salah.",
  },
  {
    id: 2,
    slug: "zakah-on-savings",
    title: "Do I pay zakah on savings kept for a future home?",
    question:
      "I have savings for buying a home in the future. Is zakah due on that amount each year?",
    answer:
      "If the savings reach nisab and a lunar year passes, zakah is due even if the money is earmarked for a future purchase.",
    category: "Zakat",
    language: "EN",
    date: "2026-01-05",
    references: "Bahare Shariat, Zakat.",
  },
  {
    id: 3,
    slug: "missed-fast",
    title: "What is the ruling on missed Ramadan fasts?",
    question:
      "I missed several fasts last Ramadan due to illness. How should I make them up?",
    answer:
      "Make up the missed fasts when you are able. If illness was temporary, qada is required without fidyah.",
    category: "Sawm",
    language: "EN",
    date: "2026-02-01",
    references: "Fatawa Alamgiri, Book of Fasting.",
  },
  {
    id: 4,
    slug: "hajj-mahram",
    title: "Is a mahram required for Hajj travel?",
    question:
      "A woman intends to perform Hajj. Is it mandatory to travel with a mahram?",
    answer:
      "A trustworthy mahram or husband is required for the journey, according to the majority Sunni position.",
    category: "Hajj",
    language: "EN",
    date: "2026-02-10",
    references: "Bahare Shariat, Hajj.",
  },
  {
    id: 5,
    slug: "nikah-wali",
    title: "Can a nikah be performed without a wali?",
    question:
      "If an adult woman agrees to a marriage, can it be done without a wali present?",
    answer:
      "A wali is required for a valid nikah in the Sunni Hanafi tradition, with proper witnesses and consent.",
    category: "Nikah",
    language: "EN",
    date: "2026-02-14",
    references: "Fatawa Razawiyyah, Nikah.",
  },
  {
    id: 6,
    slug: "triple-talaq",
    title: "What is the ruling on triple talaq in one sitting?",
    question:
      "A husband pronounced talaq three times at once. What is the ruling?",
    answer:
      "In the Hanafi school, three pronouncements in one sitting count as three and the divorce is finalized.",
    category: "Talaq",
    language: "EN",
    date: "2026-02-22",
    references: "Fatawa Alamgiri, Talaq.",
  },
  {
    id: 7,
    slug: "halal-supplements",
    title: "Are gelatin supplements halal?",
    question:
      "Do gelatin capsules make supplements impermissible?",
    answer:
      "If the gelatin is from a halal source and properly processed, it is permissible. Otherwise, it should be avoided.",
    category: "Halal & Haram",
    language: "EN",
    date: "2026-01-20",
    references: "Bahare Shariat, Halal & Haram.",
  },
  {
    id: 8,
    slug: "aqeedah-dua",
    title: "Is asking the Prophet ﷺ for intercession allowed?",
    question:
      "Some people ask the Prophet ﷺ for intercession in their dua. Is this allowed?",
    answer:
      "Seeking intercession is a recognized practice within Ahlus Sunnah, done with proper etiquette and belief.",
    category: "Aqeedah",
    language: "EN",
    date: "2026-02-05",
    references: "Fatawa Razawiyyah, Aqeedah.",
  },
  {
    id: 9,
    slug: "taharah-wudu",
    title: "Does bleeding from a cut break wudu?",
    question:
      "If blood flows from a cut, does it invalidate wudu?",
    answer:
      "In the Hanafi school, flowing blood breaks wudu and it should be renewed.",
    category: "Taharah",
    language: "EN",
    date: "2026-01-28",
    references: "Bahare Shariat, Taharah.",
  },
  {
    id: 10,
    slug: "business-credit-card",
    title: "Is it permissible to use a credit card?",
    question:
      "I use a credit card and pay it off monthly. Is this allowed?",
    answer:
      "If no interest is incurred and payments are made in full, it is generally permissible. One must avoid interest-based charges.",
    category: "Business",
    language: "EN",
    date: "2026-02-08",
    references: "Fatawa Alamgiri, Business معاملات.",
  },
  {
    id: 11,
    slug: "wills-inheritance",
    title: "How much can be willed to non-heirs?",
    question:
      "What is the maximum portion that can be willed to a non-heir?",
    answer:
      "Up to one-third of the estate can be willed to non-heirs unless heirs consent to more.",
    category: "Wills",
    language: "EN",
    date: "2026-02-02",
    references: "Bahare Shariat, Inheritance.",
  },
  {
    id: 12,
    slug: "misc-adhan-apps",
    title: "Can I rely on adhan apps for prayer time?",
    question:
      "Are adhan apps reliable for prayer timings?",
    answer:
      "They are a helpful tool but should be aligned with reliable local timings and masjid schedules.",
    category: "Misc",
    language: "EN",
    date: "2026-02-26",
    references: "General guidance from scholars.",
  },
  {
    id: 13,
    slug: "salah-jamaah",
    title: "Is praying in congregation mandatory for men?",
    question:
      "Is Salah in congregation mandatory for men in all cases?",
    answer:
      "Congregation is highly emphasized. While it is strongly recommended, one should not neglect it without a valid reason.",
    category: "Salah",
    language: "UR",
    date: "2026-01-12",
    references: "فتاویٰ رضویہ، کتاب الصلاۃ.",
  },
  {
    id: 14,
    slug: "salah-travel",
    title: "How to pray when traveling by plane?",
    question:
      "If I am on a long flight, how do I pray my Salah?",
    answer:
      "If possible, pray standing and facing the qiblah. Otherwise, pray seated with the best possible direction.",
    category: "Salah",
    language: "EN",
    date: "2026-01-18",
    references: "Bahare Shariat, Salah.",
  },
  {
    id: 15,
    slug: "sawm-fidya",
    title: "Who is eligible to pay fidyah for fasting?",
    question:
      "If someone is chronically ill, can they pay fidyah instead of fasting?",
    answer:
      "Yes, those who cannot fast due to permanent illness may pay fidyah for each missed fast.",
    category: "Sawm",
    language: "EN",
    date: "2026-02-04",
    references: "Fatawa Alamgiri, Fasting.",
  },
  {
    id: 16,
    slug: "zakat-business-stock",
    title: "Is zakah due on business inventory?",
    question:
      "Do I have to pay zakah on goods kept for sale?",
    answer:
      "Yes, business inventory is zakatable at its market value when the zakah year completes.",
    category: "Zakat",
    language: "EN",
    date: "2026-02-09",
    references: "Bahare Shariat, Zakat.",
  },
  {
    id: 17,
    slug: "aqeedah-knowledge",
    title: "Why is correct Aqeedah essential?",
    question:
      "How important is correct Aqeedah in daily practice?",
    answer:
      "Correct Aqeedah is the foundation of faith, guiding worship and protecting belief from deviation.",
    category: "Aqeedah",
    language: "AR",
    date: "2026-01-30",
    references: "العقيدة الطحاوية.",
  },
  {
    id: 18,
    slug: "halal-earnings",
    title: "Is income from unclear sources acceptable?",
    question:
      "My income includes some doubtful elements. What should I do?",
    answer:
      "One should avoid doubtful earnings, seek halal alternatives, and repent for any doubtful income.",
    category: "Halal & Haram",
    language: "EN",
    date: "2026-02-15",
    references: "Fatawa Razawiyyah, Halal & Haram.",
  },
  {
    id: 19,
    slug: "nikah-mahr",
    title: "Is specifying mahr mandatory in nikah?",
    question:
      "Is it valid if mahr is not explicitly specified in the nikah?",
    answer:
      "Nikah is valid even if mahr is not specified, but a customary mahr becomes due.",
    category: "Nikah",
    language: "EN",
    date: "2026-02-19",
    references: "Bahare Shariat, Nikah.",
  },
  {
    id: 20,
    slug: "salah-witr",
    title: "Is Witr wajib or sunnah?",
    question:
      "What is the ruling of Witr prayer in the Hanafi school?",
    answer:
      "Witr is wajib in the Hanafi school and should be performed nightly after Isha.",
    category: "Salah",
    language: "EN",
    date: "2026-02-24",
    references: "Fatawa Razawiyyah, Salah.",
  },
];

let categories = [...seedCategories];
let qaData = [...seedQaData];
