import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-courses-near-palma')

export const metadata = buildGuideArticleMetadata('golf-courses-near-palma')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}
