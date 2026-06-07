'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { buildLocalePath } from '../../../lib/site'

const ITINERARY_COPY = {
  en: {
    options: {
      nights: [
        { value: 'day', label: 'Day trip / 1 round' },
        { value: 'short', label: '1-2 nights' },
        { value: 'medium', label: '3-4 nights' },
        { value: 'long', label: '5-6 nights' },
        { value: 'week', label: '7+ nights' },
        { value: 'other', label: 'Custom length', freeText: true },
      ],
      group: [
        { value: 'solo', label: 'Solo or pair' },
        { value: 'friends', label: 'Friends trip' },
        { value: 'family', label: 'Family or mixed group' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'other', label: 'Something different', freeText: true },
      ],
      level: [
        { value: 'mixed', label: 'Mixed handicaps' },
        { value: 'newer', label: 'Newer / higher handicap' },
        { value: 'club', label: 'Regular club golfers' },
        { value: 'strong', label: 'Low handicap / strong players' },
        { value: 'other', label: 'More detail', freeText: true },
      ],
      golf: [
        { value: 'relaxed', label: 'A couple of relaxed rounds' },
        { value: 'balanced', label: 'Three or four good rounds' },
        { value: 'serious', label: 'Play the best courses available' },
        { value: 'other', label: 'More detail', freeText: true },
      ],
      base: [
        { value: 'palma', label: 'Palma / Son Vida' },
        { value: 'southwest', label: 'Southwest' },
        { value: 'north', label: 'North / Alcudia' },
        { value: 'unsure', label: 'Not sure yet' },
        { value: 'other', label: 'Another base', freeText: true },
      ],
      season: [
        { value: 'spring', label: 'Spring (Mar-May)' },
        { value: 'summer', label: 'Summer (Jun-Aug)' },
        { value: 'autumn', label: 'Autumn (Sep-Nov)' },
        { value: 'winter', label: 'Winter (Dec-Feb)' },
      ],
      budget: [
        { value: 'value', label: 'Good value' },
        { value: 'balanced', label: 'Balanced' },
        { value: 'premium', label: 'Premium' },
      ],
    },
    labels: {
      nights: 'Trip length',
      group: 'Who is travelling',
      level: 'Playing level',
      golf: 'How much golf',
      base: 'Where to base',
      season: 'When',
      budget: 'Budget style',
    },
    placeholders: {
      nights: 'Select trip length',
      group: 'Select group type',
      level: 'Select playing level',
      golf: 'Select golf appetite',
      base: 'Select base idea',
      season: 'Select season',
      budget: 'Select budget style',
    },
    introEyebrow: 'Mallorca golf course finder',
    introTitle: 'Find courses to start from.',
    introBody: 'Two options sit here. The free tool gives you a basic course shortlist. The paid planning service is where I build the trip properly: base, route, tee times, rentals, dining, and the day-by-day shape.',
    tripInputsLabel: 'Trip inputs',
    prioritiesLabel: 'What matters most to you?',
    startingPoint: 'Starting point',
    coursesToConsider: 'Courses to consider',
    startingPointBody: 'Use this as a shortlist only. I will confirm the right course order, base, tee times, and route if you want the full trip planned.',
    basicTool: 'Basic tool',
    courseShortlist: 'Course shortlist',
    whatThisGivesYou: 'What this gives you',
    whatThisGivesYouBody: 'A few courses worth considering for your group, level, season, and budget.',
    whatItDoesNotGiveYou: 'What it does not give you',
    whatItDoesNotGiveYouBody: 'No base advice, routing, tee-time plan, or day-by-day itinerary.',
    possibleAddOn: 'Possible add-on',
    courseMix: 'Course mix',
    paidPlanning: 'For the paid planning service',
    nextParagraph: 'If these courses look close, send them over. I can then build the proper plan: where to stay, how to route the trip, how many rounds to play, and what needs booking.',
    sendCourseList: 'Send course list',
    getInTouch: 'Get in touch',
    possibleRounds: 'possible rounds',
    style: 'style',
    budgetLabel: 'budget',
    summaryLabel: 'Trip summary',
    routeLabels: {
      day: 'Day trip / 1 round',
      short: '1-2 nights',
      medium: '3-4 nights',
      long: '5-6 nights',
      week: '7+ nights',
    },
    paceLabels: {
      lowTravel: 'Low-transfer route',
      serious: 'Premium-course route',
      default: 'Balanced itinerary',
    },
    budgetLabels: {
      value: 'Good value',
      balanced: 'Balanced',
      premium: 'Premium',
    },
    dayLabel: (n) => `Day ${n}`,
    pwapDayLabel: 'Play With A Pro',
    pwapDayTitle: 'A private day with Andy',
    pwapDayDetail: 'Course management, local decisions, and coaching folded into the round.',
    breathingSpaceLabel: 'Breathing space',
    longLunchTitle: 'Long lunch or Palma evening',
    restAfternoonTitle: 'Rest afternoon',
    breathingSpaceDetail: 'This is where the trip starts to feel planned, not crammed.',
    snapshotCourseTitle: 'Courses to consider',
    snapshotBody: 'Use this as a shortlist only. I will confirm the right course order, base, tee times, and route if you want the full trip planned.',
    courseNotesFallback: 'A course I would consider for this draft.',
    regionFallback: 'Mallorca',
    tripSummaryTitle: 'Trip summary',
    startWith: 'Start with',
    whatThisToolDoes: 'Basic tool',
    watchoutTitle: 'For the paid planning service',
    whatsappPrefix: 'Hi Andy, I used the course finder on the site.',
    whatsappPrompt: 'Can you help me turn this into a proper plan and quote?',
    watchoutFallback: 'Before booking, I would check the course order, tee times, and travel time together. That is where most expensive mistakes happen.',
    seasonAdvice: {
      spring: 'Spring is premium for conditions, so tee times and the best-value slots need sorting early.',
      summer: 'Summer can be excellent value if you are sensible with tee times, buggies, water, and recovery time.',
      autumn: 'Autumn is one of the best windows, but it is no longer a cheap secret. Book the key rounds early.',
      winter: 'Winter is usually the best value window, with good golf possible if you stay flexible on weather and wind.',
    },
  },
  de: {
    options: {
      nights: [
        { value: 'day', label: 'Tagestrip / 1 Runde' },
        { value: 'short', label: '1-2 Nächte' },
        { value: 'medium', label: '3-4 Nächte' },
        { value: 'long', label: '5-6 Nächte' },
        { value: 'week', label: '7+ Nächte' },
        { value: 'other', label: 'Eigene Länge', freeText: true },
      ],
      group: [
        { value: 'solo', label: 'Allein oder zu zweit' },
        { value: 'friends', label: 'Freundesgruppe' },
        { value: 'family', label: 'Familie oder gemischt' },
        { value: 'corporate', label: 'Firmenreise' },
        { value: 'other', label: 'Etwas anderes', freeText: true },
      ],
      level: [
        { value: 'mixed', label: 'Gemischte Handicaps' },
        { value: 'newer', label: 'Weniger erfahren / höheres Handicap' },
        { value: 'club', label: 'Regelmäßige Clubgolfer' },
        { value: 'strong', label: 'Niedriges Handicap / starke Spieler' },
        { value: 'other', label: 'Mehr Details', freeText: true },
      ],
      golf: [
        { value: 'relaxed', label: 'Ein paar entspannte Runden' },
        { value: 'balanced', label: 'Drei oder vier gute Runden' },
        { value: 'serious', label: 'Die besten verfügbaren Plätze spielen' },
        { value: 'other', label: 'Mehr Details', freeText: true },
      ],
      base: [
        { value: 'palma', label: 'Palma / Son Vida' },
        { value: 'southwest', label: 'Südwesten' },
        { value: 'north', label: 'Norden / Alcudia' },
        { value: 'unsure', label: 'Noch unsicher' },
        { value: 'other', label: 'Andere Basis', freeText: true },
      ],
      season: [
        { value: 'spring', label: 'Frühling (März-Mai)' },
        { value: 'summer', label: 'Sommer (Jun-Aug)' },
        { value: 'autumn', label: 'Herbst (Sep-Nov)' },
        { value: 'winter', label: 'Winter (Dez-Feb)' },
      ],
      budget: [
        { value: 'value', label: 'Preiswert' },
        { value: 'balanced', label: 'Ausgewogen' },
        { value: 'premium', label: 'Premium' },
      ],
    },
    labels: { nights: 'Reisedauer', group: 'Wer reist', level: 'Spielstärke', golf: 'Wie viel Golf', base: 'Basis', season: 'Wann', budget: 'Budgetstil' },
    placeholders: { nights: 'Reisedauer wählen', group: 'Gruppentyp wählen', level: 'Spielstärke wählen', golf: 'Golfumfang wählen', base: 'Basis wählen', season: 'Jahreszeit wählen', budget: 'Budgetstil wählen' },
    introEyebrow: 'Mallorca-Platzfinder',
    introTitle: 'Finden Sie passende Plätze.',
    introBody: 'Hier gibt es zwei Wege. Das kostenlose Tool gibt Ihnen eine erste Shortlist. Der bezahlte Planungsservice ist der Teil, in dem ich die Reise richtig aufbaue: Basis, Route, Startzeiten, Leihschläger, Essen und die Tagesstruktur.',
    tripInputsLabel: 'Reisedaten',
    prioritiesLabel: 'Was ist Ihnen am wichtigsten?',
    startingPoint: 'Ausgangspunkt',
    coursesToConsider: 'Zu prüfende Plätze',
    startingPointBody: 'Nur als Shortlist verwenden. Ich bestätige Reihenfolge, Basis, Startzeiten und Route, wenn Sie den ganzen Trip planen lassen.',
    basicTool: 'Basis-Tool',
    courseShortlist: 'Platz-Shortlist',
    whatThisGivesYou: 'Was Sie erhalten',
    whatThisGivesYouBody: 'Ein paar Plätze, die für Gruppe, Niveau, Saison und Budget sinnvoll sein können.',
    whatItDoesNotGiveYou: 'Was es nicht liefert',
    whatItDoesNotGiveYouBody: 'Keine Basisberatung, keine Route, keinen Startzeitenplan und kein Tagesprogramm.',
    possibleAddOn: 'Möglicher Zusatz',
    courseMix: 'Platzmix',
    paidPlanning: 'Für den bezahlten Planungsservice',
    nextParagraph: 'Wenn diese Plätze ungefähr passen, schicken Sie sie mir. Dann erstelle ich den richtigen Plan: wo Sie wohnen, wie die Reise verläuft, wie viele Runden sinnvoll sind und was gebucht werden muss.',
    sendCourseList: 'Platzliste senden',
    getInTouch: 'Kontakt aufnehmen',
    possibleRounds: 'mögliche Runden',
    style: 'Stil',
    budgetLabel: 'Budget',
    summaryLabel: 'Reiseübersicht',
    routeLabels: { day: 'Tagestrip / 1 Runde', short: '1-2 Nächte', medium: '3-4 Nächte', long: '5-6 Nächte', week: '7+ Nächte' },
    paceLabels: { lowTravel: 'Wenig Transfers', serious: 'Premium-Plätze', default: 'Ausgewogen' },
    budgetLabels: { value: 'Preiswert', balanced: 'Ausgewogen', premium: 'Premium' },
    dayLabel: (n) => `Tag ${n}`,
    pwapDayLabel: 'Mit einem Pro spielen',
    pwapDayTitle: 'Ein privater Tag mit Andy',
    pwapDayDetail: 'Course Management, lokale Entscheidungen und Coaching sind ganz natürlich eingebettet.',
    breathingSpaceLabel: 'Freiraum',
    longLunchTitle: 'Langes Mittagessen oder Palma-Abend',
    restAfternoonTitle: 'Ruhe-Nachmittag',
    breathingSpaceDetail: 'So fühlt sich die Reise geplant an und nicht vollgestopft.',
    snapshotCourseTitle: 'Zu prüfende Plätze',
    snapshotBody: 'Nur als Shortlist verwenden. Ich bestätige Reihenfolge, Basis, Startzeiten und Route, wenn Sie den ganzen Trip planen lassen.',
    courseNotesFallback: 'Ein Platz, den ich für diesen Entwurf in Betracht ziehen würde.',
    regionFallback: 'Mallorca',
    tripSummaryTitle: 'Reiseübersicht',
    startWith: 'Beginnen Sie mit',
    whatThisToolDoes: 'Basis-Tool',
    watchoutTitle: 'Für den bezahlten Planungsservice',
    whatsappPrefix: 'Hallo Andy, ich habe den Platzfinder auf der Website benutzt.',
    whatsappPrompt: 'Kannst du mir daraus einen richtigen Plan und ein Angebot machen?',
    watchoutFallback: 'Vor der Buchung würde ich Platzfolge, Startzeiten und Fahrzeit gemeinsam prüfen. Dort passieren die teuersten Fehler.',
    seasonAdvice: { spring: 'Frühling ist konditionsstark und deshalb früh mit den besten Startzeiten zu sichern.', summer: 'Der Sommer kann gutes Preis-Leistungs-Verhältnis bieten, wenn Startzeiten, Wasser und Erholung stimmen.', autumn: 'Der Herbst ist eine der besten Phasen, aber kein Geheimtipp mehr. Die Schlüsselrunden früh buchen.', winter: 'Der Winter ist meist die beste Preisphase, wenn Sie bei Wetter und Wind flexibel bleiben.' },
  },
  es: {
    options: {
      nights: [
        { value: 'day', label: 'Excursión / 1 vuelta' },
        { value: 'short', label: '1-2 noches' },
        { value: 'medium', label: '3-4 noches' },
        { value: 'long', label: '5-6 noches' },
        { value: 'week', label: '7+ noches' },
        { value: 'other', label: 'Duración personalizada', freeText: true },
      ],
      group: [
        { value: 'solo', label: 'Solo o pareja' },
        { value: 'friends', label: 'Viaje con amigos' },
        { value: 'family', label: 'Familia o grupo mixto' },
        { value: 'corporate', label: 'Corporativo' },
        { value: 'other', label: 'Algo distinto', freeText: true },
      ],
      level: [
        { value: 'mixed', label: 'Hándicaps mixtos' },
        { value: 'newer', label: 'Más nuevo / hándicap alto' },
        { value: 'club', label: 'Golfistas habituales de club' },
        { value: 'strong', label: 'Hándicap bajo / jugadores fuertes' },
        { value: 'other', label: 'Más detalle', freeText: true },
      ],
      golf: [
        { value: 'relaxed', label: 'Un par de vueltas relajadas' },
        { value: 'balanced', label: 'Tres o cuatro buenas vueltas' },
        { value: 'serious', label: 'Jugar los mejores campos' },
        { value: 'other', label: 'Más detalle', freeText: true },
      ],
      base: [
        { value: 'palma', label: 'Palma / Son Vida' },
        { value: 'southwest', label: 'Suroeste' },
        { value: 'north', label: 'Norte / Alcudia' },
        { value: 'unsure', label: 'Todavía no lo sé' },
        { value: 'other', label: 'Otra base', freeText: true },
      ],
      season: [
        { value: 'spring', label: 'Primavera (Mar-May)' },
        { value: 'summer', label: 'Verano (Jun-Ago)' },
        { value: 'autumn', label: 'Otoño (Sep-Nov)' },
        { value: 'winter', label: 'Invierno (Dic-Feb)' },
      ],
      budget: [
        { value: 'value', label: 'Buena relación calidad-precio' },
        { value: 'balanced', label: 'Equilibrado' },
        { value: 'premium', label: 'Premium' },
      ],
    },
    labels: { nights: 'Duración del viaje', group: 'Quién viaja', level: 'Nivel de juego', golf: 'Cuánto golf', base: 'Dónde alojarse', season: 'Cuándo', budget: 'Estilo de presupuesto' },
    placeholders: { nights: 'Seleccione duración', group: 'Seleccione grupo', level: 'Seleccione nivel', golf: 'Seleccione apetito de golf', base: 'Seleccione base', season: 'Seleccione temporada', budget: 'Seleccione presupuesto' },
    introEyebrow: 'Buscador de campos de Mallorca',
    introTitle: 'Encuentre campos desde los que empezar.',
    introBody: 'Aquí hay dos opciones. La herramienta gratuita le da una lista básica. El servicio profesional es donde yo construyo el viaje de verdad: base, ruta, tee times, alquiler, comida y la estructura diaria.',
    tripInputsLabel: 'Datos del viaje',
    prioritiesLabel: '¿Qué le importa más?',
    startingPoint: 'Punto de partida',
    coursesToConsider: 'Campos a considerar',
    startingPointBody: 'Úselo solo como lista corta. Confirmaré orden, base, tee times y ruta si quiere que planifique el viaje completo.',
    basicTool: 'Herramienta básica',
    courseShortlist: 'Lista corta de campos',
    whatThisGivesYou: 'Lo que obtiene',
    whatThisGivesYouBody: 'Unos pocos campos que pueden encajar con su grupo, nivel, temporada y presupuesto.',
    whatItDoesNotGiveYou: 'Lo que no incluye',
    whatItDoesNotGiveYouBody: 'Sin consejo de base, ruta, plan de tee times ni itinerario día a día.',
    possibleAddOn: 'Posible añadido',
    courseMix: 'Combinación de campos',
    paidPlanning: 'Para el servicio de pago',
    nextParagraph: 'Si estos campos encajan más o menos, envíemelos. Yo puedo construir el plan correcto: dónde alojarse, cómo trazar la ruta, cuántas vueltas jugar y qué reservar.',
    sendCourseList: 'Enviar lista',
    getInTouch: 'Contacto',
    possibleRounds: 'vueltas posibles',
    style: 'estilo',
    budgetLabel: 'presupuesto',
    summaryLabel: 'Resumen del viaje',
    routeLabels: { day: 'Excursión / 1 vuelta', short: '1-2 noches', medium: '3-4 noches', long: '5-6 noches', week: '7+ noches' },
    paceLabels: { lowTravel: 'Ruta con pocos traslados', serious: 'Ruta de campos premium', default: 'Itinerario equilibrado' },
    budgetLabels: { value: 'Buena relación calidad-precio', balanced: 'Equilibrado', premium: 'Premium' },
    dayLabel: (n) => `Día ${n}`,
    pwapDayLabel: 'Jugar con un Pro',
    pwapDayTitle: 'Un día privado con Andy',
    pwapDayDetail: 'Gestión de campo, decisiones locales y coaching integrados en la vuelta.',
    breathingSpaceLabel: 'Espacio para respirar',
    longLunchTitle: 'Almuerzo largo o tarde en Palma',
    restAfternoonTitle: 'Tarde de descanso',
    breathingSpaceDetail: 'Aquí es cuando el viaje empieza a sentirse planificado y no apretado.',
    snapshotCourseTitle: 'Campos a considerar',
    snapshotBody: 'Úselo solo como lista corta. Confirmaré orden, base, tee times y ruta si quiere que planifique el viaje completo.',
    courseNotesFallback: 'Un campo que consideraría para este borrador.',
    regionFallback: 'Mallorca',
    tripSummaryTitle: 'Resumen del viaje',
    startWith: 'Empiece con',
    whatThisToolDoes: 'Herramienta básica',
    watchoutTitle: 'Para el servicio de pago',
    whatsappPrefix: 'Hola Andy, usé el buscador de campos de la web.',
    whatsappPrompt: '¿Me ayudas a convertir esto en un plan y presupuesto reales?',
    watchoutFallback: 'Antes de reservar, revisaría juntos el orden de los campos, los tee times y los tiempos de traslado. Ahí es donde pasan los errores caros.',
    seasonAdvice: { spring: 'La primavera es premium en condiciones, así que conviene asegurar pronto los mejores tee times.', summer: 'El verano puede dar buena relación calidad-precio si se cuidan horarios, buggies, agua y descanso.', autumn: 'El otoño es una de las mejores ventanas, pero ya no es un secreto barato. Reserve las rondas clave pronto.', winter: 'El invierno suele ser la mejor ventana de valor, siempre que deje margen al viento y al tiempo.' },
  },
  fr: {
    options: {
      nights: [
        { value: 'day', label: 'Excursion / 1 parcours' },
        { value: 'short', label: '1-2 nuits' },
        { value: 'medium', label: '3-4 nuits' },
        { value: 'long', label: '5-6 nuits' },
        { value: 'week', label: '7+ nuits' },
        { value: 'other', label: 'Durée personnalisée', freeText: true },
      ],
      group: [
        { value: 'solo', label: 'Solo ou duo' },
        { value: 'friends', label: 'Voyage entre amis' },
        { value: 'family', label: 'Famille ou groupe mixte' },
        { value: 'corporate', label: 'Entreprise' },
        { value: 'other', label: 'Autre chose', freeText: true },
      ],
      level: [
        { value: 'mixed', label: 'Handicaps mixtes' },
        { value: 'newer', label: 'Plus récent / handicap élevé' },
        { value: 'club', label: 'Golfeurs de club réguliers' },
        { value: 'strong', label: 'Handicap bas / joueurs forts' },
        { value: 'other', label: 'Plus de détails', freeText: true },
      ],
      golf: [
        { value: 'relaxed', label: 'Quelques parties détendues' },
        { value: 'balanced', label: 'Trois ou quatre bonnes parties' },
        { value: 'serious', label: 'Jouer les meilleurs parcours' },
        { value: 'other', label: 'Plus de détails', freeText: true },
      ],
      base: [
        { value: 'palma', label: 'Palma / Son Vida' },
        { value: 'southwest', label: 'Sud-Ouest' },
        { value: 'north', label: 'Nord / Alcudia' },
        { value: 'unsure', label: 'Pas encore sûr' },
        { value: 'other', label: 'Autre base', freeText: true },
      ],
      season: [
        { value: 'spring', label: 'Printemps (Mar-Mai)' },
        { value: 'summer', label: 'Été (Jun-Août)' },
        { value: 'autumn', label: 'Automne (Sep-Nov)' },
        { value: 'winter', label: 'Hiver (Déc-Fév)' },
      ],
      budget: [
        { value: 'value', label: 'Bon rapport qualité-prix' },
        { value: 'balanced', label: 'Équilibré' },
        { value: 'premium', label: 'Premium' },
      ],
    },
    labels: { nights: 'Durée du séjour', group: 'Qui voyage', level: 'Niveau de jeu', golf: 'Volume de golf', base: 'Où loger', season: 'Quand', budget: 'Style de budget' },
    placeholders: { nights: 'Choisissez la durée', group: 'Choisissez le groupe', level: 'Choisissez le niveau', golf: 'Choisissez l’envie de golf', base: 'Choisissez une base', season: 'Choisissez la saison', budget: 'Choisissez le budget' },
    introEyebrow: 'Sélecteur de parcours à Majorque',
    introTitle: 'Trouvez les parcours pour partir.',
    introBody: 'Il y a deux options ici. L’outil gratuit vous donne une première liste. Le service professionnel est là où je construis le voyage correctement : base, itinéraire, heures de départ, location, repas et rythme quotidien.',
    tripInputsLabel: 'Données du séjour',
    prioritiesLabel: 'Qu’est-ce qui compte le plus ?',
    startingPoint: 'Point de départ',
    coursesToConsider: 'Parcours à considérer',
    startingPointBody: 'À utiliser comme shortlist seulement. Je confirmerai l’ordre, la base, les départs et l’itinéraire si vous voulez le voyage complet.',
    basicTool: 'Outil de base',
    courseShortlist: 'Shortlist de parcours',
    whatThisGivesYou: 'Ce que cela donne',
    whatThisGivesYouBody: 'Quelques parcours à envisager pour votre groupe, votre niveau, la saison et votre budget.',
    whatItDoesNotGiveYou: 'Ce que cela ne donne pas',
    whatItDoesNotGiveYouBody: 'Pas de conseil sur la base, l’itinéraire, les heures de départ ni le programme jour par jour.',
    possibleAddOn: 'Option possible',
    courseMix: 'Combinaison de parcours',
    paidPlanning: 'Pour le service de planification payant',
    nextParagraph: 'Si ces parcours vous semblent proches, envoyez-les-moi. Je pourrai alors construire le bon plan : où loger, comment organiser le voyage, combien de parties jouer et ce qu’il faut réserver.',
    sendCourseList: 'Envoyer la liste',
    getInTouch: 'Me contacter',
    possibleRounds: 'parties possibles',
    style: 'style',
    budgetLabel: 'budget',
    summaryLabel: 'Résumé du voyage',
    routeLabels: { day: 'Excursion / 1 parcours', short: '1-2 nuits', medium: '3-4 nuits', long: '5-6 nuits', week: '7+ nuits' },
    paceLabels: { lowTravel: 'Itinéraire avec peu de transferts', serious: 'Itinéraire premium', default: 'Itinéraire équilibré' },
    budgetLabels: { value: 'Bon rapport qualité-prix', balanced: 'Équilibré', premium: 'Premium' },
    dayLabel: (n) => `Jour ${n}`,
    pwapDayLabel: 'Jouer avec un Pro',
    pwapDayTitle: 'Une journée privée avec Andy',
    pwapDayDetail: 'Gestion du parcours, décisions locales et coaching intégrés à la partie.',
    breathingSpaceLabel: 'Temps libre',
    longLunchTitle: 'Long déjeuner ou soirée à Palma',
    restAfternoonTitle: 'Après-midi repos',
    breathingSpaceDetail: 'C’est là que le voyage commence à sembler vraiment construit, pas serré.',
    snapshotCourseTitle: 'Parcours à considérer',
    snapshotBody: 'À utiliser comme shortlist seulement. Je confirmerai l’ordre, la base, les départs et l’itinéraire si vous voulez le voyage complet.',
    courseNotesFallback: 'Un parcours que je prendrais en compte pour ce brouillon.',
    regionFallback: 'Majorque',
    tripSummaryTitle: 'Résumé du voyage',
    startWith: 'Commencez par',
    whatThisToolDoes: 'Outil de base',
    watchoutTitle: 'Pour le service de planification payant',
    whatsappPrefix: 'Bonjour Andy, j’ai utilisé le sélecteur de parcours du site.',
    whatsappPrompt: 'Peux-tu m’aider à transformer cela en vrai plan et devis ?',
    watchoutFallback: 'Avant de réserver, je vérifierais ensemble l’ordre des parcours, les heures de départ et les temps de trajet. C’est là que les erreurs coûtent cher.',
    seasonAdvice: { spring: 'Le printemps offre les meilleures conditions, donc il faut sécuriser tôt les meilleurs créneaux.', summer: 'L’été peut être bon marché si l’on gère bien les horaires, les buggys, l’eau et la récupération.', autumn: 'L’automne est l’une des meilleures périodes, mais ce n’est plus un secret bon marché. Réservez les rondes clés tôt.', winter: 'L’hiver est souvent la meilleure période côté valeur, à condition de rester souple sur le vent et la météo.' },
  },
  nl: {
    options: {
      nights: [
        { value: 'day', label: 'Dagtrip / 1 ronde' },
        { value: 'short', label: '1-2 nachten' },
        { value: 'medium', label: '3-4 nachten' },
        { value: 'long', label: '5-6 nachten' },
        { value: 'week', label: '7+ nachten' },
        { value: 'other', label: 'Aangepaste lengte', freeText: true },
      ],
      group: [
        { value: 'solo', label: 'Solo of duo' },
        { value: 'friends', label: 'Vriendenreis' },
        { value: 'family', label: 'Familie of gemengde groep' },
        { value: 'corporate', label: 'Zakelijk' },
        { value: 'other', label: 'Iets anders', freeText: true },
      ],
      level: [
        { value: 'mixed', label: 'Gemengde handicaps' },
        { value: 'newer', label: 'Nieuwere / hogere handicap' },
        { value: 'club', label: 'Reguliere clubgolfers' },
        { value: 'strong', label: 'Lage handicap / sterke spelers' },
        { value: 'other', label: 'Meer detail', freeText: true },
      ],
      golf: [
        { value: 'relaxed', label: 'Een paar ontspannen rondes' },
        { value: 'balanced', label: 'Drie of vier goede rondes' },
        { value: 'serious', label: 'De beste banen spelen' },
        { value: 'other', label: 'Meer detail', freeText: true },
      ],
      base: [
        { value: 'palma', label: 'Palma / Son Vida' },
        { value: 'southwest', label: 'Zuidwesten' },
        { value: 'north', label: 'Noorden / Alcudia' },
        { value: 'unsure', label: 'Nog niet zeker' },
        { value: 'other', label: 'Andere basis', freeText: true },
      ],
      season: [
        { value: 'spring', label: 'Lente (mrt-mei)' },
        { value: 'summer', label: 'Zomer (jun-aug)' },
        { value: 'autumn', label: 'Herfst (sep-nov)' },
        { value: 'winter', label: 'Winter (dec-feb)' },
      ],
      budget: [
        { value: 'value', label: 'Goede prijs-kwaliteit' },
        { value: 'balanced', label: 'Gebalanceerd' },
        { value: 'premium', label: 'Premium' },
      ],
    },
    labels: { nights: 'Reisduur', group: 'Wie reist', level: 'Speelniveau', golf: 'Hoeveel golf', base: 'Waar verblijven', season: 'Wanneer', budget: 'Budgetstijl' },
    placeholders: { nights: 'Kies reisduur', group: 'Kies groepstype', level: 'Kies speelniveau', golf: 'Kies golfintensiteit', base: 'Kies basis', season: 'Kies seizoen', budget: 'Kies budgetstijl' },
    introEyebrow: 'Mallorca golfbanen zoeker',
    introTitle: 'Vind banen om mee te beginnen.',
    introBody: 'Hier zijn twee opties. De gratis tool geeft u een korte lijst. De betaalde planningsdienst is waar ik de reis echt opbouw: basis, route, starttijden, huur, eten en de dagindeling.',
    tripInputsLabel: 'Reisgegevens',
    prioritiesLabel: 'Wat vindt u het belangrijkst?',
    startingPoint: 'Startpunt',
    coursesToConsider: 'Banen om te overwegen',
    startingPointBody: 'Gebruik dit alleen als shortlist. Ik bevestig baanvolgorde, basis, starttijden en route als u de volledige reis wilt laten plannen.',
    basicTool: 'Basis tool',
    courseShortlist: 'Korte banenlijst',
    whatThisGivesYou: 'Wat u krijgt',
    whatThisGivesYouBody: 'Een paar banen die kunnen passen bij groep, niveau, seizoen en budget.',
    whatItDoesNotGiveYou: 'Wat u niet krijgt',
    whatItDoesNotGiveYouBody: 'Geen basisadvies, route, tee-time plan of dag-tot-dag reisplan.',
    possibleAddOn: 'Mogelijke extra',
    courseMix: 'Baanmix',
    paidPlanning: 'Voor de betaalde planningsdienst',
    nextParagraph: 'Als deze banen in de buurt komen, stuur ze dan door. Dan maak ik het echte plan: waar te verblijven, hoe de reis te routeren, hoeveel rondes te spelen en wat geboekt moet worden.',
    sendCourseList: 'Banenlijst sturen',
    getInTouch: 'Contact opnemen',
    possibleRounds: 'mogelijke rondes',
    style: 'stijl',
    budgetLabel: 'budget',
    summaryLabel: 'Reisoverzicht',
    routeLabels: { day: 'Dagtrip / 1 ronde', short: '1-2 nachten', medium: '3-4 nachten', long: '5-6 nachten', week: '7+ nachten' },
    paceLabels: { lowTravel: 'Route met weinig transfers', serious: 'Premium banenroute', default: 'Gebalanceerd plan' },
    budgetLabels: { value: 'Goede prijs-kwaliteit', balanced: 'Gebalanceerd', premium: 'Premium' },
    dayLabel: (n) => `Dag ${n}`,
    pwapDayLabel: 'Spelen met een Pro',
    pwapDayTitle: 'Een privé dag met Andy',
    pwapDayDetail: 'Baanbeheer, lokale beslissingen en coaching verweven in de ronde.',
    breathingSpaceLabel: 'Rustmoment',
    longLunchTitle: 'Lange lunch of avond in Palma',
    restAfternoonTitle: 'Rustmiddag',
    breathingSpaceDetail: 'Hier voelt de reis gepland in plaats van gepropt.',
    snapshotCourseTitle: 'Banen om te overwegen',
    snapshotBody: 'Gebruik dit alleen als shortlist. Ik bevestig baanvolgorde, basis, starttijden en route als u de volledige reis wilt laten plannen.',
    courseNotesFallback: 'Een baan die ik voor deze opzet zou overwegen.',
    regionFallback: 'Mallorca',
    tripSummaryTitle: 'Reisoverzicht',
    startWith: 'Begin met',
    whatThisToolDoes: 'Basis tool',
    watchoutTitle: 'Voor de betaalde planningsdienst',
    whatsappPrefix: 'Hoi Andy, ik heb de banenzoeker op de site gebruikt.',
    whatsappPrompt: 'Kun je hier een echt plan en een offerte van maken?',
    watchoutFallback: 'Voor het boeken zou ik baanvolgorde, starttijden en reistijd samen controleren. Daar gaan de dure fouten ontstaan.',
    seasonAdvice: { spring: 'Het voorjaar is premium qua omstandigheden, dus de beste starttijden vroeg vastleggen.', summer: 'De zomer kan goede waarde bieden als starttijden, buggy’s, water en herstel goed zitten.', autumn: 'De herfst is een van de beste periodes, maar niet meer een goedkoop geheim. Boek de kernrondes vroeg.', winter: 'De winter is meestal de beste waardeperiode als u flexibel blijft met weer en wind.' },
  },
  sv: {
    options: {
      nights: [
        { value: 'day', label: 'Dagsutflykt / 1 runda' },
        { value: 'short', label: '1-2 nätter' },
        { value: 'medium', label: '3-4 nätter' },
        { value: 'long', label: '5-6 nätter' },
        { value: 'week', label: '7+ nätter' },
        { value: 'other', label: 'Anpassad längd', freeText: true },
      ],
      group: [
        { value: 'solo', label: 'Solo eller par' },
        { value: 'friends', label: 'Kompisresa' },
        { value: 'family', label: 'Familj eller blandad grupp' },
        { value: 'corporate', label: 'Företag' },
        { value: 'other', label: 'Något annat', freeText: true },
      ],
      level: [
        { value: 'mixed', label: 'Blandade handicap' },
        { value: 'newer', label: 'Nyare / högre handicap' },
        { value: 'club', label: 'Vanliga klubbgolfare' },
        { value: 'strong', label: 'Lågt handicap / starka spelare' },
        { value: 'other', label: 'Mer detaljer', freeText: true },
      ],
      golf: [
        { value: 'relaxed', label: 'Några lugna rundor' },
        { value: 'balanced', label: 'Tre eller fyra bra rundor' },
        { value: 'serious', label: 'Spela de bästa banorna' },
        { value: 'other', label: 'Mer detaljer', freeText: true },
      ],
      base: [
        { value: 'palma', label: 'Palma / Son Vida' },
        { value: 'southwest', label: 'Sydväst' },
        { value: 'north', label: 'Norr / Alcudia' },
        { value: 'unsure', label: 'Inte säker än' },
        { value: 'other', label: 'Annan bas', freeText: true },
      ],
      season: [
        { value: 'spring', label: 'Vår (mar-maj)' },
        { value: 'summer', label: 'Sommar (jun-aug)' },
        { value: 'autumn', label: 'Höst (sep-nov)' },
        { value: 'winter', label: 'Vinter (dec-feb)' },
      ],
      budget: [
        { value: 'value', label: 'Bra värde' },
        { value: 'balanced', label: 'Balanserat' },
        { value: 'premium', label: 'Premium' },
      ],
    },
    labels: { nights: 'Reslängd', group: 'Vem reser', level: 'Spelnivå', golf: 'Hur mycket golf', base: 'Var bo', season: 'När', budget: 'Budgetstil' },
    placeholders: { nights: 'Välj reslängd', group: 'Välj grupp', level: 'Välj spelnivå', golf: 'Välj golfmängd', base: 'Välj bas', season: 'Välj säsong', budget: 'Välj budgetstil' },
    introEyebrow: 'Mallorca golfbanesökare',
    introTitle: 'Hitta banor att börja med.',
    introBody: 'Här finns två alternativ. Det fria verktyget ger en kort lista. Den betalda planeringstjänsten är där jag bygger resan på riktigt: bas, rutt, starttider, hyra, mat och dagsrytmen.',
    tripInputsLabel: 'Resuppgifter',
    prioritiesLabel: 'Vad är viktigast för dig?',
    startingPoint: 'Utgångspunkt',
    coursesToConsider: 'Banor att överväga',
    startingPointBody: 'Använd detta bara som shortlist. Jag bekräftar ordning, bas, starttider och rutt om du vill ha hela resan planerad.',
    basicTool: 'Basverktyg',
    courseShortlist: 'Kort banlista',
    whatThisGivesYou: 'Detta får du',
    whatThisGivesYouBody: 'Några banor värda att överväga för grupp, nivå, säsong och budget.',
    whatItDoesNotGiveYou: 'Detta får du inte',
    whatItDoesNotGiveYouBody: 'Inget basråd, ingen rutt, ingen starttidsplan och inget dagsprogram.',
    possibleAddOn: 'Möjligt tillägg',
    courseMix: 'Banmix',
    paidPlanning: 'För den betalda planeringen',
    nextParagraph: 'Om banorna känns nära, skicka dem vidare. Då bygger jag den riktiga planen: var ni bor, hur resan ska läggas upp, hur många rundor som behövs och vad som måste bokas.',
    sendCourseList: 'Skicka banlistan',
    getInTouch: 'Kontakta mig',
    possibleRounds: 'möjliga rundor',
    style: 'stil',
    budgetLabel: 'budget',
    summaryLabel: 'Resesammanfattning',
    routeLabels: { day: 'Dagsutflykt / 1 runda', short: '1-2 nätter', medium: '3-4 nätter', long: '5-6 nätter', week: '7+ nätter' },
    paceLabels: { lowTravel: 'Rutt med få transporter', serious: 'Premiumbanor', default: 'Balanserad resa' },
    budgetLabels: { value: 'Bra värde', balanced: 'Balanserat', premium: 'Premium' },
    dayLabel: (n) => `Dag ${n}`,
    pwapDayLabel: 'Spela med ett proffs',
    pwapDayTitle: 'En privat dag med Andy',
    pwapDayDetail: 'Banstrategi, lokala beslut och coaching invävt i rundan.',
    breathingSpaceLabel: 'Andrum',
    longLunchTitle: 'Lång lunch eller kväll i Palma',
    restAfternoonTitle: 'Vila på eftermiddagen',
    breathingSpaceDetail: 'Här känns resan planerad istället för ihoptryckt.',
    snapshotCourseTitle: 'Banor att överväga',
    snapshotBody: 'Använd detta bara som shortlist. Jag bekräftar ordning, bas, starttider och rutt om du vill ha hela resan planerad.',
    courseNotesFallback: 'En bana jag skulle överväga för detta upplägg.',
    regionFallback: 'Mallorca',
    tripSummaryTitle: 'Resesammanfattning',
    startWith: 'Börja med',
    whatThisToolDoes: 'Basverktyg',
    watchoutTitle: 'För den betalda planeringen',
    whatsappPrefix: 'Hej Andy, jag använde banfinnaren på sajten.',
    whatsappPrompt: 'Kan du hjälpa mig att göra detta till en riktig plan och offert?',
    watchoutFallback: 'Innan bokning skulle jag kontrollera banordning, starttider och restid tillsammans. Det är där de dyra misstagen uppstår.',
    seasonAdvice: { spring: 'Våren är premium i villkor, så säkra de bästa starttiderna tidigt.', summer: 'Sommaren kan ge bra värde om starttider, golfbil, vatten och återhämtning sköts klokt.', autumn: 'Hösten är en av de bästa perioderna, men inte längre någon billig hemlighet. Boka nyckelrundorna tidigt.', winter: 'Vintern är oftast bäst för värde om du är flexibel med väder och vind.' },
  },
  zh: {
    options: {
      nights: [
        { value: 'day', label: '一日游 / 1 场' },
        { value: 'short', label: '1-2 晚' },
        { value: 'medium', label: '3-4 晚' },
        { value: 'long', label: '5-6 晚' },
        { value: 'week', label: '7 晚以上' },
        { value: 'other', label: '自定义时长', freeText: true },
      ],
      group: [
        { value: 'solo', label: '单人或双人' },
        { value: 'friends', label: '朋友同行' },
        { value: 'family', label: '家庭或混合团队' },
        { value: 'corporate', label: '公司团体' },
        { value: 'other', label: '其他情况', freeText: true },
      ],
      level: [
        { value: 'mixed', label: '差点混合' },
        { value: 'newer', label: '新手 / 高差点' },
        { value: 'club', label: '常规俱乐部球手' },
        { value: 'strong', label: '低差点 / 强手' },
        { value: 'other', label: '更多细节', freeText: true },
      ],
      golf: [
        { value: 'relaxed', label: '两到三轮轻松高尔夫' },
        { value: 'balanced', label: '三到四轮高质量球局' },
        { value: 'serious', label: '尽量打最好的球场' },
        { value: 'other', label: '更多细节', freeText: true },
      ],
      base: [
        { value: 'palma', label: '帕尔马 / Son Vida' },
        { value: 'southwest', label: '西南区' },
        { value: 'north', label: '北部 / 阿尔库迪亚' },
        { value: 'unsure', label: '还不确定' },
        { value: 'other', label: '其他住宿基点', freeText: true },
      ],
      season: [
        { value: 'spring', label: '春季（3-5月）' },
        { value: 'summer', label: '夏季（6-8月）' },
        { value: 'autumn', label: '秋季（9-11月）' },
        { value: 'winter', label: '冬季（12-2月）' },
      ],
      budget: [
        { value: 'value', label: '性价比' },
        { value: 'balanced', label: '均衡' },
        { value: 'premium', label: '高端' },
      ],
    },
    labels: { nights: '行程时长', group: '同行人员', level: '球技水平', golf: '打球量', base: '住宿基点', season: '出行时间', budget: '预算类型' },
    placeholders: { nights: '请选择时长', group: '请选择团队类型', level: '请选择球技水平', golf: '请选择打球量', base: '请选择住宿基点', season: '请选择季节', budget: '请选择预算类型' },
    introEyebrow: '马略卡球场行程工具',
    introTitle: '先选球场，再开始规划。',
    introBody: '这里有两个选项。免费工具会给您一个基础球场短名单。付费规划服务才是我认真搭建行程的地方：住宿、路线、开球时间、租赁、餐饮和每天的节奏。',
    tripInputsLabel: '行程信息',
    prioritiesLabel: '您最看重什么？',
    startingPoint: '起点',
    coursesToConsider: '可考虑球场',
    startingPointBody: '这里只能当短名单使用。如果您要完整规划行程，我会确认球场顺序、住宿基点、开球时间和路线。',
    basicTool: '基础工具',
    courseShortlist: '球场短名单',
    whatThisGivesYou: '您会得到什么',
    whatThisGivesYouBody: '一些值得考虑的球场，适合您的团队、水平、季节和预算。',
    whatItDoesNotGiveYou: '它不提供什么',
    whatItDoesNotGiveYouBody: '不提供住宿建议、路线规划、开球时间安排或逐日行程。',
    possibleAddOn: '可选附加项',
    courseMix: '球场组合',
    paidPlanning: '付费规划服务',
    nextParagraph: '如果这些球场看起来接近您的需求，就发给我。我可以据此做出完整计划：住哪里、如何安排行程、打几轮，以及需要预订什么。',
    sendCourseList: '发送球场列表',
    getInTouch: '联系我',
    possibleRounds: '可打轮次',
    style: '风格',
    budgetLabel: '预算',
    summaryLabel: '行程摘要',
    routeLabels: { day: '一日游 / 1 场', short: '1-2 晚', medium: '3-4 晚', long: '5-6 晚', week: '7 晚以上' },
    paceLabels: { lowTravel: '少接送路线', serious: '高端球场路线', default: '均衡行程' },
    budgetLabels: { value: '性价比', balanced: '均衡', premium: '高端' },
    dayLabel: (n) => `第 ${n} 天`,
    pwapDayLabel: '与职业球手同场',
    pwapDayTitle: 'Andy 陪同的私人一天',
    pwapDayDetail: '场上管理、本地决策与教学自然融入整轮比赛。',
    breathingSpaceLabel: '留白',
    longLunchTitle: '长午餐或帕尔马晚间',
    restAfternoonTitle: '下午休息',
    breathingSpaceDetail: '这样行程才会像认真规划过，而不是塞得太满。',
    snapshotCourseTitle: '可考虑球场',
    snapshotBody: '这里只能当短名单使用。如果您要完整规划行程，我会确认球场顺序、住宿基点、开球时间和路线。',
    courseNotesFallback: '我会在这个方案里考虑的球场。',
    regionFallback: '马略卡',
    tripSummaryTitle: '行程摘要',
    startWith: '从这里开始',
    whatThisToolDoes: '基础工具',
    watchoutTitle: '付费规划服务',
    whatsappPrefix: '你好 Andy，我使用了网站上的球场筛选器。',
    whatsappPrompt: '你能帮我把这些内容变成正式方案和报价吗？',
    watchoutFallback: '预订前我会一起检查球场顺序、开球时间和车程。最贵的错误通常就出在这里。',
    seasonAdvice: { spring: '春季条件最好，因此热门开球时间要尽早锁定。', summer: '夏季只要安排好开球时间、球车、补水和休息，也能有很好的性价比。', autumn: '秋季是最好的窗口之一，但已经不是便宜秘密了。关键轮次要早点订。', winter: '冬季通常是性价比最好的时段，只要对天气和风保持灵活。' },
  },
}

