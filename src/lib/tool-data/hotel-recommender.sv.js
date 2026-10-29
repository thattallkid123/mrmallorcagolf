// hotel-recommender copy for 'sv'. Generated overlay: the English master is in
// hotel-recommender-logic.js (HOTELS, QUESTIONS_DATA), keyed by hotel id and question key.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "hotels": {
  "arabella-son-vida": {
   "pills": [
    "Vid banan",
    "Spa",
    "Golfresort"
   ],
   "why": "En bas vid Son Vida, med Son Muntaner och Son Quint i närheten.",
   "andy": "En bas för golf med spa och restauranger på hotellet. Palma ligger inom räckhåll för kvällarna.",
   "golf": "På området: Son Vida, Son Quint, Son Muntaner (bäst i Spanien 2025). T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa-området 20 min.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Son Vida"
  },
  "gran-melia-de-mar": {
   "pills": [
    "Strand",
    "Spa",
    "Palma nära"
   ],
   "why": "Ultralyx med tillgång till stranden och full resortservice. Golf i Bendinat 8 minuter bort. Från Illetas når du både Palma och banorna i sydväst.",
   "andy": "Ett lugnare femstjärnigt hotell än Mandarin Oriental. Flexibel bas för olika kombinationer av rundor.",
   "golf": "Real Golf de Bendinat 8 min. T Golf Calvià 15 min. Son Vida 20 min.",
   "travelTime": "12 min från Palmas flygplats",
   "subname": "Illetas"
  },
  "hospes-maricel": {
   "pills": [
    "Boutique",
    "Vid havet",
    "Privat brygga"
   ],
   "why": "Palatskänsla från 1940-talet med privat brygga. Gammal mallorkinsk glamour, mindre och mer intim än de stora femstjärniga hotellen. Golf i Bendinat 8 minuter bort.",
   "andy": "Ett särpräglat alternativ till de större femstjärniga hotellen. Den sortens ställe som känns genuint mallorkinskt snarare än internationell hotellkedja.",
   "golf": "Real Golf de Bendinat 8 min. T Golf Calvià 15 min.",
   "travelTime": "12 min från Palmas flygplats",
   "subname": "Cas Català"
  },
  "hotel-bendinat": {
   "pills": [
    "Vid havet",
    "Lugnt område",
    "Golf i sydväst"
   ],
   "why": "Fyrstjärnigt hotell vid havet i gamla Bendinat, med trädgårdar, pool och en restaurang med utsikt över havet. En bas vid kusten för golf i sydväst, med bilresa till banorna.",
   "andy": "Gamla Bendinat är ett av de lugnare hörnen i sydväst. Planera transporten till golfen och lämna sedan tid för havet och middag tillbaka på hotellet.",
   "golf": "Real Golf de Bendinat, T Golf Calvià och Golf Santa Ponsa 1 är alternativ för en resa i sydväst. Hotellet ligger vid kusten; golfbanorna kräver en bilresa.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Bendinat"
  },
  "son-caliu": {
   "pills": [
    "Strand",
    "Spa på 1100 m²",
    "Familjevänligt"
   ],
   "why": "Fyrstjärnigt hotell i mellanklassen med ett riktigt spa och tillgång till havet via en brygga. En praktisk mittpunkt för banorna i sydväst till ett vettigt pris.",
   "andy": "Mellan Puerto Portals och Palma Nova. Bra för blandade grupper där inte alla spelar golf. Spa och strand håller måttet.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa 20 min.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Palma Nova"
  },
  "zafiro-andratx": {
   "pills": [
    "Strand",
    "Spa",
    "Familjeresort",
    "Golf de Andratx 5 min"
   ],
   "why": "Femstjärnigt resort fem minuter från Golf de Andratx. Stranden går att promenera till. Prisvärt om hälften av gruppen spelar golf och hälften inte.",
   "andy": "Golf de Andratx kräver handicapintyg: högst 28 för herrar och 36 för damer. Kontrollera gränserna för varje spelare innan du väljer banan.",
   "golf": "Golf de Andratx 5 min. T Golf Calvià 20 min. Santa Ponsa-området 25 min.",
   "travelTime": "30 min från Palmas flygplats",
   "subname": "Camp de Mar"
  },
  "secrets-villamil": {
   "pills": [
    "Endast vuxna",
    "Spa",
    "Pegueras strand"
   ],
   "why": "Resort endast för vuxna gäster från 18 år, vid Pegueras strand. Rum och sviter, ett spa, pooler och flera matalternativ. Golf de Andratx är ett alternativ i närheten för en runda.",
   "andy": "En bra femstjärnig bas om paret vill ha ett riktigt strandresort med hela utbudet av banor i sydväst inom räckhåll. Andratx är närmast och mest dramatisk.",
   "golf": "Golf de Andratx 15 min. T Golf Calvià 20 min. Santa Ponsa 25 min.",
   "travelTime": "30 min från Palmas flygplats",
   "subname": "Peguera"
  },
  "donna-portals": {
   "pills": [
    "Boutique",
    "Privat vik",
    "Puerto Portals nära"
   ],
   "why": "Designinriktat boutiquehotell bredvid en privat vik i Portals Nous. Temasviter, Day Club, blompool. Puerto Portals småbåtshamn för kvällarna.",
   "andy": "T Golf Calvià ligger 10 minuter inåt land, banorna vid Santa Ponsa 15 minuter. Port Adriano är en bra plats för middag mitt i veckan.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 10 min. Son Vida 18 min.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Portals Nous"
  },
  "finca-serena": {
   "pills": [
    "Endast vuxna",
    "Wellness",
    "45 hektar"
   ],
   "why": "Femstjärnig finca endast för vuxna nära Montuïri, med 45 hektar landsbygd, ett spa och restaurangen Jacaranda. En lantlig bas med bilresa till golfen.",
   "andy": "Välj den för tid på landsbygden mellan rundorna. Son Gual är ett alternativ för golfen; planera transporten efter dina starttider.",
   "golf": "Son Gual ligger 19 km från hotellet enligt dess golfguide. Andra banval måste passa rutten från Montuïri.",
   "travelTime": "25 min från Palmas flygplats",
   "subname": "Montuïri"
  },
  "sw-villa": {
   "pills": [
    "Privat villa",
    "Egen pool",
    "Full flexibilitet"
   ],
   "why": "För sex personer eller fler förändrar en villa resan: sena frukostar, din egen pool efter rundan, ingen hotelltidtabell. Fyra banor inom 15 minuter.",
   "andy": "Villans läge måste passa starttiderna. Det är precis den matchningen jag kan hjälpa till med.",
   "golf": "Golf Santa Ponsa 1, Golf de Andratx, T Golf Calvià, Real Golf de Bendinat: alla inom 15-20 min beroende på villans läge. Son Antem East/West 25-30 min.",
   "travelTime": "25-35 min från Palmas flygplats",
   "subname": "Området Santa Ponsa / Andratx",
   "name": "Lyxvilla, sydväst"
  },
  "son-net": {
   "pills": [
    "Historisk finca",
    "1600-talet",
    "Spa"
   ],
   "why": "Egendom i sten från 1600-talet vid Tramuntanas fot i Puigpunyent, med trädgårdar, pooler och ett spa. En vistelse på landsbygden med bilresa till golfen.",
   "andy": "En av öns vackraste byggnader. En riktig finca-oas som ändå ger dig banorna i sydväst inom räckhåll.",
   "golf": "Son Vida, Son Muntaner, Son Quint och Son Termes är alternativ att överväga från Puigpunyent. Planera transfererna efter starttiderna.",
   "travelTime": "25 min från Palmas flygplats",
   "subname": "Puigpunyent"
  },
  "valparaiso-palace": {
   "pills": [
    "Stort resort",
    "Konferenslokaler",
    "Utsikt över Palma"
   ],
   "why": "Stort femstjärnigt hotell på kullen ovanför Palma med panoramautsikt över viken och fullt spa. Praktiskt för större grupper och företagsresor som behöver mötesrum vid sidan av golfen.",
   "andy": "Inte det mest glamorösa, men mycket kapabelt för grupper. Bra bas för flera kombinationer av banor i sydväst och Palmaområdet.",
   "golf": "Son Vida / Son Quint / Son Muntaner 10 min. Real Golf de Bendinat 15 min. T Golf Calvià 20 min.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Son Armadans, Palma"
  },
  "melia-calvia-beach": {
   "pills": [
    "Strandresort",
    "Magaluf",
    "Golf i sydväst"
   ],
   "why": "Fyrstjärnig resort vid Magalufstranden, med pooler och spa. Ett boende i sydväst för grupper som vill ha tid på stranden mellan golfrundorna.",
   "andy": "Jag skulle välja det för en resa i sydväst. Ordna transport till banorna i stället för att planera att gå till Santa Ponsa.",
   "golf": "T Golf Calvià, Real Golf de Bendinat och Golf Santa Ponsa 1.",
   "travelTime": "Transfer från flygplatsen till Magaluf",
   "subname": "Magaluf"
  },
  "barcelo-illetas": {
   "pills": [
    "Havsutsikt",
    "Helst vuxna",
    "Bra värde"
   ],
   "why": "Prisvärt fyrstjärnigt hotell i Illetas med fin havsutsikt och direkt tillgång till vattnet. Golf i Bendinat 10 minuter bort. Ett förnuftigt mellanklassalternativ i ett dyrt område.",
   "andy": "Bra värde för läget. Illetas är ett steg upp från Palma Nova, utan femstjärnepriserna på Gran Meliá.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.",
   "travelTime": "12 min från Palmas flygplats",
   "subname": "Illetas"
  },
  "portals-hills": {
   "pills": [
    "Boutique",
    "På en kulle",
    "Infinitypool"
   ],
   "why": "Boutiquehotell ovanför Portals Nous, med en infinitypool med utsikt över havet. Familjesviter finns. En lugnare bas med bilresa till golfen och till småbåtshamnen Puerto Portals.",
   "andy": "Ett lugnare alternativ till Donna Portals för par som vill ha avskildhet framför stimmet. T Golf Calvià är 10 minuter bort.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 12 min. Son Vida 15 min.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Portals Nous"
  },
  "son-antem-marriott": {
   "pills": [
    "Vid banan",
    "36 hål",
    "Resortfaciliteter"
   ],
   "why": "Femstjärnigt resort vid Son Antem, med två 18-hålsbanor, ett spa och faciliteter för familjer. En praktisk bas när Son Antem East och West står på schemat.",
   "andy": "Inte öns mest spännande hotell, men det mest praktiska om Son Antem står på schemat. Golf Maioris är 10 minuter bort och Son Gual 15.",
   "golf": "Son Antem East och West på plats. Golf Maioris 10 min. Son Gual 15 min. Området kring Finca Serena nåbart.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Llucmajor"
  },
  "sol-palmanova": {
   "pills": [
    "Billig strand",
    "Familj",
    "Banor vid Santa Ponsa"
   ],
   "why": "Okomplicerat fyrstjärnigt hotell i strandområdet i Palmanova. Gör jobbet för grupper som fokuserar på golf och inte på hotellet. T Golf Calvià och Golf Santa Ponsa 1 är alternativ för rundorna.",
   "andy": "Det ärliga budgetsvaret för sydväst. Lägg mindre på rummet och mer på rundorna.",
   "golf": "T Golf Calvià, Real Golf de Bendinat och Golf Santa Ponsa 1 är banor med allmän tillgång i sydväst. Ordna transport från Palmanova.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Palmanova"
  },
  "hipotels-flamenco": {
   "pills": [
    "Vid stranden",
    "Cala Millor",
    "Golf på östkusten"
   ],
   "why": "Fyrstjärnigt hotell vid Cala Millor-stranden. Ett alternativ på östkusten för grupper som kombinerar golf med strandtid.",
   "andy": "Om du bor här skulle jag hålla golfrundorna i öst. Palma och sydväst innebär längre bilresor.",
   "golf": "Son Servera, Pula, Canyamel och Capdepera.",
   "travelTime": "Transfer från flygplatsen till Cala Millor",
   "subname": "Cala Millor"
  },
  "riu-bonanza": {
   "pills": [
    "Vid havet",
    "Illetas",
    "Spa"
   ],
   "why": "Fyrstjärnigt hotell vid havet i Illetas, med spa och inomhuspool.",
   "andy": "Ett alternativ för ett boende i sydväst med tillgång till Palma. Kontrollera måltidsalternativet när du väljer rum.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.",
   "travelTime": "12 min från Palmas flygplats",
   "subname": "Illetas"
  },
  "four-seasons-formentor": {
   "pills": [
    "Four Seasons",
    "Formentorviken",
    "Körning över halvön"
   ],
   "why": "Ultralyx vid Formentorviken. En av öns mest naturskönt belägna vistelser. Golf tidigt, Formentorviken resten av dagen.",
   "andy": "Vägen över halvön är Mallorcas bästa bilresa. Alcanada är 35 minuter bort: inte närmast, men värt det för miljön.",
   "golf": "Club de Golf Alcanada 35 min. Golf Pollença 20 min.",
   "travelTime": "55 min från Palmas flygplats",
   "subname": "Halvön Formentor"
  },
  "el-vicenc": {
   "pills": [
    "Boutique",
    "Michelinkock",
    "Direkt vid stranden"
   ],
   "why": "Femstjärnigt boutiquehotell i Cala Sant Vicenç, nära stranden Cala Molins, med spa och restauranger av Santi Taura. Pollença och Alcanada är alternativ för golfen, med bilresa till banorna.",
   "andy": "Santi Taura är en av Mallorcas bästa kockar. Om maten betyder lika mycket som golfen, och norr är zonen, är det här svaret.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min från Palmas flygplats",
   "subname": "Cala de Sant Vicenç"
  },
  "son-brull": {
   "pills": [
    "Boutique med fem stjärnor",
    "Seriös spa",
    "Restaurang 3\\65"
   ],
   "why": "Kloster från 1700-talet som byggts om till ett femstjärnigt boutiquehotell, med spa och restaurangen 3\\65, som använder råvaror från godset.",
   "andy": "Ett starkt argument för att bo i norr även om du vill ha seriös golf. Alcanada 15 minuter. Lugnt, högklassigt och genuint mallorkinskt.",
   "golf": "Club de Golf Alcanada 15 min. Golf Pollença 5 min.",
   "travelTime": "50 min från Palmas flygplats",
   "subname": "Nära Pollença"
  },
  "illa-dor": {
   "pills": [
    "Utsikt över viken",
    "Klassiskt",
    "Kvällspromenader"
   ],
   "why": "Port de Pollença är en av de trevligaste baserna i norr. Lugnare än Alcúdia, trevligt att promenera på kvällarna, och Alcanada ligger 20 minuter bort.",
   "andy": "En bas vid havet längs Pine Walk i Port de Pollença. Planera transport till golfen.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min (9 hål).",
   "travelTime": "50 min från Palmas flygplats",
   "subname": "Port de Pollença"
  },
  "hotel-sis-pins": {
   "pills": [
    "Prisvärt",
    "Utsikt över viken",
    "Enkelt och rent"
   ],
   "why": "Ärligt, rent hotell i mellanklassen precis vid strandpromenaden i Port de Pollença. Utan krusiduller men bra värde i en av de trevligaste orterna i norr.",
   "andy": "Om budgeten är tight och norr är zonen är det här det praktiska svaret. Golf Alcanada 20 minuter, och kvällarna är lösta tack vare matscenen i Pollença.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min från Palmas flygplats",
   "subname": "Port de Pollença"
  },
  "agrotourisme-son-palou": {
   "pills": [
    "Lantlig finca",
    "Bergsby",
    "Fullständig ro"
   ],
   "why": "Traditionell agroturismfinca i den lilla byn Orient, omgiven av Tramuntanas berg. Fullständig tystnad, färska produkter, riktig mallorkinsk landsbygd.",
   "andy": "Orient är en av öns mest speciella byar. Golfen kräver en bilresa, men upplevelsen här är olik alla hotell. Bäst att kombinera med några rundor på Alcanada.",
   "golf": "Planera golf som en dagsutflykt från Orient i Tramuntanabergen. Son Termes är ett alternativ att överväga; välj bana utifrån rutten och starttiden.",
   "travelTime": "35 min från Palmas flygplats",
   "subname": "Orient"
  },
  "north-villa": {
   "pills": [
    "Privat villa",
    "Egen pool",
    "Vikar nära"
   ],
   "why": "Pollençadalen eller Alcúdias kust ger dig 15 minuter till Alcanada. Hyrbil är nödvändig. Stränder och vikar i närheten.",
   "andy": "Norr är lugnare och mer natursköna än sydväst. En villa i norr fungerar bra om upplägget är en riktig semester med bra golf snarare än maximalt antal rundor.",
   "golf": "Club de Golf Alcanada 15-20 min. Golf Pollença 10-15 min.",
   "travelTime": "50 min från Palmas flygplats",
   "subname": "Området Pollença / Alcúdia",
   "name": "Lyxvilla, norra Mallorca"
  },
  "la-goleta": {
   "pills": [
    "Endast vuxna",
    "Boutique",
    "Vid havet"
   ],
   "why": "Boutiquehotell endast för vuxna vid havet i Port de Pollença. En bas i norr för Alcanada och Golf Pollença.",
   "andy": "Ett val för vuxna som vill kombinera stranden och restaurangerna i Port de Pollença med golf i norr.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "52 min från Palmas flygplats",
   "subname": "Port de Pollença"
  },
  "north-villa-small": {
   "pills": [
    "Privat villa",
    "Mellanklass",
    "Pollençadalen"
   ],
   "why": "Mindre villa i Pollençadalen för grupper på 3 till 5 personer som vill ha eget utrymme utan kostnaden för en stor fastighet. Pool, utsikt över landsbygden, 15 minuter till Alcanada.",
   "andy": "Villamarknaden i norr ger bra värde jämfört med sydväst. En fastighet med 4 sovrum kostar här betydligt mindre än motsvarande i Santa Ponsa.",
   "golf": "Club de Golf Alcanada 15-20 min. Golf Pollença 10 min.",
   "travelTime": "48 min från Palmas flygplats",
   "subname": "Pollençadalen",
   "name": "Villa, norra Mallorca, liten grupp"
  },
  "can-simoneta": {
   "pills": [
    "På klippan",
    "Spa",
    "Restaurang med havsutsikt"
   ],
   "why": "Femstjärnigt boutiquehotell på klippkanten med ett seriöst spa och Capdepera Golf 5 minuter bort. Hotellet har en egen restaurang med havsutsikt.",
   "andy": "Det lugnaste alternativet på östkusten. Passar par som vill ha avskildhet framför faciliteter.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.",
   "travelTime": "60 min från Palmas flygplats",
   "subname": "Canyamel"
  },
  "pleta-de-mar": {
   "pills": [
    "Endast vuxna från 16 år",
    "Ekolyx",
    "2 infinitypooler",
    "Privat strand",
    "Restaurang Sa Pleta"
   ],
   "why": "Strandlyx på östkusten. Två infinitypooler, tillgång till privat strand och restaurang Sa Pleta by Marc Fosh på plats. Capdepera Golf 5 minuter.",
   "andy": "Östern är underskattad. Färre människor, bättre vatten, kvalitetsbanor som förbises. Sa Pleta by Marc Fosh är hotellets egen restaurang.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.",
   "travelTime": "60 min från Palmas flygplats",
   "subname": "Canyamel"
  },
  "cases-son-barbassa": {
   "pills": [
    "Lantlig finca",
    "Privat pool",
    "Capdepera Golf 5 min"
   ],
   "why": "Restaurerad lantegendom 5 minuter från Capdepera Golf. Privat pool, lokala produkter, en genuin känsla av att vara utanför de upptrampade stigarna med bra golf utanför dörren.",
   "andy": "Finca-alternativet i öster. Ingen strand, men en fantastisk pool, total tystnad och ett utmärkt läge för golf. Kombinera med en kväll på VORO i närheten.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 15 min. Club de Golf Pula 15 min.",
   "travelTime": "60 min från Palmas flygplats",
   "subname": "Capdepera"
  },
  "pula-resort": {
   "pills": [
    "Vid banan",
    "Trackman-range",
    "Golfpaket"
   ],
   "why": "Hotell vid Pula Golf, med träningsanläggningar inklusive Trackman-teknik. En bas för rundor och träning på plats.",
   "andy": "Om Pula står på schemat och gruppen vill ha allt på ett ställe är det här svaret. Träningsanläggningarna är bland de bästa på Mallorca.",
   "golf": "Pula Golf på plats. Golf Club Son Servera 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "60 min från Palmas flygplats",
   "subname": "Son Servera"
  },
  "sa-bassa-rotja": {
   "pills": [
    "Historisk egendom",
    "Spa",
    "Landsbygd"
   ],
   "why": "Lantligt hotell på en historisk egendom nära Porreres, med spa, bastu och uppvärmd inomhuspool. En bas på landsbygden med bilresa till golfen.",
   "andy": "För par som vill ha Mallorcas inland och gärna planerar bilresorna till golfen.",
   "golf": "Vall d'Or, Son Antem och Pula är alternativ att överväga från Porreres. Välj rundorna utifrån hela dagens rutt i stället för att förvänta dig golf utanför dörren.",
   "travelTime": "35 min från Palmas flygplats",
   "subname": "Porreres"
  },
  "son-gener": {
   "pills": [
    "Endast vuxna",
    "Poolterrass",
    "Lantligt öster"
   ],
   "why": "Boutiquefinca för enbart vuxna i Son Servera med en lugn poolterrass och bra spafaciliteter. Golf Club Son Servera en kort bilresa bort, Pula 10 minuter.",
   "andy": "Ett lugnare, mer intimt alternativ än de större resorterna på östkusten. Passar par som vill ha landsbygd och golf utan strandresortens folkmassor.",
   "golf": "Golf Club Son Servera 10 min. Club de Golf Pula 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "55 min från Palmas flygplats",
   "subname": "Son Servera"
  },
  "east-villa": {
   "pills": [
    "Privat villa",
    "Lugna vikar",
    "Bra värde"
   ],
   "why": "Familjer eller grupper som vill ha lugna vikar och enkel tillgång till Vall d'Or och Pula. Östkusten har öns lugnaste familjestränder.",
   "andy": "Östern är underskattad för en golfresa. Färre människor, bättre vatten, fem banor som inte får den uppmärksamhet de förtjänar.",
   "golf": "Capdepera Golf 15-20 min. Canyamel Golf 15 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 20 min.",
   "travelTime": "55-65 min från Palmas flygplats",
   "subname": "Området Cala d'Or / Porto Cristo",
   "name": "Lyxvilla, östra Mallorca"
  },
  "son-moll-sentits": {
   "pills": [
    "Endast vuxna",
    "Vid havet",
    "Spa"
   ],
   "why": "Fyrstjärnigt superiorhotell endast för vuxna mitt emot stranden Son Moll i Cala Ratjada, med spa och pool. En bas vid kusten för golf i öster, med bilresa till banorna.",
   "andy": "Använd Cala Ratjada för tid vid havet mellan rundorna. Capdepera, Canyamel och Pula är alternativ för golfen; planera transporten innan du bokar.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min.",
   "travelTime": "60 min från Palmas flygplats",
   "subname": "Cala Ratjada"
  },
  "protur-biomar": {
   "pills": [
    "Stort resort",
    "Strand",
    "Familjepooler",
    "Vuxenzon"
   ],
   "why": "Resort i Sa Coma med ett familjeområde och ett separat vuxenområde. Spa, flera pooler och stranden en kort promenad bort. Pula och Son Servera är alternativ för golfen.",
   "andy": "Ett av de mer kapabla resorterna på östkusten för grupper där några vill spela golf och andra vill ha strand och pooler hela dagen.",
   "golf": "Pula, Son Servera, Capdepera och Canyamel ger dig en blandning av banor på östkusten. Planera transporten från Sa Coma.",
   "travelTime": "58 min från Palmas flygplats",
   "subname": "Sa Coma"
  },
  "east-villa-small": {
   "pills": [
    "Privat villa",
    "Lantligt öster",
    "Bra värde"
   ],
   "why": "Mindre villa på östkusten för grupper på 3 till 5 personer. Området kring Artà och Son Servera ger genuin mallorkinsk landsbygd till ett lägre pris än sydväst, med 4 banor inom 20 minuter.",
   "andy": "Villamarknaden på östkusten är underskattad och lågt prissatt. Om gruppen klarar den längre körningen från flygplatsen får du mycket bättre värde här.",
   "golf": "Club de Golf Pula 15 min. Golf Club Son Servera 15 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "55 min från Palmas flygplats",
   "subname": "Området Artà / Son Servera",
   "name": "Villa, östra Mallorca, liten grupp"
  },
  "el-llorenc": {
   "pills": [
    "Stadsboutique",
    "Michelinmat",
    "Takpool"
   ],
   "why": "Designrum, takpool och Santi Taura (en Michelinstjärna). Golfen kräver en bilresa, men kvällarna i Palma väger upp det mer än väl.",
   "andy": "Takpoolen i skymningen och middag efteråt är en stark kväll i Palma. Son Gual är 20 minuter bort för en morgonrunda.",
   "golf": "Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min. Golf Maioris 30 min.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Palmas gamla stan"
  },
  "santos-nixe": {
   "pills": [
    "Strand",
    "Spa",
    "Femstjärnigt"
   ],
   "why": "Femstjärnigt hotell med direkt tillgång till stranden Cala Major och ett spa. En bas vid kusten nära Palma för rundor i sydväst.",
   "andy": "Ett förnuftigt val för par eller små grupper som vill ha strand och spa utan ultralyxens prislapp. Bendinat 15 minuter.",
   "golf": "Real Golf de Bendinat 15 min. T Golf Calvià 20 min. Son Vida / Son Quint / Son Muntaner 15 min. Son Gual 20 min.",
   "travelTime": "12 min från Palmas flygplats",
   "subname": "Cala Major, Palma"
  },
  "born-hotel": {
   "pills": [
    "Palats i Palma",
    "Terrass på innergården",
    "Gamla stan"
   ],
   "why": "Palatshotell på Carrer de Sant Jaume i Palmas gamla stan, med en innergård. Inom gångavstånd från katedralen, restauranger och Passeig des Born.",
   "andy": "Från Born har du Palmas kvällsliv runt hörnet. Son Gual 20 minuter för en tidig morgonrunda, sedan tillbaka för en lång lunch.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 20 min. Son Vida / Son Quint / Son Muntaner 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Palmas gamla stan"
  },
  "nakar-hotel": {
   "pills": [
    "Takpool",
    "Designrum",
    "Stadskärnan"
   ],
   "why": "Modernt designhotell i centrala Palma med en stark takpool och bar. Yngre känsla än palatshotellen i gamla stan. Bra läge för Passeig des Born.",
   "andy": "För gruppen som vill ha Palmas nattliv utan att vara för långt från golfen. Son Gual är högst 20 minuter bort.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min. Real Golf de Bendinat 18 min.",
   "travelTime": "18 min från Palmas flygplats",
   "subname": "Palma"
  },
  "palacio-ca-sa-galesa": {
   "pills": [
    "Ultralyx",
    "12 rum",
    "Utsikt över katedralen"
   ],
   "why": "Ultralyxhotell med tolv rum i hjärtat av Palmas gamla stan, med utsikt över katedralen. Ett av stadens mest intima och speciella hotell. Inomhuspool och spa.",
   "andy": "Det mest exklusiva alternativet i Palma stad. Middagar på terrassen med utsikt mot La Seu. Son Gual 20 minuter för morgonrundan.",
   "golf": "Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Palmas gamla stan"
  },
  "portixol": {
   "pills": [
    "Känsla av stadsdel",
    "Palmas bästa fisk",
    "Lugnt"
   ],
   "why": "Bykänsla i Portixol med några av Mallorcas bästa fiskrestauranger. Es Mollet 5 minuters promenad. Golfen kräver en bilresa.",
   "andy": "Ett lugnare alternativ i Palma. Använd det som kvällsbas. Son Gual är 25 minuter bort för en morgonrunda.",
   "golf": "Son Gual 25 min. Son Vida / Son Quint 20 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Portixol, Palma"
  },
  "convent-missio": {
   "pills": [
    "Designhotell",
    "Palmas gamla stan",
    "Takterrass"
   ],
   "why": "Designrum, takterrass och ett av Palmas bästa matställen. För golfare som vill uppleva staden mellan rundorna.",
   "andy": "Hotellet ligger i Palmas gamla stad. Planera en bilresa till golfen.",
   "golf": "Son Gual 25 min. Son Vida / Son Quint / Son Muntaner 20 min. T Golf Palma (Puntiró) 15 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Palmas gamla stan"
  },
  "innside-palma": {
   "pills": [
    "Fyrstjärnigt hotell",
    "Takpool",
    "Centrala Palma"
   ],
   "why": "Fyrstjärnigt hotell nära Palmas gamla stad, med takpool och wellnessavdelning. En bas i staden för restauranger och kvällar ute mellan golfrundorna.",
   "andy": "En rakt på sak-bas i Palma. Bra för företagsgrupper. Son Gual 20 minuter för rundorna.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Palma"
  },
  "brondo-architect": {
   "pills": [
    "Boutique",
    "Design",
    "Läge i gamla stan"
   ],
   "why": "Litet designinriktat hotell i Palmas gamla stan, inom gångavstånd från de viktigaste restaurangerna, katedralen och museet Es Baluard.",
   "andy": "Det prisvärda boutiquealternativet i Palma. Inte lyxen från Palacio Ca Sa Galesa, men läget är detsamma och karaktären är äkta.",
   "golf": "Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Palmas gamla stan"
  },
  "hostal-cuba": {
   "pills": [
    "Budgetboutique",
    "Santa Catalina",
    "Palmas bästa kvarter"
   ],
   "why": "Karaktärsfullt budgetboutiquehotell i Santa Catalina, Palmas bästa område för barer och restauranger. Hostalen har funnits i årtionden och har sin egen personlighet.",
   "andy": "I Santa Catalina äter de lokala. Inte gamla stan för turister, utan Palmas riktiga matscen. Son Gual 20 minuter för morgongolf.",
   "golf": "Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Son Vida 18 min.",
   "travelTime": "15 min från Palmas flygplats",
   "subname": "Santa Catalina, Palma"
  },
  "hotel-saratoga": {
   "pills": [
    "Takpool",
    "Centrala Palma",
    "Klassiskt fyrstjärnigt"
   ],
   "why": "Klassiskt fyrstjärnigt hotell i centrala Palma med takpool med utsikt över viken. Bra läge för både gamla stan och huvudboulevarden. Bra alternativ för företagsgrupper.",
   "andy": "Pålitligt, centralt, förnuftigt. En av de mest använda baserna i Palma för golfgrupper. Son Gual är 20 minuter bort.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 16 min. Real Golf de Bendinat 20 min.",
   "travelTime": "18 min från Palmas flygplats",
   "subname": "Centrala Palma"
  },
  "palma-villa-small": {
   "pills": [
    "Privat villa",
    "Utsikt över Palma",
    "Son Vida nära"
   ],
   "why": "Privat villa i kullarna vid Génova eller Son Vida med utsikt över Palmaviken. Banorna på Son Vida-området är 10 minuter bort och staden 15. Ett bra kompromissval för grupper som vill ha självständighet och enkel golf.",
   "andy": "Villorna i Son Vida-området används för lite av golfgrupper. Du får avskildhet, utsikt och tre banor inom 10 minuter.",
   "golf": "Son Vida / Son Quint / Son Muntaner 10 min. T Golf Calvià 20 min. Real Golf de Bendinat 15 min.",
   "travelTime": "20 min från Palmas flygplats",
   "subname": "Området Génova / Son Vida",
   "name": "Villa, Palmaområdet, liten grupp"
  },
  "jumeirah-port-soller": {
   "pills": [
    "Ultralyx",
    "På klippan",
    "Hammamspa",
    "Utsikt över Tramuntana"
   ],
   "why": "Högt belägen på klipporna ovanför Port de Sóller. 180-graders utsikt över Medelhavet, hammamspa och Tramuntanas berg utanför dörren.",
   "andy": "Ingen bas där golfen kommer först. Ett av öns visuellt mest spektakulära hotell. Bra som en Tramuntana-upplevelse på 2 nätter vid sidan av golfen.",
   "golf": "Golf är en planerad dagsutflykt härifrån. Räkna med bilresor på bergsvägar till Son Termes, Golf de Andratx, Alcanada eller Pollença beroende på starttiderna.",
   "travelTime": "50 min från Palmas flygplats",
   "subname": "Port de Sóller"
  },
  "la-residencia": {
   "pills": [
    "Belmond",
    "Deià",
    "Historisk herrgård"
   ],
   "why": "Två historiska herrgårdar i sten ovanför Deià, med trädgårdar, pooler och ett spa. En vistelse i Tramuntana där golfen planeras som en dagsutflykt.",
   "andy": "Ingen bas för en golfresa. Ett av Spaniens bästa hotell. Fungerar bra som 2 nätter i nordväst innan du flyttar till sydväst för rundorna.",
   "golf": "Golfrundor måste planeras som heldagsutflykter. Son Termes, Golf de Andratx, Alcanada och Pollença kan alla passa beroende på exakt rutt.",
   "travelTime": "60 min från Palmas flygplats",
   "subname": "Ett Belmond-hotell, Deià"
  },
  "cas-xorc": {
   "pills": [
    "Finca",
    "Infinitypool",
    "Avlägset"
   ],
   "why": "Ombyggd bondgård vid vägen mellan Sóller och Deià. Infinitypool, kök med eget odlat, avlägsen havsutsikt. Mycket avlägset, bil är nödvändig.",
   "andy": "En av öns mest romantiska platser. Inte basen för en golfresa, men rätt svar om någon vill ha Tramuntana-upplevelsen med en runda eller två inlagda.",
   "golf": "Golf är möjligt, men det är en utflykt snarare än en snabb avstickare. Gör urvalet av banor efter att du valt exakt hotell eller villa.",
   "travelTime": "50 min från Palmas flygplats",
   "subname": "Sóller"
  },
  "es-moli": {
   "pills": [
    "Klassiska Tramuntana",
    "Uppvärmd pool",
    "Terrassträdgårdar"
   ],
   "why": "Ett hotell i terrassträdgårdar ovanför Deià, med uppvärmd utomhuspool och utsikt över dalen och havet. En bas i Tramuntana för tid bort från golfen, med rundor planerade som dagsutflykter.",
   "andy": "Planera 2 nätter i nordväst för landskapet och flytta sedan till sydväst eller norr för enklare golflogistik.",
   "golf": "Golf planeras bäst som en heldag från Deià. Rätt bana beror på om dagen går mot sydväst, Palma eller norr.",
   "travelTime": "55 min från Palmas flygplats",
   "subname": "Deià"
  },
  "hotel-hermitage": {
   "pills": [
    "Bergsby",
    "Pool",
    "Total ro"
   ],
   "why": "Inbäddat i den lilla bergsbyn Orient mitt i Tramuntana. Pool, spa och fullständig lugn. Byn har färre än 50 invånare.",
   "andy": "För paret som vill försvinna. Orient är öns mest dolda hörn. Golf är möjligt, men kräver en genomtänkt rutt snarare än en spontan lokal starttid.",
   "golf": "Välj bana utifrån dagens rutt från Orient. Golf de Andratx, Son Termes, Alcanada eller Pollença kan var och en passa beroende på reseplan.",
   "travelTime": "30 min från Palmas flygplats",
   "subname": "Orient"
  },
  "gran-hotel-soller": {
   "pills": [
    "Staden Sóller",
    "Femstjärnigt",
    "Apelsinlundar"
   ],
   "why": "Femstjärnigt hotell i centrala Sóller, en av Mallorcas mest charmiga städer. Apelsinmarknaden, den historiska spårvagnen till Port de Sóller och bra restauranger utanför dörren.",
   "andy": "En mer tillgänglig prisnivå för nordväst. För grupper som vill ha Sóller-upplevelsen utan Jumeirahs priser. Golfen måste planeras kring körningen.",
   "golf": "Golf blir en dagsutflykt från Sóller, det finns inga banor i närheten. Son Termes, Golf de Andratx, Alcanada eller Pollença kan passa beroende på den bredare reseplanen.",
   "travelTime": "35 min från Palmas flygplats",
   "subname": "Sóller"
  },
  "can-verdera": {
   "pills": [
    "Stenby",
    "Takterrass",
    "Utsikt över Fornalutx"
   ],
   "why": "Litet boutiquehotell i Fornalutx, flera gånger utsett till en av Spaniens vackraste byar. Byggt i sten, takterrass, exceptionell bergsutsikt.",
   "andy": "Fornalutx är Mallorcas mest fotograferade by. En helt annan upplevelse än något strandhotell. Golfen är en lång körning, men miljön är värd det för 2 nätter.",
   "golf": "Golf från Fornalutx är en riktig dagsutflykt. Välj bana efter att du bestämt om dagen går mot Palma, sydväst eller norr.",
   "travelTime": "40 min från Palmas flygplats",
   "subname": "Fornalutx"
  },
  "northwest-villa": {
   "pills": [
    "Privat villa",
    "Bergsutsikt",
    "Tramuntana"
   ],
   "why": "En villa i nordväst ger total avskildhet i öns mest dramatiska landskap. Privat pool, bergsutsikt, oliv- och citronlundar. Golf är en utflykt, inte en daglig pendling.",
   "andy": "Rekommenderas bara till grupper som verkligen är bekväma med körningen. Rätt upplägg: Tramuntana-upplevelsen först, golfen därefter.",
   "golf": "Golf de Andratx 45-55 min via bergsvägar. Planera golfutflykter på en hel dag.",
   "travelTime": "35-50 min från Palmas flygplats",
   "subname": "Området Sóller / Valldemossa",
   "name": "Lyxvilla, nordväst"
  },
  "costa-dor": {
   "pills": [
    "Vik med strand",
    "Olivlund",
    "Deià nära"
   ],
   "why": "Litet hotell gömt i en olivlund ovanför en privat vik mellan Deià och Valldemossa. En av öns mest undanskymda platser till ett rimligt pris.",
   "andy": "Det prisvärda alternativet till La Residencia. Samma Deià-område, samma dramatiska kust, betydligt lägre pris. Öppet från april till oktober.",
   "golf": "Golf från den här delen av Deià kräver en planerad dagsrutt. Son Termes, Golf de Andratx, Alcanada eller Pollença kan alla vara rimliga beroende på den bredare planen.",
   "travelTime": "55 min från Palmas flygplats",
   "subname": "Lluc Alcari, nära Deià"
  },
  "hotel-marina-soller": {
   "pills": [
    "Port de Sóller",
    "Budget",
    "Tillgång till stranden"
   ],
   "why": "Hotell vid viken i Port de Sóller. Apelsinlundsspårvagnen från orten Sóller är en av de trevligaste upplevelserna på Mallorca. Golf blir en dagsutflykt snarare än ett upplägg med banor i närheten.",
   "andy": "Det prisvärda svaret för nordväst. Port de Sóller är en vacker vik att vakna vid. Kombinera en eller två planerade golfdagar med riktig tid i Tramuntana.",
   "golf": "Planera golf som en dagsutflykt från Port de Sóller. Det bästa banvalet beror på om dagen går mot Palma, sydväst eller norr.",
   "travelTime": "45 min från Palmas flygplats",
   "subname": "Port de Sóller"
  },
  "cap-vermell": {
   "subname": "Canyameldalen",
   "pills": [
    "Spa",
    "Pooler",
    "Golf på östkusten"
   ],
   "why": "En resort i Canyameldalen med pooler och spa. Canyamel, Capdepera, Pula och Son Servera ger en kombination av banor på östkusten.",
   "andy": "Jag skulle välja den för en resa med bas i öster. Rundor nära Palma och i sydväst innebär längre bilresor.",
   "golf": "Canyamel, Capdepera, Pula och Son Servera.",
   "travelTime": "Flygplatstransfer till Canyamel"
  }
 },
 "questions": {
  "area": {
    "title": "Var vill ni bo?",
    "sub": "Välj ett område för ert hotellurval.",
    "opts": {
      "southwest": {
        "label": "Sydvästra Mallorca",
        "desc": "Santa Ponsa, Calvià, Bendinat och Andratx."
      },
      "north": {
        "label": "Norra Mallorca",
        "desc": "Alcúdia, Pollença och Formentor. Här finns Alcanada och Golf Pollença."
      },
      "east": {
        "label": "Östra Mallorca",
        "desc": "Capdepera, Canyamel, Pula, Son Servera och Vall d’Or."
      },
      "palma": {
        "label": "Nära Palma",
        "desc": "Palma, Son Vida, Son Muntaner och Son Quint."
      },
      "northwest": {
        "label": "Nordvästra Mallorca",
        "desc": "Sóller, Deià och Valldemossa. Räkna med bilresa till golfen."
      }
    }
  },
  "priority": {
    "title": "Vad är viktigast för din vistelse?",
    "sub": "Välj allt som stämmer: vad vill gruppen mellan rundorna?",
    "opts": {
      "golf-focused": {
        "label": "Nära golfen",
        "desc": "Bo nära golfbanorna."
      },
      "beach": {
        "label": "Strand och pool",
        "desc": "Tid vid havet eller poolen."
      },
      "spa": {
        "label": "Spa",
        "desc": "Tillgång till spa mellan rundorna."
      },
      "dining": {
        "label": "Mat och kvällsliv",
        "desc": "Restauranger och kvällar ute."
      },
      "privacy": {
        "label": "Avskildhet",
        "desc": "Lugnare omgivningar och tid för er själva."
      }
    }
  },
  "group": {
    "title": "Vem reser?",
    "sub": "Hjälper till att hitta rätt atmosfär och faciliteter.",
    "opts": {
      "couple": {
        "label": "Par"
      },
      "friends": {
        "label": "Vängrupp"
      },
      "family": {
        "label": "Familj med barn"
      },
      "solo": {
        "label": "Reser ensam"
      },
      "corporate": {
        "label": "Företagsgrupp"
      }
    }
  },
  "size": {
    "title": "Hur många personer totalt?",
    "sub": "Räkna med alla, även barn.",
    "opts": {
      "1-2": {
        "label": "1 eller 2"
      },
      "3-5": {
        "label": "3 till 5"
      },
      "6-9": {
        "label": "6 till 9"
      },
      "10+": {
        "label": "10 eller fler"
      }
    }
  },
  "style": {
    "title": "Vilken typ av ställe känns rätt?",
    "sub": "Välj den typ av boende du föredrar.",
    "opts": {
      "boutique": {
        "label": "Boutiquehotell",
        "desc": "Mindre hotell med egen karaktär."
      },
      "resort": {
        "label": "Resort",
        "desc": "Pooler, restauranger och faciliteter på området."
      },
      "classic": {
        "label": "Klassiskt hotell",
        "desc": "Traditionella hotellrum och gemensamma faciliteter."
      },
      "villa": {
        "label": "Privat villa",
        "desc": "Eget kök, sällskapsutrymmen och pool."
      },
      "countryside": {
        "label": "Finca på landet",
        "desc": "Lantliga boenden utanför de stora semesterorterna."
      }
    }
  },
  "budget": {
    "title": "Vilken är den ungefärliga budgeten per rum och natt?",
    "sub": "Ungefärliga budgetnivåer, inga livepriser. Bekräfta priser för dina datum.",
    "opts": {
      "mid": {
        "label": "Upp till 250 € per rum",
        "desc": ""
      },
      "premium": {
        "label": "250 till 500 € per rum",
        "desc": ""
      },
      "ultra": {
        "label": "500 € eller mer per rum",
        "desc": ""
      },
      "flexible": {
        "label": "Flexibel budget",
        "desc": "Jämför boenden i olika budgetnivåer."
      }
    }
  }
}
}

export default data
