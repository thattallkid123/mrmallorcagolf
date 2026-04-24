import Image from 'next/image'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import { SITE_ORIGIN, buildLocalePath } from '../../lib/site'

function FillImageFrame({ src, alt, sizes = '(max-width: 768px) 100vw, 720px', priority = false, containerStyle, imageStyle }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...containerStyle }}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} style={{ objectFit: 'cover', objectPosition: 'center 24%', ...imageStyle }} />
    </div>
  )
}
import PostLayout from './PostLayout'

const COURSE_REVIEW_DETAILS = {
  'son-gual-review': {
    name: 'Golf Son Gual',
    ratingValue: 5,
    addressLocality: 'Palma',
  },
  'alcanada-review': {
    name: 'Club de Golf Alcanada',
    ratingValue: 5,
    addressLocality: 'Alcudia',
  },
  'santa-ponsa-1-review': {
    name: 'Golf Santa Ponsa I',
    ratingValue: 4,
    addressLocality: 'Santa Ponsa',
  },
  'son-termes-review': {
    name: 'Son Termes Golf',
    ratingValue: 4,
    addressLocality: 'Palma',
  },
}

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

function renderBlock(block, index, imageOrdinal) {
  if (block.type === 'image') {
    const presentation = getImagePresentation(block, imageOrdinal)
    return (
      <figure
        key={`${block.src}-${index}`}
        className={`post-media${block.caption ? '' : ' post-media--plain'}${
          presentation === 'half-left' || presentation === 'half-right'
            ? ` post-media--half post-media--${presentation}`
            : ''
        }`}
      >
        <FillImageFrame
          src={block.src}
          alt={block.alt}
          priority={block.priority}
          containerStyle={normalizeContainerStyle(block.containerStyle, { borderRadius: 2, aspectRatio: '5/4' })}
          imageStyle={{ objectPosition: 'center center', ...block.imageStyle }}
        />
        {block.caption ? <figcaption className="post-media__caption">{block.caption}</figcaption> : null}
      </figure>
    )
  }

  if (block.type === 'heading') {
    return <h2 key={`${block.text}-${index}`}>{block.text}</h2>
  }

  if (block.type === 'paragraph') {
    return <p key={`${block.text.slice(0, 20)}-${index}`}>{block.text}</p>
  }

  if (block.type === 'pull') {
    return (
      <div key={`${block.text}-${index}`} className="post-pull">
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

  if (block.type === 'cta') {
    return (
      <div key={`cta-${index}`} className="post-cta">
        <p>{block.text}</p>
        <a href={block.href}>{block.linkLabel}</a>
      </div>
    )
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn(`[GuidePostView] Unknown block type "${block.type}" at index ${index}`)
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

function buildReviewSchema(meta, blocks, locale) {
  const course = COURSE_REVIEW_DETAILS[meta.slug] || { name: meta.title, ratingValue: 4, addressLocality: 'Mallorca' }
  const pagePath = meta.slug ? buildLocalePath(`/guides/${meta.slug}`, locale) : buildLocalePath('/guides', locale)
  const firstImage = blocks.find((block) => block.type === 'image')?.src
  const dateModified = schemaDate(meta.updated)

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: meta.title,
    reviewBody: meta.intro,
    datePublished: dateModified,
    dateModified,
    inLanguage: locale,
    url: `${SITE_ORIGIN}${pagePath}`,
    image: absoluteUrl(firstImage),
    author: {
      '@type': 'Person',
      name: 'Andy Griffiths',
      jobTitle: 'UK PGA Advanced Professional',
      url: SITE_ORIGIN,
    },
    itemReviewed: {
      '@type': 'GolfCourse',
      name: course.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: course.addressLocality,
        addressRegion: 'Mallorca',
        addressCountry: 'ES',
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: course.ratingValue,
      bestRating: 5,
      worstRating: 1,
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

export default function GuidePostView({ locale = 'en', meta, blocks }) {
  const pageLang = locale === 'en' ? undefined : locale
  let imageOrdinal = 0

  return (
    <PageLayout lang={pageLang}>
      <JsonLd data={buildBlogPostingSchema(meta, blocks, locale)} />
      <JsonLd data={buildReviewSchema(meta, blocks, locale)} />
      <RevealObserver />
      <PostLayout meta={meta} lang={pageLang}>
        {blocks.map((block, index) => {
          const currentImageOrdinal = block.type === 'image' ? imageOrdinal++ : null
          return renderBlock(block, index, currentImageOrdinal)
        })}
      </PostLayout>
    </PageLayout>
  )
}
