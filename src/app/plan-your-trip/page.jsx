import PageLayout from '../../components/PageLayout'
import PlanYourTripView from './PlanYourTripView'

export const metadata = {
  title: 'Plan Your Mallorca Golf Trip',
  description:
    'Use the free course finder as a starting point, or ask Andy to plan your Mallorca golf trip properly: courses, base, routing, tee times, buggies, rentals, and dining.',
}

export default function PlanYourTripPage() {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <PlanYourTripView />
    </PageLayout>
  )
}
