# Pricing Surfaces Inventory

Use this as the exact map when a price changes. Service-pricing sync coverage tightened 2026-08-26 before the Solo €695 → €795 change, then the Solo change was applied the same day.

**Scope note (added 2026-07-29):** this file covers two distinct pricing domains. Most of
it — the sections below down to "Docs that mention pricing" — is **MMG service pricing**
(Play With A Pro, Signature Day, trip planning). The **"Course pricing and golf-cost
reference layers"** section is the one exception: it tracks golf-course green-fee pricing,
a completely separate system (Google Sheet → Hermes → calculator/tools/site). That
system's full architecture lives in `mmg-tools/SOURCE-OF-TRUTH-MAP.md` §1 — go there for
how the pieces fit together; this file only tracks which surface has which status.

**Current pricing from 2026-08-26:** Solo €795 · Group €950 total · Signature Day €3,000+ · Trip planning: enquiry only

**Solo price history:** earlier pre-€495 versions existed; then €495; then €695 from 2026-06-18; now €795 from 2026-08-26. The machine-readable history lives in `mmg-tools/pricing/edit/confirmed/service-pricing.json`.

---

## Core offer pricing (repo — auto-verified)

| File | Status |
|---|---|
| `src/lib/offers-content.js` | ✅ Verified €795 / €950 |
| `src/lib/play-with-a-pro-content.js` | ✅ Verified €795 / €950 (all 7 locales) |
| `src/lib/play-with-a-pro-content-localized.js` | ✅ Guarded by `.\mmg.ps1 site` and `npm run check:service-pricing` |
| `src/lib/plan-your-trip-content.js` | ✅ Verified €795 / €950 (all 7 locales) |
| `src/lib/homepage-content.js` | ✅ Verified €795 / €950 (all 7 locales) |
| `src/lib/contact-content.js` | ✅ Guarded fallback + derived values |
| `src/lib/contact-content-localized.js` | ✅ Guarded localized fallback values |
| `src/app/(en)/contact/ContactFormPanel.jsx` | ✅ Guarded fallback values |
| `src/app/(en)/play-with-a-pro/PlayWithAProView.jsx` | ✅ Guarded JSON-LD `lowPrice` |
| `src/lib/page-metadata.js` | Check if price appears in meta descriptions |
| `src/lib/signup-config.js` | ✅ No hardcoded price |
| `public/llms.txt` | ✅ Guarded by `.\mmg.ps1 site` and `npm run check:service-pricing` |

## Lead magnet and MailerLite surfaces

| Surface | Status |
|---|---|
| `src/app/api/lead-magnet-signup/route.js` | ✅ No hardcoded price |
| `public/downloads/trip-planner.pdf` | ⚠️ Manual — original tracked version. No PWAP price in extracted text |
| `public/downloads/cost-guide.pdf` | ⚠️ Manual — original tracked version. €950 in text = green fee range, not PWAP |
| `public/downloads/course-comparison.pdf` | ⚠️ Manual — original tracked version. No PWAP price in extracted text |
| `public/downloads/beginners-guide.pdf` | ⚠️ Manual — original tracked version. No PWAP price in extracted text |
| `scripts/generate-lead-magnet-pdfs.py` | Check if PWAP price is hardcoded |
| MailerLite live form copy | ❌ Manual update needed — check MailerLite dashboard |
| MailerLite nurture email sequence | ❌ Manual update needed — check MailerLite dashboard |

## HTML tools / prototypes (repo)

| File | Status |
|---|---|
| `prototypes/index.html` | ✅ No hardcoded price |
| `prototypes/golf-cost-calculator/index.html` | ✅ Guarded €795 / €950 fallback note |
| `prototypes/course-selector-simple/index.html` | Check — no price found in last scan |
| `prototypes/hotel-recommender/index.html` | Check — no price found in last scan |
| `src/lib/golf-cost-calculator-translations.js` | ✅ Guarded by `.\mmg.ps1 site` and `npm run check:service-pricing` |
| `src/app/(en)/tools/course-selector/CourseSelectorToolClient.jsx` | Manual fallback fee strings present; verified by `npm run check:tool-green-fees` |
| `src/app/(en)/tools/green-fees/GreenFeesClient.jsx` | Base comparison rows present; verified by `npm run check:tool-green-fees` |
| `src/app/(en)/tools/golf-day-builder/` | Live route — pulls prices dynamically from canonical course data, no manual update needed |

