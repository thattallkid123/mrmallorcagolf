'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { buildLocalePath } from '../../lib/site'
import { getGolfCoursesContent } from '../../lib/golf-courses-content'
import { GOLF_COURSE_DATA } from '../../lib/golf-courses-data'
import {
  GOLF_COURSE_TRANSLATIONS,
  GOLF_COURSE_UI_TRANSLATIONS,
  getGolfCourseRegions,
} from '../../lib/golf-courses-translations'
import {
  getShortCourseId,
  slugifyCourseName,
} from '../../lib/golf-courses-helpers'

const COURSE_BADGE_TRANSLATIONS = {
  de: {
    '★ Expert Pick': '★ Expertenwahl',
    'Most Recommended': 'Am häufigsten empfohlen',
    'Best in Spain 2025': 'Bester Platz Spaniens 2025',
    'European Tour Host': 'European-Tour-Austragungsort',
    'Members + Arranged Access': 'Mitglieder + Zugang auf Anfrage',
  },
  es: {
    '★ Expert Pick': '★ Selección personal',
    'Most Recommended': 'De los más recomendados',
    'Best in Spain 2025': 'Mejor campo de España 2025',
    'European Tour Host': 'Sede del European Tour',
    'Members + Arranged Access': 'Socios + acceso organizado',
  },
  fr: {
    '★ Expert Pick': '★ Choix d’expert',
    'Most Recommended': 'Le plus recommandé',
    'Best in Spain 2025': 'Meilleur d’Espagne 2025',
    'European Tour Host': 'Hôte de l’European Tour',
    'Members + Arranged Access': 'Membres + accès organisé',
  },
  nl: {
    '★ Expert Pick': '★ Expertkeuze',
    'Most Recommended': 'Meest aanbevolen',
    'Best in Spain 2025': 'Beste van Spanje 2025',
    'European Tour Host': 'European Tour-host',
    'Members + Arranged Access': 'Leden + toegang op afspraak',
  },
  sv: {
    '★ Expert Pick': '★ Expertval',
    'Most Recommended': 'Mest rekommenderad',
    'Best in Spain 2025': 'Bäst i Spanien 2025',
    'European Tour Host': 'Värd för European Tour',
    'Members + Arranged Access': 'Medlemmar + ordnad tillgång',
  },
  zh: {
    '★ Expert Pick': '★ 专家推荐',
    'Most Recommended': '最值得推荐',
    'Best in Spain 2025': '2025 西班牙最佳',
    'European Tour Host': 'European Tour 赛事球场',
    'Members + Arranged Access': '会员制 + 可协助安排',
  },
}

