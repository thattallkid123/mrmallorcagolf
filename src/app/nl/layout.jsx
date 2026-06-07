import SiteRootLayout, { rootMetadata, viewport } from '../root-layout-shared'

export { viewport }

export const metadata = rootMetadata

export default function DutchRootLayout({ children }) {
  return <SiteRootLayout lang="nl">{children}</SiteRootLayout>
}
