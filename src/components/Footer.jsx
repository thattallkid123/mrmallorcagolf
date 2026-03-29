'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const FOOTER_COPY = {
  en: { tagline: 'Private golf experiences in Mallorca with a PGA Advanced Professional. On-course coaching, everything arranged.', experiences: 'Experiences', pwap: 'Play with a Pro', guide: 'Golf Guide', about: 'About', allCourses: 'All Courses', enquire: 'Enquire', coaching: 'On-Course Coaching', privacy: 'Privacy Policy', terms: 'Terms & Conditions' },
  de: { tagline: 'Private Golferlebnisse auf Mallorca mit einem PGA Advanced Professional. Coaching auf dem Platz, alles arrangiert.', experiences: 'Erlebnisse', pwap: 'Mit Profi spielen', guide: 'Golfführer', about: 'Über Andy', allCourses: 'Alle Plätze', enquire: 'Anfragen', coaching: 'Coaching', privacy: 'Datenschutz', terms: 'AGB' },
  fr: { tagline: 'Expériences golf privées à Majorque avec un PGA Advanced Professional. Coaching sur parcours, tout organisé.', experiences: 'Expériences', pwap: 'Jouer avec un Pro', guide: 'Guide Golf', about: 'À propos', allCourses: 'Tous les parcours', enquire: 'Contact', coaching: 'Coaching', privacy: 'Confidentialité', terms: 'Conditions' },
  es: { tagline: 'Experiencias de golf privadas en Mallorca con un PGA Advanced Professional. Coaching en campo, todo organizado.', experiences: 'Experiencias', pwap: 'Jugar con un Pro', guide: 'Guía de Golf', about: 'Sobre Andy', allCourses: 'Todos los campos', enquire: 'Contacto', coaching: 'Coaching', privacy: 'Privacidad', terms: 'Términos' },
  zh: { tagline: '马略卡岛顶级私人高尔夫体验，由PGA高级职业教练全程陪同。球场实地指导，全程安排。', experiences: '体验项目', pwap: '与职业球手同场', guide: '高尔夫指南', about: '关于Andy', allCourses: '全部球场', enquire: '联系我们', coaching: '球场指导', privacy: '隐私政策', terms: '条款' },
  sv: { tagline: 'Privata golfupplevelser på Mallorca med en PGA Advanced Professional. Coaching på banan, allt ordnat.', experiences: 'Upplevelser', pwap: 'Spela med ett Proffs', guide: 'Golfguide', about: 'Om Andy', allCourses: 'Alla banor', enquire: 'Kontakt', coaching: 'Coaching', privacy: 'Integritet', terms: 'Villkor' },
  nl: { tagline: 'Privégolfervaringen op Mallorca met een PGA Advanced Professional. Coaching op de baan, alles geregeld.', experiences: 'Ervaringen', pwap: 'Spelen met een Pro', guide: 'Golfgids', about: 'Over Andy', allCourses: 'Alle banen', enquire: 'Contact', coaching: 'Coaching', privacy: 'Privacybeleid', terms: 'Voorwaarden' },
}

function getLangFromProp(lang) {
  return lang && FOOTER_COPY[lang] ? lang : 'en'
}

const LANG_PREFIXES = ['de', 'es', 'fr', 'zh', 'sv', 'nl']

function getBasePath(pathname) {
  for (const lp of LANG_PREFIXES) {
    if (pathname === `/${lp}`) return '/'
    if (pathname.startsWith(`/${lp}/`)) return pathname.slice(lp.length + 1)
  }
  return pathname
}

export default function Footer({ lang }) {
  const pathname = usePathname()
  const basePath = getBasePath(pathname)
  const l   = getLangFromProp(lang)
  const c   = FOOTER_COPY[l]
  const pre = l === 'en' ? '' : `/${l}`

  function langHref(code) {
    const p = code === 'en' ? '' : `/${code}`
    return basePath === '/' ? (p || '/') : `${p}${basePath}`
  }

  return (
    <footer className="footer">
      <div className="footer__brand">
        <Link href={pre || '/'} className="nav__logo" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
          <div className="nav__logo-bar" />
          <span className="nav__logo-text">Mr Mallorca Golf</span>
        </Link>
        <p>{c.tagline}</p>
      </div>

      <div className="footer__col">
        <h3>{c.experiences}</h3>
        <ul>
          <li><Link href={`${pre}/play-with-a-pro`}>{c.pwap}</Link></li>
          <li><Link href={`${pre}/coaching`}>{c.coaching}</Link></li>
          <li><Link href={`${pre}/contact`}>{c.enquire}</Link></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{c.guide}</h3>
        <ul>
          <li><Link href={`${pre}/golf-courses`}>{c.allCourses}</Link></li>
          <li><Link href={`${pre}/golf-courses#son-gual`}>Son Gual</Link></li>
          <li><Link href={`${pre}/golf-courses#alcanada`}>Alcanada</Link></li>
        </ul>
      </div>

      <div className="footer__col">
        <h3>{c.about}</h3>
        <ul>
          <li><Link href={`${pre}/about`}>{c.about}</Link></li>
          <li><a href="https://www.instagram.com/mrmallorcagolf" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.youtube.com/@mrmallorcagolf" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href="mailto:andy@mrmallorcagolf.com">Email</a></li>
        </ul>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Mr Mallorca Golf · Andy Griffiths · PGA Advanced Professional · <Link href={`${pre}/privacy-policy`} style={{color:'inherit',textDecoration:'underline',textUnderlineOffset:'3px'}}>{c.privacy}</Link> · <Link href={`${pre}/terms`} style={{color:'inherit',textDecoration:'underline',textUnderlineOffset:'3px'}}>{c.terms}</Link></p>
        <div className="footer__lang">
          <Link href={langHref('en')}>EN</Link>
          <Link href={langHref('es')}>ES</Link>
          <Link href={langHref('de')}>DE</Link>
          <Link href={langHref('fr')}>FR</Link>
          <Link href={langHref('nl')}>NL</Link>
          <Link href={langHref('sv')}>SV</Link>
          <Link href={langHref('zh')}>中文</Link>
        </div>
      </div>
    </footer>
  )
}
