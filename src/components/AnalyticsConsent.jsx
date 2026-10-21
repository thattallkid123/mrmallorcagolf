'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ANALYTICS_CONSENT_COPY } from '../lib/analytics-consent-content'
import { getLegalPath } from '../lib/site'
import { readAnalyticsConsent, saveAnalyticsConsent, startAnalytics, clearAnalyticsCookies, SETTINGS_EVENT, GA_ID } from '../lib/analytics-consent'

export default function AnalyticsConsent({ lang = 'en' }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hasChoice, setHasChoice] = useState(false)
  const previousFocus = useRef(null)
  const panel = useRef(null)
  const copy = ANALYTICS_CONSENT_COPY[lang] || ANALYTICS_CONSENT_COPY.en

  useEffect(() => {
    const choice = readAnalyticsConsent()
    const chinese = /^\/zh(?:\/|$)/.test(pathname || '')
    window[`ga-disable-${GA_ID}`] = chinese || choice !== 'accepted'
    if (choice !== 'accepted' || chinese) clearAnalyticsCookies()
    setHasChoice(Boolean(choice))
    setOpen(!choice && !chinese)
    if (!chinese) startAnalytics()
    function show() {
      previousFocus.current = document.activeElement
      setOpen(true)
      requestAnimationFrame(() => panel.current?.focus())
    }
    function sync(event) {
      if (event.key !== 'mmg-analytics-consent-v1') return
      // Apply another tab's withdrawal before Google can continue in this tab.
      const current = readAnalyticsConsent()
      window[`ga-disable-${GA_ID}`] = chinese || current !== 'accepted'
      if (current !== 'accepted') {
        clearAnalyticsCookies()
        if (document.getElementById('mmg-google-analytics')) window.location.reload()
      } else if (!chinese) startAnalytics()
      setHasChoice(Boolean(current))
      setOpen(!current && !chinese)
    }
    window.addEventListener('storage', sync)
    window.addEventListener(SETTINGS_EVENT, show)
    return () => {
      window.removeEventListener(SETTINGS_EVENT, show)
      window.removeEventListener('storage', sync)
    }
  }, [pathname])

  function close() {
    setOpen(false)
    previousFocus.current?.focus()
  }
  function choose(value) {
    saveAnalyticsConsent(value)
    setHasChoice(true)
    close()
  }

  if (lang === 'zh' || !open) return null
  return (
    <section className="analytics-consent" aria-labelledby="analytics-consent-title" ref={panel} tabIndex={-1}
      onKeyDown={(event) => { if (event.key === 'Escape' && hasChoice) close() }}>
      <div className="analytics-consent__copy">
        <h2 id="analytics-consent-title">{copy.title}</h2>
        <p>{copy.body} <a href={getLegalPath('privacy-policy', lang)}>{copy.privacy}</a></p>
        {hasChoice ? <p>{copy.saved}</p> : null}
      </div>
      <div className="analytics-consent__actions">
        <button type="button" className="btn btn--pine" onClick={() => choose('accepted')}>{copy.accept}</button>
        <button type="button" className="btn btn--pine" onClick={() => choose('rejected')}>{copy.reject}</button>
        {hasChoice ? <button type="button" className="analytics-consent__close" onClick={close}>{copy.close}</button> : null}
      </div>
    </section>
  )
}
