---
name: scorecard-update
description: Update chain for course scorecard data — par, stroke index, distances. Editing the machine master and running the mmg-tools sync covers the generated scorecard/tracker/strokes-gained surfaces automatically; the site's course-listing pill text and any blog/guide content mentioning par are separate manual steps the sync does not reach. Use when a course changes its scorecard, a par/SI error is found, or Andy provides a new official scorecard PDF. For the periodic "is what's recorded still true" check rather than a known correction, see the Annual/periodic check section below.
---

# Scorecard Data Update (Par / SI / Distances)

**Corrected 2026-09-05** — this file previously said "there is no auto-sync
for this data" and described every surface as hand-updated. That was true
before the mmg-tools scorecard pipeline existed but is stale now: editing the
machine master and running one command regenerates most of the generated
surfaces automatically. Only the site's pill text and blog/guide content
remain genuinely manual. If you're reading an older cached copy of this
skill, the source of truth is this file in `mrmallorcagolf-real/.claude/skills/`
(and its `.codex/skills/` mirror), not memory.

## Source of truth

Official club PDFs in Drive: `Mr Mallorca Golf/Reference/Scorecards/Scorecard PDFs/` (all 24 courses) — the ultimate source. Only accept new data from an official club scorecard (PDF or photo from Andy). Never update par/SI from third-party golf sites.

The **editable machine master** is `mmg-tools/pricing/edit/confirmed/scorecards.json` — edit par/SI/distances here, not in any Drive document. `Mr Mallorca Golf/Reference/MMG_SCORECARD_MASTER.md` is a **human-readable legacy reference only** — it plays no active role in the current sync and must not be treated as an editable source (confirmed against `mmg-tools/scripts/sync-scorecards.js`: the file it actually reads is `scorecards.json`; the Drive markdown is touched only by the separate one-off `.\mmg.ps1 scorecards-rebuild-master` bootstrap command, not the normal update path).

## Update chain — five steps, in order

1. **Drive PDF:** new official scorecard into `Reference/Scorecards/Scorecard PDFs/` (Drive is on Andy's machines — if working in a remote/cloud session without Drive access, tell Andy exactly what to file and where; don't skip silently).
2. **Editable master:** update the course's par/SI/distance entry directly in `mmg-tools/pricing/edit/confirmed/scorecards.json`.
3. **Sync (automated):** from `mmg-tools`, run `.\mmg.ps1 scorecards`. This regenerates `src/lib/scorecard-data.js` (site repo), `strokes-gained/course-data.js`, and `scoring-companion/scorecards.json` from the master, then commits and pushes both repos itself. Confirm it prints "Scorecards synced" — a failure means fix `scorecards.json` (or run `.\mmg.ps1 scorecards-rebuild-master` if the master itself needs rebuilding from legacy sources) and re-run, not skip ahead.
4. **Repo (still manual — the sync does not reach this):** `src/lib/golf-courses-data.js` — the par value appears in `pills` text only (e.g. `'Par 72 · Championship'`). Change the pill string; nothing else in that entry encodes par.
5. **Repo content (still manual):** any blog/guide content mentioning that course's par or hole data — grep the old value (e.g. `Par 72`, `par-5 18th`, specific hole yardages) across:
   - `src/lib/guide-post-content.js`
   - `src/lib/guide-article-content.js` + `guide-article-content-localized.js` (all 6 languages)
   - `src/lib/golf-courses-content.js`
   - `prototypes/` (tools may state par/length)

## Verify

- `.\mmg.ps1 scorecard-audit` — checks the trusted PDFs against `scorecards.json`, catching a transcription slip in step 2.
- `.\mmg.ps1 scorecard-sources` — cross-checks the PDF, the central JSON, and strokes-gained agree with each other.
- Grep the repo for the old value scoped to that course (steps 4-5) — zero live hits.
- `npm run check:content`; add `npm run check:i18n-release` if localized guide content changed.

## Annual/periodic check (not applying a known change)

`.\mmg.ps1 scorecard-audit` and `.\mmg.ps1 scorecard-sources` (same two commands as above) are also the whole "is what's recorded still true" check for scorecard data — the equivalent role `/verify-course-pricing` plays for green fees, but there's no separate skill wrapping these two, because there isn't more to the process than running them and fixing whatever they flag via the update chain above.

## Ship

Via the `ship` skill. In the completion report, state which of the Drive steps (PDF filed) is done vs. pending on Andy — the task isn't fully closed until the PDF is actually filed and `scorecards.json` matches it.
