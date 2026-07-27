export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'en', {

  title: 'Can I Play It? - Handicap Checker',
  description: 'Enter your handicap and instantly see which Mallorca golf courses you can book, which need a certificate, and where Andy can arrange access.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from './HandicapCheckerClient'

export default function HandicapCheckerTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient />
    </PageLayout>
  )
}
