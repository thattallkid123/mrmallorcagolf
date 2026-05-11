# MMG Priority Task List — May 2026

## QUICK REFERENCE (Copy-Paste Ready)

### P1: Site Architecture & Homepage Redesign
- [ ] Redesign homepage hero: lead with itineraries + packages, not golf days
- [ ] Add customer journey wayfinding: 3 options (Planning | Info Gathering | Ready to Book)
- [ ] Introduce yourself prominently: first-person, credentials (PGA, Pebble Beach, Trackman, 6 positions)
- [ ] Fix newsletter centering: homepage + enquiry page (flexbox + justify-content-center)
- [ ] Reduce golf-courses page text; pills instead of flying text; reduce dark green headers
- [ ] Add PWAP carousel: pictures of people who've done the experience (new section)
- [ ] Tighten footer/design consistency: match booking app UI to site

### P2: New Pages (High Value)
- [ ] Create Guides page: visual-first (course review pics like homepage), remove "see experiences" link
- [ ] Create Packages page: tiers (basic golf booking → VIP full itinerary + hotel + restaurants)
- [ ] Create About/Credentials page: logos (PGA, Pebble Beach, Trackman); see Monclair site for layout
- [ ] Create Book with a Pro page: separate from itinerary, optional add-on, first-person voice

### P3: Content & Messaging
- [ ] Rewrite homepage copy: first-person voice, trust-focused (not selling hard)
- [ ] Update all main pages: first-person perspective throughout (you speak directly)
- [ ] Add FAQ sections: each main page (SEO + UX win)
- [ ] Fix club rental page: € instead of £, consistent copy across all languages
- [ ] Headline section: explain credibility + value prop (research, plan, book)

### P4: SEO & Keyword Research
- [ ] Use Ubersuggest (or free alternative): find long-tail keywords + keyword difficulty
- [ ] Research competitor rankings: what are they ranking for on easy/medium difficulty terms?
- [ ] Golf club rental: publish 2–3 more blog posts targeting organic search gaps
- [ ] Reverse-engineer top articles: extract keywords → check if you rank → add missing keywords
- [ ] Monitor "golf cost mallorca" query: 256 impressions, 1 click = low CTR, needs optimization

### P5: Contact & Forms
- [ ] Contact page: expand handicap field styling; add label "optional" to handicap input
- [ ] Enquiry page: increase space for "preferred dates" field
- [ ] Enquiry page: fix newsletter centering (same issue as homepage)

### P6: Business Model & Partnership Research
- [ ] Research club shipping companies: upsell opportunity
- [ ] Talk to golf courses: are they cheaper on their site vs. external apps? OnTee discounts?
- [ ] Propose value: "I'll drive traffic, help you, what's your best price?"
- [ ] Build itinerary tiers: free basic → small fee → VIP (all with commissions)
- [ ] Research tour operator model: Scotland examples, what they offer, why premium works

### P7: Booking System & Automation
- [ ] Research prebooking model: tee time booking + cancellation rights
- [ ] Investigate Retell AI / Vapi: ~$15/month for 100 min (agent calls to handle bookings)
- [ ] Map cost structure: courses, agents, platform fees, target 15% margin
- [ ] Create financial projections deck: business model, costs, revenue, timelines
- [ ] Build itinerary planner tool: basic version on site (estimate costs, email for full quote)

### P8: Growth & Integration
- [ ] Newsletter strategy: research Roame Points model (why they convert well)
- [ ] Add value: flight deals, Son Quint discounts, packaged itineraries
- [ ] Partner with hotels, airlines, restaurants, car rental, spa, cold plunge, day trips
- [ ] Document system for worldwide expansion: Mallorca = template, just add local pros

---

## EXPANDED TASK DESCRIPTIONS

### P1: Site Architecture & Homepage Redesign

#### Redesign homepage hero: lead with itineraries + packages, not golf days
**Why:** Current hero focuses on "Play With a Pro" (time-for-money). Data shows itineraries + packages are the real revenue driver (99% of income). Messaging mismatch costs conversions.

