import Link from 'next/link'
import Image from 'next/image'
import PageLayout from './PageLayout'
import ReviewBadge from './ReviewBadge'
import { SITE_ORIGIN, buildLocalePath } from '../lib/site'
import { getToolsIndexContent } from '../lib/tools-index-content'

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function buildBreadcrumbSchema(locale, content) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: content.hero.breadcrumbHome,
        item: `${SITE_ORIGIN}${buildLocalePath('/', locale)}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.hero.breadcrumbCurrent,
        item: `${SITE_ORIGIN}${buildLocalePath('/tools', locale)}`,
      },
    ],
  }
}

function buildToolsListSchema(locale, content) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content.hero.title,
    description: content.hero.lead,
    url: `${SITE_ORIGIN}${buildLocalePath('/tools', locale)}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: content.tools.length,
      itemListElement: content.tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.title,
        url: `${SITE_ORIGIN}${tool.href}`,
      })),
    },
  }
}

export default function ToolsIndexView({ locale = 'en', heroImage = null }) {
  const content = getToolsIndexContent(locale)
  const homeHref = buildLocalePath('/', locale)
  const isZh = locale === 'zh'

  return (
    <PageLayout lang={locale === 'en' ? undefined : locale} navTransparent={false} showWhatsAppButton={false}>
      <JsonLd data={buildBreadcrumbSchema(locale, content)} />
      <JsonLd data={buildToolsListSchema(locale, content)} />

      <header className={`tools-hero${heroImage ? ' tools-hero--photo' : ''}`}>
        {heroImage ? (
          <>
            <div className="tools-hero__media" aria-hidden="true">
              <Image
                src={heroImage.src}
                alt=""
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: heroImage.position || 'center 45%' }}
              />
            </div>
            <div className="tools-hero__overlay" aria-hidden="true" />
          </>
        ) : null}

        <div className="tools-hero__inner">
          <p className="breadcrumb">
            <Link href={homeHref} className="breadcrumb__link">{content.hero.breadcrumbHome}</Link>
            &nbsp;/&nbsp;
            <span style={{ color: 'var(--gold-light)' }}>{content.hero.breadcrumbCurrent}</span>
          </p>
          <p className="eyebrow eyebrow--gold tools-hero__eyebrow">{content.hero.eyebrow}</p>
          <h1 className="serif-display tools-hero__title">{content.hero.title}</h1>
          <p className="tools-hero__lead">{content.hero.lead}</p>
        </div>
      </header>

      <section className="tools-grid-section">
        <p className="eyebrow tools-grid-section__label">{content.chooseLabel}</p>

        <div className="tools-grid" aria-label={content.carouselLabel}>
          {content.tools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className={`tool-card${isZh ? ' tool-card--zh' : ''}`}
            >
              <span className="tool-card__eyebrow">{tool.eyebrow}</span>
              <h2 className="tool-card__title">{tool.title}</h2>
              <p className="tool-card__desc">{tool.desc}</p>
              <span className="tool-card__footer">
                <span className="tool-card__cta">{tool.cta}</span>
                <span className="tool-card__time">
                  {content.timePrefix ? `${content.timePrefix} ${tool.time}` : tool.time}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="tools-trust">
        <div className="tools-trust__panel">
          <span className="gold-rule tools-trust__rule" aria-hidden="true" />
          <p className="eyebrow tools-trust__label">{content.trust.label}</p>
          <p className="serif-italic tools-trust__text">{content.trust.text}</p>
          <div className="tools-trust__badge">
            <ReviewBadge variant="text" theme="light" />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
