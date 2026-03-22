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
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  intro: "En av öns längsta banor. European Tour-historia. Och fairwaysarna är tillräckligt breda för drivern.",
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
          src="/images/santa-ponsa-blog/sp-hero.jpg"
          alt="Golf Santa Ponsa 1 — vattenreflektion och fairway"
          caption="Det 16:e greenet. Sjön kommer in i spel på inslaget och skärper fokus avsevärt."
        />

        <p>Santa Ponsa 1 är den enda publika banan i Santa Ponsa-gruppen och den med äkta European Tour-pedigree — den stod värd för DP World Tour Mallorca Golf Open 2021. Det är banan som förde professionellt golf på högsta nivå tillbaka till ön efter ett decenniums frånvaro. Vinnaren, Jeff Winther, slog 62 två gånger i de inledande rundorna. Banan var redo för det.</p>

        <h2>Varför den passar mitt spel — och förmodligen ditt</h2>
        <p>Jag ska vara direkt om något: den här banan har hjälpt mig att återfinna förtroendet med drivern. Efter rundor på Son Gual eller Alcanada, där banhantering ofta innebär att drivern stannar i bagen, är Santa Ponsa 1 ett helt annat samtal. Fairwaysarna är breda, de inledande hålen är generösa, och banan belönar verkligen en aggressiv approach från teen.</p>
        <p>Med min distans har jag ofta bara ett pitching wedge kvar in mot par-4-greenerna efter ett bra drive. För spelare med mer typiska distanser bjuder banan på ett ordentligt test när vinden tar i — men det är den typen av utmaning som bygger förtroende snarare än att slita ned det.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-1.jpg"
          alt="Santa Ponsa 1 fairway med berg bakom"
          caption="Fairwaysarna är genuint breda. Det här är en bana som bjuder in drivern."
        />

        <h2>Hål 10</h2>
        <p>Med 590 meter är hål 10 ett av Europas längsta par-5. Att spela det mot vinden gör det ännu längre. Det finns en genuint tillfredsställande version av det hålet — driver, hybrid, wedge — och en mycket mindre tillfredsställande version där ett av de tre slagen går snett. Par-3-hålen är i andra änden av skalan: långa, med små greener. Skadebegränsning, inte birdielägen.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-2.jpg"
          alt="Banans layout och fairways på Santa Ponsa 1"
          caption="Layouten. En lugn dag smicker den här banan dig. Lägg till vind och den förtjänar varje meter av sin längd."
        />

        <h2>DP World Tour-kopplingen</h2>
        <p>Att stå värd för DP World Tour Mallorca Golf Open 2021 var betydelsefullt för ön. Det var det första European Tour-evenemanget här på tio år, och Santa Ponsa 1 höll måttet under granskning. Banans skick under tävlingsveckan, dragningen under press, de scores som var möjliga utan att banan kapitulerade — allt fungerade. Det pedigreet är äkta, och det syns i hur banan presenterar sig för besökare.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-3.jpg"
          alt="Santa Ponsa 1, inslag mot ett par-3"
          caption="Tramuntana-bergen i bakgrunden. Hål 5, 6 och 7 har de bästa bergutsikterna."
        />

        <h2>Bergutsikterna</h2>
        <p>Hål 5, 6 och 7 på front nine erbjuder några av öns bästa Tramuntana-vyer. Högt gräs, gamla träd, vilda blommor, och bergen som ramar in allt i bakgrunden. Det är den typen av kuliss som gör ett dåligt slag lite mer uthärdligt. Lite.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-5.jpg"
          alt="Andy Griffiths på Santa Ponsa 1 tidigt på morgonen"
          caption="Tidig start. Vid förmiddagen hittar vinden vanligtvis banan."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€77–126</span><span className="post-fact__label">Green fee-intervall 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Svårighetsgrad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Mästerskapslayout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">Öppen för alla besökare</span></div>
        </div>

        <h2>Green fees 2026</h2>
        <p>Högsäsong (mitten av mars till början av juni, mitten av september till början av november): €126. Mellansäsong: €106. Lågsäsong: €77. Fullständig information på golf-santaponsa.com. Ett giltigt WHS-handicapcertifikat krävs.</p>
        <p>Buggy €43 för 18 hål. Klubbhyra €40. Banan är publik och fritt bokningsbar — inget medlemskap krävs. Boka i förväg under högsäsong; DP World Tour-historiken lockar besökare som vet vad de kommer för.</p>

        <h2>Omdöme</h2>
        <p>Om du slår bollen bra och vill ha en bra känsla av det, spela Santa Ponsa 1. Om du väljer mellan Son Gual och Alcanada för en seriös dag och vill ha något som kontrasterar med båda — öppnare, mer förtroendebyggande, med riktig European Tour-historia — är det den här banan. Par-3-hålen håller dig ärlig. Resten av rundan ger dig något tillbaka.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-4.jpg"
          alt="Vyer över Santa Ponsa 1"
          caption="Back nine öppnar upp sig. Hål 10 är 590 meter från de bakre teerna — ett av Europas längsta par-5."
        />

        <div className="post-cta">
          <p>Vill du spela Santa Ponsa 1 som en del av en Mallorca-golfdag? Jag kan ordna det.</p>
          <a href="/play-with-a-pro">Se play-with-a-pro-upplevelsen →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
