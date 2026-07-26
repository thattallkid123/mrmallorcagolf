export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'en', {

  title: 'Mallorca Golf Day Builder',
  description: 'Eight questions. A complete day plan built around your group.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../golf-day-builder/GolfDayBuilderClient'

export default function GolfDayBuilderTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient />
    </PageLayout>
  )
}
