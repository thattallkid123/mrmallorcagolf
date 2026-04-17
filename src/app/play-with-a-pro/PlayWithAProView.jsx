import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FAQ from '../../components/FAQ'

export default function PlayWithAProView({ content, locale = 'en' }) {
  return (
    <>
      <link rel="preload" as="image" href="/images/pwap-hero.jpg" />
      <PageLayout lang={locale}>
        <RevealObserver />

        <section className="pwap-hero pwap-hero--tall">
          <div className="pwap-hero__bg"></div>
          <div className="pwap-hero__inner">
            <div className="pwap-hero__content">
              <p className="breadcrumb">
                <Link href={content.hero.homeHref} className="breadcrumb__link">
                  {content.hero.breadcrumbHome}
                </Link>{' '}
                &nbsp;/&nbsp; <span>{content.hero.breadcrumbCurrent}</span>
              </p>
              <p className="eyebrow eyebrow--gold pwap-hero__eyebrow">
                {content.hero.eyebrow}
              </p>
              <h1 className="serif-display pwap-hero__title">
                {content.hero.title}
              </h1>
              <p className="pwap-hero__body">
                {content.hero.body}
              </p>
              {content.hero.price ? (
                <p className="pwap-hero__price">{content.hero.price}</p>
              ) : null}
              <div className="pwap-hero__actions">
                <Link href={content.hero.primaryHref} className="btn btn--gold">
                  {content.hero.primaryCta}
                </Link>
                <a href="#packages" className="btn btn--outline-white">
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pwap-day">
          <div className="pwap-day__left reveal">
            <p className="eyebrow">{content.day.eyebrow}</p>
            <h2 className="serif-display pwap-section-title">
              {content.day.title}
            </h2>
            {content.day.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pull-quote">
              <p>&ldquo;{content.day.quote}&rdquo;</p>
            </div>
            {content.day.postQuoteParagraph ? <p>{content.day.postQuoteParagraph}</p> : null}
            <a href="/questionnaire.html" target="_blank" rel="noopener" className="pwap-questionnaire">
              <p className="pwap-questionnaire__eyebrow">
                {content.day.questionnaireEyebrow}
              </p>
              <p className="pwap-questionnaire__title">
                {content.day.questionnaireTitle}
              </p>
              <p className="pwap-questionnaire__body">{content.day.questionnaireBody}</p>
            </a>
          </div>
          <div className="pwap-day__right reveal">
            <div className="included">
              <h3>{content.included.title}</h3>
              <ul className="included-list">
                {content.included.items.map(([title, detail]) => (
                  <li key={title} className="included-item">
                    <span className="included-dot"></span>
                    <p>
                      <strong>{title}</strong>
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pwap-courses">
          <div className="courses-intro reveal">
            <p className="eyebrow pwap-courses__eyebrow">
              {content.courses.eyebrow}
            </p>
            <h2 className="serif-display pwap-courses__title">
              {content.courses.title}
            </h2>
            <p className="pwap-courses__body">{content.courses.body}</p>
          </div>
        </section>

        {content.who ? (
          <section className="pwap-who">
            <div className="reveal">
              <p className="eyebrow">{content.who.eyebrow}</p>
              <h2 className="serif-display pwap-section-title pwap-section-title--spacious">
                {content.who.title}
              </h2>
            </div>
            <div className="who-grid">
              {content.who.cards.map((card, index) => (
                <div key={card.title} className={`who-card reveal${index % 3 === 1 ? ' reveal-delay-1' : index % 3 === 2 ? ' reveal-delay-2' : ''}`}>
                  <span className="who-card__icon">{card.num}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="pwap-testimonials">
          <div className="reveal pwap-testimonials__header">
            <p className="eyebrow pwap-testimonials__eyebrow">
              {content.testimonials.eyebrow}
            </p>
            <h2 className="serif-display pwap-testimonials__title">
              {content.testimonials.title}
            </h2>
          </div>
          <div className="pwap-testimonials__grid">
            {content.testimonials.items.map((item, index) => (
              <div key={item.author} className={`testimonial reveal${index > 0 ? ` reveal-delay-${index}` : ''}`}>
                <p>&ldquo;{item.text}&rdquo;</p>
                <span className="testimonial__author">- {item.author}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pwap-packages" id="packages">
          <div className="reveal">
            <p className="eyebrow">{content.packages.eyebrow}</p>
            <h2 className="serif-display pwap-section-title pwap-section-title--tight">
              {content.packages.title}
            </h2>
            <p className="pwap-packages__intro">
              {content.packages.body}
            </p>
          </div>
          <div className="pricing-grid">
            {content.packages.tiers.map((tier) => (
              <div key={tier.eyebrow} className={`tier${tier.featured ? ' tier--feature' : ''} reveal`}>
                <p className="tier__name-small">{tier.eyebrow}</p>
                <h3 className="tier__name">{tier.name}</h3>
                <p className="tier__price">{tier.price}</p>
                {tier.note && <p className={`tier__note${tier.featured ? ' tier__note--feature' : ''}`}>{tier.note}</p>}
                <div className="tier__rule"></div>
                <ul className="tier__features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href={tier.href} className="tier__btn">
                  {tier.button}
                </Link>
              </div>
            ))}
          </div>
          {content.packages.multiDay && (
            <div className="reveal pwap-multiday">
              <p className="eyebrow pwap-multiday__eyebrow">{content.packages.multiDay.eyebrow}</p>
              <h3 className="serif-display pwap-multiday__title">{content.packages.multiDay.title}</h3>
              <p className="pwap-multiday__body">{content.packages.multiDay.body}</p>
              {content.packages.multiDay.detail && (
                <p className="pwap-multiday__detail">{content.packages.multiDay.detail}</p>
              )}
              <Link href={content.packages.multiDay.href} className="btn btn--gold">{content.packages.multiDay.button}</Link>
            </div>
          )}
        </section>

        <FAQ />

        <section className="cta-final">
          <div className="cta-final__left reveal">
            <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
            <h2 className="serif-display cta-final__title">
              {content.finalCta.title}
            </h2>
            <p>{content.finalCta.body}</p>
          </div>
          <div className="cta-final__right reveal">
            <Link href={content.finalCta.primaryHref} className="btn btn--gold cta-final__primary-lg">
              {content.finalCta.primaryCta}
            </Link>
            <Link href={content.finalCta.secondaryHref} className="btn btn--outline-white">
              {content.finalCta.secondaryCta}
            </Link>
            <a href="/questionnaire.html" target="_blank" rel="noopener" className="cta-final__aux">
              {content.finalCta.tertiaryCta}
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  )
}
