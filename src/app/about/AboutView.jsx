import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import CareerStrip from '../../components/CareerStrip'
import { getHomeContent } from '../../lib/homepage-content'

export default function AboutView({ content, locale = 'en', careerStripProps = {} }) {
  const home = getHomeContent(locale)
  const titleLines = Array.isArray(content.hero.title)
    ? content.hero.title
    : String(content.hero.title).split('\n')

  return (
    <>
      <link rel="preload" as="image" href="/images/about-secondary.webp" />
      <PageLayout lang={locale}>
        <RevealObserver />

        <header
          className="page-hero about-hero"
          style={{
            minHeight: '100vh',
            backgroundImage:
              'linear-gradient(to top, rgba(12,11,9,0.72) 0%, rgba(12,11,9,0.22) 48%, transparent 74%), linear-gradient(to right, rgba(12,11,9,0.78) 0%, rgba(12,11,9,0.46) 42%, rgba(12,11,9,0.08) 78%), url(/images/about-secondary.webp)',
            backgroundSize: 'auto, auto, cover',
            backgroundPosition: 'center, center, center 80%',
          }}
        >
          <div className="page-hero__inner">
            <p className="breadcrumb">
              <Link href={content.hero.homeHref}>{content.hero.breadcrumbHome}</Link> &nbsp;/&nbsp;{' '}
              <span style={{ color: 'var(--gold-light)' }}>{content.hero.breadcrumbCurrent}</span>
            </p>
            <h1>
              {titleLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < titleLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: '1.25rem' }}>
              {content.hero.tags.map((tag, index) => (
                <span key={tag} className={`cred-tag${index === 0 ? ' cred-tag--gold' : ''}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="story">
          <main className="story__main">
            {content.chapters.map((chapter) => (
              <div key={chapter.label} className="chapter reveal">
                <p className="chapter__label">{chapter.label}</p>
                <h2>{chapter.title}</h2>
                {chapter.paragraphs.slice(0, chapter.quote ? chapter.paragraphs.length - 1 : chapter.paragraphs.length).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {chapter.quote ? (
                  <div className="pull-quote">
                    <p>&ldquo;{chapter.quote}&rdquo;</p>
                  </div>
                ) : null}
                {chapter.quote ? <p>{chapter.paragraphs[chapter.paragraphs.length - 1]}</p> : null}
              </div>
            ))}
          </main>

          <aside className="story__sidebar">
            <div className="story__portrait reveal">
              <Image
                src="/images/about-andy-colour.jpg"
                alt={content.imageAlt}
                width={600}
                height={420}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: 'center 12%',
                  display: 'block',
                }}
              />
            </div>
            <div className="creds reveal">
              <p className="story__summary">
                Andy Griffiths is a PGA Advanced Professional who spent eleven years at the top of coaching in China, becoming the country's first Trackman Master, coaching national team players, and building a following of hundreds of millions of views on Douyin. Before that: Pebble Beach, The Open Championship, Evian. He moved to Mallorca in 2025 to build something of his own. He plays the island's best courses most weeks and has opinions about all of them.
              </p>
              <p className="creds__label">{content.credentialsLabel}</p>
              <ul className="cred-list">
                {content.credentials.map((credential) => (
                  <li key={credential.title} className="cred-item">
                    <span className="cred-check">&#10003;</span>
                    <span className="cred-text">
                      <strong>{credential.title}</strong>
                      {credential.isBookLink ? (
                        <a
                          href="https://www.amazon.com/Andy-Griffiths/dp/1523339772"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--gold)', textDecoration: 'none' }}
                        >
                          {credential.detail}
                        </a>
                      ) : (
                        credential.detail
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-cta reveal">
              <h3>{content.sidebarCta.title}</h3>
              <p>{content.sidebarCta.body}</p>
              <Link href={content.sidebarCta.href} className="sidebar-cta__btn">
                {content.sidebarCta.button}
              </Link>
            </div>
          </aside>
        </div>

        {/* Proof of work: winners collage + testimonial */}
        <section className="testimonials">
          <div className="testimonials__header reveal">
            <p className="eyebrow eyebrow--gold">{home.winners.eyebrow}</p>
            <h2 className="serif-display" style={{ color: '#fff', marginBottom: '1.1rem' }}>
              {home.winners.title}
            </h2>
            <p style={{ maxWidth: 720, margin: '0 auto', color: 'rgba(255,255,255,0.76)', fontSize: '0.95rem', lineHeight: 1.85 }}>
              {home.winners.intro}
            </p>
          </div>
          <figure className="winners-board">
            <Image
              src="/images/winners-collage.webp"
              alt="A collage of competition winners coached by Andy over the years"
              className="winners-board__img"
              width={1120}
              height={784}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </figure>
          <div className="testimonials__grid" style={{ marginTop: 2 }}>
            <div className="testimonial reveal" style={{ flex: '1 1 auto', maxWidth: 1100, margin: '0 auto' }}>
              <p>{home.winners.testimonial}</p>
              <span className="testimonial__author">- {home.winners.attribution}</span>
            </div>
          </div>
        </section>

        <CareerStrip {...(content.careerStripProps || careerStripProps)} />

        <section className="cta-final">
          <div className="cta-final__left reveal">
            <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
            <h2 className="serif-display" style={{ color: '#fff' }}>
              {content.finalCta.title}
            </h2>
            <p>{content.finalCta.body}</p>
          </div>
          <div className="cta-final__right reveal">
            <Link href={content.finalCta.primaryHref} className="btn btn--gold" style={{ fontSize: 10, padding: '14px 36px' }}>
              {content.finalCta.primaryCta}
            </Link>
            <Link href={content.finalCta.secondaryHref} className="btn btn--outline-white">
              {content.finalCta.secondaryCta}
            </Link>
          </div>
        </section>
      </PageLayout>
    </>
  )
}
