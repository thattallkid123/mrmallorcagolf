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
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/guides/alcanada-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Club de Golf Alcanada — A PGA Professional",
  intro: "Banan dit jag tar folk när jag vill att de ska komma hem med en historia. Fyren förändrar allt.",
  lang: 'sv',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <PostLayout meta={meta} lang="sv">
        <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',borderBottom:'1px solid var(--linen)',paddingBottom:'1rem',marginBottom:'1.5rem'}}>Denna artikel skrevs på engelska och är översatt till svenska.</p>

        <PostImage
          src="/images/alcanada-blog/alc-7.jpg"
          alt="Club de Golf Alcanada i gyllene timmen — fyr och bukt"
          caption="Alcanada i gyllene timmen. Fyren ligger på sin egen ö strax utanför kusten — synlig från 16 av de 18 hålen."
        />

        <p>Alcanada är banan dit jag tar folk när jag vill att de ska åka hem med en historia. Det är kanske den mest minnesvärda rundan på ön. Fyren förändrar allt.</p>

        <h2>Miljön</h2>
        <p>Robert Trent Jones Jr. designade Alcanada, och det han gjorde med den här kustremsan är anmärkningsvärt. När man står på de bakre teerna med fyren i ryggen och Medelhavet i alla riktningar är det ett av de där sällsynta golfögonblicken då omgivningen får en att glömma vad man slagit.</p>
        <p>Alcanada-fyren ligger på en liten ö strax utanför kusten, synlig från 16 av de 18 hålen. En klar morgon när vattnet är lugnt och ljuset faller in över bukten är det en av de vackraste miljöer jag spelat golf i var som helst i världen.</p>

        <PostImage
          src="/images/alcanada-blog/alc-6.jpg"
          alt="Gäst slår ett tee shot på Alcanada med fyren i bakgrunden"
          caption="Fyren bakom, havet till vänster, fairwayen sluttar nedåt framför."
        />

        <h2>De bakre teerna</h2>
        <p>Att stå på de upphöjda bakre teerna är en upplevelse i sig. Man känner sig oantastbar — så långt bort från allt annat att alla nedanför ser ut som bittesmå prickar. Fyren bakom dig, bukten som breder ut sig, och du ska strax slå drivern någonstans ut i avgrunden. Det är känslan.</p>

        <div className="post-pull">
          <p>„Att stå på de bakre teerna på Alcanada är otroligt. Man känner sig oantastbar. Så långt bort från resten av världen. Alla ser ut som bittesmå prickar och man står där, upphöjd, redo att slå drivern någonstans ut i tomma intet."</p>
        </div>

        <PostImage
          src="/images/alcanada-blog/alc-2.jpg"
          alt="Alcanada green med hav och berg bakom"
          caption="En klar morgon kan man se Tramuntana-bergen på andra sidan bukten."
        />

        <h2>Greenerna</h2>
        <p>Det är här Alcanada förtjänar rätten att arrangera elittävlingar. Efter att ha navigerat ett svårt hål anländer man till greener som är kraftigt kuperade, otroligt snabba och erbjuder mycket få enkla puttar. Femtioåtta bunkrar över hela layouten tvingar fram noggranna inslag på nästan varje hål.</p>
        <p>Kombinationen av lutning, hastighet och subtila brott på greenerna är det som skiljer detta från en rent pittoresk layout till något som verkligen testar skickliga spelare.</p>

        <PostImage
          src="/images/alcanada-blog/alc-5.jpg"
          alt="Golfare på Alcanada med Medelhavet bakom"
          caption="De bakre teerna på Alcanada ligger högt över fairwayen. Promenaden upp är värd det varje gång."
        />

        <h2>Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada är värd för Rolex Challenge Tour Grand Final — som återkommer för sjätte gången i oktober 2026. Det här är ingen bana uppklädd för ett tourevenemang. Det är en bana som alltid har förtjänat ett. Att spela samma hål som avgör en professionells spelkortsläge för säsongen är något man märker när man står på teen.</p>

        <PostImage
          src="/images/alcanada-blog/alc-1.jpg"
          alt="Rolex Grand Final på Alcanada — hål 16"
          caption="Rolex Challenge Tour Grand Final på Alcanada. Det återkommer för sjätte gången i oktober 2026."
        />

        <h2>Designarvet</h2>
        <p>Robert Trent Jones Jr:s far designade Valderrama — platsen för Ryder Cup 1997 — och Spyglass Hill på Pebble Beach. RTJ Jr. designade även Spring City Golf i Kunming, utsedd till Kinas bästa bana av Golf Digest. Arvet är äkta, och det syns i hur Alcanada är dragit — inget känns godtyckligt, allt utnyttjar terrängen.</p>

        <PostImage
          src="/images/alcanada-blog/alc-4.jpg"
          alt="Grupp golfare på Alcanada en sommarkväll"
          caption="En runda på sommarkvällen. Ljuset på Alcanada i juli är något alldeles speciellt."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€115–220</span><span className="post-fact__label">Green fee-intervall 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Svårighetsgrad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkrar</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55km</span><span className="post-fact__label">Från Palma</span></div>
        </div>

        <h2>Praktisk information</h2>
        <p>Green fees 2026: €115 lågsäsong (januari, december) till €220 högsäsong (mars–maj, september–oktober). Fullständig säsongsuppdelning på golf-alcanada.com. En daglig golflicens (€3 per person) krävs för icke-medlemmar i det spanska golfförbundet.</p>
        <p>Klubbhyra: TaylorMade-set för €38 per 18 hål. Buggy €48, eltrolley €20. Toptracer-rangen är utmärkt för en ordentlig uppvärmning — använd den.</p>
        <p>Läge: Port d'Alcúdia, ungefär 50 minuter norr om Palma. Ta dig tid och stressa inte hem.</p>

        <h2>Restaurangterrassen</h2>
        <p>En av de bästa platserna på ön för lunch efter rundan. Restaurangen drivs av Grupo Babuxa — gruppen bakom de välansedda Casa Gallega-restaurangerna i Palma — medelhavskök med en havsterrass som vetter direkt mot Alcanada-fyren. Deras lunchmeny kostar ungefär €30 per person. Räkna in det — det är inte en plats man rusar iväg från.</p>

        <PostImage
          src="/images/alcanada-blog/alc-hero.jpg"
          alt="Alcanadas klubbhusterrass"
          caption="Klubbhusterrassen."
        />

        <h2>Omdöme</h2>
        <p>Alcanada är banan dit jag skulle ta någon om jag ville att de skulle förälska sig i golf på Mallorca. Greenerna kommer att testa dig. Körningen norrut är värd det. Lunchen efteråt är inte förhandlingsbar.</p>

        <div className="post-cta">
          <p>Alcanada är en av mina två ankarbaner för play-with-a-pro-dagar. Vill du spela det ordentligt?</p>
          <a href="/play-with-a-pro">Se play-with-a-pro-upplevelsen →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
