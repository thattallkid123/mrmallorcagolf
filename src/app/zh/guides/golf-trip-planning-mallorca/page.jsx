import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-trip-planning-mallorca')

export const metadata = buildGuideArticleMetadata('golf-trip-planning-mallorca', 'zh')

export default function Post() {
  return <GuideArticleView locale="zh" meta={content.meta} blocks={content.blocks} />
}
