# Branch Workflow

This repo currently has two important branches.

## `main`

Live production site for `www.mrmallorcagolf.com`.

Use `main` for:
- Factual content updates that are ready to publish
- Course guides and translated guide content
- Shared image assets
- Bug fixes
- SEO metadata fixes
- Shared components and visual proof upgrades that should be live now
- Tests, tooling, docs, and deployment checks

Do not pull itinerary-specific strategy into `main` unless Andy explicitly says the itinerary version is becoming the live site.

## `itinerary-preview`

Future trip-led / itinerary-led version of the site.

Use `itinerary-preview` for:
- Itinerary planner
- Plan Trip journey
- Trip-first homepage copy
- Trip package positioning
- First-person advisory copy
- Service structure experiments

## What Should Stay Shared

Keep these changes in both `main` and `itinerary-preview`:
- New course reviews and translations
- Guide ordering
- Course data and played-course status
- Shared images and optimized assets
- Contact form bug fixes
- SEO fixes that apply to the same page/content
- Playwright tests and project tooling
- Documentation

Best practice: make the change on the branch where the work starts, then cherry-pick or merge the specific content/tooling commit into the other branch soon after. Do this before the branches drift too far.

## What Can Diverge

These can stay different until Andy chooses a final direction:
- Homepage structure and main CTA
- Itinerary planner
- Plan Trip vs Enquire language
- Coaching-led vs trip-led positioning
- Package naming and service hierarchy
- Tone experiments and first-person rewrites

## GitHub / PR Guidance

Direct push to `main` is fine for small, low-risk content fixes after checks pass.

Use a GitHub PR when:
- A change touches both branches
- A change affects checkout/contact/enquiry behavior
- A change rewrites main page positioning
- A change adds a new system, script, or dependency
- Andy wants to compare versions before promoting something live

If using a PR, keep it small and name it clearly, for example:

```text
Add Son Antem West guide translations
```

Always run the checks before merging or pushing:

```powershell
npm run check:content
npm run build
npm run check:visual
```
