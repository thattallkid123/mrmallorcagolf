export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'fr', {

  title: 'Puis-je y jouer?',
  description: 'Entrez votre handicap et voyez instantanément quels parcours vous pouvez réserver.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from '../../../(en)/tools/handicap-checker/HandicapCheckerClient'

export default function HandicapCheckerToolFR() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient lang="fr" />
    </PageLayout>
  )
}
