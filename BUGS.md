# MMG Bug Log

Resolved bugs and recurring pitfalls. Read this before any deploy.
When a new bug is fixed, add it here so it never comes back.

---

## Six-choice wrapping and day-result timeline
**Pattern (October 2026):** A max-width cap changed flex row packing from 3 + 3 to 4 + 2. Global timeline rules removed the gutter but targeted nonexistent step classes, leaving the old connector through the text. A suitability box merely repeated holes/par.
**Fix:** Six text choices use an explicit three-column grid with full-width phone rows. Compact numerical options and indicators are centred vertically. The actual timeline items use one scoped grid with a reserved number column and no connector, inside a centred readable column. The generic suitability box and its duplicate result/email paragraphs are removed; course facts remain on the course card. Regressions check every result tab, row counts, number alignment, and phone/translated layouts.

## Villa enquiries and content-sized quiz choices
**Pattern (October 2026):** Generic villa-area records were filtered as if they were verified property capacities, so ordinary group sizes returned no results. A fixed three-column text layout also split five readable desktop choices into uneven rows and stretched pairs across the page.
**Fix:** Villa selections always lead to a preferences summary and enquiry with all answers preserved, without property recommendations or a shortlist email. Whole-villa budgets stay separate from hotel room budgets. Text choice counts and compact labels determine desktop layout; larger sets retain balanced rows and phones keep full-width text choices. Browser regressions cover layout widths, all villa area/size combinations, locale actions and contact/WhatsApp hand-off.

## Translated course maps inherited the homepage canonical
**Pattern (October 2026):** Six translated course-map pages declared titles and descriptions but no alternates, so Next.js inherited the root homepage canonical. The pages returned 200 while telling search engines to consolidate them into the English homepage.
**Fix:** Set each translated map's alternates through `getAlternates()` with its full localized path. Verify the rendered canonical and all seven language alternates, rather than checking only that a canonical uses the correct domain.

## Mobile hero text overlapped the photo and navigation
**Pattern (October 2026):** Play With A Pro and Signature Day shared a fixed viewport-height hero. Long introductions, translations and short in-app browser viewports pushed the copy above the hero; the mobile Play With A Pro photo also sat behind the heading and body.
**Fix:** Let the hero grow with its content, reserve navigation clearance on wider screens, and place the photo above a solid text section on mobile. Visual checks cover both pages in all seven languages, including 320px phones and short tablet viewports.

## Customer email delivery, quiz context and hotel matching
**Pattern (October 2026 customer audit):** Some PDF forms and the pre-round questionnaire showed success before checking the send response; several routes ignored returned provider errors. A PDF request also joined a nurture group without the optional planning-notes consent. The course enquiry dropped quiz choices, its email omitted promised notes, and the pre-round form promised a customer copy that was never sent. Family/spa tags and several hotel descriptions had factual errors.
**Fix:** Await and check delivery, preserve answers on failure, require explicit marketing consent, include the existing course notes and complete quiz summary, send the promised pre-round copy, and correct the hotel master plus all six overlays from official property sources. Unit and browser regressions cover rejection, retry, escaped answer display and the Palma family match.


## Navigation CTA overflow and duplicate button
**Pattern:** `.nav__cta--mobile { display: none; }` appeared before the general `.nav__cta { display: inline-flex; }`, so the mobile-only button also appeared on desktop and contributed to contact-page overflow on narrow screens.
**Fix (Sep 2026):** Keep the mobile hide rule after the base CTA rule, with the responsive show rule later. The offer-funnel browser check asserts one visible nav enquiry button and no contact-page overflow on desktop and mobile.

## Course Selector recommended inaccessible courses
**Pattern:** Ranking by preference score alone put handicap-required and members-only courses in a beginner's shortlist.
**Fix (Sep 2026):** Apply public-access and beginner handicap eligibility before scoring. A shortlist may have fewer than three courses; its heading and email copy must not promise three. The beginner browser journey and unit tests cover this.

## Play With A Pro visual check expected an old layout
**Pattern:** The visual test still required a two-column day section after the September single-column layout change.
**Fix (Sep 2026):** Check the wide lead and that the details appear below it, rather than forcing the retired column ratio.

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
