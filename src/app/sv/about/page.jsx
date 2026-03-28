import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: 'Om Andy Griffiths — PGA-professional, Mallorca',
  description: "Andy Griffiths är en brittisk PGA Advanced Professional baserad på Mallorca. Tidigare Pebble Beach, Evian, 11 år coaching i Kina.",
  alternates: {
    canonical: 'https://mrmallorcagolf.com/sv/about',
    languages: {
      'en': 'https://mrmallorcagolf.com/about',
      'de': 'https://mrmallorcagolf.com/de/about',
      'es': 'https://mrmallorcagolf.com/es/about',
      'fr': 'https://mrmallorcagolf.com/fr/about',
      'nl': 'https://mrmallorcagolf.com/nl/about',
      'sv': 'https://mrmallorcagolf.com/sv/about',
      'zh': 'https://mrmallorcagolf.com/zh/about',
      'x-default': 'https://mrmallorcagolf.com/about',
    }
  }
}

const credentials = [
  { title: 'UKPGA Advanced Professional', detail: 'Över 15 000 timmar coaching genomförda' },
  { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
  { title: 'TPI Level 3 Certified', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master Certified', detail: 'Först i Kina' },
  { title: 'US Kids Golf', detail: 'Top 50 Coach Worldwide' },
  { title: '11 år i Shanghai', detail: 'Flytande mandarin' },
  { title: 'Chinese National Team', detail: 'Elite junior och competition coaching' },
  { title: 'Hundratals miljoner visningar', detail: 'Golfcoaching videoinnehåll på Douyin' },
  { title: 'Published Author', detail: 'BOOK_LINK', isBookLink: true },
  { title: 'Baserad i Mallorca', detail: 'Sedan mars 2025' },
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
          <p className="breadcrumb"><Link href="/">Hem</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Om</span></p>
          <h1>Professionellen<br />bakom erfarenheten.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master Certified</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Baserad i Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Tidigt i karriären</p>
            <h2>Följde de bästa tränarna över två kontinenter.</h2>
            <p>Jag växte upp spelade golf, kom ner till +1 handicap men visste tidigt att coaching var vad jag ville göra. Efter att ha studerat Applied Golf Management vid University of Birmingham och blivit certifierad som PGA Professional började jag bygga en karriär genom att följa de mest erfarna tränarna runt om i Europa och Nordamerika.</p>
            <p>De tidiga åren tog mig till några anmärkningsvärda platser. Jag tränade på Pebble Beach, Doral, Evian under damernas major, The Open Championship. Jag tillbringade en säsong med att träna ombord på ett kryssningsfartyg på en världsomsegling — över fyrtio länder, golf på platser som de flesta proffs aldrig kommer nära.</p>
            <div className="pull-quote"><p>&ldquo;Varje miljö var annorlunda. Varje golfare var annorlunda. Den variationen, tidigt, är det som formade allt som kom efteråt.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014–2025</p>
            <h2>Elva år på toppen av spelet i Kina.</h2>
            <p>2014 flyttade jag till Shanghai. Jag gick dit med specifika mål — att etablera undervisningsprogrammet för den bästa akademin i Kina — och stannade i elva framgångsrika år.</p>
            <p>Kina under denna period var en extraordinär miljö för att träna. Lektioner körde på omkring 500 € per timme. Klienter förväntade sig verklig, mätbar förbättring. Det var standarden. Den professionella standard som krävdes var så hög som någonstans jag hade arbetat.</p>
            <p>Jag blev landets första Trackman Master, tränade spelare från Kinas nationella lag och byggde en coachningsträngs på Douyin som nådde hundratals miljoner visningar. Jag blev också flytande på mandarin, vilket förändrade djupet i träningsrelationen jag kunde bygga med spelare och familjer.</p>
            <p>Efter elva år hade jag uppnått vad jag åkte för. Min första dotter föddes 2023. Dragningen av att vara närmare hemmet, och chansen att bygga något eget, blev omöjlig att ignorera.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Tjugotvå banor, en ö och en coachningsfilosofi skärpt genom att spela igen.</h2>
            <p>Jag flyttade till Mallorca i mars 2025 med min fru Yina. Närmare familjen i Storbritannien, solsken året runt, en verkligt exceptionell golfö som de flesta inte ger tillräckligt mycket credit till.</p>
            <p>Jag började spela ordentligt igen. Arbetade mig genom varje bana på ön. Återupptäckte vad det känns att stå på första tee och faktiskt bry sig om poängen. Den konkurrensinvinklingen — vilande genom år av heltids coaching — kom tillbaka snabbt.</p>
            <div className="pull-quote"><p>&ldquo;Coachningsfilosofin som har kommit från att spela igen är enkel: de snabbaste förbättringarna händer på banan, inte på drivområdet. Verkliga förhållanden, verkliga beslut. Framsteget som kommer från det brukar fastna.&rdquo;</p></div>
            <p>En PGA-professional som tillbringade över ett decennium med att träna i Asien, nu värd privata golfdagar på en av Europas bästa golfölor. Om det låter som den slags dag du letar efter — ta kontakt.</p>
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
            <p className="creds__label">Meriter</p>
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
            <h3>Spela Mallocas finaste banor med mig vid din sida.</h3>
            <p>Privata dagar på Son Gual, Alcanada och bortom. Allt ordnat. On-course coaching hela vägen.</p>
            <Link href="/sv/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Se upplevelserna &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>En PGA Advanced Professional. En exceptionell golfö. Din runda.</h2>
          <p>Berätta dina datum, ditt handicap och vad du letar efter. Jag bygger dagen omkring dig.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Se upplevelserna &rarr;</Link>
          <Link href="/sv/contact" className="btn btn--outline-white">Kontakta mig</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}




