'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { buildLocalePath } from '../../lib/site'
import { getGolfCoursesContent } from '../../lib/golf-courses-content'
import { GOLF_COURSE_DATA } from '../../lib/golf-courses-data'
import {
  GOLF_COURSE_TRANSLATIONS,
  getGolfCourseUiTranslations,
  getGolfCourseRegions,
} from '../../lib/golf-courses-translations'
import {
  getCourseDistanceKm,
  getCoursePriceMeta,
  getShortCourseId,
  slugifyCourseName,
} from '../../lib/golf-courses-helpers'

const SORT_UI = {
  en: {
    controlsIntro: 'Filter by region. Each card shows peak and low green fee, par, rating, and key things to know before you play.',
    dynamicKey: '* Dynamic-pricing course. We sort by peak price; low price can be seasonal, late-day, or demand-dependent.',
    sortLabel: 'Sort:',
    topRated: 'Top Rated',
    az: 'A-Z',
    price: 'Price',
    nearest: 'Nearest',
  },
  de: {
    controlsIntro: 'Nach Region filtern. Jede Karte zeigt Spitzen- und Niedrigpreis, Par, Bewertung und die wichtigsten Hinweise vor der Runde.',
    dynamicKey: '* Platz mit dynamischer Preisgestaltung. Wir sortieren nach Spitzenpreis; der Niedrigpreis kann saisonal, spaet am Tag oder nach Nachfrage variieren.',
    sortLabel: 'Sortierung:',
    topRated: 'Top bewertet',
    az: 'A-Z',
    price: 'Preis',
    nearest: 'Am naechsten',
  },
  es: {
    controlsIntro: 'Filtra por zona. Cada ficha muestra green fee pico y bajo, par, valoracion y lo mas importante antes de jugar.',
    dynamicKey: '* Campo con tarifa dinamica. Ordenamos por precio maximo; el precio bajo puede depender de la temporada, la hora del dia o la demanda.',
    sortLabel: 'Ordenar:',
    topRated: 'Mejor valorados',
    az: 'A-Z',
    price: 'Precio',
    nearest: 'Mas cercanos',
  },
  fr: {
    controlsIntro: 'Filtrez par zone. Chaque fiche affiche le green fee maximum et bas, le par, la note et les points utiles avant de jouer.',
    dynamicKey: '* Parcours a tarification dynamique. Le tri utilise le prix maximum; le prix bas peut varier selon la saison, l horaire ou la demande.',
    sortLabel: 'Tri :',
    topRated: 'Mieux notes',
    az: 'A-Z',
    price: 'Prix',
    nearest: 'Les plus proches',
  },
  nl: {
    controlsIntro: 'Filter op regio. Elke kaart toont de piek- en lage greenfee, par, waardering en de belangrijkste punten voor je speelt.',
    dynamicKey: '* Baan met dynamische prijzen. We sorteren op piekprijs; de lage prijs kan seizoens-, laat-op-de-dag- of vraagafhankelijk zijn.',
    sortLabel: 'Sorteren:',
    topRated: 'Best beoordeeld',
    az: 'A-Z',
    price: 'Prijs',
    nearest: 'Dichtstbij',
  },
  sv: {
    controlsIntro: 'Filtrera efter region. Varje kort visar hogsta och lagsta greenfee, par, betyg och det viktigaste att veta innan du spelar.',
    dynamicKey: '* Bana med dynamisk prissattning. Vi sorterar efter hogsta pris; lagsta pris kan bero pa sasong, sen starttid eller efterfragan.',
    sortLabel: 'Sortera:',
    topRated: 'Hogst betyg',
    az: 'A-Z',
    price: 'Pris',
    nearest: 'Narmast',
  },
  zh: {
    controlsIntro: 'An qu yu guo lv. Mei zhang ka pian xian shi zui gao he zui di guo ling fei, par, ping fen he kai da qian yao zhi dao de yao dian.',
    dynamicKey: '* Dong tai ding jia qiu chang. Pai xu yi zui gao jia ge wei zhun; jiao di jia ge ke neng shou ji jie, wan xie shi duan huo xu qiu ying xiang.',
    sortLabel: 'Pai xu:',
    topRated: 'Zui gao ping fen',
    az: 'A-Z',
    price: 'Jia ge',
    nearest: 'Zui jin',
  },
}

