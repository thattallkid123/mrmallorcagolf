import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: 'Om Andy Griffiths â€” PGA-professional, Mallorca',
  description: "Andy Griffiths Ã¤r en brittisk PGA Advanced Professional baserad pÃ¥ Mallorca. Tidigare Pebble Beach, Evian, 11 Ã¥r coaching i Kina.",
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
  { title: 'UKPGA Advanced Professional', detail: 'Ã–ver 15 000 timmar coaching genomfÃ¶rda' },
  { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
  { title: 'TPI Level 3 Certified', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master Certified', detail: 'FÃ¶rst i Kina' },
  { title: 'US Kids Golf', detail: 'Top 50 Coach Worldwide' },
  { title: '11 Ã¥r i Shanghai', detail: 'Flytande mandarin' },
  { title: 'Chinese National Team', detail: 'Elite junior och competition coaching' },
  { title: 'Hundratals miljoner visningar', detail: 'Golfcoaching videoinnehÃ¥ll pÃ¥ Douyin' },
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
            <p className="chapter__label">Tidigt i karriÃ¤ren</p>
            <h2>FÃ¶ljde de bÃ¤sta trÃ¤narna Ã¶ver tvÃ¥ kontinenter.</h2>
            <p>Jag vÃ¤xte upp spelade golf, kom ner till +1 handicap men visste tidigt att coaching var vad jag ville gÃ¶ra. Efter att ha studerat Applied Golf Management vid University of Birmingham och blivit certifierad som PGA Professional bÃ¶rjade jag bygga en karriÃ¤r genom att fÃ¶lja de mest erfarna trÃ¤narna runt om i Europa och Nordamerika.</p>
            <p>De tidiga Ã¥ren tog mig till nÃ¥gra anmÃ¤rkningsvÃ¤rda platser. Jag trÃ¤nade pÃ¥ Pebble Beach, Doral, Evian under damernas major, The Open Championship. Jag tillbringade en sÃ¤song med att trÃ¤na ombord pÃ¥ ett kryssningsfartyg pÃ¥ en vÃ¤rldsomsegling â€” Ã¶ver fyrtio lÃ¤nder, golf pÃ¥ platser som de flesta proffs aldrig kommer nÃ¤ra.</p>
            <div className="pull-quote"><p>&ldquo;Varje miljÃ¶ var annorlunda. Varje golfare var annorlunda. Den variationen, tidigt, Ã¤r det som formade allt som kom efterÃ¥t.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014â€“2025</p>
            <h2>Elva Ã¥r pÃ¥ toppen av spelet i Kina.</h2>
            <p>2014 flyttade jag till Shanghai. Jag gick dit med specifika mÃ¥l â€” att etablera undervisningsprogrammet fÃ¶r den bÃ¤sta akademin i Kina â€” och stannade i elva framgÃ¥ngsrika Ã¥r.</p>
            <p>Kina under denna period var en extraordinÃ¤r miljÃ¶ fÃ¶r att trÃ¤na. Lektioner kÃ¶rde pÃ¥ omkring 500 â‚¬ per timme. Klienter fÃ¶rvÃ¤ntade sig verklig, mÃ¤tbar fÃ¶rbÃ¤ttring. Det var standarden. Den professionella standard som krÃ¤vdes var sÃ¥ hÃ¶g som nÃ¥gonstans jag hade arbetat.</p>
            <p>Jag blev landets fÃ¶rsta Trackman Master, trÃ¤nade spelare frÃ¥n Kinas nationella lag och byggde en coachningstrÃ¤ngs pÃ¥ Douyin som nÃ¥dde hundratals miljoner visningar. Jag blev ocksÃ¥ flytande pÃ¥ mandarin, vilket fÃ¶rÃ¤ndrade djupet i trÃ¤ningsrelationen jag kunde bygga med spelare och familjer.</p>
            <p>Efter elva Ã¥r hade jag uppnÃ¥tt vad jag Ã¥kte fÃ¶r. Min fÃ¶rsta dotter fÃ¶ddes 2023. Dragningen av att vara nÃ¤rmare hemmet, och chansen att bygga nÃ¥got eget, blev omÃ¶jlig att ignorera.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 â€“</p>
            <h2>TjugotvÃ¥ banor, en Ã¶ och en coachningsfilosofi skÃ¤rpt genom att spela igen.</h2>
            <p>Jag flyttade till Mallorca i mars 2025 med min fru Yina. NÃ¤rmare familjen i Storbritannien, solsken Ã¥ret runt, en verkligt exceptionell golfÃ¶ som de flesta inte ger tillrÃ¤ckligt mycket credit till.</p>
            <p>Jag bÃ¶rjade spela ordentligt igen. Arbetade mig genom varje bana pÃ¥ Ã¶n. Ã…terupptÃ¤ckte vad det kÃ¤nns att stÃ¥ pÃ¥ fÃ¶rsta tee och faktiskt bry sig om poÃ¤ngen. Den konkurrensinvinklingen â€” vilande genom Ã¥r av heltids coaching â€” kom tillbaka snabbt.</p>
            <div className="pull-quote"><p>&ldquo;Coachningsfilosofin som har kommit frÃ¥n att spela igen Ã¤r enkel: de snabbaste fÃ¶rbÃ¤ttringarna hÃ¤nder pÃ¥ banan, inte pÃ¥ drivomrÃ¥det. Verkliga fÃ¶rhÃ¥llanden, verkliga beslut. Framsteget som kommer frÃ¥n det brukar fastna.&rdquo;</p></div>
            <p>En PGA-professional som tillbringade Ã¶ver ett decennium med att trÃ¤na i Asien, nu vÃ¤rd privata golfdagar pÃ¥ en av Europas bÃ¤sta golfÃ¶lor. Om det lÃ¥ter som den slags dag du letar efter â€” ta kontakt.</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <Image
              src="/images/about-andy-colour.jpg"
              alt="Andy Griffiths â€” UK PGA Advanced Professional, Mallorca"
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
                  <span className="cred-text"><strong>{c.title}</strong>{c.isBookLink ? (<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>Putting It Out There â€” A Life in Full Swing, 2016 (Amazon)</a>) : c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Spela Mallocas finaste banor med mig vid din sida.</h3>
            <p>Privata dagar pÃ¥ Son Gual, Alcanada och bortom. Allt ordnat. On-course coaching hela vÃ¤gen.</p>
            <Link href="/sv/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Se upplevelserna &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>En PGA Advanced Professional. En exceptionell golfÃ¶. Din runda.</h2>
          <p>BerÃ¤tta dina datum, ditt handicap och vad du letar efter. Jag bygger dagen omkring dig.</p>
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





