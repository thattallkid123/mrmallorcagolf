import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golfgids — Baanbeoordelingen & Tips',
  description: 'Eerlijke golfgidsen voor Mallorca door een PGA professional. Baanbeoordelingen, greenfees en reisplanning — bijgewerkt 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/guides' },
}

export default function GuidesIndex_NL() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/nl" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>NL</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Gidsen</span>
          </p>
          <h1>Mallorca Golf.<br />Eerlijke Gidsen.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>Baanbeoordelingen, reisplanning en greenfees — geschreven door een PGA professional die hier elke week speelt.</p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Bijgewerkt 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Beoordelingen uit eerste hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>

        <Link href="/nl/guides/son-gual-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>Baanrecensie</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>6 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Son Gual Golf Mallorca — Eerlijke Recensie van een PGA Professional (2026)</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>Mijn meest gespeelde baan op het eiland. De wind, de greens, de slotholes — en waarom Obama en Nadal blijven terugkomen.</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>Kampioenschap · Par 72 · €80–165 · Handicapcertificaat vereist</p>
        </Link>

        <div style={{marginTop:'3rem',padding:'2rem',background:'var(--cream)',border:'1px solid var(--linen)'}}>
          <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:'0.75rem'}}>Meer gidsen komen binnenkort</p>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.8,margin:0}}>Ik speel momenteel elke golfbaan op het eiland. Elke recensie verschijnt na het gespeeld te hebben — eerlijke beoordelingen, geen brochures. De volgende gidsen verschijnen in de komende weken.</p>
        </div>

      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Klaar om te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Een privéronde op een van deze banen met een PGA professional aan uw zijde.</h2>
          <p>Vertel me uw data en wat u zoekt. Ik reageer persoonlijk binnen 24 uur.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Bekijk de ervaringen →</Link>
          <Link href="/nl/contact" className="btn btn--outline-white">Neem contact op</Link>
        </div>
      </section>
    </PageLayout>
  )
}
