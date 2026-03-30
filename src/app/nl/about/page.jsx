import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'
import { buildAboutMetadata } from '../../../lib/page-metadata'

export const metadata = buildAboutMetadata('nl')

const credentials = [
  { title: 'UKPGA Advanced Professional', detail: 'Meer dan 15.000 uur coaching gegeven' },
  { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
  { title: 'TPI Niveau 3 gecertificeerd', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master gecertificeerd', detail: 'Eerste in China' },
  { title: 'US Kids Golf', detail: 'Top 50 Coach wereldwijd' },
  { title: '11 jaar in Shanghai', detail: 'Vloeiend Mandarijn' },
  { title: 'Chinees Nationaal Team', detail: 'Elite junior- en wedstrijdcoaching' },
  { title: 'Honderden miljoenen weergaven', detail: 'Golfcoaching videocontent op Douyin' },
  { title: 'Gepubliceerd auteur', detail: 'BOOK_LINK', isBookLink: true },
  { title: 'Gevestigd op Mallorca', detail: 'Sinds maart 2025' },
]


export default function About() {
  return (
    <>
    <link rel="preload" as="image" href="/images/about-secondary.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero about-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to top, rgba(26,25,22,0.88) 0%, rgba(26,25,22,0.4) 35%, transparent 65%), linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%), url(/images/about-secondary.jpg)',
        backgroundSize: 'auto, auto, cover',
        backgroundPosition: 'center, center, center 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/nl">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Over Andy</span></p>
          <h1>De Professional<br />achter de Ervaring.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master gecertificeerd</span>
            <span className="cred-tag">TPI Niveau 3</span>
            <span className="cred-tag">Gevestigd op Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Vroege carrière</p>
            <h2>De beste coaches op twee continenten volgen.</h2>
            <p>Ik groeide op met golf, bereikte een handicap van +1, maar wist vroeg dat coaching mijn weg was. Na mijn studie Applied Golf Management aan de University of Birmingham en mijn kwalificatie als PGA Professional begon ik een carrière op te bouwen door de meest ervaren coaches door heel Europa en Noord-Amerika te volgen.</p>
            <p>De vroege jaren brachten me naar buitengewone plekken. Ik coachte op Pebble Beach, Doral, Évian tijdens het dames-major en op The Open Championship. Ik bracht een seizoen door als golfcoach aan boord van een cruiseschip op een wereldreis — meer dan veertig landen, golf op plekken die de meeste professionals nooit zien.</p>
            <div className="pull-quote"><p>&ldquo;Elke omgeving was anders. Elke golfer was anders. Die variëteit, vroeg in mijn carrière, is wat alles daarna heeft gevormd.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014–2025</p>
            <h2>Elf jaar aan de top van het golf in China.</h2>
            <p>In 2014 verhuisde ik naar Shanghai. Ik had specifieke doelen — het onderwijsprogramma opzetten voor de beste academie in China — en bleef elf succesvolle jaren.</p>
            <p>China was in die periode een buitengewone omgeving om in te coachen. Lessen liepen rond de €500 per uur. Klanten verwachtten serieuze, meetbare verbetering. Dat was de norm. De professionele norm die vereist was, was net zo hoog als elke plek waar ik had gewerkt.</p>
            <p>Ik werd 's lands eerste Trackman Master, coachte spelers van het Chinese nationale team en bouwde een coachingpresence op Douyin die honderden miljoenen views bereikte. Ik werd ook vloeiend in Mandarijn, wat de diepte van mijn coachingrelaties fundamenteel veranderde.</p>
            <p>Na elf jaar had ik bereikt waarvoor ik was gekomen. Mijn eerste dochter werd geboren in 2023. De aantrekkingskracht van dichter bij huis zijn, en de kans om iets van mezelf op te bouwen, waren niet langer te negeren.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Tweeëntwintig banen, één eiland, en een coachingfilosofie aangescherpt door weer te spelen.</h2>
            <p>Ik verhuisde in maart 2025 naar Mallorca met mijn vrouw Yina. Dichter bij de familie in het VK, jaarrond zon, een werkelijk uitzonderlijk golfeiland dat de meeste mensen onvoldoende erkenning geven.</p>
            <p>Ik begon serieus te spelen. Elke baan op het eiland afwerken. Herontdekken hoe het voelt om op de eerste tee te staan en echt om de score te geven. Dat competitieve instinct — slapend door jaren van fulltime coaching — kwam snel terug.</p>
            <div className="pull-quote"><p>&ldquo;De coachingfilosofie die voortkomt uit weer spelen is eenvoudig: de snelste verbeteringen vinden plaats op de baan, niet op de driving range. Echte omstandigheden, echte beslissingen. De vooruitgang die daarvan afkomt, blijft hangen.&rdquo;</p></div>
            <p>Een PGA-professional die meer dan een decennium in Azië coachte, nu gastgeber van privégolfdagen op een van Europa's beste golfeilanden. Als dat klinkt als de dag die u zoekt — neem contact op.</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <Image
              src="/images/about-andy-colour.jpg"
              alt="Andy Griffiths — UK PGA Advanced Professional, Mallorca"
              width={600}
              height={420}
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">Kwalificaties</p>
            <ul className="cred-list">
              {credentials.map((c, i) => (
                <li key={i} className="cred-item">
                  <span className="cred-check">&#10003;</span>
                  <span className="cred-text"><strong>{c.title}</strong>{c.isBookLink ? (<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>Putting It Out There — A Life in Full Swing, 2016 (Amazon)</a>) : c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Speel de mooiste banen van Mallorca met mij aan uw zijde.</h3>
            <p>Privédagen op Son Gual, Alcanada, en meer. Alles geregeld. Coaching op de baan.</p>
            <Link href="/nl/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Bekijk de ervaringen →</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Klaar om te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Een PGA Advanced Professional. Een uitzonderlijk golfeiland. Uw ronde.</h2>
          <p>Vertel me uw datums, uw handicap en wat u zoekt. Ik bouw de dag rondom u.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Bekijk de ervaringen →</Link>
          <Link href="/nl/contact" className="btn btn--outline-white">Neem contact op</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





