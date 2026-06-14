import SiteRootLayout, { buildRootMetadata, viewport } from '../root-layout-shared'

export { viewport }

export const metadata = buildRootMetadata('zh')

export default function ChineseRootLayout({ children }) {
  return <SiteRootLayout lang="zh-Hans">{children}</SiteRootLayout>
}
