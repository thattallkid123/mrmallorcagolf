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
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  description: "Santa Ponsa 1 golf course Mallorca reviewed by a PGA professional. One of Europe",
  alternates: { canonical: 'https://mrmallorcagolf.com/de/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  intro: "Einer der längsten Plätze der Insel. European-Tour-Geschichte. Und die Fairways sind weit genug für den Driver.",
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
          src="/images/santa-ponsa-blog/sp-hero.jpg"
          alt="Golf Santa Ponsa 1 — Wasserreflexion und Fairway"
          caption="Das 16. Grün. Der See beeinflusst den Anspielbereich und konzentriert den Geist erheblich."
        />

        <p>Santa Ponsa 1 ist der einzige öffentliche Platz der Santa-Ponsa-Gruppe und derjenige mit echtem European-Tour-Pedigree — er war Gastgeber der DP World Tour Mallorca Golf Open 2021. Dieser Platz brachte den professionellen Spitzengolf nach einem Jahrzehnt Pause zurück auf die Insel. Der Sieger, Jeff Winther, spielte zweimal eine 62 in den Anfangsrunden. Der Platz war bereit dafür.</p>

        <h2>Warum er zu meinem Spiel passt — und wahrscheinlich zu deinem</h2>
        <p>Ich sage etwas direkt: Dieser Platz hat mir geholfen, das Vertrauen in den Driver wiederzufinden. Nach Runden in Son Gual oder Alcanada, wo Course Management oft bedeutet, den Driver in der Tasche zu lassen, ist Santa Ponsa 1 ein völlig anderes Gespräch. Die Fairways sind breit, die Einstiegslöcher sind großzügig, und der Platz belohnt echte einen aggressiven Ansatz vom Abschlag.</p>
        <p>Mit meiner Weite habe ich nach einem guten Drive oft nur noch ein Pitching Wedge in die Par-4-Greens. Für Spieler mit durchschnittlicheren Weiten bietet der Platz bei Wind einen echten Test — aber es ist die Art von Herausforderung, die das Selbstvertrauen aufbaut statt es aufzureiben.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-1.jpg"
          alt="Fairway von Santa Ponsa 1 mit Bergen dahinter"
          caption="Die Fairways sind wirklich breit. Das ist ein Platz, der den Driver einlädt."
        />

        <h2>Das 10. Loch</h2>
        <p>Mit 590 Metern ist das 10. Loch eines der längsten Par-5 in Europa. Gegen den Wind gespielt fühlt es sich noch länger an. Es gibt eine wirklich befriedigende Version dieses Lochs — Driver, Hybrid, Wedge — und eine viel weniger befriedigende, wenn einer der drei Schläge misslingt. Die Par-3s sind das andere Ende der Skala: lang, mit kleinen Greens. Schadensbegrenzung, keine Birdie-Chancen.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-2.jpg"
          alt="Planlayout und Fairways von Santa Ponsa 1"
          caption="Das Layout. An einem ruhigen Tag schmeichelt dieser Platz dir. Mit Wind verdient er jeden Meter seiner Länge."
        />

        <h2>Die DP-World-Tour-Verbindung</h2>
        <p>Die Ausrichtung der DP World Tour Mallorca Golf Open 2021 war bedeutsam für die Insel. Es war das erste European-Tour-Event hier seit zehn Jahren, und Santa Ponsa 1 hat der Prüfung standgehalten. Der Platzzustand in der Turnierwoche, das Routing unter Druck, die möglichen Scores ohne dass der Platz aufgegeben wurde — alles hat funktioniert. Dieses Pedigree ist real, und es zeigt sich in der Art, wie sich der Platz den Besuchern präsentiert.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-3.jpg"
          alt="Anspiel auf ein Par-3 in Santa Ponsa 1"
          caption="Die Tramuntana-Berge dahinter. Löcher 5, 6 und 7 haben die besten Bergblicke."
        />

        <h2>Die Bergblicke</h2>
        <p>Löcher 5, 6 und 7 auf der Frontnine bieten einige der besten Tramuntana-Aussichten auf der Insel. Hohes Gras, alte Bäume, Wildblumen und die Berge, die alles dahinter rahmen. Es ist die Art von Kulisse, die einen schlechten Schlag etwas erträglicher macht. Etwas.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-5.jpg"
          alt="Andy Griffiths früh morgens auf Santa Ponsa 1"
          caption="Frühzeitiger Start. Um den Vormittag findet der Wind normalerweise den Platz."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€77–126</span><span className="post-fact__label">Green-Fee-Bereich 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Schwierigkeit</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Championship-Layout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">Für alle Besucher offen</span></div>
        </div>

        <h2>Green Fees 2026</h2>
        <p>Hochsaison (Mitte März bis Anfang Juni, Mitte September bis Anfang November): €126. Mittelsaison: €106. Nebensaison: €77. Vollständige Angaben auf golf-santaponsa.com. Ein gültiges WHS-Handicap-Zertifikat ist erforderlich.</p>
        <p>Buggy €43 für 18 Löcher. Schlägermiete €40. Der Platz ist öffentlich und frei buchbar — kein Mitgliederzugang erforderlich. In der Hochsaison frühzeitig buchen; die DP-World-Tour-Geschichte zieht Besucher an, die wissen, wozu sie kommen.</p>

        <h2>Fazit</h2>
        <p>Wenn du den Ball gut triffst und dich gut fühlen willst, spiel Santa Ponsa 1. Wenn du zwischen Son Gual und Alcanada für einen ernsthaften Tag entscheidest und etwas willst, das beide kontrastiert — offener, mehr Vertrauen aufbauend, mit echter European-Tour-Geschichte — ist das der Platz. Die Par-3s werden dich ehrlich halten. Der Rest der Runde gibt dir etwas zurück.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-4.jpg"
          alt="Aussichten über Santa Ponsa 1"
          caption="Die Backnine öffnen sich. Das 10. Loch ist von den hinteren Abschlägen 590 Meter lang — eines der längsten Par-5 in Europa."
        />

        <div className="post-cta">
          <p>Möchtest du Santa Ponsa 1 als Teil eines Mallorca-Golftages spielen? Ich kann das arrangieren.</p>
          <a href="/play-with-a-pro">Das Play-with-a-Pro-Erlebnis ansehen →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
