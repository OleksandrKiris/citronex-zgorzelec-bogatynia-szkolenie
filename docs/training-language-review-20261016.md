# Training language and navigation review — 2026-10-16

This release completes the 25 updated instruction fragments from the owner-provided READER/PRIVA material in the six other existing training languages: Russian, Azerbaijani, Spanish, Filipino, Indonesian and Nepali. They are translations of the reconciled Polish/English/Ukrainian instructions, not additional operating rules or newly supplied source documents. No language is newly advertised as supported.

## What was checked

- Full source comparison shows the original PL/EN/UA instructions and all nonlocalized data remain identical to the preceding release.
- Personal-tag window remains **05:50–06:00** (not a shift time); battery minimum **3** bars; start **900**, end **110**; PRIVA opens once, waits **15–25** seconds, then **START**.
- Ordinary/social breaks remain distinct. Activity is scanned again after a break; outside rows, activity is scanned before ending work. Unfinished rows are scanned twice; trolley is scanned before the row, after each row.
- Assigned charging position, social-break basket, restart/reconnect and replacement/report-to-foreman remain present in each translation.
- The existing eight-step production procedure and five-step workshop procedure are preserved. The known contradictory EN/UA source PDF passages remain excluded from reference links (see instructions-20261016.md).
- Original PDFs are still PL/EN/UA only. Other interface languages link to the English original with an explicit English label and hreflang; no translated PDF is invented.
- All nine language selectors now use their native names consistently. Language and return controls are localized; the return action says All sections instead of referring to visual tiles. PDF links use the actual instruction title instead of internal WORKSHOP/RESTART identifiers.
- A selected reader topic survives a language change using the supported topic URL parameter. Invalid topics fall back to Before work. Other URL parameters and anchors survive.
- Explicit English fallback text is preserved as English, rather than being partly transformed by the older Filipino/Indonesian word-replacement layer.
- Current main/open PR state was read for all seven PrimServ web repositories before starting; no open conflicting PR existed. Changes are restricted to these three training sites. Catalog, arrival, HYDRA hub, standalone guide and bot are not changed by this release.

## Verification limits

This is source-aligned editorial/technical review, not native-speaker approval of every historical translation. The historical narrator review correctly remains native-speaker-approval-pending. Existing recordings are untouched. Browser tooling remained unavailable after the earlier cloud-browser timeout, so no browser/phone visual acceptance is claimed. Runtime UI scenarios are isolated Node VM tests, plus original project/asset checks on CI and live HTTP verification after Pages.

## Cache and rollback

Modified JavaScript and the service-worker cache use **20261016-language1**. Unmodified media/data/styles keep their previous asset keys and are reused. No new requests are added to the page; translations are embedded in the existing instruction module, which is loaded only by reader/tablet. Revert this PR merge to roll back; no databases, forms, candidate records, contacts, external state or integrations change.
