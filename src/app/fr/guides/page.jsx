import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Guide Golf Majorque — Avis sur les Parcours & Conseils',
  description: 'Guides honnêtes sur le golf à Majorque par un PGA professionnel. Avis parcours, green fees et planification — mis à jour 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/guides' },
}

export default function GuidesIndex_FR() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/fr" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>FR</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Guides</span>
          </p>
          <h1>Golf à Majorque.<br />Guides Honnêtes.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>Avis sur les parcours, planification de voyage et green fees — rédigés par un PGA professionnel qui joue ici chaque semaine.</p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Mis à jour 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Avis de première main</span>
            <span className="page-hero__tag">Professionnel PGA</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>

        <Link href="/fr/guides/son-gual-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>Avis Parcours</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>6 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Son Gual Golf Majorque — Avis Honnête d&apos;un Professionnel PGA (2026)</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>Mon parcours de prédilection sur l&apos;île. Le vent, les greens, les derniers trous — et pourquoi Obama et Nadal continuent d&apos;y revenir.</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>Championship · Par 72 · €80–165 · Handicap requis</p>
        </Link>

        <div style={{marginTop:'3rem',padding:'2rem',background:'var(--cream)',border:'1px solid var(--linen)'}}>
          <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:'0.75rem'}}>D&apos;autres guides arrivent bientôt</p>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.8,margin:0}}>Je joue actuellement chaque parcours de l&apos;île. Chaque avis paraît après l&apos;avoir joué — évaluations honnêtes, pas de brochures. Les prochains guides paraîtront dans les prochaines semaines.</p>
        </div>

      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Prêt à jouer ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Une journée privée sur l&apos;un de ces parcours avec un professionnel PGA à vos côtés.</h2>
          <p>Dites-moi vos dates et ce que vous cherchez. Je reviens personnellement sous 24 heures.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/fr/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Voir les expériences →</Link>
          <Link href="/fr/contact" className="btn btn--outline-white">Prendre contact</Link>
        </div>
      </section>
    </PageLayout>
  )
}
