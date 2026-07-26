export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'zh', {

  title: '我可以打吗？',
  description: '输入您的差点，立即查看您可以预订马略卡哪些球场。',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from '../../../(en)/tools/handicap-checker/HandicapCheckerClient'

export default function HandicapCheckerToolZH() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient lang="zh" />
    </PageLayout>
  )
}
