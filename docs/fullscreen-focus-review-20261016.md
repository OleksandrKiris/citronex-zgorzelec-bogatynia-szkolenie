# Full-screen diagram keyboard navigation — 16 October 2026

The existing enlarged greenhouse diagram moved focus to its close button but did not return focus when closed. Tab could also move behind its modal overlay. The correction restores focus to the exact originating diagram after Close, Escape or backdrop click and keeps Tab/Shift+Tab inside visible enabled controls. Real interactive nave controls remain available. The cloned zoom trigger no longer advertises an action that is already open. The dialog receives its existing localized accessible label.

Keyboard regression tests execute the production function, including mouse and keyboard opening, all close paths, forward/reverse focus wrapping, hidden controls, focus recovery, detached triggers and normal page navigation after close. All nine existing languages are exercised. No content, instructions, photographs, audio, contact information or operational actions are changed. Only app/HTML/worker cache entries use the new `20261016-focus1` version; other assets retain their cache keys.

Run the repository Node tests, syntax and project/button/map audits. GitHub CI checks the complete remote tree. Verify exact tested head before merge, successful Pages deployment and exact public asset bytes afterwards. Browser attempts on 16 October returned an extension internal error and cloud timeout, so no visual or phone test is claimed.

Rollback: revert the PR including its HTML and service-worker versions.
