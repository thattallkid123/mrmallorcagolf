# How to Make More MMG Carousels

All carousels use the Python script at:
`C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\carousels\carousel_gen.py`

(copy of the generator lives here for easy re-use)

## To make a carousel for a new course

1. **Tell Claude:** "Make a carousel for [course name]" and provide:
   - The blog page URL (e.g. mrmallorcagolf.com/guides/[slug]-review)
   - Any phone pics you want to use as the Slide 4 (people/client shot)
   - The course's Instagram handle if known

2. **Claude will:**
   - Read the course content from `guide-post-content.js`
   - Select the best 5 images from the blog image folder
   - Build 5 slides: Cover → At a Glance → Why It Stands Out → Quote/Recommendation → CTA
   - Write the Instagram caption
   - Save JPGs to `carousels/[course_name]/`

## 5-slide structure (always this order)

| Slide | Type | Image | Copy |
|-------|------|-------|------|
| 1 | Cover | Hero/aerial landscape | Course name hook + punchy summary line |
| 2 | At a Glance | Same or similar landscape | 2×2 stats box: price, difficulty, par, special fact |
| 3 | Why It Stands Out | Course action shot | Eyebrow + headline + 3 bullets |
| 4 | Quote/Recommendation | People/client photo (sky panel gradient) | Andy's verbatim quote from the review |
| 5 | CTA | Landscape/wide | "Read the full review" + course Instagram handle |

## Brand rules (non-negotiable)

- Font: **Lora Bold + Lora Italic only** — no exceptions
- Size: 1080×1350px (4:5 portrait)
- Colours: White headlines, Cream body, Gold accents, Sage labels, Deep green backgrounds
- No backing boxes behind any text
- No text over faces
- Footer: "MRMALLORCAGOLF.COM" + slide count, shadow only

## Image paths

Blog images live at:
`C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\[course-slug]-blog\`

Naming convention: `[prefix]-1.jpg` through `[prefix]-8.jpg` + hero

| Course | Prefix | Folder |
|--------|--------|--------|
| Son Gual | sg | son-gual-blog |
| Alcanada | alc | alcanada-blog |
| Son Muntaner | sm | son-muntaner-blog |
| Santa Ponsa 1 | sp | santa-ponsa-blog |
| Golf Andratx | andratx | golf-andratx-blog |
| Son Termes | st | son-termes-blog |

## Generator script

The Python script is in this folder: `carousel_gen.py`

Run it with:
```
python3 carousel_gen.py
```

Or ask Claude: "Regenerate the [course] carousel" and it will update the script and re-run.

## Phone pics

When you have new phone pics to use (especially for Slide 4 client shots):
- Save them to `C:\Users\andyg\Downloads\` or `public\images\[course]-blog\`
- Tell Claude which slide to use them on
- Claude will crop and composite automatically

## Adding Son Termes and Golf Andratx

When ready, say: "Make a carousel for Son Termes" or "Make a carousel for Golf Andratx"
The images are already in the blog folders and the content is in guide-post-content.js.
Son Termes: use the goat photo (st-2.jpg) on Slide 4 — it's memorable and on-brand.
Golf Andratx: use the hole-8 view shot as cover — best panorama in SW Mallorca.
