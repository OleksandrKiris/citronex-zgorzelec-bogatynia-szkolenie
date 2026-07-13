const STAGE_STORAGE_KEY = 'citronexTrainingState';

const STAGE_TEXTS = {
  pl: {
    pill: 'MOJA LOKALIZACJA',
    title: 'Gdzie mam isc?',
    hint: 'Wybierz swoje miejsce pracy. System pokaze wlasciwe wejscie i doda etap do potwierdzenia szkolenia.',
    openMap: 'Otworz mape',
    noStage: 'Nie wybrano',
    stageLabel: 'Etap',
    copied: 'Potwierdzenie skopiowane razem z etapem.',
    confirmHeader: 'SZKOLENIE UKONCZONE',
    fullName: 'Imie i nazwisko',
    date: 'Data',
    lang: 'Jezyk',
    location: 'Lokalizacja',
    stage: 'Etap',
    stages: {
      office: ['Office', 'Biuro: czerwony budynek z cegly, wejscie od rogu, 2 pietro, pokoj nr 2.'],
      e1: ['Etap 1', 'Greenhouse No.1 — wejscie dla Etapu 1.'],
      e2: ['Etap 2', 'Greenhouse No.2 — wejscie dla Etapu 2.'],
      e3: ['Etap 3', 'Greenhouse No.3 — wejscie dla Etapu 3.'],
      e4: ['Etap 4', 'Greenhouse No.4 — wejscie dla Etapu 4.'],
      e5: ['Etap 5', 'Greenhouse No.5 — wejscie dla Etapu 5.'],
      e6: ['Etap 6', 'Greenhouse No.6 — wejscie dla Etapu 6.']
    }
  },
  ua: {
    pill: 'МОЯ ЛОКАЦІЯ',
    title: 'Куди мені йти?',
    hint: 'Оберіть місце роботи. Система покаже правильний вхід і додасть етап до підтвердження навчання.',
    openMap: 'Відкрити карту',
    noStage: 'Не вибрано',
    stageLabel: 'Етап',
    copied: 'Підтвердження скопійовано разом з етапом.',
    confirmHeader: 'НАВЧАННЯ ЗАВЕРШЕНО',
    fullName: 'Ім’я та прізвище',
    date: 'Дата',
    lang: 'Мова',
    location: 'Локація',
    stage: 'Етап',
    stages: {
      office: ['Office', 'Офіс: червона цегляна будівля, вхід з кута, 2 поверх, кабінет № 2.'],
      e1: ['Etap 1', 'Greenhouse No.1 — вхід для Etap 1.'],
      e2: ['Etap 2', 'Greenhouse No.2 — вхід для Etap 2.'],
      e3: ['Etap 3', 'Greenhouse No.3 — вхід для Etap 3.'],
      e4: ['Etap 4', 'Greenhouse No.4 — вхід для Etap 4.'],
      e5: ['Etap 5', 'Greenhouse No.5 — вхід для Etap 5.'],
      e6: ['Etap 6', 'Greenhouse No.6 — вхід для Etap 6.']
    }
  },
  ru: {
    pill: 'МОЯ ЛОКАЦИЯ',
    title: 'Куда мне идти?',
    hint: 'Выберите место работы. Система покажет правильный вход и добавит этап в подтверждение обучения.',
    openMap: 'Открыть карту',
    noStage: 'Не выбрано',
    stageLabel: 'Этап',
    copied: 'Подтверждение скопировано вместе с этапом.',
    confirmHeader: 'ОБУЧЕНИЕ ЗАВЕРШЕНО',
    fullName: 'Имя и фамилия',
    date: 'Дата',
    lang: 'Язык',
    location: 'Локация',
    stage: 'Этап',
    stages: {
      office: ['Office', 'Офис: красное кирпичное здание, вход с угла, 2 этаж, кабинет № 2.'],
      e1: ['Etap 1', 'Greenhouse No.1 — вход для Etap 1.'],
      e2: ['Etap 2', 'Greenhouse No.2 — вход для Etap 2.'],
      e3: ['Etap 3', 'Greenhouse No.3 — вход для Etap 3.'],
      e4: ['Etap 4', 'Greenhouse No.4 — вход для Etap 4.'],
      e5: ['Etap 5', 'Greenhouse No.5 — вход для Etap 5.'],
      e6: ['Etap 6', 'Greenhouse No.6 — вход для Etap 6.']
    }
  },
  en: {
    pill: 'MY LOCATION',
    title: 'Where should I go?',
    hint: 'Choose your workplace. The system will show the correct entrance and add the stage to the training confirmation.',
    openMap: 'Open map',
    noStage: 'Not selected',
    stageLabel: 'Stage',
    copied: 'Confirmation copied together with the stage.',
    confirmHeader: 'TRAINING COMPLETED',
    fullName: 'Full name',
    date: 'Date',
    lang: 'Language',
    location: 'Location',
    stage: 'Stage',
    stages: {
      office: ['Office', 'Office: red brick building, entrance from the corner, 2nd floor, room No. 2.'],
      e1: ['Etap 1', 'Greenhouse No.1 — entrance for Etap 1.'],
      e2: ['Etap 2', 'Greenhouse No.2 — entrance for Etap 2.'],
      e3: ['Etap 3', 'Greenhouse No.3 — entrance for Etap 3.'],
      e4: ['Etap 4', 'Greenhouse No.4 — entrance for Etap 4.'],
      e5: ['Etap 5', 'Greenhouse No.5 — entrance for Etap 5.'],
      e6: ['Etap 6', 'Greenhouse No.6 — entrance for Etap 6.']
    }
  },
  az: {
    pill: 'MƏNİM LOKASİYAM',
    title: 'Hara getməliyəm?',
    hint: 'İş yerinizi seçin. Sistem düzgün girişi göstərəcək və etapı təlim təsdiqinə əlavə edəcək.',
    openMap: 'Xəritəni aç',
    noStage: 'Seçilməyib',
    stageLabel: 'Etap',
    copied: 'Təsdiq etapla birlikdə kopyalandı.',
    confirmHeader: 'TƏLİM TAMAMLANDI',
    fullName: 'Ad və soyad',
    date: 'Tarix',
    lang: 'Dil',
    location: 'Lokasiya',
    stage: 'Etap',
    stages: {
      office: ['Office', 'Ofis: qırmızı kərpic bina, küncdən giriş, 2-ci mərtəbə, otaq № 2.'],
      e1: ['Etap 1', 'Greenhouse No.1 — Etap 1 üçün giriş.'],
      e2: ['Etap 2', 'Greenhouse No.2 — Etap 2 üçün giriş.'],
      e3: ['Etap 3', 'Greenhouse No.3 — Etap 3 üçün giriş.'],
      e4: ['Etap 4', 'Greenhouse No.4 — Etap 4 üçün giriş.'],
      e5: ['Etap 5', 'Greenhouse No.5 — Etap 5 üçün giriş.'],
      e6: ['Etap 6', 'Greenhouse No.6 — Etap 6 üçün giriş.']
    }
  }
};

