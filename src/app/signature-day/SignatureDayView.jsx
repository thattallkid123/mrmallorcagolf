'use client'
import Image from 'next/image'
import Link from 'next/link'

const DAY_ARC = [
  {
    time: 'Before the round',
    title: 'Transfer and course briefing',
    body: 'Private transfer from your hotel to the course. I meet you on arrival. Before we play, I want to understand how your game works, what you have been working on, and what you want from the day. The briefing is short and specific. No generic welcome pack.',
    img: '/images/andy-on-course-smile.jpg',
    imgAlt: 'Andy Griffiths at the course',
  },
  {
    time: 'The round',
    title: '18 holes with me',
    body: 'One course, chosen for your game and the occasion. I play alongside you for the full 18. Course management, shot selection, and the patterns in your game that only show up in a real round. I keep notes throughout on what I am seeing, the decisions you are making, and where the scoring opportunities are being missed.',
    img: '/images/andy-coaching-client.jpg',
    imgAlt: 'Andy coaching a client on the green',
  },
  {
    time: 'After the round',
    title: 'Physio with John Brazier',
    body: 'John Brazier, The Golf Doctor, picks up exactly where the round left off. I hand him my notes from the 18 holes: the movement patterns I saw, the compensations that showed up under pressure, the swing tendencies that became scoring problems. John adds the physical picture. Together we give you a specific, connected prescription, not two separate opinions.',
    img: '/images/coaching-action.webp',
    imgAlt: 'Golf coaching in action',
  },
  {
    time: 'The debrief',
    title: 'What you take home',
    body: 'Before the evening, we sit down together. You leave with a clear picture of what happened on the course, why it happened physically, and what to work on. Not a generic feedback sheet. A set of specific, connected observations from a round you actually played.',
    img: '/images/client-son-gual.webp',
    imgAlt: 'Client at Son Gual after the round',
  },
  {
    time: 'The evening',
    title: 'Dinner at your hotel',
    body: 'The day ends at your hotel. I coordinate directly with your concierge team to arrange the evening around what your property does well: a chef\'s table, a private terrace, or a dedicated dining arrangement. The food photos on this page are from restaurants and experiences I have eaten at and can recommend on the island.',
    img: '/images/client-group-alcanada.webp',
    imgAlt: 'Group day at Alcanada',
  },
  {
    time: 'Optional',
    title: 'Welcome and extras',
    body: 'A small welcome from the course on arrival where available. Caddy is something I am working to include as standard and will confirm at the time of booking. Videographer available to document the day. Premium club hire pre-arranged at the course if needed.',
    img: '/images/alcanada.webp',
    imgAlt: 'Alcanada golf course Mallorca',
  },
]

const WHAT_IS_INCLUDED = [
  ['Course selection', 'Personally chosen for your game, your group, and the occasion. Members-only courses available where appropriate.'],
  ['Tee time', 'Booked and handled before you arrive. You just show up.'],
  ['18 holes with Andy', 'PGA Advanced Professional, Trackman Master, TPI Level 3. I keep notes throughout on what I am seeing in your game.'],
  ['Combined prescription from Andy and John', 'My on-course observations and John\'s physical findings are connected into one specific set of recommendations. Not two separate sessions.'],
  ['Golf physio with John Brazier', 'Post-round session with The Golf Doctor. Movement screening, recovery, and personalised take-home recommendations.'],
  ['Private transfers', 'To and from the course, coordinated with your hotel.'],
  ['Evening dinner', 'Private dining arrangement at your hotel, coordinated between me and your concierge team.'],
]

const OPTIONAL_EXTRAS = [
  { title: 'Caddy', text: 'I am working to include a caddy as standard. Will be confirmed at booking. Local knowledge, club selection, and course reads for the full round.' },
  { title: 'Videographer', text: 'A dedicated videographer for the day. Swing footage, course highlights, and content you can keep and use.' },
  { title: 'Premium club hire', text: 'The best available equipment at the course, pre-arranged before you arrive.' },
  { title: 'Welcome pack', text: 'A small selection from the course or island on arrival where available. Not always possible but included where it can be.' },
  { title: 'Multi-day package', text: 'The Signature Day as one part of a planned trip. I can build the full itinerary around it, including other courses and days on the island.' },
]

