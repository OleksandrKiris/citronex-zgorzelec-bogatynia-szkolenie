(() => {
  const DATA = window.CX_DATA;
  const tx = (pl, en, ua, ru, az, es, fil, id, ne) => ({ pl, en, ua, ru, az, es, fil, id, ne });
  const validLangs = new Set(DATA.languages.map((item) => item.id));
  const page = document.body.dataset.page || "home";
  const app = document.getElementById("app");

  const iconMap = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10"/><path d="M9 21v-6h6v6"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z"/><path d="M9 4v14"/><path d="M15 6v14"/></svg>',
    warehouse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21V8l9-5 9 5v13"/><path d="M7 21v-9h10v9"/><path d="M9 16h6"/></svg>',
    tablet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M9 6h6"/><path d="M8 10h8"/><path d="M8 14h8"/><circle cx="12" cy="18" r="1"/></svg>',
    greenhouse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21V9a9 9 0 0 1 18 0v12"/><path d="M3 12h18"/><path d="M7 21V9"/><path d="M12 21V6"/><path d="M17 21V9"/></svg>',
    reader: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 6h4"/><path d="M10 17h4"/><circle cx="12" cy="12" r="2"/></svg>',
    medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14"/><path d="M5 12h14"/><path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>',
    speech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 5h16v10H8l-4 4V5Z"/><path d="M8 9h8"/><path d="M8 12h5"/><path d="M18 18c1.7-.6 3-2.2 3-4"/><path d="M18 21c3.4-.8 6-3.7 6-7"/></svg>',
    groups: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    city: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1"/><path d="M9 13h1"/><path d="M9 17h1"/><path d="M16 15h1"/><path d="M16 18h1"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10h18"/><path d="M5 10V8l7-4 7 4v2"/><path d="M6 10v8"/><path d="M10 10v8"/><path d="M14 10v8"/><path d="M18 10v8"/><path d="M4 18h16"/><path d="M3 21h18"/></svg>',
    document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 3h7l5 5v13H7V3Z"/><path d="M14 3v6h5"/><path d="M10 13h6"/><path d="M10 17h6"/></svg>',
    parcel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 3v8"/><path d="M8 3v8"/><path d="M4 7h4"/><path d="M6 11v10"/><path d="M15 3v18"/><path d="M15 3c3 2 4 5 4 8 0 2-1 4-4 4"/></svg>',
    smoke: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 15h11v4H3z"/><path d="M18 15h3v4h-3z"/><path d="M16 7c2 0 3 1 3 3"/><path d="M13 5c3 0 5 2 5 5"/></svg>',
    jewelry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 3h8l4 6-8 12L4 9l4-6Z"/><path d="M4 9h16"/><path d="m9 9 3 12 3-12"/></svg>',
    id: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 10h4"/><path d="M14 14h3"/></svg>',
    ban: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/></svg>',
    test: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 11l2 2 4-4"/><path d="M20 6 9 17l-5-5"/><path d="M4 19h16"/></svg>'
  };

  function getLang() {
    const params = new URLSearchParams(location.search);
    const fromUrl = (params.get("lang") || "").toLowerCase();
    const fromStorage = (localStorage.getItem("cx-lang") || "").toLowerCase();
    if (validLangs.has(fromUrl)) return fromUrl;
    if (validLangs.has(fromStorage)) return fromStorage;
    return "pl";
  }

  let lang = getLang();

  function text(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.pl || value.en || "";
  }

  function ui(key) {
    return text(DATA.ui[key]);
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function href(pageName) {
    const base = pageName === "home" ? "index.html" : `${pageName}.html`;
    return `${base}?lang=${encodeURIComponent(lang)}`;
  }

  function telHref(phone) {
    return `tel:${phone.replace(/\s/g, "")}`;
  }

  function waHref(phone, message = "") {
    const number = phone.replace(/[^\d]/g, "");
    const suffix = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${number}${suffix}`;
  }

  function viberHref(phone, message = "") {
    const number = phone.replace(/[^\d+]/g, "");
    const suffix = message ? `&text=${encodeURIComponent(message)}` : "";
    return `viber://chat?number=${encodeURIComponent(number)}${suffix}`;
  }

  function cardClass(tone) {
    return tone ? `card ${tone}` : "card";
  }

  function action(url, label, tone = "") {
    const cls = tone ? `btn ${tone}` : "btn";
    return `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
  }

  function phoneActions(phone, whatsappLabel = ui("whatsapp")) {
    return `
      <div class="btn-row">
        <a class="btn secondary" href="${esc(telHref(phone))}">${esc(ui("call"))} ${esc(formatPhone(phone))}</a>
        <a class="btn" href="${esc(waHref(phone))}" target="_blank" rel="noopener">${esc(whatsappLabel)}</a>
      </div>
    `;
  }

  function formatPhone(phone) {
    const cleaned = phone.replace(/[^\d+]/g, "");
    if (!cleaned.startsWith("+48")) return phone.trim();
    const rest = cleaned.slice(3).replace(/(\d{3})(?=\d)/g, "$1 ").trim();
    return `+48 ${rest}`;
  }

  function renderHeader() {
    const isHome = page === "home";
    const logoSrc = DATA.meta && DATA.meta.logo ? DATA.meta.logo : "assets/logo-citronex.svg";
    const logoAlt = DATA.meta && DATA.meta.logoAlt ? DATA.meta.logoAlt : "Citronex";
    const selected = DATA.languages.map((item) => (
      `<option value="${esc(item.id)}"${item.id === lang ? " selected" : ""}>${esc(item.label)}</option>`
    )).join("");
    const navItems = [
      { page: "home", icon: "home", tone: "green", label: DATA.ui.home },
      { page: "mapa", icon: "map", tone: "blue", label: tx("Mapa", "Map", "Карта", "Карта", "Xəritə", "Mapa", "Mapa", "Peta", "नक्सा") },
      { page: "kontakty", icon: "phone", tone: "green", label: tx("Kontakt", "Contact", "Контакт", "Контакт", "Əlaqə", "Contacto", "Contact", "Kontak", "सम्पर्क") },
      { page: "lekarz", icon: "medical", tone: "red", label: tx("Lekarz", "Doctor", "Лікар", "Врач", "Həkim", "Médico", "Doktor", "Dokter", "डाक्टर") }
    ];
    const navHtml = navItems.map((item) => `
      <a class="top-nav-link${item.page === page ? " is-active" : ""}" data-tone="${esc(item.tone)}" href="${esc(href(item.page))}"${item.page === page ? ' aria-current="page"' : ""}>
        <span class="top-nav-icon">${iconMap[item.icon] || iconMap.home}</span>
        <span>${esc(text(item.label))}</span>
      </a>
    `).join("");

    document.body.insertAdjacentHTML("afterbegin", `
      <header class="app-header">
        <div class="header-inner">
          ${isHome ? `<span class="back-link" aria-hidden="true">CX</span>` : `<a class="back-link" href="${esc(href("home"))}" aria-label="${esc(ui("back"))}">‹</a>`}
          <div class="brand">
            <img src="${esc(logoSrc)}" alt="${esc(logoAlt)}">
            <div>
              <p class="brand-title">${esc(ui("brand"))}</p>
              <p class="brand-subtitle">${esc(ui("subtitle"))}</p>
            </div>
          </div>
          <select class="lang-select" id="langSelect" aria-label="Language">${selected}</select>
        </div>
        <nav class="top-nav" aria-label="${esc(text(tx("Szybkie przyciski", "Quick buttons", "Швидкі кнопки", "Быстрые кнопки", "Sürətli düymələr", "Botones rápidos", "Mabilis na buttons", "Tombol cepat", "छिटो बटनहरू")))}">
          <div class="top-nav-scroll">${navHtml}</div>
        </nav>
      </header>
    `);

    document.getElementById("langSelect").addEventListener("change", (event) => {
      lang = event.target.value;
      localStorage.setItem("cx-lang", lang);
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      location.href = url.toString();
    });
  }

  function pageHero(pageName = page) {
    const info = DATA.pages[pageName] || DATA.pages.home;
    const appTitle = DATA.meta && DATA.meta.appTitle ? DATA.meta.appTitle : "Citronex";
    document.title = `${text(info.title)} - ${appTitle}`;
    return `
      <section class="hero">
        <p class="eyebrow">${esc(appTitle)}</p>
        <h1>${esc(text(info.title))}</h1>
        <p class="lead">${esc(text(info.lead))}</p>
      </section>
    `;
  }

  function renderHome() {
    const tiles = DATA.tiles.map((tile) => `
      <a class="tile" data-tone="${esc(tile.tone)}" href="${esc(href(tile.page))}">
        <div class="tile-top">
          <div>
            <div class="icon-box">${iconMap[tile.icon] || iconMap.test}</div>
          </div>
          <span class="arrow">›</span>
        </div>
        <div>
          <p class="tile-title">${esc(text(tile.title))}</p>
          <p class="tile-text">${esc(text(tile.text))}</p>
        </div>
      </a>
    `).join("");
    const install = DATA.install;
    const installCard = install ? `
      <details class="card install-card">
        <summary>${esc(text(install.title))}</summary>
        <div class="details-body">
          <p>${esc(text(install.lead))}</p>
          <ul class="list">
            <li>${esc(text(install.android))}</li>
            <li>${esc(text(install.iphone))}</li>
          </ul>
        </div>
      </details>
    ` : "";

    app.innerHTML = `<main class="page">${pageHero("home")}<section class="tiles">${tiles}</section>${installCard}</main>`;
  }

  function renderVersionFooter() {
    const main = app.querySelector("main.page");
    if (!main || main.querySelector(".app-version-footer")) return;
    const version = DATA.meta && DATA.meta.version ? DATA.meta.version : "dev";
    main.insertAdjacentHTML("beforeend", `
      <p class="footer-note app-version-footer">
        GitHub Pages &middot; offline cache &middot; v${esc(version)}
      </p>
    `);
  }

  function renderMap() {
    const photoWord = tx("zdjęcie", "photo", "фото", "фото", "şəkil", "foto", "larawan", "foto", "फोटो");
    const placeHint = tx("Rozpoznaj to miejsce przed wejściem.", "Recognize this place before entering.", "Впізнайте це місце перед входом.", "Узнайте это место перед входом.", "Girməzdən əvvəl bu yeri tanıyın.", "Reconoce este lugar antes de entrar.", "Kilalanin ang lugar bago pumasok.", "Kenali tempat ini sebelum masuk.", "प्रवेश अघि यो ठाउँ चिन्नुहोस्।");
    const cards = DATA.maps.map((item) => `
      <article class="${cardClass(item.tone)}">
        <h3>${esc(text(item.title))}</h3>
        <p>${esc(text(item.note))}</p>
        <div class="btn-row">${action(item.url, `${ui("openMap")} - ${text(item.title)}`, item.tone === "red" ? "red" : item.tone === "yellow" ? "yellow" : "blue")}</div>
      </article>
    `).join("");
    const firstSteps = DATA.firstDay.steps.map((item, index) => `
      <article class="step-card compact">
        <span class="step-number">${index + 1}</span>
        <div>
          <h3>${esc(text(item.title))}</h3>
          <p>${esc(text(item.note))}</p>
        </div>
      </article>
    `).join("");
    const photoGroups = (DATA.mapPhotos || []).map((group) => {
      const photos = group.photos.map((src, index) => `
        <figure class="media">
          <img loading="lazy" src="${esc(src)}" alt="${esc(text(group.title))}">
          <figcaption><strong>${esc(text(group.title))}</strong><span>${esc(text(photoWord))} ${index + 1}. ${esc(text(placeHint))}</span></figcaption>
        </figure>
      `).join("");
      return `
        <details class="${cardClass(group.tone)}">
          <summary>${esc(text(group.title))}</summary>
          <div class="details-body">
            <p>${esc(text(group.note))}</p>
            <div class="photo-grid">${photos}</div>
          </div>
        </details>
      `;
    }).join("");
    app.innerHTML = `
      <main class="page">
        ${pageHero()}
        <details class="card yellow module-details">
          <summary>${esc(text(DATA.firstDay.title))}</summary>
          <div class="details-body">
            <p>${esc(text(DATA.firstDay.lead))}</p>
            <div class="steps compact-list">${firstSteps}</div>
          </div>
        </details>
        <section class="module-grid two section">${cards}</section>
        <section class="section">
          <h2>${esc(text(tx("Zdjęcia wejść", "Entrance photos", "Фото входів", "Фото входов", "Giriş şəkilləri", "Fotos de entradas", "Mga larawan ng pasukan", "Foto pintu masuk", "प्रवेश फोटो")))}</h2>
          <div class="stack">${photoGroups}</div>
        </section>
      </main>
    `;
  }

  function renderWarehouse() {
    const rules = DATA.warehouseRules.map((item) => `<li>${esc(text(item))}</li>`).join("");
    const warehouseMap = DATA.maps.find((item) => item.key === "warehouse");
    const oldWarehouseMap = DATA.maps.find((item) => item.key === "oldWarehouse");
    app.innerHTML = `
      <main class="page">
        ${pageHero()}
        <section class="card yellow">
          <h2>${esc(text(DATA.tiles.find((tile) => tile.page === "magazyn").title))}</h2>
          <p>${esc(text(warehouseMap.note))}</p>
          <ul class="list">${rules}</ul>
          <div class="btn-row">
            ${action(warehouseMap.url, text(tx("Mapa magazynu", "Warehouse map", "Карта складу", "Карта склада", "Anbar xəritəsi", "Mapa del almacén", "Mapa ng bodega", "Peta gudang", "गोदाम नक्सा")), "yellow")}
            ${action(oldWarehouseMap.url, text(oldWarehouseMap.title), "yellow")}
          </div>
        </section>
        <section class="card yellow section media-details warehouse-photos">
          <h2>${esc(text(tx("Zdjęcia magazynu", "Warehouse photos", "Фото складу", "Фото склада", "Anbar şəkilləri", "Fotos del almacén", "Mga larawan ng bodega", "Foto gudang", "गोदाम फोटो")))}</h2>
          <p>${esc(text(tx("Najpierw otwórz mapę, potem porównaj wejście ze zdjęciem.", "First open the map, then compare the entrance with the photo.", "Спочатку відкрийте карту, потім порівняйте вхід із фото.", "Сначала откройте карту, потом сравните вход с фото.", "Əvvəl xəritəni açın, sonra girişi şəkillə müqayisə edin.", "Primero abre el mapa y luego compara la entrada con la foto.", "Buksan muna ang mapa, pagkatapos ihambing ang pasukan sa larawan.", "Buka peta dulu, lalu cocokkan pintu masuk dengan foto.", "पहिले नक्सा खोल्नुहोस्, अनि प्रवेशलाई फोटोसँग मिलाउनुहोस्।")))}</p>
          <div class="details-body">
            <div class="photo-grid">
            <figure class="media"><img loading="lazy" src="assets/warehouse/magazyn-wejscie-1.jpg" alt="Magazyn wejście"><figcaption>${esc(text(tx("Budynek magazynu - widok z parkingu.", "Warehouse building - view from parking.", "Будівля складу - вид з парковки.", "Здание склада - вид с парковки.", "Anbar binası - dayanacaqdan görünüş.", "Edificio de almacén - vista desde parking.", "Gusali ng bodega mula sa paradahan.", "Gedung gudang dari parkir.", "पार्किङबाट गोदाम भवन।")))}</figcaption></figure>
            <figure class="media"><img loading="lazy" src="assets/warehouse/magazyn-wejscie-2.jpg" alt="Magazyn wejście drzwi"><figcaption>${esc(text(tx("Wejście dla personelu.", "Staff entrance.", "Вхід для персоналу.", "Вход для персонала.", "Personal girişi.", "Entrada de personal.", "Pasukan ng staff.", "Pintu masuk staf.", "कर्मचारी प्रवेश।")))}</figcaption></figure>
          </div>
          </div>
        </section>
        ${tabletLinkCard("yellow")}
      </main>
    `;
  }

  function tabletLinkCard(tone = "yellow") {
    return `
      <section class="${cardClass(tone)} section tablet-link-card">
        <div class="city-card-head">
          <span class="city-card-icon">${iconMap.tablet}</span>
          <div>
            <span class="city-card-tag">${esc(text(tx("Ten sam system", "Same system", "Та сама система", "Та же система", "Eyni sistem", "El mismo sistema", "Parehong system", "Sistem yang sama", "एउटै प्रणाली")))}</span>
            <h2>${esc(text(DATA.pages.tablet.title))}</h2>
          </div>
        </div>
        <p>${esc(text(tx("Tablet działa tak samo na szklarni i na magazynie. Otwórz jedną wspólną instrukcję krok po kroku.", "The tablet works the same in the greenhouse and warehouse. Open one shared step-by-step instruction.", "Планшет працює однаково в теплиці і на складі. Відкрийте одну спільну інструкцію крок за кроком.", "Планшет работает одинаково в теплице и на складе. Откройте одну общую инструкцию шаг за шагом.", "Planşet istixanada və anbarda eyni işləyir. Bir ümumi addım-addım təlimatı açın.", "La tablet funciona igual en invernadero y almacén. Abre una instrucción común paso a paso.", "Pareho ang tablet sa greenhouse at bodega. Buksan ang isang shared step-by-step instruction.", "Tablet bekerja sama di rumah kaca dan gudang. Buka satu instruksi bersama langkah demi langkah.", "ट्याबलेट ग्रीनहाउस र गोदाममा उस्तै चल्छ। एउटै साझा चरणबद्ध निर्देशन खोल्नुहोस्।")))}</p>
        <div class="btn-row">
          <a class="btn yellow" href="${esc(href("tablet"))}">${esc(text(tx("Otwórz instrukcję tabletu", "Open tablet instruction", "Відкрити інструкцію планшета", "Открыть инструкцию планшета", "Planşet təlimatını aç", "Abrir instrucción de tablet", "Buksan ang tablet instruction", "Buka instruksi tablet", "ट्याबलेट निर्देशन खोल्नुहोस्")))}</a>
        </div>
      </section>
    `;
  }

  function tabletInstructionMarkup() {
    const tablet = DATA.tabletGuide;
    const stepsSource = tablet.steps || [];
    const steps = stepsSource.map((item, index) => `
      <details class="tablet-step">
        <summary>
          <span class="step-number">${index + 1}</span>
          <span>${esc(text(item.title))}</span>
        </summary>
        <div class="tablet-step-body">
          <p>${esc(text(item.note))}</p>
          ${item.image ? `
            <figure class="tablet-shot">
              <img loading="lazy" src="${esc(item.image)}" alt="${esc(text(item.screen))}">
              <figcaption>${esc(text(item.screen))}</figcaption>
            </figure>
          ` : `
            <div class="tablet-screen" aria-label="${esc(text(item.screen))}">
              <span class="tablet-screen-top">${esc(text(tx("Tablet", "Tablet", "Планшет", "Планшет", "Planşet", "Tablet", "Tablet", "Tablet", "ट्याबलेट")))}</span>
              <strong>${esc(text(item.screen))}</strong>
            </div>
          `}
        </div>
      </details>
    `).join("");
    const tips = (tablet.tips || []).map((item) => `<li>${esc(text(item))}</li>`).join("");
    return `
      <section class="card yellow section tablet-guide">
        <div class="city-card-head">
          <span class="city-card-icon">${iconMap.tablet}</span>
          <div>
            <span class="city-card-tag">${esc(text(tablet.tag || tx("Instruktaż tablet", "Tablet training", "Інструктаж планшета", "Инструктаж планшета", "Planşet təlimatı", "Instrucción de tablet", "Tablet training", "Instruksi tablet", "ट्याबलेट निर्देशन")))}</span>
            <h2>${esc(text(tablet.title))}</h2>
          </div>
        </div>
        <p>${esc(text(tablet.lead))}</p>
        <div class="notice yellow"><strong>${esc(ui("important"))}:</strong> ${esc(text(tablet.important))}</div>
        <div class="tablet-steps">${steps}</div>
        ${tips ? `<details class="card section module-details"><summary>${esc(ui("important"))}</summary><div class="details-body"><ul class="list">${tips}</ul></div></details>` : ""}
      </section>
    `;
  }

  function renderTablet() {
    app.innerHTML = `
      <main class="page">
        ${pageHero()}
        <section class="card blue">
          <h2>${esc(text(tx("Jedna instrukcja dla szklarni i magazynu", "One instruction for greenhouse and warehouse", "Одна інструкція для теплиці і складу", "Одна инструкция для теплицы и склада", "İstixana və anbar üçün bir təlimat", "Una instrucción para invernadero y almacén", "Isang instruction para sa greenhouse at bodega", "Satu instruksi untuk rumah kaca dan gudang", "ग्रीनहाउस र गोदामका लागि एउटै निर्देशन")))}</h2>
          <p>${esc(text(DATA.pages.tablet.lead))}</p>
        </section>
        ${tabletInstructionMarkup()}
      </main>
    `;
  }

  function renderGreenhouse() {
    const flow = [
      tx("Etap", "Stage", "Етап", "Этап", "Etap", "Etapa", "Stage", "Tahap", "चरण"),
      tx("Strona", "Side", "Сторона", "Сторона", "Tərəf", "Lado", "Side", "Sisi", "भाग"),
      tx("Nawa", "Nave", "Нава", "Нава", "Nava", "Nave", "Nave", "Nave", "नावा"),
      tx("Wejście", "Entrance", "Вхід", "Вход", "Giriş", "Entrada", "Pasukan", "Pintu masuk", "प्रवेश"),
      tx("Rząd", "Row", "Ряд", "Ряд", "Sıra", "Fila", "Row", "Baris", "लाइन"),
      tx("Strona rzędu", "Row side", "Сторона ряду", "Сторона ряда", "Sıranın tərəfi", "Lado de la fila", "Bahagi ng hanay", "Sisi baris", "लाइनको भाग")
    ];
    const flowChips = flow.map((item, index) => `<span class="flow-chip">${index + 1}. ${esc(text(item))}</span>`).join("");
    const workCards = [
      {
        tone: "green",
        title: tx("Przed wejściem do rzędu", "Before entering the row", "Перед входом у ряд", "Перед входом в ряд", "Sıraya girməzdən əvvəl", "Antes de entrar a la fila", "Bago pumasok sa hanay", "Sebelum masuk ke baris", "लाइनमा पस्नु अघि"),
        items: [
          tx("Sprawdź etap, stronę, nawę, wejście i rząd z informacji od brygadzisty.", "Check stage, side, nave, entrance and row from the brigadier's information.", "Перевірте етап, сторону, наву, вхід і ряд з інформації від бригадира.", "Проверьте этап, сторону, наву, вход и ряд по информации от бригадира.", "Briqadirin məlumatına görə etapı, tərəfi, navanı, girişi və sıranı yoxlayın.", "Revisa etapa, lado, nave, entrada y fila según la información del encargado.", "Suriin ang etap, bahagi, nawa, pasukan at hanay ayon sa impormasyon ng brigadier.", "Cek tahap, sisi, nave, pintu masuk dan baris dari informasi mandor.", "ब्रिगेडियरको जानकारी अनुसार चरण, भाग, नावा, प्रवेश र लाइन जाँच गर्नुहोस्।"),
          tx("Weź potrzebne narzędzia i ustaw się spokojnie przy właściwym wejściu.", "Take the needed tools and stand calmly at the correct entrance.", "Візьміть потрібні інструменти і спокійно станьте біля правильного входу.", "Возьмите нужные инструменты и спокойно станьте у правильного входа.", "Lazım olan alətləri götürün və düzgün girişdə sakit dayanın.", "Toma las herramientas necesarias y colócate tranquilo en la entrada correcta.", "Kunin ang kailangang kagamitan at pumuwesto nang maayos sa tamang pasukan.", "Ambil alat yang perlu dan posisikan diri di pintu masuk yang benar.", "चाहिने औजार लिनुहोस् र सही प्रवेशमा शान्त भएर बस्नुहोस्।"),
          tx("Jeśli numeru nie rozumiesz, sprawdź go przed wejściem, nie w środku pracy.", "If you do not understand the number, check it before entering, not in the middle of work.", "Якщо не розумієте номер, перевірте його перед входом, а не під час роботи.", "Если не понимаете номер, проверьте его до входа, не во время работы.", "Nömrəni başa düşmürsünüzsə, işin ortasında deyil, girməzdən əvvəl yoxlayın.", "Si no entiendes el número, revísalo antes de entrar, no durante el trabajo.", "Kung hindi malinaw ang numero, i-check bago pumasok, hindi habang nagtatrabaho.", "Jika tidak paham nomornya, cek sebelum masuk, bukan saat kerja.", "नम्बर नबुझे प्रवेश अघि जाँच गर्नुहोस्, कामको बीचमा होइन।")
        ]
      },
      {
        tone: "blue",
        title: tx("W rzędzie", "Inside the row", "У ряду", "В ряду", "Sıranın içində", "Dentro de la fila", "Sa loob ng hanay", "Di dalam baris", "लाइन भित्र"),
        items: [
          tx("Pracuj tylko w wyznaczonym rzędzie i na swojej stronie rzędu.", "Work only in the assigned row and on your row side.", "Працюйте тільки у призначеному ряду і на своїй стороні ряду.", "Работайте только в назначенном ряду и на своей стороне ряда.", "Yalnız təyin edilmiş sırada və sıranın öz tərəfinizdə işləyin.", "Trabaja solo en la fila asignada y en tu lado de la fila.", "Magtrabaho lang sa nakatalagang hanay at sa sarili mong bahagi ng hanay.", "Bekerja hanya di baris yang ditentukan dan di sisi baris Anda.", "तोकेको लाइन र लाइनको आफ्नो भागमा मात्र काम गर्नुहोस्।"),
          tx("Przejście zostawiaj przejezdne: narzędzia, wózek i odpady nie mogą blokować drogi.", "Keep the passage clear: tools, cart and waste must not block the way.", "Залишайте прохід вільним: інструменти, візок і відходи не повинні блокувати дорогу.", "Оставляйте проход свободным: инструменты, тележка и отходы не должны блокировать дорогу.", "Keçidi açıq saxlayın: alətlər, araba və tullantı yolu bağlamamalıdır.", "Deja el pasillo libre: herramientas, carro y residuos no deben bloquear el camino.", "Panatilihing maluwag ang daan: kagamitan, cart at basura ay hindi dapat humarang.", "Jaga lorong tetap kosong: alat, troli dan sampah tidak boleh menghalangi.", "बाटो खाली राख्नुहोस्: औजार, ट्रली र फोहोरले बाटो रोक्नु हुँदैन।"),
          tx("Nie przechodź na cudzy rząd albo drugą stronę bez polecenia.", "Do not move to another person's row or the other side without instruction.", "Не переходьте на чужий ряд або іншу сторону без вказівки.", "Не переходите на чужой ряд или другую сторону без указания.", "Tapşırıq olmadan başqa sıraya və ya o biri tərəfə keçməyin.", "No pases a otra fila o al otro lado sin instrucción.", "Huwag lumipat sa ibang hanay o kabilang bahagi kung walang utos.", "Jangan pindah ke baris orang lain atau sisi lain tanpa instruksi.", "निर्देशन बिना अरूको लाइन वा अर्को भागमा नजानुहोस्।")
        ]
      },
      {
        tone: "yellow",
        title: tx("Wychodzisz z rzędu", "Leaving the row", "Виходите з ряду", "Выходите из ряда", "Sıradan çıxırsınız", "Sales de la fila", "Paglabas sa hanay", "Keluar dari baris", "लाइनबाट निस्कँदा"),
        items: [
          tx("Jeśli pracujesz z readerem, tag rzędu odbijasz dopiero przy wyjściu.", "If you work with a reader, scan the row tag only when leaving.", "Якщо працюєте з рідером, тег ряду відбивайте тільки при виході.", "Если работаете с ридером, тег ряда отмечайте только при выходе.", "Reader ilə işləyirsinizsə, sıra tagını yalnız çıxanda vurun.", "Si trabajas con reader, marca el tag de fila solo al salir.", "Kung gumagamit ng reader, i-scan ang tag ng hanay paglabas lang.", "Jika memakai reader, scan tag baris hanya saat keluar.", "reader प्रयोग भए लाइन tag निस्कँदा मात्र स्क्यान गर्नुहोस्।"),
          tx("Rząd skończony = jedno odbicie. Rząd nieskończony = dwa odbicia.", "Finished row = one scan. Unfinished row = two scans.", "Ряд закінчений = одне відбиття. Ряд незакінчений = два відбиття.", "Ряд закончен = одна отметка. Ряд не закончен = две отметки.", "Sıra bitibsə = bir vurma. Sıra bitməyibsə = iki vurma.", "Fila terminada = una marca. Fila no terminada = dos marcas.", "Tapos na hanay = isang scan. Hindi tapos = dalawang scan.", "Baris selesai = satu scan. Belum selesai = dua scan.", "लाइन सकियो = एक स्क्यान। नसकिएको = दुई स्क्यान।"),
          tx("Dopiero po wyjściu i odbiciu idziesz na przerwę, zmianę czynności albo koniec pracy.", "Only after leaving and scanning do you go to break, activity change or finish work.", "Тільки після виходу і відбиття йдіть на перерву, зміну діяльності або кінець роботи.", "Только после выхода и отметки идите на перерыв, смену деятельности или конец работы.", "Yalnız çıxıb tag vurduqdan sonra fasiləyə, fəaliyyət dəyişikliyinə və ya işin sonuna gedin.", "Solo después de salir y marcar vas al descanso, cambio de actividad o fin de trabajo.", "Pagkatapos lang lumabas at mag-scan, saka pupunta sa pahinga, palit gawain o tapos trabaho.", "Hanya setelah keluar dan scan, pergi istirahat, ganti aktivitas atau selesai kerja.", "निस्केर स्क्यान गरेपछि मात्र ब्रेक, काम परिवर्तन वा काम अन्त्यमा जानुहोस्।")
        ]
      },
      {
        tone: "red",
        title: tx("Najczęstsze pomyłki", "Most common mistakes", "Найчастіші помилки", "Самые частые ошибки", "Ən çox edilən səhvlər", "Errores más comunes", "Karaniwang mali", "Kesalahan paling umum", "सबैभन्दा धेरै गल्ती"),
        items: [
          tx("Nie myl wejścia do nawy z rzędem pracy.", "Do not confuse the nave entrance with the work row.", "Не плутайте вхід до нави з робочим рядом.", "Не путайте вход в наву с рабочим рядом.", "Navaya girişi iş sırası ilə qarışdırmayın.", "No confundas la entrada de nave con la fila de trabajo.", "Huwag ipagkamali ang pasukan ng nave sa row ng trabaho.", "Jangan samakan pintu nave dengan baris kerja.", "नावाको प्रवेशलाई काम गर्ने लाइनसँग नझुक्किनुहोस्।"),
          tx("Nie odbijaj tagu rzędu przy wejściu do rzędu.", "Do not scan the row tag when entering the row.", "Не відбивайте тег ряду при вході в ряд.", "Не отмечайте тег ряда при входе в ряд.", "Sıraya girəndə sıra tagını vurmayın.", "No marques el tag de fila al entrar.", "Huwag i-scan ang tag ng hanay pagpasok.", "Jangan scan tag baris saat masuk.", "लाइनमा पस्दा लाइन tag स्क्यान नगर्नुहोस्।"),
          tx("Nie zaczynaj nowego miejsca, jeśli nie zakończyłeś poprzedniego rzędu/pracy.", "Do not start a new place if you have not finished the previous row/work logic.", "Не починайте нове місце, якщо не закінчили попередній ряд/роботу.", "Не начинайте новое место, если не закончили предыдущий ряд/работу.", "Əvvəlki sıra/iş məntiqini bitirmədən yeni yerə başlamayın.", "No empieces un lugar nuevo si no terminaste la fila/trabajo anterior.", "Huwag magsimula sa bagong lugar kung hindi pa tapos ang dating hanay/trabaho.", "Jangan mulai tempat baru jika logika baris/kerja sebelumnya belum selesai.", "अघिल्लो लाइन/काम नसकी नयाँ ठाउँ सुरु नगर्नुहोस्।")
        ]
      }
    ];
    const workCardsHtml = workCards.map((card) => `
      <article class="${cardClass(card.tone)}">
        <h3>${esc(text(card.title))}</h3>
        <ul class="list">${card.items.map((item) => `<li>${esc(text(item))}</li>`).join("")}</ul>
      </article>
    `).join("");

    app.innerHTML = `
      <main class="page">
        ${pageHero()}
        <section class="steps">
          <article class="step-card">
            <span class="step-number">1</span>
            <div>
              <h3>${esc(text(tx("Cała szklarnia z góry", "Whole greenhouse from above", "Вся теплиця зверху", "Вся теплица сверху", "Bütün istixana yuxarıdan", "Todo el invernadero desde arriba", "Buong bahay-taniman mula sa taas", "Seluruh rumah kaca dari atas", "पूरै ग्रीनहाउस माथिबाट")))}</h3>
              <p>${esc(text(tx("Stoisz plecami do pierwszych naw. Po środku jest droga. Po jednej stronie jest lewa część, po drugiej prawa część. Liczba naw może być różna: 37, 38 albo 39.", "Stand with your back to the first naves. The road is in the middle. One side is left, the other is right. The number of naves may be 37, 38 or 39.", "Станьте спиною до перших нав. Посередині дорога. З одного боку ліва частина, з іншого права. Нав може бути 37, 38 або 39.", "Встаньте спиной к первым навам. Посередине дорога. С одной стороны левая часть, с другой правая. Нав может быть 37, 38 или 39.", "İlk navalara arxanızla dayanın. Ortada yol var. Bir tərəf sol, o biri sağdır. Nava sayı 37, 38 və ya 39 ola bilər.", "Ponte de espaldas a las primeras naves. En el medio está el camino. Un lado es izquierdo y otro derecho. Puede haber 37, 38 o 39 naves.", "Tumayo na nakatalikod sa unang mga nawa. Nasa gitna ang daan. Isang bahagi ay kaliwa, isa ay kanan. Puwedeng 37, 38 o 39 nawa.", "Berdiri membelakangi nave pertama. Jalan ada di tengah. Satu sisi kiri, satu sisi kanan. Jumlah nave bisa 37, 38 atau 39.", "पहिलो नावातिर ढाड फर्काएर उभिनुहोस्। बीचमा बाटो छ। एक भाग बायाँ, अर्को दायाँ। नावा ३७, ३८ वा ३९ हुन सक्छ।")))}</p>
              <div class="schema">
                <div class="greenhouse-map" aria-label="greenhouse schema">
                  <div class="green-side">${Array.from({ length: 12 }, (_, i) => `<span class="nave-cell">${i === 0 ? "1" : i === 11 ? "..." : ""}</span>`).join("")}</div>
                  <div class="center-road">${esc(text(tx("droga środkowa", "middle road", "центральна дорога", "центральная дорога", "orta yol", "camino central", "gitnang daan", "jalan tengah", "बीच बाटो")))}</div>
                  <div class="green-side">${Array.from({ length: 12 }, (_, i) => `<span class="nave-cell">${i === 0 ? "1" : i === 11 ? "..." : ""}</span>`).join("")}</div>
                </div>
              </div>
              <div class="btn-row">${action("assets/orientation/sklarnia-etap-excel.png", ui("showFullImage"), "secondary")}</div>
            </div>
          </article>
          <article class="step-card">
            <span class="step-number">2</span>
            <div>
              <h3>${esc(text(tx("Jedna nawa", "One nave", "Одна нава", "Одна нава", "Bir nava", "Una nave", "Isang nave", "Satu nave", "एउटा नावा")))}</h3>
              <p>${esc(text(tx("Patrzysz na nawę. Nie ma tu różnicy prawa/lewa strona szklarni. Od lewej zaczyna się pierwsze wejście. W nawie jest 5 wejść obok siebie i 10 rzędów.", "You look at one nave. Here we do not use greenhouse left/right. The first entrance starts from the left. One nave has 5 entrances next to each other and 10 rows.", "Ви дивитесь на одну наву. Тут не ділимо на праву/ліву сторону теплиці. Зліва починається перший вхід. У наві 5 входів поруч і 10 рядів.", "Вы смотрите на одну наву. Здесь не делим на правую/левую сторону теплицы. Слева начинается первый вход. В наве 5 входов рядом и 10 рядов.", "Bir navaya baxırsınız. Burada istixananın sağ/sol tərəfi fərqləndirilmir. Soldan birinci giriş başlayır. Navada yanaşı 5 giriş və 10 sıra var.", "Miras una nave. Aqui no usamos lado derecho/izquierdo del invernadero. Desde la izquierda empieza la primera entrada. Hay 5 entradas y 10 filas.", "Tinitingnan ang isang nawa. Dito hindi ginagamit ang kanan/kaliwa ng bahay-taniman. Sa kaliwa nagsisimula ang unang pasukan. May 5 pasukan at 10 hanay.", "Anda melihat satu nave. Di sini tidak memakai kanan/kiri rumah kaca. Dari kiri mulai pintu pertama. Ada 5 pintu dan 10 baris.", "एउटा नावा हेर्दै हुनुहुन्छ। यहाँ ग्रीनहाउसको दायाँ/बायाँ फरक छैन। बायाँबाट पहिलो प्रवेश सुरु हुन्छ। ५ प्रवेश र १० पङ्क्ति हुन्छ।")))}</p>
              <div class="schema">
                <div class="nave-diagram">
                  ${Array.from({ length: 5 }, (_, i) => `<div class="entry"><span>${i + 1}</span><div class="entry-rows">${Array.from({ length: 10 }, (_, r) => `<div class="row-line">${r + 1}</div>`).join("")}</div></div>`).join("")}
                </div>
              </div>
            </div>
          </article>
          <article class="step-card">
            <span class="step-number">3</span>
            <div>
              <h3>${esc(text(tx("Wejście do rzędu", "Entry into the row", "Вхід у ряд", "Вход в ряд", "Sıraya giriş", "Entrada a la fila", "Pagpasok sa hanay", "Masuk ke baris", "पङ्क्तिमा प्रवेश")))}</h3>
              <p>${esc(text(tx("Patrzysz w przejście. Po lewej jest lewa strona, czyli lewy rząd. Po prawej jest prawa strona, czyli prawy rząd. Praca odbywa się w rzędzie, a nie 'obok rzędu'.", "You look into the passage. On the left is the left side, the left row. On the right is the right side, the right row. Work is in the row, not next to the row.", "Ви дивитесь у прохід. Зліва є ліва сторона, тобто лівий ряд. Справа є права сторона, тобто правий ряд. Робота відбувається в ряду, не біля ряду.", "Вы смотрите в проход. Слева левая сторона, то есть левый ряд. Справа правая сторона, то есть правый ряд. Работа в ряду, не возле ряда.", "Keçidə baxırsınız. Solda sol tərəf, yəni sol sıra var. Sağda sağ tərəf, yəni sağ sıra var. İş sıranın içindədir, sıranın yanında deyil.", "Miras al pasillo. A la izquierda está el lado izquierdo, es decir la fila izquierda. A la derecha está el lado derecho, es decir la fila derecha. Se trabaja dentro de la fila, no al lado.", "Tumingin sa daanan. Sa kaliwa ang kaliwang bahagi, ibig sabihin kaliwang hanay. Sa kanan ang kanang bahagi, ibig sabihin kanang hanay. Ang trabaho ay nasa hanay, hindi sa tabi.", "Lihat ke lorong. Di kiri ada sisi kiri, yaitu baris kiri. Di kanan ada sisi kanan, yaitu baris kanan. Kerja di dalam baris, bukan di samping.", "पासेजतिर हेर्नुहोस्। बायाँतिर बायाँ भाग, अर्थात् बायाँ लाइन हुन्छ। दायाँतिर दायाँ भाग, अर्थात् दायाँ लाइन हुन्छ। काम लाइनभित्र हुन्छ, लाइनको छेउमा होइन।")))}</p>
              <div class="schema">
                <div class="passage-diagram">
                  <div class="row-side">${esc(text(tx("lewa strona / lewy rząd", "left side / left row", "ліва сторона / лівий ряд", "левая сторона / левый ряд", "sol tərəf / sol sıra", "lado izquierdo / fila izquierda", "kaliwang bahagi / kaliwang hanay", "sisi kiri / baris kiri", "बायाँ भाग / बायाँ लाइन")))}</div>
                  <div class="work-passage">
                    <span class="passage-label">${esc(text(tx("przejście", "passage", "прохід", "проход", "keçid", "pasillo", "daanan", "lorong", "पासेज")))}</span>
                    <div class="floor-number-strip in-passage" aria-label="${esc(text(tx("Numeracja przęseł na podłodze", "Section numbers on the floor", "Нумерація секцій на підлозі", "Нумерация секций на полу", "Yerdə bölmə nömrələri", "Números de sección en el suelo", "Mga numero ng seksyon sa sahig", "Nomor bagian di lantai", "भुइँमा सेक्शन नम्बर"))) }">
                      <span>27</span><span>26</span><span>25</span><span>...</span><span>3</span><span>2</span><span>1</span>
                    </div>
                  </div>
                  <div class="row-side">${esc(text(tx("prawa strona / prawy rząd", "right side / right row", "права сторона / правий ряд", "правая сторона / правый ряд", "sağ tərəf / sağ sıra", "lado derecho / fila derecha", "kanang bahagi / kanang hanay", "sisi kanan / baris kanan", "दायाँ भाग / दायाँ लाइन")))}</div>
                </div>
                <p class="floor-note">${esc(text(tx("Numer przęsła jest oznaczony na podłodze w przejściu. Często numeracja jest od 1 do 27, ale na różnych szklarniach może być inna. Zawsze sprawdzaj numer w tej szklarni.", "The section number is marked on the floor in the passage. Often the numbers go from 1 to 27, but they can be different in different greenhouses. Always check the number in that greenhouse.", "Номер секції позначений на підлозі в проході. Часто нумерація йде від 1 до 27, але в різних теплицях може бути інакше. Завжди перевіряйте номер у цій теплиці.", "Номер секции указан на полу в проходе. Часто нумерация идет от 1 до 27, но в разных теплицах может быть по-разному. Всегда проверяйте номер в этой теплице.", "Bölmənin nömrəsi keçiddə yerdə göstərilir. Çox vaxt nömrələr 1-dən 27-yə qədərdir, amma müxtəlif istixanalarda fərqli ola bilər. Həmişə həmin istixanada nömrəni yoxlayın.", "El número de sección está marcado en el suelo del pasillo. A menudo va del 1 al 27, pero puede ser diferente según el invernadero. Revisa siempre el número en ese invernadero.", "Nakasulat sa sahig ng daanan ang numero ng seksyon. Kadalasan 1 hanggang 27, pero maaaring iba sa bawat bahay-taniman. Palaging tingnan ang numero sa bahay-taniman na iyon.", "Nomor bagian tertulis di lantai lorong. Biasanya dari 1 sampai 27, tetapi bisa berbeda di tiap rumah kaca. Selalu cek nomor di rumah kaca itu.", "सेक्शन नम्बर पासेजको भुइँमा लेखिएको हुन्छ। प्रायः १ देखि २७ सम्म हुन्छ, तर फरक ग्रीनहाउसमा फरक हुन सक्छ। सधैं त्यही ग्रीनहाउसको नम्बर जाँच गर्नुहोस्।")))}</p>
              </div>
            </div>
          </article>
        </section>
        <section class="section greenhouse-work">
          <h2>${esc(text(tx("Jak użyć tego w pracy", "How to use this at work", "Як використати це в роботі", "Как использовать это в работе", "Bunu işdə necə istifadə etmək", "Cómo usar esto en el trabajo", "Paano ito gamitin sa trabaho", "Cara memakai ini saat kerja", "काममा यसलाई कसरी प्रयोग गर्ने")))}</h2>
          <section class="card green-flow">
            <h3>${esc(text(tx("Szukaj miejsca zawsze w tej kolejności", "Always find the place in this order", "Завжди шукайте місце в такій черзі", "Всегда ищите место в таком порядке", "Yeri həmişə bu ardıcıllıqla tapın", "Busca el lugar siempre en este orden", "Hanapin ang lugar palagi sa ganitong ayos", "Cari tempat selalu dengan urutan ini", "ठाउँ सधैं यही क्रममा खोज्नुहोस्")))}</h3>
            <div class="work-flow">${flowChips}</div>
          </section>
          <section class="module-grid two section">${workCardsHtml}</section>
        </section>
        ${tabletLinkCard("yellow")}
      </main>
    `;
  }

  function readerTabButton(tab, active) {
    return `<button class="pill${active ? " active" : ""}" type="button" data-reader-tab="${esc(tab.id)}">${esc(text(tab.title))}</button>`;
  }

  function readerStep(item, index) {
    const isStructuredStep = item && typeof item === "object" && ("text" in item || "note" in item || "tone" in item);
    const value = isStructuredStep ? item.text : item;
    const note = isStructuredStep && item.note ? `<small>${esc(text(item.note))}</small>` : "";
    const tone = isStructuredStep && item.tone ? ` ${esc(item.tone)}` : "";
    return `
      <article class="step-card reader-step${tone}">
        <span class="step-number">${index + 1}</span>
        <div><p>${esc(text(value))}</p>${note}</div>
      </article>
    `;
  }

  function readerStepValue(item) {
    return item && typeof item === "object" && ("text" in item || "note" in item || "tone" in item) ? item.text : item;
  }

  function readerStepList(steps) {
    return (steps || []).map((item, index) => readerStep(item, index)).join("");
  }

  function readerSection(section) {
    return `
      <section class="reader-section">
        <h3>${esc(text(section.title))}</h3>
        ${section.lead ? `<p class="reader-section-lead">${esc(text(section.lead))}</p>` : ""}
        <div class="steps">${readerStepList(section.steps)}</div>
      </section>
    `;
  }

  function renderReader(activeId = "start") {
    const active = DATA.readerTabs.find((tab) => tab.id === activeId) || DATA.readerTabs[0];
    const tabs = DATA.readerTabs.map((tab) => readerTabButton(tab, tab.id === active.id)).join("");
    const steps = active.sections
      ? active.sections.map(readerSection).join("")
      : `<div class="steps">${readerStepList(active.steps)}</div>`;
    const tips = (active.tips || []).map((tip) => `<li>${esc(text(tip))}</li>`).join("");
    const imageOverlaySteps = (active.imageSteps || active.steps || []).map(readerStepValue).filter(Boolean);
    const imageBlocks = [
      active.image ? { src: active.image, caption: active.imageCaption } : null,
      ...(active.images || [])
    ].filter(Boolean).map((image) => {
      const overlaySteps = (image.steps || imageOverlaySteps).map(readerStepValue).filter(Boolean);
      const overlay = overlaySteps.length ? `
        <div class="reader-image-translation${overlaySteps.length > 5 ? " compact" : ""}">
          <strong>${esc(text(tx("Tłumaczenie do zdjęcia", "Translation for the image", "Переклад до зображення", "Перевод к изображению", "Şəkil üçün tərcümə", "Traducción de la imagen", "Salin para sa larawan", "Terjemahan untuk gambar", "तस्वीरको अनुवाद")))}</strong>
          <ol>${overlaySteps.map((step) => `<li>${esc(text(step))}</li>`).join("")}</ol>
        </div>
      ` : "";
      return `
      <figure class="media reader-visual">
        <div class="reader-visual-frame">
          <img loading="lazy" src="${esc(image.src)}" alt="${esc(text(image.caption))}">
        </div>
        ${overlay}
        <figcaption>${esc(text(image.caption))}</figcaption>
      </figure>
    `;
    }).join("");

    app.innerHTML = `
      <main class="page">
        ${pageHero()}
        <section class="card yellow">
          <p><strong>${esc(ui("important"))}:</strong> ${esc(text(DATA.pages.reader.lead))}</p>
        </section>
        <section class="section">
          <div class="pill-row">${tabs}</div>
          <section class="reader-panel">
            <div class="reader-panel-head">
              <span class="icon-box yellow">${iconMap.reader}</span>
              <div>
                <h2>${esc(text(active.title))}</h2>
                ${active.lead ? `<p>${esc(text(active.lead))}</p>` : ""}
              </div>
            </div>
            ${steps}
            ${tips ? `<div class="reader-tips"><strong>${esc(ui("important"))}</strong><ul>${tips}</ul></div>` : ""}
          </section>
          ${imageBlocks ? `<details class="card section media-details"><summary>${esc(text(tx("Zdj\u0119cia i t\u0142umaczenia", "Photos and translations", "\u0424\u043e\u0442\u043e \u0456 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434", "\u0424\u043e\u0442\u043e \u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434", "\u015e\u0259kill\u0259r v\u0259 t\u0259rc\u00fcm\u0259l\u0259r", "Fotos y traducciones", "Mga larawan at salin", "Foto dan terjemahan", "\u092b\u094b\u091f\u094b \u0930 \u0905\u0928\u0941\u0935\u093e\u0926")))}</summary><div class="details-body photo-grid">${imageBlocks}</div></details>` : ""}
        </section>
      </main>
    `;

    app.querySelectorAll("[data-reader-tab]").forEach((button) => {
      button.addEventListener("click", () => renderReader(button.dataset.readerTab));
    });
  }

  function renderMedical() {
    const cards = DATA.medical.map((item) => {
      const notes = item.body.map((note) => `<li>${esc(text(note))}</li>`).join("");
      const maps = (item.maps || []).map((map) => action(map.url, `${ui("openMap")} - ${map.label}`, item.tone)).join("");
      const oneMap = item.map ? action(item.map, ui("openMap"), item.tone) : "";
      const phones = (item.phones || []).map((phone) => `
        <article class="person">
          <div class="person-name">${esc(phone.label)}</div>
          <div class="btn-row"><a class="btn secondary" href="${esc(telHref(phone.phone))}">${esc(ui("call"))} ${esc(formatPhone(phone.phone))}</a></div>
        </article>
      `).join("");
      return `
        <section class="${cardClass(item.tone)}">
          <h2>${esc(text(item.title))}</h2>
          <ul class="list">${notes}</ul>
          ${maps || oneMap ? `<div class="btn-row">${oneMap}${maps}</div>` : ""}
          ${phones ? `<div class="section contact-group">${phones}</div>` : ""}
        </section>
      `;
    }).join("");

    app.innerHTML = `<main class="page">${pageHero()}<div class="module-grid">${cards}</div><section class="card red section"><h2>112</h2><p>${esc(text(tx("W sytuacji zagrożenia życia dzwoń pod numer 112.", "In a life-threatening situation call 112.", "У ситуації загрози життю телефонуйте 112.", "В ситуации угрозы жизни звоните 112.", "Həyat təhlükəsi olduqda 112-yə zəng edin.", "En peligro de vida llama al 112.", "Kung buhay ay nasa panganib, tumawag sa 112.", "Jika mengancam nyawa, hubungi 112.", "जीवन जोखिममा भए 112 मा फोन गर्नुहोस्।")))}</p><div class="btn-row"><a class="btn red" href="tel:112">112</a></div></section></main>`;
  }

  function renderContacts(activeGroup = "coordinators") {
    function personCard(person, groupLabel = "") {
      const role = person.role || groupLabel;
      const message = `${role ? role + " " : ""}${person.name}`;
      return `
        <article class="person">
          <div class="person-head">
            <div>
              <div class="person-name">${esc(person.name)}</div>
              <div class="person-role">${esc(role)}</div>
            </div>
            ${groupLabel && !person.role ? `<span class="mini-tag">${esc(groupLabel)}</span>` : ""}
          </div>
          ${person.phone ? phoneActions(person.phone, `${ui("whatsapp")} ${esc(message)}`) : `<p class="empty-note">${esc(text(tx("Kontakt zostanie uzupełniony.", "Contact will be added.", "Контакт буде доданий.", "Контакт будет добавлен.", "Kontakt əlavə ediləcək.", "El contacto será añadido.", "Idaragdag ang contact.", "Kontak akan ditambahkan.", "सम्पर्क थपिनेछ।")))}</p>`}
        </article>
      `;
    }

    const groups = [
      { id: "coordinators", label: text(tx("Koordynatorzy", "Coordinators", "Координатори", "Координаторы", "Koordinatorlar", "Coordinadores", "Coordinators", "Koordinator", "कोर्डिनेटरहरू")), people: DATA.contacts.coordinators, tag: text(tx("Koordynator", "Coordinator", "Координатор", "Координатор", "Koordinator", "Coordinador", "Coordinator", "Koordinator", "कोर्डिनेटर")) },
      { id: "warehouse", label: text(tx("Magazyn", "Warehouse", "Склад", "Склад", "Anbar", "Almacén", "Warehouse", "Gudang", "गोदाम")), people: DATA.contacts.warehouse, tag: text(tx("Magazyn", "Warehouse", "Склад", "Склад", "Anbar", "Almacén", "Warehouse", "Gudang", "गोदाम")) },
      ...Object.entries(DATA.contacts.greenhouse).map(([stage, people]) => ({ id: stage, label: stage, people, tag: stage }))
    ];

    const current = groups.find((group) => group.id === activeGroup) || groups[0];
    const pills = groups.map((group) => `<button class="pill${group.id === current.id ? " active" : ""}" type="button" data-contact-group="${esc(group.id)}">${esc(group.label)}</button>`).join("");
    const people = current.people.map((person) => personCard(person, current.tag)).join("");

    app.innerHTML = `
      <main class="page">
        ${pageHero()}
        <section class="section">
          <div class="pill-row">${pills}</div>
          <h2>${esc(current.label)}</h2>
          <div class="contact-group">${people}</div>
        </section>
      </main>
    `;

    app.querySelectorAll("[data-contact-group]").forEach((button) => {
      button.addEventListener("click", () => renderContacts(button.dataset.contactGroup));
    });
  }

  function renderGroups() {
    const cards = DATA.groups.map((item) => `
      <article class="${cardClass(item.tone)}">
        <h2>${esc(text(item.title))}</h2>
        <div class="btn-row">${action(item.url, `${ui("open")} ${text(item.title)}`, "blue")}</div>
      </article>
    `).join("");
    app.innerHTML = `<main class="page">${pageHero()}<section class="module-grid">${cards}</section></main>`;
  }

  function renderCity() {
    const cityItems = [...DATA.city, ...(DATA.cityExtras || [])];
    const cityLinks = (item) => {
      const links = item.links || (item.url ? [{ url: item.url, label: item.button || DATA.ui.openMap, tone: item.tone }] : []);
      const buttons = links.map((link) => action(link.url, text(link.label), link.tone || item.tone)).join("");
      const phone = item.phone ? `<a class="btn secondary" href="${esc(telHref(item.phone))}">${esc(ui("call"))} ${esc(formatPhone(item.phone))}</a>` : "";
      return buttons || phone ? `<div class="btn-row city-links">${buttons}${phone}</div>` : "";
    };
    const cityList = (items) => items && items.length ? `<ul class="list city-rule-list">${items.map((entry) => `<li>${esc(text(entry))}</li>`).join("")}</ul>` : "";
    {
      const cityMain = DATA.city || [];
      const compactCityCategories = [
        {
          tone: "blue",
          icon: "document",
          title: tx("Urząd i dokumenty", "Office and documents", "Установа і документи", "Учреждение и документы", "İdarə və sənədlər", "Oficina y documentos", "Opisina at dokumento", "Kantor dan dokumen", "कार्यालय र कागजात"),
          lead: tx("Karta pobytu, PESEL, urząd i aplikacje urzędowe.", "Residence card, PESEL, office and official apps.", "Карта побиту, PESEL, установа і державні додатки.", "Карта побыту, PESEL, учреждение и официальные приложения.", "Yaşayış kartı, PESEL, idarə və rəsmi tətbiqlər.", "Residencia, PESEL, oficina y apps oficiales.", "Residence card, PESEL, opisina at official apps.", "Kartu tinggal, PESEL, kantor dan aplikasi resmi.", "Residence card, PESEL, कार्यालय र सरकारी एपहरू।"),
          items: [cityMain[0], cityMain[1], cityMain[5]].filter(Boolean)
        },
        {
          tone: "yellow",
          icon: "bank",
          title: tx("Banki i bankomaty", "Banks and ATMs", "Банки і банкомати", "Банки и банкоматы", "Banklar və bankomatlar", "Bancos y cajeros", "Bangko at ATM", "Bank dan ATM", "बैंक र ATM"),
          lead: tx("Mapy do banków i najbliższych bankomatów.", "Maps to banks and nearby ATMs.", "Карти до банків і найближчих банкоматів.", "Карты к банкам и ближайшим банкоматам.", "Banklara və yaxın bankomatlara xəritələr.", "Mapas a bancos y cajeros cercanos.", "Mapa papuntang bangko at malapit na ATM.", "Peta ke bank dan ATM terdekat.", "बैंक र नजिकका ATM का नक्सा।"),
          items: [cityMain[2], cityMain[3], cityMain[4]].filter(Boolean)
        },
        {
          tone: "blue",
          icon: "map",
          title: tx("Transport", "Transport", "Транспорт", "Транспорт", "Nəqliyyat", "Transporte", "Transport", "Transportasi", "यातायात"),
          lead: tx("Aplikacje do jazdy po mieście i pociągów.", "Apps for city travel and trains.", "Додатки для міста і поїздів.", "Приложения для города и поездов.", "Şəhər və qatar üçün tətbiqlər.", "Apps para ciudad y trenes.", "Apps para sa city at tren.", "Aplikasi untuk kota dan kereta.", "शहर र रेलका एपहरू।"),
          items: [cityMain[6], cityMain[7]].filter(Boolean)
        }
      ];
      const citySimpleItem = (item) => `
        <div class="city-simple-item">
          <div class="city-simple-text">
            <h3>${esc(text(item.title))}</h3>
            ${item.address ? `<p class="city-meta">${esc(text(item.address))}</p>` : ""}
            <p>${esc(text(item.note))}</p>
            ${cityList(item.list)}
          </div>
          ${cityLinks(item)}
        </div>
      `;
      const citySimpleGroups = compactCityCategories.map((category) => `
        <details class="${cardClass(category.tone)} city-simple-group">
          <summary>
            <span class="city-card-icon">${iconMap[category.icon] || iconMap.city}</span>
            <span>${esc(text(category.title))}</span>
          </summary>
          <div class="city-simple-body">
            <p class="city-simple-lead">${esc(text(category.lead))}</p>
            ${category.items.map(citySimpleItem).join("")}
          </div>
        </details>
      `).join("");
      app.innerHTML = `
        <main class="page city-page-simple">
          ${pageHero()}
          <section class="city-simple-list">${citySimpleGroups}</section>
        </main>
      `;
      return;
    }
  }

  function renderGlossary() {
    const groups = DATA.glossaryGroups || [];
    const entries = DATA.glossary || [];
    const labels = {
      search: tx("Szukaj słowa, np. reader, rząd, przerwa...", "Search a word, e.g. reader, row, break...", "Шукайте слово, напр. reader, ряд, перерва...", "Ищите слово, напр. reader, ряд, перерыв...", "Söz axtarın, məsələn reader, sıra, fasilə...", "Busca una palabra, por ejemplo reader, fila, pausa...", "Maghanap ng salita, hal. reader, row, break...", "Cari kata, mis. reader, baris, istirahat...", "शब्द खोज्नुहोस्, जस्तै reader, लाइन, ब्रेक..."),
      count: tx("haseł", "terms", "слів", "слов", "söz", "términos", "salita", "istilah", "शब्द"),
      empty: tx("Nie znaleziono hasła. Spróbuj krócej, np. tag albo przerwa.", "No term found. Try shorter, e.g. tag or break.", "Не знайдено. Спробуйте коротше, напр. tag або перерва.", "Не найдено. Попробуйте короче, напр. tag или перерыв.", "Tapılmadı. Daha qısa yazın, məsələn tag və ya fasilə.", "No encontrado. Prueba más corto, por ejemplo tag o pausa.", "Walang nahanap. Subukan mas maikli, hal. tag o break.", "Tidak ditemukan. Coba lebih pendek, mis. tag atau istirahat.", "भेटिएन। छोटो लेख्नुहोस्, जस्तै tag वा break।"),
      tipTitle: tx("Jak korzystać", "How to use", "Як користуватись", "Как пользоваться", "Necə istifadə etmək", "Cómo usarlo", "Paano gamitin", "Cara memakai", "कसरी प्रयोग गर्ने"),
      tip: tx("Gdy ktoś powie polskie słowo, wpisz je w wyszukiwarkę albo znajdź w grupie. Czytaj tylko krótkie znaczenie i przykład.", "When someone says a Polish word, type it in search or find it in a group. Read only the short meaning and example.", "Коли хтось скаже польське слово, впишіть його в пошук або знайдіть у групі. Читайте коротке значення і приклад.", "Когда кто-то скажет польское слово, введите его в поиск или найдите в группе. Читайте короткое значение и пример.", "Kimsə polyak sözü deyəndə onu axtarışa yazın və ya qrupda tapın. Qısa mənanı və nümunəni oxuyun.", "Cuando alguien diga una palabra polaca, escríbela en búsqueda o búscala en el grupo. Lee el significado corto y el ejemplo.", "Kapag may nagsabi ng Polish na salita, i-type sa search o hanapin sa grupo. Basahin ang maikling kahulugan at halimbawa.", "Saat ada kata Polandia, ketik di pencarian atau cari di grup. Baca arti pendek dan contoh.", "कसैले पोलिस शब्द भने खोजीमा लेख्नुहोस् वा समूहमा खोज्नुहोस्। छोटो अर्थ र उदाहरण मात्र पढ्नुहोस्।")
    };
    const entryCard = (item) => {
      const searchable = [
        item.term,
        text(item.local),
        text(item.meaning),
        text(item.example)
      ].join(" ").toLowerCase();
      return `
      <article class="glossary-card" data-glossary-card data-search="${esc(searchable)}">
        <div class="glossary-term-row">
          <span class="glossary-term">${esc(item.term)}</span>
          <span class="glossary-local">${esc(text(item.local))}</span>
        </div>
        <p>${esc(text(item.meaning))}</p>
        <div class="glossary-example">${esc(text(item.example))}</div>
      </article>
    `;
    };
    const groupHtml = groups.map((group, index) => {
      const groupEntries = entries.filter((item) => item.group === group.id);
      const cards = groupEntries.map(entryCard).join("");
      if (!cards) return "";
      return `
        <details class="${cardClass(group.tone)} glossary-group" data-glossary-group data-first="${index === 0 ? "true" : "false"}"${index === 0 ? " open" : ""}>
          <summary class="glossary-summary">
            <span class="city-card-icon">${iconMap.document}</span>
            <h2>${esc(text(group.title))}</h2>
            <span class="speech-count">${groupEntries.length}</span>
          </summary>
          <div class="glossary-list">${cards}</div>
        </details>
      `;
    }).join("");

    app.innerHTML = `
      <main class="page glossary-page">
        ${pageHero()}
        <section class="card blue glossary-help">
          <div>
            <h2>${esc(text(labels.tipTitle))}</h2>
            <p>${esc(text(labels.tip))}</p>
          </div>
          <strong class="glossary-count">${entries.length} ${esc(text(labels.count))}</strong>
        </section>
        <section class="glossary-search-box">
          <input class="glossary-search" type="search" inputmode="search" autocomplete="off" placeholder="${esc(text(labels.search))}" data-glossary-search>
          <div class="glossary-empty is-hidden" data-glossary-empty>${esc(text(labels.empty))}</div>
        </section>
        <section class="stack section">${groupHtml}</section>
      </main>
    `;
    const search = app.querySelector("[data-glossary-search]");
    const cards = Array.from(app.querySelectorAll("[data-glossary-card]"));
    const groupNodes = Array.from(app.querySelectorAll("[data-glossary-group]"));
    const empty = app.querySelector("[data-glossary-empty]");
    if (search) {
      search.addEventListener("input", () => {
        const query = search.value.trim().toLowerCase();
        let visible = 0;
        cards.forEach((card) => {
          const show = !query || (card.dataset.search || "").includes(query);
          card.classList.toggle("is-hidden", !show);
          if (show) visible += 1;
        });
        groupNodes.forEach((group) => {
          const hasVisibleCard = !!group.querySelector("[data-glossary-card]:not(.is-hidden)");
          group.classList.toggle("is-hidden", !hasVisibleCard);
          if (query && hasVisibleCard) {
            group.open = true;
          } else if (!query) {
            group.open = group.dataset.first === "true";
          }
        });
        if (empty) empty.classList.toggle("is-hidden", visible !== 0);
      });
    }
  }

  function renderSpeech() {
    const groups = DATA.speechGroups || [];
    const phrases = DATA.speechPhrases || [];
    const labels = {
      how: tx("Jak to działa", "How it works", "Як це працює", "Как это работает", "Bu necə işləyir", "Cómo funciona", "Paano ito gumagana", "Cara kerjanya", "यसले कसरी काम गर्छ"),
      howText: tx("Wybierz zdanie w swoim języku. Telefon powie je po polsku. Możesz też pokazać polskie zdanie brygadziście.", "Choose a sentence in your language. The phone will say it in Polish. You can also show the Polish sentence to the brigadier.", "Оберіть речення своєю мовою. Телефон скаже його польською. Також можна показати польське речення бригадиру.", "Выберите фразу на своём языке. Телефон скажет её по-польски. Можно также показать польскую фразу бригадиру.", "Cümləni öz dilinizdə seçin. Telefon onu polyakca deyəcək. Polyak cümləni briqadirə də göstərə bilərsiniz.", "Elige una frase en tu idioma. El teléfono la dirá en polaco. También puedes mostrar la frase polaca al encargado.", "Pumili ng pangungusap sa iyong wika. Sasabihin ito ng telepono sa Polish. Maaari mo ring ipakita ang Polish na pangungusap sa brigadier.", "Pilih kalimat dalam bahasa Anda. Telepon akan mengucapkannya dalam bahasa Polandia. Anda juga bisa menunjukkan kalimat Polandia kepada mandor.", "आफ्नो भाषामा वाक्य छान्नुहोस्। फोनले पोलिसमा बोल्छ। पोलिस वाक्य ब्रिगेडियरलाई देखाउन पनि सक्नुहुन्छ।"),
      search: tx("Szukaj...", "Search...", "Пошук...", "Поиск...", "Axtar...", "Buscar...", "Hanapin...", "Cari...", "खोज्नुहोस्..."),
      polish: tx("Telefon powie po polsku:", "The phone will say in Polish:", "Телефон скаже польською:", "Телефон скажет по-польски:", "Telefon polyakca deyəcək:", "El teléfono dirá en polaco:", "Sasabihin ng telepono sa Polish:", "Telepon akan mengatakan dalam bahasa Polandia:", "फोनले पोलिसमा भन्छ:"),
      speak: tx("Powiedz po polsku", "Say in Polish", "Сказати польською", "Сказать по-польски", "Polyakca de", "Decir en polaco", "Sabihin sa Polish", "Ucapkan Polandia", "पोलिसमा बोल्नुहोस्"),
      copy: tx("Kopiuj", "Copy", "Копіювати", "Копировать", "Kopyala", "Copiar", "Kopyahin", "Salin", "कपी गर्नुहोस्"),
      copied: tx("Skopiowano polskie zdanie.", "Polish sentence copied.", "Польське речення скопійовано.", "Польская фраза скопирована.", "Polyak cümlə kopyalandı.", "Frase polaca copiada.", "Nakopya ang Polish na pangungusap.", "Kalimat Polandia disalin.", "पोलिस वाक्य कपी भयो।"),
      speaking: tx("Telefon mówi po polsku:", "Phone is speaking in Polish:", "Телефон говорить польською:", "Телефон говорит по-польски:", "Telefon polyakca danışır:", "El teléfono habla en polaco:", "Nagsasalita ang telepono sa Polish:", "Telepon berbicara dalam bahasa Polandia:", "फोन पोलिसमा बोल्दैछ:"),
      noVoice: tx("Ten telefon nie pozwolił uruchomić głosu. Pokaż albo skopiuj polskie zdanie.", "This phone did not allow voice. Show or copy the Polish sentence.", "Цей телефон не дозволив увімкнути голос. Покажіть або скопіюйте польське речення.", "Этот телефон не разрешил включить голос. Покажите или скопируйте польскую фразу.", "Bu telefon səsi işə salmağa icazə vermədi. Polyak cümləni göstərin və ya kopyalayın.", "Este teléfono no permitió activar la voz. Muestra o copia la frase polaca.", "Hindi pinayagan ng telepono ang boses. Ipakita o kopyahin ang Polish na pangungusap.", "Telepon ini tidak mengizinkan suara. Tunjukkan atau salin kalimat Polandia.", "यो फोनले आवाज चलाउन दिएन। पोलिस वाक्य देखाउनुहोस् वा कपी गर्नुहोस्।"),
      empty: tx("Nie znaleziono takiego zdania.", "No sentence found.", "Такого речення не знайдено.", "Такая фраза не найдена.", "Belə cümlə tapılmadı.", "No se encontró esa frase.", "Walang nahanap na pangungusap.", "Kalimat tidak ditemukan.", "यस्तो वाक्य भेटिएन।")
    };
    const phraseCard = (item) => {
      const nativeText = text(item.label);
      const polishText = item.say || "";
      const searchable = `${polishText} ${nativeText}`.toLowerCase();
      return `
        <article class="speech-card" data-speech-card data-key="${esc(searchable)}">
          <div class="speech-card-main">
            <p class="speech-native">${esc(nativeText)}</p>
            <p class="speech-polish-label">${esc(text(labels.polish))}</p>
            <p class="speech-polish">${esc(polishText)}</p>
          </div>
          <div class="speech-actions">
            <button type="button" class="btn speech-play" data-speech="${esc(polishText)}">${iconMap.speech}${esc(text(labels.speak))}</button>
            <button type="button" class="btn secondary speech-copy" data-copy="${esc(polishText)}">${esc(text(labels.copy))}</button>
          </div>
        </article>
      `;
    };
    const groupHtml = groups.map((group, index) => {
      const groupPhrases = phrases.filter((item) => item.group === group.id);
      const cards = groupPhrases.map(phraseCard).join("");
      if (!cards) return "";
      return `
        <details class="${cardClass(group.tone)} speech-group"${index === 0 ? " open" : ""} data-speech-group>
          <summary>
            <span class="city-card-icon">${iconMap[group.icon] || iconMap.speech}</span>
            <span>${esc(text(group.title))}</span>
            <span class="speech-count">${groupPhrases.length}</span>
          </summary>
          <div class="speech-list">${cards}</div>
        </details>
      `;
    }).join("");

    app.innerHTML = `
      <main class="page speech-page">
        ${pageHero()}
        <section class="card blue speech-intro">
          <h2>${esc(text(labels.how))}</h2>
          <p>${esc(text(labels.howText))}</p>
          <label class="speech-search-label" for="speechSearch">${esc(text(labels.search))}</label>
          <input id="speechSearch" class="speech-search" type="search" aria-label="${esc(text(labels.search))}" autocomplete="off">
          <p id="speechStatus" class="speech-status" aria-live="polite"></p>
        </section>
        <section class="speech-groups">${groupHtml}</section>
        <p class="speech-empty" hidden>${esc(text(labels.empty))}</p>
      </main>
    `;

    const status = app.querySelector("#speechStatus");
    const setStatus = (value) => {
      if (status) status.textContent = value;
    };
    const speakPolish = (value) => {
      if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
        setStatus(`${text(labels.noVoice)} ${value}`);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(value);
      utterance.lang = "pl-PL";
      utterance.rate = 0.92;
      utterance.pitch = 1;
      const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
      const polishVoice = voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("pl"));
      if (polishVoice) utterance.voice = polishVoice;
      utterance.onstart = () => setStatus(`${text(labels.speaking)} ${value}`);
      utterance.onerror = () => setStatus(`${text(labels.noVoice)} ${value}`);
      utterance.onend = () => setStatus(value);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    };
    const copyPolish = async (value) => {
      try {
        await navigator.clipboard.writeText(value);
        setStatus(`${text(labels.copied)} ${value}`);
      } catch {
        setStatus(value);
      }
    };
    app.querySelectorAll("[data-speech]").forEach((button) => {
      button.addEventListener("click", () => speakPolish(button.dataset.speech || ""));
    });
    app.querySelectorAll("[data-copy]").forEach((button) => {
      button.addEventListener("click", () => copyPolish(button.dataset.copy || ""));
    });
    const searchInput = app.querySelector("#speechSearch");
    const empty = app.querySelector(".speech-empty");
    searchInput?.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleTotal = 0;
      app.querySelectorAll("[data-speech-group]").forEach((group) => {
        let groupVisible = 0;
        group.querySelectorAll("[data-speech-card]").forEach((card) => {
          const match = !query || (card.dataset.key || "").includes(query);
          card.hidden = !match;
          if (match) groupVisible += 1;
        });
        group.hidden = groupVisible === 0;
        if (groupVisible > 0) {
          group.open = true;
          visibleTotal += groupVisible;
        }
      });
      if (empty) empty.hidden = visibleTotal > 0;
    });
  }

  function renderBans() {
    const quickRules = DATA.banQuickRules || [];
    const groups = DATA.banGroups || [];
    const bans = DATA.bans || [];
    const labels = {
      scope: tx("Dotyczy szklarni i magazynu", "Applies to greenhouse and warehouse", "Стосується теплиці і складу", "Относится к теплице и складу", "İstixana və anbara aiddir", "Aplica a invernadero y almacén", "Para sa greenhouse at bodega", "Untuk rumah kaca dan gudang", "ग्रीनहाउस र गोदाममा लागू हुन्छ"),
      title: tx("Przed wejściem sprawdź kieszenie i torbę.", "Before entering, check your pockets and bag.", "Перед входом перевірте кишені і сумку.", "Перед входом проверьте карманы и сумку.", "Girməzdən əvvəl ciblərinizi və çantanızı yoxlayın.", "Antes de entrar, revisa bolsillos y bolso.", "Bago pumasok, i-check ang bulsa at bag.", "Sebelum masuk, cek saku dan tas.", "प्रवेश गर्नु अघि खल्ती र झोला जाँच गर्नुहोस्।"),
      lead: tx("Jeśli masz coś zakazanego, zostaw to poza strefą pracy albo w miejscu wskazanym.", "If you have something forbidden, leave it outside the work zone or in the indicated place.", "Якщо маєте щось заборонене, залиште це поза робочою зоною або у вказаному місці.", "Если у вас есть что-то запрещенное, оставьте это вне рабочей зоны или в указанном месте.", "Qadağan olunmuş bir şeyiniz varsa, onu iş zonasından kənarda və ya göstərilən yerdə saxlayın.", "Si tienes algo prohibido, déjalo fuera de la zona de trabajo o en el sitio indicado.", "Kung may bawal na gamit, iwan ito sa labas ng work zone o sa itinalagang lugar.", "Jika ada barang terlarang, tinggalkan di luar area kerja atau di tempat yang ditunjuk.", "निषेधित सामान छ भने काम क्षेत्र बाहिर वा देखाइएको ठाउँमा छोड्नुहोस्।"),
      no: tx("Nie wolno", "Forbidden", "Заборонено", "Запрещено", "Qadağandır", "Prohibido", "Bawal", "Dilarang", "निषेध"),
      checkTitle: tx("Przed wejściem - 3 kroki", "Before entering - 3 steps", "Перед входом - 3 кроки", "Перед входом - 3 шага", "Girişdən əvvəl - 3 addım", "Antes de entrar - 3 pasos", "Bago pumasok - 3 hakbang", "Sebelum masuk - 3 langkah", "प्रवेश अघि - ३ चरण"),
      check1: tx("Sprawdź kieszenie, torbę i telefon.", "Check pockets, bag and phone.", "Перевірте кишені, сумку і телефон.", "Проверьте карманы, сумку и телефон.", "Cibləri, çantanı və telefonu yoxlayın.", "Revisa bolsillos, bolso y teléfono.", "I-check ang bulsa, bag at telepono.", "Cek saku, tas dan telepon.", "खल्ती, झोला र फोन जाँच गर्नुहोस्।"),
      check2: tx("Zostaw prywatne rzeczy poza strefą pracy.", "Leave private items outside the work zone.", "Залиште особисті речі поза робочою зоною.", "Оставьте личные вещи вне рабочей зоны.", "Şəxsi əşyaları iş zonasından kənarda saxlayın.", "Deja las cosas personales fuera de la zona.", "Iwan ang personal na gamit sa labas ng work zone.", "Tinggalkan barang pribadi di luar area kerja.", "निजी सामान काम क्षेत्र बाहिर छोड्नुहोस्।"),
      check3: tx("Jeśli nie wiesz, zapytaj brygadzistę przed wejściem.", "If you are not sure, ask the brigadier before entering.", "Якщо не знаєте, запитайте бригадира перед входом.", "Если не знаете, спросите бригадира перед входом.", "Əmin deyilsinizsə, girməzdən əvvəl briqadirdən soruşun.", "Si no sabes, pregunta al encargado antes de entrar.", "Kung hindi sigurado, magtanong sa brigadier bago pumasok.", "Jika tidak tahu, tanya mandor sebelum masuk.", "थाहा छैन भने प्रवेश अघि ब्रिगेडियरलाई सोध्नुहोस्।")
    };

    const quickHtml = quickRules.map((item) => `
      <article class="ban-quick ${esc(item.tone || "red")}">
        <div class="ban-quick-icon">${iconMap[item.icon] || iconMap.ban}</div>
        <div>
          <h3>${esc(text(item.title))}</h3>
          <p>${esc(text(item.text))}</p>
        </div>
      </article>
    `).join("");

    const groupsHtml = groups.map((group, index) => {
      const groupBans = bans.filter((item) => item.group === group.id);
      if (!groupBans.length) return "";
      const cards = groupBans.map((item) => `
        <article class="ban-card ban-card-modern">
          <div class="ban-card-mark">${iconMap[item.icon] || iconMap.ban}</div>
          <div>
            <span class="ban-card-label">${esc(text(labels.no))}</span>
            <h3>${esc(text(item.title))}</h3>
            <p>${esc(text(item.detail))}</p>
          </div>
        </article>
      `).join("");

      return `
        <details class="${cardClass(group.tone)} ban-section ban-group-panel"${index === 0 ? " open" : ""}>
          <summary>
            <span class="city-card-icon">${iconMap[group.icon] || iconMap.ban}</span>
            <span>${esc(text(group.title))}</span>
            <span class="speech-count">${groupBans.length}</span>
          </summary>
          <div class="details-body ban-section-head">
            <p>${esc(text(group.lead))}</p>
            <div class="ban-list ban-list-modern">${cards}</div>
          </div>
        </details>
      `;
    }).join("");

    app.innerHTML = `
      <main class="page bans-page">
        ${pageHero()}
        <section class="ban-alert ban-alert-modern">
          <div class="ban-alert-icon">${iconMap.ban}</div>
          <div>
            <p class="ban-alert-label">${esc(text(labels.scope))}</p>
            <h2>${esc(text(labels.title))}</h2>
            <p>${esc(text(labels.lead))}</p>
          </div>
        </section>
        <section class="ban-quick-grid">${quickHtml}</section>
        <section class="ban-before-card">
          <h2>${esc(text(labels.checkTitle))}</h2>
          <ol>
            <li>${esc(text(labels.check1))}</li>
            <li>${esc(text(labels.check2))}</li>
            <li>${esc(text(labels.check3))}</li>
          </ol>
        </section>
        <section class="ban-groups">${groupsHtml}</section>
      </main>
    `;
  }

  function renderTest() {
    const total = DATA.test.length;
    const answers = new Array(total).fill(null);
    let current = 0;

    const label = {
      prev: tx("Wstecz", "Back", "Назад", "Назад", "Geri", "Atrás", "Bumalik", "Kembali", "पछाडि"),
      next: tx("Dalej", "Next", "Далі", "Далее", "İrəli", "Siguiente", "Susunod", "Lanjut", "अगाडि"),
      finish: tx("Zakończ test", "Finish test", "Завершити тест", "Завершить тест", "Testi bitir", "Terminar test", "Tapusin ang test", "Selesai tes", "टेस्ट समाप्त गर्नुहोस्"),
      progress: tx("Pytanie", "Question", "Питання", "Вопрос", "Sual", "Pregunta", "Tanong", "Pertanyaan", "प्रश्न"),
      choose: tx("Zaznacz odpowiedź, potem przejdź dalej.", "Choose an answer, then go next.", "Оберіть відповідь, потім перейдіть далі.", "Выберите ответ, потом нажмите далее.", "Cavabı seçin, sonra irəli gedin.", "Marca una respuesta y sigue.", "Pumili ng sagot, pagkatapos susunod.", "Pilih jawaban, lalu lanjut.", "उत्तर छानेर अगाडि जानुहोस्।"),
      missing: tx("Odpowiedz na wszystkie pytania przed wysłaniem wyniku.", "Answer all questions before sending the result.", "Дайте відповідь на всі питання перед відправкою результату.", "Ответьте на все вопросы перед отправкой результата.", "Nəticəni göndərməzdən əvvəl bütün suallara cavab verin.", "Responde todas las preguntas antes de enviar.", "Sagutin ang lahat bago ipadala ang resulta.", "Jawab semua pertanyaan sebelum kirim hasil.", "नतिजा पठाउनु अघि सबै प्रश्नको उत्तर दिनुहोस्।"),
      send: tx("Po sprawdzeniu wyślij wynik przez WhatsApp albo Viber.", "After checking, send the result by WhatsApp or Viber.", "Після перевірки надішліть результат через WhatsApp або Viber.", "После проверки отправьте результат через WhatsApp или Viber.", "Yoxladıqdan sonra nəticəni WhatsApp və ya Viber ilə göndərin.", "Después de revisar, envía el resultado por WhatsApp o Viber.", "Pagkatapos, ipadala ang resulta sa WhatsApp o Viber.", "Setelah dicek, kirim hasil via WhatsApp atau Viber.", "जाँचपछि WhatsApp वा Viber बाट नतिजा पठाउनुहोस्।")
    };

    app.innerHTML = `
      <main class="page">
        ${pageHero()}
        <section class="test-shell">
          <div class="test-progress-head">
            <span id="testProgressText"></span>
            <span id="testAnsweredText"></span>
          </div>
          <div class="test-progress-bar" aria-hidden="true"><span id="testProgressBar"></span></div>
          <form id="testForm" class="test-step-form"></form>
        </section>
        <div id="testResult"></div>
      </main>
    `;

    const form = document.getElementById("testForm");
    const result = document.getElementById("testResult");

    function renderQuestion() {
      const item = DATA.test[current];
      const selected = answers[current];
      const answered = answers.filter((answer) => answer !== null).length;
      document.getElementById("testProgressText").textContent = `${text(label.progress)} ${current + 1}/${total}`;
      document.getElementById("testAnsweredText").textContent = `${answered}/${total}`;
      document.getElementById("testProgressBar").style.width = `${Math.max(4, ((current + 1) / total) * 100)}%`;

      form.innerHTML = `
        <article class="test-question is-single" data-q="${current}" data-ok="${item.ok ? "1" : "0"}">
          <p class="test-helper">${esc(text(label.choose))}</p>
          <h3>${current + 1}. ${esc(text(item.text))}</h3>
          <div class="test-answer-grid">
            <label class="${selected === true ? "is-picked" : ""}">
              <input type="radio" name="testAnswer" value="1"${selected === true ? " checked" : ""}> 
              <span>${esc(ui("yes"))}</span>
            </label>
            <label class="${selected === false ? "is-picked" : ""}">
              <input type="radio" name="testAnswer" value="0"${selected === false ? " checked" : ""}> 
              <span>${esc(ui("no"))}</span>
            </label>
          </div>
        </article>
        <div class="test-nav-row">
          <button class="btn secondary" type="button" id="testPrev"${current === 0 ? " disabled" : ""}>${esc(text(label.prev))}</button>
          <button class="btn yellow" type="button" id="testNext">${esc(text(current === total - 1 ? label.finish : label.next))}</button>
        </div>
      `;

      form.querySelectorAll("input[name='testAnswer']").forEach((input) => {
        input.addEventListener("change", () => {
          answers[current] = input.value === "1";
          renderQuestion();
        });
      });
      document.getElementById("testPrev").addEventListener("click", () => {
        if (current > 0) {
          current -= 1;
          renderQuestion();
          form.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      document.getElementById("testNext").addEventListener("click", () => {
        if (current < total - 1) {
          current += 1;
          renderQuestion();
          form.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        showResult();
      });
    }

    function showResult() {
      const answered = answers.filter((answer) => answer !== null).length;
      if (answered < total) {
        result.innerHTML = `<section class="notice yellow"><strong>${esc(ui("important"))}:</strong> ${esc(text(label.missing))}</section>`;
        result.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const score = DATA.test.reduce((sum, item, index) => sum + (answers[index] === item.ok ? 1 : 0), 0);
      const appTitle = DATA.meta && DATA.meta.appTitle ? DATA.meta.appTitle : "Citronex";
      const message = `Wynik testu ${appTitle}: ${score}/${total}. Odpowiedzi: ${answered}/${total}. Jezyk: ${lang.toUpperCase()}.`;
      result.innerHTML = `
        <section class="result-box">
          <h2>${esc(ui("score"))}: ${score}/${total}</h2>
          <p>${esc(text(label.send))}</p>
          <div class="btn-row">
            <a class="btn" target="_blank" rel="noopener" href="${esc(waHref("+48502251384", message))}">${esc(ui("sendResult"))} WhatsApp</a>
            <a class="btn secondary" href="${esc(viberHref("+48794912552", message))}">${esc(ui("sendResult"))} Viber</a>
          </div>
        </section>
      `;
      result.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    renderQuestion();
  }

  function renderPage() {
    renderHeader();
    const renderers = {
      home: renderHome,
      mapa: renderMap,
      magazyn: renderWarehouse,
      tablet: renderTablet,
      szklarnia: renderGreenhouse,
      reader: renderReader,
      lekarz: renderMedical,
      kontakty: renderContacts,
      grupy: renderGroups,
      miasto: renderCity,
      mowa: renderSpeech,
      slownik: renderGlossary,
      zakazy: renderBans,
      test: renderTest
    };
    (renderers[page] || renderHome)();
    renderVersionFooter();
  }

  function upgradeCache() {
    if ("caches" in window) {
      caches.keys().then((keys) => Promise.all(keys
        .filter((key) => key.startsWith("citronex-siechnice-training-") && !key.includes("modular"))
        .map((key) => caches.delete(key))
      )).catch(() => {});
    }

    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("./sw.js").then((registration) => registration.update()).catch(() => {});
    }
  }

  renderPage();
  upgradeCache();
})();
