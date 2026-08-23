# Font Loading Rule — No Hardcoded Font Names

## The Problem

Next.js loads self-hosted local font files from `MMG-Fonts/` via `next/font/local` in `src/app/root-layout-shared.jsx`, which exposes them as CSS variables:
- `--font-sans` → Jost
- `--font-serif` → Cormorant Garamond

The approved brand pairing is still the same: Jost for body/navigation/UI text and Cormorant Garamond for headings/editorial display text. Self-hosting avoids build-time or runtime dependency on Google Fonts while preserving the approved typography.

Hardcoding `font-family: 'Jost'` or `font-family: 'Cormorant Garamond'` in components/styles causes fallbacks (Arial, Georgia) to render when the font isn't yet loaded, creating a "flash of wrong font" and a disconnect from the design system.

## The Rule

**Never hardcode font names.** Always use CSS variables:

```css
/* ✗ Wrong */
font-family: 'Jost', sans-serif;
font-family: 'Cormorant Garamond', Georgia, serif;

/* ✓ Right */
font-family: var(--font-sans);
font-family: var(--font-serif);
```

### When Variables Can't Be Used

If a style must be declared outside the global CSS scope (e.g., an inline `<style>` block in JSX or a dynamic HTML string):

1. **Prefer moving to globals.css** — define a CSS class and apply it.
2. **If inline is unavoidable**, use the fallback chain but **always check that the font is loaded** before rendering:
   ```jsx
   // Only render this <style> tag in a client component or after fonts load
   if (typeof document !== 'undefined') { /* browser context */ }
   ```

### Inline Styles in JSX

Hard to audit. When inline styling is necessary, prefer `className` + globals instead:

```jsx
/* ✗ Avoid */
<div style={{ fontFamily: "'Jost', sans-serif" }}>Text</div>

/* ✓ Preferred */
<div className="my-label">Text</div>
/* in globals.css: .my-label { font-family: var(--font-sans); } */
```

## Font Weight Must Match a Loaded Weight

`next/font/local` (in `src/app/root-layout-shared.jsx`) only loads specific weights per family — check that file for the current list before writing a new `font-weight` declaration (as of 2026-08-22: Jost 300/400/500 normal only; Cormorant Garamond 400/500/600 normal, 400/500 italic). Setting `font-weight`/`fontWeight` to a value **not** in that loaded set doesn't error — the browser silently synthesizes a fake-bold render instead. Two real bugs from this exact gap in one session (2026-08-22):
- A table header set `fontWeight: 600` on Jost text (only 300/400/500 loaded), causing a font-swap CLS regression (0.145, "Needs Improvement") on the Best Golf Courses guide — fixed by changing it to `500`.
- ~21 more elements sitewide (`.breadcrumb` on every page hero, `.badge`, `.sticky-mobile-cta__primary/__secondary`, etc.) had the same `600`/`700`-on-Jost mismatch. All fixed to `500`, then verified live via computed-style checks (`getComputedStyle(el).fontWeight`) before shipping — matching the CSS declaration is not proof of matching render (see `verify-before-claiming-done` memory).

**Before removing a font file as "unused":** a source claiming zero usage (a grep, an audit, a subagent) can miss inline JSX `style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}` object literals that a text-only search pattern doesn't match. Confirmed 2026-08-22: an audit reported Cormorant Garamond 600 (normal) as unused anywhere in `src/`; `LeadMagnetPage.jsx`'s H1 and lead paragraph (rendered on 4 live lead-magnet pages) actually used it. Re-verify independently — a second, differently-shaped grep (`fontWeight:\s*600` in `.jsx`, not just `font-weight:\s*600` in `.css`) — before deleting any font file, and render a page that's supposed to use the weight you're keeping/dropping to confirm live.

## Files to Audit

The following files still have hardcoded fonts (103 instances as of this write). Refactor them as you touch them:

- `src/components/HomeToolsStrip.jsx` — has inline `<style>` block with hardcoded fonts
- `src/components/CourseMapView.jsx` — has dynamic HTML string for map pins
- `src/styles/globals.css` — lines ~848, ~996, ~2035–2688 (various utility classes, prototypes, locale overrides)
- `src/app/(en)/tools/course-selector/CourseSelectorToolClient.jsx` — prototype inline styles
- `src/app/zh/course-selector/ZhCourseSelectorClient.jsx` — prototype inline styles
- Locale-specific overrides in globals.css (lines ~4500+) — these may be prototype or temporary code

## Going Forward

1. **Code review:** When you see hardcoded `'Jost'` or `'Cormorant Garamond'`, ask to replace with `var(--font-sans)` / `var(--font-serif)`.
2. **New components:** Always use CSS variables. Inline `<style>` blocks are OK if they reference the variables.
3. **Prototype or tool code:** Even temporary code should use variables — the "temporary" sticks around.

## Example: Fix HomeToolsStrip.jsx

```jsx
/* BEFORE (line 39): */
.hts-eyebrow { font-family: 'Jost', sans-serif; ... }

/* AFTER: */
.hts-eyebrow { font-family: var(--font-sans); ... }
```

The component itself doesn't need changes — just the style block.

## References

- Font loading: `src/app/root-layout-shared.jsx`
- CSS variables root: `src/styles/globals.css` (`:root { --font-sans, --font-serif, ... }`)
- Local font files: `MMG-Fonts/`
- Design reference: `docs/CODEBASE_IMPROVEMENTS.md` (if updated with font strategy)
