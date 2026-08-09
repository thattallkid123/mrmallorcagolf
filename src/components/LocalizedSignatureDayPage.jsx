import Image from 'next/image'
import Link from 'next/link'
import PageLayout from './PageLayout'
import StickyMobileCta from './StickyMobileCta'
import { buildLocalePath } from '../lib/site'

export default function LocalizedSignatureDayPage({ locale, content }) {
  const contactHref = buildLocalePath('/contact', locale)
  const coursesHref = buildLocalePath('/golf-courses', locale)
  const playHref = buildLocalePath('/play-with-a-pro', locale)
  const homeHref = buildLocalePath('/', locale)
  const s = content.sections

  return (
    <PageLayout lang={locale}>
      <main className="signature-page">
        <section className="pwap-hero pwap-hero--tall">
          <div className="pwap-hero__bg" aria-hidden="true">
            <Image
              src="/images/andy-walking-course.webp"
              alt={content.heroImageAlt}
              fill
              priority
              quality={88}
              sizes="100vw"
              className="pwap-hero__image"
            />
            <div className="pwap-hero__overlay" />
          </div>
          <div className="pwap-hero__inner signature-hero__inner">
            <div className="pwap-hero__content">
              <p className="breadcrumb">
                <Link href={homeHref} className="breadcrumb__link">{content.breadcrumbHome}</Link>
                &nbsp;/&nbsp;
                <Link href={playHref} className="breadcrumb__link">Play With A Pro</Link>
                &nbsp;/&nbsp;
                <span>Signature Day</span>
              </p>
              <p className="eyebrow eyebrow--gold pwap-hero__eyebrow">{content.heroEyebrow}</p>
              <h1 className="serif-display pwap-hero__title">
                {String(content.heroTitle).split('\n').map((line, index, lines) => (
                  <span key={line}>
                    {line}
                    {index < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="pwap-hero__body">{content.heroBody}</p>
              <p className="pwap-hero__price">{content.price}</p>
              <div className="pwap-hero__actions">
                <Link href={contactHref} className="btn btn--gold">{content.primaryCta}</Link>
                <a href="#the-day" className="btn btn--outline-white">{content.secondaryCta}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="signature-section" id="the-day">
          <div className="signature-inner signature-split signature-split--overview">
            <div className="signature-copy reveal">
              <p className="eyebrow">{s.overviewEyebrow}</p>
              <h2 className="serif-display signature-title">{s.overviewTitle}</h2>
              <p>{s.overviewBody}</p>
              <p>{s.overviewBody2}</p>
              <p className="signature-principle">{s.overviewPrinciple}</p>
            </div>

            <div className="signature-inclusions reveal">
              <div className="signature-media signature-media--overview">
                <Image
                  src="/images/andy-coaching-swing.webp"
                  alt={s.overviewImageAlt}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
              <div className="signature-inclusions__body">
                <h3 className="serif-display">{s.includedTitle}</h3>
                <ul className="signature-checklist">
                  {content.included.map((title) => (
                    <li key={title}>
                      <span aria-hidden="true" />
                      <p><strong>{title}</strong></p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--warm">
          <div className="signature-inner">
            <div className="signature-heading reveal">
              <p className="eyebrow">{s.howEyebrow}</p>
              <h2 className="serif-display signature-title">{s.howTitle}</h2>
              <p>{s.howBody}</p>
            </div>
            <ol className="signature-timeline">
              {content.dayStages.map((stage, index) => (
                <li key={stage.title} className="reveal">
                  <span className="signature-timeline__number">{String(index + 1).padStart(2, '0')}</span>
                  <p className="eyebrow">{stage.time}</p>
                  <h3 className="serif-display">{stage.title}</h3>
                  <p>{stage.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="signature-section">
          <div className="signature-inner signature-split signature-split--feature">
            <div className="signature-copy reveal">
              <p className="eyebrow">{s.whyEyebrow}</p>
              <h2 className="serif-display signature-title">{s.whyTitle}</h2>
              <p>{s.whyBody}</p>
              <p>{s.whyBody2}</p>
              <div className="signature-john-note">
                <p className="eyebrow">John Brazier</p>
                <p>{s.johnBody}</p>
                <a href="https://drjohnbrazier.com/" target="_blank" rel="noreferrer" className="pwap-course-note__link">{s.johnLink}</a>
              </div>
            </div>
            <div className="signature-media signature-media--feature reveal">
              <Image
                src="/images/client-son-gual2.webp"
                alt={s.whyImageAlt}
                fill
                quality={88}
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--soft">
          <div className="signature-inner signature-split signature-split--feature signature-split--media-first">
            <div className="signature-course-media reveal">
              <div className="signature-media">
                <Image src="/images/son-gual.jpg" alt="Son Gual golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 260px" />
              </div>
              <div className="signature-media">
                <Image src="/images/alcanada.jpg" alt="Alcanada golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 260px" />
              </div>
            </div>
            <div className="signature-copy reveal">
              <p className="eyebrow">{s.courseEyebrow}</p>
              <h2 className="serif-display signature-title">{s.courseTitle}</h2>
              <p>{s.courseBody}</p>
              <p>{s.courseBody2}</p>
              <Link href={coursesHref} className="pwap-course-note__link">{content.coursesCta}</Link>
            </div>
          </div>
        </section>

        <section className="signature-section">
          <div className="signature-inner signature-split signature-split--evening">
            <div className="signature-copy reveal">
              <p className="eyebrow">{s.eveningEyebrow}</p>
              <h2 className="serif-display signature-title">{s.eveningTitle}</h2>
              <p>{s.eveningBody}</p>
              <p>{s.eveningBody2}</p>
              <div className="signature-hotels">
                {content.hotelPartners.map((hotel) => (
                  <div key={hotel.name}>
                    <h3 className="serif-display">{hotel.name}</h3>
                    <p>{hotel.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="signature-dining-grid reveal">
              {content.diningImages.map((item) => (
                <div key={item.src} className={'signature-media' + (item.featured ? ' signature-media--dining-feature' : '')}>
                  <Image src={item.src} alt={item.alt} fill unoptimized sizes="(max-width: 768px) 100vw, 520px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--warm">
          <div className="signature-inner">
            <div className="signature-heading reveal">
              <p className="eyebrow">{s.extrasEyebrow}</p>
              <h2 className="serif-display signature-title">{s.extrasTitle}</h2>
              <p>{s.extrasBody}</p>
            </div>
            <div className="signature-extras">
              {content.optionalExtras.map((item) => (
                <article key={item.title} className="reveal">
                  <h3 className="serif-display">{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signature-section signature-section--pricing" id="pricing">
          <div className="signature-inner signature-pricing reveal">
            <div>
              <p className="eyebrow eyebrow--gold">{s.pricingEyebrow}</p>
              <h2 className="serif-display signature-title">{s.pricingTitle}</h2>
            </div>
            <div>
              <p>{s.pricingBody}</p>
              <p>{s.pricingBody2}</p>
              <Link href={contactHref} className="btn btn--gold">{s.pricingCta}</Link>
            </div>
          </div>
        </section>

        <StickyMobileCta
          primaryHref={contactHref}
          primaryLabel={content.primaryCta}
          secondaryHref={content.whatsappHref}
          secondaryLabel={content.whatsappLabel}
        />
      </main>
    </PageLayout>
  )
}
