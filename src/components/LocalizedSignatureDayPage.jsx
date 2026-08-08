import Image from 'next/image'
import Link from 'next/link'
import PageLayout from './PageLayout'
import StickyMobileCta from './StickyMobileCta'
import { buildLocalePath } from '../lib/site'

export default function LocalizedSignatureDayPage({ locale, content }) {
  const contactHref = buildLocalePath('/contact', locale)
  const coursesHref = buildLocalePath('/golf-courses', locale)
  const s = content.sections

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
                <a href="#the-day" className="btn btn--outline-white">{content.secondaryCta}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="pwap-day" id="the-day">
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{s.introEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{s.introTitle}</h2>
            <p>{s.introBody}</p>
            <p>{s.introBody2}</p>
          </div>
          <div className="pwap-day__right reveal">
            <div className="included">
              <h3>{s.includedTitle}</h3>
              <ul className="included-list">
                {s.included.map(([title, detail]) => (
                  <li key={title} className="included-item">
                    <span className="included-dot"></span>
                    <p><strong>{title}</strong><br /><span style={{ fontWeight: 400 }}>{detail}</span></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{s.whoForEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{s.whoForHeadline}</h2>
            <div className="included" style={{ marginTop: '1.25rem' }}>
              <h3>{s.whoForTitle}</h3>
              <ul className="included-list">
                {s.whoForIdeal.map(([title, detail]) => (
                  <li key={title} className="included-item">
                    <span className="included-dot"></span>
                    <p><strong>{title}</strong><br /><span style={{ fontWeight: 400 }}>{detail}</span></p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="included" style={{ marginTop: '1rem' }}>
              <h3>{s.whoForNotIdealTitle}</h3>
              <ul className="included-list">
                {s.whoForNotIdeal.map(([title, detail]) => (
                  <li key={title} className="included-item">
                    <span className="included-dot"></span>
                    <p><strong>{title}</strong><br /><span style={{ fontWeight: 400 }}>{detail}</span></p>
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--charcoal)' }}>{s.whoForNote}</p>
          </div>
          <div className="pwap-day__right reveal" />
        </section>

        <section className="how">
          <div className="how__header reveal">
            <p className="eyebrow">{s.howEyebrow}</p>
            <h2 className="serif-display">{s.howTitle}</h2>
            <p>{s.howBody}</p>
          </div>
          <div className="how__steps">
            {s.dayArc.map((step, i) => (
              <div key={step.title} className={`how__step reveal${i > 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <span className="how__num">{String(i + 1).padStart(2, '0')}</span>
                <p className="eyebrow" style={{ marginBottom: '0.25rem', marginTop: '0.5rem' }}>{step.time}</p>
                <h3 className="serif-display" style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{s.whyEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{s.whyHeading}</h2>
            <p>{s.whyBody}</p>
            <p>{s.whyBody2}</p>
            <p>{s.whyBody3}</p>
          </div>
          <div className="pwap-day__right reveal">
            <div className="pwap-course-note">
              <p className="eyebrow">{s.johnEyebrow}</p>
              <p>{s.johnBody}</p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>{s.johnBody2}</p>
            </div>
          </div>
        </section>

        <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{s.courseEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{s.courseTitle}</h2>
            <p>{s.courseBody}</p>
            <p>{s.courseBody2}</p>
            <Link href={coursesHref} className="pwap-course-note__link" style={{ marginTop: '1rem', display: 'inline-block' }}>{content.coursesCta}</Link>
          </div>
          <div className="pwap-day__right reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '3/4' }}>
                <Image src="/images/son-gual.jpg" alt="Son Gual golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 280px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '3/4' }}>
                <Image src="/images/alcanada.jpg" alt="Alcanada golf course Mallorca" fill unoptimized sizes="(max-width: 768px) 50vw, 280px" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{s.eveningEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{s.eveningTitle}</h2>
            <p>{s.eveningBody}</p>
            <p>{s.eveningBody2}</p>
            <p>{s.eveningBody3}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '1.5rem' }}>
              {content.hotelPartners.map((h) => (
                <div key={h.name} style={{ borderLeft: '2px solid var(--gold, #b8975a)', paddingLeft: '1rem' }}>
                  <p className="serif-display" style={{ fontSize: '1rem', fontWeight: 400, marginBottom: '0.15rem' }}>{h.name}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted, #888)' }}>{h.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pwap-day__right reveal" />
        </section>

        <section className="pwap-day" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{s.extrasEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{s.extrasTitle}</h2>
            <p>{s.extrasBody}</p>
          </div>
          <div className="pwap-day__right reveal">
            <div className="included">
              <ul className="included-list">
                {s.extras.map(([title, text]) => (
                  <li key={title} className="included-item">
                    <span className="included-dot"></span>
                    <p><strong>{title}</strong><br /><span style={{ fontWeight: 400 }}>{text}</span></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pwap-packages" id="pricing" style={{ borderTop: '1px solid var(--border, #e8e4dc)' }}>
          <div className="pwap-packages__header reveal">
            <p className="eyebrow">{s.pricingEyebrow}</p>
            <h2 className="serif-display pwap-section-title">{s.pricingTitle}</h2>
            <p>{s.pricingBody}</p>
            <p style={{ maxWidth: 760, margin: '0.75rem auto 0', lineHeight: 1.8, color: 'var(--charcoal)' }}>{s.pricingBody2}</p>
          </div>
          <div style={{ maxWidth: 640, margin: '2rem auto 0' }} className="pwap-course-note">
            <p className="eyebrow">{s.alwaysIncludedLabel}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 1.5rem' }}>
              {s.included.map(([title]) => (
                <li key={title} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--gold, #b8975a)', fontWeight: 500, flexShrink: 0 }}>—</span>
                  {title}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #888)', marginBottom: '1.5rem' }}>{s.separateNote}</p>
            <Link href={contactHref} className="btn btn--gold">{s.pricingCta}</Link>
          </div>
        </section>

        <section className="pwap-final-cta reveal" style={{ borderTop: '1px solid var(--border, #e8e4dc)', textAlign: 'center', padding: '5rem 1.5rem' }}>
          <p className="eyebrow">{s.finalEyebrow}</p>
          <h2 className="serif-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', maxWidth: 560, margin: '0 auto 1.5rem', fontWeight: 400 }}>{s.finalTitle}</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.75 }}>{s.finalBody}</p>
          <Link href={contactHref} className="btn btn--gold">{s.finalCta}</Link>
        </section>
      </main>

      <StickyMobileCta
        primaryHref={contactHref}
        primaryLabel={content.primaryCta}
        secondaryHref="https://wa.me/34624466702"
        secondaryLabel={content.whatsappLabel}
      />
    </PageLayout>
  )
}
