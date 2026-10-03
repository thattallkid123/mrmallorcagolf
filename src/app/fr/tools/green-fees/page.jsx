export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'fr', {

  title: 'Comparateur de green fees à Majorque',
  description: 'Comparez les green fees des 24 parcours de Majorque par saison, handicap et options de voiturette.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'
import feesData from '../../../../lib/tool-data/green-fees.fr'

export default function GreenFeesFr() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="fr" localData={feesData} />
    </PageLayout>
  )
}
