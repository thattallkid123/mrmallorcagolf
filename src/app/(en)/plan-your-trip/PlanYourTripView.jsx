'use client'

import Link from 'next/link'
import Image from 'next/image'
import CourseSelectorToolClient from '../tools/course-selector/CourseSelectorToolClient'
import StickyMobileCta from '../../../components/StickyMobileCta'
import { buildLocalePath } from '../../../lib/site'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

const COURSE_LINK_LABELS = {
  en: 'View all Mallorca golf courses',
  de: 'Alle Golfplätze ansehen',
  es: 'Ver todos los campos',
  fr: 'Voir tous les parcours',
  nl: 'Bekijk alle banen',
  sv: 'Se alla banor',
  zh: '查看所有马略卡球场',
}

const WA_TRIP_LABELS = {
  en: 'Message on WhatsApp',
  de: 'Per WhatsApp schreiben',
  es: 'Escribir por WhatsApp',
  fr: 'Écrire sur WhatsApp',
  nl: 'Bericht via WhatsApp',
  sv: 'Skriv på WhatsApp',
}

const WA_TRIP_MESSAGES = {
  en: "Hi Andy, I'm interested in planning a golf trip to Mallorca.",
  de: 'Hallo Andy, ich möchte eine Golfreise nach Mallorca planen.',
  es: 'Hola Andy, quiero planificar un viaje de golf a Mallorca.',
  fr: 'Bonjour Andy, je souhaite planifier un séjour de golf à Majorque.',
  nl: 'Hallo Andy, ik wil een golfreis naar Mallorca plannen.',
  sv: 'Hej Andy, jag vill planera en golfresa till Mallorca.',
}

const SAMPLE_IMAGE_ALTS = {
  en: 'Alcanada golf course during a Mallorca golf trip',
  de: 'Alcanada Golfplatz während einer Mallorca-Golfreise',
  es: 'Campo de golf Alcanada durante un viaje de golf en Mallorca',
  fr: 'Parcours de golf Alcanada pendant un séjour golf à Majorque',
  nl: 'Alcanada golfbaan tijdens een golfreis naar Mallorca',
  sv: 'Alcanada golfbana under en golfresa till Mallorca',
  zh: '马略卡高尔夫行程中的 Alcanada 球场',
}

