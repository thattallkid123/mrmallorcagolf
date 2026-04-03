import HomePageInner from '../HomePageInner'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('fr')

export default function HomeFR() {
  return (
    <HomeLayout lang="fr">
      <HomePageInner locale="fr" />
    </HomeLayout>
  )
}
