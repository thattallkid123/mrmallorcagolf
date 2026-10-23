'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LOCALES, getLocaleFromPath, getLanguageSwitchPath } from '../lib/site'

const LANG_CONFIG = {
  en: {
    links: [
      { href: '/about', label: 'About' },
      { href: '/play-with-a-pro', label: 'Play With A Pro' },
      { href: '/plan-your-trip', label: 'Plan Your Trip' },
      { href: '/golf-courses', label: 'Golf Courses' },
      { href: '/guides', label: 'Guides' },
      { href: '/tools', label: 'Tools' },
    ],
    cta: { href: '/contact', label: 'Enquire' },
  },
  de: {
    links: [
      { href: '/de/about', label: '\u00dcber Andy' },
      { href: '/de/plan-your-trip', label: 'Reise planen' },
      { href: '/de/play-with-a-pro', label: 'Mit Andy spielen' },
      { href: '/de/golf-courses', label: 'Pl\u00e4tze' },
      { href: '/de/guides', label: 'Ratgeber' },
      { href: '/de/tools', label: 'Werkzeuge' },
    ],
    cta: { href: '/de/contact', label: 'Anfragen' },
  },
  fr: {
    links: [
      { href: '/fr/about', label: '\u00c0 propos' },
      { href: '/fr/plan-your-trip', label: 'Planifier' },
      { href: '/fr/play-with-a-pro', label: 'Jouer avec Andy' },
      { href: '/fr/golf-courses', label: 'Parcours' },
      { href: '/fr/guides', label: 'Guides' },
      { href: '/fr/tools', label: 'Outils' },
    ],
    cta: { href: '/fr/contact', label: 'Contact' },
  },
  es: {
    links: [
      { href: '/es/about', label: 'Sobre Andy' },
      { href: '/es/plan-your-trip', label: 'Planifica tu viaje' },
      { href: '/es/play-with-a-pro', label: 'Jugar con Andy' },
      { href: '/es/golf-courses', label: 'Campos' },
      { href: '/es/guides', label: 'Gu\u00edas' },
      { href: '/es/tools', label: 'Herramientas' },
    ],
    cta: { href: '/es/contact', label: 'Contacto' },
  },
  nl: {
    links: [
      { href: '/nl/about', label: 'Over Andy' },
      { href: '/nl/plan-your-trip', label: 'Reis plannen' },
      { href: '/nl/play-with-a-pro', label: 'Spelen met Andy' },
      { href: '/nl/golf-courses', label: 'Banen' },
      { href: '/nl/guides', label: 'Gidsen' },
      { href: '/nl/tools', label: 'Gereedschappen' },
    ],
    cta: { href: '/nl/contact', label: 'Contact' },
  },
  sv: {
    links: [
      { href: '/sv/about', label: 'Om Andy' },
      { href: '/sv/plan-your-trip', label: 'Planera resan' },
      { href: '/sv/play-with-a-pro', label: 'Spela med Andy' },
      { href: '/sv/golf-courses', label: 'Banor' },
      { href: '/sv/guides', label: 'Guider' },
      { href: '/sv/tools', label: 'Verktyg' },
    ],
    cta: { href: '/sv/contact', label: 'Kontakt' },
  },
  zh: {
    links: [
      { href: '/zh/about', label: '关于 Andy' },
      { href: '/zh/plan-your-trip', label: '规划行程' },
      { href: '/zh/play-with-a-pro', label: '与 Andy 同场' },
      { href: '/zh/golf-courses', label: '球场' },
      { href: '/zh/guides', label: '指南' },
      { href: '/zh/tools', label: '工具' },
    ],
    cta: { href: '/zh/contact', label: '联系' },
  },
}

const LANG_NAMES = { en: 'English', es: 'Español', de: 'Deutsch', fr: 'Français', nl: 'Nederlands', sv: 'Svenska', zh: '中文' }

function getLangCodes(activeLang) {
  const locales = NAV_LOCALES.includes(activeLang)
    ? [activeLang, ...NAV_LOCALES.filter((locale) => locale !== activeLang)]
    : NAV_LOCALES

  return locales.map((locale) => ({
    code: locale === 'en' ? 'EN' : locale.toUpperCase(),
    locale,
    label: locale === 'zh' ? '中文' : locale.toUpperCase(),
    name: LANG_NAMES[locale],
  }))
}

export default function Nav({ transparent = false, lang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)
  const pathname = usePathname()

  const resolvedPathname = pathname || '/'
  const activeLang = lang || getLocaleFromPath(resolvedPathname)
  const config = LANG_CONFIG[activeLang] || LANG_CONFIG.en
  const activeLangCode = activeLang === 'en' ? 'EN' : activeLang.toUpperCase()
  const langCodes = getLangCodes(activeLang)

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        document.querySelector('.nav__hamburger')?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    if (!langOpen) return
    const close = (event) => {
      if (event.type === 'keydown') {
        if (event.key !== 'Escape') return
        langRef.current?.querySelector('.nav__lang-btn')?.focus()
      }
      if (event.type === 'mousedown' && langRef.current?.contains(event.target)) return
      setLangOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [langOpen])

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
            <div className="nav__lang" ref={langRef} onKeyDown={(event) => {
              if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
              event.preventDefault()
              if (!langOpen) { setLangOpen(true); return }
              const items = Array.from(langRef.current.querySelectorAll('.nav__lang-menu a'))
              const at = items.indexOf(document.activeElement)
              const next = event.key === 'ArrowDown' ? at + 1 : at - 1
              items[(next + items.length) % items.length]?.focus()
            }}>
              <button
                type="button"
                className="nav__lang-btn"
                aria-haspopup="true"
                aria-expanded={langOpen}
                aria-label={`Language: ${LANG_NAMES[activeLang] || activeLangCode}`}
                onClick={() => setLangOpen((open) => !open)}
              >
                {activeLangCode}
                <span className="nav__lang-chevron" aria-hidden="true" />
              </button>
              {langOpen && (
                <ul className="nav__lang-menu">
                  {langCodes.map(({ code, locale, name }) => (
                    <li key={code}>
                      <Link
                        href={getLanguageSwitchPath(resolvedPathname, locale)}
                        prefetch={false}
                        className={activeLangCode === code ? 'active' : ''}
                        aria-current={locale === activeLang ? 'true' : undefined}
                        hrefLang={locale}
                        onClick={() => setLangOpen(false)}
                      >
                        {name}
                        <span>{code}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>

        <Link href={config.cta.href} prefetch={false} className="nav__cta nav__cta--mobile"><span>{config.cta.label}</span></Link>

        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav__mobile${menuOpen ? ' open' : ''}`} id="mobile-navigation">
        {config.links.map(({ href, label }) => (
          <Link key={href} href={href} prefetch={false} className={isActive(href) ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href={config.cta.href} prefetch={false} className="mob-cta" onClick={() => setMenuOpen(false)}>
          {config.cta.label} {'->'}
        </Link>
        <div className="mob-lang">
          {langCodes.map(({ code, locale, label }) => (
            <Link
              key={code}
              href={getLanguageSwitchPath(resolvedPathname, locale)}
              prefetch={false}
              className={activeLangCode === code ? 'active' : ''}
              aria-label={locale === activeLang ? `Current language: ${label}` : `Switch language to ${label}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