const DISPLAY_TEXT_REPLACEMENTS = []

function cleanDisplayText(value) {
  if (!value) return value
  return DISPLAY_TEXT_REPLACEMENTS.reduce((text, [from, to]) => text.replaceAll(from, to), value)
}

function getCourseMeta(name) {
  const course = GOLF_COURSE_DATA
    .flatMap((region) => region.courses)
    .find((entry) => cleanDisplayText(entry.name) === cleanDisplayText(name))

  return course ? getCoursePriceMeta(course) : {}
}

function getCourseDistance(course) {
  return getCourseDistanceKm(course)
}

function buildPricePill(course) {
  const meta = getCourseMeta(course.name)
  if (meta.peakPrice == null) return course.pills[0]

  const dynamicPrefix = meta.dynamic ? '* ' : ''
  const lowPrice = typeof meta.lowPrice === 'number' ? meta.lowPrice : null
  if (lowPrice != null) return `${dynamicPrefix}Peak \u20ac${meta.peakPrice} / Low \u20ac${lowPrice}`
  return `${dynamicPrefix}Peak \u20ac${meta.peakPrice}`
}

function getDisplayPills(course) {
  return [buildPricePill(course), ...course.pills.slice(1)]
}

const DEFAULT_SORT_DIRECTIONS = {
  rating: 'desc',
  az: 'asc',
  price: 'desc',
  nearest: 'asc',
}

function sortCourses(courses, sortKey, direction = DEFAULT_SORT_DIRECTIONS[sortKey] || 'desc') {
  const sorted = [...courses]
  sorted.sort((a, b) => {
    const aMeta = getCourseMeta(a.name)
    const bMeta = getCourseMeta(b.name)
    const descending = direction === 'desc'

    if (sortKey === 'az') return descending ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)

    if (sortKey === 'price') {
      const aPrice = aMeta.peakPrice
      const bPrice = bMeta.peakPrice
      const aMissing = typeof aPrice !== 'number'
      const bMissing = typeof bPrice !== 'number'

      if (aMissing && bMissing) return a.name.localeCompare(b.name)
      if (aMissing) return 1
      if (bMissing) return -1
      return descending ? bPrice - aPrice : aPrice - bPrice
    }

    if (sortKey === 'nearest') {
      const distanceDelta = getCourseDistance(a) - getCourseDistance(b)
      return descending ? -distanceDelta : distanceDelta
    }

    if (b.difficulty !== a.difficulty) {
      return descending ? b.difficulty - a.difficulty : a.difficulty - b.difficulty
    }
    return a.name.localeCompare(b.name)
  })
  return sorted
}

