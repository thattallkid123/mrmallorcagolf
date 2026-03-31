import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-club-hire-mallorca')

export const metadata = buildGuideArticleMetadata('golf-club-hire-mallorca', 'nl')

export default function Post() {
  return <GuideArticleView locale="nl" meta={content.meta} blocks={content.blocks} />
}
