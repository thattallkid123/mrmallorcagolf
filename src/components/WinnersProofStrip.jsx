'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function WinnersProofStrip({ images }) {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const pauseTimer = useRef(null)
  const allImages = [...images, ...images]

  const pauseBriefly = () => {
    setPaused(true)
    clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setPaused(false), 2200)
  }

  return (
    <div
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
              style={{ objectFit: 'cover', objectPosition: image.position || 'center 35%' }}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