const ADD_DETAIL_PLACEHOLDER = {
  en: 'Add detail...',
  de: 'Details hinzufügen...',
  es: 'Añadir detalle...',
  fr: 'Ajouter un détail...',
  nl: 'Voeg detail toe...',
  sv: 'Lägg till detaljer...',
  zh: '添加细节...',
}

const PRIORITY_OPTIONS = {
  en: [
    { value: 'championship', label: 'The best courses on the island' },
    { value: 'scenery', label: 'Sea views and scenery' },
    { value: 'lowTravel', label: 'Minimal driving between rounds' },
    { value: 'restaurants', label: 'Good lunch and dining' },
    { value: 'pwap', label: 'A day with Andy on course' },
    { value: 'coaching', label: 'On-course coaching' },
    { value: 'clubHire', label: 'Club hire and transfer options' },
  ],
  de: [
    { value: 'championship', label: 'Die besten Plätze der Insel' },
    { value: 'scenery', label: 'Meerblick und Landschaft' },
    { value: 'lowTravel', label: 'Möglichst kurze Fahrten' },
    { value: 'restaurants', label: 'Gutes Essen und Lunch' },
    { value: 'pwap', label: 'Ein Tag mit Andy auf dem Platz' },
    { value: 'coaching', label: 'Coaching auf dem Platz' },
    { value: 'clubHire', label: 'Leihschläger und Transfers' },
  ],
  es: [
    { value: 'championship', label: 'Los mejores campos de la isla' },
    { value: 'scenery', label: 'Vistas al mar y paisaje' },
    { value: 'lowTravel', label: 'Pocos traslados entre vueltas' },
    { value: 'restaurants', label: 'Buen almuerzo y restaurantes' },
    { value: 'pwap', label: 'Un día con Andy en el campo' },
    { value: 'coaching', label: 'Coaching en el campo' },
    { value: 'clubHire', label: 'Alquiler de palos y traslados' },
  ],
  fr: [
    { value: 'championship', label: "Les meilleurs parcours de l'île" },
    { value: 'scenery', label: 'Vue mer et paysages' },
    { value: 'lowTravel', label: 'Moins de trajets entre les parties' },
    { value: 'restaurants', label: 'Bon déjeuner et restaurants' },
    { value: 'pwap', label: "Une journée avec Andy sur le parcours" },
    { value: 'coaching', label: 'Coaching sur le parcours' },
    { value: 'clubHire', label: 'Location de clubs et transferts' },
  ],
  nl: [
    { value: 'championship', label: 'De beste banen van het eiland' },
    { value: 'scenery', label: 'Zeezicht en landschap' },
    { value: 'lowTravel', label: 'Minder rijden tussen rondes' },
    { value: 'restaurants', label: 'Goed lunch- en dinerwerk' },
    { value: 'pwap', label: 'Een dag met Andy op de baan' },
    { value: 'coaching', label: 'Coaching op de baan' },
    { value: 'clubHire', label: 'Clubhuur en transfers' },
  ],
  sv: [
    { value: 'championship', label: 'Öns bästa banor' },
    { value: 'scenery', label: 'Havsutsikt och landskap' },
    { value: 'lowTravel', label: 'Minimala bilresor mellan rundorna' },
    { value: 'restaurants', label: 'Bra lunch och restauranger' },
    { value: 'pwap', label: 'En dag med Andy på banan' },
    { value: 'coaching', label: 'Coaching på banan' },
    { value: 'clubHire', label: 'Uthyrning av klubbor och transporter' },
  ],
  zh: [
    { value: 'championship', label: '岛上最好的球场' },
    { value: 'scenery', label: '海景与风景' },
    { value: 'lowTravel', label: '尽量减少球场间车程' },
    { value: 'restaurants', label: '午餐和用餐体验' },
    { value: 'pwap', label: '与 Andy 在球场度过一天' },
    { value: 'coaching', label: '球场内指导' },
    { value: 'clubHire', label: '球杆租赁和接送' },
  ],
}

