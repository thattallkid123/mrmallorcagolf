const fs = require('fs')
const path = require('path')

const filePath = path.join(process.cwd(), 'src', 'lib', 'about-content.js')
let source = fs.readFileSync(filePath, 'utf8')

function replaceBetween(startMarker, endMarker, replacement) {
  const start = source.indexOf(startMarker)
  const end = source.indexOf(endMarker, start)
  if (start === -1 || end === -1) throw new Error(`Could not replace block from ${startMarker} to ${endMarker}`)
  source = source.slice(0, start) + replacement + source.slice(end)
}

replaceBetween(
  "  de: {",
  "  es: {",
String.raw`  de: {
    locale: 'de',
    hero: {
      homeHref: '/de',
      breadcrumbHome: 'Startseite',
      breadcrumbCurrent: 'Über Andy',
      title: ['Der Profi', 'hinter dem Erlebnis.'],
      tags: ['PGA Advanced Professional', 'Trackman Master zertifiziert', 'TPI Level 3', 'Auf Mallorca ansässig'],
    },
    chapters: [
      {
        label: 'Frühe Karriere',
        title: 'Von den besten Coaches der Welt in idealen Coaching-Umgebungen lernen.',
        paragraphs: [
          'Ich bin mit Golf aufgewachsen, habe mich bis auf Handicap +1 gespielt und wusste früh, dass mein Weg im Coaching liegen würde. Nach meinem Studium im Bereich Applied Golf Management an der University of Birmingham und meiner Qualifikation als PGA Professional begann ich meine Laufbahn, indem ich den erfahrensten Coaches in Europa und Nordamerika folgte.',
          'Diese frühen Jahre führten mich an einige bemerkenswerte Orte. Ich coachte in Pebble Beach, Doral, Evian während des Frauen-Majors und bei The Open Championship. Eine Saison verbrachte ich zudem als Coach an Bord eines Kreuzfahrtschiffs auf Weltreise - mehr als vierzig Länder, Golf an Orten, die viele Professionals nie zu sehen bekommen.',
        ],
        quote: 'Diese frühen Jahre waren wichtig, weil kein Umfeld dem anderen glich und auch kein Golfer dem anderen. Genau das hat alles geprägt, was danach kam.',
      },
      {
        label: 'Shanghai, 2014-2025',
        title: 'Elf Jahre auf höchstem Niveau in China.',
        paragraphs: [
          '2014 zog ich nach Shanghai. Ich kam mit einem klaren Ziel: das Coaching-Programm der besten Golfakademie Chinas aufzubauen - und blieb schließlich elf erfolgreiche Jahre.',
          'China war in dieser Phase ein außergewöhnliches Umfeld für Coaching. Einzelstunden lagen bei rund €500 pro Stunde, und die Erwartungen der Kunden waren eindeutig: echte, messbare Verbesserung. Genau das war der Maßstab. Der professionelle Standard war so hoch wie überall sonst, wo ich gearbeitet habe.',
          'Ich wurde der erste Trackman Master des Landes, coachte Spieler aus dem chinesischen Nationalteam und baute auf Douyin eine Coaching-Präsenz mit Hunderten Millionen Aufrufen auf. Gleichzeitig wurde ich fließend in Mandarin, was die Tiefe der Beziehungen zu Spielern und Familien erheblich verändert hat.',
          'Nach elf Jahren hatte ich erreicht, weshalb ich gekommen war. 2023 wurde meine erste Tochter geboren. Der Wunsch, näher bei der Familie in Großbritannien zu sein und zugleich etwas Eigenes aufzubauen, ließ sich nicht mehr ignorieren.',
        ],
      },
      {
        label: 'Mallorca, 2025-',
        title: 'Zweiundzwanzig Plätze, eine Insel und eine Coaching-Philosophie, die durch das eigene Spiel wieder geschärft wurde.',
        paragraphs: [
          'Im März 2025 zog ich mit meiner Frau Yina nach Mallorca. Näher an der Familie im Vereinigten Königreich, ganzjährig Sonne und eine Golfinsel, die weit mehr Anerkennung verdient, als sie normalerweise bekommt.',
          'Ich begann wieder ernsthaft zu spielen. Ich arbeite mich durch jeden Platz der Insel, und ich habe wiederentdeckt, wie es sich anfühlt, am ersten Abschlag zu stehen und sich wirklich für den Score zu interessieren. Dieser Wettkampfinstinkt, der durch Jahre im Vollzeit-Coaching eher geschlafen hatte, war schnell wieder da.',
          'Ein PGA Professional, der mehr als ein Jahrzehnt in Asien gecoacht hat und nun private Golftage auf einer der besten Golfinseln Europas veranstaltet. Wenn das nach der Art von Tag klingt, die Sie suchen, melden Sie sich gern.',
        ],
        quote: 'Wieder richtig zu spielen hat nur bestätigt, was ich ohnehin geglaubt habe: Die schnellsten Verbesserungen passieren auf dem Platz, nicht auf der Range.',
      },
    ],
    imageAlt: 'Andy Griffiths - UK PGA Advanced Professional, Mallorca',
    credentialsLabel: 'Qualifikationen',
    credentials: [
      { title: 'UKPGA Advanced Professional', detail: 'Über 15.000 Stunden Coaching gegeben' },
      { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
      { title: 'TPI Level 3 zertifiziert', detail: 'Titleist Performance Institute' },
      { title: 'Trackman Master zertifiziert', detail: 'Erster in China' },
      { title: 'US Kids Golf', detail: 'Top-50-Coach weltweit' },
      { title: '11 Jahre in Shanghai', detail: 'Fließend Mandarin' },
      { title: 'Chinesisches Nationalteam', detail: 'Elite-Coaching für Junioren und Wettkampfspieler' },
      { title: 'Hunderte Millionen Aufrufe', detail: 'Golf-Coaching-Videos auf Douyin' },
      { title: 'Veröffentlichter Autor', detail: 'Putting It Out There - A Life in Full Swing, 2016 (Amazon)', isBookLink: true },
      { title: 'Auf Mallorca ansässig', detail: 'Seit März 2025' },
    ],
    sidebarCta: {
      title: 'Spielen Sie Mallorcas beste Plätze mit mir an Ihrer Seite.',
      body: 'Private Tage in Son Gual, Alcanada und darüber hinaus. Alles ist organisiert, mit Coaching auf dem Platz während des gesamten Tages.',
      button: 'Erlebnisse ansehen →',
      href: '/de/play-with-a-pro',
    },
    finalCta: {
      eyebrow: 'Bereit zum Spielen?',
      title: 'Ein PGA Advanced Professional. Eine außergewöhnliche Golfinsel. Ihre Runde.',
      body: 'Nennen Sie mir Ihre Daten, Ihr Handicap und wonach Sie suchen. Ich helfe Ihnen in die richtige Richtung und baue den Tag darum herum auf.',
      primaryCta: 'Erlebnisse ansehen →',
      primaryHref: '/de/play-with-a-pro',
      secondaryCta: 'Kontakt aufnehmen',
      secondaryHref: '/de/contact',
    },
  },
`,
)

