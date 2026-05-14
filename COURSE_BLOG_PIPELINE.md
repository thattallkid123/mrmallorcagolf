# Course Blog Pipeline

**Read this file completely before doing anything. Then read `MMG_BRAND_VOICE_GUIDELINES.md`. Then start.**

---

## What Andy hands over

1. Voice memo transcript (paste raw — no cleanup needed)
2. Photos — drag into chat, or give file paths with a one-line description each

That is all that is needed to begin.

---

## Step 1 — Ask gap questions (one batch, before anything else)

After reading the transcript, ask Andy ONE message containing only what is genuinely missing:

- Green fee (peak / twilight / midweek if different)
- Rating out of 10
- Tees played (back/white/yellow + approximate yardage)
- Walked or buggy
- The honest negative (required — one per post, specific not vague)
- Anything about who he played with, if relevant to the story

Never ask more than once. Never drip-feed. If the transcript answers something, do not re-ask it.

---

## Step 2 — Process photos

**Rules — no exceptions:**

- Use `ImageOps.exif_transpose(img)` from Pillow on EVERY photo before anything else. This applies pixel rotation from the EXIF tag. Never skip this step.
- Always read from the **original source file** (Drive JPG or uploaded file). Never re-process an already-processed WebP — double rotation breaks everything.
- **No cropping of blog post images.** Save the full rotated image. Andy's composition is intentional. The site displays images full-width; nothing is cut off.
- Resize to max 1600px on the longest edge, Lanczos, WebP quality 82.
- Target: each file under 600 KB. Total blog folder under 4 MB.
- Rename in order: `[slug]-1.webp`, `[slug]-2.webp`, etc.
- Save to `public/images/[slug]-blog/`

**Card image (guides carousel):**
- Check `public/images/courses/[slug].webp` first. If it exists and is an aerial/wide course shot, use it — crop to 900×386 from centre, resize, save as `public/images/[slug]-card.webp`. This will always look better than a phone photo.
- If no courses/ image exists, ask Andy to pick from the blog photos, or source from the course's press pack.
- Never use a close-up or people shot as the card.

**Social preview:**
- 1200×630 JPG from the strongest landscape composition
- Save as `public/images/[slug]-social.jpg` (JPG not WebP — WhatsApp requires it)

**Verify before moving on:**
- Open each saved WebP and confirm it is the right way up and shows the full image
- Confirm card and social are landscape and look good at thumbnail size

---

## Step 3 — Write the post

Read `MMG_BRAND_VOICE_GUIDELINES.md` before writing the first word. The self-check at the end of that doc is mandatory.

Structure every review the same way:
1. Opening hook — a specific moment from the round (not "I visited X course")
2. First impression / setting
3. The course itself — layout, key holes, what makes it distinctive
4. Conditioning (greens, bunkers, fairways)
5. Practical info block (green fee, par, yardage, facilities)
6. The honest negative — specific, not softened
7. Verdict — rating out of 10, one sentence on who it suits
8. Play with a Pro CTA

Hard rules (search for every one before finishing):
- No em dashes (—). Use a comma, full stop, or rewrite the sentence.
- No banned words: stunning, breathtaking, nestled, seamless, elevate, unforgettable, hidden gem, curated, bespoke, vibrant, bustling, exceptional
- No banned phrases: "The best part?", "More than just", "Whether you're", "From X to Y", "In the heart of", "It's not X it's Y"
- "Mallorca" not "Majorca"
- "€" not "euros"
- Place names with correct accents: Calvià, Andratx, etc.
- First person only for courses Andy has personally played

Andy's voice patterns (from published posts):
- Short declarative sentences. Subject, verb, done.
- Specific numbers and details over adjectives
- One honest negative stated plainly, not hedged
- Dry understatement rather than enthusiasm
- No AI-style openings, no travel-brochure warmth

---

## Step 4 — Wire into the site

Technical reference is in the `nextjs-mrmallorcagolf` skill. Summary:

**Critical: never use the Edit tool on `guide-post-content.js` or `guides-content.js`.** These files are large (40KB+) and the Edit tool truncates them silently. Always use Python byte-level replacement.

Steps:
1. Add entry to `src/lib/guide-post-content.js` (English only)
2. Add to `COURSE_REVIEW_DETAILS` in `GuidePostView.jsx`
3. Add to `GUIDE_IMAGES` in `GuidesIndexView.jsx`
4. Create `src/app/guides/[slug]-review/page.jsx`
5. Do NOT add to `guides-content.js` until Andy approves at the live URL

---

## Step 5 — Checks and deploy

```
npm run check:text
npm run check:i18n-release
npm run build
```

All must pass. Then give Andy:

```
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
git add -A
git commit -m "Add [Course Name] review (English, hidden from index)"
git push
```

Live within ~2 minutes at `mrmallorcagolf.com/guides/[slug]-review`.

---

## Step 6 — After Andy approves

1. Add to `guides-content.js` English `liveGuides` array (correct position in carousel order)
2. Add translations (de/es/fr/nl/sv/zh) — English is always master
3. Run all checks again, push
4. Append one line to `CHANGELOG.md`

---

## Carousel order (guides page)

Alcanada → Son Gual → T Golf Calvià → Son Muntaner → Santa Ponsa 1 → Andratx → Son Termes

New reviews go at the end unless Andy specifies otherwise.

---

## What done looks like

- Live URL renders correctly, all photos right-way up, full image visible (no cropping)
- Card (900×386) looks good at thumbnail size — aerial/wide shot, not a phone close-up
- Social preview (1200×630) shows correctly when pasted into WhatsApp
- Brand voice self-check passed
- Build green, Vercel deployed
- CHANGELOG updated
