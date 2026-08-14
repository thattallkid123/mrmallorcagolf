import { getGuidePath, isPublishedGuideSlug } from '../../../lib/site'

const SIDEBAR_COPY = {
  en: { experience: 'Plan Your Trip', h3: 'Want this course in a Mallorca golf itinerary that actually makes sense?', guidesTitle: 'Want this course in a Mallorca golf itinerary that actually makes sense?', p: 'Start with the itinerary planner, then add a Play With A Pro day if it improves the trip.', guidesBody: 'Start with the itinerary planner, then add a Play With A Pro day if it improves the trip.', seeExp: 'Play With A Pro', guidesPrimaryCta: 'Play With A Pro', contact: 'Plan Your Trip', guidesSecondaryCta: 'Plan Your Trip', moreGuides: 'More Guides', allGuides: 'All guides', home: 'Home', guidesLabel: 'Guides' },
  de: { experience: 'Das Erlebnis', h3: 'Spielen Sie einen dieser Plätze mit einem PGA Professional an Ihrer Seite.', guidesTitle: 'Spielen Sie einen dieser Plätze mit einem PGA Professional an Ihrer Seite.', p: 'Golftage auf Son Gual, Alcanada und mehr. Alles arrangiert. Coaching auf dem Platz.', guidesBody: 'Golftage auf Son Gual, Alcanada und mehr. Alles arrangiert. Coaching auf dem Platz.', seeExp: 'Erlebnisse entdecken', guidesPrimaryCta: 'Erlebnisse entdecken', contact: 'Kontakt aufnehmen', guidesSecondaryCta: 'Kontakt aufnehmen', moreGuides: 'Weitere Ratgeber', allGuides: 'Alle Ratgeber', home: 'Startseite', guidesLabel: 'Ratgeber' },
  fr: { expérience: "L'Expérience", h3: "Jouez l'un de ces parcours avec un professionnel PGA à vos côtés.", guidesTitle: "Jouez l'un de ces parcours avec un professionnel PGA à vos côtés.", p: 'Journées de golf sur Son Gual, Alcanada et ailleurs. Tout organisé. Coaching sur le parcours.', guidesBody: 'Journées de golf sur Son Gual, Alcanada et ailleurs. Tout organisé. Coaching sur le parcours.', seeExp: 'Voir les expériences', guidesPrimaryCta: 'Voir les expériences', contact: 'Prendre contact', guidesSecondaryCta: 'Prendre contact', moreGuides: 'Plus de guides', allGuides: 'Tous les guides', home: 'Accueil', guidesLabel: 'Guides' },
  es: { experience: 'La Experiencia', h3: 'Juegue uno de estos campos con un profesional PGA a su lado.', guidesTitle: 'Juegue uno de estos campos con un profesional PGA a su lado.', p: 'Días de golf en Son Gual, Alcanada y más. Todo organizado. Coaching en el campo.', guidesBody: 'Días de golf en Son Gual, Alcanada y más. Todo organizado. Coaching en el campo.', seeExp: 'Ver las experiencias', guidesPrimaryCta: 'Ver las experiencias', contact: 'Ponerse en contacto', guidesSecondaryCta: 'Ponerse en contacto', moreGuides: 'Más guías', allGuides: 'Todas las guías', home: 'Inicio', guidesLabel: 'Guías' },
  zh: { experience: '体验项目', h3: '与 PGA 职业球手同场竞技，在这些球场享受高尔夫的一天。', guidesTitle: '与 PGA 职业球手同场竞技，在这些球场享受高尔夫的一天。', p: '在 Son Gual、Alcanada 等球场享受高尔夫的一天。全程安排，球场实地指导。', guidesBody: '在 Son Gual、Alcanada 等球场享受高尔夫的一天。全程安排，球场实地指导。', seeExp: '了解体验项目', guidesPrimaryCta: '了解体验项目', contact: '联系我们', guidesSecondaryCta: '联系我们', moreGuides: '更多指南', allGuides: '所有指南', home: '首页', guidesLabel: '指南' },
  sv: { experience: 'Upplevelsen', h3: 'Spela en av dessa banor med ett PGA-proffs vid din sida.', guidesTitle: 'Spela en av dessa banor med ett PGA-proffs vid din sida.', p: 'Golfdagar på Son Gual, Alcanada och mer. Allt arrangerat. Coaching på banan.', guidesBody: 'Golfdagar på Son Gual, Alcanada och mer. Allt arrangerat. Coaching på banan.', seeExp: 'Se upplevelserna', guidesPrimaryCta: 'Se upplevelserna', contact: 'Hör av dig', guidesSecondaryCta: 'Hör av dig', moreGuides: 'Fler guider', allGuides: 'Alla guider', home: 'Hem', guidesLabel: 'Guider' },
  nl: { experience: 'De Ervaring', h3: 'Speel een van deze banen met een PGA professional aan uw zijde.', guidesTitle: 'Speel een van deze banen met een PGA professional aan uw zijde.', p: 'Golfdagen op Son Gual, Alcanada en meer. Alles geregeld. Coaching op de baan.', guidesBody: 'Golfdagen op Son Gual, Alcanada en meer. Alles geregeld. Coaching op de baan.', seeExp: 'Bekijk de ervaringen', guidesPrimaryCta: 'Bekijk de ervaringen', contact: 'Neem contact op', guidesSecondaryCta: 'Neem contact op', moreGuides: 'Meer gidsen', allGuides: 'Alle gidsen', home: 'Home', guidesLabel: 'Gidsen' },
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

const SIDEBAR_PLANNING = {
  en: {
    title: 'Turn this course into a trip that works.',
    body: 'Send your dates, handicap, hotel area, and shortlist. I will tell you whether this course belongs in the trip, where it fits, and what should sit around it.',
    primary: 'Plan Your Trip',
    secondary: 'Play With A Pro',
  },
  de: {
    title: 'Machen Sie aus diesem Platz eine stimmige Reise.',
    body: 'Schicken Sie mir Ihre Daten, Ihr Handicap, Ihre Hotelregion und Ihre Shortlist. Ich sage Ihnen, wo dieser Platz sinnvoll hineinpasst.',
    primary: 'Reise planen',
    secondary: 'Play With A Pro',
  },
  es: {
    title: 'Convierta este campo en un viaje que tenga sentido.',
    body: 'Envíeme sus fechas, handicap, zona de hotel y lista corta. Le dire donde encaja este campo y que debería acompanar esa decisión.',
    primary: 'Planificar viaje',
    secondary: 'Play With A Pro',
  },
  fr: {
    title: 'Faites entrer ce parcours dans un vrai sejour coherent.',
    body: 'Envoyez-moi vos dates, votre index, la zone de votre hotel et votre short-list. Je vous dirai ou ce parcours a le plus de sens.',
    primary: 'Planifier le sejour',
    secondary: 'Play With A Pro',
  },
  nl: {
    title: 'Maak van deze baan een reis die klopt.',
    body: 'Stuur me uw data, handicap, hotelregio en shortlist. Ik laat u zien waar deze baan het best past.',
    primary: 'Reis plannen',
    secondary: 'Play With A Pro',
  },
  sv: {
    title: 'Gor den har banan till en resa som hanger ihop.',
    body: 'Skicka dina datum, ditt handicap, hotellomrade och din kortlista. Jag visar var den har banan passar in bäst.',
    primary: 'Planera resan',
    secondary: 'Play With A Pro',
  },
  zh: {
    title: '把这座球场纳入一个合理的行程里。',
    body: '把您的日期、差点、酒店区域和几个备选球场发给我。我会告诉您这座球场应该放在行程的哪里。',
    primary: '规划行程',
    secondary: 'Play With A Pro',
  },
}

export default function PostLayout({ children, meta, lang }) {
  const l = lang || meta.lang || 'en'
  const c = SIDEBAR_COPY[l] || SIDEBAR_COPY.en
  const planning = SIDEBAR_PLANNING[l] || SIDEBAR_PLANNING.en
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
            <p className="post-sidebar__label">{c.experience}</p>
            <h3>{planning.title}</h3>
            <p>{planning.body}</p>
            <a href={`${pre}/contact`} className="btn btn--gold post-sidebar__cta">{planning.primary}</a>
            <a href={`${pre}/play-with-a-pro`} className="btn btn--outline-white post-sidebar__cta post-sidebar__cta--secondary">{planning.secondary}</a>
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
