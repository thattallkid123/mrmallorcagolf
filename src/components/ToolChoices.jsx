'use client'
import { Children, cloneElement, isValidElement, useEffect, useId, useRef, useState } from 'react'
import { getToolChoiceLabels } from '../lib/tool-choice-labels'
import ToolPhoto from './ToolPhoto'

function containsPhoto(choice) {
  return isValidElement(choice) && Children.toArray(choice.props.children).some(child => isValidElement(child) && child.type === ToolPhoto)
}

function LocationIllustration() {
  return <span className="tool-choice-placeholder" aria-hidden="true">
    <svg viewBox="0 0 80 80" fill="none" focusable="false">
      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeDasharray="3 5" opacity=".35" />
      <path d="M55 33c0 12-15 26-15 26S25 45 25 33a15 15 0 1 1 30 0Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="40" cy="33" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  </span>
}

export default function ToolChoices({ children, locale = 'en', className = '' }) {
  const choices = Children.toArray(children)
  const hasPhotos = choices.some(containsPhoto)
  const balancedChoices = hasPhotos ? choices.map(choice => {
    if (!isValidElement(choice) || choice.type !== 'button' || containsPhoto(choice)) return choice
    return cloneElement(choice, {
      children: [<LocationIllustration key="location-illustration" />, ...Children.toArray(choice.props.children)],
    })
  }) : choices
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
  return <div className={`tool-choices${hasPhotos ? ' tool-choices--photos' : ''}`}>
    {edges.overflow && <div className="tool-choices__nav">
      <span>{hint}</span>
      <button type="button" aria-label={previous} aria-controls={id} disabled={!edges.previous} onClick={() => scroll(-1)}>←</button>
      <button type="button" aria-label={next} aria-controls={id} disabled={!edges.next} onClick={() => scroll(1)}>→</button>
    </div>}
    <div id={id} ref={track} className={`tool-choice-track tool-choice-track--${Children.count(children)} ${className}`.trim()}>{balancedChoices}</div>
  </div>
}
