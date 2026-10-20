---
name: email-newsletter
description: Maintain MMG's single confirmed planning-notes audience, welcome and occasional campaigns. Read the existing Drive workflow and draft file before account changes or writing an issue.
---

# Email & Newsletter Workflow

## Read the single working guide

`G:/My Drive/Mr Mallorca Golf/Content/Drafts/MMG planning email drafts.md`

This existing Drive file now holds Andy's short checklist, the full permission/routing/sending procedure, dated checks and both email drafts. Read it in full before newsletter work. Update it in place; do not create a second handbook or copy its dated audience counts into this skill. If Drive access is unavailable, ask for access rather than recreating it from memory.

## Operating guardrails

1. One **Mallorca Golf Planning Notes** audience, one welcome after confirmation, then occasional useful campaigns. Keep the four historical guide nurtures inactive and the old Course Selector sequence paused. Inspect live account state before changes.
2. Requested PDF/tool delivery uses Resend. Newsletter choice is separate and unchecked, with the shared MailerLite double-opt-in route. A customer relationship, request record or legacy active status alone is not recorded newsletter permission. Do not force active status, revive unsubscribes or send a bulk permission-request workaround.
3. Normal service replies and requested advice remain allowed. Do not turn MMG's confirmed-opt-in operating choice into a blanket claim that Spanish law forbids all existing-customer emails; the guide distinguishes LSSI's conditional exception from MailerLite's permission policy.
4. Source group/form IDs and current routing from `src/lib/signup-config.js`, `src/lib/planning-notes-signup.js`, the API consumers and CLAUDE.md's Lead Magnets, Tools, And Newsletter section. The generated Clients **Email audience** tab is an overview, not a send/import list. Result-only tool emails are not universally captured there.
5. Draft privately in the Drive file, use the voice guide/gate, prepare a MailerLite **Regular campaign**, verify the actual rendered email and test receipt, then obtain Andy's instruction for that campaign, audience and send time. A saved draft, programme approval or welcome test is not permission to broadcast. Zero eligible recipients means leave it as a draft.
6. Use the supported API for state reads and the signed-in native editor where needed. Keep credentials local, respect plan limits, and use the existing sync/scheduler. Do not add sequences or audience complexity without a concrete need.

For code changes, also read the repository API safety and ship skills. `.codex/skills/` is the generated mirror; edit this master and run `npm run skills:sync`.