replaceBetween(
  "  es: {",
  "  fr: {",
String.raw`  es: {
    locale: 'es',
    hero: {
      homeHref: '/es',
      breadcrumbHome: 'Inicio',
      breadcrumbCurrent: 'Sobre Andy',
      title: ['El profesional', 'detrás de la experiencia.'],
      tags: ['PGA Advanced Professional', 'Trackman Master', 'TPI Nivel 3', 'Con base en Mallorca'],
    },
    chapters: [
      {
        label: 'Primeros años',
        title: 'Aprendiendo de los mejores entrenadores del mundo en entornos perfectos para enseñar.',
        paragraphs: [
          'Crecí jugando al golf, llegué a +1 de hándicap y supe pronto que la enseñanza sería mi camino. Después de estudiar Applied Golf Management en la University of Birmingham y de obtener la titulación de PGA Professional, empecé a construir mi carrera siguiendo a los entrenadores más experimentados de Europa y Norteamérica.',
          'Esos primeros años me llevaron a lugares extraordinarios. Entrené en Pebble Beach, Doral, Evian durante el major femenino y en The Open Championship. También pasé una temporada enseñando a bordo de un crucero en una vuelta al mundo: más de cuarenta países y golf en lugares a los que la mayoría de profesionales nunca llega.',
        ],
        quote: 'Esos primeros años importaron porque no había dos entornos iguales, ni tampoco dos golfistas iguales. De ahí salió gran parte de todo lo que vino después.',
      },
      {
        label: 'Shanghái, 2014-2025',
        title: 'Once años en la cima del golf en China.',
        paragraphs: [
          'En 2014 me mudé a Shanghái. Fui con un objetivo muy concreto: poner en marcha el programa de enseñanza de la mejor academia de China, y allí me quedé once años con mucho éxito.',
          'China, en aquella época, era un entorno extraordinario para enseñar. Las clases rondaban los €500 por hora y los clientes esperaban mejoras reales y medibles. Ese era el nivel. El estándar profesional exigido era tan alto como en cualquier otro sitio en el que había trabajado.',
          'Me convertí en el primer Trackman Master del país, entrené a jugadores de la selección nacional china y construí una presencia de coaching en Douyin que alcanzó cientos de millones de visualizaciones. También llegué a hablar mandarín con fluidez, algo que cambió la profundidad de la relación que podía construir con jugadores y familias.',
          'Después de once años, ya había conseguido aquello por lo que había ido. Mi primera hija nació en 2023. La atracción de estar más cerca de casa y la oportunidad de construir algo propio se volvieron imposibles de ignorar.',
        ],
      },
      {
        label: 'Mallorca, 2025-',
        title: 'Veintidós campos, una isla y una filosofía de enseñanza afinada al volver a jugar de verdad.',
        paragraphs: [
          'Me mudé a Mallorca en marzo de 2025 con mi mujer Yina. Más cerca de la familia en el Reino Unido, sol todo el año y una isla de golf que todavía no recibe todo el reconocimiento que merece.',
          'Volví a jugar en serio. Estoy recorriendo todos los campos de la isla y he redescubierto lo que se siente al estar en el primer tee y preocuparte de verdad por el resultado. Ese instinto competitivo, dormido durante años de coaching a tiempo completo, volvió muy rápido.',
          'Un PGA Professional que pasó más de una década enseñando en Asia y que ahora organiza días privados de golf en una de las mejores islas de golf de Europa. Si eso suena como el tipo de día que está buscando, póngase en contacto.',
        ],
        quote: 'Volver a jugar en serio solo ha confirmado lo que ya pensaba: las mejoras más rápidas suelen llegar en el campo, no en la zona de prácticas.',
      },
    ],
    imageAlt: 'Andy Griffiths - UK PGA Advanced Professional, Mallorca',
    credentialsLabel: 'Credenciales',
    credentials: [
      { title: 'UKPGA Advanced Professional', detail: 'Más de 15.000 horas de coaching impartidas' },
      { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
      { title: 'Certificación TPI Nivel 3', detail: 'Titleist Performance Institute' },
      { title: 'Trackman Master', detail: 'Primero en China' },
      { title: 'US Kids Golf', detail: 'Top 50 Coach mundial' },
      { title: '11 años en Shanghái', detail: 'Mandarín fluido' },
      { title: 'Selección nacional china', detail: 'Coaching de élite para juniors y competición' },
      { title: 'Cientos de millones de visualizaciones', detail: 'Contenido de coaching en Douyin' },
      { title: 'Autor publicado', detail: 'Putting It Out There - A Life in Full Swing, 2016 (Amazon)', isBookLink: true },
      { title: 'Con base en Mallorca', detail: 'Desde marzo de 2025' },
    ],
    sidebarCta: {
      title: 'Juegue los mejores campos de Mallorca conmigo a su lado.',
      body: 'Días privados en Son Gual, Alcanada y más allá. Todo organizado, con coaching en el campo durante toda la jornada.',
      button: 'Ver experiencias →',
      href: '/es/play-with-a-pro',
    },
    careerStripProps: {
      label: 'Sedes y experiencia',
      heading: 'Dónde se construyó la carrera.',
    },
    finalCta: {
      eyebrow: '¿Listo para jugar?',
      title: 'Un PGA Advanced Professional. Una isla de golf excepcional. Su vuelta.',
      body: 'Dígame sus fechas, su hándicap y lo que busca. Le orientaré en la dirección correcta y construiré el día a partir de eso.',
      primaryCta: 'Ver experiencias →',
      primaryHref: '/es/play-with-a-pro',
      secondaryCta: 'Ponerse en contacto',
      secondaryHref: '/es/contact',
    },
  },
`,
)

