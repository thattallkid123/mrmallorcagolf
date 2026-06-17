import PageLayout from '../../../components/PageLayout'
import GolfTripCalculatorClient from './GolfTripCalculatorClient'

export const metadata = {
  title: 'Golf Trip Cost Calculator',
  description: 'Estimate the cost of your Mallorca golf trip and get personalized course recommendations from Andy Griffiths.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function GolfTripCalculator() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <GolfTripCalculatorClient />
      </div>
    </PageLayout>
  )
}
