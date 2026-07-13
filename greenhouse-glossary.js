(function () {
  if (window.__citronexGreenhouseGlossaryLoaded) return;
  window.__citronexGreenhouseGlossaryLoaded = true;

  var GLOSSARY_ID = 'cxGreenhouseTerminologyGlossary';
  var GLOSSARY_TEXT = [
    'Słownik orientacji w szklarni',
    '',
    'Nawa — główna część szklarni, do której wchodzisz przez wejście.',
    'Przejście — miejsce, w którym stoisz i którym idziesz między stronami uprawy.',
    'Lewa strona przejścia — strona po lewej ręce, kiedy patrzysz w głąb przejścia.',
    'Prawa strona przejścia — strona po prawej ręce, kiedy patrzysz w głąb przejścia.',
    'Rząd — linia roślin wzdłuż przejścia.',
    'Przęsło — kolejny odcinek dalej wzdłuż rzędu, zwykle numerowany po kolei, np. 1–27.',
    'Reader — czytnik / miejsce rozpoczęcia lub zakończenia pracy zgodnie z instrukcją.',
    'Wózek — sprzęt roboczy używany w rzędach. Jeśli instrukcja rozróżnia górny i dolny wózek, trzeba trzymać się tego rozróżnienia.'
  ].join('\n');

  function findContainer() {
    var selectors = [
      '#cxGreenhouseStepView',
      '#cxSoloPanel',
      '#cxCleanModulePanel',
      '.orientation-diagram',
      '.orientationGrid',
      '.guideShell',
      '.guideCard',
      '.cxSoloCard',
      '.cxGhSimpleCard',
      '.card'
    ].join(',');

    var items = Array.prototype.slice.call(document.querySelectorAll(selectors));
    return items.find(function (el) {
      var text = (el.textContent || '').toLowerCase();
      return text.includes('orientacja') || text.includes('nawa') || text.includes('przejście') || text.includes('przejscie') || text.includes('przęs') || text.includes('przes');
    });
  }

  function addGlossary() {
    if (document.getElementById(GLOSSARY_ID)) return;
    var container = findContainer();
    if (!container) return;

    var box = document.createElement('div');
    box.id = GLOSSARY_ID;
    box.setAttribute('role', 'note');
    box.textContent = GLOSSARY_TEXT;
    box.style.marginTop = '10px';
    box.style.borderRadius = '14px';
    box.style.border = '1px solid #cce7d7';
    box.style.background = '#f7fff9';
    box.style.padding = '12px';
    box.style.fontWeight = '900';
    box.style.color = '#173b2a';
    box.style.lineHeight = '1.35';
    box.style.whiteSpace = 'pre-line';
    container.appendChild(box);
  }

  function schedule() {
    setTimeout(addGlossary, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addGlossary, { once: true });
  } else {
    addGlossary();
  }

  document.addEventListener('click', schedule, true);
  document.addEventListener('change', schedule, true);
})();
