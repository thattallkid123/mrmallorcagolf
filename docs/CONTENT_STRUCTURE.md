# Content Structure & File Dependencies

## Pricing Source Order

When pricing changes, treat the files in this order:

1. shared website content in `src/lib/`
2. page components and metadata that render that shared content
3. local tools and static apps in `mmg-tools/` and `standalone-apps/`
4. internal docs and audit notes
5. private encyclopaedia/reference notes for known-but-not-public booking paths

The practical source of truth for package and offer values is `src/lib/offers-content.js`. Other files should consume those values, not recreate them.

Santa Ponsa 2 and 3 can be documented in the private reference layer as known pricing with restricted access. That keeps the price available for Andy without implying public bookability.

Historical planning and audit docs may mention prices, but they should point back to the source order above instead of acting like a second source of truth.

## Critical File Map

### `src/lib/offers-content.js`
**Purpose:** Shared offer content across pages, metadata, and form options.

**Key sections:**
- `en.playHeroBody` - PWAP hero body text
- `en.tripPlanningContactLabel` - Contact form option for trip planning
- `en.offers` - Individual offer definitions

**Rule:** keep the pricing facts here and let the page files consume them.

### `src/lib/play-with-a-pro-content.js`
**Purpose:** Controls the Play With A Pro page (`/play-with-a-pro`)

**Key sections:**
- `en.hero` - PWAP hero section
- `en.day` - What the day looks like
- `en.included` - Included services
- `en.who` - Who this is for
- `en.testimonials` - Client testimonials
- `en.packages.tiers` - page layout for the pricing section
- `en.finalCta` - end page CTA

### `src/lib/homepage-content.js`
**Purpose:** Homepage content including packages/pricing section

**Key sections:**
- `en.packages.tiers` - homepage pricing section
- `en.packages.multiDay` - Trip planning CTA
- `en.credentials` - Andy's credentials section
- `en.quote`, `en.winners`, `en.faq` - Other homepage sections

**Important:** Homepage pricing should stay aligned with `offers-content.js`. Do not hardcode a second copy of the same offer facts here.

### `src/lib/contact-content.js`
**Purpose:** Contact/enquiry form content

**Key sections:**
- `en.form.experiences` - radio button options derived from `offers-content.js`
- `en.whatNext` - "What happens next" section
- `en.form.labels`, `en.form.placeholders` - form field labels

### Dependency Relationships

```text
Homepage
|-- homepage-content.js (packages.tiers)
`-- offers-content.js (shared offer definitions)

Play With A Pro Page
`-- play-with-a-pro-content.js (packages.tiers)

Contact Form
|-- contact-content.js (form.experiences derived from offers-content.js)
`-- offers-content.js (offer labels and contact option labels)
```

## When to Edit Each File

### Edit `play-with-a-pro-content.js` when:
- updating PWAP page wording
- changing day paragraphs or quote
- changing who the day is for
- updating testimonials
- changing final CTA text

### Edit `homepage-content.js` when:
- updating homepage pricing/packages section
- changing credentials section
- updating FAQs or other homepage sections

### Edit `offers-content.js` when:
- updating shared offer definitions
- changing contact form labels that come from the shared offer set
- changing cross-page pricing facts or shared offer prose

### Edit `contact-content.js` when:
- updating contact form labels or placeholders
- changing what happens next section
- changing form layout or help text

## Translation Requirements

Keep translated content aligned across all supported languages when editing shared copy.

## Common Mistakes to Avoid

- editing PWAP page content in `homepage-content.js` instead of `play-with-a-pro-content.js`
- changing pricing facts in one consumer file without updating `offers-content.js`
- adding a second markdown handover instead of updating the existing master file
- translating only English without updating the other languages
- forgetting that contact option labels are derived from the shared offer library
- using the wrong file for offer definitions instead of the shared source
