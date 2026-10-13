export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'zh', {

  title: '规划您的马略卡高尔夫日',
  description: "九个问题，为您的同行团队提供高尔夫日建议。",
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.zh'

export default function Page() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="zh" localData={dayData} />
    </PageLayout>
  )
}
