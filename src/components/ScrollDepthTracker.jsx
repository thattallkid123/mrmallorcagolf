'use client'
import { useEffect, useRef } from 'react'
import { trackEvent } from '../lib/analytics'

export default function ScrollDepthTracker() {
  const fired = useRef(new Set())

  useEffect(() => {
    const thresholds = [25, 50, 75, 100]

    function check() {
      const el = document.documentElement
      const pct = ((window.scrollY + window.innerHeight) / el.scrollHeight) * 100
      for (const t of thresholds) {
        if (pct >= t && !fired.current.has(t)) {
          fired.current.add(t)
          trackEvent('scroll_depth', { depth: t, page_path: window.location.pathname })
        }
      }
    }

    window.addEventListener('scroll', check, { passive: true })
    // Fire once on mount in case the page is shorter than the viewport
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  return null
}
