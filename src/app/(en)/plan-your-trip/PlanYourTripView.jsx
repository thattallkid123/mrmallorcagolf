import '../../../styles/trip-planning.css'
import Link from 'next/link'
import Image from 'next/image'
import ToolChoices from '../../../components/ToolChoices'
import StickyMobileCta from '../../../components/StickyMobileCta'
import { buildLocalePath } from '../../../lib/site'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'
import { localizeAlt } from '../../../lib/alt-text'

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
  en: 'A golfer teeing off at Son Gual golf course, Mallorca',
  de: 'Golfer beim Abschlag auf dem Golfplatz Son Gual, Mallorca',
  es: 'Golfista en el tee de salida del campo de golf Son Gual, Mallorca',
  fr: 'Golfeur au départ sur le parcours de Son Gual, Majorque',
  nl: 'Golfer slaat af op golfbaan Son Gual, Mallorca',
  sv: 'Golfspelare slår ut på golfbanan Son Gual, Mallorca',
  zh: '马略卡 Son Gual 球场开球的球手',
}

// One photograph paired with John’s own lead client quote. The alt strings are the English keys
// in src/lib/alt-text.js; localizeAlt() swaps in the translation per locale.
const PROOF_PHOTOS = [
  { src: '/images/client-son-gual-john.webp', alt: 'Andy with John at Son Gual during a Play With A Pro day', modifier: 'gual' },
]

