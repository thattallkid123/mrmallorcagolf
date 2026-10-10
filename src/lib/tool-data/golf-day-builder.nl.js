// golf-day-builder copy for 'nl'. Generated overlay: the English master is in
// golf-day-builder-logic.js (COURSES, RESTAURANTS, ADDONS, QUESTIONS) and EN_PLAN in golf-day-builder-localize.js.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "stepFmt": "Stap {n} van {total} · {section}",
 "sections": {
  "region": "Locatie",
  "dayStyle": "Dagstijl",
  "level": "Golfniveau",
  "start": "Starttijd",
  "courseType": "Baantype",
  "addons": "Naast het golf",
  "transport": "Vervoer",
  "group": "Uw gezelschap"
 },
 "teeWindows": {
  "early": "8:00 tot 9:00",
  "mid": "10:00 tot 11:00",
  "pm": "13:30 tot 14:30"
 },
 "factLabels": {
  "par": "Par",
  "nineHoles": "9 holes",
  "hotelOnly": "Alleen hotelgasten",
  "noHandicap": "Geen handicap vereist",
  "handicapRequired": "Handicap vereist",
  "certificate": " + bewijs"
 },
 "built": {
  "line": "Samengesteld voor {group}, {region}.",
  "groups": {
   "solo": "een solospeler",
   "couple": "een stel",
   "friends": "een groep vrienden",
   "family": "een gezin",
   "vip": "een vip- of bedrijfsgroep"
  },
  "regions": {
   "southwest": "verblijf in het zuidwesten",
   "palma": "verblijf in of bij Palma",
   "north": "verblijf in het noorden",
   "east": "verblijf in het oosten",
   "south": "verblijf in het zuiden",
   "unbooked": "verblijf waar het voor het golf het best uitkomt"
  }
 },
 "questions": {
  "region": {
   "title": "Waar verblijft u?",
   "sub": "Het plan wordt rond uw uitvalsbasis opgebouwd.",
   "opts": {
    "southwest": [
     "Zuidwesten",
     "Santa Ponsa, Andratx, Bendinat, Calvià"
    ],
    "palma": [
     "Palma en omgeving",
     "Stad Palma, Son Vida, centraal op het eiland"
    ],
    "north": [
     "Noorden",
     "Alcúdia, Pollença, de baaien"
    ],
    "east": [
     "Oosten",
     "Cala Millor, Canyamel, Artà"
    ],
    "south": [
     "Zuiden",
     "Llucmajor, omgeving luchthaven, Son Antem"
    ],
    "unbooked": [
     "Nog niet geboekt",
     "Ik stel de beste uitvalsbasis voor golf voor u voor"
    ]
   }
  },
  "dayStyle": {
   "title": "Wat voor dag zoekt u?",
   "sub": "Kies wat het meest bij u past.",
   "opts": {
    "serious": [
     "Serieus golf",
     "De ronde is het hoofdevenement"
    ],
    "relaxed": [
     "Ontspannen golf",
     "Goed golf zonder druk"
    ],
    "luxury": [
     "Luxe",
     "Het beste van alles, geregeld"
    ],
    "family": [
     "Gezinsdag",
     "Golf plus iets voor iedereen"
    ],
    "scenic": [
     "Landschappelijk",
     "Eerst het uitzicht, dan de score"
    ],
    "food": [
     "Eerst het eten",
     "Golf rond een geweldige lunch"
    ]
   }
  },
  "level": {
   "title": "Hoe zou u uw golf omschrijven?",
   "sub": "Eerlijke antwoorden geven betere dagen.",
   "opts": {
    "beginner": [
     "Beginner",
     "Nieuw in het spel of terugkerend"
    ],
    "casual": [
     "Recreatief",
     "Een paar rondes per jaar"
    ],
    "confident": [
     "Zelfverzekerd",
     "Vaste golfer, gemiddeld handicap"
    ],
    "low": [
     "Laag handicap",
     "Enkele cijfers, met zin in een echte test"
    ]
   }
  },
  "start": {
   "title": "Wanneer start u graag?",
   "sub": "",
   "opts": {
    "early": [
     "Vroeg in de ochtend",
     "Als een van de eersten weg, daarna is de dag van u"
    ],
    "mid": [
     "Halverwege de ochtend",
     "Een beschaafde start met een volle dag erna"
    ],
    "pm": [
     "Middag",
     "Rustige ochtend, golf in het late licht"
    ]
   }
  },
  "courseType": {
   "title": "Wat is het belangrijkst aan de baan?",
   "sub": "",
   "opts": {
    "famous": [
     "Een bekende naam",
     "De banen waar iedereen naar vraagt"
    ],
    "scenic": [
     "Landschap",
     "Uitzicht op zee, bergen, hoogteverschillen"
    ],
    "challenging": [
     "Een echte test",
     "Een baan die vragen stelt"
    ],
    "forgiving": [
     "Vergevingsgezind",
     "Breed, vriendelijk en leuk"
    ],
    "close": [
     "Dicht bij mijn hotel",
     "Zo weinig mogelijk tijd in de auto"
    ]
   }
  },
  "addons": {
   "title": "Wat zou de dag compleet maken?",
   "sub": "Selecteer wat u aanspreekt, of niets",
   "opts": {
    "lunch": [
     "Lange lunch",
     "Een echte Mallorcaanse tafel"
    ],
    "beach": [
     "Strand",
     "Een duik na de ronde"
    ],
    "spa": [
     "Spa",
     "Herstel goed gedaan"
    ],
    "village": [
     "Lokaal dorp",
     "Een uur in een historische stad"
    ],
    "wine": [
     "Wijn",
     "Een bezoek aan een bodega of een proeverij"
    ],
    "family": [
     "Gezinsactiviteit",
     "Iets voor de niet-golfers"
    ],
    "coaching": [
     "Coaching met mij",
     "Sessie met een PGA Advanced Professional"
    ]
   }
  },
  "transport": {
   "title": "Wilt u dat het vervoer wordt geregeld?",
   "sub": "",
   "opts": {
    "yes": [
     "Ja, regel het",
     "Chauffeur of transfers, van deur tot deur"
    ],
    "no": [
     "Nee, we rijden zelf",
     "Huurauto of eigen auto"
    ]
   }
  },
  "group": {
   "title": "Wie komt er mee?",
   "sub": "",
   "opts": {
    "solo": [
     "Alleen ik",
     "Solo golf, volle focus"
    ],
    "couple": [
     "Een stel",
     "Met z'n tweeën"
    ],
    "friends": [
     "Vrienden",
     "Een reis met een kleine groep"
    ],
    "family": [
     "Gezin",
     "Gemengde leeftijden en interesses"
    ],
    "vip": [
     "Vip of zakelijk",
     "Klanten ontvangen of een gelegenheid vieren"
    ]
   }
  }
 },
 "courses": {
  "son-gual": {
   "facts": [
    "Par 72 · Kampioenschapsbaan",
    "Thomas Himmel, 2007"
   ],
   "blurb": "De sterkste baanconditie van het eiland en een lay-out die elk onderdeel van uw spel test. Breed genoeg om van te genieten, veeleisend genoeg om te onthouden. Let op: een handicapbewijs is vereist."
  },
  "alcanada": {
   "facts": [
    "Par 72 · Robert Trent Jones Jr.",
    "58 bunkers"
   ],
   "blurb": "Zeezicht tijdens het grootste deel van de ronde en een ontwerp van Robert Trent Jones Jr. dat zich ook zonder staande houdt. De 58 bunkers liggen zo dat ze in het spel zijn, dus reken erop uw sandwedge te gebruiken."
  },
  "t-golf-palma": {
   "facts": [
    "Par 71 · Jack Nicklaus-ontwerp",
    "Enige Nicklaus-baan op Mallorca"
   ],
   "blurb": "Een ontwerp van Jack Nicklaus, twintig minuten van Palma. Stevig, strategisch en eerlijk: goede slagen worden beloond en slechte naar verhouding gestraft."
  },
  "son-muntaner": {
   "facts": [
    "Par 72 · Beste van Spanje 2025",
    "Olijfboom Sa Capitana, hole 15"
   ],
   "blurb": "Het vlaggenschip van de Arabella-banen en de meest verzorgde clubervaring bij Palma. Conditie en service zijn hier de trekpleister, en beide leveren."
  },
  "santa-ponsa": {
   "facts": [
    "Par 72 · Langste van het eiland",
    "Gastheer European Tour 2021"
   ],
   "blurb": "Brede fairways en een ontspannen tempo in het zuidwesten. De lengte ziet er op de kaart intimiderend uit, maar de breedte houdt hem speelbaar voor de meeste niveaus."
  },
  "andratx": {
   "facts": [
    "Par 72 · David Kidd, 1999",
    "Langste par 5 van Spanje (609 m)"
   ],
   "blurb": "Dramatische hoogteverschillen door de heuvels boven Camp de Mar. Het uitzicht valt het meest op, maar de strakke lijnen en hellende lies maken hem zwaarder dan de kaart doet vermoeden."
  },
  "son-vida": {
   "facts": [
    "Par 70 · Opgericht 1964 · Oudste van Mallorca",
    "Seve won hier in 1990"
   ],
   "blurb": "De oudste baan van Mallorca, die haar geschiedenis goed draagt. Naar moderne maatstaven kort, de hele ronde charmant, en een verstandige keuze als de dag om meer draait dan de score."
  },
  "bendinat": {
   "facts": [
    "Par 70 · Martin Hawtree, 1986",
    "5.660 m"
   ],
   "blurb": "Krap, mooi en verscholen tussen dennen, met glimpen van zee op de hogere holes. Een kortere, gezellige ronde die bij een halve dag past. Laat de driver op meerdere tees in de tas."
  },
  "capdepera": {
   "facts": [
    "Par 73 · Dan Maples",
    "Hole 15 gekozen tot beste van Mallorca"
   ],
   "blurb": "Golf in glooiend landschap in het rustige oosten, meestal niet druk, zelfs in het seizoen. Vriendelijk vanaf de tee, met genoeg variatie om betere spelers geïnteresseerd te houden."
  },
  "canyamel": {
   "facts": [
    "Par 73 · José Gancedo",
    "Stenen hut op hole 9, uniek op Mallorca"
   ],
   "blurb": "Een dalbaan bij de kust die weinig bezoekers inplannen en waar de meesten blij mee zijn. Stil uitdagend, vooral de approaches naar hellende greens."
  },
  "pula": {
   "facts": [
    "Par 72 · Herontwerp van Olazábal",
    "Range met twee niveaus · TrackMan Range"
   ],
   "blurb": "Een gastvrije baan aan de oostkust met een serieus toernooiverleden, herontworpen door José María Olazábal. Royaal waar het telt en het hele jaar goed onderhouden."
  },
  "son-servera": {
   "facts": [
    "Par 72 · Opgericht 1967 · Op één na oudste van Mallorca",
    "Kustparkland"
   ],
   "blurb": "Klassiek parkland met dennen aan zee en een van de oudste clubs van het eiland. Onhaastig, traditioneel en een eerlijke test zonder drama."
  },
  "son-antem-west": {
   "facts": [
    "Par 72 · Francisco Lopez Segales, 1995",
    "25 min van Palma"
   ],
   "blurb": "Golf in open landschap bij Llucmajor, 15 minuten van Palma en 25 van de luchthaven. Royale fairways en een vlakke lay-out maken hem toegankelijk voor de meeste niveaus."
  },
  "son-termes": {
   "facts": [
    "Par 70 · Grupo Harris, 1998",
    "Bergzicht op Palma"
   ],
   "blurb": "Berggolf in de uitlopers van de Tramuntana, 25 minuten van Palma. Op heldere dagen zijn vanaf de hogere holes het Castell de Bellver en de kathedraal te zien, met de Middellandse Zee erachter."
  },
  "t-golf-calvia": {
   "facts": [
    "Par 72 · 15 meren",
    "Gastheer van de Mallorca Open"
   ],
   "blurb": "Herbouwd na een renovatie van 10 miljoen euro, voelt T Golf Calvià verzorgd van aankomst tot afsluiting. Brede afslaglijnen, 15 meren in het spel en overal uitstekende conditie."
  },
  "son-antem-east": {
   "facts": [
    "Par 72 · Francisco Lopez-Segalés, 1994",
    "Marriott-resort · 5 meren"
   ],
   "blurb": "De toegankelijkere van de twee Son Antem-banen. Royale fairways en vijf meren op een voormalig jachtlandgoed bij Llucmajor."
  },
  "son-quint": {
   "facts": [
    "Par 71 · Geopend 2007",
    "Tiger Woods en Charlie speelden hier, juli 2022"
   ],
   "blurb": "De meest toegankelijke van de Son Vida-banen. Brede fairways, vier afslagposities en vanaf hole 8 een uitzicht recht op de kathedraal van Palma."
  },
  "maioris": {
   "facts": [
    "Par 72 · Geopend 2006",
    "Een van de weinige openbare grasdrivingranges van Mallorca"
   ],
   "blurb": "De voorste negen Schots en hobbelig, de achterste negen meer Amerikaans en vlakker: twee persoonlijkheden in één ronde. Minder druk dan de banen bij Palma."
  },
  "vall-dor": {
   "facts": [
    "Par 71 · 1986",
    "Afsluiting langs de klif met zeezicht aan de oostkust"
   ],
   "blurb": "Een ronde die beter wordt naarmate hij vordert: strakke, traditionele voorste negen, daarna opent de achterste negen zich naar de kust met zeezicht en een afsluiting langs de klif."
  },
  "golf-pollenca": {
   "facts": [
    "Par 35 · 9 holes · José Gancedo, 1986",
    "Uitzicht op Tramuntana, baai van Pollença en baai van Alcúdia"
   ],
   "blurb": "Negen holes geïntegreerd in de heuvel boven het stadje Pollença: uitzicht op de Tramuntana, twee baaien en de zee. De juiste aanvulling in de middag op een ochtend op Alcanada. In 90 minuten te voltooien."
  },
  "santa-ponsa-2": {
   "facts": [
    "Par 72 · Alleen leden",
    "Gasten moeten met een lid spelen"
   ],
   "blurb": "Meestal de rustigste baan van de zuidwestgroep. Met bomen omzoomde fairways belonen plaatsing boven kracht. Ik kan klanten als mijn gasten meenemen als ik zelf speel."
  },
  "santa-ponsa-3": {
   "facts": [
    "Par 30 · 9 holes · Alleen leden",
    "Gasten moeten met een lid spelen"
   ],
   "note": "9 holes. Plan hem als aanvulling in de middag naast een volledige ronde op Santa Ponsa 1 of 2",
   "blurb": "Negen holes door de woonwijk van Santa Ponsa: kort, nauwkeurig en goed geschikt voor beginners, junioren of iedereen die een snelle ronde wil."
  },
  "palma-pitch-putt": {
   "facts": [
    "Par 27 · 9 holes, allemaal par 3 · vanaf € 17",
    "De enige pitch & putt van Mallorca"
   ],
   "note": "9 holes. Werkt als halve-dagplan, als warming-up voor de ronde of als kennismaking met het spel",
   "blurb": "De enige pitch & putt van Mallorca en de baan die ik gebruik voor kennismakingscoaching. Allemaal par 3's van 50 tot 100 m."
  },
  "reserva-rotana": {
   "facts": [
    "9 holes · Alleen hotelgasten · Landgoedbaan",
    "Capdepera en Pula binnen 25 minuten"
   ],
   "note": "Alleen hotelgasten. Deze optie geldt alleen als uw groep in Reserva Rotana verblijft",
   "blurb": "Een privé 9-holesbaan bij Reserva Rotana nabij Manacor, uitsluitend beschikbaar voor hotelgasten."
  }
 },
 "restaurants": {
  "southwest": {
   "casual": "Restaurant Campino bij Golf de Andratx: Italiaans en mediterraan op het terras, geboekt rond het einde van uw ronde",
   "premium": "Sa Clastra (1 Michelinster) in Castell Son Claret, Es Capdellà (ongeveer 15 minuten van de meeste banen in het zuidwesten). Een van de beste lunchtafels van het eiland",
   "village": "Lunch in het dorp Calvià: een rustig bergstadje met lokale restaurants die zelden toeristen zien. Ik boek de juiste tafel",
   "michelin": "Sa Clastra (1★) in Castell Son Claret, Es Capdellà, of Es Fum (1★) in het St. Regis Mardavall: twee van de beste tafels van het eiland, beide in het zuidwesten"
  },
  "palma": {
   "casual": "Na Capitana bij Son Muntaner: betrouwbare mediterrane lunch op het terras met uitzicht over de baan, of een korte rit naar de markt van Santa Catalina voor tapas",
   "premium": "DINS Santi Taura (1 Michelinster) in het centrum van Palma, of Marc Fosh (1 Michelinster) in de oude stad. Ik stem de boeking af op uw ronde",
   "village": "Markt van Santa Catalina: de beste eetbuurt van Palma, 10 minuten van de meeste banen. Ik kies de juiste plek voor de groep",
   "michelin": "DINS Santi Taura (1★), Marc Fosh (1★) en Zaranda (1★) zitten allemaal in Palma: de sterkste Michelin-concentratie van het eiland, allemaal binnen 15 minuten van de banen bij Palma"
  },
  "north": {
   "casual": "Lunch aan het strand in Port de Pollença: de boulevard heeft meerdere goede vis- en zeevruchtenopties. In het hoogseizoen boek ik vooruit",
   "premium": "Maca de Castro (1 Michelinster + Green Star) in Port d'Alcúdia: seizoensgebonden proefmenu's met lokale producten. Ongeveer 10 minuten van Alcanada",
   "village": "Oude stad van Pollença: een rustig bergstadje met een mooi marktplein, betrouwbare lokale restaurants en een zondagsmarkt. De korte omweg waard",
   "michelin": "Maca de Castro (1★ + Green Star) in Port d'Alcúdia: een van de interessantste chefsrestaurants van het eiland, dicht bij de golfbaan Alcanada"
  },
  "east": {
   "casual": "Restaurant Roca Viva bij Capdepera Golf: mediterraan en Mallorcaans, met eigen moestuin en terras bij de 18e. Een van de betere clubhuislunches van het eiland",
   "premium": "VORO (2 Michelinsterren) in het Cap Vermell Grand Hotel, Canyamel: het enige tweesterrenrestaurant van Mallorca, chef Álvaro Salazar. Proefmenu van 18 of 22 gangen",
   "village": "Oude stad van Artà: een van de meest karaktervolle steden in het oosten van Mallorca. Een goede stop voor koffie en lunch voor of na de ronde",
   "michelin": "VORO (2★) in Cap Vermell, Canyamel: het sterkste Michelin-argument voor een nacht aan de oostkust"
  },
  "south": {
   "casual": "T19 Restobar bij Golf Maioris: buitenterras, Duits en mediterraan clubhuiseten, een handige stop bij de luchthaven",
   "premium": "Andreu Genestra (1 Michelinster + Green Star) bij Llucmajor: seizoensproefmenu's, duurzaamheidsgerichte keuken. Ongeveer 10 minuten van Golf Maioris en Son Antem. Boek ruim van tevoren",
   "village": "Oude stad van Llucmajor: een rustig marktstadje 20 minuten van Palma met goede lokale restaurants en een zaterdagmarkt",
   "michelin": "Andreu Genestra (1★ + Green Star) bij Llucmajor: een van de interessantste chefsrestaurants van Mallorca, dicht bij de banengroep in het zuiden"
  }
 },
 "addons": {
  "beach": [
   "Strandmoment",
   "Een nabije baai voor een duik en een rustig uur in de schaduw. Het strand wordt per regio gekozen zodra het plan is bevestigd."
  ],
  "spa": [
   "Spa en herstel",
   "Een behandeling na de ronde in een resortspa in de buurt. Opties zijn onder meer Arabella Son Vida, Secrets Paguera en Bendinat. Ik bevestig de locatie bij het boeken."
  ],
  "village": [
   "Uurtje in een dorp",
   "Een uur in een van de historische steden van het eiland: koffie, zijstraatjes en een uitkijkpunt of twee."
  ],
  "wine": [
   "Wijnproeverij",
   "Een begeleide proeverij bij een lokale bodega. Mallorca heeft een kleine maar serieuze wijnscène: José L. Ferrer in Binissalem en Macià Batle zijn allebei een omweg waard. Ik plan dit rond de ronde."
  ],
  "family": [
   "Gezinsactiviteit",
   "Een boottocht, de grotten of een waterpark, afhankelijk van regio en leeftijden. Bevestigd bij de boeking."
  ],
  "coaching": [
   "Coaching met mij",
   "Een gerichte sessie met mij, een UK PGA Advanced Professional: warming-up, techniek of baanstrategie."
  ],
  "lunch": [
   "Lange lunch",
   "Een echte Mallorcaanse tafel, geboekt en getimed rond uw ronde."
  ]
 },
 "plan": {
  "names": {
   "efficient": "Efficiënte golfdag",
   "lunch": "Golf en lange lunch",
   "experience": "Volledige ervaring"
  },
  "taglines": {
   "efficient": "De ronde is de dag. Goed gespeeld, en de middag is vrij.",
   "lunch": "Een serieuze ronde gevolgd door een serieuze tafel.",
   "experience": "Het golf is het middelpunt. Het eiland vult de rest van het programma."
  },
  "time": {
   "depart": "{depart} (schatting)",
   "onArrival": "Bij aankomst",
   "beforeRound": "Voor de ronde",
   "teeWindow": "Afslagvenster {tee} (schatting)",
   "afterRound": "Na de ronde",
   "earlyAfternoon": "Vroege middag",
   "lateAfternoon": "Late middag",
   "lunch": "Lunch",
   "afternoon": "Middag",
   "evening": "Avond"
  },
  "title": {
   "depart": "Vertrek vanaf uw accommodatie",
   "unhurried": "Een onhaastig vertrek",
   "clubhouse": "Een drankje in het clubhuis",
   "return": "Terugreis",
   "longLunch": "Een lange Mallorcaanse lunch",
   "relaxedReturn": "Een ontspannen terugreis",
   "lunchBooked": "Lunch, geboekt en getimed",
   "beachOrVillage": "Strand- of dorpsuurtje",
   "lastLight": "Terug in het laatste licht",
   "warmupCoach": "Warming-up met coaching van mij",
   "warmupCoffee": "Warming-up en koffie",
   "holes18": "18 holes op {course}",
   "holes9": "9 holes op {course}"
  },
  "desc": {
   "transfer": "Een privétransfer haalt u op bij uw accommodatie. Ongeveer {drive} minuten naar de baan (schatting).",
   "selfDrive": "Zelf rijden naar de baan, ongeveer {drive} minuten (schatting). Parkeerinformatie volgt met het bevestigde plan.",
   "warmupCoach": "Een sessie van 45 minuten met mij: warming-up op de range, kort spel en een plan voor de holes die voor u liggen.",
   "warmupCoffee": "Rangeballen, de puttinggreen en een koffie op het terras. Kom 45 minuten voor uw starttijd aan.",
   "holeNote": " Let op: {note}",
   "clubhouse": "Een ontspannen drankje op het terras terwijl over de scorekaarten wordt gediscussieerd.",
   "returnEfficient": "Terug op uw uitvalsbasis met de rest van de dag onaangeroerd. Ongeveer {drive} minuten (schatting).",
   "longLunch": "{lunch}. De tafel is geboekt en getimed zodat u van de laatste hole direct aan tafel gaat.",
   "relaxedReturn": "Een rustige terugrit, ongeveer {drive} minuten (schatting).",
   "lunchBooked": "{lunch}. Ik boek de juiste tafel voor uw groep.",
   "beachOrVillage": "Een nabije baai of een historische stad, gekozen per regio zodra het plan is bevestigd.",
   "lastLight": "Terug naar uw uitvalsbasis, ongeveer {drive} minuten (schatting), met een volle Mallorca-dag achter u."
  },
  "why": {
   "efficient": "Het golf komt eerst en de tijden blijven strak. {course} Niets in het programma dat u niet hebt gevraagd.",
   "lunch": "Goed golf en goed eten zijn de twee dingen die dit eiland het betrouwbaarst levert. {course} Deze dag geeft beide echt de tijd.",
   "experienceAddons": "{course} De extra's die u koos verdienen echte tijd in het programma, dus dit plan bouwt de hele dag eromheen.",
   "experiencePlain": "{course} Dit plan voegt het eiland toe rond de ronde zonder die te overvullen."
  },
  "whyCourse": {
   "courseType": {
    "famous": "het is een van de bekendste banen van het eiland",
    "scenic": "het heeft het uitzicht waar u om vroeg",
    "challenging": "het is de meest veeleisende baan binnen bereik van uw uitvalsbasis",
    "forgiving": "de lay-out is breed en vergevingsgezind",
    "close": "het is de dichtstbijzijnde kwaliteitsbaan bij uw accommodatie"
   },
   "dayStyle": {
    "serious": "het biedt een serieuze ronde",
    "relaxed": "het tempo en de lay-out passen bij een ontspannen dag",
    "luxury": "het is de premiumoptie in uw omgeving",
    "family": "het werkt voor alle niveaus in de groep",
    "scenic": "de omgeving is het hoogtepunt",
    "food": "het ligt dicht bij de beste restaurants in de omgeving"
   },
   "matched": "het past goed bij uw spel",
   "fallback": "De beste beschikbare match voor uw antwoorden in dit gebied.",
   "separator": ", ",
   "end": ".",
   "capitalise": true
  },
  "handles": {
   "tee": "Starttijd geregeld tegen het juiste tarief",
   "table": "Restauranttafel geboekt en getimed rond uw ronde",
   "transportYes": "Vervoer van deur tot deur geregeld",
   "transportNo": "Route- en parkeeradvies voor uw rit",
   "buggies": "Buggy's, clubs en verhuur geregeld indien nodig",
   "coachingYes": "Uw coachingsessie met mij bevestigd",
   "coachingNo": "Optionele warming-up of coaching op de baan met mij",
   "whatsapp": "Eén WhatsApp-contact voor de hele dag"
  }
 },
 "phrases": {
  "1993 redesign/expansion to 18 holes": "herontwerp/uitbreiding naar 18 holes in 1993",
  "Historic established course (1964+)": "Historische, gevestigde baan (vanaf 1964)",
  "(original 9 holes)": "(oorspronkelijke 9 holes)",
  "(18-hole expansion)": "(uitbreiding naar 18 holes)",
  "(original)": "(origineel)",
  "(2000 redesign)": "(herontwerp 2000)",
  "Opened in 1995": "Geopend in 1995",
  "redesign completed in 2006": "herontwerp voltooid in 2006",
  "9 holes; extended to 18 in 1995": "9 holes; in 1995 uitgebreid naar 18",
  "renovated €10M": "gerenoveerd voor € 10 mln",
  "(9 holes)": "(9 holes)"
 }
}

export default data
