import HomePageInner from '../HomePageInner'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('de')

export default function HomeDE() {
  return (
    <HomeLayout lang="de">
      <HomePageInner locale="de" />
    </HomeLayout>
  )
}
