import { getOfferById, getPlayHeroBody, getPlayMultiDayDetail, OFFER_IDS } from './offers-content.js'

export const PLAY_WITH_A_PRO_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      homeHref: '/',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Play with a Pro',
      eyebrow: 'Private Golf Days · Mallorca',
      title: 'A Private Golf Day in Mallorca.',
      body: 'One course. A full day alongside a PGA Advanced Professional who has arranged everything. Before you arrive, I already know what to watch for — you complete a short questionnaire and I build the day around your game. Solo from €495. Groups from €950.',
      price: null,
      primaryCta: 'Tell Me Your Dates →',
      primaryHref: '/contact',
      secondaryCta: 'See Packages',
    },
    day: {
      eyebrow: 'What the day involves',
      title: 'Before you arrive, I already know what to watch for.',
      paragraphs: [
        'Before you arrive, you complete a short questionnaire. It tells me what frustrates you, where the gap is between your range game and your score, and what a good day would actually look like to you. By the time we reach the first tee, I already know what to watch for.',
        'During the round, the coaching is woven in naturally. Not a running commentary. More the right observation at the point where it can still change the hole, the score, or the decision standing in front of you.',
      ],
      quote:
        'Most golfers leave playing better, feeling clearer, and understanding why. That last part is the bit that tends to stay with them.',
      questionnaireEyebrow: 'Already booked?',
      questionnaireTitle: 'Complete your Pre-Round Questionnaire →',
      questionnaireBody: 'Takes 3 minutes. Helps me tailor the day to you before we reach the first tee.',
    },
    included: {
      title: "What's included",
      items: [
        ['Course selection', 'Matched to your game, handicap, and what you want from the day — I recommend, you confirm'],
        ['Tee time', 'Secured and fully handled before you arrive — you just show up'],
        ['Pre-round briefing', 'What to expect from the course, the holes that matter, and what I\'ll be watching for in your game'],
        ['18 holes alongside Andy', 'Playing together, not walking alongside — same tee, same conversation, same round'],
        ['On-course coaching throughout', 'Course management, shot selection, and decision-making at the moments they matter'],
        ['Post-round debrief', 'What changed, what to take away, and exactly what to work on next'],
      ],
    },
    courses: {
      eyebrow: 'Which course?',
      title: 'The course is always chosen with you.',
      body:
        "A group including beginners, a shorter half-day, a family with juniors: there are courses that work better for each of those, and I'll tell you honestly which one suits. Some are members-only and cannot be booked independently. If you want one of those, I can arrange it.",
    },
    who: {
      eyebrow: 'Who this is for',
      title: 'The day changes depending on who is standing on the first tee.',
      cards: [
        { num: '01', title: 'Serious golfers who want a day they\'ll remember', text: 'Handicap players — solo, in pairs, or with a small group — who want Mallorca\'s best courses played properly. Not just a tee time and a wave goodbye, but a day with someone who knows the course, reads the wind, and can change how you think about a hole in the time it takes to walk to the next tee.' },
        { num: '02', title: 'Groups who want everything arranged', text: 'Families, corporate groups, and executives visiting the island who want a premium, fully arranged day where every detail is handled. One fixed day rate, a calmer rhythm, and someone who has done it before.' },
        { num: '03', title: 'A gift worth giving', text: 'These days work well as gifts for milestone birthdays, retirement, and corporate rewards. Let me know if you\'re buying for someone else — I\'ll prepare a certificate and keep the day details private until you\'re ready.' },
      ],
    },
    testimonials: {
      eyebrow: 'What golfers say',
      title: 'In their own words.',
      items: [
        {
          text: "Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. I have felt suffocated by well-meaning coaches in the past, but Andy is a cut above. After just 18 holes together, I've discovered a new ceiling to my potential. His philosophy of prioritising the low-hanging fruit has given me clarity. What's more, his simple tips instantly transformed my putting.",
          author: 'Jo',
        },
        {
          text: 'The thing I most enjoyed was how comfortable he made me feel on the course. The insight into what calculations go into each shot has helped me improve my decision making immensely. I would recommend the day to groups of friends, groups on holiday looking for an entertaining day out, or even a family looking to get involved in golf together.',
          author: 'Finlay',
        },
        {
          text: "I've been playing golf since I was five. I figured I had the fundamentals down and just needed more reps, not a coach. Then someone gifted me a lesson with Andy, and I decided to give it a shot. I'm glad I did. We worked through the finer details of my swing, focused on solid ball contact, better weight transfer, and mechanics. Even the smallest tweaks produced consistent results, and I'm confident they'll shave 5-10 strokes off my game from just one session. Andy was a total pro. Can't thank him enough.",
          author: 'Adam',
        },
      ],
    },
    packages: {
      eyebrow: 'Experiences & Packages',
      title: 'Choose Your Day.',
      body: 'All are private and hosted by me. Course, tee time, and coaching are included. Green fees and lunch are separate.',
      tiers: [
        {
          eyebrow: 'A Day With Andy',
          name: 'Solo',
          price: '€495',
          note: "Andy's day rate. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons, Andy can help arrange.",
          features: [
            'Course matched to your game and handicap',
            'Tee time secured and fully handled',
            'Pre-round briefing and warm-up',
            '18 holes with Andy',
            'On-course coaching during the round',
            'Post-round debrief',
          ],
          button: 'Enquire →',
          href: '/contact',
          featured: false,
        },
        {
          eyebrow: 'A Day With Andy',
          name: 'Group',
          price: '€950',
          noteLines: [
            "Andy's fixed day rate for 2 or 3 golfers.",
            "Golf course green fee and lunch are separate.",
            "Buggy and rental clubs available as optional add-ons, Andy can help arrange.",
          ],
          features: [
            'Up to 3 players, one fixed day rate for Andy',
            'Course matched to your group',
            'Tee time secured and fully handled',
            'Pre-round briefing and warm-up',
            '18 holes with Andy',
            'On-course coaching during the round',
          ],
          button: 'Enquire →',
          href: '/contact',
          featured: true,
        },
        {
          eyebrow: 'The Signature Experience',
          name: 'Full Day',
          price: '€3,000+',
          note: 'All inclusive. Andy confirms the full itinerary with you in advance.',
          features: [
            'Course, tee time, and coaching',
            'Michelin-starred lunch or private chef booking',
            'Videographer to capture highlights and produce a memento film',
            'Spa, massage, and time to decompress properly post-golf',
            'Private transfers throughout the day',
            'Caddy and premium club hire included',
          ],
          button: 'Enquire →',
          href: '/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: 'Looking for something bigger?',
        title: 'A multi-day golf journey.',
        body: 'Two or three consecutive days across Son Gual, Alcanada, and beyond, with private transfers, handpicked dining, spa access, additional activities. From €3,000. Get in touch with your dates.',
        button: 'Enquire about a multi-day experience →',
        href: '/contact',
      },
    },
    finalCta: {
      eyebrow: 'Ready to play Mallorca properly?',
      title: "Get in touch and I'll help you choose the right version of the day.",
      body: "Tell me your dates, your handicap, and what you want from the day. I'll come back with a recommendation personally within 24 hours.",
      primaryCta: 'Book Your Day →',
      primaryHref: '/contact',
      secondaryCta: 'Explore the Courses',
      secondaryHref: '/golf-courses',
      tertiaryCta: 'Pre-Round Questionnaire →',
    },
  },
  de: {
    locale: 'de',
    hero: {
      homeHref: '/de',
      breadcrumbHome: 'Start',
      breadcrumbCurrent: 'Mit einem Pro spielen',
      eyebrow: 'Private Golftage · Mallorca',
      title: 'Ein privater Golftag auf Mallorca.',
      body: 'Ein privater Tag auf einem der besten Plätze Mallorcas, bei dem ich an Ihrer Seite spiele und Sie ganz natürlich während der Runde coache. Das passt zu guten Golfern, Urlaubsgolfern und allen, die mehr wollen als nur eine normale Startzeit.',
      primaryCta: 'Ihren Tag buchen →',
      primaryHref: '/de/contact',
      secondaryCta: 'Pakete ansehen',
    },
    day: {
      eyebrow: 'Was der Tag beinhaltet',
      title: 'Bevor Sie ankommen, weiß ich bereits, worauf ich achten muss.',
      paragraphs: [
        'Vor Ihrer Ankunft füllen Sie einen kurzen Fragebogen aus. Er zeigt mir, was Sie gerade frustriert, wo die Lücke zwischen Ihrem Range-Spiel und Ihren Scores liegt und wie ein guter Tag für Sie konkret aussehen würde. Wenn wir am ersten Abschlag stehen, weiß ich bereits, worauf ich achten muss.',
        'Während der Runde wird das Coaching ganz natürlich eingewoben. Kein Dauerkommentar. Eher die richtige Beobachtung an dem Punkt, an dem sie noch das Loch, den Score oder die Entscheidung vor Ihnen verändern kann.',
      ],
      quote: 'Die meisten Golfer gehen mit besserem Spiel, mehr Klarheit und einem klareren Verständnis nach Hause, warum es besser lief. Genau dieser Teil bleibt.',
      questionnaireEyebrow: 'Schon gebucht?',
      questionnaireTitle: 'Vor-Runden-Fragebogen ausfüllen →',
      questionnaireBody: 'Dauert 3 Minuten. Hilft mir, den Tag auf Sie abzustimmen, bevor wir den ersten Abschlag erreichen.',
    },
    included: {
      title: 'Was inbegriffen ist',
      items: [
        ['Platzauswahl', 'Abgestimmt auf Ihr Spiel, Ihr Handicap und Ihre Erwartungen an den Tag'],
        ['Startzeit', 'Gesichert und komplett organisiert - Sie müssen nur erscheinen'],
        ['Briefing vor der Runde', 'Was Sie vom Platz erwarten können und worauf Sie achten sollten'],
        ['18 Löcher an Andys Seite', 'Nicht nur mitlaufen - wirklich gemeinsam spielen'],
        ['Coaching auf dem Platz', 'Platzmanagement, Schlägerwahl und Entscheidungsfindung'],
        ['Nachbesprechung', 'Was besser wurde, woran Sie weiterarbeiten sollten - klar und ehrlich'],
      ],
    },
    courses: {
      eyebrow: 'Welcher Platz?',
      title: 'Der Platz wird immer gemeinsam mit Ihnen gewählt.',
      body: 'Eine Gruppe mit Anfängern, ein kürzerer Halbtag oder eine Familie mit Kindern: Für all das gibt es Plätze, die besser passen, und ich sage Ihnen ehrlich, welcher am sinnvollsten ist. Manche sind nur für Mitglieder zugänglich. Wenn Sie dort spielen möchten, kann ich den Zugang arrangieren.',
    },
    who: {
      eyebrow: 'Für wen das ist',
      title: 'Der Tag verändert sich je nachdem, wer am ersten Abschlag steht.',
      cards: [
        { num: '01', title: 'Der Urlaubsgolfer', text: 'Ein Handicap-Golfer, der möchte, dass sich seine Runde auf Mallorca wirklich besonders anfühlt - nicht wie eine online gebuchte Startzeit mit Handschlag am 18. Grün.' },
        { num: '02', title: 'Die Lücke zwischen Range und Platz', text: 'Golfer, deren Training sich nie ganz auf den Platz überträgt. Das Problem liegt meist eher im Platzmanagement und in Entscheidungen als im Schwung selbst.' },
        { num: '03', title: 'Die Executive-Gruppe', text: 'Unternehmensgruppen, Führungskräfte auf Inselbesuch und alle, die einen hochwertigen, komplett organisierten Tag mit echter Golfkompetenz möchten.' },
        { num: '04', title: 'Der Anfänger', text: 'Freizeitgolfer, die fachkundige Begleitung ohne Einschüchterung möchten. Der Tag dreht sich nicht um die Scorekarte, sondern um Vertrauen und Freude am Spiel.' },
        { num: '05', title: 'Der Inselgolfer', text: 'Auf Mallorca ansässig und auf der Suche nach regelmäßiger Arbeit mit einem Professional, der dieselben Plätze tatsächlich spielt. Ernsthafte, messbare Verbesserung über Zeit.' },
        { num: '06', title: 'Alle, die mehr wollen', text: 'Die einzige echte Voraussetzung ist der Wunsch nach einem besseren Golftag als dem üblichen Besuchersetup. Alles andere kann um Sie herum angepasst werden.' },
      ],
    },
    testimonials: {
      eyebrow: 'Was Golfer sagen',
      title: 'In ihren eigenen Worten.',
      items: [
        { text: 'Mit Andy zu spielen war ein großartiges Erlebnis. Er hat ein außergewöhnliches Gespür für das Spiel und vermittelt seine Beobachtungen auf eine subtile und zugleich einfühlsame Art. Nach nur 18 Löchern habe ich gemerkt, dass mein Potenzial höher liegt, als ich dachte. Sogar beim Putten haben ein paar einfache Hinweise sofort etwas verändert.', author: 'Jo' },
        { text: 'Am meisten hat mir gefallen, wie wohl ich mich mit ihm auf dem Platz gefühlt habe. Zu verstehen, welche Überlegungen hinter jedem Schlag stehen, hat meine Entscheidungen enorm verbessert. Ich würde den Tag Freundesgruppen, Urlaubern und auch Familien empfehlen, die Golf gemeinsam entdecken möchten.', author: 'Finlay' },
        { text: 'Andy hat komplett verändert, wie ich über Platzmanagement denke. Ich habe jahrelang gespielt, ohne die Entscheidungen hinter jedem Schlag wirklich zu verstehen. Nach 18 Löchern mit ihm in Son Gual spielte ich dort mein bestes Ergebnis und verstand endlich auch warum. Vom Briefing bis zum Mittagessen war der ganze Tag genau so, wie ein großartiger Golftag sein sollte.', author: 'Adam' },
      ],
    },
    packages: {
      eyebrow: 'Erlebnisse & Pakete',
      title: 'Drei Wege, den Tag zu gestalten.',
      body: 'Alle drei Optionen sind privat und alle drei beinhalten dieselbe Qualität an Begleitung auf dem Platz. Der Unterschied liegt darin, wie viel Sie rund um das Golfspiel organisiert haben möchten.',
      tiers: [],
    },
    finalCta: {
      eyebrow: 'Bereit, Mallorca richtig zu spielen?',
      title: 'Melden Sie sich, und ich helfe Ihnen, die passende Version des Tages zu wählen.',
      body: 'Nennen Sie mir Ihre Reisedaten, Ihr Handicap und was Sie sich von dem Tag wünschen. Ich melde mich persönlich innerhalb von 24 Stunden mit einer klaren Empfehlung zurück.',
      primaryCta: 'Ihren Tag buchen →',
      primaryHref: '/de/contact',
      secondaryCta: 'Die Plätze entdecken',
      secondaryHref: '/de/golf-courses',
      tertiaryCta: 'Vor-Runden-Fragebogen →',
    },
  },
  es: {
    locale: 'es',
    hero: {
      homeHref: '/es',
      breadcrumbHome: 'Inicio',
      breadcrumbCurrent: 'Jugar con un Pro',
      eyebrow: 'Días de golf privados · Mallorca',
      title: 'Un día de golf privado en Mallorca.',
      body: 'Un día privado en uno de los mejores campos de Mallorca, conmigo jugando a su lado y acompañándole de forma natural durante la vuelta. Funciona para buenos jugadores, golfistas de vacaciones y cualquiera que quiera un día mejor que un simple tee time.',
      primaryCta: 'Reserve su día →',
      primaryHref: '/es/contact',
      secondaryCta: 'Ver paquetes',
    },
    day: {
      eyebrow: 'Qué incluye el día',
      title: 'Antes de que llegue, ya sé en qué tengo que fijarme.',
      paragraphs: [
        'Antes de llegar, rellena un cuestionario breve. Me cuenta qué le frustra, dónde está la distancia entre su juego de prácticas y sus resultados, y cómo sería para usted un gran día. Cuando llegamos al primer tee, yo ya sé en qué tengo que fijarme.',
        'Durante la vuelta, el coaching se integra de forma natural. No como un comentario constante. Más bien como la observación adecuada en el momento en el que todavía puede cambiar el hoyo, el resultado o la decisión que tiene delante.',
      ],
      quote: 'La mayoría de los golfistas se van jugando mejor, con más claridad y entendiendo por qué. Esa última parte es la que suele quedarse.',
      questionnaireEyebrow: '¿Ya ha reservado?',
      questionnaireTitle: 'Complete su cuestionario pre-ronda →',
      questionnaireBody: 'Solo lleva 3 minutos. Me ayuda a adaptar el día a usted antes de llegar al primer tee.',
    },
    included: {
      title: 'Qué está incluido',
      items: [
        ['Elección del campo', 'Ajustada a su juego, hándicap y a lo que quiere del día'],
        ['Hora de salida', 'Reservada y completamente gestionada - usted solo tiene que presentarse'],
        ['Briefing previo', 'Qué esperar del campo y en qué conviene fijarse'],
        ['18 hoyos junto a Andy', 'No solo caminar al lado - jugar de verdad como su compañero'],
        ['Coaching en el campo', 'Gestión del campo, elección de palos y toma de decisiones'],
        ['Debrief después de la vuelta', 'Qué mejoró, en qué seguir trabajando, claro y honesto'],
      ],
    },
    courses: {
      eyebrow: '¿Qué campo?',
      title: 'El campo siempre se elige con usted.',
      body: 'Un grupo con principiantes, una media jornada más corta o una familia con juniors: para cada caso hay campos que funcionan mejor, y le diré con total honestidad cuál tiene más sentido. Algunos son solo para socios y no se pueden reservar de forma independiente. Si quiere jugar uno de ellos, yo puedo organizar el acceso.',
    },
    who: {
      eyebrow: 'Para quién es',
      title: 'El día cambia según quién esté en el primer tee.',
      cards: [
        { num: '01', title: 'El golfista de vacaciones', text: 'Un jugador con hándicap que quiere que su vuelta en Mallorca se sienta especial de verdad, no como un tee time reservado online y un apretón de manos en el hoyo 18.' },
        { num: '02', title: 'La distancia entre prácticas y campo', text: 'Golfistas cuyo juego de prácticas nunca termina de aparecer en el campo. El problema suele estar más en la gestión y en la toma de decisiones que en el propio swing.' },
        { num: '03', title: 'El grupo ejecutivo', text: 'Grupos de empresa, directivos que visitan la isla y cualquiera que busque un día premium, totalmente organizado y con auténtico criterio de golf.' },
        { num: '04', title: 'El principiante', text: 'Golfistas ocasionales que quieren compañía experta sin sentirse intimidados. El día no se construye alrededor de la tarjeta, sino alrededor de la confianza y del disfrute.' },
        { num: '05', title: 'El golfista residente', text: 'Vive en la isla y busca trabajar con regularidad con un profesional que realmente juega los mismos campos. Mejora seria y medible con el tiempo.' },
        { num: '06', title: 'Cualquiera que quiera algo más', text: 'El único requisito real es querer un día de golf mejor que el montaje estándar para visitantes. Todo lo demás se puede adaptar a usted.' },
      ],
    },
    testimonials: {
      eyebrow: 'Lo que dicen los golfistas',
      title: 'Con sus propias palabras.',
      items: [
        { text: 'Jugar con Andy fue una experiencia magnífica. Tiene una sensibilidad poco común para el juego y transmite sus observaciones de una forma sutil y cercana. Después de solo 18 hoyos, sentí que mi techo era más alto de lo que pensaba. Incluso con el putter, un par de ideas sencillas marcaron una diferencia inmediata.', author: 'Jo' },
        { text: 'Lo que más disfruté fue lo cómodo que me hizo sentir en el campo. Entender qué cálculos hay detrás de cada golpe mejoró muchísimo mi toma de decisiones. Recomendaría este día a grupos de amigos, a gente de vacaciones o incluso a familias que quieran iniciarse juntas en el golf.', author: 'Finlay' },
        { text: 'Andy cambió por completo mi forma de entender la gestión del campo. Llevaba años jugando sin comprender de verdad las decisiones que hay detrás de cada golpe. Después de 18 hoyos con él en Son Gual, hice allí mi mejor resultado y por fin entendí por qué. Desde el briefing hasta la comida, todo el día fue exactamente lo que debería ser una gran jornada de golf.', author: 'Adam' },
      ],
    },
    packages: {
      eyebrow: 'Experiencias y paquetes',
      title: 'Tres formas de hacerlo.',
      body: 'Las tres opciones son privadas y las tres incluyen el mismo nivel de compañía y criterio en el campo. La diferencia está en cuánto quiere construir el día alrededor del golf.',
      tiers: [],
    },
    finalCta: {
      eyebrow: '¿Listo para jugar Mallorca como se debe?',
      title: 'Escríbame y le ayudaré a elegir la versión adecuada del día.',
      body: 'Dígame sus fechas, su hándicap y qué quiere sacar de la jornada. Le responderé personalmente en menos de 24 horas con una recomendación clara.',
      primaryCta: 'Reserve su día →',
      primaryHref: '/es/contact',
      secondaryCta: 'Explorar los campos',
      secondaryHref: '/es/golf-courses',
      tertiaryCta: 'Cuestionario pre-ronda →',
    },
  },
  fr: {
    locale: 'fr',
    hero: {
      homeHref: '/fr',
      breadcrumbHome: 'Accueil',
      breadcrumbCurrent: 'Jouer avec un pro',
      eyebrow: 'Journées de golf privées · Majorque',
      title: 'Une journée de golf privée à Majorque.',
      body: "Une journée privée sur l'un des meilleurs parcours de Majorque, avec moi à vos côtés pendant le tour et un coaching intégré naturellement tout au long de la partie. Cela convient aux bons joueurs, aux golfeurs en vacances et à tous ceux qui veulent mieux qu'un simple tee time.",
      primaryCta: 'Réserver votre journée →',
      primaryHref: '/fr/contact',
      secondaryCta: 'Voir les formules',
    },
    day: {
      eyebrow: 'Ce que la journée comprend',
      title: 'Avant votre arrivée, je sais déjà ce que je dois observer.',
      paragraphs: [
        "Avant votre arrivée, vous remplissez un court questionnaire. Il me dit ce qui vous frustre, où se situe l'écart entre votre jeu au practice et vos scores, et ce qu'une bonne journée représenterait vraiment pour vous. Quand nous arrivons au premier départ, je sais déjà ce que je dois observer.",
        "Pendant la ronde, le coaching s'intègre naturellement. Pas comme un commentaire permanent. Plutôt comme la bonne observation au moment où elle peut encore changer le trou, le score ou la décision que vous avez devant vous.",
      ],
      quote: "La plupart des golfeurs repartent en jouant mieux, avec plus de clarté et en comprenant pourquoi. C'est généralement cette dernière partie qui reste.",
      questionnaireEyebrow: 'Déjà réservé ?',
      questionnaireTitle: 'Remplissez votre questionnaire pré-parcours →',
      questionnaireBody: "Cela prend 3 minutes. Il m'aide à adapter la journée avant même que nous arrivions au premier départ.",
    },
    included: {
      title: 'Ce qui est inclus',
      items: [
        ['Choix du parcours', 'Adapté à votre jeu, votre handicap et à ce que vous attendez de la journée'],
        ['Heure de départ', "Réservée et entièrement gérée - vous n'avez plus qu'à arriver"],
        ['Briefing avant la ronde', "Ce qu'il faut attendre du parcours et ce qu'il faudra regarder"],
        ["18 trous aux côtés d'Andy", 'Pas seulement marcher à côté - vraiment jouer ensemble'],
        ['Coaching sur le parcours', 'Gestion du parcours, choix des clubs et prise de décision'],
        ['Débrief après la ronde', "Ce qui a progressé, ce qu'il faut travailler ensuite - clair et honnête"],
      ],
    },
    courses: {
      eyebrow: 'Quel parcours ?',
      title: 'Le parcours est toujours choisi avec vous.',
      body: "Un groupe avec des débutants, une demi-journée plus courte ou une famille avec des juniors : selon le cas, certains parcours fonctionnent mieux que d'autres, et je vous dirai honnêtement lequel a le plus de sens. Certains sont réservés aux membres et ne peuvent pas être réservés de manière indépendante. Si vous voulez y jouer, je peux organiser cet accès.",
    },
    who: {
      eyebrow: 'Pour qui est-ce ?',
      title: 'La journée change selon la personne qui se trouve au premier départ.',
      cards: [
        { num: '01', title: 'Le golfeur en vacances', text: "Un joueur indexé qui veut que sa ronde à Majorque ait une vraie saveur particulière, pas qu'elle ressemble à un simple départ réservé en ligne avec une poignée de main au 18." },
        { num: '02', title: "L'écart practice / parcours", text: "Des golfeurs dont le jeu d'entraînement ne se retrouve jamais complètement sur le parcours. Le problème vient souvent davantage de la stratégie et des décisions que du swing lui-même." },
        { num: '03', title: 'Le groupe dirigeant', text: "Des groupes d'entreprise, des dirigeants de passage sur l'île et toute personne qui veut une journée premium, entièrement organisée, avec un vrai regard de golf." },
        { num: '04', title: 'Le débutant', text: "Des golfeurs occasionnels qui veulent une présence experte sans intimidation. La journée n'est pas construite autour de la carte de score, mais autour de la confiance et du plaisir." },
        { num: '05', title: "Le golfeur résident", text: "Basé sur l'île et à la recherche d'un travail régulier avec un professionnel qui joue réellement les mêmes parcours. Une progression sérieuse et mesurable dans le temps." },
        { num: '06', title: 'Tous ceux qui veulent plus', text: "La seule vraie condition est de vouloir mieux qu'une journée de golf standard pour visiteurs. Tout le reste peut être adapté autour de vous." },
      ],
    },
    testimonials: {
      eyebrow: 'Ce que disent les golfeurs',
      title: 'Dans leurs propres mots.',
      items: [
        { text: "Jouer avec Andy a été une expérience remarquable. Il a une qualité d'observation rare et il transmet ses remarques d'une façon à la fois subtile et très juste. En seulement 18 trous, j'ai senti que mon potentiel était plus haut que je ne le pensais. Même au putting, quelques conseils simples ont immédiatement changé quelque chose.", author: 'Jo' },
        { text: "Ce que j'ai le plus apprécié, c'est le confort qu'il m'a donné sur le parcours. Comprendre les calculs derrière chaque coup a énormément amélioré ma prise de décision. Je recommanderais cette journée à des groupes d'amis, à des golfeurs en vacances et même à des familles qui veulent découvrir le golf ensemble.", author: 'Finlay' },
        { text: "Andy a complètement changé ma manière de penser la gestion du parcours. J'avais joué pendant des années sans vraiment comprendre les décisions derrière chaque coup. Après 18 trous avec lui à Son Gual, j'y ai signé mon meilleur score et j'ai enfin compris pourquoi. Du briefing jusqu'au déjeuner, la journée entière correspondait exactement à ce qu'un grand jour de golf devrait être.", author: 'Adam' },
      ],
    },
    packages: {
      eyebrow: 'Expériences et formules',
      title: 'Trois façons de vivre la journée.',
      body: "Les trois options sont privées et les trois incluent le même niveau d'accompagnement sur le parcours. Ce qui change, c'est le degré d'organisation que vous voulez autour du golf.",
      tiers: [],
    },
    finalCta: {
      eyebrow: 'Prêt à jouer Majorque comme il faut ?',
      title: 'Prenez contact et je vous aiderai à choisir la bonne version de la journée.',
      body: 'Dites-moi vos dates, votre index et ce que vous attendez de cette journée. Je vous répondrai personnellement sous 24 heures avec une recommandation claire.',
      primaryCta: 'Réserver votre journée →',
      primaryHref: '/fr/contact',
      secondaryCta: 'Explorer les parcours',
      secondaryHref: '/fr/golf-courses',
      tertiaryCta: 'Questionnaire pré-parcours →',
    },
  },
  nl: {
    locale: 'nl',
    hero: {
      homeHref: '/nl',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Spelen met een pro',
      eyebrow: 'Privé golfdagen · Mallorca',
      title: 'Een privé golfdag op Mallorca.',
      body: 'Een privé dag op een van de beste banen van Mallorca, met mij naast u in de flight en coaching die op een natuurlijke manier door de ronde heen loopt. Dit past bij goede golfers, vakantiegolfers en iedereen die meer wil dan een standaard starttijd.',
      primaryCta: 'Reserveer uw dag →',
      primaryHref: '/nl/contact',
      secondaryCta: 'Bekijk pakketten',
    },
    day: {
      eyebrow: 'Wat de dag inhoudt',
      title: 'Voordat u arriveert, weet ik al waar ik op moet letten.',
      paragraphs: [
        'Voor uw aankomst vult u een korte vragenlijst in. Die laat me zien wat u op dit moment frustreert, waar de kloof zit tussen uw rangespel en uw scores, en hoe een echt goede dag er voor u uit zou zien. Tegen de tijd dat we bij de eerste tee staan, weet ik al waar ik op moet letten.',
        'Tijdens de ronde wordt de coaching op een natuurlijke manier verweven. Geen doorlopend commentaar, maar de juiste observatie op het moment waarop die nog de hole, de score of de beslissing voor u kan veranderen.',
      ],
      quote: 'De meeste golfers vertrekken met beter spel, meer duidelijkheid en een beter begrip van waarom. Dat laatste is meestal het deel dat blijft hangen.',
      questionnaireEyebrow: 'Al geboekt?',
      questionnaireTitle: 'Vul uw pre-ronde vragenlijst in →',
      questionnaireBody: 'Kost 3 minuten. Helpt me de dag op u af te stemmen voordat we bij de eerste tee komen.',
    },
    included: {
      title: 'Wat is inbegrepen',
      items: [
        ['Baanselectie', 'Afgestemd op uw spel, handicap en wat u uit de dag wilt halen'],
        ['Starttijd', 'Vastgelegd en volledig geregeld - u hoeft alleen op te dagen'],
        ['Briefing voor de ronde', 'Wat u van de baan kunt verwachten en waar u op moet letten'],
        ['18 holes naast Andy', 'Niet alleen meelopen - echt samen spelen'],
        ['Coaching tijdens de ronde', 'Baanmanagement, shotselectie en besluitvorming'],
        ['Nabespreking', 'Wat beter werd, waar u aan moet werken - helder en eerlijk'],
      ],
    },
    courses: {
      eyebrow: 'Welke baan?',
      title: 'De baan wordt altijd samen met u gekozen.',
      body: 'Een groep met beginners, een kortere halve dag of een gezin met juniors: voor elk van die situaties zijn er banen die beter passen, en ik zal eerlijk zeggen welke het meest logisch is. Sommige zijn alleen voor leden en niet zelfstandig te boeken. Als u daar wilt spelen, kan ik de toegang regelen.',
    },
    who: {
      eyebrow: 'Voor wie dit is',
      title: 'De dag verandert afhankelijk van wie er op de eerste tee staat.',
      cards: [
        { num: '01', title: 'De vakantiegolfer', text: 'Een golfer met handicap die wil dat zijn ronde op Mallorca echt memorabel voelt, niet als een online geboekte starttijd met een handdruk op de 18e green.' },
        { num: '02', title: 'De kloof tussen range en baan', text: 'Golfers van wie het rangespel zich nooit helemaal vertaalt naar de baan. Het probleem zit meestal meer in baanmanagement en beslissingen dan in de swing zelf.' },
        { num: '03', title: 'De executive-groep', text: 'Bedrijfsgroepen, executives op het eiland en iedereen die een premium, volledig verzorgde dag wil met echte golfkennis erbij.' },
        { num: '04', title: 'De beginner', text: 'Recreatieve golfers die deskundig gezelschap willen zonder zich geïntimideerd te voelen. De dag draait niet om de scorekaart, maar om vertrouwen en plezier.' },
        { num: '05', title: 'De eilandgolfer', text: 'Op het eiland gevestigd en op zoek naar regelmatig werk met een professional die dezelfde banen daadwerkelijk speelt. Serieuze, meetbare verbetering in de tijd.' },
        { num: '06', title: 'Iedereen die meer wil', text: 'De enige echte voorwaarde is dat u een betere golfdag wilt dan de standaard bezoekersopzet. De rest kan om u heen worden aangepast.' },
      ],
    },
    testimonials: {
      eyebrow: 'Wat golfers zeggen',
      title: 'In hun eigen woorden.',
      items: [
        { text: 'Golfen met Andy was een geweldige ervaring. Hij heeft een uitzonderlijk oog voor het spel en brengt zijn observaties op een subtiele en empathische manier. Na slechts 18 holes voelde ik dat mijn plafond hoger lag dan ik dacht. Zelfs bij het putten maakten een paar simpele aanwijzingen direct verschil.', author: 'Jo' },
        { text: 'Wat ik het meest waardeerde, was hoe comfortabel hij me op de baan liet voelen. Inzicht krijgen in de berekeningen achter elke slag heeft mijn besluitvorming enorm verbeterd. Ik zou deze dag aanbevelen aan vriendengroepen, vakantiegangers en zelfs gezinnen die samen golf willen ontdekken.', author: 'Finlay' },
        { text: 'Andy heeft volledig veranderd hoe ik over baanmanagement denk. Ik speelde al jaren zonder echt te begrijpen welke beslissingen achter elke slag zitten. Na 18 holes met hem op Son Gual liep ik daar weg met mijn beste score ooit en begreep ik eindelijk waarom. Van briefing tot lunch voelde de hele dag precies zoals een geweldige golfdag zou moeten voelen.', author: 'Adam' },
      ],
    },
    packages: {
      eyebrow: 'Ervaringen en pakketten',
      title: 'Drie manieren om de dag op te bouwen.',
      body: 'Alle drie de opties zijn privé en alle drie geven ze u hetzelfde niveau van begeleiding op de baan. Het verschil zit in hoeveel u rond het golf wilt laten organiseren.',
      tiers: [],
    },
    finalCta: {
      eyebrow: 'Klaar om Mallorca goed te spelen?',
      title: 'Neem contact op en ik help u de juiste versie van de dag te kiezen.',
      body: 'Laat me uw data, handicap en wensen voor de dag weten. Ik kom persoonlijk binnen 24 uur bij u terug met een duidelijke aanbeveling.',
      primaryCta: 'Reserveer uw dag →',
      primaryHref: '/nl/contact',
      secondaryCta: 'Ontdek de banen',
      secondaryHref: '/nl/golf-courses',
      tertiaryCta: 'Pre-ronde vragenlijst →',
    },
  },
  sv: {
    locale: 'sv',
    hero: {
      homeHref: '/sv',
      breadcrumbHome: 'Hem',
      breadcrumbCurrent: 'Spela med ett proffs',
      eyebrow: 'Privata golfdagar · Mallorca',
      title: 'En privat golfdag på Mallorca.',
      body: 'En privat dag på en av Mallorcas bästa banor, där jag spelar vid din sida och coachar naturligt under rundan. Det passar skickliga golfare, semester-golfare och alla som vill ha något bättre än en vanlig starttid.',
      primaryCta: 'Boka din dag →',
      primaryHref: '/sv/contact',
      secondaryCta: 'Se paket',
    },
    day: {
      eyebrow: 'Vad dagen innehåller',
      title: 'Innan du anländer vet jag redan vad jag ska titta efter.',
      paragraphs: [
        'Innan du kommer fyller du i ett kort frågeformulär. Det visar vad som frustrerar dig, var glappet finns mellan ditt rangespel och dina scorer, och hur en riktigt bra dag skulle se ut för dig. När vi står på första tee vet jag redan vad jag ska titta efter.',
        'Under rundan vävs coachingen in på ett naturligt sätt. Inte som en ständig kommentar. Mer som rätt observation i det ögonblick när den fortfarande kan förändra hålet, scoren eller beslutet framför dig.',
      ],
      quote: 'De flesta golfare går därifrån och spelar bättre, känner sig klarare och förstår varför. Just den sista delen är oftast det som stannar kvar.',
      questionnaireEyebrow: 'Redan bokat?',
      questionnaireTitle: 'Fyll i ditt frågeformulär inför rundan →',
      questionnaireBody: 'Tar 3 minuter. Hjälper mig att anpassa dagen efter dig innan vi når första tee.',
    },
    included: {
      title: 'Det här ingår',
      items: [
        ['Val av bana', 'Matchad efter ditt spel, handicap och vad du vill få ut av dagen'],
        ['Starttid', 'Säkrad och helt ordnad - du behöver bara dyka upp'],
        ['Briefing före rundan', 'Vad du kan förvänta dig av banan och vad du bör hålla utkik efter'],
        ['18 hål vid Andys sida', 'Inte bara gå bredvid - faktiskt spela tillsammans'],
        ['Coaching på banan', 'Banförvaltning, klubbval och beslutsfattande'],
        ['Genomgång efter rundan', 'Vad som blev bättre, vad du ska jobba vidare med - tydligt och ärligt'],
      ],
    },
    courses: {
      eyebrow: 'Vilken bana?',
      title: 'Banan väljs alltid tillsammans med dig.',
      body: 'En grupp med nybörjare, en kortare halvdag eller en familj med juniorer: för allt detta finns det banor som passar bättre, och jag säger ärligt vilken som är mest rätt. Vissa är endast tillgängliga för medlemmar och går inte att boka självständigt. Om du vill spela där kan jag ordna tillgången.',
    },
    who: {
      eyebrow: 'Vem det här passar för',
      title: 'Dagen förändras beroende på vem som står på första tee.',
      cards: [
        { num: '01', title: 'Semester-golfaren', text: 'En handicapgolfare som vill att rundan på Mallorca verkligen ska kännas speciell, inte som en starttid bokad online med ett handslag på 18:e green.' },
        { num: '02', title: 'Glappet mellan range och bana', text: 'Golfare vars övningsspel aldrig riktigt följer med ut på banan. Problemet handlar oftast mer om banstrategi och beslut än om själva svingen.' },
        { num: '03', title: 'Executive-gruppen', text: 'Företagsgrupper, chefer på besök på ön och alla som vill ha en premiumdag som är fullt arrangerad och bygger på riktig golfkunskap.' },
        { num: '04', title: 'Nybörjaren', text: 'Vardagliga golfare som vill ha expertstöd utan att känna sig pressade. Dagen handlar inte om scorekortet utan om självförtroende och spelglädje.' },
        { num: '05', title: 'Den bofaste golfaren', text: 'Bor på ön och söker regelbundet arbete med en professional som faktiskt spelar samma banor. Seriös och mätbar förbättring över tid.' },
        { num: '06', title: 'Alla som vill ha mer', text: 'Det enda verkliga kravet är att vilja ha en bättre golfdag än den vanliga besöksupplägget. Resten kan anpassas runt dig.' },
      ],
    },
    testimonials: {
      eyebrow: 'Vad golfare säger',
      title: 'Med egna ord.',
      items: [
        { text: 'Att spela med Andy var en fantastisk upplevelse. Han har ett ovanligt skarpt öga för spelet och förmedlar sina observationer på ett subtilt och varmt sätt. Efter bara 18 hål kände jag att mitt tak låg högre än jag trodde. Till och med i puttningen gjorde några enkla råd direkt skillnad.', author: 'Jo' },
        { text: 'Det jag uppskattade mest var hur bekväm han fick mig att känna mig ute på banan. Att förstå vilka beräkningar som ligger bakom varje slag förbättrade mitt beslutsfattande enormt. Jag skulle rekommendera den här dagen till kompisgäng, semester-golfare och till och med familjer som vill upptäcka golf tillsammans.', author: 'Finlay' },
        { text: 'Andy förändrade helt hur jag tänker kring banstrategi. Jag hade spelat i åratal utan att verkligen förstå besluten bakom varje slag. Efter 18 hål med honom på Son Gual gick jag därifrån med mitt bästa resultat där och förstod äntligen varför. Från briefing till lunch kändes hela dagen precis som en riktigt stor golfdag ska göra.', author: 'Adam' },
      ],
    },
    packages: {
      eyebrow: 'Upplevelser och paket',
      title: 'Tre sätt att lägga upp dagen.',
      body: 'Alla tre alternativen är privata och alla tre ger samma nivå av sällskap och expertis på banan. Skillnaden ligger i hur mycket du vill bygga dagen runt själva golfen.',
      tiers: [],
    },
    finalCta: {
      eyebrow: 'Redo att spela Mallorca på rätt sätt?',
      title: 'Hör av dig så hjälper jag dig att välja rätt version av dagen.',
      body: 'Berätta vilka datum du har, vilket handicap du spelar på och vad du vill få ut av dagen. Jag återkommer personligen inom 24 timmar med en tydlig rekommendation.',
      primaryCta: 'Boka din dag →',
      primaryHref: '/sv/contact',
      secondaryCta: 'Utforska banorna',
      secondaryHref: '/sv/golf-courses',
      tertiaryCta: 'Frågeformulär inför rundan →',
    },
  },
  zh: {
    locale: 'zh',
    hero: {
      homeHref: '/zh',
      breadcrumbHome: '首页',
      breadcrumbCurrent: '与职业球手同场',
      eyebrow: '私人高尔夫体验 · 马略卡',
      title: '在马略卡的一天私人高尔夫体验。',
      body: '这是一整天的私人高尔夫体验，地点会选在马略卡最好的球场之一。我会全程与您同组下场，并把指导自然地放进整轮球里。它适合有一定水平的球手、来度假的球手，也适合任何想拥有比普通 tee time 更好一天的人。',
      primaryCta: '预订您的高尔夫日 →',
      primaryHref: '/zh/contact',
      secondaryCta: '查看方案',
    },
    day: {
      eyebrow: '这一天包含什么',
      title: '在您到达之前，我就已经知道该留意什么。',
      paragraphs: [
        '在您到达之前，您会先填写一份简短问卷。它会告诉我，最近什么最让您困扰，您的练习场表现和实际成绩之间的差距在哪里，以及怎样的一天才算真正对您有意义。等我们走到第一洞发球台时，我已经知道该留意什么。',
        '整轮球里，指导会自然地融入其中。不是不停地点评，而是在还能够改变这一洞、这一杆或您眼前那个决定的时刻，给出最准确的观察。',
      ],
      quote: '大多数球手离开时都会打得更好、思路更清楚，也更明白为什么会这样。通常最能留下来的，就是这一点。',
      questionnaireEyebrow: '已经预订？',
      questionnaireTitle: '填写赛前问卷 →',
      questionnaireBody: '只需 3 分钟。能帮助我在到第一洞之前，就把这一天更准确地调整到适合您。',
    },
    included: {
      title: '包含内容',
      items: [
        ['球场选择', '根据您的球技、差点和这一天的期待来匹配'],
        ['开球时间', '已预订并全程安排妥当 - 您只需要准时出现'],
        ['赛前简报', '提前了解球场特点以及当天该注意的重点'],
        ['与 Andy 同打 18 洞', '不只是陪着走，而是真正一起下场'],
        ['球场实战指导', '球场管理、选杆与临场决策'],
        ['赛后复盘', '哪些地方变好了，接下来该练什么 - 清楚而直接'],
      ],
    },
    courses: {
      eyebrow: '打哪座球场？',
      title: '球场一定是和您一起选出来的。',
      body: '如果是一组里有初学者、只打半天，或是一家人带着孩子一起下场，总会有更适合的球场。我会很诚实地告诉您哪一个最合适。有些是会员制球场，不能自己独立预订。如果您想打那类球场，我可以帮您安排。',
    },
    who: {
      eyebrow: '适合哪些人',
      title: '这一天会根据站在第一洞的人而改变。',
      cards: [
        { num: '01', title: '度假型球手', text: '有差点、会打球，也希望这轮马略卡高尔夫真的值得记住，而不是像普通线上预订一个 tee time 那样匆匆结束。' },
        { num: '02', title: '练习场和球场脱节的人', text: '练习场里打得不错，但一到球场就发挥不出来。问题通常不在挥杆本身，而在球场管理和临场决策。' },
        { num: '03', title: '商务或高管团体', text: '企业团体、来岛上的高管，以及任何想要一整天高规格、有人全程安排并带着真正高尔夫判断的人。' },
        { num: '04', title: '初学者', text: '想要有专业人士陪伴，但又不想有压力的休闲球手。重点不在记分卡，而在信心和享受。' },
        { num: '05', title: '常驻岛上球手', text: '住在岛上，想和真正打这些球场的职业教练长期合作，追求持续而可衡量的进步。' },
        { num: '06', title: '任何想要更多的人', text: '真正唯一的前提，是您想要比一般游客安排更好的一天。其他一切都可以围绕您来调整。' },
      ],
    },
    testimonials: {
      eyebrow: '球手怎么说',
      title: '他们自己的原话。',
      items: [
        { text: '和 Andy 一起打球是一段非常出色的体验。他对高尔夫有非常少见的洞察力，而且表达方式细腻、自然，也让人放松。仅仅 18 洞之后，我就感觉自己的上限比想象中更高。连推杆上，一两个简单建议都马上起了作用。', author: 'Jo' },
        { text: '我最喜欢的是，他让我在球场上始终感觉很自在。理解每一杆背后的计算和思路，极大提升了我的决策能力。我会把这一天推荐给朋友团体、度假球手，甚至想一起体验高尔夫的家庭。', author: 'Finlay' },
        { text: 'Andy 彻底改变了我对球场管理的理解。过去我打了很多年球，却并没有真正明白每一杆背后的决定。和他在 Son Gual 打完 18 洞后，我在那里打出了自己的最好成绩，也终于明白了原因。从赛前简报到午餐复盘，整整一天都像一场真正高水平的高尔夫体验该有的样子。', author: 'Adam' },
      ],
    },
    packages: {
      eyebrow: '体验方案',
      title: '三种安排这一天的方式。',
      body: '三种方案都是私人的，也都包含同样水准的球场陪打与判断。真正的区别，在于您想让这一天围绕高尔夫安排到什么程度。',
      tiers: [],
    },
    finalCta: {
      eyebrow: '准备好用正确的方式打马略卡了吗？',
      title: '联系我，我会帮您选出最适合的那一种安排。',
      body: '告诉我您的日期、差点，以及您希望这一天得到什么。我会在 24 小时内亲自回复，并给出清楚的建议。',
      primaryCta: '预订您的高尔夫日 →',
      primaryHref: '/zh/contact',
      secondaryCta: '查看球场',
      secondaryHref: '/zh/golf-courses',
      tertiaryCta: '赛前问卷 →',
    },
  },
}

