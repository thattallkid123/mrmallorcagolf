'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LOCALES, getLocaleFromPath, getLanguageSwitchPath } from '../lib/site'

const LANG_CONFIG = {
  en: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/play-with-a-pro', label: 'Play With A Pro' },
      { href: '/plan-your-trip', label: 'Plan Your Trip' },
      { href: '/golf-courses', label: 'Golf Courses' },
      { href: '/guides', label: 'Guides' },
    ],
    cta: { href: '/contact', label: 'Enquire' },
  },
  de: {
    links: [
      { href: '/de', label: 'Start' },
      { href: '/de/about', label: 'Uber Andy' },
      { href: '/de/plan-your-trip', label: 'Reise planen' },
      { href: '/de/play-with-a-pro', label: 'Mit Andy spielen' },
      { href: '/de/golf-courses', label: 'Platze' },
      { href: '/de/guides', label: 'Ratgeber' },
    ],
    cta: { href: '/de/contact', label: 'Anfragen' },
  },
  fr: {
    links: [
      { href: '/fr', label: 'Accueil' },
      { href: '/fr/about', label: 'A propos' },
      { href: '/fr/plan-your-trip', label: 'Planifier' },
      { href: '/fr/play-with-a-pro', label: 'Jouer avec Andy' },
      { href: '/fr/golf-courses', label: 'Parcours' },
      { href: '/fr/guides', label: 'Guides' },
    ],
    cta: { href: '/fr/contact', label: 'Contact' },
  },
  es: {
    links: [
      { href: '/es', label: 'Inicio' },
      { href: '/es/about', label: 'Sobre Andy' },
      { href: '/es/plan-your-trip', label: 'Planifica tu viaje' },
      { href: '/es/play-with-a-pro', label: 'Jugar con Andy' },
      { href: '/es/golf-courses', label: 'Campos' },
      { href: '/es/guides', label: 'Guias' },
    ],
    cta: { href: '/es/contact', label: 'Contacto' },
  },
  nl: {
    links: [
      { href: '/nl', label: 'Home' },
      { href: '/nl/about', label: 'Over Andy' },
      { href: '/nl/plan-your-trip', label: 'Reis plannen' },
      { href: '/nl/play-with-a-pro', label: 'Spelen met Andy' },
      { href: '/nl/golf-courses', label: 'Banen' },
      { href: '/nl/guides', label: 'Gidsen' },
    ],
    cta: { href: '/nl/contact', label: 'Contact' },
  },
  sv: {
    links: [
      { href: '/sv', label: 'Hem' },
      { href: '/sv/about', label: 'Om Andy' },
      { href: '/sv/plan-your-trip', label: 'Planera resan' },
      { href: '/sv/play-with-a-pro', label: 'Spela med Andy' },
      { href: '/sv/golf-courses', label: 'Banor' },
      { href: '/sv/guides', label: 'Guider' },
    ],
    cta: { href: '/sv/contact', label: 'Kontakt' },
  },
  zh: {
    links: [
      { href: '/zh', label: 'Home' },
      { href: '/zh/about', label: 'About Andy' },
      { href: '/zh/plan-your-trip', label: 'Plan Trip' },
      { href: '/zh/play-with-a-pro', label: 'Play With Andy' },
      { href: '/zh/golf-courses', label: 'Courses' },
      { href: '/zh/guides', label: 'Guides' },
    ],
    cta: { href: '/zh/contact', label: 'Contact' },
  },
}

const LANG_CODES = NAV_LOCALES.map((locale) => ({
  code: locale === 'en' ? 'EN' : locale.toUpperCase(),
  locale,
  label: locale === 'zh' ? '中文' : locale.toUpperCase(),
}))

export default function Nav({ transparent = false, lang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const resolvedPathname = pathname || '/'
  const activeLang = lang || getLocaleFromPath(resolvedPathname)
  const config = LANG_CONFIG[activeLang] || LANG_CONFIG.en
  const activeLangCode = activeLang === 'en' ? 'EN' : activeLang.toUpperCase()

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  const navClass = ['nav', !transparent ? 'solid' : scrolled ? 'scrolled' : ''].filter(Boolean).join(' ')
  const isActive = (href) => resolvedPathname === href
  const logoSrc = (!transparent || scrolled) ? '/logo-dark-green-96.webp' : '/logo-white-96.webp'

  return (
    <>
      <nav className={navClass} id="nav">
        <Link href={activeLang === 'en' ? '/' : `/${activeLang}`} prefetch={false} className="nav__logo">
          <Image
            src={logoSrc}
            alt="Mr Mallorca Golf"
            className="nav__logo-img"
            width={38}
            height={38}
            sizes="38px"
            quality={88}
          />
          <span className="sr-only">Mr Mallorca Golf home</span>
        </Link>

        <ul className="nav__links">
          {config.links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} prefetch={false} className={isActive(href) ? 'active' : ''}>{label}</Link>
            </li>
          ))}
          <li>
            <Link href={config.cta.href} prefetch={false} className="nav__cta"><span>{config.cta.label}</span></Link>
          </li>
          <li>
            <div className="nav__lang">
              {LANG_CODES.map(({ code, locale, label }, i) => (
                <span key={code}>
                  <Link href={getLanguageSwitchPath(resolvedPathname, locale)} prefetch={false} className={activeLangCode === code ? 'active' : ''}>{label}</Link>
                  {i < LANG_CODES.length - 1 && <span className="nav__lang-sep"> · </span>}
                </span>
              ))}
            </div>
          </li>
        </ul>

        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav__mobile${menuOpen ? ' open' : ''}`}>
        {config.links.map(({ href, label }) => (
          <Link key={href} href={href} prefetch={false} className={isActive(href) ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href={config.cta.href} prefetch={false} className="mob-cta" onClick={() => setMenuOpen(false)}>
          {config.cta.label} {'->'}
        </Link>
        <div className="mob-lang">
          {LANG_CODES.map(({ code, locale, label }) => (
            <Link key={code} href={getLanguageSwitchPath(resolvedPathname, locale)} prefetch={false} className={activeLangCode === code ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
