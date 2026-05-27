import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../components/PageLayout'

const HERO_ACTIONS = {
  en: { experience: 'See the Experience', reviews: 'Course Reviews', articles: 'Guides & Articles' },
  de: { experience: 'Erlebnis ansehen', reviews: 'Platzbewertungen', articles: 'Ratgeber & Artikel' },
  es: { experience: 'Ver la experiencia', reviews: 'Analisis de campos', articles: 'Guias y articulos' },
  fr: { experience: "Voir l'experience", reviews: 'Avis parcours', articles: 'Guides & articles' },
  nl: { experience: 'Bekijk de ervaring', reviews: 'Baanbeoordelingen', articles: 'Gidsen & artikelen' },
  sv: { experience: 'Se upplevelsen', reviews: 'Banrecensioner', articles: 'Guider & artiklar' },
  zh: { experience: 'Kan ti yan', reviews: 'Qiu chang ping ce', articles: 'Zhi nan yu wen zhang' },
}

function shortTitle(title) {
  return title
    .replace(/ - A PGA Professional's Honest (Review|Take|Ranking)$/, '')
    .replace(/ — A PGA Professional's Honest (Review|Take)$/, '')
    .replace(/: A PGA Professional's Honest (Review|Take)$/, '')
    .replace(/ - A PGA Professional's Honest Answer from Someone Who Lives Here$/, '')
    .replace(/: An Honest Answer from Someone Who Lives Here$/, '')
    .replace(/ Review$/, '')
    .replace(/\s*\(?\d{4}\)?$/, '')
    .trim()
}

const GUIDE_IMAGES = {
  'son-muntaner-review': { src: '/images/son-muntaner-card.webp', position: 'center 30%' },
  'son-gual-review': { src: '/images/son-gual-card.webp', position: 'center 40%' },
  'alcanada-review': { src: '/images/alcanada-card.webp', position: 'center 50%' },
  'santa-ponsa-1-review': { src: '/images/santa-ponsa-card.webp', position: 'center 40%' },
  'son-termes-review': { src: '/images/courses/son-termes.webp', position: 'center 40%' },
  'golf-andratx-review': { src: '/images/andratx-card.webp', position: 'center 40%' },
  'son-antem-west-review': { src: '/images/courses/son-antem-west.webp', position: 'center 45%' },
  't-golf-calvia-review': { src: '/images/t-golf-calvia-card.webp', position: 'center 40%' },
  'a-day-at-son-gual': { src: '/images/son-gual-blog/sg-hero.webp', position: 'center 35%' },
  'best-golf-courses-mallorca': { src: '/images/blog-best-golf-courses/Son Gual.webp', position: 'center 50%' },
  'is-mallorca-good-for-golf': { src: '/images/blog-is-mallorca-good/Son Gual.jpg', position: 'center 40%' },
  'best-time-play-golf-mallorca': { src: '/images/blog-best-time-play/Son Severa Sunny Golf.jpg', position: 'center 50%' },
  'golf-cost-mallorca': { src: '/images/blog-golf-cost/Alcanada.webp', position: 'center 40%' },
  'golf-trip-planning-mallorca': { src: '/images/blog-trip-planning/Son Gual.jpg', position: 'center 50%' },
  'golf-club-hire-mallorca': { src: '/images/blog-golf-club-hire/Callaway Rogue ST Max.jpg', position: 'center 50%' },
}

function getLocalePrefix(locale) {
  return locale === 'en' ? '' : `/${locale}`
}

function GuideCarousel({ id, heading, guides, prefix, priorityFirst = false, dark = false }) {
  return (
    <section className={`guides-carousel-section${dark ? ' guides-carousel-section--dark' : ''}`} id={id}>
      {heading && (
        <div className="guides-carousel-section__header">
          <p className={`eyebrow${dark ? ' eyebrow--light' : ''}`}>{heading}</p>
          <p className="guides-carousel-section__hint" style={dark ? { color: 'rgba(255,255,255,0.4)' } : {}}>{'<- scroll ->'}</p>
        </div>
      )}
      <div className="guides-carousel__track" aria-label={`${heading || 'Guides'} carousel`}>
        {guides.map((guide, i) => {
          const img = guide.img
            ? { src: guide.img, position: guide.imgPosition || 'center 40%' }
            : GUIDE_IMAGES[guide.slug]
          return (
            <Link
              key={guide.slug}
              href={`${prefix}/guides/${guide.slug}`}
              className="guide-photo-card reveal"
            >
              <div className="guide-photo-card__clip">
                {img && (
                  <div className="guide-photo-card__bg">
                    <Image
                      src={img.src}
                      alt={guide.title}
                      fill
                      quality={88}
                      sizes="(max-width: 760px) 92vw, 380px"
                      style={{ objectFit: 'cover', objectPosition: img.position }}
                      priority={priorityFirst && i === 0}
                    />
                  </div>
                )}
                <div className="guide-photo-card__overlay" />
              </div>
              <span className="guide-photo-card__badge">{guide.badge}</span>
              <div className="guide-photo-card__content">
                <h2 className="guide-photo-card__title">{shortTitle(guide.title)}</h2>
                <p className="guide-photo-card__keywords">{guide.keywords}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default function GuidesIndexView({ locale = 'en', pageLang, content }) {
  const prefix = getLocalePrefix(locale)
  const pageLayoutLang = pageLang || locale
  const heroActions = HERO_ACTIONS[locale] || HERO_ACTIONS.en

  const reviewGuides = content.liveGuides.filter((g) => g.slug.endsWith('-review') || g.slug === 'a-day-at-son-gual')
  const articleGuides = content.liveGuides.filter((g) => !g.slug.endsWith('-review') && g.slug !== 'a-day-at-son-gual')

  return (
    <PageLayout lang={pageLayoutLang} navTransparent={false} showWhatsAppButton={false}>
      <header className="page-hero page-hero--guides">
        <div className="page-hero__media" aria-hidden="true">
          <Image
            src="/images/guide.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={82}
            sizes="100vw"
            className="page-hero__image page-hero__image--guides"
          />
        </div>
        <div className="page-hero__overlay page-hero__overlay--guides" aria-hidden="true" />
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
            <a href="#course-reviews" className="btn btn--outline-white">
              {heroActions.reviews}
            </a>
            <a href="#guides-articles" className="btn btn--outline-white">
              {heroActions.articles}
            </a>
          </div>
        </div>
      </header>

      <GuideCarousel
        id="course-reviews"
        heading={content.reviewsHeading}
        guides={reviewGuides}
        prefix={prefix}
        priorityFirst
      />

      {articleGuides.length > 0 && (
        <GuideCarousel
          id="guides-articles"
          heading={content.articlesHeading}
          guides={articleGuides}
          prefix={prefix}
          dark
        />
      )}

      <section className="cta-final">
        <div className="cta-final__left">
          <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
          <h2 className="serif-display cta-final__title">{content.finalCta.title}</h2>
          <p>{content.finalCta.body}</p>
        </div>
        <div className="cta-final__right">
          <Link href={`${prefix}/play-with-a-pro`} className="btn btn--gold cta-final__primary">
            {content.finalCta.primaryCta}
          </Link>
          <Link href={`${prefix}/contact`} className="btn btn--outline-white">{content.finalCta.secondaryCta}</Link>
        </div>
      </section>
    </PageLayout>
  )
}

