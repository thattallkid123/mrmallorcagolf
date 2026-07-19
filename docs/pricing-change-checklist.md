# Pricing Change Checklist

Use this when any golf pricing changes, including Santa Ponsa 2 and 3.

For the full list of surfaces to check, see `docs/pricing-surfaces-inventory.md`.
For a fast reminder packet, run `node scripts/pricing-change-reminder.js --subject "Course or offer" --old OLD --new NEW`.

## 1. Update the source of truth

- Edit the pricing master Google Sheet (the single source of truth)
- Run `.\mmg.ps1 pricing` then `.\mmg.ps1 site` from mmg-tools
- Treat the generated JSON and readable MD as outputs, not edit targets

## 2. Update the main site

- `src/lib/golf-courses-data.js`
- `src/lib/golf-courses-content.js`
- `src/lib/guide-article-content.js`
- `src/lib/guide-article-content-localized.js`
- Any page component or metadata that renders the changed pricing

## 3. Update tools and static apps

- `src/app/(en)/tools/course-selector/` — manual fallback fee strings must still match canonical pricing even though the live route resolves prices from `src/lib/course-pricing-data.js`
- `src/app/(en)/tools/green-fees/` — base table rows must match canonical pricing; the route overlays canonical values at runtime
- `mmg-tools/day-cost/`
- `mmg-tools/guide/`
- `mmg-tools/internal/`
- `standalone-apps/mallorca-hub/`
- `prototypes/course-selector-simple/index.html`
- `prototypes/hotel-recommender/index.html`
- `src/app/(en)/tools/golf-day-builder/` — live route; pulls prices dynamically from canonical course data, no manual update needed
- `prototypes/golf-cost-calculator/index.html`
- `prototypes/index.html`
- Any other app or tool that shows the same course or package price

## 4. Update docs and reference layers

- `src/lib/signup-config.js`
- `src/app/api/lead-magnet-signup/route.js`
- `public/downloads/*.pdf` via `python scripts/generate-lead-magnet-pdfs.py`
- `docs/content-architecture.md`
- `docs/CONTENT_STRUCTURE.md`
- `docs/archive/pricing-handover-2026-06-18.md`
- `CLAUDE.md`
- `README.md`
- Any audit, handover, or encyclopaedia/reference note that mentions the price

Manual surfaces to remember in the same pass:

- `about.me`
- Trust Pilot business page
- Google business page
- WhatsApp business page

## 5. Keep the visibility rules straight

- If a price is public-facing, update the public site and tools
- If a price should stay on record but not bookable, keep it in the private reference layer and note the access restriction
- Santa Ponsa 2 and 3 can stay in the reference layer even when they are not generally bookable
- Ignore 9-hole pricing unless a page or tool specifically needs it

## 6. Verify before pushing

- Search for the old and new price strings
- Check the course pages, guide cards, and pricing tools
- Run `npm run check:tool-green-fees` if any public green-fee number changed
- Regenerate the lead magnet PDFs if any PDF-visible price changed
- Run `npm run check:content` and fix any failures before commit or push
- Commit and push the repo(s) that changed
