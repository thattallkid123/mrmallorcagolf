import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Über Andy Griffiths — UK PGA Professional, Mallorca',
  description: 'Andy Griffiths ist ein britischer UK PGA Advanced Professional auf Mallorca. Ehemals Pebble Beach, Évian, 11 Jahre Coaching in China.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/about' },
}

const credentials = [
  { title: 'UK PGA Advanced Professional (UK)', detail: 'Eine der höheren Berufsqualifikationen im britischen Golf' },
  { title: 'Applied Golf Management', detail: 'University of Birmingham' },
  { title: 'TPI Level 3 zertifiziert', detail: 'Titleist Performance Institute' },
  { title: 'Trackman Master zertifiziert', detail: 'Erster in China' },
  { title: 'US Kids Golf Top 50', detail: 'Coach weltweit' },
  { title: '11 Jahre in Shanghai', detail: 'Fließend Mandarin' },
  { title: 'Chinesische Nationalmannschaft', detail: 'Elite-Junioren- und Wettkampfcoaching' },
  { title: 'Hunderte Millionen Aufrufe', detail: 'Golfcoaching-Inhalte auf Douyin' },
  { title: 'Veröffentlichter Autor', detail: '<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)",textDecoration:"none"}}>Putting It Out There — A Life in Full Swing, 2016 (Amazon)</a>' },
  { title: 'Auf Mallorca ansässig', detail: 'Seit März 2025' },
]

const venues = [
  { name: 'Pebble Beach', detail: 'Kalifornien, USA' },
  { name: 'The Open Championship', detail: 'UK' },
  { name: 'Evian Championship', detail: 'Frankreich · Damen-Major' },
  { name: 'Doral', detail: 'Miami, USA' },
  { name: 'Shanghai', detail: 'China · 11 Jahre' },
]

export default function AboutDE() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%), url(/images/about-secondary.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, center 65%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/de">Start</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Über Andy</span></p>
          <h1>Der Profi<br />hinter dem Erlebnis.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">UK PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master zertifiziert</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Auf Mallorca ansässig</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Frühe Karriere</p>
            <h2>Den besten Coaches auf zwei Kontinenten folgen.</h2>
            <p>Ich bin mit Golf aufgewachsen, kam auf ein +1 Handicap, wusste aber früh, dass Coaching mein Weg war. Nach dem Studium des Applied Golf Management an der University of Birmingham und meiner Qualifikation als UK PGA Professional begann ich, eine Karriere aufzubauen, indem ich den erfahrensten Coaches durch Europa und Nordamerika folgte.</p>
            <p>Die ersten Jahre führten mich an außergewöhnliche Orte. Ich coachte in Pebble Beach, Doral, in Évian während des Damen-Majors und bei The Open Championship. Eine Saison verbrachte ich als Golfcoach auf einem Kreuzfahrtschiff auf einer Weltreise — über vierzig Länder, Golf an Orten, die die meisten Profis nie zu Gesicht bekommen.</p>
            <div className="pull-quote"><p>&ldquo;Jedes Umfeld war anders. Jeder Golfer war anders. Diese Vielfalt in den frühen Jahren hat alles geprägt, was danach kam.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014–2025</p>
            <h2>Elf Jahre an der Spitze des Golfs in China.</h2>
            <p>2014 zog ich nach Shanghai. Ich hatte konkrete Ziele — das Lehrprogramm für die beste Akademie Chinas aufzubauen — und blieb für elf erfolgreiche Jahre.</p>
            <p>China war in dieser Zeit ein außergewöhnliches Umfeld zum Coachen. Lektionen liefen bei etwa €350 + Green Fee pro Stunde. Klienten erwarteten ernsthafte, messbare Verbesserung — keine bloße Ermutigung. Der geforderte professionelle Standard war so hoch wie an jedem anderen Ort, an dem ich je gearbeitet hatte.</p>
            <p>Ich wurde der erste Trackman Master des Landes, coachte Spieler der chinesischen Nationalmannschaft und baute eine Coaching-Präsenz auf Douyin auf, die hunderte Millionen Aufrufe erreichte. Zudem wurde ich fließend in Mandarin, was die Tiefe der Coaching-Beziehungen zu Spielern und Familien grundlegend veränderte.</p>
            <p>Nach elf Jahren hatte ich erreicht, weshalb ich gekommen war. Meine erste Tochter wurde 2023 geboren. Der Wunsch, wieder näher an der Heimat zu sein, und die Chance, etwas Eigenes aufzubauen, ließen sich nicht mehr ignorieren.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Zweiundzwanzig Plätze, eine Insel und eine Coaching-Philosophie, geschärft durch das Spielen.</h2>
            <p>Im März 2025 zog ich mit meiner Frau Yina nach Mallorca. Näher an der Familie in Großbritannien, ganzjährig Sonne, eine wirklich außergewöhnliche Golfinsel, der die meisten Menschen nicht genug Anerkennung zollen.</p>
            <p>Ich fing wieder ernsthaft an zu spielen. Arbeitete mich durch jeden Platz der Insel. Entdeckte neu, wie es sich anfühlt, auf dem ersten Abschlag zu stehen und sich wirklich um das Ergebnis zu sorgen. Dieser Wettkampfinstinkt — in Jahren als Vollzeit-Coach schlafend — kehrte schnell zurück.</p>
            <div className="pull-quote"><p>&ldquo;Die Coaching-Philosophie, die aus dem Wiederspielen entstanden ist, ist einfach: Die schnellsten Verbesserungen passieren auf dem Platz, nicht auf der Range. Echte Bedingungen, echte Entscheidungen, echte Konsequenzen.&rdquo;</p></div>
            <p>Ein UK PGA Professional, der über ein Jahrzehnt in Asien coachte und jetzt private Golftage auf einer der besten Golfinseln Europas veranstaltet. Wenn das wie der Tag klingt, den Sie suchen — melden Sie sich.</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <img
              src="/images/about-andy-colour.jpg"
              alt="Andy Griffiths PGA professional, Mallorca"
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 20%',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">Qualifikationen</p>
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
            <h3>Spielen Sie Mallorcas schönste Plätze — mit mir an Ihrer Seite.</h3>
            <p>Private Tage auf Son Gual, Alcanada und weiteren. Alles arrangiert. Coaching auf dem Platz.</p>
            <Link href="/de/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Die Erlebnisse entdecken &rarr;</Link>
          </div>
        </aside>
      </div>

      <section className="venues reveal">
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Orte &amp; Erfahrung</p>
        <h2>Wo die Karriere entstand.</h2>
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
          <p className="eyebrow eyebrow--gold">Bereit zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Ein UK PGA Advanced Professional. Eine außergewöhnliche Golfinsel. Ihre Runde.</h2>
          <p>Teilen Sie mir Ihre Daten, Ihr Handicap und Ihre Wünsche mit. Ich baue den Tag um Sie herum.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Die Erlebnisse entdecken &rarr;</Link>
          <Link href="/de/contact" className="btn btn--outline-white">Kontakt aufnehmen</Link>
        </div>
      </section>
    </PageLayout>
  )
}
