export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/hotel-recommender', 'zh', {

  title: '你应该在哪里住宿以进行高尔夫旅行？',
  description: '六个问题。根据您的高尔夫行程定制的个性化名单。',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderToolZH() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="zh" />
    </PageLayout>
  )
}
