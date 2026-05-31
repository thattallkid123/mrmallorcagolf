'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import { SITE_ORIGIN, buildLocalePath } from '../../lib/site'

const PAGE_LINKS = {
  en: {
    courses: 'See all Mallorca courses',
  },
  de: {
    courses: 'Alle Golfplaetze ansehen',
  },
  es: {
    courses: 'Ver todos los campos',
  },
  fr: {
    courses: 'Voir tous les parcours',
  },
  nl: {
    courses: 'Bekijk alle banen',
  },
  sv: {
    courses: 'Se alla banor',
  },
  zh: {
    courses: '查看全部球场',
    sonGual: '阅读 Son Gual 评测',
    alcanada: '阅读 Alcanada 评测',
  },
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function buildPlayWithAProSchema(locale, content) {
  const pagePath = buildLocalePath('/play-with-a-pro', locale)
  const contactPath = buildLocalePath('/contact', locale)
  const golfCoursesPath = buildLocalePath('/golf-courses', locale)
  const serviceName = locale === 'en' ? 'Play With A Pro Mallorca Private Golf Day' : content.hero.title

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: content.hero.body,
    url: `${SITE_ORIGIN}${pagePath}`,
    provider: {
      '@type': 'Organization',
      name: 'Mr Mallorca Golf',
      url: SITE_ORIGIN,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Mallorca, Spain',
    },
    serviceType: 'Private golf day',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: 495,
      highPrice: 3000,
      priceCurrency: 'EUR',
      url: `${SITE_ORIGIN}${contactPath}`,
    },
    isRelatedTo: [
      { '@type': 'WebPage', url: `${SITE_ORIGIN}${golfCoursesPath}` },
    ],
  }
}

function buildBreadcrumbSchema(locale) {
  const homePath = buildLocalePath('/', locale)
  const playPath = buildLocalePath('/play-with-a-pro', locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_ORIGIN}${homePath}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Play with a Pro',
        item: `${SITE_ORIGIN}${playPath}`,
      },
    ],
  }
}

