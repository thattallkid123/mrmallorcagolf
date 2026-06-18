import { getContactExperienceOptions } from './offers-content.js'

export const CONTACT_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      eyebrow: 'Get in touch',
      title: "Tell me the trip you're building. I'll help make it work.",
      intro:
        "If you already have dates, courses, or a rough itinerary, send it over. If you are still early, start with the itinerary planner first. Either way, I reply personally and help you turn the idea into a Mallorca golf plan that makes sense.",
    },
    cards: {
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Message on WhatsApp â†’',
      responseLabel: 'Response time',
      responseValue: 'Within 24 hours - usually sooner',
      basedLabel: 'Based in',
      basedValue: 'Mallorca, Spain',
    },
    success: {
      title: 'Enquiry received.',
      body:
        "I'll come back to you personally, usually within a few hours, always within 24. If you'd prefer to speak directly, WhatsApp is the fastest route.",
    },
    form: {
      eyebrow: 'Enquiry form',
      title: 'Start planning your trip.',
      intro: 'The more detail you give me, the better I can match the courses, add-ons, and timing to your group.',
      experienceHelpTitle: 'Which option fits you?',
      experienceHelp:
        'Choose the closest match and I will refine it with you. Trip planning means I shape the route around your dates and group. Play With A Pro means you want Andy on the course with you. If you are not sure yet, choose the unsure option and I will point you in the right direction.',
      sendPrompt:
        'Best details to send: dates, group size, hotel area, handicap range, and any courses already on your shortlist. If you are still deciding, just say what you are comparing and I will narrow it down for you.',
      labels: {
        fname: 'First name',
        lname: 'Last name',
        email: 'Email address',
        dates: 'Preferred trip dates',
        handicap: 'Your handicap',
        groupsize: 'Group size',
        experience: 'What do you want help with?',
        message: 'Anything else I should know',
      },
      placeholders: {
        fname: 'Andy',
        lname: 'Smith',
        email: 'andy@example.com',
        dates: 'e.g. 15-22 October 2026',
        handicap: "e.g. 14, or 'beginner'",
        message:
          "Dates, hotel area, courses you've heard of, budget, group mix, whether you want me on the course - anything helps me build the right plan.",
      },
      groupsizeOptions: [
        { value: '', label: 'Select group size' },
        { value: '1 - solo', label: '1 - solo' },
        { value: '2 - pair', label: '2 - pair' },
        { value: '3-4 - small group', label: '3-4 - small group' },
        { value: '5+ - larger group / corporate', label: '5+ - larger group / corporate' },
      ],
      experiences: [
        ['itinerary', 'Trip planning - professional planning', 'Enquiry'],
        ['mallorca-round', 'Play With A Pro - Solo', 'â‚¬695'],
        ['signature-day', 'Play With A Pro - Group', 'â‚¬950 total'],
        ['planning-plus-pwap', 'Planning + Play With A Pro add-on', 'Enquiry'],
        ['not-sure', 'Not sure yet - advise me', ''],
      ],
      submit: 'Send Enquiry â†’',
      note: 'I respond personally to every enquiry within 24 hours. Your details are used only to arrange your day.',
    },
    gift: {
      heading: 'Buying this as a gift?',
      body: "Let me know in the message above and I'll prepare a certificate and keep the day details private until you're ready to share them.",
    },
    trust: {
      eyebrow: 'Why people enquire',
      quote: "After just 18 holes together, I've discovered a new ceiling to my potential.",
      credit: 'Jo, Play With A Pro client',
    },
    whatNext: {
      heading: 'What happens next',
      body: 'I read every enquiry myself. I will come back within 24 hours with the clearest next step: the course logic, planning route, or the best way to add a Play With A Pro day.',
    },
    stayInTouch: {
      heading: 'Stay in touch',
      body: 'Course notes and Mallorca golf insights every two weeks straight to your inbox.',
    },
    dateCta: 'Build Your Itinerary',
  },
  de: {
    locale: 'de',
    hero: {
      eyebrow: 'Kontakt',
      title: 'Sagen Sie mir, was Sie suchen. Ich kÃ¼mmere mich um den Rest.',
      intro:
        'Kein Buchungssystem. Sagen Sie mir Ihre Daten, Ihr Handicap und was Sie sich von dem Tag erhoffen. Ich melde mich persÃ¶nlich bei Ihnen, meist innerhalb weniger Stunden und immer innerhalb von 24 Stunden.',
    },
    cards: {
      emailLabel: 'E-Mail',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Per WhatsApp schreiben â†’',
      responseLabel: 'Antwortzeit',
      responseValue: 'Innerhalb von 24 Stunden - meist schneller',
      basedLabel: 'Standort',
      basedValue: 'Mallorca, Spanien',
    },
    success: {
      title: 'Anfrage erhalten.',
      body: 'Ich melde mich persÃ¶nlich innerhalb von 24 Stunden. Wenn es schneller gehen soll, ist WhatsApp der einfachste Weg.',
    },
    form: {
      eyebrow: 'Anfrageformular',
      title: 'Beginnen Sie mit der Planung Ihres Tages.',
      intro: 'Je mehr Details Sie mir geben, desto besser kann ich den Tag auf Sie abstimmen.',
      experienceHelpTitle: 'Welche Option passt?',
      experienceHelp:
        'Waehlen Sie die naechste passende Option und ich verfeinere den Rest mit Ihnen. Reiseplanung bedeutet, dass ich Ablauf, Plaetze und Logik rund um Ihre Daten und Gruppe aufbaue. Play With A Pro bedeutet, dass Andy mit Ihnen auf dem Platz ist. Wenn Sie noch unsicher sind, waehlen Sie die unsichere Option und ich leite Sie in die richtige Richtung.',
      labels: {
        fname: 'Vorname',
        lname: 'Nachname',
        email: 'E-Mail-Adresse',
        dates: 'Bevorzugte Termine',
        handicap: 'Ihr Handicap',
        groupsize: 'GruppengrÃ¶ÃŸe',
        experience: 'Welche Option passt am besten?',
        message: 'Was sollte ich sonst noch wissen?',
      },
      placeholders: {
        fname: 'Max',
        lname: 'Mustermann',
        email: 'max@beispiel.de',
        dates: 'z. B. 15.-22. Oktober 2026',
        handicap: "z. B. 14 oder 'AnfÃ¤nger'",
        message: 'Ziele fÃ¼r den Tag, WunschplÃ¤tze, gemischte Gruppe, besondere WÃ¼nsche - alles hilft mir, den richtigen Tag fÃ¼r Sie zu planen.',
      },
      groupsizeOptions: [
        { value: '', label: 'GruppengrÃ¶ÃŸe wÃ¤hlen' },
        { value: '1 - solo', label: '1 - allein' },
        { value: '2 - pair', label: '2 - zu zweit' },
        { value: '3-4 - small group', label: '3-4 - kleine Gruppe' },
        { value: '5+ - larger group / corporate', label: '5+ - grÃ¶ÃŸere Gruppe / Firma' },
      ],
      experiences: [
        ['mallorca-round', 'Ein Tag mit Andy - Solo', 'â‚¬695'],
        ['signature-day', 'Ein Tag mit Andy - Gruppe', 'â‚¬950 insgesamt + Greenfees'],
        ['full-experience', 'MehrtÃ¤gige Reise', 'Auf Anfrage'],
        ['not-sure', 'Noch unsicher - beraten Sie mich', ''],
      ],
      submit: 'Anfrage senden â†’',
      note: 'Ich beantworte jede Anfrage persÃ¶nlich innerhalb von 24 Stunden. Ihre Angaben nutze ich nur, um Ihren Tag zu planen.',
    },
    gift: {
      heading: 'Schenken Sie diesen Tag?',
      body: 'Teilen Sie mir das bitte in der Nachricht oben mit. Ich bereite dann ein Zertifikat vor und halte die Details zur Erfahrung zurÃ¼ck, bis Sie bereit sind, sie zu teilen.',
    },
    trust: {
      eyebrow: 'Warum Menschen anfragen',
      quote: 'Nach nur 18 Loechern zusammen habe ich eine neue Grenze meines Potenzials entdeckt.',
      credit: 'Jo, Play With A Pro Kunde',
    },
    whatNext: {
      heading: 'Was passiert als NÃ¤chstes?',
      body: 'Ich lese jede Anfrage persÃ¶nlich. Sie hÃ¶ren von mir innerhalb von 24 Stunden mit einer Kursempfehlung und den nÃ¤chsten Schritten - normalerweise frÃ¼her. Wenn Sie lieber direkt sprechen mÃ¶chten, ist WhatsApp am schnellsten.',
    },
    stayInTouch: {
      heading: 'In Kontakt bleiben',
      body: 'Platz-Updates und Mallorca-Golf-Einblicke alle zwei Wochen.direkt in Ihr Postfach.',
    },
    dateCta: 'Meine Daten mitteilen',
  },
  es: {
    locale: 'es',
    hero: {
      eyebrow: 'Ponerse en contacto',
      title: 'DÃ­game quÃ© busca. Yo me encargo del resto.',
      intro:
        'Sin sistemas de reserva. DÃ­game sus fechas, su hÃ¡ndicap y lo que quiere del dÃ­a. Le responderÃ© personalmente, normalmente en unas horas y siempre dentro de 24.',
    },
    cards: {
      emailLabel: 'Correo electrÃ³nico',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Escribir por WhatsApp â†’',
      responseLabel: 'Tiempo de respuesta',
      responseValue: 'En 24 horas - normalmente antes',
      basedLabel: 'UbicaciÃ³n',
      basedValue: 'Mallorca, EspaÃ±a',
    },
    success: {
      title: 'Consulta recibida.',
      body: 'Le responderÃ© personalmente dentro de 24 horas. Si quiere hablar directamente, WhatsApp es la vÃ­a mÃ¡s rÃ¡pida.',
    },
    form: {
      eyebrow: 'Formulario de consulta',
      title: 'Empiece a planificar su dÃ­a.',
      intro: 'Cuantos mÃ¡s detalles me dÃ©, mejor podrÃ© adaptar el dÃ­a a usted.',
      labels: {
        fname: 'Nombre',
        lname: 'Apellido',
        email: 'Correo electrÃ³nico',
        dates: 'Fechas preferidas',
        handicap: 'Su hÃ¡ndicap',
        groupsize: 'TamaÃ±o del grupo',
        experience: 'Â¿QuÃ© opciÃ³n le encaja mejor?',
        message: 'Cualquier otra cosa que deba saber',
      },
      placeholders: {
        fname: 'Juan',
        lname: 'GarcÃ­a',
        email: 'juan@ejemplo.com',
        dates: 'p. ej. 15-22 octubre 2026',
        handicap: 'p. ej. 14 o "principiante"',
        message: 'Objetivos para el dÃ­a, campos que ha visto, grupo mixto, peticiones especÃ­ficas: cualquier detalle ayuda.',
      },
      groupsizeOptions: [
        { value: '', label: 'Seleccione el tamaÃ±o del grupo' },
        { value: '1 - solo', label: '1 - solo/a' },
        { value: '2 - pair', label: '2 - pareja' },
        { value: '3-4 - small group', label: '3-4 - grupo pequeÃ±o' },
        { value: '5+ - larger group / corporate', label: '5+ - grupo grande / empresa' },
      ],
      experiences: [
        ['mallorca-round', 'Un dÃ­a con Andy - Solo', 'â‚¬695'],
        ['signature-day', 'Un dÃ­a con Andy - Grupo', 'â‚¬950 en total + green fees'],
        ['full-experience', 'Viaje de varios dÃ­as', 'A consultar'],
        ['not-sure', 'AÃºn no lo sÃ© - aconsÃ©jeme', ''],
      ],
      submit: 'Enviar consulta â†’',
      note: 'Respondo personalmente a cada consulta en 24 horas. Sus datos se usan solo para organizar su jornada.',
    },
    gift: {
      heading: 'Â¿Es un regalo?',
      body: 'IndÃ­quemelo en el mensaje de arriba y prepararÃ© un certificado, manteniendo los detalles del dÃ­a en privado hasta que estÃ© listo para compartirlos.',
    },
    whatNext: {
      heading: 'QuÃ© ocurre a continuaciÃ³n',
      body: 'Leo cada consulta personalmente. Le responderÃ© en 24 horas con una recomendaciÃ³n de campo y los prÃ³ximos pasos - normalmente antes. Si prefiere hablar directamente, WhatsApp es la vÃ­a mÃ¡s rÃ¡pida.',
    },
    stayInTouch: {
      heading: 'Mantenerse en contacto',
      body: 'Notas sobre campos y consejos de golf en Mallorca cada dos semanas.directamente en su bandeja de entrada.',
    },
    dateCta: 'DÃ­game sus fechas',
  },
  fr: {
    locale: 'fr',
    hero: {
      eyebrow: 'Prendre contact',
      title: "Dites-moi ce que vous cherchez. Je m'occupe du reste.",
      intro:
        'Pas de systÃ¨me de rÃ©servation. Donnez-moi vos dates, votre handicap et ce que vous attendez de la journÃ©e. Je vous rÃ©pondrai personnellement, souvent en quelques heures et toujours sous 24 heures.',
    },
    cards: {
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Ã‰crire sur WhatsApp â†’',
      responseLabel: 'DÃ©lai de rÃ©ponse',
      responseValue: 'Sous 24 heures - souvent plus vite',
      basedLabel: 'BasÃ© Ã ',
      basedValue: 'Majorque, Espagne',
    },
    success: {
      title: 'Demande reÃ§ue.',
      body: 'Je vous rÃ©pondrai personnellement sous 24 heures. Si vous prÃ©fÃ©rez parler directement, WhatsApp est le plus rapide.',
    },
    form: {
      eyebrow: 'Formulaire de contact',
      title: 'Commencez Ã  planifier votre journÃ©e.',
      intro: 'Plus vous me donnez de dÃ©tails, mieux je pourrai adapter la journÃ©e Ã  vous.',
      labels: {
        fname: 'PrÃ©nom',
        lname: 'Nom',
        email: 'Adresse e-mail',
        dates: 'Dates souhaitÃ©es',
        handicap: 'Votre handicap',
        groupsize: 'Taille du groupe',
        experience: 'Quelle formule vous convient le mieux ?',
        message: 'Autre chose que je devrais savoir',
      },
      placeholders: {
        fname: 'Jean',
        lname: 'Dupont',
        email: 'jean@exemple.com',
        dates: 'ex. 15-22 octobre 2026',
        handicap: "ex. 14 ou 'dÃ©butant'",
        message: 'Vos objectifs, les parcours que vous regardez, un groupe mixte, des demandes spÃ©cifiques : tout mâ€™aide Ã  prÃ©parer la bonne journÃ©e.',
      },
      groupsizeOptions: [
        { value: '', label: 'Choisir la taille du groupe' },
        { value: '1 - solo', label: '1 - seul(e)' },
        { value: '2 - pair', label: '2 - duo' },
        { value: '3-4 - small group', label: '3-4 - petit groupe' },
        { value: '5+ - larger group / corporate', label: '5+ - grand groupe / entreprise' },
      ],
      experiences: [
        ['mallorca-round', 'Une journÃ©e avec Andy - Solo', 'â‚¬695'],
        ['signature-day', 'Une journÃ©e avec Andy - Groupe', 'â‚¬950 au total'],
        ['full-experience', 'SÃ©jour sur plusieurs jours', 'Sur demande'],
        ['not-sure', 'Je ne suis pas encore certain(e) - conseillez-moi', ''],
      ],
      submit: 'Envoyer la demande â†’',
      note: 'Je rÃ©ponds personnellement Ã  chaque demande sous 24 heures. Vos coordonnÃ©es servent uniquement Ã  organiser votre journÃ©e.',
    },
    gift: {
      heading: 'Vous offrez cette journÃ©e ?',
      body: "Mentionnez-le dans le message ci-dessus et je prÃ©parerai un certificat, en gardant les dÃ©tails confidentiels jusqu'Ã  ce que vous soyez prÃªt Ã  les partager.",
    },
    whatNext: {
      heading: 'Que se passe-t-il ensuite ?',
      body: 'Je lis chaque demande personnellement. Vous aurez de mes nouvelles sous 24 heures avec une recommandation de parcours et les prochaines Ã©tapes - souvent plus tÃ´t. Si vous prÃ©fÃ©rez parler directement, WhatsApp est le plus rapide.',
    },
    stayInTouch: {
      heading: 'Rester en contact',
      body: 'Notes de parcours et conseils golf Ã  Majorque toutes les deux semaines.directement dans votre boÃ®te mail.',
    },
    dateCta: 'Dites-moi vos dates',
  },
  nl: {
    locale: 'nl',
    hero: {
      eyebrow: 'Neem contact op',
      title: 'Vertel me wat u zoekt. Ik regel de rest.',
      intro:
        'Geen boekingssysteem. Vertel me uw data, uw handicap en wat u van de dag wilt. Ik reageer persoonlijk, meestal binnen een paar uur en altijd binnen 24 uur.',
    },
    cards: {
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Stuur een WhatsApp-bericht â†’',
      responseLabel: 'Reactietijd',
      responseValue: 'Binnen 24 uur - meestal sneller',
      basedLabel: 'Gevestigd in',
      basedValue: 'Mallorca, Spanje',
    },
    success: {
      title: 'Aanvraag ontvangen.',
      body: 'Ik reageer persoonlijk binnen 24 uur. Als u liever direct spreekt, is WhatsApp de snelste route.',
    },
    form: {
      eyebrow: 'Aanvraagformulier',
      title: 'Begin met het plannen van uw dag.',
      intro: 'Hoe meer details u me geeft, hoe beter ik de dag op u kan afstemmen.',
      labels: {
        fname: 'Voornaam',
        lname: 'Achternaam',
        email: 'E-mailadres',
        dates: 'Gewenste data',
        handicap: 'Uw handicap',
        groupsize: 'Groepsgrootte',
        experience: 'Welke optie past het best?',
        message: 'Is er verder nog iets dat ik moet weten?',
      },
      placeholders: {
        fname: 'Jan',
        lname: 'de Vries',
        email: 'jan@voorbeeld.com',
        dates: 'bijv. 15-22 oktober 2026',
        handicap: "bijv. 14 of 'beginner'",
        message: 'Doelen voor de dag, banen die u op het oog heeft, gemengde groep, speciale wensen - elk detail helpt.',
      },
      groupsizeOptions: [
        { value: '', label: 'Kies groepsgrootte' },
        { value: '1 - solo', label: '1 - solo' },
        { value: '2 - pair', label: '2 - tweetal' },
        { value: '3-4 - small group', label: '3-4 - kleine groep' },
        { value: '5+ - larger group / corporate', label: '5+ - grotere groep / bedrijf' },
      ],
      experiences: [
        ['mallorca-round', 'Een dag met Andy - Solo', 'â‚¬695'],
        ['signature-day', 'Een dag met Andy - Groep', 'â‚¬950 in totaal'],
        ['full-experience', 'Meerdaagse reis', 'Op aanvraag'],
        ['not-sure', 'Nog niet zeker - adviseer me', ''],
      ],
      submit: 'Aanvraag versturen â†’',
      note: 'Ik reageer persoonlijk op elke aanvraag binnen 24 uur. Uw gegevens worden alleen gebruikt om uw dag te organiseren.',
    },
    gift: {
      heading: 'Is dit een cadeau?',
      body: 'Vermeld het in het bericht hierboven en ik maak een certificaat klaar, waarbij ik de details van de dag privÃ© houd totdat u klaar bent om ze te delen.',
    },
    whatNext: {
      heading: 'Wat gebeurt er daarna?',
      body: 'Ik lees elke aanvraag persoonlijk. U hoort binnen 24 uur van mij met een baanaanbeveling en de volgende stappen - meestal eerder. Als u liever direct spreekt, is WhatsApp de snelste route.',
    },
    stayInTouch: {
      heading: 'Blijf op de hoogte',
      body: 'Baannotities en Mallorca golf-inzichten elke twee weken.rechtstreeks in uw inbox.',
    },
    dateCta: 'Vertel me uw data',
  },
  sv: {
    locale: 'sv',
    hero: {
      eyebrow: 'HÃ¶r av dig',
      title: 'BerÃ¤tta vad du sÃ¶ker. Jag ordnar resten.',
      intro:
        'Inga bokningssystem. BerÃ¤tta om dina datum, ditt handicap och vad du vill fÃ¥ ut av dagen. Jag svarar personligen, oftast inom nÃ¥gra timmar och alltid inom 24 timmar.',
    },
    cards: {
      emailLabel: 'E-post',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Skicka ett WhatsApp-meddelande â†’',
      responseLabel: 'Svarstid',
      responseValue: 'Inom 24 timmar - oftast snabbare',
      basedLabel: 'Bas i',
      basedValue: 'Mallorca, Spanien',
    },
    success: {
      title: 'FÃ¶rfrÃ¥gan mottagen.',
      body: 'Jag Ã¥terkommer personligen inom 24 timmar. Om du vill prata direkt Ã¤r WhatsApp den snabbaste vÃ¤gen.',
    },
    form: {
      eyebrow: 'FÃ¶rfrÃ¥gan',
      title: 'BÃ¶rja planera din dag.',
      intro: 'Ju mer detaljer du ger mig, desto bÃ¤ttre kan jag anpassa dagen efter dig.',
      labels: {
        fname: 'FÃ¶rnamn',
        lname: 'Efternamn',
        email: 'E-postadress',
        dates: 'Ã–nskade datum',
        handicap: 'Ditt handicap',
        groupsize: 'Gruppstorlek',
        experience: 'Vilket upplÃ¤gg passar dig bÃ¤st?',
        message: 'NÃ¥got annat jag bÃ¶r veta',
      },
      placeholders: {
        fname: 'Erik',
        lname: 'Svensson',
        email: 'erik@exempel.se',
        dates: 't.ex. 15-22 oktober 2026',
        handicap: "t.ex. 14 eller 'nybÃ¶rjare'",
        message: 'MÃ¥l fÃ¶r dagen, banor du tittar pÃ¥, blandad grupp, sÃ¤rskilda Ã¶nskemÃ¥l - allt hjÃ¤lper mig att skapa rÃ¤tt dag.',
      },
      groupsizeOptions: [
        { value: '', label: 'VÃ¤lj gruppstorlek' },
        { value: '1 - solo', label: '1 - solo' },
        { value: '2 - pair', label: '2 - par' },
        { value: '3-4 - small group', label: '3-4 - liten grupp' },
        { value: '5+ - larger group / corporate', label: '5+ - stÃ¶rre grupp / fÃ¶retag' },
      ],
      experiences: [
        ['mallorca-round', 'En dag med Andy - Solo', 'â‚¬695'],
        ['signature-day', 'En dag med Andy - Grupp', 'â‚¬950 totalt'],
        ['full-experience', 'Flerdagarsresa', 'PÃ¥ fÃ¶rfrÃ¥gan'],
        ['not-sure', 'Inte sÃ¤ker Ã¤nnu - ge mig rÃ¥d', ''],
      ],
      submit: 'Skicka fÃ¶rfrÃ¥gan â†’',
      note: 'Jag svarar personligen pÃ¥ varje fÃ¶rfrÃ¥gan inom 24 timmar. Dina uppgifter anvÃ¤nds bara fÃ¶r att planera din dag.',
    },
    gift: {
      heading: 'KÃ¶per du detta som en present?',
      body: 'BerÃ¤tta det i meddelandet ovan sÃ¥ fÃ¶rbereder jag ett presentkort och hÃ¥ller dagsinformationen privat tills du Ã¤r redo att dela den.',
    },
    whatNext: {
      heading: 'Vad hÃ¤nder hÃ¤rnÃ¤st?',
      body: 'Jag lÃ¤ser varje fÃ¶rfrÃ¥gan personligen. Du hÃ¶r av mig inom 24 timmar med en banrekommendation och nÃ¤sta steg - oftast snabbare. Om du fÃ¶redrar att prata direkt Ã¤r WhatsApp snabbast.',
    },
    stayInTouch: {
      heading: 'HÃ¥ll kontakten',
      body: 'Bannoteringar och golfinblickar frÃ¥n Mallorca varannan vecka.direkt till din inkorg.',
    },
    dateCta: 'BerÃ¤tta dina datum',
  },
  zh: {
    locale: 'zh',
    hero: {
      eyebrow: 'è”ç³»æˆ‘',
      title: 'å‘Šè¯‰æˆ‘æ‚¨æƒ³è¦æ€Žæ ·çš„ä¸€å¤©ã€‚å…¶ä½™çš„æˆ‘æ¥å®‰æŽ’ã€‚',
      intro:
        'è¿™é‡Œæ²¡æœ‰è‡ªåŠ¨é¢„è®¢ç³»ç»Ÿã€‚å‘Šè¯‰æˆ‘æ‚¨çš„æ—¥æœŸã€å·®ç‚¹ä»¥åŠæ‚¨å¸Œæœ›è¿™ä¸€å¤©è¾¾åˆ°ä»€ä¹ˆæ•ˆæžœã€‚æˆ‘ä¼šäº²è‡ªå›žå¤æ‚¨ï¼Œé€šå¸¸å‡ å°æ—¶å†…ï¼Œæœ€æ™šä¸è¶…è¿‡ 24 å°æ—¶ã€‚',
    },
    cards: {
      emailLabel: 'ç”µå­é‚®ç®±',
      whatsappLabel: 'å¾®ä¿¡',
      whatsappValue: 'é€šè¿‡å¾®ä¿¡è”ç³» â†’',
      responseLabel: 'å›žå¤æ—¶é—´',
      responseValue: '24 å°æ—¶å†… - é€šå¸¸æ›´å¿«',
      basedLabel: 'æ‰€åœ¨åœ°',
      basedValue: 'é©¬ç•¥å¡ï¼Œè¥¿ç­ç‰™',
      wechatLabel: 'å¾®ä¿¡',
      wechatValue: 'andygriffiths1',
    },
    success: {
      title: 'å·²æ”¶åˆ°æ‚¨çš„å’¨è¯¢ã€‚',
      body: 'æˆ‘ä¼šåœ¨ 24 å°æ—¶å†…äº²è‡ªå›žå¤æ‚¨ã€‚å¦‚æžœæ‚¨å¸Œæœ›æ›´å¿«æ²Ÿé€šï¼Œå¯ä»¥ç›´æŽ¥åŠ æˆ‘å¾®ä¿¡ã€‚',
      fasterReplyText: 'æƒ³æ›´å¿«è”ç³»åˆ°æˆ‘ï¼Ÿ',
      fasterReplyCta: 'é€šè¿‡å¾®ä¿¡è”ç³» Andy â†’',
      fasterReplyCta_href: '/zh/contact#wechat',
    },
    form: {
      eyebrow: 'å’¨è¯¢è¡¨å•',
      title: 'å¼€å§‹å®‰æŽ’æ‚¨çš„è¿™ä¸€å¤©ã€‚',
      intro: 'æ‚¨æä¾›çš„ä¿¡æ¯è¶Šè¯¦ç»†ï¼Œæˆ‘å°±è¶Šèƒ½æŠŠè¿™ä¸€å¤©å®‰æŽ’å¾—æ›´è´´åˆæ‚¨çš„çƒå’Œæ‚¨çš„éœ€æ±‚ã€‚',
      handicapOptional: 'ï¼ˆå¯é€‰ï¼‰',
      sendPromptLabel: 'å»ºè®®æä¾›ä»¥ä¸‹ä¿¡æ¯',
      labels: {
        fname: 'åå­—',
        lname: 'å§“æ°',
        email: 'ç”µå­é‚®ç®±',
        dates: 'å¸Œæœ›çš„æ—¥æœŸ',
        handicap: 'æ‚¨çš„å·®ç‚¹',
        groupsize: 'äººæ•°',
        experience: 'æ‚¨æ›´æƒ³äº†è§£å“ªç§å®‰æŽ’ï¼Ÿ',
        message: 'è¿˜æœ‰ä»€ä¹ˆæˆ‘åº”è¯¥çŸ¥é“çš„ï¼Ÿ',
      },
      placeholders: {
        fname: 'å¼ ',
        lname: 'å…ˆç”Ÿ',
        email: 'zhang@example.com',
        dates: 'ä¾‹å¦‚ 2026 å¹´ 10 æœˆ 15-22 æ—¥',
        handicap: "ä¾‹å¦‚ 14 æˆ– 'åˆå­¦è€…'",
        message: 'è¿™ä¸€å¤©çš„ç›®æ ‡ã€æ‚¨åœ¨è€ƒè™‘çš„çƒåœºã€æ˜¯å¦ä¸ºæ··åˆæ°´å¹³å°ç»„ã€ç‰¹åˆ«è¦æ±‚ç­‰ï¼Œä»»ä½•ä¿¡æ¯éƒ½èƒ½å¸®åŠ©æˆ‘å®‰æŽ’å¾—æ›´å‡†ç¡®ã€‚',
      },
      groupsizeOptions: [
        { value: '', label: 'é€‰æ‹©äººæ•°' },
        { value: '1 - solo', label: '1 äºº - å•äºº' },
        { value: '2 - pair', label: '2 äºº - åŒäºº' },
        { value: '3-4 - small group', label: '3-4 äºº - å°ç»„' },
        { value: '5+ - larger group / corporate', label: '5 äººä»¥ä¸Š - å›¢é˜Ÿ / å…¬å¸' },
      ],
      experiences: [
        ['mallorca-round', 'ä¸Ž Andy å…±åº¦ä¸€å¤© - å•äºº', 'â‚¬695'],
        ['signature-day', 'ä¸Ž Andy å…±åº¦ä¸€å¤© - å°ç»„', 'â‚¬950 ??'],
        ['full-experience', 'å¤šæ—¥è¡Œç¨‹', 'æŒ‰éœ€æŠ¥ä»·'],
        ['not-sure', 'æš‚æ—¶ä¸ç¡®å®š - è¯·ç»™æˆ‘å»ºè®®', ''],
      ],
      submit: 'å‘é€å’¨è¯¢ â†’',
      note: 'æˆ‘ä¼šåœ¨ 24 å°æ—¶å†…äº²è‡ªå›žå¤æ¯ä¸€æ¡å’¨è¯¢ã€‚æ‚¨çš„ä¿¡æ¯åªä¼šç”¨äºŽå®‰æŽ’æ‚¨çš„è¿™ä¸€å¤©ã€‚',
    },
    gift: {
      heading: 'è¿™æ˜¯ä¸€ä»½ç¤¼ç‰©ï¼Ÿ',
      body: 'è¯·åœ¨ä¸Šæ–¹ç•™è¨€å‘ŠçŸ¥æˆ‘ï¼Œæˆ‘ä¼šå‡†å¤‡ä¸€å¼ ç¤¼å“è¯ä¹¦ï¼Œå¹¶åœ¨æ‚¨å‡†å¤‡å¥½åˆ†äº«ä¹‹å‰ä¿å¯†è¡Œç¨‹ç»†èŠ‚ã€‚',
    },
    whatNext: {
      heading: 'æŽ¥ä¸‹æ¥ä¼šå‘ç”Ÿä»€ä¹ˆ',
      body: 'æˆ‘ä¼šäº²è‡ªé˜…è¯»æ¯ä¸€æ¡å’¨è¯¢ã€‚24 å°æ—¶å†…æ‚¨å°†æ”¶åˆ°æˆ‘çš„å›žå¤ï¼ŒåŒ…æ‹¬çƒåœºæŽ¨èå’ŒåŽç»­æ­¥éª¤ - é€šå¸¸æ›´å¿«ã€‚å¦‚æžœæ‚¨å¸Œæœ›ç›´æŽ¥æ²Ÿé€šï¼Œå¾®ä¿¡æ˜¯æœ€å¿«çš„æ–¹å¼ã€‚',
    },
    stayInTouch: {
      heading: 'ä¿æŒè”ç³»',
      body: 'æ¯ä¸¤å‘¨å‘é€ä¸€æ¬¡é©¬ç•¥å¡çƒåœºåŠ¨æ€å’Œé«˜å°”å¤«èµ„è®¯â€”â€”ç›´æŽ¥å‘é€åˆ°æ‚¨çš„æ”¶ä»¶ç®±ã€‚',
    },
    dateCta: 'å‘Šè¯‰æˆ‘æ‚¨çš„æ—¥æœŸ',
  },
}

