// Locale overlay for the 'southwest-mallorca-golf-courses-compared' guide article.
// Blocks are positional: one entry per English block. English is master.
const img = (alt, caption) => (caption ? { alt, caption } : { alt })
const p = (text) => ({ text })
const t = (headers, rows) => ({ headers, rows })
const c = (text, linkLabel) => ({ text, linkLabel })

export const SOUTHWEST_LOCALIZED = {
  de: {
    metadata: {
      title: 'Golfplätze im Südwesten Mallorcas',
      description:
        'T Golf Calvià, Golf de Andratx und Santa Ponsa 1 im Vergleich, von einem PGA-Pro, der alle drei gespielt hat, plus Bendinat und Santa Ponsa 2 und 3.',
      imageAlt: 'T Golf Calvià, Südwesten Mallorcas',
    },
    meta: {
      badge: 'Südwesten',
      readTime: '5 Min. Lesezeit',
      updated: 'Oktober 2026',
      title: 'Die Golfplätze im Südwesten Mallorcas im Vergleich',
      intro:
        'T Golf Calvià, Golf de Andratx und Santa Ponsa 1 sind die drei öffentlichen Plätze zur Auswahl im Südwesten, und ich habe alle drei gespielt. Jeder prüft etwas anderes: Carries und Distanzgefühl in Calvià, Höhenunterschiede und blinde Schläge in Andratx, Länge in Santa Ponsa 1.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Ehrliche Bewertung 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Ehrliche Bewertung 2026' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 Golf - Ehrliche Bewertung 2026' },
        { slug: 'best-golf-courses-mallorca', title: 'Die besten Golfplätze auf Mallorca 2026' },
      ],
    },
    blocks: [
      img('Fairway in T Golf Calvià mit Windmühle und der Tramuntana im Hintergrund', 'Die Windmühlen und die Kulisse der Tramuntana ziehen sich durch die ganze Runde.'),
      p('Ich wohne im Südwesten, das sind also die Plätze, die meinem Zuhause am nächsten liegen. Real Golf de Bendinat liegt zwischen ihnen und Palma, und Santa Ponsa 2 und 3 sind nur für Mitglieder. So schneiden sie im Vergleich ab.'),
      p('Die kurze Antwort'),
      t(
        ['Platz', 'Par', 'Max. Handicap (Herren / Damen)', 'Gehen', 'Schwierigkeit', 'Am besten für'],
        [
          ['T Golf Calvià', '72', '28 / 34', 'Begehbar, Buggy bequemer', '7/10', 'Die bestgepflegte Runde im Südwesten'],
          ['Golf de Andratx', '72', '28 / 36', 'Buggy vor 14 Uhr Pflicht', '9/10', 'Der härteste Test, und die Aussicht'],
          ['Santa Ponsa 1', '72', '36 / 36', 'Flach, aber lang', '8/10', 'Den Driver auf breiten Fairways schlagen'],
          ['Real Golf de Bendinat', '69', '36 / 36', 'Sehr hügelig', '6/10', 'Eine kurze Runde bei Illetas und Portals'],
          ['Santa Ponsa 2 und 3', '72 und 30', 'Nur für Mitglieder', 'Leicht', '7/10 und 4/10', 'Nur, wenn Sie mit einem Mitglied spielen'],
        ]
      ),
      p('T Golf Calvià: der bestgepflegte Platz im Südwesten'),
      p('Ich hatte an einem Dienstag um 15:20 Uhr Abschlag und konnte zwischen den Schlägen den Wind in den Pinien hören. Von den meisten Fairways ist keine Straße und kein Gebäude zu sehen, nur Pinien, Wasser und die Tramuntana. John Harris entwarf den Platz 1978, und eine Renovierung für 10 Millionen € hat ihn neu aufgebaut. Der Pflegezustand ist so gut wie auf allem, was ich auf der Insel gespielt habe, bis hin zu einem Bunkerrechen, der so gestaltet ist, dass der Ball selten daran liegen bleibt.'),
      p('Fünfzehn Seen säumen die Fairways und erzwingen Carries vom Abschlag, und mehrere Anspiele verdecken den unteren Teil der Fahne, verlassen Sie sich also auf Ihre Entfernungsangabe statt auf das Auge. Am 10. Loch fällt die klarste Entscheidung des Platzes. Es ist ein Dogleg rechts mit einer Windmühle links und Wasser rechts, und Sie entscheiden, wie viel vom Wasser Sie abschneiden. Das 18. Loch ist ein enges Par 5, das sich im Verlauf öffnet und den belohnt, der sich für den schmalen Abschlag entscheidet.'),
      img('Bunker in T Golf Calvià mit dem unverwechselbaren Rechendesign', 'Das Rechendesign sorgt dafür, dass der Ball selten an der Bunkerwand liegen bleibt. Ein kleines Detail, das einen echten Unterschied macht.'),
      p("Ich habe ihm 9/10 gegeben. Das Limit liegt bei 28 für Herren und 34 für Damen, und ich würde einen Spieler mit höherem Handicap hier nicht als erste Runde des Urlaubs einplanen. Buchen Sie eine Twilight-Zeit unter der Woche: Der Twilight-Tarif beginnt bei 150 € gegenüber einem Spitzenpreis von 210 €, und das Licht ist dann am besten. Die Range ist aus Gras, was nicht jeder Club auf Mallorca bietet, und bei so vielen Carries lohnt es sich, vor dem 1. Abschlag Bälle zu schlagen. Mehr dazu in der <a href='/guides/t-golf-calvia-review'>Bewertung von T Golf Calvià</a>."),
      p('Golf de Andratx: der härteste Test, und die Aussicht'),
      p('Andratx liegt in den Hügeln über Camp de Mar und ist einer der schwersten Plätze der Insel. Ich habe ihm 7,5/10 gegeben. Bäche und Wasser queren die Fairways, statt neben ihnen zu verlaufen, und wer bei der Distanz leicht danebenliegt, gerät in Schwierigkeiten. Höhenunterschiede gibt es ständig. Abschläge verschwinden aus dem Blick, Anspiele gehen auf Fahnen, die man nicht sieht, und die Par 3 spielen sich wegen der Gefälle ganz anders als auf der Karte.'),
      p('Das 6. Loch, das Green Monster, ist mit 609 Metern das längste Par 5 Spaniens. Wir hatten den Wind im Rücken, und es hat uns trotzdem alles abverlangt. Das 12. Loch ist ein scharfes Dogleg rechts mit Camp de Mar unter Ihnen auf der ganzen Länge, eines der besten Löcher, die ich auf Mallorca gespielt habe. Das 15. Loch, Hello Mrs Robinson, spielt sich von einem hohen Abschlag etwa 20 Yards kürzer auf ein gut geschütztes Grün.'),
      img('Blick vom 8. Loch in Golf de Andratx hinunter über den Südwesten Mallorcas', 'Loch 8, A Love of Mallorca. Von einem der höchsten Punkte des Platzes über den gesamten Südwesten Mallorcas.'),
      p("Praktisches: Buggys sind vor 14 Uhr Pflicht, das Limit liegt bei 28 für Herren und 36 für Damen, und die Range liegt gegenüber dem Clubhaus auf der anderen Straßenseite. Bei aller Höhe ist das Meer erst ab dem 2. Loch zu sehen. Nehmen Sie ein GPS oder einen Platzplaner mit, denn mehrere Anspiele sind halb blind. Mehr dazu in der <a href='/guides/golf-andratx-review'>Bewertung von Golf de Andratx</a>."),
      p('Santa Ponsa 1: der lange, breite Platz'),
      p('Santa Ponsa 1 war 2021 Austragungsort der European Tour Mallorca Golf Open, des ersten Turniers der Tour auf der Insel seit zehn Jahren, und der Sieger Jeff Winther spielte zweimal eine 62. Die Fairways sind breit und die Eröffnungslöcher großzügig. Nach einer Runde in Son Gual oder Andratx, wo der Driver oft im Bag bleibt, ist dies der Platz, auf dem Sie ihn schlagen dürfen.'),
      p('Die Länge ist der Haken. Das 10. Loch misst 590 m, eines der längsten Par 5 Europas. Die Par 3 sind lang mit kleinen Grüns, es geht dort also mehr um Schadensbegrenzung als um Birdie-Chancen. An einem windstillen Tag wirkt der Platz leichter, als er ist. Der Wind kommt meist bis zum mittleren Vormittag auf, buchen Sie also früh. Die Löcher 5, 6 und 7 haben einige der besten Ausblicke auf die Tramuntana der Insel.'),
      img('Fairway von Santa Ponsa 1 mit Bergen dahinter', 'Die Fairways sind breit. Dies ist ein Platz, der den Driver einlädt.'),
      p("Er passt zu einem selbstbewussten Driver-Spieler und eignet sich als leichtere Runde früh in einer Reise vor Andratx. Das Limit liegt bei 36, ein Nachweis ist nötig, und ein Buggy kostet 43 €. Mehr dazu in der <a href='/guides/santa-ponsa-1-review'>Bewertung von Santa Ponsa 1</a>."),
      p('Real Golf de Bendinat'),
      p('Bendinat ist der Platz der Gruppe, der Palma am nächsten liegt, etwa 15 Minuten entfernt, zwischen Illetas und Portals. Martin Hawtree entwarf 1986 die ursprünglichen neun Löcher, und 1995 wurden es 18. Der Platz ist Par 69, 5.660 m lang und sehr hügelig, mit Blick auf die Bucht von Palma, Cabrera und das Schloss Bendinat. Die Zahl der Besucher-Greenfees ist täglich begrenzt, buchen Sie also im Voraus. Wenn Sie in Illetas oder Portals wohnen und eine kurze Runde ohne Fahrt wollen, ist dies der Platz, den Sie sich ansehen sollten.'),
      img('Real Golf de Bendinat auf Mallorca'),
      p('Santa Ponsa 2 und 3: nur für Mitglieder'),
      p('Beide sind nur für Mitglieder, und Gäste können nur mit einem Mitglied spielen, daher gehört keiner in eine Reiseplanung, es sei denn, Sie kennen eines. Santa Ponsa 2 ist ein 18-Loch-Platz von 1991. Santa Ponsa 3 sind neun kurze Löcher durch ein Wohngebiet.'),
      p('Was Sie buchen sollten'),
      p('Für die beste Runde im Südwesten buchen Sie T Golf Calvià. Für den härtesten Test und die beste Aussicht buchen Sie Andratx, mit einem Platzplaner und früher Startzeit. Wenn Sie den Driver gut treffen und das genießen wollen, buchen Sie Santa Ponsa 1. Prüfen Sie die Limits, bevor Sie um Calvià oder Andratx planen: Bei 28 für Herren schließen sie viele Spieler mit höherem Handicap aus, bevor es der Platz tut.'),
      c(
        'Sie spielen im Südwesten? Sagen Sie mir, wo Sie wohnen und wie hoch Ihr Handicap ist, und ich buche den richtigen Platz oder spiele ihn mit Ihnen.',
        'Play With A Pro'
      ),
    ],
  },
  es: {
    metadata: {
      title: 'Campos de golf del suroeste de Mallorca',
      description:
        'T Golf Calvià, Golf de Andratx y Santa Ponsa 1 comparados por un pro PGA que ha jugado los tres, más Bendinat y los Santa Ponsa solo para socios.',
      imageAlt: 'T Golf Calvià, suroeste de Mallorca',
    },
    meta: {
      badge: 'Suroeste',
      readTime: '5 min de lectura',
      updated: 'Octubre 2026',
      title: 'Campos de golf del suroeste de Mallorca comparados',
      intro:
        'T Golf Calvià, Golf de Andratx y Santa Ponsa 1 son los tres campos públicos entre los que elegir en el suroeste, y los he jugado todos. Cada uno pone a prueba algo distinto: carries y juicio de distancia en Calvià, desniveles y golpes a ciegas en Andratx, longitud en Santa Ponsa 1.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Análisis honesto 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Análisis honesto 2026' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 Golf - Análisis honesto 2026' },
        { slug: 'best-golf-courses-mallorca', title: 'Mejores campos de golf en Mallorca 2026' },
      ],
    },
    blocks: [
      img('Calle en T Golf Calvià con un molino y la sierra de Tramuntana al fondo', 'Los molinos y el telón de fondo de la Tramuntana acompañan durante toda la vuelta.'),
      p('Vivo en el suroeste, así que estos son los campos más cercanos a casa. El Real Golf de Bendinat queda entre ellos y Palma, y Santa Ponsa 2 y 3 son solo para socios. Así se comparan.'),
      p('Respuesta rápida'),
      t(
        ['Campo', 'Par', 'Hándicap máx. (hombres / mujeres)', 'Caminar', 'Dificultad', 'Ideal para'],
        [
          ['T Golf Calvià', '72', '28 / 34', 'Se puede caminar, el buggy es más cómodo', '7/10', 'La vuelta mejor cuidada del suroeste'],
          ['Golf de Andratx', '72', '28 / 36', 'Buggy obligatorio antes de las 14:00', '9/10', 'La prueba más dura, y las vistas'],
          ['Santa Ponsa 1', '72', '36 / 36', 'Llano pero largo', '8/10', 'Pegar el driver en calles anchas'],
          ['Real Golf de Bendinat', '69', '36 / 36', 'Con muchas cuestas', '6/10', 'Una vuelta corta cerca de Illetas y Portals'],
          ['Santa Ponsa 2 y 3', '72 y 30', 'Solo socios', 'Fácil', '7/10 y 4/10', 'Solo si juegas con un socio'],
        ]
      ),
      p('T Golf Calvià: el campo mejor cuidado del suroeste'),
      p('Salí a las 15:20 un martes y podía oír el viento entre los pinos entre golpe y golpe. Desde la mayoría de las calles no se ve ninguna carretera ni edificio, solo pinos, agua y la Tramuntana. John Harris diseñó el campo en 1978, y una renovación de 10 millones de € lo reconstruyó. El estado del campo es tan bueno como cualquiera que haya jugado en la isla, hasta el rastrillo de bunker, diseñado para que la bola rara vez se quede apoyada en él.'),
      p('Quince lagos bordean las calles y obligan a hacer carries desde el tee, y varias aproximaciones ocultan la parte baja de la bandera, así que fíate de tu medidor de distancias y no del ojo. El 10 plantea la decisión más clara del campo. Es un dogleg a derechas con un molino a la izquierda y agua a la derecha, y eliges cuánta agua cortas. El 18 es un par 5 estrecho que se abre a medida que avanzas y recompensa que te comprometas con el golpe de salida angosto.'),
      img('Bunker en T Golf Calvià con el característico diseño de rastrillo', 'El diseño del rastrillo hace que la bola rara vez se quede apoyada en la pared. Un detalle pequeño que marca una diferencia real.'),
      p("Le di un 9/10. El límite es 28 para hombres y 34 para mujeres, y no pondría aquí a un jugador de hándicap alto como primera vuelta de sus vacaciones. Reserva un twilight entre semana: la tarifa twilight empieza en 150 € frente a una tarifa de temporada alta de 210 €, y la luz es la mejor. El campo de prácticas es de hierba, algo que no ofrecen todos los clubes de Mallorca, y con tantos carries merece la pena pegar bolas antes del 1. Más detalles en el <a href='/guides/t-golf-calvia-review'>análisis de T Golf Calvià</a>."),
      p('Golf de Andratx: la prueba más dura, y las vistas'),
      p('Andratx está en las colinas sobre Camp de Mar y es uno de los campos más difíciles de la isla. Le puse un 7,5/10. Arroyos y agua cruzan las calles en lugar de correr a su lado, así que fallar un poco en la distancia te mete en problemas. El cambio de altura es constante. Los golpes de salida desaparecen de la vista, las aproximaciones van a banderas que no ves y los par 3 juegan muy distinto a la tarjeta por los desniveles.'),
      p('El 6, el Green Monster, es el par 5 más largo de España con 609 metros. Teníamos el viento a favor y aun así nos exigió todo. El 12 es un dogleg a derechas muy cerrado con Camp de Mar debajo de ti durante todo el hoyo, uno de los mejores hoyos que he jugado en Mallorca. El 15, Hello Mrs Robinson, juega unas 20 yardas más corto desde un tee elevado hasta un green muy bien protegido.'),
      img('Vista desde el hoyo 8 de Golf de Andratx mirando sobre el suroeste de Mallorca', 'Hoyo 8, A Love of Mallorca. Desde uno de los puntos más altos del campo, mirando sobre todo el suroeste de Mallorca.'),
      p("Aspectos prácticos: el buggy es obligatorio antes de las 14:00, el límite es 28 para hombres y 36 para mujeres, y la zona de prácticas está al otro lado de la carretera respecto a la casa club. Pese a tanta altura, el mar solo se ve desde el 2. Lleva un GPS o un plano del campo, porque varias aproximaciones son semiciegas. Más detalles en el <a href='/guides/golf-andratx-review'>análisis de Golf de Andratx</a>."),
      p('Santa Ponsa 1: el campo largo y ancho'),
      p('Santa Ponsa 1 acogió el Mallorca Golf Open del European Tour en 2021, el primer torneo del circuito en la isla en diez años, y el ganador, Jeff Winther, hizo 62 dos veces. Las calles son anchas y los hoyos de apertura, generosos. Después de una vuelta en Son Gual o Andratx, donde el driver suele quedarse en la bolsa, este es el campo que te deja pegarlo.'),
      p('El inconveniente es la longitud. El 10 mide 590 m, uno de los par 5 más largos de Europa. Los par 3 son largos con greens pequeños, así que van más de limitar daños que de buscar birdies. En un día sin viento el campo parece más fácil de lo que es. El viento suele llegar a media mañana, así que reserva temprano. Los hoyos 5, 6 y 7 tienen algunas de las mejores vistas de la Tramuntana de la isla.'),
      img('Calle de Santa Ponsa 1 con montañas detrás', 'Las calles son anchas. Este es un campo que invita al driver.'),
      p("Va bien a un jugador seguro con el driver y funciona como una vuelta más fácil al principio de un viaje, antes de Andratx. El límite es 36, con certificado obligatorio, y el alquiler de buggy cuesta 43 €. Más detalles en el <a href='/guides/santa-ponsa-1-review'>análisis de Santa Ponsa 1</a>."),
      p('Real Golf de Bendinat'),
      p('Bendinat es el más cercano a Palma del grupo, a unos 15 minutos, entre Illetas y Portals. Martin Hawtree diseñó los nueve hoyos originales en 1986, y en 1995 pasó a 18. Es par 69, 5.660 m y con muchas cuestas, con vistas sobre la bahía de Palma, Cabrera y el castillo de Bendinat. Los green fees de visitantes están limitados cada día, así que reserva con antelación. Si te alojas en Illetas o Portals y quieres una vuelta corta sin desplazarte, este es el campo que hay que mirar.'),
      img('Real Golf de Bendinat en Mallorca'),
      p('Santa Ponsa 2 y 3: solo socios'),
      p('Ambos son solo para socios, y los invitados solo pueden jugar con un socio, así que ninguno entra en un plan de viaje salvo que conozcas a uno. Santa Ponsa 2 es un campo de 18 hoyos de 1991. Santa Ponsa 3 son nueve hoyos cortos por una zona residencial.'),
      p('Cuál reservar'),
      p('Para la mejor vuelta del suroeste, reserva T Golf Calvià. Para la prueba más dura y las mejores vistas, reserva Andratx, con un plano del campo y una salida temprana. Si pegas bien el driver y quieres disfrutarlo, reserva Santa Ponsa 1. Comprueba los límites antes de planificar en torno a Calvià o Andratx: con 28 para hombres, descartan a muchos jugadores de hándicap alto antes de que lo haga el campo.'),
      c(
        '¿Juegas en el suroeste? Dime dónde te alojas y tu hándicap, y reservaré el campo adecuado o lo jugaré contigo.',
        'Play With A Pro'
      ),
    ],
  },
  fr: {
    metadata: {
      title: 'Golfs du sud-ouest de Majorque',
      description:
        'T Golf Calvià, Golf de Andratx et Santa Ponsa 1 comparés par un pro PGA qui les a tous joués, plus Bendinat et les Santa Ponsa réservés aux membres.',
      imageAlt: 'T Golf Calvià, sud-ouest de Majorque',
    },
    meta: {
      badge: 'Sud-ouest',
      readTime: '5 min de lecture',
      updated: 'Octobre 2026',
      title: 'Les parcours de golf du sud-ouest de Majorque comparés',
      intro:
        "T Golf Calvià, Golf de Andratx et Santa Ponsa 1 sont les trois parcours publics entre lesquels choisir dans le sud-ouest, et je les ai tous joués. Chacun teste quelque chose de différent : carries et jugement des distances à Calvià, dénivelés et coups aveugles à Andratx, longueur à Santa Ponsa 1.",
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Avis honnête 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Avis honnête 2026' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 Golf - Avis honnête 2026' },
        { slug: 'best-golf-courses-mallorca', title: 'Meilleurs parcours de golf à Majorque 2026' },
      ],
    },
    blocks: [
      img("Fairway de T Golf Calvià avec un moulin et la Tramuntana en arrière-plan", "Les moulins et le décor de la Tramuntana accompagnent toute la partie."),
      p("J'habite dans le sud-ouest, ce sont donc les parcours les plus proches de chez moi. Le Real Golf de Bendinat se trouve entre eux et Palma, et Santa Ponsa 2 et 3 sont réservés aux membres. Voici comment ils se comparent."),
      p('Réponse rapide'),
      t(
        ['Parcours', 'Par', 'Handicap max. (hommes / dames)', 'Marche', 'Difficulté', 'Idéal pour'],
        [
          ['T Golf Calvià', '72', '28 / 34', 'Praticable à pied, voiturette plus confortable', '7/10', 'La partie la mieux entretenue du sud-ouest'],
          ['Golf de Andratx', '72', '28 / 36', 'Voiturette obligatoire avant 14 h', '9/10', "L'épreuve la plus dure, et les vues"],
          ['Santa Ponsa 1', '72', '36 / 36', 'Plat mais long', '8/10', 'Sortir le driver sur de larges fairways'],
          ['Real Golf de Bendinat', '69', '36 / 36', 'Très vallonné', '6/10', 'Une partie courte près d\'Illetas et de Portals'],
          ['Santa Ponsa 2 et 3', '72 et 30', 'Réservé aux membres', 'Facile', '7/10 et 4/10', 'Seulement si vous jouez avec un membre'],
        ]
      ),
      p('T Golf Calvià : le parcours le mieux entretenu du sud-ouest'),
      p("J'ai pris le départ à 15 h 20 un mardi et j'entendais le vent dans les pins entre les coups. Depuis la plupart des fairways, on ne voit ni route ni bâtiment, seulement des pins, de l'eau et la Tramuntana. John Harris a dessiné le parcours en 1978, et une rénovation de 10 millions d'€ l'a reconstruit. L'état du parcours est aussi bon que tout ce que j'ai joué sur l'île, jusqu'au râteau de bunker, conçu pour que la balle s'y appuie rarement."),
      p("Quinze lacs bordent les fairways et imposent des carries depuis le départ, et plusieurs approches cachent le bas du drapeau, fiez-vous donc à votre télémètre plutôt qu'à l'œil. Le 10 pose le choix le plus net du parcours. C'est un dogleg à droite avec un moulin à gauche et de l'eau à droite, et vous décidez de la part d'eau que vous coupez. Le 18 est un par 5 étroit qui s'ouvre au fil du jeu et récompense celui qui s'engage sur le départ étroit."),
      img("Bunker à T Golf Calvià montrant le design distinctif du râteau", "Le design du râteau fait que la balle s'y appuie rarement. Un petit détail qui change vraiment les choses."),
      p("Je lui ai donné 9/10. La limite est de 28 pour les hommes et 34 pour les dames, et je ne mettrais pas ici un joueur de handicap élevé en première partie des vacances. Réservez un créneau twilight en semaine : le tarif twilight commence à 150 € contre un tarif de pointe de 210 €, et la lumière y est la plus belle. Le practice est en herbe, ce que tous les clubs de Majorque n'offrent pas, et avec autant de carries il vaut la peine de frapper des balles avant le 1. Plus de détails dans l'<a href='/guides/t-golf-calvia-review'>avis sur T Golf Calvià</a>."),
      p('Golf de Andratx : l\'épreuve la plus dure, et les vues'),
      p("Andratx est dans les collines au-dessus de Camp de Mar et c'est l'un des parcours les plus difficiles de l'île. Je lui ai donné 7,5/10. Des ruisseaux et de l'eau traversent les fairways au lieu de les longer, si bien qu'une légère erreur de distance vous met en difficulté. Le dénivelé est constant. Les coups de départ disparaissent de la vue, les approches visent des drapeaux invisibles, et les par 3 jouent très différemment de la carte à cause des dénivelés."),
      p("Le 6, le Green Monster, est le plus long par 5 d'Espagne avec 609 mètres. Nous avions le vent dans le dos et il a quand même fallu tout donner. Le 12 est un dogleg serré à droite avec Camp de Mar sous vos yeux pendant tout le trou, l'un des meilleurs trous que j'aie joués à Majorque. Le 15, Hello Mrs Robinson, joue environ 20 yards plus court depuis un départ surélevé vers un green bien protégé."),
      img("Vue depuis le trou 8 de Golf de Andratx sur le sud-ouest de Majorque", "Trou 8, A Love of Mallorca. Depuis l'un des points les plus hauts du parcours, avec vue sur tout le sud-ouest de Majorque."),
      p("Points pratiques : les voiturettes sont obligatoires avant 14 h, la limite est de 28 pour les hommes et 36 pour les dames, et la zone d'entraînement est de l'autre côté de la route par rapport au club-house. Malgré la hauteur, la mer n'est en vue qu'à partir du 2. Emportez un GPS ou un plan du parcours, car plusieurs approches sont semi-aveugles. Plus de détails dans l'<a href='/guides/golf-andratx-review'>avis sur Golf de Andratx</a>."),
      p('Santa Ponsa 1 : le parcours long et large'),
      p("Santa Ponsa 1 a accueilli le Mallorca Golf Open du European Tour en 2021, le premier tournoi du circuit sur l'île en dix ans, et le vainqueur, Jeff Winther, a rendu deux fois une carte de 62. Les fairways sont larges et les trous d'ouverture généreux. Après une partie à Son Gual ou à Andratx, où le driver reste souvent dans le sac, c'est le parcours qui vous laisse le sortir."),
      p("La longueur est le piège. Le 10 mesure 590 m, l'un des plus longs par 5 d'Europe. Les par 3 sont longs avec de petits greens, il s'agit donc plus de limiter les dégâts que de chercher des birdies. Par temps calme, le parcours paraît plus facile qu'il ne l'est. Le vent arrive généralement en milieu de matinée, réservez donc tôt. Les trous 5, 6 et 7 offrent certaines des plus belles vues sur la Tramuntana de l'île."),
      img("Fairway de Santa Ponsa 1 avec des montagnes derrière", "Les fairways sont larges. C'est un parcours qui invite le driver."),
      p("Il convient à un joueur sûr de son driver et fait une partie plus facile en début de séjour, avant Andratx. La limite est de 36, avec un certificat exigé, et la location de voiturette coûte 43 €. Plus de détails dans l'<a href='/guides/santa-ponsa-1-review'>avis sur Santa Ponsa 1</a>."),
      p('Real Golf de Bendinat'),
      p("Bendinat est le plus proche de Palma du groupe, à environ 15 minutes, entre Illetas et Portals. Martin Hawtree a dessiné les neuf trous d'origine en 1986, et il est passé à 18 en 1995. C'est un par 69 de 5 660 m, très vallonné, avec des vues sur la baie de Palma, Cabrera et le château de Bendinat. Les green fees visiteurs sont limités chaque jour, réservez donc à l'avance. Si vous séjournez à Illetas ou à Portals et voulez une partie courte sans trajet, c'est le parcours à envisager."),
      img('Real Golf de Bendinat, Majorque'),
      p('Santa Ponsa 2 et 3 : réservés aux membres'),
      p("Les deux sont réservés aux membres, et les invités ne peuvent jouer qu'avec un membre, aucun n'a donc sa place dans un plan de séjour à moins d'en connaître un. Santa Ponsa 2 est un parcours de 18 trous datant de 1991. Santa Ponsa 3 compte neuf trous courts à travers une zone résidentielle."),
      p('Lequel réserver'),
      p("Pour la meilleure partie du sud-ouest, réservez T Golf Calvià. Pour l'épreuve la plus dure et les plus belles vues, réservez Andratx, avec un plan du parcours et un départ tôt. Si vous frappez bien le driver et voulez en profiter, réservez Santa Ponsa 1. Vérifiez les limites avant de planifier autour de Calvià ou d'Andratx : à 28 pour les hommes, elles écartent beaucoup de joueurs de handicap élevé avant que le parcours ne le fasse."),
      c(
        "Vous jouez dans le sud-ouest ? Dites-moi où vous séjournez et votre handicap, et je réserverai le bon parcours ou le jouerai avec vous.",
        'Play With A Pro'
      ),
    ],
  },
  nl: {
    metadata: {
      title: 'Golfbanen in het zuidwesten van Mallorca',
      description:
        'T Golf Calvià, Golf de Andratx en Santa Ponsa 1 vergeleken door een PGA-pro die alle drie speelde, plus Bendinat en de Santa Ponsa-banen voor leden.',
      imageAlt: 'T Golf Calvià, zuidwesten van Mallorca',
    },
    meta: {
      badge: 'Zuidwesten',
      readTime: '5 min leestijd',
      updated: 'Oktober 2026',
      title: 'Golfbanen in het zuidwesten van Mallorca vergeleken',
      intro:
        'T Golf Calvià, Golf de Andratx en Santa Ponsa 1 zijn de drie openbare banen om uit te kiezen in het zuidwesten, en ik heb ze alle drie gespeeld. Elk test iets anders: carries en afstandsinschatting op Calvià, hoogteverschillen en blinde slagen op Andratx, lengte op Santa Ponsa 1.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Eerlijke review 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Eerlijke review 2026' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 Golf - Eerlijke review 2026' },
        { slug: 'best-golf-courses-mallorca', title: 'Beste golfbanen op Mallorca 2026' },
      ],
    },
    blocks: [
      img('Fairway op T Golf Calvià met een windmolen en de Tramuntana op de achtergrond', 'De windmolens en het Tramuntana-decor zijn tijdens de hele ronde aanwezig.'),
      p('Ik woon in het zuidwesten, dus dit zijn de banen het dichtst bij huis. Real Golf de Bendinat ligt tussen hen en Palma, en Santa Ponsa 2 en 3 zijn alleen voor leden. Zo verhouden ze zich tot elkaar.'),
      p('Kort antwoord'),
      t(
        ['Baan', 'Par', 'Max. handicap (heren / dames)', 'Lopen', 'Moeilijkheid', 'Het best voor'],
        [
          ['T Golf Calvià', '72', '28 / 34', 'Te lopen, buggy comfortabeler', '7/10', 'De best onderhouden ronde in het zuidwesten'],
          ['Golf de Andratx', '72', '28 / 36', 'Buggy verplicht vóór 14.00 uur', '9/10', 'De zwaarste test, en het uitzicht'],
          ['Santa Ponsa 1', '72', '36 / 36', 'Vlak maar lang', '8/10', 'De driver slaan op brede fairways'],
          ['Real Golf de Bendinat', '69', '36 / 36', 'Zeer heuvelachtig', '6/10', 'Een korte ronde bij Illetas en Portals'],
          ['Santa Ponsa 2 en 3', '72 en 30', 'Alleen leden', 'Makkelijk', '7/10 en 4/10', 'Alleen als je met een lid speelt'],
        ]
      ),
      p('T Golf Calvià: de best onderhouden baan van het zuidwesten'),
      p('Ik begon op een dinsdag om 15.20 uur en hoorde tussen de slagen de wind in de dennen. Vanaf de meeste fairways zie je geen weg of gebouw, alleen dennen, water en de Tramuntana. John Harris ontwierp de baan in 1978, en een renovatie van €10 miljoen heeft hem opnieuw opgebouwd. De conditie is net zo goed als alles wat ik op het eiland heb gespeeld, tot en met een bunkerhark die zo is ontworpen dat de bal er zelden tegenaan blijft liggen.'),
      p('Vijftien meren omzomen de fairways en dwingen carries vanaf de tee af, en meerdere approaches verbergen de onderkant van de vlag, dus vertrouw op je afstandsmeter in plaats van op je oog. Op de 10e ligt de duidelijkste keuze van de baan. Het is een dogleg naar rechts met een windmolen links en water rechts, en jij bepaalt hoeveel water je afsnijdt. De 18e is een smalle par 5 die opengaat naarmate je vordert en je beloont voor het inzetten op de smalle tee shot.'),
      img('Bunker op T Golf Calvià met het kenmerkende harkontwerp', 'Door het harkontwerp blijft de bal zelden tegen de bunkerwand liggen. Een klein detail dat echt verschil maakt.'),
      p("Ik gaf hem 9/10. De limiet is 28 voor heren en 34 voor dames, en ik zou hier geen speler met hogere handicap neerzetten als eerste ronde van een vakantie. Boek een twilightslot doordeweeks: het twilighttarief begint bij €150 tegenover een piektarief van €210, en het licht is dan op zijn best. De range is van gras, wat niet elke club op Mallorca biedt, en met zoveel carries is het de moeite waard om voor de eerste tee ballen te slaan. Meer in de <a href='/guides/t-golf-calvia-review'>review van T Golf Calvià</a>."),
      p('Golf de Andratx: de zwaarste test, en het uitzicht'),
      p('Andratx ligt in de heuvels boven Camp de Mar en is een van de zwaarste banen van het eiland. Ik gaf hem 7,5/10. Beken en water doorsnijden de fairways in plaats van ernaast te lopen, dus een beetje mis zitten met je afstand brengt je in de problemen. Het hoogteverschil is constant. Tee shots verdwijnen uit zicht, approaches gaan naar vlaggen die je niet ziet, en de par 3\'s spelen door de hoogteverschillen heel anders dan de kaart doet vermoeden.'),
      p('De 6e, de Green Monster, is met 609 meter de langste par 5 van Spanje. We hadden de wind mee en toch moesten we alles geven. De 12e is een scherpe dogleg naar rechts met Camp de Mar onder je tijdens het hele hole, een van de beste holes die ik op Mallorca heb gespeeld. De 15e, Hello Mrs Robinson, speelt ongeveer 20 yards korter vanaf een hoge tee naar een goed beschermde green.'),
      img('Uitzicht vanaf hole 8 op Golf de Andratx over het zuidwesten van Mallorca', 'Hole 8, A Love of Mallorca. Vanaf een van de hoogste punten van de baan, kijkend over het hele zuidwesten van Mallorca.'),
      p("Praktische punten: buggy's zijn verplicht vóór 14.00 uur, de limiet is 28 voor heren en 36 voor dames, en het oefenterrein ligt aan de overkant van de weg ten opzichte van het clubhuis. Ondanks alle hoogte is de zee pas vanaf de 2e in beeld. Neem een gps of baanplanner mee, want meerdere approaches zijn half blind. Meer in de <a href='/guides/golf-andratx-review'>review van Golf de Andratx</a>."),
      p('Santa Ponsa 1: de lange, brede baan'),
      p('Santa Ponsa 1 was in 2021 gastheer van de European Tour Mallorca Golf Open, het eerste toernooi van de tour op het eiland in tien jaar, en de winnaar, Jeff Winther, speelde twee keer een 62. De fairways zijn breed en de openingsholes royaal. Na een ronde op Son Gual of Andratx, waar de driver vaak in de tas blijft, is dit de baan waar je hem mag slaan.'),
      p("De lengte is de adder onder het gras. De 10e is 590m, een van de langste par 5's van Europa. De par 3's zijn lang met kleine greens, dus het gaat meer om schadebeperking dan om birdiekansen. Op een windstille dag lijkt de baan makkelijker dan hij is. De wind komt meestal halverwege de ochtend op, dus boek vroeg. Holes 5, 6 en 7 hebben enkele van de beste Tramuntana-uitzichten van het eiland."),
      img('Fairway van Santa Ponsa 1 met bergen erachter', 'De fairways zijn breed. Dit is een baan die de driver uitnodigt.'),
      p("Hij past bij een zelfverzekerde driverspeler en werkt als makkelijkere ronde vroeg in een reis, voor Andratx. De limiet is 36, met certificaat verplicht, en een buggy huren kost €43. Meer in de <a href='/guides/santa-ponsa-1-review'>review van Santa Ponsa 1</a>."),
      p('Real Golf de Bendinat'),
      p('Bendinat ligt het dichtst bij Palma van de groep, ongeveer 15 minuten, tussen Illetas en Portals. Martin Hawtree ontwierp de oorspronkelijke negen holes in 1986, en in 1995 werd het 18. Het is par 69, 5.660m en zeer heuvelachtig, met uitzicht over de baai van Palma, Cabrera en kasteel Bendinat. Het aantal bezoekersgreenfees is per dag beperkt, dus boek vooruit. Verblijf je in Illetas of Portals en wil je een korte ronde zonder rit, dan is dit de baan om naar te kijken.'),
      img('Real Golf de Bendinat op Mallorca'),
      p('Santa Ponsa 2 en 3: alleen voor leden'),
      p('Beide zijn alleen voor leden, en gasten kunnen alleen met een lid spelen, dus geen van beide hoort in een reisplan tenzij je er een kent. Santa Ponsa 2 is een 18-holesbaan uit 1991. Santa Ponsa 3 zijn negen korte holes door een woonwijk.'),
      p('Welke te boeken'),
      p('Voor de beste ronde in het zuidwesten boek je T Golf Calvià. Voor de zwaarste test en het mooiste uitzicht boek je Andratx, met een baanplanner en een vroege starttijd. Sla je de driver goed en wil je daarvan genieten, boek dan Santa Ponsa 1. Controleer de limieten voordat je rond Calvià of Andratx plant: met 28 voor heren sluiten ze veel spelers met een hogere handicap uit voordat de baan dat doet.'),
      c(
        'Speel je in het zuidwesten? Vertel me waar je verblijft en wat je handicap is, dan boek ik de juiste baan of speel ik hem met je.',
        'Play With A Pro'
      ),
    ],
  },
  sv: {
    metadata: {
      title: 'Golfbanor i sydvästra Mallorca',
      description:
        'T Golf Calvià, Golf de Andratx och Santa Ponsa 1 jämförda av en PGA-pro som spelat alla tre, plus Bendinat och Santa Ponsa-banorna för medlemmar.',
      imageAlt: 'T Golf Calvià, sydvästra Mallorca',
    },
    meta: {
      badge: 'Sydväst',
      readTime: '5 min läsning',
      updated: 'Oktober 2026',
      title: 'Golfbanorna i sydvästra Mallorca jämförda',
      intro:
        'T Golf Calvià, Golf de Andratx och Santa Ponsa 1 är de tre öppna banorna att välja mellan i sydväst, och jag har spelat alla tre. Var och en prövar något olika: carries och avståndsbedömning på Calvià, höjdskillnader och blinda slag på Andratx, längd på Santa Ponsa 1.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Ärlig recension 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Ärlig recension 2026' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 Golf - Ärlig recension 2026' },
        { slug: 'best-golf-courses-mallorca', title: 'Bästa golfbanorna på Mallorca 2026' },
      ],
    },
    blocks: [
      img('Fairway på T Golf Calvià med väderkvarn och Tramuntana i bakgrunden', 'Väderkvarnarna och Tramuntana-kulissen följer med genom hela rundan.'),
      p('Jag bor i sydväst, så det här är banorna närmast hemmet. Real Golf de Bendinat ligger mellan dem och Palma, och Santa Ponsa 2 och 3 är bara för medlemmar. Så här står de sig mot varandra.'),
      p('Snabbt svar'),
      t(
        ['Bana', 'Par', 'Max handicap (herrar / damer)', 'Gå', 'Svårighet', 'Bäst för'],
        [
          ['T Golf Calvià', '72', '28 / 34', 'Går att gå, buggy bekvämare', '7/10', 'Den bäst underhållna rundan i sydväst'],
          ['Golf de Andratx', '72', '28 / 36', 'Buggy obligatorisk före 14.00', '9/10', 'Det hårdaste provet, och utsikten'],
          ['Santa Ponsa 1', '72', '36 / 36', 'Platt men lång', '8/10', 'Slå drivern på breda fairways'],
          ['Real Golf de Bendinat', '69', '36 / 36', 'Mycket kuperad', '6/10', 'En kort runda nära Illetas och Portals'],
          ['Santa Ponsa 2 och 3', '72 och 30', 'Endast medlemmar', 'Lätt', '7/10 och 4/10', 'Bara om du spelar med en medlem'],
        ]
      ),
      p('T Golf Calvià: den bäst underhållna banan i sydväst'),
      p('Jag slog ut 15.20 en tisdag och hörde vinden i tallarna mellan slagen. Från de flesta fairways syns varken väg eller byggnad, bara tallar, vatten och Tramuntana. John Harris ritade banan 1978, och en renovering för 10 miljoner € byggde om den. Skicket är lika bra som något jag spelat på ön, ända ner till en bunkerräfsa som är utformad så att bollen sällan ligger an mot den.'),
      p('Femton sjöar kantar fairways och tvingar fram carries från tee, och flera närslag döljer flaggans nedre del, så lita på avståndsmätaren i stället för ögat. Hål 10 ställer dig inför banans tydligaste val. Det är en dogleg höger med en väderkvarn till vänster och vatten till höger, och du väljer hur mycket vatten du skär av. Hål 18 är en trång par 5 som öppnar sig allteftersom du går, och belönar den som vågar satsa på det smala utslaget.'),
      img('Bunker på T Golf Calvià som visar den särpräglade räfsdesignen', 'Räfsdesignen gör att bollen sällan ligger an mot kanten. En liten detalj som gör verklig skillnad.'),
      p("Jag gav den 9/10. Gränsen är 28 för herrar och 34 för damer, och jag skulle inte sätta en spelare med högre handicap här som första rundan på semestern. Boka en twilight-tid mitt i veckan: twilight-priset börjar på 150 € mot ett högsäsongspris på 210 €, och ljuset är som bäst. Rangen är i gräs, vilket inte alla klubbar på Mallorca erbjuder, och med så många carries är det värt att slå bollar före första tee. Mer i <a href='/guides/t-golf-calvia-review'>recensionen av T Golf Calvià</a>."),
      p('Golf de Andratx: det hårdaste provet, och utsikten'),
      p('Andratx ligger i kullarna ovanför Camp de Mar och är en av öns svåraste banor. Jag gav den 7,5/10. Bäckar och vatten korsar fairways i stället för att löpa längs dem, så en liten miss i längd straffar sig. Höjdskillnaderna är konstanta. Utslag försvinner ur sikte, närslag går mot flaggor du inte ser, och par 3-hålen spelar mycket annorlunda än kortet på grund av höjdskillnaderna.'),
      p('Hål 6, Green Monster, är Spaniens längsta par 5 på 609 meter. Vi hade vinden i ryggen och fick ändå ge allt. Hål 12 är en skarp dogleg höger med Camp de Mar under dig under hela hålet, ett av de bästa hål jag spelat på Mallorca. Hål 15, Hello Mrs Robinson, spelar ungefär 20 yards kortare från en hög tee mot en välskyddad green.'),
      img('Utsikt från hål 8 på Golf de Andratx som blickar ner över sydvästra Mallorca', 'Hål 8, A Love of Mallorca. Från en av banans högsta punkter, med utsikt ner över hela sydvästra Mallorca.'),
      p("Praktiska punkter: buggy är obligatorisk före 14.00, gränsen är 28 för herrar och 36 för damer, och träningsområdet ligger tvärs över vägen från klubbhuset. Trots all höjd syns havet först från hål 2. Ta med GPS eller en banplanerare, eftersom flera närslag är halvblinda. Mer i <a href='/guides/golf-andratx-review'>recensionen av Golf de Andratx</a>."),
      p('Santa Ponsa 1: den långa, breda banan'),
      p('Santa Ponsa 1 var värd för European Tour Mallorca Golf Open 2021, den första tourtävlingen på ön på tio år, och vinnaren, Jeff Winther, gjorde 62 två gånger. Fairways är breda och öppningshålen generösa. Efter en runda på Son Gual eller Andratx, där drivern ofta stannar i bagen, är det här banan som låter dig slå den.'),
      p('Längden är haken. Hål 10 är 590 m, en av Europas längsta par 5. Par 3-hålen är långa med små greener, så de handlar mer om skadebegränsning än birdiechanser. En lugn dag ser banan lättare ut än den är. Vinden kommer oftast mitt på förmiddagen, så boka tidigt. Hål 5, 6 och 7 har några av öns bästa utsikter över Tramuntana.'),
      img('Fairway på Santa Ponsa 1 med berg bakom', 'Fairways är breda. Det här är en bana som bjuder in till driverspel.'),
      p("Den passar en självsäker driverspelare och fungerar som en lättare runda tidigt under resan, före Andratx. Gränsen är 36, med intyg krävt, och buggy kostar 43 €. Mer i <a href='/guides/santa-ponsa-1-review'>recensionen av Santa Ponsa 1</a>."),
      p('Real Golf de Bendinat'),
      p('Bendinat ligger närmast Palma av banorna, cirka 15 minuter, mellan Illetas och Portals. Martin Hawtree ritade de ursprungliga nio hålen 1986, och 1995 blev det 18. Banan är par 69, 5 660 m och mycket kuperad, med utsikt över Palmabukten, Cabrera och slottet Bendinat. Besökarnas greenfeeplatser är begränsade varje dag, så boka i förväg. Bor du i Illetas eller Portals och vill ha en kort runda utan resa är det den här banan att titta på.'),
      img('Real Golf de Bendinat på Mallorca'),
      p('Santa Ponsa 2 och 3: endast medlemmar'),
      p('Båda är bara för medlemmar, och gäster kan bara spela med en medlem, så ingen av dem hör hemma i en reseplan om du inte känner en. Santa Ponsa 2 är en 18-hålsbana från 1991. Santa Ponsa 3 är nio korta hål genom ett bostadsområde.'),
      p('Vilken du ska boka'),
      p('För den bästa rundan i sydväst, boka T Golf Calvià. För det hårdaste provet och den bästa utsikten, boka Andratx, med en banplanerare och en tidig starttid. Slår du drivern bra och vill njuta av det, boka Santa Ponsa 1. Kontrollera gränserna innan du planerar kring Calvià eller Andratx: med 28 för herrar utesluter de många spelare med högre handicap innan banan gör det.'),
      c(
        'Spelar du i sydväst? Berätta var du bor och vilket handicap du har, så bokar jag rätt bana eller spelar den med dig.',
        'Play With A Pro'
      ),
    ],
  },
  zh: {
    metadata: {
      title: '马略卡西南部球场对比',
      description:
        'PGA 职业教练对比 T Golf Calvià、Golf de Andratx 和 Santa Ponsa 1，三家他都打过，另附 Bendinat 和仅限会员的 Santa Ponsa 球场。',
      imageAlt: '马略卡西南部的 T Golf Calvià',
    },
    meta: {
      badge: '西南部',
      readTime: '5分钟阅读',
      updated: '2026年10月',
      title: '马略卡西南部高尔夫球场对比',
      intro:
        'T Golf Calvià、Golf de Andratx 和 Santa Ponsa 1 是西南部可供选择的三个公共球场，我三个都打过。每个球场考验的东西不同：Calvià 考 carry 和距离判断，Andratx 考落差和盲打，Santa Ponsa 1 考长度。',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - PGA教练真实评测（2026）' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - PGA教练真实评测（2026）' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 高尔夫 - PGA教练真实评测（2026）' },
        { slug: 'best-golf-courses-mallorca', title: '2026马略卡最佳高尔夫球场' },
      ],
    },
    blocks: [
      img('T Golf Calvià 的球道，背景是风车和特拉蒙塔纳山脉', '风车和特拉蒙塔纳山脉的背景贯穿整场球。'),
      p('我住在西南部，所以这些是离我家最近的球场。Real Golf de Bendinat 位于它们和帕尔马之间，Santa Ponsa 2 和 3 仅限会员。以下是它们的对比。'),
      p('快速回答'),
      t(
        ['球场', '标准杆', '差点上限（男 / 女）', '步行', '难度', '最适合'],
        [
          ['T Golf Calvià', '72', '28 / 34', '可以步行，坐球车更舒服', '7/10', '西南部维护得最好的一轮'],
          ['Golf de Andratx', '72', '28 / 36', '下午 2 点前必须用球车', '9/10', '最难的考验，以及风景'],
          ['Santa Ponsa 1', '72', '36 / 36', '平坦但很长', '8/10', '在宽球道上打一号木'],
          ['Real Golf de Bendinat', '69', '36 / 36', '起伏很大', '6/10', 'Illetas 和 Portals 附近的短场'],
          ['Santa Ponsa 2 和 3', '72 和 30', '仅限会员', '轻松', '7/10 和 4/10', '仅在与会员同打时'],
        ]
      ),
      p('T Golf Calvià：西南部维护最好的球场'),
      p('我周二下午 15:20 开球，击球间隙能听到风吹过松林的声音。从大部分球道看出去，没有公路也没有建筑，只有松树、水和特拉蒙塔纳山脉。球场由 John Harris 在 1978 年设计，一次 1000 万欧元的翻修让它重建一新。球场的状态与我在岛上打过的任何球场一样好，连沙坑耙都设计得让球很少靠在耙上。'),
      p('十五个湖沿着球道分布，迫使你在发球时飞越，好几杆攻果岭时看不到旗杆底部，所以要看你的测距，而不是靠眼睛。第 10 洞是球场上最清晰的抉择。它是右转的狗腿洞，左边是风车，右边是水，你自己决定切掉多少水面。第 18 洞是狭窄的五杆洞，越往前越开阔，敢于选择窄发球线路的人会得到回报。'),
      img('T Golf Calvià 的沙坑，展示独特的沙坑耙设计', '沙坑耙的设计让球很少靠在坑壁上。一个小细节，却带来实实在在的差别。'),
      p("我给它打了 9/10。差点上限是男士 28、女士 34，我不会让高差点球手把它当作假期的第一轮。工作日订一个黄昏场：黄昏价从 150 欧元起，旺季价是 210 欧元，而且那时光线最好。练习场是草地的，不是每家马略卡俱乐部都有，carry 这么多，下场前值得先打些球。详见 <a href='/guides/t-golf-calvia-review'>T Golf Calvià 评测</a>。"),
      p('Golf de Andratx：最难的考验，以及风景'),
      p('Andratx 位于 Camp de Mar 上方的山丘，是岛上最难的球场之一。我给它打了 7.5/10。溪流和水障碍横穿球道，而不是沿球道延伸，所以距离稍有偏差就会惹麻烦。落差变化一直不断。发球落点会消失在视线外，进攻要打向看不见的旗杆，三杆洞因为落差，打起来和记分卡完全不同。'),
      p('第 6 洞 Green Monster 长 609 米，是西班牙最长的五杆洞。我们当时顺风，还是得拼尽全力。第 12 洞是急转的右狗腿，整个洞 Camp de Mar 都在你脚下，是我在马略卡打过的最好的洞之一。第 15 洞 Hello Mrs Robinson，从高发球台打向防护严密的果岭，实际要比标示的短约 20 码。'),
      img('从 Golf de Andratx 第 8 洞向下俯瞰马略卡西南部', '第 8 洞，A Love of Mallorca。从球场最高的地方之一，俯瞰整个马略卡西南部。'),
      p("实用信息：下午 2 点前必须用球车，差点上限男士 28、女士 36，练习场在会所对面的马路另一边。尽管地势这么高，要到第 2 洞才能看到海。带上 GPS 或球场地图，因为好几杆攻果岭是半盲打。详见 <a href='/guides/golf-andratx-review'>Golf de Andratx 评测</a>。"),
      p('Santa Ponsa 1：又长又宽的球场'),
      p('Santa Ponsa 1 在 2021 年举办了欧巡赛马略卡高尔夫公开赛，这是岛上十年来的首场巡回赛，冠军 Jeff Winther 两次打出 62 杆。球道很宽，开局几个洞也很宽容。在 Son Gual 或 Andratx 打完之后，一号木常常留在球包里，而这里是让你放手打一号木的球场。'),
      p('长度是它的陷阱。第 10 洞 590 米，是欧洲最长的五杆洞之一。三杆洞又长、果岭又小，所以更多是控制损失，而不是抓小鸟球。无风的日子里，球场显得比实际容易。风通常在上午中段到来，所以要早订。第 5、6、7 洞的特拉蒙塔纳山景是岛上数一数二的。'),
      img('Santa Ponsa 1 的球道，身后是群山', '球道很宽。这是一个欢迎一号木的球场。'),
      p("它适合对一号木有信心的球手，也是行程早期、去 Andratx 之前相对轻松的一轮。差点上限 36，需要差点证书，球车租金 43 欧元。详见 <a href='/guides/santa-ponsa-1-review'>Santa Ponsa 1 评测</a>。"),
      p('Real Golf de Bendinat'),
      p('Bendinat 是这组球场里离帕尔马最近的，约 15 分钟，位于 Illetas 和 Portals 之间。Martin Hawtree 在 1986 年设计了最初的九个洞，1995 年扩建为 18 洞。标准杆 69，全长 5660 米，起伏很大，可远眺帕尔马湾、卡夫雷拉岛和 Bendinat 城堡。每天的访客果岭费名额有限，所以要提前预订。如果你住在 Illetas 或 Portals，想打一轮不用开车的短场，就看这个球场。'),
      img('马略卡 Real Golf de Bendinat'),
      p('Santa Ponsa 2 和 3：仅限会员'),
      p('两个都仅限会员，客人只能和会员同打，所以除非你认识会员，否则都排不进行程。Santa Ponsa 2 是 1991 年的 18 洞球场。Santa Ponsa 3 是穿过住宅区的九个短洞。'),
      p('该订哪个'),
      p('想要西南部最好的一轮，订 T Golf Calvià。想要最难的考验和最好的风景，订 Andratx，带上球场地图并选早场。如果你一号木打得好，想痛快打一场，订 Santa Ponsa 1。围绕 Calvià 或 Andratx 做计划前，先查差点上限：男士 28，会在球场出手之前就把很多高差点球手挡在外面。'),
      c(
        '在西南部打球？告诉我你住在哪里、差点多少，我来订合适的球场，或陪你一起打。',
        'Play With A Pro'
      ),
    ],
  },
}
