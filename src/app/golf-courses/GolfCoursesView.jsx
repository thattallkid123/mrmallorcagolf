import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import GolfCoursesClient from './GolfCoursesClient'
import { SITE_ORIGIN, buildLocalePath } from '../../lib/site'

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
          url: `${SITE_ORIGIN}${pagePath}#son-muntaner`,
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
      <PageLayout lang={locale === 'en' ? undefined : locale}>
        <JsonLd data={buildGolfCoursesSchema(locale, content)} />
        <JsonLd data={buildBreadcrumbSchema(locale)} />
        <RevealObserver />

        <header
          className="page-hero"
          style={{
            minHeight: '100vh',
            backgroundImage:
              'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%), url(/images/golf-courses.webp)',
            backgroundSize: 'auto, cover',
            backgroundPosition: 'center, center 40%',
          }}
        >
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
          </div>
        </header>

        <GolfCoursesClient lang={locale} />
      </PageLayout>
    </>
  )
}
