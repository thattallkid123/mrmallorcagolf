import '../styles/globals.css'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import DocumentLanguage from '../components/DocumentLanguage'
import { SITE_ORIGIN } from '../lib/site'

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    template: '%s | Mr Mallorca Golf',
    default: "Mr Mallorca Golf - Play Mallorca's Best Courses with a PGA Professional",
  },
  description: 'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more - on-course coaching, everything arranged.',
  keywords: ['golf Mallorca', 'Mallorca golf courses', 'play golf Mallorca', 'PGA professional Mallorca', 'Son Gual golf', 'Alcanada golf', 'Majorca golf', 'golf holiday Mallorca', 'on-course coaching Mallorca', 'golf concierge Mallorca'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_ORIGIN,
    siteName: 'Mr Mallorca Golf',
    title: "Mr Mallorca Golf - Play Mallorca's Best Courses with a PGA Professional",
    description: 'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more.',
    images: [{ url: `${SITE_ORIGIN}/images/hero-main.webp`, width: 1600, height: 660 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mr Mallorca Golf - Play Mallorca's Best Courses with a PGA Professional",
    description: 'Private golf experiences in Mallorca with a PGA Advanced Professional.',
    images: [`${SITE_ORIGIN}/images/hero-main.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andy Griffiths',
  jobTitle: 'PGA Advanced Professional',
  description: 'UK PGA Advanced Professional, Trackman Master, and golf coach with 18 years experience across three continents. Now offering private play-with-a-pro experiences and on-course coaching in Mallorca, Spain.',
  url: `${SITE_ORIGIN}/about`,
  sameAs: [
    'https://www.instagram.com/mrmallorcagolf',
    'https://www.youtube.com/@mrmallorcagolf',
  ],
  knowsAbout: ['Golf coaching', 'On-course coaching', 'Mallorca golf courses', 'Course management', 'Golf trip planning'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'PGA Advanced Professional', credentialCategory: 'Professional Qualification' },
    { '@type': 'EducationalOccupationalCredential', name: 'Trackman Master Certified', credentialCategory: 'Technical Certification' },
    { '@type': 'EducationalOccupationalCredential', name: 'TPI Level 3 Certified', credentialCategory: 'Professional Certification' },
  ],
}

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Mr Mallorca Golf',
  description: 'Private play-with-a-pro golf experiences and on-course coaching in Mallorca, Spain, led by PGA Advanced Professional Andy Griffiths.',
  url: SITE_ORIGIN,
  email: 'andy@mrmallorcagolf.com',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', url: 'https://wa.me/34624466702', availableLanguage: ['English', 'Mandarin Chinese'] },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mallorca',
    addressRegion: 'Balearic Islands',
    addressCountry: 'ES',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.6953, longitude: 3.0176 },
  priceRange: 'EUR',
  currenciesAccepted: 'EUR',
  areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Golf Experiences',
    itemListElement: [
      { '@type': 'Offer', name: 'Solo — A Day With Andy', description: 'Private full day at Son Gual or Alcanada with PGA Professional. Green fee, lunch, everything included.', price: '595', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Group of 2 to 4 — A Day With Andy', description: 'Full private golf day for groups of 2–4. One fixed day rate for Andy, with green fees confirmed separately.', price: '1195', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Multi-Day Experience', description: 'Multiple courses, private transfers, Michelin dining. Bespoke itinerary on enquiry.', priceCurrency: 'EUR' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      </head>
      <body className={`${jost.variable} ${cormorantGaramond.variable}`}>
        <DocumentLanguage />
        {children}
      </body>
    </html>
  )
}
