import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'de',
  title: 'Club de Golf Alcanada - Aus Sicht eines PGA Professionals',
  description: 'Alcanada auf Mallorca, bewertet von einem PGA Professional, der den Platz regelmäßig spielt. Leuchtturm, Grüns, Restaurantterrasse und Greenfees 2026.',
  imagePath: '/images/alcanada-blog/alc-7.jpg',
})

const meta = {
  badge: 'Platzbewertung',
  badgeGold: true,
  readTime: '6 Min. Lesezeit',
  updated: 'März 2026',
  title: 'Club de Golf Alcanada - Aus Sicht eines PGA Professionals',
  intro: 'Der Platz, zu dem ich Menschen mitnehme, wenn sie mit einer echten Geschichte nach Hause fahren sollen. Der Leuchtturm verändert alles.',
  lang: 'de',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf - Ehrliche Bewertung 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <PostLayout meta={meta} lang="de">
        <p>Alcanada ist der Platz, zu dem ich Menschen mitnehme, wenn ich möchte, dass sie mit einer Geschichte nach Hause kommen. Es ist vielleicht die einprägsamste Runde auf der Insel. Der Leuchtturm verändert alles.</p>

        <h2>Die Lage</h2>
        <p>Robert Trent Jones Jr. hat Alcanada entworfen, und was er mit diesem Küstenstreifen gemacht hat, ist bemerkenswert. Wenn man auf den hinteren Abschlägen steht, den Leuchtturm im Blick und das Mittelmeer in alle Richtungen offen, ist das einer dieser seltenen Golfmomente, in denen die Umgebung wichtiger wird als der Score.</p>
        <p>Der Leuchtturm von Alcanada steht auf einer kleinen Insel direkt vor der Küste und ist von 16 der 18 Löcher sichtbar. An einem klaren Morgen, wenn das Wasser ruhig ist und das Licht quer über die Bucht fällt, ist es einer der schönsten Golfschauplätze, die ich irgendwo auf der Welt erlebt habe.</p>

        <h2>Die hinteren Abschläge</h2>
        <p>Auf den erhöhten Back Tees zu stehen, ist ein Erlebnis für sich. Man fühlt sich unantastbar - so weit entfernt von allem anderen, dass alle unten wie kleine Punkte wirken. Der Leuchtturm hinter Ihnen, die Bucht vor Ihnen, und gleich schlagen Sie irgendwo in die Weite einen Driver. Genau das ist das Gefühl.</p>

        <div className="post-pull">
          <p>"Auf den hinteren Abschlägen von Alcanada zu stehen, ist unglaublich. Man fühlt sich unantastbar. So weit weg vom Rest der Welt. Alle sehen wie kleine Punkte aus und man steht dort oben, erhöht, bereit, den Driver ins Nichts zu schicken."</p>
        </div>

        <h2>Die Grüns</h2>
        <p>Hier verdient sich Alcanada sein Recht, Spitzenevents auszurichten. Nach einem anspruchsvollen Loch kommt man zu Grüns, die stark onduliert, sehr schnell und voller unangenehmer Putts sind. Die 58 Bunker im Layout erzwingen auf fast jedem Loch präzise Annäherungen.</p>
        <p>Die Mischung aus Neigung, Tempo und subtilen Breaks auf den Grüns hebt den Platz von einem nur schönen Küstenplatz zu einem Kurs, der starke Spieler wirklich prüft.</p>

        <h2>Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada ist Gastgeber des Rolex Challenge Tour Grand Final - 2026 bereits zum sechsten Mal. Das ist kein Platz, der sich nur für ein Turnier herausputzt. Es ist ein Platz, der schon immer die Qualität für eines hatte. Wenn man auf den Abschlägen steht, merkt man, dass hier dieselben Löcher über Tourkarten und Karrieren entscheiden.</p>

        <h2>Design-Herkunft</h2>
        <p>Der Vater von Robert Trent Jones Jr. entwarf Valderrama - Austragungsort des Ryder Cup 1997 - sowie Spyglass Hill in Pebble Beach. RTJ Jr. selbst gestaltete unter anderem Spring City Golf in Kunming, von Golf Digest als Chinas Nummer eins eingestuft. Diese Linie ist echt, und man sieht sie in Alcanadas Routing sofort: Nichts wirkt beliebig, alles nutzt das Gelände.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 115-220</span><span className="post-fact__label">Greenfee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Schwierigkeit</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunker</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55 km</span><span className="post-fact__label">Ab Palma</span></div>
        </div>

        <h2>Praktische Informationen</h2>
        <p>Greenfees 2026: EUR 115 in der Nebensaison von Januar bis Dezember und bis zu EUR 220 in den Spitzenzeiten März bis Mai sowie September bis Oktober. Die vollständige Saisonübersicht steht auf golf-alcanada.com. Für Spieler ohne spanische Föderationslizenz fällt zusätzlich eine tägliche Golflizenz von EUR 3 pro Person an.</p>
        <p>Leihschläger: TaylorMade-Sets für EUR 38 pro 18 Löcher. Buggy EUR 48, Elektrotrolley EUR 20. Die Toptracer-Range ist hervorragend für ein richtiges Warm-up - nutzen Sie sie.</p>
        <p>Lage: Port d'Alcúdia, etwa 50 Minuten nördlich von Palma. Planen Sie Zeit ein und hetzen Sie nach der Runde nicht sofort zurück.</p>

        <h2>Die Restaurantterrasse</h2>
        <p>Einer der besten Orte auf der Insel für ein Mittagessen nach der Runde. Das Restaurant wird von Grupo Babuxa betrieben - der Gruppe hinter den angesehenen Casa-Gallega-Restaurants in Palma. Mediterrane Küche, dazu eine Terrasse mit direktem Blick auf den Leuchtturm von Alcanada. Das Mittagsmenü liegt ungefähr bei EUR 30 pro Person. Planen Sie das mit ein - das ist kein Ort, den man überstürzt verlassen sollte.</p>

        <h2>Fazit</h2>
        <p>Alcanada ist der Platz, den ich jemandem zeigen würde, wenn ich möchte, dass er sich in Mallorca-Golf verliebt. Die Grüns prüfen Sie. Die Fahrt nach Norden lohnt sich. Und das Mittagessen danach ist nicht verhandelbar.</p>

        <div className="post-cta">
          <p>Alcanada ist einer meiner beiden Ankerplätze für Play-with-a-Pro-Tage. Möchten Sie den Platz richtig erleben?</p>
          <a href="/de/play-with-a-pro">Zum Play-with-a-Pro-Erlebnis →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