const COURSE_TEXT_REPLACEMENTS = {
  de: {
    'From €95': 'Ab €95',
    'km from city centre': 'km vom Stadtzentrum',
    'km from Palma': 'km von Palma',
    'Par 72 · Est. 1964': 'Par 72 · Seit 1964',
    'Par 72 · Est. 1967': 'Par 72 · Seit 1967',
    'Par 72 · Longest on island': 'Par 72 · Längster Platz der Insel',
    'Public access': 'Öffentlich zugänglich',
    'Members only': 'Nur für Mitglieder',
    'Access via arrangement': 'Zugang auf Anfrage',
    'Opened 1991': 'Eröffnet 1991',
    'Opened 2006': 'Eröffnet 2006',
    '9 holes': '9 Löcher',
    '9 holes · 90 minutes': '9 Löcher · 90 Minuten',
    '9 holes · All par 3': '9 Löcher · nur Par 3',
    '45 minutes': '45 Minuten',
    'Shorter course': 'Kürzerer Platz',
    'Dynamic pricing': 'Dynamische Preise',
    'Handicap required': 'Handicap erforderlich',
    'Buggies available': 'Buggys verfügbar',
    'All levels welcome': 'Für alle Spielstärken geeignet',
    'Tournament course': 'Turnierplatz',
    'DP World Tour': 'DP World Tour',
    'Best in Spain 2025': 'Bester in Spanien 2025',
    'Jack Nicklaus Design': 'Jack-Nicklaus-Design',
    'Dan Maples design': 'Design von Dan Maples',
    'José Gancedo, 1988': 'José Gancedo, 1988',
    'Martin Hawtree, 1986': 'Martin Hawtree, 1986',
    'Par 72 · Opened 2007': 'Par 72 · Eröffnet 2007',
    'Par 72 · Tournament course': 'Par 72 · Turnierplatz',
    'Par 72 · Olazábal redesign': 'Par 72 · Olazábal-Redesign',
    'Par 72 · Robert Trent Jones Jr.': 'Par 72 · Robert Trent Jones Jr.',
    'Public grass driving range': 'Öffentliche Rasen-Range',
    'Championship greens': 'Championship-Grüns',
    'Tramuntana views': 'Blick auf die Tramuntana',
    'East coast views': 'Ausblicke an der Ostküste',
    'East coast views · Strong back nine': 'Ostküstenblicke · starkes Back Nine',
    'Coastal Hills': 'Küstenhügel',
    'Coastal parkland': 'Küsten-Parkland',
    'Tramuntana valley': 'Tal der Tramuntana',
    'Marriott Resort': 'Marriott Resort',
    'Oldest course on the island · Seve won here': 'Ältester Platz der Insel · Seve gewann hier',
    'Perfect for beginners & juniors': 'Ideal für Anfänger und Junioren',
    'Only Nicklaus design on the island': 'Einziger Nicklaus-Platz der Insel',
    'One of the oldest courses on the island': 'Einer der ältesten Plätze der Insel',
    'Best for beginners · Tiger Woods played here': 'Ideal für Anfänger · Tiger Woods spielte hier',
    'Public access · European Tour venue': 'Öffentlich zugänglich · European-Tour-Austragungsort',
    'Most challenging course on the island': 'Anspruchsvollster Platz der Insel',
    'Good for approach practice · Access arrangeable': 'Gut fürs kurze Spiel · Zugang arrangierbar',
    'Access arrangeable for clients': 'Zugang für Kunden arrangierbar',
    'Best paired with Canyamel': 'Am besten mit Canyamel kombinieren',
    'Views to Menorca on clear days': 'Blick bis Menorca an klaren Tagen',
    'Olazábal design · European Tour host': 'Olazábal-Design · European-Tour-Austragungsort',
    'Good for beginners · Marriott resort': 'Gut für Anfänger · Marriott-Resort',
    'More challenging than East · Tournament venue': 'Anspruchsvoller als East · Turnierort',
    'Good warm-up round · 90 minutes': 'Gute Aufwärmrunde · 90 Minuten',
    'Clubhouse renovation until May/June 2026': 'Clubhaus-Renovierung bis Mai/Juni 2026',
    'Mallorca Open host': 'Gastgeber der Mallorca Open',
    'Seve won here in 1990': 'Seve gewann hier 1990',
    'difficulty': 'Schwierigkeit',
  },
  es: {
    'From €95': 'Desde €95',
    'km from city centre': 'km del centro',
    'km from Palma': 'km de Palma',
    'Par 72 · Est. 1964': 'Par 72 · Desde 1964',
    'Par 72 · Est. 1967': 'Par 72 · Desde 1967',
    'Par 72 · Longest on island': 'Par 72 · El más largo de la isla',
    'Public access': 'Acceso público',
    'Members only': 'Solo socios',
    'Access via arrangement': 'Acceso con gestión previa',
    'Opened 1991': 'Abierto en 1991',
    'Opened 2006': 'Abierto en 2006',
    '9 holes': '9 hoyos',
    '9 holes · 90 minutes': '9 hoyos · 90 minutos',
    '9 holes · All par 3': '9 hoyos · todos par 3',
    '45 minutes': '45 minutos',
    'Shorter course': 'Recorrido corto',
    'Dynamic pricing': 'Tarifa dinámica',
    'Handicap required': 'Handicap obligatorio',
    'Buggies available': 'Buggies disponibles',
    'All levels welcome': 'Apto para todos los niveles',
    'Tournament course': 'Campo de torneo',
    'DP World Tour': 'DP World Tour',
    'Best in Spain 2025': 'Mejor campo de España 2025',
    'Jack Nicklaus Design': 'Diseño de Jack Nicklaus',
    'Dan Maples design': 'Diseño de Dan Maples',
    'José Gancedo, 1988': 'José Gancedo, 1988',
    'Martin Hawtree, 1986': 'Martin Hawtree, 1986',
    'Par 72 · Opened 2007': 'Par 72 · Abierto en 2007',
    'Par 72 · Tournament course': 'Par 72 · Campo de torneo',
    'Par 72 · Olazábal redesign': 'Par 72 · Rediseño de Olazábal',
    'Par 72 · Robert Trent Jones Jr.': 'Par 72 · Robert Trent Jones Jr.',
    'Public grass driving range': 'Campo de prácticas de hierba',
    'Championship greens': 'Greens de campeonato',
    'Tramuntana views': 'Vistas a la Tramuntana',
    'East coast views': 'Vistas a la costa este',
    'East coast views · Strong back nine': 'Vistas a la costa este · gran segunda vuelta',
    'Coastal Hills': 'Colinas costeras',
    'Coastal parkland': 'Parkland costero',
    'Tramuntana valley': 'Valle de la Tramuntana',
    'Oldest course on the island · Seve won here': 'El campo más antiguo de la isla · aquí ganó Seve',
    'Perfect for beginners & juniors': 'Perfecto para principiantes y juniors',
    'Only Nicklaus design on the island': 'Único diseño Nicklaus de la isla',
    'One of the oldest courses on the island': 'Uno de los campos más antiguos de la isla',
    'Best for beginners · Tiger Woods played here': 'Ideal para principiantes · Tiger Woods jugó aquí',
    'Public access · European Tour venue': 'Acceso público · sede del European Tour',
    'Most challenging course on the island': 'El campo más exigente de la isla',
    'Good for approach practice · Access arrangeable': 'Bueno para practicar hierros · acceso gestionable',
    'Access arrangeable for clients': 'Acceso gestionable para clientes',
    'Best paired with Canyamel': 'Lo mejor es combinarlo con Canyamel',
    'Views to Menorca on clear days': 'Vistas a Menorca en días despejados',
    'Olazábal design · European Tour host': 'Diseño de Olazábal · sede del European Tour',
    'Good for beginners · Marriott resort': 'Bueno para principiantes · resort Marriott',
    'More challenging than East · Tournament venue': 'Más exigente que East · sede de torneos',
    'Good warm-up round · 90 minutes': 'Buena vuelta de calentamiento · 90 minutos',
    'Clubhouse renovation until May/June 2026': 'Casa club en obras hasta mayo/junio de 2026',
    'Mallorca Open host': 'Sede del Mallorca Open',
    'Seve won here in 1990': 'Seve ganó aquí en 1990',
    'difficulty': 'dificultad',
  },
  fr: {
    'From €95': 'À partir de 95 €',
    'km from city centre': 'km du centre',
    'km from Palma': 'km de Palma',
    'Par 72 · Est. 1964': 'Par 72 · depuis 1964',
    'Par 72 · Est. 1967': 'Par 72 · depuis 1967',
    'Par 72 · Longest on island': 'Par 72 · Le plus long de l’île',
    'Public access': 'Accès public',
    'Members only': 'Réservé aux membres',
    'Access via arrangement': 'Accès organisé sur demande',
    'Opened 1991': 'Ouvert en 1991',
    'Opened 2006': 'Ouvert en 2006',
    '9 holes': '9 trous',
    '9 holes · 90 minutes': '9 trous · 90 minutes',
    '9 holes · All par 3': '9 trous · uniquement des par 3',
    '45 minutes': '45 minutes',
    'Shorter course': 'Parcours plus court',
    'Dynamic pricing': 'Tarification dynamique',
    'Handicap required': 'Handicap requis',
    'Buggies available': 'Buggies disponibles',
    'All levels welcome': 'Ouvert à tous les niveaux',
    'Tournament course': 'Parcours de tournoi',
    'DP World Tour': 'DP World Tour',
    'Best in Spain 2025': 'Meilleur d’Espagne 2025',
    'Jack Nicklaus Design': 'Design de Jack Nicklaus',
    'Dan Maples design': 'Design de Dan Maples',
    'José Gancedo, 1988': 'José Gancedo, 1988',
    'Martin Hawtree, 1986': 'Martin Hawtree, 1986',
    'Par 72 · Opened 2007': 'Par 72 · ouvert en 2007',
    'Par 72 · Tournament course': 'Par 72 · parcours de tournoi',
    'Par 72 · Olazábal redesign': 'Par 72 · refonte signée Olazábal',
    'Par 72 · Robert Trent Jones Jr.': 'Par 72 · Robert Trent Jones Jr.',
    'Public grass driving range': 'Practice sur herbe public',
    'Championship greens': 'Greens de championnat',
    'Tramuntana views': 'Vues sur la Tramuntana',
    'East coast views': 'Vues côte est',
    'East coast views · Strong back nine': 'Vues côte est · retour très solide',
    'Coastal Hills': 'Collines côtières',
    'Coastal parkland': 'Parkland côtier',
    'Tramuntana valley': 'Vallée de la Tramuntana',
    'Oldest course on the island · Seve won here': 'Le plus ancien parcours de l’île · Seve a gagné ici',
    'Perfect for beginners & juniors': 'Parfait pour débutants et juniors',
    'Only Nicklaus design on the island': 'Seul dessin de Nicklaus sur l’île',
    'One of the oldest courses on the island': 'L’un des plus anciens parcours de l’île',
    'Best for beginners · Tiger Woods played here': 'Idéal pour débutants · Tiger Woods a joué ici',
    'Public access · European Tour venue': 'Accès public · site de l’European Tour',
    'Most challenging course on the island': 'Le parcours le plus exigeant de l’île',
    'Good for approach practice · Access arrangeable': 'Bien pour travailler les approches · accès organisable',
    'Access arrangeable for clients': 'Accès organisable pour les clients',
    'Best paired with Canyamel': 'À combiner idéalement avec Canyamel',
    'Views to Menorca on clear days': 'Vue jusqu’à Minorque par temps clair',
    'Olazábal design · European Tour host': 'Design d’Olazábal · hôte de l’European Tour',
    'Good for beginners · Marriott resort': 'Bien pour débutants · resort Marriott',
    'More challenging than East · Tournament venue': 'Plus exigeant qu’East · site de tournoi',
    'Good warm-up round · 90 minutes': 'Bonne mise en jambes · 90 minutes',
    'Clubhouse renovation until May/June 2026': 'Club-house en rénovation jusqu’à mai/juin 2026',
    'Mallorca Open host': 'Hôte du Mallorca Open',
    'Seve won here in 1990': 'Seve y a gagné en 1990',
    'difficulty': 'de difficulté',
  },
  nl: {
    'From €95': 'Vanaf €95',
    'km from city centre': 'km van het stadscentrum',
    'km from Palma': 'km van Palma',
    'Par 72 · Est. 1964': 'Par 72 · sinds 1964',
    'Par 72 · Est. 1967': 'Par 72 · sinds 1967',
    'Par 72 · Longest on island': 'Par 72 · Langste van het eiland',
    'Public access': 'Publiek toegankelijk',
    'Members only': 'Alleen voor leden',
    'Access via arrangement': 'Toegang op afspraak',
    'Opened 1991': 'Geopend in 1991',
    'Opened 2006': 'Geopend in 2006',
    '9 holes': '9 holes',
    '9 holes · 90 minutes': '9 holes · 90 minuten',
    '9 holes · All par 3': '9 holes · alleen par 3',
    '45 minutes': '45 minuten',
    'Shorter course': 'Kortere baan',
    'Dynamic pricing': 'Dynamische prijzen',
    'Handicap required': 'Handicap vereist',
    'Buggies available': 'Buggies beschikbaar',
    'All levels welcome': 'Geschikt voor alle niveaus',
    'Tournament course': 'Toernooibaan',
    'DP World Tour': 'DP World Tour',
    'Best in Spain 2025': 'Beste van Spanje 2025',
    'Jack Nicklaus Design': 'Jack Nicklaus-ontwerp',
    'Dan Maples design': 'Ontwerp van Dan Maples',
    'José Gancedo, 1988': 'José Gancedo, 1988',
    'Martin Hawtree, 1986': 'Martin Hawtree, 1986',
    'Par 72 · Opened 2007': 'Par 72 · geopend in 2007',
    'Par 72 · Tournament course': 'Par 72 · toernooibaan',
    'Par 72 · Olazábal redesign': 'Par 72 · herontwerp door Olazábal',
    'Par 72 · Robert Trent Jones Jr.': 'Par 72 · Robert Trent Jones Jr.',
    'Public grass driving range': 'Publieke grasrange',
    'Championship greens': 'Championship-greens',
    'Tramuntana views': 'Uitzicht op de Tramuntana',
    'East coast views': 'Uitzicht op de oostkust',
    'East coast views · Strong back nine': 'Uitzicht op de oostkust · sterk slot',
    'Coastal Hills': 'Kustheuvels',
    'Coastal parkland': 'Kustparkland',
    'Tramuntana valley': 'Vallei van de Tramuntana',
    'Oldest course on the island · Seve won here': 'Oudste baan van het eiland · hier won Seve',
    'Perfect for beginners & juniors': 'Perfect voor beginners en junioren',
    'Only Nicklaus design on the island': 'Enige Nicklaus-ontwerp op het eiland',
    'One of the oldest courses on the island': 'Een van de oudste banen van het eiland',
    'Best for beginners · Tiger Woods played here': 'Beste voor beginners · Tiger Woods speelde hier',
    'Public access · European Tour venue': 'Publiek toegankelijk · European Tour-locatie',
    'Most challenging course on the island': 'Moeilijkste baan van het eiland',
    'Good for approach practice · Access arrangeable': 'Goed voor approach-oefening · toegang regelbaar',
    'Access arrangeable for clients': 'Toegang regelbaar voor klanten',
    'Best paired with Canyamel': 'Best te combineren met Canyamel',
    'Views to Menorca on clear days': 'Uitzicht tot Menorca op heldere dagen',
    'Olazábal design · European Tour host': 'Ontwerp van Olazábal · European Tour-host',
    'Good for beginners · Marriott resort': 'Goed voor beginners · Marriott-resort',
    'More challenging than East · Tournament venue': 'Zwaarder dan East · toernooilocatie',
    'Good warm-up round · 90 minutes': 'Goede opwarmronde · 90 minuten',
    'Clubhouse renovation until May/June 2026': 'Clubhuisrenovatie tot mei/juni 2026',
    'Mallorca Open host': 'Gastheer van de Mallorca Open',
    'Seve won here in 1990': 'Seve won hier in 1990',
    'difficulty': 'moeilijkheid',
  },
  sv: {
    'From €95': 'Från €95',
    'km from city centre': 'km från stadskärnan',
    'km from Palma': 'km från Palma',
    'Par 72 · Est. 1964': 'Par 72 · sedan 1964',
    'Par 72 · Est. 1967': 'Par 72 · sedan 1967',
    'Par 72 · Longest on island': 'Par 72 · Längst på ön',
    'Public access': 'Offentlig tillgång',
    'Members only': 'Endast medlemmar',
    'Access via arrangement': 'Tillgång efter överenskommelse',
    'Opened 1991': 'Öppnad 1991',
    'Opened 2006': 'Öppnad 2006',
    '9 holes': '9 hål',
    '9 holes · 90 minutes': '9 hål · 90 minuter',
    '9 holes · All par 3': '9 hål · alla par 3',
    '45 minutes': '45 minuter',
    'Shorter course': 'Kortare bana',
    'Dynamic pricing': 'Dynamisk prissättning',
    'Handicap required': 'Handicap krävs',
    'Buggies available': 'Buggies finns',
    'All levels welcome': 'Passar alla nivåer',
    'Tournament course': 'Tävlingsbana',
    'DP World Tour': 'DP World Tour',
    'Best in Spain 2025': 'Bäst i Spanien 2025',
    'Jack Nicklaus Design': 'Design av Jack Nicklaus',
    'Dan Maples design': 'Design av Dan Maples',
    'José Gancedo, 1988': 'José Gancedo, 1988',
    'Martin Hawtree, 1986': 'Martin Hawtree, 1986',
    'Par 72 · Opened 2007': 'Par 72 · öppnad 2007',
    'Par 72 · Tournament course': 'Par 72 · tävlingsbana',
    'Par 72 · Olazábal redesign': 'Par 72 · ombyggd av Olazábal',
    'Par 72 · Robert Trent Jones Jr.': 'Par 72 · Robert Trent Jones Jr.',
    'Public grass driving range': 'Offentlig gräsrange',
    'Championship greens': 'Championship-greener',
    'Tramuntana views': 'Utsikt mot Tramuntana',
    'East coast views': 'Utsikt över östkusten',
    'East coast views · Strong back nine': 'Östkustutsikt · stark avslutning',
    'Coastal Hills': 'Kustkullar',
    'Coastal parkland': 'Kustnära parkbana',
    'Tramuntana valley': 'Tramuntanadalen',
    'Oldest course on the island · Seve won here': 'Öns äldsta bana · Seve vann här',
    'Perfect for beginners & juniors': 'Perfekt för nybörjare och juniorer',
    'Only Nicklaus design on the island': 'Enda Nicklaus-banan på ön',
    'One of the oldest courses on the island': 'En av de äldsta banorna på ön',
    'Best for beginners · Tiger Woods played here': 'Bäst för nybörjare · Tiger Woods spelade här',
    'Public access · European Tour venue': 'Offentlig tillgång · European Tour-anläggning',
    'Most challenging course on the island': 'Den mest utmanande banan på ön',
    'Good for approach practice · Access arrangeable': 'Bra för inspelsövning · tillgång kan ordnas',
    'Access arrangeable for clients': 'Tillgång kan ordnas för kunder',
    'Best paired with Canyamel': 'Bäst i kombination med Canyamel',
    'Views to Menorca on clear days': 'Utsikt mot Menorca på klara dagar',
    'Olazábal design · European Tour host': 'Design av Olazábal · värd för European Tour',
    'Good for beginners · Marriott resort': 'Bra för nybörjare · Marriott-resort',
    'More challenging than East · Tournament venue': 'Tuffare än East · tävlingsarena',
    'Good warm-up round · 90 minutes': 'Bra uppvärmningsrunda · 90 minuter',
    'Clubhouse renovation until May/June 2026': 'Klubbhuset renoveras till maj/juni 2026',
    'Mallorca Open host': 'Värd för Mallorca Open',
    'Seve won here in 1990': 'Seve vann här 1990',
    'difficulty': 'svårighet',
  },
  zh: {
    'From €95': '€95 起',
    'km from city centre': ' 公里，距市中心',
    'km from Palma': ' 公里，距帕尔马',
    'Par 72 · Est. 1964': '72 杆 · 1964 年开场',
    'Par 72 · Est. 1967': '72 杆 · 1967 年开场',
    'Par 72 · Longest on island': '72 杆 · 岛上最长',
    'Public access': '公众可打',
    'Members only': '仅限会员',
    'Access via arrangement': '可协助安排',
    'Opened 1991': '1991 年开放',
    'Opened 2006': '2006 年开放',
    '9 holes': '9 洞',
    '9 holes · 90 minutes': '9 洞 · 约 90 分钟',
    '9 holes · All par 3': '9 洞 · 全部为三杆洞',
    '45 minutes': '45 分钟',
    'Shorter course': '较短球场',
    'Dynamic pricing': '浮动定价',
    'Handicap required': '需提供差点',
    'Buggies available': '可租球车',
    'All levels welcome': '各水平都适合',
    'Tournament course': '赛事球场',
    'DP World Tour': 'DP World Tour',
    'Best in Spain 2025': '2025 西班牙最佳',
    'Jack Nicklaus Design': 'Jack Nicklaus 设计',
    'Dan Maples design': 'Dan Maples 设计',
    'José Gancedo, 1988': 'José Gancedo，1988',
    'Martin Hawtree, 1986': 'Martin Hawtree，1986',
    'Par 72 · Opened 2007': '72 杆 · 2007 年开场',
    'Par 72 · Tournament course': '72 杆 · 赛事球场',
    'Par 72 · Olazábal redesign': '72 杆 · Olazábal 重设',
    'Par 72 · Robert Trent Jones Jr.': '72 杆 · Robert Trent Jones Jr. 设计',
    'Public grass driving range': '公众草地练习场',
    'Championship greens': '锦标赛级果岭',
    'Tramuntana views': '特拉蒙塔纳山景',
    'East coast views': '东海岸景观',
    'East coast views · Strong back nine': '东海岸景观 · 后九洞很强',
    'Coastal Hills': '海岸丘陵',
    'Coastal parkland': '海岸林园风格',
    'Tramuntana valley': '特拉蒙塔纳山谷',
    'Oldest course on the island · Seve won here': '岛上最老的球场之一 · Seve 曾在此夺冠',
    'Perfect for beginners & juniors': '很适合初学者和青少年',
    'Only Nicklaus design on the island': '岛上唯一的 Nicklaus 设计',
    'One of the oldest courses on the island': '岛上最古老的球场之一',
    'Best for beginners · Tiger Woods played here': '最适合初学者 · Tiger Woods 曾在此打球',
    'Public access · European Tour venue': '公众可打 · European Tour 赛事场地',
    'Most challenging course on the island': '岛上最有挑战性的球场',
    'Good for approach practice · Access arrangeable': '适合练习攻果岭 · 可协助安排',
    'Access arrangeable for clients': '可为客户协助安排',
    'Best paired with Canyamel': '最适合和 Canyamel 一起安排',
    'Views to Menorca on clear days': '天气晴朗时可看到梅诺卡岛',
    'Olazábal design · European Tour host': 'Olazábal 设计 · European Tour 赛事球场',
    'Good for beginners · Marriott resort': '适合初学者 · 万豪度假村',
    'More challenging than East · Tournament venue': '比 East 更难 · 赛事球场',
    'Good warm-up round · 90 minutes': '很适合作为热身轮 · 约 90 分钟',
    'Clubhouse renovation until May/June 2026': '会所装修将持续到 2026 年 5/6 月',
    'Mallorca Open host': 'Mallorca Open 举办球场',
    'Seve won here in 1990': 'Seve 曾在 1990 年于此夺冠',
    'difficulty': '难度',
  },
}

