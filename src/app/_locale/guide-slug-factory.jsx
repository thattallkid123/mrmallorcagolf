import { notFound } from 'next/navigation'

import { buildGuidePostMetadata } from '../../lib/page-metadata'
import { getGuidePostContent } from '../../lib/guide-post-content'
import { ARTICLE_SLUGS, REVIEW_POST_SLUGS, isPublishedGuideSlug } from '../../lib/site'
import GuidePostView from '../guides/GuidePostView'

const GUIDE_SLUGS = [...REVIEW_POST_SLUGS, ...ARTICLE_SLUGS]

function getContent(slug, locale) {
  if (!isPublishedGuideSlug(slug)) return null
  return getGuidePostContent(slug, locale)
}

export function createGuideSlugStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }))
}

export function createGuideSlugMetadata(locale, params) {
  const content = getContent(params.slug, locale)
  if (!content) return {}

  return buildGuidePostMetadata({
    slug: params.slug,
    locale,
    title: content.metadata.title,
    description: content.metadata.description,
    imagePath: content.metadata.imagePath,
  })
}

export function createGuideSlugPage(locale, params) {
  const content = getContent(params.slug, locale)
  if (!content) notFound()

  return <GuidePostView locale={locale} meta={content.meta} blocks={content.blocks} />
}
