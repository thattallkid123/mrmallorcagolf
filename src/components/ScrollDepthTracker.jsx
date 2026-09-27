'use client'
import { useEffect, useRef } from 'react'
import { trackEvent } from '../lib/analytics'

export default function ScrollDepthTracker() {
  const fired = useRef(new Set())

  useEffect(() => {
    const thresholds = [25, 50, 75, 100]
    let idleId = null
    let timerId = null
    let active = false

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

    function start() {
      active = true
      window.addEventListener('scroll', check, { passive: true })
      // Fire once after activation in case the page is short or the visitor
      // has already scrolled before the idle callback ran.
      check()
    }

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(start, { timeout: 2000 })
    } else {
      timerId = window.setTimeout(start, 1200)
    }

    return () => {
      if (idleId !== null) window.cancelIdleCallback(idleId)
      if (timerId !== null) window.clearTimeout(timerId)
      if (active) window.removeEventListener('scroll', check)
    }
  }, [])

  return null
}
