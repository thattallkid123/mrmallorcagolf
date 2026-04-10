import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FillImageFrame from '../../components/FillImageFrame'

function joinHref(locale, path) {
  if (locale === 'en') return path
  return `/${locale}${path === '/' ? '' : path}`
}

export default function CoachingView({ locale = 'en', content }) {
  return (
    <>
      <link rel="preload" as="image" href="/images/coaching-hero.jpg" />
      <PageLayout lang={locale === 'en' ? undefined : locale}>
        <RevealObserver />

        <header
          className="page-hero coaching-hero"
          style={{
            minHeight: '100vh',
            backgroundImage:
              'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%), url(/images/coaching-hero.jpg)',
            backgroundSize: 'auto, cover',
            backgroundPosition: 'center, 60% 80%',
          }}
        >
          <div className="page-hero__inner">
            <p className="breadcrumb">
              <Link href={joinHref(locale, '/')}>{content.hero.breadcrumbHome}</Link> &nbsp;/&nbsp;{' '}
              <span style={{ color: 'var(--gold-light)' }}>{content.hero.breadcrumbCurrent}</span>
            </p>
            <h1>
              {content.hero.title.split('. ').map((line, index, arr) => (
                <span key={index}>
                  {line}
                  {index < arr.length - 1 ? '.' : ''}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,.78)',
                lineHeight: 1.8,
                maxWidth: 560,
                marginTop: '1rem',
              }}
            >
              {content.hero.body}
            </p>
          </div>
        </header>

        <section className="range-section">
          <div className="reveal">
            <p className="eyebrow">{content.range.eyebrow}</p>
            <h2>{content.range.title}</h2>
            {content.range.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="analogy-box">
              <p>&ldquo;{content.range.quote}&rdquo;</p>
              <cite>- {content.range.quoteAttribution}</cite>
            </div>
          </div>
          <div className="coaching-panel reveal">
            <p className="eyebrow coaching-panel__eyebrow">{content.range.questionnaireEyebrow}</p>
            {content.range.questionnaireParagraphs.map((paragraph) => (
              <p key={paragraph} className="coaching-panel__text">{paragraph}</p>
            ))}
            <Link href={joinHref(locale, '/contact')} className="coaching-panel__cta">
              {content.range.questionnaireCta}
            </Link>
          </div>
        </section>

        <div className="full-bleed-image">
          <FillImageFrame
            src="/images/coaching-action.jpg"
            alt={content.imageAlt}
            sizes="100vw"
            containerStyle={{ height: '520px', display: 'block' }}
            imageStyle={{ objectPosition: 'center 3%' }}
          />
        </div>

        <section className="improvements">
          <div className="reveal">
            <p className="eyebrow">{content.improvements.eyebrow}</p>
            <h2>{content.improvements.title}</h2>
            <p className="improvements__sub">{content.improvements.sub}</p>
          </div>
          <div className="improvements-grid">
            {content.improvements.items.map((improvement, index) => (
              <div key={improvement.num} className={`improvement reveal${index % 2 === 1 ? ' reveal-delay-1' : ''}`}>
                <span className="improvement__num">{improvement.num}</span>
                <h3>{improvement.title}</h3>
                <p>{improvement.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="how-section">
          <div className="reveal">
            <p className="eyebrow">{content.how.eyebrow}</p>
            <h2>{content.how.title}</h2>
            <p>{content.how.body}</p>
          </div>
          <div className="how-steps reveal">
            {content.how.steps.map((step) => (
              <div key={step.num} className="how-step">
                <span className="how-step__num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="who-section">
          <div className="reveal">
            <p className="who-section__eyebrow">
              {content.who.eyebrow}
            </p>
            <h2 className="serif-display who-section__title">{content.who.title}</h2>
          </div>
          <div className="who-grid">
            {content.who.cards.map((card, index) => (
              <div key={card.title} className={`who-card reveal${index % 3 !== 0 ? ` reveal-delay-${index % 3}` : ''}`}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
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
            <Link href={joinHref(locale, '/contact')} className="btn btn--gold" style={{ fontSize: 11, padding: '15px 36px' }}>
              {content.finalCta.primaryCta}
            </Link>
            <Link href={joinHref(locale, '/play-with-a-pro')} className="btn btn--outline-white">
              {content.finalCta.secondaryCta}
            </Link>
          </div>
        </section>
      </PageLayout>
    </>
  )
}
