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
    subscribe: 'Newsletter',
    newsletterLink: 'Subscribe for insights',
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
    subscribe: 'Newsletter',
    newsletterLink: 'Einschreiben',
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
    subscribe: 'Newsletter',
    newsletterLink: 'Suscribirse',
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
    subscribe: 'Newsletter',
    newsletterLink: "S'abonner",
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
    subscribe: 'Nieuwsbrief',
    newsletterLink: 'Inschrijven',
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
    subscribe: 'Nyhetsbrev',
    newsletterLink: 'Prenumerera',
    privacy: 'Integritet',
    terms: 'Villkor',
  },
  zh: {
    tagline: '\u4e0e Andy Griffiths \u5728\u9a6c\u7565\u5361\u4f53\u9a8c\u79c1\u4eba\u9ad8\u5c14\u592b\u65e5\u7a0b\u3002\u719f\u6089\u672c\u5730\uff0c\u5b89\u6392\u5468\u5230\uff0c\u5168\u7a0b\u8f7b\u677e\u4ece\u5bb9\u3002',
    experiences: '\u4f53\u9a8c',
    pwap: '\u4e0e\u804c\u4e1a\u7403\u624b\u540c\u573a',
    day: 'Son Gual \u7684\u4e00\u5929',
    guide: '\u9ad8\u5c14\u592b\u6307\u5357',
    about: '\u5173\u4e8e Andy',
    allCourses: '\u5168\u90e8\u7403\u573a',
    enquire: '\u8054\u7cfb',
    subscribe: '\u901a\u8baf',
    newsletterLink: '\u8ba2\u9605',
    privacy: '\u9690\u79c1\u653f\u7b56',
    terms: '\u6761\u6b3e',
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

      <div className="footer__col">
        <h3>{copy.subscribe}</h3>
        <ul>
          <li><a href={`${prefix}/subscribe`}>{copy.newsletterLink}</a></li>
        </ul>
      </div>

      <div className="footer__bottom">
        <p>
          {'\u00a9'} 2026 Mr Mallorca Golf {'\u00b7'} Andy Griffiths {'\u00b7'} PGA Advanced Professional {'\u00b7'}{' '}
          <a href={getLegalPath('privacy-policy', locale)} className="footer__legal-link">
            {copy.privacy}
          </a>{' '}
          {'\u00b7'}{' '}
          <a href={getLegalPath('terms', locale)} className="footer__legal-link">
            {copy.terms}
          </a>
        </p>
        <div className="footer__lang">
          {NAV_LOCALES.map((code) => (
            <a key={code} href={getLocalePath(basePath, code)}>
              {code === 'zh' ? '\u4e2d\u6587' : code.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
