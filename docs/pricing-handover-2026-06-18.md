# Pricing Handover - 2026-06-18

## Decision

- Solo Play With A Pro: `EUR 695`
- Group Play With A Pro: `EUR 950 total` for 2-3 golfers
- Signature Day: `EUR 3,000+`
- Trip planning: enquiry only

The positioning here is intentionally premium. Avoid language that sounds like a split bill or a discount structure. Use `EUR 950 total` or `EUR 950 total for 2-3 golfers` when extra context is needed.

## Updated In Code

- Mr Mallorca Golf site pricing copy updated across the main content sources.
- MMG tools pricing sources updated so the calculator, day-cost page, and service pricing catalog match the new solo rate.
- Mallorca Hub standalone app updated to the new solo and group pricing language.
- Legacy pricing references were removed from the pricing-facing site and tool copy scanned during this pass.

## Update Map For Future Price Changes

When pricing changes again, update these places in the same pass:

- Main site pricing copy, especially offers, Play With A Pro, Plan Your Trip, Contact, Home, and any pricing callouts in page components.
- MMG tools pricing surfaces, especially calculator, day-cost, internal pricing panel, service pricing JSON, and any sync scripts that write prices into the site.
- Mallorca Hub standalone app, especially the headline pricing line and package cards.
- Any docs or handover files that repeat the live price so the next audit starts from the current number.
- External public surfaces that are not in this repo and still need manual edits.

Key files touched:

- `src/lib/offers-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/plan-your-trip-content.js`
- `src/lib/contact-content.js`
- `src/lib/homepage-content.js`
- `src/app/(en)/play-with-a-pro/PlayWithAProView.jsx`
- `src/app/(en)/a-day/page.jsx`
- `..\\mmg-tools\\calculator\\index.html`
- `..\\mmg-tools\\day-cost\\index.html`
- `..\\mmg-tools\\pricing\\service-pricing.json`
- `..\\mmg-tools\\internal\\index.html`
- `..\\mmg-tools\\scripts\\sync-site-pricing.js`
- `..\\standalone-apps\\mallorca-hub\\index.html`

## Manual Follow-Up List

These still need a human update outside the repo:

- LinkedIn profile text
- Trustpilot profile text and reply templates
- Google Reviews request copy
- Google Business Profile description, services, and Q&A
- WhatsApp business profile/about text and quick replies
- Email signature and autoresponder copy
- Brochures, PDFs, rate cards, and any downloaded one-pagers
- Social bios, pinned posts, highlights, and story templates
- Any screenshots or image-based pricing assets shared externally
- Any partner listings, directories, or brochure pages that repeat the old price

Recommended wording for those manual updates:

- Solo: `EUR 695`
- Group: `EUR 950 total for 2-3 golfers`
- Premium day: `EUR 3,000+`
- Trip planning: by enquiry

## Scan Notes

- Exact-price searches for `495` and `595` patterns came back clean in the site, MMG tools, and Mallorca Hub app after the pricing pass.
- If any external doc or social channel still shows the legacy solo price, it should be treated as stale and updated to match the new pricing above.
