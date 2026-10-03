export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'nl', {

  title: 'Mallorca greenfees vergelijken',
  description: 'Vergelijk de greenfees van alle 24 golfbanen op Mallorca per seizoen, handicap en buggyopties.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'
import feesData from '../../../../lib/tool-data/green-fees.nl'

export default function Page() {
  const lang = 'nl'
  return (
    <PageLayout lang={lang.toLowerCase()} navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang={lang.toLowerCase()} localData={feesData} />
    </PageLayout>
  )
}
