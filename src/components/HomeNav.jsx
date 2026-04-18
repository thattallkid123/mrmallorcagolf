import Image from 'next/image'
import { NAV_LOCALES } from '../lib/site'

const LANG_CONFIG = {
  en: {
    homeHref: '/',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/play-with-a-pro', label: 'The Day' },
      { href: '/golf-courses', label: 'Golf Courses' },
      { href: '/guides', label: 'Guides' },
    ],
    cta: { href: '/contact', label: 'Enquire' },
  },
  de: {
    homeHref: '/de',
    links: [
      { href: '/de', label: 'Start' },
      { href: '/de/about', label: 'Uber Andy' },
      { href: '/de/play-with-a-pro', label: 'Der Tag' },
      { href: '/de/golf-courses', label: 'Platze' },
      { href: '/de/guides', label: 'Ratgeber' },
    ],
    cta: { href: '/de/contact', label: 'Anfragen' },
  },
  fr: {
    homeHref: '/fr',
    links: [
      { href: '/fr', label: 'Accueil' },
      { href: '/fr/about', label: 'A propos' },
      { href: '/fr/play-with-a-pro', label: 'La Journee' },
      { href: '/fr/golf-courses', label: 'Parcours' },
      { href: '/fr/guides', label: 'Guides' },
    ],
    cta: { href: '/fr/contact', label: 'Contact' },
  },
  es: {
    homeHref: '/es',
    links: [
      { href: '/es', label: 'Inicio' },
      { href: '/es/about', label: 'Sobre Andy' },
      { href: '/es/play-with-a-pro', label: 'La Jornada' },
      { href: '/es/golf-courses', label: 'Campos' },
      { href: '/es/guides', label: 'Guias' },
    ],
    cta: { href: '/es/contact', label: 'Contacto' },
  },
  zh: {
    homeHref: '/zh',
    links: [
      { href: '/zh', label: 'Home' },
      { href: '/zh/about', label: 'About Andy' },
      { href: '/zh/play-with-a-pro', label: 'Play With A Pro' },
      { href: '/zh/golf-courses', label: 'Courses' },
      { href: '/zh/guides', label: 'Guides' },
    ],
    cta: { href: '/zh/contact', label: 'Contact' },
  },
  sv: {
    homeHref: '/sv',
    links: [
      { href: '/sv', label: 'Hem' },
      { href: '/sv/about', label: 'Om Andy' },
      { href: '/sv/play-with-a-pro', label: 'Dagen' },
      { href: '/sv/golf-courses', label: 'Banor' },
      { href: '/sv/guides', label: 'Guider' },
    ],
    cta: { href: '/sv/contact', label: 'Kontakt' },
  },
  nl: {
    homeHref: '/nl',
    links: [
      { href: '/nl', label: 'Home' },
      { href: '/nl/about', label: 'Over Andy' },
      { href: '/nl/play-with-a-pro', label: 'De Dag' },
      { href: '/nl/golf-courses', label: 'Banen' },
      { href: '/nl/guides', label: 'Gidsen' },
    ],
    cta: { href: '/nl/contact', label: 'Contact' },
  },
}

function getLocalePath(basePath, locale) {
  if (locale === 'en') {
    return basePath
  }

  return basePath === '/' ? `/${locale}` : `/${locale}${basePath}`
}

export default function HomeNav({ lang = 'en', solid = false, basePath = '/' }) {
  const config = LANG_CONFIG[lang] || LANG_CONFIG.en
  const navClassName = solid ? 'nav solid' : 'nav'

  return (
    <nav className={navClassName} id="nav">
      <a href={config.homeHref} className="nav__logo">
        <Image
          src={solid ? '/logo-dark-green-96.webp' : '/logo-white-96.webp'}
          alt="Mr Mallorca Golf"
          className="nav__logo-img"
          width={38}
          height={38}
          sizes="38px"
          priority
        />
      </a>

      <ul className="nav__links">
        {config.links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <li>
          <a href={config.cta.href} className="nav__cta">
            <span>{config.cta.label}</span>
          </a>
        </li>
        <li>
          <div className="nav__lang">
            {NAV_LOCALES.map((locale, index) => (
              <span key={locale}>
                <a href={getLocalePath(basePath, locale)} className={lang === locale ? 'active' : ''}>
                  {locale === 'zh' ? 'ZH' : locale.toUpperCase()}
                </a>
                {index < NAV_LOCALES.length - 1 && <span className="nav__lang-sep"> / </span>}
              </span>
            ))}
          </div>
        </li>
      </ul>

      <details className="home-nav__details">
        <summary className="nav__hamburger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </summary>
        <div className="nav__mobile">
          {config.links.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href={config.cta.href} className="mob-cta">
            {config.cta.label}
          </a>
          <div className="mob-lang">
            {NAV_LOCALES.map((locale) => (
              <a key={locale} href={getLocalePath(basePath, locale)} className={lang === locale ? 'active' : ''}>
                {locale === 'zh' ? 'ZH' : locale.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </details>
    </nav>
  )
}
