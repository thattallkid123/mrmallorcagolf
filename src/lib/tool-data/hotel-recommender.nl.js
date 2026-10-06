// hotel-recommender copy for 'nl'. Generated overlay: the English master is in
// hotel-recommender-logic.js (HOTELS, QUESTIONS_DATA), keyed by hotel id and question key.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "hotels": {
  "arabella-son-vida": {
   "pills": [
    "Aan de baan",
    "Spa",
    "Michelin-keuken"
   ],
   "why": "Son Vida, Son Quint en Son Muntaner (beste golfbaan van Spanje 2025) liggen allemaal op het landgoed. T Golf Calvià is 10 minuten rijden. Opstaan, spelen, eten, herstellen.",
   "andy": "Het standaardantwoord voor een golfgerichte groep die alles geregeld wil hebben. Es Fum, met één Michelinster, zit in het hotel. Puerto Portals is 's avonds te voet bereikbaar.",
   "golf": "Op het landgoed: Son Vida, Son Quint, Son Muntaner (beste van Spanje 2025). T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa-groep 20 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Sheraton Collection"
  },
  "gran-melia-de-mar": {
   "pills": [
    "Strand",
    "Spa",
    "Palma dichtbij"
   ],
   "why": "Ultraluxe met toegang tot het strand en volledige resortservice. Golf in Bendinat op 8 minuten. Vanuit Illetas bereikt u zowel Palma als de banengroep in het zuidwesten.",
   "andy": "Een rustiger vijfsterrenhotel dan het Mandarin Oriental. Flexibele uitvalsbasis voor verschillende combinaties van rondes.",
   "golf": "Real Golf de Bendinat 8 min. T Golf Calvià 15 min. Son Vida 20 min.",
   "travelTime": "12 min van de luchthaven van Palma",
   "subname": "Illetas"
  },
  "hospes-maricel": {
   "pills": [
    "Boutique",
    "Aan zee",
    "Privésteiger"
   ],
   "why": "Paleissfeer uit de jaren veertig met een privésteiger. Oud-Mallorcaanse glamour, kleiner en intiemer dan de grote vijfsterrenhotels. Golf in Bendinat op 8 minuten.",
   "andy": "Een kenmerkend alternatief voor de grotere vijfsterrenhotels. Het soort plek dat echt Mallorcaans aanvoelt in plaats van als een internationale hotelketen.",
   "golf": "Real Golf de Bendinat 8 min. T Golf Calvià 15 min.",
   "travelTime": "12 min van de luchthaven van Palma",
   "subname": "Cas Català"
  },
  "hotel-bendinat": {
   "pills": [
    "Aan de baan",
    "Goede prijs-kwaliteit",
    "Rustige omgeving"
   ],
   "why": "Direct naast Real Golf de Bendinat. De verstandige keuze als het gaat om golf en een goede ligging, niet om luxe aan het zwembad.",
   "andy": "Oud Bendinat is een van de rustigere hoeken van het zuidwesten. Geen resort. Een eerlijk golfhotel dat doet wat het belooft.",
   "golf": "Real Golf de Bendinat voor de deur. T Golf Calvià 10 min. Santa Ponsa-groep 20 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Bendinat"
  },
  "son-caliu": {
   "pills": [
    "Strand",
    "Spa van 1100 m²",
    "Gezinsvriendelijk"
   ],
   "why": "Viersterrenhotel in de middenklasse met een echte spa en toegang tot zee via een steiger. Een praktisch middelpunt voor de banengroep in het zuidwesten tegen een redelijke prijs.",
   "andy": "Tussen Puerto Portals en Palma Nova. Goed voor gemengde groepen waarin niet iedereen golft. De spa en het strand houden zich goed staande.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa 20 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Palma Nova"
  },
  "zafiro-andratx": {
   "pills": [
    "Strand",
    "Spa",
    "Gezinsresort",
    "Golf de Andratx 5 min"
   ],
   "why": "Vijfsterrenresort op vijf minuten van Golf de Andratx. Het strand is te voet bereikbaar. Goede prijs-kwaliteit als de helft van de groep golft en de andere helft niet.",
   "andy": "Eén ding om rekening mee te houden: Golf de Andratx is de zwaarste baan van het eiland, met een handicaplimiet van 28. Combineer het voor zwakkere spelers met de makkelijkere rondes in Santa Ponsa.",
   "golf": "Golf de Andratx 5 min. T Golf Calvià 20 min. Santa Ponsa-groep 25 min.",
   "travelTime": "30 min van de luchthaven van Palma",
   "subname": "Camp de Mar"
  },
  "secrets-villamil": {
   "pills": [
    "Alleen volwassenen",
    "Klifzwembad",
    "Strand van Paguera"
   ],
   "why": "AMR Collection alleen voor volwassenen aan het strand van Paguera. Suites boven het water, infinity pools op de klif, meerdere restaurants. Golf de Andratx op 15 minuten.",
   "andy": "Een goede vijfsterrenbasis als het stel een serieus strandresort wil met het volledige aanbod aan banen in het zuidwesten binnen bereik. Andratx is de dichtstbijzijnde en meest dramatische.",
   "golf": "Golf de Andratx 15 min. T Golf Calvià 20 min. Santa Ponsa 25 min.",
   "travelTime": "30 min van de luchthaven van Palma",
   "subname": "AMR Collection, Paguera"
  },
  "donna-portals": {
   "pills": [
    "Boutique",
    "Privébaai",
    "Puerto Portals dichtbij"
   ],
   "why": "Designgericht boutiquehotel naast een privébaai in Portals Nous. Themasuites, Day Club, bloemenzwembad. De jachthaven van Puerto Portals voor de avonden.",
   "andy": "T Golf Calvià ligt 10 minuten landinwaarts, de banengroep van Santa Ponsa op 15. Port Adriano is een goede plek om doordeweeks te dineren.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 10 min. Son Vida 18 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Portals Nous"
  },
  "finca-serena": {
   "pills": [
    "Finca",
    "Wellness",
    "40 hectare"
   ],
   "why": "Holistische vijfsterrenfinca met 40 hectare landbouwgrond en een serieus wellnessprogramma. Golf Maioris op 5 minuten, Son Gual op 15.",
   "andy": "Golf Maioris en Son Gual zijn twee van de interessantste banen van Mallorca. Andreu Genestra (één Michelinster) is in de buurt.",
   "golf": "Golf Maioris 5 min. Son Antem East/West 10 min. Son Gual 15 min. Let op: dit gebied ligt 40-60 min van Palma.",
   "travelTime": "25 min van de luchthaven van Palma",
   "subname": "Bij Llucmajor"
  },
  "sw-villa": {
   "pills": [
    "Privévilla",
    "Eigen zwembad",
    "Volledige flexibiliteit"
   ],
   "why": "Voor zes of meer personen verandert een villa de reis: late ontbijten, uw eigen zwembad na de ronde, geen hoteltijden. Vier banen binnen 15 minuten.",
   "andy": "De ligging van de villa moet passen bij de starttijden. Precies die afstemming is waar ik bij kan helpen.",
   "golf": "Golf Santa Ponsa 1, Golf de Andratx, T Golf Calvià, Real Golf de Bendinat: allemaal binnen 15-20 min, afhankelijk van de ligging van de villa. Son Antem East/West 25-30 min.",
   "travelTime": "25-35 min van de luchthaven van Palma",
   "subname": "Omgeving Santa Ponsa / Andratx",
   "name": "Luxevilla, zuidwesten"
  },
  "son-net": {
   "pills": [
    "Historische finca",
    "17e eeuw",
    "Infinity pool"
   ],
   "why": "Stenen finca uit de zeventiende eeuw aan de voet van de Tramuntana, 20 minuten van Golf de Andratx. Infinity pool, oude olijfgaarden, een volledig privékarakter.",
   "andy": "Een van de mooiste gebouwen van het eiland. Een echte finca-ontsnapping die de banen in het zuidwesten toch binnen bereik houdt.",
   "golf": "Golf de Andratx 20 min. T Golf Calvià 25 min. Santa Ponsa-groep 30 min.",
   "travelTime": "25 min van de luchthaven van Palma",
   "subname": "Puigpunyent"
  },
  "valparaiso-palace": {
   "pills": [
    "Groot resort",
    "Congresfaciliteiten",
    "Uitzicht op Palma"
   ],
   "why": "Groot viersterrenhotel op de heuvel boven Palma met panoramisch uitzicht op de baai en een volledige spa. Praktisch voor grotere groepen en zakelijke reizen die naast golf vergaderruimte nodig hebben.",
   "andy": "Niet het meest glamoureuze, maar zeer capabel voor groepen. Goede uitvalsbasis voor meerdere combinaties van banen in het zuidwesten en rond Palma.",
   "golf": "Son Vida / Son Quint / Son Muntaner 10 min. Real Golf de Bendinat 15 min. T Golf Calvià 20 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Son Armadans, Palma"
  },
  "melia-calvia-beach": {
   "pills": [
    "Strandresort",
    "Santa Ponsa",
    "Golf dichtbij"
   ],
   "why": "Groot strandresort midden in Santa Ponsa, op korte loopafstand van Golf Santa Ponsa 1. Goede faciliteiten voor grotere groepen die strand en meerdere banen willen.",
   "andy": "De banen van Santa Ponsa liggen hier overal omheen. Golf Santa Ponsa 1 is 10 minuten lopen. Een solide groepsbasis zonder boutiqueprijzen.",
   "golf": "Golf Santa Ponsa 1 op loopafstand. Golf Santa Ponsa 2 en 3 in de buurt. T Golf Calvià 15 min. Golf de Andratx 20 min.",
   "travelTime": "25 min van de luchthaven van Palma",
   "subname": "Santa Ponsa"
  },
  "barcelo-illetas": {
   "pills": [
    "Zeezicht",
    "Bij voorkeur volwassenen",
    "Prijs-kwaliteit"
   ],
   "why": "Goed geprijsd viersterrenhotel in Illetas met mooi uitzicht op zee en directe toegang tot het water. Golf in Bendinat op 10 minuten. Een verstandige optie in de middenklasse in een duur gebied.",
   "andy": "Goede prijs-kwaliteit voor de locatie. Illetas is een stap hoger dan Palma Nova, zonder de vijfsterrenprijzen van het Gran Meliá.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.",
   "travelTime": "12 min van de luchthaven van Palma",
   "subname": "Illetas"
  },
  "portals-hills": {
   "pills": [
    "Alleen volwassenen",
    "Op een heuvel",
    "Infinity pool"
   ],
   "why": "Boutiquehotel alleen voor volwassenen boven Portals Nous met een infinity pool met uitzicht op zee. Intiem en rustig, op 10 minuten van zowel golf als de jachthaven van Puerto Portals.",
   "andy": "Een rustiger alternatief voor het Donna Portals voor stellen die privacy boven sfeer stellen. T Golf Calvià is 10 minuten.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 12 min. Son Vida 15 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Portals Nous"
  },
  "son-antem-marriott": {
   "pills": [
    "Aan de baan",
    "36 holes",
    "Resortfaciliteiten"
   ],
   "why": "Marriott-resort direct tussen Son Antem East en West: 36 holes voor de deur. Goede golffaciliteiten voor zakelijke groepen en betrouwbaar viersterrencomfort.",
   "andy": "Niet het spannendste hotel van het eiland, maar wel het meest praktische als Son Antem op het programma staat. Golf Maioris is 10 minuten, Son Gual 15.",
   "golf": "Son Antem East en West op locatie. Golf Maioris 10 min. Son Gual 15 min. Omgeving Finca Serena bereikbaar.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Llucmajor"
  },
  "sol-palmanova": {
   "pills": [
    "Budgetstrand",
    "Gezin",
    "Banengroep Santa Ponsa"
   ],
   "why": "Ongecompliceerd driesterrenstrandhotel in Palmanova. Doet wat het moet doen voor groepen die zich op golf richten en niet op het hotel. T Golf Calvià 10 minuten, de banengroep van Santa Ponsa 15.",
   "andy": "Het eerlijke budgetantwoord voor het zuidwesten. Geef minder uit aan de kamer en meer aan de rondes.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Golf Santa Ponsa 1 en 2 ca. 15 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Palmanova"
  },
  "hipotels-flamenco": {
   "pills": [
    "Strandresort",
    "Paguera",
    "Budget"
   ],
   "why": "Betrouwbaar driesterrenhotel aan het strand van Paguera. Een van de betaalbaardere strandopties in het zuidwesten, met Golf de Andratx op 15 minuten en Santa Ponsa op 20.",
   "andy": "Zonder opsmuk, goede ligging voor golf. Strand en zwembad doen hun werk voor de niet-golfers in de groep.",
   "golf": "Golf de Andratx 15 min. T Golf Calvià 20 min. Golf Santa Ponsa 1 ca. 20 min.",
   "travelTime": "28 min van de luchthaven van Palma",
   "subname": "Paguera"
  },
  "cala-vinyes": {
   "pills": [
    "Rustige baai",
    "Middenklasse",
    "Golf de Andratx dichtbij"
   ],
   "why": "Klein hotel boven een rustige baai in Cala Vinyes. Minder druk dan Paguera of Santa Ponsa, en Golf de Andratx is 10 minuten. Een kalmere hoek van het zuidwesten.",
   "andy": "Goed voor stellen die een rustigere basis willen dan de grote resorts in het zuidwesten. De baai is een van de mooiste in de omgeving.",
   "golf": "Golf de Andratx 10 min. T Golf Calvià 18 min. Golf Santa Ponsa 1 ca. 20 min.",
   "travelTime": "28 min van de luchthaven van Palma",
   "subname": "Cala Vinyes"
  },
  "riu-bonanza": {
   "pills": [
    "Optie all-inclusive",
    "Strand van Illetas",
    "Spa"
   ],
   "why": "Viersterren RIU-hotel aan de boulevard van Illetas. All-inclusive mogelijk, volledige spa en een van de beste strandlocaties in de omgeving. Golf in Bendinat op 10 minuten.",
   "andy": "Een praktische optie voor grote groepen als sommige spelers all-inclusive willen en anderen elke dag naar de banen rijden.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.",
   "travelTime": "12 min van de luchthaven van Palma",
   "subname": "Illetas"
  },
  "four-seasons-formentor": {
   "pills": [
    "Four Seasons",
    "Baai van Formentor",
    "Rit over het schiereiland"
   ],
   "why": "Ultraluxe aan de baai van Formentor. Een van de mooiste verblijven van het eiland. Vroeg golfen, de rest van de dag de baai van Formentor.",
   "andy": "De weg over het schiereiland is de mooiste rit van Mallorca. Alcanada is 35 minuten: niet de dichtstbijzijnde, maar de omgeving is het waard.",
   "golf": "Club de Golf Alcanada 35 min. Golf Pollença 20 min.",
   "travelTime": "55 min van de luchthaven van Palma",
   "subname": "Schiereiland Formentor"
  },
  "el-vicenc": {
   "pills": [
    "Boutique",
    "Michelinchef",
    "Direct aan het strand"
   ],
   "why": "Boutique-vijfsterrenhotel met directe toegang tot het strand en Santi Taura (één Michelinster) in het restaurant. Alcanada op 20 minuten. De oude stad van Pollença op 10.",
   "andy": "Santi Taura is een van de beste chefs van Mallorca. Als het eten net zo belangrijk is als golf, en het noorden de regio is, is dit het antwoord.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Cala de Sant Vicenç"
  },
  "son-brull": {
   "pills": [
    "Boutique vijfsterren",
    "Serieuze spa",
    "360 met wijn"
   ],
   "why": "Achttiende-eeuws klooster, verbouwd tot een serieus boutique-vijfsterrenhotel. De spa is een van de beste van het eiland en restaurant 360 gebruikt producten van het landgoed zelf.",
   "andy": "Een sterk argument om in het noorden te verblijven, ook als u serieus wilt golfen. Alcanada op 15 minuten. Rustig, van hoge kwaliteit en echt Mallorcaans.",
   "golf": "Club de Golf Alcanada 15 min. Golf Pollença 5 min.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Bij Pollença"
  },
  "illa-dor": {
   "pills": [
    "Uitzicht op de baai",
    "Klassiek",
    "Wandelen in de avond"
   ],
   "why": "Port de Pollença is een van de mooiste uitvalsbases in het noorden. Rustiger dan Alcúdia, 's avonds goed te belopen, en Alcanada ligt op 20 minuten.",
   "andy": "Het best gevestigde hotel direct aan de baai. 23 kamers. Goed eten.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min (9 holes).",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Port de Pollença"
  },
  "can-cuarassa": {
   "pills": [
    "Boutique",
    "Privétuinen",
    "Direct aan het strand"
   ],
   "why": "Klein boutiquehotel met privétuinen die doorlopen tot het strand van Port de Pollença. Goede kamers, rustige sfeer, een sterke eetscène in de buurt.",
   "andy": "Qua karakter een niveau boven Illa d'Or. Alcanada op 20 minuten, de oude stad van Pollença op 10. Een echt ontspannen uitvalsbasis in het noorden.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 8 min.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Port de Pollença"
  },
  "hotel-sis-pins": {
   "pills": [
    "Budgetvriendelijk",
    "Uitzicht op de baai",
    "Eenvoudig en schoon"
   ],
   "why": "Eerlijk, schoon hotel in de middenklasse direct aan de boulevard van Port de Pollença. Zonder opsmuk maar goede prijs-kwaliteit in een van de mooiste plaatsen van het noorden.",
   "andy": "Als het budget krap is en het noorden de regio, is dit het praktische antwoord. Golf Alcanada op 20 minuten, en de avonden zijn geregeld dankzij de eetscène van Pollença.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Port de Pollença"
  },
  "agrotourisme-son-palou": {
   "pills": [
    "Landelijke finca",
    "Bergdorp",
    "Complete rust"
   ],
   "why": "Traditionele agrotoerisme-finca in het piepkleine dorp Orient, omringd door de Tramuntana. Complete stilte, verse producten, echt landelijk Mallorca.",
   "andy": "Orient is een van de bijzonderste dorpen van het eiland. Voor golf moet u rijden, maar de ervaring hier is met geen enkel hotel te vergelijken. Het best te combineren met een paar rondes in Alcanada.",
   "golf": "Club de Golf Alcanada 30 min. Golf Pollença 20 min.",
   "travelTime": "35 min van de luchthaven van Palma",
   "subname": "Orient"
  },
  "north-villa": {
   "pills": [
    "Privévilla",
    "Eigen zwembad",
    "Baaien dichtbij"
   ],
   "why": "In de Pollença-vallei of aan de kust van Alcúdia zit u op 15 minuten van Alcanada. Een huurauto is noodzakelijk. Stranden en baaien in de buurt.",
   "andy": "Het noorden is rustiger en schilderachtiger dan het zuidwesten. Een villa in het noorden werkt goed als het om een echte vakantie met goed golf gaat in plaats van zoveel mogelijk rondes.",
   "golf": "Club de Golf Alcanada 15-20 min. Golf Pollença 10-15 min.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Omgeving Pollença / Alcúdia",
   "name": "Luxevilla, noord-Mallorca"
  },
  "bocchoris": {
   "pills": [
    "Aan de boulevard",
    "Budgetvriendelijk",
    "Klassiek"
   ],
   "why": "Eenvoudig, schoon hotel direct aan de boulevard van Port de Pollença. De beste prijs-kwaliteit aan de baai. Alcanada op 20 minuten, de oude stad van Pollença op 10.",
   "andy": "Niets bijzonders, alles praktisch. De boulevard is 's avonds prachtig. Goede optie voor groepen die op de kosten letten.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Port de Pollença"
  },
  "la-goleta": {
   "pills": [
    "Cala Sant Vicenç",
    "Middenklasse",
    "Toegang tot het strand"
   ],
   "why": "Hotel in de middenklasse in de mooie Cala de Sant Vicenç, dezelfde kleine baai als het vijfsterrenhotel El Vicenç. Een fractie van de prijs met hetzelfde strand en Alcanada op 20 minuten.",
   "andy": "Cala de Sant Vicenç is een van de mooiste plekjes in het noorden. La Goleta geeft u de locatie zonder het luxe prijskaartje.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "52 min van de luchthaven van Palma",
   "subname": "Cala de Sant Vicenç"
  },
  "north-villa-small": {
   "pills": [
    "Privévilla",
    "Middenklasse",
    "Pollença-vallei"
   ],
   "why": "Kleinere villa in de Pollença-vallei voor groepen van 3 tot 5 personen die hun eigen ruimte willen zonder de kosten van een groot pand. Zwembad, uitzicht op het platteland, 15 minuten naar Alcanada.",
   "andy": "De villamarkt in het noorden biedt goede prijs-kwaliteit vergeleken met het zuidwesten. Een woning met 4 slaapkamers kost hier aanzienlijk minder dan het equivalent in Santa Ponsa.",
   "golf": "Club de Golf Alcanada 15-20 min. Golf Pollença 10 min.",
   "travelTime": "48 min van de luchthaven van Palma",
   "subname": "Pollença-vallei",
   "name": "Villa, noord-Mallorca, kleine groep"
  },
  "can-simoneta": {
   "pills": [
    "Op de klif",
    "Spa",
    "Restaurant met zeezicht"
   ],
   "why": "Boutique-vijfsterrenhotel op de klif met een serieuze spa en Capdepera Golf op 5 minuten. Het hotel heeft een eigen restaurant met zeezicht.",
   "andy": "De rustigste optie aan de oostkust. Past bij stellen die privacy boven faciliteiten stellen.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.",
   "travelTime": "60 min van de luchthaven van Palma",
   "subname": "Canyamel"
  },
  "pleta-de-mar": {
   "pills": [
    "Ecoluxe",
    "2 infinity pools",
    "Privéstrand",
    "Restaurant Sa Pleta"
   ],
   "why": "Strandluxe aan de oostkust. Twee infinity pools, toegang tot een privéstrand en restaurant Sa Pleta by Marc Fosh op locatie. Capdepera Golf op 5 minuten.",
   "andy": "Het oosten wordt onderschat. Minder drukte, beter water, kwaliteitsbanen die vaak over het hoofd worden gezien. Sa Pleta by Marc Fosh is het eigen restaurant van het hotel.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.",
   "travelTime": "60 min van de luchthaven van Palma",
   "subname": "Canyamel"
  },
  "cases-son-barbassa": {
   "pills": [
    "Landelijke finca",
    "Privézwembad",
    "Capdepera Golf 5 min"
   ],
   "why": "Gerestaureerd landgoed op 5 minuten van Capdepera Golf. Privézwembad, lokale producten, een echt ongebaand-pad-gevoel met goed golf voor de deur.",
   "andy": "De finca-optie in het oosten. Geen strand, maar een geweldig zwembad, totale rust en een uitstekende golfbasis. Combineer met een avond bij VORO in de buurt.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 15 min. Club de Golf Pula 15 min.",
   "travelTime": "60 min van de luchthaven van Palma",
   "subname": "Capdepera"
  },
  "pula-resort": {
   "pills": [
    "Aan de baan",
    "Trackman-range",
    "Golfpakketten"
   ],
   "why": "Hotel direct op Pula Golf, met volledige oefenfaciliteiten, waaronder Trackman-technologie. Acht toernooien van de European Tour zijn hier gehouden. Een rechttoe-rechtaan golfbasis.",
   "andy": "Als Pula op het programma staat en de groep alles op één plek wil, is dit het antwoord. De oefenfaciliteiten behoren tot de beste van Mallorca.",
   "golf": "Pula Golf op locatie. Golf Club Son Servera 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "60 min van de luchthaven van Palma",
   "subname": "Son Servera"
  },
  "sa-bassa-rotja": {
   "pills": [
    "Wijngoed",
    "Biologische spa",
    "Platteland"
   ],
   "why": "Boutiquehotel op een werkend wijnlandgoed in het binnenland van Mallorca. Biologische spa, wijnen van het landgoed, echte landelijke rust. Geen standaard strand- of golfresort.",
   "andy": "Een ander soort verblijf. Voor stellen die het binnenland van Mallorca willen en bereid zijn 25 tot 30 minuten te rijden naar de banen aan de oostkust.",
   "golf": "Vall d'Or Golf 25 min. Club de Golf Pula 25 min. Golf Club Son Servera 30 min.",
   "travelTime": "35 min van de luchthaven van Palma",
   "subname": "Porreres"
  },
  "son-gener": {
   "pills": [
    "Alleen volwassenen",
    "Zwembadterras",
    "Landelijk oosten"
   ],
   "why": "Boutiquefinca alleen voor volwassenen in Son Servera met een rustig zwembadterras en goede spafaciliteiten. Golf Club Son Servera op korte rijafstand, Pula op 10 minuten.",
   "andy": "Een rustigere, intiemere optie dan de grotere resorts aan de oostkust. Past bij stellen die platteland en golf willen zonder de drukte van een strandresort.",
   "golf": "Golf Club Son Servera 10 min. Club de Golf Pula 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "55 min van de luchthaven van Palma",
   "subname": "Son Servera"
  },
  "east-villa": {
   "pills": [
    "Privévilla",
    "Rustige baaien",
    "Goede prijs-kwaliteit"
   ],
   "why": "Gezinnen of groepen die rustige baaien willen en makkelijke toegang tot Vall d'Or en Pula. De oostkust heeft de rustigste gezinsstranden van het eiland.",
   "andy": "Het oosten wordt onderschat voor een golfreis. Minder drukte, beter water, vijf banen die niet de aandacht krijgen die ze verdienen.",
   "golf": "Capdepera Golf 15-20 min. Canyamel Golf 15 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 20 min.",
   "travelTime": "55-65 min van de luchthaven van Palma",
   "subname": "Omgeving Cala d'Or / Porto Cristo",
   "name": "Luxevilla, oost-Mallorca"
  },
  "son-moll-sentits": {
   "pills": [
    "Alleen volwassenen",
    "Spa op het dak",
    "Stadje Capdepera"
   ],
   "why": "Boutiquehotel alleen voor volwassenen in de oude stad van Capdepera met een dakspa en zwembad. Een rustigere, intiemere optie dan de kustresorts, en Capdepera Golf is 5 minuten.",
   "andy": "Een van de kleinste en meest karaktervolle opties aan de oostkust. Past bij stellen die stad en golf boven het strand verkiezen.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min.",
   "travelTime": "60 min van de luchthaven van Palma",
   "subname": "Capdepera"
  },
  "hotel-cala-ratjada": {
   "pills": [
    "Strandresort",
    "Cala Ratjada",
    "Middenklasse"
   ],
   "why": "Solide hotel in de middenklasse in het vissersstadje Cala Ratjada, een van de meest karaktervolle plaatsen aan de oostkust. Capdepera Golf op 10 minuten, goede visrestaurants aan de haven.",
   "andy": "Cala Ratjada heeft een echt stadsgevoel dat de grotere resortgebieden missen. Avondwandelingen langs de haven, goede lokale bars. Golf domineert niet alles.",
   "golf": "Capdepera Golf 10 min. Canyamel Golf 15 min. Club de Golf Pula 20 min.",
   "travelTime": "62 min van de luchthaven van Palma",
   "subname": "Cala Ratjada"
  },
  "protur-biomar": {
   "pills": [
    "Groot resort",
    "Strand",
    "Gezinszwembaden",
    "Volwassenenzone"
   ],
   "why": "Groot premiumresort aan het strand van Sa Coma met een eigen volwassenenzone en een gezinszone. Goede spa en meerdere zwembaden. Pula Golf op 10 minuten.",
   "andy": "Een van de capabelere resorts aan de oostkust voor groepen waarin sommigen willen golfen en anderen de hele dag strand en zwembaden willen.",
   "golf": "Club de Golf Pula 10 min. Golf Club Son Servera 12 min. Capdepera Golf 20 min.",
   "travelTime": "58 min van de luchthaven van Palma",
   "subname": "Sa Coma"
  },
  "east-villa-small": {
   "pills": [
    "Privévilla",
    "Landelijk oosten",
    "Goede prijs-kwaliteit"
   ],
   "why": "Kleinere villa aan de oostkust voor groepen van 3 tot 5 personen. De omgeving van Artà en Son Servera biedt echt landelijk Mallorca tegen een lagere prijs dan het zuidwesten, met 4 banen binnen 20 minuten.",
   "andy": "De villamarkt aan de oostkust wordt onderschat en is laag geprijsd. Als de groep de langere rit vanaf de luchthaven niet erg vindt, krijgt u hier veel meer waar voor uw geld.",
   "golf": "Club de Golf Pula 15 min. Golf Club Son Servera 15 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "55 min van de luchthaven van Palma",
   "subname": "Omgeving Artà / Son Servera",
   "name": "Villa, oost-Mallorca, kleine groep"
  },
  "el-llorenc": {
   "pills": [
    "Stadsboutique",
    "Michelin-keuken",
    "Dakzwembad"
   ],
   "why": "Designkamers, dakzwembad en Santi Taura (één Michelinster). Voor golf moet u rijden, maar de avonden in Palma maken dat ruimschoots goed.",
   "andy": "Het dakzwembad bij schemering en daarna een diner is een sterke avond in Palma. Son Gual is 20 minuten voor een ochtendronde.",
   "golf": "Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min. Golf Maioris 30 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Oude stad van Palma"
  },
  "santos-nixe": {
   "pills": [
    "Strand",
    "Spa",
    "Viersterren met goede prijs"
   ],
   "why": "Praktisch, goed gelegen viersterrenhotel met echte toegang tot het strand en een echte spa. Vergelijkbare toegang tot golf als de vijfsterrenhotels in Illetas, tegen een lagere prijs.",
   "andy": "Een verstandige keuze voor stellen of kleine groepen die strand en spa willen zonder het prijskaartje van ultraluxe. Bendinat op 15 minuten.",
   "golf": "Real Golf de Bendinat 15 min. T Golf Calvià 20 min. Son Vida / Son Quint / Son Muntaner 15 min. Son Gual 20 min.",
   "travelTime": "12 min van de luchthaven van Palma",
   "subname": "Cala Major, Palma"
  },
  "born-hotel": {
   "pills": [
    "Paleis in Palma",
    "Terras op de binnenplaats",
    "Oude stad"
   ],
   "why": "Een paleis uit de negentiende eeuw aan Carrer Born, de meest trendy straat van Palma. Sierlijke binnenplaats, uitstekende locatie voor de oude stad, de kathedraal en de restaurants.",
   "andy": "Het Born plaatst u midden in de avonden van Palma. Son Gual op 20 minuten voor een vroege ochtendronde, daarna terug voor een lange lunch.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 20 min. Son Vida / Son Quint / Son Muntaner 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Oude stad van Palma"
  },
  "nakar-hotel": {
   "pills": [
    "Dakzwembad",
    "Designkamers",
    "Stadscentrum"
   ],
   "why": "Modern designhotel in het centrum van Palma met een sterk dakzwembad en bar. Jongere sfeer dan de paleishotels in de oude stad. Goed gelegen voor de Passeig des Born.",
   "andy": "Voor de groep die het nachtleven van Palma wil zonder te ver van golf te zitten. Son Gual is hoogstens 20 minuten.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min. Real Golf de Bendinat 18 min.",
   "travelTime": "18 min van de luchthaven van Palma",
   "subname": "Palma"
  },
  "palacio-ca-sa-galesa": {
   "pills": [
    "Ultraluxe",
    "12 kamers",
    "Uitzicht op de kathedraal"
   ],
   "why": "Ultraluxe hotel met twaalf kamers in het hart van de oude stad van Palma, met uitzicht op de kathedraal. Een van de meest intieme en bijzondere hotels van de stad. Binnenzwembad en spa.",
   "andy": "De meest exclusieve optie in Palma. Diners op het terras met uitzicht op La Seu. Son Gual op 20 minuten voor de ochtendronde.",
   "golf": "Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Oude stad van Palma"
  },
  "portixol": {
   "pills": [
    "Buurtgevoel",
    "Beste vis van Palma",
    "Rustig"
   ],
   "why": "Dorpsgevoel in Portixol met enkele van de beste visrestaurants van Mallorca. Es Mollet op 5 minuten lopen. Voor golf moet u rijden.",
   "andy": "Een rustigere optie in Palma. Gebruik het als avondbasis. Son Gual is 25 minuten voor een ochtendronde.",
   "golf": "Son Gual 25 min. Son Vida / Son Quint 20 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Portixol, Palma"
  },
  "convent-missio": {
   "pills": [
    "Designhotel",
    "Oude stad van Palma",
    "Dakterras"
   ],
   "why": "Designkamers, dakterras en een van de beste eetgelegenheden van Palma. Voor golfers die tussen de rondes de stad willen beleven.",
   "andy": "De oude stad is 10 minuten lopen. Meerdere bekroonde restaurants op loopafstand.",
   "golf": "Son Gual 25 min. Son Vida / Son Quint / Son Muntaner 20 min. T Golf Palma (Puntiró) 15 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Oude stad van Palma"
  },
  "innside-palma": {
   "pills": [
    "Modern viersterren",
    "Uitzicht op de baai",
    "Goede prijs-kwaliteit"
   ],
   "why": "Modern viersterrenhotel met uitzicht op de baai en een goede centrale ligging in Palma. Niets extra's boven het basale, maar goed geprijsd en praktisch voor groepen die een stadsbasis willen zonder boutiqueprijzen.",
   "andy": "Een nuchtere uitvalsbasis in Palma. Goed voor zakelijke groepen. Son Gual op 20 minuten voor de rondes.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Palma"
  },
  "brondo-architect": {
   "pills": [
    "Boutique",
    "Design",
    "Locatie in de oude stad"
   ],
   "why": "Klein designgericht hotel in de oude stad van Palma, op loopafstand van de belangrijkste restaurants, de kathedraal en het museum Es Baluard.",
   "andy": "De betaalbare boutiqueoptie in Palma. Niet de luxe van Palacio Ca Sa Galesa, maar de locatie is hetzelfde en het karakter is echt.",
   "golf": "Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Oude stad van Palma"
  },
  "hostal-cuba": {
   "pills": [
    "Budgetboutique",
    "Santa Catalina",
    "Beste buurt van Palma"
   ],
   "why": "Karaktervol budgetboutiquehotel in Santa Catalina, de beste wijk van Palma voor bars en restaurants. De hostal bestaat al tientallen jaren en heeft zijn eigen persoonlijkheid.",
   "andy": "In Santa Catalina eten de lokale bewoners. Niet de oude stad voor toeristen, maar de echte eetscène van Palma. Son Gual op 20 minuten voor golf 's ochtends.",
   "golf": "Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Son Vida 18 min.",
   "travelTime": "15 min van de luchthaven van Palma",
   "subname": "Santa Catalina, Palma"
  },
  "hotel-saratoga": {
   "pills": [
    "Dakzwembad",
    "Centrum van Palma",
    "Klassiek viersterren"
   ],
   "why": "Klassiek viersterrenhotel in het centrum van Palma met een dakzwembad met uitzicht over de baai. Goed gelegen voor zowel de oude stad als de hoofdboulevard. Goede optie voor zakelijke groepen.",
   "andy": "Betrouwbaar, centraal, verstandig. Een van de meest gebruikte uitvalsbases in Palma voor golfgroepen. Son Gual is 20 minuten.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 16 min. Real Golf de Bendinat 20 min.",
   "travelTime": "18 min van de luchthaven van Palma",
   "subname": "Centrum van Palma"
  },
  "palma-villa-small": {
   "pills": [
    "Privévilla",
    "Uitzicht op Palma",
    "Son Vida dichtbij"
   ],
   "why": "Privévilla in de heuvels van Génova of Son Vida met uitzicht op de baai van Palma. De banen van het landgoed Son Vida zijn 10 minuten, de stad 15. Een goed compromis voor groepen die onafhankelijkheid en makkelijk golf willen.",
   "andy": "Villa's in de omgeving van Son Vida worden te weinig gebruikt door golfgroepen. U krijgt privacy, uitzicht en drie banen binnen 10 minuten.",
   "golf": "Son Vida / Son Quint / Son Muntaner 10 min. T Golf Calvià 20 min. Real Golf de Bendinat 15 min.",
   "travelTime": "20 min van de luchthaven van Palma",
   "subname": "Omgeving Génova / Son Vida",
   "name": "Villa, omgeving Palma, kleine groep"
  },
  "jumeirah-port-soller": {
   "pills": [
    "Ultraluxe",
    "Op de klif",
    "Hammam-spa",
    "Uitzicht op de Tramuntana"
   ],
   "why": "Gelegen op de kliffen boven Port de Sóller. Uitzicht van 180 graden over de Middellandse Zee, hammamspa en de Tramuntana voor de deur.",
   "andy": "Geen basis waar golf voorop staat. Een van de visueel meest spectaculaire hotels van het eiland. Goed als Tramuntana-ervaring van 2 nachten naast het golf.",
   "golf": "Golf is vanaf hier een geplande dagtrip. Reken afhankelijk van de starttijden op ritten over bergwegen naar Son Termes, Golf de Andratx, Alcanada of Pollença.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Port de Sóller"
  },
  "la-residencia": {
   "pills": [
    "Belmond",
    "Deià",
    "Historisch landhuis"
   ],
   "why": "Twee stenen landhuizen uit de zestiende eeuw boven Deià. Het meest gevierde boutiquehotel van het eiland. David Bowie, Robert Graves en prinses Diana verbleven hier.",
   "andy": "Geen basis voor een golfreis. Een van de beste hotels van Spanje. Werkt goed als 2 nachten in het noordwesten voordat u voor de rondes naar het zuidwesten gaat.",
   "golf": "Golfrondes moeten worden gepland als uitstappen van een hele dag. Son Termes, Golf de Andratx, Alcanada en Pollença kunnen allemaal logisch zijn, afhankelijk van de exacte route.",
   "travelTime": "60 min van de luchthaven van Palma",
   "subname": "Een Belmond-hotel, Deià"
  },
  "cas-xorc": {
   "pills": [
    "Finca",
    "Infinity pool",
    "Afgelegen"
   ],
   "why": "Verbouwde boerderij aan de weg tussen Sóller en Deià. Infinity pool, keuken met eigen oogst, uitzicht op zee in de verte. Erg afgelegen, een auto is noodzakelijk.",
   "andy": "Een van de meest romantische plekken van het eiland. Niet de basis voor een golfreis, maar het juiste antwoord als iemand de Tramuntana-ervaring wil met een of twee rondes erbij.",
   "golf": "Golf is mogelijk, maar het is een uitstap en geen snel tochtje. Maak de baanselectie nadat u het exacte hotel of de villa hebt gekozen.",
   "travelTime": "50 min van de luchthaven van Palma",
   "subname": "Sóller"
  },
  "es-moli": {
   "pills": [
    "Klassieke Tramuntana",
    "Terraszwembaden",
    "Open mrt-nov"
   ],
   "why": "Klassiek Mallorca zonder de prijs van Belmond. Meerdere terraszwembaden uitgehouwen in de klif, met uitzicht over dal en zee. Open van maart tot november.",
   "andy": "Plan 2 nachten in het noordwesten voor het landschap en verhuis daarna naar het zuidwesten of het noorden voor eenvoudiger golflogistiek.",
   "golf": "Golf plant u vanuit Deià het best als een hele dag. De juiste baan hangt ervan af of de dag richting het zuidwesten, Palma of het noorden gaat.",
   "travelTime": "55 min van de luchthaven van Palma",
   "subname": "Deià"
  },
  "hotel-hermitage": {
   "pills": [
    "Bergdorp",
    "Zwembad",
    "Totale rust"
   ],
   "why": "Verscholen in het piepkleine bergdorp Orient in het hart van de Tramuntana. Zwembad, spa en complete rust. Het dorp heeft minder dan 50 inwoners.",
   "andy": "Voor het stel dat wil verdwijnen. Orient is de meest verborgen hoek van het eiland. Golf is mogelijk, maar vraagt om een bewuste route in plaats van een spontane lokale starttijd.",
   "golf": "Kies de baan op basis van de dagroute vanuit Orient. Golf de Andratx, Son Termes, Alcanada of Pollença kunnen elk logisch zijn, afhankelijk van de reisroute.",
   "travelTime": "30 min van de luchthaven van Palma",
   "subname": "Orient"
  },
  "gran-hotel-soller": {
   "pills": [
    "Dorp Sóller",
    "Klassiek viersterren",
    "Sinaasappelgaarden"
   ],
   "why": "Viersterrenhotel in het centrum van Sóller, een van de charmantste plaatsen van Mallorca. De sinaasappelmarkt, de historische tram naar Port de Sóller en goede restaurants voor de deur.",
   "andy": "Een toegankelijker prijsniveau voor het noordwesten. Voor groepen die de Sóller-ervaring willen zonder de prijzen van het Jumeirah. Golf moet rond de rit worden gepland.",
   "golf": "Golf is vanuit Sóller een dagtrip en geen banengroep in de buurt. Son Termes, Golf de Andratx, Alcanada of Pollença kunnen passen, afhankelijk van de bredere reisroute.",
   "travelTime": "35 min van de luchthaven van Palma",
   "subname": "Sóller"
  },
  "can-verdera": {
   "pills": [
    "Stenen dorp",
    "Dakterras",
    "Uitzicht op Fornalutx"
   ],
   "why": "Klein boutiquehotel in Fornalutx, herhaaldelijk uitgeroepen tot een van de mooiste dorpen van Spanje. Van steen gebouwd, dakterras, uitzonderlijk uitzicht op de bergen.",
   "andy": "Fornalutx is het meest gefotografeerde dorp van Mallorca. Een heel andere ervaring dan elk strandhotel. Naar golf is het een lange rit, maar de omgeving is het voor 2 nachten waard.",
   "golf": "Golf vanuit Fornalutx is een echte dagtrip. Kies de baan nadat u hebt besloten of de dag richting Palma, het zuidwesten of het noorden gaat.",
   "travelTime": "40 min van de luchthaven van Palma",
   "subname": "Fornalutx"
  },
  "northwest-villa": {
   "pills": [
    "Privévilla",
    "Uitzicht op de bergen",
    "Tramuntana"
   ],
   "why": "Een villa in het noordwesten biedt totale privacy in het meest dramatische landschap van het eiland. Privézwembad, uitzicht op de bergen, olijf- en citroenbomen. Golf is een uitstapje, geen dagelijkse rit.",
   "andy": "Alleen aan te raden aan groepen die echt gewend zijn aan de rit. De juiste insteek: eerst de Tramuntana-ervaring, daarna golf.",
   "golf": "Golf de Andratx 45-55 min via bergwegen. Plan golfuitstappen van een hele dag.",
   "travelTime": "35-50 min van de luchthaven van Palma",
   "subname": "Omgeving Sóller / Valldemossa",
   "name": "Luxevilla, noordwesten"
  },
  "costa-dor": {
   "pills": [
    "Strand in een baai",
    "Olijfgaard",
    "Deià dichtbij"
   ],
   "why": "Klein hotel verscholen in een olijfgaard boven een privébaai tussen Deià en Valldemossa. Een van de meest afgelegen plekken van het eiland tegen een redelijke prijs.",
   "andy": "Het betaalbare alternatief voor La Residencia. Hetzelfde gebied rond Deià, dezelfde dramatische kust, aanzienlijk lagere prijs. Open van april tot oktober.",
   "golf": "Golf vanuit dit deel van Deià vraagt om een geplande dagroute. Son Termes, Golf de Andratx, Alcanada of Pollença kunnen allemaal passen, afhankelijk van het bredere plan.",
   "travelTime": "55 min van de luchthaven van Palma",
   "subname": "Lluc Alcari, bij Deià"
  },
  "hotel-marina-soller": {
   "pills": [
    "Port de Sóller",
    "Budget",
    "Toegang tot het strand"
   ],
   "why": "Driesterren-budgethotel aan de baai van Port de Sóller. De sinaasappeltram vanuit Sóller is een van de leukste ervaringen op Mallorca. Golf is een dagtrip en geen banengroep in de buurt.",
   "andy": "Het betaalbare antwoord voor het noordwesten. Port de Sóller is een prachtige baai om naast wakker te worden. Combineer een of twee geplande golfdagen met echte tijd in de Tramuntana.",
   "golf": "Plan golf als dagtrip vanuit Port de Sóller. De beste baankeuze hangt ervan af of de dag richting Palma, het zuidwesten of het noorden gaat.",
   "travelTime": "45 min van de luchthaven van Palma",
   "subname": "Port de Sóller"
  }
 },
 "questions": {
  "area": {
   "title": "In welk deel van Mallorca bent u van plan te golfen?",
   "sub": "Dit bepaalt welke banengroepen u gemakkelijk bereikt. Als u het niet zeker weet, kies dan het zuidwesten: daar zijn de meeste banen.",
   "opts": {
    "southwest": {
     "label": "Zuidwest-Mallorca",
     "desc": "Andratx, Santa Ponsa, Bendinat, Calvià. De belangrijkste golfgroep: 4 tot 5 banen binnen 15 minuten. Beste uitvalsbasis voor een golfintensieve reis."
    },
    "north": {
     "label": "Noord-Mallorca",
     "desc": "Alcúdia, Pollença, Formentor. Alcanada is een van de beste banen van het eiland. Minder rondes beschikbaar, maar een mooiere, ontspannen uitvalsbasis."
    },
    "east": {
     "label": "Oost-Mallorca",
     "desc": "Capdepera, Canyamel, Pula, Son Servera, Vall d'Or. Rustiger, geweldige stranden, onderschatte banen. Goed voor gezinnen of wie rust boven gemak stelt."
    },
    "palma": {
     "label": "Bij Palma",
     "desc": "Gebruik Palma als avondbasis. Son Gual, Son Vida, Son Muntaner en Bendinat allemaal binnen 20 minuten. Goed als stadsrestaurants en uitgaansleven net zo belangrijk zijn als golf."
    },
    "northwest": {
     "label": "Noordwesten: Tramuntana-ervaring",
     "desc": "Sóller, Deià, Valldemossa. Spectaculair landschap, maar golf wordt een geplande dagtrip in plaats van een snelle lokale ronde. Het best als toevoeging van 2 nachten aan een ander gebied."
    }
   }
  },
  "priority": {
   "title": "Wat is het belangrijkst naast het golfen?",
   "sub": "Kies alles wat van toepassing is: wat wil de groep tussen de rondes?",
   "opts": {
    "golf-focused": {
     "label": "Zo dicht mogelijk bij de banen",
     "desc": "Op of naast een baan, makkelijke vroege starttijden, niets wat de rondes in de weg zit."
    },
    "beach": {
     "label": "Strand- en zwembadtijd na het golfen",
     "desc": "Herstellen aan zee of aan het zwembad na de ronde is net zo belangrijk als de ronde zelf."
    },
    "spa": {
     "label": "Spa en wellnessherstel",
     "desc": "Een echte spa voor benen en rug na meerdere rondes. Behandelingen, stoom, zwembad."
    },
    "dining": {
     "label": "Goed eten en avonden uit",
     "desc": "Restaurants, wijn, lokale markten. De avonden zijn net zo belangrijk als de dagen."
    },
    "privacy": {
     "label": "Privacy en ruimte: onze eigen plek",
     "desc": "Eigen zwembad, eigen schema, geen hoteltijden. Een villa waar de groep kan doen wat ze wil."
    }
   }
  },
  "group": {
   "title": "Wie reist er mee?",
   "sub": "Helpt bij het vinden van de juiste sfeer en faciliteiten.",
   "opts": {
    "couple": {
     "label": "Stel"
    },
    "friends": {
     "label": "Groep vrienden"
    },
    "family": {
     "label": "Gezin met kinderen"
    },
    "solo": {
     "label": "Alleen reizen"
    },
    "corporate": {
     "label": "Bedrijfsgroep"
    }
   }
  },
  "size": {
   "title": "Hoeveel personen in totaal?",
   "sub": "Bepaalt of een villa meer zin heeft dan een hotel.",
   "opts": {
    "1-2": {
     "label": "1 of 2"
    },
    "3-5": {
     "label": "3 tot 5"
    },
    "6-9": {
     "label": "6 tot 9"
    },
    "10+": {
     "label": "10 of meer"
    }
   }
  },
  "style": {
   "title": "Wat voor soort verblijf voelt goed?",
   "sub": "Het gaat niet om het budget, maar om het karakter.",
   "opts": {
    "boutique": {
     "label": "Boutique en intiem",
     "desc": "Klein, karaktervol, persoonlijke service. Na een dag kent u het personeel bij naam."
    },
    "resort": {
     "label": "Volledig resort met alle faciliteiten",
     "desc": "Meerdere zwembaden, restaurants, een spa, activiteiten. Alles op één plek."
    },
    "classic": {
     "label": "Klassiek en gevestigd",
     "desc": "Een echt hotel, betrouwbare service, geen Instagram-trucjes. Staat op eigen benen."
    },
    "villa": {
     "label": "Privévilla",
     "desc": "Eigen zwembad, eigen keuken, eigen schema. Geen hotellobby, geen uitchecktijd."
    },
    "countryside": {
     "label": "Finca op het platteland of landelijke retraite",
     "desc": "Verbouwde boerderij, olijfgaarden, rust. Het eiland weg van de kust."
    }
   }
  },
  "budget": {
   "title": "Wat is het globale budget per kamer per nacht?",
   "sub": "In het hoogseizoen (juni tot september). Helpt om realistische opties te filteren.",
   "opts": {
    "mid": {
     "label": "Tot € 250 per kamer",
     "desc": "Viersterren in de middenklasse. Goede ligging, comfortabel, niets extravagants."
    },
    "premium": {
     "label": "€ 250 tot € 500 per kamer",
     "desc": "Premium vier- of vijfsterren. Echte spa, kwaliteitsrestaurant, merkbaar beter."
    },
    "ultra": {
     "label": "€ 500 of meer per kamer",
     "desc": "Ultraluxe. Four Seasons, Belmond, Jumeirah. Het beste dat het eiland heeft."
    },
    "flexible": {
     "label": "Flexibel: toon me de beste optie",
     "desc": "Niet beperkt door de prijs. Toon me wat echt het best past."
    }
   }
  }
 }
}

export default data
