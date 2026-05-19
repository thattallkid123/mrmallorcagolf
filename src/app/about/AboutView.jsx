import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import CareerStrip from '../../components/CareerStrip'
import WinnersProofStrip from '../../components/WinnersProofStrip'
import { getHomeContent } from '../../lib/homepage-content'
import { SITE_ORIGIN, buildLocalePath } from '../../lib/site'

const WINNER_PROOF_IMAGES = [
  { src: '/images/winners/01f43146e7bbd479cd809b6daabd9b105b0008ca18.jpg', alt: 'Junior tournament winners with trophies after coaching with Andy', position: 'center 42%' },
  { src: '/images/winners/01896bd5845040a4f9957ce34acc61c2e68540c266.jpg', alt: 'Golf academy team holding tournament banners', position: 'center 40%' },
  { src: '/images/winners/2020_11_25_12_20_00.jpg', alt: 'Junior open golf winners standing together', position: 'center 36%' },
  { src: '/images/winners/2023_12_03_16_55_19.jpg', alt: 'Tournament trophy and winner certificate', position: 'center 50%' },
  { src: '/images/winners/01ae26f53c5692f97b8207b9f36ca1cbbefa4618cc.jpg', alt: 'Junior golfers on a tournament podium', position: 'center 38%' },
  { src: '/images/winners/0134a9b7aac8ad0d0656f04a253c43088b7331ce8f.jpg', alt: 'Junior golfer kneeling with trophy on a golf course', position: 'center 45%' },
  { src: '/images/winners/2024_06_28_12_16_55.jpg', alt: 'Two golfers holding trophies after a tournament', position: 'center 42%' },
  { src: '/images/winners/01642ab42974ebfa93f60beb07ab37157b87a3a515.jpg', alt: 'Golfer holding a medal and certificate', position: 'center 42%' },
]

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function buildAboutPageSchema(locale, content) {
  const aboutPath = buildLocalePath('/about', locale)
  const playPath = buildLocalePath('/play-with-a-pro', locale)
  const coursesPath = buildLocalePath('/golf-courses', locale)
  const description = content.chapters?.[0]?.paragraphs?.[0] || content.sidebarCta?.body || 'About Andy Griffiths at Mr Mallorca Golf.'

  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: Array.isArray(content.hero.title) ? content.hero.title.join(' ') : String(content.hero.title).replace(/\n/g, ' '),
    description,
    url: `${SITE_ORIGIN}${aboutPath}`,
    mainEntity: {
      '@type': 'Person',
      name: 'Andy Griffiths',
      url: `${SITE_ORIGIN}${aboutPath}`,
      jobTitle: 'PGA Advanced Professional',
      worksFor: {
        '@type': 'Organization',
        name: 'Mr Mallorca Golf',
        url: SITE_ORIGIN,
      },
    },
    relatedLink: [
      `${SITE_ORIGIN}${playPath}`,
      `${SITE_ORIGIN}${coursesPath}`,
    ],
  }
}

function buildBreadcrumbSchema(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_ORIGIN}${buildLocalePath('/', locale)}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${SITE_ORIGIN}${buildLocalePath('/about', locale)}`,
      },
    ],
  }
}

export default function AboutView({ content, locale = 'en', careerStripProps = {} }) {
  const home = getHomeContent(locale)
  const titleLines = Array.isArray(content.hero.title)
    ? content.hero.title
    : String(content.hero.title).split('\n')

  return (
    <>
      <link rel="preload" as="image" href="/images/about-secondary.webp" />
      <PageLayout lang={locale}>
        <JsonLd data={buildAboutPageSchema(locale, content)} />
        <JsonLd data={buildBreadcrumbSchema(locale)} />
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
                height={900}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <div className="creds reveal">
              <p className="story__summary">
                I&apos;m a UK PGA Advanced Professional. Eleven years coaching in China — national team players, the country&apos;s first Trackman Master, hundreds of millions of views on Douyin. Before that: Pebble Beach, The Open Championship, Evian. I moved to Mallorca in March 2025 to build something of my own. I play the island&apos;s best courses most weeks and have strong opinions about all of them.
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
          </aside>
        </div>

        <CareerStrip {...(content.careerStripProps || careerStripProps)} />

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
          <WinnersProofStrip images={WINNER_PROOF_IMAGES} />
          <div className="testimonials__grid" style={{ marginTop: 2 }}>
            <div className="testimonial reveal" style={{ flex: '1 1 auto', maxWidth: 1100, margin: '0 auto' }}>
              <p>{home.winners.testimonial}</p>
              <span className="testimonial__author">- {home.winners.attribution}</span>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="cta-final__left reveal">
            <p className="eyebrow eyebrow--gold">{content.finalCta.eyebrow}</p>
            <h2 className="serif-display" style={{ color: '#fff' }}>
              {content.finalCta.title}
            </h2>
            <p>{content.finalCta.body}</p>
          </div>
          <div className="cta-final__right reveal">
            <Link href={content.finalCta.primaryHref} className="btn btn--gold">
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
