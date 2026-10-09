import { Resend } from 'resend'

import {
  checkRateLimit,
  escapeHtml,
  getClientKey,
  isAllowedOrigin,
  isJsonRequest,
  isPayloadTooLarge,
  isValidEmail,
  sanitizeMultilineText,
  sanitizeText,
} from '../../../lib/request-safety'

const OPTIONS = {
  tripType: { friends: 'Friends / golf group', couple: 'Couple', family: 'Family trip', corporate: 'Work or corporate group', celebration: 'Celebration' },
  experienceHelp: { ideas: 'Ideas to discuss', options: 'Check options and prices' },
  stayHelp: { quote: 'Find hotel or villa options', booked: 'Already arranged', open: 'Decide on the call' },
  dateFlex: { fixed: 'Fixed', 'few-days': 'A few days either way', open: 'Quite flexible' },
  golfFocus: { pro: 'Play with Andy', coaching: 'Coaching session' },
  area: { palma: 'Palma', southwest: 'South West', east: 'East Mallorca', open: 'Advice welcome' },
  stayStyle: { city: 'City hotel', golf: 'Golf base', coast: 'Coastal hotel', finca: 'Country finca', villa: 'Private villa' },
  hotelBudget: { 'under-200': 'Under €200', '200-300': '€200–€300', '300-450': '€300–€450', '450-plus': '€450+', flexible: 'Flexible for the right stay' },
  transfers: { airport: 'Airport transfers', golf: 'Golf transfers', days: 'Other day trips', self: 'Arranging own transfers' },
  arrivalPattern: { together: 'Broadly together', separate: 'Different flights', unknown: 'Not sure yet' },
  restaurants: { 'can-eduardo': 'Ca n’Eduardo', 'marc-fosh': 'Marc Fosh', fera: 'Fera', siso: 'Siso Beach', annabel: 'Annabel', 'cova-negra': 'Cova Negra', 'sa-punta': 'Sa Punta', voro: 'VORO' },
  diningStyle: { relaxed: 'Relaxed group meals', mix: 'One special dinner and casual meals', fine: 'Fine dining' },
  presentation: { yes: 'Yes', maybe: 'Maybe', no: 'No' },
  dinnerHelp: { ideas: 'Recommendations only', arrange: 'Help arranging tables', none: 'No help needed' },
  experiences: { winery: 'Winery visit', boat: 'Private boat', cooking: 'Moltak cooking', padel: 'Padel session', beach: 'Beach club', chef: 'Chef at villa', balloon: 'Hot-air balloon', olive: 'Olive-oil estate', farm: 'Farm meal', caves: 'Coves d’Artà' },
  extraTiming: { 'after-golf': 'After golf', 'free-day': 'On a day without golf', evening: 'Evening', open: 'Open to suggestions' },
  moreInterests: { spa: 'Spa or recovery', nightlife: 'Night out', kids: 'Family or kids activities', none: 'No extra meals or experiences' },
}

const pick = (field, value) => typeof value === 'string' && Object.hasOwn(OPTIONS[field] || {}, value)
  ? OPTIONS[field][value]
  : ''
const pickMany = (field, value) => Array.isArray(value)
  ? [...new Set(value.slice(0, 20).map((item) => pick(field, item)).filter(Boolean))].join(', ')
  : ''
const cleanCount = (value) => /^(?:0|[1-9]\d{0,2})$/.test(String(value ?? '')) && Number(value) <= 100 ? String(value) : ''
const cleanDate = (value) => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return ''
  const date = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value ? value : ''
}
const row = (label, value) => `<tr><td style="padding:8px 10px 8px 0;color:#666;vertical-align:top;width:175px">${escapeHtml(label)}</td><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value || 'Not specified')}</td></tr>`
const section = (title, rows) => `<h3 style="color:#2d4a3e;margin:24px 0 8px">${escapeHtml(title)}</h3><table style="width:100%;border-collapse:collapse">${rows.join('')}</table>`

