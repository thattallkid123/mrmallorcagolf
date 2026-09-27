import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('where-to-stay-mallorca-golf')

export const metadata = buildGuideArticleMetadata('where-to-stay-mallorca-golf')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}
