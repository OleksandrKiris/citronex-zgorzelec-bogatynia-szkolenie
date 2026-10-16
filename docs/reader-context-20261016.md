# Bogatynia reader section and focus — 2026-10-16

Base main: `5e4f0ee3845bba8e080b70902fd1ec267c2d9d1c`; no open PRs;
latest Pages successful. Public desktop Chrome confirmed that UA «Візки» on
`reader.html?lang=ua&mode=bogatynia` left focus on BODY and did not save topic.

Selection now replaces the current history entry with the existing topic ID,
preserving language, city mode, other query/hash and history.state. The new
selected button regains focus without scrolling. Existing unknown-topic fallback
and in-memory topic transfer on language change are retained. When History API
is denied, display and focus still work; reload persistence cannot be guaranteed.

No city routing, Bogatynia/Zgorzelec notices, procedures, translations, contacts,
photos, source PDFs, audio or links change. The fix is applied to the current
location-specific source, not copied over it from Siechnice. Cache/script/HTML
version is `20261016-reader-context1`, with unchanged media/CSS keys preserved.

Validation: 152 Node tests passed. Twelve new real-renderer/handler scenarios
load current location-custom and instruction-update data; 11 failed on the
original source. All six topics, nine languages, Bogatynia mode, URL/hash,
reload, language changes, focus, invalid topic and denied history/storage covered.
Syntax and button/map audits pass; full diff reviewed. No npm test exists.
Full media/project checks execute in CI against the complete remote tree;
the local snapshot deliberately avoids downloading media again. Release and
live browser/HTTP checks are recorded in the PR.

Desktop QA is not a phone or screen-reader certification. No contact actions,
messages or submissions. Rollback: revert PR and advance the cache version.
