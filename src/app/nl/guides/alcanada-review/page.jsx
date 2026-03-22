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
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/guides/alcanada-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Club de Golf Alcanada — A PGA Professional",
  intro: "De baan waar ik mensen naartoe breng als ik wil dat ze met een verhaal thuiskomen. De vuurtoren verandert alles.",
  lang: 'nl',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <PostLayout meta={meta} lang="nl">

        <PostImage
          src="/images/alcanada-blog/alc-7.jpg"
          alt="Club de Golf Alcanada in het gouden uur — vuurtoren en baai"
          caption="Alcanada in het gouden uur. De vuurtoren staat op zijn eigen eilandje voor de kust — zichtbaar vanaf 16 van de 18 holes."
        />

        <p>Alcanada is de baan waar ik mensen naartoe breng als ik wil dat ze met een verhaal naar huis gaan. Het is misschien de meest onvergetelijke ronde op het eiland. De vuurtoren verandert alles.</p>

        <h2>De omgeving</h2>
        <p>Robert Trent Jones Jr. ontwierp Alcanada, en wat hij met deze kuststrook heeft gedaan is opmerkelijk. Wanneer je op de achterste tees staat met de vuurtoren achter je en de Middellandse Zee in alle richtingen, is dit een van die zeldzame golfmomenten waarbij de omgeving je doet vergeten wat je gescoord hebt.</p>
        <p>De vuurtoren van Alcanada staat op een klein eilandje vlak voor de kust, zichtbaar vanaf 16 van de 18 holes. Op een heldere ochtend met kalm water en het licht dat over de baai valt, is het een van de mooiste omgevingen waar ik ooit ter wereld golf heb gespeeld.</p>

        <PostImage
          src="/images/alcanada-blog/alc-6.jpg"
          alt="Gast slaat af op Alcanada met de vuurtoren op de achtergrond"
          caption="De vuurtoren achter je, de zee links, het fairway dat voor je afdaalt."
        />

        <h2>De achterste tees</h2>
        <p>Staan op de verhoogde achterste tees is op zichzelf al een ervaring. Je voelt je onaantastbaar — zo ver van alles vandaan dat iedereen beneden eruitziet als een minuscuul stipje. De vuurtoren achter je, de baai die zich uitstrekt, en je staat op het punt om de driver ergens de diepte in te slaan. Dat is het gevoel.</p>

        <div className="post-pull">
          <p>„Op de achterste tees in Alcanada staan is ongelooflijk. Je voelt je onaantastbaar. Zo ver weg van de rest van de wereld. Iedereen ziet eruit als een tiny stipje en jij staat daar, hoog boven alles, klaar om de driver ergens in het niets te slaan."</p>
        </div>

        <PostImage
          src="/images/alcanada-blog/alc-2.jpg"
          alt="Alcanada green met zee en bergen op de achtergrond"
          caption="Op een heldere ochtend kun je de Tramuntana-gebergten aan de overkant van de baai zien."
        />

        <h2>De greens</h2>
        <p>Hier verdient Alcanada het recht om elitewedstrijden te organiseren. Na het navigeren van een moeilijk hole, kom je aan bij greens die sterk golvend zijn, enorm snel, en nauwelijks eenvoudige putts bieden. Achtenvijftig bunkers over het hele parcours dwingen tot nauwkeurige approaches op bijna elk hole.</p>
        <p>De combinatie van helling, snelheid en subtiele breaks op de greens is wat dit onderscheidt van een louter schilderachtige lay-out en het iets maakt dat vaardige spelers echt op de proef stelt.</p>

        <PostImage
          src="/images/alcanada-blog/alc-5.jpg"
          alt="Golfers op Alcanada met de Middellandse Zee achter hen"
          caption="De achterste tees van Alcanada liggen ver boven het fairway. De wandeling omhoog is elke keer de moeite waard."
        />

        <h2>De Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada organiseert de Rolex Challenge Tour Grand Final — die in oktober 2026 voor de zesde keer terugkeert. Dit is geen baan die opgesierd is voor een toerevenement. Het is een baan die er altijd al waardig voor was. De holes spelen die de spelerskaart van een professional voor het seizoen bepalen — dat merk je wanneer je op de tee staat.</p>

        <PostImage
          src="/images/alcanada-blog/alc-1.jpg"
          alt="Rolex Grand Final in Alcanada — hole 16"
          caption="De Rolex Challenge Tour Grand Final in Alcanada. Het keert in oktober 2026 voor de zesde keer terug."
        />

        <h2>Ontwerpgeschiedenis</h2>
        <p>De vader van Robert Trent Jones Jr. ontwierp Valderrama — de locatie van de Ryder Cup 1997 — en Spyglass Hill op Pebble Beach. RTJ Jr. ontwierp ook Spring City Golf in Kunming, door Golf Digest uitgeroepen tot de beste baan van China. De lijn is authentiek, en dat is te zien in hoe Alcanada is aangelegd — niets voelt willekeurig, alles benut het terrein.</p>

        <PostImage
          src="/images/alcanada-blog/alc-4.jpg"
          alt="Groep golfers op Alcanada op een zomerse avond"
          caption="Een avondronde in de zomer. Het licht op Alcanada in juli is bijzonder."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€115–220</span><span className="post-fact__label">Green fee bereik 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Moeilijkheid</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkers</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55km</span><span className="post-fact__label">Vanuit Palma</span></div>
        </div>

        <h2>Praktische informatie</h2>
        <p>Green fees 2026: €115 laagseizoen (januari, december) tot €220 hoogseizoen (maart–mei, september–oktober). Volledig seizoensoverzicht op golf-alcanada.com. Een dagelijkse golflicentie (€3 per persoon) is verplicht voor niet-leden van de Spaanse Golfbond.</p>
        <p>Clubverhuur: TaylorMade sets voor €38 per 18 holes. Buggy €48, elektrische trolley €20. De Toptracer driving range is uitstekend voor een goede warming-up — gebruik hem.</p>
        <p>Ligging: Port d'Alcúdia, ongeveer 50 minuten ten noorden van Palma. Neem de tijd en haast je niet terug.</p>

        <h2>Het restaurantterras</h2>
        <p>Een van de beste plekken op het eiland voor een lunch na de ronde. Het restaurant wordt gerund door Grupo Babuxa — de groep achter de gerenommeerde Casa Gallega-restaurants in Palma — mediterrane keuken met een zeeterras dat direct uitkijkt op de vuurtoren van Alcanada. Hun vaste lunchmenu kost ongeveer €30 per persoon. Neem het mee in de planning — dit is geen plek om snel te verlaten.</p>

        <PostImage
          src="/images/alcanada-blog/alc-hero.jpg"
          alt="Terras van het clubhouse van Alcanada"
          caption="Het clubhuisterras."
        />

        <h2>Oordeel</h2>
        <p>Alcanada is de baan waar ik iemand naartoe zou brengen als ik wil dat ze verliefd worden op golf in Mallorca. De greens zullen je testen. De rit naar het noorden is de moeite waard. De lunch daarna is niet onderhandelbaar.</p>

        <div className="post-cta">
          <p>Alcanada is een van mijn twee ankerbanen voor play-with-a-pro-dagen. Wil je hem goed spelen?</p>
          <a href="/play-with-a-pro">Bekijk de play-with-a-pro-ervaring →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
