// Canonical course access / handicap dataset.
// Working master agreed with Andy on 2026-07-08.
// Use this file for handicap limits, certificate expectations, access type,
// and 9/18-hole access facts. Keep entries alphabetical by canonical course name.

export const COURSE_ACCESS_LIST = [
  {
    name: 'Canyamel Golf',
    handicapMen: 36,
    handicapWomen: 45,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Capdepera Golf',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Club de Golf Alcanada',
    handicapMen: 33,
    handicapWomen: 35,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Club Son Servera',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf de Andratx',
    handicapMen: 28,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Maioris',
    handicapMen: 54,
    handicapWomen: 54,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Pollença',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 9,
    confidence: 'high',
  },
  {
    name: 'Golf Santa Ponsa 1',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Santa Ponsa 2',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'members_arranged',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Santa Ponsa 3',
    handicapMen: null,
    handicapWomen: null,
    certificateRequired: false,
    handicapRequired: false,
    accessType: 'members_arranged',
    holes: 9,
    confidence: 'high',
  },
  {
    name: 'Golf Son Antem East',
    handicapMen: 54,
    handicapWomen: 54,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Son Antem West',
    handicapMen: 27,
    handicapWomen: 35,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Son Gual',
    handicapMen: 33,
    handicapWomen: 35,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'medium',
    sourceNote: 'User still wants cleaner proof for the 33/35 gate.',
  },
  {
    name: 'Golf Son Quint',
    handicapMen: 54,
    handicapWomen: 54,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Son Termes',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Golf Son Vida',
    handicapMen: 54,
    handicapWomen: 54,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Palma Pitch & Putt',
    handicapMen: null,
    handicapWomen: null,
    certificateRequired: false,
    handicapRequired: false,
    accessType: 'public',
    holes: 9,
    confidence: 'high',
  },
  {
    name: 'Pula Golf',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Real Golf de Bendinat',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'Reserva Rotana',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'hotel_guests',
    holes: 9,
    confidence: 'high',
  },
  {
    name: 'Son Muntaner',
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'T Golf Calvià (Poniente)',
    handicapMen: 28,
    handicapWomen: 34,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: 'T Golf Palma (Puntiró)',
    handicapMen: 28,
    handicapWomen: 34,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
  {
    name: "Vall d'Or Golf",
    handicapMen: 36,
    handicapWomen: 36,
    certificateRequired: true,
    handicapRequired: true,
    accessType: 'public',
    holes: 18,
    confidence: 'high',
  },
]

export const COURSE_ACCESS_ALIASES = {
  Alcanada: 'Club de Golf Alcanada',
  Bendinat: 'Real Golf de Bendinat',
  Capdepera: 'Capdepera Golf',
  Canyamel: 'Canyamel Golf',
  'La Reserva Rotana': 'Reserva Rotana',
  Maioris: 'Golf Maioris',
  Pollensa: 'Golf Pollen\u00e7a',
  'Pollen\u00e7a': 'Golf Pollen\u00e7a',
  'Pollen\u00c3\u00a7a': 'Golf Pollen\u00e7a',
  'Golf Pollen\u00c3\u0192\u00c2\u00a7a': 'Golf Pollen\u00e7a',
  Pula: 'Pula Golf',
  Rotana: 'Reserva Rotana',
  'Santa Ponsa 1': 'Golf Santa Ponsa 1',
  'Santa Ponsa I': 'Golf Santa Ponsa 1',
  'Santa Ponsa 2': 'Golf Santa Ponsa 2',
  'Santa Ponsa II': 'Golf Santa Ponsa 2',
  'Santa Ponsa 3': 'Golf Santa Ponsa 3',
  'Santa Ponsa III': 'Golf Santa Ponsa 3',
  'Son Antem East': 'Golf Son Antem East',
  'Son Antem West': 'Golf Son Antem West',
  'Son Gual': 'Golf Son Gual',
  'Son Quint': 'Golf Son Quint',
  'Son Servera': 'Golf Club Son Servera',
  'Son Termes': 'Golf Son Termes',
  'Son Vida': 'Golf Son Vida',
  'T Golf Calvi\u00e0': 'T Golf Calvi\u00e0 (Poniente)',
  'T Golf Calvi\u00c3\u00a0': 'T Golf Calvi\u00e0 (Poniente)',
  'T Golf Calvi\u00c3\u0192\u00c2\u00a0': 'T Golf Calvi\u00e0 (Poniente)',
  'T Golf Calvi\u00c3\u0192\u00c2\u00a0 (Poniente)': 'T Golf Calvi\u00e0 (Poniente)',
  'T Golf Palma Puntir\u00f3': 'T Golf Palma (Puntir\u00f3)',
  'T Golf Palma (Puntir\u00f3)': 'T Golf Palma (Puntir\u00f3)',
  'T Golf Palma Puntir\u00c3\u00b3': 'T Golf Palma (Puntir\u00f3)',
  'T Golf Palma Puntir\u00c3\u0192\u00c2\u00b3': 'T Golf Palma (Puntir\u00f3)',
  'T Golf Palma (Puntir\u00c3\u0192\u00c2\u00b3)': 'T Golf Palma (Puntir\u00f3)',
  "Vall d'Or": "Vall d'Or Golf",
}

export const COURSE_ACCESS_BY_NAME = Object.fromEntries(
  COURSE_ACCESS_LIST.map((entry) => [entry.name, entry])
)

export function resolveCourseAccessName(name) {
  if (!name) return null
  return COURSE_ACCESS_BY_NAME[name] ? name : COURSE_ACCESS_ALIASES[name] || null
}

export function getCourseAccessByName(name) {
  const resolvedName = resolveCourseAccessName(name)
  return resolvedName ? COURSE_ACCESS_BY_NAME[resolvedName] || null : null
}

export function formatCourseAccessRequirement(entryOrName) {
  const entry =
    typeof entryOrName === 'string' ? getCourseAccessByName(entryOrName) : entryOrName

  if (!entry) return 'Unknown'
  if (!entry.handicapRequired) return 'No handicap required'

  const men = entry.handicapMen
  const women = entry.handicapWomen
  const sameLimits = Number.isFinite(men) && Number.isFinite(women) && men === women

  let text = 'Handicap required'
  if (sameLimits) {
    text = String(men)
  } else if (Number.isFinite(men) && Number.isFinite(women)) {
    text = `${men}M / ${women}L`
  } else if (Number.isFinite(men)) {
    text = `${men}M`
  } else if (Number.isFinite(women)) {
    text = `${women}L`
  }

  return entry.certificateRequired ? `${text} + certificate` : text
}

export function getCourseAccessTypeLabel(entryOrName) {
  const entry =
    typeof entryOrName === 'string' ? getCourseAccessByName(entryOrName) : entryOrName

  switch (entry?.accessType) {
    case 'members_arranged':
      return 'Members / arranged access'
    case 'hotel_guests':
      return 'Hotel guests only'
    case 'public':
    default:
      return 'Public access'
  }
}

export const COURSE_HANDICAP = Object.fromEntries(
  COURSE_ACCESS_LIST.flatMap((entry) => {
    if (!entry.handicapRequired && !entry.certificateRequired) return []

    return [[entry.name, {
      ...(Number.isFinite(entry.handicapMen) ? { m: entry.handicapMen } : {}),
      ...(Number.isFinite(entry.handicapWomen) ? { w: entry.handicapWomen } : {}),
      cert: entry.certificateRequired,
    }]]
  })
)
