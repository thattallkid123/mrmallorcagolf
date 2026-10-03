export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'de', {

  title: 'Mallorca-Greenfee-Vergleich',
  description: 'Vergleichen Sie die Greenfees aller 24 Golfplätze auf Mallorca nach Saison, Handicap und Buggy-Optionen.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'
import feesData from '../../../../lib/tool-data/green-fees.de'

export default function GreenFeesDe() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="de" localData={feesData} />
    </PageLayout>
  )
}
