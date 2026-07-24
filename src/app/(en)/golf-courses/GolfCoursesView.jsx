import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import DeferredHydrate from '../../../components/DeferredHydrate'
import ToolPlacementCta from '../../../components/ToolPlacementCta'
import { SITE_ORIGIN, buildLocalePath } from '../../../lib/site'
import GolfCoursesClient from '../golf-courses/GolfCoursesClient'
import { GOLF_COURSE_DATA } from '../../../lib/golf-courses-data'

const MAP_BUTTON_LABELS = {
  en: 'Map of All Courses →',
  de: 'Karte aller Plätze →',
  es: 'Mapa de todos los campos →',
  fr: 'Carte de tous les parcours →',
  nl: 'Kaart van alle banen →',
  sv: 'Karta över alla banor →',
  zh: '所有球场地图 →',
}


function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function buildGolfCoursesSchema(locale, content) {
  const pagePath = buildLocalePath('/golf-courses', locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content.hero.title,
    description: content.ui?.intro1 || content.hero.title,
    url: `${SITE_ORIGIN}${pagePath}`,
    about: {
      '@type': 'Thing',
      name: 'Golf courses in Mallorca',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: 24,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Son Gual',
          url: `${SITE_ORIGIN}${buildLocalePath('/guides/son-gual-review', locale)}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Alcanada',
          url: `${SITE_ORIGIN}${buildLocalePath('/guides/alcanada-review', locale)}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Son Muntaner',
          url: `${SITE_ORIGIN}${buildLocalePath('/guides/son-muntaner-review', locale)}`,
        },
      ],
    },
  }
}

function buildFaqSchema(locale, content) {
  if (!content.ui?.faq?.length) return null
  const pagePath = buildLocalePath('/golf-courses', locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${SITE_ORIGIN}${pagePath}`,
    mainEntity: content.ui.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

function buildBreadcrumbSchema(locale, content) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: content.hero.breadcrumbHome || 'Home',
        item: `${SITE_ORIGIN}${buildLocalePath('/', locale)}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.hero.breadcrumbCurrent || 'Golf Courses',
        item: `${SITE_ORIGIN}${buildLocalePath('/golf-courses', locale)}`,
      },
    ],
  }
}

function joinHref(locale, path) {
  if (locale === 'en') return path
  return `/${locale}${path === '/' ? '' : path}`
}

export default function GolfCoursesView({ locale = 'en', content }) {
  return (
    <>
      <link rel="preload" as="image" href="/images/golf-courses.webp" />
      <PageLayout lang={locale === 'en' ? undefined : locale} navTransparent={false} showWhatsAppButton={false} showScrollReset={true}>
        <JsonLd data={buildGolfCoursesSchema(locale, content)} />
        <JsonLd data={buildBreadcrumbSchema(locale, content)} />
        {buildFaqSchema(locale, content) && <JsonLd data={buildFaqSchema(locale, content)} />}

        <header className="page-hero" style={{ minHeight: '72vh', overflow: 'hidden', position: 'relative' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
            <Image
              src="/images/golf-courses.webp"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%)',
              }}
            />
          </div>
          <div className="page-hero__inner">
            <p className="breadcrumb">
              <Link href={joinHref(locale, '/')}>{content.hero.breadcrumbHome}</Link> &nbsp;/&nbsp;{' '}
              <span style={{ color: 'var(--gold-light)' }}>{content.hero.breadcrumbCurrent}</span>
            </p>
            <h1>
              {content.hero.title.split(' - ').map((line, index, arr) => (
                <span key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <div className="page-hero__meta">
              {content.hero.tags.map((tag, index) => (
                <span
                  key={tag}
                  className={`page-hero__tag${index === 2 ? ' page-hero__tag--gold' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="page-hero__lead" style={{ maxWidth: 780 }}>
              {content.hero.lead}
            </p>
            <Link
              href={joinHref(locale, '/guides/mallorca-course-map')}
              className="btn btn--gold"
              style={{ marginTop: 22 }}
            >
              {MAP_BUTTON_LABELS[locale] || MAP_BUTTON_LABELS.en}
            </Link>
          </div>
        </header>

        {content.ui?.toolCta ? (
          <section style={{ background: 'var(--cream)', padding: 'clamp(28px, 5vw, 52px) clamp(20px, 5vw, 60px)' }}>
            <ToolPlacementCta tool={content.ui.toolCta} dark />
          </section>
        ) : null}

        <DeferredHydrate
          timeoutMs={1600}
          fallback={(
            <section style={{ padding: '64px 20px', maxWidth: 1100, margin: '0 auto' }}>
              <p className="eyebrow">Loading course explorer</p>
              <h2 className="serif-display" style={{ marginTop: 8 }}>Preparing filters and full course data...</h2>
              {/* Server-rendered course index for search engines */}
              <ul aria-hidden="true" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
                {GOLF_COURSE_DATA.flatMap(region => region.courses).map(course => (
                  <li key={course.name}>{course.name}, Mallorca golf course</li>
                ))}
              </ul>
            </section>
          )}
        >
          <GolfCoursesClient lang={locale} />
        </DeferredHydrate>

        {content.ui?.faq?.length > 0 && (
          <section className="faq">
            <div className="faq__left reveal">
              <p className="eyebrow">{content.ui.faqEyebrow || 'Questions'}</p>
              <h2 className="serif-display">{content.ui.faqTitle || 'Common questions'}</h2>
              {content.ui.faqIntro ? <p>{content.ui.faqIntro}</p> : null}
            </div>
            <div className="faq__list reveal reveal-delay-1">
              {content.ui.faq.map(({ q, a }, index) => (
                <details key={q} className="faq__item" open={index === 0}>
                  <summary className="faq__q">
                    {q}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </summary>
                  <div className="faq__a">
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}
      </PageLayout>
    </>
  )
}
