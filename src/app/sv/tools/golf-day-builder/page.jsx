export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'sv', {

  title: 'Planera din golfdag på Mallorca',
  description: 'Åtta frågor. En komplett dagplan med bana, lunch och tillval, byggd kring din grupp.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.sv'

export default function Page() {
  return (
    <PageLayout lang="sv" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="sv" localData={dayData} />
    </PageLayout>
  )
}