export default function PlayWithAProView({ content, locale = 'en' }) {
  const links = PAGE_LINKS[locale] || PAGE_LINKS.en
  const reviewLinks = {
    courses: buildLocalePath('/golf-courses', locale),
  }
  const pauseTimer = useRef(null)
  const [paused, setPaused] = useState(false)
  const dayPhotos = [
    { src: '/images/client-alcanada.webp', alt: 'Andy with a client at Alcanada', position: 'center 38%' },
    { src: '/images/client-son-gual-banner.webp', alt: 'Andy and client at Son Gual', position: 'center 32%', variant: 'portrait' },
    { src: '/images/client-son-gual2-banner.webp', alt: 'Group day at Son Gual', position: 'center 45%' },
    { src: '/images/client-group-alcanada.webp', alt: 'Group golf day with sea views', position: 'center 44%' },
    { src: '/images/client-group-valley.webp', alt: 'Group of four golfers in Mallorca', position: 'center 36%' },
    { src: '/images/client-group-pond.webp', alt: 'Group day with water views', position: 'center 26%', variant: 'portrait' },
  ]
  const dayPhotosLoop = [...dayPhotos, ...dayPhotos]

  const pauseBriefly = () => {
    setPaused(true)
    clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setPaused(false), 2200)
  }

  return (
    <>
      <PageLayout lang={locale}>
        <JsonLd data={buildPlayWithAProSchema(locale, content)} />
        <JsonLd data={buildBreadcrumbSchema(locale)} />
        <RevealObserver />

        <section className="pwap-hero pwap-hero--tall">
          <div className="pwap-hero__bg" aria-hidden="true">
            <Image
              src="/images/andy-coaching-client.webp"
              alt="Andy Griffiths coaching a client on the golf course in Mallorca"
              fill
              priority
              quality={88}
              sizes="100vw"
              className="pwap-hero__image"
            />
            <div className="pwap-hero__overlay" />
          </div>
          <div className="pwap-hero__inner">
            <div className="pwap-hero__content">
              <p className="breadcrumb">
                <Link href={content.hero.homeHref} className="breadcrumb__link">
                  {content.hero.breadcrumbHome}
                </Link>{' '}
                &nbsp;/&nbsp; <span>{content.hero.breadcrumbCurrent}</span>
              </p>
              <p className="eyebrow eyebrow--gold pwap-hero__eyebrow">
                {content.hero.eyebrow}
              </p>
              <h1 className="serif-display pwap-hero__title">
                {String(content.hero.title).split('\n').map((line, index, lines) => (
                  <span key={line}>
                    {line}
                    {index < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="pwap-hero__body">
                {content.hero.body}
              </p>
              {content.hero.price ? (
                <p className="pwap-hero__price">{content.hero.price}</p>
              ) : null}
              <div className="pwap-hero__actions">
                <Link href={content.hero.primaryHref} className="btn btn--gold">
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
            <h2 className="serif-display pwap-section-title">
              {content.day.title}
            </h2>
            {content.day.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pull-quote">
              <p>&ldquo;{content.day.quote}&rdquo;</p>
            </div>
            {content.day.postQuoteParagraph ? <p>{content.day.postQuoteParagraph}</p> : null}
            <div
              className="pwap-day-strip"
              aria-label="Play With A Pro round photos"
              onPointerDown={pauseBriefly}
              onWheel={pauseBriefly}
              onTouchStart={pauseBriefly}
              onTouchEnd={pauseBriefly}
            >
              <div className={`pwap-day-strip__track${paused ? ' paused' : ''}`}>
                {dayPhotosLoop.map((photo, index) => (
                  <figure
                    key={`${photo.src}-${index}`}
                    className={`pwap-day-strip__card${photo.variant === 'portrait' ? ' pwap-day-strip__card--portrait' : ''}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 920px) 78vw, 360px"
                      style={{ objectFit: 'cover', objectPosition: photo.position || 'center center' }}
                    />
                  </figure>
                ))}
              </div>
            </div>
            <div className="pwap-course-note">
              <p className="eyebrow">{content.courses.eyebrow}</p>
              <h3>{content.courses.title}</h3>
              <p>{content.courses.body}</p>
              <Link href={reviewLinks.courses} className="pwap-course-note__link">{links.courses}</Link>
            </div>
            {/* Questionnaire CTA intentionally removed from public page — shown only on booking confirmation */}
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

        <section className="pwap-feature-photo reveal" aria-label="Play With A Pro featured image">
          <div className="pwap-feature-photo__inner">
            <Image
              src="/images/pwap-mandarin-ab101723.jpg"
              alt="Play With A Pro day in Mallorca with sea and fairway backdrop"
              width={7008}
              height={4672}
              sizes="(max-width: 920px) 100vw, 1200px"
              className="pwap-feature-photo__img"
            />
          </div>
        </section>

        {content.who ? (
          <section className="pwap-who">
            <div className="reveal">
              <p className="eyebrow">{content.who.eyebrow}</p>
              <h2 className="serif-display pwap-section-title pwap-section-title--spacious">
                {content.who.title}
              </h2>
            </div>
            <div className="who-grid">
              {content.who.cards.map((card, index) => (
                <div key={card.title} className={`who-card reveal${index % 3 === 1 ? ' reveal-delay-1' : index % 3 === 2 ? ' reveal-delay-2' : ''}`}>
                  <span className="who-card__icon">{card.num}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="pwap-packages" id="packages">
          <div className="pwap-packages__header reveal">
            <p className="eyebrow">{content.packages.eyebrow}</p>
            <h2 className="serif-display pwap-section-title pwap-section-title--tight">
              {content.packages.title}
            </h2>
            <p className="pwap-packages__intro">
              {content.packages.body}
            </p>
          </div>
          <div className="pricing-grid">
            {content.packages.tiers.map((tier, index) => (
              <div key={`${tier.eyebrow}-${tier.name}-${index}`} className={`tier${tier.signature ? ' tier--signature' : tier.featured ? ' tier--feature' : ''} reveal`}>
                <p className="tier__name-small">{tier.eyebrow}</p>
                <h3 className="tier__name">{tier.name}</h3>
                <p className="tier__price">{tier.price}</p>
                <div className="tier__rule"></div>
                <ul className="tier__features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                {tier.noteLines ? (
                  <div className={`tier__note${tier.featured ? ' tier__note--feature' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {tier.noteLines.map((line) => <span key={line}>{line}</span>)}
                  </div>
                ) : tier.note ? (
                  <p className={`tier__note${tier.featured ? ' tier__note--feature' : ''}`}>{tier.note}</p>
                ) : null}
                <Link href={tier.href} className="tier__btn">
                  {tier.button}
                </Link>
              </div>
            ))}
          </div>
          {content.packages.sharedCta ? (
            <div className="packages__shared-cta">
              <Link href={content.packages.sharedCta.href} className="tier__btn">
                {content.packages.sharedCta.label}
              </Link>
            </div>
          ) : null}
        </section>

        <section className="cta-final">
          <div className="cta-final__left reveal">
            <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
            <h2 className="serif-display cta-final__title">
              {content.finalCta.title}
            </h2>
            <p>{content.finalCta.body}</p>
          </div>
          <div className="cta-final__right reveal">
            <Link href={content.finalCta.primaryHref} className="btn btn--gold cta-final__primary-lg">
              {content.finalCta.primaryCta}
            </Link>
            <a href={content.finalCta.secondaryHref} className="btn btn--outline-white" target="_blank" rel="noopener noreferrer">
              {content.finalCta.secondaryCta}
            </a>
            {content.finalCta.tertiaryHref && (
              <Link href={content.finalCta.tertiaryHref} className="btn btn--outline-white">
                {content.finalCta.tertiaryCta}
              </Link>
            )}
          </div>
        </section>
      </PageLayout>
    </>
  )
}
