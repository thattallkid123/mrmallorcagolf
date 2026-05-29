# Mr Mallorca Golf — Deep Site Audit
**Date:** May 2026  
**Data sources:** GA4 (30-day), codebase review, SEO keyword data  
**Audit focus:** Conversion optimisation — more enquiries and bookings

---

## 1. The Numbers (30-day snapshot)

| Metric | Value | Signal |
|---|---|---|
| Sessions | 432 | Small but growing |
| Users | 286 | 83% new users — good discovery |
| Avg session | 7m 17s | Strong engagement on /guides |
| Contact page visits | 20 | Only 4.6% of sessions reach contact |
| form_start events | 4 | Only 4 people started the form |
| click events | 7 | Thin conversion tracking overall |
| **Estimated enquiry rate** | **<1%** | Critical problem |

**Traffic sources:**
- Direct: 194 sessions (45%) — returning visitors / social-driven
- Organic Search: 140 sessions (32%) — SEO working, but slowly
- Organic Social: 51 sessions (12%) — Douyin/Instagram effect
- Referral: 41 sessions (9%)

**Top countries:** Spain (224), UK (74), US (42), Italy (21), Canada (13)  
Spain dominance is likely expats / local traffic. UK is the core customer market. US has potential.

**Top pages by engagement:**
- `/guides/t-golf-calvia-review` — 7m 50s avg (best content)
- `/guides/best-golf-courses-mallorca` — 6m 48s avg
- `/about` — 5m 58s avg (strong — people are checking you out)
- `/guides/alcanada-review` — 3m 45s avg
- `/contact` — 0m 36s avg (people arriving and leaving fast — friction or wrong expectation)
- `/play-with-a-pro` — split between 2m 52s and 0m 54s (two sessions suggest mixed intent)

---

## 2. The Core Problem: The Funnel is Leaking

The site has 432 sessions and approximately 4 form starts. That's a ~1% form start rate on a product where a single booking is worth £495+. Even doubling this to 2% would meaningfully change the business.

**Where people go:**
1. Homepage (145 views)
2. Guides hub (114 views)
3. About (65 views)
4. Golf Courses (35–31 views)
5. Play With A Pro (34–25 views)
6. Contact (20 views)

**The gap:** Nobody goes Homepage → Contact directly. They research extensively (guides, about, courses) but don't convert. The funnel has no mid-funnel capture at all — it's "read everything or enquire," with no middle ground.

---

## 3. Homepage — What's Working / What's Not

### What's working
- Hero layout is clean and premium
- Journey section (3 paths) is excellent wayfinding
- FAQ section with schema markup is in place
- WhatsApp CTA in final section is smart

### Critical issues

**Hero CTA goes to /play-with-a-pro, not /contact.**  
"Book a Day with Andy" → PWAP page → another click to contact. Every extra step loses 30–50% of intent. The primary CTA should go straight to `/contact` with a pre-filled subject or anchor.

**No credentials visible above the fold.**  
"UK PGA Advanced Professional · Mallorca" in the eyebrow is tiny (9px caps). A visitor who doesn't know what PGA means gets nothing. The credentials block (PGA logo, Trackman, Pebble Beach, The Open) is listed in WORK_STATUS as "to build" — this is a top-priority trust gap.

**No social proof above the fold.**  
Jo's testimonial is buried after the packages section. The single strongest trust signal on the site is invisible to anyone who bounces early.

**Packages section has no clear price anchor.**  
The tiers exist but there's no bold, scannable price that stops a visitor mid-scroll. "Solo from €495" in the hero body copy is buried. In the packages grid, the price field (tier__price) may not render prominently enough.

**The newsletter has no homepage presence.**  
There's a full /subscribe page (good) but no inline opt-in on the homepage. The newsletter is a mid-funnel capture tool that doesn't exist in the funnel yet.

