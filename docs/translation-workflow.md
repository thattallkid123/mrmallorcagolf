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
- `src/lib/guide-post-content-localized.js` (assembler; per-guide overlays live in `src/lib/guide-post-content-localized/<slug>.js`)

### Shared renderers

- `src/app/(en)/guides/GuideArticleView.jsx`
- `src/app/(en)/guides/GuidePostView.jsx`
- `src/app/(en)/golf-courses/GolfCoursesClient.jsx`
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

## Style Guide

Before writing or proofreading any translation, read `docs/translation-style-guide.md`: register per language, golf vocabulary, and the mistakes review has actually found, with fixes. When a review finds a new kind of mistake, add it there, and if a pattern can catch it, add a rule to `scripts/translation-mistakes.json` so `check:translation-mistakes` fails on it from then on.

## Review Log

Which model wrote or read each body of translated copy, how deeply, and what is still open. Add a row whenever translations are written or proofread. "Read in full" means every string was read against the English; "sample" means a spot check. Nothing below has been read by a native speaker.

| Date | Surface | Written by | Read by | Depth | Commits | Notes |
|---|---|---|---|---|---|---|
| 2026-10-02 to 04 | All pages re-aligned to the current English; register, accents, terminology | Sonnet 5.5 | Sonnet 5.5 | Read in full | 588b996f, 8a861644, 1f9d8f0b, 43b80ded, 0e960552, 1ca5f17a, 2c15bd2f, fcfe8bc9 | The big audit. Opus sample 2026-10-10 (about 35 shown strings, all six languages): good quality, two systematic slips fixed (below). |
| 2026-10-02 to 04 | Tools (hotel recommender, course selector, day builder, green-fees verdicts) | Sonnet 5.5 | Sonnet 5.5, then Opus 5.5 | Read in full, 10% sample; Opus sample 2026-10-10 (160 hotel and day-builder strings) | 23b945ec, e7652f01, a2c054a3, 2dfc845f, this commit | Good quality: about 22 fixes, none of meaning ("golf base" calques in nl/sv, stiff phrasing). Course selector and green-fees text not sampled. Emails sent by the tools are still English. |
| 2026-10-04 | Course reviews | Sonnet 5.5 | Sonnet 5.5, then Opus 5.5 | Full proofread; Opus sample 2026-10-10 (291 strings, 1 in 6 of the longer strings in 10 reviews, all six languages) | 14fdeb09, f80c4050, this commit | About 100 fixes. Meaning errors: the Son Gual intro carried an old English line in all six languages ("why Obama and Nadal keep coming back"); Santa Ponsa 1 had "mid-morning" as late morning (de, nl) and lost its prices in five search descriptions, as did T Golf Palma in four; a French sentence said the course was "abandoned". Rest: idioms and stiff phrasing. Fix rate about 1 in 4 strings, so another sample is due after the next review edit. |
| 2026-10-05 | Son Vida review | Sonnet 5.5 | Opus 5.5 | Read in full 2026-10-10 | e855ab94, this commit | 37 fixes, mostly naturalness ("greens were very pure", halfway hut, Swedish time format and tee forms). No meaning errors. |
| 2026-10-09 | Four new guides (near Palma, southwest, higher handicappers, practice facilities) and the where-to-stay guide | Sonnet 5.5 | Opus 5.5 | Read in full 2026-10-10 | b10f493e, ef36c246, this commit | About 200 fixes. One real meaning error in four languages ("by mid-morning" became "until late morning" in de/nl/sv/zh); the rest calques ("Basis", "schmeichelt Ihnen", 自动驾驶, "Conforma tu par") and stiff phrasing. The guides hub card text from b310d11a was not part of this read. |
| 2026-10-09 | Homepage three services, Plan Your Trip whole-trip level and Trip Ideas, contact "Plan the whole trip" option | Opus 5.5 | Opus 5.5 | Read in full 2026-10-10 | 235d0087, 128efe13, 5b8064c8 | One Spanish phrase and the Sóller train name (de, nl) tidied on re-read. |
| 2026-10-09 to 10 | Contact form fields (group sizes, courses, hotel help), privacy policy additions (de/es/fr), trip preferences questionnaire (300 rows) | Sonnet 5.5 | Opus 5.5 | Read in full 2026-10-10 | 48f8f5c3, 7eabff45, 5b8064c8 | Opus found 135 questionnaire fixes (calques such as "Stadtbasis" / "Base golf" / 据点, room types left half in English, a Swedish ni-slip) and a placeholder that said "you suggest to me" instead of "ask me to suggest" in five languages. |
| 2026-10-10 | Fixes from the Opus sample of the October audit | Opus 5.5 | Opus 5.5 | Targeted | this commit | "Routing" left in English in the Play With A Pro packages (de/es/nl/sv); Swedish "ronder" made "rundor" in 6 places. The same word in a client testimonial on Play With A Pro and its explained page was changed with Andy's approval on 2026-10-10. |
| 2026-10-10 | Older text caught by the first run of `check:translation-mistakes` | Sonnet 5.5 | Opus 5.5 | Targeted | this commit | About 20 repeats of known mistakes outside the pages read today: German "Golfbasis"/"Stadtbasis" in the hotel and day-builder tools, "flatters you" in the Santa Ponsa 1 review (fr/nl/sv), 自动驾驶 in the Son Antem West review, Swedish tee forms in three reviews, "base" keywords on the guides hub card. |

**What the comparison showed.** A Sonnet first draft read in full by Opus needed changes in roughly one string in ten, mostly naturalness rather than meaning, plus the occasional real error in meaning (the reversed placeholder). The October audit, which was itself a proofreading pass, held up much better in the Opus sample. So the risk is highest where Sonnet wrote and checked in the same pass.

**Standard from here.** Any new or changed translation is either written by Opus, or written by another model and then read in full by Opus before it ships; add a row here either way. Open gaps: the course selector and green-fees text, the guides hub card text, and another review sample after the next edits (the 2026-10-10 sample needed a fix in about 1 string in 4). A native read of German and French (the biggest non-English markets) and of the Chinese pages would catch what no model review can.

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