const COURSE_DETAILS_BY_LOCALE = {
  en: {
    Alcanada: { region: 'North coast' },
    'Pula or Son Servera': { region: 'Northeast' },
    'Capdepera or Canyamel': { region: 'Northeast' },
    'T Golf Calvia': { region: 'Southwest' },
    'Santa Ponsa 1': { region: 'Southwest' },
    'Golf de Andratx': { region: 'Southwest' },
    'Son Gual': { region: 'Palma east' },
    'Son Muntaner': { region: 'Son Vida' },
    'Son Quint': { region: 'Son Vida' },
    'T Golf Palma': { region: 'Palma' },
    'Son Antem East or West': { region: 'South' },
  },
  de: {
    Alcanada: { region: 'Nordküste' },
    'Pula or Son Servera': { region: 'Nordosten' },
    'Capdepera or Canyamel': { region: 'Nordosten' },
    'T Golf Calvia': { region: 'Südwesten' },
    'Santa Ponsa 1': { region: 'Südwesten' },
    'Golf de Andratx': { region: 'Südwesten' },
    'Son Gual': { region: 'Ost bei Palma' },
    'Son Muntaner': { region: 'Son Vida' },
    'Son Quint': { region: 'Son Vida' },
    'T Golf Palma': { region: 'Palma' },
    'Son Antem East or West': { region: 'Süden' },
  },
  es: {
    Alcanada: { region: 'Costa norte' },
    'Pula or Son Servera': { region: 'Noreste' },
    'Capdepera or Canyamel': { region: 'Noreste' },
    'T Golf Calvia': { region: 'Suroeste' },
    'Santa Ponsa 1': { region: 'Suroeste' },
    'Golf de Andratx': { region: 'Suroeste' },
    'Son Gual': { region: 'Este de Palma' },
    'Son Muntaner': { region: 'Son Vida' },
    'Son Quint': { region: 'Son Vida' },
    'T Golf Palma': { region: 'Palma' },
    'Son Antem East or West': { region: 'Sur' },
  },
  fr: {
    Alcanada: { region: 'Côte nord' },
    'Pula or Son Servera': { region: 'Nord-est' },
    'Capdepera or Canyamel': { region: 'Nord-est' },
    'T Golf Calvia': { region: 'Sud-ouest' },
    'Santa Ponsa 1': { region: 'Sud-ouest' },
    'Golf de Andratx': { region: 'Sud-ouest' },
    'Son Gual': { region: 'Est de Palma' },
    'Son Muntaner': { region: 'Son Vida' },
    'Son Quint': { region: 'Son Vida' },
    'T Golf Palma': { region: 'Palma' },
    'Son Antem East or West': { region: 'Sud' },
  },
  nl: {
    Alcanada: { region: 'Noordkust' },
    'Pula or Son Servera': { region: 'Noordoost' },
    'Capdepera or Canyamel': { region: 'Noordoost' },
    'T Golf Calvia': { region: 'Zuidwest' },
    'Santa Ponsa 1': { region: 'Zuidwest' },
    'Golf de Andratx': { region: 'Zuidwest' },
    'Son Gual': { region: 'Oost van Palma' },
    'Son Muntaner': { region: 'Son Vida' },
    'Son Quint': { region: 'Son Vida' },
    'T Golf Palma': { region: 'Palma' },
    'Son Antem East or West': { region: 'Zuid' },
  },
  sv: {
    Alcanada: { region: 'Norra kusten' },
    'Pula or Son Servera': { region: 'Nordost' },
    'Capdepera or Canyamel': { region: 'Nordost' },
    'T Golf Calvia': { region: 'Sydväst' },
    'Santa Ponsa 1': { region: 'Sydväst' },
    'Golf de Andratx': { region: 'Sydväst' },
    'Son Gual': { region: 'Öster om Palma' },
    'Son Muntaner': { region: 'Son Vida' },
    'Son Quint': { region: 'Son Vida' },
    'T Golf Palma': { region: 'Palma' },
    'Son Antem East or West': { region: 'Söder' },
  },
  zh: {
    Alcanada: { region: '北海岸' },
    'Pula or Son Servera': { region: '东北部' },
    'Capdepera or Canyamel': { region: '东北部' },
    'T Golf Calvia': { region: '西南部' },
    'Santa Ponsa 1': { region: '西南部' },
    'Golf de Andratx': { region: '西南部' },
    'Son Gual': { region: '帕尔马东部' },
    'Son Muntaner': { region: 'Son Vida' },
    'Son Quint': { region: 'Son Vida' },
    'T Golf Palma': { region: '帕尔马' },
    'Son Antem East or West': { region: '南部' },
  },
}

