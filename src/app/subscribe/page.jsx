import HomeNav from '../../components/HomeNav'
import HomeFooter from '../../components/HomeFooter'
import CustomEmailSignup from '../../components/CustomEmailSignup'
import { buildSubscribeMetadata } from '../../lib/page-metadata'

export const metadata = buildSubscribeMetadata('en')

export default function Subscribe() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-main.webp" />
      <HomeNav lang="en" solid basePath="/subscribe" />
      <main style={{ display: 'flex', flexDirection: 'column' }}>

        {/* Hero section — generous spacing, editorial feel */}
        <section style={{
          background: 'var(--cream)',
          padding: 'clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px)',
          display: 'flex',
          alignItems: 'center',
          minHeight: '60vh',
        }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>
            {/* Eyebrow + Gold Rule */}
            <div style={{ marginBottom: '2rem' }}>
              <p style={{
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--taupe)',
                fontFamily: "'Jost', sans-serif",
                margin: '0 0 1rem 0',
              }}>Newsletter</p>
              <div style={{
                width: '36px',
                height: '1px',
                background: 'var(--gold)',
                marginBottom: '2rem',
              }} />
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 500,
              color: 'var(--deep)',
              lineHeight: 1.08,
              marginBottom: '2rem',
            }}>
              Golf insights from Mallorca.
            </h1>

            {/* Intro copy — wider measure */}
            <p style={{
              fontSize: '1rem',
              color: 'var(--charcoal)',
              lineHeight: 1.85,
              maxWidth: 900,
              marginBottom: '4rem',
              fontFamily: "'Jost', sans-serif",
            }}>
              Every two weeks, notes on what I'm learning as I play the island. Course observations. Condition notes. Planning logic. Honest takes on timing and tactics.
            </p>

            {/* Two column at desktop, single at mobile */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(40px, 8vw, 60px)',
              alignItems: 'start',
            }}>
              {/* Left: What You Get */}
              <div>
                <p style={{
                  fontSize: '9px',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--taupe)',
                  fontFamily: "'Jost', sans-serif",
                  marginBottom: '1.5rem',
                  margin: 0,
                }}>What you get:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'How each course plays. Greens, routing, decision points.',
                    'What works when. Condition notes, seasonal changes, timing logic.',
                    'Planning advice. Which courses pair well, when to visit, what to expect.',
                    'Coaching notes. On-course lessons applied to real conditions.',
                    'No spam. One email every two weeks. Always useful.',
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                      fontSize: '0.95rem',
                      color: 'var(--charcoal)',
                      lineHeight: 1.7,
                      fontFamily: "'Jost', sans-serif",
                    }}>
                      <span style={{
                        color: 'var(--gold)',
                        fontWeight: 600,
                        flexShrink: 0,
                        marginTop: '2px',
                      }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Email Signup */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <CustomEmailSignup />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial section — Jo quote */}
        <section style={{
          background: 'var(--deep)',
          padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px)',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
            <div style={{
              borderLeft: '2px solid var(--gold)',
              paddingLeft: '2rem',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.5,
                marginBottom: '1.5rem',
                margin: '0 0 1.5rem 0',
              }}>
                &ldquo;Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic.&rdquo;
              </p>
              <p style={{
                fontSize: '9px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                fontFamily: "'Jost', sans-serif",
                margin: 0,
              }}>Jo, Play-With-a-Pro client</p>
            </div>
          </div>
        </section>

        {/* CTA section — course guide */}
        <section style={{
          background: 'var(--cream)',
          padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px)',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
            <p style={{
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--taupe)',
              fontFamily: "'Jost', sans-serif",
              marginBottom: '1rem',
              margin: '0 0 1rem 0',
            }}>New here?</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 500,
              color: 'var(--deep)',
              lineHeight: 1.08,
              marginBottom: '1.5rem',
            }}>Start with the course guide.</h2>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--charcoal)',
              lineHeight: 1.85,
              marginBottom: '2rem',
              maxWidth: 620,
              fontFamily: "'Jost', sans-serif",
            }}>
              Full guide to all 24 courses on Mallorca. What each one teaches. Which to play first. How to pair them together. Written for golfers with taste and a handicap.
            </p>
            <a href="/golf-courses" style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'var(--pine)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: "'Jost', sans-serif",
              border: 'none',
              borderRadius: '0',
              cursor: 'pointer',
            }}>
              View all 24 courses →
            </a>
          </div>
        </section>
      </main>
      <HomeFooter lang="en" basePath="/subscribe" />
    </>
  )
}
