# MMG Bug Log

Resolved bugs and recurring pitfalls. Read this before any deploy.
When a new bug is fixed, add it here so it never comes back.

---

## Import paths (most common build failure)
**Pattern:** Wrong relative depth for component imports.
**Rule:**
- English pages (`src/app/[page]/`): use `../../components/ComponentName`
- Language pages (`src/app/[lang]/[page]/`): use `../../../components/ComponentName`
- `GolfCoursesClient` from a language page: `../../golf-courses/GolfCoursesClient`
- Never use `./GolfCoursesClient` or `../../components/GolfCoursesClient`

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

## Beehiiv custom API approach failing
**Pattern:** Built a custom email signup API endpoint; it broke silently and signups were lost.
**Fix (Apr 2026):** Replaced with Beehiiv's official iframe embed. Do not build custom API wrappers for third-party email tools.

## Home screen web app manifest broken on main site
**Pattern:** `manifest.json` pointed to wrong paths after restructuring, breaking PWA/add-to-homescreen.
**Fix (Apr 2026):** Corrected manifest asset paths.

## GSC indexing issues
**Pattern:** Pages not being indexed by Google Search Console due to missing or misconfigured metadata/redirects.
**Fix (May 2026):** Audited and corrected sitemap, canonical tags, and redirect rules.

## Layout regressions from copy-paste across language pages
**Pattern:** Syncing content from English to language pages without preserving component structure causes layout breaks.
**Rule:** Always diff the component structure, not just the text content, when syncing language pages.
