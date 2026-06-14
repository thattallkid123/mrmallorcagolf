import '../styles/globals.css'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import Script from 'next/script'
import { getStructuredOfferCatalog } from '../lib/offers-content.js'
import { ALL_LOCALES, buildLocalePath, SITE_ORIGIN } from '../lib/site.js'
import { DEFAULT_SOCIAL_IMAGE, getSocialImage } from '../lib/page-metadata.js'
import ScrollToTop from './scroll-to-top.jsx'

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

export const rootMetadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    template: '%s | Mr Mallorca Golf',
    default: 'Mallorca Golf Trip Planning',
  },
  description: 'Mallorca golf trip planning with PGA Advanced Professional Andy Griffiths. Compare courses, build better itineraries, and add a private Play With A Pro day where it helps.',
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
    description: 'Mallorca golf trip planning with PGA Advanced Professional Andy Griffiths. Compare courses, build better itineraries, and add a private Play With A Pro day where it helps.',
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

export function buildRootMetadata(locale = 'en') {
  if (locale !== 'zh' && locale !== 'zh-Hans') {
    return rootMetadata
  }

  const zhSocialImage = getSocialImage('zh')
  const zhDescription = '马略卡高尔夫行程规划、球场建议与私人陪打服务，中文沟通顺畅，所有细节都可以提前安排好。'
  return {
    ...rootMetadata,
    title: {
      ...rootMetadata.title,
      default: '马略卡高尔夫',
    },
    description: zhDescription,
    keywords: ['马略卡高尔夫', '马略卡高尔夫行程', '马略卡球场', '私人陪打', '中文高尔夫', 'Andy Griffiths'],
    openGraph: {
      ...rootMetadata.openGraph,
      locale: 'zh_CN',
      title: '马略卡高尔夫 | 球场、陪打与私人行程',
      description: zhDescription,
      images: [zhSocialImage],
    },
    twitter: {
      ...rootMetadata.twitter,
      title: '马略卡高尔夫 | 球场、陪打与私人行程',
      description: zhDescription,
      images: [zhSocialImage.url],
    },
  }
}

function buildPersonSchema(lang) {
  const zh = lang.startsWith('zh')
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_ORIGIN}/#person-andy-griffiths`,
    name: 'Andy Griffiths',
    jobTitle: zh ? '英国 PGA 高级职业教练' : 'PGA Advanced Professional',
    description: zh
      ? '英国 PGA 高级职业教练、Trackman Master、马略卡高尔夫行程规划师，拥有横跨三大洲的 18 年教学经验。'
      : 'UK PGA Advanced Professional, Trackman Master, and Mallorca-based golf trip planner with 18 years of coaching experience across three continents.',
    url: `${SITE_ORIGIN}/about`,
    image: getSocialImage(zh ? 'zh' : 'en').url,
    sameAs: [
      'https://www.instagram.com/mrmallorcagolf',
      'https://www.linkedin.com/in/andygriffithsgolf',
    ],
    knowsAbout: zh
      ? ['高尔夫教学', '场上指导', '马略卡高尔夫球场', '球场管理', '高尔夫行程规划']
      : ['Golf coaching', 'On-course coaching', 'Mallorca golf courses', 'Course management', 'Golf trip planning'],
    hasCredential: [
      zh
        ? { '@type': 'EducationalOccupationalCredential', name: 'PGA 高级职业教练', credentialCategory: '职业资质' }
        : { '@type': 'EducationalOccupationalCredential', name: 'PGA Advanced Professional', credentialCategory: 'Professional Qualification' },
      zh
        ? { '@type': 'EducationalOccupationalCredential', name: 'Trackman 大师认证', credentialCategory: '技术认证' }
        : { '@type': 'EducationalOccupationalCredential', name: 'Trackman Master Certified', credentialCategory: 'Technical Certification' },
      zh
        ? { '@type': 'EducationalOccupationalCredential', name: 'TPI 三级认证', credentialCategory: '专业认证' }
        : { '@type': 'EducationalOccupationalCredential', name: 'TPI Level 3 Certified', credentialCategory: 'Professional Certification' },
    ],
  }
}

function buildLocalBusinessSchema(lang) {
  const zh = lang.startsWith('zh')
  const socialImage = getSocialImage(zh ? 'zh' : 'en')
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_ORIGIN}/#localbusiness`,
    additionalType: 'https://schema.org/SportsActivityLocation',
    name: 'Mr Mallorca Golf',
    description: zh
      ? '马略卡高尔夫行程规划、球场建议与高端 Play With A Pro 增值服务，由英国 PGA 高级职业教练 Andy Griffiths 主理。'
      : 'Mallorca golf trip planning, course guidance, and premium Play With A Pro add-ons led by PGA Advanced Professional Andy Griffiths.',
    url: SITE_ORIGIN,
    email: 'andy@mrmallorcagolf.com',
    telephone: '+34624466702',
    image: socialImage.url,
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
    contactPoint: zh
      ? { '@type': 'ContactPoint', contactType: '客服', url: 'https://wa.me/34624466702', availableLanguage: ['中文'] }
      : { '@type': 'ContactPoint', contactType: 'customer service', url: 'https://wa.me/34624466702', availableLanguage: ['English', 'Mandarin Chinese'] },
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
      name: zh ? '马略卡高尔夫行程规划' : 'Mallorca Golf Trip Planning',
      itemListElement: getStructuredOfferCatalog(zh ? 'zh' : 'en'),
    },
  }
}

function buildOrganizationSchema() {
  return {
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
}

function buildWebsiteSchema() {
  return {
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
}

export default function SiteRootLayout({ lang, children }) {
  const personSchema = buildPersonSchema(lang)
  const localBusinessSchema = buildLocalBusinessSchema(lang)
  const organizationSchema = buildOrganizationSchema()
  const websiteSchema = buildWebsiteSchema()

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <Script id="google-analytics-deferred" strategy="afterInteractive">
          {`
            (function () {
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

        <Script id="baidu-analytics" strategy="afterInteractive">
          {`
            (function () {
              if (!window.location.pathname.startsWith('/zh')) return;

              var ba_token = '';
              if (!ba_token) return;

              var s = document.createElement('script');
              s.async = true;
              s.src = 'https://hm.baidu.com/hm.js?' + ba_token;
              document.head.appendChild(s);
            })();
          `}
        </Script>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className={`${jost.variable} ${cormorantGaramond.variable}`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
