import GuideArticleView from '../../../guides/GuideArticleView'
import GolfCoursesClient from '../../../golf-courses/GolfCoursesClient'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-golf-courses-mallorca', 'nl')

export const metadata = buildGuideArticleMetadata('best-golf-courses-mallorca', 'nl')

export default function Post() {
  return (
    <GuideArticleView locale="nl" meta={content.meta} blocks={content.blocks}>
      <GolfCoursesClient lang="nl" />
    </GuideArticleView>
  )
}
