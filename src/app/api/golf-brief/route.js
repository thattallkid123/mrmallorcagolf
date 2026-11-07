import { Resend } from 'resend'
import { openEnquiry } from '../../../lib/enquiry-context.js'
import { checkRateLimit, escapeHtml, getClientKey, isAllowedOrigin, isJsonRequest, isPayloadTooLarge, isValidEmail, sanitizeText } from '../../../lib/request-safety.js'
import { normalize, valid } from '../../../lib/golf-brief.js'

const reply = (status, data) => Response.json(data, { status, headers: { 'Cache-Control': 'private, no-store' } })
const unavailable = () => reply(404, { error: 'This golf brief link is unavailable.' })

export async function POST(request) {
  if (process.env.GOLF_BRIEF_ENABLED !== '1') return unavailable()
  const origins = [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL].filter(Boolean).map(host => 'https://' + host)
  if (!isAllowedOrigin(request, origins)) return reply(403, { error: 'Open the questionnaire directly.' })
  if (!isJsonRequest(request)) return reply(415, { error: 'Unsupported request.' })
  if (isPayloadTooLarge(request, 24576)) return reply(413, { error: 'The brief is too long.' })
  if (!await checkRateLimit(getClientKey(request, 'golf-brief'), 20, 600000)) return reply(429, { error: 'Please wait a few minutes and try again.' })
  let body
  try {
    const raw = await request.text()
    if (Buffer.byteLength(raw) > 24576) return reply(413, { error: 'The brief is too long.' })
    body = JSON.parse(raw)
  } catch { return reply(400, { error: 'Invalid request.' }) }
  const ref = typeof body?.ref === 'string' ? body.ref : ''
  const enquiry = openEnquiry(ref, body?.context, undefined, 'golf-brief')
  if (!enquiry) return unavailable()
  const original = { name: enquiry.name, email: enquiry.email, handicap: enquiry.handicap, courses: enquiry.courses }
  const count = String(enquiry.groupsize || '').trim().match(/^(\d{1,2})(?:\s*(?:golfer|player)s?)?$/i)
  if (count && Number(count[1]) >= 1 && Number(count[1]) <= 40) original.golfers = Number(count[1])
  if (body.action === 'load') return reply(200, { brief: original, originalDates: enquiry.dates || '' })
  if (body.action !== 'submit') return reply(400, { error: 'Invalid request.' })
  const brief = normalize({ ...body.brief, email: enquiry.email })
  if (!valid(brief) || !isValidEmail(brief.email)) return reply(400, { error: 'Check your name, playing dates and golfer count.' })
  const base = process.env.GOLF_BRIEF_SUPABASE_URL || ''
  const key = process.env.GOLF_BRIEF_SUPABASE_ANON_KEY
  const secret = process.env.GOLF_BRIEF_INGRESS_SECRET
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(base) || !key || !/^[a-f0-9]{64}$/.test(secret || '')) return reply(503, { error: 'Your answers could not be saved. Please contact Andy.' })
  try {
    const headers = { apikey: key, 'content-type': 'application/json' }
    if (key.startsWith('eyJ')) headers.Authorization = 'Bearer ' + key
    const saved = await fetch(base + '/rest/v1/rpc/receive_golf_brief', {
      method: 'POST', headers, cache: 'no-store', signal: AbortSignal.timeout(8000),
      body: JSON.stringify({ p_secret: secret, p_ref: ref, p_brief: brief }),
    })
    if (!saved.ok) throw new Error('Intake unavailable')
    const inserted = await saved.json()
    if (typeof inserted !== 'boolean') throw new Error('Invalid intake response')
    if (inserted && process.env.RESEND_API_KEY && process.env.GOLF_BRIEF_NOTIFY === '1') {
      const clientName = sanitizeText(brief.name, 120)
      const internalUrl = 'https://internal.mrmallorcagolf.com/?golf-brief=' + encodeURIComponent(ref)
      try {
        const result = await new Resend(process.env.RESEND_API_KEY).emails.send({
          from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>', to: 'andy@mrmallorcagolf.com',
          subject: `Golf brief received from ${clientName}`,
          html: `<div style="font-family:sans-serif;line-height:1.5">
            <p><a href="${escapeHtml(internalUrl)}">Open brief in Internal</a></p>
            <p style="color:#666;font-size:13px;overflow-wrap:anywhere">Enquiry reference ${escapeHtml(ref)}</p>
          </div>`,
          text: `Open brief in Internal\n${internalUrl}\n\nEnquiry reference ${ref}`,
        })
        if (result.error) console.error('Golf brief notification failed')
      } catch { console.error('Golf brief notification failed') }
    }
    return reply(200, { ok: true, alreadyReceived: !inserted })
  } catch {
    return reply(503, { error: 'Your answers could not be saved. Please try again.' })
  }
}