**"Need the whole trip planned?" is a whisper.**  
The hero sub-link is styled as a small secondary link. For visitors not ready to book a PWAP day, this is the right product — but it's almost invisible.

---

## 4. Conversion Funnel — Redesign Recommendations

### Immediate wins (minimal code)

**A. Fix the primary CTA destination**
Change `primaryHref` in `homepage-content.js` from `/play-with-a-pro` to `/contact`. Test: does direct-to-contact increase form_start rate? It almost certainly will.

**B. Add an inline newsletter opt-in block on homepage**  
After the journey section or after the packages section, add a compact opt-in:  
*"Not ready to book? Get my course notes every two weeks — free."*  
This captures the 99% who won't enquire on the first visit and builds a warm list.

**C. Move Jo's testimonial above packages**  
One strong testimonial before the "here's what it costs" section dramatically increases willingness to pay. Currently it's reversed.

**D. Add a sticky WhatsApp button site-wide**  
The WhatsApp number is in the final CTA but nowhere visible during mid-page scroll. A small fixed WhatsApp icon (bottom-right) gives low-commitment contact for visitors who want to ask a quick question before enquiring formally.

### Medium-term (1–2 sprints)

**E. Add credentials block to homepage**  
PGA badge, Trackman Master, Pebble Beach, The Open Championship, Evian — with logos where licensed. This is the trust layer that justifies €495+.

**F. Redesign contact page for faster completion**  
Current: visitors arrive and leave in 36 seconds. Likely causes:
- Form feels too long / formal
- No reinforcement of why to enquire (no testimonial on contact page)
- No price reassurance ("No commitment — just a conversation")
Add: one testimonial above the form, a reassurance line, and a WhatsApp alternative prominently placed.

**G. Create a dedicated Packages page**  
It's in WORK_STATUS but not built. Right now pricing is split between the homepage and PWAP page. A `/packages` page with clear tiers (Solo €495, Group, Signature Day, Plan Your Trip) with a single CTA is the conversion page the site is missing.

**H. Add "Book" or "Enquire" to the main nav**  
Currently the nav has: Home, Courses, Guides, About, Contact. "Contact" is the weakest possible CTA word. Change to "Enquire" or add a nav CTA button ("Get in touch") styled in gold.

---

## 5. Content Gaps — Missing Blog Posts

### Course reviews not yet published (18 courses without reviews)

The site has published reviews for: Son Gual, Son Muntaner, Golf de Andratx, Santa Ponsa 1, Son Termes, Alcanada, T Golf Calvià (has a review slug in data).

**Missing reviews — priority order:**

| Course | Why prioritise |
|---|---|
| Son Vida | Oldest course, Seve won here — high search interest |
| T Golf Calvià | 7m 50s avg time on page — people want more, has reviewSlug in data |
| Golf Santa Ponsa 2 & 3 | Completes the Santa Ponsa cluster — cluster content wins SEO |
| Pula Golf | Olazábal design, 8 European Tour events, Federer/Nadal played — high-interest hooks |
| Capdepera + Canyamel | Natural pair — "east coast golf Mallorca" cluster |
| Golf Maioris | Underrated, public driving range — appeals to value searchers |
| Son Antem West | Already has reviewSlug in data — low-hanging fruit |
| Bendinat | Clubhouse reopening May/June 2026 — topical hook right now |
| Vall d'Or | East coast, distinctive back nine — content differentiator |

### Missing guide articles (high SEO value)

