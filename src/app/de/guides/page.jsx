import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golfführer — Platz-Bewertungen & Tipps',
  description: 'Ehrliche Golfratgeber für Mallorca von einem PGA Professional. Platz-Bewertungen, Greenfees und Reiseplanung — aktualisiert 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/guides' },
}

export default function GuidesIndex_DE() {
  return (
    <PageLayout lang="de">
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/de" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>DE</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Ratgeber</span>
          </p>
          <h1>Mallorca Golf.<br />Ehrliche Ratgeber.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>Platz-Bewertungen, Reiseplanung und Greenfees — geschrieben von einem PGA Professional, der hier jede Woche spielt.</p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Aktualisiert 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Bewertungen aus erster Hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>

        {/* COMING SOON — above the live guide */}
        <div style={{marginBottom:'2px',padding:'20px 24px',background:'var(--cream)',border:'1px solid var(--linen)',borderBottom:'none'}}>
          <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:'0.5rem'}}>Weitere Ratgeber folgen in Kürze</p>
          <p style={{fontSize:'0.9rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:0}}>Ich spiele mich derzeit durch jeden Golfplatz auf der Insel durch, sodass noch viele weitere Ratgeber folgen. Ehrliche Bewertungen, keine Broschüren. Demnächst: Übersicht der besten Plätze, Green-Fee-Informationen und Reiseplanungsführer.</p>
        </div>

        {/* SON GUAL — live */}
        <Link href="/de/guides/son-gual-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>Platz-Bewertung</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>6 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Son Gual Golf Mallorca — Ehrliche Bewertung eines PGA-Professionals (2026)</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>Mein meistgespielter Platz auf der Insel. Der Wind, die Greens, die Schlusslöcher — und warum Obama und Nadal immer wiederkommen.</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>Championship · Par 72 · €80–165 · Handicap erforderlich</p>
        </Link>

        {/* ALCANADA-REVIEW — live */}
        <Link href="/de/guides/alcanada-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>Platz-Bewertung</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>7 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Club de Golf Alcanada — Ehrliche Bewertung eines PGA-Professionals (2026)</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>Das Kurs, zu dem ich Leute bringe, wenn ich möchte, dass sie mit einer Geschichte nach Hause kommen. Der Leuchtturm verändert alles.</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>Küste · Par 72 · €115–220 · Rolex Challenge Tour Grand Final</p>
        </Link>
        {/* SANTA-PONSA-1-REVIEW — live */}
        <Link href="/de/guides/santa-ponsa-1-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>Platz-Bewertung</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>6 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Golf Santa Ponsa 1, Mallorca — Ehrliche Bewertung eines PGA-Professionals (2026)</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>Einer der längsten Plätze in Europa, DP World Tour-Geschichte und ein Platz, der Ihnen echtes Vertrauen mit dem Driver gibt.</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>Championship · Par 72 · €77–126 · Öffentlicher Zugang</p>
        </Link>

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
