# Content Architecture

This repo used to be vulnerable to two expensive classes of regressions:

- pricing and offer facts drifting between pages
- encoded or duplicated copy being fixed in one place and reappearing elsewhere

The current setup is designed to stop that cycle.

For the step-by-step pricing update flow, use `docs/pricing-change-checklist.md`.

## Single Sources Of Truth

- `src/lib/offers-content.js`
  - canonical offer IDs
  - solo/group/multi-day pricing
  - contact-form labels
  - play-page metadata and price-bearing shared prose
  - structured data offer catalog

- `src/lib/golf-courses-data.js`
  - canonical course records
  - source pills used to derive price and distance metadata

- `src/lib/golf-courses-helpers.js`
  - shared derivation helpers for course price, distance, and slug/meta lookups

- `src/lib/contact-content.js`
  - form layout and locale copy for the contact page
  - experience options are derived from `offers-content.js` at runtime, so do not maintain a second pricing list there

## Runtime Consumers

- homepage content pulls offer pricing and featured-course pricing from shared helpers
- play-with-a-pro content pulls package prices and shared price-bearing body copy from offers
- contact content and API labels pull experience options from offers
- about page sidebar CTA pulls from shared experience copy
- guide sidebar CTA pulls from shared experience copy
- golf-courses sidebar and end CTA pull from shared experience copy

If a future edit needs the same fact or marketing sentence in more than one place, move it into a shared content/helper file instead of copying it again.

## Simplification Stages

If the site feels like it takes too long to update, simplify in this order:

1. Centralise the shared fact first
   - move the value into `src/lib/offers-content.js`, `src/lib/golf-courses-data.js`, or the relevant shared helper
   - keep page copy as presentation, not source-of-truth
2. Normalize the consumers
   - have page helpers fill the visible price/text fields from the shared source
   - keep the raw content structure, but make the getter the only live path
3. Remove dead duplicates
   - delete literals that are only fallback data once the getter covers them
   - archive old audit notes that keep restating the same rule
4. Stop if the remaining duplication is only translation wording
   - exact-word elimination is not worth it if it makes the content harder to read or maintain

This is usually worth it for pricing and offer facts. It is usually not worth it for every sentence on the page.

## Pricing Visibility Map

### Website surfaces in `mrmallorcagolf-real/`

- Home page
  - `src/lib/homepage-content.js`
  - `src/app/HomePageInner.jsx`
  - Visible price-bearing areas: hero/package cards, course cards, and the trip-planning / enquiry CTAs
- Play With A Pro
  - `src/lib/play-with-a-pro-content.js`
  - `src/app/(en)/play-with-a-pro/PlayWithAProView.jsx`
  - Visible price-bearing areas: hero body, package cards, multi-day section
- Signature Day
  - `src/lib/signature-day-content.js`
  - `src/app/(en)/signature-day/`
  - Visible price-bearing areas: hero price and intro/body copy
- Plan Your Trip
  - `src/lib/plan-your-trip-content.js`
  - `src/app/(en)/plan-your-trip/`
  - Visible price-bearing areas: enquiry framing and price-on-enquiry language
- Contact
  - `src/lib/contact-content.js`
  - `src/app/(en)/contact/`
  - Visible price-bearing areas: radio labels and option copy
- Golf courses directory and selector
  - `src/lib/golf-courses-data.js`
  - `src/lib/golf-courses-helpers.js`
  - `src/app/(en)/golf-courses/GolfCoursesClient.jsx`
  - `src/app/(en)/course-selector/CourseSelectorClient.jsx`
  - Visible price-bearing areas: peak/low pills, course cards, comparison copy
- Guides and long-form course articles
  - `src/lib/guide-article-content.js`
  - `src/lib/guide-article-content-localized.js`
  - `src/lib/guide-post-content.js`
  - `src/lib/guide-post-content-localized.js`
  - `src/lib/golf-courses-content.js`
  - Visible price-bearing areas: in-article cost references, month-by-month guidance, course review notes
- Legal / policy pages
  - `src/app/(en)/terms/page.jsx`
  - `src/app/es/terms/page.jsx`
  - Visible price-bearing areas: language that explains what is and is not included
- Page metadata and structured data
  - `src/lib/page-metadata.js`
  - structured data embedded in the page/content libs
  - Visible price-bearing areas: SEO titles, meta descriptions, Open Graph text, and rich-result snippets

### Internal docs and audit surfaces

- Content system docs
  - `docs/CONTENT_STRUCTURE.md`
  - `docs/content-architecture.md`
  - `docs/archive/site-audit-consolidated.md`
  - `docs/archive/audit-progress-june-2026.md`
  - These often repeat prices for reference, guidance, or comparison, so they need a search pass when rates change
- Blog/guide planning docs
  - course blog pipeline and guide planning docs can carry pricing examples or notes, even when the live article content is unchanged
- Private reference / encyclopaedia
  - the encyclopaedia master and related private reference docs can hold fuller pricing notes for Andy
  - keep that material private-safe and do not mirror it into public pages unless the course or price is meant to be public
  - suggested private note fields: course, access type, season window, green fee, buggy, source image or source URL, and confidence/date
  - example entries should live inline in the encyclopaedia master rather than in a separate markdown note file

### Local tool and app surfaces in `mmg-tools/` and `standalone-apps/`

- Price-facing tools
  - `mmg-tools/day-cost/index.html`
  - `mmg-tools/guide/index.html`
  - `standalone-apps/mallorca-hub/index.html`
  - These surfaces render course/service rates directly and need review when pricing changes
