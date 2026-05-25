import '../styles/globals.css'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import Script from 'next/script'
import DocumentLanguage from '../components/DocumentLanguage'
import { getStructuredOfferCatalog } from '../lib/offers-content.js'
import { SITE_ORIGIN } from '../lib/site.js'
import { DEFAULT_SOCIAL_IMAGE } from '../lib/page-metadata.js'

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
    default: 'Mallorca Golf Trip Planning | Mr Mallorca Golf',
  },
  description: 'Mallorca golf trip planning with PGA Advanced Professional Andy Griffiths. Build itineraries, compare courses, and add a private Play With A Pro day where it helps.',
  keywords: ['golf Mallorca', 'Mallorca golf trip', 'Mallorca golf itinerary', 'Mallorca golf courses', 'play golf Mallorca', 'PGA professional Mallorca', 'Son Gual golf', 'Alcanada golf', 'Majorca golf', 'golf holiday Mallorca', 'golf concierge Mallorca'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_ORIGIN,
    siteName: 'Mr Mallorca Golf',
    title: 'Mallorca Golf Trip Planning | Mr Mallorca Golf',
    description: 'Mallorca golf trip planning with PGA Advanced Professional Andy Griffiths. Build itineraries, compare courses, and add a private Play With A Pro day where it helps.',
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallorca Golf Trip Planning | Mr Mallorca Golf',
    description: 'Mallorca golf trip planning with PGA Advanced Professional Andy Griffiths.',
    images: [DEFAULT_SOCIAL_IMAGE.url],
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
  description: 'UK PGA Advanced Professional, Trackman Master, and Mallorca-based golf trip planner with 18 years coaching experience across three continents.',
  url: `${SITE_ORIGIN}/about`,
  image: DEFAULT_SOCIAL_IMAGE.url,
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
  description: 'Mallorca golf trip planning, course guidance, and premium Play With A Pro add-ons led by PGA Advanced Professional Andy Griffiths.',
  url: SITE_ORIGIN,
  email: 'andy@mrmallorcagolf.com',
  telephone: '+34624466702',
  image: DEFAULT_SOCIAL_IMAGE.url,
  sameAs: [
    'https://www.instagram.com/mrmallorcagolf',
    'https://www.linkedin.com/in/andygriffithsgolf',
  ],
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_ORIGIN}/MMG_Logo_Green.png`,
    width: 1200,
    height: 1200,
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
    name: 'Mallorca Golf Trip Planning',
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
        text: "A Play With A Pro day is an optional premium add-on inside a wider Mallorca golf trip. Andy's day rate covers his time and coaching for the full round. Green fee, buggy, and lunch are confirmed separately before the day.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a specific handicap to play with Andy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No handicap requirement. You need to be keen to improve and willing to engage with real decisions on the course. Andy's coached players from 2-handicap golfers to complete beginners visiting Mallorca. The philosophy is the same: honest feedback, smart course management, play the hole in front of you - not the one in your head.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose this over booking a tee time myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main value is course and itinerary judgment before you book: which courses suit your group, where to base yourself, when to add a premium tee time, and whether a hosted Play With A Pro day belongs in the trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book multiple days or customise the trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Start with the itinerary planner, then Andy can help refine the course mix, travel rhythm, transfers, dining, club hire, and any hosted golf day that improves the trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'What courses will we play?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your game and what you want to experience. Andy has played all 24 courses on the island and builds rounds on Son Gual, Alcanada, and Santa Ponsa most often. He matches course to your handicap and goals - not every golfer should play the same track. See the full course guide or get in touch to discuss.',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script id="google-analytics-deferred" strategy="afterInteractive">
          {`
            (function () {
              var init = function () {
                if (window.__mmgGaLoaded) return;
                window.__mmgGaLoaded = true;
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-0Z2BRNWB4N';
                document.head.appendChild(s);
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){window.dataLayer.push(arguments);};
                window.gtag('js', new Date());
                window.gtag('config', 'G-0Z2BRNWB4N');
              };
              if ('requestIdleCallback' in window) {
                requestIdleCallback(init, { timeout: 3000 });
              } else {
                setTimeout(init, 2000);
              }
            })();
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
