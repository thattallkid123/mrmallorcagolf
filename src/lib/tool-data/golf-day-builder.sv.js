// golf-day-builder copy for 'sv'. Generated overlay: the English master is in
// golf-day-builder-logic.js (COURSES, RESTAURANTS, ADDONS, QUESTIONS) and EN_PLAN in golf-day-builder-localize.js.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "stepFmt": "Steg {n} av {total} · {section}",
 "sections": {
  "region": "Plats",
  "dayStyle": "Dagens stil",
  "level": "Golfnivå",
  "start": "Starttid",
  "courseType": "Banans typ",
  "addons": "Utöver golfen",
  "transport": "Transport",
  "group": "Ditt sällskap"
 },
 "teeWindows": {
  "early": "8:00 till 9:00",
  "mid": "10:00 till 11:00",
  "pm": "13:30 till 14:30"
 },
 "factLabels": {
  "par": "Par",
  "nineHoles": "9 hål",
  "hotelOnly": "Endast hotellgäster",
  "noHandicap": "Inget handicap krävs",
  "handicapRequired": "Handicap krävs",
  "certificate": " + bevis"
 },
 "built": {
  "line": "Byggd för {group}, {region}.",
  "groups": {
   "solo": "en soloresenär",
   "couple": "ett par",
   "friends": "en grupp vänner",
   "family": "en familj",
   "vip": "en vip- eller företagsgrupp"
  },
  "regions": {
   "southwest": "som bor i sydväst",
   "palma": "som bor i eller nära Palma",
   "north": "som bor i norr",
   "east": "som bor i öster",
   "south": "som bor i söder",
   "unbooked": "som bor där det passar golfen bäst"
  }
 },
 "questions": {
  "region": {
   "title": "Var bor du?",
   "sub": "Planen byggs runt din bas.",
   "opts": {
    "southwest": [
     "Sydväst",
     "Santa Ponsa, Andratx, Bendinat, Calvià"
    ],
    "palma": [
     "Palma med omnejd",
     "Palma stad, Son Vida, centrala ön"
    ],
    "north": [
     "Norr",
     "Alcúdia, Pollença, vikarna"
    ],
    "east": [
     "Öst",
     "Cala Millor, Canyamel, Artà"
    ],
    "south": [
     "Syd",
     "Llucmajor, flygplatsområdet, Son Antem"
    ],
    "unbooked": [
     "Inte bokat än",
     "Vi föreslår den bästa golfbasen åt dig"
    ]
   }
  },
  "dayStyle": {
   "title": "Vilken sorts dag vill du ha?",
   "sub": "Välj det som låter mest som du.",
   "opts": {
    "serious": [
     "Seriös golf",
     "Rundan är huvudnumret"
    ],
    "relaxed": [
     "Avslappnad golf",
     "Bra golf utan press"
    ],
    "luxury": [
     "Lyx",
     "Det bästa av allt, ordnat"
    ],
    "family": [
     "Familjedag",
     "Golf plus något för alla"
    ],
    "scenic": [
     "Naturskönt",
     "Utsikten först, resultatet sedan"
    ],
    "food": [
     "Maten först",
     "Golf byggd runt en riktigt bra lunch"
    ]
   }
  },
  "level": {
   "title": "Hur skulle du beskriva ditt golfspel?",
   "sub": "Ärliga svar ger bättre dagar.",
   "opts": {
    "beginner": [
     "Nybörjare",
     "Ny i spelet eller på väg tillbaka"
    ],
    "casual": [
     "Hobbyspelare",
     "Några rundor per år"
    ],
    "confident": [
     "Van",
     "Regelbunden golfare, mellanhandicap"
    ],
    "low": [
     "Lågt handicap",
     "Ensiffrigt, ta fram den riktiga utmaningen"
    ]
   }
  },
  "start": {
   "title": "När vill du starta?",
   "sub": "",
   "opts": {
    "early": [
     "Tidigt på morgonen",
     "Först ut, och dagen är din efteråt"
    ],
    "mid": [
     "Förmiddag",
     "En civiliserad start med en hel dag efter"
    ],
    "pm": [
     "Eftermiddag",
     "Lugn morgon, golf i kvällsljus"
    ]
   }
  },
  "courseType": {
   "title": "Vad är viktigast med banan?",
   "sub": "",
   "opts": {
    "famous": [
     "Ett känt namn",
     "Banorna som alla frågar efter"
    ],
    "scenic": [
     "Natur",
     "Havsutsikt, berg, höjdskillnader"
    ],
    "challenging": [
     "Ett riktigt test",
     "En bana som ställer frågor"
    ],
    "forgiving": [
     "Förlåtande",
     "Bred, vänlig och rolig"
    ],
    "close": [
     "Nära mitt hotell",
     "Så lite tid i bilen som möjligt"
    ]
   }
  },
  "addons": {
   "title": "Vad skulle avrunda dagen?",
   "sub": "Välj det som lockar, eller inget",
   "opts": {
    "lunch": [
     "Lång lunch",
     "Ett riktigt mallorkinskt bord"
    ],
    "beach": [
     "Strand",
     "Ett dopp efter rundan"
    ],
    "spa": [
     "Spa",
     "Återhämtning på riktigt"
    ],
    "village": [
     "Lokal by",
     "En timme i en historisk stad"
    ],
    "wine": [
     "Vin",
     "Ett bodegabesök eller en provsmakning"
    ],
    "family": [
     "Familjeaktivitet",
     "Något för dem som inte spelar"
    ],
    "coaching": [
     "Coaching med mig",
     "Pass med en PGA Advanced Professional"
    ]
   }
  },
  "transport": {
   "title": "Behöver du transport ordnad?",
   "sub": "",
   "opts": {
    "yes": [
     "Ja, ordna det",
     "Chaufför eller transfers, dörr till dörr"
    ],
    "no": [
     "Nej, vi kör själva",
     "Hyrbil eller egen bil"
    ]
   }
  },
  "group": {
   "title": "Vem kommer?",
   "sub": "",
   "opts": {
    "solo": [
     "Bara jag",
     "Solo golf, full fokus"
    ],
    "couple": [
     "Ett par",
     "Ni två"
    ],
    "friends": [
     "Vänner",
     "En liten gruppresa"
    ],
    "family": [
     "Familj",
     "Blandade åldrar och intressen"
    ],
    "vip": [
     "Vip eller företag",
     "Ta emot kunder eller fira ett tillfälle"
    ]
   }
  }
 },
 "courses": {
  "son-gual": {
   "facts": [
    "Par 72 · Mästerskapsbana",
    "Thomas Himmel, 2007"
   ],
   "blurb": "Öns bästa skick och en bana som testar varje del av ditt spel. Bred nog att njuta av, krävande nog att minnas. Observera att handicapbevis krävs."
  },
  "alcanada": {
   "facts": [
    "Par 72 · Robert Trent Jones Jr.",
    "58 bunkrar"
   ],
   "blurb": "Havsutsikt under det mesta av rundan och en Robert Trent Jones Jr.-design som klarar sig bra även utan den. De 58 bunkrarna ligger så att de är i spel, så räkna med att använda din sandwedge."
  },
  "t-golf-palma": {
   "facts": [
    "Par 71 · Jack Nicklaus-design",
    "Enda Nicklaus-banan på Mallorca"
   ],
   "blurb": "En Jack Nicklaus-design tjugo minuter från Palma. Fast, strategisk och ärlig: bra slag belönas och dåliga straffas i proportion."
  },
  "son-muntaner": {
   "facts": [
    "Par 72 · Bäst i Spanien 2025",
    "Olivträdet Sa Capitana, hål 15"
   ],
   "blurb": "Flaggskeppet bland Arabella-banorna och den mest polerade klubbupplevelsen nära Palma. Banans skick och servicen är dragplåstren här, och båda levererar."
  },
  "santa-ponsa": {
   "facts": [
    "Par 72 · Öns längsta",
    "Värd för European Tour 2021"
   ],
   "blurb": "Breda fairways och ett avslappnat tempo i sydväst. Längden ser skrämmande ut på kortet, men bredden gör banan spelbar för de flesta nivåer."
  },
  "andratx": {
   "facts": [
    "Par 72 · David Kidd, 1999",
    "Spaniens längsta par 5 (609 m)"
   ],
   "blurb": "Dramatiska höjdskillnader genom kullarna ovanför Camp de Mar. Utsikten är rubriken, men de snäva linjerna och sluttande lägen gör banan svårare än kortet antyder."
  },
  "son-vida": {
   "facts": [
    "Par 70 · Grundad 1964 · Mallorcas äldsta",
    "Seve vann här 1990"
   ],
   "blurb": "Mallorcas äldsta bana, som bär sin historia väl. Kort med moderna mått mätt, charmig genom hela rundan och ett förnuftigt val när dagen handlar om mer än resultatet."
  },
  "bendinat": {
   "facts": [
    "Par 70 · Martin Hawtree, 1986",
    "5 660 m"
   ],
   "blurb": "Trång, vacker och gömd bland tallar med glimtar av havet från de högre hålen. En kortare, social runda som passar en halvdagsplan. Låt drivern ligga kvar i bagen på flera tees."
  },
  "capdepera": {
   "facts": [
    "Par 73 · Dan Maples",
    "Hål 15 utsett till Mallorcas bästa"
   ],
   "blurb": "Golf i böljande landsbygd i det lugna östra Mallorca, oftast inte trångt ens under säsong. Vänlig från tee, med tillräcklig variation för att hålla bättre spelare intresserade."
  },
  "canyamel": {
   "facts": [
    "Par 73 · José Gancedo",
    "Stenkoja på hål 9, unik på Mallorca"
   ],
   "blurb": "En dalbana nära kusten som få besökare planerar för och som de flesta är glada att ha spelat. Stilla krävande, särskilt approachslagen mot sluttande greener."
  },
  "pula": {
   "facts": [
    "Par 72 · Olazábals omdesign",
    "Range på två nivåer · TrackMan Range"
   ],
   "blurb": "En välkomnande bana på östkusten med ett seriöst tävlingsförflutet, omritad av José María Olazábal. Generös där det räknas och välskött året runt."
  },
  "son-servera": {
   "facts": [
    "Par 72 · Grundad 1967 · Mallorcas näst äldsta",
    "Kustnära parkland"
   ],
   "blurb": "Klassisk tallkantad parkland vid havet och en av öns äldsta klubbar. Lugn, traditionell och ett rättvist test utan dramatik."
  },
  "son-antem-west": {
   "facts": [
    "Par 72 · Francisco Lopez Segales, 1995",
    "25 min från Palma"
   ],
   "blurb": "Golf i öppen landsbygd nära Llucmajor, 15 minuter från Palma och 25 från flygplatsen. Generösa fairways och en platt bana gör den tillgänglig för de flesta nivåer."
  },
  "son-termes": {
   "facts": [
    "Par 70 · Grupo Harris, 1998",
    "Bergsutsikt över Palma"
   ],
   "blurb": "Berggolf vid foten av Tramuntana, 25 minuter från Palma. Klara dagar syns Castell de Bellver och katedralen från de övre hålen, med Medelhavet bakom."
  },
  "t-golf-calvia": {
   "facts": [
    "Par 72 · 15 sjöar",
    "Värd för Mallorca Open"
   ],
   "blurb": "Ombyggd efter en renovering för 10 miljoner euro, känns T Golf Calvià polerad från ankomst till avslut. Breda utslagslinjer, 15 sjöar i spel och utmärkt skick överallt."
  },
  "son-antem-east": {
   "facts": [
    "Par 72 · Francisco Lopez-Segalés, 1994",
    "Marriott-resort · 5 sjöar"
   ],
   "blurb": "Den mer tillgängliga av de två Son Antem-banorna. Generösa fairways och fem sjöar på en före detta jaktegendom nära Llucmajor."
  },
  "son-quint": {
   "facts": [
    "Par 71 · Öppnad 2007",
    "Tiger Woods och Charlie spelade här, juli 2022"
   ],
   "blurb": "Den mest lättillgängliga av Son Vida-banorna. Breda fairways, fyra utslagsplatser och från hål 8 en utsikt rakt mot katedralen i Palma."
  },
  "maioris": {
   "facts": [
    "Par 72 · Öppnad 2006",
    "En av få allmänna gräsrangar på Mallorca"
   ],
   "blurb": "De första nio skotska och kuperade, de sista nio mer amerikanska och planare: två personligheter i en runda. Mindre trångt än banorna runt Palma."
  },
  "vall-dor": {
   "facts": [
    "Par 71 · 1986",
    "Avslutning vid klippkanten med havsutsikt på östkusten"
   ],
   "blurb": "En runda som blir bättre ju längre den går: trånga, traditionella första nio, sedan öppnar sig de sista nio mot kusten med havsutsikt och en avslutning vid klippkanten."
  },
  "golf-pollenca": {
   "facts": [
    "Par 35 · 9 hål · José Gancedo, 1986",
    "Utsikt över Tramuntana, Pollençaviken och Alcúdiaviken"
   ],
   "blurb": "Nio hål integrerade i sluttningen ovanför staden Pollença: utsikt över Tramuntana, två vikar och havet. Det rätta eftermiddagskomplementet till en förmiddag på Alcanada. Går att spela på 90 minuter."
  },
  "santa-ponsa-2": {
   "facts": [
    "Par 72 · Endast medlemmar",
    "Gäster måste spela med en medlem"
   ],
   "blurb": "Oftast den lugnaste banan i sydvästgruppen. Trädkantade fairways belönar placering framför kraft. Jag kan ta med kunder som mina gäster när jag spelar själv."
  },
  "santa-ponsa-3": {
   "facts": [
    "Par 30 · 9 hål · Endast medlemmar",
    "Gäster måste spela med en medlem"
   ],
   "note": "9 hål. Lägg upp den som ett eftermiddagstillägg vid sidan av en full runda på Santa Ponsa 1 eller 2",
   "blurb": "Nio hål genom bostadsområdet i Santa Ponsa: korta, exakta och väl lämpade för nybörjare, juniorer eller alla som vill ha en snabb runda."
  },
  "palma-pitch-putt": {
   "facts": [
    "Par 27 · 9 hål, alla par 3 · från 17 €",
    "Mallorcas enda pitch & putt"
   ],
   "note": "9 hål. Fungerar som halvdagsplan, som uppvärmning före rundan eller som introduktion till spelet",
   "blurb": "Mallorcas enda pitch & putt och banan jag använder för coachingintroduktioner. Alla par 3 mellan 50 och 100 m."
  },
  "reserva-rotana": {
   "facts": [
    "9 hål · Endast hotellgäster · Egendomsbana",
    "Capdepera och Pula inom 25 minuter"
   ],
   "note": "Endast hotellgäster. Det här alternativet gäller bara om ditt sällskap bor på Reserva Rotana",
   "blurb": "En privat 9-hålsbana på Reserva Rotana nära Manacor, endast tillgänglig för hotellgäster."
  }
 },
 "restaurants": {
  "southwest": {
   "casual": "Restaurang Campino på Golf de Andratx: italienskt och medelhavsmat på terrassen, bokad runt tiden då din runda är klar",
   "premium": "Sa Clastra (1 Michelinstjärna) på Castell Son Claret, Es Capdellà (cirka 15 minuter från de flesta banorna i sydväst). Ett av öns bästa lunchbord",
   "village": "Lunch i byn Calvià: en lugn bergsstad med lokala restauranger som sällan ser turister. Jag bokar rätt bord",
   "michelin": "Sa Clastra (1★) på Castell Son Claret, Es Capdellà, eller Es Fum (1★) på St. Regis Mardavall: två av öns finaste bord, båda i sydväst"
  },
  "palma": {
   "casual": "Na Capitana på Son Muntaner: pålitlig medelhavslunch på terrassen med utsikt över banan, eller en kort bilresa till Santa Catalina-marknaden för tapas",
   "premium": "DINS Santi Taura (1 Michelinstjärna) i centrala Palma, eller Marc Fosh (1 Michelinstjärna) i gamla stan. Jag lägger bokningen runt din runda",
   "village": "Santa Catalina-marknaden: Palmas bästa matkvarter, 10 minuter från de flesta banor. Jag väljer rätt ställe för sällskapet",
   "michelin": "DINS Santi Taura (1★), Marc Fosh (1★) och Zaranda (1★) ligger alla i Palma: öns starkaste Michelinkluster, alla inom 15 minuter från Palmabanorna"
  },
  "north": {
   "casual": "Lunch vid stranden i Port de Pollença: strandpromenaden har flera bra fisk- och skaldjursalternativ. Under högsäsong bokar jag i förväg",
   "premium": "Maca de Castro (1 Michelinstjärna + Green Star) i Port d'Alcúdia: säsongsbetonade provmenyer av lokala råvaror. Cirka 10 minuter från Alcanada",
   "village": "Pollenças gamla stad: en lugn bergsstad med ett fint marknadstorg, pålitliga lokala restauranger och söndagsmarknad. Värd den korta omvägen",
   "michelin": "Maca de Castro (1★ + Green Star) i Port d'Alcúdia: en av öns mest intressanta kockdrivna restauranger, nära golfbanan Alcanada"
  },
  "east": {
   "casual": "Restaurang Roca Viva på Capdepera Golf: medelhavs- och mallorkinsk mat, med egen grönsaksodling och terrass vid 18:an. En av öns bättre klubbhuslunchar",
   "premium": "VORO (2 Michelinstjärnor) på Cap Vermell Grand Hotel, Canyamel: Mallorcas enda tvåstjärniga restaurang, kocken Álvaro Salazar. Provmeny på 18 eller 22 rätter",
   "village": "Artàs gamla stad: en av de mest karaktärsfulla städerna i östra Mallorca. Ett bra stopp för kaffe och lunch före eller efter rundan",
   "michelin": "VORO (2★) på Cap Vermell, Canyamel: det starkaste Michelinargumentet för en natt på östkusten"
  },
  "south": {
   "casual": "T19 Restobar på Golf Maioris: uteterrass, tysk och medelhavsinspirerad klubbhusmat, ett användbart stopp nära flygplatsen",
   "premium": "Andreu Genestra (1 Michelinstjärna + Green Star) nära Llucmajor: säsongsbetonade provmenyer, hållbarhetsdriven matlagning. Cirka 10 minuter från Golf Maioris och Son Antem. Boka långt i förväg",
   "village": "Llucmajors gamla stad: en lugn marknadsstad 20 minuter från Palma med bra lokala restauranger och lördagsmarknad",
   "michelin": "Andreu Genestra (1★ + Green Star) nära Llucmajor: en av Mallorcas mest intressanta kockdrivna restauranger, nära banorna i söder"
  }
 },
 "addons": {
  "beach": [
   "Strandtimme",
   "En närliggande vik för ett dopp och en lugn timme i skuggan. Stranden väljs efter region när planen är bekräftad."
  ],
  "spa": [
   "Spa och återhämtning",
   "Ett pass efter rundan på ett resortspa i området. Alternativen inkluderar Arabella Son Vida, Secrets Paguera och Bendinat. Jag bekräftar stället när du bokar."
  ],
  "village": [
   "Bytimme",
   "En timme i en av öns historiska städer: kaffe, gränder och en utsiktsplats eller två."
  ],
  "wine": [
   "Vinprovning",
   "En guidad provning på en lokal bodega. Mallorca har en liten men seriös vinscen: José L. Ferrer i Binissalem och Macià Batle är båda värda omvägen. Jag lägger det runt rundan."
  ],
  "family": [
   "Familjeaktivitet",
   "En båttur, grottorna eller en vattenpark beroende på region och åldrar. Bekräftas med bokningen."
  ],
  "coaching": [
   "Coaching med mig",
   "Ett fokuserat pass med mig, en UK PGA Advanced Professional: uppvärmning, teknik eller banstrategi."
  ],
  "lunch": [
   "Lång lunch",
   "Ett riktigt mallorkinskt bord, bokat och tidsatt runt din runda."
  ]
 },
 "plan": {
  "names": {
   "efficient": "Effektiv golfdag",
   "lunch": "Golf och lång lunch",
   "experience": "Hela upplevelsen"
  },
  "taglines": {
   "efficient": "Rundan är dagen. Väl spelad, och eftermiddagen är fri.",
   "lunch": "En seriös runda följd av ett seriöst bord.",
   "experience": "Golfen är mittpunkten. Ön fyller resten av schemat."
  },
  "time": {
   "depart": "{depart} (uppskattning)",
   "onArrival": "Vid ankomst",
   "beforeRound": "Före rundan",
   "teeWindow": "Starttidsfönster {tee} (uppskattning)",
   "afterRound": "Efter rundan",
   "earlyAfternoon": "Tidig eftermiddag",
   "lateAfternoon": "Sen eftermiddag",
   "lunch": "Lunch",
   "afternoon": "Eftermiddag",
   "evening": "Kväll"
  },
  "title": {
   "depart": "Avfärd från ditt boende",
   "unhurried": "En lugn avfärd",
   "clubhouse": "En drink i klubbhuset",
   "return": "Hemfärd",
   "longLunch": "En lång mallorkinsk lunch",
   "relaxedReturn": "En avslappnad hemfärd",
   "lunchBooked": "Lunch, bokad och tidsatt",
   "beachOrVillage": "Strand- eller bytimme",
   "lastLight": "Hem i det sista ljuset",
   "warmupCoach": "Uppvärmning med coaching av mig",
   "warmupCoffee": "Uppvärmning och kaffe",
   "holes18": "18 hål på {course}",
   "holes9": "9 hål på {course}"
  },
  "desc": {
   "transfer": "En privat transfer hämtar dig vid ditt boende. Cirka {drive} minuter till banan (uppskattning).",
   "selfDrive": "Du kör själv till banan, cirka {drive} minuter (uppskattning). Parkeringsinformation kommer med den bekräftade planen.",
   "warmupCoach": "Ett 45 minuters pass med mig: uppvärmning på rangen, korta spelet och en plan för hålen framför dig.",
   "warmupCoffee": "Rangebollar, puttinggreenen och en kaffe på terrassen. Kom 45 minuter före din starttid.",
   "holeNote": " Observera: {note}",
   "clubhouse": "En avslappnad drink på terrassen medan scorekorten diskuteras.",
   "returnEfficient": "Tillbaka vid din bas med resten av dagen orörd. Cirka {drive} minuter (uppskattning).",
   "longLunch": "{lunch}. Bordet är bokat och tidsatt så att du går från sista hålet direkt till bordet.",
   "relaxedReturn": "En lugn hemresa, cirka {drive} minuter (uppskattning).",
   "lunchBooked": "{lunch}. Jag bokar rätt bord för ditt sällskap.",
   "beachOrVillage": "En närliggande vik eller en historisk stad, vald efter region när planen är bekräftad.",
   "lastLight": "Tillbaka till din bas, cirka {drive} minuter (uppskattning), med en hel Mallorcadag bakom dig."
  },
  "why": {
   "efficient": "Golfen kommer först och tiderna hålls snäva. {course} Inget i schemat som du inte bett om.",
   "lunch": "Bra golf och bra mat är de två saker den här ön levererar mest pålitligt. {course} Den här dagen ger båda riktig tid.",
   "experienceAddons": "{course} Tilläggen du valde förtjänar riktig tid i schemat, så den här planen bygger hela dagen runt dem.",
   "experiencePlain": "{course} Den här planen lägger till ön runt rundan utan att trycka ihop den."
  },
  "whyCourse": {
   "courseType": {
    "famous": "den är en av öns mest kända banor",
    "scenic": "den har den utsikt du bad om",
    "challenging": "den är den mest krävande banan inom räckhåll från din bas",
    "forgiving": "banan är bred och förlåtande",
    "close": "den är den närmaste kvalitetsbanan till där du bor"
   },
   "dayStyle": {
    "serious": "den ger en seriös runda",
    "relaxed": "tempot och banan passar en avslappnad dag",
    "luxury": "den är premiumalternativet i ditt område",
    "family": "den fungerar för alla nivåer i sällskapet",
    "scenic": "miljön är höjdpunkten",
    "food": "den ligger nära de bästa restaurangerna i området"
   },
   "matched": "den passar ditt spel väl",
   "fallback": "Den bästa tillgängliga matchningen för dina svar i det här området.",
   "separator": ", ",
   "end": ".",
   "capitalise": true
  },
  "handles": {
   "tee": "Starttid säkrad till rätt pris",
   "table": "Restaurangbord bokat och tidsatt runt din runda",
   "transportYes": "Transport dörr till dörr ordnad",
   "transportNo": "Rutt- och parkeringsvägledning för din bilresa",
   "buggies": "Golfbilar, klubbor och uthyrning ordnat vid behov",
   "coachingYes": "Ditt coachingpass med mig bekräftat",
   "coachingNo": "Valfri uppvärmning eller coaching på banan med mig",
   "whatsapp": "En WhatsApp-kontakt för hela dagen"
  }
 },
 "phrases": {
  "1993 redesign/expansion to 18 holes": "omdesign/utbyggnad till 18 hål 1993",
  "Historic established course (1964+)": "Historisk, etablerad bana (från 1964)",
  "(original 9 holes)": "(de ursprungliga 9 hålen)",
  "(18-hole expansion)": "(utbyggnad till 18 hål)",
  "(original)": "(original)",
  "(2000 redesign)": "(omdesign 2000)",
  "Opened in 1995": "Öppnad 1995",
  "redesign completed in 2006": "omdesign klar 2006",
  "9 holes; extended to 18 in 1995": "9 hål; utökad till 18 1995",
  "renovated €10M": "renoverad för 10 milj. €",
  "(9 holes)": "(9 hål)"
 }
}

export default data
