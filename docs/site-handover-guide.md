# Site Handover Guide

## Purpose

This is the practical runbook for working on the site from now on.

## Which Repo Is The Real One?

Use this repo as the real active working copy:

- `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real`

Older repo copy:

- `C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf`

That Downloads copy is an older clone and should not be treated as the current source of truth.

If you keep it at all, keep it only as an archive/reference copy.

Use it when you need to:

- add a new blog
- edit existing English copy
- update design
- translate new content
- run release checks
- publish safely

## Current Branch Meaning

- `main`
  - the new live site

- `legacy-live-pre-i18n`
  - the old live site before the multilingual rebuild

- `live-i18n-premium`
  - named branch for the new multilingual premium site

- `i18n-premium-draft`
  - use this as staging/sandbox for ongoing work if you do not want to change `main` directly

## Core Rule

Do not duplicate page files by locale unless there is no other safe option.

The preferred order is:

1. update shared English content
2. update localized shared content
3. let the shared renderer handle the rest

## Important Files

### Shared content

- [homepage-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/homepage-content.js)
- [about-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/about-content.js)
- [coaching-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/coaching-content.js)
- [contact-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/contact-content.js)
- [play-with-a-pro-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/play-with-a-pro-content.js)
- [guides-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guides-content.js)
- [guide-article-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content.js)
- [guide-article-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content-localized.js)
- [guide-post-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content.js)
- [guide-post-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content-localized.js)
- [golf-courses-data.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-data.js)
- [golf-courses-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-content.js)
- [golf-courses-translations.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-translations.js)

### Shared renderers

- [GuideArticleView.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/GuideArticleView.jsx)
- [GuidePostView.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/GuidePostView.jsx)
- [PostLayout.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/PostLayout.jsx)
- [FillImageFrame.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/components/FillImageFrame.jsx)
- [globals.css](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/styles/globals.css)

### Checks

- [check-text-corruption.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/check-text-corruption.js)
- [check-shared-locale-fallbacks.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/check-shared-locale-fallbacks.js)
- [check-guide-locale-coverage.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/check-guide-locale-coverage.js)
- [check-image-references.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/check-image-references.js)
- [check-course-destinations.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/check-course-destinations.js)
- [locale-release-check.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/locale-release-check.js)

## Workflow: Editing Existing English Pages

Use this when changing homepage copy, page copy, guides, packages, FAQs, golf-courses text, or article copy.

### Steps

1. Identify the shared source file.
2. Edit the English source first.
3. If layout or image treatment is involved, check the shared renderer too.
4. Update only the localized keys or sections affected.
5. Run:
   - `npm run check:i18n-release`
   - `npm run build`
6. Review in browser or preview deployment.
7. Commit with a specific message.

## Workflow: Adding A New Blog

There are two main blog types:

- guide article
- live course review post

### If it is a guide article

1. Add the English article entry in:
   - [guide-article-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content.js)
2. Add the route page if needed under:
   - `src/app/guides/<slug>/page.jsx`
3. Add the guide card/list entry in:
   - [guides-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guides-content.js)
4. Add localized article content in:
   - [guide-article-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content-localized.js)
5. Make sure each non-English locale has coverage.
6. Add images into `public/images/...`
7. Run release checks and build.

### If it is a live course review post

1. Add or update the English review content in:
   - [guide-post-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content.js)
2. Add or update localized content in:
   - [guide-post-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content-localized.js)
3. Make sure the localized route wrappers are using:
   - `getGuidePostContent(...)`
   - not a direct localized bypass
4. Check image order and block order against English.
5. Run release checks and build.

### If a course does not have its own blog post yet

Do not leave the homepage or guide card pointing nowhere.

Use the course-guide anchor instead:

- `/golf-courses#<course-id>` for English
- `/<locale>/golf-courses#<course-id>` for localized pages

Examples already using this pattern:

- `Son Muntaner`
- `Golf de Andratx`

This is the preferred fallback until that course gets its own dedicated article or review post.

The mapping now lives in:

- [golf-courses-helpers.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-helpers.js)

So the homepage and future featured-course links can follow one shared destination rule.

## Workflow: Adding Or Updating Images

### Rules

- keep images in the relevant `public/images/...` folder
- prefer WebP where sensible
- avoid giant image dimensions if they do not add visible quality
- use the shared renderer defaults unless a specific image really needs custom treatment

### Important design rule

Do not make half-width images the default.

Only use a tighter presentation when:

- there is text tightly paired with it
- the layout clearly looks intentional
- it improves the editorial rhythm rather than making the page feel broken up

## Workflow: Translations

The site should aim for premium, native-sounding golf copy, not literal translation.

### Existing translation docs

- [translation-master-prompt.txt](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/translation-master-prompt.txt)
- [translation-language-notes.txt](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/translation-language-notes.txt)
- [translation-qa-checklist.txt](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/translation-qa-checklist.txt)
- [translation-workflow.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/translation-workflow.md)
- [translation-locale-hygiene.skill.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/skills/translation-locale-hygiene.skill.md)

## Translation Prompt

Use this as the base prompt when translating a page:

