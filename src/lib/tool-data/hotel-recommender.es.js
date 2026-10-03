// hotel-recommender copy for 'es'. Generated overlay: the English master is in
// hotel-recommender-logic.js (HOTELS, QUESTIONS_DATA), keyed by hotel id and question key.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "hotels": {
  "arabella-son-vida": {
   "pills": [
    "En el campo",
    "Spa",
    "Cocina Michelin"
   ],
   "why": "Son Vida, Son Quint y Son Muntaner (mejor campo de golf de España 2025) están dentro de la finca. T Golf Calvià está a 10 minutos. Despertarse, jugar, comer, recuperarse.",
   "andy": "La respuesta por defecto para un grupo centrado en el golf que quiere tenerlo todo resuelto. Es Fum, con una estrella Michelin, está en el propio hotel. Puerto Portals queda a pie para las noches.",
   "golf": "En la finca: Son Vida, Son Quint, Son Muntaner (mejor de España 2025). T Golf Calvià 10 min. Real Golf de Bendinat 15 min. grupo de Santa Ponsa 20 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Sheraton Collection"
  },
  "gran-melia-de-mar": {
   "pills": [
    "Playa",
    "Spa",
    "Palma cerca"
   ],
   "why": "Ultralujo con acceso a la playa y servicio completo de resort. Golf en Bendinat a 8 minutos. Desde Illetas se llega tanto a Palma como al grupo de campos del suroeste.",
   "andy": "Un cinco estrellas más tranquilo que el Mandarin Oriental. Base flexible para distintas combinaciones de rondas.",
   "golf": "Real Golf de Bendinat 8 min. T Golf Calvià 15 min. Son Vida 20 min.",
   "travelTime": "12 min del aeropuerto de Palma",
   "subname": "Illetas"
  },
  "hospes-maricel": {
   "pills": [
    "Boutique",
    "Frente al mar",
    "Embarcadero privado"
   ],
   "why": "Aire de palacio de los años cuarenta con embarcadero privado. Glamour mallorquín de siempre, más pequeño e íntimo que los grandes cinco estrellas. Golf en Bendinat a 8 minutos.",
   "andy": "Una alternativa distinta a los cinco estrellas más grandes. De esos sitios que se sienten genuinamente mallorquines y no de cadena hotelera internacional.",
   "golf": "Real Golf de Bendinat 8 min. T Golf Calvià 15 min.",
   "travelTime": "12 min del aeropuerto de Palma",
   "subname": "Cas Català"
  },
  "hotel-bendinat": {
   "pills": [
    "En el campo",
    "Buena relación calidad-precio",
    "Zona tranquila"
   ],
   "why": "Justo al lado del Real Golf de Bendinat. La opción sensata cuando lo que se busca es golf y una buena ubicación, no lujo junto a la piscina.",
   "andy": "El viejo Bendinat es uno de los rincones más tranquilos del suroeste. No es un resort. Es un hotel de golf honesto que hace lo que promete.",
   "golf": "Real Golf de Bendinat a la puerta. T Golf Calvià 10 min. grupo de Santa Ponsa 20 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Bendinat"
  },
  "son-caliu": {
   "pills": [
    "Playa",
    "Spa de 1100 m²",
    "Apto para familias"
   ],
   "why": "Cuatro estrellas de gama media con un spa de verdad y acceso al mar por un embarcadero. Un punto intermedio práctico para el grupo de campos del suroeste a un precio razonable.",
   "andy": "Entre Puerto Portals y Palma Nova. Bueno para grupos mixtos en los que no todos juegan al golf. El spa y la playa están a la altura.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Santa Ponsa 20 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Palma Nova"
  },
  "zafiro-andratx": {
   "pills": [
    "Playa",
    "Spa",
    "Resort familiar",
    "Golf de Andratx a 5 min"
   ],
   "why": "Resort de cinco estrellas a cinco minutos del Golf de Andratx. La playa se puede recorrer a pie. Buena relación calidad-precio si la mitad del grupo juega y la otra mitad no.",
   "andy": "Una cosa que conviene planificar: el Golf de Andratx es el campo más difícil de la isla, con un límite de hándicap de 28. Para los jugadores menos expertos, combine con las rondas más fáciles de Santa Ponsa.",
   "golf": "Golf de Andratx 5 min. T Golf Calvià 20 min. grupo de Santa Ponsa 25 min.",
   "travelTime": "30 min del aeropuerto de Palma",
   "subname": "Camp de Mar"
  },
  "secrets-villamil": {
   "pills": [
    "Solo adultos",
    "Piscina en el acantilado",
    "Playa de Paguera"
   ],
   "why": "AMR Collection solo para adultos en la playa de Paguera. Suites sobre el agua, piscinas infinitas al borde del acantilado, varias opciones gastronómicas. Golf de Andratx a 15 minutos.",
   "andy": "Una buena base de cinco estrellas si la pareja quiere un resort de playa de verdad con toda la gama de campos del suroeste disponible. Andratx es el más cercano y el más espectacular.",
   "golf": "Golf de Andratx 15 min. T Golf Calvià 20 min. Santa Ponsa 25 min.",
   "travelTime": "30 min del aeropuerto de Palma",
   "subname": "AMR Collection, Paguera"
  },
  "donna-portals": {
   "pills": [
    "Boutique",
    "Cala privada",
    "Puerto Portals cerca"
   ],
   "why": "Hotel boutique de diseño junto a una cala privada en Portals Nous. Suites temáticas, Day Club, piscina de flores. El puerto deportivo de Puerto Portals para las noches.",
   "andy": "T Golf Calvià a 10 minutos tierra adentro, el grupo de Santa Ponsa a 15. Port Adriano es una buena base para cenar entre semana.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 10 min. Son Vida 18 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Portals Nous"
  },
  "finca-serena": {
   "pills": [
    "Finca",
    "Bienestar",
    "40 hectáreas"
   ],
   "why": "Finca holística de cinco estrellas con 40 hectáreas de terreno agrícola y un programa de bienestar serio. Golf Maioris a 5 minutos, Son Gual a 15.",
   "andy": "Golf Maioris y Son Gual son dos de los campos más interesantes de Mallorca. Andreu Genestra (una estrella Michelin) está cerca.",
   "golf": "Golf Maioris 5 min. Son Antem East/West 10 min. Son Gual 15 min. Nota: esta zona está a 40-60 min de la ciudad de Palma.",
   "travelTime": "25 min del aeropuerto de Palma",
   "subname": "Cerca de Llucmajor"
  },
  "sw-villa": {
   "pills": [
    "Villa privada",
    "Piscina propia",
    "Total flexibilidad"
   ],
   "why": "Para seis o más, una villa cambia el viaje: desayunos tardíos, su propia piscina después de la ronda, sin horarios de hotel. Cuatro campos a menos de 15 minutos.",
   "andy": "La ubicación de la villa tiene que encajar con las horas de salida. Es justo el tipo de ajuste en el que puedo ayudarle.",
   "golf": "Golf Santa Ponsa 1, Golf de Andratx, T Golf Calvià, Real Golf de Bendinat: todos a 15-20 min según la ubicación de la villa. Son Antem East/West 25-30 min.",
   "travelTime": "25-35 min del aeropuerto de Palma",
   "subname": "Zona Santa Ponsa / Andratx",
   "name": "Villa de lujo, suroeste"
  },
  "son-net": {
   "pills": [
    "Finca histórica",
    "Siglo XVII",
    "Piscina infinita"
   ],
   "why": "Finca de piedra del siglo XVII en las estribaciones de la Tramuntana, a 20 minutos del Golf de Andratx. Piscina infinita, olivares antiguos, sensación de total privacidad.",
   "andy": "Uno de los edificios más bonitos de la isla. Una auténtica escapada a una finca que sigue dejando a su alcance los campos del suroeste.",
   "golf": "Golf de Andratx 20 min. T Golf Calvià 25 min. grupo de Santa Ponsa 30 min.",
   "travelTime": "25 min del aeropuerto de Palma",
   "subname": "Puigpunyent"
  },
  "valparaiso-palace": {
   "pills": [
    "Resort grande",
    "Salas de conferencias",
    "Vistas a Palma"
   ],
   "why": "Gran cuatro estrellas en la colina sobre Palma, con vistas panorámicas de la bahía y spa completo. Práctico para grupos grandes y viajes de empresa que necesitan salas de reuniones además del golf.",
   "andy": "No es el más glamuroso, pero muy capaz para grupos. Buena base para varias combinaciones de campos en el suroeste y la zona de Palma.",
   "golf": "Son Vida / Son Quint / Son Muntaner 10 min. Real Golf de Bendinat 15 min. T Golf Calvià 20 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Son Armadans, Palma"
  },
  "melia-calvia-beach": {
   "pills": [
    "Resort de playa",
    "Santa Ponsa",
    "Golf cerca"
   ],
   "why": "Gran resort de playa en pleno Santa Ponsa, a poca distancia a pie del Golf Santa Ponsa 1. Buenas instalaciones para grupos grandes que quieren playa y varios campos.",
   "andy": "Los campos de Santa Ponsa están a su alrededor. El Golf Santa Ponsa 1 queda a 10 minutos andando. Una base sólida para grupos sin el precio de un boutique.",
   "golf": "Golf Santa Ponsa 1 a pie. Golf Santa Ponsa 2 y 3 cerca. T Golf Calvià 15 min. Golf de Andratx 20 min.",
   "travelTime": "25 min del aeropuerto de Palma",
   "subname": "Santa Ponsa"
  },
  "barcelo-illetas": {
   "pills": [
    "Vistas al mar",
    "Preferentemente adultos",
    "Calidad-precio"
   ],
   "why": "Cuatro estrellas bien de precio en Illetas con buenas vistas al mar y acceso directo al agua. Golf en Bendinat a 10 minutos. Una opción sensata de gama media en una zona cara.",
   "andy": "Buena relación calidad-precio para la ubicación. Illetas está un escalón por encima de Palma Nova, sin los precios de cinco estrellas del Gran Meliá.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.",
   "travelTime": "12 min del aeropuerto de Palma",
   "subname": "Illetas"
  },
  "portals-hills": {
   "pills": [
    "Solo adultos",
    "En lo alto de una colina",
    "Piscina infinita"
   ],
   "why": "Hotel boutique solo para adultos sobre Portals Nous, con piscina infinita mirando al mar. Íntimo y tranquilo, a 10 minutos tanto del golf como del puerto deportivo de Puerto Portals.",
   "andy": "Una alternativa más tranquila al Donna Portals para parejas que prefieren privacidad a ambiente. T Golf Calvià está a 10 minutos.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 12 min. Son Vida 15 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Portals Nous"
  },
  "son-antem-marriott": {
   "pills": [
    "En el campo",
    "36 hoyos",
    "Instalaciones de resort"
   ],
   "why": "Resort Marriott situado justo entre Son Antem East y West: 36 hoyos a la puerta. Buenas instalaciones de golf para empresas y la comodidad fiable de un cuatro estrellas.",
   "andy": "No es el hotel más emocionante de la isla, pero sí el más práctico si Son Antem está en el programa. Golf Maioris está a 10 minutos y Son Gual a 15.",
   "golf": "Son Antem East y West en el propio recinto. Golf Maioris 10 min. Son Gual 15 min. Zona de Finca Serena accesible.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Llucmajor"
  },
  "sol-palmanova": {
   "pills": [
    "Playa económica",
    "Familia",
    "Grupo de campos de Santa Ponsa"
   ],
   "why": "Hotel de playa de tres estrellas sin complicaciones en Palmanova. Cumple para grupos centrados en el golf y no en el hotel. T Golf Calvià a 10 minutos, el grupo de Santa Ponsa a 15.",
   "andy": "La respuesta económica y honesta para el suroeste. Gaste menos en la habitación y gástelo en las rondas.",
   "golf": "T Golf Calvià 10 min. Real Golf de Bendinat 15 min. Golf Santa Ponsa 1 y 2 aprox. 15 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Palmanova"
  },
  "hipotels-flamenco": {
   "pills": [
    "Resort de playa",
    "Paguera",
    "Económico"
   ],
   "why": "Tres estrellas fiable en la playa de Paguera. Una de las opciones de playa más asequibles del suroeste, con Golf de Andratx a 15 minutos y Santa Ponsa a 20.",
   "andy": "Sin florituras, buena ubicación para el golf. La playa y la piscina cumplen para los que no juegan.",
   "golf": "Golf de Andratx 15 min. T Golf Calvià 20 min. Golf Santa Ponsa 1 aprox. 20 min.",
   "travelTime": "28 min del aeropuerto de Palma",
   "subname": "Paguera"
  },
  "cala-vinyes": {
   "pills": [
    "Cala tranquila",
    "Gama media",
    "Golf de Andratx cerca"
   ],
   "why": "Hotel pequeño sobre una cala tranquila en Cala Vinyes. Menos concurrido que Paguera o Santa Ponsa, y el Golf de Andratx está a 10 minutos. Un rincón más calmado del suroeste.",
   "andy": "Bueno para parejas que quieren una base más tranquila que los grandes resorts del suroeste. La cala es una de las más bonitas de la zona.",
   "golf": "Golf de Andratx 10 min. T Golf Calvià 18 min. Golf Santa Ponsa 1 aprox. 20 min.",
   "travelTime": "28 min del aeropuerto de Palma",
   "subname": "Cala Vinyes"
  },
  "riu-bonanza": {
   "pills": [
    "Opción todo incluido",
    "Playa de Illetas",
    "Spa"
   ],
   "why": "Hotel RIU de cuatro estrellas en el paseo marítimo de Illetas. Opción todo incluido, spa completo y una de las mejores posiciones de playa de la zona. Golf en Bendinat a 10 minutos.",
   "andy": "Una opción práctica para grupos grandes si algunos jugadores quieren todo incluido y otros se desplazan a los campos cada día.",
   "golf": "Real Golf de Bendinat 10 min. T Golf Calvià 15 min. Son Vida 18 min.",
   "travelTime": "12 min del aeropuerto de Palma",
   "subname": "Illetas"
  },
  "four-seasons-formentor": {
   "pills": [
    "Four Seasons",
    "Bahía de Formentor",
    "Trayecto por la península"
   ],
   "why": "Ultralujo con la bahía de Formentor. Una de las estancias más espectaculares de la isla. Golf temprano y la bahía de Formentor el resto del día.",
   "andy": "La carretera de la península es el mejor trayecto de Mallorca. Alcanada está a 35 minutos: no es el más cercano, pero merece la pena por el entorno.",
   "golf": "Club de Golf Alcanada 35 min. Golf Pollença 20 min.",
   "travelTime": "55 min del aeropuerto de Palma",
   "subname": "Península de Formentor"
  },
  "el-vicenc": {
   "pills": [
    "Boutique",
    "Chef con estrella Michelin",
    "Frente a la playa"
   ],
   "why": "Cinco estrellas boutique con acceso directo a la playa y Santi Taura (una estrella Michelin) en el restaurante. Alcanada a 20 minutos. El casco antiguo de Pollença a 10.",
   "andy": "Santi Taura es uno de los mejores chefs de Mallorca. Si la comida importa tanto como el golf y la zona es el norte, esta es la respuesta.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Cala de Sant Vicenç"
  },
  "son-brull": {
   "pills": [
    "Cinco estrellas boutique",
    "Spa de primer nivel",
    "360 con vino"
   ],
   "why": "Monasterio del siglo XVIII convertido en un cinco estrellas boutique de primer nivel. El spa es uno de los mejores de la isla y el restaurante 360 usa productos de la propia finca.",
   "andy": "Un argumento sólido para alojarse en el norte aunque busque golf en serio. Alcanada a 15 minutos. Tranquilo, de gran calidad y genuinamente mallorquín.",
   "golf": "Club de Golf Alcanada 15 min. Golf Pollença 5 min.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Cerca de Pollença"
  },
  "illa-dor": {
   "pills": [
    "Vistas a la bahía",
    "Clásico",
    "Noches para pasear"
   ],
   "why": "Port de Pollença es una de las mejores bases del norte. Más tranquilo que Alcúdia, agradable para pasear por las noches y con Alcanada a 20 minutos.",
   "andy": "El hotel más consolidado justo en la bahía. 23 habitaciones. Buena comida.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min (9 hoyos).",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Port de Pollença"
  },
  "can-cuarassa": {
   "pills": [
    "Boutique",
    "Jardines privados",
    "Frente a la playa"
   ],
   "why": "Pequeño hotel boutique con jardines privados que bajan hasta la playa de Port de Pollença. Buenas habitaciones, ambiente tranquilo y una buena oferta gastronómica cerca.",
   "andy": "Un nivel por encima del Illa d'Or en cuanto a carácter. Alcanada a 20 minutos, el casco antiguo de Pollença a 10. Una base realmente relajada en el norte.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 8 min.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Port de Pollença"
  },
  "hotel-sis-pins": {
   "pills": [
    "Económico",
    "Vistas a la bahía",
    "Sencillo y limpio"
   ],
   "why": "Hotel honesto y limpio de gama media justo en el paseo de Port de Pollença. Sin lujos, pero buena relación calidad-precio en uno de los pueblos más bonitos del norte.",
   "andy": "Si el presupuesto es ajustado y la zona es el norte, esta es la respuesta práctica. Golf Alcanada a 20 minutos, y las noches quedan resueltas con la oferta gastronómica de Pollença.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Port de Pollença"
  },
  "agrotourisme-son-palou": {
   "pills": [
    "Finca rural",
    "Pueblo de montaña",
    "Paz total"
   ],
   "why": "Finca tradicional de agroturismo en el diminuto pueblo de Orient, rodeada por la Tramuntana. Silencio total, producto fresco, la Mallorca rural de verdad.",
   "andy": "Orient es uno de los pueblos más especiales de la isla. El golf exige desplazarse, pero la experiencia aquí no se parece a la de ningún hotel. Lo mejor es combinarlo con unas rondas en Alcanada.",
   "golf": "Club de Golf Alcanada 30 min. Golf Pollença 20 min.",
   "travelTime": "35 min del aeropuerto de Palma",
   "subname": "Orient"
  },
  "north-villa": {
   "pills": [
    "Villa privada",
    "Piscina propia",
    "Calas cerca"
   ],
   "why": "El valle de Pollença o la costa de Alcúdia le dejan a 15 minutos de Alcanada. El coche de alquiler es imprescindible. Playas y calas cerca.",
   "andy": "El norte es más tranquilo y más pintoresco que el suroeste. Una villa en el norte funciona bien si lo que se busca son unas vacaciones de verdad con buen golf y no el máximo de rondas.",
   "golf": "Club de Golf Alcanada 15-20 min. Golf Pollença 10-15 min.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Zona Pollença / Alcúdia",
   "name": "Villa de lujo, norte de Mallorca"
  },
  "bocchoris": {
   "pills": [
    "Junto al paseo marítimo",
    "Económico",
    "Clásico"
   ],
   "why": "Hotel sencillo y limpio justo en el paseo de Port de Pollença. La mejor relación calidad-precio de la bahía. Alcanada a 20 minutos, el casco antiguo de Pollença a 10.",
   "andy": "Nada del otro mundo, todo práctico. El paseo es precioso por las noches. Buena opción para grupos que miran los costes.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Port de Pollença"
  },
  "la-goleta": {
   "pills": [
    "Cala Sant Vicenç",
    "Gama media",
    "Acceso a la playa"
   ],
   "why": "Hotel de gama media en la preciosa Cala de Sant Vicenç, la misma pequeña bahía que el cinco estrellas El Vicenç. Una fracción del precio con la misma playa y Alcanada a 20 minutos.",
   "andy": "Cala de Sant Vicenç es uno de los rincones más bonitos del norte. La Goleta le da la ubicación sin el precio del lujo.",
   "golf": "Club de Golf Alcanada 20 min. Golf Pollença 10 min.",
   "travelTime": "52 min del aeropuerto de Palma",
   "subname": "Cala de Sant Vicenç"
  },
  "north-villa-small": {
   "pills": [
    "Villa privada",
    "Gama media",
    "Valle de Pollença"
   ],
   "why": "Villa más pequeña en el valle de Pollença para grupos de 3 a 5 personas que quieren su propio espacio sin el coste de una propiedad grande. Piscina, vistas al campo, 15 minutos hasta Alcanada.",
   "andy": "El mercado de villas del norte ofrece buena relación calidad-precio comparado con el suroeste. Una propiedad de 4 dormitorios aquí cuesta bastante menos que su equivalente en Santa Ponsa.",
   "golf": "Club de Golf Alcanada 15-20 min. Golf Pollença 10 min.",
   "travelTime": "48 min del aeropuerto de Palma",
   "subname": "Valle de Pollença",
   "name": "Villa, norte de Mallorca, grupo pequeño"
  },
  "can-simoneta": {
   "pills": [
    "Sobre el acantilado",
    "Spa",
    "Restaurante VORO"
   ],
   "why": "Cinco estrellas boutique sobre el acantilado con un spa serio y Capdepera Golf a 5 minutos. VORO (el único restaurante de Mallorca con dos estrellas Michelin) está en el complejo.",
   "andy": "La opción más tranquila de la costa este. Encaja con parejas que prefieren privacidad a instalaciones.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.",
   "travelTime": "60 min del aeropuerto de Palma",
   "subname": "Canyamel"
  },
  "pleta-de-mar": {
   "pills": [
    "Ecolujo",
    "2 piscinas infinitas",
    "Playa privada",
    "VORO en el hotel"
   ],
   "why": "Lujo de playa en la costa este. Dos piscinas infinitas, acceso a una playa privada y el restaurante VORO (dos estrellas Michelin) en el hotel. Capdepera Golf a 5 minutos.",
   "andy": "El este está infravalorado. Menos gente, mejor agua, campos de calidad que se pasan por alto. VORO merece una cena especial incluso para quienes no se alojan aquí.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 25 min.",
   "travelTime": "60 min del aeropuerto de Palma",
   "subname": "Canyamel"
  },
  "cases-son-barbassa": {
   "pills": [
    "Finca rural",
    "Piscina privada",
    "Capdepera Golf a 5 min"
   ],
   "why": "Finca rural restaurada a 5 minutos de Capdepera Golf. Piscina privada, producto local, un aire realmente alejado de los circuitos habituales con buen golf a la puerta.",
   "andy": "La opción de finca en el este. Sin playa, pero con una gran piscina, silencio total y una excelente base de golf. Combínela con una noche en VORO, cerca.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 15 min. Club de Golf Pula 15 min.",
   "travelTime": "60 min del aeropuerto de Palma",
   "subname": "Capdepera"
  },
  "pula-resort": {
   "pills": [
    "En el campo",
    "Campo de prácticas Trackman",
    "Paquetes de golf"
   ],
   "why": "Hotel situado directamente en el Pula Golf, con instalaciones de práctica completas, incluida tecnología Trackman. Aquí se han celebrado ocho torneos del European Tour. Una base de golf sin complicaciones.",
   "andy": "Si Pula está en el programa y el grupo quiere tenerlo todo en un mismo sitio, esta es la respuesta. Las instalaciones de práctica están entre las mejores de Mallorca.",
   "golf": "Pula Golf en el propio recinto. Golf Club Son Servera 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "60 min del aeropuerto de Palma",
   "subname": "Son Servera"
  },
  "sa-bassa-rotja": {
   "pills": [
    "Finca vinícola",
    "Spa ecológico",
    "Campo"
   ],
   "why": "Hotel boutique en una bodega en funcionamiento en el interior de Mallorca. Spa ecológico, vinos de la finca, auténtica calma rural. No es un resort de playa o de golf convencional.",
   "andy": "Una forma distinta de alojarse. Para parejas que quieren el interior de Mallorca y no les importa conducir 25 o 30 minutos hasta los campos de la costa este.",
   "golf": "Vall d'Or Golf 25 min. Club de Golf Pula 25 min. Golf Club Son Servera 30 min.",
   "travelTime": "35 min del aeropuerto de Palma",
   "subname": "Porreres"
  },
  "son-gener": {
   "pills": [
    "Solo adultos",
    "Terraza con piscina",
    "Este rural"
   ],
   "why": "Finca boutique solo para adultos en Son Servera con una terraza con piscina tranquila y buenas instalaciones de spa. Golf Club Son Servera a poca distancia en coche, Pula a 10 minutos.",
   "andy": "Una opción más serena e íntima que los grandes resorts de la costa este. Encaja con parejas que quieren campo y golf sin las multitudes de un resort de playa.",
   "golf": "Golf Club Son Servera 10 min. Club de Golf Pula 10 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "55 min del aeropuerto de Palma",
   "subname": "Son Servera"
  },
  "east-villa": {
   "pills": [
    "Villa privada",
    "Calas tranquilas",
    "Buena relación calidad-precio"
   ],
   "why": "Familias o grupos que quieren calas tranquilas y fácil acceso a Vall d'Or y Pula. La costa este tiene las playas familiares más tranquilas de la isla.",
   "andy": "El este está infravalorado para un viaje de golf. Menos gente, mejor agua, cinco campos que no reciben la atención que merecen.",
   "golf": "Capdepera Golf 15-20 min. Canyamel Golf 15 min. Club de Golf Pula 15 min. Golf Club Son Servera 20 min. Vall d'Or 20 min.",
   "travelTime": "55-65 min del aeropuerto de Palma",
   "subname": "Zona Cala d'Or / Porto Cristo",
   "name": "Villa de lujo, este de Mallorca"
  },
  "son-moll-sentits": {
   "pills": [
    "Solo adultos",
    "Spa en la azotea",
    "Pueblo de Capdepera"
   ],
   "why": "Hotel boutique solo para adultos en el casco antiguo de Capdepera con spa y piscina en la azotea. Una opción más tranquila e íntima que los resorts de la costa, con Capdepera Golf a 5 minutos.",
   "andy": "Una de las opciones más pequeñas y con más carácter de la costa este. Encaja con parejas que prefieren pueblo y golf a la playa.",
   "golf": "Capdepera Golf 5 min. Canyamel Golf 10 min. Club de Golf Pula 15 min.",
   "travelTime": "60 min del aeropuerto de Palma",
   "subname": "Capdepera"
  },
  "hotel-cala-ratjada": {
   "pills": [
    "Resort de playa",
    "Cala Ratjada",
    "Gama media"
   ],
   "why": "Hotel sólido de gama media en el pueblo pesquero de Cala Ratjada, uno de los más con carácter de la costa este. Capdepera Golf a 10 minutos y buenos restaurantes de pescado en el puerto.",
   "andy": "Cala Ratjada tiene un ambiente de pueblo genuino que les falta a las zonas de resorts más grandes. Paseos nocturnos por el puerto, buenos bares locales. El golf no domina todo.",
   "golf": "Capdepera Golf 10 min. Canyamel Golf 15 min. Club de Golf Pula 20 min.",
   "travelTime": "62 min del aeropuerto de Palma",
   "subname": "Cala Ratjada"
  },
  "protur-biomar": {
   "pills": [
    "Resort grande",
    "Playa",
    "Piscinas familiares",
    "Zona para adultos"
   ],
   "why": "Gran resort premium en la playa de Sa Coma con zona exclusiva para adultos y zona familiar. Buen spa y varias piscinas. Pula Golf a 10 minutos.",
   "andy": "Uno de los resorts más completos de la costa este para grupos en los que unos quieren golf y otros playa y piscina todo el día.",
   "golf": "Club de Golf Pula 10 min. Golf Club Son Servera 12 min. Capdepera Golf 20 min.",
   "travelTime": "58 min del aeropuerto de Palma",
   "subname": "Sa Coma"
  },
  "east-villa-small": {
   "pills": [
    "Villa privada",
    "Este rural",
    "Buena relación calidad-precio"
   ],
   "why": "Villa más pequeña en la costa este para grupos de 3 a 5 personas. La zona de Artà y Son Servera ofrece la Mallorca rural de verdad a un precio inferior al suroeste, con 4 campos a menos de 20 minutos.",
   "andy": "El mercado de villas de la costa este está infravalorado y con precios bajos. Si el grupo acepta el trayecto más largo desde el aeropuerto, aquí se obtiene mucho más valor.",
   "golf": "Club de Golf Pula 15 min. Golf Club Son Servera 15 min. Capdepera Golf 15 min. Canyamel Golf 20 min.",
   "travelTime": "55 min del aeropuerto de Palma",
   "subname": "Zona Artà / Son Servera",
   "name": "Villa, este de Mallorca, grupo pequeño"
  },
  "el-llorenc": {
   "pills": [
    "Boutique urbano",
    "Cocina Michelin",
    "Piscina en la azotea"
   ],
   "why": "Habitaciones de diseño, piscina en la azotea y Santi Taura (una estrella Michelin). El golf exige desplazarse, pero las noches de Palma lo compensan de sobra.",
   "andy": "La piscina en la azotea al anochecer y la cena después son una gran noche en Palma. Son Gual está a 20 minutos para una ronda por la mañana.",
   "golf": "Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min. Golf Maioris 30 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Casco antiguo de Palma"
  },
  "santos-nixe": {
   "pills": [
    "Playa",
    "Spa",
    "Cuatro estrellas con buen precio"
   ],
   "why": "Cuatro estrellas práctico y bien situado, con acceso real a la playa y un spa de verdad. Acceso al golf similar al de los cinco estrellas de Illetas, a un precio más bajo.",
   "andy": "Una elección sensata para parejas o grupos pequeños que quieren playa y spa sin el precio del ultralujo. Bendinat a 15 minutos.",
   "golf": "Real Golf de Bendinat 15 min. T Golf Calvià 20 min. Son Vida / Son Quint / Son Muntaner 15 min. Son Gual 20 min.",
   "travelTime": "12 min del aeropuerto de Palma",
   "subname": "Cala Major, Palma"
  },
  "born-hotel": {
   "pills": [
    "Palacio en Palma",
    "Terraza en el patio",
    "Casco antiguo"
   ],
   "why": "Un palacio del siglo XIX en la calle del Born, la más de moda de Palma. Patio ornamentado, excelente ubicación para el casco antiguo, la catedral y los restaurantes.",
   "andy": "El Born le sitúa en el centro de las noches de Palma. Son Gual a 20 minutos para una ronda temprano, y de vuelta para un almuerzo largo.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 20 min. Son Vida / Son Quint / Son Muntaner 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Casco antiguo de Palma"
  },
  "nakar-hotel": {
   "pills": [
    "Piscina en la azotea",
    "Habitaciones de diseño",
    "Centro de la ciudad"
   ],
   "why": "Hotel de diseño moderno en el centro de Palma con una gran piscina en la azotea y bar. Ambiente más joven que los hoteles palacio del casco antiguo. Bien situado para el Passeig des Born.",
   "andy": "Para el grupo que quiere la vida nocturna de Palma sin estar demasiado lejos del golf. Son Gual está como mucho a 20 minutos.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min. Real Golf de Bendinat 18 min.",
   "travelTime": "18 min del aeropuerto de Palma",
   "subname": "Palma"
  },
  "palacio-ca-sa-galesa": {
   "pills": [
    "Ultralujo",
    "12 habitaciones",
    "Vistas a la catedral"
   ],
   "why": "Hotel de ultralujo de doce habitaciones en el corazón del casco antiguo de Palma, con vistas a la catedral. Uno de los hoteles más íntimos y especiales de la ciudad. Piscina cubierta y spa.",
   "andy": "La opción más exclusiva de Palma ciudad. Cenas en la terraza mirando La Seu. Son Gual a 20 minutos para la ronda de la mañana.",
   "golf": "Son Gual 20 min. Son Vida / Son Quint / Son Muntaner 15 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Casco antiguo de Palma"
  },
  "portixol": {
   "pills": [
    "Ambiente de barrio",
    "El mejor pescado de Palma",
    "Tranquilo"
   ],
   "why": "Ambiente de pueblo en Portixol con algunos de los mejores restaurantes de pescado de Mallorca. Es Mollet a 5 minutos a pie. El golf exige desplazarse.",
   "andy": "Una opción más tranquila en Palma. Úsela como base para las noches. Son Gual está a 25 minutos para una ronda por la mañana.",
   "golf": "Son Gual 25 min. Son Vida / Son Quint 20 min. T Golf Palma (Puntiró) 20 min. Real Golf de Bendinat 20 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Portixol, Palma"
  },
  "convent-missio": {
   "pills": [
    "Hotel de diseño",
    "Casco antiguo de Palma",
    "Azotea"
   ],
   "why": "Habitaciones de diseño, terraza en la azotea y una de las mejores opciones gastronómicas de Palma. Para golfistas que quieren la experiencia de ciudad entre rondas.",
   "andy": "El casco antiguo está a 10 minutos a pie. Varios restaurantes reconocidos a poca distancia.",
   "golf": "Son Gual 25 min. Son Vida / Son Quint / Son Muntaner 20 min. T Golf Palma (Puntiró) 15 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Casco antiguo de Palma"
  },
  "innside-palma": {
   "pills": [
    "Cuatro estrellas moderno",
    "Vistas a la bahía",
    "Buena relación calidad-precio"
   ],
   "why": "Cuatro estrellas moderno con vistas a la bahía y buena ubicación central en Palma. Sin extras más allá de lo básico, pero bien de precio y práctico para grupos que quieren una base urbana sin precios de boutique.",
   "andy": "Una base de Palma sin complicaciones. Buena para grupos de empresa. Son Gual a 20 minutos para las rondas.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 15 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Palma"
  },
  "brondo-architect": {
   "pills": [
    "Boutique",
    "Diseño",
    "Ubicación en el casco antiguo"
   ],
   "why": "Pequeño hotel de diseño en el casco antiguo de Palma, a poca distancia a pie de los principales restaurantes, la catedral y el museo Es Baluard.",
   "andy": "La opción boutique asequible de Palma. No tiene el lujo del Palacio Ca Sa Galesa, pero la ubicación es la misma y el carácter es genuino.",
   "golf": "Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Real Golf de Bendinat 20 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Casco antiguo de Palma"
  },
  "hostal-cuba": {
   "pills": [
    "Boutique económico",
    "Santa Catalina",
    "Mejor barrio de Palma"
   ],
   "why": "Boutique económico con carácter en Santa Catalina, el mejor barrio de Palma para bares y restaurantes. El hostal lleva aquí décadas y tiene personalidad propia.",
   "andy": "En Santa Catalina es donde comen los locales. No es el casco antiguo para turistas, es la escena gastronómica real de Palma. Son Gual a 20 minutos para el golf de la mañana.",
   "golf": "Son Gual 22 min. T Golf Palma (Puntiró) 18 min. Son Vida 18 min.",
   "travelTime": "15 min del aeropuerto de Palma",
   "subname": "Santa Catalina, Palma"
  },
  "hotel-saratoga": {
   "pills": [
    "Piscina en la azotea",
    "Centro de Palma",
    "Cuatro estrellas clásico"
   ],
   "why": "Cuatro estrellas clásico en el centro de Palma con piscina en la azotea con vistas a la bahía. Bien situado tanto para el casco antiguo como para el bulevar principal. Buena opción para empresas.",
   "andy": "Fiable, céntrico, sensato. Una de las bases de Palma más usadas por grupos de golf. Son Gual está a 20 minutos.",
   "golf": "Son Gual 20 min. T Golf Palma (Puntiró) 18 min. Son Vida / Son Quint 16 min. Real Golf de Bendinat 20 min.",
   "travelTime": "18 min del aeropuerto de Palma",
   "subname": "Centro de Palma"
  },
  "palma-villa-small": {
   "pills": [
    "Villa privada",
    "Vistas a Palma",
    "Son Vida cerca"
   ],
   "why": "Villa privada en las colinas de Génova o Son Vida con vistas a la bahía de Palma. Los campos de la finca de Son Vida están a 10 minutos y la ciudad a 15. Un buen compromiso para grupos que quieren independencia y golf fácil.",
   "andy": "Las villas de la zona de Son Vida las usan poco los grupos de golf. Se obtiene privacidad, vistas y tres campos a menos de 10 minutos.",
   "golf": "Son Vida / Son Quint / Son Muntaner 10 min. T Golf Calvià 20 min. Real Golf de Bendinat 15 min.",
   "travelTime": "20 min del aeropuerto de Palma",
   "subname": "Zona Génova / Son Vida",
   "name": "Villa, zona de Palma, grupo pequeño"
  },
  "jumeirah-port-soller": {
   "pills": [
    "Ultralujo",
    "Sobre el acantilado",
    "Spa con hammam",
    "Vistas a la Tramuntana"
   ],
   "why": "Encaramado en los acantilados sobre Port de Sóller. Vistas de 180 grados al Mediterráneo, spa con hammam y la Tramuntana a la puerta.",
   "andy": "No es una base pensada primero para el golf. Uno de los hoteles visualmente más espectaculares de la isla. Va bien como experiencia de 2 noches en la Tramuntana junto al golf.",
   "golf": "El golf es una excursión planificada desde aquí. Según la hoja de salidas, cuente con trayectos por carreteras de montaña hasta Son Termes, Golf de Andratx, Alcanada o Pollença.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Port de Sóller"
  },
  "la-residencia": {
   "pills": [
    "Belmond",
    "Deià",
    "Casa señorial histórica"
   ],
   "why": "Dos casas señoriales de piedra del siglo XVI sobre Deià. El hotel boutique más célebre de la isla. David Bowie, Robert Graves y la princesa Diana se alojaron aquí.",
   "andy": "No es una base para un viaje de golf. Uno de los mejores hoteles de España. Funciona bien como 2 noches en el noroeste antes de pasar al suroeste para las rondas.",
   "golf": "Las rondas de golf hay que planificarlas como excursiones de día completo. Son Termes, Golf de Andratx, Alcanada y Pollença pueden tener sentido según la ruta exacta.",
   "travelTime": "60 min del aeropuerto de Palma",
   "subname": "Un hotel Belmond, Deià"
  },
  "cas-xorc": {
   "pills": [
    "Finca",
    "Piscina infinita",
    "Aislado"
   ],
   "why": "Casa de campo reformada en la carretera Sóller-Deià. Piscina infinita, cocina de huerto propio, vistas lejanas al mar. Muy aislado, el coche es imprescindible.",
   "andy": "Una de las ubicaciones más románticas de la isla. No es la base para un viaje de golf, pero sí la respuesta adecuada si alguien quiere la experiencia de la Tramuntana con una o dos rondas.",
   "golf": "El golf es posible, pero es una excursión y no un desplazamiento rápido. Haga la lista de campos después de elegir el hotel o la villa exactos.",
   "travelTime": "50 min del aeropuerto de Palma",
   "subname": "Sóller"
  },
  "es-moli": {
   "pills": [
    "Tramuntana clásica",
    "Piscinas en terrazas",
    "Abierto de marzo a noviembre"
   ],
   "why": "Mallorca clásica sin el precio de Belmond. Varias piscinas en terrazas talladas en el acantilado, con vistas al valle y al mar. Abierto de marzo a noviembre.",
   "andy": "Planifique 2 noches en el noroeste por el paisaje y luego pase al suroeste o al norte para una logística de golf más sencilla.",
   "golf": "Lo mejor es tratar el golf como un plan de día completo desde Deià. El campo adecuado depende de si el día va hacia el suroeste, Palma o el norte.",
   "travelTime": "55 min del aeropuerto de Palma",
   "subname": "Deià"
  },
  "hotel-hermitage": {
   "pills": [
    "Pueblo de montaña",
    "Piscina",
    "Tranquilidad total"
   ],
   "why": "Escondido en el diminuto pueblo de montaña de Orient, en el corazón de la Tramuntana. Piscina, spa y calma total. El pueblo tiene menos de 50 habitantes.",
   "andy": "Para la pareja que quiere desaparecer. Orient es el rincón más escondido de la isla. El golf es posible, pero requiere una ruta pensada y no una hora de salida local improvisada.",
   "golf": "Elija el campo en función de la ruta del día desde Orient. Golf de Andratx, Son Termes, Alcanada o Pollença pueden tener sentido, cada uno según el itinerario.",
   "travelTime": "30 min del aeropuerto de Palma",
   "subname": "Orient"
  },
  "gran-hotel-soller": {
   "pills": [
    "Pueblo de Sóller",
    "Cuatro estrellas clásico",
    "Naranjos"
   ],
   "why": "Cuatro estrellas en el centro de Sóller, uno de los pueblos más encantadores de Mallorca. El mercado de naranjas, el histórico tranvía a Port de Sóller y buenos restaurantes a la puerta.",
   "andy": "Un precio más accesible para el noroeste. Para grupos que quieren la experiencia de Sóller sin los precios del Jumeirah. El golf hay que planificarlo en función del trayecto.",
   "golf": "El golf es una excursión de un día desde Sóller, no un grupo de campos cercanos. Son Termes, Golf de Andratx, Alcanada o Pollença pueden encajar según el itinerario general.",
   "travelTime": "35 min del aeropuerto de Palma",
   "subname": "Sóller"
  },
  "can-verdera": {
   "pills": [
    "Pueblo de piedra",
    "Terraza en la azotea",
    "Vistas a Fornalutx"
   ],
   "why": "Pequeño hotel boutique en Fornalutx, elegido en repetidas ocasiones uno de los pueblos más bonitos de España. Construido en piedra, con terraza en la azotea y vistas excepcionales a la montaña.",
   "andy": "Fornalutx es el pueblo más fotografiado de Mallorca. Una experiencia muy distinta de cualquier hotel de playa. El golf queda lejos, pero el entorno merece la pena durante 2 noches.",
   "golf": "El golf desde Fornalutx es una excursión de un día entero. Elija el campo después de decidir si el día va hacia Palma, el suroeste o el norte.",
   "travelTime": "40 min del aeropuerto de Palma",
   "subname": "Fornalutx"
  },
  "northwest-villa": {
   "pills": [
    "Villa privada",
    "Vistas a la montaña",
    "Tramuntana"
   ],
   "why": "Una villa en el noroeste ofrece total privacidad en el paisaje más dramático de la isla. Piscina privada, vistas a la montaña, olivos y limoneros. El golf es una excursión, no un trayecto diario.",
   "andy": "Solo se la recomiendo a grupos que de verdad estén cómodos con el trayecto. El planteamiento correcto: primero la experiencia de la Tramuntana, después el golf.",
   "golf": "Golf de Andratx 45-55 min por carreteras de montaña. Planifique excursiones de golf de día completo.",
   "travelTime": "35-50 min del aeropuerto de Palma",
   "subname": "Zona Sóller / Valldemossa",
   "name": "Villa de lujo, noroeste"
  },
  "costa-dor": {
   "pills": [
    "Playa en cala",
    "Olivar",
    "Deià cerca"
   ],
   "why": "Hotel pequeño escondido en un olivar sobre una cala privada entre Deià y Valldemossa. Uno de los lugares más recogidos de la isla a un precio razonable.",
   "andy": "La alternativa asequible a La Residencia. La misma zona de Deià, la misma costa dramática, a un precio notablemente más bajo. Abierto de abril a octubre.",
   "golf": "El golf desde esta parte de Deià requiere una ruta de día planificada. Son Termes, Golf de Andratx, Alcanada o Pollença pueden ser opciones válidas según el plan general.",
   "travelTime": "55 min del aeropuerto de Palma",
   "subname": "Lluc Alcari, cerca de Deià"
  },
  "hotel-marina-soller": {
   "pills": [
    "Port de Sóller",
    "Económico",
    "Acceso a la playa"
   ],
   "why": "Tres estrellas económico en la bahía de Port de Sóller. El tranvía de los naranjales desde Sóller es una de las experiencias más agradables de Mallorca. El golf es una excursión de un día y no un grupo de campos cercanos.",
   "andy": "La respuesta asequible para el noroeste. Port de Sóller es una bahía preciosa junto a la que despertarse. Combine uno o dos días de golf planificados con tiempo de verdad en la Tramuntana.",
   "golf": "Planifique el golf como una excursión de un día desde Port de Sóller. La mejor elección de campo depende de si el día va hacia Palma, el suroeste o el norte.",
   "travelTime": "45 min del aeropuerto de Palma",
   "subname": "Port de Sóller"
  }
 },
 "questions": {
  "area": {
   "title": "¿En qué zona de Mallorca piensa jugar al golf?",
   "sub": "Esto determina qué grupos de campos puede alcanzar con facilidad. Si no está seguro, elija el suroeste: tiene más campos.",
   "opts": {
    "southwest": {
     "label": "Suroeste de Mallorca",
     "desc": "Andratx, Santa Ponsa, Bendinat, Calvià. El principal grupo de golf: de 4 a 5 campos a menos de 15 minutos. La mejor base para un viaje de mucho golf."
    },
    "north": {
     "label": "Norte de Mallorca",
     "desc": "Alcúdia, Pollença, Formentor. Alcanada es uno de los mejores campos de la isla. Menos rondas disponibles, pero una base más pintoresca y relajada."
    },
    "east": {
     "label": "Este de Mallorca",
     "desc": "Capdepera, Canyamel, Pula, Son Servera, Vall d'Or. Más tranquilo, playas estupendas, campos infravalorados. Bueno para familias o para quienes prefieren la calma a la comodidad."
    },
    "palma": {
     "label": "Cerca de Palma",
     "desc": "Use Palma como base para las noches. Son Gual, Son Vida, Son Muntaner y Bendinat, todos a menos de 20 minutos. Bueno si los restaurantes de la ciudad y la vida nocturna importan tanto como el golf."
    },
    "northwest": {
     "label": "Noroeste: experiencia Tramuntana",
     "desc": "Sóller, Deià, Valldemossa. Paisaje espectacular, pero el golf se convierte en una excursión planificada y no en una ronda local rápida. Lo mejor es como complemento de 2 noches a otra zona."
    }
   }
  },
  "priority": {
   "title": "¿Qué es lo más importante fuera del golf?",
   "sub": "Elija todo lo que corresponda: entre rondas, ¿qué quiere el grupo?",
   "opts": {
    "golf-focused": {
     "label": "Estar lo más cerca posible de los campos",
     "desc": "En un campo o junto a él, horas de salida tempranas fáciles, nada que se interponga en las rondas."
    },
    "beach": {
     "label": "Playa y piscina después del golf",
     "desc": "Recuperarse junto al mar o la piscina tras la ronda es tan importante como la ronda misma."
    },
    "spa": {
     "label": "Spa y recuperación de bienestar",
     "desc": "Un spa de verdad para piernas y espalda tras varias rondas. Tratamientos, vapor, piscina."
    },
    "dining": {
     "label": "Buena comida y noches fuera",
     "desc": "Restaurantes, vino, mercados locales. Las noches son tan importantes como los días."
    },
    "privacy": {
     "label": "Privacidad y espacio: nuestro propio lugar",
     "desc": "Piscina propia, horario propio, sin horarios de hotel. Una villa donde el grupo puede hacer lo que quiera."
    }
   }
  },
  "group": {
   "title": "¿Quién viaja?",
   "sub": "Ayuda a encontrar el ambiente y las instalaciones adecuados.",
   "opts": {
    "couple": {
     "label": "Pareja"
    },
    "friends": {
     "label": "Grupo de amigos"
    },
    "family": {
     "label": "Familia con niños"
    },
    "solo": {
     "label": "Viajando solo"
    },
    "corporate": {
     "label": "Grupo corporativo"
    }
   }
  },
  "size": {
   "title": "¿Cuántas personas en total?",
   "sub": "Influye en si una villa tiene más sentido que un hotel.",
   "opts": {
    "1-2": {
     "label": "1 o 2"
    },
    "3-5": {
     "label": "3 a 5"
    },
    "6-9": {
     "label": "6 a 9"
    },
    "10+": {
     "label": "10 o más"
    }
   }
  },
  "style": {
   "title": "¿Qué tipo de alojamiento le encaja?",
   "sub": "No se trata del presupuesto, sino del carácter.",
   "opts": {
    "boutique": {
     "label": "Boutique e íntimo",
     "desc": "Pequeño, con carácter, trato personal. Tras un día ya conoce al personal por su nombre."
    },
    "resort": {
     "label": "Resort completo con todas las instalaciones",
     "desc": "Varias piscinas, restaurantes, spa, actividades. Todo en un solo lugar."
    },
    "classic": {
     "label": "Clásico y consolidado",
     "desc": "Un hotel de verdad, servicio fiable, sin trucos de Instagram. Se defiende solo."
    },
    "villa": {
     "label": "Villa privada",
     "desc": "Piscina propia, cocina propia, horario propio. Sin recepción de hotel, sin hora de salida."
    },
    "countryside": {
     "label": "Finca rural o retiro en el campo",
     "desc": "Casa de campo reformada, olivares, tranquilidad. La isla lejos de la costa."
    }
   }
  },
  "budget": {
   "title": "¿Cuál es el presupuesto aproximado por habitación y noche?",
   "sub": "En temporada alta (de junio a septiembre). Ayuda a filtrar opciones realistas.",
   "opts": {
    "mid": {
     "label": "Hasta 250 € por habitación",
     "desc": "Cuatro estrellas de gama media. Buena ubicación, cómodo, nada extravagante."
    },
    "premium": {
     "label": "De 250 a 500 € por habitación",
     "desc": "Cuatro o cinco estrellas premium. Spa de verdad, gastronomía de calidad, notablemente mejor."
    },
    "ultra": {
     "label": "500 € o más por habitación",
     "desc": "Ultralujo. Four Seasons, Belmond, Jumeirah. Lo mejor que tiene la isla."
    },
    "flexible": {
     "label": "Flexible: muéstreme la mejor opción",
     "desc": "Sin limitación de precio. Muéstreme lo que de verdad encaja mejor."
    }
   }
  }
 }
}

export default data
