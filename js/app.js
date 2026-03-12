const App = (() => {
  const appRoot = document.getElementById("app");
  let selectedCategory = "All";
  // Swap page content with a gentle fade transition.
  const fadeSwap = (html) => {
    appRoot.classList.remove("fade-enter");
    void appRoot.offsetWidth;
    appRoot.innerHTML = html;
    appRoot.classList.add("fade-enter");
    initReveals();
    const savedLang = localStorage.getItem("rs-lang") || "en";
    if (LanguageSwitcher && LanguageSwitcher.applyLanguage) {
      LanguageSwitcher.applyLanguage(savedLang);
    }
  };

  const initReveals = () => {
    const elements = appRoot.querySelectorAll(".reveal");
    if (!elements.length) return;
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("show"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
  };

  const renderHome = () => {
    const latest = qaData.slice(0, 6);
    const features = [
      {
        icon: '<span class="material-symbols-outlined">bolt</span>',
        title: "Lightning Fast Experience",
        desc: "Instant answers with a smooth, focused reading experience.",
      },
      {
        icon: '<span class="material-symbols-outlined">install_mobile</span>',
        title: "Progressive Web App",
        desc: "Optimized for mobile, ready for offline access and quick loading.",
      },
      {
        icon: '<span class="material-symbols-outlined">verified_user</span>',
        title: "Authentic Ahle Sunnah Guidance",
        desc: "Rooted in classical scholarship with trusted references.",
      },
      {
        icon: '<span class="material-symbols-outlined">search</span>',
        title: "Easy Search and Navigation",
        desc: "Find answers quickly through clean categories and filters.",
      },
      {
        icon: '<span class="material-symbols-outlined">language</span>',
        title: "Multilingual Support",
        desc: "Read answers in English, Urdu, and Arabic.",
      },
      {
        icon: '<span class="material-symbols-outlined">contact_support</span>',
        title: "Ask Your Questions",
        desc: "Submit your queries and receive authentic guidance.",
      },
    ];

    fadeSwap(`
      <section class="hero">
        <div class="hero-pattern" aria-hidden="true"></div>
        <div class="hero-orb" aria-hidden="true"></div>
        <div class="hero-grid">
          <div class="reveal">
            <span class="hero-badge">
              <span class="material-symbols-outlined">verified</span>
              Authentic Sunnah Guidance
            </span>
            <h1 data-i18n="heroTitle">Clarity. Accuracy. Guidance for every seeker.</h1>
            <p data-i18n="heroSub">
              RazawiSeassion connects you with verified Ahle Sunnah answers, curated with
              classical references and scholarly review.
            </p>
            <div class="hero-cta">
              <a href="#categories" class="btn primary" data-i18n="browse">Browse Categories</a>
              <a href="#ask" class="btn outline" data-i18n="askBtn">Ask a Question</a>
            </div>
            <div class="hero-stats">
              <div class="stat">
                <strong>${qaData.length}</strong>
                <span class="muted">Q&amp;A</span>
              </div>
              <div class="stat">
                <strong>${categories.length}</strong>
                <span class="muted">Categories</span>
              </div>
              <div class="stat">
                <strong>3</strong>
                <span class="muted">Languages</span>
              </div>
            </div>
          </div>
          <div class="hero-media">
            <div class="hero-card reveal">
              <span class="material-symbols-outlined">workspace_premium</span>
              <h3>Scholars Verified</h3>
              <p class="muted">
                Every response is mapped to classical sources and reviewed for correctness.
              </p>
            </div>
            <div class="hero-card reveal">
              <span class="material-symbols-outlined">search_insights</span>
              <h3>Precision Search</h3>
              <p class="muted">
                Navigate rulings quickly with category filters and language support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="page-inner">
        <section class="section reveal">
          <div class="section-title">
            <span class="dot"></span>
            <h2>Why RazawiSeassion</h2>
          </div>
          <div class="grid three">
            ${features
              .map(
                (f) => `
              <div class="card feature-card soft">
                <div class="feature-icon">${f.icon}</div>
                <h3>${f.title}</h3>
                <p class="muted">${f.desc}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </section>

        <section class="section reveal">
          <div class="section-title">
            <span class="dot"></span>
            <h2>Clearer Guidance</h2>
          </div>
          <div class="grid two">
            <div class="card compare-card soft">
              <h3>RazawiSeassion</h3>
              <ul class="compare-list">
                <li>Follows Ahlus Sunnah wal Jamaah</li>
                <li>Evidence from classical books</li>
                <li>Ask your own question</li>
                <li>Correct Aqeedah and Fiqh</li>
                <li>Multilingual fatwas</li>
                <li>Explore four madhahib</li>
              </ul>
            </div>
            <div class="card compare-card alt soft">
              <h3>Others</h3>
              <ul class="compare-list">
                <li>Mixed sect ideologies</li>
                <li>Fatwas without scholarly chain</li>
                <li>Modernist / Wahabi influence</li>
                <li>Weak Aqeedah understanding</li>
                <li>Copy-paste rulings</li>
                <li>Blind fatwas</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="section reveal">
          <div class="section-header">
            <div class="section-title">
              <span class="dot"></span>
              <h2>Latest Q&amp;A</h2>
            </div>
            <a href="#search" class="muted">Search all</a>
          </div>
          <div class="grid three qa-grid">
            ${latest
              .map(
                (item) => `
              <div class="card soft">
                <span class="badge">${item.category}</span>
                <h3>${item.title}</h3>
                <p class="muted">${item.answer}</p>
                <div class="latest-meta">
                  <span>${item.date}</span>
                  <a href="#question/${item.slug}">Read More</a>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </section>
      </div>
    `);
  };

  const updateCategoryCounts = () => {
    const counts = qaData.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
    categories = categories.map((cat) => ({
      ...cat,
      count: counts[cat.name] || 0,
    }));
  };

  const renderCategories = () => {
    const categoryCards = categories
      .map(
        (cat) => `
        <button class="card category-card soft" data-category="${cat.name}">
          <div class="category-icon">${cat.icon}</div>
          <h3>${cat.name}</h3>
          <p class="muted">${cat.count} questions</p>
        </button>
      `
      )
      .join("");

    const chips = ["All", ...categories.map((c) => c.name)]
      .map(
        (name) => `
        <button class="filter-chip ${selectedCategory === name ? "active" : ""}" data-chip="${name}">
          ${name}
        </button>
      `
      )
      .join("");

    const list = qaData
      .filter((qa) => selectedCategory === "All" || qa.category === selectedCategory)
      .map(
        (qa) => `
          <div class="card soft">
            <span class="badge">${qa.category}</span>
            <h3>${qa.title}</h3>
            <p class="muted">${qa.answer}</p>
            <div class="latest-meta">
              <span>${qa.date}</span>
              <a href="#question/${qa.slug}">Read More</a>
            </div>
          </div>
        `
      )
      .join("");

    fadeSwap(`
      <section>
        <div class="section-title">
          <span class="dot"></span>
          <h2>Browse Categories</h2>
        </div>
        <div class="grid three category-grid">
          ${categoryCards}
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <div class="section-title">
            <span class="dot"></span>
            <h2>Questions</h2>
          </div>
          <span class="badge">${selectedCategory}</span>
        </div>
        <div class="filter-bar">
          ${chips}
        </div>
        <div class="grid three qa-grid" id="categoryResults">
          ${list || `<p class="muted">No questions found.</p>`}
        </div>
      </section>
    `);

    appRoot.querySelectorAll(".category-card").forEach((card) => {
      card.addEventListener("click", () => {
        selectedCategory = card.dataset.category;
        renderCategories();
      });
    });

    appRoot.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        selectedCategory = chip.dataset.chip;
        renderCategories();
      });
    });
  };

  const renderQuestion = (slug) => {
    const item = qaData.find((qa) => qa.slug === slug);
    if (!item) {
      fadeSwap(`<p class="muted">Question not found.</p>`);
      return;
    }
    const related = qaData
      .filter((qa) => qa.category === item.category && qa.slug !== item.slug)
      .slice(0, 4);

    fadeSwap(`
      <button class="btn outline" onclick="history.back()">&larr; Back</button>
      <div class="question-layout section">
        <div>
          <div class="badge">${item.category}</div>
          <div class="badge">${item.language}</div>
          <h1>${item.title}</h1>
          <p class="muted">${item.question}</p>
          <div class="divider"></div>
          <div class="answer-box">
            <h3>Scholars Answer</h3>
            <p>${item.answer}</p>
          </div>
          <p class="references">${item.references}</p>
          <p class="muted small">${item.date}</p>
        </div>
        <aside class="card">
          <h3>Related Questions</h3>
          <div class="related-list">
            ${related
              .map((qa) => `<a href="#question/${qa.slug}">${qa.title}</a>`)
              .join("")}
          </div>
        </aside>
      </div>
    `);
  };

  const renderAsk = () => {
    fadeSwap(`
      <section class="section">
        <div class="section-title">
          <span class="dot"></span>
          <h2>Submit Your Question</h2>
        </div>
        <div class="card form-card soft">
          <form id="askForm" novalidate>
            <div class="form-group">
              <label for="name">Name (optional)</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="email">Email (optional)</label>
              <input id="email" type="email" placeholder="you@example.com" />
              <span class="error-text" data-error="email"></span>
            </div>
            <div class="form-group" data-field="category">
              <label for="category">Category</label>
              <select id="category">
                <option value="">Select category</option>
                ${categories.map((c) => `<option value="${c.name}">${c.name}</option>`).join("")}
              </select>
              <span class="error-text" data-error="category"></span>
            </div>
            <div class="form-group" data-field="language">
              <label for="language">Language preference</label>
              <select id="language">
                <option value="">Select language</option>
                <option value="EN">EN</option>
                <option value="UR">UR</option>
                <option value="AR">AR</option>
              </select>
              <span class="error-text" data-error="language"></span>
            </div>
            <div class="form-group" data-field="question">
              <label for="question">Question</label>
              <textarea id="question" rows="4" placeholder="Write your question"></textarea>
              <span class="error-text" data-error="question"></span>
            </div>
            <button class="btn primary" type="submit">Submit</button>
            <div class="success-message" id="formSuccess"></div>
          </form>
        </div>
      </section>
    `);

    const form = document.getElementById("askForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const category = document.getElementById("category").value.trim();
      const language = document.getElementById("language").value.trim();
      const question = document.getElementById("question").value.trim();

      const errors = {};
      if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        errors.email = "Please enter a valid email.";
      }
      if (!category) errors.category = "Category is required.";
      if (!language) errors.language = "Language preference is required.";
      if (!question) errors.question = "Question is required.";

      form.querySelectorAll(".form-group").forEach((group) => {
        group.classList.remove("error");
      });
      form.querySelectorAll("[data-error]").forEach((el) => (el.textContent = ""));

      Object.keys(errors).forEach((key) => {
        const field = form.querySelector(`[data-field="${key}"]`);
        if (field) field.classList.add("error");
        const errEl = form.querySelector(`[data-error="${key}"]`);
        if (errEl) errEl.textContent = errors[key];
      });

      if (Object.keys(errors).length === 0) {
        const name = document.getElementById("name").value.trim();
        const message = `New Question%0AName: ${encodeURIComponent(name || "Anonymous")}%0AEmail: ${encodeURIComponent(
          email || "N/A"
        )}%0ACategory: ${encodeURIComponent(category)}%0ALanguage: ${encodeURIComponent(
          language
        )}%0AQuestion: ${encodeURIComponent(question)}`;
        const url = `https://wa.me/917226822806?text=${message}`;
        window.open(url, "_blank");
        document.getElementById("formSuccess").textContent =
          "Redirecting to WhatsApp...";
      }
    });
  };

  const renderSearch = () => {
    fadeSwap(`
      <section class="section">
        <div class="section-title">
          <span class="dot"></span>
          <h2>Search</h2>
        </div>
        <div class="search-box">
          <input id="searchInput" type="text" placeholder="Search questions..." autofocus />
          <button id="clearSearch" aria-label="Clear search">✕</button>
        </div>
        <div class="section" id="searchResults"></div>
      </section>
    `);

    const input = document.getElementById("searchInput");
    const clear = document.getElementById("clearSearch");
    const resultsContainer = document.getElementById("searchResults");

    const renderResults = (query) => {
      const results = Search.filterResults(query, qaData);
      if (results.length === 0) {
        resultsContainer.innerHTML = `<p class="muted">No results found.</p>`;
        return;
      }
      resultsContainer.innerHTML = `<div class="grid two">
        ${results.map((item) => Search.createResultCard(item)).join("")}
      </div>`;
    };

    input.addEventListener("input", (e) => renderResults(e.target.value));
    clear.addEventListener("click", () => {
      input.value = "";
      renderResults("");
      input.focus();
    });
    renderResults("");
    setTimeout(() => input.focus(), 0);
  };

  const renderAbout = () => {
    fadeSwap(`
      <section class="section">
        <div class="section-title">
          <span class="dot"></span>
          <h2>Our Mission</h2>
        </div>
        <p class="muted">
          RazawiSeassion is dedicated to delivering authentic Islamic answers rooted in classical
          scholarship, presented with clarity and care for modern seekers.
        </p>
        <div class="grid three value-grid section">
          <div class="card">
            <h3>Authentic</h3>
            <p class="muted">Firmly aligned with Ahlus Sunnah wal Jamaah.</p>
          </div>
          <div class="card">
            <h3>Accessible</h3>
            <p class="muted">Simple navigation and human-centered experience.</p>
          </div>
          <div class="card">
            <h3>Multilingual</h3>
            <p class="muted">Guidance for audiences in English, Urdu, and Arabic.</p>
          </div>
        </div>
        <div class="section card">
          <h3>Scholars &amp; Team</h3>
          <p class="muted">
            A council of qualified scholars and researchers review, verify, and curate answers.
            Full scholar profiles will be published soon.
          </p>
        </div>
      </section>
    `);
  };

  const renderDonate = () => {
    fadeSwap(`
      <section class="section">
        <div class="section-title">
          <span class="dot"></span>
          <h2>Support the Mission</h2>
        </div>
        <p class="muted">
          Your charity empowers scholars, research, and the spread of authentic guidance. Every
          contribution helps illuminate hearts.
        </p>
        <div class="donate-actions">
          <button data-amount="5">$5</button>
          <button data-amount="10">$10</button>
          <button data-amount="25">$25</button>
          <button data-amount="custom">Custom</button>
        </div>
        <button class="btn primary">Donate Now</button>
        <div class="blockquote">
          “Charity does not decrease wealth.” (Hadith)
        </div>
      </section>
    `);

    const buttons = appRoot.querySelectorAll(".donate-actions button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  };

  // Show the scroll-to-top control after scrolling down.
  const initScrollTop = () => {
    const btn = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) btn.classList.add("show");
      else btn.classList.remove("show");
    });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const initMobileNav = () => {
    const drawer = document.getElementById("mobileDrawer");
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => drawer.classList.remove("open"));
    });
  };

  // Route renderer dispatch.
  const renderRoute = (route) => {
    if (route.name === "home") {
      appRoot.classList.add("full-bleed");
    } else {
      appRoot.classList.remove("full-bleed");
    }
    switch (route.name) {
      case "home":
        renderHome();
        break;
      case "categories":
        renderCategories();
        break;
      case "question":
        renderQuestion(route.slug);
        break;
      case "ask":
        renderAsk();
        break;
      case "search":
        renderSearch();
        break;
      case "about":
        renderAbout();
        break;
      case "donate":
        renderDonate();
        break;
      case "profile":
        renderProfile();
        break;
      case "tajushariah":
        renderAdmin();
        break;
      default:
        renderHome();
    }
  };

  const renderProfile = () => {
    fadeSwap(`
      <section class="section">
        <div class="section-title">
          <span class="dot"></span>
          <h2>Profile</h2>
        </div>
        <div class="card soft">
          <h3>Purpose of RazawiSeassion</h3>
          <p class="muted">
            This platform serves the mission of preserving authentic Ahle Sunnah guidance and
            connecting seekers to reliable scholarship.
          </p>
          <div class="divider"></div>
          <ul class="compare-list">
            <li>Aligned with the teachings of Ala Hazrat (Imam Ahmad Raza Khan).</li>
            <li>Reflects the scholarly legacy of Mufti-e-Azam-e-Hind.</li>
            <li>Inspired by the guidance of Allama Hasan Raza Khan.</li>
            <li>Continuing the spirit of Mujahid-e-Millat.</li>
            <li>Upholding the path of Tajushariah with loyalty and clarity.</li>
          </ul>
        </div>
      </section>
    `);
  };

  const renderAdmin = () => {
    const isAuthed = sessionStorage.getItem("rs-admin") === "true";
    if (!isAuthed) {
      fadeSwap(`
      <section class="section">
        <div class="section-header">
          <div class="section-title">
            <span class="dot"></span>
            <h2>Tajushariah Access</h2>
          </div>
          <span class="badge">Email Lock</span>
        </div>
        <div class="card form-card">
            <form id="adminLogin" novalidate>
              <div class="form-group" data-field="email">
                <label for="adminEmail">Email</label>
                <input id="adminEmail" type="email" placeholder="tajushariah@arsh.com" />
                <span class="error-text" data-error="email"></span>
              </div>
              <div class="form-group" data-field="password">
                <label for="adminPassword">Password</label>
                <input id="adminPassword" type="password" placeholder="********" />
                <span class="error-text" data-error="password"></span>
              </div>
              <button class="btn primary" type="submit">Unlock</button>
              <div class="error-text" id="adminLoginError"></div>
            </form>
          </div>
        </section>
      `);

      const form = document.getElementById("adminLogin");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("adminEmail").value.trim();
        const password = document.getElementById("adminPassword").value.trim();

        const errors = {};
        if (!email) errors.email = "Email is required.";
        if (!password) errors.password = "Password is required.";

        form.querySelectorAll(".form-group").forEach((group) => {
          group.classList.remove("error");
        });
        form.querySelectorAll("[data-error]").forEach((el) => (el.textContent = ""));

        Object.keys(errors).forEach((key) => {
          const field = form.querySelector(`[data-field="${key}"]`);
          if (field) field.classList.add("error");
          const errEl = form.querySelector(`[data-error="${key}"]`);
          if (errEl) errEl.textContent = errors[key];
        });

        if (Object.keys(errors).length === 0) {
          if (email === "tajushariah@arsh.com" && password === "tajushariahsarkaar") {
            sessionStorage.setItem("rs-admin", "true");
            renderAdmin();
          } else {
            document.getElementById("adminLoginError").textContent =
              "Invalid credentials.";
          }
        }
      });
      return;
    }

    const list = qaData
      .slice(0, 8)
      .map(
        (qa) => `
        <div class="card soft">
          <div class="latest-meta">
            <span class="badge">${qa.category}</span>
            <span class="muted">${qa.date}</span>
          </div>
          <h3>${qa.title}</h3>
          <p class="muted">${qa.answer}</p>
        </div>
      `
      )
      .join("");

    fadeSwap(`
      <section class="section">
        <div class="section-header">
          <div class="section-title">
            <span class="dot"></span>
            <h2>Tajushariah Admin</h2>
          </div>
          <button class="btn outline" id="adminLogout">Lock</button>
        </div>
        <div class="grid two admin-layout">
          <div class="card form-card soft">
            <h3>Add Q&amp;A</h3>
            <form id="adminForm" novalidate>
              <div class="form-group" data-field="title">
                <label for="adminTitle">Title</label>
                <input id="adminTitle" type="text" placeholder="Question title" />
                <span class="error-text" data-error="title"></span>
              </div>
              <div class="form-group" data-field="question">
                <label for="adminQuestion">Question</label>
                <textarea id="adminQuestion" rows="4" placeholder="Full question"></textarea>
                <span class="error-text" data-error="question"></span>
              </div>
              <div class="form-group" data-field="answer">
                <label for="adminAnswer">Answer</label>
                <textarea id="adminAnswer" rows="4" placeholder="Scholars answer"></textarea>
                <span class="error-text" data-error="answer"></span>
              </div>
              <div class="form-group" data-field="category">
                <label for="adminCategory">Category</label>
                <select id="adminCategory">
                  <option value="">Select category</option>
                  ${categories.map((c) => `<option value="${c.name}">${c.name}</option>`).join("")}
                </select>
                <span class="error-text" data-error="category"></span>
              </div>
              <div class="form-group" data-field="language">
                <label for="adminLanguage">Language</label>
                <select id="adminLanguage">
                  <option value="">Select language</option>
                  <option value="EN">EN</option>
                  <option value="UR">UR</option>
                  <option value="AR">AR</option>
                </select>
                <span class="error-text" data-error="language"></span>
              </div>
              <div class="form-group" data-field="references">
                <label for="adminRefs">References</label>
                <input id="adminRefs" type="text" placeholder="Books or sources" />
                <span class="error-text" data-error="references"></span>
              </div>
              <button class="btn primary" type="submit">Publish</button>
              <div class="success-message" id="adminSuccess"></div>
            </form>
          </div>
          <div>
            <h3>Latest Entries</h3>
            <div class="grid two admin-list">
              ${list}
            </div>
          </div>
        </div>
      </section>
    `);

    const form = document.getElementById("adminForm");
    document.getElementById("adminLogout").addEventListener("click", () => {
      sessionStorage.removeItem("rs-admin");
      renderAdmin();
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = document.getElementById("adminTitle").value.trim();
      const question = document.getElementById("adminQuestion").value.trim();
      const answer = document.getElementById("adminAnswer").value.trim();
      const category = document.getElementById("adminCategory").value.trim();
      const language = document.getElementById("adminLanguage").value.trim();
      const references = document.getElementById("adminRefs").value.trim();

      const errors = {};
      if (!title) errors.title = "Title is required.";
      if (!question) errors.question = "Question is required.";
      if (!answer) errors.answer = "Answer is required.";
      if (!category) errors.category = "Category is required.";
      if (!language) errors.language = "Language is required.";

      form.querySelectorAll(".form-group").forEach((group) => {
        group.classList.remove("error");
      });
      form.querySelectorAll("[data-error]").forEach((el) => (el.textContent = ""));

      Object.keys(errors).forEach((key) => {
        const field = form.querySelector(`[data-field="${key}"]`);
        if (field) field.classList.add("error");
        const errEl = form.querySelector(`[data-error="${key}"]`);
        if (errEl) errEl.textContent = errors[key];
      });

      if (Object.keys(errors).length === 0) {
        const slug = title
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .slice(0, 60);
        const payload = {
          slug,
          title,
          question,
          answer,
          category,
          language,
          date: new Date().toISOString().slice(0, 10),
          references: references || "Provided by Tajushariah.",
        };
        await FirebaseService.addQa(payload);
        qaData = [payload, ...qaData];
        updateCategoryCounts();
        document.getElementById("adminSuccess").textContent =
          "Question published to Firebase.";
        form.reset();
        renderAdmin();
      }
    });
  };

  const init = () => {
    LanguageSwitcher.init();
    initMobileNav();
    initScrollTop();
  };

  return { init, renderRoute, updateCategoryCounts };
})();

document.addEventListener("DOMContentLoaded", () => {
  App.init();
  FirebaseService.init();
  const startRouting = () => {
    Router.onChange(App.renderRoute);
    Router.init();
  };
  FirebaseService.seedIfEmpty()
    .then(async () => {
      const [qa, cats] = await Promise.all([
        FirebaseService.getQa(),
        FirebaseService.getCategories(),
      ]);
      if (qa.length) qaData = qa;
      if (cats.length) categories = cats;
      App.updateCategoryCounts();
      startRouting();
    })
    .catch(() => {
      startRouting();
    });
});

