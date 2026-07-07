import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import DeferredHydrate from '../../../components/DeferredHydrate'
import ToolPlacementCta from '../../../components/ToolPlacementCta'
import { SITE_ORIGIN, buildLocalePath } from '../../../lib/site'
import GolfCoursesClient from '../golf-courses/GolfCoursesClient'
import { GOLF_COURSE_DATA } from '../../../lib/golf-courses-data'

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
          </div>
        </header>

        {locale === 'en' ? (
          <section style={{ background: 'var(--cream)', padding: 'clamp(28px, 5vw, 52px) clamp(20px, 5vw, 60px)' }}>
            <ToolPlacementCta
              tool={{
                eyebrow: 'Shortcut',
                title: 'Want a shortlist instead of reading all 24 course reviews?',
                body: 'Use the course selector if you know your handicap, budget, base, and trip style. It will narrow the island down before you start comparing tee times.',
                href: '/tools/course-selector',
                cta: 'Find my courses',
              }}
              dark
            />
          </section>
        ) : null}

        {content.ui?.faq?.length > 0 && (
          <section className="course-faq">
            <div className="course-faq__inner">
              <h2 className="course-faq__title">{content.ui.faqTitle || 'Common questions'}</h2>
              <dl className="course-faq__list">
                {content.ui.faq.map(({ q, a }) => (
                  <div key={q} className="course-faq__item">
                    <dt className="course-faq__q">{q}</dt>
                    <dd className="course-faq__a">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

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
      </PageLayout>
    </>
  )
}
