'use client'

import { ANALYTICS_CONSENT_COPY } from '../lib/analytics-consent-content'
import { SETTINGS_EVENT } from '../lib/analytics-consent'

export default function CookieSettingsButton({ lang = 'en' }) {
  if (lang === 'zh') return null
  const copy = ANALYTICS_CONSENT_COPY[lang] || ANALYTICS_CONSENT_COPY.en
  return <button type="button" className="footer__legal-link cookie-settings-button"
    onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}>{copy.settings}</button>
}
