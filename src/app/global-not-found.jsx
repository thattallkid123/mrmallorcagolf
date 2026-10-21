import Link from 'next/link'
import '../styles/globals.css'
import { jost, cormorantGaramond } from '../lib/site-fonts'

export const metadata = {
  title: 'Page not found | Mr Mallorca Golf',
  robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${cormorantGaramond.variable}`}>
        <main className="missing-page">
          <Link href="/" className="missing-page__brand" aria-label="Mr Mallorca Golf home">
            <img src="/logo-dark-green-96.webp" width="64" height="64" alt="" />
            <span>Mr Mallorca Golf</span>
          </Link>
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>This address may have changed, or the link may be incorrect.</p>
          <Link href="/" className="btn btn--pine">Back to Home</Link>
          <nav className="missing-page__links" aria-label="Find another page">
            <Link href="/golf-courses">Golf courses</Link>
            <Link href="/tools">Planning tools</Link>
            <Link href="/contact">Contact me</Link>
          </nav>
        </main>
      </body>
    </html>
  )
}
