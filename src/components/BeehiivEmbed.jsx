'use client';

import { useEffect } from 'react';

export default function BeehiivEmbed() {
  useEffect(() => {
    // Load Beehiiv embed script
    if (typeof window !== 'undefined' && !window.beehiivEmbed) {
      const script = document.createElement('script');
      script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="beehiiv-wrapper">
      <style jsx>{`
        .beehiiv-wrapper {
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
          padding: 0;
        }

        .beehiiv-wrapper iframe {
          width: 100% !important;
          height: 315px !important;
          border: none !important;
          border-radius: 0 !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .beehiiv-wrapper iframe {
            height: 380px !important;
          }
        }
      `}</style>

      <iframe
        src="https://subscribe-forms.beehiiv.com/e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
