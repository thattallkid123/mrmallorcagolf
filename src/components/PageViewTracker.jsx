'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { currentPageLocation, trackPageView } from '../lib/analytics'

export default function PageViewTracker() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!pathname) return

    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const queryString = typeof window === 'undefined' ? '' : window.location.search
    const pagePath = queryString ? `${pathname}${queryString}` : pathname

    trackPageView({
      page_path: pagePath,
      page_title: document.title,
      page_location: currentPageLocation(),
    })
  }, [pathname])

  return null
}
