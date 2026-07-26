export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'de', {

  title: 'Kann ich es spielen?',
  description: 'Geben Sie Ihren Handicap ein und sehen Sie, welche Kurse Sie spielen können.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from '../../../(en)/tools/handicap-checker/HandicapCheckerClient'

export default function HandicapCheckerToolDE() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient lang="de" />
    </PageLayout>
  )
}
