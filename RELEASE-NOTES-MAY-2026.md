# Release Notes - May 2026

## Release name

- Live branch: `main`
- Itinerary-focused release branch: `itinerary-focused-may-2026`
- Old PWAP-focused rollback branch: `old-pwap-focused-may-2026`

## What this release changed

- Added a dedicated `Plan Your Trip` flow with localized page shells in all 7 languages.
- Kept the visible language switch to 5 languages only: `EN`, `ES`, `DE`, `FR`, `中文`.
- Localized the embedded planner itself so the free tool no longer leaks English in non-English views.
- Kept the same user-facing experience across the shared pages while preserving language-specific routes.
- Added the 4th card for `Plan Your Trip` / itinerary planning on the itinerary-focused version.

## What was verified

- Locale release audit passed.
- Production build passed.
- Chinese `plan-your-trip` page rendered with localized planner copy and the 5-language header switch.
- Shared locale coverage still matches the English page structure.

## If we ever go back to the old PWAP-focused version

Bring back the older main-branch shape, but do not carry over the itinerary-specific pieces:

- Remove the `Plan Your Trip` 4th card from the visible marketing structure.
- Remove or hide the itinerary-first emphasis in page copy.
- Keep the header language switch at 5 visible languages.
- Keep the shared locale fixes and other structural parity work.

## Notes for future edits

- `DocumentLanguage` already updates the document language from the route, so the page language attribute follows the active locale.
- The embedded planner is now locale-driven and should be edited through the locale copy maps rather than hardcoded English strings.
- `plan-your-trip` exists for all 7 locale routes, even though only 5 are shown in the header language switch.
- If you add new planner fields or buttons later, update the locale copy first so the 7-language experience stays aligned.

## Known non-blocker

- Some Next.js builds in this workspace can emit a lockfile/SWC warning even when the app still builds successfully. It did not block this release.
