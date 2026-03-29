import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: 'Ãœber Andy Griffiths â€” PGA Professional, Mallorca',
  description: "Andy Griffiths ist ein UK PGA Advanced Professional mit Sitz auf Mallorca. Ehemals Pebble Beach, Evian, 11 Jahre Coaching in China.",
  alternates: {
    canonical: 'https://mrmallorcagolf.com/de/about',
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
  { title: 'UKPGA Advanced Professional', detail: 'Ãœber 15.000 Trainerstunden erteilt' },
  { title: 'Applied Golf Management Studies', detail: 'UniversitÃ¤t Birmingham' },
  { title: 'TPI Level 3 Zertifiziert', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master Zertifiziert', detail: 'Erste in China' },
  { title: 'US Kids Golf', detail: 'Top 50 Coach weltweit' },
  { title: '11 Jahre in Shanghai', detail: 'FlieÃŸend Mandarin' },
  { title: 'Chinesisches Nationalteam', detail: 'Elite-Junior- und Wettbewerbstraining' },
  { title: 'Hunderte Millionen Views', detail: 'Golf-Trainingsvideoinhalte auf Douyin' },
  { title: 'VerÃ¶ffentlichter Autor', detail: 'BOOK_LINK', isBookLink: true },
  { title: 'AnsÃ¤ssig auf Mallorca', detail: 'Seit MÃ¤rz 2025' },
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
          <p className="breadcrumb"><Link href="/de">Startseite</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Ãœber</span></p>
          <h1>Der Profi<br />hinter dem Erlebnis.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master Zertifiziert</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Auf Mallorca ansÃ¤ssig</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">FrÃ¼he Karriere</p>
            <h2>Den besten Trainern Ã¼ber zwei Kontinente folgen.</h2>
            <p>Ich bin Golf spielend aufgewachsen, erreichte ein Handicap von +1, wusste aber frÃ¼h, dass Coaching meine Leidenschaft war. Nach meinem Studium in Applied Golf Management an der UniversitÃ¤t Birmingham und meiner Qualifikation als PGA-Professional baute ich meine Karriere auf, indem ich die erfahrensten Trainer Ã¼berall in Europa und Nordamerika besuchte.</p>
            <p>Die frÃ¼hen Jahre fÃ¼hrten mich an bemerkenswerte Veranstaltungsorte. Ich trainierte in Pebble Beach, Doral, Evian bei der Damenmajor, und bei der Open Championship. Eine Saison trainierte ich auf einem Kreuzfahrtschiff auf einer Weltreise â€” Ã¼ber vierzig LÃ¤nder, Golf an Orten, die die meisten Profis nie besuchen.</p>
            <div className="pull-quote"><p>&ldquo;Jede Umgebung war anders. Jeder Golfer war anders. Diese Vielfalt am Anfang hat alles geprÃ¤gt, was danach kam.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014â€“2025</p>
            <h2>Elf Jahre an der Spitze des Spiels in China.</h2>
            <p>2014 zog ich nach Shanghai. Ich ging mit spezifischen Zielen â€” das Trainingsprogramm fÃ¼r die beste Akademie in China aufzubauen â€” und blieb elf erfolgreiche Jahre.</p>
            <p>China in dieser Zeit war ein auÃŸergewÃ¶hnliches Umfeld zum Trainieren. Lektionen liefen mit etwa 500 Euro pro Stunde. Kunden erwarteten echte, messbare Verbesserungen. Das war der Standard. Der erforderliche Profistandard war so hoch wie Ã¼berall dort, wo ich gearbeitet hatte.</p>
            <p>Ich wurde Chinas erster Trackman Master, trainierte Spieler des Chinesischen Nationalteams und baute eine TrainerprÃ¤senz auf Douyin auf, die hunderte Millionen Views erreichte. Ich wurde auch flieÃŸend in Mandarin, was die Tiefe der Trainingsbeziehung, die ich mit Spielern und Familien aufbauen konnte, verÃ¤nderte.</p>
            <p>Nach elf Jahren hatte ich erreicht, wofÃ¼r ich gekommen bin. Meine erste Tochter wurde 2023 geboren. Der Wunsch, nÃ¤her bei zu Hause zu sein und etwas Eigenes aufzubauen, war nicht mehr zu ignorieren.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 â€“</p>
            <h2>Zweiundzwanzig PlÃ¤tze, eine Insel und eine durch Spielen wieder geschÃ¤rfte Trainingsphilosophie.</h2>
            <p>Ich zog im MÃ¤rz 2025 mit meiner Frau Yina nach Mallorca. NÃ¤her bei meiner Familie im Vereinigten KÃ¶nigreich, ganzjÃ¤hrig Sonnenschein, eine wirklich auÃŸergewÃ¶hnliche Golfinsel, der die meisten Menschen nicht genug Anerkennung geben.</p>
            <p>Ich fing an, wieder richtig zu spielen. Ich arbeite mich durch jeden Kurs auf der Insel. Ich entdecke wieder, wie es sich anfÃ¼hlt, auf dem ersten Abschlag zu stehen und sich wirklich um das Ergebnis zu kÃ¼mmern. Dieser Wettbewerbsinstinkt â€” dormant durch Jahre von Vollzeit-Coaching â€” kam schnell zurÃ¼ck.</p>
            <div className="pull-quote"><p>&ldquo;Die Trainingsphilosophie, die sich aus dem Spielen wieder ergeben hat, ist einfach: Die schnellsten Verbesserungen passieren auf dem Platz, nicht auf dem Ãœbungsplatz. Echte Bedingungen, echte Entscheidungen. Der Fortschritt, der daraus kommt, bleibt hÃ¤ngen.&rdquo;</p></div>
            <p>Ein PGA-Professional, der Ã¼ber ein Jahrzehnt in Asien trainiert hat und jetzt private Golftage auf einer der besten Golfinseln Europas veranstaltet. Wenn das wie der Tag klingt, den Sie suchen â€” nehmen Sie Kontakt auf.</p>
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
            <p className="creds__label">Qualifikationen</p>
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
            <h3>Spielen Sie Mallorhas beste PlÃ¤tze mit mir an Ihrer Seite.</h3>
            <p>Private Tage auf Son Gual, Alcanada und darÃ¼ber hinaus. Alles arrangiert. On-Course-Coaching den ganzen Tag Ã¼ber.</p>
            <Link href="/de/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Siehe die Erfahrungen &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Ein PGA Advanced Professional. Eine auÃŸergewÃ¶hnliche Golfinsel. Ihre Runde.</h2>
          <p>Teilen Sie mir Ihre Termine, Ihr Handicap und das Gesuchte mit. Ich baue den Tag um Sie herum auf.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Siehe die Erfahrungen &rarr;</Link>
          <Link href="/de/contact" className="btn btn--outline-white">Kontakt</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





