'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LOCALES, getLanguageSwitchPath, getLegalPath } from '../lib/site'

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
    newsletter: 'Newsletter',
    newsletterLink: 'Subscribe for insights',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
  de: {
    tagline: 'Private Golftage auf Mallorca mit Andy Griffiths. Lokale Einschätzung, aufmerksame Begleitung, alles arrangiert.',
    experiences: 'Erlebnisse',
    pwap: 'Mit Profi spielen',
    day: 'Ein Tag in Son Gual',
    guide: 'Golfführer',
    about: 'Über Andy',
    allCourses: 'Alle Plätze',
    enquire: 'Anfragen',
    newsletter: 'Newsletter',
    newsletterLink: 'Einschreiben',
    privacy: 'Datenschutz',
    terms: 'AGB',
  },
  es: {
    tagline: 'Días privados de golf en Mallorca con Andy Griffiths. Criterio local, atención personal y todo bien organizado.',
    experiences: 'Experiencias',
    pwap: 'Jugar con un Pro',
    day: 'Un día en Son Gual',
    guide: 'Guía de Golf',
    about: 'Sobre Andy',
    allCourses: 'Todos los campos',
    enquire: 'Contacto',
    newsletter: 'Newsletter',
    newsletterLink: 'Suscribirse',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
  fr: {
    tagline: 'Journées de golf privées à Majorque avec Andy Griffiths. Regard local, présence attentive et tout bien organisé.',
    experiences: 'Expériences',
    pwap: 'Jouer avec un Pro',
    day: 'Une journée à Son Gual',
    guide: 'Guide Golf',
    about: 'À propos',
    allCourses: 'Tous les parcours',
    enquire: 'Contact',
    newsletter: 'Newsletter',
    newsletterLink: "S'abonner",
    privacy: 'Confidentialité',
    terms: 'Conditions',
  },
  nl: {
    tagline: 'Privé-golfdagen op Mallorca met Andy Griffiths. Lokale kennis, rustige begeleiding en alles geregeld.',
    experiences: 'Ervaringen',
    pwap: 'Spelen met een Pro',
    day: 'Een dag op Son Gual',
    guide: 'Golfgids',
    about: 'Over Andy',
    allCourses: 'Alle banen',
    enquire: 'Contact',
    newsletter: 'Newsletter',
    newsletterLink: 'Inschrijven',
    privacy: 'Privacybeleid',
    terms: 'Voorwaarden',
  },
  sv: {
    tagline: 'Privata golfdagar på Mallorca med Andy Griffiths. Lokal känsla, trygg värdskap och allt ordnat.',
    experiences: 'Upplevelser',
    pwap: 'Spela med ett proffs',
    day: 'En dag på Son Gual',
    guide: 'Golfguide',
    about: 'Om Andy',
    allCourses: 'Alla banor',
    enquire: 'Kontakt',
    newsletter: 'Newsletter',
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
    newsletter: '\u901a\u8baf',
    newsletterLink: '\u8ba2\u9605',
    privacy: '\u9690\u79c1\u653f\u7b56',
    terms: '\u6761\u6b3e',
  },
}

function getLangFromProp(lang) {
  return lang && FOOTER_COPY[lang] ? lang : 'en'
}

function getPrefix(locale) {
  return locale === 'en' ? '' : `/${locale}`
}

function getADayPath(locale) {
  return locale === 'en' ? '/a-day' : `/${locale}/guides/a-day-at-son-gual`
}

export default function Footer({ lang }) {
  const pathname = usePathname()
  const locale = getLangFromProp(lang)
  const copy = FOOTER_COPY[locale]
  const prefix = getPrefix(locale)

  return (
    <footer className="footer">
      <div className="footer__brand">
        <Link href={prefix || '/'} className="nav__logo footer__logo">
          <Image src="/logo-white-96.webp" alt="Mr Mallorca Golf" className="nav__logo-img" width={38} height={38} sizes="38px" />
        </Link>
        <p>{copy.tagline}</p>
      </div>

      <div className="footer__col">
        <h3>{copy.experiences}</h3>
        <ul>
          <li><Link href={`${prefix}/play-with-a-pro`}>{copy.pwap}</Link></li>
          <li><Link href={getADayPath(locale)}>{copy.day}</Link></li>
          <li><Link href={`${prefix}/contact`}>{copy.enquire}</Link></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.guide}</h3>
        <ul>
          <li><Link href={`${prefix}/golf-courses`}>{copy.allCourses}</Link></li>
          <li><Link href={`${prefix}/golf-courses#son-gual`}>Son Gual</Link></li>
          <li><Link href={`${prefix}/golf-courses#alcanada`}>Alcanada</Link></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.about}</h3>
        <ul>
          <li><Link href={`${prefix}/about`}>{copy.about}</Link></li>
          <li><a href="https://www.instagram.com/mrmallorcagolf" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="mailto:andy@mrmallorcagolf.com">Email</a></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.newsletter}</h3>
        <ul>
          <li><Link href={`${prefix}/subscribe`}>{copy.newsletterLink}</Link></li>
        </ul>
      </div>

      <div className="footer__bottom">
        <p>
          {'\u00a9'} 2026 Mr Mallorca Golf {'\u00b7'} Andy Griffiths {'\u00b7'} PGA Advanced Professional {'\u00b7'}{' '}
          <Link href={getLegalPath('privacy-policy', locale)} className="footer__legal-link">
            {copy.privacy}
          </Link>{' '}
          {'\u00b7'}{' '}
          <Link href={getLegalPath('terms', locale)} className="footer__legal-link">
            {copy.terms}
          </Link>
        </p>
        <div className="footer__lang">
          {NAV_LOCALES.map((code) => (
            <Link key={code} href={getLanguageSwitchPath(pathname, code)}>
              {code === 'zh' ? '\u4e2d\u6587' : code.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}