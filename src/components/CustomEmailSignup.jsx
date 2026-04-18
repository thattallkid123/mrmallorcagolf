'use client';

import { useState } from 'react';

export default function CustomEmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send to Beehiiv API endpoint
      const response = await fetch('https://subscribe.beehiiv.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          publication_id: 'e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4',
          referring_site: 'mrmallorcagolf.com',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Check your email for confirmation.');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Try again or contact andy@mrmallorcagolf.com');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Connection error. Please try again.');
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
      }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          style={{
            padding: '14px 16px',
            border: '1px solid var(--sand)',
            borderRadius: '0',
            fontSize: '0.95rem',
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            backgroundColor: '#fff',
            color: 'var(--deep)',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s',
            outlineColor: 'var(--pine)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--pine)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--sand)')}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            padding: '12px 32px',
            background: status === 'loading' ? 'var(--taupe)' : 'var(--pine)',
            color: '#fff',
            border: 'none',
            borderRadius: '0',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: "'Jost', sans-serif",
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            opacity: status === 'loading' ? 0.7 : 1,
            transition: 'background-color 0.2s, opacity 0.2s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={(e) => !status === 'loading' && (e.target.style.background = 'var(--pine-mid)')}
          onMouseLeave={(e) => !status === 'loading' && (e.target.style.background = 'var(--pine)')}
          aria-label="Subscribe"
        >
          {status === 'loading' ? 'Sending...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <div style={{
          marginTop: '1rem',
          color: 'var(--pine)',
          fontSize: '0.85rem',
          fontFamily: "'Jost', sans-serif",
          lineHeight: 1.6,
        }}>
          ✓ {message}
        </div>
      )}
      {status === 'error' && (
        <div style={{
          marginTop: '1rem',
          color: '#c41e3a',
          fontSize: '0.85rem',
          fontFamily: "'Jost', sans-serif",
          lineHeight: 1.6,
        }}>
          {message}
        </div>
      )}
    </div>
  );
}
