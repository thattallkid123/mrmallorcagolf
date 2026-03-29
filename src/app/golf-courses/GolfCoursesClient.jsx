'use client'
import { useState } from 'react'
import Link from 'next/link'

const TRANSLATIONS = {
  en: {
    allCourses: 'All Courses', expertPicks: '? Expert Picks Only',
    southwest: 'Southwest', south: 'South', east: 'East', north: 'North',
    yourGuide: 'Your guide', playWithAndy: 'Play with Andy',
    credentials: 'UK PGA Advanced Professional � Trackman Master � TPI Level 3 � 11 years coaching in Shanghai � Based in Mallorca since 2025',
    intro1: "Mallorca has more outstanding golf than most visitors realise. Twenty-two courses, several of genuine European Tour standard, in conditions that stay immaculate through winter.",
    intro2: "I'm working my way through every course on the island � playing them, reviewing them honestly. Below is what I know so far.",
    sidebarH3: 'Want to play one of these courses with a UK PGA professional alongside you?',
    sidebarP: 'Private round, everything arranged. Son Gual and Alcanada are the primary venues.',
    sidebarBtn: 'Get in touch ?',
    quickPicksTitle: 'Quick picks',
    quickPicks: ['Best overall: Son Gual','Most scenic: Alcanada','Best in Spain: Son Muntaner','Most challenging: Golf de Andratx','Best for beginners: Son Quint','Best value: Golf Pollensa','Best East coast: Pula or Canyamel'],
    ctaEyebrow: 'Want to play one of these?',
    ctaH2: 'Private round, everything arranged, UK PGA professional throughout.',
    ctaP: "Tell me which course interests you, your dates, and your handicap. I'll come back with a recommendation within 24 hours.",
    seeExperiences: 'See the Experiences ?',
    getInTouch: 'Get in touch',
    courseNote: '',
    geoEyebrow: 'Where the courses sit',
    geoH2: "Mallorca has more outstanding golf than most visitors realise.",
    geoP1: "Twenty-two courses ranging from genuine European Tour venues to quieter, less-visited gems. Green fees from �20 to over �200. I'm a UK PGA Advanced Professional based on the island, working my way through every course � all reviews are well-researched, with my own personal notes for the courses I've played.",
    geoP2: "Best time to play: October�November and February�April. The island plays year-round � in January, when courses in much of the rest of Europe are unplayable, the fairways here are immaculate.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual � Son Muntaner � Son Vida � Son Quint � T Golf Puntir� � Son Termes � Palma Pitch & Putt'}, {region: 'Southwest', courses: 'Santa Ponsa 1 � Santa Ponsa 2 � Santa Ponsa 3 � T Golf Calvi� � Bendinat � Golf de Andratx'}, {region: 'South', courses: 'Golf Maioris � Son Antem East � Son Antem West'}, {region: 'East', courses: 'Capdepera � Canyamel � Pula � Son Servera'}, {region: 'North', courses: 'Alcanada � Golf Pollensa'}],
  },
  de: {
    allCourses: 'Alle Pl�tze', expertPicks: '? Nur Expertentipps',
    southwest: 'S�dwesten', south: 'S�den', east: 'Osten', north: 'Norden',
    yourGuide: 'Ihr Guide', playWithAndy: 'Mit Andy spielen',
    credentials: 'UK PGA Advanced Professional � Trackman Master � TPI Level 3 � 11 Jahre Coaching in Shanghai � Auf Mallorca seit 2025',
    intro1: 'Mallorca hat mehr herausragendes Golf als die meisten Besucher vermuten. Alle Rezensionen sind sorgf�ltig recherchiert und korrekt, mit meinen pers�nlichen Notizen f�r die Pl�tze, die ich selbst gespielt habe.',
    intro2: 'Son Muntaner wurde 2025 bei den World Golf Awards zum besten Golfplatz Spaniens gek�rt. Die Insel hat die DP World Tour, das Rolex Challenge Tour Grand Final und Platzentw�rfe von Robert Trent Jones Jr., Jack Nicklaus und Seve Ballesteros beherbergt.',
    sidebarH3: 'M�chten Sie einen dieser Pl�tze mit einem UK PGA Professional an Ihrer Seite spielen?',
    sidebarP: 'Private Runde, alles arrangiert, Coaching auf dem Platz. Son Gual und Alcanada sind die prim�ren Venues.',
    sidebarBtn: 'Kontakt aufnehmen ?',
    quickPicksTitle: 'Schnellauswahl',
    quickPicks: ['Bester Platz: Son Gual','Sch�nster Platz: Alcanada','Bester in Spanien: Son Muntaner','Schwierigster: Golf de Andratx','Bester f�r Anf�nger: Son Quint','Bestes Preis-Leistung: Golf Pollensa','Bester Ostk�ste: Pula oder Canyamel'],
    ctaEyebrow: 'Einen dieser Pl�tze spielen?',
    ctaH2: 'Private Runde, alles arrangiert, UK PGA Professional dabei.',
    ctaP: 'Teilen Sie mir mit, welcher Platz Sie interessiert, Ihre Daten und Ihr Handicap. Ich melde mich innerhalb von 24 Stunden mit einer Empfehlung.',
    seeExperiences: 'Erlebnisse ansehen ?',
    getInTouch: 'Kontakt aufnehmen',
    courseNote: 'Die Platzbeschreibungen sind auf Englisch.',
    geoEyebrow: 'Wo die Pl�tze liegen',
    geoH2: "Mallorca hat mehr herausragendes Golf, als die meisten Besucher vermuten.",
    geoP1: "Zweiundzwanzig Pl�tze � von echten European Tour Austragungsorten bis hin zu ruhigeren, weniger bekannten Sch�tzen. Green Fees von 20 � bis �ber 200 �. Ich bin ein UK PGA Advanced Professional auf der Insel und arbeite mich durch jeden Platz.",
    geoP2: "Beste Spielzeit: Oktober�November und Februar�April. Die Insel ist ganzj�hrig bespielbar � im Januar, wenn Pl�tze in Europa geschlossen sind, sind die Fairways hier makellos.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual � Son Muntaner � Son Vida � Son Quint � T Golf Puntir� � Son Termes � Palma Pitch & Putt'}, {region: 'S�dwesten', courses: 'Santa Ponsa 1 � Santa Ponsa 2 � Santa Ponsa 3 � T Golf Calvi� � Bendinat � Golf de Andratx'}, {region: 'S�den', courses: 'Golf Maioris � Son Antem East � Son Antem West'}, {region: 'Osten', courses: 'Capdepera � Canyamel � Pula � Son Servera'}, {region: 'Norden', courses: 'Alcanada � Golf Pollensa'}],
  },
  es: {
    allCourses: 'Todos los campos', expertPicks: '? Solo selecciones de experto',
    southwest: 'Suroeste', south: 'Sur', east: 'Este', north: 'Norte',
    yourGuide: 'Tu gu�a', playWithAndy: 'Jugar con Andy',
    credentials: 'UK PGA Advanced Professional � Trackman Master � TPI Nivel 3 � 11 a�os entrenando en Shangh�i � En Mallorca desde 2025',
    intro1: 'Mallorca tiene m�s golf de calidad de lo que la mayor�a de visitantes imagina. Todas las rese�as est�n bien documentadas y son precisas, con mis notas personales y de primera mano para los campos que he jugado.',
    intro2: 'Son Muntaner fue nombrado Mejor Campo de Golf de Espa�a en los World Golf Awards 2025. La isla ha acogido el DP World Tour, el Rolex Challenge Tour Grand Final, y tiene dise�os de Robert Trent Jones Jr., Jack Nicklaus y Seve Ballesteros.',
    sidebarH3: '�Quiere jugar uno de estos campos con un UK PGA profesional a su lado?',
    sidebarP: 'Ronda privada, todo organizado, coaching en campo. Son Gual y Alcanada son los campos principales.',
    sidebarBtn: 'Ponerse en contacto ?',
    quickPicksTitle: 'Selecciones r�pidas',
    quickPicks: ['El mejor: Son Gual','El m�s pintoresco: Alcanada','El mejor de Espa�a: Son Muntaner','El m�s dif�cil: Golf de Andratx','El mejor para principiantes: Son Quint','El mejor precio: Golf Pollensa','El mejor de la costa este: Pula o Canyamel'],
    ctaEyebrow: '�Quiere jugar uno de estos campos?',
    ctaH2: 'Ronda privada, todo organizado, UK PGA profesional durante toda la jornada.',
    ctaP: 'D�game qu� campo le interesa, sus fechas y su handicap. Le responder� con una recomendaci�n en 24 horas.',
    seeExperiences: 'Ver las experiencias ?',
    getInTouch: 'Contactar',
    courseNote: 'Las descripciones de los campos est�n en ingl�s.',
    geoEyebrow: 'D�nde est�n los campos',
    geoH2: "Mallorca tiene m�s golf de calidad de lo que la mayor�a de visitantes imagina.",
    geoP1: "Veintid�s campos � desde aut�nticos recintos del European Tour hasta joyas m�s tranquilas y menos conocidas. Green fees desde 20 � hasta m�s de 200 �. Soy un UK PGA Advanced Professional en la isla, recorriendo cada campo.",
    geoP2: "Mejor �poca: octubre�noviembre y febrero�abril. La isla es jugable todo el a�o � en enero, cuando los campos en gran parte de Europa son injugables, los fairways aqu� est�n impecables.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual � Son Muntaner � Son Vida � Son Quint � T Golf Puntir� � Son Termes � Palma Pitch & Putt'}, {region: 'Suroeste', courses: 'Santa Ponsa 1 � Santa Ponsa 2 � Santa Ponsa 3 � T Golf Calvi� � Bendinat � Golf de Andratx'}, {region: 'Sur', courses: 'Golf Maioris � Son Antem East � Son Antem West'}, {region: 'Este', courses: 'Capdepera � Canyamel � Pula � Son Servera'}, {region: 'Norte', courses: 'Alcanada � Golf Pollensa'}],
  },
  fr: {
    allCourses: 'Tous les parcours', expertPicks: "? S�lections d'expert uniquement",
    southwest: 'Sud-ouest', south: 'Sud', east: 'Est', north: 'Nord',
    yourGuide: 'Votre guide', playWithAndy: 'Jouer avec Andy',
    credentials: "UK PGA Advanced Professional � Trackman Master � TPI Niveau 3 � 11 ans d'entra�nement � Shanghai � Bas� � Majorque depuis 2025",
    intro1: "Majorque poss�de un golf de qualit� sup�rieure � ce que la plupart des visiteurs imaginent. Toutes les �valuations sont bien document�es et pr�cises, avec mes notes personnelles et de premi�re main pour les parcours que j'ai jou�s.",
    intro2: "Son Muntaner a �t� nomm� Meilleur Parcours de Golf d'Espagne aux World Golf Awards 2025. L'�le a accueilli le DP World Tour, le Rolex Challenge Tour Grand Final, et des designs de Robert Trent Jones Jr., Jack Nicklaus et Seve Ballesteros.",
    sidebarH3: "Vous souhaitez jouer l'un de ces parcours avec un UK PGA professionnel � vos c�t�s ?",
    sidebarP: 'Partie priv�e, tout organis�, coaching sur parcours. Son Gual et Alcanada sont les sites principaux.',
    sidebarBtn: "Prendre contact ?",
    quickPicksTitle: 'S�lections rapides',
    quickPicks: ["Le meilleur : Son Gual","Le plus pittoresque : Alcanada","Le meilleur d'Espagne : Son Muntaner","Le plus difficile : Golf de Andratx","Le meilleur pour d�butants : Son Quint","Le meilleur rapport qualit�-prix : Golf Pollensa","Le meilleur c�te est : Pula ou Canyamel"],
    ctaEyebrow: "Vous souhaitez jouer l'un de ces parcours ?",
    ctaH2: "Partie priv�e, tout organis�, UK PGA professionnel tout au long de la journ�e.",
    ctaP: 'Dites-moi quel parcours vous int�resse, vos dates et votre handicap. Je reviendrai avec une recommandation dans les 24 heures.',
    seeExperiences: "Voir les exp�riences ?",
    getInTouch: "Prendre contact",
    courseNote: 'Les descriptions des parcours sont en anglais.',
    geoEyebrow: 'O� se trouvent les parcours',
    geoH2: "Majorque poss�de plus de golf de qualit� que la plupart des visiteurs ne l'imaginent.",
    geoP1: "Vingt-deux parcours � des vrais sites du Tour Europ�en aux joyaux plus tranquilles et moins connus. Green fees de 20 � � plus de 200 �. Je suis un UK PGA Advanced Professional bas� sur l'�le, parcourant chaque terrain.",
    geoP2: "Meilleure p�riode : octobre�novembre et f�vrier�avril. L'�le est jouable toute l'ann�e � en janvier, quand les parcours en Europe sont impraticables, les fairways ici sont impeccables.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual � Son Muntaner � Son Vida � Son Quint � T Golf Puntir� � Son Termes � Palma Pitch & Putt'}, {region: 'Sud-ouest', courses: 'Santa Ponsa 1 � Santa Ponsa 2 � Santa Ponsa 3 � T Golf Calvi� � Bendinat � Golf de Andratx'}, {region: 'Sud', courses: 'Golf Maioris � Son Antem East � Son Antem West'}, {region: 'Est', courses: 'Capdepera � Canyamel � Pula � Son Servera'}, {region: 'Nord', courses: 'Alcanada � Golf Pollensa'}],
  },
  zh: {
    allCourses: '????', expertPicks: '? ?????',
    southwest: '???', south: '??', east: '??', north: '??',
    yourGuide: '????', playWithAndy: '?Andy????',
    credentials: '??PGA?????? � Trackman???? � TPI Level 3 � ?????11? � 2025???????',
    intro1: '?????????????????????????????????????,????,????????????????????',
    intro2: 'Son Muntaner??2025???????"??????????"????????DP?????????????????,???????�???�?????�???????�????????????',
    sidebarH3: '????PGA????????????????',
    sidebarP: '??????,??????,???????Son Gual?Alcanada??????',
    sidebarBtn: '???? ?',
    quickPicksTitle: '????',
    quickPicks: ['????:Son Gual','????:Alcanada','?????:Son Muntaner','????:Golf de Andratx','??????:Son Quint','?????:Golf Pollensa','?????:Pula?Canyamel'],
    ctaEyebrow: '????????',
    ctaH2: '??????,????,??PGA?????????',
    ctaP: '??????????????????,???24?????????????',
    seeExperiences: '?????? ?',
    getInTouch: '????',
    courseNote: '??????????',
    geoEyebrow: '??????',
    geoH2: "?????????????????????????",
    geoP1: "?22???��??????????????????????????20???200??????????????PGA??????,?????????????",
    geoP2: "??????:10??11??2??4????????��1??,?????????????,????????????",
    geoRegions: [{region: '???', courses: 'Son Gual � Son Muntaner � Son Vida � Son Quint � T Golf Puntir� � Son Termes � Palma Pitch & Putt'}, {region: '???', courses: 'Santa Ponsa 1 � Santa Ponsa 2 � Santa Ponsa 3 � T Golf Calvi� � Bendinat � Golf de Andratx'}, {region: '??', courses: 'Golf Maioris � Son Antem East � Son Antem West'}, {region: '??', courses: 'Capdepera � Canyamel � Pula � Son Servera'}, {region: '??', courses: 'Alcanada � Golf Pollensa'}],
  },
  nl: {
    allCourses: 'Alle banen', expertPicks: '? Alleen expertselecties',
    southwest: 'Zuidwest', south: 'Zuid', east: 'Oost', north: 'Noord',
    yourGuide: 'Uw gids', playWithAndy: 'Speel met Andy',
    credentials: 'UK PGA Advanced Professional � Trackman Master � TPI Level 3 � 11 jaar coaching in Shanghai � Gebaseerd op Mallorca sinds 2025',
    intro1: 'Mallorca heeft meer uitstekende golf dan de meeste bezoekers verwachten. Alle beoordelingen zijn goed onderzocht en nauwkeurig, met mijn persoonlijke notities en eerste-hands aantekeningen voor de banen die ik zelf gespeeld heb.',
    intro2: 'Son Muntaner werd uitgeroepen tot Beste Golfbaan van Spanje bij de World Golf Awards 2025. Het eiland heeft de DP World Tour, de Rolex Challenge Tour Grand Final georganiseerd en heeft ontwerpen van Robert Trent Jones Jr., Jack Nicklaus en Seve Ballesteros.',
    sidebarH3: 'Wilt u een van deze banen spelen met een UK PGA professional naast u?',
    sidebarP: 'Priv�ronde, alles geregeld, coaching op de baan. Son Gual en Alcanada zijn de primaire locaties.',
    sidebarBtn: 'Neem contact op ?',
    quickPicksTitle: 'Snelle keuzes',
    quickPicks: ['Beste overall: Son Gual','Mooiste: Alcanada','Beste van Spanje: Son Muntaner','Moeilijkste: Golf de Andratx','Beste voor beginners: Son Quint','Beste waarde: Golf Pollensa','Beste oostkust: Pula of Canyamel'],
    ctaEyebrow: 'Wilt u een van deze banen spelen?',
    ctaH2: 'Priv�ronde, alles geregeld, UK PGA professional de hele dag aanwezig.',
    ctaP: 'Vertel me welke baan u interesseert, uw data en uw handicap. Ik kom binnen 24 uur terug met een aanbeveling.',
    seeExperiences: 'Bekijk de ervaringen ?',
    getInTouch: 'Neem contact op',
    courseNote: 'De baanbeschrijvingen zijn in het Engels.',
    geoEyebrow: 'Waar de banen liggen',
    geoH2: "Mallorca heeft meer uitstekende golf dan de meeste bezoekers verwachten.",
    geoP1: "Twee�ntwintig banen � van echte European Tour-locaties tot rustiger, minder bekende parels. Green fees van �20 tot meer dan �200. Ik ben een UK PGA Advanced Professional op het eiland en werk me door elke baan.",
    geoP2: "Beste speeltijd: oktober�november en februari�april. Het eiland is het hele jaar speelbaar � in januari, wanneer banen in Europa gesloten zijn, zijn de fairways hier vlekkeloos.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual � Son Muntaner � Son Vida � Son Quint � T Golf Puntir� � Son Termes � Palma Pitch & Putt'}, {region: 'Zuidwest', courses: 'Santa Ponsa 1 � Santa Ponsa 2 � Santa Ponsa 3 � T Golf Calvi� � Bendinat � Golf de Andratx'}, {region: 'Zuid', courses: 'Golf Maioris � Son Antem East � Son Antem West'}, {region: 'Oost', courses: 'Capdepera � Canyamel � Pula � Son Servera'}, {region: 'Noord', courses: 'Alcanada � Golf Pollensa'}],
  },
  sv: {
    allCourses: 'Alla banor', expertPicks: '? Endast experttips',
    southwest: 'Sydv�st', south: 'S�der', east: '�st', north: 'Norr',
    yourGuide: 'Din guide', playWithAndy: 'Spela med Andy',
    credentials: 'UK PGA Advanced Professional � Trackman Master � TPI Niv� 3 � 11 �r som coach i Shanghai � Bosatt p� Mallorca sedan 2025',
    intro1: 'Mallorca har mer utm�rkt golf �n de flesta bes�kare inser. Alla recensioner �r v�lresearchade och korrekta, med mina personliga anteckningar fr�n de banor jag spelat.',
    intro2: 'Son Muntaner uts�gs till B�sta Golfbana i Spanien vid World Golf Awards 2025. �n har arrangerat DP World Tour, Rolex Challenge Tour Grand Final och har bandesign av Robert Trent Jones Jr., Jack Nicklaus och Seve Ballesteros.',
    sidebarH3: 'Vill du spela en av dessa banor med en UK PGA-professionell vid din sida?',
    sidebarP: 'Privat runda, allt ordnat, coaching p� banan. Son Gual och Alcanada �r de prim�ra banorna.',
    sidebarBtn: 'Ta kontakt ?',
    quickPicksTitle: 'Snabbval',
    quickPicks: ['B�st totalt: Son Gual','Vackrast: Alcanada','B�st i Spanien: Son Muntaner','Sv�rast: Golf de Andratx','B�st f�r nyb�rjare: Son Quint','B�st v�rde: Golf Pollensa','B�st �stkust: Pula eller Canyamel'],
    ctaEyebrow: 'Vill du spela en av dessa banor?',
    ctaH2: 'Privat runda, allt ordnat, UK PGA-professionell under hela dagen.',
    ctaP: 'Ber�tta vilken bana som intresserar dig, dina datum och ditt handicap. Jag �terkommer med en rekommendation inom 24 timmar.',
    seeExperiences: 'Se upplevelserna ?',
    getInTouch: 'Ta kontakt',
    courseNote: 'Banebeskrivningarna �r p� engelska.',
    geoEyebrow: 'Var banorna ligger',
    geoH2: "Mallorca har mer utm�rkt golf �n de flesta bes�kare inser.",
    geoP1: "Tjugotv� banor � fr�n riktiga European Tour-arenor till lugnare, mindre k�nda p�rlor. Green fees fr�n �20 till �ver �200. Jag �r en UK PGA Advanced Professional p� �n och spelar mig igenom varje bana.",
    geoP2: "B�sta speltid: oktober�november och februari�april. �n �r spelbar �ret runt � i januari, n�r banor i Europa �r obrukbara, �r fairwaysarna h�r immakulate.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual � Son Muntaner � Son Vida � Son Quint � T Golf Puntir� � Son Termes � Palma Pitch & Putt'}, {region: 'Sydv�st', courses: 'Santa Ponsa 1 � Santa Ponsa 2 � Santa Ponsa 3 � T Golf Calvi� � Bendinat � Golf de Andratx'}, {region: 'S�der', courses: 'Golf Maioris � Son Antem East � Son Antem West'}, {region: '�st', courses: 'Capdepera � Canyamel � Pula � Son Servera'}, {region: 'Norr', courses: 'Alcanada � Golf Pollensa'}],
  },
}


