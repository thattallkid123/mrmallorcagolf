---
name: localize-check
description: Verification pass for any copy change on locale pages or shared content across the 7 languages (EN/DE/ES/FR/NL/SV/ZH) — shared components the text flows through, zh-specific rules, hidden metadata, and the release checks. Use after editing any locale-facing text, translations, or Chinese pages.
---

# Locale Text-Change Verification

English is master — never add localized content that doesn't exist in English, and never modify English master copy when only fixing a language page.

## 1. Structure rule (no English-only gaps)

If you added a new key to shared content used across locales, add it for **de/es/fr/nl/sv/zh in the same edit** or provide an explicit getter fallback. Locale content files typically hold all 7 locales in one file (e.g. `homepage-content.js`) — edit them together.

## 2. Shared components the copy flows through

Changed copy rarely lives on one page. Check:

- Contact page cards, success CTA, floating contact button, mobile CTAs
- Page-level CTA labels used by Plan Your Trip, Play With A Pro, Signature Day
- FAQ copy — styling is shared globally; if FAQ text changed, inspect the rendered accordion on mobile AND desktop (borders, spacing, open-state)

## 3. Chinese-specific rules

- Contact handling uses **WeChat language and anchors, not English WhatsApp wording**. WeChat ID: `andygriffiths1`.
- Visible service labels localize too: Play With A Pro, Plan Your Trip, Signature Day, A Day With Andy read as Chinese-facing names on zh pages unless an English brand name is genuinely required.
- zh pages are localized for the Chinese audience, not literal translations — but factual claims must match the verified English sources (`about-content.js`, `contact-content.js`, `homepage-content.js`).
- GA4 is excluded on `/zh` routes — never add it there.

## 4. Hidden metadata (leaks hide here)

Check visible text AND: breadcrumb JSON-LD, og/twitter tags, alt text, CTA labels, meta descriptions. A page body can look translated while metadata still leaks English.

## 5. Run the checks

```
npm run check:i18n-release     # always, after any locale-facing edit
npm run check:locale-leaks     # if zh content changed
npm run check:locale-parity    # if structure/routes changed
npm run build
```

## 6. Rendered zh sweep (one pass, before declaring done)

If Chinese content changed, open and scan: `/zh`, `/zh/contact`, `/zh/play-with-a-pro`, `/zh/plan-your-trip`, `/zh/signature-day` — look for remaining English copy or mixed-language CTA labels.

Then ship via the `ship` skill.