function normalizeWhoCards(cards = []) {
  return cards.map((card, index) => ({
    num: card.num || String(index + 1).padStart(2, '0'),
    title: card.title,
    text: card.text || card.body || '',
  }))
}

function mergeDeep(base, override) {
  if (Array.isArray(base) || Array.isArray(override)) {
    return override === undefined ? base : override
  }
  if (base && typeof base === 'object' && override && typeof override === 'object') {
    const output = { ...base }
    for (const key of Object.keys(override)) {
      output[key] = mergeDeep(base[key], override[key])
    }
    return output
  }
  return override === undefined ? base : override
}

const PLAY_WITH_A_PRO_AUDIT_OVERRIDES = {
  de: {
    hero: {
      body: 'Ein Platz. Ein ganzer Tag an der Seite eines PGA Advanced Professionals, der alles organisiert hat. Solo ab €495. Gruppen ab €950. Greenfees zusätzlich, werden bei der Anfrage bestätigt.',
      price: null,
    },
    packages: {
      title: 'Drei Wege, den Tag zu gestalten.',
      body: 'Alle drei sind privat, werden von mir persönlich begleitet und auf einem der besten Plätze der Insel gespielt. Platz, Startzeit und Coaching sind inklusive. Greenfees und Mittagessen werden separat abgerechnet (außer beim Signature-Erlebnis, das alles beinhaltet).',
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'A Day With Andy',
          price: null,
          note: 'Alles inklusive. Greenfee, Mittagessen, der ganze Tag.',
          features: [
            'Platz passend zu Ihrem Spiel und Handicap',
            'Startzeit gesichert und komplett organisiert',
            'Spielplan und Warm-up vor der Runde',
            '18 Löcher an Andys Seite',
            'On-course-Einsichten genau dann, wenn sie noch etwas verändern können',
            'Langes Mittagessen im Clubrestaurant',
            'Greenfee zusätzlich, wird im Gespräch bestätigt',
          ],
          button: 'Anfragen →',
          href: '/de/contact',
          featured: false,
        },
        {
          eyebrow: 'Gruppe',
          name: 'A Day With Andy',
          price: null,
          note: 'Fester Tagessatz für Andy für Gruppen von 2 oder 3. Greenfees werden im Gespräch bestätigt.',
          features: [
            'Platz passend zu Ihrer Gruppe und den Handicaps',
            'Startzeit gesichert und komplett organisiert',
            'Spielplan und Warm-up vor der Runde',
            '18 Löcher an Andys Seite',
            'On-course-Einsichten genau dann, wenn sie noch etwas verändern können',
            'Langes Mittagessen im Clubrestaurant',
            'Bis zu 3 Spieler - ein fester Tagessatz für Andy',
            'Greenfees zusätzlich -wir bestätigen sie im Gespräch',
          ],
          button: 'Anfragen →',
          href: '/de/contact',
          featured: true,
        },
      ],
    },
  },
  es: {
    hero: {
      body: 'Un campo. Un día completo junto a un PGA Advanced Professional que lo ha organizado todo. Solo desde €495. Grupos desde €950. Green fees adicionales, confirmados cuando hablemos.',
      price: null,
    },
    packages: {
      title: 'Tres maneras de vivir el día.',
      body: 'Las tres son privadas, me tienen a mí como anfitrión y se juegan en uno de los mejores campos de la isla. Campo, hora de salida y coaching incluidos. Green fees y almuerzo aparte, salvo en la Experiencia Signature, donde todo está incluido.',
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'A Day With Andy',
          price: null,
          note: 'Green fees adicionales, confirmados cuando hablemos.',
          features: [
            'Campo elegido según su juego y su hándicap',
            'Hora de salida asegurada y completamente gestionada',
            'Plan de juego y calentamiento antes de la vuelta',
            '18 hoyos junto a Andy',
            'Observaciones en el campo cuando todavía pueden cambiar el hoyo',
            'Almuerzo largo en el restaurante del club',
            'Green fee adicional, confirmado cuando hablemos',
          ],
          button: 'Consultar →',
          href: '/es/contact',
          featured: false,
        },
        {
          eyebrow: 'Grupo',
          name: 'A Day With Andy',
          price: null,
          note: 'Tarifa fija del día de Andy para grupos de 2 o 3. Los green fees se confirman cuando hablamos.',
          features: [
            'Campo elegido según el nivel y los hándicaps del grupo',
            'Hora de salida asegurada y completamente gestionada',
            'Plan de juego y calentamiento antes de la vuelta',
            '18 hoyos junto a Andy',
            'Observaciones en el campo cuando todavía pueden cambiar el hoyo',
            'Almuerzo largo en el restaurante del club',
            'Hasta 3 jugadores - una tarifa fija por el día de Andy',
            'Green fees adicionales -se confirman al hablar',
          ],
          button: 'Consultar →',
          href: '/es/contact',
          featured: true,
        },
      ],
    },
  },
  fr: {
    hero: {
      body: "Un parcours. Une journée complète aux côtés d'un PGA Advanced Professional qui a tout organisé. Solo à partir de 594 €. Groupes à partir de 950 €. Green fees en plus.",
      price: null,
    },
    packages: {
      title: 'Trois façons de vivre la journée.',
      body: "Les trois formats sont privés, organisés avec moi et joués sur l'un des plus beaux parcours de l'île. Parcours, heure de départ et coaching inclus. Green fees et déjeuner en sus, sauf pour l'Expérience Signature où tout est compris.",
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'A Day With Andy',
          price: null,
          note: 'Green fees additionnels, confirmés lors de notre conversation.',
          features: [
            'Parcours choisi selon votre jeu et votre index',
            'Heure de départ sécurisée et entièrement gérée',
            'Plan de jeu et échauffement avant la partie',
            "18 trous aux côtés d'Andy",
            'Observations sur le parcours quand elles peuvent encore changer quelque chose',
            'Long déjeuner au restaurant du club',
            'Green fee en plus, confirmé lors de notre échange',
          ],
          button: 'Demander →',
          href: '/fr/contact',
          featured: false,
        },
        {
          eyebrow: 'Groupe',
          name: 'A Day With Andy',
          price: null,
          note: "Tarif fixe pour la journée d'Andy pour les groupes de 2 ou 3. Les green fees sont confirmés ensemble.",
          features: [
            'Parcours choisi selon le niveau et les index du groupe',
            'Heure de départ sécurisée et entièrement gérée',
            'Plan de jeu et échauffement avant la partie',
            "18 trous aux côtés d'Andy",
            'Observations sur le parcours quand elles peuvent encore changer quelque chose',
            'Long déjeuner au restaurant du club',
            "Jusqu'à 3 joueurs - un tarif fixe pour la journée d'Andy",
            'Green fees en plus -confirmés ensemble',
          ],
          button: 'Demander →',
          href: '/fr/contact',
          featured: true,
        },
      ],
    },
  },
  nl: {
    hero: {
      body: 'Eén baan. Een volledige dag naast een PGA Advanced Professional die alles heeft geregeld. Solo vanaf €495. Groepen vanaf €950. Greenfees bijkomend, bevestigd wanneer we spreken.',
      price: null,
    },
    packages: {
      title: 'Drie manieren om de dag te beleven.',
      body: 'Alle drie zijn privé, worden door mij begeleid en gespeeld op een van de beste banen van het eiland. Baan, starttijd en coaching inbegrepen. Greenfees en lunch apart, behalve bij de Signature Experience waar alles is inbegrepen.',
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'A Day With Andy',
          price: null,
          note: 'Greenfees bijkomend, bevestigd wanneer we spreken.',
          features: [
            'Baan gekozen op basis van uw spel en handicap',
            'Starttijd vastgelegd en volledig geregeld',
            'Spelplan en warming-up voor de ronde',
            '18 holes naast Andy',
            'Inzichten op de baan wanneer ze nog echt iets kunnen veranderen',
            'Uitgebreide lunch in het clubrestaurant',
            'Greenfee bijkomend, bevestigd wanneer we spreken',
          ],
          button: 'Aanvragen →',
          href: '/nl/contact',
          featured: false,
        },
        {
          eyebrow: 'Groep',
          name: 'A Day With Andy',
          price: null,
          note: 'Vaste dagprijs voor Andy voor groepen van 2 of 3. Greenfees worden bevestigd wanneer we spreken.',
          features: [
            'Baan gekozen op basis van het niveau en de handicaps van de groep',
            'Starttijd vastgelegd en volledig geregeld',
            'Spelplan en warming-up voor de ronde',
            '18 holes naast Andy',
            'Inzichten op de baan wanneer ze nog echt iets kunnen veranderen',
            'Uitgebreide lunch in het clubrestaurant',
            'Tot 3 spelers - één vaste dagprijs voor Andy',
            'Greenfees extra -bevestigd wanneer we spreken',
          ],
          button: 'Aanvragen →',
          href: '/nl/contact',
          featured: true,
        },
      ],
    },
  },
  sv: {
    hero: {
      body: 'En bana. En hel dag tillsammans med en PGA Advanced Professional som har ordnat allt. Solo från €495. Grupper från €950. Green fees tillkommer, bekräftas när vi pratar.',
      price: null,
    },
    packages: {
      title: 'Tre sätt att lägga upp dagen.',
      body: 'Alla tre alternativen är privata, leds av mig och spelas på en av öns bästa banor. Bana, starttid och coaching ingår. Green fees och lunch tillkommer, utom för Signature-upplevelsen där allt ingår.',
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'A Day With Andy',
          price: null,
          note: 'Green fees tillkommer, bekräftas när vi pratar.',
          features: [
            'Bana vald efter ditt spel och handicap',
            'Starttid säkrad och helt ordnad',
            'Spelplan och uppvärmning före rundan',
            '18 hål vid Andys sida',
            'Insikter på banan när de fortfarande kan förändra hålet',
            'Lång lunch i klubbrestaurangen',
            'Green fee tillkommer, bekräftas när vi pratar',
          ],
          button: 'Förfrågan →',
          href: '/sv/contact',
          featured: false,
        },
        {
          eyebrow: 'Grupp',
          name: 'A Day With Andy',
          price: null,
          note: 'Fast dagspris för Andy för grupper på 2 eller 3. Green fees bekräftas när vi pratar.',
          features: [
            'Bana vald efter gruppens nivå och handicap',
            'Starttid säkrad och helt ordnad',
            'Spelplan och uppvärmning före rundan',
            '18 hål vid Andys sida',
            'Insikter på banan när de fortfarande kan förändra hålet',
            'Lång lunch i klubbrestaurangen',
            'Upp till 3 spelare - ett fast dagspris för Andy',
            'Green fees tillkommer -bekräftas när vi pratar',
          ],
          button: 'Förfrågan →',
          href: '/sv/contact',
          featured: true,
        },
      ],
    },
  },
  zh: {
    hero: {
      body: '一座球场。一整天与一位已经把一切都安排好的 PGA Advanced Professional 同组下场。单人方案 €495 起。小组方案 €950 起。果岭费另计。',
      price: null,
    },
    packages: {
      title: '三种安排这一天的方式。',
      body: '三种方案都是私人的，也都由我亲自陪同，地点会是岛上最好的球场之一。球场、开球时间和指导已包含。果岭费和午餐另计（尊享体验除外，为全包）。',
      tiers: [
        {
          eyebrow: '单人',
          name: 'A Day With Andy',
          price: null,
          note: 'Andy 的单人日费。果岭费另计，沟通后确认。',
          features: [
            '按照您的球技与差点匹配球场',
            '开球时间已预订并安排妥当',
            '赛前计划与热身',
            '与 Andy 同打 18 洞',
            '在真正还来得及改变结果的时候给出场上观察',
            '赛后复盘',
          ],
          button: '立即咨询 →',
          href: '/zh/contact',
          featured: false,
        },
        {
          eyebrow: '小组',
          name: 'A Day With Andy',
          price: null,
          note: '小组（2 或 3 人）按 Andy 的固定日费计价。果岭费另计，并在沟通后确认。',
          features: [
            '按照小组水平与差点匹配球场',
            '开球时间已预订并安排妥当',
            '赛前计划与热身',
            '与 Andy 同打 18 洞',
            '在真正还来得及改变结果的时候给出场上观察',
            '最多 3 位球手 - Andy 收取固定日费',
            '果岭费另计，沟通后确认',
          ],
          button: '立即咨询 →',
          href: '/zh/contact',
          featured: true,
        },
        {
          eyebrow: '尊享体验',
          name: '全天体验',
          price: '€3,000+',
          note: '全部包含：果岭费、午餐、接送及附加项目。Andy 提前与您确认完整行程。',
          features: [
            '球场、开球时间与全程指导',
            '果岭费已包含',
            '球场餐厅悠长午餐已包含',
            '专属接送已包含',
            '球童、摄像或高端球具租借可选',
            '水疗与礼宾服务可选',
          ],
          button: '立即咨询 →',
          href: '/zh/contact',
          featured: false,
        },
      ],
    },
  },
}

