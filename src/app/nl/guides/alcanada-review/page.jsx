import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'nl',
  title: 'Club de Golf Alcanada - Eerlijke review van een PGA Professional',
  description: 'Alcanada op Mallorca, bekeken door een PGA Professional die er regelmatig speelt. De vuurtoren, de greens, het terras en de greenfees voor 2026.',
  imagePath: '/images/alcanada-blog/alc-7.jpg',
})

const meta = {
  badge: 'Baanreview',
  badgeGold: true,
  readTime: '6 min leestijd',
  updated: 'Maart 2026',
  title: 'Club de Golf Alcanada - Eerlijke review van een PGA Professional',
  intro: 'De baan waar ik mensen mee naartoe neem als ik wil dat ze met een echt verhaal naar huis gaan. De vuurtoren verandert alles.',
  lang: 'nl',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf - Eerlijke review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <PostLayout meta={meta} lang="nl">
        <p>Alcanada is de baan waar ik mensen mee naartoe neem als ik wil dat ze thuiskomen met een verhaal. Het is misschien wel de meest memorabele ronde op het eiland. De vuurtoren verandert alles.</p>

        <h2>De setting</h2>
        <p>Robert Trent Jones Jr. ontwierp Alcanada, en wat hij met deze kuststrook heeft gedaan is bijzonder. Als je op de achterste tees staat, met de vuurtoren achter je en de Middellandse Zee rondom, heb je zo'n zeldzaam golfmoment waarop de omgeving je bijna je score laat vergeten.</p>
        <p>De vuurtoren van Alcanada staat op een klein eilandje vlak voor de kust en is zichtbaar vanaf 16 van de 18 holes. Op een heldere ochtend, met rustig water en licht over de baai, is dit een van de mooiste golfsettings die ik ooit heb meegemaakt.</p>

        <h2>De achterste tees</h2>
        <p>Op de verhoogde back tees staan is een ervaring op zich. Je voelt je onaantastbaar, zo ver weg van alles dat iedereen beneden eruitziet als een stipje. De vuurtoren achter je, de baai voor je, en jij staat op het punt ergens de diepte in te slaan met een driver. Dat is precies het gevoel.</p>

        <div className="post-pull">
          <p>"Op de achterste tees van Alcanada staan is geweldig. Je voelt je onaantastbaar. Zo ver van de rest van de wereld. Iedereen lijkt een stipje en jij staat daar boven, klaar om de driver ergens de leegte in te slaan."</p>
        </div>

        <h2>De greens</h2>
        <p>Hier verdient Alcanada echt zijn reputatie als toernooibaan. Na een lastige hole kom je op greens die sterk glooiend, heel snel en vol lastige putts zijn. De 58 bunkers dwingen je bijna overal tot precieze approaches.</p>
        <p>De combinatie van helling, snelheid en subtiele breaks maakt Alcanada veel meer dan alleen een mooie kustbaan. Het is echt een test voor goede spelers.</p>

        <h2>Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada is gastheer van de Rolex Challenge Tour Grand Final, die in oktober 2026 voor de zesde keer terugkeert. Dit is geen baan die zich alleen voor een toernooi oppoetst. Het is een baan die altijd al dat niveau had. Als je op de tee staat, voel je dat dezelfde holes hier beslissen over professionele carrières.</p>

        <h2>Ontwerpafkomst</h2>
        <p>De vader van Robert Trent Jones Jr. ontwierp Valderrama - locatie van de Ryder Cup van 1997 - en Spyglass Hill in Pebble Beach. RTJ Jr. ontwierp ook Spring City Golf in Kunming, door Golf Digest uitgeroepen tot nummer één van China. Die lijn voel je in Alcanada: niets lijkt willekeurig, alles gebruikt het landschap slim.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 115-220</span><span className="post-fact__label">Greenfees 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Moeilijkheid</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkers</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55 km</span><span className="post-fact__label">Vanaf Palma</span></div>
        </div>

        <h2>Praktische info</h2>
        <p>Greenfees 2026: EUR 115 in het laagseizoen en tot EUR 220 in de piekperiodes van maart tot mei en van september tot oktober. Het volledige seizoensoverzicht staat op golf-alcanada.com. Voor spelers zonder Spaanse federatielicentie geldt een dagelijkse golftoeslag van EUR 3 per persoon.</p>
        <p>Clubhuur: TaylorMade-sets voor EUR 38 per 18 holes. Buggy EUR 48, elektrische trolley EUR 20. De Toptracer-range is uitstekend voor een serieuze warming-up - gebruik hem.</p>
        <p>Locatie: Port d'Alcúdia, ongeveer 50 minuten ten noorden van Palma. Neem de tijd en ga na de ronde niet meteen weer weg.</p>

        <h2>Het restaurantterras</h2>
        <p>Een van de beste plekken op het eiland voor lunch na je ronde. Het restaurant wordt gerund door Grupo Babuxa, de groep achter de goed aangeschreven Casa Gallega-restaurants in Palma. Mediterrane keuken, een terras aan zee en direct uitzicht op de vuurtoren van Alcanada. Hun lunchmenu ligt rond de EUR 30 per persoon. Plan het mee in - dit is geen plek om haastig te verlaten.</p>

        <h2>Oordeel</h2>
        <p>Alcanada is de baan die ik iemand zou laten spelen als ik wil dat diegene verliefd wordt op golf op Mallorca. De greens testen je. De rit naar het noorden is het waard. En de lunch achteraf is niet onderhandelbaar.</p>

        <div className="post-cta">
          <p>Alcanada is een van mijn twee basisbanen voor play-with-a-pro-dagen. Wil je hem echt goed spelen?</p>
          <a href="/nl/play-with-a-pro">Bekijk de play-with-a-pro-ervaring →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
