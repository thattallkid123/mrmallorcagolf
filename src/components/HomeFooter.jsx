import Image from 'next/image'
import { NAV_LOCALES } from '../lib/site'

const FOOTER_COPY = {
  en: {
    tagline: 'Private golf days in Mallorca with Andy Griffiths. Local judgment, thoughtful hosting, everything arranged.',
    experiences: 'Experiences',
    pwap: 'Play with a Pro',
    day: 'A Day at Son Gual',
    guide: 'Golf Guide',
    about: 'About',
    allCourses: 'All Courses',
    enquire: 'Enquire',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
  de: {
    tagline: 'Private Golftage auf Mallorca mit Andy Griffiths. Lokale Einschatzung, aufmerksame Begleitung, alles arrangiert.',
    experiences: 'Erlebnisse',
    pwap: 'Mit Profi spielen',
    day: 'Ein Tag in Son Gual',
    guide: 'Golffuhrer',
    about: 'Uber Andy',
    allCourses: 'Alle Platze',
    enquire: 'Anfragen',
    privacy: 'Datenschutz',
    terms: 'AGB',
  },
  es: {
    tagline: 'Dias privados de golf en Mallorca con Andy Griffiths. Criterio local, atencion personal y todo bien organizado.',
    experiences: 'Experiencias',
    pwap: 'Jugar con un Pro',
    day: 'Un dia en Son Gual',
    guide: 'Guia de Golf',
    about: 'Sobre Andy',
    allCourses: 'Todos los campos',
    enquire: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Terminos',
  },
  fr: {
    tagline: 'Journees de golf privees a Majorque avec Andy Griffiths. Regard local, presence attentive et tout bien organise.',
    experiences: 'Experiences',
    pwap: 'Jouer avec un Pro',
    day: 'Une journee a Son Gual',
    guide: 'Guide Golf',
    about: 'A propos',
    allCourses: 'Tous les parcours',
    enquire: 'Contact',
    privacy: 'Confidentialite',
    terms: 'Conditions',
  },
  nl: {
    tagline: 'Prive-golfdagen op Mallorca met Andy Griffiths. Lokale kennis, rustige begeleiding en alles geregeld.',
    experiences: 'Ervaringen',
    pwap: 'Spelen met een Pro',
    day: 'Een dag op Son Gual',
    guide: 'Golfgids',
    about: 'Over Andy',
    allCourses: 'Alle banen',
    enquire: 'Contact',
    privacy: 'Privacybeleid',
    terms: 'Voorwaarden',
  },
  sv: {
    tagline: 'Privata golfdagar pa Mallorca med Andy Griffiths. Lokal kansla, trygg vardskap och allt ordnat.',
    experiences: 'Upplevelser',
    pwap: 'Spela med ett proffs',
    day: 'En dag pa Son Gual',
    guide: 'Golfguide',
    about: 'Om Andy',
    allCourses: 'Alla banor',
    enquire: 'Kontakt',
    privacy: 'Integritet',
    terms: 'Villkor',
  },
  zh: {
    tagline: 'Private golf days in Mallorca with Andy Griffiths. Local knowledge, calm hosting, everything arranged.',
    experiences: 'Experiences',
    pwap: 'Play with a Pro',
    day: 'A Day at Son Gual',
    guide: 'Golf Guide',
    about: 'About Andy',
    allCourses: 'All Courses',
    enquire: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
  },
}

function getPrefix(locale) {
  return locale === 'en' ? '' : `/${locale}`
}

function getADayPath(locale) {
  return locale === 'en' ? '/a-day' : `/${locale}/guides/a-day-at-son-gual`
}

function getLocalePath(basePath, locale) {
  if (locale === 'en') {
    return basePath
  }

  return basePath === '/' ? `/${locale}` : `/${locale}${basePath}`
}

function getLegalPath(type, locale) {
  if (locale === 'es') return `/es/${type}`
  return `/${type}`
}

export default function HomeFooter({ lang = 'en', basePath = '/' }) {
  const locale = FOOTER_COPY[lang] ? lang : 'en'
  const copy = FOOTER_COPY[locale]
  const prefix = getPrefix(locale)

  return (
    <footer className="footer">
      <div className="footer__brand">
        <a href={prefix || '/'} className="nav__logo footer__logo">
          <Image src="/logo-white-96.webp" alt="Mr Mallorca Golf" className="nav__logo-img" width={38} height={38} sizes="38px" />
        </a>
        <p>{copy.tagline}</p>
      </div>

      <div className="footer__col">
        <h3>{copy.experiences}</h3>
        <ul>
          <li><a href={`${prefix}/play-with-a-pro`}>{copy.pwap}</a></li>
          <li><a href={getADayPath(locale)}>{copy.day}</a></li>
          <li><a href={`${prefix}/contact`}>{copy.enquire}</a></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.guide}</h3>
        <ul>
          <li><a href={`${prefix}/golf-courses`}>{copy.allCourses}</a></li>
          <li><a href={`${prefix}/golf-courses#son-gual`}>Son Gual</a></li>
          <li><a href={`${prefix}/golf-courses#alcanada`}>Alcanada</a></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.about}</h3>
        <ul>
          <li><a href={`${prefix}/about`}>{copy.about}</a></li>
          <li><a href="https://www.instagram.com/mrmallorcagolf" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="mailto:andy@mrmallorcagolf.com">Email</a></li>
        </ul>
      </div>

      <div className="footer__bottom">
        <p>
          (c) 2026 Mr Mallorca Golf / Andy Griffiths / PGA Advanced Professional /{' '}
          <a href={getLegalPath('privacy-policy', locale)} className="footer__legal-link">
            {copy.privacy}
          </a>{' '}
          /{' '}
          <a href={getLegalPath('terms', locale)} className="footer__legal-link">
            {copy.terms}
          </a>
        </p>
        <div className="footer__lang">
          {NAV_LOCALES.map((code) => (
            <a key={code} href={getLocalePath(basePath, code)}>
              {code === 'zh' ? 'ZH' : code.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
