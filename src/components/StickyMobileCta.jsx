'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyMobileCta({ primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollThreshold = 300 // Show after scrolling 300px
      const footerBuffer = 200 // Hide when within 200px of footer

      const shouldShow = scrollTop > scrollThreshold && scrollTop < docHeight - winHeight - footerBuffer

      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="sticky-mobile-cta">
      <div className="sticky-mobile-cta__inner">
        <Link href={primaryHref} className="sticky-mobile-cta__primary">
          {primaryLabel}
        </Link>
        <a href={secondaryHref} className="sticky-mobile-cta__secondary" target="_blank" rel="noopener noreferrer">
          {secondaryLabel}
        </a>
      </div>
    </div>
  )
}
