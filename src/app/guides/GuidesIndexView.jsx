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
        <div className="guides-list">
          {content.liveGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`${prefix}/guides/${guide.slug}`}
              className="guide-entry guide-entry--live reveal"
            >
              <div className="guide-entry__meta">
                <span className="guide-entry__badge">{guide.badge}</span>
                <span className="guide-entry__read-time">{guide.readTime}</span>
              </div>
              <h2 className="guide-entry__title">{guide.title}</h2>
              <p className="guide-entry__intro">{guide.intro}</p>
              <p className="guide-entry__keywords">{guide.keywords}</p>
            </Link>
          ))}

          {content.comingSoonGuides.map((guide) => (
            <div
              key={guide.slug}
              className="guide-entry guide-entry--coming-soon reveal"
            >
              <div className="guide-entry__meta">
                <span className="guide-entry__badge guide-entry__badge--muted">{guide.badge}</span>
                <span className="guide-entry__read-time">{guide.readTime}</span>
                <span className="guide-entry__status">{content.comingSoonLabel}</span>
              </div>
              <h2 className="guide-entry__title">{guide.title}</h2>
              <p className="guide-entry__intro">{guide.intro}</p>
              <p className="guide-entry__keywords">{guide.keywords}</p>
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
