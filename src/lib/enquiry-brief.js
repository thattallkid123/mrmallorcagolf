// Turns a contact-form submission into the short brief at the top of Andy's enquiry email.
// Pure and side-effect free so it can be unit tested. The email's labelled table rows and
// "Message:" block are read by mmg-tools/scripts/clients-sync.py, so they stay in the route;
// this file only builds the extra summary on top.

const SHORT_LABELS = {
  pwap: 'Play With A Pro',
  'trip-planning': 'Golf trip',
  'whole-trip': 'Whole trip',
  'tee-time-booking': 'Tee times',
  both: 'Play With A Pro and trip',
  'not-sure': 'Not sure yet',
}

const WIDE_TRIP_TYPES = ['whole-trip', 'trip-planning', 'both']

export function shortServiceLabel(serviceType) {
  return SHORT_LABELS[serviceType] || ''
}

function formatMallorca(date) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Madrid',
  }).format(date)
}

export function describeSource({ entryPage, enquirySourcePage, utmSource, utmMedium, utmCampaign, referrerHost }) {
  const parts = []
  if (referrerHost) parts.push(`Came from ${referrerHost}`)
  const campaign = [utmSource, utmMedium, utmCampaign].filter(Boolean).join(' / ')
  if (campaign) parts.push(`Campaign: ${campaign}`)
  if (enquirySourcePage) parts.push(`Last page before the form: ${enquirySourcePage}`)
  if (entryPage && entryPage !== '/contact' && entryPage !== enquirySourcePage) {
    parts.push(`First page they landed on: ${entryPage}`)
  }
  if (parts.length) return parts.join('. ')
  return 'Direct visit: they typed the address, used a bookmark, or followed a link that hides its source (WhatsApp, Instagram and email apps often do).'
}

export function stillToAsk({ serviceType, dates, handicap, groupsize }) {
  const questions = []
  if (!dates) questions.push('Dates: none given. Ask for them, and how flexible they are.')
  if (!groupsize) questions.push('Group size: not given.')
  else if (groupsize.startsWith('5+')) questions.push('Exact number of golfers: they chose "5+", which could be five or twenty.')
  if (!handicap) questions.push('Handicap range: none given. It decides which courses are suitable.')

  if (WIDE_TRIP_TYPES.includes(serviceType)) {
    questions.push('Hotel: area or base, how many single, twin and double rooms, and a budget per room per night.')
    questions.push('Transfers: airport, golf, or both. Landing and departure times decide whether golf fits on the first and last day.')
  }
  if (serviceType === 'whole-trip') {
    questions.push('Occasion and what would make the trip a success. Offer a short call to agree the golf, the base and the extras.')
  }
  if (serviceType === 'tee-time-booking') {
    questions.push('Courses already in mind, preferred tee-time window, and whether they want buggies.')
  }
  if (serviceType === 'pwap' || serviceType === 'both') {
    questions.push('Preferred course or area for the Play With A Pro day, and whether it is solo or a group.')
  }
  if (serviceType === 'not-sure' || !serviceType) {
    questions.push('What they want help with: playing with you, booking golf, or planning the whole trip.')
  }
  return questions
}

export function buildEnquiryBrief(input, now = new Date()) {
  const { serviceType, serviceTypeLabel, dates, handicap, groupsize } = input
  const headline = [serviceTypeLabel, groupsize, dates, handicap ? `handicap ${handicap}` : ''].filter(Boolean).join(' · ')
  const replyBy = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  return {
    headline,
    received: `Received ${formatMallorca(now)} (Mallorca time). Your 24-hour reply promise ends ${formatMallorca(replyBy)}.`,
    source: describeSource(input),
    questions: stillToAsk({ serviceType, dates, handicap, groupsize }),
    subjectSuffix: shortServiceLabel(serviceType),
  }
}
