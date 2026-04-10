import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('is-mallorca-good-for-golf')

export const metadata = buildGuideArticleMetadata('is-mallorca-good-for-golf')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}
