export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'fr', {

  title: 'Mallorca green fee comparison',
  description: 'Comparaison des green fees à Majorque',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'

export default function GreenFeesFr() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="fr" />
    </PageLayout>
  )
}
