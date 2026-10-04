import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { buildLegalMetadata } from '../../../lib/page-metadata'

export const metadata = buildLegalMetadata('terms', 'en')

export default function Terms() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <div className="legal-page__hero">
            <p className="breadcrumb" style={{marginBottom:'2rem'}}>
              <Link href="/">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Terms &amp; Conditions</span>
            </p>

            <h1 style={{marginBottom:'0.5rem'}}>Terms &amp; Conditions</h1>
            <p className="legal-page__updated">Last updated: October 2026</p>
          </div>

          <section className="legal-section">
            <h2>1. About These Terms</h2>
            <p>These terms and conditions govern the use of this website and the booking of services offered by Andy Griffiths, trading as <strong>Mr Mallorca Golf</strong>, based in Mallorca, Spain (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).</p>
            <p>By enquiring about or booking a service with us, you agree to these terms. Please read them carefully.</p>
            <p>Contact: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Our Services</h2>
            <p>Mr Mallorca Golf offers golf experiences and golf trip-planning services across Mallorca, Spain. Services may include:</p>
            <ul>
              <li>Play With A Pro golf days with a PGA professional</li>
              <li>On-course coaching and instruction</li>
              <li>Golf trip planning, course selection, and tee time booking</li>
              <li>Airport transfers and logistical support where arranged</li>
            </ul>
            <p>The specific services included in your experience will be confirmed in writing at the time of booking.</p>
          </section>

          <section className="legal-section">
            <h2>3. Bookings and Payment</h2>
            <p>All bookings are subject to availability and confirmed only once we have agreed the details with you directly by email, WhatsApp, or phone.</p>
            <p>Payment is by bank transfer in euros, and an invoice is issued for each payment. Payment details will be provided when your booking is confirmed. All prices are quoted inclusive of any applicable taxes unless stated otherwise.</p>
            <p><strong>Golf trips (tee times booked through us):</strong> a deposit of 50% confirms the booking, and the balance is due 35 days before your first tee time. A booking made within 35 days of the first tee time is paid in full when it is made. Two things are paid in full with the deposit: rounds at Arabella&apos;s courses (Son Muntaner, Son Vida, Son Quint and Palma Pitch &amp; Putt), because Arabella charges in full at booking, and any management fee. A Play With A Pro day included in a trip is paid in the same way as a round. Your proposal states the exact amounts and dates. Until the deposit has been received, tee times are held but not confirmed. If the balance is not paid by its due date, the booking is treated as cancelled by you and the deposit is kept.</p>
            <p><strong>Play With A Pro and coaching booked on their own:</strong> paid in a single payment, at any time before the day or on the day itself.</p>
          </section>

          <section className="legal-section">
            <h2>4. Cancellation and Changes</h2>
            <p><strong>Cancellation by you:</strong> notice must be given in writing by email to <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a> and takes effect when it is received.</p>
            <p><strong>Golf trips.</strong> Each round is treated on its own date:</p>
            <ul>
              <li>35 days or more before the round: full refund, including the deposit</li>
              <li>15 to 34 days before: the 50% deposit for that round is kept, and any balance already paid is refunded</li>
              <li>14 days or fewer before, or a no-show: the full cost of that round is charged</li>
            </ul>
            <p>Arabella rounds follow Arabella&apos;s own terms: full refund 22 days or more before play, 50% from 8 to 21 days before, nothing within 7 days. Your proposal lists the exact cut-off dates for each round, and those dates apply.</p>
            <p><strong>Play With A Pro and coaching booked on their own:</strong></p>
            <ul>
              <li>More than 14 days before: full refund of anything paid</li>
              <li>7 to 14 days before: 50% of the price is due</li>
              <li>Less than 7 days before, or a no-show: the full price is due</li>
            </ul>
            <p>If your proposal or booking confirmation differs from this page, your proposal or booking confirmation applies.</p>
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
            <p>Green fees and course charges are additional unless explicitly stated otherwise in your booking confirmation. Club hire, buggy, and any personal food and drink are the responsibility of the participant.</p>
            <p>On busy days the golf course may pair your group with other players on the same tee time. This is at the club&apos;s discretion and outside our control. We always aim to book a tee time that keeps the round as personal as possible. Where you would like the tee time reserved for your party only, we can arrange the remaining player slots at additional cost, confirmed before booking. Signature Day bookings include a private tee time as standard.</p>
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
            <p>All content on this website (including text, images, videos, and branding) is the property of Mr Mallorca Golf and may not be reproduced without written permission.</p>
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

          <div className="legal-page__language-note">
            <p>
              Also available in: <Link href="/es/terms" style={{color:'var(--gold-light)'}}>Español</Link>{' '}&middot;{' '}
              <Link href="/de/terms" style={{color:'var(--gold-light)'}}>Deutsch</Link>{' '}&middot;{' '}
              <Link href="/fr/terms" style={{color:'var(--gold-light)'}}>Français</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}
