import Link from 'next/link'
import PageLayout from './PageLayout'

export default function LeadCaptureStatusPage({
  eyebrow,
  title,
  intro,
  bullets,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  asideTitle,
  asideBody,
}) {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <section className="lead-status__hero">
        <div className="lead-status__hero-inner">
          <p className="lead-status__eyebrow lead-status__eyebrow--light">{eyebrow}</p>
          <div className="lead-status__rule lead-status__rule--center" />
          <h1 className="lead-status__title">{title}</h1>
          <p className="lead-status__intro">{intro}</p>
        </div>
      </section>

      <section className="lead-status__body">
        <div className="lead-status__grid">
          <div>
            <p className="lead-status__eyebrow">What happens next</p>
            <div className="lead-status__rule" />
            <ul className="lead-status__list">
              {bullets.map((bullet) => (
                <li key={bullet.title} className="lead-status__item">
                  <span className="lead-status__dash" aria-hidden="true">&#x2014;</span>
                  <div>
                    <span className="lead-status__item-title">{bullet.title}</span>
                    <span className="lead-status__item-text">{bullet.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lead-status__aside">
            <p className="lead-status__eyebrow">Useful now</p>
            <div className="lead-status__rule" />
            <h2 className="lead-status__aside-title">{asideTitle}</h2>
            <p className="lead-status__aside-body">{asideBody}</p>
            <div className="lead-status__actions">
              <Link href={primaryHref} className="lead-status__button lead-status__button--primary">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="lead-status__button lead-status__button--secondary">
                {secondaryLabel}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  )
}
