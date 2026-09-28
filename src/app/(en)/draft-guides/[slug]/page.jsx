import { notFound } from 'next/navigation'
import GuideArticleView from '../../guides/GuideArticleView'
import {
  DRAFT_GUIDE_SLUGS,
  buildDraftGuideMetadata,
  getDraftGuideContent,
} from '../../../../lib/draft-guide-content'

export function generateStaticParams() {
  return DRAFT_GUIDE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  return buildDraftGuideMetadata(slug)
}

export default async function DraftGuidePreview({ params }) {
  const { slug } = await params
  const content = getDraftGuideContent(slug)

  if (!content) {
    notFound()
  }

  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}
