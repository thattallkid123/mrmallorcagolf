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

- 21 October 2026: Eight short pre-round labels per language (suggested arrival, grouped tee times, trip overview and booking/club contact distinction) were written and reread in full by Opus through the signed-in Claude CLI, then checked against the English by Codex. Existing course answers are unchanged. No native-speaker review claimed.

- 19 October 2026: Arabella rental summary and the two English-PDF link labels on the pre-round page. All six translations were re-read against the 88-word English summary for the driving age, two-person limit, damage responsibility and liability wording. PDF files are explicitly labelled as English. Automated language coverage checked; no native-speaker review claimed.

2026-10-18 email follow-up: Opus wrote and reread every changed day-planner plan-name, tagline, lunch title/description, transfer description and restaurant/transfer handle in DE/ES/FR/NL/SV/ZH. The review preserved named-venue placeholders, first-person planning, all register rules and the distinction between golf only and golf with lunch, without claiming non-golf bookings or availability.

2026-10-17 customer audit: the changed hotel recommender strings in DE/ES/FR/NL/SV/ZH were written and reread in full by Opus through the authenticated Claude CLI. The review corrected property location, star classification, age/family restrictions and unsupported facilities without adding booking promises. English factual patches and existing locale records were supplied together; output was compared by key before application. Stable hotel IDs and unaffected text were retained.


Which model wrote or read each body of translated copy, how deeply, and what is still open. Add a row whenever translations are written or proofread. "Read in full" means every string was read against the English; "sample" means a spot check. Nothing below has been read by a native speaker.

