import HomeNav from '../../components/HomeNav'
import HomeFooter from '../../components/HomeFooter'
import BeehiivEmbed from '../../components/BeehiivEmbed'
import { buildSubscribeMetadata } from '../../lib/page-metadata'

export const metadata = buildSubscribeMetadata('en')

export default function Subscribe() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-main.webp" />
      <HomeNav lang="en" solid basePath="/subscribe" />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <section style={{ background: 'var(--cream)', padding: 'clamp(60px,8vw,80px) clamp(20px,5vw,60px)', flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
            <div style={{ marginBottom: '3rem' }}>
              <p className="eyebrow" style={{ color: 'var(--taupe)', marginBottom: '0.75rem' }}>WEEKLY COURSE NOTES</p>
              <h1 className="serif-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: 'var(--deep)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Golf insights from Mallorca.</h1>
              <p style={{ fontSize: '1rem', color: 'var(--charcoal)', lineHeight: 1.85 }}>Every two weeks, notes on what I'm learning as I play the island. Course observations. Condition notes. Planning logic. Honest takes on timing and tactics.</p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--taupe)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>What you get:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'How each course plays — greens, routing, decision points',
                  'What works when — condition notes, seasonal changes, timing logic',
                  'Planning advice — which courses pair well, when to visit, what to expect',
                  'Coaching notes — on-course lessons applied to real conditions',
                  'No spam. One email every two weeks. Always useful.',
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.95rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 600, flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--taupe)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>About me:</p>
              <p style={{ fontSize: '0.95rem', color: 'var(--charcoal)', lineHeight: 1.85 }}>UK PGA Advanced Professional. Based in Mallorca since March 2025. I've played every course on the island and I write about what I learn. For golfers who care about playing well.</p>
            </div>

            <BeehiivEmbed />
          </div>
        </section>

        <section style={{ background: 'var(--pine)', padding: 'clamp(50px,6vw,70px) clamp(20px,5vw,60px)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.1rem,2vw,1.5rem)', fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.5, marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>
              &ldquo;Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic.&rdquo;
            </p>
            <p style={{ fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-light)', fontFamily: "'Jost',sans-serif", margin: 0 }}>Jo, Play-With-a-Pro client</p>
          </div>
        </section>

        <section style={{ background: 'var(--cream)', padding: 'clamp(50px,6vw,70px) clamp(20px,5vw,60px)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p className="eyebrow" style={{ color: 'var(--taupe)', marginBottom: '1rem' }}>NEW HERE?</p>
            <h2 className="serif-display" style={{ fontSize: 'clamp(1.5rem,2.5vw,1.9rem)', color: 'var(--deep)', marginBottom: '1.25rem' }}>Start with the course guide.</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--charcoal)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Full guide to all 24 courses on Mallorca. What each one teaches. Which to play first. How to pair them together. Written for golfers with taste and a handicap.
            </p>
            <a href="/golf-courses" style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--pine)', color: '#fff', textDecoration: 'none', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: "'Jost',sans-serif" }}>
              View all 24 courses →
            </a>
          </div>
        </section>
      </main>
      <HomeFooter lang="en" basePath="/subscribe" />
    </>
  )
}
