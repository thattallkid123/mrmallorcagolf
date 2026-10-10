// golf-day-builder copy for 'fr'. Generated overlay: the English master is in
// golf-day-builder-logic.js (COURSES, RESTAURANTS, ADDONS, QUESTIONS) and EN_PLAN in golf-day-builder-localize.js.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "stepFmt": "Étape {n} sur {total} · {section}",
 "sections": {
  "region": "Lieu",
  "dayStyle": "Style de journée",
  "level": "Niveau de golf",
  "start": "Heure de départ",
  "courseType": "Type de parcours",
  "addons": "Au-delà du golf",
  "transport": "Transport",
  "group": "Votre groupe"
 },
 "teeWindows": {
  "early": "8 h 00 à 9 h 00",
  "mid": "10 h 00 à 11 h 00",
  "pm": "13 h 30 à 14 h 30"
 },
 "factLabels": {
  "par": "Par",
  "nineHoles": "9 trous",
  "hotelOnly": "Clients de l'hôtel uniquement",
  "noHandicap": "Aucun handicap requis",
  "handicapRequired": "Handicap requis",
  "certificate": " + certificat"
 },
 "built": {
  "line": "Construite pour {group}, {region}.",
  "groups": {
   "solo": "un golfeur en solo",
   "couple": "un couple",
   "friends": "un groupe d'amis",
   "family": "une famille",
   "vip": "un groupe VIP ou professionnel"
  },
  "regions": {
   "southwest": "logeant dans le Sud-Ouest",
   "palma": "logeant à Palma ou près de Palma",
   "north": "logeant dans le Nord",
   "east": "logeant dans l'Est",
   "south": "logeant dans le Sud",
   "unbooked": "logeant là où le golf est le plus pratique"
  }
 },
 "questions": {
  "region": {
   "title": "Où logez-vous ?",
   "sub": "Le programme est construit autour de votre base.",
   "opts": {
    "southwest": [
     "Sud-Ouest",
     "Santa Ponsa, Andratx, Bendinat, Calvià"
    ],
    "palma": [
     "Palma et alentours",
     "Ville de Palma, Son Vida, centre de l'île"
    ],
    "north": [
     "Nord",
     "Alcúdia, Pollença, les baies"
    ],
    "east": [
     "Est",
     "Cala Millor, Canyamel, Artà"
    ],
    "south": [
     "Sud",
     "Llucmajor, secteur de l'aéroport, Son Antem"
    ],
    "unbooked": [
     "Pas encore réservé",
     "Je vous proposerai la meilleure base pour le golf"
    ]
   }
  },
  "dayStyle": {
   "title": "Quel type de journée recherchez-vous ?",
   "sub": "Choisissez celle qui vous ressemble le plus.",
   "opts": {
    "serious": [
     "Golf sérieux",
     "La partie est le moment fort"
    ],
    "relaxed": [
     "Golf détendu",
     "Du bon golf sans pression"
    ],
    "luxury": [
     "Luxe",
     "Le meilleur de tout, pris en charge"
    ],
    "family": [
     "Journée en famille",
     "Du golf et quelque chose pour tous"
    ],
    "scenic": [
     "Paysages",
     "D'abord la vue, ensuite le score"
    ],
    "food": [
     "La table d'abord",
     "Un golf construit autour d'un excellent déjeuner"
    ]
   }
  },
  "level": {
   "title": "Comment décririez-vous votre golf ?",
   "sub": "Des réponses honnêtes donnent de meilleures journées.",
   "opts": {
    "beginner": [
     "Débutant",
     "Nouveau au golf ou de retour"
    ],
    "casual": [
     "Occasionnel",
     "Quelques parties par an"
    ],
    "confident": [
     "Confirmé",
     "Golfeur régulier, handicap moyen"
    ],
    "low": [
     "Faible handicap",
     "Un seul chiffre, avec envie d'un vrai test"
    ]
   }
  },
  "start": {
   "title": "À quelle heure aimez-vous partir ?",
   "sub": "",
   "opts": {
    "early": [
     "Tôt le matin",
     "Parmi les premiers, et la journée est à vous ensuite"
    ],
    "mid": [
     "Milieu de matinée",
     "Un départ civilisé avec une journée bien remplie"
    ],
    "pm": [
     "Après-midi",
     "Matinée tranquille, golf à la lumière du soir"
    ]
   }
  },
  "courseType": {
   "title": "Qu'est-ce qui compte le plus dans le parcours ?",
   "sub": "",
   "opts": {
    "famous": [
     "Un nom connu",
     "Les parcours dont tout le monde parle"
    ],
    "scenic": [
     "Paysages",
     "Vues sur la mer, montagnes, dénivelés"
    ],
    "challenging": [
     "Un vrai test",
     "Un parcours qui pose des questions"
    ],
    "forgiving": [
     "Tolérant",
     "Large, accueillant et amusant"
    ],
    "close": [
     "Près de mon hôtel",
     "Le moins de temps possible en voiture"
    ]
   }
  },
  "addons": {
   "title": "Que faudrait-il pour compléter la journée ?",
   "sub": "Sélectionnez ce qui vous plaît, ou rien",
   "opts": {
    "lunch": [
     "Long déjeuner",
     "Une vraie table majorquine"
    ],
    "beach": [
     "Plage",
     "Une baignade après la partie"
    ],
    "spa": [
     "Spa",
     "Une récupération bien faite"
    ],
    "village": [
     "Village local",
     "Une heure dans une ville historique"
    ],
    "wine": [
     "Vin",
     "Une visite de bodega ou une dégustation"
    ],
    "family": [
     "Activité en famille",
     "Quelque chose pour ceux qui ne jouent pas"
    ],
    "coaching": [
     "Coaching avec moi",
     "Séance avec un PGA Advanced Professional"
    ]
   }
  },
  "transport": {
   "title": "Avez-vous besoin que le transport soit organisé ?",
   "sub": "",
   "opts": {
    "yes": [
     "Oui, organisez-le",
     "Chauffeur ou transferts, de porte à porte"
    ],
    "no": [
     "Non, nous conduirons",
     "Voiture de location ou personnelle"
    ]
   }
  },
  "group": {
   "title": "Qui vient ?",
   "sub": "",
   "opts": {
    "solo": [
     "Juste moi",
     "Golf en solo, concentration totale"
    ],
    "couple": [
     "Un couple",
     "Vous deux"
    ],
    "friends": [
     "Amis",
     "Un séjour en petit groupe"
    ],
    "family": [
     "Famille",
     "Âges et centres d'intérêt variés"
    ],
    "vip": [
     "VIP ou professionnel",
     "Recevoir des clients ou marquer une occasion"
    ]
   }
  }
 },
 "courses": {
  "son-gual": {
   "facts": [
    "Par 72 · Championnat",
    "Thomas Himmel, 2007"
   ],
   "blurb": "Le meilleur état de l'île et un tracé qui teste chaque partie de votre jeu. Assez large pour en profiter, assez exigeant pour s'en souvenir. À noter : un certificat de handicap est requis."
  },
  "alcanada": {
   "facts": [
    "Par 72 · Robert Trent Jones Jr.",
    "58 bunkers"
   ],
   "blurb": "Des vues sur la mer pendant presque toute la partie et un dessin de Robert Trent Jones Jr. qui se défend très bien sans elles. Les 58 bunkers sont placés pour être en jeu, prévoyez donc d'utiliser votre sand wedge."
  },
  "t-golf-palma": {
   "facts": [
    "Par 71 · Dessin de Jack Nicklaus",
    "Seul parcours Nicklaus de Majorque"
   ],
   "blurb": "Un dessin de Jack Nicklaus à vingt minutes de Palma. Ferme, stratégique et honnête : les bons coups sont récompensés et les mauvais punis en proportion."
  },
  "son-muntaner": {
   "facts": [
    "Par 72 · Meilleur d'Espagne 2025",
    "Olivier Sa Capitana, trou 15"
   ],
   "blurb": "Le fleuron des parcours Arabella et l'expérience de club la plus soignée près de Palma. L'état du parcours et le service sont l'attrait ici, et les deux tiennent leurs promesses."
  },
  "santa-ponsa": {
   "facts": [
    "Par 72 · Le plus long de l'île",
    "Hôte de l'European Tour 2021"
   ],
   "blurb": "Des fairways larges et un rythme détendu dans le Sud-Ouest. La longueur impressionne sur la carte, mais la largeur le garde jouable pour la plupart des niveaux."
  },
  "andratx": {
   "facts": [
    "Par 72 · David Kidd, 1999",
    "Plus long par 5 d'Espagne (609 m)"
   ],
   "blurb": "Des dénivelés spectaculaires dans les collines au-dessus de Camp de Mar. Les vues font la une, mais les lignes serrées et les lies en pente le rendent plus difficile que ne le laisse penser la carte."
  },
  "son-vida": {
   "facts": [
    "Par 70 · Fondé en 1964 · Le plus ancien de Majorque",
    "Seve y a gagné en 1990"
   ],
   "blurb": "Le plus ancien parcours de Majorque, qui porte bien son histoire. Court selon les standards modernes, charmant de bout en bout et un choix judicieux quand la journée est faite pour plus que le score."
  },
  "bendinat": {
   "facts": [
    "Par 70 · Martin Hawtree, 1986",
    "5 660 m"
   ],
   "blurb": "Serré, joli et niché entre les pins, avec des échappées sur la mer depuis les trous les plus hauts. Une partie plus courte et conviviale qui convient à un programme d'une demi-journée. Laissez le driver dans le sac sur plusieurs départs."
  },
  "capdepera": {
   "facts": [
    "Par 73 · Dan Maples",
    "Trou 15 élu meilleur trou de Majorque"
   ],
   "blurb": "Du golf de campagne vallonnée dans l'Est tranquille, généralement peu fréquenté même en saison. Accueillant depuis le départ, avec assez de variété pour intéresser les meilleurs joueurs."
  },
  "canyamel": {
   "facts": [
    "Par 73 · José Gancedo",
    "Cabane en pierre au trou 9, unique à Majorque"
   ],
   "blurb": "Un parcours de vallée près de la côte que peu de visiteurs prévoient et que la plupart sont ravis d'avoir joué. Discrètement exigeant, surtout sur les approches vers des greens en pente."
  },
  "pula": {
   "facts": [
    "Par 72 · Redessiné par Olazábal",
    "Practice sur deux niveaux · TrackMan Range"
   ],
   "blurb": "Un parcours accueillant de la côte est avec un vrai passé de tournois, redessiné par José María Olazábal. Généreux là où cela compte et bien entretenu toute l'année."
  },
  "son-servera": {
   "facts": [
    "Par 72 · Fondé en 1967 · 2e plus ancien de Majorque",
    "Parkland côtier"
   ],
   "blurb": "Un parkland classique bordé de pins au bord de la mer et l'un des plus anciens clubs de l'île. Sans hâte, traditionnel et un test équitable sans drame."
  },
  "son-antem-west": {
   "facts": [
    "Par 72 · Francisco Lopez Segales, 1995",
    "À 25 min de Palma"
   ],
   "blurb": "Du golf en pleine campagne près de Llucmajor, à 15 minutes de Palma et 25 de l'aéroport. Des fairways généreux et un tracé plat le rendent accessible à la plupart des niveaux."
  },
  "son-termes": {
   "facts": [
    "Par 70 · Grupo Harris, 1998",
    "Vues sur les montagnes et Palma"
   ],
   "blurb": "Du golf de montagne dans les contreforts de la Tramuntana, à 25 minutes de Palma. Par temps clair, le Castell de Bellver et la cathédrale sont visibles depuis les trous du haut, avec la Méditerranée derrière."
  },
  "t-golf-calvia": {
   "facts": [
    "Par 72 · 15 lacs",
    "Hôte de l'Open de Majorque"
   ],
   "blurb": "Reconstruit après une rénovation de 10 millions d'euros, T Golf Calvià paraît soigné de l'arrivée à la fin. Des lignes de jeu larges, 15 lacs en jeu et un excellent état partout."
  },
  "son-antem-east": {
   "facts": [
    "Par 72 · Francisco Lopez-Segalés, 1994",
    "Resort Marriott · 5 lacs"
   ],
   "blurb": "Le plus accessible des deux parcours de Son Antem. Des fairways généreux et cinq lacs sur un ancien domaine de chasse près de Llucmajor."
  },
  "son-quint": {
   "facts": [
    "Par 71 · Ouvert en 2007",
    "Tiger Woods et Charlie y ont joué, juillet 2022"
   ],
   "blurb": "Le plus abordable des parcours de Son Vida. Des fairways larges, quatre positions de départ et, depuis le trou 8, une vue directe sur la cathédrale de Palma."
  },
  "maioris": {
   "facts": [
    "Par 72 · Ouvert en 2006",
    "L'un des rares practices en herbe publics de Majorque"
   ],
   "blurb": "Les neuf premiers écossais et bosselés, les neuf derniers plus américains et plus plats : deux personnalités en une seule partie. Moins fréquenté que les parcours de Palma."
  },
  "vall-dor": {
   "facts": [
    "Par 71 · 1986",
    "Final au bord de la falaise avec vue sur la mer de la côte est"
   ],
   "blurb": "Une partie qui s'améliore au fil du parcours : des neuf premiers trous serrés et traditionnels, puis les neuf derniers s'ouvrent vers la côte avec des vues sur la mer et un final au bord de la falaise."
  },
  "golf-pollenca": {
   "facts": [
    "Par 35 · 9 trous · José Gancedo, 1986",
    "Vues sur la Tramuntana, la baie de Pollença et la baie d'Alcúdia"
   ],
   "blurb": "Neuf trous intégrés à la colline au-dessus de la ville de Pollença : des vues sur la Tramuntana, deux baies et la mer. Le bon complément de l'après-midi après une matinée à Alcanada. Se joue en 90 minutes."
  },
  "santa-ponsa-2": {
   "facts": [
    "Par 72 · Membres uniquement",
    "Les invités doivent jouer avec un membre"
   ],
   "blurb": "Généralement le parcours le plus tranquille du groupe du Sud-Ouest. Des fairways bordés d'arbres qui récompensent le placement plutôt que la puissance. Je peux recevoir des clients comme invités quand je joue."
  },
  "santa-ponsa-3": {
   "facts": [
    "Par 30 · 9 trous · Membres uniquement",
    "Les invités doivent jouer avec un membre"
   ],
   "note": "9 trous. À prévoir comme complément d'après-midi à une partie complète à Santa Ponsa 1 ou 2",
   "blurb": "Neuf trous à travers la résidence de Santa Ponsa : courts, précis et bien adaptés aux débutants, aux juniors ou à tous ceux qui veulent une partie rapide."
  },
  "palma-pitch-putt": {
   "facts": [
    "Par 27 · 9 trous, tous des par 3 · à partir de 17 €",
    "Le seul pitch & putt de Majorque"
   ],
   "note": "9 trous. Fonctionne comme programme d'une demi-journée, comme échauffement avant la partie ou comme introduction au golf",
   "blurb": "Le seul pitch & putt de Majorque et le parcours que j'utilise pour les introductions au coaching. Que des par 3 de 50 à 100 m."
  },
  "reserva-rotana": {
   "facts": [
    "9 trous · Clients de l'hôtel uniquement · Parcours du domaine",
    "Capdepera et Pula à moins de 25 minutes"
   ],
   "note": "Clients de l'hôtel uniquement. Cette option ne s'applique que si votre groupe séjourne à Reserva Rotana",
   "blurb": "Un parcours privé de 9 trous à Reserva Rotana près de Manacor, réservé exclusivement aux clients de l'hôtel."
  }
 },
 "restaurants": {
  "southwest": {
   "casual": "Restaurant Campino au Golf de Andratx : cuisine italienne et méditerranéenne en terrasse, réservé selon l'heure de fin de votre partie",
   "premium": "Sa Clastra (1 étoile Michelin) au Castell Son Claret, Es Capdellà (à environ 15 minutes de la plupart des parcours du Sud-Ouest). L'une des meilleures tables de déjeuner de l'île",
   "village": "Déjeuner dans le village de Calvià : une petite ville perchée tranquille avec des restaurants locaux que les touristes voient rarement. Je réserve la bonne table",
   "michelin": "Sa Clastra (1★) au Castell Son Claret, Es Capdellà, ou Es Fum (1★) au St. Regis Mardavall : deux des plus belles tables de l'île, toutes deux dans le Sud-Ouest"
  },
  "palma": {
   "casual": "Na Capitana à Son Muntaner : un déjeuner méditerranéen fiable en terrasse avec vue sur le parcours, ou un court trajet jusqu'au marché de Santa Catalina pour des tapas",
   "premium": "DINS Santi Taura (1 étoile Michelin) au centre de Palma, ou Marc Fosh (1 étoile Michelin) dans la vieille ville. J'ajuste la réservation à votre partie",
   "village": "Marché de Santa Catalina : le meilleur quartier gastronomique de Palma, à 10 minutes de la plupart des parcours. Je choisis la bonne adresse pour le groupe",
   "michelin": "DINS Santi Taura (1★), Marc Fosh (1★) et Zaranda (1★) sont tous à Palma : le plus fort regroupement Michelin de l'île, tous à moins de 15 minutes des parcours de Palma"
  },
  "north": {
   "casual": "Déjeuner en bord de mer à Port de Pollença : la promenade offre plusieurs bonnes options de poisson et de fruits de mer. Je réserve à l'avance en haute saison",
   "premium": "Maca de Castro (1 étoile Michelin + Étoile Verte) à Port d'Alcúdia : menus dégustation de saison à base de produits locaux. À environ 10 minutes d'Alcanada",
   "village": "Vieille ville de Pollença : une petite ville perchée tranquille avec une belle place de marché, des restaurants locaux fiables et un marché le dimanche. Le petit détour en vaut la peine",
   "michelin": "Maca de Castro (1★ + Étoile Verte) à Port d'Alcúdia : l'un des restaurants de chef les plus intéressants de l'île, près du golf d'Alcanada"
  },
  "east": {
   "casual": "Restaurant Roca Viva au Capdepera Golf : méditerranéen et majorquin, avec potager sur place et terrasse au 18. L'un des meilleurs déjeuners de club-house de l'île",
   "premium": "VORO (2 étoiles Michelin) au Cap Vermell Grand Hotel, Canyamel : le seul restaurant deux étoiles de Majorque, du chef Álvaro Salazar. Menu dégustation de 18 ou 22 services",
   "village": "Vieille ville d'Artà : l'une des villes les plus pleines de caractère de l'est de Majorque. Une bonne halte pour un café et un déjeuner avant ou après la partie",
   "michelin": "VORO (2★) au Cap Vermell, Canyamel : l'argument Michelin le plus fort pour une nuit sur la côte est"
  },
  "south": {
   "casual": "T19 Restobar au Golf Maioris : terrasse extérieure, cuisine de club allemande et méditerranéenne, une halte utile près de l'aéroport",
   "premium": "Andreu Genestra (1 étoile Michelin + Étoile Verte) près de Llucmajor : menus dégustation de saison, cuisine guidée par la durabilité. À environ 10 minutes de Golf Maioris et Son Antem. Réservez bien à l'avance",
   "village": "Vieille ville de Llucmajor : une ville de marché tranquille à 20 minutes de Palma avec de bons restaurants locaux et un marché le samedi",
   "michelin": "Andreu Genestra (1★ + Étoile Verte) près de Llucmajor : l'un des restaurants de chef les plus intéressants de Majorque, près du groupe de parcours du sud"
  }
 },
 "addons": {
  "beach": [
   "Heure de plage",
   "Une crique proche pour se baigner et une heure tranquille à l'ombre. La plage est choisie selon la région une fois le programme confirmé."
  ],
  "spa": [
   "Spa et récupération",
   "Une séance après la partie dans un spa de resort de la région. Parmi les options : Arabella Son Vida, Secrets Paguera et Bendinat. Je confirme le lieu à la réservation."
  ],
  "village": [
   "Heure dans un village",
   "Une heure dans l'une des villes historiques de l'île : café, ruelles et un point de vue ou deux."
  ],
  "wine": [
   "Dégustation de vins",
   "Une dégustation guidée dans une bodega locale. Majorque a une scène viticole petite mais sérieuse : José L. Ferrer à Binissalem et Macià Batle valent tous deux le détour. Je cale cela autour de la partie."
  ],
  "family": [
   "Activité en famille",
   "Une sortie en bateau, les grottes ou un parc aquatique selon la région et les âges. Confirmé avec la réservation."
  ],
  "coaching": [
   "Coaching avec moi",
   "Une séance ciblée avec moi, UK PGA Advanced Professional : échauffement, technique ou stratégie sur le parcours."
  ],
  "lunch": [
   "Long déjeuner",
   "Une vraie table majorquine, réservée et calée autour de votre partie."
  ]
 },
 "plan": {
  "names": {
   "efficient": "Journée de golf efficace",
   "lunch": "Golf et long déjeuner",
   "experience": "Expérience complète"
  },
  "taglines": {
   "efficient": "La partie est la journée. Bien jouée, avec l'après-midi libre.",
   "lunch": "Une partie sérieuse suivie d'une table sérieuse.",
   "experience": "Le golf est la pièce maîtresse. L'île remplit le reste du programme."
  },
  "time": {
   "depart": "{depart} (estimation)",
   "onArrival": "À l'arrivée",
   "beforeRound": "Avant la partie",
   "teeWindow": "Créneau de départ {tee} (estimation)",
   "afterRound": "Après la partie",
   "earlyAfternoon": "Début d'après-midi",
   "lateAfternoon": "Fin d'après-midi",
   "lunch": "Déjeuner",
   "afternoon": "Après-midi",
   "evening": "Soirée"
  },
  "title": {
   "depart": "Départ de votre hébergement",
   "unhurried": "Un départ sans précipitation",
   "clubhouse": "Un verre au club-house",
   "return": "Retour",
   "longLunch": "Un long déjeuner majorquin",
   "relaxedReturn": "Un retour tranquille",
   "lunchBooked": "Déjeuner, réservé et chronométré",
   "beachOrVillage": "Heure de plage ou de village",
   "lastLight": "Retour dans la dernière lumière",
   "warmupCoach": "Échauffement coaché avec moi",
   "warmupCoffee": "Échauffement et café",
   "holes18": "18 trous à {course}",
   "holes9": "9 trous à {course}"
  },
  "desc": {
   "transfer": "Un transfert privé vous prend à votre hébergement. Environ {drive} minutes jusqu'au parcours (estimation).",
   "selfDrive": "Vous conduisez jusqu'au parcours, environ {drive} minutes (estimation). Les indications de stationnement arrivent avec le programme confirmé.",
   "warmupCoach": "Une séance de 45 minutes avec moi : échauffement au practice, petit jeu et un plan pour les trous à venir.",
   "warmupCoffee": "Balles de practice, putting green et un café en terrasse. Arrivez 45 minutes avant votre heure de départ.",
   "holeNote": " Remarque : {note}",
   "clubhouse": "Un verre tranquille en terrasse pendant que l'on conteste les cartes de score.",
   "returnEfficient": "De retour à votre base, le reste de la journée intact. Environ {drive} minutes (estimation).",
   "longLunch": "{lunch}. La table est réservée et chronométrée pour que vous quittiez le dernier trou et vous asseyiez directement.",
   "relaxedReturn": "Un retour sans hâte, environ {drive} minutes (estimation).",
   "lunchBooked": "{lunch}. Je réserve la bonne table pour votre groupe.",
   "beachOrVillage": "Une crique proche ou une ville historique, choisie selon la région une fois le programme confirmé.",
   "lastLight": "Retour à votre base, environ {drive} minutes (estimation), avec une journée complète à Majorque derrière vous."
  },
  "why": {
   "efficient": "Le golf passe en premier et les horaires restent serrés. {course} Rien dans le programme que vous n'ayez demandé.",
   "lunch": "Du bon golf et de la bonne cuisine sont les deux choses que cette île offre le plus sûrement. {course} Cette journée accorde du vrai temps aux deux.",
   "experienceAddons": "{course} Les extras que vous avez choisis méritent du vrai temps dans le programme, donc ce plan construit la journée complète autour d'eux.",
   "experiencePlain": "{course} Ce plan ajoute l'île autour de la partie sans l'encombrer."
  },
  "whyCourse": {
   "courseType": {
    "famous": "c'est l'un des parcours les plus connus de l'île",
    "scenic": "il offre les vues que vous avez demandées",
    "challenging": "c'est le parcours le plus exigeant à portée de votre base",
    "forgiving": "le tracé est large et tolérant",
    "close": "c'est le parcours de qualité le plus proche de votre hébergement"
   },
   "dayStyle": {
    "serious": "il offre une partie sérieuse",
    "relaxed": "le rythme et le tracé conviennent à une journée détendue",
    "luxury": "c'est l'option premium de votre secteur",
    "family": "il convient à tous les niveaux du groupe",
    "scenic": "le cadre en est le point fort",
    "food": "il se trouve près des meilleures tables du secteur"
   },
   "matched": "il correspond bien à votre jeu",
   "fallback": "La meilleure correspondance disponible avec vos réponses dans ce secteur.",
   "separator": ", ",
   "end": ".",
   "capitalise": true
  },
  "handles": {
   "tee": "Heure de départ obtenue au bon tarif",
   "table": "Table de restaurant réservée et calée autour de votre partie",
   "transportYes": "Transport de porte à porte organisé",
   "transportNo": "Indications d'itinéraire et de stationnement pour votre trajet",
   "buggies": "Voiturettes, clubs et locations organisés si nécessaire",
   "coachingYes": "Votre séance de coaching avec moi confirmée",
   "coachingNo": "Échauffement ou coaching sur le parcours avec moi, en option",
   "whatsapp": "Un seul contact WhatsApp pour toute la journée"
  }
 },
 "phrases": {
  "1993 redesign/expansion to 18 holes": "redessiné et agrandi à 18 trous en 1993",
  "Historic established course (1964+)": "Parcours historique et établi (depuis 1964)",
  "(original 9 holes)": "(9 trous d'origine)",
  "(18-hole expansion)": "(extension à 18 trous)",
  "(original)": "(d'origine)",
  "(2000 redesign)": "(redessin de 2000)",
  "Opened in 1995": "Ouvert en 1995",
  "redesign completed in 2006": "redessin achevé en 2006",
  "9 holes; extended to 18 in 1995": "9 trous ; étendu à 18 en 1995",
  "renovated €10M": "rénové pour 10 M€",
  "(9 holes)": "(9 trous)"
 }
}

export default data
