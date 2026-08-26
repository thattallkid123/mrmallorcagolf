'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import BookingPolicyNotice from '../../../components/BookingPolicyNotice'
import ReviewBadge from '../../../components/ReviewBadge'
import StickyMobileCta from '../../../components/StickyMobileCta'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import { SITE_ORIGIN, buildLocalePath } from '../../../lib/site'
import { PWAP_PHOTOS } from '../../../lib/pwap-photos.js'

const PAGE_LINKS = {
  en: {
    courses: 'See all Mallorca courses',
  },
  de: {
    courses: 'Alle Golfplätze ansehen',
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
  const serviceType = locale === 'zh' ? '私人高尔夫球日' : 'Private golf day'

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
    serviceType,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: 795,
      highPrice: 3000,
      priceCurrency: 'EUR',
      url: `${SITE_ORIGIN}${contactPath}`,
    },
    isRelatedTo: [
      { '@type': 'WebPage', url: `${SITE_ORIGIN}${golfCoursesPath}` },
    ],
  }
}

function buildFaqSchema(locale, content) {
  if (!content.faq?.items?.length) return null
  const pagePath = buildLocalePath('/play-with-a-pro', locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${SITE_ORIGIN}${pagePath}`,
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

function buildBreadcrumbSchema(locale, content) {
  const homePath = buildLocalePath('/', locale)
  const playPath = buildLocalePath('/play-with-a-pro', locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: content.hero.breadcrumbHome,
        item: `${SITE_ORIGIN}${homePath}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.hero.breadcrumbCurrent,
        item: `${SITE_ORIGIN}${playPath}`,
      },
    ],
  }
}

