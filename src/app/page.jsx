import HomePageInner from './HomePageInner'
import HomeLayout from './HomeLayout'
import { buildHomeMetadata } from '../lib/page-metadata'

export const metadata = buildHomeMetadata('en')

export default function Home() {
  return (
    <HomeLayout>
      <HomePageInner locale="en" />
    </HomeLayout>
  )
}
