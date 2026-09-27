'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const DISMISS_KEY = 'mmg-course-selector-popup-dismissed-at'
const DISMISS_WINDOW_MS = 1000 * 60 * 60 * 24 * 7

export default function HomepageLeadPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dismissedAt = window.localStorage.getItem(DISMISS_KEY)
    if (dismissedAt) {
      const dismissedTime = Number(dismissedAt)
      if (Number.isFinite(dismissedTime) && Date.now() - dismissedTime < DISMISS_WINDOW_MS) {
        return
      }
    }

    let fired = false
    function show() {
      if (fired) return
      fired = true
      setIsVisible(true)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', onMouseLeave)
    }

    let idleId = null
    let timerId = null
    let active = false

    // Trigger 1: scroll past 80% of page
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (scrolled / total >= 0.8) show()
    }

    // Trigger 2: exit-intent (mouse leaves viewport through top)
    function onMouseLeave(e) {
      if (e.clientY <= 0) show()
    }

    function start() {
      active = true
      window.addEventListener('scroll', onScroll, { passive: true })
      document.addEventListener('mouseleave', onMouseLeave)
      onScroll()
    }

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(start, { timeout: 2500 })
    } else {
      timerId = window.setTimeout(start, 1400)
    }

    return () => {
      if (idleId !== null) window.cancelIdleCallback(idleId)
      if (timerId !== null) window.clearTimeout(timerId)
      if (active) {
        window.removeEventListener('scroll', onScroll)
        document.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [])

  function closePopup() {
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="lead-popup" role="dialog" aria-modal="true" aria-labelledby="lead-popup-title">
      <button
        type="button"
        className="lead-popup__backdrop"
        aria-label="Close popup"
        onClick={closePopup}
      />
      <div className="lead-popup__panel">
        <button
          type="button"
          className="lead-popup__close"
          aria-label="Close popup"
          onClick={closePopup}
        >
          &#x2715;
        </button>
        <p className="lead-popup__eyebrow">Plan your Mallorca trip</p>
        <h2 id="lead-popup-title">Choose the right courses before you book.</h2>
        <p className="lead-popup__body">
          Answer a few quick questions to get a shortlist matched to your game. I&apos;ll send course recommendations that fit your dates, group size, and budget.
        </p>
        <div className="lead-popup__actions">
          <Link href="/tools/course-selector" className="btn btn--gold" onClick={closePopup}>
            Find my courses
          </Link>
          <Link href="/tools/green-fees" className="btn btn--dark" onClick={closePopup}>
            Compare all 24 courses
          </Link>
        </div>
        <p className="lead-popup__note">
          Andy reads every message and replies personally. Already know what you want?{' '}
          <Link href="/contact" className="lead-popup__contact-link" onClick={closePopup}>
            Send a quick message instead
          </Link>.
        </p>
      </div>
    </div>
  )
}
