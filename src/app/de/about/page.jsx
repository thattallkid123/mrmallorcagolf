import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import CareerStrip from '../../components/CareerStrip'

export const metadata = {
  title: 'Über Andy Griffiths — PGA Professional, Mallorca',
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
  { title: 'UKPGA Advanced Professional', detail: 'Über 15.000 Trainerstunden erteilt' },
  { title: 'Applied Golf Management Studies', detail: 'Universität Birmingham' },
  { title: 'TPI Level 3 Zertifiziert', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master Zertifiziert', detail: 'Erste in China' },
  { title: 'US Kids Golf', detail: 'Top 50 Coach weltweit' },
  { title: '11 Jahre in Shanghai', detail: 'Fließend Mandarin' },
  { title: 'Chinesisches Nationalteam', detail: 'Elite-Junior- und Wettbewerbstraining' },
  { title: 'Hunderte Millionen Views', detail: 'Golf-Trainingsvideoinhalte auf Douyin' },
  { title: 'Veröffentlichter Autor', detail: 'BOOK_LINK', isBookLink: true },
  { title: 'Ansässig auf Mallorca', detail: 'Seit März 2025' },
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
          <p className="breadcrumb"><Link href="/de">Startseite</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Über</span></p>
          <h1>Der Profi<br />hinter dem Erlebnis.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master Zertifiziert</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Auf Mallorca ansässig</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Frühe Karriere</p>
            <h2>Den besten Trainern über zwei Kontinente folgen.</h2>
            <p>Ich bin Golf spielend aufgewachsen, erreichte ein Handicap von +1, wusste aber früh, dass Coaching meine Leidenschaft war. Nach meinem Studium in Applied Golf Management an der Universität Birmingham und meiner Qualifikation als PGA-Professional baute ich meine Karriere auf, indem ich die erfahrensten Trainer überall in Europa und Nordamerika besuchte.</p>
            <p>Die frühen Jahre führten mich an bemerkenswerte Veranstaltungsorte. Ich trainierte in Pebble Beach, Doral, Evian bei der Damenmajor, und bei der Open Championship. Eine Saison trainierte ich auf einem Kreuzfahrtschiff auf einer Weltreise — über vierzig Länder, Golf an Orten, die die meisten Profis nie besuchen.</p>
            <div className="pull-quote"><p>&ldquo;Jede Umgebung war anders. Jeder Golfer war anders. Diese Vielfalt am Anfang hat alles geprägt, was danach kam.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014–2025</p>
            <h2>Elf Jahre an der Spitze des Spiels in China.</h2>
            <p>2014 zog ich nach Shanghai. Ich ging mit spezifischen Zielen — das Trainingsprogramm für die beste Akademie in China aufzubauen — und blieb elf erfolgreiche Jahre.</p>
            <p>China in dieser Zeit war ein außergewöhnliches Umfeld zum Trainieren. Lektionen liefen mit etwa 500 Euro pro Stunde. Kunden erwarteten echte, messbare Verbesserungen. Das war der Standard. Der erforderliche Profistandard war so hoch wie überall dort, wo ich gearbeitet hatte.</p>
            <p>Ich wurde Chinas erster Trackman Master, trainierte Spieler des Chinesischen Nationalteams und baute eine Trainerpräsenz auf Douyin auf, die hunderte Millionen Views erreichte. Ich wurde auch fließend in Mandarin, was die Tiefe der Trainingsbeziehung, die ich mit Spielern und Familien aufbauen konnte, veränderte.</p>
            <p>Nach elf Jahren hatte ich erreicht, wofür ich gekommen bin. Meine erste Tochter wurde 2023 geboren. Der Wunsch, näher bei zu Hause zu sein und etwas Eigenes aufzubauen, war nicht mehr zu ignorieren.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Zweiundzwanzig Plätze, eine Insel und eine durch Spielen wieder geschärfte Trainingsphilosophie.</h2>
            <p>Ich zog im März 2025 mit meiner Frau Yina nach Mallorca. Näher bei meiner Familie im Vereinigten Königreich, ganzjährig Sonnenschein, eine wirklich außergewöhnliche Golfinsel, der die meisten Menschen nicht genug Anerkennung geben.</p>
            <p>Ich fing an, wieder richtig zu spielen. Ich arbeite mich durch jeden Kurs auf der Insel. Ich entdecke wieder, wie es sich anfühlt, auf dem ersten Abschlag zu stehen und sich wirklich um das Ergebnis zu kümmern. Dieser Wettbewerbsinstinkt — dormant durch Jahre von Vollzeit-Coaching — kam schnell zurück.</p>
            <div className="pull-quote"><p>&ldquo;Die Trainingsphilosophie, die sich aus dem Spielen wieder ergeben hat, ist einfach: Die schnellsten Verbesserungen passieren auf dem Platz, nicht auf dem Übungsplatz. Echte Bedingungen, echte Entscheidungen. Der Fortschritt, der daraus kommt, bleibt hängen.&rdquo;</p></div>
            <p>Ein PGA-Professional, der über ein Jahrzehnt in Asien trainiert hat und jetzt private Golftage auf einer der besten Golfinseln Europas veranstaltet. Wenn das wie der Tag klingt, den Sie suchen — nehmen Sie Kontakt auf.</p>
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
            <p className="creds__label">Qualifikationen</p>
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
            <h3>Spielen Sie Mallorhas beste Plätze mit mir an Ihrer Seite.</h3>
            <p>Private Tage auf Son Gual, Alcanada und darüber hinaus. Alles arrangiert. On-Course-Coaching den ganzen Tag über.</p>
            <Link href="/de/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Siehe die Erfahrungen &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Ein PGA Advanced Professional. Eine außergewöhnliche Golfinsel. Ihre Runde.</h2>
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




