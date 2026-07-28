'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import PageLayout from '../../../../components/PageLayout'
import StickyMobileCta from '../../../../components/StickyMobileCta'
import { getOfferById, OFFER_IDS } from '../../../../lib/offers-content.js'
import { PWAP_PHOTOS } from '../../../../lib/pwap-photos.js'
import { DEFAULT_SOCIAL_IMAGE } from '../../../../lib/page-metadata.js'
import { SITE_ORIGIN, buildLocalePath } from '../../../../lib/site.js'

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function buildArticleSchema(content, locale) {
  const path = buildLocalePath('/guides/play-with-a-pro-explained', locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.hero.eyebrow,
    description: content.hero.lead,
    author: {
      '@type': 'Person',
      name: 'Andy Griffiths',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mr Mallorca Golf',
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: `${SITE_ORIGIN}${path}`,
    image: DEFAULT_SOCIAL_IMAGE.url,
    about: [
      { '@type': 'Thing', name: 'Play With A Pro golf day Mallorca' },
      { '@type': 'Thing', name: 'Private golf coaching Mallorca' },
    ],
  }
}

function buildBreadcrumbSchema(locale) {
  const path = buildLocalePath('/guides/play-with-a-pro-explained', locale)
  const guidesPath = buildLocalePath('/guides', locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: `${SITE_ORIGIN}${guidesPath}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Play With A Pro Explained',
        item: `${SITE_ORIGIN}${path}`,
      },
    ],
  }
}

export default function PlayWithAProExplainedView({ content, locale = 'en' }) {
  const soloOffer = getOfferById(OFFER_IDS.solo, locale)
  const groupOffer = getOfferById(OFFER_IDS.group, locale)
  const stripViewportRef = useRef(null)
  const stripTrackRef = useRef(null)
  const pre = locale === 'en' ? '' : `/${locale}`

  const dayPhotos = PWAP_PHOTOS
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
    <PageLayout lang={locale === 'en' ? undefined : locale} trackScrollDepth>
      <JsonLd data={buildArticleSchema(content, locale)} />
      <JsonLd data={buildBreadcrumbSchema(locale)} />
      {/* HERO */}
      <section className="hero a-day-hero">
        <div className="hero__content">
          <p className="hero__eyebrow">{content.hero.eyebrow}</p>
          <h1 className="serif-display hero__title a-day-hero__title">
            {content.hero.titleLine1}
            <br />
            <em>{content.hero.titleLine2}</em>
          </h1>
          <p className="a-day-hero__lead">{content.hero.lead}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '1.5rem' }}>
            <Link href={`${pre}/play-with-a-pro#packages`} className="btn btn--gold">
              {content.hero.primaryCta}
            </Link>
            <Link href={`${pre}/play-with-a-pro`} className="btn btn--outline-white">
              {content.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="a-day-quote">
        <div className="a-day-quote__inner">
          <p className="serif-display a-day-quote__text">&ldquo;{content.quote1.text}&rdquo;</p>
          <p className="a-day-quote__credit">{content.quote1.credit}</p>
        </div>
      </section>

      {/* NARRATIVE */}
      <article className="a-day-article">

        {/* WHY PLAY WITH A PRO */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">{content.whyPlay.eyebrow}</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">{content.whyPlay.title}</h2>
            {content.whyPlay.paragraphs.map((paragraph, index) => (
              <p className="a-day-section__copy" key={`why-play-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* QUESTIONS BEFORE YOU COME */}
        <section className="a-day-section a-day-section--cream">
          <div className="a-day-section__inner">
            <p className="eyebrow">{content.beforeDay.eyebrow}</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">{content.beforeDay.title}</h2>
            {content.beforeDay.paragraphs.map((paragraph, index) => (
              <p className="a-day-section__copy" key={`before-day-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* GOLFER CAROUSEL */}
        <div className="pwap-day-strip" aria-label="Play With A Pro round photos" ref={stripViewportRef}>
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

        {/* THE COURSE AND DECISIONS */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">{content.duringRound.eyebrow}</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">{content.duringRound.title}</h2>
            {content.duringRound.paragraphs.map((paragraph, index) => (
              <p className="a-day-section__copy" key={`during-round-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* MIDDLE PULL QUOTE */}
        <div className="a-day-midquote">
          <div className="a-day-quote__inner">
            <p className="serif-display a-day-quote__text">&ldquo;{content.quote2.text}&rdquo;</p>
            <p className="a-day-quote__credit">{content.quote2.credit}</p>
          </div>
        </div>

        {/* AFTER THE ROUND */}
        <section className="a-day-section a-day-section--cream">
          <div className="a-day-section__inner">
            <p className="eyebrow">{content.afterRound.eyebrow}</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">{content.afterRound.title}</h2>
            <p className="a-day-section__copy">{content.afterRound.paragraph}</p>
            <blockquote style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1.25rem', margin: '1.75rem 0 0', fontStyle: 'italic' }}>
              <p className="a-day-section__copy" style={{ margin: 0 }}>&ldquo;{content.afterRound.quoteText}&rdquo;</p>
              <cite style={{ display: 'block', marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.875rem', opacity: 0.7 }}>{content.afterRound.quoteCredit}</cite>
            </blockquote>
          </div>
        </section>

        {/* WHAT CHANGES */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">{content.whatChanges.eyebrow}</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">{content.whatChanges.title}</h2>
            {content.whatChanges.paragraphs.map((paragraph, index) => (
              <p className="a-day-section__copy" key={`what-changes-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

      </article>

      {/* WHAT'S INCLUDED */}
      <div className="a-day-facts">
        <div className="a-day-facts__grid">
          {[
            { label: content.facts.format.label, value: content.facts.format.value },
            { label: content.facts.courseSelection.label, value: content.facts.courseSelection.value },
            { label: content.facts.included.label, value: content.facts.included.value },
            { label: content.facts.duration.label, value: content.facts.duration.value },
            {
              label: content.facts.dayRateLabel,
              value: `${soloOffer.priceDisplay} ${content.facts.soloLabel} · ${groupOffer.priceDisplay} ${content.facts.groupSuffix}`,
            },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="a-day-facts__label">{label}</p>
              <p className="serif-display a-day-facts__value">{value}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href={`${pre}/golf-courses`} className="btn btn--dark">
            {content.facts.seeCoursesCta}
          </Link>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
          <h2 className="serif-display cta-final__heading-light">{content.finalCta.title}</h2>
          <p>{content.finalCta.body}</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href={`${pre}/contact`} className="btn btn--gold cta-final__primary-lg">
            {content.finalCta.primaryCta}
          </Link>
          <Link href={`${pre}/play-with-a-pro`} className="btn btn--outline-white">
            {content.finalCta.secondaryCta}
          </Link>
        </div>
      </section>

      <StickyMobileCta
        primaryHref={`${pre}/contact`}
        primaryLabel={content.sticky.primaryLabel}
        secondaryHref={content.sticky.secondaryHref}
        secondaryLabel={content.sticky.secondaryLabel}
      />
    </PageLayout>
  )
}