**What to do:**
- Replace hero CTA: "Book Your Mallorca Golf Itinerary" instead of "Private Golf Days"
- Remove single focus on PWAP; reframe as secondary offering ("Add a Pro for expert advice")
- Visual: show diverse group doing golf + itinerary activities (not just playing golf)
- Copy emphasizes: planning, booking, travel organization, peace of mind
- Mention you handle: course selection, tee times, hotels, pricing (all sorted)

**Acceptance:** Hero section refreshed, PWAP is secondary upsell, itinerary is hero.

---

#### Add customer journey wayfinding: 3 options (Planning | Info Gathering | Ready to Book)
**Why:** Visitors land in different mindsets. Right now, messaging is one-size. Wayfinding lets each visitor find their next step instantly.

**What to do:**
- Add section after hero: "Where are you in your journey?"
- Three card options (clickable):
  1. "Planning a trip" → Link to Guides (blog posts, course info, cost breakdowns)
  2. "Looking for info" → Link to Golf Course Guide (all courses, locations, pricing)
  3. "Ready to book" → Link to Packages or contact form
- Optional: each card has teaser text + icon (no overselling)
- Section uses light background, centered, clear copy

**Acceptance:** Wayfinding block live on homepage, all three links working, clear call paths.

---

#### Introduce yourself prominently: first-person, credentials (PGA, Pebble Beach, Trackman, 6 positions)
**Why:** People book pros based on trust + authority. Right now, "About" is buried; credentials unclear. First-person voice is unusual for golf sites = differentiator.

**What to do:**
- Homepage gets new section (before or after hero, maybe after wayfinding)
- Headline: "I'm Andy. Here's why I can help."
- Short 2–3 sentence intro: you're PGA Advanced Pro, 6 years teaching Mallorca, etc.
- Show credentials visually: 6 logo boxes (PGA, Pebble Beach, Trackman, etc.)
- Reference full bio: "See my full journey" → links to new About page
- Tone: warm, first-person, not salesy

**Acceptance:** Homepage has credentials block, logo section visible, link to full About page works.

---

#### Fix newsletter centering: homepage + enquiry page
**Why:** Newsletter signup boxes are left-aligned (not flexed). Looks unfinished, hurts conversion.

**What to do:**
- Homepage newsletter section: add `display: flex; justify-content: center; align-items: center;`
- Enquiry page "Stay in Touch" section: same fix
- Ensure text + input box are centered together, not stacked oddly

**Acceptance:** Newsletter boxes centered on both pages; section looks aligned + professional.

---

#### Reduce golf-courses page text; pills instead of flying text; reduce dark green headers
**Why:** Current design is busy, hard to scan. Visitors need quick visual scanning, not long paragraphs.

**What to do:**
- Replace long course names with region-based pills (e.g., "East", "West", "Central")
- Click pill → see courses in that region (or scroll within region)
- Remove or condense dark green header text
- Use course cards (same design as homepage course cards) for consistency
- Aim for 1/3 less text on the page

**Acceptance:** Golf courses page redesigned; pills visible; less text; visual consistency with homepage.

---

#### Add PWAP carousel: pictures of people who've done the experience
**Why:** Social proof. Right now, no visual proof that real people do this. Carousel = trust + proof.

**What to do:**
- New section on homepage (near or after PWAP/Book with Pro section)
- Carousel: 3–5 images of real guests enjoying golf/socializing
- Caption under each: short quote or "A day with Andy"
- Use same image style as blog (high quality, natural light)

**Acceptance:** Carousel section live, images loading, captions present, mobile-responsive.

---

#### Tighten footer/design consistency: match booking app UI to site
**Why:** Internal booking tool looks different from site. Cognitive load for users switching between them.

**What to do:**
- Audit booking app colors, typography, spacing against site design
- Align footer styling (colors, text, links) between site and app
- Document unified design system (if not already done)
- Test: can users flow smoothly from site → app → back?

**Acceptance:** Site + app design consistent; no jarring visual shifts; users can navigate fluidly.

---

### P2: New Pages (High Value)

#### Create Guides page: visual-first (course review pics like homepage), remove "see experiences" link
**Why:** Guides drive traffic (2026 views of Son Gual guide via Instagram). Right now, guides are scattered across blog. A dedicated Guides hub with visual navigation = more discoverability.

