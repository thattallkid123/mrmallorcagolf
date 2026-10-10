// Locale overlay for the 'best-golf-practice-facilities-mallorca' guide article.
// Blocks are positional: one entry per English block. English is master.
const img = (alt, caption) => (caption ? { alt, caption } : { alt })
const p = (text) => ({ text })
const t = (headers, rows) => ({ headers, rows })
const l = (items) => ({ items })
const c = (text, linkLabel) => ({ text, linkLabel })

export const PRACTICE_FACILITIES_LOCALIZED = {
  de: {
    metadata: {
      title: 'Die besten Driving Ranges auf Mallorca',
      description:
        'TrackMan-, Toptracer- und Gras-Ranges auf Mallorca im Vergleich: wo Sie Daten messen, wo Sie sich aufwärmen und wo Sie das kurze Spiel trainieren.',
      imageAlt: 'T Golf Calvià auf Mallorca',
    },
    meta: {
      badge: 'Training',
      readTime: '4 Min. Lesezeit',
      updated: 'Oktober 2026',
      title: 'Die besten Übungsanlagen für Golf auf Mallorca',
      intro:
        'Vier Clubs auf Mallorca haben Ballverfolgung in den Range-Boxen, und mehrere weitere lassen Sie vom Gras schlagen. Welche Anlage die richtige ist, hängt von der Aufgabe ab: Ihre Zahlen messen, sich für eine Runde aufwärmen oder das kurze Spiel trainieren.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Ehrliche Bewertung 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Ehrliche Bewertung 2026' },
        { slug: 'son-gual-review', title: 'Son Gual Golf: ehrliche Bewertung 2026' },
        { slug: 'on-course-coaching-mallorca', title: 'Coaching auf dem Platz auf Mallorca' },
      ],
    },
    blocks: [
      img('Puttinggrün in Son Quint mit einer orangefarbenen Son-Quint-Fahne im Vordergrund', 'Das Puttinggrün in Son Quint.'),
      p('Eine Range-Einheit vor einer Runde auf Mallorca hat eine von drei Aufgaben. Messen sagt Ihnen Ihre Carry-Distanzen, die Zahl, die auf Plätzen mit Wasser und großen Höhenunterschieden wie T Golf Calvià und Andratx zählt. Aufwärmen bringt den Körper an den ersten Abschlag. Beim kurzen Spiel holen Sie auf einer Reise die meisten Schläge zurück. Jede der folgenden Anlagen ist bei einigen dieser Aufgaben gut und bei anderen schwach.'),
      p('Die kurze Antwort'),
      t(
        ['Sie wollen', 'Gehen Sie zu', 'Was es dort gibt'],
        [
          ['Zahlen zu jedem Ball, öffentlich zugänglich', 'Golf de Andratx oder Pula', 'TrackMan-Range'],
          ['Ballverfolgung vor einer wichtigen Runde', 'Son Muntaner oder Alcanada', 'Toptracer-Range'],
          ['Training des kurzen Spiels', 'T Golf Calvià oder Golf de Andratx', 'Zielgrüns, Chipping-Bereiche und Bunker'],
          ['Vom Gras schlagen', 'T Golf Calvià, Maioris, Son Antem oder Son Termes', 'Grasabschläge'],
          ['Die größte Übungsanlage', 'Son Antem', 'Runde Range für über 200 Spieler'],
          ['Training in der Nähe von Palma', 'T Golf Palma', '42 Boxen, 14 überdacht, 250 m lang'],
        ]
      ),
      p('T Golf Calvià: die beste Gras-Übungsanlage'),
      p('T Golf Calvià hat 40 Stationen auf einer Range ganz aus Gras und sieben Zielgrüns in unterschiedlichen Entfernungen, geschützt von zehn Bunkern. Rundherum liegen zwei Puttinggrüns, zwei Chipping-Grüns und zwei Pitching-Bereiche mit Bunkern. Gras ist auf Mallorcas Clubs keine Selbstverständlichkeit, und die Zielgrüns geben jedem Ball eine echte Zahl zum Anpeilen.'),
      p("Der Platz ist der Grund, die Anlage zu nutzen. Fünfzehn Seen erzwingen Carries vom Abschlag, und mehrere Anspiele verdecken den unteren Teil der Fahne. Schlagen Sie also genug Bälle, um Ihre Carries vor dem ersten Abschlag zu kennen. Mehr dazu in der <a href='/guides/t-golf-calvia-review'>Bewertung von T Golf Calvià</a>."),
      p('Golf de Andratx: TrackMan über Camp de Mar'),
      p('Andratx hat eine öffentliche TrackMan Range mit 21 Abschlägen, sieben davon überdacht, dazu einen Bereich für das kurze Spiel und drei Übungsbunker. Sie liegt gegenüber dem Clubhaus auf der anderen Straßenseite, was das Aufwärmen etwas ungewöhnlich macht. Als ich dort spielte, war der Kurzspielbereich in hervorragendem Zustand für jeden Schlag, den man üben wollte. Die Range liegt an einem steilen Hang und erfüllt ihren Zweck, Sie locker zu machen.'),
      p("Die Zahlen zählen hier mehr als an den meisten Orten. Die Par 3 spielen sich wegen der Höhenunterschiede ganz anders als auf der Karte. Bäche queren die Fairways, also ist die Kenntnis Ihres Carry der Unterschied zwischen einem Par und einem verlorenen Ball. Planen Sie Zeit ein, um über die Straße hin und zurück zu gehen. Mehr dazu in der <a href='/guides/golf-andratx-review'>Bewertung von Golf de Andratx</a>."),
      p('Pula: die TrackMan-Range im Osten'),
      p("Ich habe die Übungsanlagen von Pula besucht. Es gibt eine öffentliche TrackMan Range auf zwei Ebenen, zwei Puttinggrüns, ein Pitching-Grün und einen Kurzspielbereich mit Bunkern. Sie liegt etwa 70 Minuten von Palma entfernt und ist daher vor allem sinnvoll, wenn Sie an der Ostküste wohnen."),
      img('Pula Golf auf Mallorca'),
      p('Son Gual: Rangebälle zum Greenfee'),
      p('Son Gual hat keine öffentliche Range mit Ballverfolgung. Zahlende Greenfee-Gäste können die Range mit Token zu 4 € für 24 Bälle nutzen, die Range-Gebühr für Besucher beträgt 20 € für 72 Bälle.'),
      p("Nutzen Sie sie vor dem Spiel. Die Grüns in Son Gual sind schnell und erhöht, zehn Minuten an Annäherungsdistanzen machen sich also direkt auf der Scorekarte bemerkbar. Mehr dazu in der <a href='/guides/son-gual-review'>Bewertung von Son Gual</a>."),
      p('Son Muntaner und Alcanada: Toptracer vor einer großen Runde'),
      p('Son Muntaner hat eine Toptracer-Range, einen Chipping-Bereich und ein Puttinggrün, und die Übungsanlagen waren auf dem Niveau des Platzes, als ich dort spielte. Es ist auch die Range für Son Vida, das nur ein Netz und ein Puttinggrün hat und zwei Minuten entfernt liegt.'),
      p('Alcanada hat Toptracer, zehn überdachte und zehn Außenmatten, in der Saison einen Naturgras-Bereich und einen Bereich für das kurze Spiel. Es liegt etwa 50 Minuten von Palma entfernt, kommen Sie also früh an und nutzen Sie es vor einer Runde auf Grüns, die nur wenige leichte Putts übrig lassen.'),
      img('Rot-weiße Son-Vida-1964-Fahne auf dem Übungs-Puttinggrün, dahinter das Übungsnetz', 'Das Übungs-Puttinggrün mit dem Netz dahinter.'),
      p('T Golf Palma: die größte Range bei Palma'),
      p("T Golf Palma hat 42 Boxen, 14 davon überdacht, auf einer 250 Meter langen Range, mit Puttinggrüns und einem großen Kurzspielbereich. Wenn Sie in der Stadt wohnen und eine Range-Einheit ohne lange Fahrt wollen, schaue ich hier zuerst nach. Mehr dazu in der <a href='/guides/t-golf-palma-review'>Bewertung von T Golf Palma</a>."),
      p('Son Antem: die Akademie'),
      p('Ich habe die Akademie von Son Antem besucht. Die runde Driving Range ist für mehr als 200 Spieler gebaut, mit Gras- und Kunstabschlägen, dazu gibt es ein Annäherungsgrün mit Bunkern und ein Puttinggrün von etwa 1.000 m². Es ist eine der größten Golfakademien Europas. Wenn Ihre Gruppe vor einer Runde gemeinsam trainieren möchte, ist hier der Platz dafür.'),
      p('Maioris und Son Termes: Gras nahe Palma'),
      p('Maioris hat eine Range mit Gras- und Mattenabschlägen, ein großes Puttinggrün, einen Chipping- und Pitching-Bereich ganz aus Gras mit Hängen und einen Bunker. Son Termes hat Gras- und Mattenbereiche zum Schlagen, ein Chipping-Grün und ein Puttinggrün. Keine von beiden hat Ballverfolgung, sie eignen sich also eher zum Aufwärmen oder für das kurze Spiel als für eine Messsitzung.'),
      p('Wie ich sie auf einer Reise nutzen würde'),
      l([
        { label: 'Am Anreisetag:', text: 'eine Stunde in T Golf Palma oder Son Muntaner, zum Abschluss auf dem Puttinggrün.' },
        { label: 'Vor einem Platz mit Wasser:', text: 'eine Stunde auf dem Gras in T Golf Calvià, damit Sie Ihre Carries kennen, bevor die Seen sie Ihnen zeigen.' },
        { label: 'Wenn Sie im Osten wohnen:', text: 'Pula, für TrackMan auf beiden Ebenen.' },
        { label: 'Für Zahlen:', text: 'TrackMan in Andratx vor der Runde dort oder Toptracer in Son Muntaner.' },
      ]),
      c(
        'Die Range sagt Ihnen Ihre Zahlen. Sie auf dem Platz einzusetzen ist der Teil, den ich coache, während einer vollen Runde, in der jeder Schlag zählt.',
        'Coaching auf dem Platz'
      ),
    ],
  },
  es: {
    metadata: {
      title: 'Mejores campos de prácticas en Mallorca',
      description:
        'Prácticas con TrackMan, Toptracer y hierba en Mallorca, comparadas por un pro PGA: dónde medir, dónde calentar y dónde trabajar el juego corto.',
      imageAlt: 'T Golf Calvià en Mallorca',
    },
    meta: {
      badge: 'Prácticas',
      readTime: '4 min de lectura',
      updated: 'Octubre 2026',
      title: 'Las mejores instalaciones de prácticas de golf de Mallorca',
      intro:
        'Cuatro clubes de Mallorca tienen seguimiento de bola integrado en los puestos del campo de prácticas, y varios más te dejan pegar desde hierba. Cuál usar depende de para qué la quieras: medir tus números, calentar antes de una vuelta o trabajar el juego corto.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Análisis honesto 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Análisis honesto 2026' },
        { slug: 'son-gual-review', title: 'Son Gual Golf: análisis honesto 2026' },
        { slug: 'on-course-coaching-mallorca', title: 'Coaching en el campo en Mallorca' },
      ],
    },
    blocks: [
      img('Putting green de Son Quint con una bandera naranja de Son Quint en primer plano', 'El putting green de Son Quint.'),
      p('Una sesión de prácticas antes de una vuelta en Mallorca sirve para una de tres cosas. Medir te da tus distancias de carry, el número que importa en campos con agua y grandes desniveles como T Golf Calvià y Andratx. Calentar prepara el cuerpo para el tee del 1. El juego corto es donde se recuperan más golpes en un viaje. Cada instalación de las siguientes cumple bien algunas de estas funciones y flojea en otras.'),
      p('Respuesta rápida'),
      t(
        ['Lo que quieres', 'Ve a', 'Qué hay'],
        [
          ['Datos de cada bola, abierto al público', 'Golf de Andratx o Pula', 'Campo de prácticas con TrackMan'],
          ['Seguimiento de bola antes de una vuelta importante', 'Son Muntaner o Alcanada', 'Campo de prácticas con Toptracer'],
          ['Trabajo de juego corto', 'T Golf Calvià o Golf de Andratx', 'Greens objetivo, zonas de chipping y bunkers'],
          ['Pegar desde hierba', 'T Golf Calvià, Maioris, Son Antem o Son Termes', 'Tees de hierba'],
          ['La mayor zona de prácticas', 'Son Antem', 'Campo circular para más de 200 jugadores'],
          ['Prácticas cerca de Palma', 'T Golf Palma', '42 puestos, 14 cubiertos, 250 m de largo'],
        ]
      ),
      p('T Golf Calvià: la mejor zona de prácticas en hierba'),
      p('T Golf Calvià tiene 40 puestos en un campo de prácticas todo de hierba y siete greens objetivo a distintas distancias, protegidos por diez bunkers. Alrededor hay dos putting greens, dos greens de chipping y dos zonas de pitching con bunkers. La hierba no es lo habitual en los clubes de Mallorca, y los greens objetivo dan a cada bola un número real al que apuntar.'),
      p("El campo es la razón para usarlo. Quince lagos obligan a hacer carries desde el tee y varias aproximaciones ocultan la parte baja de la bandera, así que pega las bolas necesarias para conocer tus carries antes del 1. Más detalles en el <a href='/guides/t-golf-calvia-review'>análisis de T Golf Calvià</a>."),
      p('Golf de Andratx: TrackMan sobre Camp de Mar'),
      p('Andratx tiene un campo de prácticas TrackMan público con 21 tees, siete de ellos cubiertos, además de una zona de juego corto y tres bunkers de práctica. Está al otro lado de la carretera respecto a la casa club, lo que hace que el calentamiento sea algo inusual. Cuando jugué, la zona de juego corto estaba en estupendas condiciones para cualquier golpe que quisieras practicar. El campo de prácticas está en una pendiente pronunciada y cumple su función para soltarte.'),
      p("Aquí los números importan más que en la mayoría de sitios. Los par 3 juegan muy distinto a la tarjeta por los desniveles. Los arroyos cruzan las calles, así que conocer tu carry marca la diferencia entre un par y una bola perdida. Cuenta con tiempo para cruzar la carretera y volver. Más detalles en el <a href='/guides/golf-andratx-review'>análisis de Golf de Andratx</a>."),
      p('Pula: el campo de prácticas TrackMan del este'),
      p('Visité las instalaciones de prácticas de Pula. Hay un campo de prácticas TrackMan público de dos niveles, dos putting greens, un green de pitching y una zona de juego corto con bunkers. Está a unos 70 minutos de Palma, así que tiene más sentido si te alojas en la costa este.'),
      img('Pula Golf en Mallorca'),
      p('Son Gual: bolas de prácticas con tu green fee'),
      p('Son Gual no tiene campo de prácticas público con seguimiento de bola. Los clientes que pagan green fee pueden usar el campo de prácticas con fichas de 4 € por 24 bolas, y la tarifa de visitante es de 20 € con 72 bolas.'),
      p("Úsalo antes de jugar. Los greens de Son Gual son rápidos y elevados, así que diez minutos con distancias de aproximación se notan directamente en la tarjeta. Más detalles en el <a href='/guides/son-gual-review'>análisis de Son Gual</a>."),
      p('Son Muntaner y Alcanada: Toptracer antes de una vuelta importante'),
      p('Son Muntaner tiene un campo de prácticas con Toptracer, una zona de chipping y un putting green, y las instalaciones de prácticas estaban al nivel del campo cuando jugué. También es el campo de prácticas de Son Vida, que solo tiene una red y un putting green y está a dos minutos.'),
      p('Alcanada tiene Toptracer, diez alfombrillas cubiertas y diez al aire libre, una zona de hierba natural en temporada y una zona de juego corto. Está a unos 50 minutos de Palma, así que llega pronto y úsalo antes de una vuelta en greens que dejan muy pocos putts fáciles.'),
      img('Bandera roja y blanca de Son Vida 1964 en el putting green de prácticas con la red de prácticas detrás', 'El putting green de prácticas, con la red detrás.'),
      p('T Golf Palma: el campo de prácticas más grande cerca de Palma'),
      p("T Golf Palma tiene 42 puestos, 14 de ellos cubiertos, en un campo de prácticas de 250 metros, con putting greens y una gran zona de juego corto. Si te alojas en la ciudad y quieres una sesión de prácticas sin un trayecto largo, es el primer sitio que miraría. Más detalles en el <a href='/guides/t-golf-palma-review'>análisis de T Golf Palma</a>."),
      p('Son Antem: la academia'),
      p('Visité la academia de Son Antem. El campo de prácticas circular está construido para más de 200 jugadores, con tees de hierba y artificiales, y hay un green de aproximación con bunkers y un putting green de unos 1.000 m². Es una de las mayores academias de golf de Europa. Si tu grupo quiere practicar juntos antes de una vuelta, tiene espacio de sobra.'),
      p('Maioris y Son Termes: hierba cerca de Palma'),
      p('Maioris tiene un campo de prácticas con tees de hierba y de alfombrilla, un gran putting green, una zona de chipping y pitching toda de hierba con pendientes y un bunker. Son Termes tiene zonas de hierba y alfombrilla para pegar, un green de chipping y un putting green. Ninguno tiene seguimiento de bola, así que sirven más para calentar o trabajar el juego corto que para una sesión de medición.'),
      p('Cómo los usaría en un viaje'),
      l([
        { label: 'El día que aterrizas:', text: 'una hora en T Golf Palma o Son Muntaner, terminando en el putting green.' },
        { label: 'Antes de un campo con agua:', text: 'una hora en la hierba de T Golf Calvià, para conocer tus carries antes de que te los enseñen los lagos.' },
        { label: 'Si te alojas en el este:', text: 'Pula, para TrackMan en ambos niveles.' },
        { label: 'Para obtener números:', text: 'TrackMan en Andratx antes de la vuelta allí, o Toptracer en Son Muntaner.' },
      ]),
      c(
        'El campo de prácticas te dice tus números. Usarlos en el campo es la parte que yo entreno, durante una vuelta completa en la que los golpes cuentan.',
        'Coaching en el campo'
      ),
    ],
  },
  fr: {
    metadata: {
      title: 'Les meilleurs practices de Majorque',
      description:
        'Practices TrackMan, Toptracer et en herbe à Majorque, comparés par un pro PGA : où mesurer, où vous échauffer et où travailler le petit jeu.',
      imageAlt: 'T Golf Calvià, Majorque',
    },
    meta: {
      badge: 'Entraînement',
      readTime: '4 min de lecture',
      updated: 'Octobre 2026',
      title: "Les meilleures installations d'entraînement de golf à Majorque",
      intro:
        "Quatre clubs de Majorque ont un suivi de balle intégré aux postes du practice, et plusieurs autres vous laissent frapper depuis l'herbe. Celui à choisir dépend de la tâche : mesurer vos chiffres, vous échauffer avant une partie ou travailler le petit jeu.",
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Avis honnête 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Avis honnête 2026' },
        { slug: 'son-gual-review', title: 'Son Gual Golf : avis honnête 2026' },
        { slug: 'on-course-coaching-mallorca', title: 'Coaching sur le parcours à Majorque' },
      ],
    },
    blocks: [
      img("Putting green de Son Quint avec un drapeau orange Son Quint au premier plan", "Le putting green de Son Quint."),
      p("Une séance de practice avant une partie à Majorque sert à l'une de trois choses. Mesurer vous donne vos distances de carry, le chiffre qui compte sur les parcours avec de l'eau et de gros dénivelés comme T Golf Calvià et Andratx. S'échauffer prépare le corps au départ du 1. Le petit jeu est l'endroit où l'on récupère le plus de coups sur un séjour. Chaque installation ci-dessous est bonne pour certaines de ces tâches et faible pour d'autres."),
      p('Réponse rapide'),
      t(
        ['Vous voulez', 'Allez à', 'Ce qu\'il y a'],
        [
          ['Des chiffres sur chaque balle, ouvert au public', 'Golf de Andratx ou Pula', 'Practice TrackMan'],
          ['Suivi de balle avant une grosse partie', 'Son Muntaner ou Alcanada', 'Practice Toptracer'],
          ['Travail du petit jeu', 'T Golf Calvià ou Golf de Andratx', 'Greens cibles, zones de chipping et bunkers'],
          ["Frapper depuis l'herbe", 'T Golf Calvià, Maioris, Son Antem ou Son Termes', "Départs en herbe"],
          ["La plus grande zone d'entraînement", 'Son Antem', 'Practice circulaire pour plus de 200 joueurs'],
          ["S'entraîner près de Palma", 'T Golf Palma', '42 postes, 14 couverts, 250 m de long'],
        ]
      ),
      p("T Golf Calvià : la meilleure zone d'entraînement en herbe"),
      p("T Golf Calvià compte 40 postes sur un practice entièrement en herbe, et sept greens cibles à différentes distances protégés par dix bunkers. Autour, on trouve deux putting greens, deux greens de chipping et deux zones de pitching avec bunkers. L'herbe n'est pas acquise dans les clubs de Majorque, et les greens cibles donnent à chaque balle un vrai chiffre à viser."),
      p("Le parcours est la raison de s'en servir. Quinze lacs imposent des carries depuis le départ et plusieurs approches cachent le bas du drapeau : frappez assez de balles pour connaître vos carries avant le 1. Plus de détails dans l'<a href='/guides/t-golf-calvia-review'>avis sur T Golf Calvià</a>."),
      p('Golf de Andratx : TrackMan au-dessus de Camp de Mar'),
      p("Andratx dispose d'un practice TrackMan public de 21 postes, dont sept couverts, plus une zone de petit jeu et trois bunkers d'entraînement. Il se trouve de l'autre côté de la route par rapport au club-house, ce qui rend l'échauffement un peu inhabituel. Quand j'y ai joué, la zone de petit jeu était en excellent état pour tous les coups qu'on voulait travailler. Le practice est sur une pente raide, et il suffit pour vous dérouiller."),
      p("Les chiffres comptent plus ici qu'ailleurs. Les par 3 jouent très différemment de la carte à cause des dénivelés. Des ruisseaux traversent les fairways, donc connaître son carry fait la différence entre un par et une balle perdue. Prévoyez le temps de traverser la route et de revenir. Plus de détails dans l'<a href='/guides/golf-andratx-review'>avis sur Golf de Andratx</a>."),
      p("Pula : le practice TrackMan de l'est"),
      p("J'ai visité les installations d'entraînement de Pula. Il y a un practice TrackMan public sur deux niveaux, deux putting greens, un green de pitching et une zone de petit jeu avec bunkers. Il est à environ 70 minutes de Palma, il a donc surtout du sens si vous séjournez sur la côte est."),
      img('Pula Golf, Majorque'),
      p('Son Gual : des balles de practice avec votre green fee'),
      p("Son Gual n'a pas de practice public avec suivi de balle. Les clients qui paient un green fee peuvent utiliser le practice avec des jetons à 4 € les 24 balles, et le tarif visiteur est de 20 € pour 72 balles."),
      p("Servez-vous-en avant de jouer. Les greens de Son Gual sont rapides et surélevés, dix minutes sur les distances d'approche se retrouvent directement sur la carte de score. Plus de détails dans l'<a href='/guides/son-gual-review'>avis sur Son Gual</a>."),
      p('Son Muntaner et Alcanada : Toptracer avant une grosse partie'),
      p("Son Muntaner dispose d'un practice Toptracer, d'une zone de chipping et d'un putting green, et les installations d'entraînement étaient au niveau du parcours quand j'y ai joué. C'est aussi le practice de Son Vida, qui n'a qu'un filet et un putting green et se trouve à deux minutes."),
      p("Alcanada a du Toptracer, dix tapis couverts et dix en extérieur, une zone en herbe naturelle en saison et une zone de petit jeu. Il est à environ 50 minutes de Palma, arrivez donc tôt et servez-vous-en avant une partie sur des greens qui laissent très peu de putts faciles."),
      img("Drapeau rouge et blanc Son Vida 1964 sur le putting green d'entraînement avec le filet d'entraînement derrière", "Le putting green d'entraînement, avec le filet derrière."),
      p('T Golf Palma : le plus grand practice près de Palma'),
      p("T Golf Palma compte 42 postes, dont 14 couverts, sur un practice de 250 mètres, avec des putting greens et une grande zone de petit jeu. Si vous séjournez en ville et voulez une séance de practice sans long trajet, c'est le premier endroit que je regarderais. Plus de détails dans l'<a href='/guides/t-golf-palma-review'>avis sur T Golf Palma</a>."),
      p("Son Antem : l'académie"),
      p("J'ai visité l'académie de Son Antem. Le practice circulaire est conçu pour plus de 200 joueurs, avec des départs en herbe et artificiels, et il y a un green d'approche avec bunkers et un putting green d'environ 1 000 m². C'est l'une des plus grandes académies de golf d'Europe. Si votre groupe veut s'entraîner ensemble avant une partie, la place ne manque pas."),
      p("Maioris et Son Termes : de l'herbe près de Palma"),
      p("Maioris a un practice avec des départs en herbe et sur tapis, un grand putting green, une zone de chipping et de pitching entièrement en herbe avec des pentes, et un bunker. Son Termes a des zones de frappe en herbe et sur tapis, un green de chipping et un putting green. Aucun des deux n'a de suivi de balle, ils conviennent donc mieux à un échauffement ou au petit jeu qu'à une séance de mesure."),
      p("Comment je les utiliserais pendant un séjour"),
      l([
        { label: "Le jour de votre arrivée :", text: "une heure à T Golf Palma ou à Son Muntaner, en terminant sur le putting green." },
        { label: "Avant un parcours avec de l'eau :", text: "une heure sur l'herbe de T Golf Calvià, pour connaître vos carries avant que les lacs ne vous les apprennent." },
        { label: "Si vous séjournez à l'est :", text: "Pula, pour du TrackMan sur les deux niveaux." },
        { label: "Pour des chiffres :", text: "du TrackMan à Andratx avant la partie là-bas, ou du Toptracer à Son Muntaner." },
      ]),
      c(
        "Le practice vous donne vos chiffres. Les utiliser sur le parcours est la partie que j'entraîne, pendant une partie complète où les coups comptent.",
        'Coaching sur le parcours'
      ),
    ],
  },
  nl: {
    metadata: {
      title: 'De beste driving ranges op Mallorca',
      description:
        'TrackMan-, Toptracer- en grasranges op Mallorca vergeleken door een PGA-pro: waar je meet, waar je opwarmt en waar je aan het korte spel werkt.',
      imageAlt: 'T Golf Calvià op Mallorca',
    },
    meta: {
      badge: 'Oefenen',
      readTime: '4 min leestijd',
      updated: 'Oktober 2026',
      title: 'De beste oefenfaciliteiten voor golf op Mallorca',
      intro:
        'Vier clubs op Mallorca hebben ballentracking in de rangeboxen ingebouwd, en meerdere andere laten je vanaf gras slaan. Welke je kiest hangt af van de taak: je cijfers meten, opwarmen voor een ronde of aan het korte spel werken.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Eerlijke review 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Eerlijke review 2026' },
        { slug: 'son-gual-review', title: 'Son Gual Golf: eerlijke review 2026' },
        { slug: 'on-course-coaching-mallorca', title: 'Coaching op de baan op Mallorca' },
      ],
    },
    blocks: [
      img('Puttinggreen van Son Quint met een oranje Son Quint-vlag op de voorgrond', 'De puttinggreen van Son Quint.'),
      p('Een rangesessie voor een ronde op Mallorca dient voor een van drie dingen. Meten geeft je carry-afstanden, het getal dat telt op banen met water en grote hoogteverschillen zoals T Golf Calvià en Andratx. Opwarmen maakt het lichaam klaar voor de eerste tee. Het korte spel is waar je tijdens een reis de meeste slagen terugwint. Elke faciliteit hieronder is goed in sommige van die taken en zwak in andere.'),
      p('Kort antwoord'),
      t(
        ['Je wilt', 'Ga naar', 'Wat er is'],
        [
          ['Cijfers bij elke bal, open voor het publiek', 'Golf de Andratx of Pula', 'TrackMan-range'],
          ['Ballentracking voor een belangrijke ronde', 'Son Muntaner of Alcanada', 'Toptracer-range'],
          ['Werken aan het korte spel', 'T Golf Calvià of Golf de Andratx', 'Doelgreens, chippinggebieden en bunkers'],
          ['Vanaf gras slaan', 'T Golf Calvià, Maioris, Son Antem of Son Termes', 'Grastees'],
          ['Het grootste oefenterrein', 'Son Antem', 'Ronde range voor 200+ spelers'],
          ['Oefenen bij Palma', 'T Golf Palma', '42 boxen, 14 overdekt, 250 m lang'],
        ]
      ),
      p('T Golf Calvià: het beste oefenterrein op gras'),
      p('T Golf Calvià heeft 40 stations op een range helemaal van gras en zeven doelgreens op verschillende afstanden, beschermd door tien bunkers. Eromheen liggen twee puttinggreens, twee chippinggreens en twee pitchinggebieden met bunkers. Gras is op Mallorca-clubs niet vanzelfsprekend, en de doelgreens geven elke bal een echt getal om op te richten.'),
      p("De baan is de reden om hem te gebruiken. Vijftien meren dwingen carries vanaf de tee af en meerdere approaches verbergen de onderkant van de vlag, dus sla genoeg ballen om je carries te kennen voor de eerste tee. Meer in de <a href='/guides/t-golf-calvia-review'>review van T Golf Calvià</a>."),
      p('Golf de Andratx: TrackMan boven Camp de Mar'),
      p('Andratx heeft een openbare TrackMan Range met 21 tees, zeven overdekt, plus een gebied voor het korte spel en drie oefenbunkers. Hij ligt aan de overkant van de weg ten opzichte van het clubhuis, wat het opwarmen een beetje ongewoon maakt. Toen ik speelde, was het kortespelgebied in prima staat voor elke slag die je wilde oefenen. De range ligt op een steile helling en doet wat nodig is om je los te maken.'),
      p("De cijfers tellen hier meer dan op de meeste plekken. De par 3's spelen heel anders dan op de kaart door de hoogteverschillen. Beken doorkruisen de fairways, dus je carry kennen is het verschil tussen een par en een verloren bal. Reken op tijd om de weg over te steken en terug te lopen. Meer in de <a href='/guides/golf-andratx-review'>review van Golf de Andratx</a>."),
      p('Pula: de TrackMan-range in het oosten'),
      p('Ik heb de oefenfaciliteiten van Pula bezocht. Er is een openbare TrackMan Range op twee niveaus, twee puttinggreens, een pitchinggreen en een kortespelgebied met bunkers. Het ligt ongeveer 70 minuten van Palma, dus het is vooral zinvol als je aan de oostkust verblijft.'),
      img('Pula Golf op Mallorca'),
      p('Son Gual: rangeballen bij je greenfee'),
      p('Son Gual heeft geen openbare range met ballentracking. Betalende greenfee-gasten kunnen de range gebruiken met tokens van €4 voor 24 ballen, en het rangetarief voor bezoekers is €20 voor 72 ballen.'),
      p("Gebruik hem voor je speelt. De greens van Son Gual zijn snel en verhoogd, dus tien minuten oefenen op approachafstanden zie je direct terug op de scorekaart. Meer in de <a href='/guides/son-gual-review'>review van Son Gual</a>."),
      p('Son Muntaner en Alcanada: Toptracer voor een grote ronde'),
      p('Son Muntaner heeft een Toptracer-range, een chippinggebied en een puttinggreen, en de oefenfaciliteiten waren op het niveau van de baan toen ik speelde. Het is ook de range voor Son Vida, dat alleen een net en een puttinggreen heeft en twee minuten verderop ligt.'),
      p('Alcanada heeft Toptracer, tien overdekte en tien buitenmatten, in het seizoen een natuurgrasgebied en een kortespelgebied. Het ligt ongeveer 50 minuten van Palma, dus kom vroeg en gebruik het voor een ronde op greens die erg weinig makkelijke putts overlaten.'),
      img('Rood-witte Son Vida 1964-vlag op de oefenputtinggreen met het oefennet erachter', 'De oefenputtinggreen, met het net erachter.'),
      p('T Golf Palma: de grootste range bij Palma'),
      p("T Golf Palma heeft 42 boxen, 14 overdekt, op een range van 250 meter, met puttinggreens en een groot kortespelgebied. Als je in de stad verblijft en een rangesessie wilt zonder lange rit, is dit de eerste plek waar ik zou kijken. Meer in de <a href='/guides/t-golf-palma-review'>review van T Golf Palma</a>."),
      p('Son Antem: de academie'),
      p('Ik heb de academie van Son Antem bezocht. De ronde driving range is gebouwd voor meer dan 200 spelers, met gras- en kunsttees, en er is een approachgreen met bunkers en een puttinggreen van ongeveer 1.000 m². Het is een van de grootste golfacademies van Europa. Als je groep voor een ronde samen wil oefenen, is er ruimte genoeg.'),
      p('Maioris en Son Termes: gras dicht bij Palma'),
      p('Maioris heeft een range met gras- en mattees, een grote puttinggreen, een chipping- en pitchinggebied helemaal van gras met hellingen, en een bunker. Son Termes heeft gras- en matslagplekken, een chippinggreen en een puttinggreen. Geen van beide heeft ballentracking, dus ze zijn geschikter voor een warming-up of het korte spel dan voor een meetsessie.'),
      p('Hoe ik ze op een reis zou gebruiken'),
      l([
        { label: 'De dag dat je landt:', text: 'een uur bij T Golf Palma of Son Muntaner, eindigend op de puttinggreen.' },
        { label: 'Voor een baan met water:', text: 'een uur op het gras van T Golf Calvià, zodat je je carries kent voordat de meren ze je leren.' },
        { label: 'Als je in het oosten verblijft:', text: 'Pula, voor TrackMan op beide niveaus.' },
        { label: 'Voor cijfers:', text: 'TrackMan in Andratx voor de ronde daar, of Toptracer bij Son Muntaner.' },
      ]),
      c(
        'De range geeft je je cijfers. Ze op de baan gebruiken is het deel dat ik coach, tijdens een volledige ronde waarin de slagen tellen.',
        'Coaching op de baan'
      ),
    ],
  },
  sv: {
    metadata: {
      title: 'Mallorcas bästa driving ranges',
      description:
        'TrackMan-, Toptracer- och gräsrangear på Mallorca jämförda av en PGA-pro: var du mäter, var du värmer upp och var du jobbar med närspelet.',
      imageAlt: 'T Golf Calvià på Mallorca',
    },
    meta: {
      badge: 'Träning',
      readTime: '4 min läsning',
      updated: 'Oktober 2026',
      title: 'Mallorcas bästa träningsanläggningar för golf',
      intro:
        'Fyra klubbar på Mallorca har bollspårning inbyggd i rangeplatserna, och flera andra låter dig slå från gräs. Vilken du ska använda beror på uppgiften: mäta dina siffror, värma upp inför en runda eller jobba med närspelet.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Ärlig recension 2026' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Ärlig recension 2026' },
        { slug: 'son-gual-review', title: 'Son Gual Golf: ärlig recension 2026' },
        { slug: 'on-course-coaching-mallorca', title: 'Coaching på banan på Mallorca' },
      ],
    },
    blocks: [
      img('Puttinggreen på Son Quint med en orange Son Quint-flagga i förgrunden', 'Puttinggreenen på Son Quint.'),
      p('Ett rangepass före en runda på Mallorca har en av tre uppgifter. Att mäta ger dig dina carry-längder, siffran som räknas på banor med vatten och stora höjdskillnader som T Golf Calvià och Andratx. Att värma upp gör kroppen redo för första tee. Närspelsträning är där de flesta slag vinns tillbaka under en resa. Varje anläggning nedan är bra på några av de uppgifterna och svag på andra.'),
      p('Snabbt svar'),
      t(
        ['Du vill ha', 'Gå till', 'Vad som finns'],
        [
          ['Siffror på varje boll, öppet för allmänheten', 'Golf de Andratx eller Pula', 'TrackMan-range'],
          ['Bollspårning före en stor runda', 'Son Muntaner eller Alcanada', 'Toptracer-range'],
          ['Närspelsträning', 'T Golf Calvià eller Golf de Andratx', 'Målgreener, chippingytor och bunkrar'],
          ['Slå från gräs', 'T Golf Calvià, Maioris, Son Antem eller Son Termes', 'Gräsutslag'],
          ['Det största träningsområdet', 'Son Antem', 'Cirkulär range för 200+ spelare'],
          ['Träning nära Palma', 'T Golf Palma', '42 platser, 14 under tak, 250 m lång'],
        ]
      ),
      p('T Golf Calvià: det bästa träningsområdet i gräs'),
      p('T Golf Calvià har 40 platser på en range helt i gräs och sju målgreener på olika avstånd som skyddas av tio bunkrar. Runt omkring finns två puttinggreener, två chippinggreener och två pitchingytor med bunkrar. Gräs är inte självklart på Mallorcas klubbar, och målgreenerna ger varje boll en riktig siffra att sikta på.'),
      p("Banan är anledningen att använda den. Femton sjöar tvingar fram carries från tee och flera närslag döljer flaggans nedre del, så slå tillräckligt många bollar för att känna dina carries före första tee. Mer i <a href='/guides/t-golf-calvia-review'>recensionen av T Golf Calvià</a>."),
      p('Golf de Andratx: TrackMan ovanför Camp de Mar'),
      p('Andratx har en allmän TrackMan Range med 21 utslagsplatser, sju under tak, plus ett närspelsområde och tre träningsbunkrar. Den ligger tvärs över vägen från klubbhuset, vilket gör uppvärmningen lite ovanlig. När jag spelade var närspelsområdet i utmärkt skick för vilket slag du än ville träna. Rangen ligger i en brant sluttning och räcker för att bli varm i kroppen.'),
      p("Siffrorna betyder mer här än på de flesta ställen. Par 3-hålen spelar mycket annorlunda än kortet på grund av höjdskillnaderna. Bäckar korsar fairways, så att känna sin carry är skillnaden mellan par och en förlorad boll. Räkna med tid att gå över vägen och tillbaka. Mer i <a href='/guides/golf-andratx-review'>recensionen av Golf de Andratx</a>."),
      p('Pula: TrackMan-rangen i öster'),
      p('Jag besökte Pulas träningsanläggningar. Det finns en allmän TrackMan Range i två nivåer, två puttinggreener, en pitchinggreen och ett närspelsområde med bunkrar. Den ligger cirka 70 minuter från Palma, så det är mest meningsfullt om du bor på östkusten.'),
      img('Pula Golf på Mallorca'),
      p('Son Gual: rangebollar med din greenfee'),
      p('Son Gual har ingen allmän range med bollspårning. Betalande greenfee-gäster kan använda rangen med polletter för 4 € per 24 bollar, och besöksavgiften för rangen är 20 € för 72 bollar.'),
      p("Använd den innan du spelar. Greenerna på Son Gual är snabba och förhöjda, så tio minuter på närslagsavstånd hamnar direkt på scorekortet. Mer i <a href='/guides/son-gual-review'>recensionen av Son Gual</a>."),
      p('Son Muntaner och Alcanada: Toptracer före en stor runda'),
      p('Son Muntaner har en Toptracer-range, ett chippingområde och en puttinggreen, och träningsanläggningarna höll samma nivå som banan när jag spelade. Det är också rangen för Son Vida, som bara har ett nät och en puttinggreen och ligger två minuter bort.'),
      p('Alcanada har Toptracer, tio mattor under tak och tio utomhus, ett naturgräsområde under säsong och ett närspelsområde. Det ligger cirka 50 minuter från Palma, så kom tidigt och använd det före en runda på greener som lämnar mycket få lätta puttar.'),
      img('Röd och vit Son Vida 1964-flagga på träningsputtinggreenen med träningsnätet bakom', 'Träningsputtinggreenen, med nätet bakom.'),
      p('T Golf Palma: den största rangen nära Palma'),
      p("T Golf Palma har 42 platser, 14 under tak, på en range på 250 meter, med puttinggreener och ett stort närspelsområde. Bor du i staden och vill ha ett rangepass utan lång resa är det första stället jag skulle titta på. Mer i <a href='/guides/t-golf-palma-review'>recensionen av T Golf Palma</a>."),
      p('Son Antem: akademin'),
      p('Jag besökte Son Antems akademi. Den cirkulära driving rangen är byggd för fler än 200 spelare, med gräs- och konstgjorda utslag, och det finns en närspelsgreen med bunkrar och en puttinggreen på cirka 1 000 m². Det är en av Europas största golfakademier. Om ditt sällskap vill träna tillsammans före en runda finns det plats.'),
      p('Maioris och Son Termes: gräs nära Palma'),
      p('Maioris har en range med gräs- och mattutslag, en stor puttinggreen, ett chipping- och pitchingområde helt i gräs med sluttningar och en bunker. Son Termes har gräs- och mattytor att slå från, en chippinggreen och en puttinggreen. Ingen av dem har bollspårning, så de passar bättre för uppvärmning eller närspel än för ett mätpass.'),
      p('Hur jag skulle använda dem på en resa'),
      l([
        { label: 'Dagen du landar:', text: 'en timme på T Golf Palma eller Son Muntaner, avslutat på puttinggreenen.' },
        { label: 'Före en bana med vatten:', text: 'en timme på gräset på T Golf Calvià, så att du känner dina carries innan sjöarna lär dig dem.' },
        { label: 'Om du bor i öster:', text: 'Pula, för TrackMan på båda nivåerna.' },
        { label: 'För siffror:', text: 'TrackMan på Andratx före rundan där, eller Toptracer på Son Muntaner.' },
      ]),
      c(
        'Rangen ger dig dina siffror. Att använda dem på banan är den del jag coachar, under en hel runda där slagen räknas.',
        'Coaching på banan'
      ),
    ],
  },
  zh: {
    metadata: {
      title: '马略卡最好的练习场',
      description:
        'PGA 职业教练对比马略卡的 TrackMan、Toptracer 和草地练习场：哪里测数据，哪里热身，哪里练短杆。',
      imageAlt: '马略卡 T Golf Calvià',
    },
    meta: {
      badge: '练习',
      readTime: '4分钟阅读',
      updated: '2026年10月',
      title: '马略卡最好的高尔夫练习设施',
      intro:
        '马略卡有四家俱乐部在练习场打位里内置了球追踪，另有几家可以在草地上打。该用哪一家，取决于要做的事：测自己的数据、下场前热身，还是练短杆。',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - PGA教练真实评测（2026）' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - PGA教练真实评测（2026）' },
        { slug: 'son-gual-review', title: 'Son Gual Golf：真实评测 2026' },
        { slug: 'on-course-coaching-mallorca', title: '马略卡场上指导' },
      ],
    },
    blocks: [
      img('Son Quint 的推杆练习果岭，前景是橙色的 Son Quint 旗帜', 'Son Quint 的推杆练习果岭。'),
      p('在马略卡下场前去练习场，无非为了三件事之一。测量能告诉你 carry 距离，这个数字在有水和大落差的球场很关键，比如 T Golf Calvià 和 Andratx。热身让身体为第一个发球台做好准备。短杆练习则是在一次旅行中抢回杆数最多的地方。下面每个设施，对其中一些任务很强，对另一些则偏弱。'),
      p('快速回答'),
      t(
        ['你想要', '去哪里', '有什么'],
        [
          ['每个球都有数据，对公众开放', 'Golf de Andratx 或 Pula', 'TrackMan 练习场'],
          ['重要一轮之前的球追踪', 'Son Muntaner 或 Alcanada', 'Toptracer 练习场'],
          ['练短杆', 'T Golf Calvià 或 Golf de Andratx', '目标果岭、切杆区和沙坑'],
          ['在草地上打', 'T Golf Calvià、Maioris、Son Antem 或 Son Termes', '草地发球位'],
          ['最大的练习场地', 'Son Antem', '可容纳 200 多人的环形练习场'],
          ['帕尔马附近的练习', 'T Golf Palma', '42 个打位，14 个有顶棚，长 250 米'],
        ]
      ),
      p('T Golf Calvià：最好的草地练习场'),
      p('T Golf Calvià 有 40 个打位，全草地练习场，还有七个不同距离的目标果岭，由十个沙坑保护。周围有两个推杆果岭、两个切杆果岭和两个带沙坑的劈起区。草地在马略卡的俱乐部里并不是标配，而目标果岭给每个球一个真实的数字去瞄准。'),
      p("球场本身就是用它的理由。十五个湖迫使你在发球时飞越，好几杆攻果岭时看不到旗杆底部，所以多打些球，在第 1 洞之前摸清自己的 carry。详见 <a href='/guides/t-golf-calvia-review'>T Golf Calvià 评测</a>。"),
      p('Golf de Andratx：Camp de Mar 之上的 TrackMan'),
      p('Andratx 有一个对公众开放的 TrackMan 练习场，21 个打位，其中七个有顶棚，另有一块短杆区和三个练习沙坑。它在会所对面的马路另一边，所以热身有点不寻常。我打球那天，短杆区的状态很好，你想练的任何一种击球都能练。练习场建在陡坡上，让身体活动开是够用的。'),
      p("这里的数据比大多数地方更重要。三杆洞因为落差，打起来和记分卡完全不同。溪流横穿球道，所以知道自己的 carry，就是一个标准杆和一个丢球的区别。留出过马路来回的时间。详见 <a href='/guides/golf-andratx-review'>Golf de Andratx 评测</a>。"),
      p('Pula：东部的 TrackMan 练习场'),
      p('我去过 Pula 的练习设施。那里有一个对公众开放的两层 TrackMan 练习场，两个推杆果岭，一个劈起果岭，以及一块带沙坑的短杆区。它距帕尔马约 70 分钟，所以主要适合住在东海岸的球友。'),
      img('马略卡 Pula Golf'),
      p('Son Gual：果岭费里的练习球'),
      p('Son Gual 没有对公众开放的带球追踪的练习场。付果岭费的客人可以用代币使用练习场，24 个球 4 欧元，访客练习场费用是 72 个球 20 欧元。'),
      p("下场前去用一下。Son Gual 的果岭又快又高，所以花十分钟练进攻距离，会直接体现在记分卡上。详见 <a href='/guides/son-gual-review'>Son Gual 评测</a>。"),
      p('Son Muntaner 和 Alcanada：重要一轮前的 Toptracer'),
      p('Son Muntaner 有 Toptracer 练习场、一块切杆区和一个推杆果岭，我打球时，练习设施和球场是同一个水准。它也是 Son Vida 的练习场，Son Vida 只有一张网和一个推杆果岭，距这里两分钟。'),
      p('Alcanada 有 Toptracer，十个有顶棚的打垫和十个露天打垫，当季有一块天然草地区，还有一块短杆区。它距帕尔马约 50 分钟，所以早点到，在下场前用一下，那里的果岭几乎没有轻松的推杆。'),
      img('练习推杆果岭上的红白 Son Vida 1964 旗帜，身后是练习网', '练习推杆果岭，身后是练习网。'),
      p('T Golf Palma：帕尔马附近最大的练习场'),
      p("T Golf Palma 有 42 个打位，其中 14 个有顶棚，练习场长 250 米，另有推杆果岭和一大块短杆区。如果你住在市区，想练一场又不想开很远，这是我首先会看的地方。详见 <a href='/guides/t-golf-palma-review'>T Golf Palma 评测</a>。"),
      p('Son Antem：学院'),
      p('我去过 Son Antem 的学院。环形练习场按超过 200 名球手设计，有草地和人造发球位，还有带沙坑的短杆练习果岭和约 1000 平方米的推杆果岭。它是欧洲最大的高尔夫学院之一。如果你的团队想在下场前一起练，这里有足够的空间。'),
      p('Maioris 和 Son Termes：帕尔马附近的草地'),
      p('Maioris 的练习场有草地和打垫发球位、一个大推杆果岭、一块全草地的切杆和劈起区（有坡度），以及一个沙坑。Son Termes 有草地和打垫击球区、一个切杆果岭和一个推杆果岭。两家都没有球追踪，所以更适合热身或练短杆，而不是做测量。'),
      p('旅行中我会怎么用它们'),
      l([
        { label: '落地那天：', text: '在 T Golf Palma 或 Son Muntaner 练一个小时，最后在推杆果岭收尾。' },
        { label: '下场有水的球场前：', text: '在 T Golf Calvià 的草地上练一个小时，在湖面逼你之前先摸清自己的 carry。' },
        { label: '住在东部：', text: 'Pula，两层都有 TrackMan。' },
        { label: '想要数据：', text: '在 Andratx 下场前用 TrackMan，或者在 Son Muntaner 用 Toptracer。' },
      ]),
      c(
        '练习场告诉你数据。把数据用到球场上，是我来指导的部分，在每一杆都算数的完整一轮里。',
        '场上指导'
      ),
    ],
  },
}
