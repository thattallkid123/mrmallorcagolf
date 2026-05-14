# Course Blog Pipeline — Andy → Claude → Live in One Pass

The lesson from T Golf Calvià (May 2026): rotating photos and writing copy turned into multiple painful sessions. This document defines a one-pass process so every future course review is fast.

---

## What Andy hands over

Two things, in chat:

1. **Transcript of a voice memo from the round.** Whisper, ChatGPT voice, anything. Paste it raw. Doesn't need cleanup.
2. **Photo filenames + a one-line description of each.** Photos can sit anywhere on the PC. Andy numbers them and says what each shows. Example:

   ```
   C:\Users\andyg\Downloads\IMG_1234.HEIC  - windmill close up
   C:\Users\andyg\Downloads\IMG_1235.HEIC  - hole 10, water on right, windmill left
   C:\Users\andyg\Downloads\IMG_1236.HEIC  - bunker with the rake
   ```

Optional: a green fee, a rating out of 10. If Andy doesn't volunteer it, Claude asks.

---

## What Claude does (in order)

### 1. Move photos into the repo and clean them

```python
# Move from Downloads → public/images/[slug]-blog/
# Convert HEIC/JPG → WebP, fix EXIF orientation properly (DO NOT strip without rotating),
# resize to max 1600px longest edge, quality 82
# Rename to [slug]-1.webp, [slug]-2.webp, ... in the order Andy listed them
```

Then **delete the originals from Downloads** (Andy specifically asked for this).

**EXIF orientation rule:** if a photo has EXIF orient ≠ 1, you must apply the rotation to the pixels AND strip the tag. Don't just strip it — that's what broke T Golf. Use `ImageOps.exif_transpose(im)` from Pillow before any further processing.

**File size target:** every photo under 600 KB after optimisation. Total blog folder under 4 MB. T Golf went from 9.96 MB to 2.16 MB with this rule.

### 2. Create the social-preview image

```python
# 1200×630 JPG, cropped from the strongest landscape composition
# Saved to public/images/[slug]-social.jpg
# This is the og:image / Twitter card. Direct .jpg path (WhatsApp won't follow redirects).
```

### 3. Create the card image for the guides index

```python
# 900×386 WebP, cropped from same or different photo
# Saved to public/images/[slug]-card.webp
# This appears on /guides as the carousel card
```

### 4. Ask gap questions (one batch, before writing)

After reading the transcript, ask Andy in ONE message:
- Anything missing on price (peak / twilight / midweek / package)
- Rating out of 10 if not stated
- The honest negative (the voice guide requires one per post)
- Anything notable about the people he played with (if relevant)
- Anything Shanghai/England contrast he wants in the opening

Never drip-feed questions.

### 5. Draft the post

Run the brand voice guide (`MMG_BRAND_VOICE_GUIDELINES.md`) through every paragraph before showing Andy. The self-check in section 6 of that doc is mandatory, not optional. Specifically:
- No em dashes
- No banned words
- "Mallorca" not "Majorca"
- "€" not "euros"
- Place names with accents (Calvià, etc.)
- One honest negative
- Specific moment as hook
- Verdict block + play-with-a-pro CTA

### 6. Wire it into the site

Following the checklist in the `nextjs-mrmallorcagolf` skill:
- Add entry to `src/lib/guide-post-content.js` (English only initially)
- Add to `COURSE_REVIEW_DETAILS` in `src/app/guides/GuidePostView.jsx`
- Create `src/app/guides/[slug]-review/page.jsx`
- **Do NOT add to `guides-content.js` or `GUIDE_IMAGES` in GuidesIndexView.jsx until Andy approves at the live URL.**

Translations (de/es/fr/nl/sv/zh) only after Andy approves the English version.

### 7. Run checks and prep the deploy block

```bash
npm run check:text
npm run check:i18n-release
npm run build
```

If all green, hand Andy this block:

```
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
git add .
git commit -m "Add [Course Name] review (English, hidden from index)"
git push
```

### 8. Append to CHANGELOG.md

One line, `[content]` tag, name of the course.

---

## What "done" looks like

- Live URL `mrmallorcagolf.com/guides/[slug]-review` renders correctly
- All photos right-way up, sharp, under 600 KB each
- Card image (900×386) visible if added to index
- Social preview (1200×630) shows correctly when URL pasted into WhatsApp
- Voice guide self-check passes
- Vercel deploy is green

---

## Anti-patterns from the T Golf Calvià session — do not repeat

1. **Don't run a blind EXIF-transpose script on a whole folder.** Verify each photo's intended orientation against the captioned content first. Cameras lie. Use thumbnails to confirm.
2. **Don't commit a 0-byte file.** Always verify file size after any image operation.
3. **Don't accept "euros" or "Majorca" anywhere.** Search and replace before pushing.
4. **Don't use a sideways photo as the og:image.** The card and social preview must be intentionally cropped landscape.
5. **Don't ask Andy questions one at a time.** Batch them.

---

*If you're Claude and you're about to start a course blog: read this file end to end before doing anything. Then read `MMG_BRAND_VOICE_GUIDELINES.md`. Then start.*
