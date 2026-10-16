# Instruction refresh — 2026-10-16

Owner supplied 27 READER / TABLET files and explicitly confirmed that they apply to all three training locations. This change is limited to the training websites; no bot or HRappka changes.

## Source reconciliation

- Personal tag: 05:50–06:00, per all three short work-registration procedures. This is not a new work schedule.
- Preparation: blue LED, at least 3 battery bars, crosshair + Wi-Fi, personal tag gives a number and sound. Connection/charging/white-screen problems: restart, wait, then replace and tell the foreman if unresolved.
- Start 900; end 110. Re-scan the activity after both types of break. Outside rows: scan the activity before ending work. Social break: use the designated reader basket and retrieve the device afterwards.
- Harvesting poster defines the exact order: trolley once, row once/twice according to completion, then send. Repeat after every row, not only when the trolley is full.
- PRIVA: launch once, wait 15–25 seconds, then START. Workshop: login, start, activity, end, logout.
- Production EN step 8 incorrectly repeats End Work; PL text and its screenshot show Log out. Production UA step 6 incorrectly says Log out; PL/EN and the screenshot show the activity after break. Existing web production steps already agree with the PL screenshots and remain unchanged. The two inconsistent PDFs are not published as reference instructions.
- Detailed reader DOCX repeats ordinary-break labels inside the social-break subsection. The specific social-break paragraph and all short procedures consistently identify the dedicated social-break tags; the web instructions use those.
- The EN start poster says “After a break” for Break Start; the PL/UA poster and procedure put this before the break. The existing web sequence is retained.

## Languages and assets

The supplied instruction languages are PL, EN and UA. Changed/new text in the six other supported locales explicitly uses [English], with a page-level notice. Their language selectors and original translation source data are preserved. No unsupported translation is presented as supplied or reviewed. All original repository images, audio, instructions and data files remain byte-identical; changes are a separate versioned instruction module plus small renderer integration.

Nine supplied PRIVA/workshop/restart PDFs are available on demand in their original bytes. They are not eagerly downloaded or added to the offline install list. Existing instructional screenshots are reused. See the source manifest for checksums of all 27 inputs and the 9 published PDFs.

## Verification and rollback

The dedicated tests cover all nine locales, each reader tab, production/workshop step counts, source-backed details, PDF language selection, unchanged unrelated data/media, idempotence and cache/load order. Existing project checks are retained. Full asset audits also run on GitHub CI, because the local review snapshot deliberately omits pre-existing binary media. No browser/phone visual verification was available; PDF source pages were visually inspected and UI markup was rendered in isolated Node VM tests.

Rollback: revert this PR merge; restore the previous app/HTML/service worker together. No data migrations or external state were changed.
