'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function WinnersProofStrip({ images }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const pauseTimer = useRef(null)
  const autoScrollRafRef = useRef(null)
  const lastTickRef = useRef(0)
  const allImages = [...images, ...images]

  const pauseBriefly = () => {
    setPaused(true)
    clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setPaused(false), 2200)
  }

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return undefined

    const scrollStep = (timestamp) => {
      if (!lastTickRef.current) {
        lastTickRef.current = timestamp
      }
      const delta = timestamp - lastTickRef.current
      lastTickRef.current = timestamp

      if (!paused) {
        const speedPxPerSecond = 36
        viewport.scrollLeft += (speedPxPerSecond * delta) / 1000
        const loopWidth = track.scrollWidth / 2
        if (viewport.scrollLeft >= loopWidth) {
          viewport.scrollLeft -= loopWidth
        }
      }

      autoScrollRafRef.current = window.requestAnimationFrame(scrollStep)
    }

    autoScrollRafRef.current = window.requestAnimationFrame(scrollStep)
    return () => {
      if (autoScrollRafRef.current) {
        window.cancelAnimationFrame(autoScrollRafRef.current)
      }
      clearTimeout(pauseTimer.current)
    }
  }, [paused])

  return (
    <div
      ref={viewportRef}
      className="winners-proof"
      aria-label="Competition winners coached by Andy over the years"
      onPointerDown={pauseBriefly}
      onWheel={pauseBriefly}
      onTouchStart={pauseBriefly}
      onTouchEnd={pauseBriefly}
    >
      <div ref={trackRef} className={`winners-proof__track${paused ? ' paused' : ''}`}>
        {allImages.map((image, index) => (
          <figure className="winners-proof__card" key={`${image.src}-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 4}
              quality={90}
              sizes="(max-width: 700px) 44vw, 260px"
              style={{ objectFit: 'contain', objectPosition: image.position || 'center center' }}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