replaceBetween(
  "  fr: {",
  "  nl: {",
String.raw`  fr: {
    locale: 'fr',
    hero: {
      homeHref: '/fr',
      breadcrumbHome: 'Accueil',
      breadcrumbCurrent: 'À propos d’Andy',
      title: ['Le professionnel', 'derrière l’expérience.'],
      tags: ['PGA Advanced Professional', 'Trackman Master certifié', 'TPI Niveau 3', 'Basé à Majorque'],
    },
    chapters: [
      {
        label: 'Début de carrière',
        title: 'Apprendre auprès des meilleurs coachs du monde dans des environnements idéaux pour progresser.',
        paragraphs: [
          'J’ai grandi avec le golf, je suis descendu à +1 de handicap et j’ai compris très tôt que le coaching serait ma voie. Après des études d’Applied Golf Management à l’University of Birmingham et ma qualification de PGA Professional, j’ai commencé à construire ma carrière en suivant les coachs les plus expérimentés d’Europe et d’Amérique du Nord.',
          'Ces premières années m’ont mené dans des lieux remarquables. J’ai coaché à Pebble Beach, Doral, Evian pendant le major féminin et à The Open Championship. J’ai également passé une saison à coacher à bord d’un paquebot lors d’un tour du monde : plus de quarante pays, du golf dans des endroits que la plupart des professionnels ne verront jamais.',
        ],
        quote: 'Ces premières années ont compté parce qu’aucun environnement ne se ressemblait, et qu’aucun golfeur ne se ressemblait non plus. C’est de là qu’est venu tout le reste.',
      },
      {
        label: 'Shanghai, 2014-2025',
        title: 'Onze ans au plus haut niveau en Chine.',
        paragraphs: [
          'En 2014, je me suis installé à Shanghai. J’y suis allé avec un objectif précis : mettre en place le programme d’enseignement de la meilleure académie de Chine, et j’y suis finalement resté onze années très réussies.',
          'La Chine, à cette période, était un environnement exceptionnel pour coacher. Les leçons se facturaient autour de €500 de l’heure et les clients attendaient de vrais progrès, mesurables. C’était le niveau attendu. Le standard professionnel était aussi élevé que partout ailleurs où j’avais travaillé.',
          'Je suis devenu le premier Trackman Master du pays, j’ai coaché des joueurs de l’équipe nationale chinoise et j’ai développé sur Douyin une présence de coaching qui a atteint des centaines de millions de vues. Je suis également devenu courant en mandarin, ce qui a profondément changé la qualité des relations que je pouvais construire avec les joueurs et les familles.',
          'Après onze ans, j’avais accompli ce pour quoi j’étais venu. Ma première fille est née en 2023. Le désir de revenir plus près de ma famille et la possibilité de bâtir quelque chose à moi sont devenus impossibles à ignorer.',
        ],
      },
      {
        label: 'Majorque, 2025-',
        title: 'Vingt-deux parcours, une île et une philosophie de coaching renforcée par le fait de rejouer sérieusement.',
        paragraphs: [
          'Je me suis installé à Majorque en mars 2025 avec ma femme Yina. Plus près de la famille au Royaume-Uni, du soleil toute l’année et une île de golf qui ne reçoit toujours pas tout le crédit qu’elle mérite.',
          'J’ai recommencé à jouer sérieusement. Je découvre chaque parcours de l’île et j’ai retrouvé cette sensation d’être sur le premier tee en accordant de l’importance au score. Cet instinct compétitif, resté en sommeil pendant des années de coaching à plein temps, est revenu très vite.',
          'Un PGA Professional qui a passé plus d’une décennie à coacher en Asie et qui organise désormais des journées de golf privées sur l’une des meilleures îles de golf d’Europe. Si cela ressemble au type de journée que vous recherchez, prenez contact.',
        ],
        quote: 'Rejouer sérieusement n’a fait que confirmer ce que je croyais déjà : les progrès les plus rapides arrivent généralement sur le parcours, pas au practice.',
      },
    ],
    imageAlt: 'Andy Griffiths - UK PGA Advanced Professional, Majorque',
    credentialsLabel: 'Références',
    credentials: [
      { title: 'UKPGA Advanced Professional', detail: 'Plus de 15 000 heures de coaching dispensées' },
      { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
      { title: 'Certifié TPI Niveau 3', detail: 'Titleist Performance Institute' },
      { title: 'Trackman Master certifié', detail: 'Premier en Chine' },
      { title: 'US Kids Golf', detail: 'Top 50 Coach mondial' },
      { title: '11 ans à Shanghai', detail: 'Mandarin courant' },
      { title: 'Équipe nationale chinoise', detail: 'Coaching élite pour juniors et compétition' },
      { title: 'Des centaines de millions de vues', detail: 'Contenu vidéo de coaching sur Douyin' },
      { title: 'Auteur publié', detail: 'Putting It Out There - A Life in Full Swing, 2016 (Amazon)', isBookLink: true },
      { title: 'Basé à Majorque', detail: 'Depuis mars 2025' },
    ],
    sidebarCta: {
      title: 'Jouez les plus beaux parcours de Majorque à mes côtés.',
      body: 'Des journées privées à Son Gual, Alcanada et au-delà. Tout est organisé, avec un coaching sur le parcours du début à la fin.',
      button: 'Voir les expériences →',
      href: '/fr/play-with-a-pro',
    },
    finalCta: {
      eyebrow: 'Prêt à jouer ?',
      title: 'Un PGA Advanced Professional. Une île de golf exceptionnelle. Votre partie.',
      body: 'Donnez-moi vos dates, votre handicap et ce que vous recherchez. Je vous orienterai dans la bonne direction et construirai la journée autour de cela.',
      primaryCta: 'Voir les expériences →',
      primaryHref: '/fr/play-with-a-pro',
      secondaryCta: 'Nous contacter',
      secondaryHref: '/fr/contact',
    },
  },
`,
)

