const STORAGE_KEY = 'citronexTrainingState';
const LANG_NAMES = { pl: 'PL', ua: 'UA', ru: 'RU', en: 'EN', az: 'AZ' };

const EMPTY_DATA = {
  ui: {},
  sections: [],
  quiz: []
};

const state = loadState();
let currentLang = state.lang || 'pl';

const els = {
  languageButtons: document.querySelectorAll('[data-lang]'),
  trainingSection: document.getElementById('trainingSection'),
  quizSection: document.getElementById('quizSection'),
  quizList: document.getElementById('quizList'),
  finishBtn: document.getElementById('finishBtn'),
  startBtn: document.getElementById('startBtn'),
  resetBtn: document.getElementById('resetBtn'),
  progressText: document.getElementById('progressText'),
  progressBar: document.getElementById('progressBar'),
  certificateSection: document.getElementById('certificateSection'),
  workerName: document.getElementById('workerName'),
  doneDate: document.getElementById('doneDate'),
  doneLang: document.getElementById('doneLang'),
  copyBtn: document.getElementById('copyBtn'),
  copyMessage: document.getElementById('copyMessage'),
  quizMessage: document.getElementById('quizMessage'),
};

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (_) {
    return {};
  }
}

function saveState(patch) {
  const latestState = loadState();
  Object.assign(state, latestState, patch);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {
    // Local storage can be blocked in some browsers/private mode.
  }
}

function getTrainingData() {
  return window.TRAINING_DATA && typeof window.TRAINING_DATA === 'object'
    ? window.TRAINING_DATA
    : {};
}

function data(lang = currentLang) {
  const packs = getTrainingData();
  const pack = packs[lang] || packs.pl || EMPTY_DATA;
  return {
    ui: pack.ui || {},
    sections: Array.isArray(pack.sections) ? pack.sections : [],
    quiz: Array.isArray(pack.quiz) ? pack.quiz : []
  };
}

function t(key) {
  const pack = data();
  const fallbackPack = data('pl');
  return pack.ui[key] || fallbackPack.ui[key] || key;
}

function setText(node, value) {
  if (node) node.textContent = value;
}

function setLanguage(lang) {
  currentLang = getTrainingData()[lang] ? lang : 'pl';
  document.documentElement.lang = currentLang === 'ua' ? 'uk' : currentLang;
  saveState({ lang: currentLang });
  render();
}

function renderI18n() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  if (els.workerName) {
    els.workerName.placeholder = t('namePlaceholder');
  }

  els.languageButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function renderTraining() {
  if (!els.trainingSection) return;

  const sections = data().sections;
  if (!sections.length) {
    els.trainingSection.innerHTML = `<article class="card training-card"><h2>${escapeHtml(t('loadingError') || 'Brak danych szkolenia')}</h2></article>`;
    return;
  }

  els.trainingSection.innerHTML = sections.map((section, index) => `
    <article class="card training-card" data-training-card="${index}">
      <span class="pill">${index + 1}/${sections.length}</span>
      <h2>${escapeHtml(section.title || '')}</h2>
      <ul>${(section.items || []).map((item) => `<li>${renderContent(item)}</li>`).join('')}</ul>
      ${section.notice ? `<div class="notice">${renderContent(section.notice)}</div>` : ''}
    </article>
  `).join('');
}

