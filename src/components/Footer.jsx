'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ALL_LOCALES, getLanguageSwitchPath, getLegalPath } from '../lib/site'

const FOOTER_COPY = {
  en: { tagline: 'Private golf experiences in Mallorca with a PGA Advanced Professional. On-course coaching, everything arranged.', experiences: 'Experiences', pwap: 'Play with a Pro', guide: 'Golf Guide', about: 'About', allCourses: 'All Courses', enquire: 'Enquire', coaching: 'On-Course Coaching', privacy: 'Privacy Policy', terms: 'Terms & Conditions' },
  de: { tagline: 'Private Golferlebnisse auf Mallorca mit einem PGA Advanced Professional. Coaching auf dem Platz, alles arrangiert.', experiences: 'Erlebnisse', pwap: 'Mit Profi spielen', guide: 'Golfführer', about: 'Über Andy', allCourses: 'Alle Plätze', enquire: 'Anfragen', coaching: 'Coaching', privacy: 'Datenschutz', terms: 'AGB' },
  fr: { tagline: 'Expériences golf privées à Majorque avec un PGA Advanced Professional. Coaching sur parcours, tout organisé.', experiences: 'Expériences', pwap: 'Jouer avec un Pro', guide: 'Guide Golf', about: 'À propos', allCourses: 'Tous les parcours', enquire: 'Contact', coaching: 'Coaching', privacy: 'Confidentialité', terms: 'Conditions' },
  es: { tagline: 'Experiencias de golf privadas en Mallorca con un PGA Advanced Professional. Coaching en campo, todo organizado.', experiences: 'Experiencias', pwap: 'Jugar con un Pro', guide: 'Guía de Golf', about: 'Sobre Andy', allCourses: 'Todos los campos', enquire: 'Contacto', coaching: 'Coaching', privacy: 'Privacidad', terms: 'Términos' },
  zh: { tagline: '马略卡岛顶级私人高尔夫体验，由 PGA 高级职业教练全程陪同。球场实地指导，全程安排。', experiences: '体验项目', pwap: '与职业球手同场', guide: '高尔夫指南', about: '关于 Andy', allCourses: '全部球场', enquire: '联系我们', coaching: '球场指导', privacy: '隐私政策', terms: '条款' },
  sv: { tagline: 'Privata golfupplevelser på Mallorca med en PGA Advanced Professional. Coaching på banan, allt ordnat.', experiences: 'Upplevelser', pwap: 'Spela med ett Proffs', guide: 'Golfguide', about: 'Om Andy', allCourses: 'Alla banor', enquire: 'Kontakt', coaching: 'Coaching', privacy: 'Integritet', terms: 'Villkor' },
  nl: { tagline: 'Privégolfervaringen op Mallorca met een PGA Advanced Professional. Coaching op de baan, alles geregeld.', experiences: 'Ervaringen', pwap: 'Spelen met een Pro', guide: 'Golfgids', about: 'Over Andy', allCourses: 'Alle banen', enquire: 'Contact', coaching: 'Coaching', privacy: 'Privacybeleid', terms: 'Voorwaarden' },
}

function getLangFromProp(lang) {
  return lang && FOOTER_COPY[lang] ? lang : 'en'
}

export default function Footer({ lang }) {
  const pathname = usePathname()
  const l = getLangFromProp(lang)
  const c = FOOTER_COPY[l]
  const pre = l === 'en' ? '' : `/${l}`

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
        <p>© 2026 Mr Mallorca Golf · Andy Griffiths · PGA Advanced Professional · <Link href={getLegalPath('privacy-policy', l)} style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{c.privacy}</Link> · <Link href={getLegalPath('terms', l)} style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{c.terms}</Link></p>
        <div className="footer__lang">
          {ALL_LOCALES.map((code) => (
            <Link key={code} href={getLanguageSwitchPath(pathname, code)}>
              {code === 'zh' ? '中文' : code.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
