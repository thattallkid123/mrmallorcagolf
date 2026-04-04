export const SHORT_TO_ID = {
  'Son Gual': 'golf-son-gual',
  'Son Muntaner': 'son-muntaner',
  'Son Vida': 'golf-son-vida',
  'Son Quint': 'golf-son-quint',
  'T Golf Puntiró': 't-golf-palma-puntiro',
  'Son Termes': 'golf-son-termes',
  'Palma Pitch & Putt': 'palma-pitch-putt',
  'Santa Ponsa 1': 'golf-santa-ponsa-1',
  'Santa Ponsa 2': 'golf-santa-ponsa-2',
  'Santa Ponsa 3': 'golf-santa-ponsa-3',
  'T Golf Calvià': 't-golf-calvia-poniente',
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
  'Golf Pollensa': 'golf-pollensa',
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