export async function POST(request) {
  const previewOrigins = [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL]
    .filter(Boolean).map((host) => `https://${host}`)
  if (!isAllowedOrigin(request, previewOrigins)) {
    return Response.json({ ok: false, error: 'Origin not allowed.' }, { status: 403 })
  }
  if (!isJsonRequest(request)) {
    return Response.json({ ok: false, error: 'Unsupported content type.' }, { status: 415 })
  }
  if (isPayloadTooLarge(request, 48 * 1024)) {
    return Response.json({ ok: false, error: 'Payload too large.' }, { status: 413 })
  }
  if (!await checkRateLimit(getClientKey(request, 'trip-preferences'), 8, 10 * 60 * 1000)) {
    return Response.json({ ok: false, error: 'Too many requests. Please wait a few minutes and try again.' }, { status: 429 })
  }

  try {
    const raw = await request.text()
    if (Buffer.byteLength(raw, 'utf8') > 48 * 1024) {
      return Response.json({ ok: false, error: 'Payload too large.' }, { status: 413 })
    }
    const payload = JSON.parse(raw)
    if (payload?.website) return Response.json({ ok: true })

    const enquiryRef = sanitizeText(payload?.enquiryRef, 36)
    const name = sanitizeText(payload?.contact?.name, 120)
    const email = sanitizeText(payload?.contact?.email, 160).toLowerCase()
    if (!/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(enquiryRef) || !name || !isValidEmail(email)) {
      return Response.json({ ok: false, error: 'Use the link from Andy and enter your name and enquiry email.' }, { status: 400 })
    }
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ ok: false, error: 'Email service is not configured.' }, { status: 500 })
    }

    const trip = payload?.trip || {}
    const prefs = payload?.preferences || {}
    const rooms = prefs.rooms || {}
    const arrival = cleanDate(trip.arrival)
    const departure = cleanDate(trip.departure)
    const golfers = cleanCount(trip.golfers)
    const nonGolfers = cleanCount(trip.nonGolfers)
    const children = cleanCount(trip.children)
    const single = cleanCount(rooms.single)
    const twin = cleanCount(rooms.twin)
    const double = cleanCount(rooms.double)
    const questions = ['Match the original enquiry: carry forward dates, exact group numbers, golf route, tee-time and buggy requests.']
    if ((arrival || departure) && (!arrival || !departure || departure <= arrival)) questions.push('Resolve the incomplete or conflicting date update.')
    if (!pick('stayHelp', prefs.stayHelp) || prefs.stayHelp === 'open') questions.push('Decide whether accommodation help is needed.')
    if (prefs.stayHelp === 'quote') {
      if (!pick('area', prefs.area) || prefs.area === 'open') questions.push('Agree the base around the golf route and evenings.')
      if (single === '' || twin === '' || double === '') questions.push('Confirm the room mix; blank room counts are undecided, not zero.')
      if (!pick('hotelBudget', prefs.hotelBudget)) questions.push('Agree the accommodation budget per room, per night.')
    }
    if (!pickMany('transfers', prefs.transfers)) questions.push('Confirm transport requirements.')
    if (Array.isArray(prefs.transfers) && prefs.transfers.includes('airport')) questions.push('Confirm flight groups, timings and luggage, or provisional transfer assumptions.')
    if (pickMany('restaurants', prefs.restaurants) && !pick('dinnerHelp', prefs.dinnerHelp)) questions.push('Decide whether restaurant recommendations or reservation help are wanted.')
    if (pickMany('experiences', prefs.experiences) && !pick('experienceHelp', prefs.experienceHelp)) questions.push('Separate experience ideas from requests for options and prices.')
    if (Array.isArray(prefs.experiences) && prefs.experiences.includes('balloon') && prefs.extraTiming === 'after-golf') questions.push('A balloon needs a free morning; check the golf schedule.')
    questions.push('Agree the specific partner request list, budget for each item, group decision-maker and decision deadline.')

    const html = `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#2c2a27;padding:24px">
      <h2 style="color:#2d4a3e">Trip preferences from ${escapeHtml(name)}</h2>
      <p>Call preparation for Andy. Read alongside the first enquiry using the reference below. The original record is not loaded by this questionnaire.</p>
      <p>These are client preferences. Confirm the shortlist on the call before asking Shane to check options and prices.</p>
      ${section('Match to the first enquiry', [row('Enquiry reference', enquiryRef), row('Name', name), row('Email', email)])}
      ${section('Group and golf updates', [
        row('Trip type', pick('tripType', trip.tripType)),
        row('Date update', [arrival, departure].filter(Boolean).join(' to ') || 'Use dates from first enquiry'), row('Flexibility', pick('dateFlex', trip.dateFlex)),
        row('Updated golfers', golfers || 'Use first enquiry; confirm exact number'), row('Updated non-golfing adults', nonGolfers || 'Use first enquiry; confirm exact number'), row('Updated children', children || 'Use first enquiry; confirm exact number'),
        row('Play or coaching', pickMany('golfFocus', trip.golfFocus)), row('Golf update', sanitizeMultilineText(trip.courseNotes, 600)),
      ])}
      ${section('Stay and travel', [
        row('Stay help', pick('stayHelp', prefs.stayHelp)), row('Area', pick('area', prefs.area)), row('Stay styles', pickMany('stayStyle', prefs.stayStyle)),
        row('Named hotel or villa', sanitizeText(prefs.hotelName, 160)),
        row('Single occupancy rooms', single || 'Not decided yet'), row('Twin rooms', twin || 'Not decided yet'), row('Double rooms', double || 'Not decided yet'),
        row('Budget per room per night', pick('hotelBudget', prefs.hotelBudget)),
        row('Transfers', pickMany('transfers', prefs.transfers)), row('Flight pattern', pick('arrivalPattern', prefs.arrivalPattern)),
      ])}
      ${section('Dining and experiences', [
        row('Restaurant interests', pickMany('restaurants', prefs.restaurants)), row('Dining style', pick('diningStyle', prefs.diningStyle)),
        row('Private room or prizes', pick('presentation', prefs.presentation)), row('Dinner help', pick('dinnerHelp', prefs.dinnerHelp)),
        row('Experience interests', pickMany('experiences', prefs.experiences)), row('Experience help', pick('experienceHelp', prefs.experienceHelp)), row('Best time', pick('extraTiming', prefs.extraTiming)),
        row('Other interests', pickMany('moreInterests', prefs.moreInterests)),
        row('Access, dietary or practical needs', sanitizeMultilineText(prefs.specialNeeds, 1000)),
        row('Other notes', sanitizeMultilineText(prefs.notes, 2000)),
      ])}
      <h3 style="color:#2d4a3e;margin:24px 0 8px">Call agenda: facts and decisions to confirm</h3>
      <ul>${questions.map((question) => `<li style="margin:8px 0">${escapeHtml(question)}</li>`).join('')}</ul>
      <p style="margin-top:28px;color:#666">After the call, Andy prepares a separate non-golf brief with the agreed requests. Nothing here is reserved or sent to Shane.</p>
    </div>`

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      replyTo: email,
      subject: `Trip preferences from ${name} [${enquiryRef}]`,
      html,
    })
    if (error) {
      console.error('Resend trip preferences error:', error)
      return Response.json({ ok: false, error: 'Could not send your preferences. Please try again.' }, { status: 500 })
    }
    return Response.json({ ok: true })
  } catch (error) {
    console.error('Trip preferences error:', error)
    return Response.json({ ok: false, error: 'Could not send your preferences. Please try again.' }, { status: 500 })
  }
}
