'use client'
import { useEffect, useRef } from 'react'
import { animateWhenVisible } from '../lib/animate-when-visible'

export function PwapPhotoStrip({ label, children }) {
  const stripViewportRef = useRef(null)
  const stripTrackRef = useRef(null)
  useEffect(() => {
    const viewport = stripViewportRef.current
    const track = stripTrackRef.current
    if (!viewport || !track) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let pausedUntil = 0
    const dprStepCache = { dpr: 0, step: 1 }
    let target = 0
    let lastCommitted = 0
    let halfWidth = 0

    const setHalfWidth = () => {
      halfWidth = track.scrollWidth / 2
    }

    const pauseBriefly = () => {
      pausedUntil = performance.now() + 1800
    }

    const normalizeLoopPosition = () => {
      if (!halfWidth) return
      if (viewport.scrollLeft >= halfWidth) viewport.scrollLeft -= halfWidth
      if (viewport.scrollLeft < 0) viewport.scrollLeft += halfWidth
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
        // discards that fractional value on write anyway. This version
        // tracks the intended continuous position in `target` (never read
        // back from the rounded scrollLeft, which would lose all sub-step
        // progress every frame - an earlier version of this fix got stuck
        // permanently at 0 for exactly that reason) and only WRITES
        // scrollLeft when target crosses the next safe multiple. Resyncs
        // target from the live scrollLeft whenever it no longer matches what
        // was last committed, so a manual drag-scroll can't desync it.
        // normalizeLoopPosition()'s own +-halfWidth wraparound can land on a
        // non-safe value for a single frame at the loop boundary - accepted
        // as a rare, one-off imperfection rather than engineering around it,
        // since the per-frame case (most of the time) is what mattered.
        // (2026-08-28)
        //
        // 2026-09-13: this strip never actually scrolled on real devices
        // (Andy confirmed static on both mobile and desktop) because a line
        // below reset `target = lastCommitted` at the end of every frame -
        // exactly the "gets stuck permanently" failure mode described above,
        // reintroduced by accident. Whenever `step` > 1 (any dpr that isn't
        // a whole number, which is most phones and any scaled Windows
        // display), `target`'s fractional accumulation between frames was
        // wiped before it could cross the next `step` multiple, so
        // `committed` never advanced past its starting value. Removed;
        // `target` now free-runs every frame exactly like the proven-working
        // WinnersProofStrip.jsx version, which never had this line.
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
        normalizeLoopPosition()
        lastCommitted = viewport.scrollLeft
      }
    }

    setHalfWidth()
    window.addEventListener('resize', setHalfWidth)

    viewport.addEventListener('pointerdown', pauseBriefly)
    viewport.addEventListener('wheel', pauseBriefly, { passive: true })
    viewport.addEventListener('touchstart', pauseBriefly, { passive: true })
    viewport.addEventListener('scroll', normalizeLoopPosition, { passive: true })
    const stopAnimation = animateWhenVisible(viewport, tick)

    return () => {
      stopAnimation()
      window.removeEventListener('resize', setHalfWidth)
      viewport.removeEventListener('pointerdown', pauseBriefly)
      viewport.removeEventListener('wheel', pauseBriefly)
      viewport.removeEventListener('touchstart', pauseBriefly)
      viewport.removeEventListener('scroll', normalizeLoopPosition)
    }
  }, [])
  return <div className="pwap-day-strip" aria-label={label} ref={stripViewportRef} tabIndex={0}>
    <div className="pwap-day-strip__track" ref={stripTrackRef}>{children}</div>
  </div>
}

export function PwapReviewCarousel({ label, buttonLabel, children }) {
  const testimonialsGridRef = useRef(null)
  const scrollTestimonials = () => {
    const grid = testimonialsGridRef.current
    if (!grid) return
    const cardWidth = grid.querySelector('.testimonial')?.offsetWidth || 360
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4
    grid.scrollTo({ left: atEnd ? 0 : grid.scrollLeft + cardWidth + 2, behavior: 'smooth' })
  }
  return <div className="testimonials__grid-wrap">
    <div className="testimonials__grid" ref={testimonialsGridRef} aria-label={label} tabIndex={0}>{children}</div>
    <button type="button" className="testimonials__scroll-btn" onClick={scrollTestimonials} aria-label={buttonLabel}>→</button>
  </div>
}
