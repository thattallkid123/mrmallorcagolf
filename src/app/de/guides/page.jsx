import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golfführer — Platz-Bewertungen & Tipps',
  description: 'Ehrliche Golfratgeber für Mallorca von einem PGA Professional. Platz-Bewertungen, Greenfees und Reiseplanung — aktualisiert 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/guides' },
}

const guides = [
  { slug: 'son-gual-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Son Gual Golf Mallorca — Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Mein meistgespielter Platz auf der Insel. Der Wind, die Greens, die Schlusslöcher — und warum Obama und Nadal immer wiederkommen.', readTime: '7 Min.', keywords: 'Championship · Par 72 · €80–165 · Handicap erforderlich' },
  { slug: 'alcanada-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Club de Golf Alcanada — Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Der Platz, zu dem ich Leute bringe, wenn ich möchte, dass sie mit einer Geschichte nach Hause kommen. Der Leuchtturm verändert alles.', readTime: '7 Min.', keywords: 'Küste · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Einer der längsten Plätze in Europa, DP World Tour-Geschichte und ein Platz, der das Vertrauen mit dem Driver wirklich zurückgibt.', readTime: '6 Min.', keywords: 'Championship · Par 72 · €77–126 · Öffentlicher Zugang' },
  { slug: 'best-golf-courses-mallorca', badge: 'Ratgeber', title: 'Die besten Golfplätze auf Mallorca 2026', intro: 'Die vollständige Rangliste — von Championship-Plätzen bis zu versteckten Juwelen.', readTime: '8 Min.', keywords: 'Alle Level · Alle Budgets · Aktualisiert 2026', comingSoon: true },
  { slug: 'is-mallorca-good-for-golf', badge: 'Ratgeber', title: 'Ist Mallorca gut für Golf?', intro: 'Ehrliche Antwort von jemandem, der hier jede Woche spielt.', readTime: '5 Min.', keywords: 'Anfängerfreundlich · Ganzjährig · Mediterran', comingSoon: true },
  { slug: 'best-time-play-golf-mallorca', badge: 'Ratgeber', title: 'Beste Reisezeit für Golf auf Mallorca', intro: 'Monat für Monat — Wetter, Greenfees, Besucherströme und Platzbedingungen.', readTime: '5 Min.', keywords: 'Saisonal · Wetter · Greenfees', comingSoon: true },
  { slug: 'golf-cost-mallorca', badge: 'Ratgeber', title: 'Was kostet Golf auf Mallorca?', intro: 'Greenfees, Schlägermiete, Buggys — die vollständige Kostenübersicht.', readTime: '6 Min.', keywords: 'Greenfees · Budget · Preise 2026', comingSoon: true },
  { slug: 'golf-trip-planning-mallorca', badge: 'Ratgeber', title: 'Den perfekten Golfurlaub auf Mallorca planen', intro: 'Flüge, Transfers, Unterkünfte und welche Plätze man buchen sollte.', readTime: '7 Min.', keywords: 'Reiseplanung · Hotels · Transfers', comingSoon: true },
  { slug: 'golf-club-hire-mallorca', badge: 'Ratgeber', title: 'Schlägermiete auf Mallorca', intro: 'Wo man mietet, was man erwarten kann und ob es sich lohnt.', readTime: '4 Min.', keywords: 'Schlägermiete · Ausrüstung · Verleih', comingSoon: true },
]

export default function GuidesIndex_DE() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/de" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>DE</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>2026</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Mallorca Golf.<br />Ehrliche Ratgeber.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Platz-Bewertungen, Reiseplanung und Greenfees — geschrieben von einem PGA Professional, der hier jede Woche spielt.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Aktualisiert 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Bewertungen aus erster Hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {guides.filter(Boolean).map((g) => (
            g.comingSoon ? (
              <div key={g.slug} className="reveal"
                style={{borderBottom:'1px solid var(--linen)',padding:'32px 0',opacity:0.55,cursor:'default'}}>
                <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                  <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(45,74,62,.07)',color:'var(--taupe)',border:'1px solid var(--linen)',flexShrink:0,alignSelf:'center'}}>
                    {g.badge}
                  </span>
                  <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',alignSelf:'center'}}>
                    Coming Soon
                  </span>
                </div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                  {g.title}
                </h2>
                <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:0,maxWidth:640}}>
                  {g.intro}
                </p>
              </div>
            ) : (
              <Link key={g.slug} href={`/de/guides/${g.slug}`} className="reveal"
                style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
                <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                  <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:g.badgeGold?'rgba(184,151,60,.12)':'rgba(45,74,62,.07)',color:g.badgeGold?'var(--gold)':'var(--taupe)',border:`1px solid ${g.badgeGold?'rgba(184,151,60,.25)':'var(--linen)'}`,flexShrink:0,alignSelf:'center'}}>
                    {g.badge}
                  </span>
                  <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                    {g.readTime}
                  </span>
                </div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                  {g.title}
                </h2>
                <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                  {g.intro}
                </p>
                <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                  {g.keywords}
                </p>
              </Link>
            )
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Eine private Runde auf einem dieser Plätze — mit einem PGA Professional an Ihrer Seite.</h2>
          <p>Teilen Sie mir Ihre Daten und Wünsche mit. Ich melde mich persönlich innerhalb von 24 Stunden.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Erlebnisse entdecken →</Link>
          <Link href="/de/contact" className="btn btn--outline-white">Kontakt aufnehmen</Link>
        </div>
      </section>
    </PageLayout>
  )
}
