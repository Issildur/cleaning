// ── I18N ENGINE ──────────────────────────────────────────────────────────────

// Structural constants — same across all languages
const SERVICE_ICONS = ['🏠', '✨', '🔨', '🛋️'];
const INFO_TYPES    = ['ok', 'ok', 'warn', 'warn', 'note'];

// Resolve a dot-path like "prices.cleaningTitle" from a nested object
function get(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  // [data-i18n="key.path"] → element.textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = get(t, el.dataset.i18n);
    if (val != null) el.textContent = val;
  });

  // [data-i18n-attr="attr:key, attr:key"] → element.setAttribute(attr, val)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(',').forEach(pair => {
      const [attr, key] = pair.trim().split(':');
      const val = get(t, key);
      if (val != null) el.setAttribute(attr, val);
    });
  });

  // [data-i18n-render="sectionName"] → render full inner HTML from data
  document.querySelectorAll('[data-i18n-render]').forEach(el => {
    renderSection(el, el.dataset.i18nRender, t);
  });
}

function renderSection(el, name, t) {
  switch (name) {

    case 'services':
      el.innerHTML = t.services.items.map((item, i) => `
        <article class="card">
          <span class="card__icon">${SERVICE_ICONS[i]}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <p class="card__price">${item.price}</p>
        </article>
      `).join('');
      break;

    case 'howItWorks':
      el.innerHTML = t.howItWorks.steps.map((step, i) => `
        <div class="step">
          <span class="step__num">${i + 1}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </div>
      `).join('');
      break;

    case 'pricesCleaning':
      el.innerHTML = t.prices.cleaning.map(card => {
        if (card.items) {
          return `
            <div class="price">
              <h3>${card.title}</h3>
              <p class="price__value">${card.value}</p>
              <details>
                <summary>${t.prices.whatIncluded}</summary>
                <ul class="price__list">
                  ${card.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </details>
              ${card.note ? `<p class="price__note">${card.note}</p>` : ''}
            </div>`;
        }
        return `
          <div class="price">
            <h3>${card.title}</h3>
            <p class="price__value">${card.value}</p>
            <p class="muted">${card.desc}</p>
            ${card.note ? `<p class="price__note">${card.note}</p>` : ''}
          </div>`;
      }).join('');
      break;

    case 'pricesFurniture':
      el.innerHTML = t.prices.furniture.map(card => `
        <div class="price">
          <h3>${card.title}${card.sub ? ` <span class="price__sub">${card.sub}</span>` : ''}</h3>
          <ul class="price__list">
            ${card.items.map(item => `<li>${item.label} — <strong>${item.price}</strong></li>`).join('')}
          </ul>
        </div>
      `).join('');
      break;

    case 'info':
      el.innerHTML = t.info.items.map((item, i) =>
        `<div class="info-item info-item--${INFO_TYPES[i]}">${item}</div>`
      ).join('');
      break;

    case 'faq':
      el.innerHTML = t.faq.items.map(item => `
        <details>
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>
      `).join('');
      break;
  }
}


// ── LANGUAGE SWITCHER ─────────────────────────────────────────────────────────

function setActiveLangBtn(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });
}

function switchLang(lang) {
  applyLang(lang);
  setActiveLangBtn(lang);
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLang(btn.dataset.lang));
});

// Init: read saved preference, default to Polish
const savedLang = localStorage.getItem('lang') || 'pl';
switchLang(savedLang);


// ── MOBILE MENU ───────────────────────────────────────────────────────────────

const burger = document.querySelector('.burger');
const menu   = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── FOOTER YEAR ───────────────────────────────────────────────────────────────

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
