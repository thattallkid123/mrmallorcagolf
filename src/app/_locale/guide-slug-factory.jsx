import { notFound } from 'next/navigation'

import { buildGuidePostMetadata } from '../../lib/page-metadata'
import { getGuidePostContent } from '../../lib/guide-post-content'
import { getGuideArticleContent, buildGuideArticleMetadata } from '../../lib/guide-article-content'
import { ARTICLE_SLUGS, REVIEW_POST_SLUGS, isPublishedGuideSlug, isArticleSlug, hasLocaleRoute } from '../../lib/site'
import GuidePostView from '../(en)/guides/GuidePostView'
import GuideArticleView from '../(en)/guides/GuideArticleView'

const GUIDE_SLUGS = [...REVIEW_POST_SLUGS, ...ARTICLE_SLUGS]

export function createGuideSlugStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }))
}

export async function createGuideSlugMetadata(locale, params) {
  const { slug } = await params
  if (!isPublishedGuideSlug(slug)) return {}
  if (!hasLocaleRoute(`/guides/${slug}`, locale)) return {}

  if (isArticleSlug(slug)) {
    return buildGuideArticleMetadata(slug, locale)
  }

  const content = getGuidePostContent(slug, locale)
  if (!content) return {}

  return buildGuidePostMetadata({
    slug,
    locale,
    title: content.metadata.title,
    description: content.metadata.description,
    imagePath: content.metadata.imagePath,
  })
}

export async function createGuideSlugPage(locale, params) {
  const { slug } = await params
  if (!isPublishedGuideSlug(slug)) notFound()
  if (!hasLocaleRoute(`/guides/${slug}`, locale)) notFound()

  if (isArticleSlug(slug)) {
    const content = getGuideArticleContent(slug, locale)
    if (!content) notFound()
    return <GuideArticleView locale={locale} meta={content.meta} blocks={content.blocks} />
  }

  const content = getGuidePostContent(slug, locale)
  if (!content) notFound()

  return <GuidePostView locale={locale} meta={content.meta} blocks={content.blocks} />
}
