# MMG Site Audit & Tasks

**What this file is:** the running record of the tools/conversion build-out that started with the
full site audit on **3–4 July 2026**. It tracks what has been shipped, why, how to test it, and
what is still open. It is both an audit log and a task list — one source of truth so the work
doesn't drift across separate docs.

**How to use:** shipped work lives under "Shipped — how to test & what's next". Open work lives
under "Active / In Progress". Move items between them as they land. Reference by filename:
`SITE_AUDIT_AND_TASKS.md`.

---

## ⚡ Current status — what's left to do / test / approve / push

**Last worked: 5 Jul 2026.** Tools/conversion suite shipped (4 Jul); analytics upgrade shipped (5 Jul).
All changes live on www.mrmallorcagolf.com. Latest commits: `430714d` (dedupe WhatsApp tracking),
`612ab0a` (dedupe four tools), `d902ba3` (IntentTracker + analytics + monthly automation).
Summary of both days below; the only genuinely open items are in "Still open" and the Active section.

### Shipped and live today (in order)
1. **Handicap checker fatal bug fixed** (round 1) — the old static `handicap-checker.html` had 89 smart
   quotes used as JS string delimiters (fatal syntax error, "Check my access" did nothing live). Fixed;
   also fixed its `MAILERLITE_GROUP` undefined var and created the missing Trip Quote Builder MailerLite
   fields. *(The static file is now gone — superseded by the route rebuild below.)*
2. **Handicap checker rebuilt as a native route** `/tools/handicap-checker` (React, site header/footer,
   sitemap + IndexNow, old `.html` 301'd, static file deleted). Added an **optional area question** and
   an **instant results email** via Resend (`/api/handicap-checker-submit`): emails the golfer their
   access list + a handicap-tier recommendation + area-based picks, and adds them to the MailerLite
   group with fields.
3. **Green-fee comparison table promoted live** `/tools/green-fees` (React, all 24 courses, filter/sort,
   mobile cards, sitemap + IndexNow). Cross-links to guides + the course selector.
4. **Stale tool-count copy fixed** — "five tools" → six; `/tools` meta description now lists all six.
5. **Handicap checker output reworked from your feedback** (commit `826aef1`):
   - **Pairing no longer repeated 12×.** Pairing courses now count as "You can book" and roll into
     **one shared note** that just lists the course names, with honest wording (most clubs pair small
     groups in peak season; exact private-tee costs known only for the Arabella courses + Alcanada,
     others confirmed on enquiry).
   - **Stopped over-promising access.** Over-limit / no-handicap / members-only now say "I can enquire,
     but it's the club's call — no promise". Hotel-only (Rotana) moved to "Out of reach" and states it
     can't be arranged. Results email softened to match.
6. **/tools carousel → responsive grid** — the horizontal scroll was hiding ~4 of 7 cards; now a 3-col
   (→2→1) grid shows all six tools at once.
7. **WhatsApp added to all six English tools** (commit `a68e934`) — a low-friction "message Andy" path
   in each tool's results/CTA stage, **never beside the email box** (so it doesn't weaken email
   signups). Each link pre-fills a per-tool context message and fires uniform `whatsapp_click` +
   `message_intent` analytics with a `tool` tag. The standalone **Chinese tool is untouched** (separate
   `ZhCourseSelectorClient`, keeps WeChat); the course selector's other five languages got WhatsApp too
   with localized labels.

### 8. Analytics upgrade: global intent tracking + monthly automation (5 Jul)
**Shipped:** 5 Jul 2026 (commits `d902ba3`, `612ab0a`, `430714d`).
**What was built:**
- **Global IntentTracker** (`src/components/IntentTracker.jsx`) — listens to all link clicks on every page,
  auto-fires GA4 events for email/phone/WhatsApp/tool/outbound clicks without manual wiring. Each tool's
  WhatsApp button now fires its own richer event (tool-specific) and is marked `data-analytics-manual="true"`
  so IntentTracker doesn't double-count.
