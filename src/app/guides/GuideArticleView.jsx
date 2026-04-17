import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FillImageFrame from '../../components/FillImageFrame'
import { SITE_ORIGIN, buildLocalePath } from '../../lib/site'
import PostLayout from './PostLayout'

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

function renderBlock(block, index, locale, imageOrdinal) {
  if (block.type === 'paragraph') {
    return <p key={`${index}-${block.text.slice(0, 24)}`}>{block.text}</p>
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
          priority={block.priority}
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
            {item.text}
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
        <p>{block.text}</p>
        {block.internal ? <Link href={href}>{block.linkLabel}</Link> : <a href={href}>{block.linkLabel}</a>}
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

export default function GuideArticleView({ meta, blocks, locale = 'en', children = null }) {
  let imageOrdinal = 0

  return (
    <PageLayout lang={locale === 'en' ? undefined : locale}>
      <JsonLd data={buildBlogPostingSchema(meta, blocks, locale)} />
      <RevealObserver />
      <>
        <PostLayout meta={meta} lang={locale}>
          {blocks.map((block, index) => {
            const currentImageOrdinal = block.type === 'image' ? imageOrdinal++ : null
            return renderBlock(block, index, locale, currentImageOrdinal)
          })}
        </PostLayout>
        {children}
      </>
    </PageLayout>
  )
}
