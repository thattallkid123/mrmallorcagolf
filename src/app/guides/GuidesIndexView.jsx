import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

function getLocalePrefix(locale) {
  return locale === 'en' ? '' : `/${locale}`
}

export default function GuidesIndexView({ locale = 'en', pageLang, content }) {
  const prefix = getLocalePrefix(locale)
  const pageLayoutLang = pageLang || locale

  return (
    <PageLayout lang={pageLayoutLang}>
      <RevealObserver />
      <header
        className="page-hero"
        style={{
          minHeight: '100vh',
          backgroundImage:
            'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
          backgroundSize: 'auto, cover',
          backgroundPosition: 'center, center 40%',
        }}
      >
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href={prefix || '/'} className="breadcrumb__link">
              {content.hero.breadcrumbHome}
            </a>{' '}
            &nbsp;/&nbsp; <span style={{ color: 'var(--gold-light)' }}>{content.hero.breadcrumbCurrent}</span>
          </p>
          <h1>{content.hero.title.split('. ').map((line, index, arr) => (
            <span key={index}>
              {line}
              {index < arr.length - 1 ? '.' : ''}
              {index < arr.length - 1 && <br />}
            </span>
          ))}</h1>
          <p className="page-hero__lead">{content.hero.lead}</p>
          <div className="page-hero__meta" style={{ marginTop: '1.5rem' }}>
            <span className="page-hero__tag">{content.hero.tags[0]}</span>
            <span className="page-hero__tag page-hero__tag--gold">{content.hero.tags[1]}</span>
            <span className="page-hero__tag">{content.hero.tags[2]}</span>
          </div>
        </div>
      </header>

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,96px) clamp(20px,4vw,40px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {content.liveGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`${prefix}/guides/${guide.slug}`}
              className="reveal"
              style={{ display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--linen)', padding: '32px 0' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    fontFamily: "'Jost',sans-serif",
                    fontWeight: 500,
                    padding: '4px 10px',
                    background: 'rgba(184,151,60,.12)',
                    color: 'var(--gold)',
                    border: '1px solid rgba(184,151,60,.25)',
                    flexShrink: 0,
                    alignSelf: 'center',
                  }}
                >
                  {guide.badge}
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    fontFamily: "'Jost',sans-serif",
                    color: 'var(--stone)',
                    alignSelf: 'center',
                  }}
                >
                  {guide.readTime}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 'clamp(1.2rem,2vw,1.5rem)',
                  fontWeight: 500,
                  color: 'var(--deep)',
                  lineHeight: 1.25,
                  margin: '14px 0 10px',
                }}
              >
                {guide.title}
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--taupe)', lineHeight: 1.75, margin: '0 0 12px', maxWidth: 640 }}>
                {guide.intro}
              </p>
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontFamily: "'Jost',sans-serif",
                  color: 'var(--stone)',
                }}
              >
                {guide.keywords}
              </p>
            </Link>
          ))}

          {content.comingSoonGuides.map((guide) => (
            <div
              key={guide.slug}
              className="reveal"
              style={{ display: 'block', borderBottom: '1px solid var(--linen)', padding: '32px 0', pointerEvents: 'none', userSelect: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    fontFamily: "'Jost',sans-serif",
                    fontWeight: 500,
                    padding: '4px 10px',
                    background: 'rgba(45,74,62,.07)',
                    color: 'var(--taupe)',
                    border: '1px solid var(--linen)',
                    flexShrink: 0,
                    alignSelf: 'center',
                  }}
                >
                  {guide.badge}
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    fontFamily: "'Jost',sans-serif",
                    color: 'var(--stone)',
                    alignSelf: 'center',
                  }}
                >
                  {guide.readTime}
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    fontFamily: "'Jost',sans-serif",
                    fontWeight: 600,
                    color: 'var(--deep)',
                    alignSelf: 'center',
                    marginLeft: 'auto',
                    background: 'var(--gold)',
                    padding: '5px 12px',
                  }}
                >
                  {content.comingSoonLabel}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 'clamp(1.2rem,2vw,1.5rem)',
                  fontWeight: 500,
                  color: 'var(--deep)',
                  lineHeight: 1.25,
                  margin: '14px 0 10px',
                }}
              >
                {guide.title}
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--taupe)', lineHeight: 1.75, margin: '0 0 12px', maxWidth: 640 }}>
                {guide.intro}
              </p>
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontFamily: "'Jost',sans-serif",
                  color: 'var(--stone)',
                }}
              >
                {guide.keywords}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
          <h2 className="serif-display" style={{ color: '#fff' }}>{content.finalCta.title}</h2>
          <p>{content.finalCta.body}</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href={`${prefix}/play-with-a-pro`} className="btn btn--gold" style={{ fontSize: 10, padding: '14px 36px' }}>
            {content.finalCta.primaryCta}
          </Link>
          <Link href={`${prefix}/contact`} className="btn btn--outline-white">{content.finalCta.secondaryCta}</Link>
        </div>
      </section>
    </PageLayout>
  )
}
