import { SITE_ORIGIN } from './site.js'

// Hidden English drafts for Andy's read, served at /draft-guides (noindex,
// unlinked). Empty since 2026-10-09: the four drafts (near Palma, southwest,
// higher handicappers, practice facilities) went live in guide-article-content.js
// in all seven languages. The east Mallorca comparison is on hold (Andy's call)
// and its draft is the only file left in Drive ContentUnpublished Guide Articles.
//
// To draft a new guide: add it here, keep it out of ARTICLE_SLUGS, and when Andy
// approves move it to guide-article-content.js and follow /publish-course-guide.
const DRAFT_SIDEBAR = {
  title: 'Draft preview for Andy',
  body: 'This page is hidden from the public guide index and blocked from indexing while the English is reviewed.',
  primary: 'Plan Your Trip',
  secondary: 'Play With A Pro',
}

export const DRAFT_GUIDE_CONTENT = {}

export const DRAFT_GUIDE_SLUGS = Object.keys(DRAFT_GUIDE_CONTENT)

export function getDraftGuideContent(slug) {
  return DRAFT_GUIDE_CONTENT[slug] || null
}

export function buildDraftGuideMetadata(slug) {
  const content = getDraftGuideContent(slug)
  if (!content) return {}
  const image = content.metadata.image.startsWith('http')
    ? content.metadata.image
    : `${SITE_ORIGIN}${content.metadata.image}`

  return {
    title: `Draft: ${content.metadata.title}`,
    description: content.metadata.description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    alternates: {
      canonical: content.metadata.canonical,
    },
    openGraph: {
      type: 'article',
      url: content.metadata.canonical,
      siteName: 'Mr Mallorca Golf',
      locale: 'en_GB',
      title: content.metadata.title,
      description: content.metadata.description,
      images: [{ url: image, width: 1200, height: 630, alt: content.metadata.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.title,
      description: content.metadata.description,
      images: [image],
    },
  }
}