const COURSE_BADGE_TRANSLATIONS = {
  de: {
    '\u2605 Expert Pick': '\u2605 Expertenwahl',
    'Most Recommended': 'Am haeufigsten empfohlen',
    'Best in Spain 2025': 'Bester Platz Spaniens 2025',
    'European Tour Host': 'European-Tour-Austragungsort',
    'Members + Arranged Access': 'Mitglieder + Zugang auf Anfrage',
  },
  es: {
    '\u2605 Expert Pick': '\u2605 Seleccion personal',
    'Most Recommended': 'De los mas recomendados',
    'Best in Spain 2025': 'Mejor campo de Espana 2025',
    'European Tour Host': 'Sede del European Tour',
    'Members + Arranged Access': 'Socios + acceso organizado',
  },
  fr: {
    '\u2605 Expert Pick': '\u2605 Choix d expert',
    'Most Recommended': 'Le plus recommande',
    'Best in Spain 2025': 'Meilleur d Espagne 2025',
    'European Tour Host': 'Hote de l European Tour',
    'Members + Arranged Access': 'Membres + acces organise',
  },
  nl: {
    '\u2605 Expert Pick': '\u2605 Expertkeuze',
    'Most Recommended': 'Meest aanbevolen',
    'Best in Spain 2025': 'Beste van Spanje 2025',
    'European Tour Host': 'European Tour-host',
    'Members + Arranged Access': 'Leden + toegang op afspraak',
  },
  sv: {
    '\u2605 Expert Pick': '\u2605 Expertval',
    'Most Recommended': 'Mest rekommenderad',
    'Best in Spain 2025': 'Bast i Spanien 2025',
    'European Tour Host': 'Vard for European Tour',
    'Members + Arranged Access': 'Medlemmar + ordnad tillgang',
  },
  zh: {
    '\u2605 Expert Pick': '\u2605 Zhuan jia tui jian',
    'Most Recommended': 'Zui zhi de tui jian',
    'Best in Spain 2025': '2025 Xi ban ya zui jia',
    'European Tour Host': 'European Tour sai shi qiu chang',
    'Members + Arranged Access': 'Hui yuan zhi + ke xie zhu an pai',
  },
}

