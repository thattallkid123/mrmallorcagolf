'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

// Venue cards — add real photos to /public/images/career/ when available
// For now, existing site photos are reused as placeholders
const CAREER_VENUES = [
  { name: 'Pebble Beach',          detail: 'California, USA',        img: '/images/career/pebble-beach.webp' },
  { name: 'The Open Championship', detail: 'United Kingdom',          img: '/images/career/the-open.webp' },
  { name: 'Evian Championship',    detail: "France · Women's Major",  img: '/images/career/evian.webp' },
  { name: 'Doral',                 detail: 'Miami, USA',              img: '/images/career/doral.webp' },
  { name: 'World Cruise',          detail: '40+ Countries',           img: '/images/career/cruise.webp' },
  { name: 'TPI Oceanside',         detail: 'California, USA',         img: '/images/career/tpi.webp' },
  { name: 'Shanghai',              detail: 'China · 11 Years',        img: '/images/career/shanghai.webp' },
  { name: 'Egypt International',   detail: 'Cairo, Egypt',            img: '/images/career/egypt.webp' },
]

export default function CareerStrip({ label = "Where I've been", heading = 'Built across some very different golf environments.' }) {
  const trackRef = useRef(null)
  const allVenues = [...CAREER_VENUES, ...CAREER_VENUES]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let raf
    const tick = () => {
      pos += 0.45
      if (pos >= track.scrollWidth / 2) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="career-strip">
      <div className="career-strip__header">
        <p className="career-strip__label">{label}</p>
        <h2 className="serif-display career-strip__title">{heading}</h2>
      </div>
      <div className="career-strip__viewport">
        <div ref={trackRef} className="career-strip__track">
          {allVenues.map((v, i) => (
            <div key={i} className="career-strip__card">
              {v.img ? (
                <>
                  <div className="career-strip__card-img">
                    <Image
                      src={v.img}
                      alt={v.name}
                      fill
                      sizes="260px"
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
        <div className="career-strip__fade career-strip__fade--left" />
        <div className="career-strip__fade career-strip__fade--right" />
      </div>
    </section>
  )
}
