# Handover: Itinerary-Led Revenue Track

Branch: `itinerary-led-revenue-track`

Purpose: keep this as the GitHub track for the newer direction where Mr Mallorca Golf is primarily a Mallorca golf trip and itinerary-planning site, with Play With A Pro as a premium add-on. This gives us somewhere to return to if we ever want the site to become a pure coaching site again.

## Direction

- The public site should sell the trip first: course choice, region, timing, budget, itinerary rhythm, and booking confidence.
- Play With A Pro should feel like an optional premium add-on inside the trip, not the whole business.
- `internal.mrmallorcagolf.com` is internal use only. Customers should not be sent there or asked to click it.
- The public customer path should use a simple itinerary-planning tool on the main site instead.
- Copy should stay in first person where it makes sense: Andy as the guide, not a generic agency voice.
- The strongest customer promise is: "I know the island, I know the courses, and I can help you avoid expensive guesswork."

## Current Implementation Ideas

- Add a public `/itinerary` page as the basic planning tool.
- Use the tool to collect:
  - trip length
  - group type
  - golf appetite
  - likely base or region
  - season
  - budget style
  - priorities such as championship courses, scenery, lower travel time, restaurants, PWAP, club hire, and transfers
- Output should feel like Andy's first draft:
  - suggested base
  - course mix
  - trip rhythm
  - seasonal advice
  - add-ons worth considering
- CTA should send the draft by WhatsApp or take them to the enquiry form.

## Credential / Trust Strip

The chosen four headline credential items for now:

1. Trackman Master
2. PGA Advanced Professional
3. TPI Level 3
4. US Kids Top 50 Coach

The broader experience set should be used as proof around the site, not necessarily as equal headline credentials:

- Pebble Beach
- Costa Cruises
- Evian
- Doral
- China / Shanghai
- The Open Championship
- Mandarin / China coaching audience
- Chinese national team / elite junior work where useful

Potential framing: the credential strip proves professional depth, while the venue/work-history strip proves range and story.

## Copy Notes

- Avoid public-facing language like "business model", "revenue source", or anything that sounds like internal strategy.
- "Itinerary planner" sounds better publicly than "internal tool" or "builder" if the tool is basic.
- The site should make it obvious that customers are not just booking a tee time. They are buying better judgement before they commit money.
- PWAP pricing can stay visible, but it should sit after itinerary logic.
- Hosted Golf Journey can remain bespoke, but the first step should still be the itinerary/planning path.

## Current Work In Progress

Changes made locally in this branch:

- Public nav and CTAs now point at `/itinerary` instead of `internal.mrmallorcagolf.com`.
- Added an English-only `/itinerary` route and metadata.
- Added sitemap/locale handling for an English-only itinerary route.
- Started a public itinerary planner client component.
- Updated copy references from "itinerary builder" toward "itinerary planner".
- Removed the public internal-domain references from source content and `public/llms.txt`.

Verification already done during this pass:

- `npm.cmd run check:content` passed.
- `npm.cmd run build` passed once before the final mobile CSS adjustments.

Important remaining QA:

- Re-run `npm.cmd run build` after the latest mobile CSS changes.
- Re-check `/itinerary` visually on mobile. The last visual pass showed the tool itself working, but mobile width needed tightening.
- Clean up temporary untracked QA files if any remain:
  - `.edge-qa-profile-*`
  - `.next-dev-300*.log`
  - `.next-start-3004.log`
  - `itinerary-desktop.png`
  - `itinerary-mobile.png`

## Local Preview Notes

- A dev server was started on `http://localhost:3003`.
- Earlier `http://localhost:3002` was an older dev server and returned stale route behavior.
- Headless Edge sometimes saw transient 404s from the dev server while Next was recompiling. Normal `Invoke-WebRequest` checks returned 200 for `/itinerary`.

## Next Best Steps

1. Finish mobile polish for `/itinerary`.
2. Re-run `npm.cmd run check:content`.
3. Re-run `npm.cmd run build`.
4. Re-capture desktop and mobile screenshots.
5. Commit the branch once the temporary QA files are gone.
6. Optionally push the branch and open a PR called something like `Itinerary-led public site direction`.