const COURSE_TEXT_REPLACEMENTS = {
  de: {
    'km from city centre': 'km vom Stadtzentrum',
    'km from Palma': 'km von Palma',
    'Public access': 'Oeffentlich zugaenglich',
    'Members only': 'Nur fuer Mitglieder',
    'Access via arrangement': 'Zugang auf Anfrage',
    'Opened 1991': 'Eroeffnet 1991',
    'Opened 2006': 'Eroeffnet 2006',
    '9 holes': '9 Loecher',
    '45 minutes': '45 Minuten',
    'Shorter course': 'Kuerzerer Platz',
    'Dynamic pricing': 'Dynamische Preise',
    'Handicap required': 'Handicap erforderlich',
    'Buggies available': 'Buggys verfuegbar',
    'All levels welcome': 'Fuer alle Spielstaerken geeignet',
    'Tournament course': 'Turnierplatz',
    'Best in Spain 2025': 'Bester Platz Spaniens 2025',
    'Jack Nicklaus Design': 'Jack-Nicklaus-Design',
    'Dan Maples design': 'Design von Dan Maples',
    'Public grass driving range': 'Oeffentliche Rasen-Range',
    'Championship greens': 'Championship-Gruens',
    'Tramuntana views': 'Blick auf die Tramuntana',
    'East coast views': 'Ausblicke an der Ostkueste',
    'Coastal Hills': 'Kuestenhuegel',
    'Coastal parkland': 'Kuesten-Parkland',
    'Tramuntana valley': 'Tal der Tramuntana',
    'Marriott Resort': 'Marriott Resort',
    'Most challenging course on the island': 'Anspruchsvollster Platz der Insel',
    'Mallorca Open host': 'Gastgeber der Mallorca Open',
    'difficulty': 'Schwierigkeit',
  },
  es: {
    'km from city centre': 'km del centro',
    'km from Palma': 'km de Palma',
    'Public access': 'Acceso publico',
    'Members only': 'Solo socios',
    'Access via arrangement': 'Acceso con gestion previa',
    'Opened 1991': 'Abierto en 1991',
    'Opened 2006': 'Abierto en 2006',
    '9 holes': '9 hoyos',
    '45 minutes': '45 minutos',
    'Shorter course': 'Recorrido corto',
    'Dynamic pricing': 'Tarifa dinamica',
    'Handicap required': 'Handicap obligatorio',
    'Buggies available': 'Buggies disponibles',
    'All levels welcome': 'Apto para todos los niveles',
    'Tournament course': 'Campo de torneo',
    'Best in Spain 2025': 'Mejor campo de Espana 2025',
    'Jack Nicklaus Design': 'Diseno de Jack Nicklaus',
    'Dan Maples design': 'Diseno de Dan Maples',
    'Public grass driving range': 'Campo de practicas de hierba',
    'Championship greens': 'Greens de campeonato',
    'Tramuntana views': 'Vistas a la Tramuntana',
    'East coast views': 'Vistas a la costa este',
    'Coastal Hills': 'Colinas costeras',
    'Coastal parkland': 'Parkland costero',
    'Tramuntana valley': 'Valle de la Tramuntana',
    'Most challenging course on the island': 'El campo mas exigente de la isla',
    'Mallorca Open host': 'Sede del Mallorca Open',
    'difficulty': 'dificultad',
  },
  fr: {
    'km from city centre': 'km du centre',
    'km from Palma': 'km de Palma',
    'Public access': 'Acces public',
    'Members only': 'Reserve aux membres',
    'Access via arrangement': 'Acces organise sur demande',
    'Opened 1991': 'Ouvert en 1991',
    'Opened 2006': 'Ouvert en 2006',
    '9 holes': '9 trous',
    '45 minutes': '45 minutes',
    'Shorter course': 'Parcours plus court',
    'Dynamic pricing': 'Tarification dynamique',
    'Handicap required': 'Handicap requis',
    'Buggies available': 'Buggies disponibles',
    'All levels welcome': 'Ouvert a tous les niveaux',
    'Tournament course': 'Parcours de tournoi',
    'Best in Spain 2025': 'Meilleur d Espagne 2025',
    'Jack Nicklaus Design': 'Design de Jack Nicklaus',
    'Dan Maples design': 'Design de Dan Maples',
    'Public grass driving range': 'Practice sur herbe public',
    'Championship greens': 'Greens de championnat',
    'Tramuntana views': 'Vues sur la Tramuntana',
    'East coast views': 'Vues cote est',
    'Coastal Hills': 'Collines cotieres',
    'Coastal parkland': 'Parkland cotier',
    'Tramuntana valley': 'Vallee de la Tramuntana',
    'Most challenging course on the island': 'Le parcours le plus exigeant de l ile',
    'Mallorca Open host': 'Hote du Mallorca Open',
    'difficulty': 'difficulte',
  },
  nl: {
    'km from city centre': 'km van het stadscentrum',
    'km from Palma': 'km van Palma',
    'Public access': 'Publiek toegankelijk',
    'Members only': 'Alleen voor leden',
    'Access via arrangement': 'Toegang op afspraak',
    'Opened 1991': 'Geopend in 1991',
    'Opened 2006': 'Geopend in 2006',
    '9 holes': '9 holes',
    '45 minutes': '45 minuten',
    'Shorter course': 'Kortere baan',
    'Dynamic pricing': 'Dynamische prijzen',
    'Handicap required': 'Handicap vereist',
    'Buggies available': 'Buggies beschikbaar',
    'All levels welcome': 'Geschikt voor alle niveaus',
    'Tournament course': 'Toernooibaan',
    'Best in Spain 2025': 'Beste van Spanje 2025',
    'Jack Nicklaus Design': 'Jack Nicklaus-ontwerp',
    'Dan Maples design': 'Ontwerp van Dan Maples',
    'Public grass driving range': 'Publieke grasrange',
    'Championship greens': 'Championship-greens',
    'Tramuntana views': 'Uitzicht op de Tramuntana',
    'East coast views': 'Uitzicht op de oostkust',
    'Coastal Hills': 'Kustheuvels',
    'Coastal parkland': 'Kustparkland',
    'Tramuntana valley': 'Vallei van de Tramuntana',
    'Most challenging course on the island': 'Moeilijkste baan van het eiland',
    'Mallorca Open host': 'Gastheer van de Mallorca Open',
    'difficulty': 'moeilijkheid',
  },
  sv: {
    'km from city centre': 'km fran stadskarnan',
    'km from Palma': 'km fran Palma',
    'Public access': 'Offentlig tillgang',
    'Members only': 'Endast medlemmar',
    'Access via arrangement': 'Tillgang efter overenskommelse',
    'Opened 1991': 'Oppnad 1991',
    'Opened 2006': 'Oppnad 2006',
    '9 holes': '9 hal',
    '45 minutes': '45 minuter',
    'Shorter course': 'Kortare bana',
    'Dynamic pricing': 'Dynamisk prissattning',
    'Handicap required': 'Handicap kravs',
    'Buggies available': 'Buggies finns',
    'All levels welcome': 'Passar alla nivaer',
    'Tournament course': 'Tavlingsbana',
    'Best in Spain 2025': 'Bast i Spanien 2025',
    'Jack Nicklaus Design': 'Design av Jack Nicklaus',
    'Dan Maples design': 'Design av Dan Maples',
    'Public grass driving range': 'Offentlig grasrange',
    'Championship greens': 'Championship-greener',
    'Tramuntana views': 'Utsikt mot Tramuntana',
    'East coast views': 'Utsikt over ostkusten',
    'Coastal Hills': 'Kustkullar',
    'Coastal parkland': 'Kustnara parkbana',
    'Tramuntana valley': 'Tramuntanadalen',
    'Most challenging course on the island': 'Den mest utmanande banan pa on',
    'Mallorca Open host': 'Vard for Mallorca Open',
    'difficulty': 'svarighet',
  },
  zh: {
    'km from city centre': 'gong li, ju shi zhong xin',
    'km from Palma': 'gong li, ju Pa er ma',
    'Public access': 'gong zhong ke da',
    'Members only': 'jin xian hui yuan',
    'Access via arrangement': 'ke xie zhu an pai',
    'Opened 1991': '1991 nian kai fang',
    'Opened 2006': '2006 nian kai fang',
    '9 holes': '9 dong',
    '45 minutes': '45 fen zhong',
    'Shorter course': 'jiao duan qiu chang',
    'Dynamic pricing': 'dong tai ding jia',
    'Handicap required': 'xu yao cha dian',
    'Buggies available': 'ke zu qiu che',
    'All levels welcome': 'ge shui ping dou shi he',
    'Tournament course': 'sai shi qiu chang',
    'Best in Spain 2025': '2025 Xi ban ya zui jia',
    'Jack Nicklaus Design': 'Jack Nicklaus she ji',
    'Dan Maples design': 'Dan Maples she ji',
    'Public grass driving range': 'gong zhong cao di lian xi chang',
    'Championship greens': 'jin biao sai ji guo ling',
    'Tramuntana views': 'Te la meng ta na shan jing',
    'East coast views': 'dong hai an jing guan',
    'Coastal Hills': 'hai an qiu ling',
    'Coastal parkland': 'hai an lin yuan feng ge',
    'Tramuntana valley': 'Te la meng ta na shan gu',
    'Most challenging course on the island': 'dao shang zui you tiao zhan xing de qiu chang',
    'Mallorca Open host': 'Mallorca Open ju ban qiu chang',
    'difficulty': 'nan du',
  },
}