const CONTACT_FORM_HELP = {
  de: {
    experienceHelpTitle: 'Welche Option passt?',
    experienceHelp:
      'Waehlen Sie die naechste passende Option und ich verfeinere den Rest mit Ihnen. Reiseplanung bedeutet, dass ich Ablauf, Plaetze und Logik rund um Ihre Daten und Gruppe aufbaue. Play With A Pro bedeutet, dass Andy mit Ihnen auf dem Platz ist. Wenn Sie noch unsicher sind, waehlen Sie die unsichere Option und ich leite Sie in die richtige Richtung.',
  },
  es: {
    experienceHelpTitle: 'Que opcion le encaja?',
    experienceHelp:
      'Elija la opcion mas cercana y yo afinare el resto con usted. Planificacion de viaje significa que organizo la ruta, los campos y la logica alrededor de sus fechas y su grupo. Play With A Pro significa que Andy estara con usted en el campo. Si todavia no lo tiene claro, elija la opcion de duda y yo le orientare.',
  },
  fr: {
    experienceHelpTitle: 'Quelle option vous correspond ?',
    experienceHelp:
      'Choisissez l option la plus proche et j affine le reste avec vous. La planification de voyage signifie que je construis le parcours, la logique et le rythme autour de vos dates et de votre groupe. Play With A Pro signifie qu Andy sera sur le parcours avec vous. Si vous n etes pas encore certain, choisissez l option d hesitation et je vous orienterai.',
  },
  nl: {
    experienceHelpTitle: 'Welke optie past het best?',
    experienceHelp:
      'Kies de optie die het dichtst in de buurt komt en ik werk de rest met u uit. Reisplanning betekent dat ik route, banen en timing opbouw rond uw data en uw groep. Play With A Pro betekent dat Andy met u op de baan is. Twijfelt u nog, kies dan de onzekere optie en ik help u de juiste richting op.',
  },
  sv: {
    experienceHelpTitle: 'Vilket upplagg passar bast?',
    experienceHelp:
      'Valj det alternativ som ligger narmast och sa finjusterar jag resten med dig. Reseplanering betyder att jag bygger rutten, banvalet och upplagget runt dina datum och din grupp. Play With A Pro betyder att Andy ar med dig ute pa banan. Om du inte ar saker annu, valj det osakra alternativet sa pekar jag dig ratt.',
  },
  zh: {
    experienceHelpTitle: 'å“ªä¸€ç§å®‰æŽ’æ›´åˆé€‚ï¼Ÿ',
    experienceHelp:
      'è¯·é€‰æ‹©æœ€æŽ¥è¿‘çš„é€‰é¡¹ï¼Œæˆ‘ä¼šåœ¨æ­¤åŸºç¡€ä¸Šå¸®æ‚¨ç»†åŒ–ã€‚è¡Œç¨‹è§„åˆ’æ„å‘³ç€æˆ‘ä¼šä¸ºæ‚¨çš„æ—¥æœŸå’ŒåŒè¡Œäººå®‰æŽ’çƒåœºã€è·¯çº¿å’ŒèŠ‚å¥ã€‚ä¸Ž Andy åŒåœºæ„å‘³ç€ Andy ä¼šå’Œæ‚¨ä¸€èµ·ä¸‹åœºã€‚å¦‚æžœè¿˜ä¸ç¡®å®šï¼Œå°±é€‰æ‹©ä¸ç¡®å®šçš„é€‰é¡¹ï¼Œæˆ‘ä¼šå¸®æ‚¨åˆ¤æ–­ã€‚',
  },
}

