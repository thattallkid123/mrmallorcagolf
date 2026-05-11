'use client'

import { useState } from 'react'

export default function BeehiivEmbed() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    try {
      const body = new URLSearchParams({
        'form_id': 'e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4',
        'form[email]': email,
      })
      const res = await fetch('https://subscribe-forms.beehiiv.com/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: '0.85rem',
        color: 'var(--pine)',
        fontWeight: 500,
        margin: 0,
      }}>
        You&rsquo;re on the list.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
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
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        style={{
          flex: 1,
          minWidth: 0,
          padding: '13px 16px',
          fontFamily: "'Jost', sans-serif",
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
          fontFamily: "'Jost', sans-serif",
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
        {status === 'submitting' ? '…' : 'Subscribe'}
      </button>
    </form>
  )
}
