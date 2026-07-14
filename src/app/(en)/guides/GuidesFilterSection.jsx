'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const GUIDE_CATEGORY_BY_SLUG = {
  'play-with-a-pro-explained': 'planning',
  'on-course-coaching-mallorca': 'planning',
  'best-golf-courses-mallorca': 'planning',
  'is-mallorca-good-for-golf': 'planning',
  'best-time-play-golf-mallorca': 'planning',
  'golf-trip-planning-mallorca': 'planning',
  'golf-cost-mallorca': 'costs',
  'golf-club-hire-mallorca': 'costs',
}

function shortTitle(title) {
  return title
    .replace(/ - A PGA Professional's Honest (Review|Take|Ranking)$/, '')
    .replace(/ - A PGA Professional's Honest Answer from Someone Who Lives Here$/, '')
    .replace(/: A PGA Professional's Honest (Review|Take)$/, '')
    .replace(/: An Honest Answer from Someone Who Lives Here$/, '')
    .replace(/ Review$/, '')
    .replace(/\s*\(?\d{4}\)?$/, '')
    .trim()
}

function GuideCarousel({ id, heading, guides, prefix, imageBySlug, priorityFirst = false, dark = false }) {
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
            : imageBySlug[guide.slug]

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

export default function GuidesFilterSection({
  locale = 'en',
  prefix = '',
  guides = [],
  reviewsHeading,
  articlesHeading,
  imageBySlug,
}) {
  const [active, setActive] = useState('all')

  const reviewGuides = useMemo(
    () => guides.filter((guide) => guide.slug.endsWith('-review')),
    [guides]
  )
  const articleGuides = useMemo(
    () => guides.filter((guide) => !guide.slug.endsWith('-review')),
    [guides]
  )
  const planningGuides = useMemo(
    () => articleGuides.filter((guide) => GUIDE_CATEGORY_BY_SLUG[guide.slug] === 'planning'),
    [articleGuides]
  )
  const costGuides = useMemo(
    () => articleGuides.filter((guide) => GUIDE_CATEGORY_BY_SLUG[guide.slug] === 'costs'),
    [articleGuides]
  )

  if (locale !== 'en') {
    return (
      <>
        <GuideCarousel
          id="course-reviews"
          heading={reviewsHeading}
          guides={reviewGuides}
          prefix={prefix}
          imageBySlug={imageBySlug}
          priorityFirst
        />
        {articleGuides.length > 0 ? (
          <GuideCarousel
            id="guides-articles"
            heading={articlesHeading}
            guides={articleGuides}
            prefix={prefix}
            imageBySlug={imageBySlug}
            dark
          />
        ) : null}
      </>
    )
  }

  const tabs = [
    { id: 'all', label: `All (${guides.length})` },
    { id: 'reviews', label: `Course Reviews (${reviewGuides.length})` },
    { id: 'planning', label: `Trip Planning (${planningGuides.length})` },
    { id: 'costs', label: `Golf Costs (${costGuides.length})` },
  ]
  const articleHeading =
    active === 'planning'
      ? 'Guides: Trip Planning'
      : active === 'costs'
        ? 'Guides: Golf Costs'
        : articlesHeading

  return (
    <>
      <section className="guides-filter-shell" id="guides-filter">
        <div className="guides-filter-shell__inner">
          <div className="guides-filter-tabs" role="tablist" aria-label="Guide category filters">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`guides-filter-tab${active === tab.id ? ' is-active' : ''}`}
                aria-pressed={active === tab.id}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {active === 'all' || active === 'reviews' ? (
        <GuideCarousel
          id="course-reviews"
          heading={reviewsHeading}
          guides={reviewGuides}
          prefix={prefix}
          imageBySlug={imageBySlug}
          priorityFirst
        />
      ) : null}

      {active === 'all' || active === 'planning' || active === 'costs' ? (
        <GuideCarousel
          id="guides-articles"
          heading={articleHeading}
          guides={active === 'planning' ? planningGuides : active === 'costs' ? costGuides : articleGuides}
          prefix={prefix}
          imageBySlug={imageBySlug}
          dark
        />
      ) : null}
    </>
  )
}
