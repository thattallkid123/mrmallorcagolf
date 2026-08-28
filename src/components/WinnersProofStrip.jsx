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
    let raf
    const pauseBriefly = () => {
      pausedUntil = performance.now() + 2200
    }

    const tick = () => {
      if (performance.now() > pausedUntil) {
        // Snap to whole DEVICE pixels, not whole CSS pixels. Math.round() alone
        // lands on an integer CSS pixel, which at fractional display scaling
        // (Windows 125% => dpr 1.25) is a fractional device pixel, so the
        // compositor resamples this scrolling layer every frame and card edges
        // land mid-pixel - seen as a soft image and a hard seam inside a card.
        // Reproduced at dpr 1.25 and never at dpr 1 or 2, which is exactly the
        // signature of CSS-pixel rounding. Read dpr per frame so browser zoom
        // is handled too. (2026-08-28)
        const dpr = window.devicePixelRatio || 1
        viewport.scrollLeft = Math.round((viewport.scrollLeft + 1) * dpr) / dpr
        if (viewport.scrollLeft >= track.scrollWidth / 2) {
          viewport.scrollLeft = 0
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
