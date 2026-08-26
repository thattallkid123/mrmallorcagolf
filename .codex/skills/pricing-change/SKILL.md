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

Green fees: edit the pricing master Google Sheet (the single source of truth), then run `.\mmg.ps1 pricing-publish` from mmg-tools (or double-click `UPDATE MMG PRICING.cmd` on the Desktop) — the one guarded pass that publishes both mmg-tools outputs and the public website price pills/tool fallbacks together. The generated JSON/MD are outputs — never edit them directly. (The old Excel workbook, the legacy `sync-pricing.py`, and the older two-step `.\mmg.ps1 pricing` then `.\mmg.ps1 site` chain are all superseded.)

MMG service prices: edit Control Panel > Service Prices, backed by `mmg-tools/pricing/edit/confirmed/service-pricing.json`, run `node scripts/sync-site-pricing.js --dry-run` first, then run `.\mmg.ps1 site`. This updates the website service-price data, offer/content files, tool service-price snapshots, static calculator copy, `llms.txt`, and Mallorca Hub service-price fallbacks. Saved Internal proposals retain their original price snapshot.

**Auto-synced by `.\mmg.ps1 pricing-publish` — do NOT hand-edit (regenerated from the master):**
- `src/lib/golf-courses-data.js` — course-listing pills (e.g. `Peak €165 / Low €115`). Editing these by hand is overwritten on the next sync and breaks the data-flow rule; fix the master and re-run instead.

**The sync does NOT cover these — always manual:**
- Green-fee narrative: `src/lib/guide-article-content.js` (EN) and `src/lib/guide-article-content-localized.js` (all 6 languages). Includes the "All 24 Courses" quick-reference `type: 'table'` — a per-course **Green Fee** column that has drifted from canonical before.
- Any `guide-post-content.js` entry mentioning the changed price
- Any Drive, PDF, partner, social, MailerLite, Google Business Profile, WhatsApp, about.me, Trustpilot, or sent proposal surface listed in `docs/pricing-surfaces-inventory.md`
- `src/lib/mallorca-tracker-courses.js` is prototype placeholder data — do NOT update it

## 3. Grep-driven sweep

Run `node scripts/price-sweep.mjs --old <old> --new <new> --label "<what changed>"` — greps the OLD price (as a standalone number, avoiding false hits on longer numbers) across every surface group in the inventory below, prints the rendered locale phrase variants to eyeball by hand, confirms the NEW price's hit count, and lists the external/manual surfaces to report. It does not understand context (a match may be a stroke index or a year) — read each hit before editing, and it doesn't replace the sweep in this order:

1. **Core offers:** `offers-content.js`, `play-with-a-pro-content.js`, `play-with-a-pro-content-localized.js`, `plan-your-trip-content.js`, `homepage-content.js`, `contact-content.js`, their localized variants, `page-metadata.js`, `public/llms.txt`, and the Play With A Pro/contact component fallbacks.
2. **Tools/prototypes:** `src/lib/golf-cost-calculator-translations.js`, `prototypes/golf-cost-calculator/`, `course-selector-simple/`, `hotel-recommender/`, `golf-day-builder/`, `prototypes/index.html` — plus `mmg-tools/` and `standalone-apps/mallorca-hub/` if that repo is available (if not mounted/available, list them as pending in the report)
3. **Lead magnets:** `src/lib/signup-config.js`, `src/app/api/lead-magnet-signup/route.js`; if any PDF-visible price changed, regenerate via `npm run generate:lead-magnet-pdfs`
4. **Docs:** `docs/content-architecture.md`, `docs/CONTENT_STRUCTURE.md`, `CLAUDE.md`, `README.md`, and the inventory itself

## 4. Verify

- Grep for the OLD price again — zero hits expected in live surfaces (historical handover docs may legitimately keep it).
- Grep for the NEW price — confirm it appears everywhere expected, all 7 locales.
- Live-fetch the public URLs that Google is likely to show snippets for: homepage, Play With A Pro, Plan Your Trip, the Play With A Pro guide, all affected locale routes, and each public tool/app domain. Treat live HTML as the source check; Google snippets can lag after a correct deploy.
- `npm run check:service-pricing` for MMG service-price changes.
- `npm run check:content`; add `npm run check:i18n-release` if localized content changed.
- `check:pricing-narrative` (runs inside `check:content`) cross-checks every labelled `Peak/Low` pair, `€low-high` band, and table Green-Fee cell across the content files against canonical `course-pricing-data.js`. **It does not catch two things — eyeball them:** dynamic-priced courses are exempt (observed rates vary), and freeform prose ranges inside a sentence ("charges €115–€165", "from €90") are not parsed.

## 4b. Search result / recrawl follow-up

- Search Google for `mrmallorcagolf OLD`, `"Mr Mallorca Golf" "OLD"`, `site:mrmallorcagolf.com "OLD"`, `site:day-cost.mrmallorcagolf.com "OLD"`, `site:guide.mrmallorcagolf.com "OLD"`, `site:deals.mrmallorcagolf.com "OLD"`, `site:instagram.com/mrmallorcagolf "OLD"`, `site:facebook.com "mrmallorcagolf" "OLD"`, and `site:trustpilot.com "Mr Mallorca Golf" "OLD"`.
- For owned website URLs, do not use Google's public Refresh Outdated Content tool. Use Search Console URL Inspection > Request indexing for exact `https://www.mrmallorcagolf.com/...` URLs and resubmit `https://www.mrmallorcagolf.com/sitemap.xml`. If the quota is hit, continue when it resets; repeated submissions for the same URL do not speed the crawl.
- For subdomain tools (`day-cost`, `guide`, `deals`, etc.), submit/request indexing only if that exact URL-prefix or domain property is verified in Search Console. If it is not verified, note that as a manual setup task.
- For third-party pages (Trustpilot, Instagram, Facebook, Google Business Profile, about.me), first edit or verify the live source. If the live third-party page no longer contains the old price but Google still shows it, then the public Refresh Outdated Content tool is appropriate because Andy does not own that third-party URL.
- Do not mistake a stale Google snippet for a source leak. If clicking through or fetching the live page shows only the new price, report it as pending Google recrawl/snippet refresh.

## 5. Record and report

- Create `docs/pricing-handover-YYYY-MM-DD.md` logging the decision (old → new, why, what was touched).
- Update the status columns in `docs/pricing-surfaces-inventory.md`.
- **Report the external/manual surfaces to Andy** — these cannot be done from the repo: Google Business Profile, about.me, WhatsApp business profile + saved replies, MailerLite forms/sequences, any externally shared brochures/rate cards. List them explicitly with ❌ until Andy confirms.

## 6. Ship

Use the `ship` skill. The task is not done until deployed AND the manual-surface list has been handed to Andy.