replaceBetween(
  "  nl: {",
  "  sv: {",
String.raw`  nl: {
    locale: 'nl',
    hero: {
      homeHref: '/nl',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Over Andy',
      title: ['De professional', 'achter de ervaring.'],
      tags: ['PGA Advanced Professional', 'Trackman Master gecertificeerd', 'TPI Niveau 3', 'Gevestigd op Mallorca'],
    },
    chapters: [
      {
        label: 'Vroege carrière',
        title: 'Leren van de beste coaches ter wereld in ideale coachingsomgevingen.',
        paragraphs: [
          'Ik groeide op met golf, speelde mezelf naar een handicap van +1 en wist vroeg dat coaching mijn richting zou worden. Na mijn studie Applied Golf Management aan de University of Birmingham en mijn kwalificatie als PGA Professional begon ik mijn carrière op te bouwen door de meest ervaren coaches in Europa en Noord-Amerika te volgen.',
          'Die vroege jaren brachten me naar bijzondere plekken. Ik coachte op Pebble Beach, Doral, Evian tijdens het damestoernooi en bij The Open Championship. Ik bracht ook een seizoen door als coach aan boord van een cruiseschip op wereldreis - meer dan veertig landen en golf op plekken waar de meeste professionals nooit komen.',
        ],
        quote: 'Die eerste jaren waren belangrijk omdat geen enkele omgeving hetzelfde was, en ook geen enkele golfer hetzelfde was. Dat heeft alles gevormd wat daarna kwam.',
      },
      {
        label: 'Shanghai, 2014-2025',
        title: 'Elf jaar op topniveau in China.',
        paragraphs: [
          'In 2014 verhuisde ik naar Shanghai. Ik ging met een heel duidelijk doel: het coachingsprogramma opzetten voor de beste academie van China, en ik bleef uiteindelijk elf succesvolle jaren.',
          'China was in die periode een uitzonderlijke omgeving om in te coachen. Lessen lagen rond de €500 per uur en klanten verwachtten echte, meetbare vooruitgang. Dat was de norm. De professionele standaard was net zo hoog als op elke andere plek waar ik heb gewerkt.',
          'Ik werd de eerste Trackman Master van het land, coachte spelers van het Chinese nationale team en bouwde op Douyin een coachingaanwezigheid op die honderden miljoenen views bereikte. Ook werd ik vloeiend in het Mandarijn, wat de diepte van de relatie met spelers en families sterk veranderde.',
          'Na elf jaar had ik bereikt waarvoor ik gekomen was. Mijn eerste dochter werd geboren in 2023. De aantrekkingskracht van dichter bij huis zijn en de kans om iets van mezelf op te bouwen, waren niet langer te negeren.',
        ],
      },
      {
        label: 'Mallorca, 2025-',
        title: 'Tweeëntwintig banen, één eiland en een coachingsfilosofie die is aangescherpt doordat ik zelf weer serieus ben gaan spelen.',
        paragraphs: [
          'In maart 2025 verhuisde ik met mijn vrouw Yina naar Mallorca. Dichter bij familie in het Verenigd Koninkrijk, zon het hele jaar door en een golfeiland dat nog altijd niet de waardering krijgt die het verdient.',
          'Ik begon zelf weer serieus te spelen. Ik werk me door elke baan op het eiland heen en heb opnieuw ontdekt hoe het voelt om op de eerste tee te staan en echt om de score te geven. Dat competitieve instinct, dat jarenlang had geslapen door fulltime coaching, kwam snel terug.',
          'Een PGA Professional die meer dan tien jaar in Azië coachte en nu privé-golfdagen organiseert op een van de beste golfeilanden van Europa. Als dat klinkt als het soort dag dat u zoekt, neem dan contact op.',
        ],
        quote: 'Opnieuw serieus spelen heeft alleen maar bevestigd wat ik al dacht: de snelste verbeteringen gebeuren meestal op de baan, niet op de range.',
      },
    ],
    imageAlt: 'Andy Griffiths - UK PGA Advanced Professional, Mallorca',
    credentialsLabel: 'Kwalificaties',
    credentials: [
      { title: 'UKPGA Advanced Professional', detail: 'Meer dan 15.000 uur coaching gegeven' },
      { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
      { title: 'TPI Niveau 3 gecertificeerd', detail: 'Titleist Performance Institute' },
      { title: 'Trackman Master gecertificeerd', detail: 'Eerste in China' },
      { title: 'US Kids Golf', detail: 'Top 50 Coach wereldwijd' },
      { title: '11 jaar in Shanghai', detail: 'Vloeiend Mandarijn' },
      { title: 'Chinees nationaal team', detail: 'Elite-coaching voor juniors en wedstrijdspelers' },
      { title: 'Honderden miljoenen weergaven', detail: 'Golfcoaching-video’s op Douyin' },
      { title: 'Gepubliceerd auteur', detail: 'Putting It Out There - A Life in Full Swing, 2016 (Amazon)', isBookLink: true },
      { title: 'Gevestigd op Mallorca', detail: 'Sinds maart 2025' },
    ],
    sidebarCta: {
      title: 'Speel de mooiste banen van Mallorca met mij aan uw zijde.',
      body: 'Privédagen op Son Gual, Alcanada en daarbuiten. Alles is geregeld, met coaching op de baan gedurende de hele dag.',
      button: 'Bekijk de ervaringen →',
      href: '/nl/play-with-a-pro',
    },
    finalCta: {
      eyebrow: 'Klaar om te spelen?',
      title: 'Een PGA Advanced Professional. Een uitzonderlijk golfeiland. Uw ronde.',
      body: 'Vertel me uw data, uw handicap en wat u zoekt. Ik wijs u de juiste richting en bouw de dag daaromheen.',
      primaryCta: 'Bekijk de ervaringen →',
      primaryHref: '/nl/play-with-a-pro',
      secondaryCta: 'Neem contact op',
      secondaryHref: '/nl/contact',
    },
  },
`,
)

