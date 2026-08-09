import { buildPageMetadata } from './page-metadata'

const diningImages = [
  { src: '/images/food/mallorca-orchard-dining.jpg', alt: 'Private outdoor dining in Mallorca', featured: true },
  { src: '/images/food/mallorca-restaurant-interior.jpg', alt: 'Mallorca restaurant interior' },
  { src: '/images/food/mallorca-fine-dining-service.jpg', alt: 'Fine dining tableside service Mallorca' },
  { src: '/images/food/mallorca-red-mullet.jpg', alt: 'Red mullet dish Mallorca' },
  { src: '/images/food/mallorca-paella.jpg', alt: 'Mallorca paella' },
]

const hotels = {
  de: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Lena by Dani Garcia; Matsuhisa eroeffnet im September 2026.' },
    { name: 'Four Seasons Resort Mallorca at Formentor', note: 'Formentor. Mel und Llum i Sal.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular, mediterrane Kueche mit Feuer und Grill.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA mit Blick aufs Meer.' },
    { name: 'La Residencia, A Belmond Hotel', note: 'Deia. El Olivo und Restaurante Miro.' },
  ],
  es: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Lena by Dani Garcia; Matsuhisa abre en septiembre de 2026.' },
    { name: 'Four Seasons Resort Mallorca at Formentor', note: 'Formentor. Mel y Llum i Sal.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular, cocina mediterranea con fuego.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA y su entorno frente al mar.' },
    { name: 'La Residencia, A Belmond Hotel', note: 'Deia. El Olivo y Restaurante Miro.' },
  ],
  fr: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Lena by Dani Garcia; Matsuhisa ouvre en septembre 2026.' },
    { name: 'Four Seasons Resort Mallorca at Formentor', note: 'Formentor. Mel et Llum i Sal.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular, cuisine mediterraneenne autour du feu.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA et son cadre face a la mer.' },
    { name: 'La Residencia, A Belmond Hotel', note: 'Deia. El Olivo et Restaurante Miro.' },
  ],
  nl: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Lena by Dani Garcia; Matsuhisa opent in september 2026.' },
    { name: 'Four Seasons Resort Mallorca at Formentor', note: 'Formentor. Mel en Llum i Sal.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular, mediterrane keuken rond vuur.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA met uitzicht op zee.' },
    { name: 'La Residencia, A Belmond Hotel', note: 'Deia. El Olivo en Restaurante Miro.' },
  ],
  sv: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Lena by Dani Garcia; Matsuhisa oppnar i september 2026.' },
    { name: 'Four Seasons Resort Mallorca at Formentor', note: 'Formentor. Mel och Llum i Sal.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular, medelhavsmat runt eld.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA med lage mot havet.' },
    { name: 'La Residencia, A Belmond Hotel', note: 'Deia. El Olivo och Restaurante Miro.' },
  ],
  zh: [
    { name: 'Mandarin Oriental Punta Negra', note: '卡尔维亚。Lena by Dani Garcia；Matsuhisa 将于 2026 年 9 月开业。' },
    { name: 'Four Seasons Resort Mallorca at Formentor', note: 'Formentor。Mel 和 Llum i Sal。' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla。Singular，火烹地中海风格。' },
    { name: 'Aethos Mallorca', note: 'Peguera。ONDA，面向大海的餐饮环境。' },
    { name: 'La Residencia, A Belmond Hotel', note: 'Deia。El Olivo 和 Restaurante Miro。' },
  ],
}

