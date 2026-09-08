import { resolveCourseAccessName } from './course-access-data.js'

// Generated from mmg-tools/pricing/output/course-pricing-master.json via .\\mmg.ps1 pricing.
// Edit the pricing master, then rerun the sync.

export const COURSE_PRICING_BY_NAME = {
  "Canyamel Golf": {"low":85,"peak":145,"dynamic":false,"licenceFee":3,"junior18HLow":50,"junior18HPeak":85,"junior9H":55,"juniorAgeMax":16,"juniorAgeNote":"Seasonal HS/MS/LS: 18H 85/60/50, 9H 55/39/33."},
  "Capdepera Golf": {"low":79,"peak":125,"dynamic":true,"licenceFee":0,"juniorAgeNote":"No junior green fee (junior membership only)."},
  "Club de Golf Alcanada": {"low":115,"peak":230,"dynamic":false,"licenceFee":3,"junior18HLow":60,"junior18HPeak":60,"junior9H":36,"juniorAgeMax":18,"juniorAgeNote":"Flat year-round, age-banded. 13-18 = 60/36; also 5-12 = 45/27, 19-24 = 100/60."},
  "Golf Club Son Servera": {"low":80,"peak":165,"dynamic":false,"licenceFee":0,"junior18HLow":65,"junior18HPeak":65,"juniorAgeMax":18,"juniorAgeNote":"Flat 65 every slot, every season. No 9H junior on the online engine."},
  "Golf de Andratx": {"low":95,"peak":170,"dynamic":true,"licenceFee":3,"juniorAgeNote":"No junior green fee (junior membership + range rate only)."},
  "Golf Maioris": {"low":91,"peak":110,"dynamic":false,"licenceFee":0,"junior18HLow":54,"junior18HPeak":54,"junior9H":43,"juniorAgeNote":"Flat year-round; age cutoff not printed on the card."},
  "Golf Pollença": {"low":65,"peak":75,"dynamic":false,"licenceFee":0,"holes":9,"juniorAgeNote":"No junior green fee published."},
  "Golf Santa Ponsa 1": {"low":77,"peak":126,"dynamic":false,"licenceFee":0,"junior18HLow":39,"junior18HPeak":63,"junior9H":50,"juniorAgeNote":"50% of the adult rate every season; cutoff not printed. Exact: 18H 63/53/38.50, 9H 50/29.50/26.50."},
  "Golf Santa Ponsa 2": {"low":65,"peak":88,"dynamic":false,"licenceFee":0,"juniorAgeNote":"Record-only; guest-of-member card has no junior line."},
  "Golf Santa Ponsa 3": {"low":25,"peak":30,"dynamic":false,"licenceFee":0,"holes":9,"juniorAgeNote":"Record-only; no junior line."},
  "Golf Son Antem East": {"low":105,"peak":140,"dynamic":true,"licenceFee":0,"junior18HLow":53,"junior18HPeak":71,"juniorAgeMax":18,"juniorAgeNote":"Signed 2026 TO contract. 2027 contract (from 1 Nov 2026) is 55/74 - recheck after that date. Not the same as \"kids 6-15 free with a paying adult\"."},
  "Golf Son Antem West": {"low":109,"peak":145,"dynamic":true,"licenceFee":0,"junior18HLow":53,"junior18HPeak":71,"juniorAgeMax":18,"juniorAgeNote":"Same signed contract, shared East+West junior table. Same 2027 note."},
  "Golf Son Gual": {"low":115,"peak":165,"dynamic":false,"licenceFee":0,"juniorAgeNote":"No junior green fee (adult date-band table only)."},
  "Golf Son Quint": {"low":76,"peak":172,"dynamic":true,"licenceFee":3,"junior18HLow":39,"junior18HPeak":85,"junior9H":33,"juniorAgeMax":17,"juniorAgeNote":"Dynamic. Low 18H 39 / 9H 25; peak 18H 51-85 / 9H 33."},
  "Golf Son Termes": {"low":90,"peak":110,"dynamic":false,"licenceFee":0,"juniorAgeNote":"No junior green fee (adult visitor table only)."},
  "Golf Son Vida": {"low":84,"peak":190,"dynamic":true,"licenceFee":3,"junior18HLow":42,"junior18HPeak":95,"junior9H":37,"juniorAgeMax":17,"juniorAgeNote":"Dynamic. Low 18H 42-57 / 9H 28-37; peak 18H 56-95 / 9H 37."},
  "Palma Pitch & Putt": {"low":27,"peak":30,"dynamic":true,"licenceFee":2,"holes":9,"feeMode":"pitch_putt","junior18HLow":14,"junior18HPeak":15,"junior9H":10,"juniorAgeMax":17,"juniorAgeNote":"Day-of-week, NOT seasonal: Mon-Thu 14/9, Fri-Sun 15/10. Low col = Mon-Thu, peak col = Fri-Sun."},
  "Pula Golf": {"low":69,"peak":145,"dynamic":true,"licenceFee":0,"juniorAgeNote":"No junior product on the booking engine."},
  "Real Golf de Bendinat": {"low":74,"peak":123,"dynamic":false,"licenceFee":0,"junior18HLow":37,"junior18HPeak":62,"junior9H":49,"juniorAgeNote":"50% of the adult rate every season; cutoff not printed (max HCP 36). Exact peak 61.50 / 48.50."},
  "Reserva Rotana": {"low":85,"peak":130,"dynamic":false,"licenceFee":0,"holes":9,"feeMode":"hotel_only","juniorAgeNote":"Record-only, no public pricing."},
  "Son Muntaner": {"low":99,"peak":260,"dynamic":true,"licenceFee":3,"junior18HLow":50,"junior18HPeak":130,"junior9H":71,"juniorAgeMax":17,"juniorAgeNote":"Dynamic. Low = walking (buggy separate). Peak (Mar-Nov) is buggy-INCLUSIVE, not comparable to low. 9H: 32 low / 56-71 peak."},
  "T Golf Calvià (Poniente)": {"low":80,"peak":210,"dynamic":true,"licenceFee":3,"junior18HLow":76,"junior18HPeak":110,"junior9H":75,"juniorAgeMax":17,"juniorAgeNote":"Dynamic. 9H flat 75 both seasons. Compulsory daily golf licence."},
  "T Golf Palma (Puntiró)": {"low":80,"peak":150,"dynamic":true,"licenceFee":3,"junior18HLow":65,"junior18HPeak":75,"junior9H":55,"juniorAgeMax":17,"juniorAgeNote":"9H flat 55 both seasons. Compulsory daily golf licence."},
  "Vall d'Or Golf": {"low":99,"peak":132,"dynamic":false,"licenceFee":0,"junior18HLow":75,"junior18HPeak":99,"junior9H":67,"juniorAgeMax":21,"juniorAgeNote":"Junior tier is 15-21. Separate cheaper Child (<14): 18H 66/49.50, 9H 44.50/35.50. Exact junior 99/74.25, 9H 66.75/53.25."},
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
