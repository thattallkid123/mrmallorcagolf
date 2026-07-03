---
name: add-site-photos
description: Process and add photos to the site — client photos (Andy with clients), course blog photos, carousel images, page heroes. Covers the mandatory processing rules (EXIF rotation, no cropping, WebP sizing), naming, destinations, and alt text. Use whenever Andy has new photos to put on the site.
---

# Adding Photos To The Site

## Processing rules (no exceptions)

- **`ImageOps.exif_transpose(img)` (Pillow) on EVERY photo first.** Applies pixel rotation from the EXIF tag. Skipping it ships sideways photos.
- **Always read from the original source file** (Drive JPG or upload). Never re-process an already-processed WebP — double rotation breaks everything.
- **Never crop blog/client photos.** Andy's composition is intentional; the site shows images full-width.
- Resize to max 1600px longest edge, Lanczos, **WebP quality 82**. Target <600 KB per file. (Full-viewport page heroes are the exception — see `scripts/optimize-images.js` for their widths/quality.)
- WebP→JPEG pairs: the OG system needs JPEG. `npm run build` auto-converts all WebP in `public/images/` via prebuild; standalone: `npm run convert-og-images`.

## Naming and destinations

| Photo type | Location | Naming |
|---|---|---|
| Course blog photos | `public/images/{slug}-blog/` | `{slug}-1.webp`, `{slug}-2.webp`, … |
| Client photos (Andy with clients) | `public/images/` | `client-{course}.webp`, `client-{course}-{name}.webp`, `client-group-{feature}.webp` (match existing: `client-son-gual.webp`, `client-santa-ponsa-mark.jpg`) |
| Guide card images | `public/images/{slug}-card.webp` | 900×386 centre crop of an aerial/wide shot — never people/close-ups |
| Course detail images | `public/images/courses/{slug}.webp` | one per course, all 24 exist |
| Page heroes / portraits of Andy | `public/images/` | descriptive: `andy-coaching-client.webp`, `about-portrait.jpg` |

## Wiring photos into pages

- **Play With A Pro carousel** (the main home for Andy-with-clients shots): add an entry to `src/lib/pwap-photos.js` — single source of truth for both `/play-with-a-pro` and `/guides/play-with-a-pro-explained`. Include `src`, honest `alt`, and a `position` (e.g. `'center 40%'`); add `variant: 'portrait'` for portrait shots. Check where the faces sit and set `position` so heads aren't cropped by `object-fit`.
- **Guide body photos:** referenced from the guide's blocks in `guide-post-content.js`.
- **Prototypes:** only `/images/...` paths — never Unsplash/Pexels/external URLs. Add `loading="lazy"` and alt text.

## Alt text rules

Factual and specific: who/where ("Andy with a client at Alcanada"), never invented captions, never keyword-stuffed. If you don't know the course or context in the photo, ask Andy — do not guess.

## Verify and ship

1. `node scripts/check-image-references.js` — no broken references
2. Render the page(s) locally — check crop/`position` on both desktop and mobile widths
3. If a photo backs an OG image, verify via `/api/og?...&image=%2Fimages%2F....jpg` (JPEG path)
4. Ship via the `ship` skill

Photos are code-repo assets only once web-sized; originals stay in Drive (`Courses/{CourseName}/` or `Media/`) — never commit multi-MB originals.
