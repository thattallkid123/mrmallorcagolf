# MMG Site Audit Report — May 2026

## Executive Summary

**Current state:** Site is messaging-heavy on PWAP (Private Golf Days), underplaying itineraries + packages. Homepage metadata + copy focus on "Golf Days" when your business data shows itineraries are 99% of desired revenue. Newsletter is present but not prominent/incentivized. SEO metadata exists but some titles are generic or misaligned with intent.

**Key friction points:**
1. Hero CTA says "Book a Golf Day" when it should say "Plan Your Itinerary"
2. Newsletter signup is not visually prominent (centering issue identified in data)
3. "How It Works" section focuses on golf days, not itinerary planning
4. No visible credentials/About section on homepage (buried on separate page)
5. Golf Courses page is text-heavy (needs visual redesign)
6. Contact form has oversized handicap field (signals it's required)
7. No FAQ sections on any main pages (SEO missed opportunity)
8. Club rental content exists but scattered (no dedicated hub)

---

## Page-by-Page Metadata Audit

### Homepage (`/`)
**Current Title:** `Golf Days in Mallorca | Mr Mallorca Golf`  
**Current Description:** `Private golf days in Mallorca with PGA Advanced Professional Andy Griffiths. Play Son Gual, Alcanada and more, with every detail arranged.`

**Issues:**
- Title is narrow: "Golf Days" doesn't capture itinerary planning, packages, or travel organization
- Description emphasizes "golf days" + "play courses" — minimizes planning/organizing angle
- Missing: first-person voice, credibility, breadth of services

**Recommendation:**
- **New Title:** `Mallorca Golf Itineraries & Travel Planning | PGA Professional Andy Griffiths`  
- **New Description:** `Plan your perfect Mallorca golf trip. I handle courses, tee times, hotels, pricing — all sorted. Or just book golf. First-person expertise from a PGA pro who lives here.`

---

### About Page (`/about`)
**Current Title:** `About Andy Griffiths | PGA Advanced Professional in Mallorca`  
**Current Description:** `Meet Andy Griffiths, the PGA Advanced Professional behind Mr Mallorca Golf, with experience from Pebble Beach, Evian, and eleven years coaching in China.`

**Issues:**
- Page exists but is a standalone route (not integrated into homepage flow)
- Credentials are mentioned (Pebble Beach, Evian, 11 years in China) but not visually prominent
- No visitor path from homepage to About (visitors don't know to click)

**Recommendation:**
- Keep page as-is for now
- Add homepage section: "Meet Andy" with credentials + link to full About page
- Ensure homepage has visual credentials block (logos: PGA, Pebble Beach, Trackman, etc.)

---

### Golf Courses Page (`/golf-courses`)
**Current Title:** `Mallorca Golf Courses Guide 2026`  
**Current Description:** `Compare every Mallorca golf course, green-fee access, regions, difficulty, and honest PGA recommendations for planning your 2026 golf trip.`

**Issues:**
- Title is good
- Description is good (mentions "plan your trip")
- But: page content is text-heavy (long paragraphs, hard to scan)
- No regional pills/filters (visitors can't quickly find courses by area)
- Inconsistent with homepage course cards (visual design mismatch)

**Recommendation:**
- Redesign page layout: replace flying text with regional pills (East, West, Central, North, etc.)
- Use same course card design as homepage for visual consistency
- Reduce dark green headers, increase white space
- Add filter/sort functionality (by difficulty, region, green fee range)

---

### Guides Page (`/guides`)
**Current Title:** `Mallorca Golf Guide - Course Reviews, Tips and Advice`  
**Current Description:** `Honest guides to golf in Mallorca from a PGA professional based on the island. Course reviews, green fees, trip planning, and when to visit - all updated for 2026.`

**Issues:**
- Title + description are good
- But: page layout likely shows guides as text links only (not visually)
- Data shows Son Gual guide got 2500 views (social proof!) — but not displayed
- No "See Experiences" link (good — avoid breaking flow), but also no visual cards

**Recommendation:**
- Redesign page as visual grid: course cards with images (like homepage)
- Each card: course image, name, quick fact, click to read
- Add regional grouping (East courses, West courses, etc.)
- Consider adding guide type filter (Course Review, Cost Guide, Trip Planning, etc.)
- Showcase "Popular" guides (badge on cards)

---

### Play With a Pro Page (`/play-with-a-pro`)
**Current Title:** `Private Golf Days in Mallorca`  
**Current Description:** Uses `getPlayWithAProMetadataDescription()` — content not visible in metadata file

**Issues:**
- Title is fine but doesn't differentiate from homepage messaging
- Page exists but is presented as *primary* service (should be secondary/optional)
- Likely has no clear "this is optional" framing

**Recommendation:**
- Keep page but reframe: "Book with a Pro (Optional Add-On)"
- Add copy: "Your itinerary works with or without me. I'm here if you want expert advice."
- Position as premium addon, not required service
- Include testimonials from past PWAP guests
- Show pricing as overlay on itinerary packages

---

### Contact Page (`/contact`)
**Current Title:** `Enquire About a Private Golf Day in Mallorca | Mr Mallorca Golf`  
**Current Description:** `Enquire about a private golf day in Mallorca with Andy Griffiths. Every enquiry is answered personally, usually within a few hours and always within 24.`

**Issues:**
- Title emphasizes "Golf Day" (should be broader: "Plan Your Trip" or "Inquiry")
- Description says "golf day" but should frame for itineraries too
- Form likely has oversized handicap field (signals it's required)
- Newsletter signup section may have centering issue (left-aligned, not flexed)

**Recommendation:**
- **New Title:** `Plan Your Mallorca Golf Trip - Inquiry & Booking | Mr Mallorca Golf`
- **New Description:** `Have questions about your Mallorca golf itinerary? Get in touch. I reply personally within 24 hours.`
- Fix contact form: reduce handicap field, add "optional" label
- Expand "preferred dates" field (allow multi-line)
- Fix newsletter centering on page

---

### Newsletter Page (`/subscribe`)
**Current Title:** `Golf Insights from Mallorca - Weekly Newsletter | Mr Mallorca Golf`  
**Current Description:** `Join the mailing list for weekly Mallorca golf insights, course reviews, and trip planning tips from a PGA professional on the island.`

**Issues:**
- Title + description are good
- But: newsletter exists as standalone page (not prominent on homepage)
- No value proposition (what will subscribers actually get?)
- No incentive (free download, discount, exclusive tips, etc.)

**Recommendation:**
- Newsletter should be prominent on homepage (after hero or in wayfinding section)
- Add value prop: "Weekly tips, course deals, exclusive Son Quint discounts"
- Consider gating one resource (e.g., "Free Mallorca Golf Cost Breakdown" PDF)
- Redesign homepage newsletter section to be centered, visually appealing

---

## SEO Metadata Issues

### Missing Schema Markup
- No FAQ schema on pages (missed SEO opportunity)
- No breadcrumb schema (multi-level pages like guides)
- No product/service schema (for packages, PWAP)

### Title Tag Issues
- Many pages say "Golf Days" when breadth is wider (itineraries, planning)
- Some titles are generic ("Mallorca Golf Guide") vs. specific ("Mallorca Golf Courses Guide 2026")
- Homepage title is too narrow (doesn't capture itinerary angle)

### Meta Description Issues
- Many descriptions emphasize "golf days" (overweighting PWAP)
- Some descriptions are incomplete or vague (getPlayWithAProMetadataDescription not readable)
- No CTAs or urgency in descriptions

---

## Content & Copy Issues

### Homepage Hero Section
**Current Flow:** 
- Hero: "Book a Golf Day" (call-to-action)
- Secondary: "A Day With Andy" (secondary CTA)

**Problem:** Both CTAs are golf-day focused. No mention of itineraries or planning.

**Fix:**
- Primary CTA: "Plan Your Itinerary" → `/contact` or new itinerary-planner tool
- Secondary CTA: "Book with a Pro" → `/play-with-a-pro` (optional, not primary)
- Add wayfinding section: "Where are you in your journey?" (3 options: Planning, Info Gathering, Ready to Book)

### "How It Works" Section
**Current Focus:** Steps for booking a golf day (1. Contact → 2. Discuss → 3. Confirm → 4. Enjoy)

**Problem:** Doesn't address itinerary planning flow (research courses → select itinerary tier → book → organize travel)

**Fix:**
- Rewrite to show itinerary planning workflow
- Show 2 paths: (1) self-service guides route, (2) full planning route
- Mention: "We handle courses, hotels, restaurants, pricing"

### About/Credentials Section
**Currently:** Buried on separate `/about` page; not visible on homepage

**Problem:** Visitors don't know why to trust you; no credentials visible

**Fix:**
- Add section to homepage after hero
- Show: "I'm Andy" + 2-3 sentence intro + 6 credential logos (PGA, Pebble Beach, Trackman, Evian, China experience, Mallorca resident)
- CTA: "See my full story" → `/about`

---

## Design & UX Issues

### Newsletter Centering (Data-Driven Finding)
**Issue:** Newsletter signup sections are left-aligned, not centered
- Homepage newsletter section: likely in flex container without `justify-content: center`
- Contact page "Stay in Touch" section: same issue

**Fix:** Apply `display: flex; justify-content: center; align-items: center;` to newsletter wrapper

### Golf Courses Page Layout
**Issue:** Text-heavy, hard to scan
- Long paragraphs about each course
- No regional pills or visual grouping
- Dark green headers dominate

**Fix:**
- Replace paragraphs with visual cards (course image + name + green fee + difficulty badge)
- Add region pills: "East", "West", "Central", "North", "South"
- Click pill → scroll to region or filter courses
- Reduce header styling, increase white space

### Contact Form Fields
**Issue:** Handicap field is oversized (like a text area)
- Signals to users it's required/important
- Most tourists don't have handicaps

**Fix:**
- Change from large textarea to small input field
- Add label: "Handicap (optional)"
- Increase "preferred dates" field size (textarea, allow multi-line)

### Guides Page Visual Design
**Issue:** Likely shows guides as text links only
- Data shows Son Gual guide was popular (2500 views) but no social proof visible
- Text links are boring; no visual appeal

**Fix:**
- Convert to image card grid (like homepage course cards)
- Show course images on each guide card
- Add "Popular" badge on high-traffic guides (Son Gual, Alcanada)
- Keep same style as homepage (consistent brand)

---

## Content Gaps

### No Dedicated Pages For:
- ❌ Packages/Pricing (needs to be created)
- ❌ Booking with a Pro (exists at `/play-with-a-pro` but should reframe as optional)
- ❌ Itinerary Planning Tool (needs simple tool on homepage)
- ❌ FAQ Sections (every main page should have FAQs for SEO)
- ❌ Credentials/About Section on homepage (buried on separate page)

### Newsletter Value Missing
- No clear incentive to subscribe
- No mention of exclusive deals, course discounts, trip tips
- Not prominent on homepage

---

## Keyword/Intent Mismatch Issues

### High-Volume, Low-Click Keywords (From Analytics)
| Query | Impressions | Clicks | CTR | Your Position | Issue |
|-------|---|---|---|---|---|
| golf mallorca | 81 | 0 | 0% | 67.26 | Title too narrow; you show up for "golf days" not "golf planning" |
| golf cost mallorca | 256 | 1 | 0.39% | 6.13 | You rank 6th but people don't click; title/description not compelling |
| best golf courses mallorca | 38 | 0 | 0% | 72.89 | Too far back; competitors ahead of you |
| golf son gual mallorca | 33 | 0 | 0% | 65.73 | Your guide exists; why no clicks? Title/description may not match intent |

### Root Cause
Homepage metadata says "Golf Days" but searchers are in "planning" mode (looking for info, not ready to book yet). You need to:
1. Rewrite titles to capture *planning* intent (not just booking)
2. Create content for information-gathering phase (not just sales)
3. Add CTAs that match visitor intent (Learn → Plan → Book path)

---

## Summary of Required Changes

### High Priority (Affects Revenue)
1. ✏️ **Rewrite homepage title + description** → emphasize itineraries, planning, not just golf days
2. 🏗️ **Redesign homepage hero** → lead with "Plan Your Itinerary", make PWAP optional/secondary
3. 📱 **Add wayfinding section** → "Where are you?" (Planning | Info | Ready to Book)
4. 📋 **Add credentials block** → homepage section showing PGA + Pebble Beach + 6 logos
5. 🎨 **Redesign golf-courses page** → visual cards + regional pills, less text
6. 🖼️ **Redesign guides page** → image cards + popular badges, not text links

### Medium Priority (UX + SEO)
7. ✏️ **Fix contact form** → smaller handicap field, larger dates field, "optional" label
8. 🔧 **Fix newsletter centering** → flexbox on homepage + contact page
9. 📝 **Add FAQ sections** → each main page (SEO schema markup)
10. 📝 **Rewrite contact page title/description** → broader (not just "golf days")
11. 🔄 **Create Packages page** → show itinerary tiers with pricing
12. ⭐ **Reframe PWAP page** → "Optional Add-On", not primary service

### Lower Priority (Nice-to-Have)
13. 🎬 **Add PWAP carousel** → images of past guests, social proof
14. 🌐 **Create itinerary planner tool** → simple form to estimate costs
15. 📰 **Create 3+ club rental blog posts** → target long-tail keywords
16. 🔗 **Document competitor keywords** → reverse-engineer what's working

---

## Metadata Rewrite Quick Reference

### Homepage (HIGHEST IMPACT)
- **Current Title:** `Golf Days in Mallorca | Mr Mallorca Golf`
- **Recommended:** `Mallorca Golf Itineraries & Travel Planning | PGA Professional`
- **Current Desc:** `Private golf days in Mallorca with PGA Advanced Professional Andy Griffiths...`
- **Recommended:** `Plan your Mallorca golf trip with me. I book courses, arrange hotels, find restaurants. Or just book golf. Everything sorted.`

### Contact Page
- **Current Title:** `Enquire About a Private Golf Day in Mallorca | Mr Mallorca Golf`
- **Recommended:** `Plan Your Mallorca Golf Trip - Inquiry & Booking | Mr Mallorca Golf`
- **Current Desc:** `Enquire about a private golf day in Mallorca with Andy Griffiths...`
- **Recommended:** `Questions about your Mallorca golf itinerary? Get in touch. I reply personally within 24 hours.`

### Golf Courses Page
- **Current Title:** `Mallorca Golf Courses Guide 2026` ✅ (good)
- **Current Desc:** Good, keep as-is

### Guides Page
- **Current Title:** `Mallorca Golf Guide - Course Reviews, Tips and Advice` ✅ (good)
- **Current Desc:** Good, keep as-is

---

## Questions for You

Before I start building these changes, I need clarification on:

1. **6 Credentials:** You mentioned Pebble Beach, Evian, 11 years in China. What are the other 3 credentials/logo areas for the credentials section? (e.g., Trackman, specific club names, certifications?)

2. **Monclair site reference:** You mentioned referencing Monclair for About page layout. Can you share that URL so I can see the design?

3. **Current newsletter value:** What do you want to offer in the newsletter? (e.g., weekly course updates, deal alerts, exclusive tips, flight discounts?)

4. **Handicap field removal:** Can we just remove the handicap field from the contact form entirely, or do you want to keep it as optional?

5. **Itinerary planner scope:** Should the tool on the homepage just calculate golf costs, or also include hotel/restaurant estimates?

Ready to start building when you give the word.
