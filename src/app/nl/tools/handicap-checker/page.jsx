export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'nl', {

  title: 'Kan ik het spelen?',
  description: 'Voer uw handicap in en zie meteen welke Mallorca-banen u kunt reserveren.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from '../../../(en)/tools/handicap-checker/HandicapCheckerClient'

export default function HandicapCheckerToolNL() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient lang="nl" />
    </PageLayout>
  )
}
