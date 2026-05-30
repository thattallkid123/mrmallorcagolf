# Content Structure & File Dependencies

## Critical File Map

### `src/lib/play-with-a-pro-content.js`
**Purpose:** Controls the Play With A Pro page (`/play-with-a-pro`)

**Key sections:**
- `en.hero` - PWAP hero section (title, body, CTA)
- `en.day` - What the day looks like (paragraphs, quote)
- `en.included` - Included services (4 items as of latest edits)
- `en.who` - Who this is for (3 cards)
- `en.testimonials` - Client testimonials
- **`en.packages.tiers`** ⭐ **CRITICAL:** 4-tier pricing structure
  - Solo (featured: false)
  - Group (featured: true)
  - Signature Day (signature: true)
  - Plan Your Trip (featured: false)
- `en.finalCta` - End page CTA

**Repeated for:** DE, ES, FR, NL, SV, ZH (all must have identical tier structure)

### `src/lib/offers-content.js`
**Purpose:** Shared offer content across pages (homepage, contact form, etc.)

**Key sections:**
- `en.playHeroBody` - PWAP hero body text (can differ from play-with-a-pro-content.js hero.body)
- `en.tripPlanningContactLabel` - Contact form option for trip planning
- `en.offers` - Individual offer definitions (Solo, Group, Premium/Signature)

**⚠️ WARNING:** This file has some offer data but PWAP page uses play-with-a-pro-content.js. Don't rely on offers-content.js for PWAP tier definitions.

### `src/lib/homepage-content.js`
**Purpose:** Homepage content including packages/pricing section

**Key sections:**
- `en.packages.tiers` ⭐ **SEPARATE from PWAP tiers** — has its own 4-tier array with same featured flags
- `en.packages.multiDay` - Trip planning CTA
- `en.credentials` - Andy's credentials/credentials section
- `en.quote`, `en.winners`, `en.faq` - Other homepage sections

**⚠️ IMPORTANT:** Homepage tiers are INDEPENDENT of PWAP tiers. They happen to have the same featured flags, but they're in different files. Changing one does NOT automatically update the other.

### `src/lib/contact-content.js`
**Purpose:** Contact/enquiry form content

**Key sections:**
- `en.form.experiences` - Radio button options (includes trip planning, PWAP options)
- `en.whatNext` - "What happens next" section
- `en.form.labels`, `en.form.placeholders` - Form field labels

## Dependency Relationships

```
Homepage
├─ homepage-content.js (packages.tiers)
└─ offers-content.js (shared offer definitions)

Play With A Pro Page
└─ play-with-a-pro-content.js (packages.tiers) ← SEPARATE from homepage!

Contact Form
├─ contact-content.js (form.experiences)
├─ offers-content.js (offer labels)
└─ offers-content.js (tripPlanningContactLabel)
```

## When to Edit Each File

### Edit `play-with-a-pro-content.js` when:
- ✅ Adding/removing features from PWAP tier descriptions
- ✅ Updating day paragraphs or quote
- ✅ Changing who the day is for
- ✅ Updating testimonials
- ✅ Changing final CTA text

### Edit `homepage-content.js` when:
- ✅ Updating homepage pricing/packages section
- ✅ Changing credentials section
- ✅ Updating FAQs or other homepage sections
- ⚠️ **NOT** for PWAP page content

### Edit `offers-content.js` when:
- ✅ Updating offer descriptions shown across multiple pages
- ✅ Changing trip planning label (used in contact form)
- ⚠️ **NOT** the primary source for PWAP tiers

### Edit `contact-content.js` when:
- ✅ Updating contact form labels or placeholders
- ✅ Changing what happens next section
- ✅ Modifying form experience options

## Current Tier Structure (as of latest edits)

### PWAP Page Tiers (play-with-a-pro-content.js)
```
1. Solo
   featured: false
   signature: undefined
   price: €495

2. Group
   featured: true ← GREEN
   signature: undefined
   price: €950

3. Signature Day
   featured: false
   signature: true ← GOLD
   price: €3,000+

4. Plan Your Trip
   featured: false
   signature: undefined
   price: Price on enquiry
```

### Homepage Tiers (homepage-content.js)
```
Same structure as PWAP page (same featured/signature flags)
```

## Translation Requirements

**Both files need translation for all 6 languages:**
- play-with-a-pro-content.js: EN, DE, ES, FR, NL, SV, ZH
- homepage-content.js: EN, DE, ES, FR, NL, SV, ZH
- contact-content.js: EN, DE, ES, FR, NL, SV, ZH
- offers-content.js: EN, DE, ES, FR, NL, SV, ZH

When editing any section, **translate for all 6 languages simultaneously** to maintain parity.

## Common Mistakes to Avoid

❌ Editing PWAP page content in homepage-content.js instead of play-with-a-pro-content.js
❌ Changing featured/signature flags without updating all 6 languages
❌ Adding a 5th tier to one language only
❌ Translating only English without translating other languages
❌ Forgetting to update both PWAP and homepage tier definitions
❌ Using wrong file for offer definitions (offers-content.js vs play-with-a-pro-content.js)
