/* Owner-provided READER / TABLET instructions, confirmed for all three sites on 2026-10-16.
 * PL/EN/UA are supplied source languages. New material in other locales is explicitly English.
 * Original source data, images, contacts and location customizations are retained.
 */
(() => {
  const D = window.CX_DATA;
  if (!D || D.instructionRevision === "20261016") return;
  const source = (pl, en, ua) => Object.fromEntries(D.languages.map(({id}) =>
    [id, ({pl, en, ua})[id] || `[English] ${en}`]));
  const revise = (target, pl, en, ua) => Object.assign(target, source(pl, en, ua));
  const tabs = Object.fromEntries(D.readerTabs.map(tab => [tab.id, tab]));

  // Only the personal tag has the 05:50–06:00 window in the supplied procedure.
  const personal = source(
    "Weź reader i odbij swój tag personalny tylko od 05:50 do 06:00. Sprawny reader wyświetla numer i wydaje dźwięk.",
    "Take the reader and scan your personal tag only from 05:50 to 06:00. A working reader displays the number and makes a sound.",
    "Візьміть рідер і відскануйте свій персональний тег лише з 05:50 до 06:00. Справний рідер показує номер і видає звуковий сигнал.");
  Object.assign(tabs.start.steps[1], personal);
  Object.assign(tabs.rows.sections[0].steps[0], personal);
  Object.assign(tabs.outside.sections[0].steps[0], personal);
  revise(tabs.start.steps[0],
    "Sprawdź reader przed pracą: niebieska dioda i co najmniej 3 kreski baterii; połączenie z systemem: celownik i symbol Wi-Fi. Weź reader ze swojego miejsca na ładowarce.",
    "Check the reader before work: blue LED and at least 3 battery bars; system connection: crosshair and Wi-Fi symbol. Take it from its assigned charger position.",
    "Перед роботою перевірте рідер: синій світлодіод і щонайменше 3 поділки батареї; з’єднання із системою: приціл і символ Wi-Fi. Візьміть рідер зі свого місця на зарядці.");
  revise(tabs.start.steps[2],
    "Odbij tag „Początek pracy” na tablicy. Reader powinien wydać dźwięk i pokazać symbol dłoni oraz numer 900.",
    "Scan “Start of Work” on the board. The reader should make a sound and show the hand symbol and number 900.",
    "Відскануйте тег «Початок роботи» на дошці. Рідер має видати звук і показати символ долоні та номер 900.");
  revise(tabs.start.steps[6],
    "Po przerwie odbij „Przerwa koniec”, a następnie ponownie czynność, którą wykonywałeś przed przerwą.",
    "After the break, scan “Break End”, then scan the activity you were performing before the break again.",
    "Після перерви відскануйте «Кінець перерви», а потім знову тег дії, яку виконували перед перервою.");
  revise(tabs.start.steps[7],
    "Kończąc pracę w rzędzie, najpierw odbij tag rzędu. Poza rzędami najpierw odbij wykonywaną czynność. Następnie odbij „Koniec pracy” — symbol dłoni i numer 110.",
    "When finishing work in a row, scan the row tag first. Outside rows, scan your activity first. Then scan “End of Work” — hand symbol and number 110.",
    "Завершуючи роботу в ряду, спочатку відскануйте тег ряду. Поза рядами спочатку відскануйте виконувану дію. Потім відскануйте «Кінець роботи» — символ долоні та номер 110.");
  revise(tabs.start.steps[8],
    "Odłóż reader na przypisane miejsce na ładowarce na swoim etapie i dociśnij go, aby rozpoczął ładowanie.",
    "Return the reader to its assigned charger position in your stage and press it into place so charging starts.",
    "Поверніть рідер на призначене місце зарядного пристрою на своєму етапі та притисніть його, щоб почалося заряджання.");
  for (const index of [2, 3]) {
    const social = index === 3;
    revise(tabs.rows.sections[index].steps[0],
      "Wychodząc na przerwę, odbij nieskończony rząd dwa razy. Przy zbiorze najpierw odbij wózek tam, gdzie go zostawiasz, a następnie możliwie szybko tag rzędu.",
      "When leaving for a break, scan an unfinished row twice. When harvesting, first scan the trolley where you leave it, then scan the row tag as soon as possible.",
      "Ідучи на перерву, відскануйте незавершений ряд двічі. Під час збору спочатку відскануйте візок там, де його залишаєте, а потім якнайшвидше тег ряду.");
    revise(tabs.rows.sections[index].steps[2],
      social ? "Po socjalu odbij „Koniec Socjal przerwa”, a następnie ponownie wykonywaną czynność." : "Po przerwie odbij „Przerwa koniec”, a następnie ponownie wykonywaną czynność.",
      social ? "After the social break, scan “End Social Break”, then scan your activity again." : "After the break, scan “Break End”, then scan your activity again.",
      social ? "Після соціальної перерви відскануйте «Кінець соціальної перерви», а потім знову виконувану дію." : "Після перерви відскануйте «Кінець перерви», а потім знову виконувану дію.");
  }
  revise(tabs.outside.sections[3].steps[1],
    "Na koniec pracy najpierw odbij wykonywaną czynność, następnie „Koniec pracy” (110).",
    "At the end of work, scan your activity first, then “End of Work” (110).",
    "Наприкінці роботи спочатку відскануйте виконувану дію, потім «Кінець роботи» (110).");
  const basket = source(
    "Na przerwę socjalną zostaw reader w wyznaczonym koszyku. Po przerwie zabierz swój reader z koszyka.",
    "For the social break, leave the reader in the designated basket. Take your reader from the basket after the break.",
    "На соціальну перерву залиште рідер у призначеному кошику. Після перерви заберіть свій рідер із кошика.");
  tabs.rows.tips = [...(tabs.rows.tips || []), basket];
  tabs.outside.tips = [...(tabs.outside.tips || []), basket];
  tabs.carts.tips = [...(tabs.carts.tips || []), source(
    "Wózek odbijaj po każdym rzędzie, nie dopiero po jego zapełnieniu i odstawieniu na magazyn.",
    "Scan the trolley after every row, not only when it is full and moved to the warehouse.",
    "Скануйте візок після кожного ряду, а не лише після заповнення та відправлення на склад.")];
  revise(tabs.restart.lead,
    "Restart stosuje się przy problemach z połączeniem, ładowaniem lub białym ekranie. Po restarcie poczekaj na ponowne połączenie z systemem.",
    "Restart for connection or charging problems, or a white screen. After restarting, wait for the reader to reconnect to the system.",
    "Перезапустіть рідер у разі проблем зі з’єднанням, заряджанням або білим екраном. Після перезапуску дочекайтеся повторного з’єднання із системою.");
  revise(tabs.restart.steps[6],
    "Sprawdź połączenie po restarcie. Jeżeli problem pozostał, wymień reader i zgłoś uszkodzone urządzenie brygadziście do naprawy.",
    "Check the connection after restarting. If the problem remains, replace the reader and report the faulty device to the foreman for repair.",
    "Після перезапуску перевірте з’єднання. Якщо проблема залишилася, замініть рідер і повідомте бригадира про несправний пристрій для ремонту.");

  D.readerTabs.push({
    id: "prepare",
    title: source("Przed pracą", "Before work", "Перед роботою"),
    lead: source("Sprawdź stan techniczny readera przed rejestracją początku pracy.", "Check the reader before registering the start of work.", "Перевірте технічний стан рідера перед реєстрацією початку роботи."),
    steps: [tabs.start.steps[0], source(
      "Jeżeli reader jest źle odłożony, może nie ładować się. Sprawdź jego ułożenie. Błędny wskaźnik naładowania wymaga restartu według zakładki „Restart”.",
      "An incorrectly placed reader may not charge. Check its position. An incorrect full-charge indicator requires a restart using the “Restart” tab.",
      "Неправильно встановлений рідер може не заряджатися. Перевірте його положення. Якщо індикатор помилково показує повний заряд, виконайте перезапуск за вкладкою «Рестарт»."), source(
      "Reader bez połączenia z systemem nie skanuje tagów i nie wysyła danych. Zrestartuj go i poczekaj na połączenie. Jeśli to nie pomaga, wymień urządzenie i poinformuj brygadzistę.",
      "A reader without a system connection cannot scan tags or send data. Restart it and wait for reconnection. If this does not help, replace it and inform the foreman.",
      "Рідер без з’єднання із системою не сканує теги й не надсилає дані. Перезапустіть його та зачекайте на з’єднання. Якщо це не допомогло, замініть пристрій і повідомте бригадира."), personal, tabs.start.steps[2]]
  });

  const tablet = D.tabletGuide;
  D.tabletStartup = {
    title: source("Uruchomienie PRIVA", "Starting PRIVA", "Запуск PRIVA"),
    steps: [source(
      "Jeżeli program jest wyłączony, kliknij ikonę PRIVA jeden raz.",
      "If the program is closed, click the PRIVA icon once.",
      "Якщо програму вимкнено, натисніть іконку PRIVA один раз."), source(
      "Poczekaj około 15–25 sekund. Nie klikaj ponownie: dodatkowe uruchomione programy nie będą rejestrować pracowników.",
      "Wait about 15–25 seconds. Do not click again: additional program instances will not register employees.",
      "Зачекайте приблизно 15–25 секунд. Не натискайте повторно: додаткові запущені програми не реєструватимуть працівників."), source(
      "Naciśnij START w programie i poczekaj.",
      "Press START in the program and wait.",
      "Натисніть START у програмі та зачекайте.")]
  };
  D.tabletWorkshop = {
    ...tablet,
    tag: source("Warsztat", "Workshop", "Майстерня"),
    title: source("Tablet — warsztat", "Tablet — workshop", "Планшет — майстерня"),
    lead: source("Kolejność z instrukcji dla warsztatu.", "Sequence from the workshop instructions.", "Послідовність з інструкції для майстерні."),
    steps: [0, 1, 2, 6, 7].map(index => tablet.steps[index])
  };
  D.tabletWorkshop.sourceDocument = "workshop";
  D.instructionDocuments = ["priva", "workshop", "restart"];
  D.instructionRevision = "20261016";
  D.instructionSourceLanguages = ["pl", "en", "ua"];
})();