function getRegions(t) {
  return [
    { key: 'all', label: t.allCourses },
    { key: 'palma', label: 'Palma' },
    { key: 'southwest', label: t.southwest },
    { key: 'south', label: t.south },
    { key: 'east', label: t.east },
    { key: 'north', label: t.north },
    { key: 'expert', label: t.expertPicks },
  ]
}


const COURSE_TRANSLATIONS = {
  de: {
    'Golf Son Gual': {
      location: 'Palma � 11 km vom Stadtzentrum',
      text: 'Thomas Himmels Design von 2007 hat sein eigenes Wind-�kosystem � die erh�hte Lage und der Baumbestand sorgen daf�r, dass sich der Wind an jedem Loch anders verh�lt. Die Greens sind schnell und erh�ht; wichtiger als der Schwung ist, wo der Ball nicht landet. Der Abschluss von Loch 15 bis 18 geh�rt zu den besten vier L�chern im europ�ischen Golf. Rafa Nadal hat erkl�rt, dies sei sein Lieblingsplatz auf der Insel.',
      note: '�Der Wind auf 16 ist eine andere Herausforderung als der Wind auf 7. Das macht den Platz so wiederholbar."',
      footer: 'Rafas Favorit � Pflichtrunde',
    },
    'Golf Son Vida': {
      location: 'Arabella � Son Vida, Palma',
      text: 'Der �lteste Platz auf Mallorca, er�ffnet 1964. Seve Ballesteros gewann hier 1990 in einem European-Tour-Playoff. Das Layout windet sich durch das Wohnviertel Son Vida mit enger Routenf�hrung und H�henunterschieden. Das 18. Loch ist ein Par 5 mit einem Wasserdurchgang beim zweiten Schlag, der viele zu einer Entscheidung verleitet, die sie sp�ter bereuen.',
      footer: '�ltester Platz der Insel � Seve gewann hier',
    },
    'Son Muntaner': {
      location: 'Son Vida � Palma',
      text: 'Ausgezeichnet als Bester Golfplatz Spaniens bei den World Golf Awards 2025. Der urspr�ngliche Platz des Castillo Hotel Son Vida, neu gestaltet von Severiano Ballesteros. Ausblicke �ber die Bucht von Palma von den h�heren L�chern. Ein tausend Jahre alter Olivenbaum steht an Loch 15 � im Spiel, nicht nur zur Dekoration. Gastgeber des Mallorca Golf Open auf der DP World Tour.',
      footer: 'Bester in Spanien 2025 � DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella � Son Vida, Palma',
      text: 'Der zug�nglichste der Arabella-Pl�tze. Lange, offene Fairways und vier verschiedene Abschlagpositionen machen ihn wirklich f�r jedes Niveau geeignet. Von Loch 8, dem h�chsten Punkt des Platzes, schl�gt man direkt in Richtung Palma-Kathedrale ab. Tiger Woods spielte hier im Juli 2022 mit seinem Sohn Charlie. Die Steinmauern sind im Spiel � nicht nur Dekoration.',
      footer: 'Ideal f�r Anf�nger � Tiger Woods spielte hier',
    },
    'T Golf Palma Puntir�': {
      location: 'Palma � 10 km vom Stadtzentrum',
      text: 'Der einzige von Jack Nicklaus entworfene Platz auf Mallorca, er�ffnet 2006 und 2022 vollst�ndig renoviert. Nicklaus entwarf ihn, um dem vorhandenen Gel�nde zu folgen � keine k�nstlich gegl�tteten Fairways. Einheimische Kiefern, wilde Oliven und Johannisbrotb�ume bilden das Rough durchgehend, ohne sichtbare Geb�ude von einem der L�cher.',
      footer: 'Einziges Nicklaus-Design auf der Insel',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella � Zentral-Palma',
      text: 'Neun L�cher, Par 27, 638 Meter gesamt. Der einzige offizielle Pitch & Putt Platz auf Mallorca. Alle neun L�cher sind Par 3, von 50�100 m, was Pr�zision statt Kraft erfordert. Der nat�rliche Einstiegspunkt f�r Anf�nger und Junioren, eine gute Aufw�rmrunde vor einem vollen Runde anderswo, oder eine n�tzliche Option f�r einen Nicht-Golfer.',
      footer: 'Ideal f�r Anf�nger & Junioren',
    },
    'Golf Son Termes': {
      location: 'Bunyola � 10 km von Palma',
      text: 'Wahrscheinlich der Platz auf der Insel, der sich am st�rksten in seine Umgebung einf�gt � er liegt in einem Tal der Tramuntana, wobei die Berge an jedem Loch den Hintergrund bilden. Kurz mit Par 70 und 5.285 m, aber das Gel�nde kompensiert mit st�ndigen H�henunterschieden und engen Fairways � Buggy empfohlen. Das Restaurant �berblickt das 18. Gr�n und die Bucht von Palma.',
      footer: 'Tramuntana-Tal � 10 Min. von Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa � 20 km von Palma',
      text: 'Der einzige �ffentliche Platz der Santa-Ponsa-Gruppe mit echtem European-Tour-Prestige � er war Gastgeber des DP World Tour Mallorca Golf Open 2021. Einer der l�ngsten Pl�tze der Insel; Loch 10 mit 590 m ist eines der l�ngsten Par-5-L�cher Europas. Mehrere teilweise blinde Abschl�ge und Wasserhindernisse. L�cher 5, 6 und 7 bieten einige der sch�nsten Tramuntana-Bergblicke der Insel.',
      footer: '�ffentlicher Zugang � DP World Tour Austragungsort',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa � 20 km von Palma',
      text: 'Nur f�r Mitglieder und meist ruhig. Viele Abschl�ge machen den Driver zur schlechten Wahl � ein Hybrid zur Positionskontrolle ist oft die kl�gere Entscheidung. Die Baumreihen sind dicht und ein Ball an der falschen Stelle bedeutet meist R�ckkehr per Chip. Das 18. Loch: ein Par 3 mit einem Gr�n in Form der Insel Mallorca selbst � ein Detail, das man kennen sollte.',
      note: '�Das 18. Gr�n ist wie Mallorca selbst geformt. Ein Detail, das man kennen sollte, bevor man dort ankommt."',
      footer: 'Zugang f�r Kunden arrangierbar',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa � 20 km von Palma',
      text: 'Neun L�cher durch eine Wohnsiedlung. Die meisten L�cher sind kurz � ideal f�r Anf�nger oder f�r jeden, der das Kurzspiel �ben m�chte, ohne eine volle Runde zu spielen. Das zweite Loch ist mein Favorit: trotz der kurzen Distanz ist ein pr�ziser Abschlag erforderlich.',
      footer: 'Gut f�r das Kurzspiel � Zugang arrangierbar',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat � 7 km von Palma',
      text: 'Sieben Kilometer von Palma in einem bewaldeten Tal � wirklich ruhig f�r einen Platz so nah an der Stadt. Blick auf die Bucht von Palma, die Insel Cabrera und das alte Schloss Bendinat. Hinweis: Das Hauptclubhaus wird derzeit renoviert, Wiederer�ffnung geplant f�r Mai/Juni 2026. Begrenzte Besucherstartkarten pro Tag � im Voraus buchen.',
      footer: 'Clubhaus-Renovierung bis Mai/Juni 2026',
    },
    'T Golf Calvi� (Poniente)': {
      location: 'Calvi� � 12 km von Palma',
      text: 'Urspr�nglich von John Harris 1978 entworfen und nach einer Investition von 10 Millionen Euro vollst�ndig neu gebaut � neuer Platz, neues Clubhaus, ein v�llig anderes Angebot. F�nfzehn Seen, offene Fairways, gro�e wellige Greens. Das Meer auf einer Seite und die Tramuntana auf der anderen. Gastgeber der Mallorca Open.',
      footer: 'Gastgeber der Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar � 40 km von Palma',
      text: 'Das 6. Loch ist das l�ngste Par 5 Spaniens mit 609 m. In die H�gel �ber Camp de Mar ohne Kompromisse gebaut. Extra B�lle mitbringen und kein Ego � das Rough ist echt und die Fairways eng. Nicht f�r Anf�nger ohne Handicap-Ausweis geeignet. Erlebnis, Aussichten und Schwierigkeit machen es zu einer der denkw�rdigsten Runden der Insel.',
      footer: 'Schwierigster Platz der Insel',
    },
    'Golf Maioris': {
      location: 'Llucmajor � 20 km von Palma',
      text: 'Ein interessanter Platz, da Vorder- und R�ckneun sich wie zwei verschiedene Designphilosophien anf�hlen � die erste Neun schottisch und wellig, die zweite amerikanischer und flacher. F�nfzehn Minuten vom Flughafen und weniger �berf�llt als die Pl�tze n�her an Palma. Hat eine der wenigen �ffentlichen Grasabschlaganlagen der Insel.',
      footer: '15 Min. vom Flughafen � �ffentliche Grasabschlaganlage',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor � 15 km von Palma',
      text: 'Breite, gro�z�gige Fairways, die Spielern willkommen sind, die noch Vertrauen vom Abschlag aufbauen, w�hrend L�nge und f�nf Seen bessere Spieler ehrlich halten. Auf einem ehemaligen Jagdgut bei Llucmajor gebaut, zehn Minuten vom Flughafen. Von Francisco Lopez-Segal�s entworfen, er�ffnet 1994.',
      footer: 'Gut f�r Anf�nger � Marriott Resort',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor � 15 km von Palma',
      text: 'Der anspruchsvollere der beiden Son-Antem-Pl�tze und Austragungsort der meisten Resort-Turniere. Engere Fairways, weniger nachsichtige Roughs, wellige Greens mit Bunkern drumherum. F�hrt durch eine traditionelle mallorquinische Finca mit Blick auf den Randa-Berg.',
      footer: 'Anspruchsvoller als East � Turnieranlage',
    },
    'Capdepera Golf': {
      location: 'Art� � 65 km von Palma',
      text: 'Dan Maples entwarf dies, um der vorhandenen Landschaft zu folgen. Die erste H�lfte f�hrt durch ein weites Tal � offen, relativ sanft. Die zweite Neun erklimmt die Levant-H�gel und wird zu einem viel technischeren Test. Loch 15, oben in den Bergen mit Blick �ber das ganze Tal zur K�ste, wurde von Mallorca Magazin als bestes Loch der Insel ausgew�hlt.',
      footer: 'Am besten kombiniert mit Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera � 65 km von Palma',
      text: 'Jedes der ersten neun L�cher hat seinen eigenen Charakter. Loch 4 hat an klaren Tagen Blick auf Menorca. Loch 9 hat ein traditionelles Steinhaus in der Mitte des Fairways � ein Hindernis, das nur auf Mallorca existiert. Loch 18 endet mit einer dreifachen Wellenbewegung auf dem Gr�n, die von der Clubhaustarrasse aus sichtbar ist.',
      footer: 'Blick auf Menorca an klaren Tagen',
    },
    'Pula Golf': {
      location: 'Son Servera � 55 km von Palma',
      text: 'Von Olaz�bal zwischen 2004 und 2006 vollst�ndig neu gestaltet, danach Gastgeber von acht European-Tour-Events. Hervorragende �bungsanlagen inklusive Trackman-Range-Technologie. Federer und Nadal spielten hier im Juli 2025 eine Runde. Pep Guardiola ist regelm��iger Gast.',
      footer: 'Olaz�bal-Design � Gastgeber European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera � 55 km von Palma',
      text: 'Gegr�ndet 1967, einer der �ltesten Pl�tze der Insel. Ein Parkland-Platz entlang der Costa de los Pinos mit gro�z�gigen Fairways und entspanntem Rough. L�cher 3 bis 7 sind die Ausnahme: enge, von B�umen ges�umte Fairways, die in die H�gel aufsteigen und zwischen Seen weben. Wasser an sechs L�chern.',
      footer: 'Einer der �ltesten Pl�tze der Insel',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alc�dia � 55 km von Palma',
      text: 'Mein zweiter Ankerplatz und wohl der malerischste Mallorcas. Design von Robert Trent Jones Jr. Der Leuchtturm von Alcanada, von 16 der 18 L�cher sichtbar, ist eines der meistfotografierten Golffahr in Europa. 58 Bunker sind strategisch �ber das Layout verteilt � sie erfordern auf jedem Anspiel Aufmerksamkeit.',
      text2: 'Der Platz ist Gastgeber des Rolex Challenge Tour Grand Final, der im Oktober 2026 zum sechsten Mal zur�ckkehrt. Die Greens sind stark gewellt und extrem schnell. Die Restaurant-Terrasse nach der Runde ist einer der sch�nsten Orte der Insel. 50 Minuten von Palma einplanen � es lohnt sich.',
      note: '�Eine der sch�nsten Runden, die man irgendwo in Europa spielen kann. Der Leuchtturm auf 17 ist unvergesslich."',
      footer: 'Rolex Challenge Tour Grand Final Okt. 2026 � 50 Min. von Palma',
    },
    'Golf Pollensa': {
      location: 'Pollen�a � 60 km von Palma',
      text: 'Neun L�cher am Eingang zur Stadt Pollen�a, in die H�gel integriert mit Blick auf die Tramuntana und die Buchten von Pollen�a und Alc�dia. Von Jos� Gancedo 1986 entworfen. Eine Runde dauert etwa 90 Minuten � ein einfaches Aufw�rmen oder eine gute Option an einem Tag, an dem man Golf ohne vollen Einsatz m�chte.',
      footer: 'Schnelle Runde � 90 Minuten',
    },
  },
  es: {
    'Golf Son Gual': {
      location: 'Palma � 11 km del centro',
      text: 'El dise�o de Thomas Himmel de 2007 tiene su propio ecosistema de viento � su posici�n elevada y la cobertura arb�rea hacen que el viento se comporte de manera diferente en cada hoyo. Los greens son r�pidos y elevados; donde fallas importa m�s que c�mo golpeas. El tramo final � hoyos 15 a 18 � est� entre los cuatro mejores hoyos consecutivos del golf europeo. Rafa Nadal ha dicho que es su campo favorito en la isla.',
      note: '"El viento en el 16 es un desaf�o diferente al del 7. Eso es lo que hace que el campo sea tan rejugable."',
      footer: 'Favorito de Rafa � Campo obligatorio',
    },
    'Golf Son Vida': {
      location: 'Arabella � Son Vida, Palma',
      text: 'El campo m�s antiguo de Mallorca, inaugurado en 1964. Seve Ballesteros gan� aqu� en un playoff del European Tour en 1990. El trazado serpentea por el barrio residencial de Son Vida con un recorrido ajustado y cambios de elevaci�n. El hoyo 18 es un par 5 con un paso sobre agua en el segundo golpe que tienta a muchos a tomar una decisi�n que luego lamentan.',
      footer: 'El campo m�s antiguo de la isla � Seve gan� aqu�',
    },
    'Son Muntaner': {
      location: 'Son Vida � Palma',
      text: 'Elegido Mejor Campo de Golf de Espa�a en los World Golf Awards 2025. El campo original del Castillo Hotel Son Vida, redise�ado por Severiano Ballesteros. Vistas sobre la Bah�a de Palma desde los hoyos m�s altos. Un olivo milenario est� en el hoyo 15 � en juego, no solo de decoraci�n. Acoge el Mallorca Golf Open en el DP World Tour.',
      footer: 'El mejor de Espa�a 2025 � DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella � Son Vida, Palma',
      text: 'El m�s accesible de los campos de Arabella. Calles largas y abiertas y cuatro posiciones de salida diferentes lo hacen genuinamente apto para cualquier nivel. Desde el hoyo 8, el punto m�s alto del campo, se golpea directamente hacia la Catedral de Palma. Tiger Woods jug� aqu� con su hijo Charlie en julio de 2022. Los muros de piedra est�n en juego � no solo de decoraci�n.',
      footer: 'Ideal para principiantes � Tiger Woods jug� aqu�',
    },
    'T Golf Palma Puntir�': {
      location: 'Palma � 10 km del centro',
      text: 'El �nico campo dise�ado por Jack Nicklaus en Mallorca, inaugurado en 2006 y completamente renovado en 2022. Nicklaus lo dise�� para seguir el terreno existente sin modificaciones. Pinos nativos, olivos silvestres y algarrobos forman el rough sin que haya edificios visibles desde ning�n hoyo.',
      footer: '�nico dise�o Nicklaus en la isla',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella � Centro de Palma',
      text: 'Nueve hoyos, par 27, 638 metros en total. El �nico campo de pitch & putt oficial de Mallorca. Los nueve hoyos son par 3 de 50 a 100 m, exigiendo precisi�n en lugar de potencia. El punto de partida natural para principiantes y j�venes, un buen calentamiento antes de una ronda completa, o una opci�n �til para un acompa�ante no golfista.',
      footer: 'Perfecto para principiantes y j�venes',
    },
    'Golf Son Termes': {
      location: 'Bunyola � 10 km de Palma',
      text: 'Probablemente el campo de la isla que m�s integrado est� con su entorno � se asienta en un valle de la Tramuntana con las monta�as formando un tel�n de fondo en cada hoyo. Corto con par 70 y 5.285 m, pero el terreno compensa con constantes cambios de elevaci�n y calles estrechas � se recomienda buggy. El restaurante domina el green 18 y la Bah�a de Palma.',
      footer: 'Valle de la Tramuntana � 10 min de Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa � 20 km de Palma',
      text: 'El �nico campo p�blico del grupo Santa Ponsa con aut�ntico pedigr� del European Tour � fue sede del Mallorca Golf Open del DP World Tour 2021. Uno de los campos m�s largos de la isla; el hoyo 10 con 590 m es uno de los par 5 m�s largos de Europa. Varios golpes de salida parcialmente ciegos y obst�culos de agua. Los hoyos 5, 6 y 7 ofrecen algunas de las mejores vistas de la Serra de Tramuntana.',
      footer: 'Acceso p�blico � Sede del DP World Tour',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa � 20 km de Palma',
      text: 'Solo para socios y generalmente tranquilo. Muchos golpes de salida hacen que el driver sea una mala elecci�n � un hybrid para controlar la posici�n suele ser la decisi�n m�s inteligente. El alineamiento de �rboles es denso y una bola en el lugar equivocado suele significar volver con un chip. El hoyo 18: un par 3 con un green con la forma de la isla de Mallorca � un detalle que conviene saber antes de llegar.',
      note: '"El green del 18 tiene la forma de Mallorca. Un detalle que conviene saber antes de llegar."',
      footer: 'Acceso organizable para clientes',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa � 20 km de Palma',
      text: 'Nueve hoyos por una comunidad residencial. La mayor�a de los hoyos son cortos � ideal para principiantes o para quien quiera trabajar el juego corto sin comprometerse a una ronda completa. El segundo hoyo es mi favorito: requiere un golpe de salida preciso a pesar de la corta distancia.',
      footer: 'Bueno para el juego corto � Acceso organizable',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat � 7 km de Palma',
      text: 'Siete kil�metros de Palma en un valle arbolado � genuinamente tranquilo para un campo tan cercano a la ciudad. Vistas sobre la Bah�a de Palma, la isla de Cabrera y el antiguo Castillo de Bendinat. Nota: el clubhouse principal est� en obras, con reapertura prevista para mayo/junio 2026. Tarjetas de visitante limitadas por d�a � reservar con antelaci�n.',
      footer: 'Renovaci�n del clubhouse hasta mayo/junio 2026',
    },
    'T Golf Calvi� (Poniente)': {
      location: 'Calvi� � 12 km de Palma',
      text: 'Dise�ado originalmente por John Harris en 1978 y completamente reconstruido tras una inversi�n de 10 millones de euros � nuevo campo, nuevo clubhouse, una propuesta completamente diferente. Quince lagos, calles abiertas que invitan al driver, grandes greens ondulados. El mar a un lado y la Tramuntana al otro. Ha sido sede del Mallorca Open.',
      footer: 'Sede del Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar � 40 km de Palma',
      text: 'El hoyo 6 es el par 5 m�s largo de Espa�a con 609 metros. Construido en las colinas sobre Camp de Mar sin compromisos. Traer pelotas extra y humildad � el rough es real y las calles estrechas. No apto para principiantes sin handicap. La experiencia, las vistas y la dificultad lo convierten en una de las rondas m�s memorables de la isla.',
      footer: 'El campo m�s dif�cil de la isla',
    },
    'Golf Maioris': {
      location: 'Llucmajor � 20 km de Palma',
      text: 'Un campo interesante porque los nueve primeros y los nueve �ltimos hoyos parecen dos filosof�as de dise�o �nicas � los primeros nueve escoceses y ondulados, los segundos m�s americanos y planos. A quince minutos del aeropuerto y menos concurrido que los campos m�s cercanos a Palma. Tiene uno de los pocos campos de pr�cticas de hierba p�blica de la isla.',
      footer: '15 min del aeropuerto � Campo de pr�cticas de hierba',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor � 15 km de Palma',
      text: 'Calles anchas y generosas que dan la bienvenida a los jugadores que a�n est�n ganando confianza desde el tee, mientras que la longitud y los cinco lagos mantienen honestos a los mejores jugadores. Construido en una antigua finca de caza cerca de Llucmajor, a diez minutos del aeropuerto. Dise�ado por Francisco Lopez-Segal�s, inaugurado en 1994.',
      footer: 'Bueno para principiantes � Resort Marriott',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor � 15 km de Palma',
      text: 'El m�s exigente de los dos campos de Son Antem y donde se celebran la mayor�a de los torneos del resort. Calles m�s estrechas, menos rough indulgente, greens ondulados rodeados de b�nkeres. Discurre por una finca mallorquina tradicional con vistas a la monta�a de Randa.',
      footer: 'M�s dif�cil que East � Sede de torneos',
    },
    'Capdepera Golf': {
      location: 'Art� � 65 km de Palma',
      text: 'Dan Maples lo dise�� para seguir el paisaje existente. La primera mitad discurre por un amplio valle � abierto, relativamente suave. Los nueve traseros ascienden a las colinas del Llevant y se convierten en un test mucho m�s t�cnico. El hoyo 15, en lo alto de las monta�as con vistas sobre todo el valle hasta la costa, fue elegido como el mejor hoyo de la isla por Mallorca Magazin.',
      footer: 'Ideal combinado con Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera � 65 km de Palma',
      text: 'Cada uno de los primeros nueve hoyos tiene su propio car�cter. El hoyo 4 tiene vistas a Menorca en d�as despejados. El hoyo 9 tiene una caseta de piedra tradicional en medio de la calle � un obst�culo �nico en Mallorca. El hoyo 18 termina con una ondulaci�n triple en el green visible desde la terraza del clubhouse.',
      footer: 'Vistas a Menorca en d�as despejados',
    },
    'Pula Golf': {
      location: 'Son Servera � 55 km de Palma',
      text: 'Completamente redise�ado por Olaz�bal entre 2004 y 2006, posteriormente acogiendo ocho eventos del European Tour. Excelentes instalaciones de pr�ctica incluyendo tecnolog�a Trackman Range. Federer y Nadal jugaron una ronda aqu� en julio de 2025. Pep Guardiola es habitual.',
      footer: 'Dise�o de Olaz�bal � Sede del European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera � 55 km de Palma',
      text: 'Fundado en 1967, uno de los campos m�s antiguos de la isla. Un campo de parque a lo largo de la Costa de los Pinos con calles generosas y rough relajado. Los hoyos 3 a 7 son la excepci�n: calles estrechas bordeadas de �rboles que suben a las colinas y se entrecruzan entre lagos. Agua en seis hoyos.',
      footer: 'Uno de los campos m�s antiguos de la isla',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alc�dia � 55 km de Palma',
      text: 'Mi segundo campo ancla y probablemente el m�s pintoresco de Mallorca. Dise�o de Robert Trent Jones Jr. El faro de Alcanada, visible desde 16 de los 18 hoyos, es uno de los hitos de golf m�s fotografiados de Europa. Cincuenta y ocho b�nkeres est�n distribuidos estrat�gicamente por el trazado � exigen atenci�n en cada aproximaci�n.',
      text2: 'El campo acoge el Rolex Challenge Tour Grand Final, que regresa por sexta vez en octubre de 2026. Los greens son muy ondulados y extremadamente r�pidos. La terraza del restaurante tras la ronda es uno de los mejores lugares de la isla. Calcular 50 minutos desde Palma � merece cada minuto.',
      note: '"Una de las rondas m�s hermosas que se pueden jugar en cualquier lugar de Europa. El faro en el 17 es inolvidable."',
      footer: 'Rolex Challenge Tour Grand Final Oct. 2026 � 50 min de Palma',
    },
    'Golf Pollensa': {
      location: 'Pollen�a � 60 km de Palma',
      text: 'Nueve hoyos a la entrada de la ciudad de Pollen�a, integrados en la ladera con vistas a la Tramuntana y a las bah�as de Pollen�a y Alc�dia. Dise�ado por Jos� Gancedo en 1986. Una ronda dura unos 90 minutos � un calentamiento f�cil o una buena opci�n para un d�a en que se quiere golf sin compromiso total.',
      footer: 'Ronda r�pida � 90 minutos',
    },
  },
  fr: {
    'Golf Son Gual': {
      location: 'Palma � 11 km du centre-ville',
      text: 'Le design de Thomas Himmel en 2007 poss�de son propre �cosyst�me de vent � sa position �lev�e et le couvert arbor� font que le vent se comporte diff�remment sur chaque trou. Les greens sont rapides et sur�lev�s ; o� vous ratez compte plus que comment vous frappez. Le final � trous 15 � 18 � figure parmi les quatre meilleurs trous cons�cutifs du golf europ�en. Rafa Nadal a dit que c\'est son parcours pr�f�r� sur l\'�le.',
      note: '"Le vent sur le 16 est un d�fi diff�rent du vent sur le 7. C\'est ce qui rend le parcours si rejouable."',
      footer: 'Favori de Rafa � Incontournable',
    },
    'Golf Son Vida': {
      location: 'Arabella � Son Vida, Palma',
      text: 'Le plus ancien parcours de Majorque, ouvert en 1964. Seve Ballesteros y a gagn� en playoff sur l\'European Tour en 1990. Le trac� serpente � travers le quartier r�sidentiel de Son Vida avec un parcours serr� et des changements de d�nivel�. Le trou 18 est un par 5 avec un passage au-dessus de l\'eau sur le deuxi�me coup qui pousse beaucoup � prendre une d�cision qu\'ils regrettent ensuite.',
      footer: 'Le plus ancien parcours de l\'�le � Seve a gagn� ici',
    },
    'Son Muntaner': {
      location: 'Son Vida � Palma',
      text: '�lu Meilleur Parcours de Golf d\'Espagne aux World Golf Awards 2025. Le parcours original du domaine du Castillo Hotel Son Vida, redessin� par Severiano Ballesteros. Vues sur la Baie de Palma depuis les trous les plus �lev�s. Un olivier mill�naire se trouve sur le 15 � en jeu, pas seulement d�coratif. Accueille le Mallorca Golf Open sur le DP World Tour.',
      footer: 'Meilleur en Espagne 2025 � DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella � Son Vida, Palma',
      text: 'Le plus accessible des parcours Arabella. De longs fairways ouverts et quatre positions de d�part diff�rentes le rendent vraiment adapt� � tous les niveaux. Du trou 8, le point le plus haut du parcours, on frappe directement vers la Cath�drale de Palma. Tiger Woods y a jou� avec son fils Charlie en juillet 2022. Les murs en pierre sont en jeu � pas seulement d�coratifs.',
      footer: 'Id�al pour d�butants � Tiger Woods a jou� ici',
    },
    'T Golf Palma Puntir�': {
      location: 'Palma � 10 km du centre-ville',
      text: 'Le seul parcours con�u par Jack Nicklaus � Majorque, ouvert en 2006 et enti�rement r�nov� en 2022. Nicklaus l\'a con�u pour suivre le terrain existant sans modification. Des pins indig�nes, des oliviers sauvages et des caroubiers forment le rough tout au long, sans b�timents visibles depuis aucun trou.',
      footer: 'Seul design Nicklaus sur l\'�le',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella � Centre de Palma',
      text: 'Neuf trous, par 27, 638 m�tres au total. Le seul parcours officiel de pitch & putt � Majorque. Les neuf trous sont des par 3 de 50 � 100 m, exigeant la pr�cision plut�t que la puissance. Le point de d�part naturel pour les d�butants et les juniors, un bon �chauffement avant un parcours complet, ou une option utile pour un accompagnateur non-golfeur.',
      footer: 'Parfait pour d�butants et juniors',
    },
    'Golf Son Termes': {
      location: 'Bunyola � 10 km de Palma',
      text: 'Probablement le parcours de l\'�le qui s\'int�gre le mieux � son environnement � il se trouve dans une vall�e de la Tramuntana avec les montagnes formant un d�cor sur chaque trou. Court avec par 70 et 5 285 m, mais le terrain compense avec des changements de d�nivel� constants et des fairways �troits � buggy recommand�. Le restaurant surplombe le 18e green et la Baie de Palma.',
      footer: 'Vall�e de la Tramuntana � 10 min de Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa � 20 km de Palma',
      text: 'Le seul parcours public du groupe Santa Ponsa avec un vrai pedigree du European Tour � il a accueilli le Mallorca Golf Open du DP World Tour 2021. L\'un des parcours les plus longs de l\'�le ; le trou 10 avec 590 m est l\'un des plus longs par 5 d\'Europe. Plusieurs d�parts partiellement aveugles et obstacles d\'eau. Les trous 5, 6 et 7 offrent certaines des meilleures vues sur la Serra de Tramuntana.',
      footer: 'Acc�s public � Terrain du DP World Tour',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa � 20 km de Palma',
      text: 'R�serv� aux membres et g�n�ralement calme. Beaucoup de d�parts rendent le driver un mauvais choix � un hybrid pour contr�ler la position est souvent la d�cision la plus judicieuse. L\'alignement d\'arbres est dense et une balle au mauvais endroit signifie g�n�ralement revenir avec un chip. Le 18 : un par 3 avec un green en forme de l\'�le de Majorque elle-m�me � un d�tail � conna�tre avant d\'arriver.',
      note: '"Le green du 18 a la forme de Majorque elle-m�me. Un de ces d�tails � conna�tre avant d\'arriver."',
      footer: 'Acc�s organisable pour les clients',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa � 20 km de Palma',
      text: 'Neuf trous � travers une communaut� r�sidentielle. La plupart des trous sont courts � bien adapt� aux d�butants ou � quiconque veut travailler le jeu court sans s\'engager dans un parcours complet. Le deuxi�me trou est mon pr�f�r� : malgr� la courte distance, un d�part pr�cis est n�cessaire.',
      footer: 'Bon pour le jeu court � Acc�s organisable',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat � 7 km de Palma',
      text: 'Sept kilom�tres de Palma dans une vall�e bois�e � vraiment paisible pour un parcours si proche de la ville. Vues sur la Baie de Palma, l\'�le de Cabrera et le vieux Ch�teau de Bendinat. Note : le clubhouse principal est en travaux, avec une r�ouverture pr�vue en mai/juin 2026. Green fees visiteurs limit�s par jour � r�server � l\'avance.',
      footer: 'R�novation du clubhouse jusqu\'en mai/juin 2026',
    },
    'T Golf Calvi� (Poniente)': {
      location: 'Calvi� � 12 km de Palma',
      text: 'Con�u � l\'origine par John Harris en 1978 et enti�rement reconstruit suite � un investissement de 10 millions d\'euros � nouveau parcours, nouveau clubhouse, proposition enti�rement diff�rente. Quinze lacs, fairways ouverts encourageant le driver, grands greens ondul�s. La mer d\'un c�t� et la Tramuntana de l\'autre. A accueilli le Mallorca Open.',
      footer: 'H�te du Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar � 40 km de Palma',
      text: 'Le trou 6 est le plus long par 5 d\'Espagne avec 609 m�tres. Construit dans les collines au-dessus de Camp de Mar sans compromis. Apporter des balles suppl�mentaires et pas d\'ego � le rough est r�el et les fairways �troits. Pas adapt� aux d�butants sans handicap. L\'exp�rience, les vues et la difficult� en font l\'un des parcours les plus m�morables de l\'�le.',
      footer: 'Le parcours le plus difficile de l\'�le',
    },
    'Golf Maioris': {
      location: 'Llucmajor � 20 km de Palma',
      text: 'Un parcours int�ressant car le neuf avant et le neuf arri�re semblent avoir deux philosophies de design uniques � le premier neuf �cossais et vallonn�, le second plus am�ricain et plat. Quinze minutes de l\'a�roport et moins fr�quent� que les parcours plus proches de Palma. Poss�de l\'un des rares practice sur herbe publics de l\'�le.',
      footer: '15 min de l\'a�roport � Practice sur herbe public',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor � 15 km de Palma',
      text: 'Larges fairways accueillants pour les joueurs qui construisent encore leur confiance au d�part, tandis que la longueur et cinq lacs maintiennent les meilleurs joueurs honn�tes. Construit sur un ancien domaine de chasse pr�s de Llucmajor, � dix minutes de l\'a�roport. Con�u par Francisco Lopez-Segal�s, ouvert en 1994.',
      footer: 'Bon pour d�butants � Resort Marriott',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor � 15 km de Palma',
      text: 'Le plus exigeant des deux parcours de Son Antem et o� se tiennent la plupart des tournois du resort. Fairways plus �troits, rough moins indulgent, greens ondul�s entour�s de bunkers. Serpente � travers une finca mallorquine traditionnelle avec vues sur la montagne de Randa.',
      footer: 'Plus difficile que East � Site de tournois',
    },
    'Capdepera Golf': {
      location: 'Art� � 65 km de Palma',
      text: 'Dan Maples l\'a con�u pour suivre le paysage existant. La premi�re moiti� parcourt une large vall�e � ouverte, relativement douce. Le neuf retour grimpe dans les collines du Llevant et devient un test beaucoup plus technique. Le trou 15, en haut des montagnes avec des vues sur toute la vall�e jusqu\'� la c�te, a �t� choisi comme le meilleur trou de l\'�le par Mallorca Magazin.',
      footer: '� combiner id�alement avec Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera � 65 km de Palma',
      text: 'Chacun des neuf premiers trous a son propre caract�re. Le trou 4 offre des vues sur Minorque par temps clair. Le trou 9 a une cabane en pierre traditionnelle au milieu du fairway � un obstacle unique � Majorque. Le trou 18 se termine par une ondulation triple sur le green visible depuis la terrasse du clubhouse.',
      footer: 'Vues sur Minorque par temps clair',
    },
    'Pula Golf': {
      location: 'Son Servera � 55 km de Palma',
      text: 'Enti�rement redessin� par Olaz�bal entre 2004 et 2006, accueillant ensuite huit �v�nements du European Tour. Excellentes installations d\'entra�nement incluant la technologie Trackman Range. Federer et Nadal ont jou� une partie ici en juillet 2025. Pep Guardiola est un habitu�.',
      footer: 'Design Olaz�bal � H�te du European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera � 55 km de Palma',
      text: 'Fond� en 1967, l\'un des plus anciens parcours de l\'�le. Un parcours de parc le long de la Costa de los Pinos avec de larges fairways et un rough d�tendu. Les trous 3 � 7 sont l\'exception : des fairways �troits bord�s d\'arbres qui montent dans les collines et s\'entrelacent entre les lacs. Eau sur six trous.',
      footer: 'L\'un des plus anciens parcours de l\'�le',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alc�dia � 55 km de Palma',
      text: 'Mon deuxi�me parcours phare et sans doute le plus pittoresque de Majorque. Design de Robert Trent Jones Jr. Le phare d\'Alcanada, visible depuis 16 des 18 trous, est l\'un des monuments de golf les plus photographi�s d\'Europe. Cinquante-huit bunkers sont dispos�s strat�giquement sur le trac� � ils exigent de l\'attention sur chaque approche.',
      text2: 'Le parcours accueille le Rolex Challenge Tour Grand Final, qui revient pour sa sixi�me �dition en octobre 2026. Les greens sont tr�s ondul�s et extr�mement rapides. La terrasse du restaurant apr�s la partie est l\'un des plus beaux endroits de l\'�le. Pr�voir 50 minutes depuis Palma � �a vaut chaque minute.',
      note: '"L\'un des plus beaux parcours que l\'on puisse jouer n\'importe o� en Europe. Le phare sur le 17 est inoubliable."',
      footer: 'Rolex Challenge Tour Grand Final Oct. 2026 � 50 min de Palma',
    },
    'Golf Pollensa': {
      location: 'Pollen�a � 60 km de Palma',
      text: 'Neuf trous � l\'entr�e de la ville de Pollen�a, int�gr�s dans la colline avec des vues sur la Tramuntana et les baies de Pollen�a et d\'Alc�dia. Con�u par Jos� Gancedo en 1986. Une partie dure environ 90 minutes � un �chauffement facile ou une bonne option pour un jour o� l\'on veut du golf sans engagement total.',
      footer: 'Partie rapide � 90 minutes',
    },
  },
  zh: {
    'Golf Son Gual': {
      location: '??? � ????11??',
      text: '???�???2007????????????????��???????????????????????????????;????????????????15?18??????????????????????????�?????????????????',
      note: '"?16?????7???????????????????????????"',
      footer: '???? � ????',
    },
    'Golf Son Vida': {
      location: '???? � ???Son Vida',
      text: '??????????,??1964??????�???????1990???????????????????Son Vida???,????,????????18????5??,???????,????????????????',
      footer: '???????? � ??????',
    },
    'Son Muntaner': {
      location: 'Son Vida � ???',
      text: '??2025????????????????????????????Son Vida???????,?????�?????????????????????????15??????????��???,????????DP???????????????',
      footer: '2025?????? � DP?????',
    },
    'Golf Son Quint': {
      location: '???? � ???Son Vida',
      text: '??????????????????????????????????????????????????8???,????????????????????2022?7??????????????????��??????',
      footer: '????? � ?????????',
    },
    'T Golf Palma Puntir�': {
      location: '??? � ????10??',
      text: '???????????�?????????,2006???,2022??????????????????,?????????????????????????????,?????????????',
      footer: '??????????',
    },
    'Palma Pitch & Putt': {
      location: '???? � ??????',
      text: '9???,???27,??638????????????????????????3??,??50?100?,???????????????????????,????????????,?????????????????',
      footer: '?????????',
    },
    'Golf Son Termes': {
      location: '???? � ????10??',
      text: '??????????????????��??????????????,????????????????70,??5285?,????????????????????????��????????????18?????????',
      footer: '??????? � ????10??',
    },
    'Golf Santa Ponsa 1': {
      location: '???? � ????20??',
      text: '???????????????,??????????��???2021?DP????????????????????????,?10?590???????5???????????????????5?6?7????????????????????',
      footer: '???? � DP????????',
    },
    'Golf Santa Ponsa 2': {
      location: '???? � ????20??',
      text: '????????????????????????��????????????????????????,??????????????????18?:??3??,????????????��???????????',
      note: '"?18????????????????????????????"',
      footer: '????????',
    },
    'Golf Santa Ponsa 3': {
      location: '???? � ????20??',
      text: '??????????????????��?????????????????????????2??????:????,????????,????????????????',
      footer: '?????? � ?????',
    },
    'Real Golf de Bendinat': {
      location: '???? � ????7??',
      text: '????7??,???????????��?????????????,?????????????????????????????????:?????????,???2026?5?/6????????????????��?????',
      footer: '?????2026?5?/6?',
    },
    'T Golf Calvi� (Poniente)': {
      location: '???? � ????12??',
      text: '?????�????1978???,??1000???????????��???????,?????????????,???????????,????????????,??????????????????????',
      footer: '?????????',
    },
    'Golf de Andratx': {
      location: '????? � ????40??',
      text: '?6??609?????????5???????????????????????????,????��???????,?????????????????????????????????????????????',
      footer: '??????????',
    },
    'Golf Maioris': {
      location: '????? � ????20??',
      text: '????,????????????????????��?????????????,??????????????????15??,???????????��????????????????????????????????',
      footer: '???15?? � ???????',
    },
    'Golf Son Antem East': {
      location: '????? � ????15??',
      text: '????????????????????,????????????????????????????????????,?????????????�???�??????,1994????',
      footer: '????? � ?????',
    },
    'Golf Son Antem West': {
      location: '????? � ????15??',
      text: '??Son Antem???????????,?????????????????????,????????,????????????????????,??????????',
      footer: '?East????? � ?????',
    },
    'Capdepera Golf': {
      location: '??? � ????65??',
      text: '?�???????????????????????????��??,???????????????,????????????15?????,???????????,?�?????�??????????',
      footer: '???????????',
    },
    'Canyamel Golf': {
      location: '????? � ????65??',
      text: '????????????????4?????????????9????????????��??????????18???????????????????????',
      footer: '?????????',
    },
    'Pula Golf': {
      location: '????? � ????55??',
      text: '???????2004?2006????????,????????????????????,??Trackman Range???????????2025?7?????????????????',
      footer: '??????? � ??????',
    },
    'Golf Club Son Servera': {
      location: '????? � ????55??',
      text: '???1967?,???????????????????????????,????,???????3?7????:?????????????,?????????????????',
      footer: '??????????',
    },
    'Club de Golf Alcanada': {
      location: '?????? � ????55??',
      text: '?????????,?????????????????�???�??????????????18?????16???,???????????????????????????????��??????????',
      text2: '????2026?10????????????????????????,???????????????????????????????50??��???????',
      note: '"????????????????????????17?????????"',
      footer: '2026?10???????????? � ????50??',
    },
    'Golf Pollensa': {
      location: '??? � ????60??',
      text: '????????????,????,???????????????????????????�????1986????????90??��?????????????????????',
      footer: '???? � 90??',
    },
  },
  nl: {
    'Golf Son Gual': {
      location: 'Palma � 11 km van het stadscentrum',
      text: 'Thomas Himmels ontwerp uit 2007 heeft zijn eigen wind-ecosysteem � de verhoogde ligging en boomkap zorgen ervoor dat de wind op elke hole anders kan gedragen. De greens zijn snel en verhoogd; waar je mist telt meer dan hoe je slaat. Het slot � holes 15 tot 18 � behoort tot de vier beste opeenvolgende holes in het Europese golf. Rafa Nadal heeft gezegd dat dit zijn favoriete baan op het eiland is.',
      note: '"De wind op 16 is een andere uitdaging dan de wind op 7. Dat maakt de baan zo herspelbaar."',
      footer: 'Rafa\'s favoriet � Must-play',
    },
    'Golf Son Vida': {
      location: 'Arabella � Son Vida, Palma',
      text: 'De oudste golfbaan van Mallorca, geopend in 1964. Seve Ballesteros won hier in 1990 in een European Tour playoff. Het parcours slingert door de residenti�le wijk Son Vida met strakke routing en hoogteverschillen. Hole 18 is een par 5 met een wateroversteek bij de tweede slag die velen verleidt tot een beslissing die ze later betreuren.',
      footer: 'Oudste baan van het eiland � Seve won hier',
    },
    'Son Muntaner': {
      location: 'Son Vida � Palma',
      text: 'Uitgeroepen tot Beste Golfbaan van Spanje op de World Golf Awards 2025. De originele baan van het Castillo Hotel Son Vida-landgoed, herontworpen door Severiano Ballesteros. Uitzichten over de Baai van Palma vanaf de hogere holes. Een duizend jaar oude olijfboom staat op hole 15 � in spel, niet alleen decoratief. Gastheer van de Mallorca Golf Open op de DP World Tour.',
      footer: 'Beste van Spanje 2025 � DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella � Son Vida, Palma',
      text: 'De meest toegankelijke van de Arabella-banen. Lange, open fairways en vier verschillende teeposities maken het echt geschikt voor elk niveau. Vanaf hole 8, het hoogste punt van de baan, sla je direct in de richting van de Kathedraal van Palma. Tiger Woods speelde hier in juli 2022 met zijn zoon Charlie. De stenen muren zijn in spel � niet alleen decoratief.',
      footer: 'Ideaal voor beginners � Tiger Woods speelde hier',
    },
    'T Golf Palma Puntir�': {
      location: 'Palma � 10 km van het stadscentrum',
      text: 'De enige door Jack Nicklaus ontworpen baan op Mallorca, geopend in 2006 en volledig gerenoveerd in 2022. Nicklaus ontwierp het om het bestaande terrein te volgen zonder aanpassing. Inheemse dennen, wilde olijfbomen en johannesbroodbomen vormen de rough, zonder gebouwen zichtbaar vanaf enige hole.',
      footer: 'Enig Nicklaus-ontwerp op het eiland',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella � Centraal Palma',
      text: 'Negen holes, par 27, 638 meter totaal. De enige offici�le pitch & putt baan op Mallorca. Alle negen holes zijn par 3 van 50�100 m, waarbij precisie vereist is in plaats van kracht. Het natuurlijke startpunt voor beginners en junioren, een goede warming-up voor een volledige ronde elders, of een handige optie voor een niet-golfende partner.',
      footer: 'Perfect voor beginners en junioren',
    },
    'Golf Son Termes': {
      location: 'Bunyola � 10 km van Palma',
      text: 'Waarschijnlijk de baan op het eiland die het meest ge�ntegreerd is met zijn omgeving � het ligt in een dal van de Tramuntana met de bergen als achtergrond op elke hole. Kort met par 70 en 5.285 m, maar het terrein compenseert met constante hoogteverschillen en smalle fairways � buggy aanbevolen. Het restaurant kijkt uit op de 18e green en de Baai van Palma.',
      footer: 'Tramuntanadal � 10 min van Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa � 20 km van Palma',
      text: 'De enige publieke baan van de Santa Ponsa-groep met echte European Tour-pedigree � het was gastheer van de DP World Tour Mallorca Golf Open 2021. Een van de langste banen op het eiland; hole 10 met 590 m is een van de langste par 5\'s in Europa. Meerdere gedeeltelijk blinde teeshots en waterhindernissen. Holes 5, 6 en 7 bieden enkele van de beste uitzichten op de Serra de Tramuntana.',
      footer: 'Openbaar toegankelijk � DP World Tour-terrein',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa � 20 km van Palma',
      text: 'Alleen voor leden en meestal rustig. Veel teeshots maken de driver een slechte keuze � een hybrid om de positie te controleren is vaak de slimmere beslissing. De bomenrijen zijn dicht en een bal op de verkeerde plek betekent meestal terug chippen. Hole 18: een par 3 met een green in de vorm van het eiland Mallorca zelf � een detail dat het waard is te weten voor je begint.',
      note: '"De green van hole 18 heeft de vorm van Mallorca zelf. E�n van die details die je wilt weten voor je er bent."',
      footer: 'Toegang organiseerbaar voor cli�nten',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa � 20 km van Palma',
      text: 'Negen holes door een residenti�le gemeenschap. De meeste holes zijn kort � goed geschikt voor beginners of voor iemand die het kortspel wil oefenen zonder een volledige ronde te spelen. Hole 2 is mijn favoriet: ondanks de korte afstand is een nauwkeurig teeshot vereist.',
      footer: 'Goed voor kortspel � Toegang organiseerbaar',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat � 7 km van Palma',
      text: 'Zeven kilometer van Palma in een bebost dal � echt rustig voor een baan zo dicht bij de stad. Uitzichten over de Baai van Palma, het eiland Cabrera en het oude Kasteel van Bendinat. Opmerking: het hoofdclubhouse is momenteel in renovatie, met volledige heropening gepland voor mei/juni 2026. Beperkte bezoekers-greenfees per dag � van tevoren boeken.',
      footer: 'Clubhouse-renovatie tot mei/juni 2026',
    },
    'T Golf Calvi� (Poniente)': {
      location: 'Calvi� � 12 km van Palma',
      text: 'Oorspronkelijk ontworpen door John Harris in 1978 en volledig herbouwd na een investering van 10 miljoen euro � nieuwe baan, nieuw clubhouse, een heel ander aanbod. Vijftien meren, open fairways die de driver aanmoedigen, grote golvende greens. De zee aan ��n kant en de Tramuntana aan de andere. Heeft de Mallorca Open georganiseerd.',
      footer: 'Gastheer Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar � 40 km van Palma',
      text: 'Hole 6 is de langste par 5 van Spanje met 609 meter. Zonder compromissen gebouwd in de heuvels boven Camp de Mar. Extra ballen meenemen en geen ego � de rough is echt en de fairways smal. Niet geschikt voor beginners zonder handicapcertificaat. De ervaring, uitzichten en moeilijkheid maken het tot een van de meest memorabele ronden op het eiland.',
      footer: 'Moeilijkste baan van het eiland',
    },
    'Golf Maioris': {
      location: 'Llucmajor � 20 km van Palma',
      text: 'Een interessante baan omdat de voor- en achterkant aanvoelen als twee unieke ontwerpfilosofie�n � de eerste negen Schots en heuvelachtig, de tweede meer Amerikaans en vlakker. Vijftien minuten van het vliegveld en minder druk dan de banen dichter bij Palma. Heeft een van de weinige openbare grasdrivingranges op het eiland.',
      footer: '15 min van luchthaven � Openbare grasdrivingrange',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor � 15 km van Palma',
      text: 'Brede, ruime fairways die spelers verwelkomen die nog vertrouwen opbouwen vanaf de tee, terwijl de lengte en vijf meren betere spelers eerlijk houden. Gebouwd op een voormalig jachtlandgoed bij Llucmajor, tien minuten van het vliegveld. Ontworpen door Francisco Lopez-Segal�s, geopend in 1994.',
      footer: 'Goed voor beginners � Marriott resort',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor � 15 km van Palma',
      text: 'De meest veeleisende van de twee Son Antem-banen en waar de meeste toernooien van het resort worden gehouden. Smallere fairways, minder vergevingsgezinde rough, golvende greens omgeven door bunkers. Slingert door een traditionele Mallorquijnse finca met uitzicht op de Randa-berg.',
      footer: 'Uitdagender dan East � Toernooiterrein',
    },
    'Capdepera Golf': {
      location: 'Art� � 65 km van Palma',
      text: 'Dan Maples ontwierp dit om het bestaande landschap te volgen. De eerste helft loopt door een breed dal � open, relatief zacht. De achterkant klimt de Llevant-heuvels in en wordt een veel technischer uitdaging. Hole 15, hoog in de bergen met uitzicht over het hele dal tot aan de kust, werd door Mallorca Magazin gekozen als de beste hole van het eiland.',
      footer: 'Bij voorkeur te combineren met Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera � 65 km van Palma',
      text: 'Elk van de eerste negen holes heeft zijn eigen karakter. Hole 4 heeft op een heldere dag uitzicht op Menorca. Hole 9 heeft een traditioneel stenen hutje in het midden van de fairway � een hindernis die uniek is voor Mallorca. Hole 18 eindigt met een drievoudige golfbeweging op de green zichtbaar vanuit de clubhuisterrasse.',
      footer: 'Zicht op Menorca op heldere dagen',
    },
    'Pula Golf': {
      location: 'Son Servera � 55 km van Palma',
      text: 'Volledig herontworpen door Olaz�bal tussen 2004 en 2006, daarna gastheer van acht European Tour-evenementen. Uitstekende oefenfaciliteiten inclusief Trackman Range-technologie. Federer en Nadal speelden hier in juli 2025 een ronde. Pep Guardiola is een vaste gast.',
      footer: 'Olaz�bal-ontwerp � Gastheer European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera � 55 km van Palma',
      text: 'Opgericht in 1967, een van de oudste banen op het eiland. Een parklandbaan langs de Costa de los Pinos met ruime fairways en ontspannen rough. Holes 3 tot 7 zijn de uitzondering: smalle, met bomen omzoomde fairways die de heuvels in klimmen en tussen meren weven. Water op zes holes.',
      footer: 'Een van de oudste banen op het eiland',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alc�dia � 55 km van Palma',
      text: 'Mijn tweede ankerbaan en waarschijnlijk het meest schilderachtige van Mallorca. Ontwerp van Robert Trent Jones Jr. De vuurtoren van Alcanada, zichtbaar vanaf 16 van de 18 holes, is een van de meest gefotografeerde golffa�ades in Europa. Achtenvijftig bunkers zijn strategisch over het parcours verdeeld � ze vereisen aandacht bij elke benadering.',
      text2: 'De baan is gastheer van de Rolex Challenge Tour Grand Final, die in oktober 2026 voor de zesde keer terugkeert. De greens zijn sterk golvend en extreem snel. Het restaurantterras na de ronde is een van de mooiste plekken op het eiland. Reken 50 minuten vanaf Palma � elke minuut is het waard.',
      note: '"Een van de mooiste ronden die je ergens in Europa kunt spelen. De vuurtoren op 17 is onvergetelijk."',
      footer: 'Rolex Challenge Tour Grand Final okt. 2026 � 50 min van Palma',
    },
    'Golf Pollensa': {
      location: 'Pollen�a � 60 km van Palma',
      text: 'Negen holes aan de ingang van de stad Pollen�a, ge�ntegreerd in de heuvel met uitzicht op de Tramuntana en de baaien van Pollen�a en Alc�dia. Ontworpen door Jos� Gancedo in 1986. Een ronde duurt ongeveer 90 minuten � een gemakkelijke warming-up of een goede optie voor een dag waarop je golf wilt zonder volledige inzet.',
      footer: 'Snelle ronde � 90 minuten',
    },
  },
  sv: {
    'Golf Son Gual': {
      location: 'Palma � 11 km fr�n centrum',
      text: 'Thomas Himmels design fr�n 2007 har sitt eget vindekosystem � dess upph�jda l�ge och tr�dt�ckning g�r att vinden kan bete sig annorlunda p� varje h�l. Greenerna �r snabba och upph�jda; var du missar spelar st�rre roll �n hur du svingar. Avslutningsstr�ckan � h�len 15 till 18 � �r bland de fyra finaste konsekutiva h�len i europeisk golf. Rafa Nadal har sagt att detta �r hans favoritbana p� �n.',
      note: '"Vinden p� 16 �r en annan utmaning �n vinden p� 7. Det �r det som g�r banan s� �terspelbar."',
      footer: 'Rafas favorit � M�ste spelas',
    },
    'Golf Son Vida': {
      location: 'Arabella � Son Vida, Palma',
      text: 'Mallorcas �ldsta golfbana, �ppnad 1964. Seve Ballesteros vann h�r i ett European Tour-playoff 1990. Layouten slingrar sig genom det bostadstunga Son Vida-omr�det med t�t routing och h�jdvariationer. H�l 18 �r ett par 5 med ett vattendrag p� det andra slaget som lockar m�nga till ett beslut de senare �ngrar.',
      footer: '�ns �ldsta bana � Seve vann h�r',
    },
    'Son Muntaner': {
      location: 'Son Vida � Palma',
      text: 'Utn�mnd till B�sta Golfbana i Spanien p� World Golf Awards 2025. Den ursprungliga banan p� Castillo Hotel Son Vidas herrg�rd, omdesignad av Severiano Ballesteros. Utsikt �ver Palmas bukt fr�n de h�gre h�len. Ett tusen �r gammalt olivtr�d st�r vid h�l 15 � i spel, inte bara som dekoration. V�rd f�r Mallorca Golf Open p� DP World Tour.',
      footer: 'B�st i Spanien 2025 � DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella � Son Vida, Palma',
      text: 'Den mest tillg�ngliga av Arabella-banorna. L�nga, �ppna fairways och fyra olika tee-positioner g�r den genuint l�mplig f�r alla niv�er. Fr�n h�l 8, banans h�gsta punkt, sl�r man direkt mot Palmas katedral. Tiger Woods spelade h�r med sin son Charlie i juli 2022. Stenmurarna �r i spel � inte bara dekoration.',
      footer: 'Idealisk f�r nyb�rjare � Tiger Woods spelade h�r',
    },
    'T Golf Palma Puntir�': {
      location: 'Palma � 10 km fr�n centrum',
      text: 'Den enda Jack Nicklaus-designade banan p� Mallorca, �ppnad 2006 och helt renoverad 2022. Nicklaus designade den f�r att f�lja det befintliga terr�ngen utan modifiering. Inhemska tallar, vilda olivtr�d och johannesbr�dtr�d bildar roughen genomg�ende utan synliga byggnader fr�n n�got h�l.',
      footer: 'Enda Nicklaus-design p� �n',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella � Centrala Palma',
      text: 'Nio h�l, par 27, 638 meter totalt. Den enda officiella pitch & putt-banan p� Mallorca. Alla nio h�l �r par 3 p� 50�100 m, vilket kr�ver precision snarare �n kraft. Den naturliga startpunkten f�r nyb�rjare och juniorer, en bra uppv�rmning inf�r en full runda p� annan bana, eller ett anv�ndbart alternativ f�r en icke-golfande s�llskap.',
      footer: 'Perfekt f�r nyb�rjare och juniorer',
    },
    'Golf Son Termes': {
      location: 'Bunyola � 10 km fr�n Palma',
      text: 'F�rmodligen den bana p� �n som k�nns mest integrerad med sin omgivning � den ligger i en dal i Tramuntana med bergen som bakgrund p� varje h�l. Kort med par 70 och 5 285 m, men terr�ngen kompenserar med st�ndiga h�jdvariationer och smala fairways � buggy rekommenderas. Restaurangen blickar ut �ver det 18:e greenet och Palmas bukt.',
      footer: 'Tramuntanadal � 10 min fr�n Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa � 20 km fr�n Palma',
      text: 'Den enda publika banan i Santa Ponsa-gruppen med �kta European Tour-meriter � den var v�rd f�r DP World Tour Mallorca Golf Open 2021. En av �ns l�ngsta banor; h�l 10 med 590 m �r ett av Europas l�ngsta par 5. Flera delvis blinda teeshots och vattenhinder. H�len 5, 6 och 7 erbjuder n�gra av �ns b�sta utsikter �ver Serra de Tramuntana.',
      footer: 'Offentlig tillg�ng � DP World Tour-v�rd',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa � 20 km fr�n Palma',
      text: 'Endast f�r medlemmar och vanligtvis lugn. M�nga teeshots g�r drivern till ett d�ligt val � en hybrid f�r positionskontroll �r ofta det klokare beslutet. Tr�draden �r t�t och en boll p� fel st�lle inneb�r vanligtvis att chippa tillbaka. H�l 18: ett par 3 med ett green format som �n Mallorca sj�lv � en detalj v�rd att k�nna till innan du kommer dit.',
      note: '"Det 18:e greenet �r format som Mallorca. En av de detaljer man vill veta om innan man kommer dit."',
      footer: 'Tillg�ng kan arrangeras f�r klienter',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa � 20 km fr�n Palma',
      text: 'Nio h�l genom ett bostadsomr�de. De flesta h�len �r korta � v�l l�mpade f�r nyb�rjare eller den som vill �va det korta spelet utan att f�rbinda sig till en full runda. Det andra h�let �r mitt favorit: trots det korta avst�ndet kr�vs ett precist teeshot.',
      footer: 'Bra f�r kortspel � Tillg�ng kan arrangeras',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat � 7 km fr�n Palma',
      text: 'Sju kilometer fr�n Palma i en skogsdal � genuint fridfull f�r en bana s� n�ra staden. Utsikt �ver Palmas bukt, �n Cabrera och det gamla Bendinat-slottet. Obs: huvudklubhuset renoveras just nu, med full �ter�ppning planerad till maj/juni 2026. Begr�nsade bes�kargreenfeeavgifter per dag � boka i f�rv�g.',
      footer: 'Klubbhusrenovering till maj/juni 2026',
    },
    'T Golf Calvi� (Poniente)': {
      location: 'Calvi� � 12 km fr�n Palma',
      text: 'Ursprungligen designad av John Harris 1978 och helt �teruppbyggd efter en investering p� 10 miljoner euro � ny bana, nytt klubbhus, ett helt annat erbjudande. Femton sj�ar, �ppna fairways som uppmuntrar till driver, stora kuperade greener. Havet p� ena sidan och Tramuntana p� den andra. Har arrangerat Mallorca Open.',
      footer: 'V�rd f�r Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar � 40 km fr�n Palma',
      text: 'H�l 6 �r Spaniens l�ngsta par 5 med 609 meter. Byggd i kullarna ovanf�r Camp de Mar utan kompromisser. Ta med extra bollar och l�gg egot hemma � roughen �r �kta och fairwaysarna smala. Inte l�mplig f�r nyb�rjare utan handicapcertifikat. Upplevelsen, utsikterna och sv�righeten g�r det till en av �ns mest minnesv�rda rundor.',
      footer: 'Sv�raste banan p� �n',
    },
    'Golf Maioris': {
      location: 'Llucmajor � 20 km fr�n Palma',
      text: 'En intressant bana i att den niorna fram och niorna bak k�nns som tv� unika designfilosofier � de f�rsta nio skotska och kuperade, de andra mer amerikanska och platta. Femton minuter fr�n flygplatsen och mindre fullsatt �n banorna n�rmre Palma. Har en av �ns f� offentliga gr�sdrivingranges.',
      footer: '15 min fr�n flygplatsen � Offentlig gr�sdrivingrange',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor � 15 km fr�n Palma',
      text: 'Breda, gener�sa fairways som v�lkomnar spelare som fortfarande bygger upp f�rtroende fr�n teet, medan l�ngden och fem sj�ar h�ller b�ttre spelare �rliga. Byggd p� ett tidigare jaktst�lle n�ra Llucmajor, tio minuter fr�n flygplatsen. Designad av Francisco Lopez-Segal�s, �ppnad 1994.',
      footer: 'Bra f�r nyb�rjare � Marriott resort',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor � 15 km fr�n Palma',
      text: 'Den mest kr�vande av de tv� Son Antem-banorna och d�r de flesta av resortens turneringar h�lls. Smalare fairways, mindre f�rl�tande rough, kuperade greener omgivna av bunkrar. Slingrar sig genom en traditionell mallorquinsk finca med utsikt �ver Randa-berget.',
      footer: 'Sv�rare �n East � Turneringsarena',
    },
    'Capdepera Golf': {
      location: 'Art� � 65 km fr�n Palma',
      text: 'Dan Maples designade detta f�r att f�lja det befintliga landskapet. Den f�rsta halvan l�per genom en bred dal � �ppen, relativt mild. De bakre nio kl�ttrar upp i Llevant-kullarna och blir ett mycket mer tekniskt test. H�l 15, h�gt upp i bergen med utsikt �ver hela dalen till kusten, valdes av Mallorca Magazin som �ns b�sta h�l.',
      footer: 'Kombineras b�st med Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera � 65 km fr�n Palma',
      text: 'Var och en av de f�rsta nio h�len har sin egen karakt�r. H�l 4 har utsikt mot Menorca p� klara dagar. H�l 9 har en traditionell stenstuga mitt i fairwayen � ett hinder unikt f�r Mallorca. H�l 18 avslutas med en trev�gig undulation p� greenet synlig fr�n klubbhusterrassen.',
      footer: 'Utsikt mot Menorca p� klara dagar',
    },
    'Pula Golf': {
      location: 'Son Servera � 55 km fr�n Palma',
      text: 'Helt omdesignad av Olaz�bal mellan 2004 och 2006, som sedan arrangerade �tta European Tour-evenemang. Utm�rkta tr�ningsanl�ggningar inklusive Trackman Range-teknologi. Federer och Nadal spelade en runda h�r i juli 2025. Pep Guardiola �r en regelbunden g�st.',
      footer: 'Olaz�bal-design � V�rd f�r European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera � 55 km fr�n Palma',
      text: 'Grundad 1967, en av �ns �ldsta banor. En parklayoutbana l�ngs Costa de los Pinos med gener�sa fairways och avslappnad rough. H�len 3 till 7 �r undantaget: smala, tr�dkl�dda fairways som kl�ttrar upp i kullarna och v�ver mellan sj�ar. Vatten p� sex h�l.',
      footer: 'En av �ns �ldsta banor',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alc�dia � 55 km fr�n Palma',
      text: 'Min andra ankarbana och troligen Mallorcas vackraste. Design av Robert Trent Jones Jr. Alcanada-fyren, synlig fr�n 16 av de 18 h�len, �r ett av Europas mest fotograferade golflandm�rken. Femtio�tta bunkrar �r strategiskt placerade �ver layouten � de kr�ver uppm�rksamhet vid varje approach.',
      text2: 'Banan �r v�rd f�r Rolex Challenge Tour Grand Final, som �terv�nder f�r sj�tte g�ngen i oktober 2026. Greenerna �r kraftigt kuperade och extremt snabba. Restaurangterrassen efter rundan �r en av �ns vackraste platser. R�kna med 50 minuter fr�n Palma � varje minut �r v�rd det.',
      note: '"En av de vackraste rundorna du kan spela n�gonstans i Europa. Fyren p� 17 �r of�rgl�mlig."',
      footer: 'Rolex Challenge Tour Grand Final okt. 2026 � 50 min fr�n Palma',
    },
    'Golf Pollensa': {
      location: 'Pollen�a � 60 km fr�n Palma',
      text: 'Nio h�l vid ing�ngen till Pollen�a stad, integrerade i sluttningen med utsikt �ver Tramuntana och Pollen�a- och Alc�diabukterna. Designad av Jos� Gancedo 1986. En runda tar ca 90 minuter � en enkel uppv�rmning eller ett bra alternativ f�r en dag n�r man vill spela golf utan fullt engagemang.',
      footer: 'Snabb runda � 90 minuter',
    },
  },
}
const COURSE_DATA = [
  {
    region: 'palma',
    courses: [
      { expert: true, full: true, badges: ['? Expert Pick', 'Most Recommended'], name: 'Golf Son Gual', img: '/images/courses/son-gual.jpg', location: 'Palma � 11km from city centre', pills: ['�80�165', 'Par 72 � Championship', 'Handicap required', 'Buggies available', 'Designed by Thomas Himmel, 2007'], difficulty: 90, diffScore: '9/10', text: "Thomas Himmel's 2007 design sits in its own wind ecosystem � its elevated position and tree coverage mean the wind can behave differently on every hole. The greens are fast and raised; where you miss matters more than how you swing. The closing stretch � holes 15 to 18 � is among the finest four holes in European golf. Rafa Nadal has said this is his favourite course on the island.", note: '"The wind on 16 is a different challenge to the wind on 7. Thats what makes the course so re-playable."', footer: 'Rafas favourite � Must-play' },
      { expert: false, badges: [], name: 'Golf Son Vida', img: '/images/courses/son-vida.webp', location: 'Arabella � Son Vida, Palma', pills: ['From �95', 'Par 72 � Est. 1964', 'Buggies available', 'Seve won here in 1990'], difficulty: 80, diffScore: '8/10', text: 'The oldest course in Mallorca, opened 1964. Seve Ballesteros won here in a European Tour playoff in 1990. The layout winds through the residential Son Vida neighbourhood with tight routing and elevation changes. The 18th hole is a par 5 with a water carry on the second shot that tempts many into a decision they later regret.', footer: 'Oldest course on the island � Seve won here' },
      { expert: false, badges: [], name: 'Son Muntaner', img: '/images/courses/son-muntaner.jpg', location: 'Son Vida � Palma', pills: ['Dynamic pricing', 'DP World Tour', 'Par 72', 'Best in Spain 2025'], difficulty: 70, diffScore: '7/10', text: 'Named Best Golf Course in Spain at the 2025 World Golf Awards. The original course at the Castillo Hotel Son Vida estate, redesigned by Severiano Ballesteros. Views across the Bay of Palma from the higher holes. A thousand-year-old olive tree sits on the 15th � in play, not decoration. Hosts the Mallorca Golf Open on the DP World Tour.', footer: 'Best in Spain 2025 � DP World Tour' },
      { expert: false, badges: [], name: 'Golf Son Quint', img: '/images/courses/son-quint.jpg', location: 'Arabella � Son Vida, Palma', pills: ['Dynamic pricing', 'Par 72 � Opened 2007', 'All levels welcome'], difficulty: 50, diffScore: '5/10', text: 'The most approachable of the Arabella courses. Long, open fairways and four different tee positions make it genuinely suited to any level. From hole 8, the highest point on the course, you tee off facing directly toward Palma Cathedral. Tiger Woods played here with his son Charlie in July 2022. The stone walls are in play � not just decoration.', footer: 'Best for beginners � Tiger Woods played here' },
      { expert: false, badges: [], name: 'T Golf Palma Puntir�', img: '/images/courses/t-golf-palma.jpg', location: 'Palma � 10km from city centre', pills: ['Dynamic pricing', 'Par 71 � 6,027m', 'Jack Nicklaus Design'], difficulty: 70, diffScore: '7/10', text: 'The only Jack Nicklaus-designed course in Mallorca, opened 2006 and completely renovated in 2022. Nicklaus designed it to follow the existing land without modification � no artificially flattened fairways. Native pines, wild olives, and carob trees form the rough throughout with no buildings visible from any hole.', footer: 'Only Nicklaus design on the island' },
      { expert: false, badges: [], name: 'Palma Pitch & Putt', img: '/images/courses/palma-pitch-putt.jpg', location: 'Arabella � Central Palma', pills: ['�20�35', '9 holes � All par 3', '45 minutes'], difficulty: 20, diffScore: '2/10', text: "Nine holes, par 27, 638 metres total. The only official pitch & putt course in Mallorca. All nine holes are par 3s ranging from 50�100m, demanding accuracy rather than power. The natural starting point for beginners and juniors, a good warm-up before a full round elsewhere, or a useful option for a non-golfing partner who wants to try the game.", footer: 'Perfect for beginners & juniors' },
      { expert: false, badges: [], name: 'Golf Son Termes', img: '/images/courses/son-termes.webp', location: 'Bunyola � 10km from Palma', pills: ['Dynamic pricing', 'Par 70 � 5,285m', 'Tramuntana valley'], difficulty: 60, diffScore: '6/10', text: "Probably the course on the island that feels most integrated with its surroundings � it sits in a valley in the Tramuntana with the mountains forming a backdrop on every hole. Short at par 70 and 5,285m, but the terrain compensates with constant elevation changes and narrow fairways � buggy recommended. The restaurant overlooks the 18th green and the Bay of Palma.", footer: 'Tramuntana valley � 10 mins from Palma' },
    ]
  },
  {
    region: 'southwest',
    courses: [
      { expert: true, badges: ['? Expert Pick', 'DP World Tour Host'], name: 'Golf Santa Ponsa 1', img: '/images/courses/santa-ponsa-1.webp', location: 'Santa Ponsa � 20km from Palma', pills: ['�77�126', 'Par 72 � Longest on island', 'Public access'], difficulty: 80, diffScore: '8/10', text: "The only public course in the Santa Ponsa group with genuine European Tour pedigree � it hosted the 2021 DP World Tour Mallorca Golf Open. One of the longest courses on the island; the 10th hole at 590m is one of Europe's longest par-5s. Several partially blind tee shots and water hazards. Holes 5, 6 and 7 offer some of the best Tramuntana mountain views on the island.", footer: 'Public access � DP World Tour venue' },
      { expert: true, badges: ['? Expert Pick', 'Members + Arranged Access'], name: 'Golf Santa Ponsa 2', img: '/images/courses/santa-ponsa-2.webp', location: 'Santa Ponsa � 20km from Palma', pills: ['Members only', 'Access via arrangement', 'Opened 1991'], difficulty: 70, diffScore: '7/10', text: "Members-only and usually quiet. Many tee shots make the driver a poor choice � a hybrid to control position is often the smarter call. The tree-lining is heavy and a ball in the wrong place usually means chipping back out. The 18th: a par-3 with a green shaped like the island of Mallorca itself � a detail worth knowing before you get there.", note: '"The 18th green is shaped like Mallorca itself. One of those details you want to know before you get there."', footer: 'Access arrangeable for clients' },
      { expert: true, badges: ['? Expert Pick', 'Members + Arranged Access'], name: 'Golf Santa Ponsa 3', img: '/images/courses/santa-ponsa-3.webp', location: 'Santa Ponsa � 20km from Palma', pills: ['Members only', '9 holes', 'Shorter course'], difficulty: 40, diffScore: '4/10', text: "Nine holes winding through a residential community. Most holes are short � well-suited to beginners or to anyone who wants to work on approach play without committing to a full round. The second hole is my favourite: requires a precise tee shot despite the short distance, which is exactly the kind of deceptive test a course like this should include.", footer: 'Good for approach practice � Access arrangeable' },
      { expert: false, badges: [], name: 'Real Golf de Bendinat', img: '/images/courses/bendinat.jpg', location: 'Bendinat � 7km from Palma', pills: ['�74�123', 'Par 69 � 5,660m', 'Martin Hawtree, 1986'], difficulty: 60, diffScore: '6/10', text: "Seven kilometres from Palma in a wooded valley � genuinely peaceful for a course so close to the city. Views of the Bay of Palma, Cabrera Island, and the old Bendinat Castle. Note: the main clubhouse is currently under renovation, with full reopening planned May/June 2026. Limited visitor green fees per day � book ahead.", footer: 'Clubhouse renovation until May/June 2026' },
      { expert: false, badges: [], name: 'T Golf Calvi� (Poniente)', img: '/images/courses/t-golf-calvia.webp', location: 'Calvi� � 12km from Palma', pills: ['Dynamic pricing', 'Par 72 � 15 lakes', '�10M renovation'], difficulty: 70, diffScore: '7/10', text: "Originally designed by John Harris in 1978 and completely rebuilt following a �10 million renovation � new course, new clubhouse, entirely different proposition. Fifteen lakes, open fairways encouraging driver, large undulating greens. The sea on one side and the Tramuntana on the other. Has hosted the Mallorca Open.", footer: 'Mallorca Open host' },
      { expert: false, badges: [], name: 'Golf de Andratx', img: '/images/courses/golf-andratx.webp', location: 'Camp de Mar � 40km from Palma', pills: ['�96�140', 'Par 70 � Handicap max 28', 'Coastal Hills'], difficulty: 90, diffScore: '9/10', text: "The 6th is the longest par 5 in Spain at 609 metres. Built into the hills above Camp de Mar without compromise. Bring extra balls and no ego � the rough is genuine and the fairways narrow. Not suitable for beginners without a handicap certificate. The experience, views, and difficulty make it one of the most memorable rounds on the island.", footer: 'Most challenging course on the island' },
    ]
  },
  {
    region: 'south',
    courses: [
      { expert: false, badges: [], name: 'Golf Maioris', img: '/images/courses/maioris.webp', location: 'Llucmajor � 20km from Palma', pills: ['Dynamic pricing', 'Par 72 � 6,300m', 'Opened 2006'], difficulty: 70, diffScore: '7/10', text: "An interesting course in that the front nine and back nine feel like two unique design philosophies � the front nine Scottish and bumpy, the back nine more American in style, flatter. Fifteen minutes from the airport and less crowded than the courses closer to Palma � an underrated option for a first-day or last-day round. Has one of the island's few public grass driving ranges.", footer: '15 mins from airport � Public grass driving range' },
      { expert: false, badges: [], name: 'Golf Son Antem East', img: '/images/courses/son-antem-east.webp', location: 'Llucmajor � 15km from Palma', pills: ['Dynamic pricing', 'Par 72 � 5 lakes', 'Marriott Resort'], difficulty: 60, diffScore: '6/10', text: "Wide, generous fairways welcoming for players still building confidence from the tee, while the length and five lakes keep better players honest. Built on a former hunting estate near Llucmajor, ten minutes from the airport. Designed by Francisco Lopez-Segal�s, opened 1994.", footer: 'Good for beginners � Marriott resort' },
      { expert: false, badges: [], name: 'Golf Son Antem West', img: '/images/courses/son-antem-west.webp', location: 'Llucmajor � 15km from Palma', pills: ['Dynamic pricing', 'Par 72 � Tournament course'], difficulty: 70, diffScore: '7/10', text: "The more testing of the two Son Antem courses and where most of the resort's tournaments are held. Narrower fairways, fewer forgiving rough areas, undulating greens surrounded by bunkers. Threads through a traditional Mallorcan finca with views of Randa Mountain.", footer: 'More challenging than East � Tournament venue' },
    ]
  },
  {
    region: 'east',
    courses: [
      { expert: false, badges: [], name: 'Capdepera Golf', img: '/images/courses/capdepera.jpg', location: 'Art� � 65km from Palma', pills: ['Dynamic pricing', 'Par 72', 'Dan Maples design'], difficulty: 70, diffScore: '7/10', text: "Dan Maples designed this to follow the existing landscape. The first half runs through a wide valley � open, relatively gentle. The back nine climbs into the Levant hills and becomes a much more technical test. Hole 15, up in the mountains with views across the whole valley to the coast, was chosen as the best hole on the island by Mallorca Magazin.", footer: 'Best paired with Canyamel' },
      { expert: false, badges: [], name: 'Canyamel Golf', img: '/images/courses/canyamel.jpg', location: 'Capdepera � 65km from Palma', pills: ['�85�145', 'Par 73 � 6,198m', 'Jos� Gancedo, 1988'], difficulty: 60, diffScore: '6/10', text: "Each of the first nine holes has its own distinct character. Hole 4 has views across to Menorca on a clear day. Hole 9 has a traditional stone hut in the middle of the fairway � a hazard unique to Mallorca. Hole 18 ends with a triple-wave undulation on the green visible from the clubhouse terrace.", footer: 'Views to Menorca on clear days' },
      { expert: false, badges: [], name: 'Pula Golf', img: '/images/courses/pula.jpg', location: 'Son Servera � 55km from Palma', pills: ['Dynamic pricing', 'Par 72 � Olaz�bal redesign', '8 European Tour events'], difficulty: 70, diffScore: '7/10', text: "Completely redesigned by Olaz�bal between 2004�2006, subsequently hosting eight European Tour events. Excellent practice facilities including Trackman Range technology. Federer and Nadal played a round here in July 2025. Pep Guardiola is a regular.", footer: 'Olaz�bal design � European Tour host' },
      { expert: false, badges: [], name: 'Golf Club Son Servera', img: '/images/courses/son-servera.jpg', location: 'Son Servera � 55km from Palma', pills: ['�80�145', 'Par 72 � Est. 1967', 'Coastal parkland'], difficulty: 60, diffScore: '6/10', text: "Founded in 1967, one of the oldest courses on the island. A parkland course along the Costa de los Pinos with generous fairways and relaxed rough. Holes 3 to 7 are the exception: narrow tree-lined fairways that climb into the hills and weave between lakes. Water on six holes.", footer: 'One of the oldest courses on the island' },
    ]
  },
  {
    region: 'north',
    courses: [
      { expert: true, full: true, badges: ['? Expert Pick', 'Rolex Challenge Tour Grand Final'], name: 'Club de Golf Alcanada', img: '/images/courses/alcanada.jpg', location: "Port d'Alc�dia � 55km from Palma", pills: ['�115�220', 'Par 72 � Robert Trent Jones Jr.', '58 bunkers', 'Championship greens'], difficulty: 70, diffScore: '7/10', text: "My second anchor course and arguably Mallorca's most scenic. Robert Trent Jones Jr. design. The Alcanada lighthouse, visible from 16 of the 18 holes, is one of Europe's most photographed golf landmarks. Fifty-eight bunkers are placed strategically across the layout � they demand attention on every approach.", text2: "The course hosts the Rolex Challenge Tour Grand Final, returning for its sixth edition in October 2026. The greens are severely undulating and extremely fast. The restaurant terrace after the round is one of the best places on the island. Allow 50 minutes from Palma � it's worth every minute.", note: '"One of the most beautiful rounds you\'ll play anywhere in Europe. The lighthouse on 17 is unforgettable."', footer: 'Rolex Challenge Tour Grand Final Oct 2026 � Allow 50 mins from Palma' },
      { expert: false, badges: [], name: 'Golf Pollensa', img: '/images/courses/pollensa.jpg', location: 'Pollen�a � 60km from Palma', pills: ['�30�60', '9 holes � 90 minutes', 'Tramuntana views'], difficulty: 40, diffScore: '4/10', text: "Nine holes at the entrance to Pollen�a town, integrated into the hillside with views of the Tramuntana and the bays of Pollen�a and Alc�dia. Designed by Jos� Gancedo in 1986. A round takes around 90 minutes � an easy warm-up or good option on a day when you want golf without full commitment.", footer: 'Good warm-up round � 90 minutes' },
    ]
  },
]

