import HomePageNL from './HomePageNL'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('nl')

export default function HomeNL() {
  return (
    <HomeLayout lang="nl">
      <HomePageNL />
    </HomeLayout>
  )
}