- **Analytics.js upgrade** — every GA4 event now auto-attaches `page_path` and `page_location`, so you see
  *where* each event happened (which tool, which review, etc.).
- **ScrollDepthTracker moved to global** — was per-page opt-in, now fires on all routes by default
  (tracks when users scroll past 25%, 50%, 75%).
- **Host guard** — GA4 only loads on the real www.mrmallorcagolf.com (not localhost/previews), so test
  traffic stays out of your data.
- **Monthly reporting automation** (`scripts/site-ops/`) — two new Python scripts (`ga4-key-events-setup.py`,
  `monthly-traffic-interest-snapshot.py`) and Windows scheduled-task wiring so you can auto-generate
  traffic/intent reports. `.gitignore` updated to un-ignore these scripts (Python is otherwise blocked).
**Why:** the tools shipped without full funnel visibility. Now you see *intent signals* (which links people
click, when they scroll, where they came from) in GA4 without adding a tracking line to every new feature.
The monthly automation gives you a standing report on what's working.
**How to test:** open any page on the live site, open dev console (F12 → Network), click a few links
(email link, WhatsApp, a tool card, an external link), and confirm GA4 events fire in the gtag calls.
Check that the WhatsApp buttons in `/tools/*` fire `whatsapp_click` events in GA4 (with the `tool` param).
**Status:** live on production. Optional to verify: run one of the monthly scripts locally and confirm it
generates a report (requires GA4 OAuth token, already configured on both machines).

### Google reviews migration (your change) — verified clean, nothing to fix
Trustpilot → Google reviews (`ReviewBadge`) is a complete swap: zero `Trustpilot` references left, old
`TrustpilotBadge.jsx` gone, all variants (`mini`/`footer-block`/`text`/`compact`) implemented, CSS is
all `.review-*`, build passes. Worth a 30-sec eyeball of the live footer/contact badge, but structurally
sound.

### Why no MailerLite automations are required
Both email-capturing tools keep their promise in code: the handicap checker sends its results email
instantly (Resend); the Trip Quote Builder's promise is Andy's personal reply. **Zero automations
needed** for honesty. Nurture sequences are optional extra value (see Active).

### Still open — your eyes / your call (nothing broken; all "nice to have" or decision-needed)

**Testing & deliverability (easy, 10 min each):**
- [ ] Run `/tools/handicap-checker` on production with your own email → confirm results email lands in
      your external inbox (Resend confirmed delivery, but you should see it end-to-end).
- [ ] Same for `/tools/golf-cost-calculator` quote email (Trip Quote Builder).
- [ ] Eyeball a few green-fee numbers on `/tools/green-fees` vs your rate cards (hardcoded from the
      encyclopaedia master; accurate as of Jul 2026, but good to sanity-check).

**Decisions needed:**
- [ ] **Deal Calculator subdomain** (`calculator.mrmallorcagolf.com`): a *separate* tool (Deal/2-for-1
      green-fee calculator), not the trip cost calculator — so it was **not** 301'd. Decide: fold into
      main site, keep separate, or retire? Then set SEO accordingly (redirect or keep as is).
- [ ] **"Tools" in top nav:** you said "not for now" — it's parked. Reachable via homepage strip, footer,
      `/tools`. Revisit when you want it live across all 7 locales.

**In Active below:** nurture sequences (optional), handicap checker on reviews, green-fees pricing-JSON
wiring, prototype freezing, publish sprint, link-in-bio page, repo hygiene, corruption-checker extension.

---

## Shipped — how to test & what's next

Everything in this section is **live on www.mrmallorcagolf.com** unless a line says "prototype only".

