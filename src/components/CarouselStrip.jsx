'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

/**
 * Generic horizontal carousel with auto-scroll for images
 * - Auto-scrolls at 1px/frame
 * - Pauses 1.8s on pointer/wheel/touch interaction
 * - Duplicates items for infinite loop
 * - Respects prefers-reduced-motion
 */
export default function CarouselStrip({
  items,
  label,
  heading,
  containerClassName = 'carousel-strip',
  viewportClassName = 'carousel-strip__viewport',
  trackClassName = 'carousel-strip__track',
  itemClassName = 'carousel-strip__item',
}) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const allItems = [...items, ...items]

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let pausedUntil = 0
    let raf

    const pauseBriefly = () => {
      pausedUntil = performance.now() + 1800
    }

    const tick = () => {
      if (performance.now() > pausedUntil) {
        viewport.scrollLeft = Math.round(viewport.scrollLeft + 1)
        if (viewport.scrollLeft >= track.scrollWidth / 2) viewport.scrollLeft = 0
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
    <section className={containerClassName}>
      {label && heading && (
        <div className={`${containerClassName}__header`}>
          <p className={`${containerClassName}__label`}>{label}</p>
          <h2 className={`serif-display ${containerClassName}__title`}>{heading}</h2>
        </div>
      )}
      <div ref={viewportRef} className={viewportClassName} aria-label="Carousel">
        <div ref={trackRef} className={trackClassName}>
          {allItems.map((item, i) => (
            <div key={item.src} className={itemClassName}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 72vw, 320px" style={{ objectFit: 'cover', objectPosition: item.pos }} />
            </div>
          ))}
        </div>
        <div className={`${containerClassName}__fade ${containerClassName}__fade--left`} />
        <div className={`${containerClassName}__fade ${containerClassName}__fade--right`} />
      </div>
    </section>
  )
}