## Course pricing and golf-cost reference layers

Green-fee/course pricing is a separate system from the service pricing this file otherwise
tracks (Play With A Pro, Signature Day). Its full architecture — the Sheet, TO contracts,
Hermes, the pricing-model categories, the sync pipeline — is documented in
`mmg-tools/SOURCE-OF-TRUTH-MAP.md` section 1. This table is the surface-by-surface status
only; go there for how the pieces fit together.

For the routine seasonal sweep — how to find out whether a course's price has changed at all —
use `mmg-tools/PRICING.md` > **Annual / Seasonal Price Check** (added 2026-08-13), and its
**Editable Workbook Columns** table for what each of the Sheet's 42 columns means. Deals,
vouchers and multi-round packs are a separate source (`deal-products.json`), covered by
`mmg-tools/DATA-FLOWS.md` > Deal Products Flow — they are not in the Pricing Sheet and are not
tracked in the table below.

| File | Status |
|---|---|
| Pricing master Google Sheet (Pricing + Contract Terms 2026 tabs) | Source of truth for green fees, 9H, twilight, early-bird, pricing model, rate/booking URLs — edit here, then `.\mmg.ps1 pricing`. See `SOURCE-OF-TRUTH-MAP.md` §1. |
| `src/lib/golf-courses-data.js` | ✅ Verified 2026-07-29 — pills unaffected by twilight/9H additions (pills only ever show the 18H green-fee range) |
| `src/lib/golf-courses-content.js` | Course content data — not touched 2026-07-29, no known issue |
| `src/lib/guide-post-content.js` | Blog post pricing references — not touched 2026-07-29, no known issue |
| `mmg-tools/day-cost/` | ✅ Verified 2026-07-29 — confirmed it does not render twilight/earlybird (not a gap, just not used there); low/peak/buggy/clubs sync correctly |
| `mmg-tools/guide/course-sync.js` | Flows through the same auto-sync as day-cost (`sync-course-logistics.js`) — not specifically re-verified 2026-07-29, no known issue |
| `mmg-tools/internal/` | ❌ Confirmed 2026-07-29: none of the new price-source fields (pricingModel, sourceType, officialRatesUrl, bookingUrl, rentalTOTerms) have reached `internal/course-sync.js` yet. Deliberately deferred — Andy's call, not a bug. See memory `internal-tool-trolley-extras-deferred`. |
| `mmg-tools/calculator/` | ✅ Fixed 2026-07-29 — twilight/earlybird now sync live (were frozen/wrong for several courses, e.g. Canyamel showed a twilight price for a product that doesn't exist). Verified in a real browser, not just generated JSON. The old file-rewrite sync path (`syncCalculator()`) was dead code silently matching zero courses; removed. |
| `mmg-tools/control-panel/` | ✅ Extended 2026-07-29 — Course Hub now shows pricing model, rate/booking URLs, 9H, twilight, early-bird per course, plus a live "Data still needed" checklist computed from the current master (not a written list — can't go stale). |
| MMG Encyclopaedia (`MMG_ENCYCLOPAEDIA_DATA_MASTER.md`) | ✅ Checked 2026-07-29 — its price line only reads `low`/`peak`/`dynamic`/`licenceFee`, none of which changed this session, so it's accurate though unrefreshed. Does not reflect 9H/twilight/pricing-model detail (not built to). |
| `standalone-apps/mallorca-hub/course-facts.js` | ✅ Generated service-price snapshot from `pricing/edit/confirmed/service-pricing.json` |
| `standalone-apps/mallorca-hub/index.html` | ✅ Guarded service-price fallback; course/hospitality euro signs may also appear and are separate content |

## Docs that mention pricing

| File | Status |
|---|---|
| `docs/pricing-change-checklist.md` | ✅ Current — re-checked 2026-08-26 for service-pricing surfaces and automated guard coverage. |
| `mmg-tools/PRICING.md` | ✅ Rewritten 2026-08-13 — full 42-column table, Annual / Seasonal Price Check runbook, documented direct cell-write endpoint |
| `mmg-tools/DATA-FLOWS.md` | ✅ Contacts And Courtesy Flow + Course Key Alias Flow brought to the same standard 2026-08-13 |
| `mmg-tools/COURSE-DATA-SYSTEM.md` | ✅ Course Master field table (30 fields) + periodic-staleness section added 2026-08-13 |
| `docs/archive/pricing-handover-2026-06-18.md` | Archived — records the Jun 2026 decision |
| `docs/archive/pricing-handover-2026-08-26.md` | Archived — records the Aug 2026 Solo €695 → €795 decision |
| `docs/pricing-surfaces-inventory.md` | ✅ This file — service pricing section updated 2026-08-26 |
| `mmg-tools/SOURCE-OF-TRUTH-MAP.md` §1 | ✅ Course pricing architecture (Sheet/contracts/Hermes model, pricing-model categories) — updated 2026-07-29 |
| `docs/content-architecture.md` | Check for hardcoded price references |
| `CLAUDE.md` | No hardcoded price (pricing rules link out to checklist) |

## External / manual surfaces

Only surfaces that actually show a price are listed. Confirmed 2026-06-18.

| Surface | Contains price? | Status |
|---|---|---|
| Google Business Profile (description, services, Q&A) | Yes | ❌ Manual update needed |
| about.me profile | Yes | ❌ Manual update needed |
| Trustpilot business profile | Yes | ❌ Manual update needed |
| WhatsApp business profile/about text | Yes | ❌ Manual update needed |
| WhatsApp saved replies | Yes | ❌ Manual update needed |
| WhatsApp Business Catalog (5 products: PWAP Solo/Group/Signature Day, Club Rentals Mallorca, Rent2Play Golf hire) | Yes | ❌ Manual update needed — added 2026-08-15, not synced by any script |
| Brochures, PDFs, rate cards shared externally | Yes | ❌ Check and update manually |
| MailerLite live form copy | No price | ✅ No action needed |
| MailerLite nurture email sequence | No price | ✅ No action needed |
| LinkedIn profile / featured services | No price | ✅ No action needed |
| Email signature and autoresponder | No price | ✅ No action needed |
| Google Reviews request copy | No price | ✅ No action needed |
| Social bios, pinned posts, highlights | No price | ✅ No action needed |

---

## Search terms to use for a price change scan

Old pricing being replaced:
- Whatever the previous price was (check `docs/pricing-handover-*.md` for history)

New pricing to confirm:
- the new Solo price (for August 26: `795`)
- `950`
- `3000` / `3,000`

Rendered phrases:
- `Solo from`
- `Groups from`
- `EUR 950 total`
- `EUR 950 en total`
- `EUR 950 au total`
- `EUR 950 in totaal`
- `EUR 950 totalt`

Encoding failures:
- Search for mojibake around euro signs, bullets, arrows, or accented place names if snippets look corrupted.

---

## Regeneration commands

```bash
# Repo content checks
npm run check:service-pricing
npm run check:content

# Rebuild lead magnet PDFs after PDF text changes
python scripts/generate-lead-magnet-pdfs.py
# or
npm run generate:lead-magnet-pdfs
```

---

## Rule of thumb

- If the price is repo-driven, update the source and regenerate any derived asset in the same pass.
- If the price is external, mark it ❌ in this file before calling the task complete.
- When the manual updates are done, update this file to ✅ so the next person knows.
- Create a new `docs/pricing-handover-YYYY-MM-DD.md` for each price change to log the decision.
