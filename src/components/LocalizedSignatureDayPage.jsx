import Link from 'next/link'
import PageLayout from './PageLayout'
import { buildLocalePath } from '../lib/site'

export default function LocalizedSignatureDayPage({ locale, content }) {
  const contactHref = buildLocalePath('/contact', locale)
  const playHref = buildLocalePath('/play-with-a-pro', locale)
  const coursesHref = buildLocalePath('/golf-courses', locale)

  return (
    <PageLayout lang={locale}>
      <main>
        <section className="pwap-hero pwap-hero--tall">
          <div className="pwap-hero__bg" aria-hidden="true">
            <div className="pwap-hero__overlay" />
          </div>
          <div className="pwap-hero__inner">
            <div className="pwap-hero__content">
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
                <a href="#signature-day-included" className="btn btn--outline-white">{content.secondaryCta}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="pwap-day" id="signature-day-included">
          <div className="pwap-day__lead reveal">
            <p className="eyebrow">{content.heroEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{content.sections.introTitle}</h2>
            <p>{content.sections.introBody}</p>
            <div className="pwap-course-note">
              <p className="eyebrow">{content.sections.courseTitle}</p>
              <p>{content.sections.courseBody}</p>
              <Link href={coursesHref} className="pwap-course-note__link">{content.coursesCta}</Link>
            </div>
          </div>

          <div className="pwap-day__details reveal">
            <div className="included">
              <h3>{content.sections.includedTitle}</h3>
              <ul className="included-list">
                {content.sections.included.map((item) => (
                  <li key={item} className="included-item">
                    <span className="included-dot"></span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
          <div className="pwap-day__lead reveal">
            <p className="eyebrow">{content.sections.whyTitle}</p>
            <h2 className="serif-display pwap-section-title">{content.sections.finalTitle}</h2>
            <p>{content.sections.whyBody}</p>
            <p>{content.sections.finalBody}</p>
          </div>

          <div className="pwap-day__details reveal">
            <div className="pwap-course-note">
              <p className="eyebrow">{content.sections.courseTitle}</p>
              <p>{content.sections.courseBody}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '1rem' }}>
                <Link href={contactHref} className="btn btn--gold">{content.primaryCta}</Link>
                <Link href={playHref} className="pwap-course-note__link">{content.playCta}</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
