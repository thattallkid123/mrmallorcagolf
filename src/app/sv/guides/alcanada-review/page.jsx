import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'sv',
  title: 'Club de Golf Alcanada - Ärlig recension av en PGA Professional',
  description: 'Alcanada på Mallorca, sett genom ögonen på en PGA Professional som spelar där regelbundet. Fyren, greenerna, terrassen och greenfeen 2026.',
  imagePath: '/images/alcanada-blog/alc-7.jpg',
})

const meta = {
  badge: 'Banrecension',
  badgeGold: true,
  readTime: '6 min läsning',
  updated: 'Mars 2026',
  title: 'Club de Golf Alcanada - Ärlig recension av en PGA Professional',
  intro: 'Banan jag tar folk till när jag vill att de ska åka hem med en riktig historia. Fyren förändrar allt.',
  lang: 'sv',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf - Ärlig recension 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <PostLayout meta={meta} lang="sv">
        <p>Alcanada är banan jag tar folk till när jag vill att de ska komma hem med en historia att berätta. Det kan vara den mest minnesvärda rundan på ön. Fyren förändrar allt.</p>

        <h2>Miljön</h2>
        <p>Robert Trent Jones Jr. ritade Alcanada, och det han gjorde med den här kuststräckan är imponerande. När man står på de bakre tees, med fyren bakom sig och Medelhavet runt omkring, får man ett av de där sällsynta golfögonblicken då omgivningen nästan får en att glömma scorekortet.</p>
        <p>Fyren i Alcanada står på en liten ö strax utanför kusten och syns från 16 av 18 hål. En klar morgon, när havet ligger stilla och ljuset faller in över bukten, är det en av de vackraste golfmiljöer jag har spelat i någonstans i världen.</p>

        <h2>De bakre tees</h2>
        <p>Att stå på de upphöjda back tees är en upplevelse i sig. Man känner sig nästan oberörbar, så långt från allt annat att människorna där nere ser ut som små prickar. Fyren bakom dig, bukten framför dig och så en driver som ska skickas ut i tomrummet. Det är känslan.</p>

        <div className="post-pull">
          <p>"Att stå på de bakre tees på Alcanada är otroligt. Man känner sig oberörbar. Så långt bort från resten av världen. Alla ser ut som små prickar och du står där uppe, redo att slå en driver ut i intet."</p>
        </div>

        <h2>Greenerna</h2>
        <p>Det är här Alcanada verkligen förtjänar sitt rykte som tourvärdig bana. Efter ett krävande hål kommer man till greener som är starkt ondulerade, mycket snabba och fulla av obekväma puttar. Banan har 58 bunkrar, och de tvingar fram precisa inspel på nästan varje hål.</p>
        <p>Kombinationen av lutning, fart och subtila break gör Alcanada till mycket mer än bara en vacker kustbana. Den testar riktigt bra spelare på allvar.</p>

        <h2>Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada står värd för Rolex Challenge Tour Grand Final, som återkommer för sjätte gången i oktober 2026. Det här är inte en bana som bara putsas upp för ett evenemang. Det är en bana som alltid har haft nivån för det. När man står på tee märker man att samma hål här avgör professionella karriärer.</p>

        <h2>Designarvet</h2>
        <p>Robert Trent Jones Jr:s far ritade Valderrama - värd för Ryder Cup 1997 - och Spyglass Hill i Pebble Beach. RTJ Jr. ritade också Spring City Golf i Kunming, rankad som Kinas bästa bana av Golf Digest. Den linjen känns i Alcanada: inget verkar slumpmässigt, allt använder marken smart.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 115-220</span><span className="post-fact__label">Greenfees 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Svårighet</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkrar</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55 km</span><span className="post-fact__label">Från Palma</span></div>
        </div>

        <h2>Praktisk information</h2>
        <p>Greenfees 2026: EUR 115 i lågsäsong och upp till EUR 220 under toppperioderna mars till maj samt september till oktober. Hela översikten finns på golf-alcanada.com. För spelare utan spansk federationslicens tillkommer en daglig golflicens på EUR 3 per person.</p>
        <p>Klubbhyra: TaylorMade-set för EUR 38 per 18 hål. Buggy EUR 48, elektrisk trolley EUR 20. Toptracer-rangen är utmärkt för en ordentlig uppvärmning - använd den.</p>
        <p>Läge: Port d'Alcúdia, cirka 50 minuter norr om Palma. Avsätt tid och stressa inte direkt därifrån efter rundan.</p>

        <h2>Restaurangterrassen</h2>
        <p>En av de bästa platserna på ön för lunch efter rundan. Restaurangen drivs av Grupo Babuxa, gruppen bakom de välrenommerade Casa Gallega-restaurangerna i Palma. Medelhavsmat, terrass mot havet och direkt utsikt mot fyren i Alcanada. Deras lunchmeny ligger runt EUR 30 per person. Räkna med det - det här är ingen plats man vill lämna i hast.</p>

        <h2>Omdöme</h2>
        <p>Alcanada är banan jag skulle välja om jag ville få någon att bli kär i golf på Mallorca. Greenerna kommer att testa dig. Resan norrut är värd det. Och lunchen efteråt är inte förhandlingsbar.</p>

        <div className="post-cta">
          <p>Alcanada är en av mina två huvudbanor för play-with-a-pro-dagar. Vill du spela den på rätt sätt?</p>
          <a href="/sv/play-with-a-pro">Se play-with-a-pro-upplevelsen →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
