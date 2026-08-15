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
