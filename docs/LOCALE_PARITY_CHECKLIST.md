# Locale Parity & Translation Boundaries

**Critical:** All 7 languages (EN, DE, ES, FR, NL, SV, ZH) must have identical structure and flag patterns.

## Quick Lookup: Which File Controls What

| Need to edit... | File | Section | Translate? |
|---|---|---|---|
| PWAP page pricing/tiers | `play-with-a-pro-content.js` | `packages.tiers` | ✅ YES (text), ❌ NO (flags) |
| Homepage pricing/tiers | `homepage-content.js` | `packages.tiers` | ✅ YES (text), ❌ NO (flags) |
| Contact form options | `contact-content.js` | `form.experiences` | ✅ YES |
| Offer descriptions | `offers-content.js` | `offers` / `playHeroBody` | ✅ YES |

---

## What CAN be Translated (Safe to Vary per Language)

| Field | File | Example |
|-------|------|---------|
| `eyebrow` | play-with-a-pro-content.js | "Solo" → "Solo", "Gruppe", "Solo" |
| `name` | play-with-a-pro-content.js | "A Day With Andy" → "Ein Tag mit Andy" |
| `note` | play-with-a-pro-content.js | Pricing notes - translate fully |
| `features` | play-with-a-pro-content.js | Each item in array - translate |
| `button` | play-with-a-pro-content.js | "Enquire →" → "Anfragen →" |

---

## What CANNOT be Changed (Structure Only)

**These must be IDENTICAL across ALL 6 languages:**

| Field | Values | Why | Breaks If... |
|-------|--------|-----|---|
| `featured` | `true` \| `false` | Controls green/cream color | Wrong tier colors |
| `signature` | `true` \| `false` | Controls gold styling | Signature Day loses gold |
| Tier count | Always 4 | Page layout depends on it | Missing tiers appear |
| `featured` pattern | Solo: false, Group: true, Sig: false, Plan: false | UI color scheme | Pricing section breaks |
| `href` | `/de/contact`, `/es/contact` | Routes to language page | Links go wrong |

---

## Play With A Pro Page Structure (`play-with-a-pro-content.js`)

**4 tiers (always, in all 6 languages):**

1. Solo — `featured: false`, `signature: undefined`
2. Group — `featured: true` (GREEN)
3. Signature Day — `signature: true`, `featured: false` (GOLD)
4. Plan Your Trip — `featured: false` (CREAM)

---

## Homepage Tiers (`homepage-content.js`)

Homepage has its OWN tier array in `packages.tiers`. Must have identical `featured`/`signature` flags but is a separate file.

**DO NOT mix PWAP tiers with homepage tiers.**

---

## Verification Before Commit

Run `npm run check:locale-parity` (see scripts below) or manually verify:

- [ ] Count tiers in each language (should always be 4)
- [ ] `featured: true` only on Group tier
- [ ] `signature: true` only on Signature Day
- [ ] All 6 languages use same flag values
- [ ] `href` paths correct (e.g., `/de/contact` for German)

---

## Common Mistakes to Avoid

- ❌ Adding/removing a tier in only one language
- ❌ Changing featured flag values without updating all 6 languages
- ❌ Forgetting to add Plan Your Trip tier to new language versions
- ❌ Using wrong `href` path (e.g., `/contact` instead of `/de/contact`)
- ❌ Leaving `signature: true` on non-Signature tiers
- ❌ Translating `featured` or `signature` values (keep them as-is)
- ❌ Editing PWAP page content in `homepage-content.js` by mistake
- ❌ Translating only English without translating other languages
