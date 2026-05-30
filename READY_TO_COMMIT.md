# Ready to Commit & Deploy

## Summary
- Auto-scroll carousels for both PWAP image sections (which course + proof of work)
- Plan Your Trip featured flag fixed to false across all 6 languages

## Files Modified

### New Files
- `src/components/CarouselStrip.jsx` — Reusable carousel component with auto-scroll, pause-on-interaction, fade edges

### Modified Files
- `src/app/play-with-a-pro/PlayWithAProView.jsx`
  - Added: `import CarouselStrip`
  - Replaced: collage grid "Which course" section with `<CarouselStrip>` (pwap-day-carousel)
  - Replaced: testimonials grid "Proof of work" section with `<CarouselStrip>` (pwap-testimonials-carousel)

- `src/lib/play-with-a-pro-content.js`
  - Fixed DE/ES/FR/NL/SV/ZH Plan Your Trip tier: `featured: true` → `featured: false`
  - Now matches EN and produces correct color sequence: cream, green, gold, cream

- `src/styles/globals.css`
  - Added: `.pwap-day-carousel*` styles (360x360px desktop, 280x280px mobile)
  - Added: `.pwap-testimonials-carousel*` styles (same dimensions)
  - Added: fade gradients for both carousels
  - Added: responsive media query adjustments

## Changes
Both sections now display full-size, uncroppoed client photos that auto-scroll horizontally at 1px/frame with 1.8s pause on user interaction. Matches "Where I've been" carousel behavior.

## Commit Command
```bash
git add -A
git commit -m "feat: Auto-scroll carousels for PWAP images + fix Plan Your Trip featured flag across all languages"
git push
```

## After Push
Vercel will auto-deploy. Check: https://mrmallorcagolf.vercel.app/play-with-a-pro