### 1. Shareable results URLs (tool prototypes)
**Shipped:** 3 Jul 2026 (commit `522b1b0`).
**Where:** the five files under `prototypes/` — course selector, cost calculator, day builder,
hotel recommender, and the zh selector. **Prototype only — not yet in the live Next.js tools.**
**What was built:** when a tool reaches its results screen it encodes the user's answers as
`?r=<base64>` in the URL, shows a "Share your results" block with a **Copy link** button, and a
**Share on WhatsApp** button (English tools only — WhatsApp is blocked in mainland China, so the zh
selector gets copy-link only). Opening the shared link replays the same result.
**Why:** turns one visitor into several. A golfer who gets a shortlist can send it to their group,
which pulls three or four more people onto the site to decide together.
**How to test:** open `prototypes/course-selector/index.html` in a browser, complete the quiz, then
on the results screen click Copy link and paste it into a new tab — the same shortlist should load.
Repeat for the other four prototypes.
**What's next / gap:** this feature only exists in the prototypes. The **live** tools
(`src/app/(en)/tools/...`) do **not** have shareable URLs yet. Porting it is a real task — see
Active item "Port shareable results URLs to the live tools". Until then, sharing works only if
someone is on the old prototype HTML, which normal visitors never see.

### 2. Inline funnel CTAs on course review pages
**Shipped:** 3 Jul 2026 (commit `04d763e`).
**Where:** every course review guide, rendered by `src/app/(en)/guides/GuidePostView.jsx`
(`FunnelCtaBlock`, strings in `FUNNEL_CTA_STRINGS`). Live on all 8 published reviews, all 7 locales.
**What was built:** a two-link callout injected just before the booking CTA at the bottom of each
review. Link one → `/tools` ("not sure this course fits? 60-second match"), link two → `/contact`
("get a quote"). The course name is filled in dynamically, and the block is locale-prefixed on
non-English routes (`/de/...`, `/zh/...` etc.).
**Why:** a review is the most-read page type and the highest-intent moment. Previously it dead-ended
at a single booking button; now it routes an undecided reader into the tools and a decided one into
an enquiry.
**How to test:** open e.g. `/guides/son-gual-review`, scroll to just above the booking CTA, confirm
the two links appear with "Son Gual" in the copy and both go to the right pages. Check one locale,
e.g. `/de/guides/son-gual-review`, reads in German and links stay locale-prefixed.
**Note for new courses:** the block activates from `COURSE_REVIEW_DETAILS` in `GuidePostView.jsx` —
adding a new course there is now a documented step in the `publish-course-guide` skill (commit
`50173d7`).
**What's next:** once the handicap checker is a real route, add it as a third link for courses with
strict limits (Son Gual, Andratx). Consider A/B wording on link one.

### 3. "Can I Play It?" Handicap & Access Checker
**Shipped:** 3 Jul 2026 (commits `4ee3520`, `13aba95`); surfaced on `/tools` + homepage 4 Jul.
**Where:** now a native route at **/tools/handicap-checker** (`src/app/(en)/tools/handicap-checker/`,
API `src/app/api/handicap-checker-submit/route.js`). The old `/handicap-checker.html` 301s here.
**What was built:** enter handicap index (or "no official handicap"), gender, certificate status
(yes / digital app / no), and group size → instant list of which of the 24 courses you can book,
which need a certificate, and where Andy can arrange access for borderline cases. Course data is
from the encyclopaedia master (verified access rules). Optional email capture wired to MailerLite
(form ID `192036664270390915`) — "get your access list by email plus occasional planning notes".
**Why:** handicap limits and certificate rules are the #1 pre-booking anxiety, and MMG publishes the
verified figures competitors only guess at. Genuinely useful, a natural email capture, and every
result is a soft enquiry ("a few shots over? Andy can often arrange it, especially midweek").
**Status (4 Jul):** was shipped **broken** — smart-quote syntax error killed the script and the
email capture referenced an undefined var. **Both fixed and verified working locally this session**
(pending commit/push). See "Fixed this session" at the top.
**How to test:** open **/handicap-checker.html**, enter e.g. handicap 28 / male / no certificate /
1 player and confirm the course list splits correctly (5 bookable / 13 enquire / 6 certificate for
that input). Submit the email form and confirm the address lands in the "Handicap Access Checker"
MailerLite group.
**Known gap (tracked in Active):** it's a **static file**, not a Next.js route — so it has no site
header/footer, no metadata/OG, and is **not in the sitemap or IndexNow**. Its only current traffic
is the new `/tools` card and homepage strip link. Promoting it to `/tools/handicap-checker` is the
top consolidation task.