export default function PlanYourTripView({ locale = 'en', content: rawContent }) {
  const content = rawContent || getPlanYourTripContent(locale)
  const courseLinkLabel = COURSE_LINK_LABELS[locale] || COURSE_LINK_LABELS.en
  const golfCoursesHref = buildLocalePath('/golf-courses', locale)
  const contactHref = buildLocalePath('/contact', locale)
  const pwapHref = buildLocalePath('/play-with-a-pro', locale)
  const hotelRecommenderHref = buildLocalePath('/tools/hotel-recommender', locale)
  const tripPlanningHref = `${contactHref}?service=trip-planning`
  const teeTimeHref = `${contactHref}?service=tee-time-booking`
  const messageHref = locale === 'zh'
    ? `${contactHref}#wechat`
    : `https://wa.me/34624466702?text=${encodeURIComponent(WA_TRIP_MESSAGES[locale] || WA_TRIP_MESSAGES.en)}`
  const messageLabel = locale === 'zh' ? '微信联系' : (WA_TRIP_LABELS[locale] || WA_TRIP_LABELS.en)

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
          <div className="pyt-hero__actions">
            <Link href={tripPlanningHref} className="pyt-hero__btn">
              {content.professional.cta}
            </Link>
            <a
              href={messageHref}
              className="pyt-hero__btn pyt-hero__btn--secondary"
              target={locale === 'zh' ? undefined : '_blank'}
              rel={locale === 'zh' ? undefined : 'noopener noreferrer'}
            >
              {messageLabel}
            </a>
          </div>
          <div className="pyt-option-strip" aria-label={content.heroEyebrow}>
            <a href="#professional-planning" className="pyt-option-card pyt-option-card--gold">
              <span>{content.options.proLabel}</span>
              <strong>{content.options.proTitle}</strong>
              <em>{content.options.proNote}</em>
            </a>
            <a href="#sample-itinerary" className="pyt-option-card">
              <span>{content.options.itineraryLabel}</span>
              <strong>{content.options.itineraryTitle}</strong>
              <em>{content.options.itineraryNote}</em>
            </a>
            <a href="#free-course-finder" className="pyt-option-card">
              <span>{content.options.basicLabel}</span>
              <strong>{content.options.basicTitle}</strong>
              <em>{content.options.basicNote}</em>
            </a>
          </div>
        </div>
      </section>

      <section className="pyt-section pyt-section--dark" id="professional-planning">
        <div className="pyt-section__inner">
          <div className="pyt-tier-header">
            <span className="pyt-tier-badge pyt-tier-badge--gold">{content.professional.eyebrow}</span>
            <h2 className="pyt-tier-title">{content.professional.title}</h2>
            <p className="pyt-tier-body">{content.professional.body}</p>
          </div>

          <div className="pyt-planning-layout">
            <div className="pyt-planning-main">
              <ul className="pyt-includes">
                {content.professional.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {content.professional.possibilities ? (
                <div className="pyt-possibilities">
                  <div className="pyt-possibilities__intro">
                    <h3>{content.professional.possibilities.title}</h3>
                    <p>{content.professional.possibilities.body}</p>
                  </div>
                  <ul className="pyt-possibilities__list">
                    {content.professional.possibilities.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="pyt-planning-aside" aria-label={content.professional.cta}>
              <div className="pyt-pro-cta">
                <p className="pyt-pro-cta__note">{content.professional.note}</p>
                {content.professional.feeNote ? (
                  <p className="pyt-pro-cta__note pyt-pro-cta__note--muted">
                    {content.professional.feeNote}
                  </p>
                ) : null}
                {content.professional.sendPrompt ? (
                  <p className="pyt-pro-cta__note pyt-pro-cta__note--muted">
                    {content.professional.sendPrompt}
                  </p>
                ) : null}
                <Link href={tripPlanningHref} className="pyt-pro-cta__btn">
                  {content.professional.cta}
                </Link>
              </div>

              {content.professional.bookingOnly ? (
                <div className="pyt-booking-only">
                  <div>
                    <h3>{content.professional.bookingOnly.title}</h3>
                    <p>{content.professional.bookingOnly.body}</p>
                  </div>
                  <Link href={teeTimeHref} className="pyt-booking-only__link">
                    {content.professional.bookingOnly.cta}
                  </Link>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      {content.sampleItinerary && (
        <section className="pyt-section pyt-section--light" id="sample-itinerary">
          <div className="pyt-section__inner pyt-section__inner--wide">
            <div className="pyt-sample-layout">
              <div>
                <div className="pyt-itin-invite">
                  <div className="pyt-itin-invite__text">
                    <span className="pyt-tier-badge">{content.sampleItinerary.eyebrow}</span>
                    <h2 className="pyt-itin-invite__title">{content.sampleItinerary.title}</h2>
                    <p className="pyt-itin-invite__body">{content.sampleItinerary.intro}</p>
                  </div>
                  {locale === 'en' && content.sampleItinerary.fullGuideLink ? (
                    <Link href={content.sampleItinerary.fullGuideLink} className="pyt-itin-invite__btn">
                      {content.sampleItinerary.fullGuideLabel}
                    </Link>
                  ) : null}
                </div>

                {content.sampleItinerary.route ? (
                  <div className="pyt-route-line">
                    <span>{content.sampleItinerary.routeLabel}</span>
                    <strong>{content.sampleItinerary.route}</strong>
                  </div>
                ) : null}
              </div>
              <div className="pyt-sample-media">
                <Image
                  src="/images/blog-trip-planning/Alcanada.webp"
                  alt={SAMPLE_IMAGE_ALTS[locale] || SAMPLE_IMAGE_ALTS.en}
                  fill
                  sizes="(max-width: 860px) 100vw, 38vw"
                  className="pyt-sample-media__img"
                />
              </div>
            </div>

            {content.sampleItinerary.whyThisShape ? (
              <div className="pyt-itin-why pyt-itin-why--teaser">
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

            <div className="pyt-itin__footer pyt-itin__footer--teaser">
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
          </div>
        </section>
      )}

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

      <section className="pyt-section pyt-section--light" id="free-course-finder">
        <div className="pyt-section__inner pyt-section__inner--wide pyt-tool-shell">
          <CourseSelectorToolClient lang={locale} heroHeadingLevel={2} />
          <p className="pyt-tier-body pyt-free__browse">
            <Link href={golfCoursesHref} className="pyt-free__browse-link">
              {courseLinkLabel}
            </Link>
          </p>
        </div>
      </section>

      <StickyMobileCta
        primaryHref={tripPlanningHref}
        primaryLabel={content.professional.cta}
        secondaryHref={messageHref}
        secondaryLabel={messageLabel}
      />
    </main>
  )
}