function renderQuiz() {
  if (!els.quizList) return;

  const questions = data().quiz;
  if (!questions.length) {
    els.quizList.innerHTML = '';
    return;
  }

  els.quizList.innerHTML = questions.map((question, qIndex) => `
    <div class="quiz-item">
      <strong>${qIndex + 1}. ${escapeHtml(question.question || '')}</strong>
      <div class="quiz-options">
        ${(question.options || []).map((option, oIndex) => `
          <label>
            <input type="radio" name="q${qIndex}" value="${oIndex}">
            <span>${escapeHtml(option)}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function updateProgress() {
  const sectionsCount = data().sections.length || 1;
  const completed = state.completed ? 100 : state.started ? Math.min(85, Math.round((sectionsCount / (sectionsCount + 2)) * 100)) : 0;
  setText(els.progressText, `${completed}%`);
  if (els.progressBar) {
    els.progressBar.style.width = `${completed}%`;
  }
}

function startTraining() {
  saveState({ started: true });
  if (els.quizSection) {
    els.quizSection.classList.remove('hidden');
  }
  updateProgress();
  els.trainingSection?.scrollIntoView({ behavior: 'smooth' });
}

function finishTraining() {
  const questions = data().quiz;
  if (!questions.length) {
    setText(els.quizMessage, t('loadingError') || 'Brak danych testu.');
    return;
  }

  const answers = questions.map((_, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    return selected ? Number(selected.value) : null;
  });
  const allAnswered = answers.every((answer) => answer !== null);
  const allCorrect = answers.every((answer, index) => answer === questions[index].correct);

  if (!allAnswered) {
    setText(els.quizMessage, t('answerAll'));
    return;
  }
  if (!allCorrect) {
    setText(els.quizMessage, t('tryAgain'));
    return;
  }

  const today = new Date().toLocaleDateString('pl-PL');
  saveState({ completed: true, completedAt: today });
  showCertificate();
}

function showCertificate() {
  if (els.certificateSection) {
    els.certificateSection.classList.remove('hidden');
  }
  setText(els.doneDate, state.completedAt || new Date().toLocaleDateString('pl-PL'));
  setText(els.doneLang, LANG_NAMES[currentLang] || currentLang.toUpperCase());
  if (els.workerName) {
    els.workerName.value = state.workerName || '';
  }
  updateProgress();
  els.certificateSection?.scrollIntoView({ behavior: 'smooth' });
}

function buildConfirmation() {
  const name = els.workerName?.value?.trim() || t('noName');
  return [
    t('confirmHeader'),
    `${t('nameLabel')}: ${name}`,
    `${t('dateLabel')}: ${els.doneDate?.textContent || new Date().toLocaleDateString('pl-PL')}`,
    `${t('langLabel')}: ${LANG_NAMES[currentLang] || currentLang.toUpperCase()}`,
    `${t('placeLabel')}: Siechnice`,
  ].join('\n');
}

async function copyConfirmation() {
  saveState({ workerName: els.workerName?.value?.trim() || '' });
  const text = buildConfirmation();
  try {
    await navigator.clipboard.writeText(text);
    setText(els.copyMessage, t('copied'));
  } catch (_) {
    setText(els.copyMessage, text);
  }
}

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

function renderContent(value) {
  if (typeof value === 'object' && value !== null && value.url) {
    return `<a class="map-link" href="${escapeAttribute(value.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(value.label || value.url)}</a>`;
  }
  return escapeHtml(value).replace(/https?:\/\/[^\s]+/g, (url) => {
    return `<a href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeAttribute(value) {
  return String(value ?? '').replaceAll('"', '&quot;');
}

function on(node, eventName, handler) {
  if (node) {
    node.addEventListener(eventName, handler);
  }
}

function bindEvents() {
  els.languageButtons.forEach((btn) => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
  on(els.startBtn, 'click', startTraining);
  on(els.finishBtn, 'click', finishTraining);
  on(els.copyBtn, 'click', copyConfirmation);
  on(els.resetBtn, 'click', resetState);
  on(els.workerName, 'input', () => saveState({ workerName: els.workerName.value.trim() }));
}

function render() {
  renderI18n();
  renderTraining();
  renderQuiz();
  updateProgress();

  if (els.quizSection) {
    els.quizSection.classList.toggle('hidden', !state.started);
  }
  if (els.certificateSection) {
    els.certificateSection.classList.toggle('hidden', !state.completed);
  }

  if (state.completed) {
    setText(els.doneDate, state.completedAt || new Date().toLocaleDateString('pl-PL'));
    setText(els.doneLang, LANG_NAMES[currentLang] || currentLang.toUpperCase());
    if (els.workerName) {
      els.workerName.value = state.workerName || '';
    }
  }
}

function boot() {
  bindEvents();
  render();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
