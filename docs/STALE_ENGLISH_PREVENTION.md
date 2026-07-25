# Stale English Prevention Guide

**Goal:** Ensure Spanish/German/French/Dutch/Swedish/Chinese pages have NO hardcoded English text visible to users.

---

## Quick Audit Checklist

Before committing localized content changes, run:

```bash
# Find hardcoded English in component render paths
grep -n "Read the\|Where to\|Use the\|Play with\|Green fee" src/app/*/plan-your-trip/PlanYourTripView.jsx

# Verify all localization keys exist in all 7 locales
grep "readGuideLabel\|hotelEyebrow" src/lib/plan-your-trip-content.js src/lib/plan-your-trip-content-localized.js

# Check for English in async callbacks (error messages, feedback text)
grep -n "\.then(\|\.catch(" src/app/*/play-with-a-pro/*.jsx | grep -v "I18N\|rt('"
```

---

## What Creates Stale English

### 1. **Hardcoded English in JSX Components**

❌ **WRONG — visible on /es/ and /de/ pages:**
```jsx
<Link href={day.guide}>
  Read the {day.course} guide  {/* This is English on all locales */}
</Link>
```

✅ **CORRECT — uses translation system:**
```jsx
<Link href={day.guide}>
  {content.sampleItinerary.readGuideLabel}  {/* Localized per language */}
</Link>
```

### 2. **Hardcoded English in Content Objects (Missing Translations)**

❌ **WRONG — English key exists but no ES/DE translation:**
```javascript
export const PLAN_YOUR_TRIP_CONTENT = {
  en: {
    sampleItinerary: {
      readGuideLabel: "Read the guide"
    }
  }
  // Missing in plan-your-trip-content-localized.js!
}
```

✅ **CORRECT — all 7 locales defined:**
```javascript
// plan-your-trip-content.js (EN)
sampleItinerary: { readGuideLabel: "Read the guide" }

// plan-your-trip-content-localized.js (ES/DE/FR/NL/SV/ZH)
sampleItinerary: { readGuideLabel: "Leer la guía" }  // ES
sampleItinerary: { readGuideLabel: "Lesen Sie den Ratgeber" }  // DE
```

### 3. **English Text in Async Callbacks (Error Messages, Success States)**

❌ **WRONG — user sees English error on /de/ page:**
```javascript
.catch(error => {
  alert('Error loading courses');  // English on all languages
})
```

✅ **CORRECT — uses content keys:**
```javascript
.catch(error => {
  alert(rt('error_loading_courses'));  // Localized message
})
```

---

## Files That Often Hide Stale English

### High-Risk Zones

| File | Risk | Example |
|------|------|---------|
| `PlanYourTripView.jsx` | String literals in JSX | "Read the guide" on line 129 |
| `PlayWithAProView.jsx` | Hardcoded CTA labels | "Enquire" button text |
| Content merges | Missing locale overlays | Adding `newKey` to EN but not ES/DE |
| Form error handlers | Callback text | `.catch()` alert messages |

### Safe Zones (Autotranslated)

| Tool | Why Safe |
|------|----------|
| PageMetadata | Uses `buildPageMetadata()` which auto-generates twitter/OG |
| Route names | Just `/es/`, `/de/` — no user-visible text |
| Variable/function names | Internal code, never displayed |

---

## The Test: View the Live Page

**Before merge:** Check the actual rendered page in Spanish/German.

```bash
# English ✓
https://www.mrmallorcagolf.com/plan-your-trip
# Should say "Read the guide" in English

# Spanish — should say "Leer la guía"
https://www.mrmallorcagolf.com/es/plan-your-trip
# If you see "Read the guide" → STALE ENGLISH BUG

# German — should say "Lesen Sie den Ratgeber"  
https://www.mrmallorcagolf.com/de/plan-your-trip
# If you see "Read the guide" → STALE ENGLISH BUG
```

---

## Workflow: Adding a New Localized String

### Step 1: Add to English Master
File: `src/lib/plan-your-trip-content.js`
```javascript
sampleItinerary: {
  readGuideLabel: "Read the guide",    // ← NEW
  summary: "Five courses...",
}
```

### Step 2: Add to ALL Locale Overlays
File: `src/lib/plan-your-trip-content-localized.js`
```javascript
// Spanish
sampleItinerary: {
  readGuideLabel: "Leer la guía"    // ← MUST ADD
}

// German  
sampleItinerary: {
  readGuideLabel: "Lesen Sie den Ratgeber"    // ← MUST ADD
}

// French
sampleItinerary: {
  readGuideLabel: "Lire le guide"    // ← MUST ADD
}

// Dutch, Swedish, Chinese also required
```

### Step 3: Update Component
File: `src/app/(en)/plan-your-trip/PlanYourTripView.jsx`
```javascript
<Link href={day.guide}>
  {content.sampleItinerary.readGuideLabel}  // ← USE THE KEY
</Link>
```

### Step 4: Test All Languages
```bash
# EN at https://www.mrmallorcagolf.com/plan-your-trip
# ES at https://www.mrmallorcagolf.com/es/plan-your-trip
# DE at https://www.mrmallorcagolf.com/de/plan-your-trip
# ... etc for all 7
```

### Step 5: Commit & Run Checks
```bash
npm run check:locale-parity  # Verifies all 7 have identical structure
git push
```

---

## Merge Gate Checklist

Before approving a PR that touches localized pages:

- [ ] **No hardcoded English in JSX render paths** — use content keys instead
- [ ] **All new keys in EN are present in ES/DE/FR/NL/SV/ZH** — run `npm run check:locale-parity`
- [ ] **Spanish page renders correctly** — visit `/es/` version and read for English
- [ ] **German page renders correctly** — visit `/de/` version and read for English  
- [ ] **All 7 languages listed in content merge** — check `mergeLocalizedContent()` call
- [ ] **No mojibake** — accents display correctly (Calvià ✓, Pollença ✓)

---

## Root Causes of Past Stale English

| Incident | Root Cause | Prevention |
|----------|-----------|-----------|
| "Read the guide" on /es/ | Hardcoded in JSX | Always use `content.key` for user text |
| Missing locale translation | Added EN key, forgot ES/DE | Update content in BOTH files at once |
| Async error message in English | `.catch()` alert() instead of `rt()` | Use translation function in callbacks |
| Accents broken (mojibake) | Copy-paste encoding lost UTF-8 | Keep all content in `.js` files, not HTML strings |

---

## Questions?

- **Why 7 locales?** EN (master) + DE, ES, FR, NL, SV, ZH (overlay each)
- **Why `content.sampleItinerary.readGuideLabel` not just `rt('readGuideLabel')`?** Content objects keep all page copy in one place; easier to edit and review
- **Do all pages need localization?** No — only user-facing pages (plan-your-trip, play-with-a-pro, contact, golf-courses, guides, about)
