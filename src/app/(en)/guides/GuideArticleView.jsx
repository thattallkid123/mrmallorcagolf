import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import ToolPlacementCta from '../../../components/ToolPlacementCta'
import { SITE_ORIGIN, buildLocalePath } from '../../../lib/site'
import InlineRichText from '../guides/InlineRichText'

function FillImageFrame({ src, alt, sizes = '(max-width: 768px) 100vw, 720px', priority = false, containerStyle, imageStyle }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', ...containerStyle }}>
      <Image src={src} alt={alt} fill priority={priority} quality={88} sizes={sizes} style={{ objectFit: 'cover', objectPosition: 'center 24%', ...imageStyle }} />
    </div>
  )
}
import PostLayout from '../guides/PostLayout'

const MONTHS = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
}

function joinHref(locale, path) {
  if (!path || path.startsWith('http')) return path
  if (locale === 'en') return path
  return `/${locale}${path === '/' ? '' : path}`
}

function normalizeContainerStyle(style, fallback) {
  const merged = style || fallback
  if (!merged) return merged
  if (merged.aspectRatio === '21/9' || merged.aspectRatio === '16/9' || merged.aspectRatio === '15/8') {
    return { ...merged, aspectRatio: '5/4' }
  }
  return merged
}

function getImagePresentation(block, imageOrdinal) {
  if (block.presentation) return block.presentation
  return 'full'
}

function parseStarRating(value) {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  const numericMatch = trimmed.match(/(\d(?:\.\d)?)/)
  if (numericMatch) {
    const parsed = Number(numericMatch[1])
    return Number.isFinite(parsed) ? parsed : null
  }

  const fullStars = (trimmed.match(/★/g) || []).length
  if (!fullStars) return null
  const hasHalf = trimmed.includes('½') || trimmed.includes('⯨')
  return fullStars + (hasHalf ? 0.5 : 0)
}

