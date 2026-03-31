import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import { buildPlayWithAProMetadata } from '../../lib/page-metadata'
import { getPlayWithAProContent } from '../../lib/play-with-a-pro-content'

export const metadata = buildPlayWithAProMetadata('en')

export default function PlayWithAPro() {
  const content = getPlayWithAProContent('en')

  return (
    <>
      <link rel="preload" as="image" href="/images/pwap-hero.jpg" />
      <PageLayout>
        <RevealObserver />

        <section className="pwap-hero" style={{ minHeight: '92vh' }}>
          <div
            className="pwap-hero__bg"
            style={{
              backgroundImage:
                'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
              backgroundSize: 'auto, auto, cover',
              backgroundPosition: 'center, center, 38% center',
            }}
          ></div>
          <div className="pwap-hero__inner">
            <div className="pwap-hero__content">
              <p className="breadcrumb">
                <Link href="/" className="breadcrumb__link">
                  {content.hero.breadcrumbHome}
                </Link>{' '}
                &nbsp;/&nbsp; <span>{content.hero.breadcrumbCurrent}</span>
              </p>
              <p className="eyebrow eyebrow--gold" style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                {content.hero.eyebrow}
              </p>
              <h1
                className="serif-display"
                style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', color: '#fff', marginBottom: '1.25rem' }}
              >
                {content.hero.title}
              </h1>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,.76)',
                  lineHeight: 1.75,
                  maxWidth: 520,
                  marginBottom: '2rem',
                }}
              >
                {content.hero.body}
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn--gold">
                  {content.hero.primaryCta}
                </Link>
                <a href="#packages" className="btn btn--outline-white">
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pwap-day">
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{content.day.eyebrow}</p>
            <h2
              className="serif-display"
              style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--deep)', marginTop: '.75rem', marginBottom: '1.5rem' }}
            >
              {content.day.title}
            </h2>
            {content.day.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pull-quote">
              <p>&ldquo;{content.day.quote}&rdquo;</p>
            </div>
            <a
              href="/questionnaire.html"
              target="_blank"
              rel="noopener"
              style={{
                display: 'block',
                marginTop: '2rem',
                padding: '20px 24px',
                border: '1px solid rgba(184,151,60,.3)',
                background: 'rgba(184,151,60,.05)',
                textDecoration: 'none',
                color: 'var(--deep)',
              }}
            >
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  fontFamily: "'Jost',sans-serif",
                  color: 'var(--gold)',
                  marginBottom: 8,
                }}
              >
                {content.day.questionnaireEyebrow}
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  margin: '0 0 4px',
                }}
              >
                {content.day.questionnaireTitle}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--taupe)', margin: 0 }}>{content.day.questionnaireBody}</p>
            </a>
          </div>
          <div className="pwap-day__right reveal">
            <div className="included">
              <h3>{content.included.title}</h3>
              <ul className="included-list">
                {content.included.items.map(([title, detail]) => (
                  <li key={title} className="included-item">
                    <span className="included-dot"></span>
                    <p>
                      <strong>{title}</strong>
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pwap-courses">
          <div className="courses-intro reveal">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,.55)' }}>
              {content.courses.eyebrow}
            </p>
            <h2
              className="serif-display"
              style={{ color: '#fff', marginTop: '.75rem', marginBottom: '1.25rem', fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}
            >
              {content.courses.title}
            </h2>
            <p style={{ color: 'rgba(255,255,255,.78)', lineHeight: 1.8, maxWidth: 680 }}>{content.courses.body}</p>
          </div>
        </section>

        <section className="pwap-testimonials">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,.45)' }}>
              {content.testimonialsEyebrow}
            </p>
            <h2 className="serif-display" style={{ color: '#fff', marginTop: '.75rem' }}>
              {content.testimonialsTitle}
            </h2>
          </div>
          <div className="pwap-testimonials__grid">
            {content.testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className={`testimonial reveal${index > 0 ? ` reveal-delay-${index}` : ''}`}>
                <p>&ldquo;{testimonial.text}&rdquo;</p>
                <span className="testimonial__author">- {testimonial.author}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pwap-packages" id="packages">
          <div className="reveal">
            <p className="eyebrow">{content.packages.eyebrow}</p>
            <h2
              className="serif-display"
              style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--deep)', marginTop: '.5rem', marginBottom: '1rem' }}
            >
              {content.packages.title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--taupe)', lineHeight: 1.8, maxWidth: 560, marginBottom: '3rem' }}>
              {content.packages.body}
            </p>
          </div>
          <div className="pricing-grid">
            {content.packages.tiers.map((tier) => (
              <div key={tier.name} className={`tier${tier.featured ? ' tier--feature' : ''} reveal`}>
                <p className="tier__name-small">{tier.eyebrow}</p>
                <h3 className="tier__name">{tier.name}</h3>
                <div className="tier__rule"></div>
                <ul className="tier__features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p
                  className="tier__price"
                  style={{
                    marginTop: '1.25rem',
                    marginBottom: '1.25rem',
                    color: tier.featured ? 'var(--gold-light)' : undefined,
                  }}
                >
                  {tier.price}
                </p>
                <Link href="/contact" className="tier__btn">
                  {tier.button}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final">
          <div className="cta-final__left reveal">
            <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
            <h2 className="serif-display" style={{ color: '#fff' }}>
              {content.finalCta.title}
            </h2>
            <p>{content.finalCta.body}</p>
          </div>
          <div className="cta-final__right reveal">
            <Link href="/contact" className="btn btn--gold" style={{ fontSize: 11, padding: '15px 36px' }}>
              {content.finalCta.primaryCta}
            </Link>
            <Link href="/golf-courses" className="btn btn--outline-white">
              {content.finalCta.secondaryCta}
            </Link>
            <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">
              {content.finalCta.tertiaryCta}
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  )
}
