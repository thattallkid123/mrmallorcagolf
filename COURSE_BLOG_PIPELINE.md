# Course Blog Pipeline

**Read this file completely before doing anything. Then read `MMG_BRAND_VOICE_GUIDELINES.md`. Then start.**

For branch decisions and shared content rules, also read `BRANCHES.md` and `CONTENT_WORKFLOW.md`.

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

1. Add to `guides-content.js` English `liveGuides` array (correct position in carousel order — see below)
2. Add English entry to `guides-content.js` with `img` and `imgPosition` fields
3. Add all 6 language translations (see Step 7 below)
4. Run all checks again, push
5. Append one line to `CHANGELOG.md`

---

## Carousel order (guides page)

Alcanada → Son Gual → T Golf Calvià → Son Muntaner → Santa Ponsa 1 → Andratx → Son Termes

New reviews go at the end unless Andy specifies otherwise.

All non-English locales must match this order exactly. Run the order-verification check after any change.

---

## Step 7 — Translations

**Rule: English is always the master. Never add content to language pages not present in English.**

### What needs translating for each new review

Four things, all via Python text replacement on the relevant file (never Edit tool):

1. `guide-post-content-localized.js` — the full post content (all blocks) for de/es/fr/nl/sv/zh
2. `guides-content.js` — the card entry (badge, title, intro, keywords) for each locale's `liveGuides`
3. `src/app/[locale]/guides/[slug]-review/page.jsx` — one JSX file per locale (boilerplate, no translation needed)
4. Order in each locale's `liveGuides` must match English

### How to do translations efficiently (low token cost, high accuracy)

**Write all 6 translations in one Python script, run once.** Do not do them one locale at a time in chat — that wastes tokens and risks inconsistency.

Structure the script as a single Python file that:
- Opens the target file in text mode (`open(path, 'r', encoding='utf-8')`)
- Finds the correct insertion point using `content.find('specific unique marker')` — never `rfind` on a generic string like `'\n}'`
- Contains all 6 locale blocks as a single string literal
- Writes back in one pass

**Critical encoding rule:** Never use bytes mode (`rb`/`wb`) when the content contains non-ASCII characters (accents, Chinese). Always use `open(path, 'r', encoding='utf-8')` and `open(path, 'w', encoding='utf-8')`. Bytes mode causes `SyntaxError` on Chinese characters in string literals.

### Translation quality rules

- **Golf terminology**: translate naturally for each market — German golfers say "Fairway", "Bunker", "Green" (no translation needed); French say "fairway", "bunker", "green"; Spanish say "calle", "búnker", "green"
- **Tone**: match Andy's voice — short declarative sentences, specific numbers, dry and direct. No travel-brochure warmth in any language.
- **Banned words apply in every language**: no equivalents of stunning/breathtaking/nestled etc.
- **Prices**: always `€` symbol, never spell out "euros" in any language
- **Course name**: always `T Golf Calvià` — never translate place names
- **Accents**: Calvià (not Calvia), Mallorca (not Majorca/Mallorque etc.)
- **CTA links**: keep `linkLabel` short and action-oriented per language
- **Facts block**: translate the label string, keep the value (e.g. `['Bis 210 €', 'Peak-Greenfee']`)

### Locale-specific notes

| Locale | Key differences |
|--------|----------------|
| de | "Green" not "Grün"; "Fairway" unchanged; formal "Sie" not used — Andy's blog voice is informal |
| es | "calle" for fairway, "búnker" for bunker; "green" unchanged; tú form |
| fr | "fairway"/"bunker"/"green" all unchanged; vouvoiement not needed in blog context |
| nl | "fairway"/"bunker"/"green" unchanged; informal "je/jij" |
| sv | "fairway"/"bunker"/"green" unchanged; informal "du" |
| zh | Simplified Chinese only; golf terms: 球道 (fairway), 沙坑 (bunker), 果岭 (green), 标准杆 (par), 发球台 (tee); keep course names in English |

### Verification after translations

```python
# Quick check — run in sandbox after script
import re
path = 'src/lib/guides-content.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
locale_positions = [(m.start(), m.group(1)) for m in re.finditer(r"locale: '(\w+)'", content)]
for i, (start, locale) in enumerate(locale_positions):
    end = locale_positions[i+1][0] if i+1 < len(locale_positions) else len(content)
    section = content[start:end]
    live_start = section.find('liveGuides:')
    archived_start = section.find('archivedGuides:')
    live_section = section[live_start:archived_start if archived_start != -1 else live_start+8000]
    slugs = re.findall(r"slug: '([^']+)'", live_section)
    print(f"{locale}: {slugs[:8]}")
# All locales must show identical slug order
```

Also check `guide-post-content-localized.js` has the new slug:
```python
with open('src/lib/guide-post-content-localized.js', 'r', encoding='utf-8') as f:
    content = f.read()
for locale in ['de', 'es', 'fr', 'nl', 'sv', 'zh']:
    idx = content.find("'[slug]-review'")
    block = content[idx:idx+50000]
    print(f"{locale}: {'OK' if f'{locale}:' in block[:40000] else 'MISSING'}")
```

---

## What done looks like

- Live URL renders correctly, all photos right-way up, full image visible (no cropping)
- Card (900×386) looks good at thumbnail size — aerial/wide shot, not a phone close-up
- Social preview (1200×630) shows correctly when pasted into WhatsApp
- Brand voice self-check passed
- Build green, Vercel deployed
- CHANGELOG updated