**What to do:**
- New page: `/guides` (all languages)
- List all published guides (course reviews, trip planning, cost breakdown, club hire)
- Display as cards with images (same style as homepage course cards) — NOT text links
- Each card: image, course name, quick fact, click to read full guide
- Delete "See experiences" links that lead away from site (those kill flow)
- Add filter or region grouping (East courses, West courses, etc.)

**Acceptance:** Guides page live, all guides displayed as visual cards, image loading correct, no external links breaking flow.

---

#### Create Packages page: tiers (basic golf booking → VIP full itinerary + hotel + restaurants)
**Why:** Right now, no clear pricing tiers or package structure. Packages page explains value at each tier + builds confidence.

**What to do:**
- Three pricing tiers:
  1. **Basic** ($0–small fee): You book golf course + provide advice (self-organize hotel)
  2. **Standard** (~$X): You book golf + hotel + restaurant recommendations + itinerary
  3. **VIP** (~$Y): Full concierge — courses, hotel, restaurants, car rental, activities, day trips
- Each tier: list what's included, estimated cost, book/contact link
- Explain: "All priced competitively; commissions support local businesses"
- Show example itinerary (e.g., "5-day Mallorca Golf Trip")

**Acceptance:** Packages page live, 3 tiers clear, pricing visible, book links functional.

---

#### Create About/Credentials page: logos (PGA, Pebble Beach, Trackman); see Monclair site for layout
**Why:** Builds authority. Right now, About is generic. Credentials page shows why you're different.

**What to do:**
- Full first-person biography: where you're from, why you got into golf, key career moments
- Six credential/experience boxes: PGA logo, Pebble Beach, Trackman, previous clubs/roles, etc.
- Photo: professional headshot or action shot at course
- Timeline or career progression (optional visual)
- Reference Monclair site for layout inspiration (clean, credential-heavy)
- Closing: "That's why I can help you get the most out of Mallorca golf"

**Acceptance:** About page live, credentials visible, photos loading, first-person voice clear.

---

#### Create Book with a Pro page: separate from itinerary, optional add-on, first-person voice
**Why:** PWAP is optional, not required. People get scared by "must have a pro". This page clarifies the choice + positions it as premium addon.

**What to do:**
- New page: `/book-with-a-pro` (all languages)
- Headline: "Book with a Pro (Optional Add-On)"
- Explain: "Your itinerary works with or without me. I'm here if you want expert advice."
- Show what you add: course tips, swing feedback, local stories, lunch recommendations, etc.
- Price: overlay it as an add-on cost to itinerary
- First-person: "I love sharing these experiences. You don't need me, but if you want..."
- Include testimonials/quotes from PWAP guests
- CTA: "Add a Pro to Your Itinerary" or "Just Book Golf"

**Acceptance:** PWAP page live, optional framing clear, pricing visible, testimonials included.

---

### P3: Content & Messaging

#### Rewrite homepage copy: first-person voice, trust-focused (not selling hard)
**Why:** Current copy sounds like marketing. Your strength is personal expertise + real experience. First-person builds trust.

**What to do:**
- Audit all homepage copy against MMG_BRAND_VOICE_GUIDELINES.md
- Rewrite to first-person: "I've played all X courses" not "We offer expert reviews"
- Focus on trust + value: "Here's what I learned" not "Book now"
- Avoid banned phrases: stunning, breathtaking, nestled, seamless, vibrant, etc.
- Check guardrails file for tone examples

**Acceptance:** Homepage copy rewritten, first-person throughout, no banned phrases, voice consistent.

---

#### Update all main pages: first-person perspective throughout
**Why:** Consistency. If homepage is first-person but other pages aren't, messaging breaks.

**What to do:**
- Audit: `/about`, `/guides`, `/play-with-a-pro`, `/golf-courses`, `/contact`
- Rewrite all to first-person where appropriate
- Remove generic marketing language
- Maintain brand voice guardrails throughout

**Acceptance:** All main pages use first-person, voice consistent, no marketing clichés.

---

#### Add FAQ sections: each main page
**Why:** FAQs improve SEO (schema markup, long-tail keywords) + reduce contact form friction.

