'use client'

import { useState } from 'react'

export default function EmailSignup({
  placeholder = 'Email address',
  buttonLabel = 'Send guide',
  successMessage = "You're on the list.",
  title = 'Email signup',
  mailerliteFormAction,
  redirectOnSuccess,
  extraFields = {},
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const resolvedMailerLiteFormAction = mailerliteFormAction || process.env.NEXT_PUBLIC_MAILERLITE_FORM_ACTION

  async function handleMailerLiteSubmit(event) {
    event.preventDefault()
    if (!resolvedMailerLiteFormAction || !email) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const body = new URLSearchParams({
        'fields[email]': email,
        'ml-submit': '1',
        'anticsrf': 'true',
      })

      Object.entries(extraFields).forEach(([key, value]) => {
        if (typeof value !== 'string') return
        const trimmedValue = value.trim()
        if (!trimmedValue) return
        body.set(`fields[${key}]`, trimmedValue)
      })

      const response = await fetch(resolvedMailerLiteFormAction, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: body.toString(),
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        if (redirectOnSuccess && typeof window !== 'undefined') {
          window.location.assign(redirectOnSuccess)
          return
        }

        setStatus('success')
        setEmail('')
        return
      }

      const nextError = data?.errors?.fields?.email?.[0] || 'There was a problem subscribing.'
      setStatus('error')
      setErrorMessage(nextError)
    } catch {
      setStatus('error')
      setErrorMessage('There was a problem subscribing.')
    }
  }

  if (status === 'success') {
    return (
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: '0.85rem',
        color: 'var(--pine)',
        fontWeight: 500,
        margin: 0,
      }}>
        {successMessage}
      </p>
    )
  }

  if (resolvedMailerLiteFormAction) {
    return (
      <>
        <form
          onSubmit={handleMailerLiteSubmit}
          aria-label={title}
          style={{
            display: 'flex',
            width: '100%',
            gap: 0,
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid var(--sand)',
            background: 'var(--white)',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={placeholder}
            required
            style={{
              flex: 1,
              minWidth: 0,
              padding: '13px 16px',
              fontFamily: "var(--font-sans)",
              fontSize: '0.88rem',
              fontWeight: 300,
              color: 'var(--deep)',
              background: 'transparent',
              border: 'none',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{
              flexShrink: 0,
              padding: '13px 22px',
              fontFamily: "var(--font-sans)",
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              background: 'var(--pine)',
              border: 'none',
              cursor: status === 'submitting' ? 'wait' : 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s',
            }}
          >
            {status === 'submitting' ? '...' : buttonLabel}
          </button>
        </form>
        {status === 'error' ? (
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: '0.8rem',
            color: '#8b2f2f',
            fontWeight: 400,
            margin: '0.6rem 0 0 0',
          }}>
            {errorMessage}
          </p>
        ) : null}
      </>
    )
  }

  return null
}
