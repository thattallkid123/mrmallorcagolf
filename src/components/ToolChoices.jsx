'use client'
import { useEffect, useId, useRef, useState } from 'react'
import { getToolChoiceLabels } from '../lib/tool-choice-labels'

export default function ToolChoices({ children, locale = 'en', className = '' }) {
  const track = useRef(null)
  const id = useId()
  const [edges, setEdges] = useState({ overflow: false, previous: false, next: false })
  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () => {
      const overflow = el.scrollWidth > el.clientWidth + 2
      setEdges({ overflow, previous: el.scrollLeft > 2, next: el.scrollLeft + el.clientWidth < el.scrollWidth - 2 })
    }
    const frame = requestAnimationFrame(update)
    const observer = new ResizeObserver(update)
    observer.observe(el)
    el.addEventListener('scroll', update, { passive: true })
    return () => { cancelAnimationFrame(frame); observer.disconnect(); el.removeEventListener('scroll', update) }
  }, [children])
  const [hint, previous, next] = getToolChoiceLabels(locale)
  function scroll(direction) {
    const el = track.current
    if (el) el.scrollBy({ left: direction * el.clientWidth * .8, behavior: 'smooth' })
  }
  return <div className="tool-choices">
    {edges.overflow && <div className="tool-choices__nav">
      <span>{hint}</span>
      <button type="button" aria-label={previous} aria-controls={id} disabled={!edges.previous} onClick={() => scroll(-1)}>←</button>
      <button type="button" aria-label={next} aria-controls={id} disabled={!edges.next} onClick={() => scroll(1)}>→</button>
    </div>}
    <div id={id} ref={track} className={`tool-choice-track ${className}`.trim()}>{children}</div>
  </div>
}