export default function PlayWithAProView({ content, locale = 'en' }) {
  const stripViewportRef = useRef(null)
  const stripTrackRef = useRef(null)
  const testimonialsGridRef = useRef(null)
  const scrollTestimonials = () => {
    const grid = testimonialsGridRef.current
    if (!grid) return
    const cardWidth = grid.querySelector('.testimonial')?.offsetWidth || 360
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4
    grid.scrollTo({ left: atEnd ? 0 : grid.scrollLeft + cardWidth + 2, behavior: 'smooth' })
  }
  const links = PAGE_LINKS[locale] || PAGE_LINKS.en
  const copy =
    locale === 'zh'
      ? {
          heroImageAlt: 'Andy Griffiths 在马略卡球场上指导球手',
          stripLabel: '与我同场照片',
          featuredLabel: '与我同场特色图片',
          featuredImageAlt: '马略卡私人高尔夫体验，海景与球道背景',
          photos: [
            'Alcanada 上与球手同场',
            '带海景的小组高尔夫日',
            '马略卡四人高尔夫小组',
            'Son Gual 上的 Andy 与球手',
            'Son Antem West 的同场高尔夫日',
            '带水景的小组高尔夫日',
            'Andy 与球手在 Santa Ponsa 的同场高尔夫日',
            'Andy 与 Mark 在 Santa Ponsa 的同场高尔夫日',
          ],
        }
      : {
          heroImageAlt: 'Andy Griffiths coaching a client on the golf course in Mallorca',
          stripLabel: 'Play With A Pro round photos',
          featuredLabel: 'Play With A Pro featured image',
          featuredImageAlt: 'Play With A Pro day in Mallorca with sea and fairway backdrop',
          photos: [
            'Andy with a client at Alcanada',
            'Group golf day with sea views',
            'Group of four golfers in Mallorca',
            'Andy and client at Son Gual',
            'Andy with two guests on a play-with-a-pro day at Son Antem West',
            'Group day with water views',
            'Andy with a client at Santa Ponsa during a Play With A Pro day',
            'Andy with Mark at Santa Ponsa during a Play With A Pro day',
          ],
        }
  const reviewLinks = {
    courses: buildLocalePath('/golf-courses', locale),
  }
  const wechatHref = locale === 'zh' ? buildLocalePath('/contact#wechat', locale) : null
  const dayPhotos = [
    ...PWAP_PHOTOS.map((photo, i) => ({ ...photo, alt: copy.photos[i] ?? photo.alt })),
  ]
  const dayPhotosLoop = [...dayPhotos, ...dayPhotos]

  useEffect(() => {
    const viewport = stripViewportRef.current
    const track = stripTrackRef.current
    if (!viewport || !track) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let pausedUntil = 0
    let raf
    let halfWidth = 0

    const setHalfWidth = () => {
      halfWidth = track.scrollWidth / 2
    }

    const pauseBriefly = () => {
      pausedUntil = performance.now() + 1800
    }

    const normalizeLoopPosition = () => {
      if (!halfWidth) return
      if (viewport.scrollLeft >= halfWidth) viewport.scrollLeft -= halfWidth
      if (viewport.scrollLeft < 0) viewport.scrollLeft += halfWidth
    }

    const tick = () => {
      if (performance.now() > pausedUntil) {
        viewport.scrollLeft = Math.round(viewport.scrollLeft + 1)
        normalizeLoopPosition()
      }
      raf = requestAnimationFrame(tick)
    }

    setHalfWidth()
    window.addEventListener('resize', setHalfWidth)

    viewport.addEventListener('pointerdown', pauseBriefly)
    viewport.addEventListener('wheel', pauseBriefly, { passive: true })
    viewport.addEventListener('touchstart', pauseBriefly, { passive: true })
    viewport.addEventListener('scroll', normalizeLoopPosition, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', setHalfWidth)
      viewport.removeEventListener('pointerdown', pauseBriefly)
      viewport.removeEventListener('wheel', pauseBriefly)
      viewport.removeEventListener('touchstart', pauseBriefly)
      viewport.removeEventListener('scroll', normalizeLoopPosition)
    }
  }, [])

  return (
    <>
      <PageLayout lang={locale} trackScrollDepth>
        <JsonLd data={buildPlayWithAProSchema(locale, content)} />
        <JsonLd data={buildBreadcrumbSchema(locale, content)} />
        {content.faq?.items?.length ? <JsonLd data={buildFaqSchema(locale, content)} /> : null}
        <RevealObserver />

        <section className="pwap-hero pwap-hero--tall">
          <div className="pwap-hero__bg" aria-hidden="true">
            <Image
              src="/images/andy-coaching-client.webp"
              alt={copy.heroImageAlt}
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
              {wechatHref ? (
                <p className="pwap-hero__note">
                  <a href={wechatHref} style={{ color: 'var(--gold-light)', textDecoration: 'none' }}>
                    微信联系：直接从这里找到我
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </section>

        {content.offerSummary ? (
          <section className="pwap-summary">
            <div className="pwap-summary__inner reveal">
              <div className="pwap-summary__header">
                <p className="eyebrow">{content.offerSummary.eyebrow}</p>
                <h2 className="serif-display pwap-section-title pwap-section-title--tight">
                  {content.offerSummary.title}
                </h2>
              </div>
              <div className="pwap-summary__grid">
                {content.offerSummary.items.map((item) => (
                  <article key={item.label} className="pwap-summary__card">
                    <p className="pwap-summary__label">{item.label}</p>
                    <p className="pwap-summary__text">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="pwap-day">
          <div className="pwap-day__lead reveal">
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
            <div className="pwap-day-strip" aria-label={copy.stripLabel} ref={stripViewportRef}>
              <div className="pwap-day-strip__track" ref={stripTrackRef}>
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
          <div className="pwap-day__details reveal">
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
            <BookingPolicyNotice locale={locale} />
          </div>
        </section>

        <section className="pwap-feature-photo reveal" aria-label={copy.featuredLabel}>
          <div className="pwap-feature-photo__inner">
            <Image
              src="/images/pwap-mandarin-ab101723.webp"
              alt={copy.featuredImageAlt}
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

        {content.testimonials?.items?.length ? (
          <section className="testimonials">
            <div className="testimonials__header reveal">
              <p className="eyebrow eyebrow--gold">{content.testimonials.eyebrow}</p>
              <h2 className="serif-display" style={{ color: '#fff' }}>{content.testimonials.title}</h2>
            </div>
            <div className="testimonials__grid-wrap">
              <div className="testimonials__grid" ref={testimonialsGridRef}>
                {content.testimonials.items.map((item) => (
                  <div key={item.author} className="testimonial">
                    <p>{item.text}</p>
                    <p className="testimonial__author">{item.author}</p>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="testimonials__scroll-btn"
                onClick={scrollTestimonials}
                aria-label={locale === 'zh' ? '查看更多评价' : 'Scroll for more reviews'}
              >
                →
              </button>
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
                <div className="tier__actions tier__actions--button-last">
                  {tier.detailHref ? (
                    <Link href={buildLocalePath(tier.detailHref, locale)} className="tier__detail-link">
                      {tier.detailLabel || 'See full details →'}
                    </Link>
                  ) : null}
                  <Link href={tier.href} className="tier__btn">
                    {tier.button}
                  </Link>
                </div>
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

        <div className="pwap-trust-band">
          <ReviewBadge variant="text" theme="light" locale={locale} />
        </div>

        {content.faq?.items?.length ? (
          <section className="faq">
            <div className="faq__left reveal">
              <p className="eyebrow">{content.faq.eyebrow}</p>
              <h2 className="serif-display">{content.faq.title}</h2>
              <p>{content.faq.intro}</p>
            </div>
            <div className="faq__list reveal reveal-delay-1">
              {content.faq.items.map((item, index) => (
                <details key={item.q} className="faq__item" open={index === 0}>
                  <summary className="faq__q">{item.q}</summary>
                  <div className="faq__a">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ) : null}

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

        <StickyMobileCta
          primaryHref={content.finalCta.primaryHref}
          primaryLabel={content.finalCta.primaryCta}
          secondaryHref={content.finalCta.secondaryHref}
          secondaryLabel={content.finalCta.secondaryCta}
        />
      </PageLayout>
    </>
  )
}
