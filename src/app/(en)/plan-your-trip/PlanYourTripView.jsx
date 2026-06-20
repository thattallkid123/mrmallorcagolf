'use client'

import Link from 'next/link'
import Image from 'next/image'
import CourseSelectorToolClient from '../tools/course-selector/CourseSelectorToolClient'
import BookingPolicyNotice from '../../../components/BookingPolicyNotice'
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
  const content = rawContent || getPlanYourTripContent(locale)
  const courseLinkLabel = COURSE_LINK_LABELS[locale] || COURSE_LINK_LABELS.en
  const golfCoursesHref = buildLocalePath('/golf-courses', locale)
  const contactHref = buildLocalePath('/contact', locale)
  const pwapHref = buildLocalePath('/play-with-a-pro', locale)

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
            <a href="#free-course-finder" className="pyt-option-card">
              <span>{content.options.basicLabel}</span>
              <strong>{content.options.basicTitle}</strong>
              <em>{content.options.basicNote}</em>
            </a>
            <a href="#professional-planning" className="pyt-option-card pyt-option-card--gold">
              <span>{content.options.proLabel}</span>
              <strong>{content.options.proTitle}</strong>
              <em>{content.options.proNote}</em>
            </a>
          </div>
        </div>
      </section>

      <section className="pyt-section pyt-section--light" id="free-course-finder">
        <div className="pyt-section__inner pyt-section__inner--wide">
          <div className="pyt-tier-header">
            <span className="pyt-tier-badge">{content.free.eyebrow}</span>
            <h2 className="pyt-tier-title">{content.free.title}</h2>
            <p className="pyt-tier-body">{content.free.body}</p>
            <p className="pyt-tier-body" style={{ marginTop: '-0.35rem' }}>
              <Link href={golfCoursesHref} style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>
                {courseLinkLabel}
              </Link>
            </p>
          </div>
          <CourseSelectorToolClient lang={locale} />
        </div>
      </section>

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

          <BookingPolicyNotice locale={locale} />
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
