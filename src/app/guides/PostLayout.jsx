import Link from 'next/link'
import { getGuidePath, isPublishedGuideSlug } from '../../lib/site'
import { getGuidesExperienceCopy } from '../../lib/experience-copy.js'

const SIDEBAR_COPY = {
  en: { experience: 'The Experience', h3: 'Play one of these courses with a PGA professional alongside you.', p: 'Private days on Son Gual, Alcanada, and beyond. Everything arranged. On-course coaching throughout.', seeExp: 'See the Experiences', contact: 'Get in Touch', moreGuides: 'More Guides', allGuides: 'All guides', home: 'Home', guidesLabel: 'Guides' },
  de: { experience: 'Das Erlebnis', h3: 'Spielen Sie einen dieser Plätze mit einem PGA Professional an Ihrer Seite.', p: 'Private Tage auf Son Gual, Alcanada und mehr. Alles arrangiert. Coaching auf dem Platz.', seeExp: 'Erlebnisse entdecken', contact: 'Kontakt aufnehmen', moreGuides: 'Weitere Ratgeber', allGuides: 'Alle Ratgeber', home: 'Startseite', guidesLabel: 'Ratgeber' },
  fr: { experience: "L'Expérience", h3: "Jouez l'un de ces parcours avec un professionnel PGA à vos côtés.", p: 'Journées privées sur Son Gual, Alcanada et ailleurs. Tout organisé. Coaching sur le parcours.', seeExp: 'Voir les expériences', contact: 'Prendre contact', moreGuides: 'Plus de guides', allGuides: 'Tous les guides', home: 'Accueil', guidesLabel: 'Guides' },
  es: { experience: 'La Experiencia', h3: 'Juegue uno de estos campos con un profesional PGA a su lado.', p: 'Días privados en Son Gual, Alcanada y más. Todo organizado. Coaching en el campo.', seeExp: 'Ver las experiencias', contact: 'Ponerse en contacto', moreGuides: 'Más guías', allGuides: 'Todas las guías', home: 'Inicio', guidesLabel: 'Guías' },
  zh: { experience: '体验项目', h3: '与 PGA 职业球手同场竞技，在这些球场享受私人球局。', p: '在 Son Gual、Alcanada 等球场享受私人高尔夫日。全程安排，球场实地指导。', seeExp: '了解体验项目', contact: '联系我们', moreGuides: '更多指南', allGuides: '所有指南', home: '首页', guidesLabel: '指南' },
  sv: { experience: 'Upplevelsen', h3: 'Spela en av dessa banor med ett PGA-proffs vid din sida.', p: 'Privata dagar på Son Gual, Alcanada och mer. Allt arrangerat. Coaching på banan.', seeExp: 'Se upplevelserna', contact: 'Hör av dig', moreGuides: 'Fler guider', allGuides: 'Alla guider', home: 'Hem', guidesLabel: 'Guider' },
  nl: { experience: 'De Ervaring', h3: 'Speel een van deze banen met een PGA professional aan uw zijde.', p: 'Privé dagen op Son Gual, Alcanada en meer. Alles geregeld. Coaching op de baan.', seeExp: 'Bekijk de ervaringen', contact: 'Neem contact op', moreGuides: 'Meer gidsen', allGuides: 'Alle gidsen', home: 'Home', guidesLabel: 'Gidsen' },
}

const UPDATED_LABELS = {
  en: 'Updated',
  de: 'Aktualisiert',
  fr: 'Mis à jour',
  es: 'Actualizado',
  zh: '更新',
  sv: 'Uppdaterad',
  nl: 'Bijgewerkt',
}

export default function PostLayout({ children, meta, lang }) {
  const l = lang || meta.lang || 'en'
  const c = {
    ...(SIDEBAR_COPY[l] || SIDEBAR_COPY.en),
    ...getGuidesExperienceCopy(l),
  }
  const updatedLabel = UPDATED_LABELS[l] || UPDATED_LABELS.en
  const pre = l === 'en' ? '' : `/${l}`
  const relatedGuides = meta.related.filter((guide) => isPublishedGuideSlug(guide.slug))

  return (
    <div className="post-wrap">
      <header className="post-header">
        <div className="post-header__inner">
          <p className="breadcrumb">
            <a href={pre || '/'} style={{ color: 'rgba(255,255,255,.58)', textDecoration: 'none' }}>{c.home}</a>
            {' '}&nbsp;/&nbsp;{' '}
            <a href={`${pre}/guides`} style={{ color: 'rgba(255,255,255,.58)', textDecoration: 'none' }}>{c.guidesLabel}</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{ color: 'var(--gold-light)' }}>{meta.badge}</span>
          </p>
          <div className="post-header__meta">
            <span className={`post-header__badge${meta.badgeGold ? ' post-header__badge--gold' : ''}`}>{meta.badge}</span>
            <span className="post-header__meta-item">{meta.readTime}</span>
            <span className="post-header__meta-item">{updatedLabel} {meta.updated}</span>
          </div>
          <h1 className="post-header__title">{meta.title}</h1>
          <p className="post-header__intro">{meta.intro}</p>
        </div>
      </header>

      <div className="post-body">
        <article className="post-article">{children}</article>

        <aside className="post-sidebar">
          <div className="post-sidebar__block">
            <p className="post-sidebar__label">{c.guidesLabel}</p>
            <h3>{c.guidesTitle}</h3>
            <p>{c.guidesBody}</p>
            <a href={`${pre}/play-with-a-pro`} className="btn btn--gold post-sidebar__cta">{c.guidesPrimaryCta} &rarr;</a>
            <a href={`${pre}/contact`} className="btn btn--dark post-sidebar__cta post-sidebar__cta--secondary">{c.guidesSecondaryCta}</a>
          </div>

          <div className="post-sidebar__block" style={{ marginTop: '2px' }}>
            <p className="post-sidebar__label">{c.moreGuides}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {relatedGuides.map((guide) => (
                <li key={guide.slug} style={{ borderBottom: '1px solid var(--linen)', padding: '10px 0' }}>
                  <a href={getGuidePath(guide.slug, l)} className="post-sidebar__list-link">{guide.title}</a>
                </li>
              ))}
              <li style={{ paddingTop: 12 }}>
                <a href={`${pre}/guides`} className="post-sidebar__all-link">{c.allGuides} &rarr;</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