function translateCourseText(value, lang) {
  if (lang === 'en' || !value) return value
  const replacements = COURSE_TEXT_REPLACEMENTS[lang] || {}
  return Object.entries(replacements).reduce((text, [from, to]) => text.replaceAll(from, to), value)
}

function CourseCard({ c, lang = 'en' }) {
  const translated = lang !== 'en' ? GOLF_COURSE_TRANSLATIONS[lang]?.[c.name] || {} : {}
  const badgeMap = COURSE_BADGE_TRANSLATIONS[lang] || {}

  return (
    <div id={slugifyCourseName(c.name)} className={`course course--anchored${c.expert ? ' course--expert' : ''}${c.full ? ' course--full' : ''}`}>
      {c.img && (
        <div className="course__img-mobile course__img-frame">
          <Image
            src={c.img}
            alt={c.name}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="course__image"
          />
        </div>
      )}
      <div className="course__inner">
        <div className="course__content">
          {c.badges.length > 0 && (
            <div className="course__badges">
              {c.badges.map((badge, i) => {
                const isExpertBadge = badge.startsWith('★') || badge.startsWith('â˜…')
                const translatedBadge = badgeMap[badge] || translateCourseText(badge, lang)
                return (
                  <span key={i} className={`badge ${isExpertBadge ? 'badge--expert' : badge.includes('Members') ? 'badge--members' : 'badge--award'}`}>{translatedBadge}</span>
                )
              })}
            </div>
          )}
          <h3 className="course__name">{c.name}</h3>
          <p className="course__location">{translated.location || translateCourseText(c.location, lang)}</p>
          <div className="course__stats">
            {(translated.pills || c.pills).slice(0, 4).map((pill, i) => <span key={i} className={`stat-pill${i === 0 ? ' stat-pill--gold' : ''}`}>{translateCourseText(pill, lang)}</span>)}
          </div>
          <p className="course__difficulty-note">{translateCourseText(`${c.diffScore} difficulty`, lang)}</p>
          <p className="course__text">{translated.text || c.text}</p>
          {(c.text2 || translated.text2) && <p className="course__text course__text--spaced">{translated.text2 || c.text2}</p>}
          {(c.note || translated.note) && <div className="course__note"><p>{translated.note || c.note}</p></div>}
        </div>
        {c.img && (
          <div className="course__img-desktop course__img-frame">
            <Image
              src={c.img}
              alt={c.name}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="course__image"
            />
          </div>
        )}
      </div>
      <div className="course__footer">
        <span className="course__footer-info">{translated.footer || c.footer}</span>
      </div>
    </div>
  )
}

