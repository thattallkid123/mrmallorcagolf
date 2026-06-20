# Mr Mallorca Golf — Full Project Handover
**Date:** June 2026

---

## 1. What's Actually Live on the Site

### Tools & interactive pages

| Page | URL | Status |
|------|-----|--------|
| Golf trip calculator | mrmallorcagolf.com/golf-trip-calculator | Live |
| Course selector | mrmallorcagolf.com/course-selector | Live |
| ZH course selector | mrmallorcagolf.com/zh/course-selector | Live |
| PDF signup — Cost Guide | mrmallorcagolf.com/guides/cost-guide | Live |
| PDF signup — Trip Planner | mrmallorcagolf.com/guides/trip-planner | Live |
| PDF signup — Beginners Guide | mrmallorcagolf.com/guides/beginners-guide | Live |
| PDF signup — Course Comparison | mrmallorcagolf.com/guides/course-comparison | Live |

### Tools built locally but NOT yet committed or deployed (currently 404)

These exist in the local repo as untracked files — never pushed to GitHub, so they're not live:

| Tool | Local path |
|------|-----------|
| Tools index | `src/app/(en)/tools/` |
| Course selector (new /tools version) | `src/app/(en)/tools/course-selector/` |
| Golf cost calculator | `src/app/(en)/tools/golf-cost-calculator/` |
| Hotel recommender | `src/app/(en)/hotel-recommender/` |
| Golf day builder | `src/app/(en)/golf-day-builder/` |
| ZH tools | `src/app/zh/tools/` |

To deploy these: `git add src/app/(en)/tools src/app/(en)/hotel-recommender src/app/(en)/golf-day-builder src/app/zh/tools` then commit and push.

---

## 2. HTML Prototypes — Local Only, Untouched

Original prototype files still exist locally for reference. Not published anywhere.

| File | Local path |
|------|-----------|
| Prototypes index | `prototypes/index.html` |
| Course selector | `prototypes/course-selector/index.html` |
| Golf cost calculator | `prototypes/golf-cost-calculator/index.html` |
| Hotel recommender | `prototypes/hotel-recommender/index.html` |
| Hotel recommender (alt) | `prototypes/hotel-recommender.html` |
| Golf day builder | `prototypes/golf-day-builder/index.html` |
| ZH course selector | `prototypes/zh-course-selector.html` |

---

## 3. PDF Lead Magnets — All Live

4 PDFs built from scratch (Python + Playwright), matching site fonts and brand palette. All data verified from the repo encyclopedia and cost calculator. Final versions committed June 2026.

| Guide | PDF URL | Signup Page |
|-------|---------|-------------|
| Mallorca Golf Cost Breakdown 2026 | mrmallorcagolf.com/downloads/cost-guide.pdf | mrmallorcagolf.com/guides/cost-guide |
| 7-Day Mallorca Golf Itinerary | mrmallorcagolf.com/downloads/trip-planner.pdf | mrmallorcagolf.com/guides/trip-planner |
| Beginner's Guide to Golf in Mallorca | mrmallorcagolf.com/downloads/beginners-guide.pdf | mrmallorcagolf.com/guides/beginners-guide |
| Mallorca Golf Course Comparison Chart | mrmallorcagolf.com/downloads/course-comparison.pdf | mrmallorcagolf.com/guides/course-comparison |

PDFs are also backed up at: `Google Drive / Mr Mallorca Golf / Lead Magnets / PDFs/`

**How the flow works:** Visitor lands on signup page → enters email → POST to `/api/lead-magnet-signup` → added to the correct MailerLite group → Resend delivers an email with the PDF download link → MailerLite nurture sequence begins automatically.

**Tested June 2026:** API call confirmed `{"success":true}`. Delivery email sends via Resend. MailerLite group assignment works.

**Signup pages** have no robots block — they're indexable. Good to leave them that way.

---

## 4. MailerLite — All Active

**5 automations, all Active:**

| Sequence | Trigger group | Emails | Notes |
|----------|--------------|--------|-------|
| Cost Guide nurture | Cost Guide Leads | 3 emails | Active |
| Trip Planner nurture | Trip Planner Leads | 3 emails | Active |
| Beginners Guide nurture | Beginners Guide Leads | 3 emails | Active |
| Course Comparison nurture | Course Comparison Leads | 3 emails (Day 1 / +2 / +2) | Active |
| Course Selector Welcome | Course Selector Leads | 4 emails | Active — 80% open rate, working |

Zero PDF subscribers so far — expected, nothing links to those pages yet. Once CTAs go in, subscribers will flow into the right groups automatically.

**Free plan limit:** 1,000 subscribers. Upgrade before you hit that if running active CTAs.

---

## 5. Mobile Test Results (June 2026)

- **PDF signup page** (`/guides/cost-guide`) — renders correctly on iPhone 14 viewport (390px). Form, bullets, and button all display cleanly.
- **Golf trip calculator** (`/golf-trip-calculator`) — loads on mobile. The `−` / `+` stepper buttons are slightly small on a real thumb but functional.
- **Tools pages** — not testable, currently 404 (see section 1).

---

## 6. Where to Add CTAs — Strategy

### Quickest wins (do these first — 10 min each)

1. **Bottom of best courses post** (`/guides/best-golf-courses-mallorca`) → Course Comparison CTA. Highest traffic post, perfect intent match.
2. **Bottom of cost guide post** (`/guides/golf-cost-mallorca`) → Cost Guide PDF CTA. Same topic, warm audience.
3. **Homepage** — Course Comparison as the primary lead magnet. Broadest appeal, works for any visitor.

### Full placement map

**Cost Guide** — `mrmallorcagolf.com/guides/cost-guide`
- CTA at the bottom of every course review and the main cost guide post
- Golf trip calculator: show a "Download the full breakdown" banner after the result is displayed
- Homepage "Plan Your Trip" section, alongside the calculator link

**Course Comparison** — `mrmallorcagolf.com/guides/course-comparison`
- Best courses post: CTA at top ("grab the comparison chart before reading") and bottom
- Course selector tool: after the tool outputs a recommendation, offer the full PDF
- Homepage: best candidate for the primary lead magnet CTA

**7-Day Trip Planner** — `mrmallorcagolf.com/guides/trip-planner`
- Golf trip planning post (`/guides/golf-trip-planning-mallorca`): CTA mid-article
- Golf day builder tool: offer the full week PDF after someone builds a single day
- Contact/WhatsApp page: "Planning a week? Download my itinerary first" — warms up leads before they message you

**Beginners Guide** — `mrmallorcagolf.com/guides/beginners-guide`
- "Is Mallorca good for golf?" post (`/guides/is-mallorca-good-for-golf`): beginner search traffic, natural fit
- On-course coaching page: newer players → offer the guide as a free resource
- Course selector tool: if output flags beginner-friendly courses, add the guide CTA below

---

## 7. Open Items / Next Steps

| Item | Priority | Notes |
|------|----------|-------|
| Add CTA to best courses post → Course Comparison | High | Quickest subscriber win |
| Add CTA to homepage | High | Course Comparison recommended |
| Commit and deploy the untracked tools | Medium | When ready to go public with them |
| Test mobile on tools once deployed | Medium | Trip calculator stepper buttons could be larger |
| MailerLite free tier limit | Watch | 1,000 subscriber cap — upgrade when running CTAs |
