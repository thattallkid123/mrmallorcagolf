'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

const credentials = [
  { title: 'UK PGA Advanced Professional', detail: 'One of the highest professional qualifications in UK golf' },
  { title: 'Applied Golf Management', detail: 'University of Birmingham' },
  { title: 'TPI Level 3 Certified', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master Certified', detail: 'First in China' },
  { title: 'US Kids Golf Top 50', detail: 'Coach Worldwide' },
  { title: '11 years in Shanghai', detail: 'Fluent Mandarin' },
  { title: 'Chinese national team', detail: 'Elite junior and competition coaching' },
  { title: '300 million+ views', detail: 'Golf coaching content on Douyin' },
  { title: 'Published author', detail: '<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)",textDecoration:"none"}}>Putting It Out There</a> — A Life in Full Swing, 2016' },
  { title: 'Based in Mallorca', detail: 'Since March 2025' },
]

const CAREER_VENUES = [
  { name: 'Pebble Beach', detail: 'California, USA' },
  { name: 'The Open Championship', detail: 'UK' },
  { name: 'Evian Championship', detail: "France · Women's Major" },
  { name: 'Doral', detail: 'Miami, USA' },
  { name: 'World Cruise', detail: '40+ Countries' },
  { name: 'TPI Oceanside', detail: 'California, USA' },
  { name: 'Egypt International Pro-Am', detail: 'Cairo, Egypt' },
  { name: 'Shanghai', detail: 'China · 11 Years' },
]

const WINNER_IMAGES = [
  "/images/winners/012ce2fdc02bf1fef437a1d98c25be1540117c3805.jpg",
  "/images/winners/0134a9b7aac8ad0d0656f04a253c43088b7331ce8f.jpg",
  "/images/winners/013bf5d9686d01b02fce51ef1123c10b7450176d15.jpg",
  "/images/winners/0144db5d1b7e24d0c6caa972462828fa30285c221b.jpg",
  "/images/winners/01642ab42974ebfa93f60beb07ab37157b87a3a515.jpg",
  "/images/winners/0166d35c197839412b807e6f1f9d74f3019ed0cdc7.jpg",
  "/images/winners/01896bd5845040a4f9957ce34acc61c2e68540c266.jpg",
  "/images/winners/01995db72802106453cf4aad2953648cec12aacd7e.jpg",
  "/images/winners/01ae26f53c5692f97b8207b9f36ca1cbbefa4618cc.jpg",
  "/images/winners/01c93d14fd4089f7fa1a956671b90967a1c09ed13f.jpg",
  "/images/winners/01f43146e7bbd479cd809b6daabd9b105b0008ca18.jpg",
  "/images/winners/01fe13d3c84b1236db2811859106a909c2227f8aa5.jpg",
  "/images/winners/2017_06_11_19_32_56.jpg",
  "/images/winners/2017_07_24_07_54_26.jpg",
  "/images/winners/2017_12_07_03_05_56.jpg",
  "/images/winners/2018_08_10_17_45_12.jpg",
  "/images/winners/2018_08_11_14_58_16.jpg",
  "/images/winners/2019_06_14_17_33_00.jpg",
  "/images/winners/2019_07_13_06_48_15.jpg",
  "/images/winners/2020_11_25_12_20_00.jpg",
  "/images/winners/2021_02_18_21_57_59.jpg",
  "/images/winners/2021_04_18_20_01_18.jpg",
  "/images/winners/2022_07_17_20_47_02.jpg",
  "/images/winners/2022_07_18_17_01_28.jpg",
  "/images/winners/2022_07_31_22_36_45.jpg",
  "/images/winners/2022_08_18_17_44_28.jpg",
  "/images/winners/2022_10_03_08_30_13.jpg",
  "/images/winners/2022_10_07_19_28_31.jpg",
  "/images/winners/2022_10_24_23_15_14.jpg",
  "/images/winners/2023_06_13_11_53_03.jpg",
  "/images/winners/2023_06_18_23_58_15.jpg",
  "/images/winners/2023_08_29_22_35_30.jpg",
  "/images/winners/2023_10_23_18_34_53.jpg",
  "/images/winners/2023_12_03_16_55_19.jpg",
  "/images/winners/2024_04_07_21_05_51.jpg",
  "/images/winners/2024_06_28_12_16_55.jpg",
  "/images/winners/2024_07_30_08_11_08.jpg",
]

function CareerStrip() {
  const trackRef = useRef(null)
  const allVenues = [...CAREER_VENUES, ...CAREER_VENUES]
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0, raf
    const tick = () => { pos += 0.4; if (pos >= track.scrollWidth / 2) pos = 0; track.style.transform = `translateX(-${pos}px)`; raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <section style={{background:'var(--deep)',padding:'clamp(48px,6vw,72px) 0',overflow:'hidden'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 clamp(20px,5vw,60px)',marginBottom:'2.5rem'}}>
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.75rem'}}>Venues &amp; experience</p>
        <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.8rem,3vw,2.6rem)'}}>Where the career was built.</h2>
      </div>
      <div style={{position:'relative',overflow:'hidden'}}>
        <div ref={trackRef} style={{display:'flex',gap:2,willChange:'transform',width:'max-content'}}>
          {allVenues.map((v, i) => (
            <div key={i} style={{flexShrink:0,width:240,padding:'28px 24px',background:'rgba(255,255,255,0.04)',borderLeft:'1px solid rgba(255,255,255,0.06)'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,color:'#fff',marginBottom:'0.4rem'}}>{v.name}</p>
              <p style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',fontFamily:"'Jost',sans-serif"}}>{v.detail}</p>
            </div>
          ))}
        </div>
        <div style={{position:'absolute',top:0,left:0,width:120,height:'100%',background:'linear-gradient(to right,var(--deep),transparent)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',top:0,right:0,width:120,height:'100%',background:'linear-gradient(to left,var(--deep),transparent)',pointerEvents:'none'}}/>
      </div>
    </section>
  )
}

function WinnersStrip() {
  const trackRef = useRef(null)
  const allImgs = [...WINNER_IMAGES, ...WINNER_IMAGES]
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0, raf
    const tick = () => { pos += 0.5; if (pos >= track.scrollWidth / 2) pos = 0; track.style.transform = `translateX(-${pos}px)`; raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <section style={{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.05)',padding:'clamp(48px,6vw,72px) 0',overflow:'hidden'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 clamp(20px,5vw,60px)',marginBottom:'2rem'}}>
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',marginBottom:'.75rem'}}>Coaching record</p>
        <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.8rem,3vw,2.6rem)'}}>300+ competition winners, across three continents.</h2>
      </div>
      <div style={{position:'relative',overflow:'hidden'}}>
        <div ref={trackRef} style={{display:'flex',gap:3,willChange:'transform',width:'max-content'}}>
          {allImgs.map((src, i) => (
            <div key={i} style={{flexShrink:0,width:110,height:110,overflow:'hidden'}}>
              <img src={src} alt="Competition winner" loading="lazy"
                style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',display:'block'}} />
            </div>
          ))}
        </div>
        <div style={{position:'absolute',top:0,left:0,width:80,height:'100%',background:'linear-gradient(to right,var(--deep),transparent)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',top:0,right:0,width:80,height:'100%',background:'linear-gradient(to left,var(--deep),transparent)',pointerEvents:'none'}}/>
      </div>
    </section>
  )
}

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

      <CareerStrip />
      <WinnersStrip />

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
