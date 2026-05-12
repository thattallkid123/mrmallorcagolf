import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

const HERO_ACTIONS = {
  en: { experience: 'See the Experience', reviews: 'Course Reviews ↓', articles: 'Guides & Articles ↓' },
  de: { experience: 'Erlebnis ansehen', reviews: 'Platzbewertungen ↓', articles: 'Ratgeber & Artikel ↓' },
  es: { experience: 'Ver la experiencia', reviews: 'Análisis de campos ↓', articles: 'Guías y artículos ↓' },
  fr: { experience: "Voir l'experience", reviews: 'Avis parcours ↓', articles: 'Guides & articles ↓' },
  nl: { experience: 'Bekijk de ervaring', reviews: 'Baanbeoordelingen ↓', articles: 'Gidsen & artikelen ↓' },
  sv: { experience: 'Se upplevelsen', reviews: 'Banrecensioner ↓', articles: 'Guider & artiklar ↓' },
  zh: { experience: '查看体验', reviews: '球场评测 ↓', articles: '指南与文章 ↓' },
}

// Image map keyed by slug — no need to touch content files
const GUIDE_IMAGES = {
  'son-muntaner-review':        { src: '/images/son-muntaner-card.webp',                          position: 'center 30%' },
  'son-gual-review':            { src: '/images/son-gual-card.webp',                              position: 'center 40%' },
  'alcanada-review':            { src: '/images/alcanada-card.webp',                              position: 'center 50%' },
  'santa-ponsa-1-review':       { src: '/images/santa-ponsa-card.webp',                           position: 'center 40%' },
  'son-termes-review':          { src: '/images/courses/son-termes.webp',                         position: 'center 40%' },
  'golf-andratx-review':        { src: '/images/andratx-card.webp',                               position: 'center 40%' },
  'a-day-at-son-gual':          { src: '/images/son-gual-blog/sg-hero.webp',                      position: 'center 35%' },
  'best-golf-courses-mallorca': { src: '/images/blog-best-golf-courses/Son Gual.webp',            position: 'center 50%' },
  'is-mallorca-good-for-golf':  { src: '/images/blog-is-mallorca-good/Son Gual.jpg',              position: 'center 40%' },
  'best-time-play-golf-mallorca': { src: '/images/blog-best-time-play/Son Severa Sunny Golf.jpg', position: 'center 50%' },
  'golf-cost-mallorca':         { src: '/images/blog-golf-cost/Alcanada.webp',                    position: 'center 40%' },
  'golf-trip-planning-mallorca':{ src: '/images/blog-trip-planning/Son Gual.jpg',                 position: 'center 50%' },
  'golf-club-hire-mallorca':    { src: '/images/blog-golf-club-hire/Callaway Rogue ST Max.jpg',   position: 'center 50%' },
}

function getLocalePrefix(locale) {
  return locale === 'en' ? '' : `/${locale}`
}

export default function GuidesIndexView({ locale = 'en', pageLang, content }) {
  const prefix = getLocalePrefix(locale)
  const pageLayoutLang = pageLang || locale
  const heroActions = HERO_ACTIONS[locale] || HERO_ACTIONS.en

  const reviewGuides = content.liveGuides.filter((g) => g.slug.endsWith('-review') || g.slug === 'a-day-at-son-gual')
  const articleGuides = content.liveGuides.filter((g) => !g.slug.endsWith('-review') && g.slug !== 'a-day-at-son-gual')

  return (
    <PageLayout lang={pageLayoutLang}>
      <RevealObserver />
      <header
        className="page-hero"
        style={{
          minHeight: '100vh',
          backgroundImage:
            'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.webp)',
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '1.75rem' }}>
            <Link href={`${prefix}/play-with-a-pro`} className="btn btn--gold">
              {heroActions.experience}
            </Link>
            <a href="#course-reviews" className="btn btn--outline-white">
              {heroActions.reviews}
            </a>
            <a href="#guides-articles" className="btn btn--outline-white">
              {heroActions.articles}
            </a>
          </div>
        </div>
      </header>

      {/* ── Course Reviews Carousel ───────────────────────────────────── */}
      <section className="guides-carousel-section" id="course-reviews">
        {content.reviewsHeading && (
          <div className="guides-carousel-section__header">
            <p className="eyebrow">{content.reviewsHeading}</p>
            <p className="guides-carousel-section__hint">← scroll →</p>
          </div>
        )}
        <div className="guides-carousel__track">
          {reviewGuides.map((guide, i) => {
            const img = guide.img
              ? { src: guide.img, position: guide.imgPosition || 'center 40%' }
              : GUIDE_IMAGES[guide.slug]
            return (
              <Link
                key={guide.slug}
                href={`${prefix}/guides/${guide.slug}`}
                className="guide-photo-card reveal"
              >
                {img && (
                  <div className="guide-photo-card__bg">
                    <Image
                      src={img.src}
                      alt={guide.title}
                      fill
                      sizes="348px"
                      style={{ objectFit: 'cover', objectPosition: img.position }}
                      priority={i === 0}
                    />
                  </div>
                )}
                <div className="guide-photo-card__overlay" />
                {guide.badgeGold && (
                  <span className="guide-photo-card__badge">{guide.badge}</span>
                )}
                <div className="guide-photo-card__content">
                  {!guide.badgeGold && (
                    <span className="guide-photo-card__badge guide-photo-card__badge--plain">{guide.badge}</span>
                  )}
                  <h2 className="guide-photo-card__title">{guide.title}</h2>
                  <p className="guide-photo-card__intro">{guide.intro}</p>
                  <p className="guide-photo-card__keywords">{guide.keywords}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Guides & Articles Grid ────────────────────────────────────── */}
      {articleGuides.length > 0 && (
        <section className="guides-articles-section" id="guides-articles">
          {content.articlesHeading && (
            <div className="guides-articles-section__header">
              <p className="eyebrow">{content.articlesHeading}</p>
            </div>
          )}
          <div className="guides-articles-grid">
            {articleGuides.map((guide) => {
              const img = guide.img
              ? { src: guide.img, position: guide.imgPosition || 'center 40%' }
              : GUIDE_IMAGES[guide.slug]
              return (
                <Link
                  key={guide.slug}
                  href={`${prefix}/guides/${guide.slug}`}
                  className="guide-article-card reveal"
                >
                  {img && (
                    <div className="guide-article-card__img">
                      <Image
                        src={img.src}
                        alt={guide.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover', objectPosition: img.position }}
                      />
                    </div>
                  )}
                  <div className="guide-article-card__body">
                    <div className="guide-article-card__meta">
                      <span className="guide-entry__badge">{guide.badge}</span>
                      <span className="guide-entry__read-time">{guide.readTime}</span>
                    </div>
                    <h2 className="guide-article-card__title">{guide.title}</h2>
                    <p className="guide-article-card__intro">{guide.intro}</p>
                    <p className="guide-article-card__keywords">{guide.keywords}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
          <h2 className="serif-display cta-final__title">{content.finalCta.title}</h2>
          <p>{content.finalCta.body}</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href={`${prefix}/play-with-a-pro`} className="btn btn--gold cta-final__primary">
            {content.finalCta.primaryCta}
          </Link>
          <Link href={`${prefix}/contact`} className="btn btn--outline-white">{content.finalCta.secondaryCta}</Link>
        </div>
      </section>
    </PageLayout>
  )
}
