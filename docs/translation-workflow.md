# Translation And Release Workflow

This is the single source of truth for multilingual site changes in this repo.

Use this file when:

- English copy changes
- a new page or guide is added
- a translated page is edited
- you want to know if the site is actually ready to release

If another doc says something different, this file wins.

## Non-Negotiable Rule

English is the master copy, but release readiness is not “English done plus hope”.

For this site, a release is only ready when:

1. the English source is updated
2. every affected locale source is updated in the same pass
3. the automated release checks pass
4. the production build passes

If visible English survives on a non-English page, the release is not ready.

If you have to manually discover untranslated text by browsing page by page, the workflow has failed.

## Content Model

There are two content systems:

- shared marketing pages where English and locale variants live in the same source file shape
- long-form guide/review pages where English and localized content live in paired files

That means there is no safe “English only” release for translated pages.

## Canonical Files

### Shared page masters

- `src/lib/homepage-content.js`
- `src/lib/about-content.js`
- `src/lib/coaching-content.js`
- `src/lib/contact-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/guides-content.js`
- `src/lib/golf-courses-content.js`
- `src/lib/golf-courses-translations.js`

### Guide/review masters

- `src/lib/guide-article-content.js`
- `src/lib/guide-article-content-localized.js`
- `src/lib/guide-post-content.js`
- `src/lib/guide-post-content-localized.js`

### Shared renderers

- `src/app/guides/GuideArticleView.jsx`
- `src/app/guides/GuidePostView.jsx`
- `src/app/golf-courses/GolfCoursesClient.jsx`
- `src/styles/globals.css`

## Safe Vs Unsafe Changes

Safe:

- English copy in the master content files
- locale copy in the corresponding locale structures
- styling in `globals.css`
- guide/review images and image blocks

Unsafe unless you update all affected locales immediately:

- changing section structure
- renaming keys in shared content
- changing guide block structure
- changing CTA labels in English only
- changing golf-courses card labels, badges, pill text, or UI phrases in English only
- changing repeated shared strings without checking runtime translation maps

If structure changes, locale shape must change in the same pass.

## How To Make English Edits Safely

### Shared pages

If you edit:

- homepage
- about
- contact
- coaching
- play-with-a-pro
- golf-courses

then update the locale content in the same file before release.

### Guide and review pages

If you edit:

- `guide-article-content.js`
- `guide-post-content.js`

then also update:

- `guide-article-content-localized.js`
- `guide-post-content-localized.js`

The guide pages are the area where translation depth drifts fastest if English changes are made casually.

## Required Checks

Run this every time before release:

```powershell
npm run check:ready
```

That command runs:

- text corruption check
- shared locale content check
- English-leak check on resolved locale content
- shared locale fallback check
- guide locale coverage check
- guide/review English-leak check
- image reference check
- course destination check
- locale page file check
- full production build

If `check:ready` fails, do not deploy.

If `check:ready` passes, that should mean:

- no tracked English fallback in shared locale content
- no tracked English fallback in localized guide/review content
- no missing locale content blocks for guides/reviews
- no broken image references or page-file gaps
- no tracked shared-page phrase leaks like English hero labels, CTA text, course pills, region headers, or winners/proof blocks

Localized content that remains visibly English is a release blocker, not a QA note.

## If You Only Want To Sanity-Check Locales

Use:

```powershell
npm run check:i18n-release
```

Useful smaller checks:

```powershell
npm run check:text
npm run check:locale
npm run check:locale-leaks
npm run check:guide-locale-leaks
```

## What The Leak Checks Protect

`scripts/check-locale-english-leaks.js` checks resolved locale output for obvious English leftovers like:

- English hero eyebrows
- English CTA labels
- English golf-courses hero strings
- English region headers
- common leftover phrases like `Proof of work`, `Expert Pick`, `Get in touch`
- repeated golf-course pills and stat strings like `From €95` or `Seve won here in 1990`

This exists because some earlier leaks were not visible to the older locale checks.

`scripts/check-guide-locale-english-leaks.js` does the same job for localized guide/review content, because long-form pages cannot be allowed to silently drift after English edits.

## Practical Editing Checklist

Every time English changes:

1. Identify which master file owns the page.
2. Update English.
3. Update the corresponding locale content immediately.
4. If guides/reviews changed, update localized long-form files too.
5. Run `npm run check:ready`.
6. Review the deployed preview in at least:
   - `/`
   - `/play-with-a-pro`
   - `/golf-courses`
   - one guide article
   - one review post
   - `/de`, `/fr`, `/zh`

## Human Review Still Matters For One Thing

The checks catch structure drift, fallback drift, obvious English leaks, missing locales, and broken references.

They do not guarantee:

- that French reads like a French golfer wrote it
- that Chinese feels native for a Chinese golf client
- that every guide article has equally strong nuance in every language

So the checks protect against accidental untranslated or structurally broken releases. Human review still protects tone quality.

The release standard is:

- the automated checks must catch structural and obvious language drift
- preview review is for quality and presentation polish
- preview review is not the primary tool for finding untranslated copy

## Repo Cleanup

The following one-off migration scripts were removed because they do not affect the running site and only added confusion:

- `scripts/decode-about-locales.js`
- `scripts/fix-homepage-locales.js`
- `scripts/rewrite-about-locales.js`
- `scripts/rewrite-coaching-locales.js`
- `scripts/rewrite-contact-locales.js`
- `scripts/rewrite-play-locales.js`

They were setup leftovers, not part of the real maintenance workflow.

The following old translation prompt/checklist docs were also removed because they duplicated or diluted the real workflow:

- `docs/translation-master-prompt.txt`
- `docs/translation-language-notes.txt`
- `docs/translation-qa-checklist.txt`
- `docs/translation-notes.md`

If future translation guidance is needed, add it to this file rather than creating a competing document.

## Self-Review Standard

That review note you pasted is directionally right.

Use it like this:

- if a copy change only needs content edits, do not refactor code
- if a locale fix only needs one source file, do not touch five
- if a check can catch a class of issue automatically, prefer the check over manual heroics

For this repo, the best version of that principle is:

- keep content in source-of-truth files
- keep renderers shared
- keep checks strict
- avoid one-off scripts unless they solve a repeated problem

## Future Rule For Any New Edit

When English changes, the question is not:

- “Will I remember to check the other languages later?”

The question is:

- “Which locale source files and leak checks does this change touch right now?”

That is the standard this repo should follow from now on.