| Date | Surface | Written by | Read by | Depth | Commits | Notes |
|---|---|---|---|---|---|---|
| 2026-10-20 | Client arrival page: about 125 answers and 12 labels per language added or changed since 18 Oct (practice facilities, walking and buggies, early-start notes, getting there, restaurants and links, licence and range lines) | Sonnet 5.5 | Opus 5.5 | Read in full, three Opus readers (de+es, fr+nl, sv+zh) | this commit and the mmg-tools Course Info commits | 46 de, 31 es, 26 fr, 23 nl, 65 sv and 88 zh corrections, all applied. Mostly existing-wording consistency (Startzeit, Jeton, ficha, Swedish time dots, Chinese spacing); real meaning errors: fr "avant tout premier départ", nl "als u dat zorgen baart", zh vermouth as absinthe and pitching as chipping, sv buggies sold rather than rented. Pro shop is "Pro-Shop" / "tienda de golf" in the new strings and "Pro Shop" / "pro shop" in older ones. |
| 2026-10-16 | Changed planner, home and PWAP offer strings; Day Planner PWAP/partner text; calculator assumptions; hotel age label; questionnaire draft notice; privacy additions; guide sidebar and five-day partner wording | Codex | Codex, separate meaning/register pass | Changed strings checked against English in all six locales; automated locale release checks | this commit | PWAP includes on-course play, video and written notes, without a promised warm-up lesson or post-round chat. Partner costs and responsibility agreed before booking. Corrected two remaining Spanish/French buggy ranges to include €55. No native-speaker or second-model review claimed. Tool delivery emails remain English. |
| 2026-10-02 to 04 | All pages re-aligned to the current English; register, accents, terminology | Sonnet 5.5 | Sonnet 5.5 | Read in full | 588b996f, 8a861644, 1f9d8f0b, 43b80ded, 0e960552, 1ca5f17a, 2c15bd2f, fcfe8bc9 | The big audit. Opus sample 2026-10-10 (about 35 shown strings, all six languages): good quality, two systematic slips fixed (below). |
| 2026-10-02 to 04 | Tools (hotel recommender, course selector, day builder, green-fees verdicts) | Sonnet 5.5 | Sonnet 5.5, then Opus 5.5 | Read in full, 10% sample; Opus sample 2026-10-10 (160 hotel and day-builder strings) | 23b945ec, e7652f01, a2c054a3, 2dfc845f, this commit | Good quality: about 22 fixes, none of meaning ("golf base" calques in nl/sv, stiff phrasing). Course selector and green-fees text not sampled. Emails sent by the tools are still English. |
| 2026-10-04 | Course reviews | Sonnet 5.5 | Sonnet 5.5, then Opus 5.5 | Full proofread; Opus sample 2026-10-10 (291 strings, 1 in 6 of the longer strings in 10 reviews, all six languages) | 14fdeb09, f80c4050, this commit | About 100 fixes. Meaning errors: the Son Gual intro carried an old English line in all six languages ("why Obama and Nadal keep coming back"); Santa Ponsa 1 had "mid-morning" as late morning (de, nl) and lost its prices in five search descriptions, as did T Golf Palma in four; a French sentence said the course was "abandoned". Rest: idioms and stiff phrasing. Second Opus sample the same day (326 different strings plus every review title, intro and search description): about 50 fixes. Two more intros carried old English in all six languages (Alcanada, Santa Ponsa 1), the Santa Ponsa 1 tournament sentence was garbled in five languages, Swedish used "avslag" (a refusal) for tee shots. Fix rate about 1 in 7 on the body text, so the next sample can wait for the next edits. |
| 2026-10-05 | Son Vida review | Sonnet 5.5 | Opus 5.5 | Read in full 2026-10-10 | e855ab94, this commit | 37 fixes, mostly naturalness ("greens were very pure", halfway hut, Swedish time format and tee forms). No meaning errors. |
| 2026-10-09 | Four new guides (near Palma, southwest, higher handicappers, practice facilities) and the where-to-stay guide | Sonnet 5.5 | Opus 5.5 | Read in full 2026-10-10 | b10f493e, ef36c246, this commit | About 200 fixes. One real meaning error in four languages ("by mid-morning" became "until late morning" in de/nl/sv/zh); the rest calques ("Basis", "schmeichelt Ihnen", 自动驾驶, "Conforma tu par") and stiff phrasing. The guides hub card text from b310d11a was not part of this read. |
| 2026-10-09 | Homepage three services, Plan Your Trip whole-trip level and Trip Ideas, contact "Plan the whole trip" option | Opus 5.5 | Opus 5.5 | Read in full 2026-10-10 | 235d0087, 128efe13, 5b8064c8 | One Spanish phrase and the Sóller train name (de, nl) tidied on re-read. |
| 2026-10-11 | Homepage Plan Your Trip card, two FAQ answers and closing line; Play With A Pro page group card and Plan Your Trip card; Plan Your Trip route-preview notes; contact form option labels and order; 5-day itinerary guide (arrival tee time, handicap note, driver, Calvià and Son Antem East, rest day and trip-ideas link) | Sonnet 5.5 | Sonnet 5.5 (second pass, 7 fixes), then Opus 5.5 2026-10-12 | Read in full by both | 8c803091, this commit | About 30 strings x 6 languages. Fixed on the second pass: Swedish and Dutch tool names and a missing verb in de and nl, French "plafonnent les hommes", Dutch "shortlist". Also fixed Spanish "tee times" in the contact option and German "Drumherum" in the guide. Opus read: 23 more fixes, one a meaning error (Swedish "vid sidan av" read as "besides"); the rest naturalness (German "Daten" for dates, Spanish vosotros in a tú guide, "ronda" for vuelta, "on the motorway" in nl/sv, zh word order). New kinds added to the style guide. |
| 2026-10-09 to 10 | Contact form fields (group sizes, courses, hotel help), privacy policy additions (de/es/fr), trip preferences questionnaire (300 rows) | Sonnet 5.5 | Opus 5.5 | Read in full 2026-10-10 | 48f8f5c3, 7eabff45, 5b8064c8 | Opus found 135 questionnaire fixes (calques such as "Stadtbasis" / "Base golf" / 据点, room types left half in English, a Swedish ni-slip) and a placeholder that said "you suggest to me" instead of "ask me to suggest" in five languages. |
| 2026-10-10 | Fixes from the Opus sample of the October audit | Opus 5.5 | Opus 5.5 | Targeted | this commit | "Routing" left in English in the Play With A Pro packages (de/es/nl/sv); Swedish "ronder" made "rundor" in 6 places. The same word in a client testimonial on Play With A Pro and its explained page was changed with Andy's approval on 2026-10-10. |
| 2026-10-10 | Older text caught by the first run of `check:translation-mistakes` | Sonnet 5.5 | Opus 5.5 | Targeted | this commit | About 20 repeats of known mistakes outside the pages read today: German "Golfbasis"/"Stadtbasis" in the hotel and day-builder tools, "flatters you" in the Santa Ponsa 1 review (fr/nl/sv), 自动驾驶 in the Son Antem West review, Swedish tee forms in three reviews, "base" keywords on the guides hub card. |
| 2026-10-10 | Eight older guide articles (best courses, costs, best time, club hire, is Mallorca good for golf, trip planning, 5-day itinerary, course map), course selector and green-fees text, guides page cards | Sonnet 5.5 and earlier | Opus 5.5 | Every heading, intro and search description in full; 1 in 5 of the article body; 1 in 4 of the selector and 1 in 3 of the green-fees text; every guides-page card | this commit | About 110 fixes. Visible page headings were SEO stubs on four guides in up to five languages ("Golfreise planen - Essentials"); German trip-planning search title ungrammatical; Dutch club-hire page called it "Golfspelenset verhuur"; Santa Ponsa 1 card intros still carried old English in five languages; Title Case in translated titles; "keep the airport simple" literal in five languages; "Ich arrange" in German. Rules added to check:translation-mistakes (now 85). |
| 2026-10-13 | Plan Your Trip client-proof section (heading, intro, four client quotes: John H., Sam, Mark P., Adam); About "In their words" quote (John H. replaces Mark); Sam and Mark P. quotes on the Play With A Pro carousel made word for word; alt text for the John photos | Sonnet 5.5 | Opus 5.5 | Read in full 2026-10-13 (12 strings x 6 languages) | this commit | About 45 fixes, no reversed meanings. Mostly calques of "brings", "think our way around", "for more" and "resource" (es aporta, de Weg durch die 18 Löcher, nl bron, sv källan, zh), Spanish vuelta over ronda, German in Santa Ponsa 1, Swedish "ronden" to "rundan", Chinese alt text spacing around Latin names. The Spanish Play With A Pro page now mixes vuelta (new strings) with ronda (Jannie, Amanda, Mark McKay): switch those too when that page is next edited. Client quotes keep the reviewer's double exclamation mark. |
| 2026-10-13 | Follow-up to the row above: em dashes removed from all translated client quotes (Jannie, Mark P., John Brazier, Synøve zh; carousel, Plan Your Trip, Explained guide); Spanish "ronda" to "vuelta" on the Play With A Pro page; Chinese alt text spacing; Sam typo fixed in English | Sonnet 5.5 | Sonnet 5.5 | Punctuation and one word swap only, wording otherwise unchanged; no Opus read | this commit | Mechanical edits to text Opus read in full earlier the same day. Chinese "——" also replaced with commas, colons or brackets in these quotes. English quotes keep Jannie's own em dashes. |
| 2026-10-13 | Four client quotes restored to the reviewers' exact words (Jannie carousel and Explained pull-quote, Amanda, John Brazier, Synøve carousel and pull-quote) | Opus 5.5 | Opus 5.5 | Written by Opus; Sonnet checked mechanics only (dashes, ronda, locale sync) | this commit | No dashes in translations, Spanish vuelta, narrator gender avoided in fr/es except Jannie (male). Judgement calls to sample later: "hacking around" (nl rondhakken, sv hacka mig runt, zh 随便乱打), "low 90s", "chap". Spanish John Brazier fragments made full sentences. |
| 2026-10-13 | Light edits under the loosened testimonial rule: Jannie carousel (opener back, own driving-range sentence, comma for the dash), John Brazier (fragments joined), Amanda (punctuation), Jannie pull-quote (comma) | Sonnet 5.5 | Sonnet 5.5 (recombined sentences read earlier by Opus and Sonnet) | No new wording except one French sentence built from Opus phrases; no Opus read | this commit | Jannie carousel translations recomposed from earlier read sentences in all six languages; French third sentence rewritten from the Opus phrasing ("cartes à 90 et quelques"). John and Amanda translations unchanged because the meaning is identical. Worth an Opus sample of the Jannie carousel string in sv and nl. |
| 2026-10-16 to 18 | Client arrival page (www.mrmallorcagolf.com/pre-round): page text, WhatsApp message pieces and 224 course answers, de and es (Sie / usted), then fr, nl, sv and zh | Sonnet 5.5 (de, es first draft; fr, nl, sv, zh each by a separate Sonnet run with this guide) | Opus 5.5, every string, all six languages | Read in full 2026-10-18 (293 strings per language: 224 answers, 62 page labels, 7 message pieces) | this commit | Fixes: de 19, es 30, fr 39, nl 32, sv 34, zh 21 (meaning errors: de 4, es 4, fr 1, nl 6, sv 8, zh 3). Recurring: "before the day" copied word for word, "halfway house" and "fourballs" left as English or football terms, "tailored" as made-to-measure (sv), "licence" for the Spanish federation card (zh, left for Andy), "hire bags" read as hire clubs. Patterns added to the style guide section on the client arrival page. Data lives in mmg-tools (guide/round-ui.json and guide/round-info.i18n.json). Not read by a native speaker. |
| 2026-10-17 | Homepage course-list signpost, zh: remove the inaccurate claim that all 24 courses have already been played and reviewed; keep ongoing playing/reviewing, the named examples and existing links. Existing de/es/fr/nl/sv homepage signposts and all six PWAP pricing translations read against the two shorter English paragraphs; their meaning is unchanged. | Codex | Andy (exact Chinese replacement approved in chat) | Full one-sentence human approval; Andy explicitly waived Opus review for this correction after the installed Opus CLI could not authenticate (expired OAuth session). Opus review was not completed. | this commit | English service openings, order, day narrative, pricing and booking conditions preserved. No blanket locale confirmation: only HOME intro.coursesBlurb/coursesBlurbLink/guideBlurb/guideBlurbLink and PLAY_WITH_A_PRO packages.body were confirmed. |

**What the comparison showed.** A Sonnet first draft read in full by Opus needed changes in roughly one string in ten, mostly naturalness rather than meaning, plus the occasional real error in meaning (the reversed placeholder). The October audit, which was itself a proofreading pass, held up much better in the Opus sample. So the risk is highest where Sonnet wrote and checked in the same pass.

**Standard from here.** Any new or changed translation is either written by Opus, or written by another model and then read in full by Opus before it ships; add a row here either way. Every translated surface has now had at least an Opus sample. Next: a sample after each round of edits (the samples needed a fix in 1 string in 4 to 1 in 7), the Play With A Pro, homepage and other service pages (read in the October audit by Sonnet, sampled by Opus once), and a native read of German and French. A native read of German and French (the biggest non-English markets) and of the Chinese pages would catch what no model review can.

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

<!-- 2026-10-18 customer email feedback: revised lunch reservation wording and specific return steps, all six golf-day locales written by Opus and read in full against English. Full review completed; preview pending Andy approval. -->

<!-- 2026-10-18: Chinese course shortlist closing written by Opus and read in full. Golf booking remains Andy’s responsibility; other trip arrangements are planning advice. Existing WeChat CTA retained; no new supplier promise. Shared email presentation only for other locales. -->
