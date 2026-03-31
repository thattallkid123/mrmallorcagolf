import HomePageInner from '../HomePageInner'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('es')

export default function HomeES() {
  return (
    <HomeLayout lang="es">
      <HomePageInner locale="es" />
    </HomeLayout>
  )
}
