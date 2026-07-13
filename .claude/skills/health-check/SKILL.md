---
name: health-check
description: Read-only reconnaissance sweep across the repo, tools, sync docs, and Drive that reports a ranked list of drift/cleanup candidates. Best run in Fable (fast, broad, report-only); hand the chosen fixes to Opus. Use for "audit everything", "what needs cleaning up", "health check", or a periodic MMG maintenance pass.
---

# MMG Health Check — reconnaissance sweep

**Purpose:** surface drift, dead pointers, stale prices, and cleanup candidates across the whole MMG surface. **Report only — never fix in this pass.** Produce a ranked list; the operator hands chosen items to a follow-up (Opus) session.

**Model:** built for **Fable** — the value is breadth and speed over many files, and it is read-only so it is low risk. Do the *fixing* in Opus, where the judgment calls (conventions, voice, precise edits) belong.

## Run these first (they already encode known invariants)
From `mrmallorcagolf-real`:
- `npm run check:content` — runs the full guardrail suite including `check:pointers` (dead doc paths), `check:voice` (em dashes / banned words in English masters), `check:tool-prices` (hardcoded tool price vs canonical), locale, routes, course-data.
- `npm run check:i18n-release` and `npm run build` if anything locale-facing looks off.
Report any failure verbatim — a red check is a ready-made candidate.

## Then sweep for what the checks do NOT cover
1. **Tools hardcoding canonical values** — `grep -rlE "€[0-9]" "src/app/(en)/tools"` and confirm each hit is either dynamic (`getCanonicalCourseData` / `course-catalog`) or covered by `check:tool-prices`. New hardcoded price = candidate.
2. **Repo TODO/FIXME/deprecated backlog** — `grep -rniE "\b(TODO|FIXME|HACK|deprecated)\b" src/`. Triage into still-valid / already-done / delete.
3. **Sync system docs (`../mmg-tools`)** — its SOURCE-OF-TRUTH-MAP.md, DATA-FLOWS.md, OPERATING-MAP.md, CLEANUP-BACKLOG.md have never had the dead-pointer/contradiction treatment the site docs got. Candidate: port `check:pointers` there. Also flag stray artefacts (e.g. `debug.log`).
4. **Narrative price consistency** — canonical prices in `src/lib/course-pricing-data.js` and PWAP in `play-with-a-pro-content.js` vs prose mentions in `guide-*-content*.js`, `offers-content.js`, `homepage-content.js`, `plan-your-trip-content.js`. Only `check:tool-prices` covers the tool; prose is still manual. Candidate: a `check:pricing-narrative`.
5. **Locale structure parity for guides** — existing checks cover slug coverage + flags + tracked leaks, not per-slug section-structure parity across the 7 locales. Candidate: a guide-structure parity check.
6. **Drive organisation** — loose working docs at the Drive root, duplicates of generated files, and `WHERE_THINGS_LIVE.md` accuracy. Lower priority.

## Output
A single ranked list: each item = what, where (file:line), why it matters, and whether the fix is mechanical or judgement. Recommend an order (things that compound first: fix a surface, then the check that locks it). Do not edit anything.
