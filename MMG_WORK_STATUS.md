# MMG Work Status — May 2026

Last updated: 2026-05-11

---

## DONE ✅

### Site & UX
- ✅ Golf courses page: removed dark green background from filter/sort controls
- ✅ Golf courses page: filter tabs + sort controls now on cream background, clearly separated
- ✅ Golf courses page: removed centred alignment on geography section (left-aligned)
- ✅ Golf courses page: removed "Filter by region..." intro text, kept only dynamic pricing note
- ✅ Golf courses page: dynamic pricing note rewritten — shorter, explains what it means
- ✅ Golf courses page: removed region subtitles ("Worth basing yourself here", "Santa Ponsa & Camp de Mar") from section headers
- ✅ Contact form: handicap field already fixed (reduced size, optional label)
- ✅ Newsletter centering: already fixed on homepage + contact page

### Metadata quick wins (deployed)
- ✅ Son Gual review: new title + description with price hook
- ✅ Son Muntaner review: new title + description with World Golf Awards angle
- ✅ Golf de Andratx review: new title + description
- ✅ Golf cost guide: title rewritten with exact price range (€55–€250)
- ✅ Golf club hire guide: title + description with €25–€65/day
- ✅ Best golf courses guide: title + description with "All 24 ranked"
- ✅ Golf courses page: EN title + description updated

### Content
- ✅ Golf de Andratx review: published (all 7 languages)
- ✅ Son Gual review: published
- ✅ Son Muntaner review: published
- ✅ Santa Ponsa 1 review: published
- ✅ Son Termes review: published
- ✅ Alcanada review: published

---

## IN PROGRESS / NEXT UP 🔄

### High priority — site
- [ ] **Homepage title + description rewrite** — deferred, needs thinking (itinerary vs golf days framing)
- [ ] **Contact page title rewrite** — deferred, needs thinking
- [ ] **Homepage hero rewrite** — lead with itineraries + packages, not golf days
- [ ] **Add credentials/Meet Andy block on homepage** — PGA, Pebble Beach, Trackman, etc.
- [ ] **Customer journey wayfinding on homepage** — 3 paths: Planning / Info / Ready to Book

### Medium priority — site
- [ ] **Add FAQ sections** — each main page (SEO schema markup)
- [ ] **PWAP page reframe** — "optional add-on", not primary service
- [ ] **Create Packages page** — tiers with pricing

### Lower priority — site
- [ ] **PWAP carousel** — photos of past guests
- [ ] **Footer/design consistency audit**

---

## SEO TO-DO 🔍

- [ ] Homepage metadata rewrite (highest impact — deferred)
- [ ] Contact page metadata rewrite (deferred)
- [✅] Monitor "golf cost mallorca" CTR — 256 impressions, 1 click, position 6 — title needs work (I think this is done)
- [ ] FAQ schema markup on main pages
- [ ] Golf club rental: 2–3 more blog posts targeting search gaps
- [ ] Competitor keyword audit

---

## BUSINESS / OFFLINE 💼

These don't need code — just Andy's time:

- [ ] Define the 6 credentials for the About/credentials section (PGA + Pebble Beach + Trackman + what else?)
- [ ] Decide what the newsletter actually offers (deals, tips, exclusives?)
- [ ] Talk to courses: negotiate rates vs OnTee, document best prices
- [ ] Research prebooking model with courses (cancellation windows etc.)
- [ ] Research Scottish golf tour operators as model reference
- [ ] Club shipping partner research (Ship Sticks etc.)
- [✅] Financial projections spreadsheet

---

## OPEN QUESTIONS ❓

- [ ] **Monclair site** — you mentioned it as About page layout inspiration. What's the URL? (https://www.montclairchef.com/)
- [ ] **6 credentials** — PGA Logo. Pebble Beach, Trackman confirmed. What are the other three?
- [ ] **Newsletter value prop** — what should subscribers actually get?
- [✅] **Handicap field** — keep as optional, or remove entirely from contact form?
- [ ] **Homepage / contact page title** — when you're ready to think about these, flag it

---

## KNOWN BUGS / THINGS TO WATCH

- Pre-commit hook blocks commits if any file contains the corruption marker (four question marks) — fixed in mmg-master-template.js
- `mmg-master-template.js` uses `[YEAR]` placeholder now instead of the corruption marker
- Sandbox git index occasionally gets corrupted — fix: `Remove-Item .git\index.lock` in terminal
