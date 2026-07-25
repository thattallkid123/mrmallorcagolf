import Link from 'next/link'
import Image from 'next/image'
import { NAV_LOCALES, getLegalPath, hasLocaleRoute, buildLocalePath } from '../lib/site'
import ReviewBadge from './ReviewBadge'

const FOOTER_COPY = {
  en: {
    tagline: 'Mallorca golf trip planning with Andy Griffiths. Local course judgment, itinerary logic, and premium add-ons when they help.',
    toolsHeading: "Planning Tools",
    toolCourseSelector: "Find your Mallorca course",
    toolGreenFees: "Compare all 24 courses",
    toolDayBuilder: "Golf day builder",
    experiences: 'Services',
    itinerary: 'Plan Your Trip',
    pwap: 'Play With A Pro',
    day: 'What Play With A Pro Looks Like',
    guide: 'Golf Guides',
    guideArticles: 'Planning Articles',
    about: 'About',
    allCourses: 'All Courses',
    enquire: null,
    newsletter: null,
    newsletterLink: null,
    newsletterHref: null,
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    professional: 'PGA Advanced Professional',
  },
  de: {
    tagline: 'Golftage auf Mallorca mit Andy Griffiths. Lokale Einschätzung, aufmerksame Begleitung, alles arrangiert.',
    toolsHeading: "Planungstools",
    toolCourseSelector: "Passenden Platz finden",
    toolGreenFees: "Alle 24 Plätze vergleichen",
    toolDayBuilder: "Golftag planen",
    experiences: 'Erlebnisse',
    pwap: 'Mit Profi spielen',
    day: 'Wie Play With A Pro Aussieht',
    guide: 'Golfführer',
    about: 'Über Andy',
    allCourses: 'Alle Plätze',
    enquire: 'Anfragen',
    newsletter: null,
    newsletterLink: null,
    newsletterHref: null,
    privacy: 'Datenschutz',
    terms: 'AGB',
  },
  es: {
    tagline: 'Días de golf en Mallorca con Andy Griffiths. Criterio local, atención personal y todo bien organizado.',
    toolsHeading: "Herramientas",
    toolCourseSelector: "Encuentra tu campo",
    toolGreenFees: "Compara los 24 campos",
    toolDayBuilder: "Planificador de jornada",
    experiences: 'Experiencias',
    pwap: 'Jugar con un Pro',
    day: 'Cómo Es Jugar Con Un Pro',
    guide: 'Guía de Golf',
    about: 'Sobre Andy',
    allCourses: 'Todos los campos',
    enquire: 'Contacto',
    newsletter: 'Newsletter',
    newsletterLink: 'Suscribirse',
    newsletterHref: '/tools/course-selector',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
  fr: {
    tagline: 'Journées de golf à Majorque avec Andy Griffiths. Regard local, présence attentive et tout bien organisé.',
    toolsHeading: "Outils de planification",
    toolCourseSelector: "Trouvez votre parcours",
    toolGreenFees: "Comparez les 24 parcours",
    toolDayBuilder: "Organisateur de journée",
    experiences: 'Expériences',
    pwap: 'Jouer avec un Pro',
    day: 'Ce Que C\'Est de Jouer Avec Un Pro',
    guide: 'Guide Golf',
    about: 'À propos',
    allCourses: 'Tous les parcours',
    enquire: 'Contact',
    newsletter: 'Newsletter',
    newsletterLink: "S'abonner",
    newsletterHref: '/tools/course-selector',
    privacy: 'Confidentialité',
    terms: 'Conditions',
  },
  nl: {
    tagline: 'Golfdagen op Mallorca met Andy Griffiths. Lokale kennis, rustige begeleiding en alles geregeld.',
    toolsHeading: "Planningstools",
    toolCourseSelector: "Vind uw baan",
    toolGreenFees: "Vergelijk alle 24 banen",
    toolDayBuilder: "Golfdag samenstellen",
    experiences: 'Ervaringen',
    pwap: 'Spelen met een Pro',
    day: 'Hoe Spelen Met Een Pro Eruitziet',
    guide: 'Golfgids',
    about: 'Over Andy',
    allCourses: 'Alle banen',
    enquire: 'Contact',
    newsletter: 'Newsletter',
    newsletterLink: 'Inschrijven',
    newsletterHref: '/tools/course-selector',
    privacy: 'Privacybeleid',
    terms: 'Voorwaarden',
  },
  sv: {
    tagline: 'Golfdagar på Mallorca med Andy Griffiths. Lokal känsla, trygg värdskap och allt ordnat.',
    toolsHeading: "Planeringsverktyg",
    toolCourseSelector: "Hitta din bana",
    toolGreenFees: "Jämför alla 24 banor",
    toolDayBuilder: "Planera golfdagen",
    experiences: 'Upplevelser',
    pwap: 'Spela med ett proffs',
    day: 'Så Här Är Det Att Spela Med Ett Proffs',
    guide: 'Golfguide',
    about: 'Om Andy',
    allCourses: 'Alla banor',
    enquire: 'Kontakt',
    newsletter: 'Newsletter',
    newsletterLink: 'Prenumerera',
    newsletterHref: '/tools/course-selector',
    privacy: 'Integritet',
    terms: 'Villkor',
  },
  zh: {
    tagline: '与 Andy Griffiths 在马略卡体验高尔夫日程。熟悉本地，安排周到，全程轻松从容。',
    toolsHeading: "规划工具",
    toolCourseSelector: "找到适合的球场",
    toolGreenFees: "比较全部 24 座球场",
    toolDayBuilder: "规划高尔夫行程",
    experiences: '体验',
    pwap: '与职业球手同场',
    day: '与职业球手同场的体验',
    guide: '高尔夫指南',
    about: '关于 Andy',
    allCourses: '全部球场',
    enquire: '联系',
    newsletter: '通讯',
    newsletterLink: '订阅',
    newsletterHref: '/tools/course-selector',
    privacy: '隐私政策',
    terms: '条款',
    professional: '英国职业高尔夫协会高级职业教练',
  },
}

function getLangFromProp(lang) {
  return lang && FOOTER_COPY[lang] ? lang : 'en'
}

function getPrefix(locale) {
  return locale === 'en' ? '' : `/${locale}`
}

function getADayPath(locale) {
  return locale === 'en' ? '/guides/play-with-a-pro-explained' : `/${locale}/play-with-a-pro`
}

// Tools are English-only except course-selector (en/de/es/fr/nl/sv). Link to the
// localized route when it exists, otherwise fall back to the English tool path so
// non-English footers never point at a 404.
function toolHref(basePath, locale) {
  return hasLocaleRoute(basePath, locale) ? buildLocalePath(basePath, locale) : basePath
}

export default function Footer({ lang }) {
  const locale = getLangFromProp(lang)
  const copy = FOOTER_COPY[locale]
  const prefix = getPrefix(locale)

  return (
    <footer className="footer">
      <div className="footer__brand">
        <Link href={prefix || '/'} prefetch={false} className="nav__logo footer__logo">
          <Image
            src="/logo-white-96.webp"
            alt="Mr Mallorca Golf"
            className="nav__logo-img"
            width={38}
            height={38}
            sizes="38px"
            quality={88}
          />
          <span className="sr-only">Mr Mallorca Golf home</span>
        </Link>
        <p>{copy.tagline}</p>
      </div>

      <div className="footer__col">
        <h3>{copy.experiences}</h3>
        <ul>
          {copy.itinerary ? <li><Link href={`${prefix}/plan-your-trip`} prefetch={false}>{copy.itinerary}</Link></li> : null}
          <li><Link href={`${prefix}/play-with-a-pro`} prefetch={false}>{copy.pwap}</Link></li>
          <li><Link href={getADayPath(locale)} prefetch={false}>{copy.day}</Link></li>
          {copy.enquire ? <li><Link href={`${prefix}/contact`} prefetch={false}>{copy.enquire}</Link></li> : null}
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.guide}</h3>
        <ul>
          <li><Link href={`${prefix}/guides`} prefetch={false}>{copy.guideArticles || copy.guide}</Link></li>
          <li><Link href={`${prefix}/golf-courses`} prefetch={false}>{copy.allCourses}</Link></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.toolsHeading}</h3>
        <ul>
          <li><Link href={toolHref('/tools/course-selector', locale)} prefetch={false}>{copy.toolCourseSelector}</Link></li>
          <li><Link href={toolHref('/tools/green-fees', locale)} prefetch={false}>{copy.toolGreenFees}</Link></li>
          <li><Link href={toolHref('/tools/golf-day-builder', locale)} prefetch={false}>{copy.toolDayBuilder}</Link></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{copy.about}</h3>
        <ul>
          <li><Link href={`${prefix}/about`} prefetch={false}>{copy.about}</Link></li>
          <li><a href="https://www.instagram.com/mrmallorcagolf" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="mailto:andy@mrmallorcagolf.com">Email</a></li>
        </ul>
      </div>

      {copy.newsletter ? (
        <div className="footer__col">
          <h3>{copy.newsletter}</h3>
          <ul>
            <li><Link href={copy.newsletterHref || `${prefix}/subscribe`} prefetch={false}>{copy.newsletterLink}</Link></li>
          </ul>
        </div>
      ) : null}

      <div className="footer__trust">
        <ReviewBadge variant="footer-block" />
      </div>

      <div className="footer__bottom">
        <p>
          {'\u00a9'} 2026 Mr Mallorca Golf {'\u00b7'} Andy Griffiths {'\u00b7'} {copy.professional} {'\u00b7'}{' '}
          <Link href={getLegalPath('privacy-policy', locale)} prefetch={false} className="footer__legal-link">
            {copy.privacy}
          </Link>{' '}
          {'\u00b7'}{' '}
          <Link href={getLegalPath('terms', locale)} prefetch={false} className="footer__legal-link">
            {copy.terms}
          </Link>
        </p>
        <div className="footer__lang">
          {NAV_LOCALES.map((code) => (
            <Link key={code} href={code === 'en' ? '/' : `/${code}`} prefetch={false}>
              {code === 'zh' ? '中文' : code.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
