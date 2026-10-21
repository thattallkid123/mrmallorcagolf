import localFont from 'next/font/local'

// Source .ttf files stay in MMG-Fonts/ for editing/reference, but next/font/local
// is pointed at .woff2 (generated via fontTools, `flavor = 'woff2'`) since it
// serves whatever format it's given rather than re-encoding it — .woff2's
// built-in Brotli compression cuts these files by ~70-78% with zero visual
// change (confirmed 2026-08-22 during a Lighthouse mobile-LCP investigation).
export const jost = localFont({
  src: [
    { path: '../../MMG-Fonts/Jost-300.woff2', weight: '300', style: 'normal' },
    { path: '../../MMG-Fonts/Jost-400.woff2', weight: '400', style: 'normal' },
    { path: '../../MMG-Fonts/Jost-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

export const cormorantGaramond = localFont({
  src: [
    { path: '../../MMG-Fonts/CormorantGaramond-Regular-400.woff2', weight: '400', style: 'normal' },
    { path: '../../MMG-Fonts/CormorantGaramond-Regular-500.woff2', weight: '500', style: 'normal' },
    { path: '../../MMG-Fonts/CormorantGaramond-Regular-600.woff2', weight: '600', style: 'normal' },
    { path: '../../MMG-Fonts/CormorantGaramond-Italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../MMG-Fonts/CormorantGaramond-Italic-500.woff2', weight: '500', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  // next/font/local sizes its stand-in from Arial by default, so serif headings
  // flashed as a sans font until Cormorant arrived (seen on /plan-your-trip,
  // 9 Oct 2026). A metric-matched Times New Roman keeps the stand-in a serif.
  adjustFontFallback: 'Times New Roman',
  // Keep Cormorant available for brand headings and editorial italic text, but
  // avoid forcing every display-font variant into the critical route head.
  // Jost stays explicitly configured as the body/UI font; Cormorant can load
  // on demand when heading and editorial styles need it.
  preload: false,
})

