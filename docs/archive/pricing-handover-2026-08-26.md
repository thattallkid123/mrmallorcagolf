# Pricing Handover - 2026-08-26

## Decision

- Effective date: 2026-08-26.
- Solo Play With A Pro public price changed from `EUR 695` to `EUR 795`.
- Group Play With A Pro stays `EUR 950 total` for 2-3 golfers.
- Signature Day stays `EUR 3,000+`.
- Trip planning stays enquiry only.

Commercial intent:

- This is a temporary step to reduce the gap between Solo and Group pricing.
- Future direction is to remove the separate Solo price and move to a single `EUR 950` day fee, but that is not part of this change.

## Solo Price History

The canonical machine-readable history is in:

- `mmg-tools/pricing/edit/confirmed/service-pricing.json`

Known sequence:

- Before the `EUR 495` era: several earlier Solo versions existed.
- `EUR 495`: previous public Solo reference point.
- `EUR 695`: public Solo price from 2026-06-18.
- `EUR 795`: current public Solo price from 2026-08-26.

Historical invoices, saved proposals, screenshots, archived docs, and accounting records should keep the value that was true at the time. They are evidence, not current offer copy.

## Updated In Code

Canonical source:

- `mmg-tools/pricing/edit/confirmed/service-pricing.json`

Website current-offer surfaces:

- `src/lib/service-pricing-data.js`
- `src/lib/offers-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/play-with-a-pro-content-localized.js`
- `src/lib/contact-content.js`
- `src/lib/contact-content-localized.js`
- `src/lib/homepage-content.js`
- `src/lib/plan-your-trip-content.js`
- `src/lib/golf-cost-calculator-translations.js`
- `src/app/(en)/play-with-a-pro/PlayWithAProView.jsx`
- `src/app/(en)/contact/ContactFormPanel.jsx`
- `prototypes/golf-cost-calculator/index.html`
- `public/llms.txt`

MMG tools and standalone apps:

- `mmg-tools/calculator/service-pricing.js`
- `mmg-tools/day-cost/service-pricing.js`
- `mmg-tools/guide/service-pricing.js`
- `mmg-tools/internal/service-pricing.js`
- `mmg-tools/calculator/index.html`
- `mmg-tools/day-cost/index.html`
- `mmg-tools/guide/index.html`
- `mmg-tools/internal/index.html`
- `standalone-apps/mallorca-hub/course-facts.js`
- `standalone-apps/mallorca-hub/index.html`

Infrastructure tightened during the change:

- `mmg-tools/scripts/sync-site-pricing.js` now updates the app shell fallbacks for calculator, day-cost, guide, and internal when service pricing changes.
- The public tool PWA cache versions were bumped so installed apps are not pinned to stale `EUR 695` shell copy.
- `internal/index.html` was reconciled after the parallel internal-app chat finished. Its generated `internal/service-pricing.js` and shell fallbacks both use the current `EUR 795` data.

## Protected Historical / Non-current References

Do not bulk-replace these without context:

- Saved invoices and accounting records.
- Saved Internal proposals or fee snapshots.
- Archived handover docs such as `docs/archive/pricing-handover-2026-06-18.md`.
- Archived audits or screenshots that intentionally show the old site state.
- The service-pricing history entries in `mmg-tools/pricing/edit/confirmed/service-pricing.json`.

## Manual Follow-Up List

These are outside the repo and still need Andy/manual confirmation if they show the Solo price:

- Google Business Profile description, services, and Q&A.
- about.me profile.
- Trustpilot business profile.
- WhatsApp business profile/about text.
- WhatsApp saved replies.
- WhatsApp Business Catalog products.
- Brochures, PDFs, rate cards, one-pagers, screenshots, or image-based pricing assets already shared externally.
- Partner listings, directories, or brochure pages that repeat the old price.

Recommended current wording:

- Solo: `EUR 795`
- Group: `EUR 950 total for 2-3 golfers`
- Signature Day: `EUR 3,000+`
- Trip planning: by enquiry

## Verification Notes

Required checks for this change:

- `node scripts/sync-site-pricing.js --dry-run`
- `.\mmg.ps1 site`
- `npm run check:service-pricing`
- `npm run check:content`
- `npm test`
- `npm run check:i18n-release`
- `npm run build`
- GitHub Actions: `Verify Content And Build`
- Vercel production deployment for `mrmallorcagolf-live`
- Live URL smoke checks for current offer pages and tool surfaces

After the change, active offer surfaces should show `EUR 795` for Solo and should not show `EUR 695` except in explicitly historical records, archived audits, or unrelated numeric data such as coordinates.
