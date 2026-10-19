import { resolveCourseAccessName } from './course-access-data.js'

// Generated from mmg-tools/pricing/output/course-pricing-master.json via .\\mmg.ps1 pricing.
// Edit the pricing master, then rerun the sync.

export const COURSE_PRICING_BY_NAME = {
  "Canyamel Golf": {"low":85,"peak":145,"dynamic":false,"licenceFee":3,"junior18HLow":50,"junior18HPeak":85,"junior9H":55,"juniorAgeMax":16},
  "Capdepera Golf": {"low":79,"peak":149,"dynamic":true,"licenceFee":0},
  "Club de Golf Alcanada": {"low":115,"peak":230,"dynamic":false,"licenceFee":3,"junior18HLow":60,"junior18HPeak":60,"junior9H":36,"juniorAgeMax":18},
  "Golf Club Son Servera": {"low":80,"peak":165,"dynamic":false,"licenceFee":0,"junior18HLow":65,"junior18HPeak":65,"juniorAgeMax":18},
  "Golf de Andratx": {"low":95,"peak":170,"dynamic":true,"licenceFee":3},
  "Golf Maioris": {"low":91,"peak":110,"dynamic":false,"licenceFee":0,"junior18HLow":54,"junior18HPeak":54,"junior9H":43},
  "Golf Pollença": {"low":65,"peak":75,"dynamic":false,"licenceFee":0,"holes":9},
  "Golf Santa Ponsa 1": {"low":77,"peak":126,"dynamic":false,"licenceFee":0,"junior18HLow":39,"junior18HPeak":63,"junior9H":50},
  "Golf Santa Ponsa 2": {"low":65,"peak":88,"dynamic":false,"licenceFee":0},
  "Golf Santa Ponsa 3": {"low":25,"peak":30,"dynamic":false,"licenceFee":0,"holes":9},
  "Golf Son Antem East": {"low":105,"peak":140,"dynamic":true,"licenceFee":0,"junior18HLow":53,"junior18HPeak":71,"juniorAgeMax":18},
  "Golf Son Antem West": {"low":109,"peak":145,"dynamic":true,"licenceFee":0,"junior18HLow":53,"junior18HPeak":71,"juniorAgeMax":18},
  "Golf Son Gual": {"low":115,"peak":165,"dynamic":false,"licenceFee":0,"junior18HLow":80,"junior18HPeak":105,"junior9H":65,"juniorAgeMax":17},
  "Golf Son Quint": {"low":76,"peak":172,"dynamic":true,"licenceFee":3,"junior18HLow":39,"junior18HPeak":85,"junior9H":33,"juniorAgeMax":17},
  "Golf Son Termes": {"low":90,"peak":110,"dynamic":false,"licenceFee":0},
  "Golf Son Vida": {"low":84,"peak":190,"dynamic":true,"licenceFee":3,"junior18HLow":42,"junior18HPeak":95,"junior9H":37,"juniorAgeMax":17},
  "Palma Pitch & Putt": {"low":27,"peak":30,"dynamic":true,"licenceFee":2,"holes":9,"feeMode":"pitch_putt","junior18HLow":14,"junior18HPeak":15,"junior9H":10,"juniorAgeMax":17},
  "Pula Golf": {"low":69,"peak":145,"dynamic":true,"licenceFee":0},
  "Real Golf de Bendinat": {"low":74,"peak":123,"dynamic":false,"licenceFee":0,"junior18HLow":37,"junior18HPeak":62,"junior9H":49},
  "Reserva Rotana": {"low":85,"peak":130,"dynamic":false,"licenceFee":0,"holes":9,"feeMode":"hotel_only"},
  "Son Muntaner": {"low":99,"peak":260,"dynamic":true,"licenceFee":3,"junior18HLow":50,"junior18HPeak":130,"junior9H":71,"juniorAgeMax":17},
  "T Golf Calvià (Poniente)": {"low":80,"peak":210,"dynamic":true,"licenceFee":3,"junior18HLow":76,"junior18HPeak":110,"junior9H":75,"juniorAgeMax":17},
  "T Golf Palma (Puntiró)": {"low":80,"peak":150,"dynamic":true,"licenceFee":3,"junior18HLow":65,"junior18HPeak":75,"junior9H":55,"juniorAgeMax":17},
  "Vall d'Or Golf": {"low":99,"peak":132,"dynamic":false,"licenceFee":0,"junior18HLow":75,"junior18HPeak":99,"junior9H":67,"juniorAgeMax":21},
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
