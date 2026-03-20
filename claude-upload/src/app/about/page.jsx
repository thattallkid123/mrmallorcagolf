import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'About Andy Griffiths — PGA Professional, Mallorca',
  description: "Andy Griffiths is a UK PGA Advanced Professional based in Mallorca. Formerly Pebble Beach, Evian, 11 years coaching in China.",
}

const credentials = [
  { title: 'PGA Advanced Professional (UK)', detail: 'The highest qualification in UK golf coaching' },
  { title: 'Applied Golf Management', detail: 'University of Birmingham' },
  { title: 'TPI Level 3 Certified', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master Certified', detail: 'First in China' },
  { title: 'US Kids Golf Top 50', detail: 'Coach Worldwide' },
  { title: '11 years in Shanghai', detail: 'Fluent Mandarin' },
  { title: 'Chinese national team', detail: 'Elite junior and competition coaching' },
  { title: 'Hundreds of millions of views', detail: 'Golf coaching content on Douyin' },
  { title: 'Published author', detail: 'Putting It Out There — A Life in Full Swing, 2016' },
  { title: 'Based in Mallorca', detail: 'Since March 2025' },
]

const venues = [
  { name: 'Pebble Beach', detail: 'California, USA' },
  { name: 'The Open Championship', detail: 'UK' },
  { name: "Evian Championship", detail: "France · Women's Major" },
  { name: 'Doral', detail: 'Miami, USA' },
  { name: 'Shanghai', detail: 'China · 11 years' },
]

export default function About() {
  return (
    <PageLayout>
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>About</span></p>
          <h1>The Professional<br />Behind the Experience.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master Certified</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Based in Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Early career</p>
            <h2>Following the best coaches across two continents.</h2>
            <p>I grew up playing golf, got down to a +1 handicap but knew early that coaching was where I wanted to be. After studying Applied Golf Management at the University of Birmingham and qualifying as a PGA Professional, I started building a career following the most experienced coaches all around Europe and North America.</p>
            <p>The early years took me to some remarkable venues. I coached at Pebble Beach, Doral, Evian during the women&apos;s major, The Open Championship. I spent a season coaching aboard a cruise ship on a world voyage — over forty countries, golf in places most professionals never get near.</p>
            <div className="pull-quote"><p>&ldquo;Every environment was different. Every golfer was different. That variety, early on, is what shaped everything that came after.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014–2025</p>
            <h2>Eleven years at the top of the game in China.</h2>
            <p>In 2014 I moved to Shanghai. I went with specific goals — to set up the teaching programme for the best academy in China — and stayed for eleven successful years.</p>
            <p>China in that period was an extraordinary environment in which to coach. Lessons were running at around &euro;500 per hour. Clients expected serious, measurable improvement — not just encouragement. The professional standard required was as high as anywhere I&apos;d worked.</p>
            <p>I became the country&apos;s first Trackman Master, coached players from the Chinese national team, and built a coaching presence on Douyin that reached hundreds of millions of views. I also became fluent in Mandarin, which changed the depth of coaching relationship I could build with players and families.</p>
            <p>After eleven years, I&apos;d achieved what I went for. My first daughter was born in 2023. The pull of being closer to home, and the chance to build something of my own, became impossible to ignore.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Twenty-two courses, one island, and a coaching philosophy sharpened by playing again.</h2>
            <p>I moved to Mallorca in March 2025 with my wife Yina. Closer to family in the UK, year-round sunshine, a genuinely exceptional golf island that most people don&apos;t give enough credit to.</p>
            <p>I started playing properly again. Working my way through every course on the island. Rediscovering what it feels like to stand on a first tee and actually care about the score. That competitive instinct — dormant through years of full-time coaching — came back fast.</p>
            <div className="pull-quote"><p>&ldquo;The coaching philosophy that&apos;s come out of playing again is simple: the fastest improvements happen on the course, not the range. Real conditions, real decisions, real consequences.&rdquo;</p></div>
            <p>A PGA professional who spent over a decade coaching in Asia, now hosting private golf days on one of Europe&apos;s best golf islands. If that sounds like the kind of day you&apos;re looking for — get in touch.</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="creds reveal">
            <p className="creds__label">Credentials</p>
            <ul className="cred-list">
              {credentials.map((c, i) => (
                <li key={i} className="cred-item">
                  <span className="cred-check">&#10003;</span>
                  <span className="cred-text"><strong>{c.title}</strong>{c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Play Mallorca&apos;s finest courses with me alongside you.</h3>
            <p>Private days on Son Gual, Alcanada, and beyond. Everything arranged. On-course coaching throughout.</p>
            <Link href="/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>See the Experiences &rarr;</Link>
          </div>
        </aside>
      </div>

      <section className="venues reveal">
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Venues &amp; experience</p>
        <h2>Where the career was built.</h2>
        <div className="venues__grid">
          {venues.map((v, i) => (
            <div key={i} className="venue">
              <p className="venue__name">{v.name}</p>
              <p className="venue__detail">{v.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Ready to play?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>A PGA Advanced Professional. An exceptional golf island. Your round.</h2>
          <p>Tell me your dates, your handicap, and what you&apos;re looking for. I&apos;ll build the day around you.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>See the Experiences &rarr;</Link>
          <Link href="/contact" className="btn btn--outline-white">Get in touch</Link>
        </div>
      </section>

    </PageLayout>
  )
}