```text
You are translating website copy for Mr Mallorca Golf.

Your job is not to produce a literal translation.
Your job is to produce a polished, natural, premium translation that reads as if it were originally written in [TARGET LANGUAGE] for golfers.

Context:
- Brand: Mr Mallorca Golf
- Voice: warm, expert, direct, conversational but premium
- Speaker: Andy Griffiths, PGA Advanced Professional, based in Mallorca since March 2025
- Audience: golfers planning golf trips or golf days in Mallorca
- Tone: knowledgeable, calm, understated, credible
- Avoid: tacky tourism language, generic marketing copy, AI-sounding contrast phrases, literal awkward translation, over-excited language

Critical rules:
- Preserve the exact page structure and order
- Preserve headings, subheadings, bullets, fact boxes, CTAs, captions, and paragraph breaks
- Do not add new claims
- Do not remove specific facts
- Keep golf terminology natural for a real golfer in [TARGET LANGUAGE]
- Keep place names, course names, personal names, and brand names accurate
- Keep prices, numbers, dates, and stats accurate
- If a phrase sounds unnatural in [TARGET LANGUAGE], rewrite it naturally while keeping the meaning
- Avoid sounding like machine translation
- Avoid cliches and overblown adjectives

Formatting rules:
- Output only the translated text
- Keep the same section structure
- Keep paragraph breaks
- Do not explain your choices
```

## Translation Review Prompt

Use this as the second pass:

```text
Review this [TARGET LANGUAGE] translation for a premium golf website.

Goal:
Make it sound like it was written originally in [TARGET LANGUAGE] by someone who understands golf and Mallorca.

Check for:
- awkward literal translation
- unnatural golf vocabulary
- wrong tone
- tourist-board language
- AI-sounding phrasing
- punctuation/currency/date/temperature formatting issues
- grammar mistakes
- phrasing that a local golfer would find embarrassing or tacky

Rules:
- preserve meaning
- preserve structure
- preserve facts
- improve only the wording and naturalness

Return:
1. the improved final translation
2. a short list of any phrases you substantially rewrote and why
```

## Translation Order

Best practical order:

1. Spanish
2. German
3. French
4. Dutch
5. Swedish
6. Chinese

## Do You Need Codex For Future Updates?

No. You do not need Codex for every future blog, copy change, or translation draft.

### You can work without Codex when:

- the English blog is already written
- the pictures are already chosen and prepared
- you are drafting or refining translations in Claude, ChatGPT, or another model
- you are only improving wording outside the repo

### Codex is most useful when:

- wiring a new blog into the shared site structure
- adding or updating shared content entries
- checking routes, image paths, anchors, and renderer behavior
- keeping all locales aligned structurally to English
- running the release checks before anything is pushed live
- fixing CSS, layout, crop handling, or component issues

### Best low-usage workflow

If you are on limited Codex usage, use it mainly for final repo integration:

1. Write the English blog outside the repo.
2. Draft the translations using the prompt above.
3. Improve them with the review prompt.
4. Bring the final English and localized copy into the repo.
5. Use Codex to place it into the correct shared files.
6. Run:
   - `npm run check:i18n-release`
   - `npm run build`

That gives you most of the value without using Codex to draft every sentence.

## Release Checks Before Any Push

Always run:

```powershell
npm run check:i18n-release
npm run build
```

If either fails, do not push to `main`.

## Preview / Release Pattern

Recommended safe pattern:

1. work on `i18n-premium-draft`
2. run release checks
3. push preview branch
4. review hosted preview on desktop and mobile
5. move to `main` only when safe

## Skill Files And Where To Put Them

### Repo skill

- [site-operations-mmg.skill.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/skills/site-operations-mmg.skill.md)

### Cursor Claude copy

- [site-operations-mmg_SKILL.md](c:/Users/andyg/Desktop/cursor/.claude/site-operations-mmg_SKILL.md)

### Claude Desktop copy

- [claude-desktop-site-operations_SKILL.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/claude-desktop-site-operations_SKILL.md)

## Installing The Skill

### In Cursor Claude

The file already exists in:

- `c:\Users\andyg\Desktop\cursor\.claude\site-operations-mmg_SKILL.md`

If you ever need to refresh it, copy from:

- [site-operations-mmg.skill.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/skills/site-operations-mmg.skill.md)

### In Claude Desktop

Open:

- [claude-desktop-site-operations_SKILL.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/claude-desktop-site-operations_SKILL.md)

Then copy its contents into your Claude Desktop custom instructions or skills area, or save it in whatever local folder you use to keep reusable Claude prompts.

## Future Safety Rules

### Do

- keep English as source of truth
- translate through shared content files
- keep structure aligned to English
- use release checks every time
- keep branch names clear

### Do not

- create one-off locale route logic unless absolutely necessary
- hardcode deep localized copies into page components
- bypass shared guide/review content helpers
- ignore image/layout parity across languages
- publish without the checks

## Practical Branch Guide

Use these names as the working mental model:

- `legacy-live-pre-i18n`
  - old site
  - archive or rollback

- `main`
  - current real site

- `live-i18n-premium`
  - named copy of the new multilingual premium site

- `i18n-premium-draft`
  - sandbox or staging for future changes

## Suggested Commit Style

Keep commit messages direct and small:

- `Add Spanish copy for new trip-planning guide`
- `Refine shared guide article media spacing`
- `Add Vall d'Or course data and image`
- `Update homepage packages copy`
- `Fix localized review post route parity`

## Final Note

If the site ever starts drifting again between English and other languages, assume it is a bug.

The intended model now is:

- one shared structure
- one English source
- one translation layer
- one release check flow

That is the standard to preserve.