export default function GolfCoursesClient({ lang = 'en' }) {
  const localizedContent = getGolfCoursesContent(lang)
  const t = lang === 'en' ? localizedContent.ui : (GOLF_COURSE_UI_TRANSLATIONS[lang] || localizedContent.ui)
  const regionHeaders = localizedContent.regionHeaders
  const regions = getGolfCourseRegions(t)
  const [activeFilter, setActiveFilter] = useState('all')
  const contactHref = buildLocalePath('/contact', lang)
  const experiencesHref = buildLocalePath('/play-with-a-pro', lang)

  useEffect(() => {
    const scrollToHash = () => {
      if (typeof window === 'undefined') return
      const hash = window.location.hash?.replace(/^#/, '')
      if (!hash) return

      const target = document.getElementById(hash)
      if (!target) return

      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    const timeoutId = window.setTimeout(scrollToHash, 120)
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  const visibleRegions = GOLF_COURSE_DATA.filter((region) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'expert') return region.courses.some((course) => course.expert)
    return region.region === activeFilter
  })

  return (
    <>
      <section className="geography reveal">
        <div className="geography__left">
          <p className="eyebrow geography__eyebrow">{t.geoEyebrow}</p>
          <h2 className="geography__title">{t.geoH2}</h2>
          <p className="geography__copy">{t.geoP1}</p>
          <p className="geography__copy">{t.geoP2}</p>
        </div>
        <div className="geography__right">
          {t.geoRegions.map((row, i) => (
            <div key={i} className="geo-row">
              <span className="geo-region">{row.region}</span>
              <span className="geo-courses">
                {row.courses.split(/\s+[^\w\s]+\s+/).map((name, j) => {
                  const id = getShortCourseId(name)
                  return (
                    <span key={j}>
                      {j > 0 && <span className="geo-separator"> / </span>}
                      <a href={`#${id}`} className={`geo-course-link${j % 2 === 0 ? ' geo-course-link--pine' : ''}`}>{name}</a>
                    </span>
                  )
                })}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="intro-bar">
        <div className="intro-bar__text intro-bar__text--full reveal">
          <p>{t.intro1} {t.intro2}</p>
        </div>
      </div>

      <div id="all-courses" className="filter-tabs filter-tabs--anchored">
        {regions.map((region) => (
          <button
            key={region.key}
            className={`filter-tab${activeFilter === region.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(region.key)}
          >
            {region.label}
          </button>
        ))}
      </div>

      <div className="page-layout">
        <div className="page-main">
          {visibleRegions.map((regionData, i) => {
            const header = regionHeaders[regionData.region]
            const coursesToShow = activeFilter === 'expert'
              ? regionData.courses.filter((course) => course.expert)
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
                    <p className="region-note">{t.courseNote}</p>
                  )}
                  <div className="courses-grid-list">
                    {coursesToShow.map((course, j) => <CourseCard key={j} c={course} lang={lang} />)}
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
            <Link href={contactHref} className="sidebar-btn">{t.sidebarBtn}</Link>
          </div>
          <div className="sidebar-card sidebar-card--cream">
            <h3 className="sidebar-card__title-sm">{t.quickPicksTitle}</h3>
            <ul className="sidebar-quick">
              {t.quickPicks.map((pick, i) => {
                const colonIdx = pick.indexOf(': ')
                const prefix = colonIdx >= 0 ? pick.slice(0, colonIdx + 2) : ''
                const coursesPart = colonIdx >= 0 ? pick.slice(colonIdx + 2) : pick
                const separator = coursesPart.match(/ (or|oder|eller|ou|o) /)
                const parts = separator ? coursesPart.split(separator[0]) : [coursesPart]
                const sepWord = separator ? separator[0] : null
                return (
                  <li key={i}>
                    {prefix}
                    {parts.map((part, j) => {
                      const id = getShortCourseId(part)
                      return (
                        <span key={j}>
                          {j > 0 && sepWord}
                          {id ? <a href={`#${id}`} className="sidebar-quick__link">{part}</a> : part}
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

      <section className="guide-cta">
        <div>
          <p className="eyebrow guide-cta__eyebrow">{t.ctaEyebrow}</p>
          <h2 className="serif-display guide-cta__title">{t.ctaH2}</h2>
          <p>{t.ctaP}</p>
        </div>
        <div className="guide-cta__actions">
          <Link href={experiencesHref} className="btn btn--gold guide-cta__primary">{t.seeExperiences}</Link>
          <Link href={contactHref} className="btn btn--outline-white">{t.getInTouch}</Link>
        </div>
      </section>
    </>
  )
}
