# Location-specific quiz correction — 16 October 2026

The shared teaching data contained a true/false question telling users to arrive at GOZ Siechnice at 08:00. The local override changed medical contacts but left this question in the Zgorzelec/Bogatynia quiz. The existing local medical page instead contains contacts for Zgorzelec and Bogatynia.

Replace only this exact inherited question in the location override with a localized statement that medical contacts for the current location are in its existing Doctor section. Use the actual section title in all nine languages. This corrects a copied city reference without introducing clinic hours, addresses, medical advice or new operational facts.

The shared original source is retained. The quiz still has 30 questions with the same answer keys; the other 29 questions, medical contacts, addresses, maps, photos, instructions and audio are unchanged. The override matches the exact original Polish question rather than relying on an array index.

Validation: 101 Node tests, JS syntax, button/map audits and complete CI against the remote repository. Tests cover all nine localized questions, preservation of the other questions, the actual location title and every production HTML entry's load order/cache key. Changed location module and worker use `20261016-locationquiz1`; unchanged app, instruction module and media retain their versions.

Browser verification was attempted on 16 October 2026: the extension returned an internal session error; the cloud browser timed out. These are source/VM/CI/HTTP checks, not a visual or phone test. No forms, calls or messages were sent.

Rollback: revert this PR together with the location-module HTML and worker versions.
