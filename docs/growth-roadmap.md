# Growth Roadmap — Course Review Backlog & Content Strategy

Started 2026-07-17 from a full SEO/GA4/Search Console review. Live reference — update as reviews publish and priorities shift. Not synced to Drive; this is repo-side content-pipeline tracking only (courtesy/pricing/contact data stays out per the usual privacy rules).

## Why this exists

Course reviews are the site's strongest organic channel: every "[course] review" query ranks position 5-9 with near-zero competition, and the reviewed courses feed the Best Golf Courses guide (2,356 impressions/28d, the single biggest traffic asset on the site). Finishing the full set of 24 is the highest-leverage content move available.

## Course review backlog (16 of 24 remaining)

Reviewed so far: Son Gual, Alcanada, Son Muntaner, Santa Ponsa 1, Golf de Andratx, Son Termes, T Golf Calvià, Son Antem West.

Priority order — top of list first:

| # | Course | Why it matters | Notes |
|---|--------|-----------------|-------|
| 1 | **Golf Son Vida** | Most recognisable name on the island after Son Muntaner; Seve Ballesteros history; part of the same Arabella group already referenced (unreviewed) in the Son Muntaner post | Highest search-intent gap — do this one next |
| 2 | **Golf Son Quint** | "Tiger Woods played here" is a genuine hook with search pull; Arabella group, same resort as Son Vida/Son Muntaner | Easy to batch with Son Vida (same visit/resort) |
| 3 | **T Golf Palma (Puntiro)** | Only Nicklaus-designed course on the island — unique angle no competitor can claim | |
| 4 | **Real Golf de Bendinat** | Established club, bay views, likely decent existing search volume | |
| 5 | **Pula Golf** | Olazábal redesign, 8 Tour events hosted — strong credibility angle | |
| 6 | **Golf Son Antem East** | Companion to the already-reviewed Son Antem West; cheap to produce (same resort visit) | |
| 7 | **Golf Maioris** | "Underrated, quieter option" — good for a differentiated angle vs the premium reviews | |
| 8 | **Golf Club Son Servera** | Relaxed parkland, historic | |
| 9 | **Vall d'Or Golf** | East coast, strong back nine | |
| 10 | **Capdepera Golf** | Standout mountain hole, pairs naturally with Canyamel (same trip) | |
| 11 | **Canyamel Golf** | Most photographed east-coast course — good for visual/social content too | |
| 12 | **Golf Pollensa** | Cheapest full 18 (well, 9H) option — already the anchor "budget" answer in Golf Cost guide; a review would reinforce it | |
| 13 | **Golf Santa Ponsa 2** | Members/member-guest only — lower priority, smaller addressable audience | |
| 14 | **Golf Santa Ponsa 3** | Members/member-guest only, 9H — lowest priority of the Santa Ponsa group | |
| 15 | **Palma Pitch & Putt** | Already covered functionally in the Golf Cost guide; a dedicated review is optional, beginners/family angle | |
| 16 | **Reserva Rotana** | Hotel guests only — niche audience, lowest priority | |

Suggested cadence: ~2 course reviews/month → full set complete by early 2027. Batch by location where possible (Son Vida + Son Quint same visit; Son Antem East easy add-on since West is already shot).

## Article/guide ideas surfaced by query data (2026-07-17 Search Console pull)

- ~~**Localized coaching page (ES/DE)**~~ — **Addressed 2026-09-05.** `/coaching` in all 7 locales is a deliberate noindex redirect to `/play-with-a-pro` (Andy doesn't offer standalone lessons, only Play With A Pro/Signature Day), so the fix was making `/play-with-a-pro` itself target this query cluster rather than building a new page. EN/DE/ES titles now lead with the coaching/lesson term, plus a new FAQ item live in all 7 locales explaining PWAP vs. a normal lesson. FR/NL/SV/ZH title work was checked and skipped - zero query volume for lesson-intent terms in those locales as of 2026-09-05, revisit if that changes.
- **"Mallorca golf card 2026"** — appeared organically in Search Console with a real click at 100% CTR (1/1). Worth a short FAQ answer somewhere (Golf Cost guide is the natural home) once the actual product/scheme is confirmed with Andy.
- Keep an eye on **"son muntaner golf"** ranking on `/es/guides/son-muntaner-review` at position ~29-32 — reasonable near-term promotion candidate once other work is done (more internal links, or an ES-specific FAQ expansion).

## Growth items from this session already executed

- [x] 8 course reviews + Best Golf Courses guide now link to `/plan-your-trip` (all 6 non-EN locales mirrored)
- [x] Homepage intro section links to the Best Golf Courses guide (EN + zh copy; other locales fall back to EN text gracefully)
- [x] Best Golf Courses guide meta description includes "Majorca" spelling variant
- [x] Meta rewrites: homepage, /golf-courses hub, Golf Cost guide, Son Muntaner review title
- [x] Judged 2026-08-22 — see `docs/seo-reference.md` → "2026-07-17 CTR round" for the full before/after table. 3 of 5 clean wins (Golf Cost Mallorca, Son Muntaner review, homepage non-brand CTR); /golf-courses hub inconclusive (too little click volume); the "majorca golf courses" query still ranks position 25 so its 0% CTR is a ranking problem, not a copy one — don't rewrite it again until it ranks higher.

## Open items for Andy (not code — decisions or manual steps)

- Manual Search Console reindex requests (see list Claude provided in chat 2026-07-17)
- Decide on cadence/batching for the remaining 16 course visits
- Confirm what "Mallorca golf card 2026" refers to before it gets written up
- ES/DE coaching page: decide if this is worth a dedicated build vs folding into existing pages
