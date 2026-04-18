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
          publication_id: 'e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4', // Your Beehiiv publication ID
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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 300 }}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading'}
        style={{
          padding: '12px 16px',
          border: 'none',
          borderRadius: '2px',
          fontSize: '0.9rem',
          fontFamily: "'Jost', sans-serif",
          backgroundColor: '#fff',
          color: 'var(--deep)',
          width: '100%',
          boxSizing: 'border-box',
        }}
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          padding: '12px 24px',
          background: 'var(--pine)',
          color: '#fff',
          border: 'none',
          borderRadius: '2px',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: "'Jost', sans-serif",
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.6 : 1,
          transition: 'opacity 0.2s',
          width: '100%',
        }}
        aria-label="Subscribe"
      >
        {status === 'loading' ? 'Sending...' : 'Subscribe'}
      </button>

      {status === 'success' && (
        <div style={{ position: 'absolute', marginTop: '50px', color: 'var(--pine)', fontSize: '0.85rem' }}>
          ✓ {message}
        </div>
      )}
      {status === 'error' && (
        <div style={{ position: 'absolute', marginTop: '50px', color: '#c41e3a', fontSize: '0.85rem' }}>
          {message}
        </div>
      )}
    </form>
  );
}
