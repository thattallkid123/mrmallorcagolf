---
name: update-testimonials
description: Add or update client testimonials, the Trustpilot rating badge, and other social-proof copy across all 7 locales. Use ONLY when Andy explicitly asks to add/change a testimonial or update the Trustpilot numbers — never change testimonials on your own initiative.
---

# Testimonials & Social Proof

**Hard rule from CLAUDE.md: do not change testimonials unless Andy explicitly asks.** This skill is for when he does.

## Where testimonials live

| Surface | File | Notes |
|---|---|---|
| Homepage "winners" section | `src/lib/homepage-content.js` | `winners.testimonial` + `attribution` — repeated per locale (all 7 in one file) |
| Play With A Pro page | `src/lib/play-with-a-pro-content.js` | all 7 locales in one file |
| About page | `src/app/(en)/about/AboutView.jsx` | check locale about pages too |
| Subscribe page | `src/app/(en)/subscribe/SubscribeClient.jsx` | |

Before editing, grep `testimonial` across `src/` — surfaces may have been added since this list was written.

## Adding or replacing a testimonial

1. **Get the exact wording from Andy** — real client words, real first name (or initial) for attribution. Never invent, embellish, or "improve" a client quote. Trim only with Andy's approval.
2. Confirm the client is fine with public use (ask Andy — his call).
3. Edit the English master first.
4. **Translate for de/es/fr/nl/sv/zh in the same edit** — no English-only structure gaps. Match the register of the existing translations (see the current Adam testimonial in each locale for tone). For zh, follow the `localize-check` skill rules.
5. Keep factual claims verifiable (competition wins, handicap drops) — if a claim can't be verified, soften it or leave it out.

## Trustpilot badge update

When the rating or review count changes: edit `TP_RATING` and `TP_COUNT` at the top of `src/components/TrustpilotBadge.jsx`. Those two constants drive the badge on every page (contact, footer) and the `aria-label`. Nothing else to touch.

## Verify and ship

- `npm run check:i18n-release` (testimonials are locale-facing shared content)
- `npm run check:content`
- Eyeball the rendered sections — long quotes can break card layouts, especially DE (longest strings) and on mobile
- Ship via the `ship` skill