**What to do:**
- Homepage: "What's included in my itinerary?" "Do I need to book a pro?" "How do you find courses?"
- Guides page: "Which course is best for me?" "How much should I spend?" "Can I book easily from abroad?"
- Packages page: "What's the difference between tiers?" "Can I customize a package?" "Do you handle refunds?"
- Contact page: "How quickly do you respond?" "What do you need from me?" "Can I cancel?"
- Format: Schema markup (JSON-LD) for Google
- Style: Collapsible accordions or simple Q&A blocks

**Acceptance:** FAQ sections live on all main pages, schema markup present, questions relevant + well-answered.

---

#### Fix club rental page: € instead of £, consistent copy across all languages
**Why:** Currency mismatch looks unprofessional; inconsistent copy hurts trust. Data shows rental interest.

**What to do:**
- Audit club rental page: find all £ symbols, replace with €
- Audit copy: make sure German, Spanish, French, Dutch, Swedish versions say same thing (not literal translation, real equivalence)
- Check pricing: is €/cost consistent with blog posts + guides?
- Ensure all CTAs and forms work in every language

**Acceptance:** Club rental page uses €, all languages consistent, no currency conflicts, pricing aligned.

---

#### Headline section: explain credibility + value prop (research, plan, book)
**Why:** Visitors don't immediately understand you do *planning*, not just golf days. This section clarifies.

**What to do:**
- New section on homepage (maybe below hero or after wayfinding)
- Three value pillars:
  1. **Research** — I've played all X courses, know pricing, conditions, layouts
  2. **Plan** — I organize itineraries, bookings, hotels, restaurants (takes stress off you)
  3. **Book** — You get guaranteed tee times, best prices, hassle-free
- Each pillar: icon + 2 sentence explanation (first-person)
- Use your voice: "I do the legwork so you don't have to"

**Acceptance:** Value pillar section live, three pillars clear, first-person tone, images/icons present.

---

### P4: SEO & Keyword Research

#### Use Ubersuggest (or free alternative): find long-tail keywords + keyword difficulty
**Why:** You're showing up for "golf mallorca" (81 impressions, 0 clicks @ position 67) but not winning. Need easy-to-rank-for long-tail keywords.

**What to do:**
- Sign up: Ubersuggest (or use free tools like Google Keyword Planner, Answer the Public, Ahrefs free)
- Search: "golf mallorca", "golf courses mallorca", "golf club rental"
- Filter: keyword difficulty = easy/medium only (avoid hard/high-competition terms initially)
- Export: list of 30+ low-difficulty long-tail keywords (e.g., "short golf courses mallorca", "golf club hire near palma")
- Share: results to Claude with "These are my target keywords — which pages should I create/optimize?"

**Acceptance:** Keyword list (CSV or doc) completed, difficulty scores noted, 20+ easy/medium terms identified.

---

#### Research competitor rankings: what are they ranking for on easy/medium difficulty terms?
**Why:** If competitors rank for "golf club hire mallorcan", you should too (or higher).

**What to do:**
- Pick 5–10 top-ranking competitors (search "golf mallorca", click top 3–5 results)
- For each competitor, note: what keywords are they ranking for, what pages do they use, do they have blog posts you don't?
- Cross-reference against your keyword list
- Document: "They rank for X, we don't — opportunity"
- Reverse-engineer: why do they rank? Backlinks? Better content? Older domain?

**Acceptance:** Competitor audit doc (table: competitor name, keywords they rank for, pages, opportunities).

---

#### Golf club rental: publish 2–3 more blog posts targeting organic search gaps
**Why:** "golf club rental mallorca" gets 1 click but 1 impression (you have that page, not many searches). But "clubs to hire mallorca" + "hire golf clubs near me" each get 4 impressions = underexploited.

**What to do:**
- Write blog posts:
  1. "How to Choose Club Rentals in Mallorca: Quality, Price, Delivery"
  2. "Best Places to Rent Golf Clubs in Palma & the Island"
  3. "Golf Club Hire for Tourists: What You Need to Know"
- Target keywords from your research: keyword difficulty = easy, 10–50 monthly searches
- Cross-link: each post links to your rental page + other guides
- Optimize: use keyword in title, first paragraph, FAQ section

**Acceptance:** 3 blog posts published, all languages, internal links working, SEO metadata filled.

---

