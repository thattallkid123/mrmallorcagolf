import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'


function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>{caption}</figcaption>}
    </figure>
  )
}
export const metadata = {
  title: "Club de Golf Alcanada — A PGA Professional",
  description: "Alcanada golf course Mallorca reviewed by a PGA professional who plays it regularly. The lighthouse, the greens, the restaurant terrace, and the green fees for 2026.",
  alternates: { canonical: 'https://mrmallorcagolf.com/de/guides/alcanada-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Club de Golf Alcanada — A PGA Professional",
  intro: "Der Platz, zu dem ich Menschen mitnehme, wenn sie mit einer Geschichte nach Hause kommen sollen. Der Leuchtturm verändert alles.",
  lang: 'de',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <PostLayout meta={meta} lang="de">

        <PostImage
          src="/images/alcanada-blog/alc-7.jpg"
          alt="Club de Golf Alcanada zur goldenen Stunde — Leuchtturm und Bucht"
          caption="Alcanada zur goldenen Stunde. Der Leuchtturm steht auf seiner eigenen Insel direkt vor der Küste — von 16 der 18 Löcher sichtbar."
        />

        <p>Alcanada ist der Platz, zu dem ich Menschen mitnehme, wenn ich will, dass sie mit einer Geschichte nach Hause fahren. Es könnte die unvergesslichste Runde auf der Insel sein. Der Leuchtturm verändert alles.</p>

        <h2>Die Lage</h2>
        <p>Robert Trent Jones Jr. hat Alcanada entworfen, und was er mit diesem Küstenstreifen gemacht hat, ist bemerkenswert. Wenn man auf den hinteren Abschlägen steht, den Leuchtturm im Rücken und das Mittelmeer in alle Richtungen, ist das einer jener seltenen Golfmomente, in denen die Umgebung einen vergessen lässt, wie man gespielt hat.</p>
        <p>Der Leuchtturm von Alcanada steht auf einer kleinen Insel direkt vor der Küste, von 16 der 18 Löcher sichtbar. An einem klaren Morgen, wenn das Wasser ruhig ist und das Licht über die Bucht fällt, ist es eine der schönsten Umgebungen, in denen ich jemals Golf gespielt habe — irgendwo auf der Welt.</p>

        <PostImage
          src="/images/alcanada-blog/alc-6.jpg"
          alt="Gast beim Abschlag in Alcanada mit dem Leuchtturm im Hintergrund"
          caption="Der Leuchtturm dahinter, das Meer links, das Fairway fällt vorne ab."
        />

        <h2>Die hinteren Abschläge</h2>
        <p>Auf den erhöhten hinteren Abschlägen zu stehen ist ein eigenes Erlebnis. Man fühlt sich unantastbar — so weit weg von allem anderen, dass jeder unten wie ein winziger Punkt aussieht. Der Leuchtturm hinter einem, die Bucht, die sich ausdehnt, und man steht kurz davor, den Driver irgendwo ins Ungewisse zu schlagen. Das ist das Gefühl.</p>

        <div className="post-pull">
          <p>„Auf den hinteren Abschlägen in Alcanada zu stehen ist unglaublich. Man fühlt sich unantastbar. So weit weg vom Rest der Welt. Alle sehen aus wie winzige Punkte, und man steht dort oben, erhöht, bereit, den Driver irgendwo ins Ungewisse zu schlagen."</p>
        </div>

        <PostImage
          src="/images/alcanada-blog/alc-2.jpg"
          alt="Alcanada-Grün mit Meer und Bergen dahinter"
          caption="An einem klaren Morgen kann man die Tramuntana-Berge auf der anderen Seite der Bucht sehen."
        />

        <h2>Die Greens</h2>
        <p>Hier verdient sich Alcanada das Recht, Eliteveranstaltungen auszurichten. Nach einem schwierigen Loch kommt man an Greens an, die stark wellig, extrem schnell und mit sehr wenigen einfachen Putts bestückt sind. Achtundfünfzig Bunker über den Platz zwingen auf fast jedem Loch zu genauen Annäherungsschlägen.</p>
        <p>Die Kombination aus Neigung, Geschwindigkeit und subtilen Breaks auf den Greens ist das, was diesen Platz von einem bloß malerischen Layout zu etwas macht, das wirklich gute Spieler fordert.</p>

        <PostImage
          src="/images/alcanada-blog/alc-5.jpg"
          alt="Golfer in Alcanada mit dem Mittelmeer dahinter"
          caption="Die hinteren Abschläge in Alcanada liegen deutlich über dem Fairway. Der Aufstieg lohnt sich jedes Mal."
        />

        <h2>Das Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada ist Gastgeber des Rolex Challenge Tour Grand Final — das im Oktober 2026 zum sechsten Mal stattfindet. Das ist kein Platz, der für ein Tour-Event herausgeputzt wurde. Es ist ein Platz, der immer eines wert war. Die gleichen Löcher zu spielen, die die Spielberechtigung eines Profis für die Saison entscheiden, merkt man, wenn man auf dem Abschlag steht.</p>

        <PostImage
          src="/images/alcanada-blog/alc-1.jpg"
          alt="Rolex Grand Final in Alcanada — Loch 16"
          caption="Das Rolex Challenge Tour Grand Final in Alcanada. Es kehrt im Oktober 2026 zum sechsten Mal zurück."
        />

        <h2>Designgeschichte</h2>
        <p>Der Vater von Robert Trent Jones Jr. hat Valderrama entworfen — den Austragungsort des Ryder Cup 1997 — und Spyglass Hill in Pebble Beach. RTJ Jr. hat auch Spring City Golf in Kunming entworfen, das von Golf Digest zur Nummer-eins-Anlage Chinas gewählt wurde. Die Abstammung ist echt, und man sieht es daran, wie Alcanada angelegt ist — nichts wirkt beliebig, alles nutzt das Gelände.</p>

        <PostImage
          src="/images/alcanada-blog/alc-4.jpg"
          alt="Gruppe von Golfern in Alcanada an einem Sommerabend"
          caption="Eine Runde am Sommerabend. Das Licht in Alcanada im Juli ist etwas Besonderes."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€115–220</span><span className="post-fact__label">Green-Fee-Bereich 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Schwierigkeit</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunker</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55km</span><span className="post-fact__label">Von Palma</span></div>
        </div>

        <h2>Praktische Informationen</h2>
        <p>Green Fees 2026: €115 Nebensaison (Januar, Dezember) bis €220 Hochsaison (März–Mai, September–Oktober). Vollständige Saisonübersicht auf golf-alcanada.com. Für Nicht-Mitglieder der spanischen Golfföderierung ist eine tägliche Golflizenz (€3 pro Person) erforderlich.</p>
        <p>Schlägermiete: TaylorMade-Sets für €38 pro 18 Löcher. Buggy €48, Elektrotrolley €20. Die Toptracer-Range ist ausgezeichnet für ein ordentliches Warm-up — nutzen Sie sie.</p>
        <p>Lage: Port d'Alcúdia, etwa 50 Minuten nördlich von Palma. Nehmen Sie sich Zeit und fahren Sie nicht überstürzt zurück.</p>

        <h2>Die Restaurantterrasse</h2>
        <p>Einer der besten Orte auf der Insel für ein Mittagessen nach der Runde. Das Restaurant wird von Grupo Babuxa betrieben — der Gruppe hinter den angesehenen Casa Gallega Restaurants in Palma — mediterrane Küche mit einer Seeterrasse direkt gegenüber dem Leuchtturm von Alcanada. Das Tagesmenü kostet etwa €30 pro Person. Planen Sie es ein — das ist kein Ort, von dem man schnell wegrennt.</p>

        <PostImage
          src="/images/alcanada-blog/alc-hero.jpg"
          alt="Terrasse des Alcanada Clubhauses"
          caption="Die Clubhaus-Terrasse."
        />

        <h2>Fazit</h2>
        <p>Alcanada ist der Platz, zu dem ich jemanden mitnehmen würde, wenn ich ihn in den Golf in Mallorca verlieben wollte. Die Greens werden Sie fordern. Die Fahrt nach Norden lohnt sich. Das Mittagessen danach ist Pflicht.</p>

        <div className="post-cta">
          <p>Alcanada ist einer meiner zwei Ankerkurse für Play-with-a-Pro-Tage. Möchten Sie ihn richtig spielen?</p>
          <a href="/play-with-a-pro">Das Play-with-a-Pro-Erlebnis ansehen →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
