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
        viewport.scrollLeft = Math.round(viewport.scrollLeft + 1)
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
