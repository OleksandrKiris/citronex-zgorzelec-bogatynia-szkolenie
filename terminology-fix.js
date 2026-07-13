(function () {
  if (window.__citronexTerminologyFixLoaded) return;
  window.__citronexTerminologyFixLoaded = true;

  var FIXES = [
    [/lewe\s+prz[eę]s[łl]o/gi, 'lewa strona przejścia'],
    [/prawe\s+prz[eę]s[łl]o/gi, 'prawa strona przejścia'],
    [/lewym\s+prz[eę]s[łl]em/gi, 'lewą stroną przejścia'],
    [/prawym\s+prz[eę]s[łl]em/gi, 'prawą stroną przejścia'],
    [/lewego\s+prz[eę]s[łl]a/gi, 'lewej strony przejścia'],
    [/prawego\s+prz[eę]s[łl]a/gi, 'prawej strony przejścia'],
    [/lewej\s+strony\s+prz[eę]s[łl]a/gi, 'lewej strony przejścia'],
    [/prawej\s+strony\s+prz[eę]s[łl]a/gi, 'prawej strony przejścia'],
    [/lewa\s+strona\s+prz[eę]s[łl]a/gi, 'lewa strona przejścia'],
    [/prawa\s+strona\s+prz[eę]s[łl]a/gi, 'prawa strona przejścia']
  ];

  var NOTE_ID = 'cxTerminologyCorrectionNote';
  var NOTE_TEXT = 'Ważne: kiedy stoisz w wejściu do nawy i patrzysz w głąb przejścia, po lewej stronie jest lewa strona przejścia, a po prawej stronie jest prawa strona przejścia. Nie nazywamy tego lewym ani prawym przęsłem. Przęsła to kolejne odcinki dalej wzdłuż rzędu, zwykle numerowane po kolei, np. 1–27.';

  function fixTextValue(value) {
    var next = value;
    FIXES.forEach(function (pair) {
      next = next.replace(pair[0], pair[1]);
    });
    return next;
  }

  function fixTextNodes(root) {
    if (!root || root.nodeType !== 1) return;

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|INPUT|SELECT|OPTION)$/i.test(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return /prz[eę]s[łl]/i.test(node.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      var fixed = fixTextValue(node.nodeValue || '');
      if (fixed !== node.nodeValue) node.nodeValue = fixed;
    });
  }

  function findOrientationContainer() {
    var candidates = Array.prototype.slice.call(document.querySelectorAll([
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
    ].join(',')));

    return candidates.find(function (el) {
      var text = (el.textContent || '').toLowerCase();
      return (text.includes('przęs') || text.includes('przes')) &&
        (text.includes('nawa') || text.includes('przej') || text.includes('lewa') || text.includes('prawa'));
    }) || candidates.find(function (el) {
      var text = (el.textContent || '').toLowerCase();
      return text.includes('orientacja') || text.includes('nawa') || text.includes('przejście') || text.includes('przejscie');
    });
  }

  function ensureNote() {
    if (document.getElementById(NOTE_ID)) return;

    var container = findOrientationContainer();
    if (!container) return;

    var note = document.createElement('div');
    note.id = NOTE_ID;
    note.className = 'hint cxTerminologyCorrectionNote';
    note.setAttribute('role', 'note');
    note.textContent = NOTE_TEXT;
    note.style.marginTop = '10px';
    note.style.borderRadius = '14px';
    note.style.border = '1px solid #efd39a';
    note.style.background = '#fff2cc';
    note.style.padding = '12px';
    note.style.fontWeight = '900';
    note.style.color = '#173b2a';
    note.style.lineHeight = '1.35';

    container.appendChild(note);
  }

  function run() {
    fixTextNodes(document.body);
    ensureNote();
  }

  var scheduled = false;
  function scheduleRun() {
    if (scheduled) return;
    scheduled = true;
    setTimeout(function () {
      scheduled = false;
      run();
    }, 80);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  document.addEventListener('click', scheduleRun, true);
  document.addEventListener('change', scheduleRun, true);

  try {
    var observer = new MutationObserver(scheduleRun);
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  } catch (_) {}
})();
