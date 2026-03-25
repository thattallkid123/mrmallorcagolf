import '../styles/globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://mrmallorcagolf.com'),
  title: {
    template: '%s | Mr Mallorca Golf',
    default: "Mr Mallorca Golf — Play Mallorca's Best Courses with a PGA Professional",
  },
  description: 'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more — on-course coaching, everything arranged.',
  keywords: ['golf Mallorca', 'Mallorca golf courses', 'play golf Mallorca', 'PGA professional Mallorca', 'Son Gual golf', 'Alcanada golf', 'Majorca golf', 'golf holiday Mallorca', 'on-course coaching Mallorca', 'golf concierge Mallorca'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mrmallorcagolf.com',
    siteName: 'Mr Mallorca Golf',
    title: "Mr Mallorca Golf — Play Mallorca's Best Courses with a PGA Professional",
    description: 'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mr Mallorca Golf — Play Mallorca's Best Courses with a PGA Professional",
    description: 'Private golf experiences in Mallorca with a PGA Advanced Professional.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andy Griffiths',
  jobTitle: 'PGA Advanced Professional',
  description: 'UK PGA Advanced Professional, Trackman Master, and golf coach with 18 years experience across three continents. Now offering private play-with-a-pro experiences and on-course coaching in Mallorca, Spain.',
  url: 'https://mrmallorcagolf.com/about',
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
  url: 'https://mrmallorcagolf.com',
  telephone: '+34624466702',
  email: 'andy@mrmallorcagolf.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mallorca',
    addressRegion: 'Balearic Islands',
    addressCountry: 'ES',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.6953, longitude: 3.0176 },
  priceRange: '€€€',
  currenciesAccepted: 'EUR',
  areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Golf Experiences',
    itemListElement: [
      { '@type': 'Offer', name: 'The Mallorca Round', description: 'Private round with PGA professional, on-course coaching throughout', price: '350', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'The Signature Day', description: 'Full hosted golf day at Son Gual or Alcanada with lunch and gift', price: '450', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'The Full Experience', description: 'Bespoke multi-element golf day — transport, dining, spa, full concierge', priceCurrency: 'EUR' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
