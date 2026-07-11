---
name: pricing-change
description: Full sweep procedure when any price changes (green fees, Play With A Pro, Signature Day, packages). Use whenever Andy asks to change, update, or correct a price anywhere — never edit just one page. Covers repo surfaces, tools, prototypes, docs, PDFs, and the external/manual surface report.
---

# Pricing Change Sweep

A price never lives in one file. The canonical maps are `docs/pricing-change-checklist.md` and `docs/pricing-surfaces-inventory.md` — read both before editing anything. This skill is the execution order.

## 1. Confirm scope with Andy (one question, once)

- Which price, old value → new value, effective date?
- Public-facing, or record-only? (Record-only prices — e.g. Santa Ponsa 2/3 — stay in the private Drive reference layer, NOT on the site or tools.)

Optional reminder packet: `node scripts/pricing-change-reminder.js --subject "Course or offer" --old OLD --new NEW`

## 2. Source of truth first

Green fees: the pricing master Google Sheet / `MMG_COURSE_PRICING_MASTER_EDIT-THIS.xlsx` in Drive, then `python scripts/sync-pricing.py` (or `.\mmg.ps1 pricing` from mmg-tools). The generated JSON/MD are outputs — never edit them directly.

**The sync does NOT cover these — always manual:**
- `src/lib/golf-courses-data.js` — pills text (e.g. `Peak 22 / Low 14`)
- `src/lib/guide-article-content.js` (EN) and `src/lib/guide-article-content-localized.js` (all 6 languages)
- Any `guide-post-content.js` entry mentioning the price
- `src/lib/mallorca-tracker-courses.js` is prototype placeholder data — do NOT update it

## 3. Grep-driven sweep

Grep the repo for the OLD price string (digits, and rendered phrases like `Solo from`, `EUR 950 total` and its 6 locale variants — see the inventory's search-terms section). Then sweep in this order:

1. **Core offers:** `offers-content.js`, `play-with-a-pro-content.js`, `plan-your-trip-content.js`, `homepage-content.js` (all 7 locales live in each file), `page-metadata.js` (meta descriptions can carry prices)
2. **Tools/prototypes:** `prototypes/golf-cost-calculator/`, `course-selector-simple/`, `hotel-recommender/`, `golf-day-builder/`, `prototypes/index.html` — plus `mmg-tools/` and `standalone-apps/mallorca-hub/` if that repo is available (if not mounted/available, list them as pending in the report)
3. **Lead magnets:** `src/lib/signup-config.js`, `src/app/api/lead-magnet-signup/route.js`; if any PDF-visible price changed, regenerate via `npm run generate:lead-magnet-pdfs`
4. **Docs:** `docs/content-architecture.md`, `docs/CONTENT_STRUCTURE.md`, `CLAUDE.md`, `README.md`, and the inventory itself

## 4. Verify

- Grep for the OLD price again — zero hits expected in live surfaces (historical handover docs may legitimately keep it).
- Grep for the NEW price — confirm it appears everywhere expected, all 7 locales.
- `npm run check:content`; add `npm run check:i18n-release` if localized content changed.

## 5. Record and report

- Create `docs/pricing-handover-YYYY-MM-DD.md` logging the decision (old → new, why, what was touched).
- Update the status columns in `docs/pricing-surfaces-inventory.md`.
- **Report the external/manual surfaces to Andy** — these cannot be done from the repo: Google Business Profile, about.me, WhatsApp business profile + saved replies, MailerLite forms/sequences, any externally shared brochures/rate cards. List them explicitly with ❌ until Andy confirms.

## 6. Ship

Use the `ship` skill. The task is not done until deployed AND the manual-surface list has been handed to Andy.
