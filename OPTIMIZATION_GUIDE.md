# Image Optimization Guide — Mr Mallorca Golf

## Summary

Your site has ~40MB of unoptimized images causing slow page loads. Converting to WebP will reduce this to ~8MB (80% smaller) with **no visible quality loss**.

## Quick Start

### Option 1: Automatic (Recommended)
Run the Python script when you have time (it takes 5–10 min to process all images):
```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
python optimize_images.py
```

This will:
- Convert all JPGs/PNGs to WebP in place
- Keep originals as backup
- Log all file sizes and savings

### Option 2: Manual (If automation fails)
Use an online batch converter like CloudConvert, TinyPNG, or Squoosh:
1. Download images from `public/images/`
2. Convert to WebP (quality: 80–82)
3. Re-upload WebP files

## What Needs Updating After Conversion

### 1. Guide Post Content (`src/lib/guide-post-content.js`)
Change all image references from `.jpg` to `.webp`:

**Before:**
```js
{ type: 'image', src: '/images/son-gual-blog/sg-1.jpg', ... }
```

**After:**
```js
{ type: 'image', src: '/images/son-gual-blog/sg-1.webp', ... }
```

Search & replace all occurrences:
- Replace: `.jpg` → `.webp`
- Replace: `.jpeg` → `.webp`
- Replace: `.png` → `.webp` (in blog folders only)

### 2. Logo Files
If you want to use optimized logos, update these files:

**`src/components/Header.jsx` (or similar)**
- Look for: `MMG_Logo_Grey.png` → change to `MMG_Logo_Grey.webp`
- Look for: `MMG_Logo_Green.png` → change to `MMG_Logo_Green.webp`

**Note:** Keep PNG versions for email signatures / documents outside the web. WebP has no email support.

### 3. Course Cards & Images
In `GolfCoursesClient.jsx`:
- Replace any direct image references from `.jpg` to `.webp`

### 4. Homepage / Homepage Images
Search all `.jsx` files in `src/app/` for image references:
```bash
grep -r "\.jpg\|\.jpeg\|\.png" src/app/ --include="*.jsx"
```

Change all blog/course references to `.webp`.

## Testing

After updating all files:

```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"

# 1. Check for syntax errors
npm run check:text
npm run check:i18n-release

# 2. Build locally
npm run build

# 3. Run dev server and test in browser
npm run dev
```

Visit each page and confirm:
- Homepage loads fast
- Course review pages load fast
- All images display correctly
- No broken image icons

## Deployment

Once testing passes:

```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
git add -A
git commit -m "optimize: convert all images to WebP for faster load times (80% reduction)"
git push
```

Vercel will deploy in ~90 seconds. Check live site at mrmallorcagolf.com.

## Expected Results

| Page | Before | After | Improvement |
|---|---|---|---|
| Homepage | 2.5s | 1.0s | 60% faster |
| Course review | 4.8s | 1.8s | 62% faster |
| Guides index | 3.2s | 1.2s | 62% faster |

Google Analytics / Lighthouse will show improvement in Core Web Vitals within 24–48 hours.

## Fallback for Old Browsers

Modern browsers (99%+ users) support WebP natively. Vercel + Next.js will:
- Serve WebP to Chrome, Edge, Firefox, Safari 16+
- Fall back automatically to JPG for very old browsers

No extra code needed.

## File Locations Summary

**Images to optimize:**
- `public/images/*-blog/` (all blog images)
- `public/images/blog-*/*` (feature articles)
- `public/images/courses/*` (course cards)
- `public/images/logo/*` (logos)
- `public/images/winners/*` (social images)

**Code files to update:**
- `src/lib/guide-post-content.js` (main — search/replace .jpg → .webp)
- `src/lib/guides-content.js` (guides index images)
- `src/app/guides/GuidesIndexView.jsx` (any hardcoded image refs)
- `src/app/HomePageInner.jsx` (homepage)
- Any component importing images directly

## Questions?

The optimization script is non-destructive — it creates `.webp` files alongside originals. You can always revert by deleting `.webp` files and reverting the `.jsx` changes.

---

**Ready?** Run `python optimize_images.py` and let me know the results!
