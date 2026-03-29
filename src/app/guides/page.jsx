import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golf Guide â€” Course Reviews, Tips & Advice',
  description: 'Honest guides to golf in Mallorca from a PGA professional based on the island. Course reviews, green fees, trip planning, and when to visit â€” all updated for 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/guides' },
}

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Course Review', badgeGold: true, title: "Son Gual Golf Mallorca â€” A PGA Professional's Honest Review (2026)", intro: "My most-played course on the island. The wind, the greens, the closing stretch â€” and why Obama and Nadal both keep coming back.", readTime: '7 min read', keywords: 'Championship Â· Par 72 Â· â‚¬80â€“165 Â· Handicap required' },
  { slug: 'alcanada-review', badge: 'Course Review', badgeGold: true, title: "Club de Golf Alcanada â€” A PGA Professional's Honest Review (2026)", intro: "The course I take people to when I want them to come home with a story. The lighthouse changes everything.", readTime: '7 min read', keywords: 'Coastal Â· Par 72 Â· â‚¬115â€“220 Â· Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Course Review', badgeGold: true, title: "Golf Santa Ponsa 1, Mallorca â€” A PGA Professional's Honest Review (2026)", intro: "One of Europe's longest courses, DP World Tour history, and a course that genuinely helps you rediscover your driver.", readTime: '6 min read', keywords: 'Championship Â· Par 72 Â· â‚¬77â€“126 Â· Public access' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'The Experience', badgeGold: false, title: 'A Day at Son Gual with a PGA Professional', intro: 'What actually happens when you spend a full day on Mallorca\'s finest course with a coach who plays it most weeks.', readTime: '5 min read', keywords: 'Son Gual Â· Play with a Pro Â· Full day experience' },
  { slug: 'best-golf-courses-mallorca', badge: 'Guide', badgeGold: false, title: 'The Best Golf Courses in Mallorca â€” A PGA Professional\'s Honest Ranking', intro: 'Twenty-two courses on the island. Here is how I would rank them for a visitor with limited time and high standards.', readTime: '8 min read', keywords: 'All levels Â· Green fees compared Â· Updated 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Guide', badgeGold: false, title: 'Is Mallorca Good for Golf? An Honest Answer from Someone Who Lives Here', intro: 'The honest version â€” what the island does better than Portugal, where it falls short, and who it suits.', readTime: '5 min read', keywords: 'Mallorca vs Portugal Â· Course quality Â· For all levels' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Guide', badgeGold: false, title: 'The Best Time to Play Golf in Mallorca â€” Month by Month', intro: 'October is the month I would choose. Here is why, and what each month actually delivers in terms of weather, price, and crowds.', readTime: '6 min read', keywords: 'Weather Â· Green fees by season Â· Crowds' },
  { slug: 'golf-cost-mallorca', badge: 'Guide', badgeGold: false, title: 'How Much Does Golf Cost in Mallorca? Green Fees, Hire, and Hidden Costs', intro: 'The full picture on what a golf trip here actually costs â€” green fees, hire, caddies, and where you can save without compromising.', readTime: '5 min read', keywords: 'â‚¬77â€“220 green fees Â· Hire Â· Caddies Â· 2026 prices' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Guide', badgeGold: false, title: 'Planning a Golf Trip to Mallorca â€” Everything You Need to Know', intro: 'Flights, courses, staying near the golf, getting between venues. The practical guide I wish existed when I moved here.', readTime: '7 min read', keywords: 'Trip planning Â· Where to stay Â· Getting around' },
]

const guides = [...liveGuides, ...comingSoonGuides]

export default function GuidesIndex() {
  return (
    <PageLayout>
      <RevealObserver />
      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Home</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Guides</span>
          </p>
          <h1>Mallorca Golf.<br />Honest Guides.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Course reviews, trip planning, green fees, and when to visit â€” written by a PGA professional who plays here every week.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Updated 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… First-Hand Reviews</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {liveGuides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="reveal"
              style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>
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

          {comingSoonGuides.map((g) => (
            <div key={g.slug} className="reveal"
              style={{display:'block',borderBottom:'1px solid var(--linen)',padding:'32px 0',pointerEvents:'none',userSelect:'none'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(45,74,62,.07)',color:'var(--taupe)',border:'1px solid var(--linen)',flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:600,color:'var(--deep)',alignSelf:'center',marginLeft:'auto',background:'var(--gold)',padding:'5px 12px'}}>
                  Coming Soon
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
            </div>
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

