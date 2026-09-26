# Course Blog Pipeline

**Read this file, then `MMG_BRAND_VOICE_GUIDELINES.md`, then start.** The step-by-step mechanics (files to edit, scripts to run, checks, deploy, go-live) live in the `publish-course-guide` skill (`.claude/skills/publish-course-guide/SKILL.md`), which is kept current. This file holds what the skill points back to: what Andy hands over, the photo rules, how to write the review, and the translation quality rules. If the two ever disagree, the skill wins. (Rewritten 2026-09-24: the old steps for wiring, deploy, carousel order and the translation file layout had drifted from the live code.)

For branch decisions and shared content rules, also read `BRANCHES.md` and `CONTENT_WORKFLOW.md`.

---

## What Andy hands over

1. Voice memo transcript (paste raw, no cleanup needed)
2. Photos: Drive links or files, with a one-line description each

That is all that is needed to begin.

---

## Step 1 - Ask gap questions (one batch, before anything else)

Ask ONE message containing only what is genuinely missing. The full list is in the skill's Step 0. The ones that get missed most:

- Green fee on the day, rating out of 10, tees played, walked or buggy, singles policy, food and price, wind
- The honest negative (required, one per post, specific)
- **Which photo leads the article and which is the social/OG preview image** (two separate choices)
- **Where the review goes in the guides carousel** (never default to the end)

Never ask more than once and never drip-feed. If the transcript answers something, do not re-ask it. Check tees and hole lengths against `src/lib/scorecard-data.js` before writing them.

---

## Step 2 - Process photos

- Use `ImageOps.exif_transpose(img)` from Pillow on EVERY photo first. Never skip this.
- Always read from the **original source file**. Never re-process an already-processed WebP (double rotation).
- **No cropping of blog post images.** Andy's composition is intentional.
- Max 1600px on the longest edge, Lanczos, WebP quality 82. Each file under 600 KB, folder under 4 MB.
- Save as `public/images/[slug]-blog/[slug]-1.webp`, `-2.webp`, ...

**Card image (guides carousel):** centre-crop `public/images/courses/[slug].webp` to 900x386 and save as `public/images/[slug]-card.webp`. Never a close-up or a people shot. If there is no courses/ image, ask Andy.

**Social preview:** it is the same-stem JPG of `metadata.imagePath`, generated automatically by `npm run convert-og-images` (also part of the build). There is no separate 1200x630 file. Use the photo Andy picks, and delete a stale JPG if the pick changes.

**Verify before moving on:** open each saved WebP and confirm it is the right way up and shows the whole image.

---

## Step 3 - Write the post

Read `MMG_BRAND_VOICE_GUIDELINES.md` before writing the first word. Then do the skill's pre-review self-read (banned words, repetition, vague claims, internal consistency) **before** Andy sees a draft. A green `check:voice` does not mean the draft is good.

**Titles:** `metadata.title` is `[Course Name] - Honest Review 2026` (under 40 characters before the site suffix). `meta.title` is `[Course Name], Mallorca: A PGA Professional's Honest Review (2026)`.

**Green fee:** never say "peak" unless you know it was peak. Use the range from `golf-courses-data.js` or say "€X on the day we played" if only one price is known.

**Image captions and alt text** must describe what is actually in the photo. Never caption something that is not visible.

Structure every review the same way:
1. Opening hook, a specific moment from the round
2. First impression / setting
3. The course itself: layout, key holes, what makes it distinctive
4. Conditioning (greens, bunkers, fairways) and service
5. Practical information block (green fee, par, length, facilities)
6. The honest negative, specific and not softened
7. Common Questions
8. Verdict: rating out of 10, who it suits
9. Play with a Pro CTA

Hard rules (search for every one before finishing):
- No em dashes. Use a comma, full stop, or rewrite.
- No banned words (full list in the voice guide, section 3; do not rely on a copy of it here). "genuinely" as filler is one of them.
- No banned constructions or dead metaphors (voice guide sections 3 and 4).
- "Mallorca" not "Majorca". "€" not "euros". Correct accents (Calvià).
- First person only for courses Andy has personally played.
- Course and hole lengths in metres; yards only for his own shot distances.

Andy's voice: short declarative sentences, specific numbers over adjectives, one honest negative stated plainly, dry understatement, no brochure warmth.

---

## Step 4 - Wire it in, check, deploy

Follow the skill (Steps 2 to 5.5 and 7). Ship the English version first, English-only, and **wait for Andy to read it** before any translation, carousel registration or ping.

## Step 5 - After Andy approves

Follow the skill's Step 5.5 (translations) and Step 6 (carousel, listing link, guide app, played-courses list). `CHANGELOG.md` is filled by the chatbackup process, so do not add a line by hand.

---

## Translation quality rules

**English is always the master. Never add content to a language that is not in English.** The file layout and registration are in the skill (Step 5.5); write all six locales from one generator script and let `json.dumps` handle quoting.

- **Golf terms:** translate naturally per market. German, French, Dutch and Swedish keep "fairway", "bunker", "green"; Spanish uses "calle", "bunker", "green".
- **Tone:** match Andy's voice, short and specific. No travel-brochure warmth in any language.
- **Banned words apply in every language** (no equivalents of stunning, breathtaking, nestled, and so on).
- **Prices and numbers follow the locale:** ES/DE/FR/SV put the euro sign after the number (`76 €`); NL puts it before (`€76`); ZH writes `76欧元`. Thousands: `6.021 m` (ES/DE), `6 021 m` (FR/SV), `6.021m` (NL), `6021米` (ZH).
- **Place names:** never translate course names. Accents stay (Calvià). French uses "Majorque"; Chinese uses 马略卡（Mallorca）and 帕尔马 for Palma.
- **Distances Andy gives in feet** are converted to metres in translation.
- **CTA links:** short and action-oriented per language. Facts blocks: translate labels, keep numeric values.

| Locale | Key differences |
|--------|----------------|
| de | "Green", "Fairway" unchanged; informal voice, no formal "Sie" |
| es | "calle" for fairway, "bunker" for bunker; "green" unchanged; tu form |
| fr | "fairway"/"bunker"/"green" unchanged; no need for formal vouvoiement in blog copy |
| nl | "fairway"/"bunker"/"green" unchanged; informal "je/jij" |
| sv | "fairway"/"bunker"/"green" unchanged; informal "du" |
| zh | Simplified Chinese; 球道 (fairway), 沙坑 (bunker), 果岭 (green), 标准杆 (par), 发球台 (tee); keep course names in English |

Translations are AI-written: say so when handing over and offer a native-speaker skim for ZH, SV and NL.

---

## What done looks like

- Live URL renders correctly in all seven locales, photos right way up, full image visible
- Card looks right at thumbnail size and sits where Andy asked in every locale
- The social preview JPG is the photo Andy picked and returns 200
- Voice self-read done, build green, CI green, Vercel READY
- Played-courses list updated in Drive (`MMG_ENCYCLOPAEDIA_DATA_MASTER.md`)
