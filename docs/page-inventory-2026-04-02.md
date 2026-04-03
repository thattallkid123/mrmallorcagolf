# Page Inventory - 2026-04-02

Branch: `i18n-premium-draft`

Purpose:
- inventory the route structure behind the full localized site
- identify which pages are truly on the shared system
- identify the remaining stale locale-specific pages that can reintroduce mojibake or drift

## Summary

The site is much closer to fully shared than it felt from the browser issues.

What is already broadly true:
- homepage routes use the shared homepage renderer
- about routes use the shared about view + shared content
- coaching routes use the shared coaching view + shared content
- contact routes use the shared contact form + shared content
- golf-courses routes use the shared golf-courses view + shared content
- play-with-a-pro routes use the shared play-with-a-pro view + shared content
- upcoming guide article routes use the shared article renderer + shared article content
- live review post routes use the shared review renderer + shared localized review content

What is still structurally stale:
- localized guides index pages for `de`, `fr`, `nl`, `sv`, and `zh`
- these pages still define their own `liveGuides` / `comingSoonGuides` arrays directly in the route file
- this is the main remaining place where stale text and mojibake can sneak back in

Spanish note:
- `src/app/es/guides/page.jsx` has already been replaced with a cleaned version
- the other locale guides index pages still need the same treatment

## Route Count

Page route files found under `src/app`:
- `130` route files were previously confirmed by production build output
- the current inventory of `page.jsx` files shows the expected localized site shape across `en/de/es/fr/nl/sv/zh`

## Shared Route Families

These route families are already using shared views/content rather than hard-coded page-specific content.

### Homepage

Routes:
- `src/app/page.jsx`
- `src/app/de/page.jsx`
- `src/app/es/page.jsx`
- `src/app/fr/page.jsx`
- `src/app/nl/page.jsx`
- `src/app/sv/page.jsx`
- `src/app/zh/page.jsx`

Shared renderer:
- `src/app/HomePageInner.jsx`

Shared content source:
- `src/lib/homepage-content.js`

Status:
- shared
- content still needs language quality review
- not a route-architecture gap

### About

Routes:
- `src/app/about/page.jsx`
- locale variants under `de/es/fr/nl/sv/zh`

Shared renderer:
- `src/app/about/AboutView.jsx`

Shared content source:
- `src/lib/about-content.js`

Status:
- shared

### Coaching

Routes:
- `src/app/coaching/page.jsx`
- locale variants under `de/es/fr/nl/sv/zh`

Shared renderer:
- `src/app/coaching/CoachingView.jsx`

Shared content source:
- `src/lib/coaching-content.js`

Status:
- shared

### Contact

Routes:
- `src/app/contact/page.jsx`
- locale variants under `de/es/fr/nl/sv/zh`

Shared renderer/form:
- `src/app/contact/ContactForm.jsx`

Shared content source:
- `src/lib/contact-content.js`

Status:
- shared

### Golf Courses

Routes:
- `src/app/golf-courses/page.jsx`
- locale variants under `de/es/fr/nl/sv/zh`

Shared renderer:
- `src/app/golf-courses/GolfCoursesView.jsx`

Shared content source:
- `src/lib/golf-courses-content.js`
- `src/lib/golf-courses-translations.js`
- `src/lib/golf-courses-data.js`

Status:
- shared

### Play With a Pro

Routes:
- `src/app/play-with-a-pro/page.jsx`
- locale variants under `de/es/fr/nl/sv/zh`

Shared renderer:
- `src/app/play-with-a-pro/PlayWithAProView.jsx`

Shared content source:
- `src/lib/play-with-a-pro-content.js`

Status:
- shared

### Upcoming Guide Articles

Routes:
- `src/app/guides/*/page.jsx`
- locale variants under `de/es/fr/nl/sv/zh`

Shared renderer:
- `src/app/guides/GuideArticleView.jsx`

Shared content source:
- `src/lib/guide-article-content.js`
- `src/lib/guide-article-content-localized.js`

Status:
- shared

### Live Guide Review Posts

Routes:
- `src/app/guides/son-gual-review/page.jsx`
- `src/app/guides/alcanada-review/page.jsx`
- `src/app/guides/santa-ponsa-1-review/page.jsx`
- locale variants under `de/es/fr/nl/sv/zh`

Shared renderer:
- `src/app/guides/GuidePostView.jsx`

Shared content source:
- `src/lib/guide-post-content.js`
- `src/lib/guide-post-content-localized.js`

Status:
- shared

## Remaining Structural Gaps

These are the pages still using old-style inline content arrays rather than drawing from a shared content source.

### Localized Guides Index Pages Still Standalone

- `src/app/de/guides/page.jsx`
- `src/app/fr/guides/page.jsx`
- `src/app/nl/guides/page.jsx`
- `src/app/sv/guides/page.jsx`
- `src/app/zh/guides/page.jsx`

Problem:
- each file defines its own `liveGuides` and `comingSoonGuides`
- each file also carries its own locale-specific strings directly in the route
- these files are now the clearest remaining source of stale copy / mojibake recurrence

Recommended fix:
- move localized guides index strings into a shared content source
- or at minimum replace each route with a cleaned version consistent with the shared `GuidesIndexView` pattern already used elsewhere

### Spanish Guides Index

- `src/app/es/guides/page.jsx`

Status:
- already replaced with a cleaned version in the current working tree

## Risk Notes

### Shared Does Not Automatically Mean Clean

Even on shared routes, some locale content files still contain older translated text that needs quality review:
- `src/lib/homepage-content.js`
- `src/lib/about-content.js`
- `src/lib/coaching-content.js`
- `src/lib/contact-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/guide-article-content-localized.js`
- `src/lib/guide-post-content-localized.js`

This is now primarily a content-quality task, not a route-architecture task.

### Guides Index Is the Main Remaining Route-Level Debt

If the goal is "no more surprise stale locale pages", the localized guides index routes are the first remaining class to finish.

## Practical Fix Order

1. Replace or centralize the remaining localized guides index pages:
   - `de`
   - `fr`
   - `nl`
   - `sv`
   - `zh`
2. Re-run:
   - `npm run check:text`
   - `npm run check:locale`
   - `npm run build`
3. Then do language-quality passes:
   - Spanish first
   - then German
   - French
   - Dutch
   - Swedish
   - Chinese

## Current Conclusion

There are not hidden architectural gaps across all 130 pages.

There is one main remaining route-level pattern still unfinished:
- localized guides index pages outside English and Spanish

Everything else is now mostly a shared-system + translation-quality problem, which is a much more manageable place to be.
