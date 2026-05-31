import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../components/PageLayout'
import DeferredHydrate from '../../components/DeferredHydrate'
import { SITE_ORIGIN, buildLocalePath } from '../../lib/site'
import GolfCoursesClient from './GolfCoursesClient'

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
        name: 'Golf Courses',
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
        <JsonLd data={buildBreadcrumbSchema(locale)} />

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
              Start with our reviews of{' '}
              <Link href={joinHref(locale, '/guides/son-gual-review')}>Son Gual</Link>,{' '}
              <Link href={joinHref(locale, '/guides/son-muntaner-review')}>Son Muntaner</Link>, and{' '}
              <Link href={joinHref(locale, '/guides/alcanada-review')}>Alcanada</Link>{' '}
              if you are deciding where to play first in Mallorca.
            </p>
          </div>
        </header>

        <DeferredHydrate
          timeoutMs={1600}
          fallback={(
            <section style={{ padding: '64px 20px', maxWidth: 1100, margin: '0 auto' }}>
              <p className="eyebrow">Loading course explorer</p>
              <h2 className="serif-display" style={{ marginTop: 8 }}>Preparing filters and full course data...</h2>
            </section>
          )}
        >
          <GolfCoursesClient lang={locale} />
        </DeferredHydrate>
      </PageLayout>
    </>
  )
}
