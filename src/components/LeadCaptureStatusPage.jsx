import Link from 'next/link'
import PageLayout from './PageLayout'

export default function LeadCaptureStatusPage({
  eyebrow,
  title,
  intro,
  bullets,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  asideTitle,
  asideBody,
}) {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <section style={{ background: 'var(--deep)', padding: 'clamp(88px,10vw,128px) clamp(24px,6vw,80px) clamp(56px,7vw,88px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 0.8rem 0' }}>{eyebrow}</p>
          <div style={{ width: '36px', height: '1px', background: 'var(--gold)', margin: '0 auto 1.5rem' }} />
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem,4.6vw,4rem)', fontWeight: 500, color: '#fff', lineHeight: 1.02, margin: '0 0 1rem 0' }}>{title}</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(0.98rem,1.7vw,1.08rem)', color: 'rgba(255,255,255,0.68)', lineHeight: 1.85, margin: 0 }}>{intro}</p>
        </div>
      </section>

      <section style={{ background: 'var(--cream)', padding: 'clamp(64px,8vw,104px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(320px, 0.8fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--taupe)', margin: '0 0 0.8rem 0' }}>What happens next</p>
            <div style={{ width: '36px', height: '1px', background: 'var(--gold)', margin: '0 0 1.5rem 0' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {bullets.map((bullet) => (
                <li key={bullet.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gold)', fontSize: '1rem', lineHeight: 1.6, flexShrink: 0, marginTop: '2px' }} aria-hidden="true">&#x2014;</span>
                  <div>
                    <span style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '0.92rem', color: 'var(--deep)', marginBottom: '0.25rem' }}>{bullet.title}</span>
                    <span style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '0.92rem', color: 'var(--charcoal)', lineHeight: 1.8 }}>{bullet.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside style={{ background: 'var(--linen)', border: '1px solid var(--sand)', padding: 'clamp(28px,4vw,38px)' }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--taupe)', margin: '0 0 0.8rem 0' }}>Useful now</p>
            <div style={{ width: '36px', height: '1px', background: 'var(--gold)', margin: '0 0 1.5rem 0' }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 500, color: 'var(--deep)', lineHeight: 1.08, margin: '0 0 0.9rem 0' }}>{asideTitle}</h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '0.92rem', color: 'var(--charcoal)', lineHeight: 1.8, margin: '0 0 1.5rem 0' }}>{asideBody}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href={primaryHref} style={{ display: 'inline-block', padding: '14px 26px', background: 'var(--pine)', color: '#fff', fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} style={{ display: 'inline-block', padding: '14px 26px', border: '1px solid rgba(31,48,43,0.18)', color: 'var(--deep)', fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
                {secondaryLabel}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  )
}
