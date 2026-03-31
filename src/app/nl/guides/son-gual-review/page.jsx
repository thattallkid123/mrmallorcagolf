import GuidePostView from '../../../guides/GuidePostView'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({slug: 'son-gual-review',
  locale: 'nl',
  title: "Son Gual Golf Mallorca — Eerlijke Recensie van een PGA Professional (2026)",
  description: "Son Gual golfbaan op Mallorca beoordeeld door een PGA professional die er regelmatig speelt.",
  imagePath: '/images/son-gual-blog/sg-hero.webp',
})

const meta = {badge: 'Baanrecensie', badgeGold: true, readTime: '6 min lezen', updated: 'Maart 2026',
  title: "Son Gual Golf Mallorca — Eerlijke Recensie van een PGA Professional (2026)",
  intro: "Mijn meest gespeelde baan op het eiland. De wind, de greens, de slotholes — en waarom Obama en Nadal blijven terugkomen.",
  lang: 'nl',
  related: [
    { slug: 'alcanada-review', title: 'Alcanada Golf — Eerlijke recensie 2026' },
    { slug: 'best-golf-courses-mallorca', title: 'Beste Golfbanen op Mallorca 2026' },
  ],
}

const blocks = [
{
  "type": "paragraph",
  "text": "Son Gual is mijn meest gespeelde baan op Mallorca en de baan die ik het meest consistent aanraad. Het is moeilijk, en iedereen die een ontspannen dag verwacht zal verrast zijn."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-hero.webp",
  "alt": "Son Gual Golf Course",
  "priority": true,
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "heading",
  "text": "De Eerste Afslagplaats"
},
{
  "type": "paragraph",
  "text": "De eerste keer dat ik Son Gual speelde, stond ik op de zwarte afslagen, de wind blies hard van links. De camera draaide voor een vlog. Ik was oprecht een beetje nerveus."
},
{
  "type": "paragraph",
  "text": "De drive raakte licht de hiel. Toch vloog hij verder dan verwacht en vermeed de bunkers — net. Er zijn zoveel bunkers op Son Gual, precies gepositioneerd waar licht misgeslagen slagen terechtkomen."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-1.jpg",
  "alt": "Son Gual fairway",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "heading",
  "text": "De Wind"
},
{
  "type": "paragraph",
  "text": "Son Gual lijkt in zijn eigen ecosysteem te leven. Ik verlaat mijn huis op een kalme ochtend en kom aan bij de eerste afslagplaats om te ontdekken dat het flink waait — en dat blijft vier uur zo."
},
{
  "type": "pull",
  "text": "Ik vertrok op een kalme ochtend en arriveerde bij de eerste afslagplaats om een stevige wind te vinden. Die bleef vier uur lang aanhouden."
},
{
  "type": "heading",
  "text": "De Greens"
},
{
  "type": "paragraph",
  "text": "Snel, verhoogd en meedogenloos bij slecht naderend spel. In januari waren de greens en de franje zo kort gemaaid dat het opmerkelijk was voor die tijd van het jaar."
},
{
  "type": "paragraph",
  "text": "Een van mijn speelpartners greep naar haar putter in de overtuiging dat ze op de green stond. Ze had nog ongeveer 30 yards franje voor zich. De verzorging is zo nauwkeurig."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-2.jpg",
  "alt": "Son Gual greens",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "heading",
  "text": "De Baan"
},
{
  "type": "paragraph",
  "text": "Thomas Himmels ontwerp uit 2007 maakt intelligent gebruik van de hoogteverschillen. Het 2e hole herbergt een van de grootste bunkers van Europa. De slotsequentie vanaf hole 15 wordt algemeen beschouwd als een van de mooiste afsluitingen in het Europese golf."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-3.webp",
  "alt": "Son Gual panoramic",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '21/9'},
  "imageStyle": {objectPosition: 'center 40%'}
},
{
  "type": "heading",
  "text": "Bekende Bezoekers"
},
{
  "type": "paragraph",
  "text": "Rafa Nadal speelt hier regelmatig — zijn verklaarde favoriete baan op het eiland. Barack Obama speelde in november 2024."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-4.jpg",
  "alt": "Son Gual Golf",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "facts",
  "items": [
    [
      "€80–165",
      "Greenfee bereik 2026"
    ],
    [
      "9/10",
      "Moeilijkheidsgraad"
    ],
    [
      "Par 72",
      "Kampioenschap layout"
    ],
    [
      "2007",
      "Ontworpen door Thomas Himmel"
    ]
  ]
},
{
  "type": "heading",
  "text": "Greenfees 2026"
},
{
  "type": "paragraph",
  "text": "Laagseizoen: €115. Januari onderhoud: €80/9 holes. Piek lente/herfst: €165. Zomer: €115."
},
{
  "type": "paragraph",
  "text": "Clubverhuur: Callaway €35, Titleist €45. Buggy €45, elektrische trolley vanaf €15. WHS handicapcertificaat vereist."
},
{
  "type": "heading",
  "text": "Oordeel"
},
{
  "type": "paragraph",
  "text": "Son Gual is mijn favoriete baan op Mallorca. Hij zou standhouden tegen elke baan die ik op mijn reizen gespeeld heb."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-5.jpg",
  "alt": "Son Gual closing holes",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "cta",
  "text": "Ik breng regelmatig klanten naar Son Gual. Wilt u het spelen met iemand die elk hole kent?",
  "href": "/nl/play-with-a-pro",
  "linkLabel": "Bekijk de play-with-a-pro ervaring →"
}
]

export default function Post() {
  return <GuidePostView locale="nl" meta={meta} blocks={blocks} />
}
