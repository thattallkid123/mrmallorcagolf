import Link from 'next/link'
import PageLayout from '../../components/PageLayout'

export const metadata = {
  title: 'Privacy Policy — Mr Mallorca Golf',
  description: 'Privacy policy for Mr Mallorca Golf. How we collect, use, and protect your personal data in accordance with GDPR and Spanish data protection law.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/privacy-policy',
    languages: {
      'en': 'https://mrmallorcagolf.com/privacy-policy',
      'es': 'https://mrmallorcagolf.com/es/privacy-policy',
      'x-default': 'https://mrmallorcagolf.com/privacy-policy',
    }
  }
}

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <p className="breadcrumb" style={{marginBottom:'2rem'}}>
            <Link href="/">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Privacy Policy</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>Privacy Policy</h1>
          <p style={{color:'rgba(255,255,255,0.5)', marginBottom:'3rem', fontSize:'0.9rem'}}>Last updated: March 2025</p>

          <section className="legal-section">
            <h2>1. Who We Are</h2>
            <p>This website is operated by Andy Griffiths, trading as <strong>Mr Mallorca Golf</strong>, based in Mallorca, Spain.</p>
            <p>For all data protection enquiries, contact: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. What Data We Collect</h2>
            <p>We collect personal data only when you voluntarily provide it or when you visit our website. This includes:</p>
            <ul>
              <li><strong>Contact form submissions:</strong> your name, email address, phone number, and any message you send us</li>
              <li><strong>Email and WhatsApp enquiries:</strong> your name and contact details when you reach out directly</li>
              <li><strong>Analytics data:</strong> anonymous usage data collected by Google Analytics (see Section 5)</li>
            </ul>
            <p>We do not collect payment card details. All payments are handled offline via bank transfer.</p>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Data</h2>
            <p>We use the data you provide to:</p>
            <ul>
              <li>Respond to your enquiry and arrange your golf experience</li>
              <li>Communicate with you about your booking or planned visit</li>
              <li>Improve our services based on general usage patterns (analytics only)</li>
            </ul>
            <p>We will not use your data for unsolicited marketing without your explicit consent. If we introduce a newsletter in the future, we will ask for your permission separately before sending any marketing communications.</p>
          </section>

          <section className="legal-section">
            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases under the GDPR and Spanish data protection law (LOPDGDD):</p>
            <ul>
              <li><strong>Contractual necessity:</strong> to fulfil or prepare a booking in response to your enquiry</li>
              <li><strong>Legitimate interests:</strong> to respond to your messages and manage our business operations</li>
              <li><strong>Consent:</strong> where you have explicitly agreed, for example by submitting a contact form or opting in to future communications</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Google Analytics</h2>
            <p>This website uses Google Analytics to understand how visitors use our site. Google Analytics collects anonymised data including pages visited, time spent, and approximate geographic location (country/region level). It does not identify you personally.</p>
            <p>Google Analytics data is processed by Google LLC in accordance with their privacy policy. IP anonymisation is enabled on this site. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies</h2>
            <p>This website uses cookies solely for Google Analytics purposes. These are analytics cookies that help us understand how the site is used. No advertising cookies or tracking pixels are used.</p>
            <p>Most browsers allow you to refuse or delete cookies. Doing so will not prevent you from using this website, but will disable analytics tracking.</p>
          </section>

          <section className="legal-section">
            <h2>7. Data Sharing</h2>
            <p>We do not sell or rent your personal data to third parties. We may share data in the following limited circumstances:</p>
            <ul>
              <li><strong>Google Analytics:</strong> anonymised usage data as described above</li>
              <li><strong>Legal requirement:</strong> where required by law or a competent authority</li>
            </ul>
            <p>We may share necessary information (your name and contact details) with golf courses or service providers in Mallorca when arranging your experience, but only to the extent required to fulfil your booking.</p>
          </section>

          <section className="legal-section">
            <h2>8. Data Retention</h2>
            <p>We keep your contact data for as long as necessary to provide our services and for a reasonable period thereafter for record-keeping purposes. Analytics data is retained in accordance with Google&apos;s standard retention policies.</p>
            <p>You may request deletion of your personal data at any time (see Section 9).</p>
          </section>

          <section className="legal-section">
            <h2>9. Your Rights</h2>
            <p>Under GDPR and Spanish data protection law, you have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> request deletion of your personal data (&ldquo;right to be forgotten&rdquo;)</li>
              <li><strong>Restriction:</strong> request that we limit how we use your data</li>
              <li><strong>Portability:</strong> receive your data in a structured, commonly used format</li>
              <li><strong>Objection:</strong> object to processing based on legitimate interests</li>
            </ul>
            <p>To exercise any of these rights, email us at <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>. We will respond within 30 days.</p>
          </section>

          <section className="legal-section">
            <h2>10. Complaints</h2>
            <p>If you believe your data protection rights have not been respected, you have the right to lodge a complaint with the Spanish data protection authority:</p>
            <p><strong>Agencia Española de Protección de Datos (AEPD)</strong><br />
            Website: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a><br />
            Address: C/ Jorge Juan, 6, 28001 Madrid, Spain</p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. The date at the top of this page reflects the most recent revision. We encourage you to review this page periodically.</p>
          </section>

          <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
            <p style={{color:'rgba(255,255,255,0.4)', fontSize:'0.85rem'}}>
              Also available in: <Link href="/es/privacy-policy" style={{color:'var(--gold-light)'}}>Español</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}

