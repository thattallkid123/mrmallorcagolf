import HomePageInner from '../HomePageInner'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('zh')

export default function HomeZH() {
  return (
    <HomeLayout lang="zh">
      <HomePageInner locale="zh" />
    </HomeLayout>
  )
}
