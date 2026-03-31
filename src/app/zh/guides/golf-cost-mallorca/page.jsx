import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-cost-mallorca')

export const metadata = buildGuideArticleMetadata('golf-cost-mallorca', 'zh')

export default function Post() {
  return <GuideArticleView locale="zh" meta={content.meta} blocks={content.blocks} />
}
