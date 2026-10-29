// This HOTELS array is the master for hotel data — the Hotel Recommender tool
// scores from it, and `scripts/export-hotel-reference.mjs` regenerates the
// Drive doc `Reference/MMG_HOTEL_REFERENCE.md` from it (that doc is read-only;
// it had drifted to ~26 stale prose entries while this list had 64). After
// editing a hotel here, run `npm run export:hotel-reference`. `check:content`
// runs `check:hotel-reference` to catch a forgotten regen.
export const HOTELS = [
  /* ===================== SOUTHWEST ===================== */
  {"id":"arabella-son-vida","name":"Sheraton Mallorca Arabella Golf Hotel","subname":"Son Vida","area":"southwest","luxury":4,"type":"hotel","vibes":["resort","golf-focused"],"styles":["resort","classic"],"groups":["friends","couple","solo","corporate","family"],"sizes":["1-2","3-5","6-9","10+"],"beach":false,"spa":true,"golfProximity":3,"priority":["golf-focused","spa"],"pills":["On course","Spa","Golf resort"],"budgets":["ultra","flexible"],"why":"A base beside Son Vida, with Son Muntaner and Son Quint nearby.","andy":"A golf-first base with a spa and on-site restaurants. Palma is within reach for evenings.","golf":"On the estate: Son Vida, Son Quint, Son Muntaner (Best in Spain 2025). T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa cluster 20 min.","travelTime":"15 min from Palma airport"},
  { id:'gran-melia-de-mar', name:'Gran Meliá de Mar', subname:'Illetas', area:'southwest', luxury:4, type:'hotel', vibes:['resort','luxury'], styles:['resort','boutique'], groups:['couple','solo','corporate'], sizes:['1-2','3-5'], beach:true, spa:true, golfProximity:2, priority:['beach','spa','dining'], pills:['Beach','Spa','Palma nearby'], budgets:['ultra','flexible'], why:'Ultra-luxury with beach access and full resort service. Bendinat golf 8 minutes. Illetas puts both Palma city and the Southwest course cluster in range.', andy:'A quieter five-star than the Mandarin Oriental. Flexible base for different round combinations.', golf:'Real Golf de Bendinat 8 min. T Golf Calvià 15 min. Son Vida 20 min.', travelTime:'12 min from Palma airport' },
  { id:'hospes-maricel', name:'Hospes Maricel', subname:'Cas Català', area:'southwest', luxury:3, type:'hotel', vibes:['boutique','luxury'], styles:['boutique','classic'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:true, golfProximity:2, priority:['beach','spa','dining'], pills:['Boutique','Seafront','Private jetty'], budgets:['premium','ultra','flexible'], why:'1940s palace feel with a private jetty. Old Mallorcan glamour, smaller and more intimate than the big five-stars. Bendinat golf 8 minutes.', andy:'A distinctive alternative to the larger five-stars. The kind of place that feels genuinely Mallorcan rather than international-hotel-chain.', golf:'Real Golf de Bendinat 8 min. T Golf Calvià 15 min.', travelTime:'12 min from Palma airport' },
  {"id":"hotel-bendinat","name":"Hotel Bendinat","subname":"Bendinat","area":"southwest","luxury":2,"type":"hotel","vibes":["classic","resort"],"styles":["classic","resort"],"groups":["friends","couple","solo"],"sizes":["1-2","3-5"],"beach":false,"spa":false,"golfProximity":2,"priority":["dining"],"pills":["Seafront","Quiet area","Southwest golf"],"budgets":["mid","premium","flexible"],"why":"Four-star seafront hotel in Old Bendinat, with gardens, a pool and a restaurant overlooking the sea. A coastal base for southwest golf, with a drive to the courses.","andy":"Old Bendinat is one of the quieter corners of the southwest. Plan transport to the golf, then leave time for the sea and dinner back at the hotel.","golf":"Real Golf de Bendinat, T Golf Calvià and Golf Santa Ponsa 1 are options for a southwest trip. The hotel is on the coast; the golf courses require a drive.","travelTime":"15 min from Palma airport"},
  { id:'son-caliu', name:'Son Caliu Hotel Spa', subname:'Palma Nova', area:'southwest', luxury:2, type:'hotel', vibes:['resort'], styles:['resort','classic'], groups:['friends','family','couple'], sizes:['3-5','6-9'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Beach','1100m² spa','Family-friendly'], budgets:['mid','flexible'], why:'Mid-range four-star with a proper spa and sea access via jetty. A practical mid-point for the Southwest course cluster at a sensible price.', andy:'Between Puerto Portals and Palma Nova. Good for mixed groups where not everyone golfs. The spa and beach hold their own.', golf:'T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa 20 min.', travelTime:'20 min from Palma airport' },
  { id:'zafiro-andratx', name:'Zafiro Palace Andratx', subname:'Camp de Mar', area:'southwest', luxury:3, type:'hotel', vibes:['resort','family-friendly'], styles:['resort'], groups:['friends','family','couple'], sizes:['3-5','6-9','10+'], beach:true, spa:true, golfProximity:3, priority:['beach','spa','golf-focused'], pills:['Beach','Spa','Family resort','Golf de Andratx 5 min'], budgets:['premium','flexible'], why:'Five-star resort five minutes from Golf de Andratx. Beach is walkable. Good value if half the group golfs and half does not.', andy:"Golf de Andratx requires a handicap certificate: maximum 28 for men and 36 for women. Check the limits for every player before choosing the course.", golf:'Golf de Andratx 5 min. T Golf Calvià 20 min. Santa Ponsa cluster 25 min.', travelTime:'30 min from Palma airport' },
  {"id":"secrets-villamil","name":"Secrets Mallorca Villamil","subname":"Peguera","area":"southwest","luxury":4,"type":"hotel","vibes":["resort"],"styles":["resort","boutique"],"groups":["couple","solo"],"sizes":["1-2"],"beach":true,"spa":true,"golfProximity":2,"priority":["beach","spa"],"pills":["Adults only","Spa","Peguera beach"],"budgets":["ultra","flexible"],"why":"Adults-only resort for guests aged 18 and over, on Peguera beach. Rooms and suites, a spa, pools and several dining options. Golf de Andratx is a nearby option for a round.","andy":"Good five-star base if the couple wants a serious beach resort with the full range of Southwest courses available. Andratx is the closest and most dramatic.","golf":"Golf de Andratx 15 min. T Golf Calvià 20 min. Santa Ponsa 25 min.","travelTime":"30 min from Palma airport"},
  { id:'donna-portals', name:'The Donna Portals', subname:'Portals Nous', area:'southwest', luxury:3, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:false, golfProximity:2, priority:['beach','dining'], pills:['Boutique','Private cove','Puerto Portals nearby'], budgets:['premium','ultra','flexible'], why:'Design-led boutique next to a private cove in Portals Nous. Themed suites, Day Club, flower pool. Puerto Portals marina for evenings.', andy:'T Golf Calvià 10 minutes inland, Santa Ponsa cluster 15 minutes. Port Adriano makes a good dinner base mid-week.', golf:'Real Golf de Bendinat 10 min. T Golf Calvià 10 min. Son Vida 18 min.', travelTime:'15 min from Palma airport' },
  {"id":"finca-serena","name":"Finca Serena","subname":"Montuïri","area":"southwest","luxury":3,"type":"hotel","vibes":["countryside"],"styles":["countryside"],"groups":["couple","solo","friends"],"sizes":["1-2","3-5"],"beach":false,"spa":true,"golfProximity":2,"priority":["spa","privacy"],"pills":["Adults only","Wellness","45 hectares"],"budgets":["premium","ultra","flexible"],"why":"Adults-only five-star finca near Montuïri, with 45 hectares of countryside, a spa and the Jacaranda restaurant. A rural base with a drive to the golf.","andy":"Choose it for time in the countryside between rounds. Son Gual is one option for the golf; plan the transport around your tee times.","golf":"Son Gual is 19 km from the hotel according to its golf guide. Other course choices need to fit the route from Montuïri.","travelTime":"25 min from Palma airport"},
  { id:'sw-villa', name:'Luxury Villa, Southwest', subname:'Santa Ponsa / Andratx area', area:'southwest', luxury:3, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','family','couple'], sizes:['6-9','10+'], beach:false, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Own pool','Full flexibility'], budgets:['premium','ultra','flexible','mid'], why:'For six or more, a villa changes the trip: late breakfasts, your own pool after the round, no hotel timetable. Four courses within 15 minutes.', andy:'The villa location needs to match the tee sheet. This is exactly the matching I can help with.', golf:'Golf Santa Ponsa 1, Golf de Andratx, T Golf Calvià, Real Golf de Bendinat: all within 15-20 min depending on villa location. Son Antem East/West 25-30 min.', travelTime:'25-35 min from Palma airport' },
  {"id":"son-net","name":"Son Net","subname":"Puigpunyent","area":"southwest","luxury":4,"type":"hotel","vibes":["boutique","countryside"],"styles":["boutique","countryside"],"groups":["couple","solo","friends"],"sizes":["1-2","3-5"],"beach":false,"spa":true,"golfProximity":2,"priority":["privacy","spa","dining"],"pills":["Historic finca","17th century","Spa"],"budgets":["ultra","flexible"],"why":"Seventeenth-century stone estate in the Tramuntana foothills at Puigpunyent, with gardens, pools and a spa. A countryside stay with a drive to the golf.","andy":"One of the most beautiful buildings on the island. A proper finca escape that still puts you within reach of the Southwest courses.","golf":"Son Vida, Son Muntaner, Son Quint and Son Termes are options to consider from Puigpunyent. Plan transfers around the tee times.","travelTime":"25 min from Palma airport"},
  {"id":"valparaiso-palace","name":"Valparaiso Palace","subname":"Son Armadans, Palma","area":"southwest","luxury":3,"type":"hotel","vibes":["resort","classic"],"styles":["resort","classic"],"groups":["friends","family","couple","corporate"],"sizes":["3-5","6-9","10+"],"beach":false,"spa":true,"golfProximity":2,"priority":["spa","golf-focused"],"pills":["Large resort","Conference facilities","Palma views"],"budgets":["mid","premium","flexible"],"why":"Large five-star on the hill above Palma with panoramic bay views and a full spa. Practical for bigger groups and corporate trips that need meeting space alongside golf.","andy":"Not the most glamorous but very capable for groups. Good base for multiple course combinations across the Southwest and Palma area.","golf":"Son Vida / Son Quint / Son Muntaner 10 min. Real Golf de Bendinat 15 min. T Golf Calvià 20 min.","travelTime":"15 min from Palma airport"},
  { id:'melia-calvia-beach', name:'Meliá Calviá Beach', subname:"Magaluf", area:'southwest', luxury:3, type:'hotel', vibes:['resort'], styles:['resort'], groups:['friends','family','couple'], sizes:['3-5','6-9','10+'], beach:true, spa:true, golfProximity:2, priority:['beach','spa','golf-focused'], pills:["Beach resort","Magaluf","Southwest golf"], budgets:['premium','flexible'], why:"Four-star resort on Magaluf beach with pools and a spa. A southwest stay for groups who want beach time between rounds.", andy:"I would use it for a southwest trip. Arrange transport to the courses rather than planning to walk to Santa Ponsa.", golf:"T Golf Calvià, Real Golf de Bendinat and Golf Santa Ponsa 1.", travelTime:"Airport transfer to Magaluf" },
  {"id":"barcelo-illetas","name":"Barceló Illetas Albatros","subname":"Illetas","area":"southwest","luxury":2,"type":"hotel","vibes":["resort","classic"],"styles":["classic","resort"],"groups":["couple","friends"],"sizes":["1-2","3-5"],"beach":true,"spa":true,"golfProximity":2,"priority":["beach","spa"],"pills":["Sea views","Adults preferred","Value"],"budgets":["mid","flexible"],"why":"Well-priced four-star in Illetas with good sea views and direct access to the water. Bendinat golf 10 minutes. A sensible mid-range option in an expensive area.","andy":"Good value for the location. Illetas is a step up from Palma Nova without the five-star prices of Gran Meliá.","golf":"Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.","travelTime":"12 min from Palma airport"},
  {"id":"portals-hills","name":"Portals Hills Boutique Hotel","subname":"Portals Nous","area":"southwest","luxury":3,"type":"hotel","vibes":["boutique"],"styles":["boutique"],"groups":["couple","solo","family"],"sizes":["1-2","3-5"],"beach":false,"spa":true,"golfProximity":2,"priority":["privacy","spa"],"pills":["Boutique","Hilltop","Infinity pool"],"budgets":["premium","flexible"],"why":"Boutique hotel above Portals Nous, with an infinity pool looking out to sea. Family suites are available. A quieter base with a drive to the golf and Puerto Portals marina.","andy":"A quieter alternative to the Donna Portals for couples who want privacy over scene. T Golf Calvià is 10 minutes.","golf":"T Golf Calvià 10 min. Real Golf de Bendinat 12 min. Son Vida 15 min.","travelTime":"15 min from Palma airport"},
  {"id":"son-antem-marriott","name":"Hacienda Son Antem Golf Resort, Autograph Collection","subname":"Llucmajor","area":"southwest","luxury":2,"type":"hotel","vibes":["resort","golf-focused"],"styles":["resort","classic"],"groups":["friends","couple","corporate","family"],"sizes":["3-5","6-9","10+"],"beach":false,"spa":true,"golfProximity":3,"priority":["golf-focused","spa"],"pills":["On course","36 holes","Resort facilities"],"budgets":["mid","premium","flexible"],"why":"Five-star resort at Son Antem, with two 18-hole courses, a spa and family facilities. A practical base when Son Antem East and West are on the schedule.","andy":"Not the most exciting hotel on the island but the most practical if Son Antem is on the schedule. Golf Maioris is 10 minutes and Son Gual 15.","golf":"Son Antem East and West on site. Golf Maioris 10 min. Son Gual 15 min. Finca Serena area accessible.","travelTime":"20 min from Palma airport"},
  {"id":"sol-palmanova","name":"Sol Palmanova","subname":"Palmanova","area":"southwest","luxury":1,"type":"hotel","vibes":["resort","classic"],"styles":["resort","classic"],"groups":["friends","family"],"sizes":["3-5","6-9","10+"],"beach":true,"spa":false,"golfProximity":2,"priority":["beach","golf-focused"],"pills":["Budget beach","Family","Santa Ponsa cluster"],"budgets":["mid","flexible"],"why":"Straightforward four-star beach-area hotel in Palmanova. Does the job for groups focused on golf and not the hotel. T Golf Calvià and Golf Santa Ponsa 1 are options for the rounds.","andy":"The honest budget answer for the Southwest. Spend less on the room, spend it on the rounds instead.","golf":"T Golf Calvià, Real Golf de Bendinat and Golf Santa Ponsa 1 are public-access options in the southwest. Arrange transport from Palmanova.","travelTime":"20 min from Palma airport"},
  { id:'hipotels-flamenco', name:'Hipotels Flamenco', subname:"Cala Millor", area:"east", luxury:2, type:'hotel', vibes:['resort'], styles:['resort'], groups:['friends','family'], sizes:['3-5','6-9','10+'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:["Beachfront","Cala Millor","East-coast golf"], budgets:['mid','flexible'], why:"Four-star hotel on Cala Millor beach. An east-coast option for groups combining golf with time at the beach.", andy:"I would keep the golf in the east when staying here. Palma and the southwest mean longer drives.", golf:"Son Servera, Pula, Canyamel and Capdepera.", travelTime:"Airport transfer to Cala Millor" },
  { id:'riu-bonanza', name:'Hotel Palace Bonanza Playa & Spa', subname:'Illetas', area:'southwest', luxury:3, type:'hotel', vibes:['resort'], styles:['resort'], groups:['couple','friends','family'], sizes:['3-5','6-9'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Seafront','Illetas','Spa'], budgets:['premium','flexible'], why:'Four-star hotel on the Illetas seafront, with a spa and indoor pool.', andy:'Consider it for a southwest stay with access to Palma. Check the meal plan when choosing rooms.', golf:'Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.', travelTime:'12 min from Palma airport' },

  /* ===================== NORTH ===================== */
  {"id":"four-seasons-formentor","name":"Four Seasons Resort Mallorca at Formentor","subname":"Formentor Peninsula","area":"north","luxury":4,"type":"hotel","vibes":["resort","boutique"],"styles":["resort","boutique"],"groups":["couple","solo","corporate","family"],"sizes":["1-2","3-5"],"beach":true,"spa":true,"golfProximity":2,"priority":["beach","spa","dining"],"pills":["Four Seasons","Formentor bay","Peninsula drive"],"budgets":["ultra","flexible"],"why":"Ultra-luxury with the Formentor bay. One of the most scenic stays on the island. Golf early, Formentor bay the rest of the day.","andy":"The peninsula road is the best drive in Mallorca. Alcanada is 35 minutes: not the closest, but worth it for the setting.","golf":"Club de Golf Alcanada 35 min. Golf Pollença 20 min.","travelTime":"55 min from Palma airport"},
  {"id":"el-vicenc","name":"El Vicenç de la Mar","subname":"Cala de Sant Vicenç","area":"north","luxury":4,"type":"hotel","vibes":["boutique"],"styles":["boutique"],"groups":["couple","solo"],"sizes":["1-2"],"beach":true,"spa":true,"golfProximity":2,"priority":["beach","dining","spa"],"pills":["Boutique","Michelin chef","Beachfront"],"budgets":["ultra","flexible"],"why":"Boutique five-star at Cala Sant Vicenç, near Cala Molins beach, with a spa and restaurants by Santi Taura. Pollença and Alcanada are options for the golf, with a drive to the courses.","andy":"Santi Taura is one of the best chefs in Mallorca. If the food matters as much as the golf, and the north is the zone, this is the answer.","golf":"Club de Golf Alcanada 20 min. Golf Pollença 10 min.","travelTime":"50 min from Palma airport"},
  { id:'son-brull', name:'Son Brull Hotel & Spa', subname:'Near Pollença', area:'north', luxury:4, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:true, golfProximity:2, priority:['spa','privacy','dining'], pills:['Boutique five-star','Serious spa',"3\\65 restaurant"], budgets:['ultra','flexible'], why:"Eighteenth-century monastery converted into a five-star boutique hotel, with a spa and the 3\\65 restaurant, which uses produce from the estate.", andy:'A strong argument for staying in the north even if you want serious golf. Alcanada 15 minutes. Quiet, high-quality, genuinely Mallorcan.', golf:'Club de Golf Alcanada 15 min. Golf Pollença 5 min.', travelTime:'50 min from Palma airport' },
  {"id":"illa-dor","name":"Illa d'Or","subname":"Port de Pollença","area":"north","luxury":2,"type":"hotel","vibes":["classic","boutique"],"styles":["classic","boutique"],"groups":["couple","solo","friends"],"sizes":["1-2","3-5"],"beach":true,"spa":true,"golfProximity":2,"priority":["beach","dining","spa"],"pills":["Bay views","Classic","Walkable evenings"],"budgets":["mid","premium","flexible"],"why":"Port de Pollença is one of the nicest bases in the North. Quieter than Alcúdia, walkable in evenings, and Alcanada 20 minutes away.","andy":"A seafront base on the Pine Walk in Port de Pollença. Plan transport to the golf.","golf":"Club de Golf Alcanada 20 min. Golf Pollença 10 min (9 holes).","travelTime":"50 min from Palma airport"},
  { id:'hotel-sis-pins', name:'Hotel Sis Pins', subname:'Port de Pollença', area:'north', luxury:1, type:'hotel', vibes:['classic'], styles:['classic'], groups:['couple','friends','solo'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Budget-friendly','Bay views','Simple and clean'], budgets:['mid','flexible'], why:'Honest, clean mid-range hotel right on the Port de Pollença promenade. No frills but good value in one of the nicest towns in the north.', andy:'If the budget is tight and the north is the zone, this is the practical answer. Golf Alcanada 20 minutes, evenings sorted by the Pollença food scene.', golf:'Club de Golf Alcanada 20 min. Golf Pollença 10 min.', travelTime:'50 min from Palma airport' },
  {"id":"agrotourisme-son-palou","name":"Agrotourisme Son Palou","subname":"Orient","area":"northwest","luxury":2,"type":"hotel","vibes":["countryside"],"styles":["countryside"],"groups":["couple","solo"],"sizes":["1-2"],"beach":false,"spa":false,"golfProximity":1,"priority":["privacy"],"pills":["Rural finca","Mountain village","Complete peace"],"budgets":["mid","premium","flexible"],"why":"Traditional agrotourism finca in the tiny village of Orient, surrounded by Tramuntana mountains. Complete silence, fresh produce, proper countryside Mallorca.","andy":"Orient is one of the most special villages on the island. Golf requires a drive but the experience here is unlike any hotel. Best combined with a few rounds at Alcanada.","golf":"Plan golf as a day out from Orient in the Tramuntana mountains. Son Termes is one option to consider; choose the course around the route and tee time.","travelTime":"35 min from Palma airport"},
  { id:'north-villa', name:'Luxury Villa, North Mallorca', subname:'Pollença / Alcúdia area', area:'north', luxury:3, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','family','couple'], sizes:['6-9','10+'], beach:true, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Own pool','Coves nearby'], budgets:['premium','ultra','flexible','mid'], why:'Pollença valley or coastal Alcúdia puts you 15 minutes from Alcanada. Hire cars essential. Beaches and coves nearby.', andy:'The north is quieter and more scenic than the Southwest. A north villa works well if the brief is a proper holiday with good golf rather than maximum rounds.', golf:'Club de Golf Alcanada 15-20 min. Golf Pollença 10-15 min.', travelTime:'50 min from Palma airport' },
  { id:'la-goleta', name:'La Goleta Hotel de Mar', subname:'Port de Pollença', area:'north', luxury:2, type:'hotel', vibes:['classic','boutique'], styles:['classic'], groups:['couple','friends'], sizes:['1-2','3-5'], beach:true, spa:false, golfProximity:2, priority:['beach'], pills:['Adults only','Boutique','Beachfront'], budgets:['mid','premium','flexible'], why:'Adults-only boutique hotel on the seafront in Port de Pollença. A northern base for Alcanada and Golf Pollença.', andy:'A choice for adults who want the beach and restaurants of Port de Pollença alongside golf in the north.', golf:'Club de Golf Alcanada 20 min. Golf Pollença 10 min.', travelTime:'52 min from Palma airport' },
  { id:'north-villa-small', name:'Villa, North Mallorca, small group', subname:'Pollença valley', area:'north', luxury:2, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','couple','family'], sizes:['3-5'], beach:false, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Mid-range','Pollença valley'], budgets:['mid','premium','flexible'], why:'Smaller villa in the Pollença valley for groups of 3 to 5 who want their own space without the cost of a large property. Pool, countryside views, 15 minutes to Alcanada.', andy:'The north villa market is good value compared to the Southwest. A 4-bedroom property here costs considerably less than the equivalent in Santa Ponsa.', golf:'Club de Golf Alcanada 15-20 min. Golf Pollença 10 min.', travelTime:'48 min from Palma airport' },

  /* ===================== EAST ===================== */
  {id: 'cap-vermell',"name":"Cap Vermell Grand Hotel","subname":"Canyamel valley","area":"east","luxury":4,"type":"hotel","vibes":["resort","golf-focused"],"styles":["resort"],"groups":["couple","friends","family","solo","corporate"],"sizes":["1-2","3-5","6-9","10+"],"beach":false,"spa":true,"golfProximity":2,"priority":["golf-focused","spa","dining"],"pills":["Spa","Pools","East-coast golf"],"budgets":["ultra","flexible"],"why":"A resort in the Canyamel valley with pools and a spa. Canyamel, Capdepera, Pula and Son Servera give you an east-coast course mix.","andy":"I would use it for an east-based trip. Rounds near Palma and in the southwest mean longer drives.","golf":"Canyamel, Capdepera, Pula and Son Servera.","travelTime":"Airport transfer to Canyamel"},
  { id:'can-simoneta', name:'Can Simoneta', subname:'Canyamel', area:'east', luxury:3, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:2, priority:['spa','privacy'], pills:['Clifftop','Spa','Sea-view restaurant'], budgets:['premium','ultra','flexible'], why:"Clifftop boutique five-star with a serious spa and Capdepera golf 5 minutes away. The hotel has its own sea-view restaurant.", andy:'Quietest of the east coast options. Suits couples who want privacy over facilities.', golf:"Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.", travelTime:'60 min from Palma airport' },
  { id:'pleta-de-mar', name:'Pleta de Mar', subname:'Canyamel', area:'east', luxury:3, type:'hotel', vibes:['resort'], styles:['resort'], groups:['couple','friends'], sizes:['1-2','3-5'], beach:true, spa:true, golfProximity:2, priority:['beach','spa'], pills:['Adults only 16+', 'Eco-luxury','2 infinity pools','Private beach','Sa Pleta restaurant'], budgets:['premium','ultra','flexible'], why:'East coast beach luxury. Two infinity pools, private beach access, and Sa Pleta by Marc Fosh on site. Capdepera Golf 5 minutes.', andy:'The east is underrated. Fewer crowds, better water, quality courses that get overlooked. Sa Pleta by Marc Fosh is the restaurant at Pleta de Mar.', golf:"Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.", travelTime:'60 min from Palma airport' },
  { id:'cases-son-barbassa', name:'Cases de Son Barbassa', subname:'Capdepera', area:'east', luxury:3, type:'hotel', vibes:['countryside','boutique'], styles:['countryside','boutique'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:true, golfProximity:3, priority:['privacy','spa'], pills:['Rural finca','Private pool','Capdepera Golf 5 min'], budgets:['premium','flexible'], why:'Restored rural estate 5 minutes from Capdepera Golf. Private pool, local produce, genuinely off-the-beaten-track feel with good golf on the doorstep.', andy:'The east finca option. No beach but great pool, total quiet, and an excellent golf base. Combine with an evening at VORO nearby.', golf:'Capdepera Golf 5 min. Canyamel Golf 15 min. Club de Golf Pula 15 min.', travelTime:'60 min from Palma airport' },
  {"id":"pula-resort","name":"Pula Resort","subname":"Son Servera","area":"east","luxury":2,"type":"hotel","vibes":["resort","golf-focused"],"styles":["resort","classic"],"groups":["friends","couple","corporate"],"sizes":["3-5","6-9"],"beach":false,"spa":false,"golfProximity":3,"priority":["golf-focused"],"pills":["On course","Trackman range","Golf packages"],"budgets":["mid","premium","flexible"],"why":"Hotel at Pula Golf, with practice facilities including Trackman technology. A base for rounds and practice on site.","andy":"If Pula is on the schedule and the group wants everything in one place, this is the answer. The practice facilities are among the best in Mallorca.","golf":"Pula Golf on site. Golf Club Son Servera 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.","travelTime":"60 min from Palma airport"},
  {"id":"sa-bassa-rotja","name":"Sa Bassa Rotja","subname":"Porreres","area":"east","luxury":3,"type":"hotel","vibes":["countryside","boutique"],"styles":["countryside"],"groups":["couple","solo","family"],"sizes":["1-2"],"beach":false,"spa":true,"golfProximity":2,"priority":["privacy","spa"],"pills":["Historic estate","Spa","Countryside"],"budgets":["premium","flexible"],"why":"Rural hotel on a historic estate near Porreres, with a spa, sauna and heated indoor pool. A countryside base with a drive to the golf.","andy":"For couples who want the interior of Mallorca and are happy to plan the drives to the golf.","golf":"Vall d'Or, Son Antem and Pula are options to consider from Porreres. Choose the rounds around the full day's route rather than expecting golf on the doorstep.","travelTime":"35 min from Palma airport"},
  { id:'son-gener', name:'Finca Hotel Son Gener', subname:'Son Servera', area:'east', luxury:3, type:'hotel', vibes:['boutique','countryside'], styles:['boutique','countryside'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:2, priority:['privacy','spa'], pills:['Adults only','Pool terrace','Rural east'], budgets:['premium','flexible'], why:'Adults-only boutique finca in Son Servera with a quiet pool terrace and good spa facilities. Golf Club Son Servera a short drive, Pula 10 minutes.', andy:'A calmer, more intimate option than the bigger east coast resorts. Suits couples who want countryside and golf without the beach-resort crowds.', golf:'Golf Club Son Servera 10 min. Club de Golf Pula 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.', travelTime:'55 min from Palma airport' },
  { id:'east-villa', name:'Luxury Villa, East Mallorca', subname:"Cala d'Or / Porto Cristo area", area:'east', luxury:3, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','family'], sizes:['6-9','10+'], beach:true, spa:false, golfProximity:2, priority:['privacy','beach'], pills:['Private villa','Calm coves','Good value'], budgets:['mid','premium','flexible'], why:"Families or groups wanting calm coves and easy access to Vall d'Or and Pula. The east coast has the island's calmest family beaches.", andy:"The east is underrated for a golf trip. Fewer crowds, better water, five courses that do not get the attention they deserve.", golf:"Capdepera Golf 15-20 min. Canyamel Golf 15 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 20 min.", travelTime:'55-65 min from Palma airport' },
  {"id":"son-moll-sentits","name":"Son Moll Sentits Hotel","subname":"Cala Ratjada","area":"east","luxury":3,"type":"hotel","vibes":["boutique"],"styles":["boutique"],"groups":["couple","solo"],"sizes":["1-2"],"beach":true,"spa":true,"golfProximity":3,"priority":["spa","privacy"],"pills":["Adults only","Seafront","Spa"],"budgets":["premium","flexible"],"why":"Adults-only four-star superior hotel facing Son Moll beach in Cala Ratjada, with a spa and pool. A coastal base for golf in the east, with a drive to the courses.","andy":"Use Cala Ratjada for time by the sea between rounds. Capdepera, Canyamel and Pula are options for the golf; plan the transport before booking.","golf":"Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min.","travelTime":"60 min from Palma airport"},
  {"id":"protur-biomar","name":"Protur Biomar Sensatori Resort","subname":"Sa Coma","area":"east","luxury":3,"type":"hotel","vibes":["resort"],"styles":["resort"],"groups":["family","friends"],"sizes":["3-5","6-9"],"beach":true,"spa":true,"golfProximity":2,"priority":["beach","spa"],"pills":["Large resort","Beach","Family pools","Adults zone"],"budgets":["premium","flexible"],"why":"Resort in Sa Coma with a family area and a separate adults area. Spa, several pools and the beach a short walk away. Pula and Son Servera are options for the golf.","andy":"One of the more capable east coast resorts for groups where some want golf and others want beach and pools all day.","golf":"Pula, Son Servera, Capdepera and Canyamel give you an east-coast course mix. Plan transport from Sa Coma.","travelTime":"58 min from Palma airport"},
  { id:'east-villa-small', name:'Villa, East Mallorca, small group', subname:'Artà / Son Servera area', area:'east', luxury:2, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','couple','family'], sizes:['3-5'], beach:false, spa:false, golfProximity:2, priority:['privacy'], pills:['Private villa','Rural east','Good value'], budgets:['mid','flexible'], why:'Smaller east coast villa for groups of 3 to 5. Artà and Son Servera area gives you genuinely rural Mallorca at a lower price than the Southwest, with 4 courses within 20 minutes.', andy:'The east coast villa market is underrated and underpriced. If the group is comfortable with the extra drive from the airport, you get much better value here.', golf:'Club de Golf Pula 15 min. Golf Club Son Servera 15 min. Capdepera Golf 15 min. Canyamel Golf 20 min.', travelTime:'55 min from Palma airport' },

  /* ===================== PALMA ===================== */
  {"id":"el-llorenc","name":"El Llorenç Parc de la Mar","subname":"Palma old town","area":"palma","luxury":3,"type":"hotel","vibes":["boutique"],"styles":["boutique"],"groups":["couple","solo","corporate"],"sizes":["1-2"],"beach":false,"spa":true,"golfProximity":1,"priority":["dining","spa"],"pills":["City boutique","Michelin dining","Rooftop pool"],"budgets":["premium","ultra","flexible"],"why":"Design rooms, rooftop pool, and Santi Taura (one Michelin star). Golf requires a drive but Palma evenings more than compensate.","andy":"Rooftop pool at dusk and dinner afterwards is a strong Palma evening. Son Gual is 20 minutes for a morning round.","golf":"Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min. Golf Maioris 30 min.","travelTime":"20 min from Palma airport"},
  {"id":"santos-nixe","name":"Santos Nixe Palace","subname":"Cala Major, Palma","area":"palma","luxury":2,"type":"hotel","vibes":["resort","classic"],"styles":["classic","resort"],"groups":["couple","friends"],"sizes":["1-2","3-5"],"beach":true,"spa":true,"golfProximity":2,"priority":["beach","spa"],"pills":["Beach","Spa","Five-star"],"budgets":["mid","premium","flexible"],"why":"Five-star hotel with direct access to Cala Major beach and a spa. A coastal base near Palma for rounds in the southwest.","andy":"A sensible pick for couples or small groups who want beach and spa without the ultra-luxury price tag. Bendinat 15 minutes.","golf":"Real Golf de Bendinat 15 min. T Golf Calvià 20 min. Son Vida / Son Quint / Son Muntaner 15 min. Son Gual 20 min.","travelTime":"12 min from Palma airport"},
  {"id":"born-hotel","name":"Born Hotel","subname":"Palma old town","area":"palma","luxury":3,"type":"hotel","vibes":["boutique","classic"],"styles":["boutique","classic"],"groups":["couple","solo","corporate"],"sizes":["1-2","3-5"],"beach":false,"spa":false,"golfProximity":1,"priority":["dining"],"pills":["Palma palace","Courtyard terrace","Old town"],"budgets":["premium","flexible"],"why":"Palace hotel on Carrer de Sant Jaume in Palma old town, with a courtyard. Within walking distance of the cathedral, restaurants and Passeig des Born.","andy":"The Born puts you at the centre of Palma evenings. Son Gual 20 minutes for an early morning round, then back for a long lunch.","golf":"Son Gual 20 min. T Golf Palma (Puntiró) 20 min. Son Vida / Son Quint / Son Muntaner 18 min. Real Golf de Bendinat 20 min.","travelTime":"20 min from Palma airport"},
  {"id":"nakar-hotel","name":"Nakar Hotel","subname":"Palma","area":"palma","luxury":3,"type":"hotel","vibes":["boutique"],"styles":["boutique"],"groups":["couple","solo","friends"],"sizes":["1-2","3-5"],"beach":false,"spa":true,"golfProximity":1,"priority":["dining","spa"],"pills":["Rooftop pool","Design rooms","City centre"],"budgets":["premium","flexible"],"why":"Modern design hotel in central Palma with a strong rooftop pool and bar. Younger feel than the old-town palace hotels. Well-placed for the Passeig des Born.","andy":"For the group that wants Palma nightlife without being too far from golf. Son Gual is 20 minutes at most.","golf":"Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min. Real Golf de Bendinat 18 min.","travelTime":"18 min from Palma airport"},
  { id:'palacio-ca-sa-galesa', name:'Palacio Ca Sa Galesa', subname:'Palma old town', area:'palma', luxury:4, type:'hotel', vibes:['boutique'], styles:['boutique','classic'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:1, priority:['dining','privacy'], pills:['Ultra-luxury','12 rooms','Cathedral views'], budgets:['ultra','flexible'], why:'Twelve-room ultra-luxury hotel in the heart of Palma old town, with views of the cathedral. One of the most intimate and special hotels in the city. Indoor pool and spa.', andy:'The most exclusive Palma city option. Dinners on the terrace looking at La Seu. Son Gual 20 minutes for the morning round.', golf:'Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.', travelTime:'20 min from Palma airport' },
  {"id":"portixol","name":"Hotel Portixol","subname":"Portixol, Palma","area":"palma","luxury":2,"type":"hotel","vibes":["boutique"],"styles":["boutique"],"groups":["couple","solo"],"sizes":["1-2"],"beach":false,"spa":true,"golfProximity":1,"priority":["dining","spa"],"pills":["Neighbourhood feel","Best fish in Palma","Quiet"],"budgets":["mid","premium","flexible"],"why":"Portixol village feel with some of the best fish restaurants in Mallorca. Es Mollet 5 minutes on foot. Golf requires a drive.","andy":"A quieter Palma option. Use as an evening base. Son Gual is 25 minutes for a morning round.","golf":"Son Gual 25 min. Son Vida / Son Quint 20 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min.","travelTime":"15 min from Palma airport"},
  {"id":"convent-missio","name":"Convent de la Missió","subname":"Palma old town","area":"palma","luxury":3,"type":"hotel","vibes":["boutique"],"styles":["boutique"],"groups":["couple","solo","corporate"],"sizes":["1-2"],"beach":false,"spa":true,"golfProximity":1,"priority":["dining","spa"],"pills":["Design hotel","Palma old town","Rooftop"],"budgets":["premium","ultra","flexible"],"why":"Design rooms, rooftop terrace, and one of Palma's best dining options. For golfers who want the city experience between rounds.","andy":"The hotel is in Palma’s old town. Plan a drive to the golf.","golf":"Son Gual 25 min. Son Vida / Son Quint / Son Muntaner 20 min. T Golf Palma (Puntiró) 15 min. Real Golf de Bendinat 20 min.","travelTime":"20 min from Palma airport"},
  { id:'innside-palma', name:'INNSiDE Palma Center', subname:'Palma', area:'palma', luxury:2, type:'hotel', vibes:['resort','classic'], styles:['classic'], groups:['friends','couple','corporate'], sizes:['1-2','3-5','6-9'], beach:false, spa:true, golfProximity:1, priority:['dining'], pills:['Four-star hotel','Rooftop pool','Central Palma'], budgets:['mid','flexible'], why:'Four-star hotel near Palma’s old town, with a rooftop pool and a wellness area. A city base for restaurants and evenings out between rounds.', andy:'A no-nonsense Palma base. Good for corporate groups. Son Gual 20 minutes for the rounds.', golf:'Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min.', travelTime:'15 min from Palma airport' },
  { id:'brondo-architect', name:'Brondo Architect Hotel', subname:'Palma old town', area:'palma', luxury:2, type:'hotel', vibes:['boutique'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Boutique','Design','Old town location'], budgets:['mid','premium','flexible'], why:'Small design-led hotel in the Palma old town, within walking distance of the main restaurants, the cathedral, and Es Baluard museum.', andy:'The affordable boutique Palma option. Not the luxury of Palacio Ca Sa Galesa but the location is the same and the character is genuine.', golf:'Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.', travelTime:'20 min from Palma airport' },
  { id:'hostal-cuba', name:'Hostal Cuba', subname:'Santa Catalina, Palma', area:'palma', luxury:1, type:'hotel', vibes:['boutique','classic'], styles:['boutique'], groups:['couple','solo','friends'], sizes:['1-2','3-5'], beach:false, spa:false, golfProximity:1, priority:['dining'], pills:['Budget boutique','Santa Catalina','Best neighbourhood in Palma'], budgets:['mid','flexible'], why:"Characterful budget boutique in Santa Catalina, Palma's best neighbourhood for bars and restaurants. The hostal has been here for decades and has its own personality.", andy:'Santa Catalina is where locals eat. Not the old town for tourists. The real Palma food scene. Son Gual 20 minutes for morning golf.', golf:'Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Son Vida 18 min.', travelTime:'15 min from Palma airport' },
  {"id":"hotel-saratoga","name":"Hotel Saratoga","subname":"Palma centre","area":"palma","luxury":2,"type":"hotel","vibes":["classic","resort"],"styles":["classic"],"groups":["friends","couple","corporate","family"],"sizes":["1-2","3-5","6-9"],"beach":false,"spa":true,"golfProximity":1,"priority":["dining","spa"],"pills":["Rooftop pool","Palma centre","Classic four-star"],"budgets":["mid","premium","flexible"],"why":"Classic four-star in the centre of Palma with a rooftop pool overlooking the bay. Well-located for both the old town and the main boulevard. Good corporate option.","andy":"Reliable, central, sensible. One of the most used Palma bases for golf groups. Son Gual is 20 minutes.","golf":"Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 16 min. Real Golf de Bendinat 20 min.","travelTime":"18 min from Palma airport"},
  { id:'palma-villa-small', name:'Villa, Palma Area, small group', subname:'Génova / Son Vida area', area:'palma', luxury:2, type:'villa', vibes:['villa'], styles:['villa'], groups:['friends','couple'], sizes:['3-5'], beach:false, spa:false, golfProximity:2, priority:['privacy','golf-focused'], pills:['Private villa','Palma views','Son Vida nearby'], budgets:['mid','premium','flexible'], why:'Private villa in the Génova or Son Vida hills with Palma bay views. The Son Vida estate courses are 10 minutes and the city is 15. Good compromise for groups who want independence and easy golf.', andy:'Son Vida area villas are underused by golf groups. You get privacy, views, and three courses within 10 minutes.', golf:'Son Vida / Son Quint / Son Muntaner 10 min. T Golf Calvià 20 min. Real Golf de Bendinat 15 min.', travelTime:'20 min from Palma airport' },

  /* ===================== NORTHWEST ===================== */
  {"id":"jumeirah-port-soller","name":"Jumeirah Mallorca","subname":"Port de Sóller","area":"northwest","luxury":4,"type":"hotel","vibes":["resort"],"styles":["resort"],"groups":["couple","solo"],"sizes":["1-2"],"beach":true,"spa":true,"golfProximity":1,"priority":["spa","beach","dining"],"pills":["Ultra-luxury","Clifftop","Hammam spa","Tramuntana views"],"budgets":["ultra","flexible"],"why":"Perched on cliffs above Port de Sóller. 180-degree Mediterranean views, hammam spa, and the Tramuntana mountains on the doorstep.","andy":"Not a golf-first base. One of the most visually spectacular hotels on the island. Good as a 2-night Tramuntana experience alongside the golf.","golf":"Golf is a planned day out from here. Expect mountain-road drives to Son Termes, Golf de Andratx, Alcanada, or Pollença depending on the tee sheet.","travelTime":"50 min from Palma airport"},
  {"id":"la-residencia","name":"La Residencia","subname":"A Belmond Hotel, Deià","area":"northwest","luxury":4,"type":"hotel","vibes":["boutique","countryside"],"styles":["boutique","countryside"],"groups":["couple","solo","corporate"],"sizes":["1-2","3-5"],"beach":false,"spa":true,"golfProximity":1,"priority":["spa","dining","privacy"],"pills":["Belmond","Deià","Historic manor"],"budgets":["ultra","flexible"],"why":"Two historic stone manor houses above Deià, with gardens, pools and a spa. A Tramuntana stay with golf planned as a day out.","andy":"Not a golf trip base. One of the best hotels in Spain. Works well as 2 nights in the northwest before moving to the Southwest for the rounds.","golf":"Golf rounds need to be planned as full-day excursions. Son Termes, Golf de Andratx, Alcanada, and Pollença can all make sense depending on the exact route.","travelTime":"60 min from Palma airport"},
  { id:'cas-xorc', name:"Ca's Xorc", subname:'Sóller', area:'northwest', luxury:3, type:'hotel', vibes:['countryside','boutique'], styles:['countryside','boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['privacy'], pills:['Finca','Infinity pool','Remote'], budgets:['premium','ultra','flexible'], why:'Converted farmhouse on the Sóller-Deià road. Infinity pool, homegrown kitchen, distant sea views. Very remote, car essential.', andy:'One of the most romantic locations on the island. Not the base for a golf trip, but the right answer if someone wants the Tramuntana experience with a round or two worked in.', golf:'Golf is possible, but it is an excursion rather than a quick hop. Shortlist courses after choosing the exact hotel or villa base.', travelTime:'50 min from Palma airport' },
  {"id":"es-moli","name":"Es Moli","subname":"Deià","area":"northwest","luxury":3,"type":"hotel","vibes":["boutique","countryside"],"styles":["boutique","countryside"],"groups":["couple","solo"],"sizes":["1-2"],"beach":false,"spa":true,"golfProximity":1,"priority":["spa","privacy"],"pills":["Classic Tramuntana","Heated pool","Terraced gardens"],"budgets":["premium","ultra","flexible"],"why":"A hotel in terraced gardens above Deià, with a heated outdoor pool and valley and sea views. A Tramuntana base for time away from the golf, with rounds planned as day trips.","andy":"Plan 2 nights in the northwest for the scenery, then move to the Southwest or North for easier golf logistics.","golf":"Golf is best treated as a full-day plan from Deià. The right course depends on whether the day points southwest, Palma, or north.","travelTime":"55 min from Palma airport"},
  { id:'hotel-hermitage', name:"Hotel L'Hermitage", subname:'Orient', area:'northwest', luxury:3, type:'hotel', vibes:['countryside','boutique'], styles:['countryside','boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:true, golfProximity:1, priority:['privacy','spa'], pills:['Mountain village','Pool','Total quiet'], budgets:['premium','flexible'], why:'Tucked into the tiny mountain village of Orient in the heart of the Tramuntana. Pool, spa, and complete calm. The village has fewer than 50 inhabitants.', andy:'For the couple who wants to disappear. Orient is the most hidden corner of the island. Golf is possible, but it needs a deliberate route rather than a casual local tee time.', golf:'Plan the course around the day route from Orient. Golf de Andratx, Son Termes, Alcanada, or Pollença can each make sense for different itineraries.', travelTime:'30 min from Palma airport' },
  {"id":"gran-hotel-soller","name":"Gran Hotel Sóller","subname":"Sóller","area":"northwest","luxury":2,"type":"hotel","vibes":["classic"],"styles":["classic"],"groups":["couple","friends","solo","family"],"sizes":["1-2","3-5"],"beach":false,"spa":true,"golfProximity":1,"priority":["dining","spa"],"pills":["Sóller town","Five-star","Orange groves"],"budgets":["mid","premium","flexible"],"why":"Five-star in the centre of Sóller, one of Mallorca's most charming towns. The orange grove market, the historic tram to Port de Sóller, and good restaurants on the doorstep.","andy":"A more accessible price point for the northwest. For groups who want the Sóller experience without Jumeirah prices. Golf needs to be planned around the drive.","golf":"Golf is a day-trip item from Sóller, not a nearby-course setup. Son Termes, Golf de Andratx, Alcanada, or Pollença may fit depending on the wider itinerary.","travelTime":"35 min from Palma airport"},
  { id:'can-verdera', name:'Can Verdera', subname:'Fornalutx', area:'northwest', luxury:2, type:'hotel', vibes:['boutique','classic'], styles:['boutique'], groups:['couple','solo'], sizes:['1-2'], beach:false, spa:false, golfProximity:1, priority:['privacy','dining'], pills:['Stone village','Rooftop terrace','Fornalutx views'], budgets:['mid','premium','flexible'], why:"Small boutique hotel in Fornalutx, repeatedly voted one of Spain's most beautiful villages. Stone-built, rooftop terrace, exceptional mountain views.", andy:'Fornalutx is the most photographed village in Mallorca. A very different experience from any beach hotel. Golf is a long drive but the setting is worth it for 2 nights.', golf:'Golf from Fornalutx is a proper day out. Pick the course after deciding whether the day is heading toward Palma, the southwest, or the north.', travelTime:'40 min from Palma airport' },
  { id:'northwest-villa', name:'Luxury Villa, Northwest', subname:'Sóller / Valldemossa area', area:'northwest', luxury:3, type:'villa', vibes:['villa','countryside'], styles:['villa','countryside'], groups:['friends','family','couple'], sizes:['6-9','10+'], beach:false, spa:false, golfProximity:1, priority:['privacy'], pills:['Private villa','Mountain views','Tramuntana'], budgets:['premium','ultra','flexible'], why:'A northwest villa offers total privacy in the most dramatic landscape on the island. Private pool, mountain views, olive and lemon groves. Golf is an excursion, not a daily commute.', andy:'Only recommend to groups who are genuinely comfortable with the drive. The right brief: Tramuntana experience first, golf second.', golf:'Golf de Andratx 45-55 min via mountain roads. Plan full-day golf excursions.', travelTime:'35-50 min from Palma airport' },
  { id:'costa-dor', name:"Hotel Costa d'Or", subname:'Lluc Alcari, near Deià', area:'northwest', luxury:2, type:'hotel', vibes:['classic','boutique'], styles:['classic'], groups:['couple','solo'], sizes:['1-2'], beach:true, spa:false, golfProximity:1, priority:['beach','privacy'], pills:['Cove beach','Olive grove','Deià nearby'], budgets:['mid','premium','flexible'], why:'Small hotel hidden in an olive grove above a private cove between Deià and Valldemossa. One of the most secluded spots on the island at a reasonable price.', andy:'The affordable alternative to La Residencia. Same Deià area, same dramatic coastline, significantly lower price. Open April to October.', golf:'Golf from this part of Deià needs a planned day route. Son Termes, Golf de Andratx, Alcanada, or Pollença can all be plausible depending on the wider plan.', travelTime:'55 min from Palma airport' },
  {"id":"hotel-marina-soller","name":"Hotel Marina Sóller","subname":"Port de Sóller","area":"northwest","luxury":1,"type":"hotel","vibes":["classic"],"styles":["classic"],"groups":["couple","friends","family"],"sizes":["1-2","3-5"],"beach":true,"spa":true,"golfProximity":1,"priority":["beach","spa"],"pills":["Port de Sóller","Budget","Beach access"],"budgets":["mid","flexible"],"why":"Hotel on the Port de Sóller bay. The orange-grove tram from Sóller town is one of the most enjoyable experiences in Mallorca. Golf is a day trip rather than a nearby-course setup.","andy":"The affordable northwest answer. Port de Sóller is a beautiful bay to wake up next to. Combine one or two planned golf days with proper time in the Tramuntana.","golf":"Plan golf as a day excursion from Port de Sóller. The best course choice depends on whether the day points toward Palma, the southwest, or the north.","travelTime":"45 min from Palma airport"},
]

export const QUESTIONS_DATA = [
  {
    "key": "area",
    "qNum": "1",
    "total": "6",
    "title": "Where would you like to stay?",
    "sub": "Choose an area for your hotel shortlist.",
    "grid": false,
    "opts": [
      {
        "val": "southwest",
        "label": "Southwest Mallorca",
        "desc": "Santa Ponsa, Calvià, Bendinat and Andratx."
      },
      {
        "val": "north",
        "label": "North Mallorca",
        "desc": "Alcúdia, Pollença and Formentor. Courses include Alcanada and Golf Pollença."
      },
      {
        "val": "east",
        "label": "East Mallorca",
        "desc": "Capdepera, Canyamel, Pula, Son Servera and Vall d’Or."
      },
      {
        "val": "palma",
        "label": "Near Palma",
        "desc": "Palma city, Son Vida, Son Muntaner and Son Quint."
      },
      {
        "val": "northwest",
        "label": "Northwest Mallorca",
        "desc": "Sóller, Deià and Valldemossa. Plan a drive to the golf."
      }
    ]
  },
  {
    "key": "priority",
    "qNum": "2",
    "total": "6",
    "title": "What matters most for your stay?",
    "sub": "Pick all that apply: between rounds, what does the group want?",
    "grid": false,
    "multi": true,
    "opts": [
      {
        "val": "golf-focused",
        "label": "Close to the golf",
        "desc": "Stay close to the courses."
      },
      {
        "val": "beach",
        "label": "Beach and pool",
        "desc": "Time by the sea or pool."
      },
      {
        "val": "spa",
        "label": "Spa",
        "desc": "Access to a spa between rounds."
      },
      {
        "val": "dining",
        "label": "Food and evenings out",
        "desc": "Restaurants and evenings out."
      },
      {
        "val": "privacy",
        "label": "Privacy",
        "desc": "Quieter surroundings and time to yourselves."
      }
    ]
  },
  {
    "key": "group",
    "qNum": "3",
    "total": "6",
    "title": "Who is travelling?",
    "sub": "Helps match the right atmosphere and facilities.",
    "grid": true,
    "opts": [
      {
        "val": "couple",
        "label": "Couple"
      },
      {
        "val": "friends",
        "label": "Group of friends"
      },
      {
        "val": "family",
        "label": "Family with kids"
      },
      {
        "val": "solo",
        "label": "Travelling solo"
      },
      {
        "val": "corporate",
        "label": "Corporate group"
      }
    ]
  },
  {
    "key": "size",
    "qNum": "4",
    "total": "6",
    "title": "How many people in total?",
    "sub": "Include everyone, including children.",
    "grid": true,
    "opts": [
      {
        "val": "1-2",
        "label": "1 or 2"
      },
      {
        "val": "3-5",
        "label": "3 to 5"
      },
      {
        "val": "6-9",
        "label": "6 to 9"
      },
      {
        "val": "10+",
        "label": "10 or more"
      }
    ]
  },
  {
    "key": "style",
    "qNum": "5",
    "total": "6",
    "title": "What kind of place feels right?",
    "sub": "Choose the type of stay you prefer.",
    "grid": false,
    "opts": [
      {
        "val": "boutique",
        "label": "Boutique hotel",
        "desc": "Smaller hotels with individual character."
      },
      {
        "val": "resort",
        "label": "Resort",
        "desc": "Pools, restaurants and on-site facilities."
      },
      {
        "val": "classic",
        "label": "Classic hotel",
        "desc": "Traditional hotel rooms and shared facilities."
      },
      {
        "val": "villa",
        "label": "Private villa",
        "desc": "Your own kitchen, living space and pool."
      },
      {
        "val": "countryside",
        "label": "Countryside finca",
        "desc": "Rural stays away from the main resorts."
      }
    ]
  },
  {
    "key": "budget",
    "qNum": "6",
    "total": "6",
    "title": "What is the rough budget per room per night?",
    "sub": "Indicative budget bands, not live prices. Confirm rates for your dates.",
    "grid": false,
    "opts": [
      {
        "val": "mid",
        "label": "Up to €250 per room",
        "desc": ""
      },
      {
        "val": "premium",
        "label": "€250 to €500 per room",
        "desc": ""
      },
      {
        "val": "ultra",
        "label": "€500 or more per room",
        "desc": ""
      },
      {
        "val": "flexible",
        "label": "Flexible budget",
        "desc": "Compare stays across the budget bands."
      }
    ]
  }
]

export function scoreHotel(h, answers) {
  let s = 0
  if (h.area !== answers.area) return -999
  // A family-with-children search needs positive family suitability. Matching
  // scenery, price or style must never override a hotel's age restriction.
  if (answers.group === 'family' && (!h.groups.includes('family') || h.id === 'pleta-de-mar' || h.pills?.some(p => /adults only/i.test(p)))) return -999
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

export function pillClass(p) {
  const pl = p.toLowerCase()
  if (pl.includes('beach')) return 'pill--beach'
  if (pl.includes('spa') || pl.includes('wellness')) return 'pill--spa'
  if (pl.includes('course') || pl.includes('golf')) return 'pill--golf'
  if (pl.includes('adult')) return 'pill--adults'
  if (pl.includes('famil')) return 'pill--family'
  return ''
}

export function rankHotels(hotels, answers) {
  // These are explicit visitor requirements. Ranking preferences must not override them.
  const matches = hotels.filter(h =>
    (answers.style === 'villa' ? h.type === 'villa' && (!answers.size || h.sizes.includes(answers.size)) : h.type !== 'villa') &&
    (!answers.style || h.styles.includes(answers.style)) &&
    (answers.style === 'villa' || !answers.budget || answers.budget === 'flexible' || h.budgets.includes(answers.budget))
  )
  return matches.map(hotel => ({ hotel, score: scoreHotel(hotel, answers) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}