const REGION_HEADERS = {
  palma: { title: 'Palma', subtitle: '5�11km from city', count: '8 courses' },
  southwest: { title: 'Southwest', subtitle: 'Santa Ponsa & Camp de Mar � 20�40km', count: '6 courses' },
  south: { title: 'South', subtitle: 'Llucmajor � 15�20km', count: '3 courses' },
  east: { title: 'East', subtitle: '50�65km from Palma � Worth basing yourself here', count: '4 courses' },
  north: { title: 'North', subtitle: "Port d'Alc�dia � 55�60km � Alcanada alone justifies the drive", count: '2 courses' },
}

const slugify = name => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')

const SHORT_TO_ID = {
  'Son Gual':'golf-son-gual','Son Muntaner':'son-muntaner','Son Vida':'golf-son-vida',
  'Son Quint':'golf-son-quint','T Golf Puntir�':'t-golf-palma-puntiro','Son Termes':'golf-son-termes',
  'Palma Pitch & Putt':'palma-pitch-putt','Santa Ponsa 1':'golf-santa-ponsa-1',
  'Santa Ponsa 2':'golf-santa-ponsa-2','Santa Ponsa 3':'golf-santa-ponsa-3',
  'T Golf Calvi�':'t-golf-calvia-poniente','Bendinat':'real-golf-de-bendinat',
  'Golf de Andratx':'golf-de-andratx','Golf Maioris':'golf-maioris',
  'Son Antem East':'golf-son-antem-east','Son Antem West':'golf-son-antem-west',
  'Capdepera':'capdepera-golf','Canyamel':'canyamel-golf','Pula':'pula-golf',
  'Son Servera':'golf-club-son-servera','Alcanada':'club-de-golf-alcanada',
  'Golf Pollensa':'golf-pollensa',
}