const STAGE_URL_KEY = {
  office: 'office',
  e1: 'etap1',
  e2: 'etap2',
  e3: 'etap3',
  e4: 'etap4',
  e5: 'etap5',
  e6: 'etap6'
};

function getTrainingState() {
  try {
    return JSON.parse(localStorage.getItem(STAGE_STORAGE_KEY)) || {};
  } catch (_) {
    return {};
  }
}

function setTrainingState(patch) {
  const next = { ...getTrainingState(), ...patch };
  try {
    localStorage.setItem(STAGE_STORAGE_KEY, JSON.stringify(next));
  } catch (_) {
    // Local storage can be blocked in some browsers/private mode.
  }
  return next;
}

function getStageLang() {
  const lang = getTrainingState().lang || document.documentElement.lang || 'pl';
  return STAGE_TEXTS[lang] ? lang : 'pl';
}

function getStageText() {
  return STAGE_TEXTS[getStageLang()] || STAGE_TEXTS.pl;
}

function getStageUrl(stage) {
  const key = STAGE_URL_KEY[stage];
  return window.CITRONEX_LOCATIONS?.commonLinks?.[key] || '#';
}

function getSelectedStageName(stage) {
  const text = getStageText();
  return text.stages[stage]?.[0] || text.noStage;
}

