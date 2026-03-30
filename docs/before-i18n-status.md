# Mr Mallorca Golf: Status Before i18n

## What is now in good shape

- Sitemap is generated from real live URLs only.
- `robots.txt` is generated and points to the live sitemap.
- Canonical host is unified to non-`www`.
- Locale alternates and page metadata are much more consistent across the main site.
- Draft guide pages are explicitly `noindex`.
- Legal-page footer links now fall back cleanly instead of sending unsupported locales to 404s.
- The site is back to static prerendering for normal pages.
- The contact forms now post to the real `/api/contact` route instead of only showing a fake success state.
- The contact and questionnaire APIs now have basic sanitization and rate limiting.
- The invalid nested WhatsApp links were removed.
- Homepage course cards are now real links instead of click-only cards.
- Text-corruption and locale QA scripts are in place and passing.

## What has been verified

- `npm run check:text`
- `npm run check:locale`
- `npm run build`

Build result:

- All site pages are static prerendered.
- Only `/api/contact` and `/api/questionnaire` are dynamic, which is expected.

## What still needs doing before or alongside i18n

### High priority

- Confirm the general contact form live on Vercel after the latest rate-limit adjustment.
- Do one real live submission on:
  - `/contact`
  - the pre-round questionnaire
- Confirm both emails arrive as expected at `andy@mrmallorcagolf.com`.

### Strongly recommended next

- Migrate Google Fonts from CSS `@import` to `next/font`.
- Reduce image weight on the largest assets, especially large winner/course images.
- Replace more raw image usage and heavy background-image usage where it materially affects performance.
- Add a proper consent gate for analytics if you want EU compliance to be safer.
- Do a focused mobile UX pass on contact, homepage hero, and course pages.

### Nice to do

- Add a clearer success/error UI message for form submissions on all locales.
- Add an explicit fallback contact message such as:
  - "If the form fails, email andy@mrmallorcagolf.com directly."
- Add stronger spam protection later if abuse appears:
  - CAPTCHA or Turnstile
  - more persistent rate limiting

## i18n readiness

The site is in a much better place now for i18n than it was before because:

- SEO plumbing is cleaner.
- route-level metadata is more centralized.
- text corruption guardrails exist.
- there is less risk of hidden technical issues while refactoring content structure.

## Recommended next order

1. Re-test the live contact form and questionnaire on production.
2. If both are confirmed, do the font migration.
3. Do the image/performance cleanup pass.
4. Then begin the real i18n migration:
   - shared templates
   - per-locale message files
   - translation QA workflow

## Summary

The major SEO and structure problems are largely cleaned up.

Before i18n, the main remaining practical items are:

- final live confirmation of the contact form
- font/performance cleanup
- optional analytics/privacy tightening

After that, the site is in a solid position for a proper i18n implementation.