export default function PlanYourTripView({ locale = 'en', content: rawContent }) {
  const content = rawContent || getPlanYourTripContent(locale)
  const courseFinderHref = buildLocalePath('/tools/course-selector', locale)
  const contactHref = buildLocalePath('/contact', locale)
  const pwapHref = buildLocalePath('/play-with-a-pro', locale)
  const hotelRecommenderHref = buildLocalePath('/tools/hotel-recommender', locale)
  const tripPlanningHref = `${contactHref}?service=trip-planning`
  const teeTimeHref = `${contactHref}?service=tee-time-booking`
  const wholeTripHref = `${contactHref}?service=whole-trip`
  const messageHref = locale === 'zh'
    ? `${contactHref}#wechat`
    : `https://wa.me/34624466702?text=${encodeURIComponent(WA_TRIP_MESSAGES[locale] || WA_TRIP_MESSAGES.en)}`
  const messageLabel = locale === 'zh' ? '微信联系' : (WA_TRIP_LABELS[locale] || WA_TRIP_LABELS.en)
  const getWorkingModeHref = (target) => {
    if (target === 'tee-time-booking') return teeTimeHref
    if (target === 'whole-trip') return wholeTripHref
    return tripPlanningHref
  }

  const proofItems = content.clientProof?.testimonials?.items || []

  return (
    <div className="pyt-page">
      <section className="pyt-hero">
        <div className="pyt-hero__media" aria-hidden="true">
          <Image
            src="/images/plan-your-trip-hero.webp"
            alt=""
            fill
            loading="eager" fetchPriority="high"
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
            <Link prefetch={false} href={courseFinderHref} className="pyt-option-card">
              <span>{content.options.basicLabel}</span>
              <strong>{content.options.basicTitle}</strong>
              <em>{content.options.basicNote}</em>
            </Link>
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

          {content.professional.workingModes ? (
            <div className="pyt-working-modes">
              <div className="pyt-working-modes__intro">
                <h3>{content.professional.workingModes.title}</h3>
                <p>{content.professional.workingModes.body}</p>
              </div>
              <div className={`pyt-working-modes__grid${content.professional.workingModes.items.length === 3 ? ' pyt-working-modes__grid--three' : ''}`}>
                {content.professional.workingModes.items.map((item) => (
                  <article key={item.title} className="pyt-working-mode">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                    <Link href={getWorkingModeHref(item.target)} className="pyt-working-mode__link">
                      {item.cta}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="pyt-planning-layout">
            <div className="pyt-planning-main">
              <ul className="pyt-includes">
                {content.professional.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </div>

            <aside className="pyt-planning-aside" aria-label={content.professional.cta}>
              <div className="pyt-pro-cta">
                {content.professional.process ? (
                  <div className="pyt-process">
                    <h3>{content.professional.process.title}</h3>
                    <ol>
                      {content.professional.process.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}
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
              </div>
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
                  src="/images/plan-your-trip-sample-son-gual.webp"
                  alt={SAMPLE_IMAGE_ALTS[locale] || SAMPLE_IMAGE_ALTS.en}
                  fill
                  sizes="(max-width: 860px) 100vw, 38vw"
                  className="pyt-sample-media__img"
                />
              </div>
            </div>

            {content.sampleItinerary.whyThisShape ? (
              <details className="pyt-itin-why pyt-itin-why--teaser">
                <summary className="pyt-itin-why__title">{content.sampleItinerary.whyThisShape.title}</summary>
                <p className="pyt-itin-why__lead">{content.sampleItinerary.whyThisShape.lead}</p>
                <ul className="pyt-itin-why__list">
                  {content.sampleItinerary.whyThisShape.points.map((point) => (
                    <li key={point.title} className="pyt-itin-why__item">
                      <strong className="pyt-itin-why__item-title">{point.title}</strong>
                      <span className="pyt-itin-why__item-body">{point.body}</span>
                    </li>
                  ))}
                </ul>
              </details>
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

      {content.tripIdeas ? (
        <section className="pyt-section pyt-section--white" id="trip-ideas">
          <div className="pyt-section__inner pyt-section__inner--wide">
            {content.professional.possibilities ? (
              <div className="pyt-possibilities" id="whole-trip">
                <div className="pyt-possibilities__intro">
                  <h2>{content.professional.possibilities.title}</h2>
                  <p>{content.professional.possibilities.body}</p>
                </div>
                <ul className="pyt-possibilities__list">
                  {content.professional.possibilities.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="pyt-trip-ideas__head">
              <span className="pyt-tier-badge">{content.tripIdeas.eyebrow}</span>
              <h3 className="pyt-tier-title">{content.tripIdeas.title}</h3>
              <p className="pyt-tier-body">{content.tripIdeas.intro}</p>
            </div>
            <ToolChoices locale={locale} className="pyt-trip-ideas">
              {content.tripIdeas.items.map((item) => (
                <article key={item.image} className="pyt-trip-idea">
                  <div className="pyt-trip-idea__media">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={88}
                      sizes="(max-width: 520px) 85vw, (max-width: 1100px) 45vw, 320px"
                      className="pyt-trip-idea__image"
                    />
                  </div>
                  <div className="pyt-trip-idea__body">
                    <span className="pyt-trip-idea__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </ToolChoices>
            <div className="pyt-trip-ideas__cta">
              <Link href={wholeTripHref} className="pyt-hero__btn">
                {content.tripIdeas.cta}
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {content.clientProof && proofItems.length > 0 ? (
        <section className="pyt-section pyt-section--white" id="client-proof">
          <div className="pyt-section__inner pyt-section__inner--wide">
            <div className="pyt-proof__head">
              <h2 className="pyt-tier-title">{content.clientProof.title}</h2>
              <p className="pyt-tier-body">{content.clientProof.intro}</p>
            </div>
            <div className="pyt-proof__feature">
              <div className="pyt-proof__photos">
                {PROOF_PHOTOS.map((photo) => (
                  <figure key={photo.src} className="pyt-proof__photo">
                    <Image
                      src={photo.src}
                      alt={localizeAlt(photo.alt, locale)}
                      fill
                      sizes="(max-width: 700px) 260px, 300px"
                      className={`pyt-proof__photo-img pyt-proof__photo-img--${photo.modifier}`}
                    />
                  </figure>
                ))}
              </div>
              <blockquote className="pull-quote pyt-proof__quote pyt-proof__quote--lead">
                <p>&ldquo;{proofItems[0].text}&rdquo;</p>
                <cite>{proofItems[0].author}</cite>
              </blockquote>
            </div>
            <div className="pyt-proof__quotes">
              {proofItems.slice(1).map((item) => (
                <details key={item.author} className="pyt-proof__review">
                  <summary>{item.author}</summary>
                  <blockquote className="pull-quote pyt-proof__quote">
                    <p>&ldquo;{item.text}&rdquo;</p>
                    <cite>{item.author}</cite>
                  </blockquote>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pyt-section pyt-section--light pyt-support">
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

      <section className="pyt-section pyt-section--pine pyt-enquiry">
        <div className="pyt-section__inner">
          <h2 className="pyt-addon__title">{content.professional.cta}</h2>
          <p className="pyt-enquiry__body">{content.professional.sendPrompt}</p>
          <div className="pyt-hero__actions">
            <Link href={tripPlanningHref} className="pyt-hero__btn">{content.professional.cta}</Link>
            <a href={messageHref} className="pyt-hero__btn pyt-hero__btn--secondary"
              target={locale === 'zh' ? undefined : '_blank'} rel={locale === 'zh' ? undefined : 'noopener noreferrer'}>
              {messageLabel}
            </a>
          </div>
          <p className="pyt-enquiry__tool" id="free-course-finder">
            <Link prefetch={false} href={courseFinderHref}>{content.free.title}</Link>
            <span>{content.options.basicNote}</span>
          </p>
        </div>
      </section>

      <StickyMobileCta
        primaryHref={tripPlanningHref}
        primaryLabel={content.professional.cta}
        secondaryHref={messageHref}
        secondaryLabel={messageLabel}
      />
    </div>
  )
}
