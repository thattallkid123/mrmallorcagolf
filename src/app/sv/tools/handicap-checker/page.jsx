export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'sv', {

  title: 'Kan jag spela det?',
  description: 'Ange ditt handikapp och se omedelbar vilka Mallorca-banor du kan boka.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from '../../../(en)/tools/handicap-checker/HandicapCheckerClient'

export default function HandicapCheckerToolSV() {
  return (
    <PageLayout lang="sv" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient lang="sv" />
    </PageLayout>
  )
}
