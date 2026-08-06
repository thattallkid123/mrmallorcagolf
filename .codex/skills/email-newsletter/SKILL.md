---
name: email-newsletter
description: Build and schedule newsletter content — monthly Mallorca golf planning notes, email sequences, and opt-in management. Use when Andy wants to launch a new email programme, draft a newsletter, or wire up MailerLite automation for a new lead magnet.
---

# Email & Newsletter Workflow

## Starting a New Newsletter Program

Before drafting: clarify the strategy with Andy.

- **Audience:** Who is this for? (subscribers, Course Selector leads, Play With A Pro booking leads, general?)
- **Frequency:** Monthly? Weekly? Triggered by guide publish?
- **Tone:** Same as blog (first-hand, practical, honest) or softer/lighter?
- **CTA:** Soft (reply with questions), medium (book a session), or hard (affiliate link)?
- **Content pillars:** What three things appear in every issue? (e.g., one course note + one planning tip + one local knowledge tidbit)

## Newsletter Content Standards

Every newsletter issue:
- **Opener:** Personal, specific to this month/season (not generic Mallorca tourism)
- **One course insight:** Price change, access rule update, tip for first-timers, or new review published
- **One practical planning tip:** Handicap certificate logistics, best time to visit for weather, golf-specific travel hacks, etc.
- **One brand/partnership mention:** TaylorMade video content, hotel exclusive day, affiliate course discount, etc.
- **Closing:** Soft CTA (reply with a question, share your experience, let me know your plans)
- **Unsubscribe footer:** Required by CAN-SPAM and GDPR

**Word target:** 200–300 words. Scannable on mobile. One short paragraph per section.

## Building a New Lead Magnet Email Sequence

1. **Landing page:** `/[slug]` with opt-in form
2. **Trigger email:** Immediate Resend delivery (no MailerLite delay) with the promised PDF/tool result
3. **Nurture sequence:** MailerLite automation starts 1–2 days after opt-in (let the trigger email land first, then nurture follow)
4. **Tracking:** Add `selector_answers`, `selector_shortlist`, `selector_shortlist_names` variables to MailerLite so emails use real data, not placeholders

Example: Course Selector sends results → immediate email with shortlist → 2 days later, MailerLite emails about booking/handicap/weather for those courses.

## Existing Integrations (Live as of June 2026)

- **Resend:** Immediate delivery for website-side lead magnet emails (no delay)
- **MailerLite:** Nurture sequences, automation, group management, broadcast emails
- **Google Forms / opt-in:** Course Selector, PWAP booking enquiry, other tools
- **Variables in emails:** Course names, shortlist, answers (wired up per tool)
- **Unsubscribe tracking:** Syncs back to MailerLite so bounces don't re-mail

## Process: Drafting a Newsletter Issue

1. **Brainstorm the angle:** What's happening this month? (season change, new guide, price update, user question)
2. **Draft the four sections** (opener + course + tip + brand + CTA) — 200–300 words total
3. **Self-check:** Does it sound like Andy (first-hand, honest, specific)? Would you forward it to a friend?
4. **Wire up in MailerLite:** Create a broadcast or automation email
5. **Test send:** Check rendering on mobile + desktop. Check unsubscribe link.
6. **Schedule:** Confirm send time (early morning, Tuesday–Thursday are typical peaks)
7. **Track opens/clicks:** After send, monitor in MailerLite and feed insights back to GA4 (if applicable)

## When to Nurture vs. Broadcast

- **Broadcast:** Monthly newsletter (one-off send to all subscribers)
- **Nurture:** Triggered by an action (opt-in → immediate email, Course Selector results → shortlist email, PWAP enquiry → confirmation + next steps)
- **Nurture timing:** 0–2 hours (immediate follow-up on high-intent actions), 1–3 days (soft follow-up), 1 week (re-engagement)

## Course Selector Email Example

User completes quiz → results shown on site → immediate Resend email with shortlist → 2 days later, MailerLite email "3 Things About [Course A]" → 5 days later, "Ready to book? Here's how"

## Copywriting Rules

Same as blog: read `MMG_BRAND_VOICE_GUIDELINES.md` from Drive. Newsletter is email, not a sales page — tone is advisory, not pushy.

- No filler ("don't miss out", "limited time", "exclusive")
- Specific facts (prices, handicap rules, drive times) not hype
- One honest negative or caveat per email (maintains trust)
- Short sentences. Scannable bullets. Mobile-first formatting.
- Sign off with Andy's name + course/location context (e.g., "—Andy, Mallorca 2026")

## Unsubscribe & Compliance

- **CAN-SPAM (US):** Must include physical address, unsubscribe link, subject line accuracy
- **GDPR (EU/UK):** Must have consent, easy unsubscribe, data retention policy
- **MailerLite:** Handles both. Unsubscribe syncs back automatically.

If someone unsubscribes from a sequence, they stay subscribed to broadcasts unless they also unsubscribe from those.

## Next Steps

When ready to launch a programme:
1. Decide: broadcast vs. sequence vs. both
2. Draft: 2–3 issues/emails as samples
3. Wire: MailerLite automation + Resend template if needed
4. Test: Send to Andy first, check rendering
5. Schedule: Go live
6. Monitor: Track opens, clicks, unsubscribes. Adjust tone/frequency if needed.
