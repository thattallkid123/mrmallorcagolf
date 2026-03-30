import HomePageSV from './HomePageSV'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('sv')

export default function HomeSV() {
  return (
    <HomeLayout lang="sv">
      <HomePageSV />
    </HomeLayout>
  )
}
