'use client'
import Image from 'next/image'
import Link from 'next/link'

const DAY_ARC = [
  {
    time: 'Morning',
    title: 'Arrival & briefing',
    body: 'Private transfer from your hotel to the course. Andy meets you on arrival — a short briefing on the course, your game, and what the day will focus on. No rushing, no generic welcome pack.',
    icon: '01',
  },
  {
    time: 'The round',
    title: '18 holes with Andy',
    body: 'One carefully chosen course, selected for your game and the occasion. Andy plays alongside you for the full 18 — course management, coaching woven into the round at the moments it matters, and the kind of local knowledge that only comes from playing the island properly.',
    icon: '02',
  },
  {
    time: 'After the round',
    title: 'Golf physio with John Brazier',
    body: 'John Brazier — The Golf Doctor — provides a post-round physio session tailored to how your body performed during the round. Movement screening, injury prevention, recovery, and a set of personalised recommendations to take home. This can take place at the course, your hotel, or a nearby facility.',
    icon: '03',
  },
  {
    time: 'Evening',
    title: 'Dinner at your hotel',
    body: 'The day ends at your hotel with a private dinner coordinated around the experience. Depending on your property, this might be a chef\'s table, a private terrace booking, or a dedicated dining arrangement. Andy can coordinate directly with your hotel concierge to make this seamless.',
    icon: '04',
  },
]

const WHAT_IS_INCLUDED = [
  ['The course', 'Personally selected by Andy for your game, your group, and the occasion. Members-only courses available where appropriate.'],
  ['Tee time', 'Booked and handled entirely before you arrive. You just show up.'],
  ['18 holes with Andy', 'PGA Advanced Professional, Trackman Master, TPI Level 3. The full depth of that — delivered in a way that stays in the background.'],
  ['Golf physio with John Brazier', 'Post-round session with The Golf Doctor. Movement screening, recovery, and personalised take-home recommendations.'],
  ['Private transfers', 'To and from the course, coordinated with your hotel.'],
  ['Evening dinner', 'Private dining arrangement at your hotel — coordinated between Andy and your concierge team.'],
]

const OPTIONAL_EXTRAS = [
  { title: 'Caddy', text: 'A professional caddy for the round — local knowledge, club selection, and course reads.' },
  { title: 'Videographer', text: 'A dedicated videographer to document the day. Swing analysis, course highlights, and content you can keep.' },
  { title: 'Premium club hire', text: 'The best available equipment at the course, pre-arranged.' },
  { title: 'Multi-day package', text: 'The Signature Day as one element of a longer planned trip. Andy can build the full itinerary around it.' },
]

const HOTEL_PARTNERS = [
  { name: 'Mandarin Oriental Punta Negra', note: 'Opening June 2026 · Calvià · Matsuhisa, Leña by Dani García' },
  { name: 'Four Seasons Resort at Formentor', note: 'Cap de Formentor · Llum i Sal, Mel · Alcanada 35 min' },
  { name: 'The Lodge Mallorca', note: 'Sa Pobla · Singular by Ramón Freixa · Alcanada 20 min' },
  { name: 'Aethos Mallorca', note: 'Peguera · ONDA seafood terrace · Golf de Andratx 10 min' },
  { name: 'Belmond La Residencia', note: 'Deià · Son Marroig · Alcanada 40 min' },
]