function renderStageLocation() {
  const text = getStageText();
  const current = getTrainingState().selectedStage || '';
  const pill = document.getElementById('stageLocationPill');
  const title = document.getElementById('stageLocationTitle');
  const hint = document.getElementById('stageLocationHint');
  const card = document.getElementById('selectedStageCard');
  const name = document.getElementById('selectedStageName');
  const description = document.getElementById('selectedStageDescription');
  const map = document.getElementById('selectedStageMap');
  const doneStage = document.getElementById('doneStage');
  const stageSummaryLabel = document.getElementById('stageSummaryLabel');

  if (pill) pill.textContent = text.pill;
  if (title) title.textContent = text.title;
  if (hint) hint.textContent = text.hint;
  if (stageSummaryLabel) stageSummaryLabel.textContent = text.stageLabel;

  document.querySelectorAll('[data-stage]').forEach((button) => {
    const stage = button.dataset.stage;
    button.textContent = text.stages[stage]?.[0] || stage;
    button.classList.toggle('active', stage === current);
  });

  if (current && text.stages[current]) {
    if (card) card.hidden = false;
    if (name) name.textContent = text.stages[current][0];
    if (description) description.textContent = text.stages[current][1];
    if (map) {
      map.href = getStageUrl(current);
      map.textContent = text.openMap;
    }
    if (doneStage) doneStage.textContent = text.stages[current][0];
  } else {
    if (card) card.hidden = true;
    if (doneStage) doneStage.textContent = text.noStage;
  }
}

function selectStage(stage) {
  if (!STAGE_URL_KEY[stage]) return;
  setTrainingState({ selectedStage: stage });
  renderStageLocation();
}

function buildStageConfirmation() {
  const text = getStageText();
  const state = getTrainingState();
  const name = document.getElementById('workerName')?.value?.trim() || text.noStage;
  const date = document.getElementById('doneDate')?.textContent || new Date().toLocaleDateString('pl-PL');
  const lang = (state.lang || getStageLang()).toUpperCase();
  const stage = getSelectedStageName(state.selectedStage);

  return [
    text.confirmHeader,
    `${text.fullName}: ${name}`,
    `${text.date}: ${date}`,
    `${text.lang}: ${lang}`,
    `${text.location}: Siechnice`,
    `${text.stage}: ${stage}`
  ].join('\n');
}

async function copyStageConfirmation(event) {
  const button = event.target?.closest?.('#copyBtn');
  if (!button) return;

  event.preventDefault();
  event.stopImmediatePropagation();

  const workerName = document.getElementById('workerName')?.value?.trim() || '';
  setTrainingState({ workerName });

  const message = document.getElementById('copyMessage');
  const text = buildStageConfirmation();
  try {
    await navigator.clipboard.writeText(text);
    if (message) message.textContent = getStageText().copied;
  } catch (_) {
    if (message) message.textContent = text;
  }
}

function bindStageLocation() {
  document.querySelectorAll('[data-stage]').forEach((button) => {
    button.addEventListener('click', () => selectStage(button.dataset.stage));
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => setTimeout(renderStageLocation, 0));
  });

  document.addEventListener('click', copyStageConfirmation, true);
  renderStageLocation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindStageLocation, { once: true });
} else {
  bindStageLocation();
}
