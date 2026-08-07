import { resolveCourseAccessName } from './course-access-data.js'

// Generated from mmg-tools/pricing/output/course-pricing-master.json via .\\mmg.ps1 pricing.
// Edit the pricing master, then rerun the sync.

export const COURSE_PRICING_BY_NAME = {
  "Canyamel Golf": {"low":85,"peak":145,"dynamic":false,"licenceFee":3},
  "Capdepera Golf": {"low":79,"peak":125,"dynamic":true,"licenceFee":0},
  "Club de Golf Alcanada": {"low":115,"peak":230,"dynamic":false,"licenceFee":3},
  "Golf Club Son Servera": {"low":80,"peak":145,"dynamic":false,"licenceFee":0},
  "Golf de Andratx": {"low":90,"peak":140,"dynamic":true,"licenceFee":3},
  "Golf Maioris": {"low":91,"peak":110,"dynamic":false,"licenceFee":0},
  "Golf Pollença": {"low":65,"peak":75,"dynamic":false,"licenceFee":0,"holes":9},
  "Golf Santa Ponsa 1": {"low":77,"peak":126,"dynamic":false,"licenceFee":0},
  "Golf Santa Ponsa 2": {"low":65,"peak":88,"dynamic":false,"licenceFee":0},
  "Golf Santa Ponsa 3": {"low":25,"peak":30,"dynamic":false,"licenceFee":0,"holes":9},
  "Golf Son Antem East": {"low":105,"peak":140,"dynamic":true,"licenceFee":0},
  "Golf Son Antem West": {"low":109,"peak":145,"dynamic":true,"licenceFee":0},
  "Golf Son Gual": {"low":115,"peak":165,"dynamic":false,"licenceFee":0},
  "Golf Son Quint": {"low":70,"peak":172,"dynamic":true,"licenceFee":3},
  "Golf Son Termes": {"low":90,"peak":110,"dynamic":false,"licenceFee":0},
  "Golf Son Vida": {"low":85,"peak":190,"dynamic":true,"licenceFee":3},
  "Palma Pitch & Putt": {"low":20,"peak":30,"dynamic":false,"licenceFee":2,"holes":9,"feeMode":"pitch_putt"},
  "Pula Golf": {"low":69,"peak":145,"dynamic":true,"licenceFee":0},
  "Real Golf de Bendinat": {"low":74,"peak":123,"dynamic":false,"licenceFee":0},
  "Reserva Rotana": {"low":85,"peak":130,"dynamic":false,"licenceFee":0,"holes":9,"feeMode":"hotel_only"},
  "Son Muntaner": {"low":110,"peak":260,"dynamic":true,"licenceFee":3},
  "T Golf Calvià (Poniente)": {"low":80,"peak":210,"dynamic":true,"licenceFee":3},
  "T Golf Palma (Puntiró)": {"low":105,"peak":150,"dynamic":true,"licenceFee":3},
  "Vall d'Or Golf": {"low":99,"peak":132,"dynamic":false,"licenceFee":0},
}

export function getCoursePricingByName(name) {
  if (!name) return null
  const resolved = COURSE_PRICING_BY_NAME[name]
    ? name
    : resolveCourseAccessName(name)
  return resolved ? COURSE_PRICING_BY_NAME[resolved] || null : null
}

function formatEuro(amount) {
  return `€${amount}`
}

export function formatCourseFeeLabel(name, options = {}) {
  const pricing = options.pricing || getCoursePricingByName(name)
  if (!pricing) return options.fallback || 'Pricing on request'

  if (pricing.feeMode === 'pitch_putt') {
    return `9 holes ${formatEuro(pricing.low)} · 18 holes ${formatEuro(pricing.peak)}`
  }

  if (pricing.feeMode === 'hotel_only') {
    return 'Included for hotel guests · Not available to the public'
  }

  const base = `Peak ${formatEuro(pricing.peak)} / Low ${formatEuro(pricing.low)}`
  const suffix = []
  if (pricing.holes === 9) suffix.push('9 holes')
  if (pricing.dynamic) suffix.push('dynamic')
  return suffix.length ? `${base} (${suffix.join(' · ')})` : base
}

export function formatCourseLicenceFee(name, options = {}) {
  const pricing = options.pricing || getCoursePricingByName(name)
  if (!pricing) return null
  if (pricing.licenceFee === null || pricing.licenceFee === undefined) return null
  if (pricing.licenceFee <= 0) return 'No daily licence fee'
  return `Daily licence ${formatEuro(pricing.licenceFee)}`
}