#### Reverse-engineer top articles: extract keywords → check if you rank → add missing keywords
**Why:** You have a 2500-view guide (Son Gual via Instagram collab). If you extract keywords from it, you'll find what people searched for to find you.

**What to do:**
- Pick top article (e.g., Son Gual guide, "How Much Does Golf Cost")
- Copy article text to Claude, ask: "What are the main keywords and long-tail phrases in this article?"
- Claude extracts: e.g., "son gual course layout", "son gual green fees 2026", "playing son gual tips", etc.
- For each keyword: Google search it, check if you rank in top 10, note your position
- Keywords you rank for but never mentioned explicitly = hidden wins
- Keywords competitors rank for but you don't = gaps to fill (add a paragraph, link to it)

**Acceptance:** Keyword extraction for 2–3 top articles, position audit done, gap list created.

---

#### Monitor "golf cost mallorca" query: 256 impressions, 1 click = low CTR, needs optimization
**Why:** This query is huge (256 impressions = lots of intent). You're showing up 6th on average, but CTR is 0.39%. Title or description isn't compelling.

**What to do:**
- Check Google Search Console: what's your current title + meta description for this page?
- Compare: click on competing results, see their titles
- Rewrite yours: make it unique, answer the question better, add emoji or number (e.g., "Golf Cost Mallorca 2026: Complete Pricing Breakdown")
- A/B test: submit new title to Search Console, monitor CTR over 2 weeks
- If still low: rewrite page content (maybe it's not answering the question people want answered)

**Acceptance:** Title + meta description rewritten, submitted to Search Console, CTR monitored over time.

---

### P5: Contact & Forms

#### Contact page: expand handicap field styling; add label "optional" to handicap input
**Why:** Handicap box is huge for a field most people don't have (especially tourists). Signals it's required when it's optional.

**What to do:**
- Find handicap input field code
- Reduce height (change from large text area to small input box)
- Add inline label: "Handicap (optional)" — visible right on the input or above it
- Test: fill form on mobile (should not dominate screen)

**Acceptance:** Handicap field smaller, "optional" label visible, form looks proportional.

---

#### Enquiry page: increase space for "preferred dates" field
**Why:** People want to explain their availability (e.g., "May 20–23 or June 10–15"). Current field might be too small.

**What to do:**
- Check current dates field: is it a text input or textarea?
- If input: change to textarea (allows multiple lines)
- Increase height: give people room to explain
- Update placeholder: "e.g., May 20–23, or flexible June" (set expectations)

**Acceptance:** Dates field expanded, textarea if needed, placeholder helpful.

---

#### Enquiry page: fix newsletter centering (same issue as homepage)
**Why:** Same centering bug as homepage ("Stay in Touch" section not flexed).

**What to do:**
- Apply same fix: `display: flex; justify-content: center;`
- Ensure text + input + button are all centered together

**Acceptance:** Newsletter section centered on enquiry page.

---

### P6: Business Model & Partnership Research

#### Research club shipping companies: upsell opportunity
**Why:** Golfers traveling often want to ship their clubs ahead. You can partner + earn commission.

**What to do:**
- Find 3–5 club shipping companies (e.g., Ship Sticks, Golf Ahead, etc.)
- Note: pricing, delivery timeline, coverage (do they deliver to Mallorca?)
- Reach out: "I send international golfers to Mallorca. Can we partner? Commission structure?"
- Document: terms, commission %, process

**Acceptance:** List of 3+ shipping companies, contact info, commission rates, intro emails sent.

---

#### Talk to golf courses: are they cheaper on their site vs. external apps? OnTee discounts?
**Why:** You want to offer "best prices guaranteed". Need to know: are you cheaper than their website, OnTee, or booking apps?

**What to do:**
- Pick 3 courses (Son Gual, Alcanada, Santa Ponsa 1)
- Check their website: what's their posted green fee?
- Check OnTee, Golf Now: what discount are they offering?
- Call course: "What's your best rate for a group booking? Can I get better rates?"
- Document: official rate, app rates, your negotiated rate

**Acceptance:** Rate comparison table (course, official, OnTee, your rate), notes on who offers best price.

---

#### Propose value: "I'll drive traffic, help you, what's your best price?"
**Why:** Courses want bookings. You can offer them eyeballs (your site, social media, future concierge referrals).

**What to do:**
- Draft outreach email: "I send 200+ golfers to Mallorca annually. I'd like to partner."
- Propose: "I'll feature your course prominently, drive bookings, and help with concierge referrals."
- Ask: "What rates can you offer for a consistent booking partner?"
- Send to top 3–5 courses

**Acceptance:** Outreach emails sent, responses tracked, at least 2 courses interested.

---

#### Build itinerary tiers: free basic → small fee → VIP (all with commissions)
**Why:** Tiers let you serve different budgets + capture margin at each level.

**What to do:**
- Define cost structure for each tier:
  - **Basic**: free (you earn via course commissions only)
  - **Standard**: €50–100 (your planning fee + commissions)
  - **VIP**: €200–300+ (full concierge planning + hotel + restaurant commissions)
- Map out what each tier includes (see Packages page task above)
- Identify commission sources: courses, hotels, restaurants, car rental, activities
- Calculate: at what booking volume do you hit 15% margin target?

**Acceptance:** Tier definitions doc, cost breakdown, commission rates estimated, margin calculations done.

---

#### Research tour operator model: Scotland examples, what they offer, why premium works
**Why:** You want to eventually scale this globally. Tour operators show the playbook.

**What to do:**
- Find 2–3 Scottish golf tour operators (search "luxury golf tour scotland")
- Note: what do they offer? (courses, hotels, activities, caddies, transportation?)
- How much do they charge? ($2000–5000+?)
- Why does premium work? (local expertise, exclusive access, time-saving, VIP treatment?)
- Document: model, pricing, why premium resonates

**Acceptance:** Tour operator research doc (2–3 examples, pricing, value props).

---

### P7: Booking System & Automation

#### Research prebooking model: tee time booking + cancellation rights
**Why:** You want to guarantee tee times to customers but stay flexible. Prebooking lets you hold slots without full payment.

**What to do:**
- Talk to golf courses: "Can I reserve tee times and pay later if customer cancels?"
- Document: which courses allow this, cancellation window (48 hrs? 72 hrs?), any deposits required?
- Ask: "What's your no-show policy? Can customers cancel up to X days before?"
- Map process: you book → customer confirms → you reconfirm with course → customer pays

**Acceptance:** Prebooking policy doc (which courses, cancellation windows, payment terms).

---

#### Investigate Retell AI / Vapi: ~$15/month for 100 min (agent calls to handle bookings)
**Why:** You don't want to spend 2 hours on the phone confirming bookings. AI agents can handle it.

**What to do:**
- Sign up: Retell AI or Vapi free tier
- Test: create a simple booking confirmation call script
- Understand: how does the agent answer customer questions? What info does it collect?
- Pricing: confirm ~$15/month for 100 minutes of agent calls
- Feasibility: could this replace your booking admin work?

**Acceptance:** Account created, test call run, pricing confirmed, use case documented.

---

#### Map cost structure: courses, agents, platform fees, target 15% margin
**Why:** You need to know if your business model works. Spreadsheet time.

**What to do:**
- Create a spreadsheet with columns:
  - **Revenue per booking**: (itinerary fee + commissions)
  - **Costs**: course booking fees?, agent calls?, Retell/Vapi platform?, Resend email?, payment processing (if added)?
  - **Margin**: Revenue - Costs
- Model example booking: 4-day itinerary, 4 courses @ €100 each, hotel @ €150/night, restaurant commission
- Calculate: what margin % do you get?
- Adjust: can you increase fees or reduce costs to hit 15%?

**Acceptance:** Cost model spreadsheet, example booking modeled, margin calculated, assumptions documented.

---

#### Create financial projections deck: business model, costs, revenue, timelines
**Why:** Clarity. You need to know: "At 10 bookings/month, what do I make? At 50?"

**What to do:**
- Deck outline:
  1. Business model overview (itinerary tiers, pricing, commission sources)
  2. Unit economics (1 booking cost + revenue breakdown)
  3. Monthly projections: 5, 10, 20, 50, 100 bookings/month
  4. Break-even point (when does business turn profitable?)
  5. Year 1–3 projection (revenue, costs, profit)
  6. Scaling plan (how to get from 5 to 50+ bookings?)
- Use Claude design tool: create PPTX (nice formatting)

**Acceptance:** Deck created, financial projections filled in, break-even point identified, scaling strategy outlined.

---

#### Build itinerary planner tool: basic version on site (estimate costs, email for full quote)
**Why:** Self-service reduces friction. Customers can play with options before contacting you.

**What to do:**
- Web tool: simple form where customer selects:
  - Dates (check-in, check-out)
  - Number of golfers
  - Courses (pick from checkboxes)
  - Tier (basic, standard, VIP)
  - Hotel preference (budget, mid, luxury)
- Tool calculates: rough cost breakdown (courses + hotel estimate)
- Output: "Your estimated cost: €X–Y. Email us for a detailed quote."
- Send: email with their selections + estimated price

**Acceptance:** Tool built, live on site, calculates costs accurately, email sends with customer data.

---

### P8: Growth & Integration

#### Newsletter strategy: research Roame Points model (why they convert well)
**Why:** Your newsletter signup is low-engagement. Roame Points (hotel loyalty) does it better. What's their secret?

**What to do:**
- Subscribe to Roame Points newsletter, track 5–10 emails
- Note: what do they send? (tips, deals, destination guides, exclusives?)
- Why does it work? (valuable content, time-bound offers, sense of community?)
- Document: frequency, content types, value prop

**Acceptance:** Roame Points analysis doc (what they do, why it converts, how you can apply it).

---

#### Add value: flight deals, Son Quint discounts, packaged itineraries
**Why:** Right now, newsletter is generic. Customers want deals + exclusives.

**What to do:**
- Partnerships:
  - Airlines (Ryanair, easyJet, Iberia): negotiate pre-launch discounts for your newsletter
  - Son Quint (restaurant): offer subscriber discount
  - Hotels: partner for discounts
- Content: each newsletter includes 1 deal + 1 guide/tip
- Example: "This week: 10% off Son Quint lunch + our top budget golf courses"

**Acceptance:** Partnership agreements in place, first newsletter with deals drafted, subscriber engagement measured.

---

#### Partner with hotels, airlines, restaurants, car rental, spa, cold plunge, day trips
**Why:** You can earn commission on *everything* a traveler books while in Mallorca. Hotels alone could be 20% of revenue.

**What to do:**
- Identify partners in each category (find 2–3 per category)
- Approach: "I send tourists to Mallorca. What's your partner/affiliate/commission structure?"
- Document: partner name, commission %, terms, website, contact
- Build: "Book your full trip" section on site linking to partners

**Acceptance:** Partner list (10+ partners across categories), commission rates documented, integration plan outlined.

---

#### Document system for worldwide expansion: Mallorca = template, just add local pros
**Why:** Long-term vision: run this in Scotland, Portugal, USA, etc. Documenting the system now saves years later.

**What to do:**
- Write playbook: "How to Launch [Location]"
  1. Research golf courses (fees, contacts, commission rates)
  2. Recruit 1–2 local PGA pros (how to find, what to pay)
  3. Build itinerary templates for that location
  4. Develop partnerships (hotels, restaurants, car rental)
  5. Launch website + booking tool
  6. Market to international audience
- Document: timelines, budgets, hiring criteria for each step

**Acceptance:** Playbook doc (10+ pages, step-by-step, with templates and checklists).

---

## WHAT I STILL NEED FROM YOU

To get started, please provide:

1. **Google Drive access** (if not already synced): MMG_MASTER.md, MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md so I can apply exact brand guidelines to copy rewrites

2. **Monclair site** (or link): You mentioned seeing it for About page layout — can you share the URL so I can reference the design?

3. **Current homepage design files** (Figma, screenshot, etc.): So I can propose redesigns before building

4. **List of 6 credentials/experiences**: For the About page logos section (you mentioned 6 positions — what are they?)

5. **Club rental page URL**: So I can see current £/€ issue + copy inconsistencies

6. **Existing partner agreements**: Do you have any hotel, restaurant, or course commission agreements documented? Helps me understand baseline rates.

7. **Retell AI / Vapi access** (if you have it): Or permission to sign up on your behalf

8. **Golf course contacts**: List of top 3–5 Mallorca courses + contact names so I can prepare outreach emails

Ready to build. What's first?
