# Contact keyboard focus — 2026-10-16

The current location data contains one coordinator group, no warehouse/greenhouse
contact groups, and two priority contacts. Unlike Siechnice/Ryczywol, there is no
alternative group whose selection needs URL persistence here. No new groups or
group URL handling are introduced.

Confirmed defect: activating the existing group button replaces the focused DOM
node, leaving keyboard focus on the page body. Its active visual styling has no
programmatic equivalent. The replacement button now receives focus without
scrolling, and exposes `aria-pressed`. This matches the contact-control behavior
on the other two sites while preserving the actual local data.

Twelve scenarios cover nine languages, the single real group, selected state,
focus, unknown query values, denied storage/history and preservation of city,
language, section and hash. They execute the real renderer and handlers with a DOM
mock, not a browser. Full suite: 140 tests. No messages, calls, forms or external
contact links are opened. Data is compared before/after interactions.

No names, phone numbers, priority cards, translations, instructions or media are
changed. npm test is absent; use `node --test tools/*.test.mjs` and the existing
project audits. Full media checks run on CI because the local snapshot omits
most media. JavaScript syntax, button/map audits and whitespace checks also pass.

The script, HTML references and service worker advance to `20261016-contacts1`.
Unchanged CSS and media keep their old cache URLs. A rendered browser, phone and
screen-reader check remains outstanding because the browser connection was
unavailable in the preceding check. Rollback: revert this PR and bump the cache
namespace again; no external data changes require rollback.
