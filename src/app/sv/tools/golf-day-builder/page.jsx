export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'sv', {

  title: 'Planera din golfdag på Mallorca',
  description: "Nio frågor. Förslag på golfdagar anpassade till din grupp.",
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
