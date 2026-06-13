# Pricing Change Checklist

Use this when any golf pricing changes, including Santa Ponsa 2 and 3.

## 1. Update the source of truth

- Edit `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_EDIT-THIS.xlsx`
- Run `python scripts/sync-pricing.py`
- Treat the generated JSON and readable MD as outputs, not edit targets

## 2. Update the main site

- `src/lib/golf-courses-data.js`
- `src/lib/golf-courses-content.js`
- `src/lib/guide-article-content.js`
- `src/lib/guide-article-content-localized.js`
- Any page component or metadata that renders the changed pricing

## 3. Update tools and static apps

- `mmg-tools/day-cost/`
- `mmg-tools/guide/`
- `standalone-apps/mallorca-hub/`
- Any other app or tool that shows the same course or package price

## 4. Update docs and reference layers

- `docs/content-architecture.md`
- `docs/CONTENT_STRUCTURE.md`
- `CLAUDE.md`
- `README.md`
- Any audit, handover, or encyclopaedia/reference note that mentions the price

## 5. Keep the visibility rules straight

- If a price is public-facing, update the public site and tools
- If a price should stay on record but not bookable, keep it in the private reference layer and note the access restriction
- Santa Ponsa 2 and 3 can stay in the reference layer even when they are not generally bookable
- Ignore 9-hole pricing unless a page or tool specifically needs it

## 6. Verify before pushing

- Search for the old and new price strings
- Check the course pages, guide cards, and pricing tools
- Commit and push the repo(s) that changed