const BASE_DETAILS_BY_LOCALE = {
  en: {
    palma: {
      label: 'Palma / Son Vida',
      image: '/images/blog-trip-planning/Old Town Palma.webp',
      transfer: 'Airport 15-25 min. Most first drafts start here.',
    },
    southwest: {
      label: 'Southwest',
      image: '/images/t-golf-calvia-card.webp',
      transfer: 'Beach hotels, short resort transfers, easy golf days.',
    },
    north: {
      label: 'North / Alcudia',
      image: '/images/alcanada-card.webp',
      transfer: 'Best if Alcanada and quieter scenery are priorities.',
    },
    unsure: {
      label: 'Base flexible for now',
      image: '/images/son-gual-card.webp',
      transfer: 'Keep the base flexible until the course route is clear.',
    },
    other: {
      label: 'Custom base',
      image: '/images/golf-courses.webp',
      transfer: 'I will sanity-check whether the driving makes sense.',
    },
  },
  de: {
    palma: { label: 'Palma / Son Vida', image: '/images/blog-trip-planning/Old Town Palma.webp', transfer: 'Flughafen 15-25 Min. Die meisten Entwürfe beginnen hier.' },
    southwest: { label: 'Südwesten', image: '/images/t-golf-calvia-card.webp', transfer: 'Strandhotels, kurze Resort-Transfers, leichte Golftage.' },
    north: { label: 'Norden / Alcudia', image: '/images/alcanada-card.webp', transfer: 'Sinnvoll, wenn Alcanada und ruhigere Landschaft wichtig sind.' },
    unsure: { label: 'Basis vorerst flexibel', image: '/images/son-gual-card.webp', transfer: 'Die Basis bleibt flexibel, bis die Platzroute klar ist.' },
    other: { label: 'Eigene Basis', image: '/images/golf-courses.webp', transfer: 'Ich prüfe, ob die Fahrzeiten sinnvoll sind.' },
  },
  es: {
    palma: { label: 'Palma / Son Vida', image: '/images/blog-trip-planning/Old Town Palma.webp', transfer: 'Aeropuerto a 15-25 min. Aquí empiezan muchos borradores.' },
    southwest: { label: 'Suroeste', image: '/images/t-golf-calvia-card.webp', transfer: 'Hoteles de playa, traslados cortos y días de golf cómodos.' },
    north: { label: 'Norte / Alcudia', image: '/images/alcanada-card.webp', transfer: 'Ideal si Alcanada y un entorno más tranquilo son la prioridad.' },
    unsure: { label: 'Base flexible por ahora', image: '/images/son-gual-card.webp', transfer: 'Mantenga la base flexible hasta que la ruta esté clara.' },
    other: { label: 'Base personalizada', image: '/images/golf-courses.webp', transfer: 'Comprobaré si los traslados tienen sentido.' },
  },
  fr: {
    palma: { label: 'Palma / Son Vida', image: '/images/blog-trip-planning/Old Town Palma.webp', transfer: 'Aéroport à 15-25 min. La plupart des premiers plans commencent ici.' },
    southwest: { label: 'Sud-ouest', image: '/images/t-golf-calvia-card.webp', transfer: 'Hôtels de plage, transferts courts et journées golf faciles.' },
    north: { label: 'Nord / Alcudia', image: '/images/alcanada-card.webp', transfer: 'Idéal si Alcanada et un cadre plus calme sont prioritaires.' },
    unsure: { label: 'Base flexible pour le moment', image: '/images/son-gual-card.webp', transfer: 'Gardez la base flexible tant que l’itinéraire n’est pas clair.' },
    other: { label: 'Base personnalisée', image: '/images/golf-courses.webp', transfer: 'Je vérifierai si les trajets ont du sens.' },
  },
  nl: {
    palma: { label: 'Palma / Son Vida', image: '/images/blog-trip-planning/Old Town Palma.webp', transfer: 'Luchthaven 15-25 min. Hier beginnen de meeste eerste versies.' },
    southwest: { label: 'Zuidwest', image: '/images/t-golf-calvia-card.webp', transfer: 'Strandhotels, korte resorttransfers en rustige golfdagen.' },
    north: { label: 'Noord / Alcudia', image: '/images/alcanada-card.webp', transfer: 'Handig als Alcanada en rustiger landschap voorrang hebben.' },
    unsure: { label: 'Voor nu flexibel', image: '/images/son-gual-card.webp', transfer: 'Houd de basis flexibel tot de baanroute duidelijk is.' },
    other: { label: 'Aangepaste basis', image: '/images/golf-courses.webp', transfer: 'Ik kijk na of de reistijd logisch is.' },
  },
  sv: {
    palma: { label: 'Palma / Son Vida', image: '/images/blog-trip-planning/Old Town Palma.webp', transfer: 'Flygplats 15-25 min. Här börjar de flesta första utkasten.' },
    southwest: { label: 'Sydväst', image: '/images/t-golf-calvia-card.webp', transfer: 'Strandhotell, korta transfersträckor och enkla golfdagar.' },
    north: { label: 'Norr / Alcudia', image: '/images/alcanada-card.webp', transfer: 'Bra om Alcanada och lugnare miljö är viktigast.' },
    unsure: { label: 'Basen flexibel för nu', image: '/images/son-gual-card.webp', transfer: 'Håll basen flexibel tills banrutten är tydlig.' },
    other: { label: 'Anpassad bas', image: '/images/golf-courses.webp', transfer: 'Jag kontrollerar om resorna mellan banorna känns rimliga.' },
  },
  zh: {
    palma: { label: '帕尔马 / Son Vida', image: '/images/blog-trip-planning/Old Town Palma.webp', transfer: '机场15-25分钟。大多数初稿都会从这里开始。' },
    southwest: { label: '西南部', image: '/images/t-golf-calvia-card.webp', transfer: '海滩酒店、短途接送、轻松的打球日。' },
    north: { label: '北部 / 阿尔库迪亚', image: '/images/alcanada-card.webp', transfer: '如果您更看重 Alcanada 和安静风景，这里最合适。' },
    unsure: { label: '目前可灵活安排', image: '/images/son-gual-card.webp', transfer: '在球场路线明确前，先保持住宿基点灵活。' },
    other: { label: '自定义基点', image: '/images/golf-courses.webp', transfer: '我会帮您判断车程是否合理。' },
  },
}

