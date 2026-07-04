'use client'

import { useEffect } from 'react'
import { trackEvent, trackLead } from '../lib/analytics'

const OWN_HOSTS = new Set(['mrmallorcagolf.com', 'www.mrmallorcagolf.com'])

function getAnchorFromClick(event) {
  const target = event.target

  if (!(target instanceof Element)) return null
  return target.closest('a[href]')
}

function getLinkInfo(anchor) {
  const rawHref = anchor.getAttribute('href') || ''
  const label = (anchor.innerText || anchor.getAttribute('aria-label') || anchor.getAttribute('title') || '').trim().slice(0, 120)
  const lowerHref = rawHref.toLowerCase()

  if (lowerHref.startsWith('mailto:')) {
    return { type: 'email_click', destination: rawHref.replace(/^mailto:/i, '').split('?')[0], label }
  }

  if (lowerHref.startsWith('tel:')) {
    return { type: 'phone_click', destination: rawHref.replace(/^tel:/i, ''), label }
  }

  if (lowerHref.includes('wa.me/') || lowerHref.includes('whatsapp')) {
    return { type: 'whatsapp_click', destination: rawHref, label }
  }

  let url
  try {
    url = new URL(rawHref, window.location.origin)
  } catch {
    return null
  }

  const isOwnSite = OWN_HOSTS.has(url.hostname) || url.origin === window.location.origin
  const normalizedPath = url.pathname.replace(/\/$/, '') || '/'

  if (isOwnSite && normalizedPath.endsWith('/contact')) {
    return { type: 'contact_page_click', destination: url.pathname, label }
  }

  if (isOwnSite && normalizedPath.endsWith('/play-with-a-pro')) {
    return { type: 'play_with_a_pro_click', destination: url.pathname, label }
  }

  if (isOwnSite && normalizedPath.includes('/tools/')) {
    return { type: 'tool_click', destination: url.pathname, label }
  }

  if (!isOwnSite && /^https?:$/.test(url.protocol)) {
    return { type: 'outbound_click', destination: url.href, label }
  }

  return null
}

function leadTypeForClick(type) {
  if (type === 'email_click') return 'email_click'
  if (type === 'phone_click') return 'phone_click'
  if (type === 'whatsapp_click') return 'whatsapp_click'

  return null
}

export default function IntentTracker() {
  useEffect(() => {
    function handleClick(event) {
      const anchor = getAnchorFromClick(event)
      if (!anchor || anchor.closest('[data-analytics-manual="true"]')) return

      const info = getLinkInfo(anchor)
      if (!info) return

      trackEvent(info.type, {
        link_url: info.destination,
        link_text: info.label,
      })

      const leadType = leadTypeForClick(info.type)
      if (leadType) {
        trackLead(leadType, {
          contact_method: info.type.replace('_click', ''),
          link_url: info.destination,
          link_text: info.label,
        })
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
