import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: 'Golf Santa Ponsa 1, Mallorca - Aus Sicht eines PGA Professionals',
  description: 'Santa Ponsa 1 auf Mallorca, bewertet von einem PGA Professional. Tour-Geschichte, breite Fairways und ein Platz, der Vertrauen vom Tee gibt.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Platzbewertung',
  badgeGold: true,
  readTime: '6 Min. Lesezeit',
  updated: 'März 2026',
  title: 'Golf Santa Ponsa 1, Mallorca - Aus Sicht eines PGA Professionals',
  intro: 'Einer der längsten Plätze der Insel. European-Tour-Geschichte. Und Fairways, die weit genug für den Driver sind.',
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
        <p>Santa Ponsa 1 ist der einzige öffentliche Platz der Santa-Ponsa-Gruppe und derjenige mit echter European-Tour-Historie. Hier fand 2021 die Mallorca Golf Open der DP World Tour statt. Dieser Platz brachte Spitzengolf nach einem Jahrzehnt Pause zurück auf die Insel. Jeff Winther gewann damals und eröffnete das Turnier gleich mit zwei 62er-Runden. Der Platz war bereit dafür.</p>

        <h2>Warum dieser Platz zu meinem Spiel passt - und wahrscheinlich auch zu Ihrem</h2>
        <p>Etwas ganz direkt: Dieser Platz hat mir geholfen, mit dem Driver wieder Selbstvertrauen zu finden. Nach Runden auf Son Gual oder Alcanada, wo gutes Course Management oft bedeutet, den Driver im Bag zu lassen, ist Santa Ponsa 1 ein völlig anderes Gespräch. Die Fairways sind breit, die ersten Löcher großzügig, und der Platz belohnt einen mutigen Ansatz vom Tee.</p>
        <p>Mit meiner Länge habe ich nach einem guten Abschlag oft nur noch ein Pitching Wedge ins Grün eines Par 4. Für Spieler mit normalerer Länge wird der Platz bei Wind zu einer echten Prüfung - aber auf die Art, die Vertrauen aufbaut, statt es kleinzumahlen.</p>

        <h2>Das 10. Loch</h2>
        <p>Mit 590 Metern ist die 10 eines der längsten Par 5 Europas. Gegen den Wind spielt es sich noch länger. Es gibt eine sehr befriedigende Version dieses Lochs - Driver, Hybrid, Wedge - und eine deutlich weniger befriedigende Version, bei der einer dieser drei Schläge misslingt. Die Par 3s sind das andere Extrem: lang und mit kleinen Grüns. Hier geht es eher um Schadensbegrenzung als um Birdiechancen.</p>

        <h2>Die Verbindung zur DP World Tour</h2>
        <p>Die Austragung der Mallorca Golf Open 2021 war für die Insel bedeutend. Es war das erste European-Tour-Event hier seit zehn Jahren, und Santa Ponsa 1 hielt diesem Blick stand. Der Platzzustand in der Turnierwoche, das Routing unter Druck, die möglichen Scores, ohne dass der Platz kapitulierte - all das funktionierte. Diese sportliche Qualität ist real, und man merkt sie sofort, wenn man den Platz selbst spielt.</p>

        <h2>Die Bergblicke</h2>
        <p>Die Löcher 5, 6 und 7 auf den Front Nine bieten einige der schönsten Blicke auf das Tramuntana-Gebirge auf ganz Mallorca. Hohes Gras, alte Bäume, Wildblumen und dahinter die Berge als Kulisse. Das ist die Art Panorama, die selbst einen schlechten Schlag ein kleines bisschen verzeihbarer macht. Ein kleines bisschen.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 77-126</span><span className="post-fact__label">Greenfee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Schwierigkeit</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Championship-Layout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Öffentlich</span><span className="post-fact__label">Für Gäste buchbar</span></div>
        </div>

        <h2>Greenfees 2026</h2>
        <p>Hochsaison von Mitte März bis Anfang Juni sowie von Mitte September bis Anfang November: EUR 126. Zwischensaison: EUR 106. Nebensaison: EUR 77. Die vollständigen Preise stehen auf golf-santaponsa.com. Ein gültiger WHS-Handicapnachweis ist erforderlich.</p>
        <p>Buggy: EUR 43 für 18 Löcher. Leihschläger: EUR 40. Der Platz ist öffentlich und frei buchbar - ohne Mitgliederzugang. In der Hochsaison lohnt sich frühes Buchen; die DP-World-Tour-Vergangenheit zieht Besucher an, die genau wissen, warum sie hier spielen wollen.</p>

        <h2>Fazit</h2>
        <p>Wenn Sie den Ball gut vom Tee schlagen und dieses Gefühl genießen wollen, spielen Sie Santa Ponsa 1. Wenn Sie zwischen Son Gual und Alcanada einen Kontrast suchen - offener, vertrauensfördernder und mit echter European-Tour-Geschichte - dann ist das hier der Platz. Die Par 3s halten Sie ehrlich. Der Rest der Runde gibt Ihnen dafür auch etwas zurück.</p>

        <div className="post-cta">
          <p>Möchten Sie Santa Ponsa 1 als Teil eines Golftags auf Mallorca spielen? Ich kann das für Sie organisieren.</p>
          <a href="/de/play-with-a-pro">Zum Play-with-a-Pro-Erlebnis →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
