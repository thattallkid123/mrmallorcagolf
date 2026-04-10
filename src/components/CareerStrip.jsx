'use client'
import { useRef, useEffect } from 'react'

const CAREER_VENUES = [
  { name: 'Pebble Beach', detail: 'California, USA' },
  { name: 'The Open Championship', detail: 'UK' },
  { name: 'Evian Championship', detail: "France · Women's Major" },
  { name: 'Doral', detail: 'Miami, USA' },
  { name: 'World Cruise', detail: '40+ Countries' },
  { name: 'TPI Oceanside', detail: 'California, USA' },
  { name: 'Egypt International Pro-Am', detail: 'Cairo, Egypt' },
  { name: 'Shanghai', detail: 'China · 11 Years' },
]

export default function CareerStrip({ label = 'Venues & experience', heading = 'Where the career was built.' }) {
  const trackRef = useRef(null)
  const allVenues = [...CAREER_VENUES, ...CAREER_VENUES]
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let raf
    const tick = () => {
      pos += 0.4
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
              <p className="career-strip__card-name">{v.name}</p>
              <p className="career-strip__card-detail">{v.detail}</p>
            </div>
          ))}
        </div>
        <div className="career-strip__fade career-strip__fade--left" />
        <div className="career-strip__fade career-strip__fade--right" />
      </div>
    </section>
  )
}
