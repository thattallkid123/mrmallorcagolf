import Script from 'next/script'
import SiteRootLayout, { buildRootMetadata, viewport } from '../root-layout-shared'

export { viewport }

export const metadata = buildRootMetadata('zh')

// Google Analytics is not used on the Chinese pages. Page views here are counted with Vercel Web Analytics instead:
// cookie-free, no personal profile, served from this site's own address (/_vercel/insights).
export default function ChineseRootLayout({ children }) {
  return (
    <SiteRootLayout lang="zh-Hans">
      {children}
      <Script id="vercel-insights-queue" strategy="afterInteractive">
        {'window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };'}
      </Script>
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
    </SiteRootLayout>
  )
}
