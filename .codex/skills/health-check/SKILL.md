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

## Already covered (do not re-propose these)
- Prose price consistency across guide/offer/homepage content vs canonical pricing — `check:pricing-narrative`
- Guide slug structure parity across all 7 locales — `check:guide-parity`
- mmg-tools doc-pointer / dead-reference check — `scripts/check-doc-pointers.mjs` in that repo (`node scripts/check-doc-pointers.mjs`)
- Discovery surfaces (sitemap/feed/IndexNow×2) agreeing on the same guide slug set — `check:discovery`
- Meta description length + curly-apostrophe compiler trap — `check:meta-length` (standalone, not yet in `check:content` — there's a known backlog of 32 over-length descriptions, re-check whether that's been worked down)

## Then sweep for what the checks do NOT cover
1. **Tools hardcoding canonical values** — `grep -rlE "€[0-9]" "src/app/(en)/tools"` and confirm each hit is either dynamic (`getCanonicalCourseData` / `course-catalog`) or covered by `check:tool-prices`. New hardcoded price = candidate.
2. **Repo TODO/FIXME/deprecated backlog** — `grep -rnE "\b(TODO|FIXME|HACK)\b" src/` (case-SENSITIVE — a case-insensitive grep matches the Spanish word "todo" all over the localized content and reports a fake backlog). As of Jul 2026 there are zero real markers. Triage any new ones into still-valid / already-done / delete.
3. **Drive organisation** — loose working docs at the Drive root, duplicates of generated files, and `WHERE_THINGS_LIVE.md` accuracy. Lower priority.
4. **docs/ root drift** — any file added to `docs/` root since the last pass that should be in `docs/archive/` per the hygiene rule (dated/session files), and whether `docs/README.md`'s index still matches what's actually there.
5. **Skill mirror drift** — `.claude/skills/` vs `.codex/skills/` (run `npm run skills:sync` and see if anything changes) and whether the skills README / CLAUDE.md skill list still names every skill that exists.

## Output
A single ranked list: each item = what, where (file:line), why it matters, and whether the fix is mechanical or judgement. Recommend an order (things that compound first: fix a surface, then the check that locks it). Do not edit anything.