### 4. Trip Quote Builder (live cost calculator)
**Shipped:** 3 Jul 2026 (commit `bf17826`; earlier funnel `e8d48e7`).
**Where:** `src/app/(en)/tools/golf-cost-calculator/GolfCostCalculatorClient.jsx`, live at
**/tools/golf-cost-calculator**. Backend route `src/app/api/trip-quote-submit/route.js`.
**What was built:** after the calculator shows an estimate, a premium CTA ("Get a real quote from
Andy") opens a slide-in panel **pre-filled** with the user's inputs — number of golfers, days,
rounds, budget, suggested courses, and the estimate. It collects email (required), preferred dates
(optional), and notes (optional), then sends the lead to Andy via **Resend** and adds them to the
MailerLite "Trip Quote Builder" group. Success message: "Andy will come back to you personally —
usually within a few hours."
**Why:** this closes the biggest conversion leak — the gap between a free estimate and an actual
enquiry. The warmest traffic (someone who just costed their trip) now converts inline as a
structured lead instead of hitting a blank contact form.
**Status (4 Jul):** tested end-to-end this session via the API — Resend email to Andy sends, and the
subscriber lands in the MailerLite "Trip Quote Builder" group with all 8 fields populated (the
missing MailerLite fields were created this session). **Working.**
**How to test:** open **/tools/golf-cost-calculator**, complete all steps to the estimate, click the
quote CTA, fill the panel with a test email, submit. Confirm (a) the success message shows, (b) an
email arrives at andy@mrmallorcagolf.com with the pre-filled trip details, (c) the address appears
in the MailerLite Trip Quote Builder group with fields filled. Requires `RESEND_*` and MailerLite
env vars in `.env.local` (already configured).
**What's next:** a Chinese version is the top Active task (see below). Consider also firing the quote
CTA from the course selector shortlist, not just the calculator.

### 5. Green Fee Comparison Table
**Shipped:** 3 Jul 2026 (prototype); **promoted live 4 Jul** at **/tools/green-fees**
(`src/app/(en)/tools/green-fees/`).
**What was built:** all 24 courses with encyclopaedia-sourced peak/low fees, buggy cost, walking
rules, handicap limits and a one-line verdict. Sortable and filterable by area, budget and walking;
card layout on mobile; links to the 8 live review guides.
**Why:** "Mallorca green fees" is high-intent search, and a maintained, dated table is the kind of
reference forums and Reddit link to. Freshness is a trust signal stale competitor pages can't match.
**How to test:** open `prototypes/green-fees.html` in a browser; sort by fee, filter by area and by
walking, and confirm the review links open the right guides.
**What's next (tracked in Active):** promote to a live route (e.g. `/green-fees`) driven from the
pricing master JSON so `mmg.ps1 pricing` keeps it current, with a visible "Prices updated [date]"
stamp. This is the strongest remaining pure-SEO play and it's ~90% built.

### 6. Tool trust signals + homepage tools strip
**Shipped:** 4 Jul 2026 (commit `4d3478c`, Vercel READY).
**Where:** new `src/components/ToolTrustLine.jsx` (Trustpilot mini badge + "Built by Andy
Griffiths · UK PGA Advanced Professional, based in Mallorca") added under the hero on all four
English tools — course selector, cost calculator, day builder, hotel recommender. New
`src/components/HomeToolsStrip.jsx` replaces the single course-selector card on the English homepage
with a four-card strip (course finder, handicap checker, cost calculator, hotel recommender) plus
"See all free tools", the no-sign-up fineprint, and the Trustpilot badge. The `/tools` index gained
a "Can I play it?" card and a Trustpilot text badge in Andy's note.
**Why:** the tool pages carried none of the social proof the service pages have — adding one line of
credibility above the first question lifts both completion and email opt-in. The homepage was
under-selling the suite by showing only one of five tools.
**How to test:** open **/tools/course-selector**, **/tools/golf-cost-calculator**,
**/tools/golf-day-builder**, **/tools/hotel-recommender** and confirm the Trustpilot + PGA line sits
under each hero. Open the **homepage** (English) and confirm the four-card tools strip replaced the
old single card; check it on mobile (cards stack). Confirm the trust line does **not** appear on the
Chinese course selector (it's gated to `lang === 'en'`).
**What's next:** localise the trust line if/when tools get German versions; consider adding a real
testimonial line, not just the badge.

---

## Active / In Progress

### 🔴 Publish sprint — clear the backlog (HIGHEST PRIORITY)
**Why:** 16 unpublished course reviews + 12 guide drafts sit in Drive while only 8 of 24 reviews are
live. Organic growth comes from new indexed pages. This is the single biggest lever for SEO/traffic.
- [ ] Andy records voice memos for the 4 priority articles (Solo Golf Trip, Beginners, Itinerary,
      Best Time of Year) in `Drive/MMG_UNPUBLISHED_ARTICLES_VOICE_MEMO_QUESTIONS.md`
- [ ] Turn each into a guide via the publish-course-guide skill; publish **minimum 2/month**
- [ ] Publish the next verified course review as you play it
**Estimate:** ongoing; 4–6 weeks to clear the backlog at 2/month.

### Trip Quote Builder — Chinese version
**Priority:** High. **Why:** Chinese golf tourists need the calculator + quote funnel; closes a
conversion gap.
- [ ] Duplicate `GolfCostCalculatorClient.jsx` → `src/app/zh/tools/golf-cost-calculator/ZhGolfCostCalculatorClient.jsx`
- [ ] Translate labels/buttons/form fields (邮箱/首选日期/其他信息)
- [ ] Adapt email to show Chinese user, prefer WeChat over WhatsApp
- [ ] Add route `src/app/zh/tools/golf-cost-calculator/page.jsx`
- [ ] Test end-to-end; wire MailerLite
**Estimate:** 2–3 hours.

### Handicap checker live + email working — DONE (4 Jul)
- [x] Rebuilt as `/tools/handicap-checker` (React, sitemap, IndexNow, 301'd old `.html`)
- [x] Instant Resend email + optional area question + MailerLite group
- [ ] **Next:** add as third inline CTA on strict-limit reviews (Son Gual, Andratx)

### Green fees table live at `/tools/green-fees` — DONE (4 Jul)
- [x] Promoted to live route (React, sitemap, IndexNow, `/tools` card, timestamp)
- [x] All 24 courses, filter/sort, links to guides
- [ ] **Next:** wire fees to pricing JSON so `mmg.ps1 pricing` keeps them synced (currently hardcoded)

### Optional: MailerLite nurtures for the two newest groups
**Priority:** Medium (nice-to-have, not required — the tools are honest without these; see status
block). **Why:** the "Trip Quote Builder" and "Handicap Access Checker" groups capture subscribers
but have **no automation** yet, so no *ongoing* nurture beyond the immediate email/handicap results.
The other 5 tools each have a nurture. This is now extra value, not a broken promise.
- [ ] (Optional) Build a short "Handicap Access Checker" nurture sequence — the instant results email
      is already handled in code, so this is follow-up value only. Trigger = joins that group.
- [ ] (Optional) Build a "Trip Quote Builder" nurture / holding email. Trigger = joins that group.
- [ ] Must be built in the MailerLite visual automation builder (not reliably creatable via API).
      I can draft the email copy in brand voice on request.

### Investigate the Deal Calculator subdomain
**Priority:** Medium. **Why:** `calculator.mrmallorcagolf.com` is a separate "Deal Calculator" tool,
not the trip cost calculator — so it was NOT 301'd. Needs a proper look.
- [ ] Confirm what it does and whether it's still wanted
- [ ] Decide: fold into the main site as a tool, retire it, or leave it — then handle SEO accordingly

### Email capture + WhatsApp on all tools — DONE (4–5 Jul)
- [x] All six tools have email capture: day builder (`emailItinerary`), hotel recommender (`sendEmail`),
      handicap checker (Resend), cost calculator (Resend + MailerLite).
- [x] All six tools have WhatsApp: each link pre-fills context, fires GA4 event with tool tag, marked
      `data-analytics-manual="true"` to avoid double-counting by IntentTracker.
Nothing open here.

### Tools estate consolidation — IN PROGRESS (4–5 Jul)
**Priority:** Medium. **Why:** sprawl and drift.
- [x] Fixed `/tools` copy ("six" tools, count-agnostic)
- [x] Converted carousel → responsive grid (all six visible at once)
- [ ] **Next:** freeze prototypes superseded by live routes (handicap-checker, green-fees, cost-calc
      prototypes still exist under `prototypes/`); delete or mark "archived"

### Add handicap checker CTA to strict-limit reviews
**Priority:** High. **Why:** these courses reject most golfers; the checker is the soft answer.
- [ ] Add handicap checker as a third inline link on Son Gual & Andratx reviews (alongside the two
      existing funnel CTAs)
- [ ] Test on production
**Estimate:** 15 min.

### Wire green-fees table to pricing JSON — DISCOVERY IN PROGRESS
**Priority:** High. **Why:** auto-sync fees when `mmg.ps1 pricing` runs (currently hardcoded).

**Status (5 Jul):** Discovered that green-fees table and pricing JSON have independent, unreconciled data with drift on ~12 of 24 courses. Verified official rates against club websites for 6 courses:
- **Verified correct (JSON):** Son Servera 145/80 ✅, Vall d'Or 132/99 ✅
- **Verified correct (Table):** Maioris 110/91 ✅, Son Gual 165/115 ✅
- **Verified but needs fixing:** Son Termes should be 110/90 (table missing low, JSON wrong)
- **Verified but needs fixing:** Pollensa 75/55 (JSON high wrong)

**Next steps:**
- [ ] Update the 4 official-rate courses (Servera, Vall d'Or, Son Termes, Pollensa) to verified numbers
- [ ] Check 7 dynamic courses (Son Quint, Son Vida, Son Muntaner, T Golf Palma, Son Antem E/W, T Golf Calvià) on TeeOne/golfmanager for current booking prices
- [ ] Once all 24 are verified, extend `sync-site-pricing.js` to generate a `course-fees.json` for the site repo
- [ ] Wire both green-fees table and cost calculator to import from that JSON
**Estimate:** Phase 1 (fix + wire) 1–2 hours once numbers confirmed.

### Port shareable results URLs to live tools
**Priority:** Medium. **Why:** share feature only exists in prototypes (`?r=base64`); live tools can't
share. Reimplement in all four live tools + zh selector.
- [ ] Implement `?r=base64` encode/replay for course selector, cost calculator, day builder, hotel
      recommender, and zh selector
- [ ] Add "Copy link" + "Share on WhatsApp" buttons (English tools only on WhatsApp)
**Estimate:** 3–4 hours.

### Investigate the Deal Calculator subdomain
**Priority:** Medium. **Why:** `calculator.mrmallorcagolf.com` is a *separate* tool (Deal/2-for-1),
not the trip cost calculator — needs a decision.
- [ ] Confirm what it does and whether it's wanted
- [ ] Decide: fold into main site, retire, or keep separate — then set SEO accordingly
**Estimate:** 30 min.

### Link-in-bio landing page for social traffic
**Priority:** Medium. **Why:** ~10 of 16 weekly sessions are social (mostly US), bouncing off homepage
in ~6s.
- [ ] Build one-screen `/start`: who Andy is, one featured guide, one tool, WhatsApp/WeChat CTA
- [ ] Point Instagram/Douyin bios at it; track with `trackEvent`/`trackLead`
**Estimate:** 2–3 hours.

### Optional: MailerLite nurtures for new subscriber groups
**Priority:** Nice-to-have. **Why:** "Trip Quote Builder" & "Handicap Access Checker" groups capture
subscribers but have no ongoing nurture. This is extra value, not a broken promise.
- [ ] (Optional) Build "Handicap Access Checker" follow-up sequence (trigger = joins group)
- [ ] (Optional) Build "Trip Quote Builder" holding email (trigger = joins group)
- [ ] Build in MailerLite visual automation. I can draft the copy in brand voice if you want.

### Freeze prototype HTML files superseded by live routes
**Priority:** Low (hygiene). **Why:** `prototypes/handicap-checker.html`, `prototypes/green-fees.html`,
`prototypes/golf-cost-calculator/` are now live routes; the old prototype HTML should be frozen/deleted.
- [ ] Delete or move to `archive/` the prototypes superseded by live routes
- [ ] Keep only the five active tool prototypes
**Estimate:** 15 min.

### Extend content corruption checker
**Priority:** Low (hygiene). **Why:** old `handicap-checker.html` shipped with fatal syntax errors.
The corruption checker doesn't scan `public/*.html` yet.
- [ ] Add `public/*.html` files to the `check:content` script so broken static HTML can't ship again
**Estimate:** 15 min.

### Repo hygiene sweep
**Priority:** Low (nice-to-have). **Why:** cleanup and organisation.
- [ ] Move `MMG-Booking-Terms-Sep2026.docx` out of repo root to `Drive/Bookings/`
- [ ] Delete `token.json.bak`; remove `netlify.toml` (you deploy on Vercel)
- [ ] Consider moving `push.sh` and `Run Claude Config Backup.bat` into `scripts/`
**Estimate:** 10 min.

### Add "Tools" to top navigation
**Priority:** Parked (approved "not for now"). **Why:** tools currently only visible on homepage,
footer, and `/tools` index. Adding to nav would expose them on every page.
- [ ] Add "Tools" link → `/tools` in `src/components/Nav.jsx` for all 7 locales
- [ ] Check mobile nav doesn't overflow
**Estimate:** 30 min. **Revisit when:** you decide tools should be first-class navigation.

---

## Medium term

- **Tool-to-tool handoff.** Pass results forward via query params so the suite feels like one
  journey: selector shortlist → pre-selected courses in the calculator → into the hotel recommender
  → into the quote builder. This is also the groundwork for the future app.
- **"When to play" season pages.** Per-course best months, seasonal fee bands (from pricing JSON),
  wind timing, booking lead times. Biggest untapped search intent
  ("mallorca golf in november", "son gual green fee 2026").
- **MMG Difficulty / Honest Handicap Fit index.** Andy-scored per-course rating (wind, forced
  carries, walkability, plays-X-harder-than-card). Authority/backlink play; also upgrades the
  selector's matching logic.

---

## Long term / parked

- **The app** — all tools + itinerary in one place, with **tee-time booking**. Blocked on tee-time
  API access (no course/aggregator API available yet). Revisit when a booking API or direct course
  integrations become possible. The tool-handoff work above is the stepping stone.
- **AI trip concierge** — chat grounded in course reviews + pricing + access rules. Build after the
  data layer (green fees, season pages, difficulty index) is solid.
- **Quarterly "State of Mallorca Golf Travel" report** from aggregated MailerLite tool submissions.
  Start once list volume justifies it.
- **Localised tools (DE first)** — parked by Andy for now; English + zh only. Andy doesn't speak
  German, so this waits until there's a translation/QA path.

---

## Completed ✅ (context)

- **Site audit + action items logged** — 4 Jul 2026 (`8468b0f`). Full audit of website, tools,
  prototypes, analytics, docs, Drive organisation.
- Items 1–6 above are the shipped features from the 3–4 Jul build-out.
