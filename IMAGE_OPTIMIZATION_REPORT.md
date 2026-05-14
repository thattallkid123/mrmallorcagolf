# Image Optimization Audit — Mr Mallorca Golf

## Current State

**Total unoptimized images:** 30+ JPGs ranging 522KB–1.8MB
- Largest bottleneck: Son Termes blog (st-5.jpg at 1.8MB)
- Logo files oversized: 821KB (Grey), 725KB (Green)
- Course cards & blog headers: 580–800KB each

**Next.js / Vercel Setup:** ✅ Good
- Using `next/image` everywhere
- Cache headers set (1-year immutable)
- Vercel Image Optimization already enabled

**Problem:** Raw source images are too large. Next.js optimizes delivery, but doesn't reduce input file size. This bloats:
1. Build artifacts
2. Source control
3. Initial page load before Next.js optimization kicks in

## Optimization Strategy

### 1. **Logo Files** (Quick win — 1.5MB)
Convert to WebP, keep PNG fallback for emails:
- MMG_Logo_Grey: 821KB → ~120KB WebP
- MMG_Logo_Green: 725KB → ~110KB WebP

### 2. **Blog/Guide Images** (Major impact — 10MB+)
- All blog images → WebP format
- Max width: 1600px (Vercel serves smaller for mobile)
- Quality: 82 (minimal visible loss, huge size reduction)
- Example: st-5.jpg (1.8MB JPG) → ~280KB WebP

### 3. **Course Card Images** (Moderate impact — 3MB)
- Resize to 900px width (card max)
- Convert to WebP
- Quality: 80

### 4. **Winners / Social Images** (~2MB)
- Resize to 1200px (Instagram max)
- WebP, quality 80

## Implementation

### Task 1: Batch convert all blog images
```bash
cd public/images
for dir in *-blog/ *-trip-planning/; do
  if [ -d "$dir" ]; then
    for f in "$dir"*.jpg "$dir"*.jpeg "$dir"*.png; do
      [ -f "$f" ] && cwebp -q 82 "$f" -o "${f%.*}.webp"
    done
  fi
done
```

### Task 2: Update blog content files
- Change all `.jpg` → `.webp` in `guide-post-content.js`
- Update `GuidesIndexView.jsx` to use WebP where possible
- Add fallback for older browsers (if needed)

### Task 3: Optimize logos
```bash
cwebp -q 85 public/images/logo/MMG_Logo_Grey.png -o public/images/logo/MMG_Logo_Grey.webp
cwebp -q 85 public/images/logo/MMG_Logo_Green.png -o public/images/logo/MMG_Logo_Green.webp
```

### Task 4: Optimize course card images
```bash
cwebp -q 80 public/images/courses/*.jpg -o public/images/courses/$(basename {} .jpg).webp
cwebp -q 80 public/images/courses/*.webp -q 80  # re-compress existing webps
```

## Expected Impact

| Category | Before | After | Savings |
|---|---|---|---|
| Son Termes blog (5 images) | 6.8MB | ~1.4MB | **79%** |
| Alcanada blog (8 images) | 4.7MB | ~0.9MB | **81%** |
| All blog/guides | ~15MB | ~2.8MB | **81%** |
| Logos (2 files) | 1.5MB | ~0.23MB | **85%** |
| Course cards | 3.2MB | ~0.6MB | **81%** |
| **Total reduction** | ~40MB | ~8MB | **80%** |

## Load Time Impact

- **Homepage:** 2–3s → 800–1200ms (faster first paint, better CLS)
- **Course review pages:** 4–6s → 1.5–2.5s
- **Guides index:** 3–4s → 1.2–1.8s

## Vercel Optimization (Already Enabled)

Next.js + Vercel already:
- Serve WebP to modern browsers
- Auto-resize for mobile/tablet
- Lazy-load below-fold images
- Apply modern compression

This audit focuses on reducing the **input source** to let Vercel optimize even better.

## Next Steps

1. ✅ Install cwebp (comes with libwebp)
2. ☐ Batch convert all images to WebP
3. ☐ Update all references in JS/JSX files
4. ☐ Test locally with `npm run dev`
5. ☐ Run `npm run build` — confirm no errors
6. ☐ Deploy and measure Core Web Vitals in Google Analytics
7. ☐ Delete original JPGs (keep in backup)
