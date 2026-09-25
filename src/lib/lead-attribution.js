const STORAGE_KEY = 'mmg_lead_attribution_v1'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign']

function cleanPath(path) {
  const value = String(path || '').split(/[?#]/, 1)[0]
  return /^\/[a-z0-9/_-]*$/i.test(value) ? value.slice(0, 160) : ''
}

function cleanCampaignValue(value) {
  const cleaned = String(value || '').trim().slice(0, 80)
  return /^[\w .-]*$/.test(cleaned) ? cleaned : ''
}

function readStored() {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}') || {}
  } catch {
    return {}
  }
}

export function rememberPageVisit(path) {
  if (typeof window === 'undefined') return

  const currentPath = cleanPath(path || window.location.pathname)
  const previous = readStored()
  const next = { ...previous }
  if (!next.entry_page) next.entry_page = currentPath
  if (currentPath && !currentPath.endsWith('/contact')) next.enquiry_source_page = currentPath

  const query = new URLSearchParams(window.location.search)
  for (const key of UTM_KEYS) {
    if (!next[key] && query.has(key)) next[key] = cleanCampaignValue(query.get(key))
  }

  if (!next.referrer_host && document.referrer) {
    try {
      const host = new URL(document.referrer).hostname.toLowerCase()
      if (host && host !== window.location.hostname && /^[a-z0-9.-]+$/.test(host)) {
        next.referrer_host = host.slice(0, 120)
      }
    } catch {
      // Ignore malformed referrers.
    }
  }

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Enquiries still work when storage is disabled.
  }
}

export function getLeadAttribution() {
  const stored = readStored()
  return {
    entry_page: cleanPath(stored.entry_page),
    enquiry_source_page: cleanPath(stored.enquiry_source_page),
    utm_source: cleanCampaignValue(stored.utm_source),
    utm_medium: cleanCampaignValue(stored.utm_medium),
    utm_campaign: cleanCampaignValue(stored.utm_campaign),
    referrer_host: cleanCampaignValue(stored.referrer_host),
  }
}
