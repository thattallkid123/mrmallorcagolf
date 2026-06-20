# Mr Mallorca Golf — Full Project Handover
**Date:** June 2026 · Mobile QA completed June 2026

---

## 1. All Live Pages

### Interactive tools

| Page | URL | Indexed |
|------|-----|---------|
| Golf trip calculator | mrmallorcagolf.com/golf-trip-calculator | Yes |
| Course selector | mrmallorcagolf.com/course-selector | Yes |
| ZH course selector | mrmallorcagolf.com/zh/course-selector | Yes |
| Tools index | mrmallorcagolf.com/tools/ | Yes |
| Tools — Course selector | mrmallorcagolf.com/tools/course-selector | No (noindex) |
| Tools — Golf cost calculator | mrmallorcagolf.com/tools/golf-cost-calculator | No (noindex) |
| Tools — Hotel recommender | mrmallorcagolf.com/tools/hotel-recommender | No (noindex) |
| Tools — Golf day builder | mrmallorcagolf.com/tools/golf-day-builder | No (noindex) |
| ZH tools — Course selector | mrmallorcagolf.com/zh/tools/course-selector | No (noindex) |

To make any tool indexable: open its `page.jsx` and change `robots: { index: false }` to `index: true`, then push.

### PDF lead magnet signup pages

| Guide | Signup Page | PDF Download |
|-------|-------------|--------------|
| Mallorca Golf Cost Breakdown 2026 | mrmallorcagolf.com/guides/cost-guide | mrmallorcagolf.com/downloads/cost-guide.pdf |
| 7-Day Mallorca Golf Itinerary | mrmallorcagolf.com/guides/trip-planner | mrmallorcagolf.com/downloads/trip-planner.pdf |
| Beginner's Guide to Golf in Mallorca | mrmallorcagolf.com/guides/beginners-guide | mrmallorcagolf.com/downloads/beginners-guide.pdf |
| Mallorca Golf Course Comparison Chart | mrmallorcagolf.com/guides/course-comparison | mrmallorcagolf.com/downloads/course-comparison.pdf |

All 4 signup pages are indexable. PDFs backed up at: `Google Drive / Mr Mallorca Golf / Lead Magnets / PDFs/`

---

## 2. HTML Prototypes — Local Only

Original prototype files for reference. Never published.

| File | Local path |
|------|-----------|
| Course selector | `prototypes/course-selector/index.html` |
| Golf cost calculator | `prototypes/golf-cost-calculator/index.html` |
| Hotel recommender | `prototypes/hotel-recommender/index.html` |
| Golf day builder | `prototypes/golf-day-builder/index.html` |
| ZH course selector | `prototypes/zh-course-selector.html` |

---

## 3. How the PDF Lead Magnet Flow Works

1. Visitor lands on a signup page (e.g. `/guides/cost-guide`)
2. Enters email and submits
3. POST hits `/api/lead-magnet-signup`
4. Subscriber added to the correct MailerLite group
5. Resend sends an instant delivery email with the PDF download link
6. MailerLite nurture sequence begins automatically

**Tested June 2026:** API confirmed `{"success":true}` end-to-end. Resend delivers correctly.

---

## 4. MailerLite — All Active

**5 automations, all Active:**

| Sequence | Trigger group | Emails | Notes |
|----------|--------------|--------|-------|
| Cost Guide nurture | Cost Guide Leads | 3 emails | Active |
| Trip Planner nurture | Trip Planner Leads | 3 emails | Active |
| Beginners Guide nurture | Beginners Guide Leads | 3 emails | Active |
| Course Comparison nurture | Course Comparison Leads | 3 emails (Day 1 / +2 / +2) | Active |
| Course Selector Welcome | Course Selector Leads | 4 emails | Active — 80% open rate |

Zero PDF subscribers so far — expected, nothing links to those pages yet.

**Free plan limit:** 1,000 subscribers. Upgrade before hitting that when CTAs go live.

---

## 5. Mobile QA Results (June 2026, iPhone 14 viewport 390px)

All pages tested in Chrome DevTools mobile emulation at 390×844.

