# Handover Prompt

Use this with Claude Opus or another review model when you want a fresh audit of the site without losing the shared-system context.

## Repo

- `C:\\Users\\andyg\\Desktop\\cursor\\mrmallorca-audit`

## Branches

- `main`
  - the current real multilingual site

- `legacy-live-pre-i18n`
  - the old site before the multilingual rebuild

- `live-i18n-premium`
  - named branch holding the new multilingual premium version

- `i18n-premium-draft`
  - staging branch for future changes

## Context

This site went through a major multilingual rebuild.

Key principles now are:

- English is the shared source of truth
- localized pages should mirror English structure
- shared content files should be edited instead of duplicated locale page files
- mojibake and hidden English fallback are bugs
- shared release checks should be run before publishing
- visible English on non-English pages is a release blocker

## What Is Already Done

- shared architecture for the major page families
- shared renderer system for guide articles and live review posts
- branch cleanup so old and new site versions are clearly named
- premium design pass on typography, spacing, and guide/review media treatment
- multilingual cleanup across the shared content layers
- stricter release checks for text corruption, locale parity, and hidden fallback

## Current Shared Source Files

- `src/lib/homepage-content.js`
- `src/lib/about-content.js`
- `src/lib/coaching-content.js`
- `src/lib/contact-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/guides-content.js`
- `src/lib/guide-article-content.js`
- `src/lib/guide-article-content-localized.js`
- `src/lib/guide-post-content.js`
- `src/lib/guide-post-content-localized.js`
- `src/lib/golf-courses-data.js`
- `src/lib/golf-courses-content.js`
- `src/lib/golf-courses-translations.js`

## Current Shared Renderers

- `src/app/guides/GuideArticleView.jsx`
- `src/app/guides/GuidePostView.jsx`
- `src/app/guides/PostLayout.jsx`
- `src/components/FillImageFrame.jsx`
- `src/styles/globals.css`

## Checks To Respect

- `npm run check:text`
- `npm run check:locale`
- `npm run check:shared-locale`
- `npm run check:locale-leaks`
- `npm run check:guide-locale-leaks`
- `npm run check:i18n-release`
- `npm run check:ready`
- `npm run build`

## What I Want From You

1. Audit the current branch with the assumption that English is the structural source of truth.
2. Identify any remaining risks in shared content, localized content, or guide/review layout parity.
3. Flag anything that could weaken the premium editorial feel of the blogs or main marketing pages.
4. Give me a concise next-step plan that does not reintroduce duplicated locale architecture.

## Priority

Optimize for:

- safest future workflow
- fewer duplicated page files
- preserving premium design feel
- keeping English as the source of truth
- making future blog uploads and translation passes easy to repeat