function CourseCard({ c, lang = 'en' }) {
  return (
    <div id={slugify(c.name)} className={`course${c.expert ? ' course--expert' : ''}${c.full ? ' course--full' : ''}`} style={{scrollMarginTop:'90px'}}>
      {/* Mobile: image on top, full width, fixed height */}
      {c.img && (
        <div className="course__img-mobile">
          <img src={c.img} alt={c.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} loading="lazy" />
        </div>
      )}
      <div className="course__inner" style={{display:'flex',gap:20,alignItems:'flex-start'}}>
        <div style={{flex:1,minWidth:0}}>
          {c.badges.length > 0 && (
            <div className="course__badges">
              {c.badges.map((b, i) => (
                <span key={i} className={`badge ${b.startsWith('?') ? 'badge--expert' : b.includes('Members') ? 'badge--members' : 'badge--award'}`}>{b}</span>
              ))}
            </div>
          )}
          <h3 className="course__name">{c.name}</h3>
          <p className="course__location">{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.location) || c.location}</p>
          <div className="course__stats">
            {c.pills.map((p, i) => <span key={i} className={`stat-pill${i === 0 ? ' stat-pill--gold' : ''}`}>{p}</span>)}
          </div>
          <div className="difficulty">
            <div className="difficulty__track"><div className="difficulty__fill" style={{width:`${c.difficulty}%`}}></div></div>
            <span className="difficulty__score">{c.diffScore}</span>
          </div>
          <p className="course__text">{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.text) || c.text}</p>
          {(c.text2 || (lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.text2)) && <p className="course__text" style={{marginTop:12}}>{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.text2) || c.text2}</p>}
          {(c.note || (lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.note)) && <div className="course__note"><p>{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.note) || c.note}</p></div>}
        </div>
        {/* Desktop: image on right, full card height */}
        {c.img && (
          <div className="course__img-desktop">
            <img src={c.img} alt={c.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} loading="lazy" />
          </div>
        )}
      </div>
      <div className="course__footer">
        <span className="course__footer-info">{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.footer) || c.footer}</span>
      </div>
    </div>
  )
}

