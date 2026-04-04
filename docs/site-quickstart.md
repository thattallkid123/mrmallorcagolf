# Site Quickstart

## What Is What

## Real Repo

Active repo:

- `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real`

Older archive copy:

- `C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf`

Only use the Desktop `cursor` repo for ongoing work.

- `main`
  - current real/live site

- `legacy-live-pre-i18n`
  - old site before the multilingual rebuild

- `live-i18n-premium`
  - named branch holding the new multilingual premium version

- `i18n-premium-draft`
  - working/staging branch for future changes

## Main Rule

Edit shared content, not duplicated locale pages.

English is the source of truth.

## Main Shared Files

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

## Shared Design Files

- [GuideArticleView.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/GuideArticleView.jsx)
- [GuidePostView.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/GuidePostView.jsx)
- [PostLayout.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/PostLayout.jsx)
- [FillImageFrame.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/components/FillImageFrame.jsx)
- [globals.css](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/styles/globals.css)

## Before Every Push

Run:

```powershell
npm run check:i18n-release
npm run build
```

If either fails, do not push to `main`.

## Updating Existing Pages

1. Edit English first.
2. Update the matching localized shared content.
3. Review the shared renderer if layout or image handling changed.
4. Run the checks.
5. Review preview.

## Adding a New Guide Article

1. Add the English article in [guide-article-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content.js).
2. Add the list card in [guides-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guides-content.js).
3. Add localized versions in [guide-article-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content-localized.js).
4. Add images in `public/images/...`.
5. Run checks and build.

## Adding a New Live Review Post

1. Add/update English in [guide-post-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content.js).
2. Add/update localized text in [guide-post-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content-localized.js).
3. Make sure localized routes use `getGuidePostContent(...)`.
4. Run checks and build.

## Translation Rule

Translations should be:

- native sounding
- golf-appropriate
- calm and premium
- structurally matched to English

They should not be:

- literal
- brochure-like
- tacky
- structurally different from English

## Do I Need Codex Every Time?

No.

Best split:

- use Claude, ChatGPT, or another model to draft or improve copy
- use Codex to place content into the correct repo files, wire routes, check images, and run release checks

## Best Docs To Read Next

- [site-rebuild-guide.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/site-rebuild-guide.md)
- [site-handover-guide.md](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/site-handover-guide.md)
