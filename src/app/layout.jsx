import '../styles/globals.css'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import Script from 'next/script'
import DocumentLanguage from '../components/DocumentLanguage'
import { getStructuredOfferCatalog } from '../lib/offers-content.js'
import { SITE_ORIGIN } from '../lib/site.js'

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
    default: 'Golf Days in Mallorca | Mr Mallorca Golf',
  },
  description: 'Private golf days in Mallorca with PGA Advanced Professional Andy Griffiths. Play Son Gual, Alcanada and more, with every detail arranged.',
  keywords: ['golf Mallorca', 'Mallorca golf courses', 'play golf Mallorca', 'PGA professional Mallorca', 'Son Gual golf', 'Alcanada golf', 'Majorca golf', 'golf holiday Mallorca', 'on-course coaching Mallorca', 'golf concierge Mallorca'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_ORIGIN,
    siteName: 'Mr Mallorca Golf',
    title: 'Golf Days in Mallorca | Mr Mallorca Golf',
    description: 'Private golf days in Mallorca with PGA Advanced Professional Andy Griffiths. Play Son Gual, Alcanada and more, with every detail arranged.',
    images: [{ url: `${SITE_ORIGIN}/images/hero-main.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golf Days in Mallorca | Mr Mallorca Golf',
    description: 'Private golf days in Mallorca with PGA Advanced Professional Andy Griffiths.',
    images: [`${SITE_ORIGIN}/images/hero-main.jpg`],
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
    'https://www.linkedin.com/in/andygriffithsgolf',
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
  telephone: '+34624466702',
  image: `${SITE_ORIGIN}/logo-dark-green.png`,
  sameAs: [
    'https://www.instagram.com/mrmallorcagolf',
    'https://www.linkedin.com/in/andygriffithsgolf',
  ],
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_ORIGIN}/logo-dark-green.png`,
    width: 306,
    height: 306,
  },
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
    itemListElement: getStructuredOfferCatalog(),
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's included in a day with Andy?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Everything. Green fee, tee time, lunch at the course restaurant, and 18 holes of on-course coaching woven throughout your round. You play alongside Andy—not taking lessons on the range. Strategy, pressure situations, real-course decisions. Post-round debrief too.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a specific handicap to play with Andy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No handicap requirement. You need to be keen to improve and willing to engage with real decisions on the course. Andy's coached players from 2-handicap golfers to complete beginners visiting Mallorca. The philosophy is the same: honest feedback, smart course management, play the hole in front of you—not the one in your head.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose this over booking a tee time myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You get insight into what calculations go into each shot—not just being told to swing better. Real-course strategy: reading greens, managing risk, pressure. A PGA Advanced Professional with 20+ years\' experience playing alongside you. Course selection matched to your game. You discover your own ceiling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book multiple days or customise the trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Full Experience is completely bespoke: multiple courses over 3–7 days, private transport from Palma, dinners at handpicked restaurants, concierge support. Build your golf trip around how you actually want to play and live. Get in touch and we'll plan it together.",
      },
    },
    {
      '@type': 'Question',
      name: 'What courses will we play?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your game and what you want to experience. Andy has played all 22 courses on the island and builds rounds on Son Gual, Alcanada, and Santa Ponsa courses most often. He matches course to your handicap and goals—not every golfer should play the same track. See the full course guide or get in touch to discuss.',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0Z2BRNWB4N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0Z2BRNWB4N');
          `}
        </Script>

        {/* Schema Markup */}
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
