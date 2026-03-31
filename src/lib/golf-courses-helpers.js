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
  Alcanada: 'club-de-golf-alcanada',
  'Golf Pollensa': 'golf-pollensa',
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