const PRICE_LABEL_TRANSLATIONS = {
  de: { peak: 'Spitzenpreis', low: 'Niedrigpreis' },
  es: { peak: 'Pico', low: 'Bajo' },
  fr: { peak: 'Pic', low: 'Bas' },
  nl: { peak: 'Piek', low: 'Laag' },
  sv: { peak: 'Hogsta', low: 'Lagsta' },
  zh: { peak: 'Feng zhi', low: 'Di jia' },
}

function translateCourseText(value, lang) {

  if (!value) return value
  const cleanedValue = cleanDisplayText(value)
  if (lang === 'en') return cleanedValue
  const priceLabels = PRICE_LABEL_TRANSLATIONS[lang]
  if (priceLabels && (cleanedValue.includes('Peak €') || cleanedValue.includes('Low €'))) {
    return cleanedValue
      .replaceAll('Peak €', `${priceLabels.peak} €`)
      .replaceAll('Low €', `${priceLabels.low} €`)
  }
  const replacements = COURSE_TEXT_REPLACEMENTS[lang] || {}
  return cleanDisplayText(
    Object.entries(replacements).reduce((text, [from, to]) => text.replaceAll(from, to), cleanedValue)
  )
}

function CourseCard({ c, lang = 'en' }) {
  const translated = lang !== 'en' ? GOLF_COURSE_TRANSLATIONS[lang]?.[c.name] || {} : {}
  const badgeMap = COURSE_BADGE_TRANSLATIONS[lang] || {}
  const meta = getCourseMeta(c.name)
  const displayPills = getDisplayPills(c)
  const courseName = cleanDisplayText(c.name)
  const locationText = cleanDisplayText(translated.location || translateCourseText(c.location, lang))
  const bodyText = cleanDisplayText(translated.text || c.text)
  const bodyText2 = cleanDisplayText(translated.text2 || c.text2)
  const noteText = cleanDisplayText(translated.note || c.note)
  const footerText = cleanDisplayText(translated.footer || c.footer)

  return (
    <div id={slugifyCourseName(c.name)} className={`course course--anchored${c.expert ? ' course--expert' : ''}${c.full ? ' course--full' : ''}`}>
      {c.img && (
        <div className="course__img-mobile course__img-frame">
          <Image
            src={c.img}
            alt={courseName}
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
                const isExpertBadge = badge.startsWith('\u2605')
                const translatedBadge = badgeMap[badge] || translateCourseText(badge, lang)
                return (
                  <span key={i} className={`badge ${isExpertBadge ? 'badge--expert' : badge.includes('Members') ? 'badge--members' : 'badge--award'}`}>{translatedBadge}</span>
                )
              })}
            </div>
          )}
          <h3 className="course__name">
            {courseName}
            {meta.dynamic ? <span className="course__dynamic-mark" aria-hidden="true"> *</span> : null}
          </h3>
          <p className="course__location">{locationText}</p>
          <div className="course__stats">
            {(translated.pills || displayPills).slice(0, 4).map((pill, i) => <span key={i} className={`stat-pill${i === 0 ? ' stat-pill--gold' : ''}`}>{translateCourseText(pill, lang)}</span>)}
          </div>
          <p className="course__difficulty-note">{translateCourseText(`${c.diffScore} difficulty`, lang)}</p>
          <p className="course__text">{bodyText}</p>
          {(c.text2 || translated.text2) && <p className="course__text course__text--spaced">{bodyText2}</p>}
          {(c.note || translated.note) && <div className="course__note"><p>{noteText}</p></div>}
        </div>
        {c.img && (
          <div className="course__img-desktop course__img-frame">
            <Image
              src={c.img}
              alt={courseName}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="course__image"
            />
          </div>
        )}
      </div>
      <div className="course__footer">
        <span className="course__footer-info">{footerText}</span>
      </div>
    </div>
  )
}