replaceBetween(
  "  sv: {",
  "  zh: {",
String.raw`  sv: {
    locale: 'sv',
    hero: {
      homeHref: '/sv',
      breadcrumbHome: 'Hem',
      breadcrumbCurrent: 'Om Andy',
      title: ['Professionellen', 'bakom upplevelsen.'],
      tags: ['PGA Advanced Professional', 'Trackman Master Certified', 'TPI Level 3', 'Baserad på Mallorca'],
    },
    chapters: [
      {
        label: 'Tidiga år',
        title: 'Lärdomar från världens bästa coacher i perfekta träningsmiljöer.',
        paragraphs: [
          'Jag växte upp med golf, tog mig ner till +1 i handicap och visste tidigt att coaching var min väg. Efter studier i Applied Golf Management vid University of Birmingham och min kvalificering som PGA Professional började jag bygga min karriär genom att följa de mest erfarna coacherna i Europa och Nordamerika.',
          'De tidiga åren tog mig till några verkligt speciella platser. Jag coachade på Pebble Beach, Doral, Evian under damernas major och på The Open Championship. Jag tillbringade också en säsong med att coacha ombord på ett kryssningsfartyg under en världsomsegling - över fyrtio länder och golf på platser som de flesta proffs aldrig kommer nära.',
        ],
        quote: 'De tidiga åren betydde mycket eftersom ingen miljö var den andra lik, och ingen golfare var heller den andra lik. Det formade allt som kom efteråt.',
      },
      {
        label: 'Shanghai, 2014-2025',
        title: 'Elva år på högsta nivå i Kina.',
        paragraphs: [
          '2014 flyttade jag till Shanghai. Jag kom dit med ett tydligt mål: att bygga upp coachingsprogrammet för den bästa akademin i Kina, och jag blev kvar i elva mycket framgångsrika år.',
          'Kina var under den perioden en exceptionell miljö för coaching. Lektioner låg runt €500 i timmen och kunderna förväntade sig verklig, mätbar förbättring. Det var standarden. Den professionella nivån som krävdes var lika hög som någon annanstans där jag arbetat.',
          'Jag blev landets första Trackman Master, coachade spelare i det kinesiska landslaget och byggde upp en coachingsnärvaro på Douyin som nådde hundratals miljoner visningar. Jag blev också flytande i mandarin, vilket förändrade djupet i de relationer jag kunde bygga med spelare och familjer.',
          'Efter elva år hade jag uppnått det jag kom dit för. Min första dotter föddes 2023. Dragningen att komma närmare hemmet och möjligheten att bygga något eget blev omöjlig att ignorera.',
        ],
      },
      {
        label: 'Mallorca, 2025-',
        title: 'Tjugotvå banor, en ö och en coachingfilosofi som vässades när jag började spela ordentligt igen.',
        paragraphs: [
          'Jag flyttade till Mallorca i mars 2025 med min fru Yina. Närmare familjen i Storbritannien, solsken året runt och en golfö som fortfarande inte får tillräckligt mycket erkännande.',
          'Jag började spela ordentligt igen. Jag arbetar mig igenom varje bana på ön och har återupptäckt hur det känns att stå på första tee och faktiskt bry sig om scoren. Den tävlingsinstinkt som hade legat vilande under år av heltidscoaching kom snabbt tillbaka.',
          'En PGA Professional som tillbringade mer än ett decennium med att coacha i Asien och som nu arrangerar privata golfdagar på en av Europas bästa golföar. Om det låter som den typ av dag du söker, hör av dig.',
        ],
        quote: 'Att börja spela ordentligt igen har bara bekräftat det jag redan trodde: de snabbaste förbättringarna sker oftast på banan, inte på rangen.',
      },
    ],
    imageAlt: 'Andy Griffiths - UK PGA Advanced Professional, Mallorca',
    credentialsLabel: 'Meriter',
    credentials: [
      { title: 'UKPGA Advanced Professional', detail: 'Över 15 000 timmar coaching' },
      { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
      { title: 'TPI Level 3 Certified', detail: 'Titleist Performance Institute' },
      { title: 'Trackman Master Certified', detail: 'Först i Kina' },
      { title: 'US Kids Golf', detail: 'Top 50 Coach Worldwide' },
      { title: '11 år i Shanghai', detail: 'Flytande mandarin' },
      { title: 'Kinas landslag', detail: 'Elitcoaching för juniorer och tävlingsspelare' },
      { title: 'Hundratals miljoner visningar', detail: 'Golfcoaching-videor på Douyin' },
      { title: 'Publicerad författare', detail: 'Putting It Out There - A Life in Full Swing, 2016 (Amazon)', isBookLink: true },
      { title: 'Baserad på Mallorca', detail: 'Sedan mars 2025' },
    ],
    sidebarCta: {
      title: 'Spela Mallorcas finaste banor med mig vid din sida.',
      body: 'Privata dagar på Son Gual, Alcanada och längre än så. Allt är ordnat, med coaching ute på banan hela dagen.',
      button: 'Se upplevelserna →',
      href: '/sv/play-with-a-pro',
    },
    finalCta: {
      eyebrow: 'Redo att spela?',
      title: 'En PGA Advanced Professional. En exceptionell golfö. Din runda.',
      body: 'Berätta dina datum, ditt handicap och vad du söker. Jag hjälper dig i rätt riktning och bygger dagen runt det.',
      primaryCta: 'Se upplevelserna →',
      primaryHref: '/sv/play-with-a-pro',
      secondaryCta: 'Kontakta mig',
      secondaryHref: '/sv/contact',
    },
  },
`,
)

