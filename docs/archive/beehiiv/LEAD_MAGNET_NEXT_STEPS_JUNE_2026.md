# Lead Magnet Next Steps, June 2026

## What is already in place

- The site now has a reusable planning-guide CTA component.
- The English homepage shows the CTA after the route-choice section.
- English guide articles show the CTA after the early article content.
- `/subscribe` is positioned around Mallorca golf planning notes, not a generic newsletter.
- The existing Beehiiv form is reused, with CTA-specific button copy.

## Decisions Andy needs to make

Answer these and the next build becomes straightforward.

1. Lead magnet name
   - Recommended: `The Honest Mallorca Golf Course Guide`
   - Alternative: `Andy's Mallorca Golf Course Shortlist`
   - Alternative: `The Mallorca Golf Trip Planning Notes`

2. Delivery promise
   - Recommended: send an email/PDF guide immediately after signup.
   - Simpler for now: subscriber joins the list and receives the guide manually or via first Beehiiv email.

3. Tone of the guide
   - Recommended: honest, practical, opinionated, useful before booking.
   - Avoid: luxury brochure, generic rankings, hard sell.

4. How direct to be with negatives
   - Recommended: include light negatives, for example overpriced, awkward logistics, not ideal for high handicaps, too far for a short trip.
   - Need Andy approval for any course-specific criticism before publishing.

5. Beehiiv welcome sequence length
   - Recommended now: 4 emails.
   - Later: expand to 6 emails once there is more content.

## Copy Andy can approve or edit

Current CTA promise:

> Before you book tee times, get the Mallorca course guide.

Current supporting copy:

> Course fit, price ranges, timing, and the courses I would put first for different groups. Useful if you are still comparing options and not ready to enquire yet.

Current form button:

> Send guide

## Recommended guide structure

1. Best courses by trip type
   - Serious golf day
   - Scenic round
   - Mixed-handicap group
   - Premium day
   - Value-conscious trip

2. Courses I would book early
   - Name the courses where tee time choice matters.

3. Courses I would not use as a first round
   - Explain calmly and specifically.

4. Common planning mistakes
   - Too much driving.
   - Booking famous names in the wrong order.
   - Ignoring heat and tee time.
   - Not matching course difficulty to the group.

5. When to ask Andy for help
   - If dates, group size, handicaps, and budget are already forming, contact Andy for a proper plan.

## Beehiiv welcome sequence draft

Email 1, immediate:
Subject: Your Mallorca golf planning notes
Goal: deliver the guide and introduce Andy in one calm paragraph.

Email 2, 3 days later:
Subject: The Mallorca course mistake I see most often
Goal: useful planning advice, no hard pitch.

Email 3, 7 days later:
Subject: What a day with me actually looks like
Goal: reduce stranger-anxiety around Play With A Pro.

Email 4, 14 days later:
Subject: If you are starting to choose dates
Goal: soft enquiry CTA for people moving from research to booking.

## Build tasks for next session

1. Finalise the lead magnet title and promise.
2. Draft the one-page/PDF guide copy.
3. Create the Beehiiv welcome sequence.
4. Update the CTA copy if Andy chooses a different title.
5. Add UTM or event tracking if useful.
6. Run full checks.
7. Commit and push if approved.

## Verification status

Completed locally:

- `npm.cmd run check:content`
- `npm.cmd run build`
- Targeted Playwright verification on desktop and mobile for `/`, `/subscribe`, and `/guides/golf-trip-planning-mallorca`

Not completed:

- Full `npm.cmd run check:visual`, because the broad multi-locale suite timed out during this session.

