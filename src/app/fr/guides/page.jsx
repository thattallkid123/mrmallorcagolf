import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Guide Golf Majorque — Avis sur les parcours & conseils',
  description: 'Guides honnêtes sur le golf à Majorque par un Professionnel PGA. Avis sur les parcours, green fees et planification de voyage — mis à jour pour 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/guides' },
}

const guides = [
  { slug: 'son-gual-review', badge: 'Avis parcours', badgeGold: true, title: "Son Gual Golf Majorque — Avis honnête d'un Professionnel PGA (2026)", intro: "Mon parcours le plus joué sur l'île. Le vent, les greens, la fin de parcours — et pourquoi Obama et Nadal reviennent toujours.", readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap requis' },
  { slug: 'alcanada-review', badge: 'Avis parcours', badgeGold: true, title: "Club de Golf Alcanada — Avis honnête d'un Professionnel PGA (2026)", intro: "Le parcours où j'emmène les gens quand je veux qu'ils rentrent avec une histoire. Le phare change tout.", readTime: '7 min', keywords: 'Côtier · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Avis parcours', badgeGold: true, title: "Golf Santa Ponsa 1, Majorque — Avis honnête d'un Professionnel PGA (2026)", intro: "L'un des parcours les plus longs d'Europe, une histoire sur le DP World Tour, et un parcours qui redonne vraiment confiance avec le driver.", readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Accès public' },
  { slug: 'best-golf-courses-mallorca', badge: 'Guide', title: 'Les meilleurs parcours de golf à Majorque 2026', intro: 'Le classement complet — des parcours de championnat aux trésors cachés.', readTime: '8 min', keywords: 'Tous niveaux · Tous budgets · Mis à jour 2026', comingSoon: true },
  { slug: 'is-mallorca-good-for-golf', badge: 'Guide', title: 'Majorque est-elle bonne pour le golf ?', intro: "Réponse honnête de quelqu'un qui joue ici chaque semaine.", readTime: '5 min', keywords: "Convient aux débutants · Toute l'année · Méditerranée", comingSoon: true },
  { slug: 'best-time-play-golf-mallorca', badge: 'Guide', title: 'Meilleure période pour jouer au golf à Majorque', intro: 'Mois par mois — météo, green fees, affluence et conditions.', readTime: '5 min', keywords: 'Saisonnier · Météo · Green fees', comingSoon: true },
  { slug: 'golf-cost-mallorca', badge: 'Guide', title: 'Combien coûte le golf à Majorque ?', intro: 'Green fees, location de clubs, buggies — le détail complet.', readTime: '6 min', keywords: 'Green fees · Budget · Tarifs 2026', comingSoon: true },
  { slug: 'golf-trip-planning-mallorca', badge: 'Guide', title: 'Comment planifier le voyage de golf parfait à Majorque', intro: 'Vols, transferts, hébergement et quels parcours réserver.', readTime: '7 min', keywords: 'Planification · Hôtels · Transferts', comingSoon: true },
  { slug: 'golf-club-hire-mallorca', badge: 'Guide', title: 'Location de clubs de golf à Majorque', intro: "Où louer, à quoi s'attendre et si ça vaut le coup.", readTime: '4 min', keywords: 'Location · Équipement · Club', comingSoon: true },
]

export default function GuidesIndex_FR() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/fr" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>FR</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>à</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Golf à Majorque.<br />Guides honnêtes.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Avis sur les parcours, planification de voyage et green fees — écrits par un Professionnel PGA qui joue ici chaque semaine.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Mis à jour 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Avis de première main</span>
            <span className="page-hero__tag">Professionnel PGA</span>
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
              <Link key={g.slug} href={`/fr/guides/${g.slug}`} className="reveal"
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
          <p className="eyebrow eyebrow--gold">Prêt à jouer ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Un tour privé sur l'un de ces parcours, avec un Professionnel PGA à vos côtés.</h2>
          <p>Dites-moi vos dates et ce que vous recherchez. Je vous réponds personnellement sous 24 heures.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/fr/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Voir les expériences →</Link>
          <Link href="/fr/contact" className="btn btn--outline-white">Prendre contact</Link>
        </div>
      </section>
    </PageLayout>
  )
}
