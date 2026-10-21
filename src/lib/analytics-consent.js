export const CONSENT_KEY = 'mmg-analytics-consent-v1'
export const CONSENT_EVENT = 'mmg-analytics-consent-change'
export const SETTINGS_EVENT = 'mmg-analytics-settings'
export const GA_ID = 'G-0Z2BRNWB4N'
const MAX_AGE = 180 * 24 * 60 * 60 * 1000

export function readAnalyticsConsent() {
  if (typeof window === 'undefined') return null
  try {
    const saved = JSON.parse(window.localStorage.getItem(CONSENT_KEY))
    if (!saved || !['accepted', 'rejected'].includes(saved.choice) ||
        !Number.isFinite(saved.at) || Date.now() - saved.at >= MAX_AGE || saved.at > Date.now()) return null
    return saved.choice
  } catch { return null }
}

export function analyticsAllowed() {
  return typeof window !== 'undefined' &&
    !/^\/zh(?:\/|$)/.test(window.location.pathname) &&
    readAnalyticsConsent() === 'accepted' && window[`ga-disable-${GA_ID}`] !== true
}

export function clearAnalyticsCookies() {
  const host = window.location.hostname
  const domains = ['', host, `.${host}`, '.mrmallorcagolf.com', 'mrmallorcagolf.com']
  document.cookie.split(';').forEach((entry) => {
    const name = entry.split('=')[0].trim()
    if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    })
  })
}

export function startAnalytics() {
  if (!analyticsAllowed() || !/^(www\.)?mrmallorcagolf\.com$/.test(window.location.hostname)) return
  if (document.getElementById('mmg-google-analytics')) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  // Basic consent mode: no Google script or requests before acceptance.
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
  })
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false })
  const script = document.createElement('script')
  script.id = 'mmg-google-analytics'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

export function saveAnalyticsConsent(choice) {
  if (!['accepted', 'rejected'].includes(choice)) return
  try { window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: Date.now() })) } catch {
    // Without storage, fail closed; a future visit can ask again.
  }
  window[`ga-disable-${GA_ID}`] = choice !== 'accepted'
  if (choice === 'accepted') startAnalytics()
  else clearAnalyticsCookies()
  window.dispatchEvent(new Event(CONSENT_EVENT))
  // Remove a previously loaded Google runtime on withdrawal as well as cookies.
  if (choice === 'rejected' && document.getElementById('mmg-google-analytics')) window.location.reload()
}