const CONTACT_SEND_PROMPT = {
  en: 'Best details to send: dates, group size, hotel area, handicap range, and any courses already on your shortlist.',
  de: 'Am besten senden: Daten, Gruppengroesse, Hotelregion, Handicap und alle Plaetze, die schon auf Ihrer Liste stehen.',
  es: 'Mejor enviar: fechas, tamano del grupo, zona de hotel, handicap y los campos que ya tenga en mente.',
  fr: 'Idealement : dates, taille du groupe, zone d hotel, niveau et parcours deja envisages.',
  nl: 'Graag meesturen: data, groepsgrootte, hotelregio, handicap en banen die al op uw shortlist staan.',
  sv: 'Skicka garna: datum, gruppstorlek, hotellomrade, handicap och banor ni redan funderar pa.',
  zh: 'å»ºè®®ä¸€å¹¶å‘ŠçŸ¥ï¼šå‡ºè¡Œæ—¥æœŸã€äººæ•°ã€ä½å®¿åŒºåŸŸã€å·®ç‚¹èŒƒå›´ï¼Œä»¥åŠæ‚¨å·²è€ƒè™‘çš„çƒåœºã€‚',
}

const CONTACT_TRUST = {
  de: {
    eyebrow: 'Warum Menschen anfragen',
    quote: 'Nach nur 18 Loechern zusammen habe ich eine neue Grenze meines Potenzials entdeckt.',
    credit: 'Jo, Play With A Pro Kunde',
  },
  es: {
    eyebrow: 'Por que la gente consulta',
    quote: 'Despues de solo 18 hoyos juntos, he descubierto un nuevo techo para mi potencial.',
    credit: 'Jo, cliente de Play With A Pro',
  },
  fr: {
    eyebrow: 'Pourquoi les gens prennent contact',
    quote: 'Apres seulement 18 trous ensemble, j ai decouvert un nouveau plafond a mon potentiel.',
    credit: 'Jo, client Play With A Pro',
  },
  nl: {
    eyebrow: 'Waarom mensen aanvragen',
    quote: 'Na slechts 18 holes samen heb ik een nieuw plafond in mijn potentieel ontdekt.',
    credit: 'Jo, Play With A Pro klant',
  },
  sv: {
    eyebrow: 'Varfor folk hor av sig',
    quote: 'Efter bara 18 hal tillsammans upptackte jag ett nytt tak for min potential.',
    credit: 'Jo, Play With A Pro-kund',
  },
  zh: {
    eyebrow: 'ä¸ºä»€ä¹ˆå¤§å®¶ä¼šæ¥å’¨è¯¢',
    quote: 'åªæ‰“äº† 18 æ´žï¼Œæˆ‘å°±å‘çŽ°è‡ªå·±çš„æ½œåŠ›è¿˜èƒ½å†å¾€ä¸Šèµ°ä¸€å±‚ã€‚',
    credit: 'Joï¼ŒåŒåœºé™ªæ‰“å®¢æˆ·',
  },
}

export function getContactContent(locale = 'en') {
  const content = CONTACT_CONTENT[locale] || CONTACT_CONTENT.en

  return {
    ...content,
    trust: content.trust || CONTACT_TRUST[locale] || CONTACT_CONTENT.en.trust,
    form: {
      ...content.form,
      ...(content.form?.experienceHelpTitle ? {} : CONTACT_FORM_HELP[locale]),
      sendPrompt: content.form?.sendPrompt || CONTACT_SEND_PROMPT[locale] || CONTACT_SEND_PROMPT.en,
      experiences: getContactExperienceOptions(locale),
    },
  }
}
