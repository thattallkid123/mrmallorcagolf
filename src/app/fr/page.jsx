import HomePageFR from './HomePageFR'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('fr')

export default function HomeFR() {
  return (
    <HomeLayout lang="fr">
      <HomePageFR />
    </HomeLayout>
  )
}
