---
name: scorecard-update
description: Manual update chain for course scorecard data — par, stroke index, distances. There is NO auto-sync for this data. Use when a course changes its scorecard, a par/SI error is found, or Andy provides a new official scorecard PDF.
---

# Scorecard Data Update (Par / SI / Distances)

**There is no auto-sync for par/SI data.** The pricing sync chain does NOT touch it. Every surface below is updated by hand, in order.

## Source of truth

Official club PDFs in Drive: `Mr Mallorca Golf/Reference/Scorecards/Scorecard PDFs/` (all 24 courses).
Human-readable master: `Mr Mallorca Golf/Reference/MMG_SCORECARD_MASTER.md` — **read this before touching any par/SI data.**

Only accept new data from an official club scorecard (PDF or photo from Andy). Never update par/SI from third-party golf sites.

## Update chain — all four steps, in order

1. **Drive PDF:** new official scorecard into `Reference/Scorecards/Scorecard PDFs/` (Drive is on Andy's machines — if working in a remote/cloud session without Drive access, tell Andy exactly what to file and where; don't skip silently)
2. **Drive master:** update the course's entry in `Reference/MMG_SCORECARD_MASTER.md` (same access caveat)
3. **Repo:** `src/lib/golf-courses-data.js` — the par value appears in `pills` text only (e.g. `'Par 72 · Championship'`). Change the pill string; nothing else in that entry encodes par.
4. **Repo content:** any blog/guide content mentioning that course's par or hole data — grep the old value (e.g. `Par 72`, `par-5 18th`, specific hole yardages) across:
   - `src/lib/guide-post-content.js`
   - `src/lib/guide-article-content.js` + `guide-article-content-localized.js` (all 6 languages)
   - `src/lib/golf-courses-content.js`
   - `prototypes/` (tools may state par/length)

## Verify

- Grep the repo for the old value scoped to that course — zero live hits.
- Cross-check the new value against the official PDF one more time (par totals, front/back nine split).
- `npm run check:content`; add `npm run check:i18n-release` if localized guide content changed.

## Ship

Via the `ship` skill. In the completion report, state which of the two Drive steps (PDF, SCORECARD_MASTER.md) are done vs. pending on Andy — the task isn't fully closed until both Drive artefacts match the repo.
