# Course Guide Content Standards

Every course review guide should cover all of the following. If any item is missing, ask Andy before publishing — these are the long-tail ranking signals and the questions real visitors have before booking.

Used by the `/publish-course-guide` and `/expand-guide` skills.

## Metadata title convention (og:title / SEO title)

Every course review's `metadata.title` in `guide-post-content.js` should follow:

```
[Course Name] - Honest Review 2026
```

Standardized 2026-08-17 — prior pages had drifted into "Review & Fees", "Reviews & Fees", "Review" (bare), and "Review 2026" variants across the 8 live reviews. Keep the year current going forward (e.g. bump to 2027 content refreshes as they happen, matching the site's yearly content-freshness pattern elsewhere). Related-guide link labels elsewhere in the file already mostly used this pattern before the standardization — that's what it was matched to.

## Required facts for every course guide

**Pricing & access**
- Green fee range (peak / low season) with year
- Handicap limit — men and women separately
- Is a valid WHS/EGA handicap certificate required at booking?
- Daily Spanish Golf Federation licence — does it apply? (€3 for non-federated players)

**Practicalities**
- Drive time from Palma (minutes, not km)
- Walking: permitted all day / only after Xpm / not permitted?
- Buggy: mandatory before Xpm / optional / included in green fee from [month] to [month]
- Can single players book, or groups only? (and will singles be paired up?)
- Dress code: any notable strictness vs. typical island standard?

**On-course details**
- Handicap difficulty level this course genuinely suits (beginner / mid / better golfer)
- Wind exposure — which holes / which time of day is worst
- One "surprise" detail most first-timers do not expect (visual, layout, hazard)
- Signature hole or standout hole and why
- Any confusion point (blind tee shot, confusing signage, route that catches visitors off guard)

**Facilities**
- Restaurant/terrace: worth staying for lunch? Views? Rough cost?
- Practice facilities: grass range / Toptracer / putting green / short game area
- Club hire options and pricing

## Course-specific known facts (verified by Andy, June 2026)

| Course | Handicap limit | Buggy | Walking | Daily licence | Singles |
|--------|---------------|-------|---------|---------------|---------|
| Son Gual | 33M / 35L | €45, optional | Yes | €3 | Yes (may be paired) |
| Son Muntaner | 36M / 36L | Included Mar–late Nov | Yes | €3 | — |
| Golf de Andratx | 28M / 36L | Mandatory before 2pm | After 2pm only | €3 | — |
| T Golf Calvià | 28M / 34L | Recommended, optional | Yes | €3 | — |
| Alcanada | — | — | — | — | — |
| Santa Ponsa 1 | — | — | — | — | — |
| Son Termes | — | — | — | — | — |
| Son Antem West | — | — | — | — | — |

Fill in blanks when verified. Never guess or copy from external sites without checking.

## FAQ sections to add when expanding existing guides

When lengthening a guide, add a `{ type: 'heading', text: 'Common Questions' }` block followed by one or two `{ type: 'paragraph', ... }` blocks covering:
1. Handicap limit and certificate requirement
2. Walking vs. buggy options
3. Who the course suits best (level of golfer)
4. One thing that surprises first-time visitors
5. Any local knowledge tip (first tee, wind timing, post-round lunch)
