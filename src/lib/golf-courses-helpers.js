import { GOLF_COURSE_DATA } from './golf-courses-data.js'

export const SHORT_TO_ID = {
  'Son Gual': 'golf-son-gual',
  'Son Muntaner': 'son-muntaner',
  'Son Vida': 'golf-son-vida',
  'Son Quint': 'golf-son-quint',
  'T Golf Palma (Puntiro)': 't-golf-palma-puntiro',
  'T Golf Puntiro': 't-golf-palma-puntiro',
  'Son Termes': 'golf-son-termes',
  'Palma Pitch & Putt': 'palma-pitch-putt',
  'Santa Ponsa 1': 'golf-santa-ponsa-1',
  'Santa Ponsa 2': 'golf-santa-ponsa-2',
  'Santa Ponsa 3': 'golf-santa-ponsa-3',
  'T Golf Calvia': 't-golf-calvia-poniente',
  'T Golf Calvia (Poniente)': 't-golf-calvia-poniente',
  Bendinat: 'real-golf-de-bendinat',
  'Golf de Andratx': 'golf-de-andratx',
  'Golf Maioris': 'golf-maioris',
  'Son Antem East': 'golf-son-antem-east',
  'Son Antem West': 'golf-son-antem-west',
  Capdepera: 'capdepera-golf',
  Canyamel: 'canyamel-golf',
  Pula: 'pula-golf',
  'Son Servera': 'golf-club-son-servera',
  "Vall d'Or": 'vall-d-or-golf',
  "Vall d'Or Golf": 'vall-d-or-golf',
  Alcanada: 'club-de-golf-alcanada',
  'Golf Pollensa': 'golf-pollenca',
  'Golf Pollenca': 'golf-pollenca',
}

export const COURSE_DESTINATIONS = {
  'Son Gual': { type: 'review', slug: 'son-gual-review' },
  Alcanada: { type: 'review', slug: 'alcanada-review' },
  'Santa Ponsa 1': { type: 'review', slug: 'santa-ponsa-1-review' },
  'Son Muntaner': { type: 'guide', id: 'son-muntaner' },
  'Golf de Andratx': { type: 'guide', id: 'golf-de-andratx' },
}

export function slugifyCourseName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function normalizeCourseName(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

export function getShortCourseId(name) {
  const normalized = normalizeCourseName(name)
  const match = Object.entries(SHORT_TO_ID).find(([key]) =>
    normalized.includes(normalizeCourseName(key))
  )

  return match ? match[1] : slugifyCourseName(name)
}

export function getCourseDestination(name, locale = 'en') {
  const destination = COURSE_DESTINATIONS[name]

  if (!destination) return null

  if (destination.type === 'review') {
    const path = `/guides/${destination.slug}`
    return locale === 'en' ? path : `/${locale}${path}`
  }

  if (destination.type === 'guide') {
    const path = `/golf-courses#${destination.id}`
    return locale === 'en' ? path : `/${locale}${path}`
  }

  return null
}

export function findCourseByName(name) {
  const normalized = normalizeCourseName(name)

  for (const region of GOLF_COURSE_DATA) {
    const match = region.courses.find((course) => {
      const courseName = normalizeCourseName(course.name)
      return (
        courseName === normalized ||
        courseName.includes(normalized) ||
        normalized.includes(courseName)
      )
    })

    if (match) return match
  }

  return null
}

export function getCourseDistanceKm(course) {
  const match = course?.location?.match(/(\d+)\s*km/i)
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY
}

export function getCoursePriceMeta(course) {
  const pricePill = course?.pills?.[0] || ''
  const dynamic = pricePill.trim().startsWith('*')
  const matches = [...pricePill.matchAll(/€\s?(\d+)/g)].map((match) => Number(match[1]))
  const [peakPrice, lowPrice] = matches

  return {
    dynamic,
    peakPrice: Number.isFinite(peakPrice) ? peakPrice : null,
    lowPrice: Number.isFinite(lowPrice) ? lowPrice : null,
    distanceKm: getCourseDistanceKm(course),
  }
}

export function getCourseMetaByName(name) {
  const course = findCourseByName(name)
  return course ? getCoursePriceMeta(course) : { dynamic: false, peakPrice: null, lowPrice: null, distanceKm: Number.POSITIVE_INFINITY }
}
