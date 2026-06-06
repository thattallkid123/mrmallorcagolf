import '../styles/globals.css'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import Script from 'next/script'
import DocumentLanguage from '../components/DocumentLanguage'
import { getStructuredOfferCatalog } from '../lib/offers-content.js'
import { ALL_LOCALES, buildLocalePath, SITE_ORIGIN } from '../lib/site.js'
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
  alternates: {
    canonical: '/',
    languages: Object.fromEntries(
      ALL_LOCALES.map((locale) => [
        locale === 'zh' ? 'zh-Hans' : locale,
        buildLocalePath('/', locale),
      ]),
    ),
  },
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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_ORIGIN}/#person-andy-griffiths`,
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
  '@type': 'LocalBusiness',
  '@id': `${SITE_ORIGIN}/#localbusiness`,
  additionalType: 'https://schema.org/SportsActivityLocation',
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
  founder: { '@id': `${SITE_ORIGIN}/#person-andy-griffiths` },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mallorca Golf Trip Planning',
    itemListElement: getStructuredOfferCatalog(),
  },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_ORIGIN}/#organization`,
  name: 'Mr Mallorca Golf',
  url: SITE_ORIGIN,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_ORIGIN}/MMG_Logo_Green.png`,
    width: 1200,
    height: 1200,
  },
  sameAs: [
    'https://www.instagram.com/mrmallorcagolf',
    'https://www.linkedin.com/in/andygriffithsgolf',
  ],
  founder: { '@id': `${SITE_ORIGIN}/#person-andy-griffiths` },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_ORIGIN}/#website`,
  name: 'Mr Mallorca Golf',
  url: SITE_ORIGIN,
  inLanguage: ['en', 'es', 'de', 'fr', 'nl', 'sv', 'zh-Hans'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_ORIGIN}/guides?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: 'Mr Mallorca Golf',
    url: SITE_ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/MMG_Logo_Green.png`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics (disabled on /zh locale — blocked in mainland China) */}
        <Script id="google-analytics-deferred" strategy="afterInteractive">
          {`
            (function () {
              // Skip GA on zh pages (Google blocked in mainland China; use Baidu Analytics instead)
              if (window.location.pathname.startsWith('/zh')) return;

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
              var once = function () {
                window.removeEventListener('pointerdown', once);
                window.removeEventListener('keydown', once);
                window.removeEventListener('touchstart', once);
                init();
              };
              window.addEventListener('pointerdown', once, { passive: true, once: true });
              window.addEventListener('keydown', once, { passive: true, once: true });
              window.addEventListener('touchstart', once, { passive: true, once: true });
              setTimeout(init, 20000);
            })();
          `}
        </Script>

        {/* Baidu Analytics (for /zh pages — works in mainland China) */}
        <Script id="baidu-analytics" strategy="afterInteractive">
          {`
            (function () {
              // Only load Baidu Analytics on /zh pages
              if (!window.location.pathname.startsWith('/zh')) return;

              // Baidu Analytics ID — update with real ba_token when configured
              // https://tongji.baidu.com/
              var ba_token = '';
              if (!ba_token) return; // Skip if not configured yet

              var s = document.createElement('script');
              s.async = true;
              s.src = 'https://hm.baidu.com/hm.js?' + ba_token;
              document.head.appendChild(s);
            })();
          `}
        </Script>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      </head>
      <body className={`${jost.variable} ${cormorantGaramond.variable}`}>
        <DocumentLanguage />
        {children}
      </body>
    </html>
  )
}