const content = {
  de: {
    metadata: { title: 'Signature Day Mallorca | Privater Golf-, Recovery- und Dinner-Tag', description: 'Ein privat arrangierter Golftag auf Mallorca mit 18 Loechern mit Andy, einer Recovery- und Sports-Performance-Session mit John Brazier, Transfers und koordiniertem Abend.' },
    breadcrumbHome: 'Startseite', heroImageAlt: 'Andy Griffiths auf einem Golfplatz auf Mallorca im Abendlicht', heroEyebrow: 'Das komplette Erlebnis, Mallorca', heroTitle: 'Ein privater Golftag\nrund um Runde, Koerper und Abend.', heroBody: '18 Loecher mit mir, eine Session nach der Runde mit John Brazier, private Transfers und ein Abend, der fuer Ihre Gruppe arrangiert wird. Eine Person koordiniert den ganzen Tag ab dem ersten Gespraech.', price: 'Preis nach Umfang des Tages', primaryCta: 'Anfragen', secondaryCta: 'Den Tag ansehen', coursesCta: 'Mallorcas Golfplaetze entdecken', whatsappLabel: 'WhatsApp schreiben', whatsappHref: 'https://wa.me/34624466702?text=Hi%20Andy%2C%20ich%20interessiere%20mich%20fuer%20den%20Signature%20Day.',
    included: ['Platz- und Tagesplanung', 'Private Startzeit', '18 Loecher mit Andy', 'Session mit John Brazier', 'Verbundenes Debrief und Prioritaeten', 'Private Transfers', 'Abendkoordination'],
    dayStages: [
      { time: 'Vor dem Tag', title: 'Planen und bestaetigen', body: 'Ich waehle den Platz mit Ihnen aus, organisiere Startzeit und Transfers und koordiniere den Abend. Sie erhalten ein klares Angebot, bevor etwas gebucht wird.' },
      { time: 'Die Runde', title: '18 Loecher zusammen', body: 'Ich spiele die volle Runde mit Ihnen und beobachte Entscheidungen, Muster und Bewegungen, die nur unter echten Spielbedingungen sichtbar werden. Ich mache waehrenddessen Notizen.' },
      { time: 'Nach der Runde', title: 'Session mit John Brazier', body: 'John arbeitet in complementary and alternative medicine, Recovery und Sports Performance. Er nutzt die Beobachtungen aus der Runde, um die koerperlichen Muster dahinter zu betrachten.' },
      { time: 'Das Debrief', title: 'Ein verbundener Plan', body: 'Wir bringen Golf- und Koerperbeobachtungen zusammen. Sie gehen mit Klarheit darueber, was passiert ist, was dazu beitragen kann und woran Sie zuerst arbeiten sollten.' },
      { time: 'Der Abend', title: 'Ein passend arrangierter Abschluss', body: 'Der Tag endet mit Dinner in einem empfohlenen Hotel oder Restaurant oder, wo passend, mit einem Private-Chef-Arrangement. Der Plan wird um Ihre Gruppe und Unterkunft gebaut.' },
    ],
    optionalExtras: [
      { title: 'Caddy', text: 'Ein passender Caddy kann angefragt werden, wenn Platz, Datum und Verfuegbarkeit es erlauben.' },
      { title: 'Videografie und Fotografie', text: 'Professionelle Begleitung kann ergaenzt werden, wenn Sie den Tag dokumentieren moechten.' },
      { title: 'Premium-Schlaegermiete', text: 'Die beste passende Ausruestung am Platz kann vor Ihrer Ankunft organisiert werden.' },
      { title: 'Mehrtaegige Planung', text: 'Der Signature Day kann Teil einer groesseren Mallorca-Reise mit weiteren Plaetzen, Hotels und Inselerlebnissen sein.' },
    ],
    sections: {
      overviewEyebrow: 'Was das ist', overviewTitle: 'Ein kompletter Tag, keine Sammlung von Extras.', overviewBody: 'Ich spiele die vollen 18 Loecher mit Ihnen und beobachte, wie Ihr Spiel unter echten Bedingungen funktioniert. Nach der Runde betrachtet John die Recovery- und Sports-Performance-Seite dessen, was wir gesehen haben. Danach verbinden wir beide Perspektiven zu konkreten Prioritaeten.', overviewBody2: 'Rund um das Golf koordiniere ich Startzeit, private Transfers und einen Abend in einem empfohlenen Hotel oder Restaurant oder mit einem Private Chef, wenn das besser zum Anlass passt.', overviewPrinciple: 'Die schnellsten Verbesserungen entstehen oft auf dem Platz, wo Entscheidungen und Bewegung echt sind. Der Rest des Tages macht diese Beobachtungen nutzbar.', overviewImageAlt: 'Andy Griffiths coacht einen Golfer auf Mallorca', includedTitle: 'Was der Kerntag abdeckt',
      howEyebrow: 'Ablauf', howTitle: 'Fuenf Phasen. Ein verbundenes Erlebnis.', howBody: 'Jede Phase hat einen klaren Zweck, und die Beobachtungen aus der Runde fliessen durch den restlichen Tag.', whyEyebrow: 'Warum es anders ist', whyTitle: 'Runde und Koerper werden gemeinsam betrachtet.', whyBody: 'Waehrend der Runde notiere ich Bewegungen, Entscheidungen und wiederkehrende Muster, die Ihr Scoring beeinflussen. John betrachtet anschliessend die Recovery- und Sports-Performance-Seite dieser Beobachtungen.', whyBody2: 'Der Wert liegt darin, diese Beobachtungen zu verbinden. Sie gehen mit einer klaren Reihenfolge von Prioritaeten, nicht mit getrennten Sessions.', johnBody: 'John arbeitet in complementary and alternative medicine und spezialisiert sich auf Recovery und Sports Performance.', johnLink: 'Mehr ueber Johns Arbeit lesen', whyImageAlt: 'Kundenrunde in Son Gual Mallorca',
      courseEyebrow: 'Der Platz', courseTitle: 'Ausgewaehlt fuer Ihr Spiel und den Anlass.', courseBody: 'Son Gual und Alcanada sind meine bevorzugten Plaetze fuer einen ernsthaften ganzen Tag. Son Gual ist mein Lieblingsplatz auf Mallorca, mit einer besonders starken Schlussstrecke. Alcanada zeigt Robert Trent Jones Jr. von seiner landschaftlich schoensten Seite, mit dem Leuchtturm ueber weite Teile der Runde sichtbar.', courseBody2: 'Der richtige Platz haengt von Ihrer Gruppe, Ihrem Spiel und dem Gefuehl ab, das der Tag haben soll. Ich empfehle ehrlich und erklaere warum.',
      eveningEyebrow: 'Der Abend', eveningTitle: 'Dinner passend zu Ihrer Unterkunft.', eveningBody: 'Der Abend kann in einem empfohlenen Hotel oder Restaurant arrangiert werden oder als Private-Chef-Erlebnis, wenn Unterkunft und Anlass dazu passen. Ich koordiniere den Plan direkt, damit er sich wie der letzte Teil des Tages anfuehlt.', eveningBody2: 'Das sind Empfehlungen, keine formellen Partner. Die finale Wahl haengt von Hotel, Datum und gewuenschtem Erlebnis ab.',
      extrasEyebrow: 'Optionale Extras', extrasTitle: 'Nur ergaenzen, was den Tag besser macht.', extrasBody: 'Diese Elemente koennen ins Angebot aufgenommen werden, wenn sie zu Gruppe, Platz und Datum passen.', pricingEyebrow: 'Preis', pricingTitle: 'Bestaetigt, sobald der Tag Form hat.', pricingBody: 'Jeder Signature Day wird nach dem ersten Gespraech kalkuliert, weil Platz, Gruppengroesse, Transfers, Johns Verfuegbarkeit und Abendplan den Umfang beeinflussen. Die meisten Tage werden um ein Kernerlebnis von etwa 3.000 EUR gebaut.', pricingBody2: 'Ihr Angebot zeigt genau, was enthalten ist, was von Verfuegbarkeit abhaengt und welche Kosten von Drittanbietern entstehen, bevor Sie sich festlegen.', pricingCta: 'Signature Day anfragen',
    },
  },
  es: {
    metadata: { title: 'Signature Day Mallorca | Golf privado, recuperacion y cena', description: 'Un dia de golf privado en Mallorca con 18 hoyos con Andy, una sesion de recuperacion y rendimiento deportivo con John Brazier, traslados y noche coordinada.' },
    breadcrumbHome: 'Inicio', heroImageAlt: 'Andy Griffiths en un campo de golf en Mallorca al atardecer', heroEyebrow: 'La experiencia completa, Mallorca', heroTitle: 'Un dia privado de golf\nalrededor de la vuelta, el cuerpo y la noche.', heroBody: '18 hoyos conmigo, una sesion despues de la vuelta con John Brazier, traslados privados y una noche organizada para su grupo. Una sola persona coordina todo desde la primera conversacion.', price: 'Precio segun el dia', primaryCta: 'Consultar', secondaryCta: 'Explorar el dia', coursesCta: 'Explorar los campos de golf de Mallorca', whatsappLabel: 'Mensaje por WhatsApp', whatsappHref: 'https://wa.me/34624466702?text=Hola%20Andy%2C%20me%20interesa%20el%20Signature%20Day.',
    included: ['Planificacion del campo y del dia', 'Hora de salida privada', '18 hoyos con Andy', 'Sesion con John Brazier', 'Debrief conectado y prioridades', 'Traslados privados', 'Coordinacion de la noche'],
    dayStages: [
      { time: 'Antes del dia', title: 'Planificar y confirmar', body: 'Elijo el campo con usted, organizo la hora de salida y los traslados, y coordino la noche. Recibe una propuesta clara antes de reservar nada.' },
      { time: 'La vuelta', title: '18 hoyos juntos', body: 'Juego toda la vuelta con usted y observo decisiones, patrones y movimiento que solo aparecen en condiciones reales. Tomo notas durante el recorrido.' },
      { time: 'Despues de la vuelta', title: 'Sesion con John Brazier', body: 'John trabaja en medicina complementaria y alternativa, recuperacion y rendimiento deportivo. Usa lo observado en la vuelta para revisar los patrones fisicos que hay detras.' },
      { time: 'El debrief', title: 'Un plan conectado', body: 'Unimos las observaciones de golf y fisicas. Sale sabiendo que paso, que puede estar contribuyendo y que trabajar primero.' },
      { time: 'La noche', title: 'Un final bien organizado', body: 'El dia termina con cena en un hotel o restaurante recomendado, o con chef privado cuando encaje. El plan se construye alrededor de su grupo y donde se aloje.' },
    ],
    optionalExtras: [
      { title: 'Caddy', text: 'Se puede solicitar un caddy adecuado cuando el campo, la fecha y la disponibilidad lo permitan.' },
      { title: 'Video y fotografia', text: 'Se puede anadir cobertura profesional si quiere documentar el dia.' },
      { title: 'Alquiler premium de palos', text: 'El mejor equipo adecuado disponible en el campo puede organizarse antes de su llegada.' },
      { title: 'Planificacion de varios dias', text: 'El Signature Day puede formar parte de un itinerario mas amplio en Mallorca con otros campos, hoteles y experiencias.' },
    ],
    sections: {
      overviewEyebrow: 'Que es', overviewTitle: 'Un dia completo, no una coleccion de extras.', overviewBody: 'Juego los 18 hoyos completos con usted y observo como se comporta su juego en condiciones reales. Despues de la vuelta, John examina la parte de recuperacion y rendimiento fisico de lo que hemos visto. Luego unimos ambas perspectivas en prioridades practicas.', overviewBody2: 'Alrededor del golf, coordino la salida, los traslados privados y una noche en un hotel o restaurante recomendado, o con chef privado si encaja mejor con la ocasion.', overviewPrinciple: 'Las mejoras mas rapidas suelen aparecer en el campo, donde las decisiones y el movimiento son reales. El resto del dia esta pensado para convertir esas observaciones en algo util.', overviewImageAlt: 'Andy Griffiths entrenando a un golfista en Mallorca', includedTitle: 'Lo que cubre el dia central',
      howEyebrow: 'Como funciona', howTitle: 'Cinco fases. Una experiencia conectada.', howBody: 'Cada fase tiene un proposito claro, y las observaciones de la vuelta siguen presentes durante el resto del dia.', whyEyebrow: 'Por que es diferente', whyTitle: 'La vuelta y el cuerpo se consideran juntos.', whyBody: 'Durante la vuelta anoto movimiento, decisiones y patrones repetidos que afectan a su resultado. John despues considera la parte de recuperacion y rendimiento deportivo de esas observaciones.', whyBody2: 'El valor esta en unir esas observaciones. Sale con un orden claro de prioridades, no con sesiones separadas.', johnBody: 'John trabaja en medicina complementaria y alternativa y se especializa en recuperacion y rendimiento deportivo.', johnLink: 'Leer sobre el trabajo de John', whyImageAlt: 'Vuelta de cliente en Son Gual Mallorca',
      courseEyebrow: 'El campo', courseTitle: 'Elegido para su juego y la ocasion.', courseBody: 'Son Gual y Alcanada son mis opciones principales para un dia completo serio. Son Gual es mi campo favorito en Mallorca, con un tramo final especialmente fuerte. Alcanada muestra a Robert Trent Jones Jr. en su version mas escenica, con el faro visible durante gran parte de la vuelta.', courseBody2: 'El campo adecuado depende de su grupo, su juego y como quiere que se sienta el dia. Recomiendo con honestidad y explico por que.', eveningEyebrow: 'La noche', eveningTitle: 'Cena adaptada a donde se aloje.', eveningBody: 'La noche puede organizarse en un hotel o restaurante recomendado, o con chef privado cuando la propiedad y la ocasion lo permitan. Coordino el plan directamente para que se sienta como la parte final del dia.', eveningBody2: 'Son recomendaciones, no socios formales. La eleccion final depende de su hotel, sus fechas y la experiencia que quiera.', extrasEyebrow: 'Extras opcionales', extrasTitle: 'Anadir solo lo que mejora el dia.', extrasBody: 'Estos elementos pueden incluirse en la propuesta cuando encajen con el grupo, el campo y la fecha.', pricingEyebrow: 'Precio', pricingTitle: 'Confirmado cuando el dia tiene forma.', pricingBody: 'Cada Signature Day se cotiza despues de la primera conversacion porque el campo, el tamano del grupo, los traslados, la disponibilidad de John y el plan de noche afectan al alcance. La mayoria de los dias se construyen alrededor de una experiencia central de unos 3.000 EUR.', pricingBody2: 'Su propuesta mostrara exactamente que esta incluido, que queda sujeto a disponibilidad y cualquier coste de terceros antes de comprometerse.', pricingCta: 'Consultar sobre el Signature Day',
    },
  },
  fr: {
    metadata: { title: 'Signature Day Majorque | Golf prive, recuperation et diner', description: 'Une journee de golf privee a Majorque avec 18 trous avec Andy, une session recuperation et performance sportive avec John Brazier, transferts et soiree coordonnee.' },
    breadcrumbHome: 'Accueil', heroImageAlt: 'Andy Griffiths sur un parcours de golf a Majorque au coucher du soleil', heroEyebrow: 'L experience complete, Majorque', heroTitle: 'Une journee de golf privee\nautour du parcours, du corps et du soir.', heroBody: '18 trous avec moi, une session apres la partie avec John Brazier, des transferts prives et une soiree organisee pour votre groupe. Une seule personne coordonne toute la journee des le premier echange.', price: 'Tarif adapte a la journee', primaryCta: 'Demander', secondaryCta: 'Explorer la journee', coursesCta: 'Explorer les parcours de golf de Majorque', whatsappLabel: 'Message WhatsApp', whatsappHref: 'https://wa.me/34624466702?text=Bonjour%20Andy%2C%20je%20suis%20interesse%20par%20le%20Signature%20Day.',
    included: ['Planification du parcours et de la journee', 'Depart prive', '18 trous avec Andy', 'Session avec John Brazier', 'Debrief connecte et priorites', 'Transferts prives', 'Coordination de la soiree'],
    dayStages: [
      { time: 'Avant la journee', title: 'Planifier et confirmer', body: 'Je choisis le parcours avec vous, organise le depart et les transferts, puis coordonne la soiree. Vous recevez une proposition claire avant toute reservation.' },
      { time: 'La partie', title: '18 trous ensemble', body: 'Je joue toute la partie avec vous et observe les decisions, schemas et mouvements qui n apparaissent qu en conditions reelles. Je prends des notes tout au long du parcours.' },
      { time: 'Apres la partie', title: 'Session avec John Brazier', body: 'John travaille en medecine complementaire et alternative, recuperation et performance sportive. Il utilise les observations du parcours pour examiner les schemas physiques en jeu.' },
      { time: 'Le debrief', title: 'Un plan connecte', body: 'Nous reunissons les observations golf et physiques. Vous repartez avec ce qui s est passe, ce qui peut y contribuer et ce qu il faut travailler en premier.' },
      { time: 'La soiree', title: 'Une fin bien organisee', body: 'La journee se termine par un diner dans un hotel ou restaurant recommande, ou avec un chef prive lorsque cela convient. Le plan est construit autour de votre groupe et de votre lieu de sejour.' },
    ],
    optionalExtras: [
      { title: 'Caddie', text: 'Un caddie adapte peut etre demande si le parcours, la date et la disponibilite le permettent.' },
      { title: 'Video et photographie', text: 'Une couverture professionnelle peut etre ajoutee si vous souhaitez documenter la journee.' },
      { title: 'Location de clubs premium', text: 'Le meilleur materiel adapte disponible au parcours peut etre organise avant votre arrivee.' },
      { title: 'Planification multi-jours', text: 'Le Signature Day peut faire partie d un itineraire plus large a Majorque avec d autres parcours, hotels et experiences.' },
    ],
    sections: {
      overviewEyebrow: 'Ce que c est', overviewTitle: 'Une journee complete, pas une collection d options.', overviewBody: 'Je joue les 18 trous avec vous et j observe votre jeu en conditions reelles. Apres la partie, John examine l aspect recuperation et performance physique de ce que nous avons vu. Nous relions ensuite les deux lectures en priorites concretes.', overviewBody2: 'Autour du golf, je coordonne le depart, les transferts prives et une soiree dans un hotel ou restaurant recommande, ou avec un chef prive si cela convient mieux a l occasion.', overviewPrinciple: 'Les progres les plus rapides apparaissent souvent sur le parcours, la ou les decisions et les mouvements sont reels. Le reste de la journee rend ces observations utiles.', overviewImageAlt: 'Andy Griffiths coachant un golfeur a Majorque', includedTitle: 'Ce que couvre la journee de base', howEyebrow: 'Deroule', howTitle: 'Cinq etapes. Une experience connectee.', howBody: 'Chaque etape a un objectif clair, et les observations du parcours traversent le reste de la journee.', whyEyebrow: 'Pourquoi c est different', whyTitle: 'Le parcours et le corps sont regardes ensemble.', whyBody: 'Pendant la partie, je note les mouvements, decisions et schemas recurrents qui influencent votre score. John considere ensuite l aspect recuperation et performance sportive de ces observations.', whyBody2: 'La valeur vient du lien entre ces observations. Vous repartez avec un ordre clair de priorites, pas avec des sessions separees.', johnBody: 'John travaille en medecine complementaire et alternative et se specialise en recuperation et performance sportive.', johnLink: 'Lire le travail de John', whyImageAlt: 'Partie client a Son Gual Mallorca', courseEyebrow: 'Le parcours', courseTitle: 'Choisi pour votre jeu et l occasion.', courseBody: 'Son Gual et Alcanada sont mes choix principaux pour une vraie journee complete. Son Gual est mon parcours prefere a Majorque, avec une fin de parcours particulierement forte. Alcanada montre Robert Trent Jones Jr. dans sa version la plus scenique, avec le phare visible pendant une grande partie du tour.', courseBody2: 'Le bon parcours depend de votre groupe, de votre jeu et du ton que vous voulez donner a la journee. Je recommande franchement et j explique pourquoi.', eveningEyebrow: 'La soiree', eveningTitle: 'Un diner adapte a votre lieu de sejour.', eveningBody: 'La soiree peut etre arrangee dans un hotel ou restaurant recommande, ou autour d un chef prive lorsque la propriete et l occasion s y pretent. Je coordonne le plan directement pour qu il ressemble a la derniere partie de la journee.', eveningBody2: 'Ce sont des recommandations, pas des partenaires formels. Le choix final depend de votre hotel, de vos dates et de l experience souhaitee.', extrasEyebrow: 'Options', extrasTitle: 'Ajouter seulement ce qui ameliore la journee.', extrasBody: 'Ces elements peuvent etre inclus dans la proposition lorsqu ils conviennent au groupe, au parcours et a la date.', pricingEyebrow: 'Tarif', pricingTitle: 'Confirme lorsque la journee a pris forme.', pricingBody: 'Chaque Signature Day est chiffre apres le premier echange, car le parcours, la taille du groupe, les transferts, la disponibilite de John et la soiree modifient le perimetre. La plupart des journees sont construites autour d une experience de base d environ 3 000 EUR.', pricingBody2: 'Votre proposition indiquera exactement ce qui est inclus, ce qui depend de la disponibilite et les eventuels couts tiers avant tout engagement.', pricingCta: 'Demander le Signature Day',
    },
  },
  nl: {
    metadata: { title: 'Signature Day Mallorca | Prive golf, herstel en diner', description: 'Een prive geregelde golfdag op Mallorca met 18 holes met Andy, een herstel- en sportprestatiesessie met John Brazier, transfers en een georganiseerde avond.' },
    breadcrumbHome: 'Home', heroImageAlt: 'Andy Griffiths op een golfbaan in Mallorca bij avondlicht', heroEyebrow: 'De complete ervaring, Mallorca', heroTitle: 'Een prive golfdag\nrond de ronde, het lichaam en de avond.', heroBody: '18 holes met mij, een sessie na de ronde met John Brazier, prive transfers en een avond geregeld voor uw groep. Een persoon coordineert de hele dag vanaf het eerste gesprek.', price: 'Prijs afgestemd op de dag', primaryCta: 'Aanvragen', secondaryCta: 'Bekijk de dag', coursesCta: 'Ontdek de golfbanen van Mallorca', whatsappLabel: 'WhatsApp sturen', whatsappHref: 'https://wa.me/34624466702?text=Hi%20Andy%2C%20ik%20ben%20geinteresseerd%20in%20de%20Signature%20Day.',
    included: ['Baan- en dagplanning', 'Prive starttijd', '18 holes met Andy', 'Sessie met John Brazier', 'Verbonden debrief en prioriteiten', 'Prive transfers', 'Avondcoordinatie'],
    dayStages: [
      { time: 'Voor de dag', title: 'Plannen en bevestigen', body: 'Ik kies de baan met u, regel de starttijd en transfers en coordineer de avond. U ontvangt een helder voorstel voordat iets wordt geboekt.' },
      { time: 'De ronde', title: '18 holes samen', body: 'Ik speel de volledige ronde met u en let op beslissingen, patronen en bewegingen die alleen in echte speelomstandigheden zichtbaar worden. Ik maak onderweg notities.' },
      { time: 'Na de ronde', title: 'Sessie met John Brazier', body: 'John werkt in complementary and alternative medicine, herstel en sportprestatie. Hij gebruikt de observaties uit de ronde om de fysieke patronen erachter te bekijken.' },
      { time: 'De debrief', title: 'Een verbonden plan', body: 'We brengen de golf- en fysieke observaties samen. U vertrekt met duidelijkheid over wat er gebeurde, wat eraan kan bijdragen en waar u eerst aan moet werken.' },
      { time: 'De avond', title: 'Een goed geregeld einde', body: 'De dag eindigt met diner in een aanbevolen hotel of restaurant, of met een private-chef arrangement waar dat past. Het plan wordt gebouwd rond uw groep en verblijf.' },
    ],
    optionalExtras: [
      { title: 'Caddy', text: 'Een passende caddy kan worden aangevraagd wanneer baan, datum en beschikbaarheid dat toelaten.' },
      { title: 'Video en fotografie', text: 'Professionele vastlegging kan worden toegevoegd als u de dag wilt documenteren.' },
      { title: 'Premium clubhuur', text: 'De best passende uitrusting op de baan kan voor aankomst worden geregeld.' },
      { title: 'Meerdaagse planning', text: 'De Signature Day kan onderdeel zijn van een bredere Mallorca-route met andere banen, hotels en ervaringen.' },
    ],
    sections: {
      overviewEyebrow: 'Wat dit is', overviewTitle: 'Een complete dag, geen verzameling extra s.', overviewBody: 'Ik speel de volledige 18 holes met u en kijk hoe uw spel zich gedraagt onder echte omstandigheden. Na de ronde bekijkt John de herstel- en sportprestatiekant van wat we zagen. Daarna brengen we beide perspectieven samen in praktische prioriteiten.', overviewBody2: 'Rondom het golf coordineer ik de starttijd, prive transfers en een avond in een aanbevolen hotel of restaurant, of met een private chef wanneer dat beter bij de gelegenheid past.', overviewPrinciple: 'De snelste verbeteringen ontstaan vaak op de baan, waar beslissingen en beweging echt zijn. De rest van de dag is ontworpen om die observaties bruikbaar te maken.', overviewImageAlt: 'Andy Griffiths coacht een golfer in Mallorca', includedTitle: 'Wat de kerndag omvat', howEyebrow: 'Hoe de dag loopt', howTitle: 'Vijf fases. Een verbonden ervaring.', howBody: 'Elke fase heeft een duidelijk doel, en de observaties uit de ronde lopen door de rest van de dag.', whyEyebrow: 'Waarom dit anders is', whyTitle: 'De ronde en het lichaam worden samen bekeken.', whyBody: 'Tijdens de ronde noteer ik beweging, beslissingen en terugkerende patronen die uw score beinvloeden. John bekijkt daarna de herstel- en sportprestatiekant van die observaties.', whyBody2: 'De waarde zit in het samenbrengen van die observaties. U vertrekt met een duidelijke volgorde van prioriteiten, niet met losse sessies.', johnBody: 'John werkt in complementary and alternative medicine en specialiseert zich in herstel en sportprestatie.', johnLink: 'Lees over Johns werk', whyImageAlt: 'Clientronde op Son Gual Mallorca', courseEyebrow: 'De baan', courseTitle: 'Gekozen voor uw spel en de gelegenheid.', courseBody: 'Son Gual en Alcanada zijn mijn eerste keuzes voor een serieuze volledige dag. Son Gual is mijn favoriete baan op Mallorca, met een bijzonder sterke slotfase. Alcanada laat Robert Trent Jones Jr. op zijn meest scenische manier zien, met de vuurtoren zichtbaar tijdens veel van de ronde.', courseBody2: 'De juiste baan hangt af van uw groep, uw spel en hoe de dag moet aanvoelen. Ik adviseer eerlijk en leg uit waarom.', eveningEyebrow: 'De avond', eveningTitle: 'Diner passend bij waar u verblijft.', eveningBody: 'De avond kan worden geregeld in een aanbevolen hotel of restaurant, of rond een private chef wanneer de accommodatie en gelegenheid dat passen. Ik coordineer het plan direct zodat het voelt als het laatste deel van de dag.', eveningBody2: 'Dit zijn aanbevelingen, geen formele partners. De uiteindelijke keuze hangt af van uw hotel, data en gewenste ervaring.', extrasEyebrow: 'Optionele extra s', extrasTitle: 'Alleen toevoegen wat de dag beter maakt.', extrasBody: 'Deze onderdelen kunnen in het voorstel worden opgenomen wanneer ze passen bij groep, baan en datum.', pricingEyebrow: 'Prijs', pricingTitle: 'Bevestigd zodra de dag vorm heeft.', pricingBody: 'Elke Signature Day wordt geprijsd na het eerste gesprek, omdat baan, groepsgrootte, transfers, Johns beschikbaarheid en avondplan de omvang bepalen. De meeste dagen worden gebouwd rond een kernervaring van ongeveer 3.000 EUR.', pricingBody2: 'Uw voorstel toont precies wat is inbegrepen, wat afhankelijk is van beschikbaarheid en eventuele kosten van derden voordat u zich vastlegt.', pricingCta: 'Vraag naar de Signature Day',
    },
  },
  sv: {
    metadata: { title: 'Signature Day Mallorca | Privat golf, aterhamtning och middag', description: 'En privat arrangerad golfdag pa Mallorca med 18 hal med Andy, en aterhamtnings- och sportprestationssession med John Brazier, transfers och koordinerad kvall.' },
    breadcrumbHome: 'Hem', heroImageAlt: 'Andy Griffiths pa en golfbana pa Mallorca i kvallsljus', heroEyebrow: 'Den kompletta upplevelsen, Mallorca', heroTitle: 'En privat golfdag\nrunt rundan, kroppen och kvallen.', heroBody: '18 hal med mig, en session efter rundan med John Brazier, privata transfers och en kvall arrangerad for din grupp. En person koordinerar hela dagen fran forsta samtalet.', price: 'Pris anpassat efter dagen', primaryCta: 'Forfragan', secondaryCta: 'Utforska dagen', coursesCta: 'Utforska Mallorcas golfbanor', whatsappLabel: 'Meddela pa WhatsApp', whatsappHref: 'https://wa.me/34624466702?text=Hi%20Andy%2C%20jag%20ar%20intresserad%20av%20Signature%20Day.',
    included: ['Bana och dagsplanering', 'Privat starttid', '18 hal med Andy', 'Session med John Brazier', 'Sammanhangande debrief och prioriteringar', 'Privata transfers', 'Kvallskoordinering'],
    dayStages: [
      { time: 'Fore dagen', title: 'Planera och bekrafta', body: 'Jag valjer banan med dig, ordnar starttid och transfers och koordinerar kvallen. Du far ett tydligt forslag innan nagot bokas.' },
      { time: 'Rundan', title: '18 hal tillsammans', body: 'Jag spelar hela rundan med dig och ser beslut, monster och rorelse som bara syns under riktiga spelforhallanden. Jag antecknar under rundan.' },
      { time: 'Efter rundan', title: 'Session med John Brazier', body: 'John arbetar med complementary and alternative medicine, aterhamtning och sportprestation. Han anvander observationerna fran rundan for att titta pa de fysiska monster som ligger bakom.' },
      { time: 'Debriefen', title: 'En sammanhangande plan', body: 'Vi for ihop golfobservationerna och de fysiska observationerna. Du lamnar med klarhet om vad som hande, vad som kan bidra och vad du ska arbeta med forst.' },
      { time: 'Kvallen', title: 'Ett valordnat avslut', body: 'Dagen avslutas med middag pa ett rekommenderat hotell eller restaurang, eller med privat kock dar det passar. Planen byggs runt din grupp och var ni bor.' },
    ],
    optionalExtras: [
      { title: 'Caddy', text: 'En lamplig caddy kan efterfragas nar bana, datum och tillganglighet tillater.' },
      { title: 'Video och foto', text: 'Professionell dokumentation kan laggas till om du vill ha dagen bevarad.' },
      { title: 'Premiumklubbor', text: 'Den basta lampliga utrustningen pa banan kan ordnas innan du kommer.' },
      { title: 'Flerdagarsplanering', text: 'Signature Day kan inga i en bredare Mallorca-resplan med fler banor, hotell och upplevelser.' },
    ],
    sections: {
      overviewEyebrow: 'Vad det ar', overviewTitle: 'En komplett dag, inte en samling tillagg.', overviewBody: 'Jag spelar hela 18 hal med dig och ser hur ditt spel beter sig under riktiga forhallanden. Efter rundan tittar John pa aterhamtnings- och sportprestationsdelen av det vi observerade. Sedan for vi ihop bada perspektiven till praktiska prioriteringar.', overviewBody2: 'Runt golfen koordinerar jag starttid, privata transfers och en kvall pa ett rekommenderat hotell eller restaurang, eller med privat kock nar det passar tillfallet battre.', overviewPrinciple: 'De snabbaste forbattrningarna sker ofta pa banan, dar beslut och rorelse ar verkliga. Resten av dagen gor observationerna anvandbara.', overviewImageAlt: 'Andy Griffiths coachar en golfare pa Mallorca', includedTitle: 'Vad karndagen omfattar', howEyebrow: 'Hur dagen gar', howTitle: 'Fem steg. En sammanhangande upplevelse.', howBody: 'Varje steg har ett tydligt syfte, och observationerna fran rundan foljer med genom resten av dagen.', whyEyebrow: 'Varfor det ar annorlunda', whyTitle: 'Rundan och kroppen ses tillsammans.', whyBody: 'Under rundan antecknar jag rorelse, beslut och aterkommande monster som paverkar din score. John tittar sedan pa aterhamtnings- och sportprestationsdelen av observationerna.', whyBody2: 'Vardet ligger i att knyta ihop observationerna. Du gar darifran med en tydlig prioriteringsordning, inte separata sessioner.', johnBody: 'John arbetar med complementary and alternative medicine och specialiserar sig pa aterhamtning och sportprestation.', johnLink: 'Las om Johns arbete', whyImageAlt: 'Kundrunda pa Son Gual Mallorca', courseEyebrow: 'Banan', courseTitle: 'Vald for ditt spel och tillfallet.', courseBody: 'Son Gual och Alcanada ar mina forstahandsval for en serios heldag. Son Gual ar min favoritbana pa Mallorca, med en sarskilt stark avslutning. Alcanada visar Robert Trent Jones Jr. fran hans mest sceniska sida, med fyren synlig under stora delar av rundan.', courseBody2: 'Ratt bana beror pa din grupp, ditt spel och hur du vill att dagen ska kannas. Jag rekommenderar arligt och forklarar varfor.', eveningEyebrow: 'Kvallen', eveningTitle: 'Middag anpassad till dar du bor.', eveningBody: 'Kvallen kan arrangeras pa ett rekommenderat hotell eller restaurang, eller med privat kock nar boendet och tillfallet passar. Jag koordinerar planen direkt sa att den kanns som den sista delen av dagen.', eveningBody2: 'Detta ar rekommendationer, inte formella partners. Det slutliga valet beror pa hotell, datum och vilken upplevelse ni vill ha.', extrasEyebrow: 'Valfria tillagg', extrasTitle: 'Lagg bara till det som gor dagen battre.', extrasBody: 'Dessa delar kan inga i forslaget nar de passar gruppen, banan och datumet.', pricingEyebrow: 'Pris', pricingTitle: 'Bekraftas nar dagen har form.', pricingBody: 'Varje Signature Day prissatts efter forsta samtalet eftersom bana, gruppstorlek, transfers, Johns tillganglighet och kvallsplan paverkar omfattningen. De flesta dagar byggs runt en karnupplevelse pa cirka 3 000 EUR.', pricingBody2: 'Ditt forslag visar exakt vad som ingar, vad som ar beroende av tillganglighet och eventuella tredjepartskostnader innan du bestammer dig.', pricingCta: 'Fraga om Signature Day',
    },
  },
  zh: {
    metadata: { title: 'Signature Day Mallorca | 私人高尔夫、恢复与晚餐', description: '在马略卡私人安排的一天高尔夫体验：与 Andy 同打 18 洞，John Brazier 进行恢复与运动表现环节，私人接送，并安排晚间体验。' },
    breadcrumbHome: '首页', heroImageAlt: 'Andy Griffiths 在马略卡高尔夫球场的黄昏', heroEyebrow: '完整体验，马略卡', heroTitle: '私人高尔夫日\n围绕球局、身体和夜晚安排。', heroBody: '与我同打 18 洞，球后与 John Brazier 进行一节恢复与运动表现环节，私人接送，并为您的同行人员安排晚间体验。从第一次沟通开始，由一个人协调整天。', price: '按当天范围报价', primaryCta: '咨询', secondaryCta: '了解这一天', coursesCta: '探索马略卡高尔夫球场', whatsappLabel: 'WhatsApp 联系', whatsappHref: 'https://wa.me/34624466702?text=Hi%20Andy%2C%20I%27m%20interested%20in%20the%20Signature%20Day.',
    included: ['球场与当天规划', '私人开球时段', '与 Andy 同打 18 洞', 'John Brazier 环节', '连贯复盘与优先事项', '私人接送', '晚间安排协调'],
    dayStages: [
      { time: '活动前', title: '规划并确认', body: '我会与您一起选择球场，安排开球时间和接送，并协调晚间计划。任何预订前，您都会收到清楚的方案。' },
      { time: '球局', title: '一起打 18 洞', body: '我会全程与您同组，观察真实球局中才会出现的决策、模式和动作，并在过程中记录。' },
      { time: '球后', title: '与 John Brazier 的环节', body: 'John 从事 complementary and alternative medicine、恢复和运动表现相关工作。他会结合球局观察，查看背后的身体模式。' },
      { time: '复盘', title: '一份连贯计划', body: '我们把高尔夫观察和身体观察结合起来。您离开时会知道发生了什么、可能的原因，以及首先该处理什么。' },
      { time: '夜晚', title: '安排妥当的收尾', body: '当天以推荐酒店或餐厅的晚餐结束，合适时也可安排私人厨师。计划会围绕您的同行人员和住宿地点来设计。' },
    ],
    optionalExtras: [
      { title: '球童', text: '如果球场、日期和可用性允许，可以申请合适的球童。' },
      { title: '视频和摄影', text: '如果您希望记录这一天，可以加入专业拍摄。' },
      { title: '高级球杆租赁', text: '可在您抵达前安排球场可提供的最合适装备。' },
      { title: '多日行程规划', text: 'Signature Day 也可以成为更完整马略卡行程的一部分，包括其他球场、酒店和岛上体验。' },
    ],
    sections: {
      overviewEyebrow: '这是什么', overviewTitle: '完整的一天，而不是一堆附加项目。', overviewBody: '我会与您打完整 18 洞，并观察您的球技在真实条件下如何表现。球局结束后，John 会从恢复和运动表现角度分析我们看到的内容。随后我们把两种视角合成实用的优先事项。', overviewBody2: '在高尔夫之外，我会协调开球时间、私人接送，以及推荐酒店或餐厅的晚间安排；如果场合更适合，也可以安排私人厨师。', overviewPrinciple: '最快的进步往往发生在球场上，因为那里的决策和动作都是真实的。这一天的其余部分，就是为了让这些观察真正有用。', overviewImageAlt: 'Andy Griffiths 在马略卡指导高尔夫球手', includedTitle: '核心当天包含', howEyebrow: '当天流程', howTitle: '五个阶段。一次连贯体验。', howBody: '每个阶段都有清楚目的，球局中的观察会贯穿之后的安排。', whyEyebrow: '为什么不同', whyTitle: '把球局和身体放在一起看。', whyBody: '球局中，我会记录影响成绩的动作、决策和重复模式。随后 John 会从恢复和运动表现角度查看这些观察，包括可能在球场表现背后的身体限制或代偿。', whyBody2: '价值在于把这些观察连接起来。您带走的是清晰的优先顺序，而不是互不相关的几个环节。', johnBody: 'John 从事 complementary and alternative medicine，并专注于恢复和运动表现。', johnLink: '了解 John 的工作', whyImageAlt: '客户在 Son Gual Mallorca 打球', courseEyebrow: '球场', courseTitle: '为您的球技和场合选择。', courseBody: 'Son Gual 和 Alcanada 是我为完整认真一天优先考虑的球场。Son Gual 是我在马略卡最喜欢的球场，收官段尤其出色。Alcanada 是 Robert Trent Jones Jr. 最有画面感的作品之一，灯塔在大部分球局中都可见。', courseBody2: '真正合适的球场取决于您的同行人员、球技和您希望这一天呈现的感觉。我会诚实推荐，并解释原因。', eveningEyebrow: '夜晚', eveningTitle: '晚餐根据您的住宿来安排。', eveningBody: '晚间可以安排在推荐酒店或餐厅，也可以在住宿和场合适合时安排私人厨师。我会直接协调，让它感觉像当天的最后一部分，而不是另一个单独预订。', eveningBody2: '这些是推荐地点，不是正式合作伙伴。最终选择取决于您的酒店、日期和想要的体验。', extrasEyebrow: '可选附加', extrasTitle: '只加入真正改善当天体验的内容。', extrasBody: '如果适合同行人员、球场和日期，这些项目可以加入方案。', pricingEyebrow: '价格', pricingTitle: '等当天范围清楚后确认。', pricingBody: '每个 Signature Day 都会在第一次沟通后报价，因为球场、人数、接送、John 的可用性和晚间计划都会影响范围。多数当天体验会围绕约 3,000 EUR 的核心方案来搭建。', pricingBody2: '在您确认之前，方案会清楚列出包含内容、取决于可用性的项目，以及任何第三方费用。', pricingCta: '咨询 Signature Day',
    },
  },
}

export function getSignatureDayContent(locale = 'zh') {
  const page = content[locale] || content.zh
  const resolvedLocale = content[locale] ? locale : 'zh'
  return {
    ...page,
    hotelPartners: hotels[resolvedLocale] || hotels.zh,
    diningImages,
  }
}

export function buildSignatureDayMetadata(locale = 'zh') {
  const page = getSignatureDayContent(locale)
  return buildPageMetadata(
    `/${locale}/signature-day`,
    locale,
    {
      ...page.metadata,
      robots: { index: true, follow: true },
    },
  )
}
