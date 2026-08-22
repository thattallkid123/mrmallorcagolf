import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import StickyMobileCta from '../../../components/StickyMobileCta'
import ToolPlacementCta from '../../../components/ToolPlacementCta'
import { SITE_ORIGIN, buildLocalePath } from '../../../lib/site'
import InlineRichText from '../guides/InlineRichText'

function FillImageFrame({ src, alt, sizes = '(max-width: 768px) 100vw, 720px', priority = false, containerStyle, imageStyle }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...containerStyle }}>
      <Image src={src} alt={alt} fill priority={priority} quality={88} sizes={sizes} style={{ objectFit: 'cover', objectPosition: 'center 24%', ...imageStyle }} />
    </div>
  )
}
import PostLayout from '../guides/PostLayout'

const FUNNEL_CTA_STRINGS = {
  en: {
    q1: (name) => `Not sure if ${name} is right for your group?`,
    l1: 'Take the 60-second course match →',
    q2: 'Want Andy to plan the trip around this course?',
    l2: 'Plan Your Trip →',
  },
  de: {
    q1: (name) => `Nicht sicher, ob ${name} zu Ihrer Gruppe passt?`,
    l1: 'Platzmatch in 60 Sekunden →',
    q2: 'Möchten Sie, dass Andy eine Runde hier organisiert?',
    l2: 'Angebot anfragen →',
  },
  es: {
    q1: (name) => `¿No estás seguro de si ${name} es el campo adecuado para tu grupo?`,
    l1: 'Selector de campo en 60 segundos →',
    q2: '¿Quieres que Andy organice una vuelta aquí?',
    l2: 'Solicitar presupuesto →',
  },
  fr: {
    q1: (name) => `Vous n'êtes pas sûr que ${name} convienne à votre groupe ?`,
    l1: 'Trouvez le bon parcours en 60 secondes →',
    q2: "Vous souhaitez qu’Andy organise une partie ici ?",
    l2: 'Demander un devis →',
  },
  nl: {
    q1: (name) => `Twijfelt u of ${name} geschikt is voor uw groep?`,
    l1: 'Baanselector in 60 seconden →',
    q2: 'Wilt u dat Andy een ronde hier regelt?',
    l2: 'Offerte aanvragen →',
  },
  sv: {
    q1: (name) => `Inte säker på om ${name} passar er grupp?`,
    l1: 'Banmatchning på 60 sekunder →',
    q2: 'Vill du att Andy ordnar en runda här?',
    l2: 'Begär offert →',
  },
  zh: {
    q1: (name) => `不确定${name}是否适合您的团队？`,
    l1: '60秒球场匹配 →',
    q2: '想让Andy为您安排一场比赛？',
    l2: '获取报价 →',
  },
}

