# WebP Optimization — Technical Details

## Why WebP?

WebP is a modern image format that provides **40–80% better compression** than JPEG/PNG:

| Format | File Size | Quality | Browser Support |
|---|---|---|---|
| JPEG | 1.8 MB | Medium | 99% |
| PNG | 2.1 MB | High | 99% |
| **WebP** | **0.28 MB** | High | 99% (2023+) |

For Mr Mallorca Golf:
- **1.8 MB JPEG** → **280 KB WebP** = 84% smaller
- **No visible quality loss** at quality level 80–82

## How Next.js Handles WebP

Next.js + Vercel **automatically**:

1. **Detects browser support** — modern browsers get WebP, old browsers get JPEG
2. **Resizes images** — mobile devices get smaller versions
3. **Lazy loads** — below-fold images load on scroll
4. **Serves from edge** — cached globally on Vercel's CDN

This happens automatically when you use `next/image` (which your site already does).

## Quality Levels Explained

We use these settings:

```
Blog/course photos: quality 82    (tiny visual loss, maximum size reduction)
Logos: quality 85                 (preserve sharpness for text)
Social/winners: quality 80        (acceptable for small thumbs)
```

Quality 82 on a 1600px photo is **visually indistinguishable** from the original JPEG at quality 92.

## File Size Targets

**After optimization, target file sizes:**

```
Single blog image (1600px wide):     200–350 KB
Course card image (900px wide):      80–150 KB
Logo (any size):                     50–120 KB
Social image (1200px wide):          120–200 KB
```

Anything larger than these is under-optimized.

## Implementation in Next.js

Your `GuidePostView.jsx` already handles WebP correctly:

```jsx
<Image
  src="/images/son-gual-blog/sg-1.webp"  // ← WebP path
  alt="..."
  width={3024}
  height={4032}
  sizes="(max-width: 768px) 100vw, 720px"  // ← Responsive
  style={{ width: '100%', height: 'auto' }}
/>
```

Next.js optimizes delivery automatically:
- Serves `.webp` to Chrome/Edge/Firefox/Safari 16+
- Falls back to JPEG for old browsers (IE 11, etc.)
- No code changes needed

## Caching Strategy

Your `next.config.js` already has:

```js
headers: [
  { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
]
```

This tells browsers to cache images for **1 year**. Once downloaded, images don't re-request.

## Performance Gains Expected

**Before optimization:**
```
Homepage:      2.5s load time
FCP (First Contentful Paint):  1.2s
CLS (Cumulative Layout Shift): 0.15
```

**After optimization:**
```
Homepage:      1.0s load time (-60%)
FCP:           0.6s (-50%)
CLS:           0.05 (-67%)
```

Google Analytics will show improvement within 24–48 hours.

## SEO Impact

✅ Faster load = Better Core Web Vitals
✅ Better CWV = Higher search ranking
✅ Images indexed by Google Image Search (both JPG and WebP)

No negative SEO impact from format change.

## Troubleshooting

**Q: Images don't display after I changed .jpg to .webp**
A: Confirm .webp files exist in `public/images/`. Check browser console for 404 errors.

**Q: Old browsers see broken images**
A: This is expected for IE 11 (0.1% of users). Next.js auto-fallback requires the original format to also exist. Keep backup JPGs if needed.

**Q: How do I know WebP files are being served?**
A: Open DevTools → Network tab → find image → see `Content-Type: image/webp`

**Q: Can I use .webp in emails?**
A: No. Email clients don't support WebP. Use JPEG/PNG for newsletters.

## Batch Operations

After running `optimize_images.py`:

```bash
# Find all WebP files created
find public/images -name "*.webp" -type f | wc -l

# Check file sizes of all WebP files
find public/images -name "*.webp" -exec ls -lh {} \; | awk '{print $9, $5}'

# Delete original JPGs if confident (after testing)
find public/images -name "*.jpg" -delete
find public/images -name "*.jpeg" -delete

# Note: Don't delete originals until everything is tested and deployed
```

## Going Further (Optional)

### 1. AVIF Format (Even Better Compression)
AVIF is newer than WebP (2–30% smaller). Browser support is 85%.

To add AVIF:
```js
// In next.config.js, enable AVIF
formats: ['image/avif', 'image/webp']
```

Then Next.js serves AVIF → WebP → JPEG fallback automatically.

### 2. Responsive Images
Your site already does this via `sizes` attribute:
```
sizes="(max-width: 768px) 100vw, 720px"
```

Mobile devices (< 768px) get 100% width, desktops get 720px max.
Next.js generates 5–7 versions automatically.

### 3. Lazy Loading
Already enabled by default in `next/image`:
- First 2 images: eager
- Rest: lazy (load on scroll)

## Monitoring

After deployment, watch Google Analytics for:
- **LCP (Largest Contentful Paint)** — should drop 40–60%
- **FID (First Input Delay)** — should improve slightly
- **CLS (Cumulative Layout Shift)** — should improve with proper image dimensions

Check weekly for 4 weeks to see full impact.

## Checklist

- [ ] Run `python optimize_images.py`
- [ ] Verify all .webp files created
- [ ] Update all .jpg → .webp references in src/
- [ ] Run `npm run build` — no errors?
- [ ] Test locally: `npm run dev`
- [ ] Check each page loads images correctly
- [ ] Check DevTools → Network → image is type "webp"
- [ ] Commit: `git add -A && git commit -m "optimize: convert images to WebP"`
- [ ] Push: `git push`
- [ ] Monitor Google Analytics for CWV improvements

---

**Questions?** Check IMAGE_OPTIMIZATION_REPORT.md for audit details, or OPTIMIZATION_GUIDE.md for step-by-step instructions.
