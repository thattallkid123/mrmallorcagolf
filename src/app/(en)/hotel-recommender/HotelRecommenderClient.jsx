'use client'

import { useRef, useState } from 'react'
import ToolTrustLine from '../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../lib/analytics'

const WA_HOTEL_MESSAGE = 'Hi Andy, I used the hotel recommender on your site and I’d like help matching where I stay to the courses I want to play.'
const WA_HOTEL_HREF = `https://wa.me/34624466702?text=${encodeURIComponent(WA_HOTEL_MESSAGE)}`

function trackHotelWhatsApp() {
  trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'hotel-recommender' })
  trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'hotel-recommender' })
}

const HOTELS = [
  /* ===================== SOUTHWEST ===================== */
  { id:'arabella-son-vida', name:'Arabella Golf Hotel Son Vida', subname:'Sheraton Collection', area:'southwest', luxury:4, type:'hotel', vibes:['resort','golf-focused'], styles:['resort','classic'], groups:['friends','couple','solo','corporate'], sizes:['1-2','3-5','6-9','10+'], beach:false, spa:true, golfProximity:3, priority:['golf-focused','spa'], pills:['On course','Spa','Michelin dining'], budgets:['ultra','flexible'], why:'Son Vida, Son Quint, and Son Muntaner (Best Golf Course in Spain 2025) are all on the estate. T Golf Calvià is 10 minutes. Wake up, play, eat, recover.', andy:'The default answer for a golf-first group who want everything managed. Es Fum holds one Michelin star in the hotel. Puerto Portals is walkable for evenings.', golf:'On the estate: Son Vida, Son Quint, Son Muntaner (Best in Spain 2025). T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa cluster 20 min.', travelTime:'15 min from Palma airport' },
  { id:'gran-melia-de-mar', name:'Gran Meliá de Mar', subname:'Illetas', area:'southwest', luxury:4, type:'hotel', vibes:['resort','luxury'], styles:['resort','boutique'], groups:['couple','solo','corporate'], sizes:['1-2','3-5'], beach:true, spa:true, golfProximity:2, priority:['beach','spa','dining'], pills:['Beach','Spa','Palma nearby'], budgets:['ultra','flexible'], why:'Ultra-luxury with beach access and full resort service. Bendinat golf 8 minutes. Illetas puts both Palma city and the Southwest course cluster in range.', andy:'A quieter five-star than the Mandarin Oriental. Flexible base for different round combinations.', golf:'Real Golf de Bendinat 8 min. T Golf Calvià 15 min. Son Vida 20 min.', travelTime:'12 min from Palma airport' },
  { id:'hospes-maricel', name:'Hospes Maricel', subname:'Cas Català', area:'southwest', luxury:3, type:'hotel', vibes:['boutique','luxury'], styles:['boutique','classic'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:true, golfProximity:2, priority:['beach','spa','dining'], pills:['Boutique','Seafront','Private jetty'], budgets:['premium','ultra','flexible'], why:'1940s palace feel with a private jetty. Old Mallorcan glamour, smaller and more intimate than the big five-stars. Bendinat golf 8 minutes.', andy:'A distinctive alternative to the larger five-stars. The kind of place that feels genuinely Mallorcan rather than international-hotel-chain.', golf:'Real Golf de Bendinat 8 min. T Golf Calvià 15 min.', travelTime:'12 min from Palma airport' },
  { id:'hotel-bendinat', name:'Hotel Bendinat', subname:'Bendinat', area:'southwest', luxury:2, type:'hotel', vibes:['classic','resort'], styles:['classic','resort'], groups:['friends','couple','solo'], sizes:['1-2','3-5'], beach:false, spa:false, golfProximity:3, priority:['golf-focused'], pills:['On course','Good value','Quiet area'], budgets:['mid','premium','flexible'], why:'Right next to Real Golf de Bendinat. The sensible pick when the brief is golf and a good location, not poolside luxury.', andy:'Old Bendinat is one of the quieter corners of the Southwest. Not a resort. An honest golf hotel that does what it says.', golf:'Real Golf de Bendinat on the doorstep. T Golf Calvià 10 min. Santa Ponsa cluster 20 min.', travelTime:'15 min from Palma airport' },
  { id:'son-caliu', name:'Son Caliu Hotel Spa', subname:'Palma Nova', area:'southwest', luxury:2, type:'hotel', vibes:['resort'], styles:['resort','classic'], groups:['friends','family','couple'], sizes:['3-5','6-9'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Beach','1100m² spa','Family-friendly'], budgets:['mid','flexible'], why:'Mid-range four-star with a proper spa and sea access via jetty. A practical mid-point for the Southwest course cluster at a sensible price.', andy:'Between Puerto Portals and Palma Nova. Good for mixed groups where not everyone golfs. The spa and beach hold their own.', golf:'T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa 20 min.', travelTime:'20 min from Palma airport' },
  { id:'zafiro-andratx', name:'Zafiro Palace Andratx', subname:'Camp de Mar', area:'southwest', luxury:3, type:'hotel', vibes:['resort','family-friendly'], styles:['resort'], groups:['friends','family','couple'], sizes:['3-5','6-9','10+'], beach:true, spa:true, golfProximity:3, priority:['beach','spa','golf-focused'], pills:['Beach','Spa','Family resort','Golf de Andratx 5 min'], budgets:['premium','flexible'], why:'Five-star resort five minutes from Golf de Andratx. Beach is walkable. Good value if half the group golfs and half does not.', andy:'One thing to plan around: Golf de Andratx is the hardest course on the island, handicap limit 28. Match the easier rounds at Santa Ponsa for weaker players.', golf:'Golf de Andratx 5 min. T Golf Calvià 20 min. Santa Ponsa cluster 25 min.', travelTime:'30 min from Palma airport' },
  { id:'secrets-villamil', name:'Secrets Mallorca Villamil', subname:'AMR Collection, Paguera', area:'southwest', luxury:4, type:'hotel', vibes:['resort'], styles:['resort','boutique'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Adults only','Cliff pool','Paguera beach'], budgets:['ultra','flexible'], why:'Adults-only AMR Collection on Paguera beach. Overwater suites, cliff-edge infinity pools, multiple dining options. Golf de Andratx 15 minutes.', andy:'Good five-star base if the couple wants a serious beach resort with the full range of Southwest courses available. Andratx is the closest and most dramatic.', golf:'Golf de Andratx 15 min. T Golf Calvià 20 min. Santa Ponsa 25 min.', travelTime:'30 min from Palma airport' },
  { id:'donna-portals', name:'The Donna Portals', subname:'Portals Nous', area:'southwest', luxury:3, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:false, golfProximity:2, priority:['beach','dining'], pills:['Boutique','Private cove','Puerto Portals nearby'], budgets:['premium','ultra','flexible'], why:'Design-led boutique next to a private cove in Portals Nous. Themed suites, Day Club, flower pool. Puerto Portals marina for evenings.', andy:'T Golf Calvià 10 minutes inland, Santa Ponsa cluster 15 minutes. Port Adriano makes a good dinner base mid-week.', golf:'Real Golf de Bendinat 10 min. T Golf Calvià 10 min. Son Vida 18 min.', travelTime:'15 min from Palma airport' },
  { id:'finca-serena', name:'Finca Serena', subname:'Near Llucmajor', area:'southwest', luxury:3, type:'hotel', vibes:['countryside'], styles:['countryside'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:true, golfProximity:2, priority:['spa','privacy'], pills:['Finca','Wellness','40 hectares'], budgets:['premium','ultra','flexible'], why:'Holistic five-star finca with 40 hectares of farmland and a serious wellness programme. Golf Maioris 5 minutes, Son Gual 15 minutes.', andy:'Golf Maioris and Son Gual are two of the most interesting courses in Mallorca. Andreu Genestra (one Michelin star) is nearby.', golf:'Golf Maioris 5 min. Son Antem East/West 10 min. Son Gual 15 min. Note: this area is 40-60 min from Palma city.', travelTime:'25 min from Palma airport' },
  { id:'sw-villa', name:'Luxury Villa, Southwest', subname:'Santa Ponsa / Andratx area', area:'southwest', luxury:3, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','family','couple'], sizes:['6-9','10+'], beach:false, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Own pool','Full flexibility'], budgets:['premium','ultra','flexible','mid'], why:'For six or more, a villa changes the trip: late breakfasts, your own pool after the round, no hotel timetable. Four courses within 15 minutes.', andy:'The villa location needs to match the tee sheet. This is exactly the matching Andy can help with.', golf:'Golf Santa Ponsa 1, Golf de Andratx, T Golf Calvià, Real Golf de Bendinat: all within 15-20 min depending on villa location. Son Antem East/West 25-30 min.', travelTime:'25-35 min from Palma airport' },
  { id:'son-net', name:'Son Net', subname:'Puigpunyent', area:'southwest', luxury:4, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:true, golfProximity:2, priority:['privacy','spa','dining'], pills:['Historic finca','17th century','Infinity pool'], budgets:['ultra','flexible'], why:'Seventeenth-century stone finca in the Tramuntana foothills, 20 minutes from Golf de Andratx. Infinity pool, old olive groves, completely private feel.', andy:'One of the most beautiful buildings on the island. A proper finca escape that still puts you within reach of the Southwest courses.', golf:'Golf de Andratx 20 min. T Golf Calvià 25 min. Santa Ponsa cluster 30 min.', travelTime:'25 min from Palma airport' },
  { id:'valparaiso-palace', name:'Valparaiso Palace', subname:'Son Armadans, Palma', area:'southwest', luxury:3, type:'hotel', vibes:['resort','classic'], styles:['resort','classic'], groups:['friends','family','couple','corporate'], sizes:['3-5','6-9','10+'], beach:false, spa:true, golfProximity:2, priority:['spa','golf-focused'], pills:['Large resort','Conference facilities','Palma views'], budgets:['mid','premium','flexible'], why:'Large four-star on the hill above Palma with panoramic bay views and a full spa. Practical for bigger groups and corporate trips that need meeting space alongside golf.', andy:'Not the most glamorous but very capable for groups. Good base for multiple course combinations across the Southwest and Palma area.', golf:'Son Vida / Son Quint / Son Muntaner 10 min. Real Golf de Bendinat 15 min. T Golf Calvià 20 min.', travelTime:'15 min from Palma airport' },
  { id:'melia-calvia-beach', name:'Meliá Calviá Beach', subname:'Santa Ponsa', area:'southwest', luxury:3, type:'hotel', vibes:['resort'], styles:['resort'], groups:['friends','family','couple'], sizes:['3-5','6-9','10+'], beach:true, spa:true, golfProximity:3, priority:['beach','spa','golf-focused'], pills:['Beach resort','Santa Ponsa','Golf nearby'], budgets:['premium','flexible'], why:'Large beach resort directly in Santa Ponsa, a short walk from Golf Santa Ponsa 1. Good facilities for bigger groups who want beach and multiple courses.', andy:'The Santa Ponsa courses are all around you here. Golf Santa Ponsa 1 is a 10-minute walk. A solid group base without the boutique price.', golf:'Golf Santa Ponsa 1 walking distance. Golf Santa Ponsa 2 and 3 nearby. T Golf Calvià 15 min. Golf de Andratx 20 min.', travelTime:'25 min from Palma airport' },
  { id:'barcelo-illetas', name:'Barceló Illetas Albatros', subname:'Illetas', area:'southwest', luxury:2, type:'hotel', vibes:['resort','classic'], styles:['classic','resort'], groups:['couple','friends'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Sea views','Adults preferred','Value'], budgets:['mid','flexible'], why:'Well-priced four-star in Illetas with good sea views and direct access to the water. Bendinat golf 10 minutes. A sensible mid-range option in an expensive area.', andy:'Good value for the location. Illetas is a step up from Palma Nova without the five-star prices of Gran Meliá.', golf:'Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.', travelTime:'12 min from Palma airport' },
  { id:'portals-hills', name:'Portals Hills Boutique Hotel', subname:'Portals Nous', area:'southwest', luxury:3, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:2, priority:['privacy','spa'], pills:['Adults only','Hilltop','Infinity pool'], budgets:['premium','flexible'], why:'Adults-only boutique perched above Portals Nous with an infinity pool looking out to sea. Intimate and calm, 10 minutes from both golf and Puerto Portals marina.', andy:'A quieter alternative to the Donna Portals for couples who want privacy over scene. T Golf Calvià is 10 minutes.', golf:'T Golf Calvià 10 min. Real Golf de Bendinat 12 min. Son Vida 15 min.', travelTime:'15 min from Palma airport' },
  { id:'son-antem-marriott', name:'Marriott Son Antem Golf Resort', subname:'Llucmajor', area:'southwest', luxury:2, type:'hotel', vibes:['resort','golf-focused'], styles:['resort','classic'], groups:['friends','couple','corporate'], sizes:['3-5','6-9','10+'], beach:false, spa:true, golfProximity:3, priority:['golf-focused','spa'], pills:['On course','36 holes','Resort facilities'], budgets:['mid','premium','flexible'], why:'Marriott resort sitting directly between Son Antem East and West: 36 holes on the doorstep. Good corporate golf facilities and reliable four-star comfort.', andy:'Not the most exciting hotel on the island but the most practical if Son Antem is on the schedule. Golf Maioris is 10 minutes and Son Gual 15.', golf:'Son Antem East and West on site. Golf Maioris 10 min. Son Gual 15 min. Finca Serena area accessible.', travelTime:'20 min from Palma airport' },
  { id:'sol-palmanova', name:'Sol Palmanova', subname:'Palmanova', area:'southwest', luxury:1, type:'hotel', vibes:['resort','classic'], styles:['resort','classic'], groups:['friends','family'], sizes:['3-5','6-9','10+'], beach:true, spa:false, golfProximity:2, priority:['beach','golf-focused'], pills:['Budget beach','Family','Santa Ponsa cluster'], budgets:['mid','flexible'], why:'Straightforward three-star beach hotel in Palmanova. Does the job for groups focused on golf and not the hotel. T Golf Calvià 10 minutes, Santa Ponsa cluster 15.', andy:'The honest budget answer for the Southwest. Spend less on the room, spend it on the rounds instead.', golf:'T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Golf Santa Ponsa 1 and 2 approximately 15 min.', travelTime:'20 min from Palma airport' },
  { id:'hipotels-flamenco', name:'Hipotels Flamenco', subname:'Paguera', area:'southwest', luxury:1, type:'hotel', vibes:['resort'], styles:['resort'], groups:['friends','family'], sizes:['3-5','6-9','10+'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Beach resort','Paguera','Budget'], budgets:['mid','flexible'], why:'Dependable three-star on Paguera beach. One of the more affordable beach options in the Southwest, with Golf de Andratx 15 minutes and Santa Ponsa 20 minutes.', andy:'No frills, good location for golf. The beach and pool do the job for non-golfers in the group.', golf:'Golf de Andratx 15 min. T Golf Calvià 20 min. Golf Santa Ponsa 1 approximately 20 min.', travelTime:'28 min from Palma airport' },
  { id:'cala-vinyes', name:'Hotel Cala Vinyes', subname:'Cala Vinyes', area:'southwest', luxury:2, type:'hotel', vibes:['boutique','classic'], styles:['boutique'], groups:['couple','friends'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach','privacy'], pills:['Quiet cove','Mid-range','Golf de Andratx nearby'], budgets:['mid','premium','flexible'], why:'Small hotel above a quiet cove in Cala Vinyes. Less crowded than Paguera or Santa Ponsa and Golf de Andratx is 10 minutes. A calmer corner of the Southwest.', andy:'Good for couples who want a quieter base than the main Southwest resorts. The cove is one of the nicest in the area.', golf:'Golf de Andratx 10 min. T Golf Calvià 18 min. Golf Santa Ponsa 1 approximately 20 min.', travelTime:'28 min from Palma airport' },
  { id:'riu-bonanza', name:'Hotel Riu Palace Bonanza Playa', subname:'Illetas', area:'southwest', luxury:3, type:'hotel', vibes:['resort'], styles:['resort'], groups:['couple','friends','family'], sizes:['3-5','6-9'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['All-inclusive option','Illetas beach','Spa'], budgets:['premium','flexible'], why:'Four-star RIU property on the Illetas seafront. All-inclusive option available, full spa, and one of the best beach positions in the area. Bendinat golf 10 minutes.', andy:'A practical large-group option if some players want all-inclusive and others are driving to courses each day.', golf:'Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.', travelTime:'12 min from Palma airport' },

  /* ===================== NORTH ===================== */
  { id:'four-seasons-formentor', name:'Four Seasons Resort Mallorca at Formentor', subname:'Formentor Peninsula', area:'north', luxury:4, type:'hotel', vibes:['resort','boutique'], styles:['resort','boutique'], groups:['couple','solo','corporate'], sizes:['1-2','3-5'], beach:true, spa:true, golfProximity:2, priority:['beach','spa','dining'], pills:['Four Seasons','Formentor bay','Peninsula drive'], budgets:['ultra','flexible'], why:'Ultra-luxury with the Formentor bay. One of the most scenic stays on the island. Golf early, Formentor bay the rest of the day.', andy:'The peninsula road is the best drive in Mallorca. Alcanada is 35 minutes: not the closest, but worth it for the setting.', golf:'Club de Golf Alcanada 35 min. Golf Pollença 20 min.', travelTime:'55 min from Palma airport' },
  { id:'el-vicenc', name:'El Vicenç de la Mar', subname:'Cala de Sant Vicenç', area:'north', luxury:4, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:false, golfProximity:2, priority:['beach','dining'], pills:['Boutique','Michelin chef','Beachfront'], budgets:['ultra','flexible'], why:'Boutique five-star with direct beach access and Santi Taura (one Michelin star) in the restaurant. Alcanada 20 minutes. Pollença old town 10 minutes.', andy:'Santi Taura is one of the best chefs in Mallorca. If the food matters as much as the golf, and the north is the zone, this is the answer.', golf:'Club de Golf Alcanada 20 min. Golf Pollença 10 min.', travelTime:'50 min from Palma airport' },
  { id:'son-brull', name:'Son Brull Hotel & Spa', subname:'Near Pollença', area:'north', luxury:4, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:true, golfProximity:2, priority:['spa','privacy','dining'], pills:['Boutique five-star','Serious spa','360 wine'], budgets:['ultra','flexible'], why:"Eighteenth-century monastery converted into a serious boutique five-star. The spa is one of the best on the island and 360 restaurant uses the estate's own produce.", andy:'A strong argument for staying in the north even if you want serious golf. Alcanada 15 minutes. Quiet, high-quality, genuinely Mallorcan.', golf:'Club de Golf Alcanada 15 min. Golf Pollença 5 min.', travelTime:'50 min from Palma airport' },
  { id:'illa-dor', name:"Illa d'Or", subname:'Port de Pollença', area:'north', luxury:2, type:'hotel', vibes:['classic','boutique'], styles:['classic','boutique'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach','dining'], pills:['Bay views','Classic','Walkable evenings'], budgets:['mid','premium','flexible'], why:'Port de Pollença is one of the nicest bases in the North. Quieter than Alcúdia, walkable in evenings, and Alcanada 20 minutes away.', andy:'The most established hotel right on the bay. 23 rooms. Good food.', golf:'Club de Golf Alcanada 20 min. Golf Pollença 10 min (9 holes).', travelTime:'50 min from Palma airport' },
  { id:'can-cuarassa', name:'Can Cuarassa', subname:'Port de Pollença', area:'north', luxury:3, type:'hotel', vibes:['boutique','classic'], styles:['boutique','classic'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:false, golfProximity:2, priority:['beach','privacy'], pills:['Boutique','Private gardens','Beachfront'], budgets:['premium','flexible'], why:"Small boutique hotel with private gardens running down to the beach at Port de Pollença. Good rooms, quiet atmosphere, strong local food scene nearby.", andy:"A level up from Illa d'Or in terms of character. Alcanada 20 minutes, Pollença old town 10. A genuinely relaxed north base.", golf:'Club de Golf Alcanada 20 min. Golf Pollença 8 min.', travelTime:'50 min from Palma airport' },
  { id:'hotel-sis-pins', name:'Hotel Sis Pins', subname:'Port de Pollença', area:'north', luxury:1, type:'hotel', vibes:['classic'], styles:['classic'], groups:['couple','friends','solo'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Budget-friendly','Bay views','Simple and clean'], budgets:['mid','flexible'], why:'Honest, clean mid-range hotel right on the Port de Pollença promenade. No frills but good value in one of the nicest towns in the north.', andy:'If the budget is tight and the north is the zone, this is the practical answer. Golf Alcanada 20 minutes, evenings sorted by the Pollença food scene.', golf:'Club de Golf Alcanada 20 min. Golf Pollença 10 min.', travelTime:'50 min from Palma airport' },
  { id:'agrotourisme-son-palou', name:'Agrotourisme Son Palou', subname:'Orient', area:'north', luxury:2, type:'hotel', vibes:['countryside'], styles:['countryside'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['privacy'], pills:['Rural finca','Mountain village','Complete peace'], budgets:['mid','premium','flexible'], why:'Traditional agrotourism finca in the tiny village of Orient, surrounded by Tramuntana mountains. Complete silence, fresh produce, proper countryside Mallorca.', andy:'Orient is one of the most special villages on the island. Golf requires a drive but the experience here is unlike any hotel. Best combined with a few rounds at Alcanada.', golf:'Club de Golf Alcanada 30 min. Golf Pollença 20 min.', travelTime:'35 min from Palma airport' },
  { id:'north-villa', name:'Luxury Villa, North Mallorca', subname:'Pollença / Alcúdia area', area:'north', luxury:3, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','family','couple'], sizes:['6-9','10+'], beach:true, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Own pool','Coves nearby'], budgets:['premium','ultra','flexible','mid'], why:'Pollença valley or coastal Alcúdia puts you 15 minutes from Alcanada. Hire cars essential. Beaches and coves nearby.', andy:'The north is quieter and more scenic than the Southwest. A north villa works well if the brief is a proper holiday with good golf rather than maximum rounds.', golf:'Club de Golf Alcanada 15-20 min. Golf Pollença 10-15 min.', travelTime:'50 min from Palma airport' },
  { id:'bocchoris', name:'Hotel Bocchoris', subname:'Port de Pollença', area:'north', luxury:1, type:'hotel', vibes:['classic'], styles:['classic'], groups:['couple','friends','solo'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Promenade location','Budget-friendly','Classic'], budgets:['mid','flexible'], why:'Simple, clean hotel right on the Port de Pollença promenade. The best value on the bay. Alcanada 20 minutes, Pollença old town 10.', andy:'Nothing fancy, everything practical. The promenade is lovely in the evenings. Good option for groups watching costs.', golf:'Club de Golf Alcanada 20 min. Golf Pollença 10 min.', travelTime:'50 min from Palma airport' },
  { id:'la-goleta', name:'Hotel La Goleta', subname:'Cala de Sant Vicenç', area:'north', luxury:2, type:'hotel', vibes:['classic','boutique'], styles:['classic'], groups:['couple','friends'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Cala Sant Vicenç','Mid-range','Beach access'], budgets:['mid','premium','flexible'], why:'Mid-range hotel in the beautiful Cala de Sant Vicenç, the same small bay as the five-star El Vicenç. Fraction of the price with the same beach and Alcanada 20 minutes.', andy:'Cala de Sant Vicenç is one of the prettiest spots in the north. La Goleta gives you the location without the luxury price tag.', golf:'Club de Golf Alcanada 20 min. Golf Pollença 10 min.', travelTime:'52 min from Palma airport' },
  { id:'north-villa-small', name:'Villa, North Mallorca, small group', subname:'Pollença valley', area:'north', luxury:2, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','couple','family'], sizes:['3-5'], beach:false, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Mid-range','Pollença valley'], budgets:['mid','premium','flexible'], why:'Smaller villa in the Pollença valley for groups of 3 to 5 who want their own space without the cost of a large property. Pool, countryside views, 15 minutes to Alcanada.', andy:'The north villa market is good value compared to the Southwest. A 4-bedroom property here costs considerably less than the equivalent in Santa Ponsa.', golf:'Club de Golf Alcanada 15-20 min. Golf Pollença 10 min.', travelTime:'48 min from Palma airport' },

  /* ===================== EAST ===================== */
  { id:'can-simoneta', name:'Can Simoneta', subname:'Canyamel', area:'east', luxury:3, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:2, priority:['spa','privacy'], pills:['Clifftop','Spa','VORO restaurant'], budgets:['premium','ultra','flexible'], why:"Clifftop boutique five-star with a serious spa and Capdepera golf 5 minutes away. VORO (Mallorca's only two-Michelin-star restaurant) is in the complex.", andy:'Quietest of the east coast options. Suits couples who want privacy over facilities.', golf:"Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.", travelTime:'60 min from Palma airport' },
  { id:'pleta-de-mar', name:'Pleta de Mar', subname:'Canyamel', area:'east', luxury:3, type:'hotel', vibes:['resort'], styles:['resort'], groups:['couple','friends','family'], sizes:['1-2','3-5'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Eco-luxury','2 infinity pools','Private beach','VORO on site'], budgets:['premium','ultra','flexible'], why:'East coast beach luxury. Two infinity pools, private beach access, and VORO restaurant (two Michelin stars) on site. Capdepera Golf 5 minutes.', andy:'The east is underrated. Fewer crowds, better water, quality courses that get overlooked. VORO is worth a special dinner even for guests not staying here.', golf:"Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.", travelTime:'60 min from Palma airport' },
  { id:'cases-son-barbassa', name:'Cases de Son Barbassa', subname:'Capdepera', area:'east', luxury:3, type:'hotel', vibes:['countryside','boutique'], styles:['countryside','boutique'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:true, golfProximity:3, priority:['privacy','spa'], pills:['Rural finca','Private pool','Capdepera Golf 5 min'], budgets:['premium','flexible'], why:'Restored rural estate 5 minutes from Capdepera Golf. Private pool, local produce, genuinely off-the-beaten-track feel with good golf on the doorstep.', andy:'The east finca option. No beach but great pool, total quiet, and an excellent golf base. Combine with an evening at VORO nearby.', golf:'Capdepera Golf 5 min. Canyamel Golf 15 min. Club de Golf Pula 15 min.', travelTime:'60 min from Palma airport' },
  { id:'pula-resort', name:'Pula Resort', subname:'Son Servera', area:'east', luxury:2, type:'hotel', vibes:['resort','golf-focused'], styles:['resort','classic'], groups:['friends','couple','corporate'], sizes:['3-5','6-9'], beach:false, spa:false, golfProximity:3, priority:['golf-focused'], pills:['On course','Trackman range','Golf packages'], budgets:['mid','premium','flexible'], why:'Hotel sitting directly on Pula Golf, with full practice facilities including Trackman technology. Eight European Tour events hosted here. Straightforward golf base.', andy:'If Pula is on the schedule and the group wants everything in one place, this is the answer. The practice facilities are among the best in Mallorca.', golf:"Pula Golf on site. Golf Club Son Servera 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.", travelTime:'60 min from Palma airport' },
  { id:'sa-bassa-rotja', name:'Sa Bassa Rotja', subname:'Porreres', area:'east', luxury:3, type:'hotel', vibes:['countryside','boutique'], styles:['countryside'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:2, priority:['privacy','spa'], pills:['Winery estate','Organic spa','Countryside'], budgets:['premium','flexible'], why:'Boutique hotel on a working winery estate in the Mallorcan interior. Organic spa, estate wines, proper countryside calm. Not a standard beach or golf resort.', andy:'A different kind of stay. For couples who want the interior of Mallorca and are happy to drive 25-30 minutes to reach the east coast courses.', golf:"Vall d'Or Golf 25 min. Club de Golf Pula 25 min. Golf Club Son Servera 30 min.", travelTime:'35 min from Palma airport' },
  { id:'son-gener', name:'Finca Hotel Son Gener', subname:'Son Servera', area:'east', luxury:3, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:2, priority:['privacy','spa'], pills:['Adults only','Pool terrace','Rural east'], budgets:['premium','flexible'], why:'Adults-only boutique finca in Son Servera with a quiet pool terrace and good spa facilities. Golf Club Son Servera a short drive, Pula 10 minutes.', andy:'A calmer, more intimate option than the bigger east coast resorts. Suits couples who want countryside and golf without the beach-resort crowds.', golf:'Golf Club Son Servera 10 min. Club de Golf Pula 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.', travelTime:'55 min from Palma airport' },
  { id:'east-villa', name:'Luxury Villa, East Mallorca', subname:"Cala d'Or / Porto Cristo area", area:'east', luxury:3, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','family'], sizes:['6-9','10+'], beach:true, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Calm coves','Good value'], budgets:['mid','premium','flexible'], why:"Families or groups wanting calm coves and easy access to Vall d'Or and Pula. The east coast has the island's calmest family beaches.", andy:"The east is underrated for a golf trip. Fewer crowds, better water, five courses that do not get the attention they deserve.", golf:"Capdepera Golf 15-20 min. Canyamel Golf 15 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 20 min.", travelTime:'55-65 min from Palma airport' },
  { id:'son-moll-sentits', name:'Son Moll Sentits Hotel', subname:'Capdepera', area:'east', luxury:3, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:3, priority:['spa','privacy'], pills:['Adults only','Rooftop spa','Capdepera town'], budgets:['premium','flexible'], why:'Adults-only boutique in Capdepera old town with a rooftop spa and pool. A quieter, more intimate option than the coastal resorts, and Capdepera Golf is 5 minutes away.', andy:'One of the smallest and most characterful options on the east coast. Suits couples who want town and golf over beach.', golf:'Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min.', travelTime:'60 min from Palma airport' },
  { id:'hotel-cala-ratjada', name:'Hotel Cala Ratjada', subname:'Cala Ratjada', area:'east', luxury:2, type:'hotel', vibes:['classic','resort'], styles:['classic'], groups:['friends','family','couple'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Beach resort','Cala Ratjada','Mid-range'], budgets:['mid','flexible'], why:'Solid mid-range hotel in the fishing town of Cala Ratjada, one of the most characterful towns on the east coast. Capdepera Golf 10 minutes, good fish restaurants on the port.', andy:'Cala Ratjada has a genuine town feel that the bigger resort areas lack. Evening walks along the port, good local bars. Golf does not dominate everything.', golf:'Capdepera Golf 10 min. Canyamel Golf 15 min. Club de Golf Pula 20 min.', travelTime:'62 min from Palma airport' },
  { id:'protur-biomar', name:'Protur Biomar Gran Hotel & Spa', subname:'Sa Coma', area:'east', luxury:3, type:'hotel', vibes:['resort'], styles:['resort'], groups:['family','friends'], sizes:['3-5','6-9'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Large resort','Beach','Family pools','Adults zone'], budgets:['premium','flexible'], why:'Large premium resort on Sa Coma beach with a dedicated adults area and a family area. Good spa and multiple pools. Pula Golf 10 minutes.', andy:'One of the more capable east coast resorts for groups where some want golf and others want beach and pools all day.', golf:'Club de Golf Pula 10 min. Golf Club Son Servera 12 min. Capdepera Golf 20 min.', travelTime:'58 min from Palma airport' },
  { id:'east-villa-small', name:'Villa, East Mallorca, small group', subname:'Artà / Son Servera area', area:'east', luxury:2, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','couple','family'], sizes:['3-5'], beach:false, spa:false, golfProximity:2, priority:['privacy'], pills:['Private villa','Rural east','Good value'], budgets:['mid','flexible'], why:'Smaller east coast villa for groups of 3 to 5. Artà and Son Servera area gives you genuinely rural Mallorca at a lower price than the Southwest, with 4 courses within 20 minutes.', andy:'The east coast villa market is underrated and underpriced. If the group is comfortable with the extra drive from the airport, you get much better value here.', golf:'Club de Golf Pula 15 min. Golf Club Son Servera 15 min. Capdepera Golf 15 min. Canyamel Golf 20 min.', travelTime:'55 min from Palma airport' },

  /* ===================== PALMA ===================== */
  { id:'el-llorenc', name:'El Llorenç Parc de la Mar', subname:'Palma old town', area:'palma', luxury:3, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo','corporate'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['City boutique','Michelin dining','Rooftop pool'], budgets:['premium','ultra','flexible'], why:'Design rooms, rooftop pool, and Santi Taura (one Michelin star). Golf requires a drive but Palma evenings more than compensate.', andy:'Rooftop pool at dusk and dinner afterwards is a strong Palma evening. Son Gual is 20 minutes for a morning round.', golf:'Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min. Golf Maioris 30 min.', travelTime:'20 min from Palma airport' },
  { id:'santos-nixe', name:'Santos Nixe Palace', subname:'Cala Major, Palma', area:'palma', luxury:2, type:'hotel', vibes:['resort','classic'], styles:['classic','resort'], groups:['couple','friends'], sizes:['1-2','3-5'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Beach','Spa','Value four-star'], budgets:['mid','premium','flexible'], why:'Practical, well-located four-star with actual beach access and a proper spa. Similar golf access to the Illetas five-stars at a lower price.', andy:'A sensible pick for couples or small groups who want beach and spa without the ultra-luxury price tag. Bendinat 15 minutes.', golf:'Real Golf de Bendinat 15 min. T Golf Calvià 20 min. Son Vida / Son Quint / Son Muntaner 15 min. Son Gual 20 min.', travelTime:'12 min from Palma airport' },
  { id:'born-hotel', name:'Born Hotel', subname:'Palma old town', area:'palma', luxury:3, type:'hotel', vibes:['boutique','classic'], styles:['boutique','classic'], groups:['couple','solo','corporate'], sizes:['1-2','3-5'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Palma palace','Courtyard terrace','Old town'], budgets:['premium','flexible'], why:"A 19th-century palace on Carrer Born, Palma's most fashionable street. Ornate courtyard, excellent location for the old town, cathedral, and restaurants.", andy:'The Born puts you at the centre of Palma evenings. Son Gual 20 minutes for an early morning round, then back for a long lunch.', golf:'Son Gual 20 min. T Golf Palma (Puntiró) 20 min. Son Vida / Son Quint / Son Muntaner 18 min. Real Golf de Bendinat 20 min.', travelTime:'20 min from Palma airport' },
  { id:'nakar-hotel', name:'Nakar Hotel', subname:'Palma', area:'palma', luxury:3, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Rooftop pool','Design rooms','City centre'], budgets:['premium','flexible'], why:'Modern design hotel in central Palma with a strong rooftop pool and bar. Younger feel than the old-town palace hotels. Well-placed for the Passeig des Born.', andy:'For the group that wants Palma nightlife without being too far from golf. Son Gual is 20 minutes at most.', golf:'Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min. Real Golf de Bendinat 18 min.', travelTime:'18 min from Palma airport' },
  { id:'palacio-ca-sa-galesa', name:'Palacio Ca Sa Galesa', subname:'Palma old town', area:'palma', luxury:4, type:'hotel', vibes:['boutique'], styles:['boutique','classic'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:1, priority:['dining','privacy'], pills:['Ultra-luxury','12 rooms','Cathedral views'], budgets:['ultra','flexible'], why:'Twelve-room ultra-luxury hotel in the heart of Palma old town, with views of the cathedral. One of the most intimate and special hotels in the city. Indoor pool and spa.', andy:'The most exclusive Palma city option. Dinners on the terrace looking at La Seu. Son Gual 20 minutes for the morning round.', golf:'Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.', travelTime:'20 min from Palma airport' },
  { id:'portixol', name:'Hotel Portixol', subname:'Portixol, Palma', area:'palma', luxury:2, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Neighbourhood feel','Best fish in Palma','Quiet'], budgets:['mid','premium','flexible'], why:'Portixol village feel with some of the best fish restaurants in Mallorca. Es Mollet 5 minutes on foot. Golf requires a drive.', andy:'A quieter Palma option. Use as an evening base. Son Gual is 25 minutes for a morning round.', golf:'Son Gual 25 min. Son Vida / Son Quint 20 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min.', travelTime:'15 min from Palma airport' },
  { id:'convent-missio', name:'Convent de la Missió', subname:'Palma old town', area:'palma', luxury:3, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo','corporate'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Design hotel','Palma old town','Rooftop'], budgets:['premium','ultra','flexible'], why:"Design rooms, rooftop terrace, and one of Palma's best dining options. For golfers who want the city experience between rounds.", andy:'The old town is 10 minutes on foot. Multiple acclaimed restaurants within walking distance.', golf:'Son Gual 25 min. Son Vida / Son Quint / Son Muntaner 20 min. T Golf Palma (Puntiró) 15 min. Real Golf de Bendinat 20 min.', travelTime:'20 min from Palma airport' },
  { id:'innside-palma', name:'INNSiDE by Meliá Palma Bay', subname:'Palma', area:'palma', luxury:2, type:'hotel', vibes:['resort','classic'], styles:['classic'], groups:['friends','couple','corporate'], sizes:['1-2','3-5','6-9'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Modern four-star','Bay views','Good value'], budgets:['mid','flexible'], why:'Modern four-star with bay views and a good central Palma location. No frills beyond the basics but well-priced and practical for groups who want the city base without boutique hotel prices.', andy:'A no-nonsense Palma base. Good for corporate groups. Son Gual 20 minutes for the rounds.', golf:'Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min.', travelTime:'15 min from Palma airport' },
  { id:'brondo-architect', name:'Brondo Architect Hotel', subname:'Palma old town', area:'palma', luxury:2, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Boutique','Design','Old town location'], budgets:['mid','premium','flexible'], why:'Small design-led hotel in the Palma old town, within walking distance of the main restaurants, the cathedral, and Es Baluard museum.', andy:'The affordable boutique Palma option. Not the luxury of Palacio Ca Sa Galesa but the location is the same and the character is genuine.', golf:'Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.', travelTime:'20 min from Palma airport' },
  { id:'hostal-cuba', name:'Hostal Cuba', subname:'Santa Catalina, Palma', area:'palma', luxury:1, type:'hotel', vibes:['boutique','classic'], styles:['boutique'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Budget boutique','Santa Catalina','Best neighbourhood in Palma'], budgets:['mid','flexible'], why:"Characterful budget boutique in Santa Catalina, Palma's best neighbourhood for bars and restaurants. The hostal has been here for decades and has its own personality.", andy:'Santa Catalina is where locals eat. Not the old town for tourists. The real Palma food scene. Son Gual 20 minutes for morning golf.', golf:'Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Son Vida 18 min.', travelTime:'15 min from Palma airport' },
  { id:'hotel-saratoga', name:'Hotel Saratoga', subname:'Palma centre', area:'palma', luxury:2, type:'hotel', vibes:['classic','resort'], styles:['classic'], groups:['friends','couple','corporate'], sizes:['1-2','3-5','6-9'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Rooftop pool','Palma centre','Classic four-star'], budgets:['mid','premium','flexible'], why:'Classic four-star in the centre of Palma with a rooftop pool overlooking the bay. Well-located for both the old town and the main boulevard. Good corporate option.', andy:'Reliable, central, sensible. One of the most used Palma bases for golf groups. Son Gual is 20 minutes.', golf:'Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 16 min. Real Golf de Bendinat 20 min.', travelTime:'18 min from Palma airport' },
  { id:'palma-villa-small', name:'Villa, Palma Area, small group', subname:'Génova / Son Vida area', area:'palma', luxury:2, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','couple'], sizes:['3-5'], beach:false, spa:false, golfProximity:2, priority:['privacy','golf-focused'], pills:['Private villa','Palma views','Son Vida nearby'], budgets:['mid','premium','flexible'], why:'Private villa in the Génova or Son Vida hills with Palma bay views. The Son Vida estate courses are 10 minutes and the city is 15. Good compromise for groups who want independence and easy golf.', andy:'Son Vida area villas are underused by golf groups. You get privacy, views, and three courses within 10 minutes.', golf:'Son Vida / Son Quint / Son Muntaner 10 min. T Golf Calvià 20 min. Real Golf de Bendinat 15 min.', travelTime:'20 min from Palma airport' },

  /* ===================== NORTHWEST ===================== */
  { id:'jumeirah-port-soller', name:'Jumeirah Port Soller', subname:'Port de Sóller', area:'northwest', luxury:4, type:'hotel', vibes:['resort'], styles:['resort'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:true, golfProximity:1, priority:['spa','beach','dining'], pills:['Ultra-luxury','Clifftop','Hammam spa','Tramuntana views'], budgets:['ultra','flexible'], why:'Perched on cliffs above Port de Sóller. 180-degree Mediterranean views, hammam spa, and the Tramuntana mountains on the doorstep.', andy:'Not a golf-first base. One of the most visually spectacular hotels on the island. Good as a 2-night Tramuntana experience alongside the golf.', golf:'Nearest course: Golf de Andratx, approximately 50 minutes via mountain roads.', travelTime:'50 min from Palma airport' },
  { id:'la-residencia', name:'La Residencia', subname:'A Belmond Hotel, Deià', area:'northwest', luxury:4, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo','corporate'], sizes:['1-2','3-5'], beach:false, spa:true, golfProximity:1, priority:['spa','dining','privacy'], pills:['Belmond','Deià','Historic manor'], budgets:['ultra','flexible'], why:'Two 16th-century stone manor houses above Deià. The most celebrated boutique hotel on the island. David Bowie, Robert Graves, Princess Diana all stayed here.', andy:'Not a golf trip base. One of the best hotels in Spain. Works well as 2 nights in the northwest before moving to the Southwest for the rounds.', golf:'Nearest course: Golf de Andratx, approximately 50 minutes. Golf rounds need to be planned as full-day excursions.', travelTime:'60 min from Palma airport' },
  { id:'cas-xorc', name:"Ca's Xorc", subname:'Sóller', area:'northwest', luxury:3, type:'hotel', vibes:['countryside','boutique'], styles:['countryside','boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['privacy'], pills:['Finca','Infinity pool','Remote'], budgets:['premium','ultra','flexible'], why:'Converted farmhouse on the Sóller-Deià road. Infinity pool, homegrown kitchen, distant sea views. Very remote, car essential.', andy:'One of the most romantic locations on the island. Not the base for a golf trip, but the right answer if someone wants the Tramuntana experience with a round or two worked in.', golf:'Nearest course: Golf de Andratx, approximately 50 minutes.', travelTime:'50 min from Palma airport' },
  { id:'es-moli', name:'Es Moli', subname:'Deià', area:'northwest', luxury:3, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:1, priority:['spa','privacy'], pills:['Classic Tramuntana','Terraced pools','Open Mar-Nov'], budgets:['premium','ultra','flexible'], why:'Classic Mallorca without the Belmond price. Multiple terraced pools carved into the cliff, valley and sea views. Open March to November.', andy:'Plan 2 nights in the northwest for the scenery, then move to the Southwest for the rounds.', golf:'Nearest course: Golf de Andratx, approximately 50 minutes.', travelTime:'55 min from Palma airport' },
  { id:'hotel-hermitage', name:"Hotel L'Hermitage", subname:'Orient', area:'northwest', luxury:3, type:'hotel', vibes:['countryside','boutique'], styles:['countryside','boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:1, priority:['privacy','spa'], pills:['Mountain village','Pool','Total quiet'], budgets:['premium','flexible'], why:'Tucked into the tiny mountain village of Orient in the heart of the Tramuntana. Pool, spa, and complete calm. The village has fewer than 50 inhabitants.', andy:'For the couple who wants to disappear. Orient is the most hidden corner of the island. Golf de Andratx is 35 minutes on mountain roads.', golf:'Nearest course: Golf de Andratx, approximately 35-40 minutes via mountain roads.', travelTime:'30 min from Palma airport' },
  { id:'gran-hotel-soller', name:'Gran Hotel Sóller', subname:'Sóller', area:'northwest', luxury:2, type:'hotel', vibes:['classic'], styles:['classic'], groups:['couple','friends','solo'], sizes:['1-2','3-5'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Sóller town','Classic four-star','Orange groves'], budgets:['mid','premium','flexible'], why:"Four-star in the centre of Sóller, one of Mallorca's most charming towns. The orange grove market, the historic tram to Port de Sóller, and good restaurants on the doorstep.", andy:'A more accessible price point for the northwest. For groups who want the Sóller experience without Jumeirah prices. Golf requires a 50-minute drive.', golf:'Nearest course: Golf de Andratx, approximately 50 minutes.', travelTime:'35 min from Palma airport' },
  { id:'can-verdera', name:'Can Verdera', subname:'Fornalutx', area:'northwest', luxury:2, type:'hotel', vibes:['boutique','classic'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['privacy','dining'], pills:['Stone village','Rooftop terrace','Fornalutx views'], budgets:['mid','premium','flexible'], why:"Small boutique hotel in Fornalutx, repeatedly voted one of Spain's most beautiful villages. Stone-built, rooftop terrace, exceptional mountain views.", andy:'Fornalutx is the most photographed village in Mallorca. A very different experience from any beach hotel. Golf is a long drive but the setting is worth it for 2 nights.', golf:'Nearest course: Golf de Andratx, approximately 55 minutes.', travelTime:'40 min from Palma airport' },
  { id:'northwest-villa', name:'Luxury Villa, Northwest', subname:'Sóller / Valldemossa area', area:'northwest', luxury:3, type:'villa', vibes:['villa','countryside'], styles:['villa','countryside'], groups:['friends','family','couple'], sizes:['6-9','10+'], beach:false, spa:false, golfProximity:1, priority:['privacy'], pills:['Private villa','Mountain views','Tramuntana'], budgets:['premium','ultra','flexible'], why:'A northwest villa offers total privacy in the most dramatic landscape on the island. Private pool, mountain views, olive and lemon groves. Golf is an excursion, not a daily commute.', andy:'Only recommend to groups who are genuinely comfortable with the drive. The right brief: Tramuntana experience first, golf second.', golf:'Golf de Andratx 45-55 min via mountain roads. Plan full-day golf excursions.', travelTime:'35-50 min from Palma airport' },
  { id:'costa-dor', name:"Hotel Costa d'Or", subname:'Lluc Alcari, near Deià', area:'northwest', luxury:2, type:'hotel', vibes:['classic','boutique'], styles:['classic'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:false, golfProximity:1, priority:['beach','privacy'], pills:['Cove beach','Olive grove','Deià nearby'], budgets:['mid','premium','flexible'], why:'Small hotel hidden in an olive grove above a private cove between Deià and Valldemossa. One of the most secluded spots on the island at a reasonable price.', andy:'The affordable alternative to La Residencia. Same Deià area, same dramatic coastline, significantly lower price. Open April to October.', golf:'Nearest course: Golf de Andratx, approximately 45 minutes.', travelTime:'55 min from Palma airport' },
  { id:'hotel-marina-soller', name:'Hotel Marina Sóller', subname:'Port de Sóller', area:'northwest', luxury:1, type:'hotel', vibes:['classic'], styles:['classic'], groups:['couple','friends','family'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:1, priority:['beach'], pills:['Port de Sóller','Budget','Beach access'], budgets:['mid','flexible'], why:'Budget three-star on the Port de Sóller bay. The orange-grove tram from Sóller town is one of the most enjoyable experiences in Mallorca. Golf de Andratx is 50 minutes.', andy:'The affordable northwest answer. Port de Sóller is a beautiful bay to wake up next to. Combine with 1 or 2 rounds at Andratx and a day in the Tramuntana.', golf:'Nearest course: Golf de Andratx, approximately 50 minutes.', travelTime:'45 min from Palma airport' },
]

const QUESTIONS_DATA = [
  { key: 'area', qNum: '1', total: '6', title: 'Which part of Mallorca are you planning to golf in?', sub: 'This determines which course clusters you can reach easily. If you are unsure, choose Southwest: it has the most courses.', grid: false, opts: [
    { val: 'southwest', label: 'Southwest Mallorca', desc: 'Andratx, Santa Ponsa, Bendinat, Calvià. The main golf cluster: 4 to 5 courses within 15 minutes. Best base for a golf-heavy trip.' },
    { val: 'north', label: 'North Mallorca', desc: 'Alcúdia, Pollença, Formentor. Alcanada is one of the island\'s best courses. Fewer rounds available but a more scenic, relaxed base.' },
    { val: 'east', label: 'East Mallorca', desc: 'Capdepera, Canyamel, Pula, Son Servera, Vall d\'Or. Quieter, great beaches, underrated courses. Good for families or those who want calm over convenience.' },
    { val: 'palma', label: 'Near Palma', desc: 'Use Palma as an evening base. Son Gual, Son Vida, Son Muntaner, and Bendinat all within 20 minutes. Good if city restaurants and nightlife matter as much as golf.' },
    { val: 'northwest', label: 'Northwest: Tramuntana experience', desc: 'Sóller, Deià, Valldemossa. Spectacular scenery. Not a golf base: nearest course is 50 minutes. Best as a 2-night add-on to another area.' },
  ]},
  { key: 'priority', qNum: '2', total: '6', title: 'What matters most outside the golf?', sub: 'Pick all that apply: between rounds, what does the group want?', grid: false, multi: true, opts: [
    { val: 'golf-focused', label: 'Be as close to the courses as possible', desc: 'On or beside a course, easy early tee times, nothing to get in the way of the rounds.' },
    { val: 'beach', label: 'Beach and pool time after golf', desc: 'Post-round recovery at the sea or pool is just as important as the round itself.' },
    { val: 'spa', label: 'Spa and wellness recovery', desc: 'A proper spa for legs and backs after multiple rounds. Treatments, steam, pool.' },
    { val: 'dining', label: 'Good food and evenings out', desc: 'Restaurants, wine, local markets. The evenings are as important as the days.' },
    { val: 'privacy', label: 'Privacy and space: our own place', desc: 'Own pool, own schedule, no hotel timetable. A villa where the group can do what it wants.' },
  ]},
  { key: 'group', qNum: '3', total: '6', title: 'Who is travelling?', sub: 'Helps match the right atmosphere and facilities.', grid: true, opts: [
    { val: 'couple', label: 'Couple' },
    { val: 'friends', label: 'Group of friends' },
    { val: 'family', label: 'Family with kids' },
    { val: 'solo', label: 'Travelling solo' },
    { val: 'corporate', label: 'Corporate group' },
  ]},
  { key: 'size', qNum: '4', total: '6', title: 'How many people in total?', sub: 'Affects whether a villa makes more sense than a hotel.', grid: true, opts: [
    { val: '1-2', label: '1 or 2' },
    { val: '3-5', label: '3 to 5' },
    { val: '6-9', label: '6 to 9' },
    { val: '10+', label: '10 or more' },
  ]},
  { key: 'style', qNum: '5', total: '6', title: 'What kind of place feels right?', sub: 'Not about budget. About character.', grid: false, opts: [
    { val: 'boutique', label: 'Boutique and intimate', desc: 'Small, characterful, personal service. You know the staff by name after a day.' },
    { val: 'resort', label: 'Full resort with all facilities', desc: 'Multiple pools, restaurants, a spa, activities. Everything in one place.' },
    { val: 'classic', label: 'Classic and established', desc: 'Proper hotel, reliable service, no Instagram gimmicks. Stands for itself.' },
    { val: 'villa', label: 'Private villa', desc: 'Own pool, own kitchen, own timetable. No hotel lobby, no check-out time.' },
    { val: 'countryside', label: 'Countryside finca or rural retreat', desc: 'Farmhouse conversion, olive groves, quiet. The island away from the coast.' },
  ]},
  { key: 'budget', qNum: '6', total: '6', title: 'What is the rough budget per room per night?', sub: 'In high season (June to September). Helps filter to realistic options.', grid: false, opts: [
    { val: 'mid', label: 'Up to €250 per room', desc: 'Mid-range four-star. Good location, comfortable, nothing extravagant.' },
    { val: 'premium', label: '€250 to €500 per room', desc: 'Premium four or five-star. Proper spa, quality dining, noticeably better.' },
    { val: 'ultra', label: '€500 or more per room', desc: 'Ultra-luxury. Four Seasons, Belmond, Jumeirah. The best the island has.' },
    { val: 'flexible', label: 'Flexible: show me the best option', desc: 'Not constrained by price. Show me what genuinely fits best.' },
  ]},
]

function scoreHotel(h, answers) {
  let s = 0
  if (h.area !== answers.area) return -999
  const priorities = Array.isArray(answers.priority) ? answers.priority : (answers.priority ? [answers.priority] : [])
  const hasPriority = val => priorities.includes(val)
  const matchCount = priorities.filter(p => h.priority.includes(p)).length
  s += matchCount * 18
  if (h.groups.includes(answers.group)) s += 20
  if (answers.group === 'family' && (h.id.includes('secrets') || h.id.includes('vicenc'))) s -= 25
  if (answers.group === 'family' && h.type === 'villa') s += 10
  if (h.sizes.includes(answers.size)) s += 15
  if ((answers.size === '6-9' || answers.size === '10+') && h.type === 'villa') s += 20
  if (answers.size === '1-2' && h.type === 'villa') s -= 15
  if (h.styles.includes(answers.style)) s += 25
  if (answers.style === 'villa' && h.type !== 'villa') s -= 20
  if (answers.style !== 'villa' && h.type === 'villa') s -= 10
  if (h.budgets.includes(answers.budget)) s += 20
  if (answers.budget === 'mid' && h.luxury === 4) s -= 25
  if (answers.budget === 'ultra' && h.luxury === 2) s -= 15
  if (answers.budget === 'flexible') s += 5
  if (hasPriority('beach') && h.beach) s += 15
  if (hasPriority('spa') && h.spa) s += 15
  if (hasPriority('golf-focused') && h.golfProximity === 3) s += 20
  if (hasPriority('golf-focused') && h.golfProximity === 2) s += 10
  if (hasPriority('privacy') && h.type === 'villa') s += 25
  if (hasPriority('dining')) {
    if (['arabella-son-vida','el-vicenc','el-llorenc','can-simoneta','donna-portals','hospes-maricel'].includes(h.id)) s += 12
  }
  if (h.area === 'northwest' && hasPriority('golf-focused')) s -= 30
  return s
}

function pillClass(p) {
  const pl = p.toLowerCase()
  if (pl.includes('beach')) return 'pill--beach'
  if (pl.includes('spa') || pl.includes('wellness')) return 'pill--spa'
  if (pl.includes('course') || pl.includes('golf')) return 'pill--golf'
  if (pl.includes('adult')) return 'pill--adults'
  if (pl.includes('famil')) return 'pill--family'
  return ''
}

const AREA_LABELS = { southwest:'Southwest Mallorca', north:'North Mallorca', east:'East Mallorca', palma:'Near Palma', northwest:'Northwest / Tramuntana' }
const GROUP_LABEL = { couple:'a couple', friends:'a group of friends', family:'a family', solo:'a solo traveller', corporate:'a corporate group' }
const PRIORITY_LABEL = { 'golf-focused':'with golf as the main focus', beach:'with beach time after golf', spa:'with spa recovery between rounds', dining:'with good food and evenings', privacy:'wanting a private villa' }
const TIER_LABELS = { 1:'Mid-range', 2:'Four-star', 3:'Premium five-star', 4:'Ultra-luxury' }
const AREA_SHORT = { southwest:'Southwest', north:'North', east:'East', palma:'Palma', northwest:'Northwest' }

export default function HotelRecommenderClient() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const containerRef = useRef(null)

  function scrollToTop() {
    const el = containerRef.current
    if (!el) return
    window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 70), behavior: 'smooth' })
  }

  const TOTAL = QUESTIONS_DATA.length
  const currentQ = QUESTIONS_DATA[step - 1]
  const progress = ((step - 1) / TOTAL) * 100

  function selectAnswer(key, val) {
    if (currentQ && currentQ.multi) {
      setAnswers(prev => {
        const curr = Array.isArray(prev[key]) ? prev[key] : []
        const idx = curr.indexOf(val)
        return { ...prev, [key]: idx >= 0 ? curr.filter(v => v !== val) : [...curr, val] }
      })
    } else {
      const newAnswers = { ...answers, [key]: val }
      setAnswers(newAnswers)
      setTimeout(() => {
        if (step === TOTAL) {
          const allScored = HOTELS.map(h => ({ hotel: h, score: scoreHotel(h, newAnswers) }))
            .filter(x => x.score > -999)
            .sort((a, b) => b.score - a.score)
          setResults(allScored.slice(0, 3).filter(x => x.score > 0))
          scrollToTop()
        } else {
          setStep(s => s + 1)
          scrollToTop()
        }
      }, 220)
    }
  }

  function next() {
    if (step === TOTAL) {
      buildResults()
    } else {
      setStep(s => s + 1)
      scrollToTop()
    }
  }

  function back() {
    setStep(s => s - 1)
    scrollToTop()
  }

  function buildResults() {
    const allScored = HOTELS.map(h => ({ hotel: h, score: scoreHotel(h, answers) }))
      .filter(x => x.score > -999)
      .sort((a, b) => b.score - a.score)
    const top = allScored.slice(0, 3).filter(x => x.score > 0)
    setResults(top)
    scrollToTop()
  }

  function restart() {
    setStep(1)
    setAnswers({})
    setResults(null)
    setEmail('')
    setNewsletter(false)
    setEmailSent(false)
    setEmailError(false)
    scrollToTop()
  }

  async function sendEmail() {
    if (!email || !email.includes('@')) return
    const escapeHtml = value => String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')

    const answerSummary = (() => {
      const parts = []
      const areaMap = { southwest:'Southwest Mallorca', north:'North Mallorca', east:'East Mallorca', palma:'Near Palma', northwest:'Northwest / Tramuntana' }
      const priorityMap = { 'golf-focused':'Close to courses', beach:'Beach & pool', spa:'Spa & wellness', dining:'Food & evenings', privacy:'Private villa / own space' }
      const groupMap = { couple:'Couple', friends:'Group of friends', family:'Family', solo:'Solo', corporate:'Corporate group' }
      const sizeMap = { '1-2':'1–2 people', '3-5':'3–5 people', '6-9':'6–9 people', '10+':'10+ people' }
      const styleMap = { boutique:'Boutique', resort:'Full resort', classic:'Classic hotel', villa:'Private villa', countryside:'Countryside finca' }
      const budgetMap = { mid:'Up to €250/room', premium:'€250–€500/room', ultra:'€500+/room', flexible:'Flexible budget' }
      if (answers.area) parts.push(`Area: ${areaMap[answers.area] || answers.area}`)
      const pArr = Array.isArray(answers.priority) ? answers.priority : (answers.priority ? [answers.priority] : [])
      if (pArr.length) parts.push(`Priorities: ${pArr.map(p => priorityMap[p] || p).join(', ')}`)
      if (answers.group) parts.push(`Group: ${groupMap[answers.group] || answers.group}`)
      if (answers.size) parts.push(`Size: ${sizeMap[answers.size] || answers.size}`)
      if (answers.style) parts.push(`Style: ${styleMap[answers.style] || answers.style}`)
      if (answers.budget) parts.push(`Budget: ${budgetMap[answers.budget] || answers.budget}`)
      return parts.join(' | ')
    })()

    const bodyHtml = `
      <p style="margin:0 0 12px;font-size:12px;color:#8A7F74;line-height:1.6;">${answerSummary}</p>
      <p style="margin:0 0 16px;">Here are the hotel bases I would start with from your answers:</p>
      ${results.map((x, index) => `
        <div style="margin:0 0 18px;padding:0 0 16px;border-bottom:1px solid #E6DED1;">
          <p style="margin:0 0 6px;font-weight:700;color:#2D4A3E;">${index + 1}. ${escapeHtml(x.hotel.name)}</p>
          <p style="margin:0 0 8px;color:#6F665B;">${escapeHtml(x.hotel.subname)}</p>
          <p style="margin:0 0 8px;">${escapeHtml(x.hotel.why)}</p>
          <p style="margin:0;"><strong>Golf fit:</strong> ${escapeHtml(x.hotel.golf)}</p>
        </div>
      `).join('')}
    `

    // Fire-and-forget: add to MailerLite
    const mlBody = new URLSearchParams()
    mlBody.set('fields[email]', email)
    mlBody.set('fields[hotel_answers]', answerSummary)
    mlBody.set('ml-submit', '1')
    mlBody.set('anticsrf', 'true')
    fetch('https://assets.mailerlite.com/jsonp/2404105/forms/189284603205256243/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: mlBody.toString(),
    }).catch(() => {})

    try {
      const response = await fetch('/api/send-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tool: 'hotel-recommender',
          subject: 'Your Mallorca golf hotel shortlist',
          bodyHtml,
          subscribeNewsletter: newsletter,
        }),
      })
      if (!response.ok) throw new Error('Email failed')
      setEmailSent(true)
    } catch {
      setEmailError(true)
    }
  }

  const canContinue = currentQ && (Array.isArray(answers[currentQ.key]) ? answers[currentQ.key].length > 0 : !!answers[currentQ.key])
  const isLastStep = step === TOTAL

  return (
    <div ref={containerRef}>
      <style jsx>{`
        .hr-hero { background:#2D4A3E; color:#F7F4EF; padding:52px 24px 48px; text-align:center; }
        .hr-eyebrow { font-family:'Jost',sans-serif; font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#CBA968; margin-bottom:16px; display:block; }
        .hr-h1 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:500; font-size:clamp(2.1rem,5vw,3.2rem); line-height:1.1; color:#F7F4EF; max-width:600px; margin:0 auto; }
        .hr-sub { font-family:'Jost',sans-serif; font-weight:300; font-size:1rem; line-height:1.6; color:rgba(247,244,239,0.78); max-width:480px; margin:16px auto 0; }
        .hr-progress-wrap { background:#2D4A3E; padding:0 32px 28px; }
        .hr-progress-bar { height:2px; background:rgba(247,244,239,0.15); max-width:480px; margin:0 auto; border-radius:2px; overflow:hidden; }
        .hr-progress-fill { height:100%; background:#B8973C; border-radius:2px; transition:width 0.4s ease; }
        .hr-quiz-wrap { max-width:640px; margin:0 auto; padding:48px 24px 60px; }
        .hr-step-num { font-size:0.72rem; font-weight:500; letter-spacing:.14em; text-transform:uppercase; color:#B8973C; margin-bottom:10px; }
        .hr-step h2 { font-family:'Cormorant Garamond',Georgia,serif; font-size:clamp(1.5rem,3.5vw,2rem); font-weight:400; color:#1A1916; line-height:1.25; margin-bottom:8px; text-align:center; }
        .hr-step-sub { font-size:0.88rem; color:#8A7F74; line-height:1.65; margin-bottom:28px; text-align:center; }
        .hr-options { display:flex; flex-direction:column; gap:10px; }
        .hr-options-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .hr-options-grid > button:last-child:nth-child(odd) { grid-column:1 / -1; }
        .hr-opt { background:#fff; border:1.5px solid #E0D8CB; border-radius:3px; padding:16px 20px; cursor:pointer; transition:border-color 0.18s, background 0.18s; display:flex; align-items:flex-start; gap:14px; font-family:inherit; font-size:inherit; text-align:left; width:100%; }
        .hr-opt:hover { border-color:#2D4A3E; background:rgba(45,74,62,0.03); }
        .hr-opt.selected { border-color:#2D4A3E; background:rgba(45,74,62,0.06); }
        .hr-opt-body { flex:1; }
        .hr-opt-label { font-weight:500; font-size:0.95rem; color:#1A1916; margin-bottom:3px; }
        .hr-opt-desc { font-size:0.82rem; color:#8A7F74; line-height:1.55; }
        .hr-nav { display:flex; gap:12px; margin-top:28px; align-items:center; }
        .hr-btn-next { background:#2D4A3E; color:#F7F4EF; border:none; padding:13px 32px; font-family:'Jost',sans-serif; font-size:0.88rem; font-weight:500; letter-spacing:.06em; cursor:pointer; border-radius:2px; transition:background 0.18s; }
        .hr-btn-next:hover { background:#3a5f50; }
        .hr-btn-next:disabled { opacity:0.4; cursor:default; }
        .hr-btn-back { background:none; border:none; color:#8A7F74; font-family:'Jost',sans-serif; font-size:0.85rem; cursor:pointer; padding:8px 0; transition:color 0.18s; }
        .hr-btn-back:hover { color:#1A1916; }
        .hr-results-hero { background:#2D4A3E; padding:48px 32px 40px; text-align:center; color:#F7F4EF; }
        .hr-results-hero h2 { font-family:'Cormorant Garamond',Georgia,serif; font-size:clamp(1.8rem,4vw,2.4rem); font-weight:300; margin-bottom:10px; }
        .hr-results-hero p { font-size:0.9rem; color:rgba(247,244,239,0.7); max-width:480px; margin:0 auto; line-height:1.7; }
        .hr-results-wrap { max-width:720px; margin:0 auto; padding:44px 24px 60px; }
        .hr-results-label { font-size:0.72rem; font-weight:500; letter-spacing:.16em; text-transform:uppercase; color:#8A7F74; margin-bottom:24px; }
        .hr-area-warning { background:#FFF8E6; border:1px solid #E8D06A; border-left:4px solid #B8973C; padding:14px 16px; border-radius:2px; margin-bottom:20px; font-size:0.85rem; color:#5a4a1a; line-height:1.65; }
        .hr-hotel-card { background:#fff; border:1px solid #E0D8CB; border-radius:3px; margin-bottom:20px; overflow:hidden; }
        .hr-hotel-card.top { border-color:#2D4A3E; border-width:2px; }
        .hr-card-rank { background:#2D4A3E; color:#F7F4EF; font-size:0.7rem; font-weight:500; letter-spacing:.14em; text-transform:uppercase; padding:6px 16px; }
        .hr-card-rank.gold { background:#B8973C; }
        .hr-card-body { padding:22px 22px 18px; }
        .hr-card-meta { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:10px; }
        .hr-card-area { font-size:0.72rem; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#B8973C; }
        .hr-card-sep { color:#C8B89A; }
        .hr-card-tier { font-size:0.78rem; color:#8A7F74; }
        .hr-hotel-card h3 { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.35rem; font-weight:400; color:#1A1916; margin-bottom:8px; line-height:1.2; }
        .hr-pills { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px; }
        .pill { font-size:0.72rem; font-weight:500; padding:3px 9px; border-radius:20px; letter-spacing:.05em; background:#eee; color:#555; }
        .pill--beach { background:#E8F0F5; color:#2a5a7a; }
        .pill--spa { background:#F0EDF7; color:#4a3070; }
        .pill--golf { background:#E8F0EC; color:#2D4A3E; }
        .pill--adults { background:#FAF0E6; color:#7a4a2a; }
        .pill--family { background:#FFF3E0; color:#7a5a0a; }
        .hr-card-why { font-size:0.88rem; color:#2C2A27; line-height:1.7; margin-bottom:10px; }
        .hr-card-andy { background:#F7F4EF; border-left:3px solid #B8973C; padding:12px 14px; margin-bottom:12px; }
        .hr-card-andy-label { font-size:0.7rem; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#B8973C; margin-bottom:4px; }
        .hr-card-andy p { font-size:0.85rem; color:#2C2A27; line-height:1.65; font-style:italic; }
        .hr-card-golf { font-size:0.82rem; color:#8A7F74; margin-bottom:14px; line-height:1.55; }
        .hr-card-golf strong { color:#2D4A3E; font-weight:500; }
        .hr-email-section { background:#2D4A3E; padding:36px 28px; text-align:center; color:#F7F4EF; border-radius:3px; margin-top:36px; }
        .hr-email-section h3 { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.4rem; font-weight:300; margin-bottom:8px; }
        .hr-email-section p { font-size:0.85rem; color:rgba(247,244,239,0.7); margin-bottom:20px; line-height:1.65; }
        .hr-email-row { display:flex; flex-direction:column; gap:10px; max-width:420px; margin:0 auto 12px; align-items:center; }
        .hr-email-row .hr-btn-email { width:100%; }
        .hr-email-input { width:100%; padding:11px 14px; border:1px solid rgba(247,244,239,0.3); background:rgba(247,244,239,0.1); color:#F7F4EF; font-family:'Jost',sans-serif; font-size:0.88rem; border-radius:2px; outline:none; text-align:center; }
        .hr-email-input::placeholder { color:rgba(247,244,239,0.4); }
        .hr-email-input:focus { border-color:#B8973C; }
        .hr-btn-email { background:#B8973C; color:#1A1916; border:none; padding:11px 22px; font-family:'Jost',sans-serif; font-size:0.85rem; font-weight:500; cursor:pointer; border-radius:2px; white-space:nowrap; transition:background 0.18s; }
        .hr-btn-email:hover { background:#c9a84c; }
        .hr-newsletter-opt { display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.78rem; color:rgba(247,244,239,0.55); cursor:pointer; }
        .hr-email-success { font-size:0.88rem; color:#B8973C; padding:8px 0; }
        .hr-andy-cta { background:#fff; border:1px solid #E0D8CB; border-radius:3px; padding:28px 24px; text-align:center; margin-top:20px; }
        .hr-andy-cta h3 { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.3rem; font-weight:400; color:#1A1916; margin-bottom:8px; }
        .hr-andy-cta p { font-size:0.85rem; color:#8A7F74; line-height:1.65; margin-bottom:18px; max-width:440px; margin-left:auto; margin-right:auto; }
        .hr-cta-links { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .hr-cta-link { display:inline-block; padding:11px 24px; font-size:0.85rem; font-weight:500; border-radius:2px; text-decoration:none; letter-spacing:.05em; transition:background 0.18s, color 0.18s; }
        .hr-cta-link-primary { background:#2D4A3E; color:#F7F4EF; }
        .hr-cta-link-primary:hover { background:#3a5f50; }
        .hr-cta-link-secondary { background:transparent; border:1.5px solid #2D4A3E; color:#2D4A3E; }
        .hr-cta-link-secondary:hover { background:rgba(45,74,62,0.06); }
        .hr-btn-retry { background:none; border:1.5px solid rgba(247,244,239,0.3); color:rgba(247,244,239,0.7); padding:10px 24px; font-family:'Jost',sans-serif; font-size:0.82rem; font-weight:500; cursor:pointer; border-radius:2px; margin-top:20px; letter-spacing:.05em; transition:border-color 0.18s, color 0.18s; }
        .hr-btn-retry:hover { border-color:rgba(247,244,239,0.6); color:#F7F4EF; }
        .hr-retry-wrap { text-align:center; padding-bottom:40px; display:flex; flex-direction:column; align-items:center; gap:10px; }
        @media (max-width:520px) {
          .hr-options-grid { grid-template-columns:1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hr-hero">
        <span className="hr-eyebrow">Free tool</span>
        <h1 className="hr-h1">Where should you stay<br/>for your golf trip?</h1>
        <p className="hr-sub">Six questions. A personalised shortlist matched to your golf itinerary, group, and style.</p>
      </section>

      <ToolTrustLine />

      {/* PROGRESS */}
      <div className="hr-progress-wrap">
        <div className="hr-progress-bar">
          <div className="hr-progress-fill" style={{ width: results ? '100%' : `${progress}%` }} />
        </div>
      </div>

      {/* QUIZ */}
      {!results && currentQ && (
        <div className="hr-quiz-wrap">
          <div className="hr-step">
            <p className="hr-step-num">Question {currentQ.qNum} of {currentQ.total}</p>
            <h2>{currentQ.title}</h2>
            <p className="hr-step-sub">{currentQ.sub}</p>

            <div className={currentQ.grid ? 'hr-options-grid' : 'hr-options'}>
              {currentQ.opts.map(opt => (
                <button
                  key={opt.val}
                  className={`hr-opt${(Array.isArray(answers[currentQ.key]) ? answers[currentQ.key].includes(opt.val) : answers[currentQ.key] === opt.val) ? ' selected' : ''}`}
                  onClick={() => selectAnswer(currentQ.key, opt.val)}
                >
                  <div className="hr-opt-body">
                    <div className="hr-opt-label">{opt.label}</div>
                    {opt.desc && <div className="hr-opt-desc">{opt.desc}</div>}
                  </div>
                </button>
              ))}
            </div>

            <div className="hr-nav">
              <button className="hr-btn-next" onClick={next} disabled={!canContinue}>
                {isLastStep ? 'See my recommendations' : 'Continue'}
              </button>
              {step > 1 && (
                <button className="hr-btn-back" onClick={back}>Back</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {results && (
        <>
          <div className="hr-results-hero">
            <h2>Your hotel shortlist</h2>
            <p>
              For {GROUP_LABEL[answers.group] || 'your group'}, {PRIORITY_LABEL[answers.priority] || ''}, staying in {AREA_LABELS[answers.area] || answers.area}.
            </p>
          </div>

          <div className="hr-results-wrap">
            {answers.area === 'northwest' && (
              <div className="hr-area-warning">
                <strong>Planning note:</strong> The northwest is spectacular but not a golf base. The nearest course (Golf de Andratx) is around 50 minutes via mountain roads. These options work best as a 2-night Tramuntana experience. Plan golf rounds as full-day excursions or combine with a Southwest base.
              </div>
            )}

            <p className="hr-results-label">Best options for {AREA_LABELS[answers.area] || answers.area}</p>

            {results.length === 0 ? (
              <p style={{ color:'#8A7F74', lineHeight:'1.7', fontSize:'0.9rem' }}>No exact matches. Try adjusting your area or budget answers.</p>
            ) : (
              results.map((x, i) => {
                const h = x.hotel
                const rankLabels = ['Best match', 'Second choice', 'Also worth considering']
                const typeLabel = h.type === 'villa' ? 'Private villa' : (TIER_LABELS[h.luxury] || '')
                return (
                  <div key={h.id} className={`hr-hotel-card${i === 0 ? ' top' : ''}`}>
                    <div className={`hr-card-rank${i === 0 ? ' gold' : ''}`}>{rankLabels[i]}</div>
                    <div className="hr-card-body">
                      <div className="hr-card-meta">
                        <span className="hr-card-area">{AREA_SHORT[h.area] || h.area}</span>
                        <span className="hr-card-sep">·</span>
                        <span className="hr-card-tier">{typeLabel}</span>
                        {h.travelTime && (
                          <>
                            <span className="hr-card-sep">·</span>
                            <span className="hr-card-tier">{h.travelTime.replace(/-/g, '–')}</span>
                          </>
                        )}
                      </div>
                      <h3>{h.name}</h3>
                      {h.subname && <p style={{ fontSize:'0.8rem', color:'#8A7F74', marginBottom:'10px' }}>{h.subname}</p>}
                      <div className="hr-pills">
                        {h.pills.map(p => (
                          <span key={p} className={`pill ${pillClass(p)}`}>{p}</span>
                        ))}
                      </div>
                      <p className="hr-card-why">{h.why}</p>
                      <div className="hr-card-andy">
                        <div className="hr-card-andy-label">Andy's note</div>
                        <p>{h.andy}</p>
                      </div>
                      <p className="hr-card-golf"><strong>Nearby golf:</strong> {h.golf}</p>
                    </div>
                  </div>
                )
              })
            )}

            {/* EMAIL */}
            <div className="hr-email-section">
              <h3>Email yourself this shortlist</h3>
              <p>We'll send your matched hotels with the full notes, handy for comparing options with the rest of the group before anyone books.</p>
              {emailSent ? (
                <p className="hr-email-success">Sent. Check your inbox.</p>
              ) : (
                <>
                  <div className="hr-email-row">
                    <input
                      className="hr-email-input"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <button className="hr-btn-email" onClick={sendEmail}>Email me my shortlist</button>
                  </div>
                  <label className="hr-newsletter-opt">
                    <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} style={{ accentColor:'#B8973C' }} />
                    Also send me Andy's occasional Mallorca golf planning notes
                  </label>
                  <p style={{ fontSize:'11px', color:'#8A7F74', marginTop:'8px' }}>No spam. Andy replies to every message personally, usually within a day.</p>
                  {emailError && <p className="hr-email-success">Something went wrong. Try emailing andy@mrmallorcagolf.com directly.</p>}
                </>
              )}
            </div>

            {/* ANDY CTA */}
            <div className="hr-andy-cta">
              <h3>Ready to put the trip together?</h3>
              <p>Andy can match your hotel choice to the right tee times, courses, and schedule: based on the area, your handicap, and how many rounds you want to fit in.</p>
              <div className="hr-cta-links">
                <a href="https://www.mrmallorcagolf.com/contact" className="hr-cta-link hr-cta-link-primary">Enquire with Andy</a>
                <a href={WA_HOTEL_HREF} data-analytics-manual="true" target="_blank" rel="noopener noreferrer" className="hr-cta-link hr-cta-link-secondary" onClick={trackHotelWhatsApp}>WhatsApp Andy</a>
              </div>
            </div>

            <div className="hr-retry-wrap">
              <button className="hr-btn-retry" onClick={() => { setResults(null); setStep(1); setAnswers({}); scrollToTop() }}>Change my answers</button>
              <button className="hr-btn-retry" onClick={restart} style={{ fontSize:'.78rem', opacity:.7 }}>Start again from scratch</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
