import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('a-day-at-son-gual')

export const metadata = buildGuideArticleMetadata('a-day-at-son-gual')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}
