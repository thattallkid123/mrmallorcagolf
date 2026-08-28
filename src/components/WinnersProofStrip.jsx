'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function WinnersProofStrip({ images }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const allImages = [...images, ...images]

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pausedUntil = 0
    const dprStepCache = { dpr: 0, step: 1 }
    let target = 0
    let lastCommitted = 0
    let raf
    const pauseBriefly = () => {
      pausedUntil = performance.now() + 2200
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
    <div
      ref={viewportRef}
      className="winners-proof"
      aria-label="Competition winners coached by Andy over the years"
      tabIndex={0}
    >
      <div ref={trackRef} className="winners-proof__track">
        {allImages.map((image, index) => (
          <figure className={`winners-proof__card winners-proof__card--${image.variant || 'square'}`} key={`${image.src}-${index}`}>
            <div className="winners-proof__media">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 4}
                quality={90}
                sizes="(max-width: 700px) 44vw, 260px"
                className="winners-proof__img winners-proof__img--fg"
                style={{
                  objectFit: 'cover',
                  objectPosition: image.position || 'center 36%',
                  transform: `scale(${image.zoom || 1.08})`,
                }}
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  )
}