function renderStars(value) {
  const rating = parseStarRating(String(value))
  if (!Number.isFinite(rating)) return value

  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5

  return (
    <span aria-label={`${rating} stars`} title={`${rating} stars`} style={{ display: 'inline-flex', alignItems: 'center', gap: 0, whiteSpace: 'nowrap' }}>
      {Array.from({ length: full }, (_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}
      {hasHalf ? (
        <span
          style={{
            display: 'inline-block',
            width: '0.52em',
            overflow: 'hidden',
            lineHeight: 1,
            verticalAlign: 'middle',
          }}
        >
          <span style={{ display: 'inline-block' }}>★</span>
        </span>
      ) : null}
    </span>
  )
}

function renderBlock(block, index, locale, imageOrdinal) {
  if (block.type === 'paragraph') {
    return <p key={`${index}-${block.text.slice(0, 24)}`}><InlineRichText text={block.text} locale={locale} /></p>
  }

  if (block.type === 'heading') {
    return <h2 key={`${index}-${block.text}`}>{block.text}</h2>
  }

  if (block.type === 'subheading') {
    return (
      <h3 key={`${index}-${block.text}`}>
        {block.href ? (
          <a href={block.href} target={block.external ? '_blank' : undefined} rel={block.external ? 'noopener noreferrer' : undefined}>
            {block.text}
          </a>
        ) : (
          block.text
        )}
      </h3>
    )
  }

  if (block.type === 'image') {
    const presentation = getImagePresentation(block, imageOrdinal)
    const defaultStyle =
      block.fit === 'contain'
        ? { borderRadius: 2, aspectRatio: '5/4', background: '#f5f5f5' }
        : { borderRadius: 2, aspectRatio: '5/4' }

    const figureContent = (
      <>
        <FillImageFrame
          src={block.src}
          alt={block.alt}
          priority={Boolean(block.priority || imageOrdinal === 0)}
          containerStyle={normalizeContainerStyle(block.containerStyle, defaultStyle)}
          imageStyle={
            block.fit === 'contain'
              ? { objectFit: 'contain', backgroundColor: '#f5f5f5' }
              : { objectPosition: 'center center', ...block.imageStyle }
          }
        />
        {block.caption ? (
          <figcaption className="post-media__caption" style={{ fontSize: block.captionSize || undefined, margin: block.captionMargin || undefined }}>
            {block.caption}
          </figcaption>
        ) : null}
      </>
    )

    return (
      <figure
        key={`${index}-${block.src}`}
        className={`post-media${block.caption ? '' : ' post-media--plain'}${
          presentation === 'half-left' || presentation === 'half-right'
            ? ` post-media--half post-media--${presentation}`
            : ''
        }`}
      >
        {block.href ? (
          <a href={block.href} target={block.external ? '_blank' : undefined} rel={block.external ? 'noopener noreferrer' : undefined}>
            {figureContent}
          </a>
        ) : (
          figureContent
        )}
      </figure>
    )
  }

  if (block.type === 'pull') {
    return (
      <div key={`${index}-${block.text}`} className="post-pull">
        <p>"{block.text}"</p>
      </div>
    )
  }

  if (block.type === 'facts') {
    return (
      <div key={`facts-${index}`} className="post-fact">
        {block.items.map(([value, label]) => (
          <div key={label} className="post-fact__item">
            <span className="post-fact__val">{value}</span>
            <span className="post-fact__label">{label}</span>
          </div>
        ))}
      </div>
    )
  }

  if (block.type === 'list') {
    return (
      <ul key={`list-${index}`}>
        {block.items.map((item) => (
          <li key={item.label || item.text}>
            {item.label ? <strong>{item.label}</strong> : null}
            {item.label ? ' ' : null}
            <InlineRichText text={item.text} locale={locale} />
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'splitImages') {
    return (
      <div key={`split-${index}`} className="post-split-media">
        {block.items.map((item) => (
          <figure key={item.src} className={`post-media post-media--split${item.caption ? '' : ' post-media--plain'}`}>
            <FillImageFrame
              src={item.src}
              alt={item.alt}
              containerStyle={normalizeContainerStyle({ position: 'relative', width: '100%', aspectRatio: item.aspectRatio || '4/3' })}
              imageStyle={item.imageStyle || { objectPosition: 'center 24%' }}
            />
            {item.caption ? (
              <figcaption className="post-media__caption">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    )
  }

  if (block.type === 'quoteBox') {
    return (
      <div key={`quote-${index}`} className="post-quote-box">
        <p className="post-quote-box__text">
          &ldquo;{block.text}&rdquo;
        </p>
        <p className="post-quote-box__attribution">
          {block.attribution}
        </p>
      </div>
    )
  }

  if (block.type === 'cta') {
    const href = joinHref(locale, block.href)
    return (
      <div key={`cta-${index}`} className="post-cta">
        <p className="post-cta__text"><InlineRichText text={block.text} locale={locale} /></p>
        <div className="post-cta__actions">
          {block.internal ? (
            <Link href={href} className="post-cta__button">{block.linkLabel}</Link>
          ) : (
            <a href={href} className="post-cta__button">{block.linkLabel}</a>
          )}
        </div>
        {locale === 'en' && block.href === '/play-with-a-pro' ? (
          <p className="post-cta__secondary">
            If you are still choosing courses or trying to shape the trip first, <Link href={buildLocalePath('/contact', locale)} className="post-cta__secondary-link">send Andy the details</Link> and he will narrow it down for you.
          </p>
        ) : null}
      </div>
    )
  }

  if (block.type === 'table') {
    return (
      <div key={`table-${index}`} style={{ overflowX: 'auto', margin: '1.5rem 0 2rem', background: '#fff', WebkitOverflowScrolling: 'touch', maxWidth: '100%' }}>
        <table style={{ borderCollapse: 'collapse', fontSize: '0.88rem', lineHeight: 1.5, minWidth: 480 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--gold, #b8933a)' }}>
              {block.headers.map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '0.45rem 0.75rem', fontWeight: 600, whiteSpace: 'nowrap', color: 'var(--gold, #b8933a)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', background: ri % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.025)' }}>
                {row.map((cell, ci) => {
                  const isStarsColumn = block.headers[ci] === 'Stars'
                  return (
                    <td key={ci} style={{ padding: '0.4rem 0.75rem', verticalAlign: 'top' }}>
                      {isStarsColumn ? renderStars(cell) : cell}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn(`[GuideArticleView] Unknown block type "${block.type}" at index ${index}`)
  }

  return null
}

function absoluteUrl(path) {
  if (!path) return undefined
  return new URL(path, SITE_ORIGIN).toString()
}

function schemaDate(updated = '') {
  const [month, year] = updated.split(' ')
  return year && MONTHS[month] ? `${year}-${MONTHS[month]}-01` : '2026-03-01'
}

function buildBreadcrumbSchema(meta, locale) {
  const slug = meta.slug
  const pagePath = slug ? buildLocalePath(`/guides/${slug}`, locale) : buildLocalePath('/guides', locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_ORIGIN}${buildLocalePath('/guides', locale)}` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: `${SITE_ORIGIN}${pagePath}` },
    ],
  }
}

function buildBlogPostingSchema(meta, blocks, locale) {
  const slug = meta.slug
  const pagePath = slug ? buildLocalePath(`/guides/${slug}`, locale) : buildLocalePath('/guides', locale)
  const firstImage = blocks.find((block) => block.type === 'image')?.src
  const dateModified = schemaDate(meta.updated)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.title,
    description: meta.intro,
    image: absoluteUrl(firstImage),
    datePublished: dateModified,
    dateModified,
    inLanguage: locale,
    mainEntityOfPage: `${SITE_ORIGIN}${pagePath}`,
    author: {
      '@type': 'Person',
      name: 'Andy Griffiths',
      jobTitle: 'UK PGA Advanced Professional',
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mr Mallorca Golf',
      url: SITE_ORIGIN,
    },
  }
}

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const ARTICLE_TOOL_PLACEMENTS = {
  'golf-cost-mallorca': 'costCalculator',
  'golf-trip-planning-mallorca': 'dayBuilder',
  'best-time-play-golf-mallorca': 'dayBuilder',
  'best-golf-courses-mallorca': 'courseSelector',
  'golf-club-hire-mallorca': 'costCalculator',
  'is-mallorca-good-for-golf': 'courseSelector',
  'a-day-at-son-gual': 'dayBuilder',
}

export default function GuideArticleView({ meta, blocks, locale = 'en', children = null }) {
  let imageOrdinal = 0
  const contextualTool = ARTICLE_TOOL_PLACEMENTS[meta.slug] || 'courseSelector'

  return (
    <PageLayout lang={locale === 'en' ? undefined : locale}>
      <JsonLd data={buildBlogPostingSchema(meta, blocks, locale)} />
      <JsonLd data={buildBreadcrumbSchema(meta, locale)} />
      <>
        <PostLayout meta={meta} lang={locale}>
          {blocks.map((block, index) => {
            const currentImageOrdinal = block.type === 'image' ? imageOrdinal++ : null
            const renderedBlock = renderBlock(block, index, locale, currentImageOrdinal)

            if (locale === 'en' && index === 4) {
              return (
                <Fragment key={`article-block-with-planning-${index}`}>
                  {renderedBlock}
                  <ToolPlacementCta tool={contextualTool} compact />
                </Fragment>
              )
            }

            return renderedBlock
          })}
        </PostLayout>
        {children}
      </>
    </PageLayout>
  )
}
