import GuidePostView from '../../../guides/GuidePostView'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'son-gual-review',
  locale: 'sv',
  title: "Son Gual Golf Mallorca — Ärlig Recension av en PGA-proffs (2026)",
  description: "Son Gual golfbana på Mallorca recenserad av en PGA-proffs.",
  imagePath: '/images/son-gual-blog/sg-hero.webp',
})

const meta = {
  badge: 'Banrecension', badgeGold: true, readTime: '6 min läsning', updated: 'Mars 2026',
  title: "Son Gual Golf Mallorca — Ärlig Recension av en PGA-proffs (2026)",
  intro: "Min mest spelade bana på ön. Vinden, greenerna, avslutningshålen — och varför Obama och Nadal fortsätter att återvända.",
  lang: 'sv',
  related: [
    { slug: 'alcanada-review', title: 'Alcanada Golf — Ärlig recension 2026' },
    { slug: 'best-golf-courses-mallorca', title: 'Bästa golfbanorna på Mallorca 2026' },
  ],
}

const blocks = [
{
  "type": "paragraph",
  "text": "Son Gual är min mest spelade bana på Mallorca och den jag konsekvent rekommenderar. Den är svår, och den som bokar med förväntan om en avslappnad dag kommer att bli överraskad."
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
  "text": "Första utslagsplatsen"
},
{
  "type": "paragraph",
  "text": "Första gången jag spelade Son Gual stod jag på de svarta utslagen, vinden kom hårt från vänster. Kameran rullade för en vlog. Jag var genuint lite nervös."
},
{
  "type": "paragraph",
  "text": "Drivern träffade lätt på klöten. Den flög ändå längre än väntat och undvek bunkrarna — precis. Det finns så många bunkrar på Son Gual, placerade exakt där lite felslagna slag hamnar."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-1.jpg",
  "alt": "Son Gual fairway",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "heading",
  "text": "Vinden"
},
{
  "type": "paragraph",
  "text": "Son Gual verkar leva i sitt eget ekosystem. Jag lämnar mitt hus en lugn morgon och anländer till första utslagsplatsen för att finna att det blåser ordentligt — och det håller i sig i fyra timmar."
},
{
  "type": "pull",
  "text": "Jag lämnade huset en lugn morgon och kom fram till första utslagsplatsen för att finna att det blåste ordentligt. Det höll i sig i fyra timmar."
},
{
  "type": "heading",
  "text": "Greenerna"
},
{
  "type": "paragraph",
  "text": "Snabba, upphöjda och skoningslösa mot dåligt inkommande spel. I januari var greenerna och omgivningarna så tätt klippta att det var anmärkningsvärt för den tiden på året."
},
{
  "type": "paragraph",
  "text": "En av mina spelsällskap grep efter puttern i tron att hon stod på greenen. Hon hade ungefär 30 yards kvar av omgivningarna att täcka. Skötseln är så minutiös."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-2.jpg",
  "alt": "Son Gual greens",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "heading",
  "text": "Banan"
},
{
  "type": "paragraph",
  "text": "Thomas Himmels design från 2007 använder höjdskillnaderna intelligent. Hål 2 har en av Europas största bunkrar. Avslutningssekvensen från hål 15 anses allmänt vara en av de finaste avslutningarna inom europeisk golf."
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
  "text": "Kända besökare"
},
{
  "type": "paragraph",
  "text": "Rafa Nadal spelar här regelbundet — hans uttalade favoritbana på ön. Barack Obama spelade i november 2024."
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
      "Greenavgifter 2026"
    ],
    [
      "9/10",
      "Svårighetsgrad"
    ],
    [
      "Par 72",
      "Mästerskap-layout"
    ],
    [
      "2007",
      "Designad av Thomas Himmel"
    ]
  ]
},
{
  "type": "heading",
  "text": "Greenavgifter 2026"
},
{
  "type": "paragraph",
  "text": "Lågsäsong: €115. Januarifönstret: €80/9 hål. Högsäsong vår/höst: €165. Sommar: €115."
},
{
  "type": "paragraph",
  "text": "Klubbuthyrning: Callaway €35, Titleist €45. Buggy €45, eltrolley från €15. WHS-handicapintyg krävs."
},
{
  "type": "heading",
  "text": "Omdöme"
},
{
  "type": "paragraph",
  "text": "Son Gual är min favoritbana på Mallorca. Den skulle hålla mot vilken bana jag än spelat under mina resor."
},
{
  "type": "image",
  "src": "/images/son-gual-blog/sg-5.jpg",
  "alt": "Son Gual closing holes",
  "containerStyle": {margin:'2rem 0', borderRadius:2, aspectRatio: '16/9'}
},
{
  "type": "cta",
  "text": "Jag tar regelbundet klienter till Son Gual. Vill du spela den med någon som känner varje hål?",
  "href": "/sv/play-with-a-pro",
  "linkLabel": "Se play-with-a-pro-upplevelsen →"
}
]

export default function Post() {
  return <GuidePostView locale="sv" meta={meta} blocks={blocks} />
}
