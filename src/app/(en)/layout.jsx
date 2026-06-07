import SiteRootLayout, { rootMetadata, viewport } from '../root-layout-shared'

export { viewport }

export const metadata = rootMetadata

export default function EnglishRootLayout({ children }) {
  return <SiteRootLayout lang="en">{children}</SiteRootLayout>
}
