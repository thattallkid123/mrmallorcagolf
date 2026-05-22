# Deploy Versions, May 2026

## Current release shape

- `main` is the live branch after this release is promoted.
- `itinerary-preview` is the itinerary-focused branch with the localized `Plan Your Trip` flow.
- Visible header language switch stays at 5 languages only: `EN`, `ES`, `DE`, `FR`, `中文`.
- Page coverage stays at 7 languages for the shared content and the embedded planner: `en`, `es`, `de`, `fr`, `nl`, `sv`, `zh`.

## If you ever need to return to the old PWAP-focused version

Bring back the coaching-first shape and voice from the older PWAP-focused `main` version, but do not carry over the itinerary-specific pieces:

- Keep the first-person tone where it improves clarity and consistency.
- Keep the shared visual polish and locale parity fixes.
- Do not bring over the `Plan Your Trip` fourth box, the embedded itinerary planner, or the `/plan-your-trip` locale pages.
- Keep the header limited to the five visible languages.

## What this branch adds

- A dedicated itinerary-focused planning path in all 7 languages.
- Localized planner labels, prompts, summaries, and WhatsApp message text.
- The same user experience across the shared pages, while still hiding `NL` and `SV` in the visible language switch.
