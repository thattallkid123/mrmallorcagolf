import HomePageES from './HomePageES'
import HomeLayout from '../HomeLayout'
import { buildHomeMetadata } from '../../lib/page-metadata'

export const metadata = buildHomeMetadata('es')

export default function HomeES() {
  return (
    <HomeLayout lang="es">
      <HomePageES />
    </HomeLayout>
  )
}