const PLANNER_TEXT_BY_LOCALE = {
  en: {
    priorityDefault: 'Not sure yet',
    addOns: {
      pwap: 'Play With A Pro: a private round with Andy for course management, local decisions, and coaching on the course.',
      clubHire: 'Club hire: Andy can arrange it with the course booking where possible, or point you to the right rental option.',
      courseFit: 'Course fit: keep at least one forgiving round in the plan so everyone enjoys the trip, not just the strongest golfer.',
      restaurants: 'One proper lunch or Palma evening, planned around the best golf day rather than forced into every day.',
      fallback: 'Keep extras light until the base, courses, and tee times are right.',
    },
    watchouts: {
      northNoAlcanada: 'I would not base you in the north unless Alcanada or the quieter coast is genuinely part of the reason for the trip.',
      northLowTravel: 'The north can be beautiful, but it is not the low-driving answer for every group. I would keep the course route tight.',
      premiumValue: 'The best-course version and the value version of the trip are different. I would decide where the premium green fee is actually worth it.',
      mixedPremium: 'If the group has mixed handicaps, I would include one forgiving round even if the trip is built around premium courses.',
      strongRelaxed: 'For stronger players, a relaxed trip still needs one course with enough interest or the golf can feel too soft.',
      mixedGroups: 'Mixed groups need one forgiving day. Three hard courses in a row usually looks better online than it feels on the island.',
      summer: 'In summer, tee time matters as much as course choice. I would avoid building the day around a late premium slot in the heat.',
      clubHire: 'For club hire and transfers, I would sort the practical route early: course hire where it makes sense, trusted rental options, or the right contact before tee times tighten.',
      fallback: 'Before booking, I would check the course order, tee times, and travel time together. That is where most expensive mistakes happen.',
    },
  },
  de: {
    priorityDefault: 'Noch nicht sicher',
    addOns: {
      pwap: 'Play With A Pro: eine private Runde mit Andy für Course Management, lokale Entscheidungen und Coaching auf dem Platz.',
      clubHire: 'Leihschläger: Andy kann das nach Möglichkeit mit der Platzbuchung regeln oder die passende Mietoption nennen.',
      courseFit: 'Platzwahl: Planen Sie mindestens eine forgiving Runde ein, damit die Reise für alle passt, nicht nur für die stärksten Spieler.',
      restaurants: 'Ein vernünftiges Mittagessen oder ein Palma-Abend, passend zum besten Golftag geplant und nicht einfach jeden Tag dazugepackt.',
      fallback: 'Extras lieber klein halten, bis Basis, Plätze und Startzeiten wirklich stimmen.',
    },
    watchouts: {
      northNoAlcanada: 'Ich würde Sie nur im Norden unterbringen, wenn Alcanada oder die ruhigere Küste wirklich der Grund für die Reise ist.',
      northLowTravel: 'Der Norden kann schön sein, ist aber nicht für jede Gruppe die Antwort mit wenig Fahrzeit. Ich würde die Route straff halten.',
      premiumValue: 'Die Version mit den besten Plätzen und die Preis-Leistungs-Version der Reise sind nicht dasselbe. Ich würde genau abwägen, wo sich das Premium-Greenfee lohnt.',
      mixedPremium: 'Wenn die Gruppe gemischte Handicaps hat, würde ich eine verzeihende Runde einbauen, auch wenn die Reise auf Premium-Plätzen aufbaut.',
      strongRelaxed: 'Für stärkere Spieler braucht auch eine entspannte Reise einen Platz mit genug Reiz, sonst fühlt sich das Golf zu weich an.',
      mixedGroups: 'Gemischte Gruppen brauchen einen verzeihenden Tag. Drei harte Plätze hintereinander sehen online oft besser aus, als sie sich vor Ort anfühlen.',
      summer: 'Im Sommer zählt die Startzeit fast so sehr wie der Platz. Ich würde den Tag nicht auf einen späten Premium-Slot in der Hitze aufbauen.',
      clubHire: 'Bei Leihschlägern und Transfers würde ich den praktischen Ablauf früh klären: Mietschläger, wenn sinnvoll, verlässliche Optionen oder den richtigen Kontakt, bevor die Startzeiten knapp werden.',
      fallback: 'Vor der Buchung würde ich Platzfolge, Startzeiten und Fahrzeit gemeinsam prüfen. Dort passieren die teuersten Fehler.',
    },
  },
  es: {
    priorityDefault: 'Todavía no lo sé',
    addOns: {
      pwap: 'Play With A Pro: una vuelta privada con Andy para gestión de campo, decisiones locales y coaching dentro de la ronda.',
      clubHire: 'Alquiler de palos: Andy puede gestionarlo con la reserva del campo cuando sea posible, o indicarle la opción adecuada.',
      courseFit: 'Ajuste de campos: conviene incluir al menos una vuelta más amable para que todos disfruten del viaje, no solo el jugador más fuerte.',
      restaurants: 'Un buen almuerzo o una tarde en Palma, pensado alrededor del mejor día de golf y no añadido a todas las jornadas.',
      fallback: 'Mantenga los extras ligeros hasta que la base, los campos y los tee times estén bien.',
    },
    watchouts: {
      northNoAlcanada: 'No le basaría en el norte salvo que Alcanada o la costa más tranquila sean de verdad parte del motivo del viaje.',
      northLowTravel: 'El norte puede ser precioso, pero no es la respuesta de menos traslados para todos los grupos. Yo dejaría la ruta bien cerrada.',
      premiumValue: 'La versión con los mejores campos y la versión de valor del viaje no son lo mismo. Decidiría dónde merece la pena pagar el green fee premium.',
      mixedPremium: 'Si el grupo tiene handicaps mixtos, incluiría una vuelta más amable aunque el viaje se base en campos premium.',
      strongRelaxed: 'Para jugadores fuertes, un viaje relajado sigue necesitando un campo con interés suficiente o el golf se queda demasiado suave.',
      mixedGroups: 'Los grupos mixtos necesitan un día más amable. Tres campos duros seguidos suelen quedar mejor en internet que en la vida real.',
      summer: 'En verano, el tee time importa tanto como el campo. Yo evitaría construir el día alrededor de un slot premium muy tarde y con calor.',
      clubHire: 'Para alquiler de palos y traslados, cerraría antes la parte práctica: alquiler donde tenga sentido, opciones fiables o el contacto correcto antes de que aprieten los tee times.',
      fallback: 'Antes de reservar, revisaría juntos el orden de los campos, los tee times y los tiempos de traslado. Ahí es donde pasan los errores caros.',
    },
  },
  fr: {
    priorityDefault: 'Pas encore sûr',
    addOns: {
      pwap: 'Play With A Pro : une partie privée avec Andy pour la gestion du parcours, les décisions locales et le coaching sur le terrain.',
      clubHire: 'Location de clubs : Andy peut l’organiser avec la réservation du parcours quand c’est possible, ou vous orienter vers la bonne option.',
      courseFit: 'Choix des parcours : gardez au moins une partie plus facile dans le plan pour que tout le monde profite du voyage, pas seulement le plus fort.',
      restaurants: 'Un vrai déjeuner ou une soirée à Palma, pensé autour de la meilleure journée golf plutôt que rajouté à chaque journée.',
      fallback: 'Gardez les extras légers tant que la base, les parcours et les heures de départ ne sont pas bons.',
    },
    watchouts: {
      northNoAlcanada: 'Je ne vous mettrais pas au nord sauf si Alcanada ou la côte plus calme est vraiment une raison centrale du voyage.',
      northLowTravel: 'Le nord peut être superbe, mais ce n’est pas la réponse la plus simple en trajets pour tout le monde. Je garderais l’itinéraire serré.',
      premiumValue: 'La version avec les meilleurs parcours et la version plus économique du voyage sont différentes. Je choisirais où le green fee premium vaut vraiment le coup.',
      mixedPremium: 'Si le groupe a des niveaux mixtes, j’ajouterais une partie plus douce même si le voyage repose sur des parcours premium.',
      strongRelaxed: 'Pour des joueurs forts, un voyage plus calme a quand même besoin d’un parcours suffisamment intéressant, sinon le golf paraît trop simple.',
      mixedGroups: 'Les groupes mixtes ont besoin d’une journée plus douce. Trois parcours difficiles d’affilée paraissent souvent mieux en ligne qu’en vrai.',
      summer: 'En été, l’heure de départ compte autant que le parcours. J’éviterais de construire la journée autour d’un créneau premium tardif dans la chaleur.',
      clubHire: 'Pour la location de clubs et les transferts, je réglerais tôt la partie pratique : location quand c’est utile, options fiables ou le bon contact avant que les départs se resserrent.',
      fallback: 'Avant de réserver, je vérifierais ensemble l’ordre des parcours, les heures de départ et les temps de trajet. C’est là que les erreurs coûtent cher.',
    },
  },
  nl: {
    priorityDefault: 'Nog niet zeker',
    addOns: {
      pwap: 'Play With A Pro: een privéronde met Andy voor baanmanagement, lokale keuzes en coaching op de baan.',
      clubHire: 'Clubhuur: Andy kan dit waar mogelijk met de baanreservering regelen, of u naar de juiste huuroptie sturen.',
      courseFit: 'Baanfit: plan minstens één vergevingsgezinde ronde in zodat iedereen van de reis geniet, niet alleen de sterkste golfer.',
      restaurants: 'Een goede lunch of avond in Palma, gepland rond de beste golfdag en niet zomaar aan elke dag vastgeplakt.',
      fallback: 'Houd extra’s beperkt totdat basis, banen en starttijden goed zitten.',
    },
    watchouts: {
      northNoAlcanada: 'Ik zou u niet in het noorden baseren tenzij Alcanada of de rustigere kust echt de reden voor de reis is.',
      northLowTravel: 'Het noorden kan mooi zijn, maar het is niet voor elke groep de oplossing met de minste ritten. Ik zou de route strak houden.',
      premiumValue: 'De versie met de beste banen en de waardeversie van de reis zijn niet hetzelfde. Ik zou kiezen waar de premium greenfee echt de moeite waard is.',
      mixedPremium: 'Als de groep gemengde handicaps heeft, zou ik één vergevingsgezinde ronde inbouwen, ook als de reis om premium banen draait.',
      strongRelaxed: 'Voor sterkere spelers heeft een ontspannen reis nog steeds een baan nodig met genoeg uitdaging, anders voelt het golf te zacht.',
      mixedGroups: 'Gemengde groepen hebben één mildere dag nodig. Drie lastige banen achter elkaar ziet er online vaak beter uit dan het voelt op het eiland.',
      summer: 'In de zomer is starttijd net zo belangrijk als de baan. Ik zou de dag niet opbouwen rond een late premium slot in de hitte.',
      clubHire: 'Voor clubhuur en transfers zou ik de praktische kant vroeg regelen: huur waar het logisch is, betrouwbare opties of het juiste contact voordat starttijden krapper worden.',
      fallback: 'Voor het boeken zou ik baanvolgorde, starttijden en reistijd samen controleren. Daar gaan de dure fouten ontstaan.',
    },
  },
  sv: {
    priorityDefault: 'Inte säkert än',
    addOns: {
      pwap: 'Play With A Pro: en privat rond med Andy för banhantering, lokala beslut och coaching på banan.',
      clubHire: 'Klubbuthyrning: Andy kan ordna det via bokningen där det går, eller peka ut rätt uthyrningsalternativ.',
      courseFit: 'Banpassning: lägg in minst en mer förlåtande rond så att alla njuter av resan, inte bara den starkaste spelaren.',
      restaurants: 'En bra lunch eller en kväll i Palma, planerad runt den bästa golfdagen och inte bara intryckt i varje dag.',
      fallback: 'Håll extragrejerna lätta tills bas, banor och starttider sitter rätt.',
    },
    watchouts: {
      northNoAlcanada: 'Jag skulle inte lägga er i norr om inte Alcanada eller den lugnare kusten verkligen är en del av resans skäl.',
      northLowTravel: 'Norr kan vara vackert, men det är inte svaret med minst bilåkande för alla grupper. Jag skulle hålla rutten tajt.',
      premiumValue: 'Versionen med de bästa banorna och värdeversionen av resan är inte samma sak. Jag skulle avgöra var premiumgreenfeen faktiskt är värd det.',
      mixedPremium: 'Om gruppen har blandade handicap skulle jag lägga in en förlåtande rond även om resan bygger på premiumbanor.',
      strongRelaxed: 'För starka spelare behöver en lugn resa ändå en bana med nog mycket intresse, annars känns golfen för mjuk.',
      mixedGroups: 'Blandade grupper behöver en förlåtande dag. Tre tuffa banor i rad ser ofta bättre ut online än det känns på ön.',
      summer: 'På sommaren är starttid lika viktig som banval. Jag skulle undvika att bygga dagen kring en sen premiumtid i värmen.',
      clubHire: 'För klubbuthyrning och transporter skulle jag lösa det praktiska tidigt: uthyrning där det passar, pålitliga alternativ eller rätt kontakt innan starttiderna blir snävare.',
      fallback: 'Innan bokning skulle jag kontrollera banordning, starttider och restid tillsammans. Det är där de dyra misstagen uppstår.',
    },
  },
  zh: {
    priorityDefault: '还不确定',
    addOns: {
      pwap: 'Play With A Pro：与 Andy 一起打一轮，包含球场管理、本地决策和场上指导。',
      clubHire: '球杆租赁：Andy 可以在可行时帮您和球场预订一起安排，或者告诉您合适的租赁方式。',
      courseFit: '球场搭配：至少安排一轮更友好的球场，这样整个行程大家都能享受，而不只是最强的球手。',
      restaurants: '安排一次认真吃饭的午餐或帕尔马晚餐，把它放在最好的打球日旁边，而不是每天都硬塞进去。',
      fallback: '在住宿基点、球场和开球时间都确定之前，先把额外项目保持精简。',
    },
    watchouts: {
      northNoAlcanada: '除非 Alcanada 或更安静的北海岸真的是这趟行程的理由，否则我不会把您安排在北部。',
      northLowTravel: '北部很美，但并不是每个团队都能少开车的答案。我会把路线尽量收紧。',
      premiumValue: '最顶级球场版和性价比版的行程不是同一件事。我会仔细判断 premium 果岭费到底值不值。',
      mixedPremium: '如果团队差点较大，即使行程以高端球场为主，我也会安排一轮更宽容的球场。',
      strongRelaxed: '对更强的球手来说，轻松行程也需要一座足够有意思的球场，不然高尔夫会显得太软。',
      mixedGroups: '混合水平的团队需要一天更宽容的安排。连续三座难球场，网上看起来好看，到了岛上往往没那么舒服。',
      summer: '夏天里，开球时间和球场选择同样重要。我不会把一天建立在炎热时段的晚场 premium 开球上。',
      clubHire: '关于球杆租赁和接送，我会尽早把实际安排定好：能租就租、用可靠选项，或在开球时间紧张前找到正确联系人。',
      fallback: '预订前我会一起检查球场顺序、开球时间和车程。最贵的错误通常就出在这里。',
    },
  },
}

