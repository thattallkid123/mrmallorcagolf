# Pricing Change Checklist

Use this when any golf pricing or MMG service pricing changes, including Santa Ponsa 2 and 3.

For the full list of surfaces to check, see `docs/pricing-surfaces-inventory.md`.
For a fast reminder packet, run `node scripts/pricing-change-reminder.js --subject "Course or offer" --old OLD --new NEW`.

**This file starts from "a price has changed."** If you are instead going looking for what changed — the routine seasonal sweep — start on the mmg-tools side at `mmg-tools/PRICING.md` > **Annual / Seasonal Price Check**. That runbook covers finding the correct new figure (Hermes review queue → `officialRatesUrl` → `deal-products.json` > `annualSourceChecklist` for vouchers/packs) and hands back here once you have a confirmed number. Do not re-derive that process from this file.

## 1. Update the source of truth

- For course green fees, edit the live Pricing Google Sheet — the single source of truth. Column reference: `mmg-tools/PRICING.md` > Editable Workbook Columns.
- For MMG service prices (Play With A Pro, Signature Day), edit Control Panel > Service Prices, backed by `mmg-tools/pricing/edit/confirmed/service-pricing.json`.
- For course pricing, run `.\mmg.ps1 pricing-publish` from `C:\OneDrive\Desktop\cursor\mmg-tools` to regenerate tool data and website outputs in one guarded pass.
- For service pricing only, run `node scripts/sync-site-pricing.js --dry-run` first, then `.\mmg.ps1 site`.
- Treat the generated JSON and readable MD as outputs, not edit targets.
- **Deals, vouchers and multi-round packs are a separate system** — they live in `mmg-tools/pricing/edit/confirmed/deal-products.json` and sync with `node scripts/sync-deal-products.js`, not through the Pricing Sheet or `.\mmg.ps1 pricing`. See `mmg-tools/DATA-FLOWS.md` > Deal Products Flow.

## 2. Update the main site

- `src/lib/golf-courses-data.js`
- `src/lib/golf-courses-content.js`
- `src/lib/offers-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/play-with-a-pro-content-localized.js`
- `src/lib/contact-content.js`
- `src/lib/contact-content-localized.js`
- `src/lib/homepage-content.js`
- `src/lib/homepage-content-localized.js`
- `src/lib/plan-your-trip-content.js`
- `src/lib/plan-your-trip-content-localized.js`
- `src/lib/golf-cost-calculator-translations.js`
- `src/app/(en)/play-with-a-pro/PlayWithAProView.jsx`
- `src/app/(en)/contact/ContactFormPanel.jsx`
- `public/llms.txt`
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
- Run `npm run check:service-pricing` when an MMG service price changed
- Check the course pages, guide cards, and pricing tools
- Live-fetch the public pages/tool domains that Google can show snippets for; old Google snippets can lag even after the live HTML is correct
- Run `npm run check:tool-green-fees` if any public green-fee number changed
- Regenerate the lead magnet PDFs if any PDF-visible price changed
- Run `npm run check:content` and fix any failures before commit or push
- Commit and push the repo(s) that changed
- **Verify on the live page, not just the generated JSON.** A generator can hold the right value while a downstream build step never reads it, leaving the old figure on screen. Load the actual page or tool for a course/date that exercises the change before calling it done.

## 7. Google recrawl / stale snippet follow-up

- For owned `www.mrmallorcagolf.com` URLs, use Search Console URL Inspection > Request indexing and submit `https://www.mrmallorcagolf.com/sitemap.xml`. Do not use Google's public Refresh Outdated Content tool for URLs Andy owns.
- If Search Console quota is exhausted, continue when it resets. Prioritise exact URLs that appeared in Google with the old price, then their alternate-language equivalents.
- For subdomains such as `day-cost.mrmallorcagolf.com`, `guide.mrmallorcagolf.com`, and `deals.mrmallorcagolf.com`, request indexing from their own verified URL-prefix/domain properties. If a property is not verified yet, add it before the next pricing change.
- For third-party results such as Trustpilot, Instagram, Facebook, Google Business Profile, and about.me, edit/verify the live third-party page first. If Google still shows the old snippet after the live page is corrected, use Google's Refresh Outdated Content tool for that third-party result URL.
- Standard post-change searches: `mrmallorcagolf OLD`, `"Mr Mallorca Golf" "OLD"`, `site:mrmallorcagolf.com "OLD"`, `site:day-cost.mrmallorcagolf.com "OLD"`, `site:guide.mrmallorcagolf.com "OLD"`, `site:deals.mrmallorcagolf.com "OLD"`, `site:trustpilot.com "Mr Mallorca Golf" "OLD"`, `site:instagram.com/mrmallorcagolf "OLD"`, `site:facebook.com "mrmallorcagolf" "OLD"`.
