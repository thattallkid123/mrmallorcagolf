import SiteRootLayout, { rootMetadata, viewport } from '../root-layout-shared'

export { viewport }

export const metadata = rootMetadata

export default function SpanishRootLayout({ children }) {
  return <SiteRootLayout lang="es">{children}</SiteRootLayout>
}