function getLocalizedPriorityOptions(locale) {
  return PRIORITY_OPTIONS[locale] || PRIORITY_OPTIONS.en
}

function getLocalizedCourseDetails(locale) {
  const copy = ITINERARY_COPY[locale] || ITINERARY_COPY.en
  const localized = COURSE_DETAILS_BY_LOCALE[locale] || COURSE_DETAILS_BY_LOCALE.en

  return Object.fromEntries(
    Object.entries(COURSE_DETAILS).map(([course, base]) => [
      course,
      {
        ...base,
        region: localized[course]?.region || copy.regionFallback,
        note: copy.courseNotesFallback,
      },
    ]),
  )
}

function getLocalizedBaseDetails(locale) {
  return BASE_DETAILS_BY_LOCALE[locale] || BASE_DETAILS_BY_LOCALE.en
}

function getLocalizedPlannerText(locale) {
  return PLANNER_TEXT_BY_LOCALE[locale] || PLANNER_TEXT_BY_LOCALE.en
}

const OPTIONS = ITINERARY_COPY.en.options
const FIELD_LABELS = ITINERARY_COPY.en.labels
const PLACEHOLDER_LABELS = ITINERARY_COPY.en.placeholders
const PRIORITIES = PRIORITY_OPTIONS.en

const REQUIRED_FIELDS = ['nights', 'group', 'level', 'golf', 'base', 'season', 'budget']

