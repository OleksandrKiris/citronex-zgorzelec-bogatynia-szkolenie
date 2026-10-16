# Training progress and recovery — 2026-10-16

The test previously discarded all answers on a reload, including a language change. Answers, current question and completion now persist locally for seven days, isolated by repository path and location mode. A signature of the ordered Polish question text and answer keys rejects incompatible attempts. No network, candidate data or new tracking is involved. Storage failure leaves the test usable in memory.

Returning users explicitly continue or restart. Selecting a radio answer preserves keyboard focus; navigation names and focuses the question. Finishing an incomplete attempt returns to the first missing answer. Results review wrong answers using the existing answer keys and link to existing learning sections. No operational instructions, answers, media or contacts were replaced.

All production HTML entries have static PrimServ recovery links independent of application JavaScript: company, vacancies, HYDRA, Telegram contact route and the existing recruiter telephone. Default recovery text is explicitly Polish and English. A successful complete render removes the recovery section; failed startup leaves it available.

UI and service-worker cache version: `20261016-progress1`. Existing media cache entries are reused by exact URL; only changed assets/documents are refreshed.

Verification: existing tests plus 15 new behavioral tests (9 languages, resume, reset, isolation, expiry, invalid state, denied storage, completion, review links, first unanswered item, keyboard focus and recovery markup). Full project audits run in GitHub CI on the complete repository. This local checkout is a partial text snapshot; it is not a mobile visual test. Browser visual verification remains outstanding.

Rollback: revert this PR merge and bump the worker/UI cache version again. No database or external service rollback is needed.