export default function SignatureDayView() {
  return (
    <main className="signature-day-page">

      {/* HERO */}
      <section className="pwap-hero pwap-hero--tall">
        <div className="pwap-hero__bg" aria-hidden="true">
          <Image
            src="/images/andy-walking-course.jpg"
            alt="Andy Griffiths walking the course at golden hour in Mallorca"
            fill
            priority
            quality={88}
            sizes="100vw"
            className="pwap-hero__image"
          />
          <div className="pwap-hero__overlay" />
        </div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb">
              <Link href="/" className="breadcrumb__link">Home</Link>
              &nbsp;/&nbsp;
              <Link href="/play-with-a-pro" className="breadcrumb__link">Play With A Pro</Link>
              &nbsp;/&nbsp;
              <span>Signature Day</span>
            </p>
            <p className="eyebrow eyebrow--gold pwap-hero__eyebrow">The Complete Experience · Mallorca</p>
            <h1 className="serif-display pwap-hero__title">
              One day.<br />
              The whole thing done properly.
            </h1>
            <p className="pwap-hero__body">
              Golf with a PGA pro, physio with The Golf Doctor, private transfers, and dinner at a partner hotel. Built around you, from the first tee to the last course.
            </p>
            <p className="pwap-hero__price">From €3,000</p>
            <div className="pwap-hero__actions">
              <Link href="/contact" className="btn btn--gold">Enquire →</Link>
              <a href="#the-day" className="btn btn--outline-white">See what's included</a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pwap-day" id="the-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">What this is</p>
          <h2 className="serif-display pwap-section-title">
            Most golf days in Mallorca are just a tee time. This one is not.
          </h2>
          <p>
            The Signature Day is built for people who want the full experience — not just the golf. A private round with Andy on one of the island's best courses, a post-round physio session with John Brazier, and an evening at a partner hotel that makes the whole day feel complete.
          </p>
          <p>
            Every element is coordinated in advance. You arrive at the course. Everything else is already handled.
          </p>
          <p>
            The golf is the centrepiece — but the day is the product.
          </p>
          <div className="pull-quote">
            <p>&ldquo;The fastest improvements happen on the course, not the range. Real conditions, real decisions — that kind of progress tends to stick.&rdquo;</p>
          </div>
        </div>
        <div className="pwap-day__right reveal">
          <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '4/3', marginBottom: '2rem' }}>
            <Image
              src="/images/andy-coaching-client.jpg"
              alt="Andy Griffiths with a client on the golf course in Mallorca"
              fill
              quality={88}
              sizes="(max-width: 768px) 100vw, 560px"
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
          <div className="included">
            <h3>What&apos;s included</h3>
            <ul className="included-list">
              {WHAT_IS_INCLUDED.map(([title, detail]) => (
                <li key={title} className="included-item">
                  <span className="included-dot"></span>
                  <p><strong>{title} — </strong>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DAY ARC */}
      <section className="how" style={{ background: 'var(--surface-dark, #1a1914)' }}>
        <div className="how__header reveal">
          <p className="eyebrow eyebrow--gold">How the day runs</p>
          <h2 className="serif-display" style={{ color: '#fff' }}>From transfer to dinner.</h2>
        </div>
        <div className="how__steps">
          {DAY_ARC.map((step, i) => (
            <div key={step.title} className={`how__step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className="how__step-number" style={{ color: 'var(--gold, #b8975a)' }}>{step.icon}</div>
              <p className="eyebrow eyebrow--gold" style={{ marginBottom: '0.25rem' }}>{step.time}</p>
              <h3 style={{ color: '#fff', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.75 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOHN BRAZIER */}
      <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Golf physio</p>
          <h2 className="serif-display pwap-section-title">John Brazier — The Golf Doctor</h2>
          <p>
            John Brazier is Mallorca&apos;s leading golf physiotherapist. He works with golfers at every level — club players who want to play without pain, and serious competitors looking for a physical edge.
          </p>
          <p>
            The post-round session is built around what actually happened during your round. How your body moved, where fatigue showed up, which patterns limited you. John gives you a physical picture of your game that most golfers never get.
          </p>
          <p>
            The session can take place at the course, at your hotel, or at a nearby facility — and everything John finds is yours to take home.
          </p>
          <div className="pwap-course-note">
            <p className="eyebrow">What John covers</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Golf-specific movement screening',
                'Injury prevention and swing limitation diagnosis',
                'Recovery and mobility work tailored to the round',
                'Personalised recommendations to take home',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                  <span style={{ color: 'var(--gold, #b8975a)', fontWeight: 500, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pwap-day__right reveal">
          <div style={{ background: 'var(--surface-alt, #f5f3f0)', borderRadius: 4, padding: '2.5rem 2rem' }}>
            <p className="eyebrow">The Golf Doctor</p>
            <h3 className="serif-display" style={{ fontSize: '1.6rem', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.3 }}>
              John Brazier
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Based in Mallorca. Works with golfers across all levels and disciplines. Known for connecting the physical picture to what actually shows up on the course.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              The Signature Day is the only way to have a session with John built into your golf day. It can also be added to a standard Play With A Pro booking — ask Andy when enquiring.
            </p>
          </div>
        </div>
      </section>

      {/* HOTEL PARTNERS */}
      <section className="experience" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="experience__left reveal">
          <p className="eyebrow">Partner hotels</p>
          <h2 className="serif-display">The dinner element works with your hotel.</h2>
          <p>
            The Signature Day is designed to end at your hotel — not at a generic restaurant. Andy works directly with your concierge team to arrange the evening around your property&apos;s offering: a chef&apos;s table, a private terrace, or a dedicated dining arrangement.
          </p>
          <p>
            The following hotels are part of the partnership programme. If you are staying elsewhere, contact Andy — most five-star properties on the island can accommodate this with advance notice.
          </p>
        </div>
        <div className="experience__right reveal">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {HOTEL_PARTNERS.map(h => (
              <div key={h.name} style={{ borderLeft: '2px solid var(--gold, #b8975a)', paddingLeft: '1rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 400, marginBottom: '0.2rem' }}>{h.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{h.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONAL EXTRAS */}
      <section className="what" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="what__header reveal">
          <p className="eyebrow">Optional extras</p>
          <h2 className="serif-display">Add what makes sense for your day.</h2>
          <p>Not everything needs adding. These are available if you want them.</p>
        </div>
        <div className="what__features">
          {OPTIONAL_EXTRAS.map((item, i) => (
            <div key={item.title} className={`what__feature reveal${i > 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <div className="what__feature-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pwap-packages" id="pricing" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="pwap-packages__header reveal">
          <p className="eyebrow">Pricing</p>
          <h2 className="serif-display pwap-section-title">Built around you — confirmed after your first conversation.</h2>
          <p>The Signature Day starts at €3,000. The final price depends on the course, the hotel, the extras you choose, and how many people are in the group. Everything is confirmed before you commit to anything.</p>
        </div>
        <div style={{ maxWidth: 640, margin: '2rem auto 0', background: 'var(--surface-alt, #f5f3f0)', borderRadius: 4, padding: '2rem 2.5rem' }}>
          <p className="eyebrow">What&apos;s always included</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 1.5rem' }}>
            {WHAT_IS_INCLUDED.map(([title]) => (
              <li key={title} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--gold, #b8975a)', fontWeight: 500 }}>—</span>
                {title}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Green fee, lunch, and optional extras (caddy, videographer, premium clubs) are separate and confirmed with you in advance.</p>
          <Link href="/contact" className="btn btn--gold" style={{ display: 'inline-block' }}>Enquire about the Signature Day →</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta reveal" style={{ borderTop: '1px solid var(--border, #e8e4dc)', textAlign: 'center', padding: '5rem 1.5rem' }}>
        <p className="eyebrow">Ready to book</p>
        <h2 className="serif-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', maxWidth: 560, margin: '0 auto 1.5rem', fontWeight: 400 }}>
          Tell Andy your dates and he will come back personally.
        </h2>
        <p style={{ maxWidth: 480, margin: '0 auto 2rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
          Every Signature Day starts with a conversation. No automated booking, no online checkout. Just a direct reply within 24 hours.
        </p>
        <Link href="/contact" className="btn btn--gold">Get in touch →</Link>
      </section>

    </main>
  )
}
