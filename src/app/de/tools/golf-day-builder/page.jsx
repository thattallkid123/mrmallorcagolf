export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'de', {

  title: 'Golftag auf Mallorca planen',
  description: 'Acht Fragen. Ein kompletter Tagesplan mit Platz, Mittagessen und Zusatzoptionen, der auf Ihre Gruppe zugeschnitten ist.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.de'

export default function Page() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="de" localData={dayData} />
    </PageLayout>
  )
}
