'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LOCALES, getLocaleFromPath, getLanguageSwitchPath } from '../lib/site'

const LANG_NAMES = { en: 'English', es: 'Español', de: 'Deutsch', fr: 'Français', nl: 'Nederlands', sv: 'Svenska', zh: '中文' }

export default function FooterLanguage({ lang }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || '/'
  const active = lang || getLocaleFromPath(pathname)
  const code = active === 'zh' ? '中文' : active.toUpperCase()

  return (
    <div className="footer__lang">
      <button
        type="button"
        className="footer__lang-btn"
        aria-expanded={open}
        aria-controls="footer-language-list"
        aria-label={`Language: ${LANG_NAMES[active] || code}`}
        onClick={() => setOpen((value) => !value)}
      >
        {code}
        <span className="nav__lang-chevron" aria-hidden="true" />
      </button>
      {open && (
        <ul className="footer__lang-list" id="footer-language-list">
          {NAV_LOCALES.filter((locale) => locale !== active).map((locale) => (
            <li key={locale}>
              <Link href={getLanguageSwitchPath(pathname, locale)} prefetch={false} lang={locale} hrefLang={locale} aria-label={`Switch language to ${LANG_NAMES[locale]}`}>
                {LANG_NAMES[locale]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
