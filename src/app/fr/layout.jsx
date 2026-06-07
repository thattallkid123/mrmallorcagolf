import SiteRootLayout, { rootMetadata, viewport } from '../root-layout-shared'

export { viewport }

export const metadata = rootMetadata

export default function FrenchRootLayout({ children }) {
  return <SiteRootLayout lang="fr">{children}</SiteRootLayout>
}
