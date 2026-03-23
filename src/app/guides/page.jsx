import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golf Guide — Course Reviews, Tips & Advice',
  description: 'Honest guides to golf in Mallorca from a PGA professional based on the island. Course reviews, green fees, trip planning, and when to visit — all updated for 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/guides' },
}

const guides = [
  { slug: 'son-gual-review', badge: 'Course Review', badgeGold: true, title: "Son Gual Golf Mallorca — A PGA Professional's Honest Review (2026)", intro: "My most-played course on the island. The wind, the greens, the closing stretch — and why Obama and Nadal both keep coming back.", readTime: '7 min read', keywords: 'Championship · Par 72 · €80–165 · Handicap required' },
  { slug: 'alcanada-review', badge: 'Course Review', badgeGold: true, title: "Club de Golf Alcanada — A PGA Professional's Honest Review (2026)", intro: "The course I take people to when I want them to come home with a story. The lighthouse changes everything.", readTime: '7 min read', keywords: 'Coastal · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Course Review', badgeGold: true, title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional's Honest Review (2026)", intro: "One of Europe's longest courses, DP World Tour history, and a course that genuinely helps you rediscover your driver.", readTime: '6 min read', keywords: 'Championship · Par 72 · €77–126 · Public access' },
  
]

export default function GuidesIndex() {
  return (
    <PageLayout>
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Home</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Guides</span>
          </p>
          <h1>Mallorca Golf.<br />Honest Guides.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Course reviews, trip planning, green fees, and when to visit — written by a PGA professional who plays here every week.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Updated 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ First-Hand Reviews</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="reveal"
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
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Ready to play?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>A private round on one of these courses, with a PGA professional alongside you.</h2>
          <p>Tell me your dates and what you&apos;re looking for. I&apos;ll come back personally within 24 hours.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>See the Experiences &rarr;</Link>
          <Link href="/contact" className="btn btn--outline-white">Get in Touch</Link>
        </div>
      </section>
    </PageLayout>
  )
}
