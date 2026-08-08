import SignatureDayView from '../signature-day/SignatureDayView'
import PageLayout from '../../../components/PageLayout'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const metadata = buildPageMetadata('/signature-day', 'en', {
  title: 'Signature Day Mallorca | Premium Golf Day with Physio, Transfers & Dinner',
  description:
    'A premium Mallorca golf day built around the round, the body, and the evening. Private golf with Andy Griffiths, golf physio with John Brazier, private transfers, and dinner. From €3,000.',
  robots: { index: true, follow: true },
})

export default function SignatureDay() {
  return (
    <PageLayout lang="en">
      <SignatureDayView />
    </PageLayout>
  )
}
