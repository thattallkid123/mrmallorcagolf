import GuidePostView from '../../../guides/GuidePostView'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'santa-ponsa-1-review',
  locale: 'sv',
  title: 'Golf Santa Ponsa 1, Mallorca - Ärlig recension av en PGA Professional',
  description: 'Santa Ponsa 1 på Mallorca, sett genom ögonen på en PGA Professional. Tourhistoria, generösa fairways och förnyat självförtroende med drivern.',
  imagePath: '/images/santa-ponsa-blog/sp-hero.jpg',
})

const meta = {
  badge: 'Banrecension',
  badgeGold: true,
  readTime: '6 min läsning',
  updated: 'Mars 2026',
  title: 'Golf Santa Ponsa 1, Mallorca - Ärlig recension av en PGA Professional',
  intro: 'En av öns längsta banor. Riktig European Tour-historia. Och fairways som är breda nog för drivern.',
  lang: 'sv',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf - Ärlig recension 2026' },
  ],
}

const blocks = [
{
  "type": "paragraph",
  "text": "Santa Ponsa 1 är den enda publika banan i Santa Ponsa-gruppen och den med äkta European Tour-meriter. Här spelades Mallorca Golf Open på DP World Tour 2021. Det var banan som tog toppgolf tillbaka till ön efter ett årtionde utan tourgolf. Vinnaren Jeff Winther öppnade med två rundor på 62. Banan var redo för det."
},
{
  "type": "heading",
  "text": "Varför den passar mitt spel - och troligen också ditt"
},
{
  "type": "paragraph",
  "text": "Jag kan säga det rakt ut: den här banan har hjälpt mig att hitta tillbaka till självförtroendet med drivern. Efter rundor på Son Gual eller Alcanada, där bra banstrategi ofta betyder att lämna drivern i bagen, är Santa Ponsa 1 något helt annat. Fairways är breda, de första hålen generösa, och banan belönar verkligen ett offensivt spel från tee."
},
{
  "type": "paragraph",
  "text": "Med min längd har jag ofta bara en wedge kvar in på par 4-greener efter en bra drive. För spelare med mer normal längd blir det en ordentlig utmaning när vinden kommer in, men det är den sortens utmaning som bygger självförtroende snarare än bryter ner det."
},
{
  "type": "heading",
  "text": "Hål 10"
},
{
  "type": "paragraph",
  "text": "Med sina 590 meter är 10:e ett av Europas längsta par 5-hål. Spelat rakt in i vinden känns det ännu längre. Det finns en mycket tillfredsställande version av hålet - driver, hybrid, wedge - och en betydligt mindre trevlig version där ett av de tre slagen går fel. Par 3-hålen är den andra ytterligheten: långa, med små greener. Här handlar det mer om att begränsa skadan än att jaga birdies."
},
{
  "type": "heading",
  "text": "Kopplingen till DP World Tour"
},
{
  "type": "paragraph",
  "text": "Att vara värd för Mallorca Golf Open 2021 var viktigt för ön. Det var det första European Tour-evenemanget här på tio år, och Santa Ponsa 1 stod upp för uppgiften. Banskicket under tävlingsveckan, routingen under press och de scorer som var möjliga utan att banan gav upp - allt fungerade. Den här kvaliteten är äkta, och den märks direkt när man spelar banan som besökare."
},
{
  "type": "heading",
  "text": "Utsikten mot Tramuntana"
},
{
  "type": "paragraph",
  "text": "Hål 5, 6 och 7 på första nio erbjuder några av de bästa Tramuntana-vyerna på hela ön. Högt gräs, mogna träd, vildblommor och bergen som kuliss i bakgrunden. Det är den sortens vy som gör ett dåligt slag lite mer uthärdligt. Lite."
},
{
  "type": "facts",
  "items": [
    [
      "EUR 77-126",
      "Greenfees 2026"
    ],
    [
      "8/10",
      "Svårighet"
    ],
    [
      "Par 72",
      "Championship-layout"
    ],
    [
      "Publik",
      "Öppen för besökare"
    ]
  ]
},
{
  "type": "heading",
  "text": "Greenfees 2026"
},
{
  "type": "paragraph",
  "text": "Högsäsong från mitten av mars till början av juni och från mitten av september till början av november: EUR 126. Mellansäsong: EUR 106. Lågsäsong: EUR 77. Fullständig prislista finns på golf-santaponsa.com. Giltigt WHS-handicapintyg krävs."
},
{
  "type": "paragraph",
  "text": "Buggy: EUR 43 för 18 hål. Klubbhyra: EUR 40. Banan är publik och fritt bokningsbar - inget medlemskap krävs. Boka i god tid under högsäsong; DP World Tour-historien lockar spelare som vet exakt varför de vill spela här."
},
{
  "type": "heading",
  "text": "Omdöme"
},
{
  "type": "paragraph",
  "text": "Om du slår drivern bra och vill bygga vidare på den känslan ska du spela Santa Ponsa 1. Om du står mellan Son Gual och Alcanada för en större golfdag och vill ha något som kontrasterar mot båda - öppnare, mer självförtroendegivande och med riktig European Tour-historia - då är det här banan. Par 3-hålen håller dig ärlig. Resten av rundan ger dig mycket tillbaka."
},
{
  "type": "cta",
  "text": "Vill du spela Santa Ponsa 1 som en del av en golfdag på Mallorca? Jag kan ordna det.",
  "href": "/sv/play-with-a-pro",
  "linkLabel": "Se play-with-a-pro-upplevelsen →"
}
]

export default function Post() {
  return <GuidePostView locale="sv" meta={meta} blocks={blocks} />
}