const COURSE_DETAILS = {
  Alcanada: {
    image: '/images/alcanada-card.webp',
    region: 'North coast',
    note: 'The scenic anchor if the north makes sense.',
  },
  'Pula or Son Servera': {
    image: '/images/courses/son-servera.webp',
    region: 'Northeast',
    note: 'A calmer second round after Alcanada.',
  },
  'Capdepera or Canyamel': {
    image: '/images/courses/capdepera.webp',
    region: 'Northeast',
    note: 'Good scenery without making the trip too heavy.',
  },
  'T Golf Calvia': {
    image: '/images/t-golf-calvia-card.webp',
    region: 'Southwest',
    note: 'A strong holiday round with easy resort logistics.',
  },
  'Santa Ponsa 1': {
    image: '/images/santa-ponsa-card.webp',
    region: 'Southwest',
    note: 'Classic tournament history and easy logistics.',
  },
  'Golf de Andratx': {
    image: '/images/andratx-card.webp',
    region: 'Southwest',
    note: 'Big views, big elevation, and a proper test.',
  },
  'Son Gual': {
    image: '/images/son-gual-card.webp',
    region: 'Palma east',
    note: 'The premium benchmark when the group can handle it.',
  },
  'Son Muntaner': {
    image: '/images/son-muntaner-card.webp',
    region: 'Son Vida',
    note: 'Polished, central, and ideal for a serious Palma base.',
  },
  'Son Quint': {
    image: '/images/courses/son-quint.webp',
    region: 'Son Vida',
    note: 'Friendly, close to Palma, and good for mixed groups.',
  },
  'T Golf Palma': {
    image: '/images/courses/t-golf-palma.webp',
    region: 'Palma',
    note: 'Useful for a lighter day without losing the golf feel.',
  },
  'Son Antem East or West': {
    image: '/images/courses/son-antem-east.webp',
    region: 'South',
    note: 'Good value and forgiving enough for mixed handicaps.',
  },
}

const BASE_DETAILS = {
  palma: {
    label: 'Palma / Son Vida',
    image: '/images/blog-trip-planning/Old Town Palma.webp',
    transfer: 'Airport 15-25 min. Most first drafts start here.',
  },
  southwest: {
    label: 'Southwest',
    image: '/images/t-golf-calvia-card.webp',
    transfer: 'Beach hotels, short resort transfers, easy golf days.',
  },
  north: {
    label: 'North / Alcudia',
    image: '/images/alcanada-card.webp',
    transfer: 'Best if Alcanada and quieter scenery are priorities.',
  },
  unsure: {
    label: 'Base flexible for now',
    image: '/images/son-gual-card.webp',
    transfer: 'Keep the base flexible until the course route is clear.',
  },
  other: {
    label: 'Custom base',
    image: '/images/golf-courses.webp',
    transfer: 'I will sanity-check whether the driving makes sense.',
  },
}

function getCourseMix(form) {
  const needsForgivingRoute = form.level === 'newer' || form.level === 'mixed' || form.group === 'family'
  const strongGolfers = form.level === 'strong'

  if (form.base === 'north') {
    if (needsForgivingRoute) return ['Alcanada', 'Pula or Son Servera', 'Capdepera or Canyamel']
    return ['Alcanada', 'Pula or Son Servera', 'Capdepera or Canyamel']
  }

  if (form.base === 'southwest') {
    if (needsForgivingRoute && !strongGolfers) return ['T Golf Calvia', 'Santa Ponsa 1', 'T Golf Palma']
    return ['T Golf Calvia', 'Santa Ponsa 1', 'Golf de Andratx']
  }

  if (needsForgivingRoute) {
    if (form.budget === 'premium') return ['Son Muntaner', 'T Golf Calvia', 'Son Quint']
    return ['Son Quint', 'T Golf Palma', 'Son Antem East or West']
  }

  if (form.golf === 'serious' || form.budget === 'premium' || strongGolfers) {
    return ['Son Gual', 'Son Muntaner', 'Alcanada']
  }

  if (form.golf === 'relaxed') {
    return ['Son Quint', 'T Golf Palma', 'Son Antem East or West']
  }

  return ['Son Gual', 'T Golf Calvia', 'Son Muntaner']
}

function getOptionLabel(key, value, freeText = {}) {
  if (value === 'other' && freeText[key]) return freeText[key]
  return OPTIONS[key]?.find((option) => option.value === value)?.label || value
}

function getPriorityLabels(form) {
  const labels = form.priorities.map((value) => PRIORITIES.find((priority) => priority.value === value)?.label || value)
  return labels.length ? labels : ['Not sure yet']
}

function getRoundCount(form) {
  const tripRounds = {
    day: 1,
    short: 2,
    medium: 3,
    long: form.golf === 'relaxed' ? 3 : 4,
    week: form.golf === 'relaxed' ? 3 : 4,
  }
  if (tripRounds[form.nights]) return tripRounds[form.nights]
  if (form.golf === 'relaxed') return 2
  if (form.golf === 'serious') return 4
  return 3
}

function getPackageName(form) {
  if (form.budget === 'premium' || form.golf === 'serious') return 'Premium Package'
  if (form.budget === 'value' || form.golf === 'relaxed') return 'Essential Package'
  return 'Balanced Package'
}

function getTripSnapshot(form) {
  const rounds = getRoundCount(form)
  const base = BASE_DETAILS[form.base] || BASE_DETAILS.unsure
  const pace = form.priorities.includes('lowTravel')
    ? 'Low-transfer route'
    : form.golf === 'serious'
      ? 'Premium-course route'
      : 'Balanced itinerary'

  return {
    rounds,
    base,
    pace,
    budget: form.budget === 'balanced' ? 'Balanced' : getOptionLabel('budget', form.budget, form.freeText),
  }
}

function getTripDays(form, courses) {
  const rounds = getRoundCount(form)
  const days = courses.slice(0, rounds).map((course, index) => ({
    label: `Day ${index + 1}`,
    title: course,
    detail: getDayRhythmDetail(form, course, index),
  }))

  if (form.priorities.includes('pwap') || form.priorities.includes('coaching')) {
    days.splice(Math.min(1, days.length), 0, {
      label: 'Play With A Pro',
      title: 'A private day with Andy',
      detail: 'Course management, local decisions, and coaching folded into the round.',
    })
  }

  if (['long', 'week'].includes(form.nights) || form.priorities.includes('restaurants')) {
    days.push({
      label: 'Breathing space',
      title: form.priorities.includes('restaurants') ? 'Long lunch or Palma evening' : 'Rest afternoon',
      detail: 'This is where the trip starts to feel planned, not crammed.',
    })
  }

  return days.slice(0, 5)
}

function getDayRhythmDetail(form, course, index) {
  if (index === 0) {
    if (course === 'Son Gual') return 'Start with the premium test while everyone is fresh, then let the rest of the trip breathe.'
    if (course === 'Alcanada') return 'Put the scenic anchor early so the north has a clear reason to be in the plan.'
    return 'Begin with a round that settles the group in without making day one feel like hard work.'
  }

  if (index === 1) {
    if (form.priorities.includes('lowTravel')) return 'Keep the second golf day logistically simple so the trip does not become a transfer exercise.'
    return 'Use the middle round to balance the trip: enough quality, less pressure, and a simpler day.'
  }

  if (form.golf === 'serious') return 'Finish with a course that still feels worth the tee time after two strong golf days.'
  return 'End with a polished round that leaves room for lunch, travel, or a slower final evening.'
}

function getWatchouts(form, courses) {
  const watchouts = []

  if (form.base === 'north' && !courses.includes('Alcanada')) {
    watchouts.push('I would not base you in the north unless Alcanada or the quieter coast is genuinely part of the reason for the trip.')
  }

  if (form.base === 'north' && form.priorities.includes('lowTravel')) {
    watchouts.push('The north can be beautiful, but it is not the low-driving answer for every group. I would keep the course route tight.')
  }

  if (form.golf === 'serious' && form.budget === 'value') {
    watchouts.push('The best-course version and the value version of the trip are different. I would decide where the premium green fee is actually worth it.')
  }

  if ((form.level === 'newer' || form.level === 'mixed') && form.golf === 'serious') {
    watchouts.push('If the group has mixed handicaps, I would include one forgiving round even if the trip is built around premium courses.')
  }

  if (form.level === 'strong' && form.golf === 'relaxed') {
    watchouts.push('For stronger players, a relaxed trip still needs one course with enough interest or the golf can feel too soft.')
  }

  if (form.group === 'family' || form.group === 'corporate') {
    watchouts.push('Mixed groups need one forgiving day. Three hard courses in a row usually looks better online than it feels on the island.')
  }

  if (form.season === 'summer') {
    watchouts.push('In summer, tee time matters as much as course choice. I would avoid building the day around a late premium slot in the heat.')
  }

  if (form.priorities.includes('clubHire')) {
    watchouts.push('For club hire and transfers, I would sort the practical route early: course hire where it makes sense, trusted rental options, or the right contact before tee times tighten.')
  }

  if (!watchouts.length) {
    watchouts.push('Before booking, I would check the course order, tee times, and travel time together. That is where most expensive mistakes happen.')
  }

  return watchouts.slice(0, 3)
}

function getBaseAdvice(form) {
  if (form.base === 'palma') return 'I would base you around Palma or Son Vida for easy dinners, airport access, and a strong first course mix.'
  if (form.base === 'southwest') return 'I would keep you in the southwest if beach hotels, short transfers, and T Golf / Santa Ponsa / Andratx are the pull.'
  if (form.base === 'north') return 'I would only base you in the north if Alcanada is a must-play and you want a quieter, more scenic trip.'
  if (form.priorities.includes('lowTravel')) return 'I would start near Palma or Son Vida until the course list proves you need a different base.'
  return 'I would choose the base after the course mix, not before. Palma is the safest first draft for most visiting golfers.'
}

function getRhythm(form) {
  const rounds = form.golf === 'relaxed' ? 'two or three rounds' : form.golf === 'serious' ? 'four strong rounds if the dates allow' : 'three good rounds with one lighter day'
  const level = form.level === 'newer' || form.level === 'mixed'
    ? 'I would avoid stacking difficult courses back to back.'
    : form.level === 'strong'
      ? 'I would make sure at least one round has real strategic interest.'
      : ''
  const rest = ['long', 'week'].includes(form.nights) ? 'I would protect one non-golf afternoon so the trip does not become a run of early starts.' : 'I would avoid overloading a short trip with too much driving.'
  return `For ${getOptionLabel('nights', form.nights, form.freeText)}, I would build around ${rounds}. ${level ? `${level} ` : ''}${rest}`
}

function getSeasonAdvice(form) {
  const advice = {
    spring: 'Spring is premium for conditions, so tee times and the best-value slots need sorting early.',
    summer: 'Summer can be excellent value if you are sensible with tee times, buggies, water, and recovery time.',
    autumn: 'Autumn is one of the best windows, but it is no longer a cheap secret. Book the key rounds early.',
    winter: 'Winter is usually the best value window, with good golf possible if you stay flexible on weather and wind.',
  }
  return advice[form.season]
}

