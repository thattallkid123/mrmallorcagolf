---
name: verify-course-pricing
description: Annual/periodic verification that recorded course green fees and extras still match reality. Use when asked to check, verify, audit or re-confirm course pricing, review the pricing master, or do the yearly pricing check. NOT for applying a known price change — that is /pricing-change.
---

# Verify Course Pricing (annual check)

Different job from `/pricing-change`. That one applies a price Andy already
knows. This one **finds out whether what is recorded is still true**.

## Do these two things before any manual checking

This is the whole point of the skill. A full manual sweep of 24 courses took
most of a day on 2026-09-03, and most of it was avoidable:

1. **Read `mmg-tools/pricing/archive/live-price-checks/PRICING-SOURCES-MASTER-2026-09-02.md`.**
   It has every course's real rates URL, the right method per booking platform,
   and which courses have no public source at all. Finding those URLs was the
   single slowest part of the last pass. Do not re-derive them.
2. **Check what the automation already knows** before opening any club site:
   - Hermes green-fee tracker alerts (Telegram) — P1 price mismatches, season
     definition gaps, season inversions. It runs Mon/Wed/Fri/Sat.
   - `MMG_DYNAMIC_PRICING.xlsx` > `Pricing Review Queue` (Drive
     `Reference/GreenFeeTracker/`) — every course with a rack-vs-repo gap,
     already graded P1/P2/P3.
   - `.\mmg.ps1 pricing-gaps` and the nine-hole blend check.

   On 2026-09-03 the review queue **already had** the Andratx P1 sitting in it,
   and a manual re-derivation found the same thing hours later. Checking first
   is not optional politeness — it is the difference between a short job and a
   long one.

## The traps that produce wrong conclusions

Every one of these caused a real error on 2026-09-03.

- **Green fees vary by day-of-week AND season. Extras vary by season only.**
  Comparing a Tuesday with a Saturday tells you nothing about season. To test a
  season, hold the weekday constant. Palma P&P was recorded as a seasonal
  €27/€30 split when it is actually Mon-Thu vs Fri-Sun, flat all year.
- **One date is never evidence.** A single near-term reading can be last-minute
  discounting on unsold inventory, not the season rate. Son Quint was "corrected"
  from a January-only reading and had to be reverted.
- **Dates more than ~2-3 months out return a flat, undiscounted rack price** on
  every Golfmanager engine. If every slot on a date shows the same number, it is
  an artifact — discard the date.
- **Watch for course-specific windows that suppress prices**: renovation
  (Capdepera), aeration/pinchado (Andratx publishes its dates). Read the
  booking page's own banners.
- **Third-party aggregator summaries are unreliable**; a dated wholesale
  calendar (e.g. CostaLessGolf) is a much stronger source. Official club rate
  page beats both.
- **Rack ≠ retail.** `low`/`mid`/`peak` are rack. For courses with a real
  contract rate table (Son Antem), the contract is authoritative and the live
  retail shape may legitimately differ.
- **Quote the non-member rate** on anything outward-facing, even where a
  member/guest rate is known and lower (Andy's call — overquoting slightly is
  preferred to underquoting).

## Measuring season boundaries for dynamic courses

`mmg-tools/scripts/detect-season-boundaries.py [courseId ...]` samples a
course's own booking API across a year and binary-searches each boundary to the
exact day. Covers the 8 Golfmanager-family courses. Writes nothing — it prints a
suggested `seasonNotes` line to review before use.

Known limits: it does not hold day-of-week constant (hysteresis smooths this,
but a boundary near a weekend can wobble by a day or two), and it refuses to
emit bands for a course whose annual range is too narrow to have real seasons.

**If a boundary actually needs fixing** (not just measuring), use the
`mmg-tools` `/season-boundary-check` skill instead of hand-rolling the write —
it covers the band-name-vs-rack mislabelling trap in full, the exact Sheets
write-back mechanics (endpoint, the `€` corruption gotcha, before/after
verification), and the `confidenceGap` re-check-timing convention this file
only summarizes above. It also has a section on reading a Golfmanager booking
page for extras (buggy/clubs/trolley) and 9H/18H pricing specifically — the
same booking engines, a related but separate kind of "is this still true"
question from green-fee season dates.

**Scorecard data (par/SI/distances) is a separate annual check, not part of
this skill's scope.** Run `.\mmg.ps1 scorecard-audit` and
`.\mmg.ps1 scorecard-sources` (from `mmg-tools`) the same way this skill
covers green fees; see the `scorecard-update` skill for the full chain if
either flags something to fix.

## Recording what you find

- Numbers go in the **Pricing Sheet** (the master), then `.\mmg.ps1 pricing-publish`.
- Observations go in `live-price-checks/price-observations.csv` — **with
  `dayOfWeek` and `variableIsolated`**. Prose-only notes are what allowed the
  Palma P&P error to survive review.
- A narrative file per course is optional; the CSV and the master doc are not.

## Courses with no public source

Rotana, Santa Ponsa II and Santa Ponsa III have no public booking channel or
rate page. Nothing can be verified live for these — the only source is a
clubhouse price card photo (see `santa-ponsa-2-3-2026-09-03.md`). Their prices
are **record-only** and must not appear on the site or tools.

## Finish

`/ship` for any site-facing change. `pricing-publish` already runs the repo's
own gates; re-run `check-pricing-gaps` and the nine-hole blend check at the end
and expect 0 of 24 on both.
