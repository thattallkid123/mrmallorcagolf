import PageLayout from '../../../components/PageLayout'
import GolfDayBuilderClient from './GolfDayBuilderClient'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca Golf Day Builder',
  description: 'Eight questions. A complete day plan with course, lunch, and add-ons, built around your group.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function GolfDayBuilder() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient />
    </PageLayout>
  )
}
