'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Scrolls to the top on a route change, except when the URL has a #section:
// then it scrolls to that section. Before 2026-10-11 it always went to the top,
// so every link to a section on another page (/plan-your-trip#trip-ideas, the
// homepage "Plan the whole trip" card) opened at the top of the page.
export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.history.scrollRestoration = 'manual'
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    // Wait for layout (images, deferred sections) before scrolling to the section.
    let tries = 0
    const timer = window.setInterval(() => {
      const target = document.getElementById(id)
      tries += 1
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        if (tries >= 3) window.clearInterval(timer)
      } else if (tries >= 20) {
        window.clearInterval(timer)
      }
    }, 100)
    return () => window.clearInterval(timer)
  }, [pathname])

  return null
}
