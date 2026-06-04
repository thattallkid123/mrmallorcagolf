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

    const timer = window.setTimeout(() => {
      setIsVisible(true)
    }, 7000)

    return () => window.clearTimeout(timer)
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
          Close
        </button>
        <p className="lead-popup__eyebrow">Free Mallorca golf shortlist</p>
        <h2 id="lead-popup-title">Not sure which courses are worth your time?</h2>
        <p className="lead-popup__body">
          Take the course selector and get a first shortlist by email. Useful if you are still comparing
          Son Gual, Alcanada, Son Muntaner and the rest.
        </p>
        <div className="lead-popup__actions">
          <Link href="/course-selector" className="lead-popup__primary" onClick={closePopup}>
            Take the course selector
          </Link>
          <button type="button" className="lead-popup__secondary" onClick={closePopup}>
            Not now
          </button>
        </div>
        <p className="lead-popup__note">Five quick questions. No generic newsletter fluff.</p>
      </div>
    </div>
  )
}
