# Codebase Improvements & Infrastructure (May 30, 2026)

This document outlines infrastructure improvements made to prevent bugs and reduce friction when editing website content.

**2026-08-06 update:** Section 2's `check:content-validation` script was retired (see that section, marked Removed, for why) — the content architecture moved to the English-canonical-plus-locale-overlay pattern (`docs/multilingual-content-architecture.md`) after this doc was written, and the old script was never updated for it, so it had been failing on a false positive (checking for `de:`/`es:` keys directly in `play-with-a-pro-content.js`, which no longer exist there — that content now lives in a separate localized overlay file). Its job is already covered correctly by section 3's `check:locale-parity`, which was wired into `check:content` at the same time. Section 5's "Next Steps" recommendation to wire content-validation into CI is superseded by this — `check:locale-parity` is what's actually in the gate now.

---

## 1. Tier Definitions (Single Source of Truth)

**File:** `src/lib/content/tier-definitions.js`

Instead of tier flags being defined in three separate places (PWAP content, homepage content, offers content), there is now ONE canonical definition.

**What changed:**
- Extracted `TIER_CONFIG` object with all tier flags
- Shared constants: `TIER_CONFIG` and `TIER_NAMES`
- Any tier name or flag change updates everywhere automatically

**Benefit:** One edit to tier structure applies to all content files instantly. No more searching three files to change featured/signature flags.

---

## 2. Content Validation Schema (Removed 2026-08-06)

**Files (deleted):**
- `scripts/validate-content.mjs`
- `scripts/validate-content.js`

See the update note above — retired in favour of `check:locale-parity`, which does the same job correctly against the current content architecture. Original description follows, for historical context only:

Catches structural errors before deploy:
- Missing tier fields
- Wrong tier count (should always be 4)
- Incorrect featured/signature flag patterns
- Missing required sections (hero, day, packages, etc.)

**Run it:**
```bash
npm run check:content-validation
```

**What it validates:**
- play-with-a-pro-content.js tier structure
- homepage-content.js tier structure
- Both files across all 6 languages

**Benefit:** Typos and structural errors are caught at build time, not in the browser.

---

## 3. Locale Parity Checker (Enhanced)

**File:** `scripts/check-locale-parity.js`

Checks all 6 languages have matching tier structure and flags.

**Run it:**
```bash
npm run check:locale-parity
npm run check:locale-parity -- --fix
```

**What changed:**
- Added `--fix` flag to attempt auto-fixes
- Reports which issues can vs. cannot be auto-fixed
- Clearer error messages with language codes

**Benefit:** Catches parity issues before they reach production.

---

## 4. Import Path Aliases

**File:** `jsconfig.json`

Imported aliases so all pages use same import paths:

```javascript
// Before (English pages):
import Button from '../../components/Button'

// Before (Language pages, brittle):
import Button from '../../../components/Button'

// Now (all pages, same path):
import Button from '@components/Button'
```

**Aliases available:**
- `@components/*` → `src/components/*`
- `@lib/*` → `src/lib/*`
- `@app/*` → `src/app/*`
- `@public/*` → `public/*`

**Benefit:** Same import paths work in all language versions. Fewer import path bugs.

---

## 5. Updated npm Scripts

Added to `package.json`:

```json
"check:locale-parity": "node scripts/check-locale-parity.js",
"check:content-validation": "node scripts/validate-content.mjs"
```

**Update your CI/CD:**
Consider adding `check:content-validation` to your `check:content` or `check:ready` script if you want automated checks on every build.

---

## 6. Content Timestamps

**Pattern:** Add date stamps to major content edits for audit trail.

Example (in content files):
```javascript
/**
 * 2026-05-30: Added Plan Your Trip tier to all 6 languages
 * 2026-05-28: Rewrote PWAP day paragraphs to first-person per voice guide
 */
packages: {
  tiers: [ ... ]
}
```

**Benefit:** When debugging old content, you know when it was last touched and why.

---

## 7. File Organization Strategy (Recommended)

Content files are getting large. **Recommended future refactor:**

```
src/lib/content/
├── play-with-a-pro/
│   ├── hero.js (20 lines)
│   ├── day.js (30 lines)
│   ├── tiers.js (100+ lines)
│   ├── who.js (30 lines)
│   ├── testimonials.js (50 lines)
│   └── index.js (imports all, exports PLAY_WITH_A_PRO_CONTENT)
├── homepage/
│   ├── hero.js
│   ├── tiers.js
│   ├── features.js
│   └── index.js
├── tier-definitions.js
├── content-validation.js
└── index.js (exports all)
```

**Why:** 
- Smaller files = easier git diffs
- Clear what each section controls
- Find what you're editing faster
- Multiple people can edit different sections without conflicts

This isn't implemented yet, but the infrastructure is now in place to support it.

---

## 8. Dependency Documentation

Each content file now has comments at top explaining dependencies:

```javascript
/**
 * Dependencies:
 * - offers-content.js: Used for trip planning label and pricing descriptions
 * - tier-definitions.js: Used for tier structure validation
 * - play-with-a-pro-content.js: Contact form offers mirror these tiers
 */
```

**Benefit:** Easier to understand what breaks if you change something.

---

## Risk Assessment

All improvements have **zero production risk:**

- ✅ Validation checks don't deploy; they just report errors
- ✅ Path aliases are natively supported by Next.js
- ✅ Tier definitions are pure data extraction; build output identical
- ✅ Locale parity checks are read-only unless `--fix` is explicitly called
- ✅ Timestamps are just comments

None of these changes affect what users see or how the site runs.

---

## Next Steps

1. **Run validation:** `npm run check:content-validation` to verify no existing issues
2. **Test import aliases:** Edit one page to use `@lib/` and `@components/` imports, verify it works
3. **Check parity:** `npm run check:locale-parity` to verify all 6 languages are consistent
4. **Consider:** Adding validation checks to your pre-deploy script

---

## Summary

| Improvement | File | Purpose |
|---|---|---|
| Tier definitions | `src/lib/content/tier-definitions.js` | Single source of truth for tier flags |
| Parity checker | `scripts/check-locale-parity.js` | Verify 6-language consistency (now wired into `check:content`) |
| Import aliases | `jsconfig.json` | Same paths in all language versions |

All work together to catch errors early and make content editing clearer.

