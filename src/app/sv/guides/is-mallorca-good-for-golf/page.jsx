import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('is-mallorca-good-for-golf', 'sv')

export const metadata = buildGuideArticleMetadata('is-mallorca-good-for-golf', 'sv')

export default function Post() {
  return <GuideArticleView locale="sv" meta={content.meta} blocks={content.blocks} />
}
