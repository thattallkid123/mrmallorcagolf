'use client'

function canTrack() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function trackEvent(name, params = {}) {
  if (!canTrack()) return

  window.gtag('event', name, params)
}

export function trackPageView({ page_path, page_title, page_location } = {}) {
  if (!canTrack()) return

  window.gtag('event', 'page_view', {
    page_path,
    page_title,
    page_location,
  })
}

export function trackLead(leadType, params = {}) {
  if (!canTrack()) return

  window.gtag('event', 'generate_lead', {
    lead_type: leadType,
    ...params,
  })
}

export function trackNewsletterSignup(params = {}) {
  if (!canTrack()) return

  window.gtag('event', 'sign_up', {
    method: 'email',
    ...params,
  })
}

export function currentPagePath() {
  if (typeof window === 'undefined') return ''

  const search = window.location.search || ''
  return `${window.location.pathname}${search}`
}

export function currentPageLocation() {
  if (typeof window === 'undefined') return ''

  return window.location.href
}
