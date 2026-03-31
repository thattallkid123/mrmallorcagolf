# Handover Prompt

Use this with Claude Opus or another review model to get a clean audit before continuing implementation.

## Repo

- `C:\\Users\\andyg\\Downloads\\mrmallorcagolf-nextjs\\mrmallorcagolf`

## Branch

- `i18n-premium-draft`

## Context

This project started with major SEO, sitemap, canonical, hreflang, multilingual content, encoding, and form-flow issues.
Those technical fixes have already been completed.

The current branch is a safe draft branch and is not live.

English is now the shared master source for the main site and guide/blog system.

## What is already done

- SEO cleanup:
  - sitemap
  - robots
  - canonicals
  - host unification to non-`www`
  - draft-guide noindex handling
- Form and questionnaire fixes:
  - enquiry form works
  - questionnaire works
  - both tested live previously
- Performance and technical cleanup:
  - static rendering restored
  - fonts moved to `next/font`
  - image compression and some `next/image` adoption
  - analytics banner removed again
- Shared English content architecture:
  - homepage
  - about
  - contact
  - coaching
  - play-with-a-pro
  - guides index
  - all English guide/blog posts
  - golf-courses English wrapper/content cleanup
- Shared guides rollout:
  - guides index shared across all locales
  - live guide-review shared renderer in place for:
    - `en`
    - `de`
    - `es`
    - `fr`

## What is still unfinished

- Remaining shared live guide-review rollout for:
  - `nl`
  - `sv`
  - `zh`
- Non-English shared rollout for:
  - homepage
  - about
  - contact
  - coaching
  - play-with-a-pro
  - golf-courses
- Final premium design / mobile / readability / CTA polish review on the draft branch

## What I want from you

1. Audit the current draft branch architecture and tell me if the shared-content direction is correct.
2. Identify the most important remaining release blockers.
3. Identify any hidden risks before rolling non-English pages onto the shared system.
4. Review the code/design structure for anything obviously likely to regress during rollout.
5. Produce a concise next-step plan that I can give back to Codex.

## Priority

Optimize for:

- safest rollout path
- fewer duplicated page files
- preserving SEO and routes
- preserving premium design feel
- making English the source of truth for future translation work
