import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('sv')

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Banomdöme', badgeGold: true, title: 'Son Gual Golf Mallorca — Ärlig recension av en PGA Professional (2026)', intro: 'Min mest spelade bana på ön. Vinden, greenerna, avslutningshålen — och varför Obama och Nadal alltid kommer tillbaka.', readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap krävs' },
  { slug: 'alcanada-review', badge: 'Banomdöme', badgeGold: true, title: 'Club de Golf Alcanada — Ärlig recension av en PGA Professional (2026)', intro: 'Banan jag tar folk till när jag vill att de ska åka hem med en historia. Fyren förändrar allt.', readTime: '7 min', keywords: 'Kustbana · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Banomdöme', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Ärlig recension av en PGA Professional (2026)', intro: 'En av Europas längsta banor, DP World Tour-historia och en bana som verkligen återger självförtroendet med drivern.', readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Öppen för besökare' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'Upplevelsen', badgeGold: false, title: 'En dag på Son Gual med en PGA-professionell', intro: 'Vad som faktiskt händer när du tillbringar en hel dag på Mallorcas finaste bana med en coach som spelar den nästan varje vecka.', readTime: '5 min', keywords: 'Son Gual · Spela med ett proffs · Heldagsupplevelse' },
  { slug: 'best-golf-courses-mallorca', badge: 'Guide', badgeGold: false, title: 'De bästa golfbanorna på Mallorca — En PGA-professionells ärliga ranking', intro: 'Tjugotvå banor på ön. Så här skulle jag rangordna dem för en besökare med begränsad tid och höga krav.', readTime: '8 min', keywords: 'Alla nivåer · Greenfees jämfört · Uppdaterad 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Guide', badgeGold: false, title: 'Är Mallorca bra för golf? Ett ärligt svar från någon som bor här', intro: 'Den ofiltrerade versionen — vad ön gör bättre än Portugal, var den faller kort och vem den passar.', readTime: '5 min', keywords: 'Mallorca vs Portugal · Banornas kvalitet · Alla nivåer' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Guide', badgeGold: false, title: 'Bästa tiden att spela golf på Mallorca — Månad för månad', intro: 'Oktober är den månad jag skulle välja. Här är varför, och vad varje månad faktiskt levererar när det gäller väder, pris och trängsel.', readTime: '6 min', keywords: 'Väder · Greenfees per säsong · Trängsel' },
  { slug: 'golf-cost-mallorca', badge: 'Guide', badgeGold: false, title: 'Vad kostar golf på Mallorca? Greenfees, uthyrning och dolda kostnader', intro: 'Den fullständiga bilden av vad en golfresa hit faktiskt kostar — greenfees, uthyrning, caddies och var du kan spara utan att kompromissa.', readTime: '5 min', keywords: '€77–220 greenfees · Uthyrning · Caddies · Priser 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Guide', badgeGold: false, title: 'Planera en golfresa till Mallorca — Allt du behöver veta', intro: 'Flyg, banor, boende nära golfen, hur du tar dig runt. Den praktiska guiden jag önskade att det funnits när jag flyttade hit.', readTime: '7 min', keywords: 'Reseplanering · Boende · Transport' },
]

export default function GuidesIndex_SV() {
  const content = {
    hero: {
      breadcrumbHome: 'SV',
      breadcrumbCurrent: 'Guider',
      title: 'Golf på Mallorca. Ärliga guider.',
      lead: 'Banrecensioner, reseplanering och greenfee-priser - skrivna av en PGA Professional som spelar här varje vecka.',
      tags: ['Updated 2026', 'Förstahandsrecensioner', 'PGA Professional'],
    },
    liveGuides,
    comingSoonGuides,
    comingSoonLabel: 'Kommer snart',
    finalCta: {
      eyebrow: 'Redo att spela?',
      title: 'En privat runda på en av dessa banor, med en PGA Professional vid din sida.',
      body: 'Berätta dina datum och vad du söker så återkommer jag personligen inom 24 timmar.',
      primaryCta: 'Se upplevelserna →',
      secondaryCta: 'Ta kontakt',
    },
  }

  return <GuidesIndexView locale="sv" pageLang="sv" content={content} />
}