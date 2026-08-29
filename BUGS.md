# MMG Bug Log

Resolved bugs and recurring pitfalls. Read this before any deploy.
When a new bug is fixed, add it here so it never comes back.

---

## Import paths (most common build failure)
**Pattern:** Wrong relative depth for component imports.
**Rule:** English pages live under the `(en)` route group (`src/app/(en)/[page]/`), so English and language pages sit at the same filesystem depth from `src/components` — both use `../../../components/ComponentName`. Count directory levels rather than assuming a fixed depth; deeper nesting adds another `../`. Full detail: `CLAUDE.md` → Critical Rules → Import paths.

## Deleted files leaving broken imports
**Pattern:** Deleting a component, for example `FillImageFrame.jsx` or experience-copy, without updating every import.
**Rule:** Before deleting any file, grep the whole repo for its name. Fix all imports before committing.

## Mojibake / encoding corruption
**Pattern:** Pasting text from Word, Excel, PDFs, or websites introduces mojibake, replacement diamonds, escaped unicode, broken accented letters, broken smart quotes, or broken dash symbols.
**Rule:** Always paste into plain text first. Check source encoding is UTF-8. Never add render-time cleanup; fix the source text.
**Affected areas:** Footer, language pages, course data JSON.

## Em dashes in content
**Pattern:** AI-generated copy introduces em dash characters. These are banned per writing guardrails.
**Rule:** Search for em dash characters before committing any copy. Replace with a comma, period, or rewrite the sentence.

## English strings leaking into language pages
**Pattern:** Hardcoded English text left in non-English page files, or fallback strings not translated.
**Rule:** After touching any language page, visually scan the output. Run `npm run check:i18n-release` before pushing.

## ZH showing "ZH" instead of Chinese characters
**Pattern:** Language switcher rendered the code "ZH" as text instead of the Chinese character label.
**Fix (Apr 2026):** Corrected label mapping in HomeNav language switcher.

## Chinese placeholder text on golf courses page
**Pattern:** Placeholder/fallback text left visible in the ZH golf courses view.
**Fix (Apr 2026):** Replaced all placeholder strings with correct ZH content.

## og:image not showing on WhatsApp/social previews
**Pattern:** og:image path set to a Next.js route instead of a direct `.jpg` URL. WhatsApp and some crawlers do not follow redirects.
**Fix (Apr 2025):** Set og:image to the direct absolute JPG path, not the `/api/og` route.

## CSS modules on Server Components
**Pattern:** Using CSS module imports in a file that is a Server Component causes a build error.
**Rule:** Server Components cannot use CSS modules. Use inline styles or `globals.css` only.

## Nav locale detection broken after cleanup
**Pattern:** Removing code from Nav broke locale detection, causing language switcher to malfunction.
**Fix (Apr 2026):** Restored locale detection logic in Nav. Pre-commit hook also repaired at same time.

## Pre-commit hook silently broken
**Pattern:** Hook file existed but was not running checks. Encoding and text issues slipped through.
**Fix (Apr 2026):** Repaired hook. Always verify `npm run check:text` and `npm run check:i18n-release` pass locally.

## Third-party email signup blocked by CSP
**Pattern:** Email capture can appear to work in the UI but fail silently if the live Content Security Policy blocks the provider endpoint.
**Fix (Jun 2026):** Allow the active provider in `connect-src` and re-test a real signup on the public site after each provider change.

## Home screen web app manifest broken on main site
**Pattern:** `manifest.json` pointed to wrong paths after restructuring, breaking PWA/add-to-homescreen.
**Fix (Apr 2026):** Corrected manifest asset paths.

## GSC indexing issues
**Pattern:** Pages not being indexed by Google Search Console due to missing or misconfigured metadata/redirects.
**Fix (May 2026):** Audited and corrected sitemap, canonical tags, and redirect rules.

## Layout regressions from copy-paste across language pages
**Pattern:** Syncing content from English to language pages without preserving component structure causes layout breaks.
**Rule:** Always diff the component structure, not just the text content, when syncing language pages.

## Sideways photos from a blind EXIF transpose
**Pattern (T Golf Calvià, May 2026):** A bulk EXIF-transpose script ran across `public/images/t-golf-calvia-blog/`. It stripped EXIF orientation tags but did not rotate the pixels to match. Result: all 7 photos rendered 90° off, and one (`t-golf-calvia-2.webp`) was written as 0 bytes, which caused two Vercel deploys to fail. Also produced a sideways card and og:image.
**Rule:**
- Always use `PIL.ImageOps.exif_transpose(im)` which rotates AND clears the tag in one step. Never strip the tag without rotating.
- Verify every image with `file *.webp` AND a visual thumbnail before committing.
- Refuse to commit any 0-byte image. Add a pre-deploy check if recurring.
- Card and og:image are intentionally cropped landscape (900×386 and 1200×630). Never use a portrait photo as the og:image.

## Auto-scrolling strip: fade overlay drifted across the visible cards
**Pattern (career-strip, Aug 2026):** A dark vertical line intermittently appeared across the "Where I've been" photo strip, showing up between different card pairs and seeming to correlate with browser zoom. Two rounds of wrong fixes first (GPU-compositing, scroll-pixel rounding) before finding the real cause.
**Real cause:** `.career-strip__fade--left/right` (the edge vignette overlays) were direct children of `.career-strip__viewport`, the scrolling element itself. `position:absolute; left:0/right:0` on a descendant of an `overflow-x:auto` container only sets its position *within* the scrollable content — it does not pin it to the visible edge. As the strip auto-scrolled, the fades scrolled along with the cards, drifting across the visible strip and painting a dark gradient over whichever card happened to be underneath at that scroll position.
**Rule:** Any decorative overlay meant to stay pinned to a scrolling container's edge (fade, vignette, scroll-hint arrow) must live in a non-scrolling wrapper *outside* the element with `overflow-x`/`overflow-y:auto` — never as its direct child. Check this first if a fade/vignette effect on any of the three auto-scrolling strips (CareerStrip, WinnersProofStrip, PWAP day strip) ever looks like it's in the wrong place.
**Also confirmed while investigating:** `Element.scrollLeft` always rounds to a whole CSS pixel on write in Chromium (assigning `308.8` reads back as `309`). A JS-driven auto-scroll needing whole-*device*-pixel precision at fractional display scaling (e.g. Windows 125%) must only ever advance to a CSS value whose product with `devicePixelRatio` is itself whole — recompute per frame, since browser zoom changes `devicePixelRatio` too.

## Course blog written in multiple painful passes
**Pattern:** T Golf Calvià blog took several sessions across photo rotation, copy revisions, metadata fixes, deploy errors. Process was not documented.
**Fix (May 2026):** `COURSE_BLOG_PIPELINE.md` in repo root. One-pass workflow: Andy hands over transcript + numbered photo links, Claude does everything else in order. Pipeline references `MMG_BRAND_VOICE_GUIDELINES.md` as the only voice guide.
