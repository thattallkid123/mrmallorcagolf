'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LANG_CONFIG = {
  en: {
    links: [
      { href: '/',               label: 'Home' },
      { href: '/about',          label: 'About' },
      { href: '/play-with-a-pro',label: 'Play with a Pro' },
      { href: '/coaching',       label: 'Coaching' },
      { href: '/golf-courses',   label: 'Golf Courses' },
      { href: '/guides', label: 'Guides' },
    ],
    cta: { href: '/contact', label: 'Enquire' },
  },
  de: {
    links: [
      { href: '/de',                  label: 'Start' },
      { href: '/de/about',            label: 'Über Andy' },
      { href: '/de/play-with-a-pro',  label: 'Mit Profi spielen' },
      { href: '/de/coaching',         label: 'Coaching' },
      { href: '/de/golf-courses',     label: 'Plätze' },
    ],
    cta: { href: '/de/contact', label: 'Anfragen' },
  },
  fr: {
    links: [
      { href: '/fr',                  label: 'Accueil' },
      { href: '/fr/about',            label: 'À propos' },
      { href: '/fr/play-with-a-pro',  label: 'Jouer avec un Pro' },
      { href: '/fr/coaching',         label: 'Coaching' },
      { href: '/fr/golf-courses',     label: 'Parcours' },
    ],
    cta: { href: '/fr/contact', label: 'Contact' },
  },
  es: {
    links: [
      { href: '/es',                  label: 'Inicio' },
      { href: '/es/about',            label: 'Sobre Andy' },
      { href: '/es/play-with-a-pro',  label: 'Jugar con un Pro' },
      { href: '/es/coaching',         label: 'Coaching' },
      { href: '/es/golf-courses',     label: 'Campos' },
    ],
    cta: { href: '/es/contact', label: 'Contacto' },
  },
  zh: {
    links: [
      { href: '/zh',                  label: '首页' },
      { href: '/zh/about',            label: '关于Andy' },
      { href: '/zh/play-with-a-pro',  label: '与职业球手同场' },
      { href: '/zh/coaching',         label: '球场指导' },
      { href: '/zh/golf-courses',     label: '球场指南' },
    ],
    cta: { href: '/zh/contact', label: '联系我们' },
  },
  sv: {
    links: [
      { href: '/sv',                  label: 'Hem' },
      { href: '/sv/about',            label: 'Om Andy' },
      { href: '/sv/play-with-a-pro',  label: 'Spela med ett Proffs' },
      { href: '/sv/coaching',         label: 'Coaching' },
      { href: '/sv/golf-courses',     label: 'Banor' },
    ],
    cta: { href: '/sv/contact', label: 'Kontakt' },
  },
  nl: {
    links: [
      { href: '/nl',                  label: 'Home' },
      { href: '/nl/about',            label: 'Over Andy' },
      { href: '/nl/play-with-a-pro',  label: 'Spelen met een Pro' },
      { href: '/nl/coaching',         label: 'Coaching' },
      { href: '/nl/golf-courses',     label: 'Banen' },
    ],
    cta: { href: '/nl/contact', label: 'Contact' },
  },
}

const LANG_SWITCHER = [
  { code: 'EN', href: '/',    label: 'EN'   },
  { code: 'DE', href: '/de',  label: 'DE'   },
  { code: 'FR', href: '/fr',  label: 'FR'   },
  { code: 'ES', href: '/es',  label: 'ES'   },
  { code: 'ZH', href: '/zh',  label: '中文'  },
  { code: 'SV', href: '/sv',  label: 'SV'   },
  { code: 'NL', href: '/nl',  label: 'NL'   },
]

function getLangFromPath(pathname) {
  if (!pathname) return 'en'
  const seg = pathname.split('/')[1]
  return ['de','fr','es','zh','sv','nl'].includes(seg) ? seg : 'en'
}

export default function Nav({ transparent = false, lang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const activeLang     = lang || getLangFromPath(pathname)
  const config         = LANG_CONFIG[activeLang] || LANG_CONFIG.en
  const activeLangCode = activeLang === 'en' ? 'EN' : activeLang.toUpperCase()

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  const navClass = ['nav', !transparent ? 'solid' : scrolled ? 'scrolled' : ''].filter(Boolean).join(' ')
  const isActive = (href) => pathname === href

  return (
    <>
      <nav className={navClass} id="nav">
        <Link href={activeLang === 'en' ? '/' : `/${activeLang}`} className="nav__logo">
          <div className="nav__logo-bar" />
          <span className="nav__logo-text">Mr Mallorca Golf</span>
        </Link>

        <ul className="nav__links">
          {config.links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={isActive(href) ? 'active' : ''}>{label}</Link>
            </li>
          ))}
          <li>
            <Link href={config.cta.href} className="nav__cta">{config.cta.label}</Link>
          </li>
          <li>
            <div className="nav__lang">
              {LANG_SWITCHER.map(({ code, href, label }, i) => (
                <span key={code}>
                  <Link href={href} className={activeLangCode === code ? 'active' : ''}>{label}</Link>
                  {i < LANG_SWITCHER.length - 1 && <span className="nav__lang-sep"> · </span>}
                </span>
              ))}
            </div>
          </li>
        </ul>

        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav__mobile${menuOpen ? ' open' : ''}`}>
        {config.links.map(({ href, label }) => (
          <Link key={href} href={href} className={isActive(href) ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href={config.cta.href} className="mob-cta" onClick={() => setMenuOpen(false)}>
          {config.cta.label} �
        </Link>
        <div className="mob-lang">
          {LANG_SWITCHER.map(({ code, href, label }) => (
            <Link key={code} href={href} className={activeLangCode === code ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

