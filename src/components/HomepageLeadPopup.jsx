'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '../lib/analytics'

const DISMISS_KEY = 'mmg-course-selector-popup-dismissed-at'
const DISMISS_WINDOW_MS = 1000 * 60 * 60 * 24 * 7

export default function HomepageLeadPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const dialogRef = useRef(null)
  const triggerRef = useRef('scroll')

  useEffect(() => {
    const dismissedAt = window.localStorage.getItem(DISMISS_KEY)
    if (dismissedAt) {
      const dismissedTime = Number(dismissedAt)
      if (Number.isFinite(dismissedTime) && Date.now() - dismissedTime < DISMISS_WINDOW_MS) {
        return
      }
    }

    let fired = false
    function show(trigger) {
      if (fired) return
      fired = true
      triggerRef.current = trigger
      setIsVisible(true)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', onMouseLeave)
    }

    let idleId = null
    let timerId = null
    let active = false

    // Keep the final enquiry section clear. Offer the finder earlier, after engagement.
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (window.scrollY > window.innerHeight && scrolled / total >= 0.55 && scrolled / total < 0.75) show('scroll')
    }

    // Trigger 2: exit-intent (mouse leaves viewport through top)
    function onMouseLeave(e) {
      if (e.clientY <= 0 && window.scrollY > window.innerHeight) show('exit_intent')
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

  useEffect(() => {
    if (!isVisible || !dialogRef.current) return
    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    trackEvent('homepage_popup_shown', { trigger: triggerRef.current })
    dialog.querySelector('.lead-popup__close')?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [isVisible])

  // Measured so we can tell, after a few weeks, whether the popup earns its place.
  function closePopup(method = 'close_button') {
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()))
    if (method !== 'click') trackEvent('homepage_popup_close', { method })
    setIsVisible(false)
  }

  function clickThrough(target) {
    trackEvent('homepage_popup_click', { target })
    closePopup('click')
  }

  if (!isVisible) return null

  return (
    <dialog ref={dialogRef} className="lead-popup" aria-modal="true" aria-labelledby="lead-popup-title" onCancel={(event) => { event.preventDefault(); closePopup('escape') }}>
      <button
        type="button"
        className="lead-popup__backdrop"
        aria-label="Close popup"
        tabIndex={-1}
        onClick={() => closePopup('backdrop')}
      />
      <div className="lead-popup__panel">
        <button
          type="button"
          className="lead-popup__close"
          aria-label="Close popup"
          onClick={() => closePopup('close_button')}
        >
          &#x2715;
        </button>
        <p className="lead-popup__eyebrow">Plan your Mallorca trip</p>
        <h2 id="lead-popup-title">Choose the right courses before you book.</h2>
        <p className="lead-popup__body">
          Answer a few quick questions to get a shortlist matched to your game, group size and budget.
        </p>
        <div className="lead-popup__actions">
          <Link href="/tools/course-selector" className="btn btn--gold" onClick={() => clickThrough('find_courses')}>
            Find my courses
          </Link>
          <Link href="/tools/green-fees" className="btn btn--dark" onClick={() => clickThrough('compare_courses')}>
            Compare all 24 courses
          </Link>
        </div>
        <p className="lead-popup__note">
          I read every message and reply personally. Already know what you want?{' '}
          <Link href="/contact" className="lead-popup__contact-link" onClick={() => clickThrough('contact')}>
            Send a quick message instead
          </Link>.
        </p>
      </div>
    </dialog>
  )
}
