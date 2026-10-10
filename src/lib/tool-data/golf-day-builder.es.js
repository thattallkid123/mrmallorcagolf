// golf-day-builder copy for 'es'. Generated overlay: the English master is in
// golf-day-builder-logic.js (COURSES, RESTAURANTS, ADDONS, QUESTIONS) and EN_PLAN in golf-day-builder-localize.js.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "stepFmt": "Paso {n} de {total} · {section}",
 "sections": {
  "region": "Ubicación",
  "dayStyle": "Estilo del día",
  "level": "Nivel de golf",
  "start": "Hora de salida",
  "courseType": "Tipo de campo",
  "addons": "Más allá del golf",
  "transport": "Transporte",
  "group": "Su grupo"
 },
 "teeWindows": {
  "early": "8:00 a 9:00",
  "mid": "10:00 a 11:00",
  "pm": "13:30 a 14:30"
 },
 "factLabels": {
  "par": "Par",
  "nineHoles": "9 hoyos",
  "hotelOnly": "Solo huéspedes del hotel",
  "noHandicap": "No se exige hándicap",
  "handicapRequired": "Se exige hándicap",
  "certificate": " + certificado"
 },
 "built": {
  "line": "Diseñado para {group}, {region}.",
  "groups": {
   "solo": "un golfista en solitario",
   "couple": "una pareja",
   "friends": "un grupo de amigos",
   "family": "una familia",
   "vip": "un grupo VIP o corporativo"
  },
  "regions": {
   "southwest": "alojados en el suroeste",
   "palma": "alojados en Palma o cerca",
   "north": "alojados en el norte",
   "east": "alojados en el este",
   "south": "alojados en el sur",
   "unbooked": "alojados donde mejor convenga al golf"
  }
 },
 "questions": {
  "region": {
   "title": "¿Dónde se aloja?",
   "sub": "El plan se construye en torno a su base.",
   "opts": {
    "southwest": [
     "Suroeste",
     "Santa Ponsa, Andratx, Bendinat, Calvià"
    ],
    "palma": [
     "Palma y alrededores",
     "Ciudad de Palma, Son Vida, centro de la isla"
    ],
    "north": [
     "Norte",
     "Alcúdia, Pollença, las bahías"
    ],
    "east": [
     "Este",
     "Cala Millor, Canyamel, Artà"
    ],
    "south": [
     "Sur",
     "Llucmajor, zona del aeropuerto, Son Antem"
    ],
    "unbooked": [
     "Aún sin reservar",
     "Le sugeriré la mejor base para el golf"
    ]
   }
  },
  "dayStyle": {
   "title": "¿Qué tipo de día busca?",
   "sub": "Elija el que más se parezca a usted.",
   "opts": {
    "serious": [
     "Golf en serio",
     "La ronda es el acontecimiento principal"
    ],
    "relaxed": [
     "Golf relajado",
     "Buen golf sin presión"
    ],
    "luxury": [
     "Lujo",
     "Lo mejor de todo, ya resuelto"
    ],
    "family": [
     "Día en familia",
     "Golf y algo para todos"
    ],
    "scenic": [
     "Paisajístico",
     "Primero las vistas, después el resultado"
    ],
    "food": [
     "Primero la comida",
     "Golf construido en torno a un gran almuerzo"
    ]
   }
  },
  "level": {
   "title": "¿Cómo describiría su golf?",
   "sub": "Las respuestas sinceras dan mejores días.",
   "opts": {
    "beginner": [
     "Principiante",
     "Nuevo en el juego o que vuelve a él"
    ],
    "casual": [
     "Ocasional",
     "Unas pocas rondas al año"
    ],
    "confident": [
     "Seguro",
     "Jugador habitual, hándicap medio"
    ],
    "low": [
     "Hándicap bajo",
     "Un solo dígito, con ganas de una prueba de verdad"
    ]
   }
  },
  "start": {
   "title": "¿Cuándo le gusta salir?",
   "sub": "",
   "opts": {
    "early": [
     "Temprano por la mañana",
     "De los primeros en salir, y el día es suyo después"
    ],
    "mid": [
     "A media mañana",
     "Una salida civilizada con un día completo por delante"
    ],
    "pm": [
     "Por la tarde",
     "Mañana tranquila, golf con luz de tarde"
    ]
   }
  },
  "courseType": {
   "title": "¿Qué es lo más importante del campo?",
   "sub": "",
   "opts": {
    "famous": [
     "Un nombre conocido",
     "Los campos por los que todos preguntan"
    ],
    "scenic": [
     "Paisaje",
     "Vistas al mar, montañas, desniveles"
    ],
    "challenging": [
     "Una prueba de verdad",
     "Un campo que hace preguntas"
    ],
    "forgiving": [
     "Tolerante",
     "Ancho, amable y divertido"
    ],
    "close": [
     "Cerca de mi hotel",
     "El mínimo tiempo en el coche"
    ]
   }
  },
  "addons": {
   "title": "¿Qué completaría el día?",
   "sub": "Seleccione lo que le atraiga, o nada",
   "opts": {
    "lunch": [
     "Almuerzo largo",
     "Una mesa mallorquina de verdad"
    ],
    "beach": [
     "Playa",
     "Un baño después de la ronda"
    ],
    "spa": [
     "Spa",
     "Recuperación bien hecha"
    ],
    "village": [
     "Pueblo local",
     "Una hora en una ciudad histórica"
    ],
    "wine": [
     "Vino",
     "Una visita a una bodega o una cata"
    ],
    "family": [
     "Actividad familiar",
     "Algo para los que no juegan"
    ],
    "coaching": [
     "Coaching conmigo",
     "Sesión con un PGA Advanced Professional"
    ]
   }
  },
  "transport": {
   "title": "¿Necesita que organicemos el transporte?",
   "sub": "",
   "opts": {
    "yes": [
     "Sí, organícelo",
     "Conductor o traslados, de puerta a puerta"
    ],
    "no": [
     "No, iremos en coche",
     "Coche de alquiler o propio"
    ]
   }
  },
  "group": {
   "title": "¿Quién viene?",
   "sub": "",
   "opts": {
    "solo": [
     "Solo yo",
     "Golf en solitario, concentración total"
    ],
    "couple": [
     "Una pareja",
     "Dos personas"
    ],
    "friends": [
     "Amigos",
     "Un viaje en grupo pequeño"
    ],
    "family": [
     "Familia",
     "Edades e intereses variados"
    ],
    "vip": [
     "VIP o corporativo",
     "Recibir a clientes o celebrar una ocasión"
    ]
   }
  }
 },
 "courses": {
  "son-gual": {
   "facts": [
    "Par 72 · Campeonato",
    "Thomas Himmel, 2007"
   ],
   "blurb": "El mejor estado de la isla y un trazado que pone a prueba todas las facetas de su juego. Lo bastante ancho para disfrutarlo, lo bastante exigente para recordarlo. Tenga en cuenta que se exige certificado de hándicap."
  },
  "alcanada": {
   "facts": [
    "Par 72 · Robert Trent Jones Jr.",
    "58 búnkeres"
   ],
   "blurb": "Vistas al mar durante casi toda la ronda y un diseño de Robert Trent Jones Jr. que se sostiene sin ellas. Los 58 búnkeres están colocados para entrar en juego, así que cuente con usar el sand wedge."
  },
  "t-golf-palma": {
   "facts": [
    "Par 71 · Diseño de Jack Nicklaus",
    "El único campo de Nicklaus en Mallorca"
   ],
   "blurb": "Un diseño de Jack Nicklaus a veinte minutos de Palma. Firme, estratégico y honesto: los buenos golpes se premian y los malos se castigan en proporción."
  },
  "son-muntaner": {
   "facts": [
    "Par 72 · Mejor de España 2025",
    "Olivo Sa Capitana, hoyo 15"
   ],
   "blurb": "El buque insignia de los campos de Arabella y la experiencia de club más pulida cerca de Palma. El estado del campo y el servicio son el atractivo aquí, y ambos cumplen."
  },
  "santa-ponsa": {
   "facts": [
    "Par 72 · El más largo de la isla",
    "Sede del European Tour 2021"
   ],
   "blurb": "Calles anchas y un ritmo relajado en el suroeste. La longitud intimida en la tarjeta, pero la anchura lo mantiene jugable para la mayoría de los niveles."
  },
  "andratx": {
   "facts": [
    "Par 72 · David Kidd, 1999",
    "El par 5 más largo de España (609 m)"
   ],
   "blurb": "Desniveles espectaculares por las colinas sobre Camp de Mar. Las vistas son el titular, pero las líneas estrechas y los lies inclinados hacen que juegue más duro de lo que sugiere la tarjeta."
  },
  "son-vida": {
   "facts": [
    "Par 70 · Fundado en 1964 · El más antiguo de Mallorca",
    "Seve ganó aquí en 1990"
   ],
   "blurb": "El campo más antiguo de Mallorca, que lleva bien su historia. Corto para los estándares modernos, encantador de principio a fin y una elección sensata cuando el día va de algo más que del resultado."
  },
  "bendinat": {
   "facts": [
    "Par 70 · Martin Hawtree, 1986",
    "5.660 m"
   ],
   "blurb": "Estrecho, bonito y escondido entre pinos, con destellos de mar en los hoyos más altos. Una ronda más corta y sociable que encaja en un plan de media jornada. Deje el driver en la bolsa en varias salidas."
  },
  "capdepera": {
   "facts": [
    "Par 73 · Dan Maples",
    "Hoyo 15 elegido el mejor de Mallorca"
   ],
   "blurb": "Golf en campiña ondulada en el tranquilo este, normalmente sin aglomeraciones ni siquiera en temporada. Amable desde la salida, con variedad suficiente para mantener el interés de los mejores jugadores."
  },
  "canyamel": {
   "facts": [
    "Par 73 · José Gancedo",
    "Caseta de piedra en el hoyo 9, única en Mallorca"
   ],
   "blurb": "Un campo de valle cerca de la costa que pocos visitantes planifican y del que la mayoría se alegra. Exigente sin hacer ruido, sobre todo en las aproximaciones a greens inclinados."
  },
  "pula": {
   "facts": [
    "Par 72 · Rediseño de Olazábal",
    "Campo de prácticas de dos niveles · TrackMan Range"
   ],
   "blurb": "Un campo acogedor de la costa este con un serio pasado de torneos, rediseñado por José María Olazábal. Generoso donde importa y bien cuidado todo el año."
  },
  "son-servera": {
   "facts": [
    "Par 72 · Fundado en 1967 · 2.º más antiguo de Mallorca",
    "Parkland costero"
   ],
   "blurb": "Parkland clásico bordeado de pinos junto al mar y uno de los clubes más antiguos de la isla. Sin prisas, tradicional y una prueba justa sin dramatismo."
  },
  "son-antem-west": {
   "facts": [
    "Par 72 · Francisco Lopez Segales, 1995",
    "A 25 min de Palma"
   ],
   "blurb": "Golf en campiña abierta cerca de Llucmajor, a 15 minutos de Palma y 25 del aeropuerto. Las calles generosas y el trazado llano lo hacen accesible para la mayoría de los niveles."
  },
  "son-termes": {
   "facts": [
    "Par 70 · Grupo Harris, 1998",
    "Vistas de montaña sobre Palma"
   ],
   "blurb": "Golf de montaña en las estribaciones de la Tramuntana, a 25 minutos de Palma. En días despejados se ven desde los hoyos altos el Castell de Bellver y la catedral, con el Mediterráneo detrás."
  },
  "t-golf-calvia": {
   "facts": [
    "Par 72 · 15 lagos",
    "Sede del Mallorca Open"
   ],
   "blurb": "Reconstruido tras una renovación de 10 millones de euros, T Golf Calvià se siente pulido de principio a fin. Líneas de salida amplias, 15 lagos en juego y un estado excelente en todo el recorrido."
  },
  "son-antem-east": {
   "facts": [
    "Par 72 · Francisco Lopez-Segalés, 1994",
    "Resort Marriott · 5 lagos"
   ],
   "blurb": "El más accesible de los dos campos de Son Antem. Calles generosas y cinco lagos en una antigua finca de caza cerca de Llucmajor."
  },
  "son-quint": {
   "facts": [
    "Par 71 · Inaugurado en 2007",
    "Tiger Woods y Charlie jugaron aquí, julio de 2022"
   ],
   "blurb": "El más cómodo de los campos de Son Vida. Calles anchas, cuatro posiciones de salida y, desde el hoyo 8, una vista directa a la catedral de Palma."
  },
  "maioris": {
   "facts": [
    "Par 72 · Inaugurado en 2006",
    "Uno de los pocos campos de prácticas públicos de césped de Mallorca"
   ],
   "blurb": "Los nueve primeros, escoceses y con baches; los nueve finales, más americanos y llanos: dos personalidades en una sola ronda. Menos concurrido que los campos de Palma."
  },
  "vall-dor": {
   "facts": [
    "Par 71 · 1986",
    "Final junto al acantilado con vistas al mar de la costa este"
   ],
   "blurb": "Una ronda que mejora a medida que avanza: unos primeros nueve estrechos y tradicionales, y luego los nueve finales se abren hacia la costa con vistas al mar y un final junto al acantilado."
  },
  "golf-pollenca": {
   "facts": [
    "Par 35 · 9 hoyos · José Gancedo, 1986",
    "Vistas a la Tramuntana, la bahía de Pollença y la bahía de Alcúdia"
   ],
   "blurb": "Nueve hoyos integrados en la ladera sobre el pueblo de Pollença: vistas a la Tramuntana, a dos bahías y al mar. El complemento adecuado por la tarde tras una mañana en Alcanada. Se completa en 90 minutos."
  },
  "santa-ponsa-2": {
   "facts": [
    "Par 72 · Solo socios",
    "Los invitados deben jugar con un socio"
   ],
   "blurb": "Normalmente el campo más tranquilo del grupo del suroeste. Las calles bordeadas de árboles premian la colocación sobre la potencia. Puedo acompañar a clientes como invitados míos cuando juego yo."
  },
  "santa-ponsa-3": {
   "facts": [
    "Par 30 · 9 hoyos · Solo socios",
    "Los invitados deben jugar con un socio"
   ],
   "note": "9 hoyos. Plantéelo como complemento de tarde junto a una ronda completa en Santa Ponsa 1 o 2",
   "blurb": "Nueve hoyos por la urbanización de Santa Ponsa: cortos, precisos y muy adecuados para principiantes, juniors o cualquiera que quiera una ronda rápida."
  },
  "palma-pitch-putt": {
   "facts": [
    "Par 27 · 9 hoyos, todos par 3 · desde 17 €",
    "El único pitch & putt de Mallorca"
   ],
   "note": "9 hoyos. Sirve como plan de media jornada, como calentamiento previo a la ronda o como introducción al juego",
   "blurb": "El único pitch & putt de Mallorca y el campo que uso para las introducciones de coaching. Todos par 3 de entre 50 y 100 m."
  },
  "reserva-rotana": {
   "facts": [
    "9 hoyos · Solo huéspedes del hotel · Campo de la finca",
    "Capdepera y Pula a menos de 25 minutos"
   ],
   "note": "Solo huéspedes del hotel. Esta opción solo se aplica si su grupo se aloja en Reserva Rotana",
   "blurb": "Un campo privado de 9 hoyos en Reserva Rotana, cerca de Manacor, disponible exclusivamente para huéspedes del hotel."
  }
 },
 "restaurants": {
  "southwest": {
   "casual": "Restaurante Campino en Golf de Andratx: cocina italiana y mediterránea en la terraza, reservada según la hora en que termine su ronda",
   "premium": "Sa Clastra (1 estrella Michelin) en Castell Son Claret, Es Capdellà (a unos 15 minutos de la mayoría de los campos del suroeste). Una de las mejores mesas de almuerzo de la isla",
   "village": "Almuerzo en el pueblo de Calvià: un tranquilo pueblo de montaña con restaurantes locales que casi no ven turistas. Reservo la mesa adecuada",
   "michelin": "Sa Clastra (1★) en Castell Son Claret, Es Capdellà, o Es Fum (1★) en el St. Regis Mardavall: dos de las mejores mesas de la isla, ambas en el suroeste"
  },
  "palma": {
   "casual": "Na Capitana en Son Muntaner: un almuerzo mediterráneo fiable en la terraza con vistas al campo, o un corto trayecto hasta el mercado de Santa Catalina para tapas",
   "premium": "DINS Santi Taura (1 estrella Michelin) en el centro de Palma, o Marc Fosh (1 estrella Michelin) en el casco antiguo. Ajusto la reserva a su ronda",
   "village": "Mercado de Santa Catalina: el mejor barrio gastronómico de Palma, a 10 minutos de la mayoría de los campos. Elijo el sitio adecuado para el grupo",
   "michelin": "DINS Santi Taura (1★), Marc Fosh (1★) y Zaranda (1★) están en Palma: el mejor grupo Michelin de la isla, todos a menos de 15 minutos de los campos de Palma"
  },
  "north": {
   "casual": "Almuerzo frente al mar en Port de Pollença: el paseo marítimo tiene varias buenas opciones de pescado y marisco. Reservo con antelación en temporada alta",
   "premium": "Maca de Castro (1 estrella Michelin + Estrella Verde) en Port d'Alcúdia: menús degustación de temporada con producto local. A unos 10 minutos de Alcanada",
   "village": "Casco antiguo de Pollença: un tranquilo pueblo de montaña con una buena plaza de mercado, restaurantes locales fiables y mercado los domingos. Merece el pequeño desvío",
   "michelin": "Maca de Castro (1★ + Estrella Verde) en Port d'Alcúdia: uno de los restaurantes de autor más interesantes de la isla, cerca del golf de Alcanada"
  },
  "east": {
   "casual": "Restaurante Roca Viva en Capdepera Golf: mediterráneo y mallorquín, con huerto propio y terraza junto al 18. Uno de los mejores almuerzos de club de la isla",
   "premium": "VORO (2 estrellas Michelin) en Cap Vermell Grand Hotel, Canyamel: el único restaurante de dos estrellas de Mallorca, del chef Álvaro Salazar. Menú degustación de 18 o 22 pases",
   "village": "Casco antiguo de Artà: uno de los pueblos con más carácter del este de Mallorca. Una buena parada para café y almuerzo antes o después de la ronda",
   "michelin": "VORO (2★) en Cap Vermell, Canyamel: el argumento Michelin más sólido para pasar una noche en la costa este"
  },
  "south": {
   "casual": "T19 Restobar en Golf Maioris: terraza exterior, cocina de club alemana y mediterránea, una parada útil cerca del aeropuerto",
   "premium": "Andreu Genestra (1 estrella Michelin + Estrella Verde) cerca de Llucmajor: menús degustación de temporada, cocina guiada por la sostenibilidad. A unos 10 minutos de Golf Maioris y Son Antem. Reserve con mucha antelación",
   "village": "Casco antiguo de Llucmajor: un tranquilo pueblo con mercado a 20 minutos de Palma, con buenos restaurantes locales y mercado los sábados",
   "michelin": "Andreu Genestra (1★ + Estrella Verde) cerca de Llucmajor: uno de los restaurantes de autor más interesantes de Mallorca, cerca del grupo de campos del sur"
  }
 },
 "addons": {
  "beach": [
   "Hora de playa",
   "Una cala cercana para un baño y una hora tranquila a la sombra. La playa se elige según la región cuando se confirma el plan."
  ],
  "spa": [
   "Spa y recuperación",
   "Una sesión después de la ronda en un spa de resort de la zona. Entre las opciones están Arabella Son Vida, Secrets Paguera y Bendinat. Confirmo el lugar cuando reserva."
  ],
  "village": [
   "Hora en un pueblo",
   "Una hora en una de las ciudades históricas de la isla: café, callejuelas y uno o dos miradores."
  ],
  "wine": [
   "Cata de vinos",
   "Una cata guiada en una bodega local. Mallorca tiene una escena vinícola pequeña pero seria: José L. Ferrer en Binissalem y Macià Batle merecen el desvío. Lo ajusto a la hora de la ronda."
  ],
  "family": [
   "Actividad familiar",
   "Un paseo en barco, las cuevas o un parque acuático según la región y las edades. Se confirma con la reserva."
  ],
  "coaching": [
   "Coaching conmigo",
   "Una sesión enfocada conmigo, UK PGA Advanced Professional: calentamiento, técnica o estrategia en el campo."
  ],
  "lunch": [
   "Almuerzo largo",
   "Una mesa mallorquina de verdad, reservada y ajustada a su ronda."
  ]
 },
 "plan": {
  "names": {
   "efficient": "Día de golf eficiente",
   "lunch": "Golf y largo almuerzo",
   "experience": "Experiencia completa"
  },
  "taglines": {
   "efficient": "La ronda es el día. Bien jugada, y la tarde queda libre.",
   "lunch": "Una ronda seria seguida de una mesa seria.",
   "experience": "El golf es la pieza central. La isla llena el resto del programa."
  },
  "time": {
   "depart": "{depart} (estimación)",
   "onArrival": "A la llegada",
   "beforeRound": "Antes de la ronda",
   "teeWindow": "Ventana de salida {tee} (estimación)",
   "afterRound": "Después de la ronda",
   "earlyAfternoon": "Primera hora de la tarde",
   "lateAfternoon": "Última hora de la tarde",
   "lunch": "Almuerzo",
   "afternoon": "Tarde",
   "evening": "Noche"
  },
  "title": {
   "depart": "Salida desde su alojamiento",
   "unhurried": "Una salida sin prisas",
   "clubhouse": "Una copa en la casa club",
   "return": "Regreso",
   "longLunch": "Un largo almuerzo mallorquín",
   "relaxedReturn": "Un regreso tranquilo",
   "lunchBooked": "Almuerzo, reservado y cronometrado",
   "beachOrVillage": "Hora de playa o de pueblo",
   "lastLight": "Regreso con la última luz",
   "warmupCoach": "Calentamiento con coaching conmigo",
   "warmupCoffee": "Calentamiento y café",
   "holes18": "18 hoyos en {course}",
   "holes9": "9 hoyos en {course}"
  },
  "desc": {
   "transfer": "Un traslado privado le recoge en su alojamiento. Unos {drive} minutos hasta el campo (estimación).",
   "selfDrive": "Conducción propia hasta el campo, unos {drive} minutos (estimación). Las indicaciones de aparcamiento llegan con el plan confirmado.",
   "warmupCoach": "Una sesión de 45 minutos conmigo: calentamiento en el campo de prácticas, juego corto y un plan para los hoyos que vienen.",
   "warmupCoffee": "Bolas de prácticas, el green de putt y un café en la terraza. Llegue 45 minutos antes de su hora de salida.",
   "holeNote": " Nota: {note}",
   "clubhouse": "Una copa tranquila en la terraza mientras se discuten las tarjetas.",
   "returnEfficient": "De vuelta en su base con el resto del día intacto. Unos {drive} minutos (estimación).",
   "longLunch": "{lunch}. La mesa está reservada y cronometrada para que salga del último hoyo y se siente directamente.",
   "relaxedReturn": "Un regreso pausado, de unos {drive} minutos (estimación).",
   "lunchBooked": "{lunch}. Reservo la mesa adecuada para su grupo.",
   "beachOrVillage": "Una cala cercana o un pueblo histórico, elegido según la región cuando se confirma el plan.",
   "lastLight": "De vuelta a su base, unos {drive} minutos (estimación), con un día completo de Mallorca a la espalda."
  },
  "why": {
   "efficient": "El golf va primero y los horarios se mantienen ajustados. {course} Nada en el programa que usted no haya pedido.",
   "lunch": "El buen golf y la buena mesa son las dos cosas que esta isla ofrece con más fiabilidad. {course} Este día da tiempo suficiente a ambas.",
   "experienceAddons": "{course} Los extras que ha elegido merecen tiempo real en el programa, así que este plan construye el día completo en torno a ellos.",
   "experiencePlain": "{course} Este plan añade la isla en torno a la ronda sin agobiarla."
  },
  "whyCourse": {
   "courseType": {
    "famous": "es uno de los campos más conocidos de la isla",
    "scenic": "tiene las vistas que usted pedía",
    "challenging": "es el campo más exigente al alcance de su base",
    "forgiving": "el trazado es ancho y tolerante",
    "close": "es el campo de calidad más cercano a donde se aloja"
   },
   "dayStyle": {
    "serious": "ofrece una ronda seria",
    "relaxed": "el ritmo y el trazado encajan con un día relajado",
    "luxury": "es la opción premium de su zona",
    "family": "funciona para todos los niveles del grupo",
    "scenic": "el entorno es lo más destacado",
    "food": "está cerca de las mejores opciones de restauración de la zona"
   },
   "matched": "encaja bien con su juego",
   "fallback": "La mejor coincidencia disponible con sus respuestas en esta zona.",
   "separator": ", ",
   "end": ".",
   "capitalise": true
  },
  "handles": {
   "tee": "Hora de salida asegurada a la tarifa adecuada",
   "table": "Mesa de restaurante reservada y ajustada a su ronda",
   "transportYes": "Transporte de puerta a puerta organizado",
   "transportNo": "Indicaciones de ruta y aparcamiento para su trayecto",
   "buggies": "Buggies, palos y alquileres organizados si hacen falta",
   "coachingYes": "Su sesión de coaching conmigo confirmada",
   "coachingNo": "Calentamiento opcional o coaching en el campo conmigo",
   "whatsapp": "Un único contacto de WhatsApp para todo el día"
  }
 },
 "phrases": {
  "1993 redesign/expansion to 18 holes": "rediseño y ampliación a 18 hoyos en 1993",
  "Historic established course (1964+)": "Campo histórico y consolidado (desde 1964)",
  "(original 9 holes)": "(los 9 hoyos originales)",
  "(18-hole expansion)": "(ampliación a 18 hoyos)",
  "(original)": "(original)",
  "(2000 redesign)": "(rediseño de 2000)",
  "Opened in 1995": "Inaugurado en 1995",
  "redesign completed in 2006": "rediseño completado en 2006",
  "9 holes; extended to 18 in 1995": "9 hoyos; ampliado a 18 en 1995",
  "renovated €10M": "renovado por 10 M€",
  "(9 holes)": "(9 hoyos)"
 }
}

export default data
