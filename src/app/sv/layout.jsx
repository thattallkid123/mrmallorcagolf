import SiteRootLayout, { rootMetadata, viewport } from '../root-layout-shared'

export { viewport }

export const metadata = rootMetadata

export default function SwedishRootLayout({ children }) {
  return <SiteRootLayout lang="sv">{children}</SiteRootLayout>
}
