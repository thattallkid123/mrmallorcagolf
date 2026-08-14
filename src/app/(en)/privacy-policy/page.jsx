import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { buildLegalMetadata } from '../../../lib/page-metadata'

export const metadata = buildLegalMetadata('privacy-policy', 'en')

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <div className="legal-page__hero">
            <p className="breadcrumb" style={{marginBottom:'2rem'}}>
              <Link href="/">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Privacy Policy</span>
            </p>

            <h1 style={{marginBottom:'0.5rem'}}>Privacy Policy</h1>
            <p className="legal-page__updated">Last updated: August 2026</p>
          </div>

          <section className="legal-section">
            <h2>1. Who We Are</h2>
            <p>This website is operated by Andy Griffiths, trading as <strong>Mr Mallorca Golf</strong>, based in Mallorca, Spain.</p>
            <p>For all data protection enquiries, contact: <a href="mailto:info@mrmallorcagolf.com">info@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. What Data We Collect</h2>
            <p>We collect personal data only when you voluntarily provide it or when you visit our website. This includes:</p>
            <ul>
              <li><strong>Contact form submissions:</strong> your name, email address, phone number, and any message you send us</li>
              <li><strong>Email and WhatsApp enquiries:</strong> your name and contact details when you reach out directly</li>
              <li><strong>Course Selector and email signup forms:</strong> your email address, and any optional information you choose to provide when requesting planning notes or shortlist follow-ups</li>
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
              <li>Send Course Selector follow-up emails and Mallorca golf planning notes where you have chosen to opt in</li>
              <li>Improve our services based on general usage patterns (analytics only)</li>
            </ul>
            <p>We will not use your data for unsolicited marketing without your explicit consent. If you sign up for Course Selector results or planning emails, you can unsubscribe at any time using the link in the email or by contacting us directly.</p>
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
            <p>This website uses Google Analytics to understand how visitors use our site. Google Analytics collects usage data including pages visited, time spent, and approximate geographic location (country/region level), tied to a randomly generated identifier stored in your browser. This identifier is pseudonymous &mdash; it does not include your name or contact details &mdash; but it is not fully anonymous data.</p>
            <p>Google Analytics data is processed by Google LLC, certified under the EU-US Data Privacy Framework, in accordance with their privacy policy. You can opt out of Google Analytics tracking at any time by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies</h2>
            <p>This website uses cookies solely for Google Analytics purposes. These are analytics cookies that help us understand how the site is used. No advertising cookies or tracking pixels are used.</p>
            <p>Most browsers allow you to refuse or delete cookies. Doing so will not prevent you from using this website, but will disable analytics tracking.</p>
          </section>

          <section className="legal-section">
            <h2>7. Data Sharing</h2>
            <p>We do not sell or rent your personal data to third parties. We share data with the following processors, only to the extent necessary to run this website and provide our services:</p>
            <ul>
              <li><strong>Google Analytics:</strong> pseudonymised usage data, as described in Section 5</li>
              <li><strong>MailerLite:</strong> your email address and, depending on which form you use, trip details you provide (such as dates, group size, budget, or handicap) and any notes, to deliver results and &mdash; only if you opt in &mdash; our occasional planning-notes emails. MailerLite processes data within the EU.</li>
              <li><strong>Resend:</strong> the content of any contact or enquiry form you submit, to deliver it to us and send you a confirmation email. Resend is based in the United States.</li>
              <li><strong>Upstash:</strong> your IP address, held briefly, to prevent abuse of our forms (rate limiting). Upstash is based in the United States.</li>
              <li><strong>Vercel:</strong> hosts this website and, as part of that, processes standard web request data such as your IP address and browser information. Vercel is based in the United States.</li>
              <li><strong>Legal requirement:</strong> where required by law or a competent authority</li>
            </ul>
            <p>Some of these processors are based outside the EU/EEA, in the United States. Where this happens, the transfer is made under the safeguards required by GDPR &mdash; the EU-US Data Privacy Framework, for processors certified under it (currently Google, Resend, and Vercel), or Standard Contractual Clauses otherwise (currently Upstash).</p>
            <p>We may also share necessary information (your name and contact details) with golf courses or service providers in Mallorca when arranging your experience, but only to the extent required to fulfil your booking.</p>
          </section>

          <section className="legal-section">
            <h2>8. Data Retention</h2>
            <p>We keep your contact data for as long as necessary to provide our services. Where an enquiry becomes a booking, invoicing and accounting records are kept for the period required under Spanish commercial law, which generally sets a six-year retention period for business records. Analytics data is retained in accordance with Google&apos;s standard retention policies.</p>
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
            <p>To exercise any of these rights, email us at <a href="mailto:info@mrmallorcagolf.com">info@mrmallorcagolf.com</a>. We will respond within 30 days.</p>
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

          <div className="legal-page__language-note">
            <p>
              Also available in: <Link href="/es/privacy-policy" style={{color:'var(--gold-light)'}}>Español</Link>{' '}&middot;{' '}
              <Link href="/de/privacy-policy" style={{color:'var(--gold-light)'}}>Deutsch</Link>{' '}&middot;{' '}
              <Link href="/fr/privacy-policy" style={{color:'var(--gold-light)'}}>Français</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}
