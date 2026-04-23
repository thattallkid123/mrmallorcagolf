import PageLayout from '../../components/PageLayout'
import ShotTrackerPrototype from './shot-tracker-prototype'

export const metadata = {
  title: 'Mr Mallorca Golf Shot Tracker',
  description:
    'Mr Mallorca Golf on-course tracker with Mallorca course packs, custom hole overviews, GPS shot tracking, round stats, and handicap calculations.',
}

export default function ShotTrackerPage() {
  return (
    <PageLayout navTransparent={false}>
      <ShotTrackerPrototype />
    </PageLayout>
  )
}
