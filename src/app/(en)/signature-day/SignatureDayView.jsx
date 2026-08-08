'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollDepthTracker from '../../../components/ScrollDepthTracker'
import StickyMobileCta from '../../../components/StickyMobileCta'

const SIGNATURE_DAY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Signature Day Mallorca',
  description:
    'A privately arranged Mallorca golf day with 18 holes alongside Andy Griffiths, a post-round recovery and sports-performance session with John Brazier, private transfers, and a coordinated evening.',
  url: 'https://www.mrmallorcagolf.com/signature-day',
  provider: {
    '@type': 'Organization',
    name: 'Mr Mallorca Golf',
    url: 'https://www.mrmallorcagolf.com',
  },
  areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
  serviceType: 'Premium private golf day',
}

const DAY_STAGES = [
  {
    time: 'Before the day',
    title: 'Plan and confirm',
    body: 'I select the course with you, arrange the tee time and transfers, and coordinate the evening. You receive one clear proposal before anything is booked.',
  },
  {
    time: 'The round',
    title: '18 holes together',
    body: 'I play alongside you for the full round, watching the decisions, patterns, and movement that only show up under real playing conditions. I take notes throughout.',
  },
  {
    time: 'After the round',
    title: 'Session with John Brazier',
    body: 'John works in complementary and alternative medicine, recovery, and sports performance. He uses the observations from the round to examine the physical patterns behind what we saw.',
  },
  {
    time: 'The debrief',
    title: 'One connected plan',
    body: 'We bring the golf and physical observations together. You leave knowing what happened, what may be contributing to it, and what to work on first.',
  },
  {
    time: 'The evening',
    title: 'A properly arranged finish',
    body: 'The day finishes with dinner at a recommended hotel or restaurant, or with a private-chef arrangement where suitable. The plan is built around your group and where you are staying.',
  },
]

const INCLUDED = [
  'Course and day planning',
  'Private tee time',
  '18 holes with Andy',
  'Session with John Brazier',
  'Connected debrief and priorities',
  'Private transfers',
  'Evening coordination',
]

const OPTIONAL_EXTRAS = [
  {
    title: 'Caddy',
    text: 'A suitable caddy can be requested where the course, date, and availability allow.',
  },
  {
    title: 'Videography and photography',
    text: 'Professional coverage can be added if you want the day documented.',
  },
  {
    title: 'Premium club hire',
    text: 'The best suitable equipment available at the course can be arranged before you arrive.',
  },
  {
    title: 'Multi-day planning',
    text: 'The Signature Day can sit inside a wider Mallorca itinerary with other courses, hotels, and island experiences.',
  },
]

