import Link from 'next/link'
import PageLayout from '../../components/PageLayout'

export const metadata = {
  title: 'Terms & Conditions — Mr Mallorca Golf',
  description: 'Terms and conditions for Mr Mallorca Golf experiences and services in Mallorca, Spain.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/terms',
    languages: {
      'en': 'https://mrmallorcagolf.com/terms',
      'es': 'https://mrmallorcagolf.com/es/terms',
      'x-default': 'https://mrmallorcagolf.com/terms',
    }
  }
}

export default function Terms() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <p className="breadcrumb" style={{marginBottom:'2rem'}}>
            <Link href="/">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Terms &amp; Conditions</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>Terms &amp; Conditions</h1>
          <p style={{color:'rgba(255,255,255,0.5)', marginBottom:'3rem', fontSize:'0.9rem'}}>Last updated: March 2025</p>

          <section className="legal-section">
            <h2>1. About These Terms</h2>
            <p>These terms and conditions govern the use of this website and the booking of services offered by Andy Griffiths, trading as <strong>Mr Mallorca Golf</strong>, based in Mallorca, Spain (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).</p>
            <p>By enquiring about or booking a service with us, you agree to these terms. Please read them carefully.</p>
            <p>Contact: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Our Services</h2>
            <p>Mr Mallorca Golf offers private golf day experiences on courses across Mallorca, Spain. Services may include:</p>
            <ul>
              <li>Private golf days with a PGA professional</li>
              <li>On-course coaching and instruction</li>
              <li>Course selection and tee time arrangement</li>
              <li>Airport transfers and logistical support where arranged</li>
            </ul>
            <p>The specific services included in your experience will be confirmed in writing at the time of booking.</p>
          </section>

          <section className="legal-section">
            <h2>3. Bookings and Payment</h2>
            <p>All bookings are subject to availability and confirmed only once we have agreed the details with you directly by email, WhatsApp, or phone.</p>
            <p>Payment is made by bank transfer in Euros. Payment details will be provided upon confirmation of your booking. All prices are quoted inclusive of any applicable taxes unless stated otherwise.</p>
            <p>A deposit may be required to secure your booking. The balance will be due as agreed at time of booking. Your booking is not confirmed until the deposit (or full payment where applicable) has been received.</p>
          </section>

          <section className="legal-section">
            <h2>4. Cancellation and Changes</h2>
            <p><strong>Cancellation by you:</strong></p>
            <ul>
              <li>More than 14 days before the experience: full refund of any deposit paid</li>
              <li>7–14 days before: 50% of the total booking value is retained</li>
              <li>Less than 7 days before: the full booking value is retained</li>
            </ul>
            <p>Cancellations must be made in writing by email to <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
            <p><strong>Cancellation by us:</strong> In the rare event that we need to cancel (for example due to illness, extreme weather, or circumstances beyond our control), we will offer you either a full refund or an alternative date. We are not liable for any additional costs you may have incurred, such as flights or accommodation.</p>
            <p><strong>Weather:</strong> Golf is an outdoor activity. We do not cancel due to light rain. In the event of lightning, severe weather, or course closure, we will rearrange or issue a refund at our discretion.</p>
          </section>

          <section className="legal-section">
            <h2>5. Your Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Ensuring you have appropriate travel and activity insurance for your visit to Mallorca</li>
              <li>Arriving at the agreed time and location</li>
              <li>Behaving in accordance with the rules and etiquette of the golf course</li>
              <li>Any damage caused to golf course property through negligent or reckless behaviour</li>
              <li>Disclosing any relevant health conditions that may affect your ability to participate safely</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Golf Course Rules and Green Fees</h2>
            <p>All participants must comply with the rules and dress code of each golf course visited. We reserve the right to end an experience without refund where a participant is asked to leave a course due to conduct.</p>
            <p>Green fees and any course charges are included in the price quoted unless stated otherwise. Incidental charges (food, drink, equipment hire beyond what is agreed) are the responsibility of the participant.</p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>We take all reasonable care to provide a safe and enjoyable experience. However, golf is a physical activity and participation is at your own risk.</p>
            <p>To the fullest extent permitted by Spanish law, we are not liable for:</p>
            <ul>
              <li>Personal injury unless caused by our negligence</li>
              <li>Loss or damage to personal property</li>
              <li>Indirect or consequential losses</li>
              <li>Losses arising from circumstances beyond our reasonable control</li>
            </ul>
            <p>Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.</p>
          </section>

          <section className="legal-section">
            <h2>8. Intellectual Property</h2>
            <p>All content on this website — including text, images, videos, and branding — is the property of Mr Mallorca Golf and may not be reproduced without written permission.</p>
          </section>

          <section className="legal-section">
            <h2>9. Privacy</h2>
            <p>Our use of your personal data is governed by our <Link href="/privacy-policy" style={{color:'var(--gold-light)'}}>Privacy Policy</Link>, which forms part of these terms.</p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law</h2>
            <p>These terms are governed by the laws of Spain. Any dispute arising from these terms or our services shall be subject to the jurisdiction of the courts of the Balearic Islands, Spain, unless you are a consumer resident in another EU member state, in which case you retain the right to bring proceedings in your country of residence.</p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to These Terms</h2>
            <p>We may update these terms from time to time. The date at the top of this page reflects the most recent revision. Bookings confirmed before any change will be governed by the terms in place at the time of booking.</p>
          </section>

          <section className="legal-section">
            <h2>12. Contact</h2>
            <p>For any questions about these terms, please contact us at <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
          </section>

          <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
            <p style={{color:'rgba(255,255,255,0.4)', fontSize:'0.85rem'}}>
              Also available in: <Link href="/es/terms" style={{color:'var(--gold-light)'}}>Español</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}