function getAddOns(form) {
  const addOns = []
  if (form.priorities.includes('pwap') || form.priorities.includes('coaching') || form.golf === 'serious') {
    addOns.push('Play With A Pro: a private round with Andy for course management, local decisions, and coaching on the course.')
  }
  if (form.priorities.includes('clubHire')) {
    addOns.push('Club hire: Andy can arrange it with the course booking where possible, or point you to the right rental option.')
  }
  if (form.level === 'newer' || form.level === 'mixed') {
    addOns.push('Course fit: keep at least one forgiving round in the plan so everyone enjoys the trip, not just the strongest golfer.')
  }
  if (form.priorities.includes('restaurants')) {
    addOns.push('One proper lunch or Palma evening, planned around the best golf day rather than forced into every day.')
  }
  if (!addOns.length) {
    addOns.push('Keep extras light until the base, courses, and tee times are right.')
  }
  return addOns
}

function buildMessage(form, courses) {
  const snapshot = getTripSnapshot(form)
  return encodeURIComponent(
    `Hi Andy, I used the course finder on the site.\n\nTrip length: ${getOptionLabel('nights', form.nights, form.freeText)}\nGroup: ${getOptionLabel('group', form.group, form.freeText)}\nPlaying level: ${getOptionLabel('level', form.level, form.freeText)}\nGolf appetite: ${getOptionLabel('golf', form.golf, form.freeText)}\nBase idea: ${getOptionLabel('base', form.base, form.freeText)}\nSeason: ${getOptionLabel('season', form.season, form.freeText)}\nBudget: ${snapshot.budget}\nPossible rounds: ${snapshot.rounds}\nCourses I am considering: ${courses.join(', ')}\nPriorities: ${getPriorityLabels(form).join(', ')}\n\nCan you help me turn this into a proper plan and quote?`,
  )
}

function getLocalizedOptionLabel(copy, key, value, freeText = {}) {
  if (value === 'other' && freeText[key]) return freeText[key]
  return copy.options[key]?.find((option) => option.value === value)?.label || value
}

function getLocalizedPriorityLabels(form, locale) {
  const options = getLocalizedPriorityOptions(locale)
  const labels = form.priorities.map((value) => options.find((priority) => priority.value === value)?.label || value)
  return labels.length ? labels : [getLocalizedPlannerText(locale).priorityDefault]
}

function getLocalizedTripSnapshot(form, copy, locale) {
  const rounds = getRoundCount(form)
  const base = getLocalizedBaseDetails(locale)[form.base] || getLocalizedBaseDetails(locale).unsure
  const pace = form.priorities.includes('lowTravel')
    ? copy.paceLabels.lowTravel
    : form.golf === 'serious'
      ? copy.paceLabels.serious
      : copy.paceLabels.default

  return {
    rounds,
    base,
    pace,
    budget: copy.budgetLabels[form.budget] || getLocalizedOptionLabel(copy, 'budget', form.budget, form.freeText),
  }
}

function getLocalizedAddOns(form, locale) {
  const text = getLocalizedPlannerText(locale)
  const addOns = []
  if (form.priorities.includes('pwap') || form.priorities.includes('coaching') || form.golf === 'serious') {
    addOns.push(text.addOns.pwap)
  }
  if (form.priorities.includes('clubHire')) {
    addOns.push(text.addOns.clubHire)
  }
  if (form.level === 'newer' || form.level === 'mixed') {
    addOns.push(text.addOns.courseFit)
  }
  if (form.priorities.includes('restaurants')) {
    addOns.push(text.addOns.restaurants)
  }
  if (!addOns.length) {
    addOns.push(text.addOns.fallback)
  }
  return addOns
}

function getLocalizedWatchouts(form, courses, locale) {
  const text = getLocalizedPlannerText(locale)
  const watchouts = []

  if (form.base === 'north' && !courses.includes('Alcanada')) {
    watchouts.push(text.watchouts.northNoAlcanada)
  }

  if (form.base === 'north' && form.priorities.includes('lowTravel')) {
    watchouts.push(text.watchouts.northLowTravel)
  }

  if (form.golf === 'serious' && form.budget === 'value') {
    watchouts.push(text.watchouts.premiumValue)
  }

  if ((form.level === 'newer' || form.level === 'mixed') && form.golf === 'serious') {
    watchouts.push(text.watchouts.mixedPremium)
  }

  if (form.level === 'strong' && form.golf === 'relaxed') {
    watchouts.push(text.watchouts.strongRelaxed)
  }

  if (form.group === 'family' || form.group === 'corporate') {
    watchouts.push(text.watchouts.mixedGroups)
  }

  if (form.season === 'summer') {
    watchouts.push(text.watchouts.summer)
  }

  if (form.priorities.includes('clubHire')) {
    watchouts.push(text.watchouts.clubHire)
  }

  if (!watchouts.length) {
    watchouts.push(text.watchouts.fallback)
  }

  return watchouts.slice(0, 3)
}

function buildLocalizedMessage(form, courses, copy, locale) {
  const snapshot = getLocalizedTripSnapshot(form, copy, locale)
  const text = getLocalizedPlannerText(locale)
  return encodeURIComponent(
    `${copy.whatsappPrefix}\n\n${copy.labels.nights}: ${getLocalizedOptionLabel(copy, 'nights', form.nights, form.freeText)}\n${copy.labels.group}: ${getLocalizedOptionLabel(copy, 'group', form.group, form.freeText)}\n${copy.labels.level}: ${getLocalizedOptionLabel(copy, 'level', form.level, form.freeText)}\n${copy.labels.golf}: ${getLocalizedOptionLabel(copy, 'golf', form.golf, form.freeText)}\n${copy.labels.base}: ${getLocalizedOptionLabel(copy, 'base', form.base, form.freeText)}\n${copy.labels.season}: ${getLocalizedOptionLabel(copy, 'season', form.season, form.freeText)}\n${copy.labels.budget}: ${snapshot.budget}\n${copy.possibleRounds}: ${snapshot.rounds}\n${copy.coursesToConsider}: ${courses.join(', ')}\n${copy.prioritiesLabel}: ${getLocalizedPriorityLabels(form, locale).join(', ')}\n\n${copy.whatsappPrompt || text.addOns.fallback}`,
  )
}

export default function ItineraryPlanner(props) {
  const embedded = Boolean(props?.embedded)
  const locale = ITINERARY_COPY[props?.locale] ? props.locale : 'en'
  const copy = ITINERARY_COPY[locale] || ITINERARY_COPY.en
  const contactHref = buildLocalePath('/contact', locale)
  const priorityOptions = getLocalizedPriorityOptions(locale)
  const courseDetails = getLocalizedCourseDetails(locale)
  const baseDetails = getLocalizedBaseDetails(locale)
  const [form, setForm] = useState({
    nights: '',
    group: '',
    level: '',
    golf: '',
    base: '',
    season: '',
    budget: '',
    priorities: [],
    freeText: {},
  })

  const isReady = REQUIRED_FIELDS.every((key) => form[key])
  const courses = useMemo(() => getCourseMix(form), [form])
  const addOns = useMemo(() => getLocalizedAddOns(form, locale), [form, locale])
  const snapshot = useMemo(() => getLocalizedTripSnapshot(form, copy, locale), [form, copy, locale])
  const watchouts = useMemo(() => getLocalizedWatchouts(form, courses, locale), [form, courses, locale])
  const whatsappHref = isReady ? `https://wa.me/34624466702?text=${buildLocalizedMessage(form, courses, copy, locale)}` : ''

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  const updateFreeText = (key, value) => setForm((current) => ({ ...current, freeText: { ...current.freeText, [key]: value } }))
  const togglePriority = (value) => {
    setForm((current) => ({
      ...current,
      priorities: current.priorities.includes(value)
        ? current.priorities.filter((item) => item !== value)
        : [...current.priorities, value],
    }))
  }

  return (
    <section className={`itinerary-page${embedded ? ' itinerary-page--embedded' : ''}`}>
      {!embedded ? (
        <>
          <div className="itinerary-hero-media" aria-hidden="true">
            <Image
              src={isReady ? snapshot.base.image : baseDetails.unsure.image}
              alt=""
              fill
              priority
              quality={88}
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
            />
            <div className="itinerary-hero-media__scrim" />
          </div>

          <div className="itinerary-page__intro">
            <p className="eyebrow">{copy.introEyebrow}</p>
            <h1 className="serif-display">{copy.introTitle}</h1>
            <p>{copy.introBody}</p>
          </div>
        </>
      ) : null}

      <div className={`itinerary-tool${isReady ? ' itinerary-tool--ready' : ' itinerary-tool--empty'}`}>
        <div className="itinerary-controls" aria-label={copy.tripInputsLabel}>
          <div className="itinerary-control-grid">
            {Object.entries(copy.options).map(([key, options]) => (
              <label className="itinerary-field" key={key}>
                <span>{copy.labels[key] || key}</span>
                <select value={form[key]} onChange={(event) => update(key, event.target.value)}>
                  <option value="" disabled>
                    {copy.placeholders[key] || copy.addDetailPlaceholder || 'Select an option'}
                  </option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {form[key] === 'other' && options.find((o) => o.value === 'other')?.freeText && (
                  <input
                    type="text"
                    className="itinerary-freetext"
                    placeholder={copy.addDetailPlaceholder || ADD_DETAIL_PLACEHOLDER[locale] || ADD_DETAIL_PLACEHOLDER.en}
                    value={form.freeText[key] || ''}
                    onChange={(event) => updateFreeText(key, event.target.value)}
                  />
                )}
              </label>
            ))}
          </div>

          <div className="itinerary-priorities">
            <p className="itinerary-label">{copy.prioritiesLabel}</p>
            <div className="itinerary-chip-grid">
              {priorityOptions.map((priority) => (
                <button
                  key={priority.value}
                  type="button"
                  className={`itinerary-chip${form.priorities.includes(priority.value) ? ' is-active' : ''}`}
                  onClick={() => togglePriority(priority.value)}
                >
                  {priority.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {isReady ? (
        <div className="itinerary-output" aria-live="polite">
          <div className="itinerary-snapshot">
            <div className="itinerary-snapshot__image">
              <Image
                src={snapshot.base.image}
                alt={snapshot.base.label}
                fill
                quality={88}
                sizes="(max-width: 900px) 100vw, 580px"
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              />
            </div>
            <div className="itinerary-snapshot__content">
              <p className="eyebrow">{copy.startingPoint}</p>
              <h2 className="serif-display">{copy.coursesToConsider}</h2>
              <p>{copy.startingPointBody}</p>
              <div className="itinerary-metrics" aria-label={copy.summaryLabel}>
                <div>
                  <span>{snapshot.rounds}</span>
                  <p>{copy.possibleRounds}</p>
                </div>
                <div>
                  <span>{snapshot.pace}</span>
                  <p>{copy.style}</p>
                </div>
                <div>
                  <span>{snapshot.budget}</span>
                  <p>{copy.budgetLabel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="itinerary-output__header">
            <p className="eyebrow">{copy.basicTool}</p>
            <h2 className="serif-display">{copy.courseShortlist}</h2>
          </div>

          <div className="itinerary-quick-read">
            <article>
              <span>{copy.whatThisGivesYou}</span>
              <p>{copy.whatThisGivesYouBody}</p>
            </article>
            <article>
              <span>{copy.whatItDoesNotGiveYou}</span>
              <p>{copy.whatItDoesNotGiveYouBody}</p>
            </article>
            <article>
              <span>{copy.possibleAddOn}</span>
              <p>{addOns[0]}</p>
            </article>
          </div>

          <div className="itinerary-result">
            <h3>{copy.courseMix}</h3>
            <div className="itinerary-result__body">
              <div className="itinerary-course-cards">
                {courses.map((course) => {
                  const detail = courseDetails[course]
                  return (
                    <article className="itinerary-course-card" key={course}>
                      <div className="itinerary-course-card__image">
                        {detail?.image ? (
                          <Image
                            src={detail.image}
                            alt={course}
                            fill
                            quality={88}
                            sizes="(max-width: 640px) 92vw, 220px"
                            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                          />
                        ) : null}
                      </div>
                      <div>
                        <p>{detail?.region || copy.regionFallback}</p>
                        <h4>{course}</h4>
                        <span>{detail?.note || copy.courseNotesFallback}</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="itinerary-result itinerary-result--watchouts">
            <h3>{copy.paidPlanning}</h3>
            <div className="itinerary-result__body">
              <p className="itinerary-season-note">{copy.seasonAdvice[form.season]}</p>
              <ul className="itinerary-watchouts">
                {watchouts.map((watchout) => (
                  <li key={watchout}>{watchout}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="itinerary-next">
            <p>{copy.nextParagraph}</p>
            <div className="itinerary-actions">
              <a href={whatsappHref} className="btn btn--gold" target="_blank" rel="noopener noreferrer">{copy.sendCourseList}</a>
              <a href={contactHref} className="btn btn--dark">{copy.getInTouch}</a>
            </div>
          </div>
        </div>
        ) : null}
      </div>
    </section>
  )
}