const RECOMMENDED_HOTELS = [
  { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Lena by Dani Garcia; Matsuhisa opens September 2026.' },
  { name: 'Four Seasons Resort Mallorca at Formentor', note: 'Formentor. Mel and Llum i Sal.' },
  { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular, with its fire-led Mediterranean cooking.' },
  { name: 'Aethos Mallorca', note: 'Peguera. ONDA and its sea-facing setting.' },
  { name: 'La Residencia, A Belmond Hotel', note: 'Deia. El Olivo and Restaurante Miro.' },
]

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function SignatureDayView() {
  return (
    <>
      <JsonLd data={SIGNATURE_DAY_SCHEMA} />
      <ScrollDepthTracker />
      <main className="signature-page">
        <section className="pwap-hero pwap-hero--tall">
          <div className="pwap-hero__bg" aria-hidden="true">
            <Image
              src="/images/andy-walking-course.webp"
              alt="Andy Griffiths on the golf course in Mallorca at golden hour"
              fill
              priority
              quality={88}
              sizes="100vw"
              className="pwap-hero__image"
            />
            <div className="pwap-hero__overlay" />
          </div>
          <div className="pwap-hero__inner signature-hero__inner">
            <div className="pwap-hero__content">
              <p className="breadcrumb">
                <Link href="/" className="breadcrumb__link">Home</Link>
                &nbsp;/&nbsp;
                <Link href="/play-with-a-pro" className="breadcrumb__link">Play With A Pro</Link>
                &nbsp;/&nbsp;
                <span>Signature Day</span>
              </p>
              <p className="eyebrow eyebrow--gold pwap-hero__eyebrow">The complete experience, Mallorca</p>
              <h1 className="serif-display pwap-hero__title">
                A private golf day<br />
                built around the round, the body, and the evening.
              </h1>
              <p className="pwap-hero__body">
                Eighteen holes with me, a post-round session with John Brazier, private transfers, and an evening arranged around your group. One person coordinates the whole day from the first conversation.
              </p>
              <p className="pwap-hero__price">Pricing tailored to the day</p>
              <div className="pwap-hero__actions">
                <Link href="/contact" className="btn btn--gold">Enquire</Link>
                <a href="#the-day" className="btn btn--outline-white">Explore the day</a>
              </div>
            </div>
          </div>
        </section>

        <section className="signature-section" id="the-day">
          <div className="signature-inner signature-split signature-split--overview">
            <div className="signature-copy reveal">
              <p className="eyebrow">What this is</p>
              <h2 className="serif-display signature-title">A complete day, not a collection of add-ons.</h2>
              <p>
                I play the full 18 holes with you and watch how your game behaves under real conditions. After the round, John examines the recovery and physical-performance side of what we observed. We then bring both views together into a practical set of priorities.
              </p>
              <p>
                Around the golf, I coordinate the tee time, private transfers, and an evening at a recommended hotel or restaurant, or with a private chef where that suits the occasion better.
              </p>
              <p className="signature-principle">
                The fastest improvements often happen on the course, where the decisions and movement are real. The rest of the day is designed to make those observations useful.
              </p>
            </div>

            <div className="signature-inclusions reveal">
              <div className="signature-media signature-media--overview">
                <Image
                  src="/images/andy-coaching-swing.webp"
                  alt="Andy Griffiths coaching a golfer in Mallorca"
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
              <div className="signature-inclusions__body">
                <h3 className="serif-display">What the core day covers</h3>
                <ul className="signature-checklist">
                  {INCLUDED.map((title) => (
                    <li key={title}>
                      <span aria-hidden="true" />
                      <p><strong>{title}</strong></p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--warm">
          <div className="signature-inner">
            <div className="signature-heading reveal">
              <p className="eyebrow">How the day runs</p>
              <h2 className="serif-display signature-title">Five stages. One connected experience.</h2>
              <p>Each stage has a clear purpose, and the observations from the round carry through the rest of the day.</p>
            </div>
            <ol className="signature-timeline">
              {DAY_STAGES.map((stage, index) => (
                <li key={stage.title} className="reveal">
                  <span className="signature-timeline__number">{String(index + 1).padStart(2, '0')}</span>
                  <p className="eyebrow">{stage.time}</p>
                  <h3 className="serif-display">{stage.title}</h3>
                  <p>{stage.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="signature-section">
          <div className="signature-inner signature-split signature-split--feature">
            <div className="signature-copy reveal">
              <p className="eyebrow">Why this is different</p>
              <h2 className="serif-display signature-title">The round and the body are considered together.</h2>
              <p>
                During the round I note the movement, decisions, and recurring patterns that affect your scoring. John then considers the recovery and sports-performance side of those observations, including physical restrictions or compensations that may be contributing to what appeared on the course.
              </p>
              <p>
                The value is in joining those observations together. You leave with one clear order of priorities rather than separate sessions that never meet.
              </p>
              <div className="signature-john-note">
                <p className="eyebrow">John Brazier</p>
                <p>John works in complementary and alternative medicine and specialises in recovery and sports performance.</p>
                <a href="https://drjohnbrazier.com/" target="_blank" rel="noreferrer" className="pwap-course-note__link">Read about John&apos;s work</a>
              </div>
            </div>
            <div className="signature-media signature-media--feature reveal">
              <Image
                src="/images/client-son-gual2.webp"
                alt="Client round at Son Gual Mallorca"
                fill
                quality={88}
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--soft">
          <div className="signature-inner signature-split signature-split--feature signature-split--media-first">
            <div className="signature-course-media reveal">
              <div className="signature-media">
                <Image src="/images/son-gual.jpg" alt="Son Gual golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 260px" />
              </div>
              <div className="signature-media">
                <Image src="/images/alcanada.jpg" alt="Alcanada golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 260px" />
              </div>
            </div>
            <div className="signature-copy reveal">
              <p className="eyebrow">The course</p>
              <h2 className="serif-display signature-title">Chosen for your game and the occasion.</h2>
              <p>
                Son Gual and Alcanada are my primary choices for a serious full day. Son Gual is my favourite course in Mallorca, with a particularly strong closing stretch. Alcanada is Robert Trent Jones Jr. at his most scenic, with its lighthouse visible through much of the round.
              </p>
              <p>
                The right course depends on your group, your game, and what you want the day to feel like. I will recommend honestly and explain why.
              </p>
              <Link href="/golf-courses" className="pwap-course-note__link">Explore Mallorca&apos;s golf courses</Link>
            </div>
          </div>
        </section>

        <section className="signature-section">
          <div className="signature-inner signature-split signature-split--evening">
            <div className="signature-copy reveal">
              <p className="eyebrow">The evening</p>
              <h2 className="serif-display signature-title">Dinner fitted to where you are staying.</h2>
              <p>
                The evening can be arranged at a recommended hotel or restaurant, or around a private chef where the property and occasion suit it. I coordinate the plan directly so it feels like the final part of the day rather than a separate reservation.
              </p>
              <p>
                These are recommendations, not formal partners. The final choice depends on your hotel, your dates, and the experience you want.
              </p>
              <div className="signature-hotels">
                {RECOMMENDED_HOTELS.map((hotel) => (
                  <div key={hotel.name}>
                    <h3 className="serif-display">{hotel.name}</h3>
                    <p>{hotel.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="signature-dining-grid reveal">
              {[
                { src: '/images/food/mallorca-orchard-dining.jpg', alt: 'Private outdoor dining in Mallorca', featured: true },
                { src: '/images/food/mallorca-restaurant-interior.jpg', alt: 'Mallorca restaurant interior' },
                { src: '/images/food/mallorca-fine-dining-service.jpg', alt: 'Fine dining tableside service Mallorca' },
                { src: '/images/food/mallorca-red-mullet.jpg', alt: 'Red mullet dish Mallorca' },
                { src: '/images/food/mallorca-paella.jpg', alt: 'Mallorca paella' },
              ].map((item) => (
                <div key={item.src} className={'signature-media' + (item.featured ? ' signature-media--dining-feature' : '')}>
                  <Image src={item.src} alt={item.alt} fill unoptimized sizes="(max-width: 768px) 100vw, 520px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--warm">
          <div className="signature-inner">
            <div className="signature-heading reveal">
              <p className="eyebrow">Optional additions</p>
              <h2 className="serif-display signature-title">Add only what improves the day.</h2>
              <p>These can be included in the proposal where they suit the group, course, and date.</p>
            </div>
            <div className="signature-extras">
              {OPTIONAL_EXTRAS.map((item) => (
                <article key={item.title} className="reveal">
                  <h3 className="serif-display">{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--pricing" id="pricing">
          <div className="signature-inner signature-pricing reveal">
            <div>
              <p className="eyebrow eyebrow--gold">Pricing</p>
              <h2 className="serif-display signature-title">Confirmed once the day has a shape.</h2>
            </div>
            <div>
              <p>
                Each Signature Day is priced after the first conversation because the course, group size, transfers, John&apos;s availability, and evening plan all affect the scope. Most days are built around a €3,000 core experience.
              </p>
              <p>
                Your proposal will show exactly what is included, what is subject to availability, and any third-party costs before you commit to anything.
              </p>
              <Link href="/contact" className="btn btn--gold">Enquire about the Signature Day</Link>
            </div>
          </div>
        </section>

        <StickyMobileCta
          primaryHref="/contact"
          primaryLabel="Enquire"
          secondaryHref="https://wa.me/34624466702?text=Hi%20Andy%2C%20I%27m%20interested%20in%20the%20Signature%20Day."
          secondaryLabel="Message on WhatsApp"
        />
      </main>
    </>
  )
}