- Other local golf tools
  - `mmg-tools/scoring-companion/index.html`
  - `mmg-tools/strokes-gained/index.html`
  - These are not primary pricing pages, but they still carry course data and sometimes access notes

### External/manual surfaces

- Google Business Profile
- Trustpilot business page
- LinkedIn profile / personal bio / banner copy
- Email templates / newsletters
- PDFs, booking terms, and other hand-outs
- Social posts and partner pages

### Santa Ponsa 2 / 3 note

- Santa Ponsa 2 and 3 pricing can be documented as known pricing, but the courses should still be marked as not independently bookable for the public
- The price itself is not secret; the access path is the part that is restricted
- Current tooling assumes no public green fee pill for those courses, so that rule would need to change if we want the price displayed on the public site
- If the price changes, update the master/reference record first, then decide whether the public pill should remain hidden or be shown with a public-safe access note
- Good rule of thumb: public pricing knowledge, restricted booking access

### Quick Price Map

| Surface group | Examples | Update style |
|---|---|---|
| Core website copy | Homepage, Play With A Pro, Contact, Plan Your Trip, Signature Day | Shared content files first, then supporting page files |
| Courses and comparisons | Golf courses directory, selector, course review copy, course pills | Update the course master and then sync the derived UI |
| Guides and blogs | Guide article content, guide post content, golf-course guide copy | Search the guide files for price mentions and refresh examples |
| Local tools and apps | `mmg-tools/day-cost/index.html`, `mmg-tools/guide/index.html`, `standalone-apps/mallorca-hub/index.html` | Update the local pricing source and any visible text in the app |
| Metadata and snippets | `src/lib/page-metadata.js`, structured data | Update SEO text and structured data if the price appears there |
| Internal docs | `docs/CONTENT_STRUCTURE.md`, `docs/archive/site-audit-consolidated.md`, `docs/archive/audit-progress-june-2026.md` | Search and refresh examples so future audits stay in sync |
| Private reference | Encyclopaedia master / private course notes | Keep fuller pricing there if Andy wants it documented but not public |
| Manual/public extras | LinkedIn, Google Business Profile, Trustpilot, email, PDFs, partner pages | Update by hand and re-check the old price is gone |

## Price Change Checklist

Use this when a price changes, or when we want to make sure a new price is reflected everywhere consistently.

1. Update the source of truth first
   - `src/lib/offers-content.js`
   - `src/lib/golf-courses-data.js`
   - any private pricing master or reference sheet that Andy is actively using
2. Run the pricing sync
   - any repo-local generation or sync script that derives page content from the shared content files
3. Update the website surfaces
   - `src/lib/homepage-content.js`
   - `src/lib/play-with-a-pro-content.js`
   - `src/lib/offers-content.js`
   - `src/lib/golf-courses-data.js`
   - `src/lib/guide-article-content.js`
   - `src/lib/guide-post-content.js`
   - `src/lib/signature-day-content.js`
   - `src/lib/page-metadata.js`
4. Update local tools and static apps
   - `mmg-tools/day-cost/index.html`
   - `mmg-tools/guide/index.html`
   - `standalone-apps/mallorca-hub/index.html`
5. Update internal docs and audit notes
   - `docs/CONTENT_STRUCTURE.md`
   - `docs/archive/site-audit-consolidated.md`
   - `docs/archive/audit-progress-june-2026.md`
   - any guide/blog planning docs that repeat price examples
   - private encyclopaedia/reference docs if Andy wants the price recorded but not public
6. Update manual/public-facing extras
   - LinkedIn profile
   - Google Business Profile
   - Trustpilot business page
   - Email templates and newsletters
   - PDFs, booking terms, media kits, and partner pages
   - Any blog posts or articles that mention the old price
7. Verify the old price no longer appears where it should not
   - search for the old euro amount in the site repo
   - search the tool repos
   - check public profiles/pages that were manually edited

If a course is private, member-only, or arranged-access only, the checklist still applies, but the wording should stay public-safe and the access note should make the restriction clear.

## Maintenance Rule

Do not create a second markdown file just to restate the same rule, pricing note, or workflow.

- Update the existing master file
- Move background notes into the appropriate folder
- Archive old handovers, drafts, and audits once their job is done
- Keep the visible root set small enough that a human can scan it quickly

## Guardrails

- `npm run check:text`
  - blocks obvious mojibake patterns and UTF-8 BOM-prefixed files

- `npm run check:offers`
  - blocks offer/pricing drift across homepage, play page, contact flow, metadata, and shared CTA consumers

- `npm run check:content`
  - runs text, offer, and locale structure checks together

- `npm run check:ready`
  - runs the full pre-release content/build verification

- `.githooks/pre-commit`
  - runs `npm run check:content` before a local commit is created

- `.github/workflows/verify-content.yml`
  - runs content checks, locale release checks, and a production build on pushes and pull requests

## Safe Editing Workflow

1. Update shared data first.
2. Run `npm run check:content`.
3. Run `npm run build` before push/deploy.

## Automatic Setup

- `npm install` and `npm ci` now run `npm run prepare`
- `prepare` configures `git config core.hooksPath .githooks` for this repo
- if hooks ever stop running locally, rerun `npm run prepare`

## Anti-Pattern To Avoid

Do not repair broken text at render time if the source file can be fixed or normalized instead.
That is how mojibake turns into whack-a-mole.
