export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca Green Fee Comparison — All 24 Courses',
  description: 'Compare approximate green fees, buggy costs, walking rules and handicap limits for every golf course in Mallorca. One honest table, updated July 2026.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from './GreenFeesClient'

export default function GreenFeesTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient />
    </PageLayout>
  )
}
