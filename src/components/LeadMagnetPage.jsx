'use client'

import { useState } from 'react'
import { currentPagePath, trackEvent, trackLead, trackNewsletterSignup } from '../lib/analytics'

const NEXT_TOOL_BY_GUIDE = {
  'course-comparison': {
    href: '/tools/course-selector',
    label: 'Find courses for my group',
    text: 'Want a shortlist based on your own trip?',
  },
  'cost-guide': {
    href: '/tools/golf-cost-calculator',
    label: 'Estimate my trip cost',
    text: 'Want to run the numbers for your own group?',
  },
  'trip-planner': {
    href: '/tools/golf-day-builder',
    label: 'Build a golf day',
    text: 'Want to turn the itinerary into a sample day plan?',
  },
  'beginners-guide': {
    href: '/tools/course-selector',
    label: 'Find beginner-friendly courses',
    text: 'Want to see which courses fit your level?',
  },
}

export default function LeadMagnetPage({ guide }) {
  const [email, setEmail] = useState('')
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const nextTool = NEXT_TOOL_BY_GUIDE[guide.slug]

  async function handleSubmit(event) {
    event.preventDefault()
    if (!email) return
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/lead-magnet-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, guide: guide.slug, subscribeNewsletter }),
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        trackEvent('lead_magnet_signup', {
          guide_slug: guide.slug,
          newsletter_opt_in: subscribeNewsletter,
          page_path: currentPagePath(),
        })
        trackLead('lead_magnet', {
          guide_slug: guide.slug,
          newsletter_opt_in: subscribeNewsletter,
          page_path: currentPagePath(),
        })
        if (subscribeNewsletter) {
          trackNewsletterSignup({
            form_name: 'lead_magnet',
            guide_slug: guide.slug,
            page_path: currentPagePath(),
          })
        }
        setStatus('success')
        setEmail('')
        setSubscribeNewsletter(false)
        return
      }

      const nextError = data?.error || 'There was a problem. Please try again.'
      trackEvent('lead_magnet_error', {
        guide_slug: guide.slug,
        page_path: currentPagePath(),
      })
      setStatus('error')
      setErrorMessage(nextError)
    } catch {
      trackEvent('lead_magnet_error', {
        guide_slug: guide.slug,
        page_path: currentPagePath(),
      })
      setStatus('error')
      setErrorMessage('There was a problem. Please try again.')
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--cream, #F7F4EF)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 60px',
      }}
    >
      <div style={{ maxWidth: 520, width: '100%' }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold, #B8973C)',
            margin: '0 0 16px',
          }}
        >
          {guide.eyebrow}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 600,
            lineHeight: 1.15,
            color: 'var(--pine, #2D4A3E)',
            margin: '0 0 20px',
          }}
        >
          {guide.title}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'var(--charcoal, #2C2A27)',
            margin: '0 0 24px',
          }}
        >
          {guide.description}
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {guide.bullets.map((bullet) => (
            <li
              key={bullet}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: '0.88rem',
                fontWeight: 300,
                color: 'var(--charcoal, #2C2A27)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  marginTop: 1,
                  borderRadius: '50%',
                  background: 'var(--pine, #2D4A3E)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path
                    d="M1 3l2 2 4-4"
                    stroke="#F7F4EF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        <style>{`
          @media (max-width: 480px) {
            .lm-form { flex-direction: column !important; border: none !important; background: transparent !important; overflow: visible !important; }
            .lm-input { border: 1px solid rgba(44,42,39,0.2); border-radius: 3px; background: #fff; }
            .lm-btn { border-radius: 3px; text-align: center; }
          }
        `}</style>

        {status === 'success' ? (
          <div
            style={{
              background: 'var(--pine, #2D4A3E)',
              borderRadius: 4,
              padding: '28px 24px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--cream, #F7F4EF)',
                margin: '0 0 8px',
              }}
            >
              You&apos;re in.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'rgba(247,244,239,0.8)',
                margin: '0 0 20px',
              }}
            >
              Your guide is ready to download now.
            </p>
            <a
              href={guide.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 28px',
                fontFamily: "var(--font-sans)",
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--pine, #2D4A3E)',
                background: 'var(--gold, #B8973C)',
                textDecoration: 'none',
                borderRadius: 2,
              }}
            >
              Download PDF
            </a>
            {nextTool ? (
              <div style={{ marginTop: 22, paddingTop: 20, borderTop: '1px solid rgba(247,244,239,0.18)' }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: 'rgba(247,244,239,0.72)',
                    margin: '0 0 10px',
                  }}
                >
                  {nextTool.text}
                </p>
                <a
                  href={nextTool.href}
                  style={{
                    display: 'inline-block',
                    fontFamily: "var(--font-sans)",
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--cream, #F7F4EF)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 4,
                  }}
                >
                  {nextTool.label}
                </a>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="lm-form"
              style={{
                display: 'flex',
                width: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                border: '1px solid rgba(44,42,39,0.2)',
                background: 'var(--white, #fff)',
                gap: 0,
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="lm-input"
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '14px 16px',
                  fontFamily: "var(--font-sans)",
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: 'var(--deep, #1A1916)',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="lm-btn"
                style={{
                  flexShrink: 0,
                  padding: '14px 22px',
                  fontFamily: "var(--font-sans)",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--white, #fff)',
                  background: 'var(--pine, #2D4A3E)',
                  border: 'none',
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {status === 'submitting' ? '...' : guide.buttonLabel}
              </button>
            </form>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "var(--font-sans)",
                fontSize: '0.78rem',
                fontWeight: 300,
                color: 'rgba(44,42,39,0.62)',
                margin: '10px 0 0',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={subscribeNewsletter}
                onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                style={{ accentColor: 'var(--gold, #B8973C)' }}
              />
              Also send me Andy&apos;s occasional Mallorca golf planning notes
            </label>
            {status === 'error' ? (
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: '0.8rem',
                  color: '#8b2f2f',
                  fontWeight: 400,
                  margin: '8px 0 0',
                }}
              >
                {errorMessage}
              </p>
            ) : null}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: '0.72rem',
                fontWeight: 300,
                color: 'rgba(44,42,39,0.5)',
                margin: '10px 0 0',
              }}
            >
              No spam. Unsubscribe any time. <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
