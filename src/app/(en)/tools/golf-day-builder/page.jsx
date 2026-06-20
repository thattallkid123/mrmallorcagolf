export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca Golf Day Builder',
  description: 'Eight questions. A complete day plan built around your group.',
  robots: { index: false, follow: false },
}

import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../golf-day-builder/GolfDayBuilderClient'

export default function GolfDayBuilderTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient />
    </PageLayout>
  )
}
