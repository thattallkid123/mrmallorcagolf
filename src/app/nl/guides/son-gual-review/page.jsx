import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'son-gual-review',
  locale: 'nl',
  title: "Son Gual Golf Mallorca — Eerlijke Recensie van een PGA Professional (2026)",
  description: "Son Gual golfbaan op Mallorca beoordeeld door een PGA professional die er regelmatig speelt.",
  imagePath: '/images/son-gual-blog/sg-hero.webp',
})

const meta = {
  badge: 'Baanrecensie', badgeGold: true, readTime: '6 min lezen', updated: 'Maart 2026',
  title: "Son Gual Golf Mallorca — Eerlijke Recensie van een PGA Professional (2026)",
  intro: "Mijn meest gespeelde baan op het eiland. De wind, de greens, de slotholes — en waarom Obama en Nadal blijven terugkomen.",
  lang: 'nl',
  related: [
    { slug: 'alcanada-review', title: 'Alcanada Golf — Eerlijke recensie 2026' },
    { slug: 'best-golf-courses-mallorca', title: 'Beste Golfbanen op Mallorca 2026' },
  ],
}


export default function Post() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <PostLayout meta={meta} lang="nl">
        

        <p>Son Gual is mijn meest gespeelde baan op Mallorca en de baan die ik het meest consistent aanraad. Het is moeilijk, en iedereen die een ontspannen dag verwacht zal verrast zijn.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-hero.webp" alt="Son Gual Golf Course" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>De Eerste Afslagplaats</h2>
        <p>De eerste keer dat ik Son Gual speelde, stond ik op de zwarte afslagen, de wind blies hard van links. De camera draaide voor een vlog. Ik was oprecht een beetje nerveus.</p>
        <p>De drive raakte licht de hiel. Toch vloog hij verder dan verwacht en vermeed de bunkers — net. Er zijn zoveel bunkers op Son Gual, precies gepositioneerd waar licht misgeslagen slagen terechtkomen.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-1.jpg" alt="Son Gual fairway" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>De Wind</h2>
        <p>Son Gual lijkt in zijn eigen ecosysteem te leven. Ik verlaat mijn huis op een kalme ochtend en kom aan bij de eerste afslagplaats om te ontdekken dat het flink waait — en dat blijft vier uur zo.</p>
        <div className="post-pull"><p>"Ik vertrok op een kalme ochtend en arriveerde bij de eerste afslagplaats om een stevige wind te vinden. Die bleef vier uur lang aanhouden."</p></div>
        <h2>De Greens</h2>
        <p>Snel, verhoogd en meedogenloos bij slecht naderend spel. In januari waren de greens en de franje zo kort gemaaid dat het opmerkelijk was voor die tijd van het jaar.</p>
        <p>Een van mijn speelpartners greep naar haar putter in de overtuiging dat ze op de green stond. Ze had nog ongeveer 30 yards franje voor zich. De verzorging is zo nauwkeurig.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-2.jpg" alt="Son Gual greens" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>De Baan</h2>
        <p>Thomas Himmels ontwerp uit 2007 maakt intelligent gebruik van de hoogteverschillen. Het 2e hole herbergt een van de grootste bunkers van Europa. De slotsequentie vanaf hole 15 wordt algemeen beschouwd als een van de mooiste afsluitingen in het Europese golf.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'21/9'}}>
          <img src="/images/son-gual-blog/sg-3.webp" alt="Son Gual panoramic" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%'}} />
        </div>
        <h2>Bekende Bezoekers</h2>
        <p>Rafa Nadal speelt hier regelmatig — zijn verklaarde favoriete baan op het eiland. Barack Obama speelde in november 2024.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-4.jpg" alt="Son Gual Golf" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€80–165</span><span className="post-fact__label">Greenfee bereik 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label">Moeilijkheidsgraad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Kampioenschap layout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label">Ontworpen door Thomas Himmel</span></div>
        </div>
        <h2>Greenfees 2026</h2>
        <p>Laagseizoen: €115. Januari onderhoud: €80/9 holes. Piek lente/herfst: €165. Zomer: €115.</p>
        <p>Clubverhuur: Callaway €35, Titleist €45. Buggy €45, elektrische trolley vanaf €15. WHS handicapcertificaat vereist.</p>
        <h2>Oordeel</h2>
        <p>Son Gual is mijn favoriete baan op Mallorca. Hij zou standhouden tegen elke baan die ik op mijn reizen gespeeld heb.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-5.jpg" alt="Son Gual closing holes" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-cta">
          <p>Ik breng regelmatig klanten naar Son Gual. Wilt u het spelen met iemand die elk hole kent?</p>
          <a href="/nl/play-with-a-pro">Bekijk de play-with-a-pro ervaring →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}