function FunnelCtaBlock({ locale, courseName }) {
  const t = FUNNEL_CTA_STRINGS[locale] || FUNNEL_CTA_STRINGS.en
  const toolsHref = joinHref(locale, '/tools')
  const contactHref = joinHref(locale, '/contact')
  return (
    <div className="post-funnel-cta">
      <div className="post-funnel-cta__item">
        <p className="post-funnel-cta__question">{t.q1(courseName)}</p>
        <Link href={toolsHref} className="post-funnel-cta__link">{t.l1}</Link>
      </div>
      <div className="post-funnel-cta__item">
        <p className="post-funnel-cta__question">{t.q2}</p>
        <Link href={contactHref} className="post-funnel-cta__link">{t.l2}</Link>
      </div>
    </div>
  )
}

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
  'golf-andratx-review': {
    name: 'Golf de Andratx',
    ratingValue: 4,
    addressLocality: 'Andratx',
  },
  'son-antem-west-review': {
    name: 'Son Antem West',
    ratingValue: 4,
    addressLocality: 'Llucmajor',
  },
  't-golf-calvia-review': {
    name: 'T Golf Calvià',
    ratingValue: 5,
    addressLocality: 'Calvià',
  },
  'son-muntaner-review': {
    name: 'Son Muntaner Golf',
    ratingValue: 5,
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
  if (block.type === 'image') {
    const presentation = getImagePresentation(block, imageOrdinal)

    // 'natural' presentation: image displays at its own aspect ratio, no cropping
    if (presentation === 'natural') {
      return (
        <figure
          key={`${block.src}-${index}`}
          className={`post-media${block.caption ? '' : ' post-media--plain'}`}
        >
          <Image
            src={block.src}
            alt={block.alt}
            width={block.naturalWidth || 1200}
            height={block.naturalHeight || 900}
            priority={block.priority}
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          {block.caption ? <figcaption className="post-media__caption">{block.caption}</figcaption> : null}
        </figure>
      )
    }

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
          priority={Boolean(block.priority || imageOrdinal === 0)}
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
    return <p key={`${block.text.slice(0, 20)}-${index}`}><InlineRichText text={block.text} locale={locale} /></p>
  }

  if (block.type === 'pull') {
    return (
      <div key={`${block.text}-${index}`} className="post-pull">
        <p>&ldquo;{block.text}&rdquo;</p>
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

  if (block.type === 'notes') {
    return (
      <section key={`notes-${index}`} className="post-notes">
        <div className="post-notes__header">
          <span className="post-notes__eyebrow">{block.eyebrow || 'Mr Mallorca Notes'}</span>
          {block.title ? <h2>{block.title}</h2> : null}
        </div>
        <ul className="post-notes__list">
          {block.items.map(([label, text]) => (
            <li key={label} className="post-notes__item">
              <span className="post-notes__label">{label}</span>
              <p><InlineRichText text={text} locale={locale} /></p>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  if (block.type === 'cta') {
    const href = joinHref(locale, block.href)
    const contactHref = buildLocalePath('/contact', locale)
    return (
      <div key={`cta-${index}`} className="post-cta">
        <p className="post-cta__text"><InlineRichText text={block.text} locale={locale} /></p>
        <div className="post-cta__actions">
          <a href={href} className="post-cta__button">{block.linkLabel}</a>
        </div>
        {locale === 'en' && block.href === '/play-with-a-pro' ? (
          <p className="post-cta__secondary">
            Still narrowing down the trip? Use the <Link href={contactHref} className="post-cta__secondary-link">contact page</Link> and send Andy your dates, hotel area, handicap, and shortlist.
          </p>
        ) : null}
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

function extractQaPairs(text) {
  const clean = text.replace(/<[^>]+>/g, '')
  const sentences = clean.match(/[^.!?]+[.!?]+/g) || [clean]
  const pairs = []
  let question = null
  let answerParts = []
  for (const raw of sentences) {
    const sentence = raw.trim()
    if (!sentence) continue
    if (sentence.endsWith('?')) {
      if (question && answerParts.length) pairs.push({ question, answer: answerParts.join(' ').trim() })
      question = sentence
      answerParts = []
    } else if (question) {
      answerParts.push(sentence)
    }
  }
  if (question && answerParts.length) pairs.push({ question, answer: answerParts.join(' ').trim() })
  return pairs
}

function buildFaqSchema(meta, blocks, locale) {
  const items = []
  for (let i = 0; i < blocks.length - 1; i++) {
    const block = blocks[i]
    if (block.type === 'heading' && block.text.startsWith('Quick Answer:')) {
      const next = blocks[i + 1]
      if (next?.type === 'paragraph') {
        items.push({ question: block.text.replace(/^Quick Answer:\s*/i, '').trim(), answer: next.text.replace(/<[^>]+>/g, '') })
      }
    }
    if (block.type === 'heading' && block.text.trim() === 'Common Questions') {
      for (let j = i + 1; j < blocks.length && blocks[j].type === 'paragraph'; j++) {
        items.push(...extractQaPairs(blocks[j].text))
      }
    }
  }
  if (!items.length) return null
  const pagePath = meta.slug ? buildLocalePath(`/guides/${meta.slug}`, locale) : buildLocalePath('/guides', locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${SITE_ORIGIN}${pagePath}`,
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
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
  const courseDetails = COURSE_REVIEW_DETAILS[meta.slug]
  const lastCtaIndex = blocks.length - 1

  const planHref = joinHref(locale, '/plan-your-trip')
  const playHref = joinHref(locale, '/play-with-a-pro')

  const ctalabels = {
    en: { plan: 'Plan Your Trip', play: 'Play With A Pro' },
    de: { plan: 'Reise planen', play: 'Mit Andy spielen' },
    es: { plan: 'Planifica tu viaje', play: 'Jugar con Andy' },
    fr: { plan: 'Planifier', play: 'Jouer avec Andy' },
    nl: { plan: 'Reis plannen', play: 'Spelen met Andy' },
    sv: { plan: 'Planera resan', play: 'Spela med Andy' },
    zh: { plan: '规划行程', play: '与 Andy 同场' },
  }
  const labels = ctalabels[locale] || ctalabels.en

  return (
    <PageLayout lang={pageLang}>
      <StickyMobileCta
        primaryHref={planHref}
        primaryLabel={labels.plan}
        secondaryHref={playHref}
        secondaryLabel={labels.play}
      />
      <JsonLd data={buildBlogPostingSchema(meta, blocks, locale)} />
      <JsonLd data={buildReviewSchema(meta, blocks, locale)} />
      {buildFaqSchema(meta, blocks, locale) && <JsonLd data={buildFaqSchema(meta, blocks, locale)} />}
      <PostLayout meta={meta} lang={pageLang}>
        {blocks.map((block, index) => {
          const currentImageOrdinal = block.type === 'image' ? imageOrdinal++ : null
          const renderedBlock = renderBlock(block, index, locale, currentImageOrdinal)

          if (locale === 'en' && index === 4) {
            return (
              <Fragment key={`post-block-with-planning-${index}`}>
                {renderedBlock}
                <ToolPlacementCta tool="courseSelector" compact />
              </Fragment>
            )
          }

          if (courseDetails && index === lastCtaIndex && block.type === 'cta') {
            return (
              <Fragment key={`funnel-cta-wrap-${index}`}>
                <FunnelCtaBlock locale={locale} courseName={courseDetails.name} />
                {renderedBlock}
              </Fragment>
            )
          }

          return renderedBlock
        })}
      </PostLayout>
    </PageLayout>
  )
}
