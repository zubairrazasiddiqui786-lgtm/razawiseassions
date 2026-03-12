const LanguageSwitcher = (() => {
  const rtlLangs = ["ur", "ar"];
  const dict = {
    en: {
      home: "Home",
      categories: "Categories",
      search: "Search",
      ask: "Ask",
      about: "About",
      donate: "Donate",
      profile: "Profile",
      heroTitle: "Clarity. Accuracy. Guidance for every seeker.",
      heroSub:
        "RazawiSeassion connects you with verified Ahle Sunnah answers, curated with classical references and scholarly review.",
      browse: "Browse Categories",
      askBtn: "Ask a Question",
    },
    ur: {
      home: "ہوم",
      categories: "اقسام",
      search: "تلاش",
      ask: "سوال",
      about: "تعارف",
      donate: "عطیہ",
      profile: "پروفائل",
      heroTitle: "وضاحت۔ درستی۔ رہنمائی ہر طالب کے لیے۔",
      heroSub:
        "RazawiSeassion آپ کو مستند اہلسنت جوابات فراہم کرتا ہے، مستند مصادر اور تحقیقی نگرانی کے ساتھ۔",
      browse: "اقسام دیکھیں",
      askBtn: "سوال کریں",
    },
    ar: {
      home: "الرئيسية",
      categories: "التصنيفات",
      search: "بحث",
      ask: "اسأل",
      about: "حول",
      donate: "تبرع",
      profile: "الملف",
      heroTitle: "وضوح. دقة. هداية لكل طالب.",
      heroSub:
        "RazawiSeassion يربطك بإجابات أهل السنة الموثوقة مع المراجع الكلاسيكية والمراجعة العلمية.",
      browse: "تصفح التصنيفات",
      askBtn: "اطرح سؤالاً",
    },
  };

  const applyLanguage = (lang) => {
    document.documentElement.lang = lang;
    if (rtlLangs.includes(lang)) {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    applyText(lang);
  };

  const applyText = (lang) => {
    const strings = dict[lang] || dict.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (!strings[key]) return;
      if (el.tagName.toLowerCase() === "a" && el.dataset.route) {
        const icon = el.querySelector(".material-symbols-outlined");
        const textNode = el.querySelector("span:last-child") || el.childNodes[1];
        if (icon && textNode) {
          if (textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = strings[key];
          } else {
            textNode.textContent = strings[key];
          }
        }
      } else {
        el.textContent = strings[key];
      }
    });
  };

  const init = () => {
    const saved = localStorage.getItem("rs-lang") || "en";
    const select = document.getElementById("langSwitcher");
    select.value = saved;
    applyLanguage(saved);
    select.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("rs-lang", lang);
      applyLanguage(lang);
    });
  };

  return { init, applyLanguage };
})();