| Post | Target keyword | Estimated volume |
|---|---|---|
| Best Golf Courses East Mallorca | east coast golf Mallorca | Medium |
| Best Golf Courses North Mallorca | north Mallorca golf / Alcúdia golf | Medium |
| Is Mallorca Better Than Portugal for Golf? | Mallorca vs Portugal golf | High (PAA) |
| Is Mallorca Better Than Tenerife for Golf? | Mallorca vs Tenerife golf | High (PAA) |
| Do You Need a Handicap Certificate in Mallorca? | handicap certificate Mallorca golf | Medium |
| Best Golf Hotels in Mallorca | golf hotels Mallorca / Majorca golf resorts | 320 monthly |
| Golf in Mallorca in Winter | golf Mallorca winter / can you play golf in Mallorca in December | Medium |
| Golf Club Hire Mallorca — Part 2 | golf club rental Mallorca, Ship Sticks | Medium |
| On-Course Coaching Mallorca | exists as a page but needs a full blog article | Low vol, high intent |
| A Day at Alcanada (narrative) | alcanada golf experience | Medium |
| Mallorca vs Ibiza for Golf | niche but captures comparison searches | Low |

### The "cluster" opportunity  
The SEO skill confirms "golf courses Mallorca" (1,900/mo) is the #1 target term. The way to own it is a cluster: one pillar page (`/golf-courses`) supported by region sub-guides (north, south, east, southwest) each linking back. Currently only the main courses page exists. Regional sub-guides would significantly boost the pillar page's authority.

---

## 6. Lead Magnet & Newsletter Strategy

### Current state
- Beehiiv newsletter exists at `/subscribe`
- Described as "every two weeks" with course notes, timing, planning logic
- No visible subscriber count or social proof shown
- No lead magnet — it's just a free newsletter with a general pitch
- No homepage embed — completely off the main conversion path

### Recommendations

**Short term: add the opt-in to the main funnel**
- Add an inline subscribe block on the homepage (between journey and packages, or after packages)
- Add a subscribe prompt at the bottom of every guide/blog post ("Enjoyed this? Get my course notes every two weeks")
- Add a subscribe link to the footer

**Medium term: create a lead magnet**
The newsletter ask ("free bi-weekly emails") converts at 1–2%. A lead magnet converts at 5–15%. Options that fit the brand:

1. **"My Mallorca Golf Cheat Sheet"** — one-page PDF: best course for your handicap, best months to go, how to save on green fees. Highly shareable, directly useful.
2. **"The 5 Mistakes Golfers Make Booking Mallorca"** — positions Andy as the expert, creates urgency around the planning service.
3. **"Which Mallorca Course Suits You? (5-question quiz)"** — interactive, high-engagement, captures email, naturally leads to PWAP or Plan Your Trip enquiry.

The quiz is the highest-potential option. It creates a personalised result page that ends with "Want me to arrange this course for you?" → enquiry.

---

## 7. Package Positioning

### Current state
- Solo from €495, Group from €950, Signature Day (premium) — on PWAP page
- Plan Your Trip — separate page with its own pricing
- No dedicated `/packages` page
- Prices are present but not prominent in the homepage packages section

### Issues
- Visitors have to piece together what you offer across multiple pages
- The relationship between PWAP and Plan Your Trip isn't immediately clear
- "Signature Day" is mentioned but undersold — it's the highest-value product and should have the most real estate