export default function GolfCoursesClient({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en
  const REGIONS = getRegions(t)
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleRegions = COURSE_DATA.filter(region => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'expert') return region.courses.some(c => c.expert)
    return region.region === activeFilter
  })

  return (
    <>
      {/* GEOGRAPHY */}
      <section className="geography reveal" style={{background:'var(--cream)'}}>
        <div className="geography__left">
          <p className="eyebrow" style={{color:'var(--gold)'}}>{t.geoEyebrow}</p>
          <h2 style={{color:'var(--deep)'}}>{t.geoH2}</h2>
          <p style={{color:'var(--charcoal)'}}>{t.geoP1}</p>
          <p style={{color:'var(--charcoal)'}}>{t.geoP2}</p>
        </div>
        <div className="geography__right">
          {t.geoRegions.map((row, i) => (
            <div key={i} className="geo-row">
              <span className="geo-region" style={{color:'var(--charcoal)'}}>{row.region}</span>
              <span className="geo-courses">
                {row.courses.split(' � ').map((name, j) => {
                  const id = SHORT_TO_ID[name] || slugify(name)
                  return (
                    <span key={j}>
                      {j > 0 && <span style={{color:'var(--stone)'}}> � </span>}
                      <a href={`#${id}`} style={{color: j % 2 === 0 ? 'var(--pine)' : 'var(--charcoal)',textDecoration:'none',fontWeight:400}} onMouseOver={e=>e.currentTarget.style.textDecoration='underline'} onMouseOut={e=>e.currentTarget.style.textDecoration='none'}>{name}</a>
                    </span>
                  )
                })}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO BAR */}
      <div className="intro-bar">
        <div className="intro-bar__text reveal" style={{maxWidth:'100%'}}>
          <p>{t.intro1} {t.intro2}</p>
        </div>
      </div>

      {/* FILTER TABS */}
      <div id="all-courses" className="filter-tabs" style={{scrollMarginTop:'80px'}}>
        {REGIONS.map(r => (
          <button
            key={r.key}
            className={`filter-tab${activeFilter === r.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(r.key)}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* COURSE LISTING */}
      <div className="page-layout">
        <div className="page-main">
          {visibleRegions.map((regionData, i) => {
            const header = REGION_HEADERS[regionData.region]
            const coursesToShow = activeFilter === 'expert'
              ? regionData.courses.filter(c => c.expert)
              : regionData.courses
            return (
              <div key={regionData.region + activeFilter}>
                {i > 0 && <div className="divider" />}
                <section className="region-section">
                  <div className="region-header">
                    <h2 className="region-title">{header.title}</h2>
                    <p className="region-subtitle">{header.subtitle}</p>
                    <span className="region-count">{header.count}</span>
                  </div>
                  {t.courseNote && (
            <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',padding:'12px 0',borderBottom:'1px solid var(--linen)',marginBottom:16}}>{t.courseNote}</p>
          )}
          <div className="courses-grid-list">
                    {coursesToShow.map((c, j) => <CourseCard key={j} c={c} lang={lang} />)}
                  </div>
                </section>
              </div>
            )
          })}
        </div>

        <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>{t.sidebarH3}</h3>
            <p>{t.sidebarP}</p>
            <Link href="/contact" className="sidebar-btn">{t.sidebarBtn}</Link>
          </div>
          <div className="sidebar-card sidebar-card--cream">
            <h3 style={{fontSize:'1rem'}}>{t.quickPicksTitle}</h3>
            <ul className="sidebar-quick">
              {t.quickPicks.map((p,i) => {
                // Split label at colon, link only the course-name part
                const colonIdx = p.indexOf(': ')
                const prefix = colonIdx >= 0 ? p.slice(0, colonIdx + 2) : ''
                const coursesPart = colonIdx >= 0 ? p.slice(colonIdx + 2) : p
                // Split on " or ", " oder ", " eller ", " ou ", " o ", " of " to support multi-language
                const separator = coursesPart.match(/ (or|oder|eller|ou|o) /)
                const parts = separator ? coursesPart.split(separator[0]) : [coursesPart]
                const sepWord = separator ? separator[0] : null
                return (
                  <li key={i}>
                    {prefix}
                    {parts.map((part, j) => {
                      const match = Object.keys(SHORT_TO_ID).find(k => part.trim().includes(k))
                      const id = match ? SHORT_TO_ID[match] : null
                      return (
                        <span key={j}>
                          {j > 0 && sepWord}
                          {id ? <a href={`#${id}`} style={{color:'inherit',textDecoration:'none'}} onMouseOver={e=>e.currentTarget.style.color='var(--pine)'} onMouseOut={e=>e.currentTarget.style.color='inherit'}>{part}</a> : part}
                        </span>
                      )
                    })}
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>

      {/* FINAL CTA */}
      <section className="guide-cta">
        <div>
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'0.75rem'}}>{t.ctaEyebrow}</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem',marginBottom:'1.25rem'}}>{t.ctaH2}</h2>
          <p>{t.ctaP}</p>
        </div>
        <div className="guide-cta__actions">
          <Link href="/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 32px'}}>{t.seeExperiences}</Link>
          <Link href="/contact" className="btn btn--outline-white">{t.getInTouch}</Link>
        </div>
      </section>
    </>
  )
}

