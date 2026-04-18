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
      <main>
        <section style={{ background: 'var(--cream)', padding: 'clamp(80px,10vw,120px) clamp(20px,5vw,60px)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p className="eyebrow" style={{ color: 'var(--taupe)', marginBottom: '0.75rem' }}>WEEKLY INSIGHTS</p>
              <h1 className="serif-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--deep)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Golf insights delivered.</h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--taupe)', lineHeight: 1.8 }}>Every week, I send course notes from Mallorca, trip planning tips for visiting golfers, and insights you won't find in guidebooks. Real courses. Real conditions. Real decisions.</p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--deep)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>What you'll get:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Course-by-course breakdowns — greens, routing, decision points',
                  'Honest takes on conditions — what works when, where to miss',
                  'Trip planning advice — timing, courses to pair, logistics',
                  'Coaching insights — on-course lessons you can apply immediately',
                  'No spam. One email per week. Always actionable.',
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.95rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--deep)', padding: 'clamp(80px,10vw,120px) clamp(20px,5vw,60px)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Subscribe:</p>
              <BeehiivEmbed />
            </div>

            <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                Based in Mallorca since March 2025. PGA Advanced Professional with 20+ years coaching experience across three continents. I play every course on the island and write about what I learn — for golfers who want to play seriously, not just travel.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--pine)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              &ldquo;Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic.&rdquo;
            </p>
            <p style={{ fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-light)', fontFamily: "'Jost',sans-serif" }}>- JO, COURSE CLIENT</p>
          </div>
        </section>

        <section style={{ background: 'var(--cream)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <p className="eyebrow" style={{ color: 'var(--taupe)', marginBottom: '1rem' }}>FIRST TIME HERE?</p>
            <h2 className="serif-display" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--deep)', marginBottom: '1.5rem' }}>Start with the courses.</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--taupe)', lineHeight: 1.8, marginBottom: '2rem' }}>
              The full guide covers all 22 courses on the island — what each one teaches you, where to play first, how to pair them for a week. It's written for golfers with a handicap, money to spend, and taste.
            </p>
            <a href="/golf-courses" style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--pine)', color: '#fff', textDecoration: 'none', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: "'Jost',sans-serif" }}>
              View all 22 courses →
            </a>
          </div>
        </section>
      </main>
      <HomeFooter lang="en" basePath="/subscribe" />
    </>
  )
}
