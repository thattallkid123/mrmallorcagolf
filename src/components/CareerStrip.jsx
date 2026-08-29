'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

// Venue cards — add real photos to /public/images/career/ when available
// For now, existing site photos are reused as placeholders
const CAREER_VENUES = [
  { name: 'Pebble Beach',          detail: 'California, USA',        img: '/images/career/pebble-beach.webp' },
  { name: 'The Open Championship', detail: 'United Kingdom',          img: '/images/career/the-open.webp', variant: 'open' },
  { name: 'Evian Championship',    detail: "France · Women's Major",  img: '/images/career/evian.webp' },
  { name: 'Doral',                 detail: 'Miami, USA',              img: '/images/career/doral.webp' },
  { name: 'World Cruise',          detail: '40+ Countries',           img: '/images/career/cruise.webp' },
  { name: 'TPI Oceanside',         detail: 'California, USA',         img: '/images/career/tpi.webp' },
  { name: 'Shanghai',              detail: 'China · 11 Years',        img: '/images/career/shanghai.webp' },
  { name: 'Egypt International',   detail: 'Cairo, Egypt',            img: '/images/career/egypt.webp' },
]

export default function CareerStrip({ label = "Where I've been", heading = 'Built across some very different golf environments.' }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const allVenues = [...CAREER_VENUES, ...CAREER_VENUES]

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    let pausedUntil = 0
    const dprStepCache = { dpr: 0, step: 1 }
    let target = 0
    let lastCommitted = 0
    let raf

    const pauseBriefly = () => {
      pausedUntil = performance.now() + 1800
    }

    const tick = () => {
      if (performance.now() > pausedUntil) {
        // scrollLeft is a whole-CSS-pixel-only API - Chromium rounds any
        // fractional value on write (verified directly: assigning 308.8 reads
        // back as 309). At fractional display scaling (Windows 125% => dpr
        // 1.25) a whole CSS pixel is a whole DEVICE pixel only when the CSS
        // value is a multiple of 4 (since 4*1.25=5) - the other 3 out of 4
        // values land on a fractional device pixel, which is what produced
        // the dark seam Andy could reproduce at will by changing zoom
        // (confirmed: persisted even while the strip was paused/static,
        // ruling out an animation-timing cause and pointing at the committed
        // position itself). A first attempt at this fix (multiply by dpr,
        // divide back down before writing) did nothing, because Chromium
        // discards that fractional value on write anyway - proved by
        // assigning a fractional value directly and reading it straight back
        // as an integer. This version tracks the intended continuous
        // position in `target` (never read back from the rounded scrollLeft,
        // which would lose all sub-step progress every frame - an earlier
        // version of this fix got stuck permanently at 0 for exactly that
        // reason) and only WRITES scrollLeft when target crosses the next
        // safe multiple. Resyncs target from the live scrollLeft whenever it
        // no longer matches what was last committed, so a manual drag-scroll
        // can't desync it. (2026-08-28)
        if (viewport.scrollLeft !== lastCommitted) target = viewport.scrollLeft
        target += 1
        const dpr = window.devicePixelRatio || 1
        if (dpr !== dprStepCache.dpr) {
          dprStepCache.dpr = dpr
          dprStepCache.step = 1
          for (let n = 1; n <= 200; n++) {
            if (Math.abs(n * dpr - Math.round(n * dpr)) < 0.02) { dprStepCache.step = n; break }
          }
        }
        const step = dprStepCache.step
        const committed = Math.round(target / step) * step
        viewport.scrollLeft = committed
        lastCommitted = committed
        if (committed >= track.scrollWidth / 2) {
          target = 0
          viewport.scrollLeft = 0
          lastCommitted = 0
        }
      }
      raf = requestAnimationFrame(tick)
    }

    viewport.addEventListener('pointerdown', pauseBriefly)
    viewport.addEventListener('wheel', pauseBriefly, { passive: true })
    viewport.addEventListener('touchstart', pauseBriefly, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      viewport.removeEventListener('pointerdown', pauseBriefly)
      viewport.removeEventListener('wheel', pauseBriefly)
      viewport.removeEventListener('touchstart', pauseBriefly)
    }
  }, [])

  return (
    <section className="career-strip">
      <div className="career-strip__header">
        <p className="career-strip__label">{label}</p>
        <h2 className="serif-display career-strip__title">{heading}</h2>
      </div>
      <div className="career-strip__viewport-wrap">
        <div ref={viewportRef} className="career-strip__viewport" aria-label="Career venues carousel" tabIndex={0}>
          <div ref={trackRef} className="career-strip__track">
            {allVenues.map((v, i) => (
              <div key={i} className={`career-strip__card${v.variant ? ` career-strip__card--${v.variant}` : ''}`}>
                {v.img ? (
                  <>
                    <div className="career-strip__card-img">
                      <Image
                        src={v.img}
                        alt={v.name}
                        fill
                        sizes="(max-width: 700px) 72vw, 320px"
                        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                      />
                      <div className="career-strip__card-scrim" />
                    </div>
                    <div className="career-strip__card-text">
                      <p className="career-strip__card-name">{v.name}</p>
                      <p className="career-strip__card-detail">{v.detail}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="career-strip__card-name">{v.name}</p>
                    <p className="career-strip__card-detail">{v.detail}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Fades live OUTSIDE .career-strip__viewport (the scrolling element)
            deliberately - as children of it, position:absolute + left:0/right:0
            only set their starting position within the scrollable content, not
            a pin to the visible edge. Overflow scrolling shifts ALL of a
            scroll container's content uniformly, absolutely-positioned
            descendants included, so the fades drifted left across the visible
            cards as scrollLeft advanced, momentarily overlaying whatever card
            was there with a dark gradient stripe - measured directly: at
            scrollLeft 1200 the "right" fade was rendering at viewport x
            [117,237], nowhere near the right edge. This is what Andy saw as a
            vertical line that moved around and didn't correlate with any real
            zoom/DPR cause, confirmed by disabling .career-strip__fade
            entirely on his machine (2026-08-28). Moving them to this
            non-scrolling wrapper (a sibling of .career-strip__viewport, not a
            descendant) fixes it: they position against a box that never
            scrolls, so they stay genuinely pinned to the edges. */}
        <div className="career-strip__fade career-strip__fade--left" />
        <div className="career-strip__fade career-strip__fade--right" />
      </div>
    </section>
  )
}
