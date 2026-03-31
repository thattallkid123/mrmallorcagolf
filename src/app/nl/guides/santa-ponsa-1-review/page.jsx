import GuidePostView from '../../../guides/GuidePostView'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'santa-ponsa-1-review',
  locale: 'nl',
  title: 'Golf Santa Ponsa 1, Mallorca - Eerlijke review van een PGA Professional',
  description: 'Santa Ponsa 1 op Mallorca, bekeken door een PGA Professional. Tourgeschiedenis, brede fairways en hernieuwd vertrouwen met de driver.',
  imagePath: '/images/santa-ponsa-blog/sp-hero.jpg',
})

const meta = {
  badge: 'Baanreview',
  badgeGold: true,
  readTime: '6 min leestijd',
  updated: 'Maart 2026',
  title: 'Golf Santa Ponsa 1, Mallorca - Eerlijke review van een PGA Professional',
  intro: 'Een van de langste banen van het eiland. Echte European Tour-geschiedenis. En fairways die breed genoeg zijn voor de driver.',
  lang: 'nl',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf - Eerlijke review 2026' },
  ],
}

const blocks = [
{
  "type": "paragraph",
  "text": "Santa Ponsa 1 is de enige publieke baan van de Santa Ponsa-groep en de baan met echte European Tour-historie. Hier werd in 2021 het Mallorca Golf Open van de DP World Tour gespeeld. Dit was de baan die topgolf terugbracht naar het eiland na tien jaar afwezigheid. Winnaar Jeff Winther opende toen met twee rondes van 62. De baan was er klaar voor."
},
{
  "type": "heading",
  "text": "Waarom deze baan bij mijn spel past - en waarschijnlijk ook bij dat van jou"
},
{
  "type": "paragraph",
  "text": "Laat ik ergens direct over zijn: deze baan heeft mij geholpen om weer vertrouwen te krijgen met de driver. Na rondes op Son Gual of Alcanada, waar goed course management vaak betekent dat je de driver in de tas laat, is Santa Ponsa 1 een heel ander verhaal. De fairways zijn breed, de openingsholes royaal, en de baan beloont een agressieve aanpak vanaf de tee echt."
},
{
  "type": "paragraph",
  "text": "Met mijn lengte houd ik na een goede drive vaak nog maar een wedge over naar een par-4-green. Voor spelers met een normalere lengte wordt het een serieuze test zodra de wind opsteekt, maar wel het soort test dat vertrouwen opbouwt in plaats van afbreekt."
},
{
  "type": "heading",
  "text": "Hole 10"
},
{
  "type": "paragraph",
  "text": "Met 590 meter is hole 10 een van de langste par 5's van Europa. Tegen de wind in voelt hij nog langer. Er is een heel bevredigende versie van deze hole - driver, hybride, wedge - en een veel minder leuke versie waarbij een van die drie slagen misgaat. De par 3's zijn het andere uiterste: lang en met kleine greens. Hier draait het meer om schade beperken dan om birdiekansen."
},
{
  "type": "heading",
  "text": "De band met de DP World Tour"
},
{
  "type": "paragraph",
  "text": "Het hosten van het Mallorca Golf Open 2021 was belangrijk voor het eiland. Het was het eerste European Tour-evenement hier in tien jaar, en Santa Ponsa 1 hield prima stand. De conditie van de baan tijdens de toernooiweek, de routing onder druk en de scores die mogelijk waren zonder dat de baan zich overgaf - het werkte allemaal. Dat niveau is echt, en je voelt het als bezoeker meteen."
},
{
  "type": "heading",
  "text": "Uitzicht op de Tramuntana"
},
{
  "type": "paragraph",
  "text": "Holes 5, 6 en 7 op de eerste negen bieden een van de mooiste uitzichten op de Tramuntana van het hele eiland. Hoog gras, volwassen bomen, wilde bloemen en daarachter de bergen als decor. Het is het soort achtergrond dat een slechte slag net iets draaglijker maakt. Net iets."
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
      "Moeilijkheid"
    ],
    [
      "Par 72",
      "Championship-layout"
    ],
    [
      "Publiek",
      "Open voor bezoekers"
    ]
  ]
},
{
  "type": "heading",
  "text": "Greenfees 2026"
},
{
  "type": "paragraph",
  "text": "Hoogseizoen van half maart tot begin juni en van half september tot begin november: EUR 126. Middenseizoen: EUR 106. Laagseizoen: EUR 77. De volledige details staan op golf-santaponsa.com. Een geldig WHS-handicapbewijs is vereist."
},
{
  "type": "paragraph",
  "text": "Buggy: EUR 43 voor 18 holes. Clubhuur: EUR 40. De baan is publiek en vrij boekbaar - er is geen ledenstatus nodig. Boek in het hoogseizoen ruim op tijd; de DP World Tour-geschiedenis trekt spelers die precies weten waarom ze hier willen spelen."
},
{
  "type": "heading",
  "text": "Oordeel"
},
{
  "type": "paragraph",
  "text": "Als je de bal goed drijft en je dat gevoel wilt vasthouden, speel dan Santa Ponsa 1. Als je tussen Son Gual en Alcanada twijfelt voor een serieuze golfdag en iets wilt dat daarmee contrasteert - opener, zelfvertrouwen gevender en met echte European Tour-historie - dan is dit de baan. De par 3's houden je scherp. De rest van de ronde geeft je veel terug."
},
{
  "type": "cta",
  "text": "Wil je Santa Ponsa 1 spelen als onderdeel van een golfdag op Mallorca? Ik kan dat voor je regelen.",
  "href": "/nl/play-with-a-pro",
  "linkLabel": "Bekijk de play-with-a-pro-ervaring →"
}
]

export default function Post() {
  return <GuidePostView locale="nl" meta={meta} blocks={blocks} />
}
