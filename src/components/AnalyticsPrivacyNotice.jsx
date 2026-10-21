import { ANALYTICS_CONSENT_COPY } from '../lib/analytics-consent-content'

export default function AnalyticsPrivacyNotice({ lang = 'en' }) {
  return <p>{ANALYTICS_CONSENT_COPY[lang].policy}</p>
}
