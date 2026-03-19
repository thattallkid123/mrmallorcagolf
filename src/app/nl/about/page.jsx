import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Over Andy Griffiths — PGA Professional, Mallorca',
  description: 'Andy Griffiths is een Britse PGA Advanced Professional gevestigd op Mallorca. Eerder Pebble Beach, Évian, 11 jaar coaching in China.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/about' },
}

export default function About_NL() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/nl">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Over Andy</span></p>
          <h1>De Professional<br />achter de Ervaring.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Mallorca</span>
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
            <p>China was in die periode een buitengewone omgeving om in te coachen. Lessen liepen rond de €500 per uur. Klanten verwachtten serieuze, meetbare verbetering — niet alleen aanmoediging.</p>
            <p>Ik werd 's lands eerste Trackman Master, coachte spelers van het Chinese nationale team en bouwde een coachingpresence op Douyin die honderden miljoenen views bereikte. Ik werd ook vloeiend in Mandarijn, wat de diepte van mijn coachingrelaties fundamenteel veranderde.</p>
            <p>Na elf jaar had ik bereikt waarvoor ik was gekomen. Mijn eerste dochter werd geboren in 2023. De aantrekkingskracht van dichter bij huis zijn, en de kans om iets van mezelf op te bouwen, waren niet langer te negeren.</p>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Tweeëntwintig banen, één eiland en een coachingfilosofie aangescherpt door weer te spelen.</h2>
            <p>Ik verhuisde in maart 2025 naar Mallorca met mijn vrouw Yina. Dichter bij de familie in het VK, jaarrond zon, een werkelijk uitzonderlijk golfeiland dat de meeste mensen onvoldoende erkenning geven.</p>
            <p>Ik begon serieus te spelen. Elke baan op het eiland afwerken. Herontdekken hoe het voelt om op de eerste tee te staan en echt om de score te geven.</p>
            <div className="pull-quote"><p>&ldquo;De coachingfilosofie die voortkomt uit weer spelen is eenvoudig: de snelste verbeteringen vinden plaats op de baan, niet op de driving range. Echte omstandigheden, echte beslissingen, echte gevolgen.&rdquo;</p></div>
            <p>Een PGA-professional die meer dan een decennium coachte in Azië, nu gastgever van privégolfdagen op een van Europa's beste golfeilanden. Als dat klinkt als de dag die u zoekt — neem contact op.</p>
          </div>
        </main>
        <aside className="story__sidebar">
          <div className="creds reveal">
            <p className="creds__label">Kwalificaties</p>
            <ul className="cred-list">
              <li key={0} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>PGA Advanced Professional (UK)</strong>De hoogste kwalificatie in het Britse golfcoachen</span></li>
              <li key={1} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Applied Golf Management</strong>University of Birmingham</span></li>
              <li key={2} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>TPI Niveau 3 gecertificeerd</strong>Titleist Performance Institute</span></li>
              <li key={3} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Trackman Master gecertificeerd</strong>Eerste in China</span></li>
              <li key={4} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>US Kids Golf Top 50</strong>Coach wereldwijd</span></li>
              <li key={5} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>11 jaar in Shanghai</strong>Vloeiend Mandarijn</span></li>
              <li key={6} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Chinees nationaal team</strong>Elite junior- en wedstrijdcoaching</span></li>
              <li key={7} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Honderden miljoenen weergaven</strong>Golfcoachingcontent op Douyin</span></li>
              <li key={8} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Gepubliceerd auteur</strong>Putting It Out There — A Life in Full Swing, 2016</span></li>
              <li key={9} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Gevestigd op Mallorca</strong>Sinds maart 2025</span></li>
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Speel de mooiste banen van Mallorca met mij aan uw zijde.</h3>
            <p>Privédagen op Son Gual, Alcanada en meer. Alles geregeld. Coaching op de baan.</p>
            <Link href="/nl/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Bekijk de ervaringen {">"}</Link>
          </div>
        </aside>
      </div>

      <section className="venues reveal">
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Locaties & ervaring</p>
        <h2>Waar de carrière werd opgebouwd.</h2>
        <div className="venues__grid">
            <div key={0} className="venue"><p className="venue__name">Pebble Beach</p><p className="venue__detail">Californië, VS</p></div>
            <div key={1} className="venue"><p className="venue__name">The Open Championship</p><p className="venue__detail">VK</p></div>
            <div key={2} className="venue"><p className="venue__name">Evian Championship</p><p className="venue__detail">Frankrijk · Dames-major</p></div>
            <div key={3} className="venue"><p className="venue__name">Doral</p><p className="venue__detail">Miami, VS</p></div>
            <div key={4} className="venue"><p className="venue__name">Shanghai</p><p className="venue__detail">China · 11 jaar</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Klaar om te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Een PGA Advanced Professional. Een uitzonderlijk golfeiland. Uw ronde.</h2>
          <p>Vertel me uw datums, uw handicap en wat u zoekt. Ik bouw de dag rondom u.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Bekijk de ervaringen {">"}</Link>
          <Link href="/nl/contact" className="btn btn--outline-white">Neem contact op</Link>
        </div>
      </section>
    </PageLayout>
  )
}