const HOTEL_PARTNERS = [
  { name: 'Mandarin Oriental Punta Negra', note: 'Opening June 2026, Calvià. Matsuhisa, Leña by Dani García.' },
  { name: 'Four Seasons Resort at Formentor', note: 'Cap de Formentor. Llum i Sal, Mel. Alcanada 35 minutes.' },
  { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular by Ramón Freixa. Alcanada 20 minutes.' },
  { name: 'Aethos Mallorca', note: 'Peguera. ONDA seafood terrace. Golf de Andratx 10 minutes.' },
  { name: 'Belmond La Residencia', note: 'Deià. Son Marroig. Alcanada 40 minutes.' },
]

export default function SignatureDayView() {
  return (
    <main>

      {/* HERO */}
      <section className="pwap-hero pwap-hero--tall">
        <div className="pwap-hero__bg" aria-hidden="true">
          <Image
            src="/images/andy-walking-course.jpg"
            alt="Andy Griffiths on the golf course in Mallorca at golden hour"
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
            <p className="eyebrow eyebrow--gold pwap-hero__eyebrow">The Complete Experience, Mallorca</p>
            <h1 className="serif-display pwap-hero__title">
              One day.<br />
              The whole thing done properly.
            </h1>
            <p className="pwap-hero__body">
              Golf with me, a physio session with The Golf Doctor, private transfers, and dinner at a partner hotel. Every element coordinated in advance, built around you specifically.
            </p>
            <p className="pwap-hero__price">From €3,000</p>
            <div className="pwap-hero__actions">
              <Link href="/contact" className="btn btn--gold">Enquire</Link>
              <a href="#the-day" className="btn btn--outline-white">See what is included</a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pwap-day" id="the-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">What this is</p>
          <h2 className="serif-display pwap-section-title">
            A Play With A Pro day, with the full picture around it.
          </h2>
          <p>
            I play 18 holes with you, watch how your game behaves under real conditions, and take notes throughout. After the round, John Brazier examines the physical side of what I observed. Between us, you leave with one connected picture of your game: what happened on the course, why it is happening in your body, and what to do about it.
          </p>
          <p>
            The day also includes private transfers, a welcome from the course on arrival where possible, and dinner at a partner hotel that evening. I coordinate the whole thing directly so you do not have to.
          </p>
          <p>
            It is a more complete version of the on-course day. The round is the same. The difference is everything around it.
          </p>
          <div className="pull-quote">
            <p>&ldquo;The fastest improvements happen on the course, not the range. Real conditions, real decisions, that kind of progress tends to stick.&rdquo;</p>
          </div>
        </div>
        <div className="pwap-day__right reveal">
          <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '4/3', marginBottom: '2rem' }}>
            <Image
              src="/images/andy-coaching-swing.jpg"
              alt="Andy Griffiths coaching a golfer in Mallorca"
              fill
              quality={88}
              sizes="(max-width: 768px) 100vw, 560px"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
          </div>
          <div className="included">
            <h3>What is included</h3>
            <ul className="included-list">
              {WHAT_IS_INCLUDED.map(([title, detail]) => (
                <li key={title} className="included-item">
                  <span className="included-dot"></span>
                  <p><strong>{title}</strong><br /><span style={{ fontWeight: 400 }}>{detail}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DAY ARC */}
      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">How the day runs</p>
          <h2 className="serif-display">Six parts. All connected.</h2>
          <p>Every element feeds the next. The notes from the round go into the physio session. The physio findings come back to me. You leave with one prescription, not six separate experiences.</p>
        </div>
        <div className="how__steps">
          {DAY_ARC.map((step, i) => (
            <div key={step.title} className={`how__step reveal${i > 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <span className="how__num">{String(i + 1).padStart(2, '0')}</span>
              <p className="eyebrow" style={{ marginBottom: '0.25rem', marginTop: '0.5rem' }}>{step.time}</p>
              <h3 className="serif-display" style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANDY AND JOHN COMBINED */}
      <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Why this is different</p>
          <h2 className="serif-display pwap-section-title">One prescription. Two sets of eyes.</h2>
          <p>
            Most golfers who get a coaching session and a physio session get two separate opinions that never meet. On the Signature Day, they do.
          </p>
          <p>
            During the round I watch everything: which compensations appear under pressure, where the decision-making breaks down, which patterns cause the scoring problems. After the round, I hand those notes directly to John. He examines the physical side of what I saw. A tight hip that explains the swing path. A shoulder restriction that makes the follow-through uncomfortable. A movement pattern that looks like a technical problem but is actually a flexibility issue.
          </p>
          <p>
            By the time we debrief, you have one picture. What I saw on the course, what John found in the body, and what to work on in order of importance.
          </p>
        </div>
        <div className="pwap-day__right reveal">
          <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '4/3', marginBottom: '2rem' }}>
            <Image
              src="/images/client-son-gual2.webp"
              alt="Client round at Son Gual Mallorca"
              fill
              quality={88}
              sizes="(max-width: 768px) 100vw, 560px"
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
          <div className="pwap-course-note">
            <p className="eyebrow">John Brazier, The Golf Doctor</p>
            <p>John is based in Mallorca and works with golfers across all levels. He is known for connecting physical findings to what actually shows up on the course. The combination of his work and mine means the recommendations you take home are specific, connected, and grounded in a round you actually played.</p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>John can also work with clients outside the Signature Day. Ask when you enquire if you want to add a session to a standard Play With A Pro booking.</p>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="pwap-day__left reveal">
          <p className="eyebrow">The course</p>
          <h2 className="serif-display pwap-section-title">Chosen for the occasion.</h2>
          <p>
            Son Gual and Alcanada are my primary venues for a serious full day. Son Gual is my favourite course in Mallorca: Thomas Himmel's 2007 design, the closing stretch from 15 through 18 is among the best in European golf. Alcanada is Robert Trent Jones Jr. at his most scenic, with the lighthouse visible for most of the round.
          </p>
          <p>
            The right course depends on you, your group, and what you want from the day. I will recommend honestly and explain why.
          </p>
          <Link href="/golf-courses" className="pwap-course-note__link" style={{ marginTop: '1rem', display: 'inline-block' }}>See all 24 courses on the island</Link>
        </div>
        <div className="pwap-day__right reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '3/4' }}>
              <Image src="/images/son-gual.jpg" alt="Son Gual golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 280px" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '3/4' }}>
              <Image src="/images/alcanada.jpg" alt="Alcanada golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 280px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* HOTEL PARTNERS */}
      <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="pwap-day__left reveal">
          <p className="eyebrow">The evening</p>
          <h2 className="serif-display pwap-section-title">Dinner at your hotel.</h2>
          <p>
            The Signature Day is designed to end at your hotel. I work directly with your concierge team to coordinate the evening around what your property does well: a private terrace booking, a chef's table, or a dedicated dining arrangement.
          </p>
          <p>
            The photos below are from restaurants and food experiences I have had on the island. The specific arrangement depends on your hotel and what they can offer on your dates, but this is the standard to expect.
          </p>
          <p>
            If you are staying at a property not on the list below, contact me. Most five-star hotels on the island can accommodate this with enough notice.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '1.5rem' }}>
            {HOTEL_PARTNERS.map(h => (
              <div key={h.name} style={{ borderLeft: '2px solid var(--gold, #b8975a)', paddingLeft: '1rem' }}>
                <p className="serif-display" style={{ fontSize: '1rem', fontWeight: 400, marginBottom: '0.15rem' }}>{h.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted, #888)' }}>{h.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pwap-day__right reveal">
          <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '4/3', marginBottom: '0.75rem' }}>
            <Image src="/images/food/mallorca-orchard-dining.jpg" alt="Private outdoor dining in Mallorca" fill quality={85} sizes="(max-width: 768px) 100vw, 560px" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { src: '/images/food/mallorca-restaurant-interior.jpg', alt: 'Mallorca restaurant interior' },
              { src: '/images/food/mallorca-fine-dining-service.jpg', alt: 'Fine dining tableside service Mallorca' },
              { src: '/images/food/mallorca-red-mullet.jpg', alt: 'Red mullet dish Mallorca' },
              { src: '/images/food/mallorca-paella.jpg', alt: 'Mallorca paella' },
            ].map((img, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '1/1' }}>
                <Image src={img.src} alt={img.alt} fill quality={82} sizes="200px" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONAL EXTRAS */}
      <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Optional and additional</p>
          <h2 className="serif-display pwap-section-title">Add what makes sense for your day.</h2>
          <p>Not everything needs adding. These are available if you want them.</p>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <ul className="included-list">
              {OPTIONAL_EXTRAS.map((item) => (
                <li key={item.title} className="included-item">
                  <span className="included-dot"></span>
                  <p><strong>{item.title}</strong><br /><span style={{ fontWeight: 400 }}>{item.text}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pwap-packages" id="pricing" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
        <div className="pwap-packages__header reveal">
          <p className="eyebrow">Pricing</p>
          <h2 className="serif-display pwap-section-title">Confirmed after the first conversation.</h2>
          <p>The Signature Day starts at €3,000. The final figure depends on the course, the hotel, the number of people, and which extras you want. Everything is confirmed before you commit to anything.</p>
        </div>
        <div style={{ maxWidth: 640, margin: '2rem auto 0' }} className="pwap-course-note">
          <p className="eyebrow">Always included</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 1.5rem' }}>
            {WHAT_IS_INCLUDED.map(([title]) => (
              <li key={title} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--gold, #b8975a)', fontWeight: 500, flexShrink: 0 }}>—</span>
                {title}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #888)', marginBottom: '1.5rem' }}>Green fee, lunch, and optional extras are separate and confirmed with you before the day.</p>
          <Link href="/contact" className="btn btn--gold">Enquire about the Signature Day</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pwap-final-cta reveal" style={{ borderTop: '1px solid var(--border, #e8e4dc)', textAlign: 'center', padding: '5rem 1.5rem' }}>
        <p className="eyebrow">Ready to book</p>
        <h2 className="serif-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', maxWidth: 560, margin: '0 auto 1.5rem', fontWeight: 400 }}>
          Tell me your dates and I will come back personally.
        </h2>
        <p style={{ maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.75 }}>
          Every Signature Day starts with a conversation. No automated booking. Just a direct reply within 24 hours.
        </p>
        <Link href="/contact" className="btn btn--gold">Get in touch</Link>
      </section>

    </main>
  )
}
