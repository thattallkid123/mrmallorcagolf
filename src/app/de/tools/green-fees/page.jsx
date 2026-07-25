export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca-Greenfee-Vergleich',
  description: 'Vergleichen Sie die Greenfees aller 24 Golfplätze auf Mallorca nach Saison, Handicap und Buggy-Optionen.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'

export default function GreenFeesDe() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="de" />
    </PageLayout>
  )
}