replaceBetween(
  "  zh: {",
  "}\n\nexport function getAboutContent",
String.raw`  zh: {
    locale: 'zh',
    hero: {
      homeHref: '/zh',
      breadcrumbHome: '首页',
      breadcrumbCurrent: '关于 Andy',
      title: ['体验背后', '的职业人士。'],
      tags: ['PGA 高级职业教练', 'Trackman Master 认证', 'TPI 三级', '现居马略卡'],
    },
    chapters: [
      {
        label: '职业早期',
        title: '在理想的教学环境中，向世界顶级教练学习。',
        paragraphs: [
          '我从小打高尔夫，最低打到过 +1 差点，也很早就知道，教学才是我真正想走的路。在伯明翰大学学习 Applied Golf Management 并取得 PGA Professional 资格后，我开始通过追随欧洲和北美最有经验的教练来建立自己的职业道路。',
          '职业早期把我带到了很多非凡的地方。我曾在 Pebble Beach、Doral、Evian 女子大满贯期间以及 The Open Championship 执教。我还曾在一艘环球航行的邮轮上执教了一个赛季——超过四十个国家，在许多职业球手一辈子都不会去到的地方打高尔夫。',
        ],
        quote: '那些早期经历之所以重要，是因为没有两个环境完全一样，也没有两个球手完全一样。这一点塑造了之后的一切。',
      },
      {
        label: '上海，2014-2025',
        title: '在中国顶级高尔夫环境中的十一年。',
        paragraphs: [
          '2014 年，我搬到了上海。我带着非常明确的目标而去——为中国最好的高尔夫学院建立教学体系——并在那里度过了成功的十一年。',
          '那段时间的中国，是一个非常特别的执教环境。课程收费大约在每小时 €500 左右，客户期待的是真实、可以衡量的提升。这就是标准。对于专业能力的要求，与我在其他任何地方工作时一样高。',
          '我成为中国第一位 Trackman Master，执教过中国国家队球员，并在抖音上建立起数亿播放量的高尔夫教学影响力。我也能够流利使用普通话，这让我的教学关系能够与球员和家庭建立得更深。',
          '十一年之后，我已经完成了自己当初想做的事。我的第一个女儿在 2023 年出生。更靠近家人，以及建立属于自己事业的机会，已经变得无法忽视。',
        ],
      },
      {
        label: '马略卡，2025-',
        title: '二十二座球场、一座岛屿，以及在重新认真打球后被重新打磨出的教学理念。',
        paragraphs: [
          '2025 年 3 月，我和妻子 Yina 搬到了马略卡。这里离英国的家人更近，全年阳光充足，也是一座仍然被低估的高尔夫岛屿。',
          '我重新开始认真打球。我正在打遍岛上的每一座球场，也重新找回了站在第一洞发球台上、真正关心成绩的感觉。那个在多年全职教学中沉睡下来的竞争本能，很快又回来了。',
          '一位在亚洲执教超过十年的 PGA Professional，如今在欧洲最好的高尔夫岛屿之一安排私人高尔夫体验日。如果这听起来像您想要的那种一天，欢迎联系我。',
        ],
        quote: '重新认真打球，只是再次确认了我一直相信的事：最快的进步通常发生在球场上，而不是练习场上。',
      },
    ],
    imageAlt: 'Andy Griffiths - UK PGA Advanced Professional, Mallorca',
    credentialsLabel: '资历',
    credentials: [
      { title: 'UKPGA Advanced Professional', detail: '累计执教超过 15,000 小时' },
      { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
      { title: 'TPI 三级认证', detail: 'Titleist Performance Institute' },
      { title: 'Trackman Master 认证', detail: '中国首位' },
      { title: 'US Kids Golf', detail: '全球 Top 50 教练' },
      { title: '上海 11 年', detail: '普通话流利' },
      { title: '中国国家队', detail: '青少年与竞技球员精英执教' },
      { title: '数亿次播放', detail: '抖音高尔夫教学内容' },
      { title: '出版作者', detail: 'Putting It Out There - A Life in Full Swing, 2016 (Amazon)', isBookLink: true },
      { title: '现居马略卡', detail: '自 2025 年 3 月起' },
    ],
    sidebarCta: {
      title: '在我的陪同下，打马略卡最好的球场。',
      body: 'Son Gual、Alcanada 以及更多球场的私人高尔夫日。所有安排都会提前完成，整天都包含球场上的实战指导。',
      button: '查看体验 →',
      href: '/zh/play-with-a-pro',
    },
    finalCta: {
      eyebrow: '准备好下场了吗？',
      title: '一位 PGA Advanced Professional。一座出色的高尔夫岛屿。属于您的这一轮。',
      body: '告诉我您的日期、差点以及您在寻找什么样的一天。我会给您明确的建议，并围绕这些来安排整天的体验。',
      primaryCta: '查看体验 →',
      primaryHref: '/zh/play-with-a-pro',
      secondaryCta: '联系我',
      secondaryHref: '/zh/contact',
    },
  },
}

export function getAboutContent`)

fs.writeFileSync(filePath, source, 'utf8')
