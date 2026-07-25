export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Kan ik het spelen?',
  description: 'Voer je handicap in en zie onmiddellijk welke Mallorca-banen je kunt reserveren.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from '../../../(en)/tools/handicap-checker/HandicapCheckerClient'

export default function HandicapCheckerToolNL() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient lang="nl" />
    </PageLayout>
  )
}