### Recommendations
- Build a `/packages` page as a simple comparison grid: PWAP Solo | PWAP Group | Plan Your Trip | Signature Day
- On the homepage, make the price more prominent in the packages grid — the `tier__price` element should be large and gold-coloured
- Add a "Most popular" badge to Solo (if that's true) or to whatever converts most
- Reframe Signature Day as the aspirational anchor: show it first to make Solo look like good value by comparison

---

## 8. SEO Status vs Opportunity

### What's ranking (inferred from GA4 organic: 140 sessions)
- Course reviews are getting traction — T Golf Calvià and Alcanada reviews driving traffic
- Guides hub at 114 views is performing well
- Cost guide, best courses guide visible in top pages

### Biggest remaining opportunities

1. **Homepage metadata not yet rewritten** — still deferred in WORK_STATUS. This is the highest-leverage SEO task. Homepage targets "Mallorca golf" (1,000–1,900/mo). Every week without the right title tag costs positions.

2. **Contact page metadata not rewritten** — also deferred. Low search volume but important for branded searches.

3. **FAQ schema** — in place on homepage, but not confirmed on other key pages (courses, PWAP, plan-your-trip). Each FAQ schema implementation can win a PAA box.

4. **"Majorca" spelling** — must appear on every key page. Not confirmed it's present throughout.

5. **Regional guide cluster** — as above: north, east, southwest sub-guides would 3–5x the courses page authority over 6 months.

6. **Competitor keyword audit** — still in WORK_STATUS as undone. Key competitors to analyse: Mallorca Golf (course operator), local tour operators, GolfBreaks.com, TourOperator aggregators. Find where they rank that you don't.

---

## 9. Technical / UX Notes

- **`/a-day` page exists** but doesn't appear in the nav or main content flow — what is this page and is it being used?
- **`/shot-tracker` page exists** — prototype? Is this live/linked anywhere?
- **`/itinerary` page** — 19 views, 2m 22s avg — getting some traffic despite being experimental. Worth monitoring.
- **Contact page avg time is 36 seconds** — extremely short. Either the form is intimidating or people are using WhatsApp/email directly after landing. Consider adding analytics on which contact method is used.
- **WhatsApp is likely the primary contact channel** but click events are only 7 total — the tracking may not be firing correctly on the WhatsApp link.
- **Pre-commit hook is blocking commits** on corruption marker — worth documenting the fix properly so it doesn't slow future deployment.

---

## 10. Prioritised Action Plan

### 🔴 Do This Week (highest impact, lowest effort)

1. **Fix homepage primary CTA → goes directly to `/contact`**
2. **Add inline newsletter opt-in block on homepage** (after journey section)
3. **Write the homepage metadata** — title, description targeting "Mallorca golf / golf Mallorca Spain"
4. **Move testimonial above packages section on homepage**
5. **Add sticky WhatsApp button site-wide** (fixed bottom-right)

### 🟡 Do This Month

6. **Add credentials block to homepage** — PGA, Trackman, Pebble Beach, The Open
7. **Rewrite contact page** — testimonial above form, reassurance line, WhatsApp featured prominently
8. **Build `/packages` page** — simple comparison grid, one CTA per tier
9. **Publish T Golf Calvià review** — it has the data (reviewSlug exists), highest engagement on site
10. **Publish Son Vida review** — Seve hook, oldest course, high general interest
11. **Publish Son Antem West review** — reviewSlug in data, low effort
12. **Add subscribe link to bottom of every guide post**
13. **FAQ schema on PWAP and plan-your-trip pages**

### 🟢 Do Next Quarter

14. **Build the lead magnet** — recommendation: "Which Mallorca Course Suits You?" quiz (highest conversion potential)
15. **Build regional guide cluster** — North Mallorca Golf, East Mallorca Golf, Southwest Mallorca Golf (3 posts, each 1,500+ words, linking to main courses page)
16. **Write the comparison posts** — Mallorca vs Portugal, Mallorca vs Tenerife (high PAA volume)
17. **Write "Do you need a handicap certificate in Mallorca?"** — PAA, answers a real question
18. **Write "Best Golf Hotels in Mallorca"** — 320/mo keyword, monetisable with affiliate or referral
19. **Write "Golf in Mallorca in Winter"** — seasonal content, captures year-round intent
20. **Complete competitor keyword audit**
21. **Publish remaining course reviews** (Pula, Capdepera, Canyamel, Bendinat, Maioris, Vall d'Or)

---

## Summary

The site looks premium and content quality is high — session duration on guides proves this. The core problem is a leaking funnel: 432 sessions → 4 form starts → unknown completions. Fix the CTA routing, add mid-funnel email capture, build the credentials/trust layer, and rewrite the homepage metadata. Those five changes alone should double enquiry rate within 30 days. The content backlog (18 missing course reviews, 10+ missing guide posts) represents 12–18 months of compounding SEO value if worked through systematically.
