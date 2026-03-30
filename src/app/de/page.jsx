import HomePageDE from './HomePageDE'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('de')

export default function HomeDE() {
  return (
    <HomeLayout lang="de">
      <HomePageDE />
    </HomeLayout>
  )
}
