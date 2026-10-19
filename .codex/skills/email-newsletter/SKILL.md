---
name: email-newsletter
description: Maintain MMG's single confirmed planning-notes audience, one welcome email and occasional useful broadcasts. Covers MailerLite routing, consent records, copy and launch checks.
---

# Email & Newsletter Workflow

## Agreed programme

Verified 19 October 2026: the single welcome is active, its test was received in Andy's inbox, the shared form retains double opt-in, and all five historical sequences are inactive. Recheck the live account before future operational changes. The first planning-note broadcast remains an unsent draft.

- One marketing audience: **Mallorca Golf Planning Notes**. Send one welcome after email confirmation, then occasional useful planning notes when there is something worth sharing. No fixed weekly commitment, guide-specific nurture branches, re-engagement drips or automatic post-enquiry marketing.
- Requested PDFs and tool results are delivered immediately through **Resend**, independently of marketing. Keep the newsletter option separate and unchecked. A download, enquiry, booking or existing customer relationship is not recorded newsletter permission.
- All explicit marketing opt-ins use the shared MailerLite double-opt-in form. Never force `active`, bypass confirmation or re-enrol an unsubscribed address.
- Keep legacy guide/source groups for history. The four old guide nurtures are archived/inactive and Course Selector Welcome Sequence is paused. Do not reactivate them or migrate their contacts without permission evidence and Andy's instruction.
- Do not add old clients to campaigns or send a bulk permission-request email as a workaround. Normal requested booking/coaching correspondence remains a separate service workflow.

## Routing and operating sources

- `src/lib/signup-config.js` defines the canonical group and shared form/action. `src/lib/planning-notes-signup.js` provides `requestPlanningNotes` for server routes. Use these authorities rather than copying IDs into more documents.
- Shared form: **Mallorca Golf Planning Notes**, formerly Course Selector Results. `signup_source` records the originating guide/tool. The reserved `source` key is not a custom field.
- Optional signup is wired through `lead-magnet-signup`, `send-itinerary`, `handicap-checker-submit` and `trip-quote-submit`, plus the explicit signup forms. Do not also submit a second request from the browser.
- PDF-only request records remain separate from marketing. New request contacts are unconfirmed; preserve existing status, especially unsubscribe/bounce exclusions. Read the current lead-magnet route and CLAUDE.md's Lead Magnets, Tools, And Newsletter section for delivery, notifications and guide placement.
- MailerLite workflow **Mallorca Golf Planning Notes - Welcome** is the sole marketing welcome. Verify its trigger targets only the canonical planning-notes group, contains exactly one complete email, and does not bulk-enrol historical contacts when activated.
- The Clients master spreadsheet's generated **Email audience** tab combines client/enquiry addresses and MailerLite records without importing or subscribing anyone. People is the client source; MailerLite is the subscription/unsubscribe source. Blank permission stays not recorded; active status in a legacy PDF group alone is not newsletter permission.
- `mmg-tools/scripts/email-audience-sync.py` refreshes that view after the existing hourly Clients Sync. The PC must be running. Edit the underlying source, not the generated tab.

## Drafts and copy

- Canonical private drafts: `G:/My Drive/Mr Mallorca Golf/Content/Drafts/MMG planning email drafts.md`. Keep public code and private contacts/drafts separate.
- The welcome introduces Andy, offers a practical planning tip, links to the tools/PDFs and invites a reply. Generic subscribers must not be promised a personalised shortlist they have not requested.
- The first planning note is a draft until Andy approves its actual audience and send. Do not treat a saved draft, workflow test or programme approval as approval to send a broadcast.
- Read the current Drive `MMG_BRAND_VOICE_GUIDELINES.md` and run the voice gate. Preserve Andy's meaning and tone; keep Play With A Pro and its coaching/course-management context clear alongside tee-time booking.
- Give one useful course insight or planning point and a clear next step. Length follows useful content, not a rigid word count or compulsory partnership mention. Do not invent personal experience, discounts, urgency or guaranteed best rates. No em dashes.
- Verify prices, access rules and venue details against current authorities before using them. Distinguish budget references from bookable quotes.

## Design and sending

- Website/delivery-email pairing: Cormorant Garamond headings and Jost body, with Georgia and Arial fallbacks. When MailerLite's native editor cannot supply those custom fonts, use the deliberate Georgia/Arial pairing. Check the actual generated email, not just a separately styled mock-up.
- Keep readable contrast, clear spacing, descriptive links and consistent label/detail layouts on desktop and mobile. Preserve the configured business-address footer and working unsubscribe link; remove generic language suggesting a purchase means newsletter signup.
- Prepare a draft, check rendered desktop/mobile output and links, and send a test to Andy. Verify receipt and content before calling delivery tested. MailerLite test messages disable unsubscribe/preference links; verify their configured destinations separately.
- Before activating, read the confirmation dialog: future confirmed subscribers only; no historical bulk enrollment. Verify enabled state, one email and the correct trigger afterward. Keep the old workflows inactive.
- Before a broadcast, confirm the actual permissioned audience and Andy's send instruction. Exclude unsubscribed, bounced and junk contacts regardless of other memberships.
- Review replies, clicks and unsubscribes after real sends. Use small-list results cautiously; add complexity only when actual audience needs justify it.