function getSortLabel(sortKey, sortUi) {
  if (sortKey === 'rating') return sortUi.topRated
  if (sortKey === 'az') return sortUi.az
  if (sortKey === 'price') return sortUi.price
  if (sortKey === 'nearest') return sortUi.nearest
  return sortUi.topRated
}

function getSortTriangleDirection(sortKey, direction) {
  if (sortKey === 'price' || sortKey === 'rating') return direction === 'desc' ? 'down' : 'up'
  return direction === 'asc' ? 'down' : 'up'
}

export default function GolfCoursesClient({ lang = 'en' }) {
  const localizedContent = getGolfCoursesContent(lang)
  const t = lang === 'en'
    ? { ...localizedContent.ui, ...getGolfCourseUiTranslations('en') }
    : { ...localizedContent.ui, ...getGolfCourseUiTranslations(lang) }
  const sortUi = SORT_UI[lang] || SORT_UI.en
  const regionHeaders = localizedContent.regionHeaders
  const regions = getGolfCourseRegions(t)
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeSort, setActiveSort] = useState('rating')
  const [sortDirections, setSortDirections] = useState(DEFAULT_SORT_DIRECTIONS)
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

  const allCourses = GOLF_COURSE_DATA.flatMap((region) => region.courses)
  const activeSortDirection = sortDirections[activeSort]
  const globallySortedCourses = sortCourses(
    activeFilter === 'expert' ? allCourses.filter((course) => course.expert) : allCourses,
    activeSort,
    activeSortDirection
  )

  const handleSortChange = (sortKey) => {
    const nextDirection = activeSort === sortKey
      ? (sortDirections[sortKey] === 'desc' ? 'asc' : 'desc')
      : DEFAULT_SORT_DIRECTIONS[sortKey]

    setSortDirections((current) => ({
      ...current,
      [sortKey]: nextDirection,
    }))
    setActiveSort(sortKey)
  }

  const geographyRows = t.geoRegions.map((row, index) => ({
    region: cleanDisplayText(row.region),
    courses: [...(GOLF_COURSE_DATA[index]?.courses || [])]
      .sort((a, b) => cleanDisplayText(a.name).localeCompare(cleanDisplayText(b.name)))
      .map((course) => ({
        id: getShortCourseId(course.name),
        label: cleanDisplayText(course.name),
      })),
  }))

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
          {geographyRows.map((row, i) => (
            <div key={i} className="geo-row">
              <span className="geo-region">{row.region}</span>
              <span className="geo-courses">
                {row.courses.map((course, j) => {
                  return (
                    <span key={j}>
                      {j > 0 && <span className="geo-separator"> · </span>}
                      <a href={`#${course.id}`} className={`geo-course-link${j % 2 === 0 ? ' geo-course-link--pine' : ''}`}>{course.label}</a>
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

      <section className="course-controls-shell">
        <div id="all-courses" className="filter-tabs filter-tabs--anchored filter-tabs--primary">
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
        <div className="course-controls-copy reveal">
          <p>{sortUi.controlsIntro}</p>
          <p>{sortUi.dynamicKey}</p>
        </div>

        <div className="filter-tabs filter-tabs--anchored filter-tabs--secondary">
          <span className="sort-pill sort-pill--label">{sortUi.sortLabel}</span>
          {['rating', 'az', 'price', 'nearest'].map((sortKey) => {
            const isActive = activeSort === sortKey
            return (
              <button
                key={sortKey}
                className={`filter-tab filter-tab--sort${isActive ? ' active' : ''}`}
                onClick={() => handleSortChange(sortKey)}
              >
                <span>{getSortLabel(sortKey, sortUi)}</span>
                {isActive ? (
                  <span
                    className={`filter-tab__triangle filter-tab__triangle--${getSortTriangleDirection(sortKey, sortDirections[sortKey])}`}
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            )
          })}
        </div>
      </section>

      <div className="page-layout">
        <div className="page-main">
          {activeFilter === 'all' ? (
            <section className="region-section">
              <div className="region-header">
                <h2 className="region-title">{t.allCourses}</h2>
                <span className="region-count">{globallySortedCourses.length}</span>
              </div>
              {t.courseNote && (
                <p className="region-note">{t.courseNote}</p>
              )}
              <div className="courses-grid-list">
                {globallySortedCourses.map((course, index) => <CourseCard key={`${course.name}-${index}`} c={course} lang={lang} />)}
              </div>
            </section>
          ) : visibleRegions.map((regionData, i) => {
            const header = regionHeaders[regionData.region]
            const coursesToShow = activeFilter === 'expert'
              ? regionData.courses.filter((course) => course.expert)
              : regionData.courses
            const sortedCourses = sortCourses(
              coursesToShow,
              activeSort === 'rating' ? 'az' : activeSort,
              activeSort === 'rating' ? 'asc' : activeSortDirection
            )
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
                    {sortedCourses.map((course, j) => <CourseCard key={j} c={course} lang={lang} />)}
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



