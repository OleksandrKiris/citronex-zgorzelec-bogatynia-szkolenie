window.CITRONEX_LOCATIONS = {
  commonLinks: {
    office: 'https://www.google.com/maps/d/edit?mid=1QD04JMl9d4AepFLIV1Kc-ZycNRglwuA&usp=sharing',
    mainEntrance: 'https://www.google.com/maps/d/edit?mid=1VcKjk2pZ1RgER3GV2DrH8u699hZnnts',
    etap1: 'https://maps.app.goo.gl/kG99UiAv9FRvb6DG9?g_st=ic',
    etap2: 'https://maps.app.goo.gl/kG99UiAv9FRvb6DG9?g_st=ic',
    etap3: 'https://maps.google.com?q=51.0173459,17.1570148&entry=gps&shh=CAE&lucs=,94297699,100795625,94231188,94280568,47071704,100809208,94218641,94282134,100799872,94286869&g_st=ic',
    etap4: 'https://maps.google.com?q=51.0173459,17.1570148&entry=gps&shh=CAE&lucs=,94297699,100795625,94231188,94280568,47071704,100809208,94218641,94282134,100799872,94286869&g_st=ic',
    etap5: 'https://maps.app.goo.gl/ccG5vb6oE26NDsS76?g_st=ic',
    etap6: 'https://maps.app.goo.gl/DH8J1Rtea55mXsoTA?g_st=ic'
  }
};

window.getCitronexLocationItems = function getCitronexLocationItems(lang) {
  const L = window.CITRONEX_LOCATIONS.commonLinks;
  const labels = {
    pl: {
      officeInfo: 'Jak znalezc biuro: czerwony budynek z cegly, wejscie od rogu, 2 pietro, pokoj nr 2.',
      office: '📍 Otworz mape biura',
      main: '🗺 Otworz glowna mape wejsc',
      e1: '📌 Wejscie Greenhouse No.1 — Etap 1',
      e2: '📌 Wejscie Greenhouse No.2 — Etap 2',
      e3: '📌 Wejscie Greenhouse No.3 — Etap 3',
      e4: '📌 Wejscie Greenhouse No.4 — Etap 4',
      e5: '📌 Wejscie Greenhouse No.5 — Etap 5',
      e6: '📌 Wejscie Greenhouse No.6 — Etap 6'
    },
    ua: {
      officeInfo: 'Як знайти офіс: червона цегляна будівля, вхід з кута, 2 поверх, кабінет № 2.',
      office: '📍 Відкрити карту офісу',
      main: '🗺 Відкрити головну карту входів',
      e1: '📌 Вхід Greenhouse No.1 — Etap 1',
      e2: '📌 Вхід Greenhouse No.2 — Etap 2',
      e3: '📌 Вхід Greenhouse No.3 — Etap 3',
      e4: '📌 Вхід Greenhouse No.4 — Etap 4',
      e5: '📌 Вхід Greenhouse No.5 — Etap 5',
      e6: '📌 Вхід Greenhouse No.6 — Etap 6'
    },
    ru: {
      officeInfo: 'Как найти офис: красное кирпичное здание, вход с угла, 2 этаж, кабинет № 2.',
      office: '📍 Открыть карту офиса',
      main: '🗺 Открыть главную карту входов',
      e1: '📌 Вход Greenhouse No.1 — Etap 1',
      e2: '📌 Вход Greenhouse No.2 — Etap 2',
      e3: '📌 Вход Greenhouse No.3 — Etap 3',
      e4: '📌 Вход Greenhouse No.4 — Etap 4',
      e5: '📌 Вход Greenhouse No.5 — Etap 5',
      e6: '📌 Вход Greenhouse No.6 — Etap 6'
    },
    en: {
      officeInfo: 'How to find the office: red brick building, entrance from the corner, 2nd floor, room No. 2.',
      office: '📍 Open office map',
      main: '🗺 Open main entrance map',
      e1: '📌 Entrance Greenhouse No.1 — Etap 1',
      e2: '📌 Entrance Greenhouse No.2 — Etap 2',
      e3: '📌 Entrance Greenhouse No.3 — Etap 3',
      e4: '📌 Entrance Greenhouse No.4 — Etap 4',
      e5: '📌 Entrance Greenhouse No.5 — Etap 5',
      e6: '📌 Entrance Greenhouse No.6 — Etap 6'
    },
    az: {
      officeInfo: 'Ofisi necə tapmaq olar: qırmızı kərpic bina, küncdən giriş, 2-ci mərtəbə, otaq № 2.',
      office: '📍 Ofis xəritəsini aç',
      main: '🗺 Əsas giriş xəritəsini aç',
      e1: '📌 Giriş Greenhouse No.1 — Etap 1',
      e2: '📌 Giriş Greenhouse No.2 — Etap 2',
      e3: '📌 Giriş Greenhouse No.3 — Etap 3',
      e4: '📌 Giriş Greenhouse No.4 — Etap 4',
      e5: '📌 Giriş Greenhouse No.5 — Etap 5',
      e6: '📌 Giriş Greenhouse No.6 — Etap 6'
    }
  };
  const T = labels[lang] || labels.pl;
  return [
    T.officeInfo,
    { label: T.office, url: L.office },
    { label: T.main, url: L.mainEntrance },
    { label: T.e1, url: L.etap1 },
    { label: T.e2, url: L.etap2 },
    { label: T.e3, url: L.etap3 },
    { label: T.e4, url: L.etap4 },
    { label: T.e5, url: L.etap5 },
    { label: T.e6, url: L.etap6 }
  ];
};
