# Mr Mallorca Golf: Plain-English Project Status

Historical note:

This file describes the project before the multilingual rebuild was fully completed.
Keep it as historical reference, not as the current operating guide.

For current guidance, use:

- [site-rebuild-guide.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/site-rebuild-guide.md)
- [site-handover-guide.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/site-handover-guide.md)
- [site-quickstart.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/site-quickstart.md)

## What we fixed before i18n

- The sitemap was cleaned up so it only lists real live pages.
- `robots.txt` now points to the correct sitemap.
- The site was unified to the non-`www` version.
- Canonical tags, language alternate tags, and metadata were made much more consistent.
- Draft guide pages were set so they should not be indexed.
- Broken legal/footer links were fixed so unsupported languages no longer send users to 404 pages.
- Normal site pages were returned to static rendering, which is better for speed and SEO.

## What we fixed with content and languages

- Broken characters and mangled text were cleaned up across the site.
- Several pages that looked translated but still showed English body copy were corrected.
- Shared checks were added so corrupted text is easier to catch in future.
- The site is much safer now for multilingual work than it was at the start.

## What we fixed with forms and enquiries

- The enquiry form was wired back to the real backend route.
- The pre-round questionnaire was checked and repaired where needed.
- Multi-select questionnaire questions were fixed.
- The enquiry and questionnaire routes were hardened with validation, sanitization, and basic rate limiting.
- Live testing confirmed both enquiry and questionnaire emails arrive at `andy@mrmallorcagolf.com`.

## What we improved for performance and trust

- Fonts were moved from CSS `@import` to `next/font`.
- Several oversized images were compressed.
- Key shared images were moved onto `next/image`.
- Analytics consent was added and later removed again, so the site currently behaves without the consent banner.
- Shared metadata was centralized for many major pages.

## What we improved in design and readability

- Low-contrast copy on the guides pages was fixed.
- Coaching was rebalanced from an awkward 7-box feel to a cleaner 6-box layout.
- The coaching image crop was improved.
- The middle section on golf-courses was changed to dark green for better hierarchy.
- Site-wide dark-section readability was improved.
- Homepage winners/testimonials/mobile balance was improved in the current draft.
- CTA/button alignment and guide CTA layout were tightened in the current draft.

## What the current draft branch adds

Branch:

- `i18n-premium-draft`

This branch is not live. It is a safe draft branch for the next phase.

What it contains:

- Shared content files for the main English page families.
- A cleaner homepage structure.
- Shared content for:
  - homepage
  - about
  - contact
  - coaching
  - play-with-a-pro
  - guides index
  - all English guide posts, including the ready-to-publish ones
- Improved English golf-courses wrapper and cleaned English golf-courses source content.
- A premium design/readability pass on the shared English pages and styles.
- Shared guides index rendering across all locales.
- Shared live-guide rendering already in place for:
  - English
  - German
  - Spanish
  - French

## What is still not fully finished

- English is now the completed master source for the main site and guide/blog system.
- The localized routes still partly use the older per-language page files.
- The biggest remaining multilingual structural gaps are:
  - `nl`, `sv`, and `zh` live guide-review pages
  - non-English versions of homepage, about, contact, coaching, play-with-a-pro, and golf-courses on the shared system
- `GolfCoursesClient.jsx` is much cleaner than before, but it is still the biggest old component in the codebase.
- The current i18n work is strong and releaseable in slices, but it is not yet the final full multilingual rollout.

## What has been verified

- `npm run check:text`
- `npm run check:locale`
- `npm run build`

Build result:

- Main site pages are static.
- Only `/api/contact` and `/api/questionnaire` remain dynamic, which is expected.

## Recommended next order

1. Keep improving `GolfCoursesClient.jsx` and the deeper golf-courses structure.
2. Finish the remaining live guide-review locales (`nl`, `sv`, `zh`) on the shared renderer.
3. Compare the draft branch page-by-page with the live site.
4. Do the final premium design and mobile review on the draft branch.
5. Decide which page family to release first.
6. Roll changes out gradually from the draft branch instead of doing one huge release.
7. After that, continue moving the non-English routes onto the new shared-content system.

## Short summary

At the start, the site had indexing confusion, duplicated multilingual content, broken text in places, and a few hidden technical issues.

Now:

- the live site is much healthier technically
- the forms work
- SEO is cleaner
- performance is better
- the codebase has safer guardrails
- there is now a proper draft branch for the i18n-style future version
- and English now exists as a proper shared master source rather than scattered duplicated page files

The next big unfinished area is the remaining non-English migration, especially the last live-guide locales and the later marketing-page families.
