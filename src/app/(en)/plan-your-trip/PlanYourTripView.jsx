'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CourseSelectorToolClient from '../tools/course-selector/CourseSelectorToolClient'
import StickyMobileCta from '../../../components/StickyMobileCta'
import { buildLocalePath } from '../../../lib/site'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

const COURSE_LINK_LABELS = {
  en: 'View all Mallorca golf courses',
  de: 'Alle Golfplaetze ansehen',
  es: 'Ver todos los campos',
  fr: 'Voir tous les parcours',
  nl: 'Bekijk alle banen',
  sv: 'Se alla banor',
  zh: '查看所有马略卡球场',
}

export default function PlanYourTripView({ locale = 'en', content: rawContent }) {
  const [itineraryOpen, setItineraryOpen] = useState(false)
  const content = rawContent || getPlanYourTripContent(locale)
  const courseLinkLabel = COURSE_LINK_LABELS[locale] || COURSE_LINK_LABELS.en
  const golfCoursesHref = buildLocalePath('/golf-courses', locale)
  const contactHref = buildLocalePath('/contact', locale)
  const pwapHref = buildLocalePath('/play-with-a-pro', locale)
  const hotelRecommenderHref = buildLocalePath('/tools/hotel-recommender', locale)

  return (
    <main>
      <section className="pyt-hero">
        <div className="pyt-hero__media" aria-hidden="true">
          <Image
            src="/images/plan-your-trip-hero.webp"
            alt=""
            fill
            priority
            quality={88}
            sizes="100vw"
            className="pyt-hero__image"
          />
        </div>
        <div className="pyt-hero__inner">
          <p className="pyt-eyebrow">{content.heroEyebrow}</p>
          <h1 className="pyt-hero__title">{content.heroTitle}</h1>
          <p className="pyt-hero__body">{content.heroBody}</p>
          <div className="pyt-option-strip" aria-label={content.heroEyebrow}>
            <a href="#sample-itinerary" className="pyt-option-card">
              <span>{content.options.itineraryLabel}</span>
              <strong>{content.options.itineraryTitle}</strong>
              <em>{content.options.itineraryNote}</em>
            </a>
            <a href="#professional-planning" className="pyt-option-card pyt-option-card--gold">
              <span>{content.options.proLabel}</span>
              <strong>{content.options.proTitle}</strong>
              <em>{content.options.proNote}</em>
            </a>
            <a href="#free-course-finder" className="pyt-option-card">
              <span>{content.options.basicLabel}</span>
              <strong>{content.options.basicTitle}</strong>
              <em>{content.options.basicNote}</em>
            </a>
          </div>
        </div>
      </section>

      {content.sampleItinerary && (
        <section className="pyt-section pyt-section--light" id="sample-itinerary">
          <div className="pyt-section__inner pyt-section__inner--wide">
            <div className="pyt-itin-invite">
              <div className="pyt-itin-invite__text">
                <span className="pyt-tier-badge">{content.sampleItinerary.eyebrow}</span>
                <h2 className="pyt-itin-invite__title">{content.sampleItinerary.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setItineraryOpen(!itineraryOpen)}
                className="pyt-itin-invite__btn"
                aria-expanded={itineraryOpen}
                aria-controls="sample-itinerary-body"
              >
                {itineraryOpen ? content.sampleItinerary.toggleHideLabel : content.sampleItinerary.toggleShowLabel}
              </button>
            </div>

            {content.sampleItinerary.whyThisShape ? (
              <div className="pyt-itin-why">
                <h3 className="pyt-itin-why__title">{content.sampleItinerary.whyThisShape.title}</h3>
                <p className="pyt-itin-why__lead">{content.sampleItinerary.whyThisShape.lead}</p>
                <ul className="pyt-itin-why__list">
                  {content.sampleItinerary.whyThisShape.points.map((point) => (
                    <li key={point.title} className="pyt-itin-why__item">
                      <strong className="pyt-itin-why__item-title">{point.title}</strong>
                      <span className="pyt-itin-why__item-body">{point.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {itineraryOpen && (
              <div className="pyt-itin" id="sample-itinerary-body">
                <p className="pyt-itin__intro">{content.sampleItinerary.intro}</p>

                {content.sampleItinerary.days.map((day, i) => (
                  <article
                    key={day.day}
                    className={`pyt-itin-row${i % 2 === 1 ? ' pyt-itin-row--reverse' : ''}`}
                  >
                    <div className="pyt-itin-row__media">
                      <Image
                        src={day.image}
                        alt={day.course}
                        fill
                        sizes="(max-width: 900px) 100vw, 46vw"
                        quality={88}
                        className="pyt-itin-row__img"
                      />
                    </div>
                    <div className="pyt-itin-row__text">
                      <p className="pyt-itin-row__day">{day.day}</p>
                      <h3 className="pyt-itin-row__course">{day.course}</h3>
                      <p className="pyt-itin-row__meta">
                        <span>{day.fromPalma} {content.sampleItinerary.fromPalmaLabel}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{day.courseType}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{day.role}</span>
                      </p>
                      <p className="pyt-itin-row__body">{day.body}</p>
                      {day.teeTime ? (
                        <p className="pyt-itin-row__note">
                          <strong>{content.sampleItinerary.teeTimeLabel}:</strong> {day.teeTime}
                        </p>
                      ) : null}
                      {day.planningNote ? (
                        <p className="pyt-itin-row__note">
                          <strong>{content.sampleItinerary.planningNoteLabel}:</strong> {day.planningNote}
                        </p>
                      ) : null}
                      {day.dining ? (
                        <p className="pyt-itin-row__dining">
                          <strong>{content.sampleItinerary.diningLabel}:</strong> {day.dining}
                        </p>
                      ) : null}
                      {day.swap ? (
                        <p className="pyt-itin-row__swap">
                          <strong>{content.sampleItinerary.swapLabel}:</strong> {day.swap}
                        </p>
                      ) : null}
                      {day.guide ? (
                        <Link href={buildLocalePath(day.guide, locale)} className="pyt-itin-row__link">
                          {content.sampleItinerary.readGuideLabel}
                        </Link>
                      ) : null}
                    </div>
                  </article>
                ))}

                <div className="pyt-itin__footer">
                  <p className="pyt-itin__summary">{content.sampleItinerary.summary}</p>
                  <p>
                    {content.sampleItinerary.feesNote}{' '}
                    <Link href={buildLocalePath(content.sampleItinerary.feesLink, locale)} className="pyt-itin__hotel-link">
                      {content.sampleItinerary.feesCta}
                    </Link>
                  </p>
                  <p>
                    {content.sampleItinerary.hotelEyebrow}:{' '}
                    <Link href={hotelRecommenderHref} className="pyt-itin__hotel-link">
                      {content.sampleItinerary.hotelCta}
                    </Link>
                  </p>
                </div>

                {content.sampleItinerary.ctaText ? (
                  <div className="pyt-itin__cta">
                    <p className="pyt-itin__cta-text">{content.sampleItinerary.ctaText}</p>
                    <Link href={contactHref} className="pyt-itin__cta-btn">
                      {content.sampleItinerary.ctaLabel}
                    </Link>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="pyt-section pyt-section--dark" id="professional-planning">
        <div className="pyt-section__inner">
          <div className="pyt-tier-header">
            <span className="pyt-tier-badge pyt-tier-badge--gold">{content.professional.eyebrow}</span>
            <h2 className="pyt-tier-title">{content.professional.title}</h2>
            <p className="pyt-tier-body">{content.professional.body}</p>
          </div>

          <ul className="pyt-includes">
            {content.professional.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="pyt-pro-cta">
            <p className="pyt-pro-cta__note">{content.professional.note}</p>
            {content.professional.sendPrompt ? (
              <p className="pyt-pro-cta__note" style={{ marginTop: '-0.35rem', opacity: 0.85 }}>
                {content.professional.sendPrompt}
              </p>
            ) : null}
            <Link href={contactHref} className="pyt-pro-cta__btn">
              {content.professional.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="pyt-section pyt-section--light" id="free-course-finder">
        <div className="pyt-section__inner pyt-section__inner--wide">
          <CourseSelectorToolClient lang={locale} heroHeadingLevel={2} />
          <p className="pyt-tier-body pyt-free__browse">
            <Link href={golfCoursesHref} className="pyt-free__browse-link">
              {courseLinkLabel}
            </Link>
          </p>
        </div>
      </section>

      <section className="pyt-section pyt-section--pine">
        <div className="pyt-section__inner pyt-addon">
          <div className="pyt-addon__text">
            <span className="pyt-eyebrow pyt-eyebrow--light">{content.addon.eyebrow}</span>
            <h2 className="pyt-addon__title">{content.addon.title}</h2>
            <p className="pyt-addon__body">{content.addon.body}</p>
            <p className="pyt-addon__price">
              {content.addon.price} <strong>{content.addon.priceValue}</strong> &nbsp;&middot;&nbsp;
              {content.addon.groupLabel} <strong>{content.addon.groupValue}</strong>
            </p>
            <p className="pyt-addon__price pyt-addon__price--sub">{content.addon.priceSuffix}</p>
          </div>
          <div className="pyt-addon__action">
            <Link href={pwapHref} className="pyt-addon__btn">
              {content.addon.cta}
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileCta
        primaryHref={contactHref}
        primaryLabel={content.professional.cta}
        secondaryHref={locale === 'zh' ? `${contactHref}#wechat` : 'https://wa.me/34624466702?text=Hi%20Andy%2C%20I%27m%20interested%20in%20planning%20a%20golf%20trip%20to%20Mallorca.'}
        secondaryLabel={locale === 'zh' ? '微信联系' : 'Message on WhatsApp'}
      />
    </main>
  )
}