const PLAY_WITH_A_PRO_RELOCALIZED_OVERRIDES = {
  de: {
    who: {
      eyebrow: 'Für wen das ist',
      title: 'Der Tag verändert sich je nachdem, wer am ersten Abschlag steht.',
      cards: [
        {
          title: 'Ernsthafte Golfer, die einen unvergesslichen Tag wollen',
          body: 'Sie spielen nicht nur 18 Löcher. Sie spielen mit einem Profi, der den Platz kennt, die Entscheidungen mitdenkt und den Tag richtig aufzieht.',
        },
        {
          title: 'Gruppen, die alles organisiert haben wollen',
          body: 'Paare, Freunde und kleine Unternehmensgruppen, die Mallorca richtig spielen möchten, ohne Tee Times, Transfers oder Mittagessen selbst koordinieren zu müssen.',
        },
      ],
    },
    packages: {
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'Ein Tag mit Andy',
          price: null,
          note: "Andys Tagessatz. Greenfee und Mittagessen sind separat. Buggy und Leihschläger als optionale Zusatzleistungen buchbar, Andy hilft gern bei der Organisation.",
          features: [
            'Platz passend zu Ihrem Spiel und Handicap',
            'Startzeit gesichert und komplett organisiert',
            'Spielplan und Warm-up vor der Runde',
            '18 Löcher an Andys Seite',
            'On-course-Coaching während der Runde',
            'Nachbesprechung nach der Runde',
          ],
          button: 'Anfragen →',
          href: '/de/contact',
          featured: false,
        },
        {
          eyebrow: 'Gruppe',
          name: 'Ein Tag mit Andy',
          price: null,
          note: "Andys fester Tagessatz für 2 oder 3 Golfer. Greenfee und Mittagessen sind separat. Buggy und Leihschläger als optionale Zusatzleistungen buchbar, Andy hilft gern bei der Organisation.",
          features: [
            'Bis zu 3 Spieler, ein fester Tagessatz für Andy',
            'Platz passend zu Ihrer Gruppe und den Handicaps',
            'Startzeit gesichert und komplett organisiert',
            'Spielplan und Warm-up vor der Runde',
            '18 Löcher an Andys Seite',
            'On-course-Coaching während der Runde',
          ],
          button: 'Anfragen →',
          href: '/de/contact',
          featured: true,
        },
        {
          eyebrow: 'Das Signature-Erlebnis',
          name: 'Voller Tag',
          price: '€3.000+',
          note: 'Alles inklusive. Andy bestätigt den vollständigen Tagesplan im Voraus mit Ihnen.',
          features: [
            'Platz, Startzeit und Coaching',
            'Michelin-Mittagessen oder Buchung eines Privatkochs',
            'Eine zweite Coaching-Session nach der Runde ist möglich',
            'Caddie und Premium-Schlägerverleih',
            'Videograf für Highlights und ein persönliches Erinnerungsvideo',
            'Spa, Massage und Zeit zum echten Abschalten nach dem Golf',
            'Private Transfers den ganzen Tag über',
          ],
          button: 'Anfragen →',
          href: '/de/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: 'Suchen Sie nach etwas Größerem?',
        title: 'Ein mehrtägiges Erlebnis, um Sie herum arrangiert.',
        body: 'Zwei oder drei aufeinanderfolgende Tage über Son Gual, Alcanada und weitere Plätze hinweg - mit privaten Transfers, sorgfältig ausgewählter Gastronomie und Zugang zu Plätzen, die die meisten Besucher nicht buchen können.',
        detail: 'Ab €2.000. Schreiben Sie mir mit Ihren Reisedaten, und ich schicke Ihnen einen passenden Vorschlag.',
        button: 'Mehrtägige Reise anfragen →',
        href: '/de/contact',
      },
    },
  },
  es: {
    who: {
      eyebrow: 'Para quién es',
      title: 'El día cambia según quién esté en el primer tee.',
      cards: [
        {
          title: 'Golfistas serios que quieren un día para recordar',
          body: 'No se trata solo de jugar 18 hoyos. Se trata de hacerlo con un profesional que conoce el campo, lee las decisiones del juego y hace que el día fluya.',
        },
        {
          title: 'Grupos que quieren que todo esté organizado',
          body: 'Parejas, amigos y grupos pequeños que quieren jugar Mallorca bien, sin tener que encargarse de horarios, traslados o la reserva del almuerzo.',
        },
      ],
    },
    packages: {
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'Un día con Andy',
          price: null,
          note: 'La tarifa del día de Andy. El green fee y el almuerzo son aparte. Buggy y palos de alquiler disponibles como extras opcionales, Andy puede ayudar a organizar.',
          features: [
            'Campo elegido según su juego y su hándicap',
            'Hora de salida asegurada y completamente gestionada',
            'Plan de juego y calentamiento antes de la vuelta',
            '18 hoyos junto a Andy',
            'Coaching en el campo durante la vuelta',
            'Debrief tras la vuelta',
          ],
          button: 'Consultar →',
          href: '/es/contact',
          featured: false,
        },
        {
          eyebrow: 'Grupo',
          name: 'Un día con Andy',
          price: null,
          note: 'La tarifa fija del día de Andy para 2 o 3 golfistas. El green fee y el almuerzo son aparte. Buggy y palos de alquiler disponibles como extras opcionales, Andy puede ayudar a organizar.',
          features: [
            'Hasta 3 jugadores, una tarifa fija por el día de Andy',
            'Campo elegido según el nivel y los hándicaps del grupo',
            'Hora de salida asegurada y completamente gestionada',
            'Plan de juego y calentamiento antes de la vuelta',
            '18 hoyos junto a Andy',
            'Coaching en el campo durante la vuelta',
          ],
          button: 'Consultar →',
          href: '/es/contact',
          featured: true,
        },
        {
          eyebrow: 'La Experiencia Signature',
          name: 'Día completo',
          price: '€3.000+',
          note: 'Todo incluido. Andy confirma el itinerario completo con usted de antemano.',
          features: [
            'Campo, hora de salida y coaching',
            'Almuerzo en restaurante con estrella Michelin o reserva de chef privado',
            'Posibilidad de una segunda sesión de coaching después de la vuelta',
            'Caddie y opciones de alquiler premium de palos',
            'Videógrafo para capturar momentos y producir un vídeo de recuerdo',
            'Spa, masaje y tiempo para desconectar de verdad después del golf',
            'Traslados privados durante todo el día',
          ],
          button: 'Consultar →',
          href: '/es/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: '¿Busca algo más grande?',
        title: 'Una experiencia de varios días, organizada alrededor de usted.',
        body: 'Dos o tres días consecutivos entre Son Gual, Alcanada y más allá, con traslados privados, una selección cuidada de restaurantes y acceso a campos que la mayoría de los visitantes no puede reservar.',
        detail: 'Desde €2.000. Escríbame con sus fechas y le propondré una opción a su medida.',
        button: 'Consultar un viaje de varios días →',
        href: '/es/contact',
      },
    },
  },
  fr: {
    who: {
      eyebrow: 'Pour qui est-ce fait ?',
      title: 'La journée change selon la personne qui se tient sur le premier tee.',
      cards: [
        {
          title: 'Des golfeurs exigeants qui veulent une journée mémorable',
          body: "Il ne s'agit pas seulement de jouer 18 trous. Il s'agit de jouer avec un professionnel qui connaît le parcours, lit les bonnes décisions et donne au jour tout son rythme.",
        },
        {
          title: 'Des groupes qui veulent que tout soit pris en charge',
          body: "Couples, amis et petits groupes d'entreprise qui veulent jouer Majorque comme il faut, sans gérer eux-mêmes tee times, transferts ou déjeuner.",
        },
      ],
    },
    packages: {
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'Une journée avec Andy',
          price: null,
          note: "Le tarif journée d'Andy. Le green fee et le déjeuner sont en sus. Buggy et clubs de location disponibles en option, Andy peut aider à organiser.",
          features: [
            'Parcours choisi selon votre jeu et votre index',
            'Heure de départ sécurisée et entièrement gérée',
            'Plan de jeu et échauffement avant la partie',
            "18 trous aux côtés d'Andy",
            'Coaching sur le parcours pendant la partie',
            'Débrief après la partie',
          ],
          button: 'Demander →',
          href: '/fr/contact',
          featured: false,
        },
        {
          eyebrow: 'Groupe',
          name: 'Une journée avec Andy',
          price: null,
          note: "Le tarif fixe d'Andy pour 2 ou 3 golfeurs. Le green fee et le déjeuner sont en sus. Buggy et clubs de location disponibles en option, Andy peut aider à organiser.",
          features: [
            "Jusqu'à 3 joueurs, un tarif fixe pour la journée d'Andy",
            'Parcours choisi selon le niveau et les index du groupe',
            'Heure de départ sécurisée et entièrement gérée',
            'Plan de jeu et échauffement avant la partie',
            "18 trous aux côtés d'Andy",
            'Coaching sur le parcours pendant la partie',
          ],
          button: 'Demander →',
          href: '/fr/contact',
          featured: true,
        },
        {
          eyebrow: "L'Expérience Signature",
          name: 'Journée complète',
          price: '€3 000+',
          note: "Tout compris. Andy confirme le programme complet avec vous à l'avance.",
          features: [
            'Parcours, heure de départ et coaching',
            'Déjeuner dans un restaurant étoilé Michelin ou réservation avec chef privé',
            "Une deuxième session de coaching après la partie est possible",
            'Caddie et options de location de clubs premium',
            'Vidéaste pour capturer les temps forts et produire une vidéo souvenir',
            'Spa, massage et temps pour vraiment décompresser après le golf',
            'Transferts privés tout au long de la journée',
          ],
          button: 'Demander →',
          href: '/fr/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: 'Vous cherchez quelque chose de plus ambitieux ?',
        title: 'Une expérience sur plusieurs jours, organisée autour de vous.',
        body: 'Deux ou trois jours consécutifs entre Son Gual, Alcanada et au-delà, avec transferts privés, bonnes tables soigneusement choisies et accès à des parcours que la plupart des visiteurs ne peuvent pas réserver.',
        detail: 'À partir de 2 000 €. Envoyez-moi vos dates et je vous proposerai une version adaptée.',
        button: 'Demander un séjour sur plusieurs jours →',
        href: '/fr/contact',
      },
    },
  },
  nl: {
    who: {
      eyebrow: 'Voor wie is dit?',
      title: 'De dag verandert afhankelijk van wie er op de eerste tee staat.',
      cards: [
        {
          title: 'Serieuze golfers die een dag willen onthouden',
          body: 'U speelt niet alleen 18 holes. U speelt met een professional die de baan kent, de juiste beslissingen aanvoelt en de dag goed laat verlopen.',
        },
        {
          title: 'Groepen die willen dat alles geregeld is',
          body: 'Stellen, vrienden en kleine zakelijke groepen die Mallorca goed willen spelen zonder zelf starttijden, transfers of lunch te hoeven regelen.',
        },
      ],
    },
    packages: {
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'Een dag met Andy',
          price: null,
          note: "Andy's dagtarief. Greenfees en lunch zijn apart. Buggy en huurclubs beschikbaar als optionele extra's, Andy helpt graag bij de organisatie.",
          features: [
            'Baan gekozen op basis van uw spel en handicap',
            'Starttijd vastgelegd en volledig geregeld',
            'Spelplan en warming-up voor de ronde',
            '18 holes naast Andy',
            'Coaching op de baan tijdens de ronde',
            'Nabespreking na de ronde',
          ],
          button: 'Aanvragen →',
          href: '/nl/contact',
          featured: false,
        },
        {
          eyebrow: 'Groep',
          name: 'Een dag met Andy',
          price: null,
          note: "Andy's vaste dagtarief voor 2 of 3 golfers. Greenfees en lunch zijn apart. Buggy en huurclubs beschikbaar als optionele extra's, Andy helpt graag bij de organisatie.",
          features: [
            'Tot 3 spelers, één vaste dagprijs voor Andy',
            'Baan gekozen op basis van het niveau en de handicaps van de groep',
            'Starttijd vastgelegd en volledig geregeld',
            'Spelplan en warming-up voor de ronde',
            '18 holes naast Andy',
            'Coaching op de baan tijdens de ronde',
          ],
          button: 'Aanvragen →',
          href: '/nl/contact',
          featured: true,
        },
        {
          eyebrow: 'De Signature Experience',
          name: 'Volledige dag',
          price: '€3.000+',
          note: 'Alles inbegrepen. Andy bevestigt het volledige programma vooraf met u.',
          features: [
            'Baan, starttijd en coaching',
            'Lunch in een Michelin-restaurant of reservering met privéchef',
            'Een tweede coachingsessie na de ronde is mogelijk',
            'Caddie en premium clubverhuuropties',
            'Videograaf om hoogtepunten vast te leggen en een persoonlijke herinneringsvideo te maken',
            'Spa, massage en tijd om echt bij te komen na het golf',
            'Privétransfers de hele dag',
          ],
          button: 'Aanvragen →',
          href: '/nl/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: 'Zoekt u iets groters?',
        title: 'Een meerdaagse ervaring, volledig om u heen opgebouwd.',
        body: 'Twee of drie opeenvolgende dagen langs Son Gual, Alcanada en meer, met privétransfers, zorgvuldig gekozen restaurants en toegang tot banen die de meeste bezoekers niet kunnen boeken.',
        detail: 'Vanaf €2.000. Stuur me uw data en ik werk een passend voorstel uit.',
        button: 'Meerdaagse trip aanvragen →',
        href: '/nl/contact',
      },
    },
  },
  sv: {
    who: {
      eyebrow: 'Vem passar det för?',
      title: 'Dagen förändras beroende på vem som står på första tee.',
      cards: [
        {
          title: 'Seriösa golfare som vill ha en dag att minnas',
          body: 'Det handlar inte bara om 18 hål. Det handlar om att spela med en professionell som känner banan, läser besluten rätt och får dagen att flyta.',
        },
        {
          title: 'Grupper som vill att allt ska vara ordnat',
          body: 'Par, vänner och mindre företagsgrupper som vill spela Mallorca på rätt sätt utan att själva behöva ordna starttider, transfers eller lunch.',
        },
      ],
    },
    packages: {
      tiers: [
        {
          eyebrow: 'Solo',
          name: 'En dag med Andy',
          price: null,
          note: 'Andys dagspris. Green fee och lunch är separat. Golfbil och hyrklubbor tillgängliga som tillval, Andy hjälper gärna till att ordna.',
          features: [
            'Bana vald efter ditt spel och handicap',
            'Starttid säkrad och helt ordnad',
            'Spelplan och uppvärmning före rundan',
            '18 hål vid Andys sida',
            'Coaching på banan under rundan',
            'Genomgång efter rundan',
          ],
          button: 'Förfrågan →',
          href: '/sv/contact',
          featured: false,
        },
        {
          eyebrow: 'Grupp',
          name: 'En dag med Andy',
          price: null,
          note: 'Andys fasta dagspris för 2 eller 3 golfare. Green fee och lunch är separat. Golfbil och hyrklubbor tillgängliga som tillval, Andy hjälper gärna till att ordna.',
          features: [
            'Upp till 3 spelare, ett fast dagspris för Andy',
            'Bana vald efter gruppens nivå och handicap',
            'Starttid säkrad och helt ordnad',
            'Spelplan och uppvärmning före rundan',
            '18 hål vid Andys sida',
            'Coaching på banan under rundan',
          ],
          button: 'Förfrågan →',
          href: '/sv/contact',
          featured: true,
        },
        {
          eyebrow: 'Signature-upplevelsen',
          name: 'Hel dag',
          price: '€3 000+',
          note: 'Allt ingår. Andy bekräftar hela programmet med dig i förväg.',
          features: [
            'Bana, starttid och coaching',
            'Lunch på Michelin-restaurang eller bokning med privat kock',
            'En andra coachingtimme efter rundan är möjlig',
            'Caddie och premium hyrklubbsalternativ',
            'Videograf för att fånga höjdpunkter och producera en personlig minnesvideo',
            'Spa, massage och tid att verkligen varva ned efter golfen',
            'Privata transfers hela dagen',
          ],
          button: 'Förfrågan →',
          href: '/sv/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: 'Letar du efter något större?',
        title: 'En flerdagarsupplevelse, planerad runt dig.',
        body: 'Två eller tre dagar i följd över Son Gual, Alcanada och vidare, med privata transfers, noggrant utvalda restauranger och tillgång till banor som de flesta besökare inte kan boka.',
        detail: 'Från €2.000. Skicka dina datum så sätter jag ihop ett förslag som passar.',
        button: 'Fråga om en flerdagarsresa →',
        href: '/sv/contact',
      },
    },
  },
  zh: {
    who: {
      eyebrow: '这适合谁？',
      title: '站在第一洞发球台的人不同，这一天也会随之改变。',
      cards: [
        {
          title: '想要一场值得记住的高尔夫日的认真球手',
          body: '这不只是打 18 洞，而是与一位真正懂球场、懂决策、也懂如何把这一天安排得顺畅的职业人士一起下场。',
        },
        {
          title: '希望一切都有人安排妥当的小团体',
          body: '适合伴侣、朋友和小型商务接待团体，在马略卡好好打一场球，而不用自己去协调开球时间、接送或午餐。',
        },
      ],
    },
    packages: {
      tiers: [
        {
          eyebrow: '单人',
          name: '与 Andy 共度一天',
          price: null,
          note: 'Andy 的单人日费。果岭费和午餐另计。球车和租借球具可作为可选附加项，Andy 可以帮助安排。',
          features: [
            '按照您的球技与差点匹配球场',
            '开球时间已预订并安排妥当',
            '赛前计划与热身',
            '与 Andy 同打 18 洞',
            '球场实战指导贯穿全程',
            '赛后复盘',
          ],
          button: '立即咨询 →',
          href: '/zh/contact',
          featured: false,
        },
        {
          eyebrow: '小组',
          name: '与 Andy 共度一天',
          price: null,
          note: 'Andy 针对 2 或 3 位球手的固定日费。果岭费和午餐另计。球车和租借球具可作为可选附加项，Andy 可以帮助安排。',
          features: [
            '最多 3 位球手，Andy 收取固定日费',
            '按照小组水平与差点匹配球场',
            '开球时间已预订并安排妥当',
            '赛前计划与热身',
            '与 Andy 同打 18 洞',
            '球场实战指导贯穿全程',
          ],
          button: '立即咨询 →',
          href: '/zh/contact',
          featured: true,
        },
        {
          eyebrow: '尊享体验',
          name: '全天尊享',
          price: '€3,000+',
          note: '全部包含。Andy 提前与您确认完整行程安排。',
          features: [
            '球场、开球时间与全程指导',
            '米其林餐厅午餐或私人厨师预订',
            '下场后可安排第二次指导课',
            '球童与高端租借球具选项',
            '摄像师记录精彩时刻并制作专属纪念短片',
            '水疗、按摩及高尔夫后真正放松的时间',
            '全程专属接送',
          ],
          button: '立即咨询 →',
          href: '/zh/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: '想要更完整的行程？',
        title: '一款围绕您定制的多日体验。',
        body: '连续两到三天，安排 Son Gual、Alcanada 及更多球场，包含私人接送、精心挑选的餐饮，以及多数访客订不到的球场机会。',
        detail: '€2,000 起。把您的日期发给我，我会为您准备合适的方案。',
        button: '咨询多日行程 →',
        href: '/zh/contact',
      },
    },
  },
}

for (const [locale, override] of Object.entries(PLAY_WITH_A_PRO_AUDIT_OVERRIDES)) {
  PLAY_WITH_A_PRO_CONTENT[locale] = mergeDeep(PLAY_WITH_A_PRO_CONTENT[locale], override)
}

for (const [locale, override] of Object.entries(PLAY_WITH_A_PRO_RELOCALIZED_OVERRIDES)) {
  PLAY_WITH_A_PRO_CONTENT[locale] = mergeDeep(PLAY_WITH_A_PRO_CONTENT[locale], override)
}

export function getPlayWithAProContent(locale = 'en') {
  const content = PLAY_WITH_A_PRO_CONTENT[locale] || PLAY_WITH_A_PRO_CONTENT.en
  const soloOffer = getOfferById(OFFER_IDS.solo, locale)
  const groupOffer = getOfferById(OFFER_IDS.group, locale)
  const packages = content?.packages
    ? {
        ...content.packages,
        tiers: (content.packages.tiers || []).map((tier) => ({
          ...tier,
          price:
            tier.eyebrow === soloOffer.shortLabel
              ? soloOffer.priceDisplay
              : tier.eyebrow === groupOffer.shortLabel
                ? groupOffer.priceDisplay
              : tier.price,
        })),
        multiDay: content.packages.multiDay
          ? {
              ...content.packages.multiDay,
              detail: getPlayMultiDayDetail(locale),
            }
          : content.packages.multiDay,
      }
    : content?.packages

  if (!content?.who?.cards) {
    return {
      ...content,
      hero: content?.hero
        ? {
            ...content.hero,
            body: getPlayHeroBody(locale),
          }
        : content?.hero,
      packages,
    }
  }

  return {
    ...content,
    hero: content.hero
      ? {
          ...content.hero,
          body: getPlayHeroBody(locale),
        }
      : content.hero,
    packages,
    who: {
      ...content.who,
      cards: normalizeWhoCards(content.who.cards),
    },
  }
}