| Page | Result | Notes |
|------|--------|-------|
| Homepage | ✅ Clean | Hero, popup, WhatsApp button all correct |
| `/guides/cost-guide` (PDF signup) | ✅ Clean | Form, bullets, button all display correctly |
| `/tools/course-selector` | ✅ Clean | Question flow, card layout good |
| `/tools/golf-cost-calculator` | ✅ Fixed | Stepper layout was broken (styled-jsx not applying flex); fixed with inline styles June 2026 |
| `/tools/hotel-recommender` | ✅ Clean | Question flow renders correctly |
| `/tools/golf-day-builder` | ✅ Clean | Intro card, CTA button clean |
| `/golf-trip-calculator` | ✅ Clean | Stepper buttons functional (this page has its own stepper component unaffected) |

**Not yet tested interactively:** clicking through multi-step flows, form submission on mobile, result screens. For a full regression test, use Playwright (see section 7).

---

## 6. Where to Add CTAs — Strategy

### Quickest wins (10 min each, do these first)

1. **Bottom of best courses post** (`/guides/best-golf-courses-mallorca`) → Course Comparison PDF. Highest traffic post, perfect intent.
2. **Bottom of cost guide post** (`/guides/golf-cost-mallorca`) → Cost Guide PDF. Same topic, warm audience.
3. **Homepage** → Course Comparison as primary lead magnet. Broadest appeal.

### Full placement map

**Cost Guide** — `mrmallorcagolf.com/guides/cost-guide`
- CTA at bottom of every course review and the main cost guide post
- Golf trip calculator: "Download the full breakdown" banner after result is shown
- Homepage "Plan Your Trip" section alongside the calculator link

**Course Comparison** — `mrmallorcagolf.com/guides/course-comparison`
- Best courses post: CTA at top and bottom
- Course selector tool: offer the PDF after the tool outputs its recommendation
- Homepage: best candidate for the primary lead magnet CTA

**7-Day Trip Planner** — `mrmallorcagolf.com/guides/trip-planner`
- Golf trip planning post (`/guides/golf-trip-planning-mallorca`): CTA mid-article
- Golf day builder: offer the full week PDF after someone builds a day plan
- Contact/WhatsApp page: "Planning a week? Download my itinerary first"

**Beginners Guide** — `mrmallorcagolf.com/guides/beginners-guide`
- "Is Mallorca good for golf?" post (`/guides/is-mallorca-good-for-golf`)
- On-course coaching page: newer players → free resource
- Course selector: if output flags beginner-friendly courses, add guide CTA

---

## 7. Playwright QA — Hand to Codex

For a full automated regression test across all viewports and interactive flows, paste this brief into Codex:

> Using Playwright, run a visual and functional QA check on mrmallorcagolf.com. Test at three viewports: mobile (390×844), tablet (768×1024), desktop (1440×900).
>
> **Pages and interactions to test:**
> - `/` — homepage loads, popup renders, close popup, scroll to footer
> - `/golf-trip-calculator` — click through all 4 steps to completion
> - `/course-selector` — answer all questions through to result
> - `/tools/course-selector` — load and complete the question flow
> - `/tools/golf-cost-calculator` — click through all steps, verify stepper `− N unit +` layout is correct on mobile
> - `/tools/hotel-recommender` — answer all questions through to result
> - `/tools/golf-day-builder` — click through to completion
> - `/guides/cost-guide` — verify email input and submit button are visible without scrolling on mobile
> - `/guides/trip-planner`, `/guides/beginners-guide`, `/guides/course-comparison` — same check
>
> **For each page/viewport check:**
> 1. No console errors
> 2. No horizontal scroll (`document.documentElement.scrollWidth === window.innerWidth`)
> 3. Nav: hamburger on mobile, full nav on desktop
> 4. All interactive buttons ≥ 44px touch target
> 5. No text overflow or truncation
> 6. Screenshot each page at each viewport, save to `/qa-screenshots/PAGENAME-VIEWPORT.png`
>
> Report failures with page, viewport, and what specifically broke.

---

## 8. Open Items

| Item | Priority | Notes |
|------|----------|-------|
| Add CTA to best courses post → Course Comparison | High | Quickest subscriber win |
| Add CTA to homepage | High | Course Comparison recommended |
| Decide which tools to surface in nav | Medium | All currently noindex/hidden |
| Flip robots to `index: true` on tools you want found | When ready | Edit each `page.jsx` |
| Run Playwright QA (section 7) | Medium | Full interaction + multi-viewport test |
| MailerLite free tier limit | Watch | 1,000 subscriber cap |
