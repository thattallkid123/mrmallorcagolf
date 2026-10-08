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
  dateFlex: { fixed: 'Fixed', 'few-days': 'A few days either way', open: 'Quite flexible' },
  golfFocus: { pro: 'Play with Andy', coaching: 'Coaching session' },
  area: { palma: 'Palma', southwest: 'South West', east: 'East Mallorca', open: 'Advice welcome' },
  stayStyle: { city: 'City hotel', golf: 'Golf resort', coast: 'Coastal hotel', finca: 'Country finca', villa: 'Private villa' },
  hotelBudget: { 'under-200': 'Under €200', '200-300': '€200–€300', '300-450': '€300–€450', '450-plus': '€450+', flexible: 'Flexible for the right stay' },
  transfers: { airport: 'Airport transfers', golf: 'Golf transfers', days: 'Other day trips', self: 'Arranging own transfers' },
  arrivalPattern: { together: 'Broadly together', separate: 'Different flights', unknown: 'Not sure yet' },
  restaurants: { 'can-eduardo': 'Ca n’Eduardo', 'marc-fosh': 'Marc Fosh', fera: 'Fera', siso: 'Siso Beach', annabel: 'Annabel', 'cova-negra': 'Cova Negra', 'sa-punta': 'Sa Punta', voro: 'VORO' },
  diningStyle: { relaxed: 'Relaxed group meals', mix: 'One special dinner and casual meals', fine: 'Fine dining' },
  presentation: { yes: 'Yes', maybe: 'Maybe', no: 'No' },
  dinnerHelp: { ideas: 'Recommendations only', arrange: 'Help arranging tables', none: 'No help needed' },
  experiences: { winery: 'Winery visit', boat: 'Private boat', cooking: 'Moltak cooking', padel: 'Padel session', beach: 'Beach club', chef: 'Chef at villa', balloon: 'Hot-air balloon', olive: 'Olive-oil estate', farm: 'Farm meal', caves: 'Coves d’Artà' },
  extraTiming: { 'after-golf': 'After golf', 'free-day': 'On a day without golf', evening: 'Evening', open: 'Open to suggestions' },
  moreInterests: { spa: 'Spa or recovery', nightlife: 'Night out', kids: 'Family or kids activities', none: 'No plans beyond golf' },
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

    const html = `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#2c2a27;padding:24px">
      <h2 style="color:#2d4a3e">Trip preferences from ${escapeHtml(name)}</h2>
      <p>Pre-call interests only. Compare with the original enquiry using the reference below.</p>
      ${section('Match to the first enquiry', [row('Enquiry reference', enquiryRef), row('Name', name), row('Email', email)])}
      ${section('Group and golf', [
        row('Dates', [arrival, departure].filter(Boolean).join(' to ')), row('Flexibility', pick('dateFlex', trip.dateFlex)),
        row('Golfers', golfers), row('Non-golfing adults', nonGolfers), row('Children', children),
        row('Play or coaching', pickMany('golfFocus', trip.golfFocus)), row('Golf update', sanitizeMultilineText(trip.courseNotes, 600)),
      ])}
      ${section('Stay and travel', [
        row('Area', pick('area', prefs.area)), row('Stay styles', pickMany('stayStyle', prefs.stayStyle)),
        row('Named hotel or villa', sanitizeText(prefs.hotelName, 160)),
        row('Rooms: single / twin / double', `${single || '?'} / ${twin || '?'} / ${double || '?'}`),
        row('Budget per room per night', pick('hotelBudget', prefs.hotelBudget)),
        row('Transfers', pickMany('transfers', prefs.transfers)), row('Flight pattern', pick('arrivalPattern', prefs.arrivalPattern)),
      ])}
      ${section('Dining and experiences', [
        row('Restaurants', pickMany('restaurants', prefs.restaurants)), row('Dining style', pick('diningStyle', prefs.diningStyle)),
        row('Private room or prizes', pick('presentation', prefs.presentation)), row('Dinner help', pick('dinnerHelp', prefs.dinnerHelp)),
        row('Experiences', pickMany('experiences', prefs.experiences)), row('Best time', pick('extraTiming', prefs.extraTiming)),
        row('Other interests', pickMany('moreInterests', prefs.moreInterests)),
        row('Access, dietary or practical needs', sanitizeMultilineText(prefs.specialNeeds, 1000)),
        row('Other notes', sanitizeMultilineText(prefs.notes, 2000)),
      ])}
      <p style="margin-top:28px;color:#666">Confirm dates, occupancy, flights and decisions on the call before asking Shane to quote. Nothing here is reserved.</p>
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
