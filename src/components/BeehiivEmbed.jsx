'use client'

import { useEffect } from 'react'

export default function BeehiivEmbed() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector("script[src='https://subscribe-forms.beehiiv.com/embed.js']")) {
      const script = document.createElement('script')
      script.src = 'https://subscribe-forms.beehiiv.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
      <iframe
        src="https://subscribe-forms.beehiiv.com/e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        title="Subscribe to the Mr Mallorca Golf newsletter"
        loading="lazy"
        frameBorder="0"
        scrolling="no"
        style={{ display: 'block', width: '100%', height: 100, border: 'none', borderRadius: 0, background: 'transparent', boxShadow: 'none' }}
      />
    </div>
  )
}
