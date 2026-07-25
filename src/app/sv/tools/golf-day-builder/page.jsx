export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Build your golf day',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'

export default function Page() {
  return (
    <PageLayout lang="sv" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="sv" />
    </PageLayout>
  )
}
