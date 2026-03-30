'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const CONSENT_KEY = 'mmg-analytics-consent'
const GA_ID = 'G-0Z2BRNWB4N'

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored)
      return
    }

    setConsent('pending')
  }, [])

  const updateConsent = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value)
    setConsent(value)
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === 'pending' && (
        <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Analytics consent">
          <div className="consent-banner__content">
            <p className="consent-banner__eyebrow">Privacy choice</p>
            <h2>Allow anonymous analytics?</h2>
            <p>
              We use Google Analytics only to understand general site usage. You can accept or continue without analytics.
              See our <Link href="/privacy-policy">privacy policy</Link>.
            </p>
          </div>
          <div className="consent-banner__actions">
            <button type="button" className="consent-banner__btn consent-banner__btn--secondary" onClick={() => updateConsent('declined')}>
              Continue without analytics
            </button>
            <button type="button" className="consent-banner__btn consent-banner__btn--primary" onClick={() => updateConsent('accepted')}>
              Accept analytics
            </button>
          </div>
        </div>
      )}
    </>
  )
}
