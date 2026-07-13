window.TRAINING_DATA = window.TRAINING_DATA || {};
window.TRAINING_DATA.pl = {
  ui: {
    appName: 'Szkolenie Citronex',
    location: 'Siechnice',
    mobileReady: 'Wersja mobilna',
    heroTitle: 'Wybierz jezyk i rozpocznij szkolenie',
    heroText: 'Po zakonczeniu pokaz ekran potwierdzenia koordynatorowi.',
    startBtn: 'Rozpocznij szkolenie',
    resetBtn: 'Wyczysc zapis',
    phoneHint: 'Najlepiej otworzyc link w przegladarce telefonu.',
    progressTitle: 'Postep szkolenia',
    quizLabel: 'Test kontrolny',
    quizTitle: 'Odpowiedz na pytania',
    finishBtn: 'Zakoncz szkolenie',
    doneTitle: 'Szkolenie ukonczone',
    nameLabel: 'Imie i nazwisko',
    namePlaceholder: 'Imie i nazwisko',
    dateLabel: 'Data',
    langLabel: 'Jezyk',
    placeLabel: 'Lokalizacja',
    copyBtn: 'Kopiuj potwierdzenie',
    showCoordinator: 'Pokaz ten ekran koordynatorowi.',
    footerText: 'System informacyjno-uczacy Citronex Siechnice',
    answerAll: 'Odpowiedz na wszystkie pytania.',
    tryAgain: 'Popraw odpowiedzi i sproboj ponownie.',
    copied: 'Potwierdzenie skopiowane.',
    noName: 'brak danych',
    confirmHeader: 'SZKOLENIE UKONCZONE'
  },
  sections: [
    {
      title: 'Przyjazd i rozpoczecie pracy',
      items: [
        'Przyjdz punktualnie zgodnie z informacja od koordynatora.',
        'Przed rozpoczeciem pracy czekaj w wyznaczonym miejscu.',
        'Nie wchodz samodzielnie na szklarnie bez zgody brygadzisty albo koordynatora.'
      ],
      notice: 'Jesli sie spoznisz, od razu poinformuj koordynatora.'
    },
    {
      title: 'Biuro i wejscia na szklarnie',
      items: [
        'OFFICE — lokalizacja: https://www.google.com/maps/d/edit?mid=1QD04JMl9d4AepFLIV1Kc-ZycNRglwuA&usp=sharing',
        'Jak znalezc biuro: czerwony budynek z cegly, wejscie od rogu, 2 pietro, pokoj nr 2.',
        'GREENHOUSES — mapa glownych wejsc: https://www.google.com/maps/d/edit?mid=1VcKjk2pZ1RgER3GV2DrH8u699hZnnts',
        'Greenhouse No.1 — Etap 1: https://maps.app.goo.gl/kG99UiAv9FRvb6DG9?g_st=ic',
        'Greenhouse No.2 — Etap 2: https://maps.app.goo.gl/kG99UiAv9FRvb6DG9?g_st=ic',
        'Greenhouse No.3 — Etap 3: https://maps.google.com?q=51.0173459,17.1570148&entry=gps&shh=CAE&lucs=,94297699,100795625,94231188,94280568,47071704,100809208,94218641,94282134,100799872,94286869&g_st=ic',
        'Greenhouse No.4 — Etap 4: https://maps.google.com?q=51.0173459,17.1570148&entry=gps&shh=CAE&lucs=,94297699,100795625,94231188,94280568,47071704,100809208,94218641,94282134,100799872,94286869&g_st=ic',
        'Greenhouse No.5 — Etap 5: https://maps.app.goo.gl/ccG5vb6oE26NDsS76?g_st=ic',
        'Greenhouse No.6 — Etap 6: https://maps.app.goo.gl/DH8J1Rtea55mXsoTA?g_st=ic'
      ],
      notice: 'Wazne: przed pierwszym dniem pracy sprawdz swoj etap i wlasciwe wejscie.'
    },
    {
      title: 'Bezpieczenstwo',
      items: [
        'Uzywaj wydanej odziezy roboczej i stosuj sie do polecen brygadzisty.',
        'Nie dotykaj maszyn, narzedzi ani instalacji, jezeli nie masz zgody.',
        'Kazdy wypadek, zle samopoczucie lub problem zglaszaj od razu.'
      ]
    },
    {
      title: 'Organizacja pracy',
      items: [
        'Pracuj na miejscu, do ktorego zostales przydzielony.',
        'Nie zmieniaj etapu, grupy ani stanowiska samodzielnie.',
        'Problemy z praca, hotelem albo dokumentami zglaszaj koordynatorowi.'
      ]
    },
    {
      title: 'Zasady na hotelu',
      items: [
        'Dbaj o porzadek w pokoju, kuchni i czesciach wspolnych.',
        'Szanuj innych mieszkancow i nie niszcz wyposazenia.',
        'Problemy techniczne zglaszaj koordynatorowi.'
      ]
    }
  ],
  quiz: [
    { question: 'Co zrobic, jesli spoznisz sie do pracy?', options: ['Nic, przyjsc pozniej', 'Od razu poinformowac koordynatora', 'Poprosic kolege, zeby nic nie mowil'], correct: 1 },
    { question: 'Czy mozna samodzielnie zmienic etap lub miejsce pracy?', options: ['Tak', 'Nie, tylko po zgodzie brygadzisty albo koordynatora', 'Tak, jezeli jest wolne miejsce'], correct: 1 },
    { question: 'Komu zglaszac problem z dokumentami, hotelem albo praca?', options: ['Koordynatorowi', 'Dowolnej osobie', 'Nie trzeba zglaszac'], correct: 0 },
    { question: 'Co zrobic po ukonczeniu szkolenia?', options: ['Zamknac telefon', 'Pokazac ekran potwierdzenia koordynatorowi', 'Usunac strone'], correct: 1 }
  ]
};
