import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import {
  checkRateLimit,
  escapeHtml,
  getClientKey,
  isAllowedOrigin,
  isJsonRequest,
  isPayloadTooLarge,
  isValidEmail,
  sanitizeText,
} from '../../../lib/request-safety'

const TOOL_LABELS = {
  'golf-day-builder':   'Your Mallorca golf day plan',
  'course-selector':    'Your Mallorca course recommendations',
  'hotel-recommender':  'Your Mallorca hotel recommendations',
  'golf-cost-calculator': 'Your Mallorca golf trip cost estimate',
}

// Every string that reaches the outbound HTML is escaped, and every array is
// length-capped, so a caller hitting this endpoint directly (bypassing the
// browser UI) cannot inject markup or blow up the email with an oversized payload.
function str(value, maxLength = 200) {
  return escapeHtml(sanitizeText(value, maxLength))
}

function num(value) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function fmtEUR(n) {
  return '€' + Math.round(n).toLocaleString('en-GB')
}

function fmtRange(range) {
  if (!Array.isArray(range) || range.length !== 2) return ''
  const lo = num(range[0])
  const hi = num(range[1])
  if (lo === null || hi === null) return ''
  return `${fmtEUR(lo)} – ${fmtEUR(hi)}`
}

function buildGolfDayBuilderBody(data) {
  const itineraries = Array.isArray(data?.itineraries) ? data.itineraries.slice(0, 3) : []
  return itineraries.map(it => `
      <div style="margin-bottom:28px;padding-bottom:24px;border-bottom:1px solid #EDE9E1;">
        <p style="margin:0 0 4px;font-family:'Jost',Arial,sans-serif;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#B8973C;">${str(it?.name)}</p>
        <h3 style="margin:0 0 6px;font-family:Georgia,serif;font-size:19px;font-weight:400;color:#1A1916;">${str(it?.courseName)}</h3>
        <p style="margin:0 0 12px;font-family:Georgia,serif;font-size:14px;line-height:1.6;color:#2C2A27;">${str(it?.tagline, 400)}</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${(Array.isArray(it?.steps) ? it.steps.slice(0, 10) : []).map(s => `<tr>
            <td style="padding:4px 10px 4px 0;font-family:'Jost',Arial,sans-serif;font-size:11px;color:#8A7F74;white-space:nowrap;vertical-align:top;">${str(s?.time, 80)}</td>
            <td style="padding:4px 0;font-family:'Jost',Arial,sans-serif;font-size:13px;color:#2C2A27;"><strong>${str(s?.title, 120)}</strong></td>
          </tr>`).join('')}
        </table>
      </div>`).join('')
}

function buildHotelRecommenderBody(data) {
  const results = Array.isArray(data?.results) ? data.results.slice(0, 3) : []
  return `
      <p style="margin:0 0 12px;font-size:12px;color:#8A7F74;line-height:1.6;">${str(data?.answerSummary, 500)}</p>
      <p style="margin:0 0 16px;">Here are the hotel bases I would start with from your answers:</p>
      ${results.map((x, index) => `
        <div style="margin:0 0 18px;padding:0 0 16px;border-bottom:1px solid #E6DED1;">
          <p style="margin:0 0 6px;font-weight:700;color:#2D4A3E;">${index + 1}. ${str(x?.name)}</p>
          <p style="margin:0 0 8px;color:#6F665B;">${str(x?.subname)}</p>
          <p style="margin:0 0 8px;">${str(x?.why, 400)}</p>
          <p style="margin:0;"><strong>Golf fit:</strong> ${str(x?.golf, 400)}</p>
        </div>
      `).join('')}
    `
}

function buildGolfCostCalculatorBody(data) {
  const days = num(data?.days)
  const golfers = num(data?.golfers)
  const rounds = num(data?.rounds)
  const row = (label, val) =>
    `<tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">${label}</td><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${val}</td></tr>`

  return `
      <p style="margin:0 0 20px;font-family:'Jost',Arial,sans-serif;font-size:15px;line-height:1.7;color:#2C2A27;">Here is your planning estimate for a ${days ?? ''}-day trip with ${golfers ?? ''} golfer${golfers > 1 ? 's' : ''}, ${rounds ?? ''} round${rounds > 1 ? 's' : ''} of golf.</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        ${row('Green fees', fmtRange(data?.greenFees))}
        ${data?.buggy ? row('Buggy hire', fmtRange(data?.buggyRange)) : ''}
        ${data?.clubs ? row('Club hire', fmtRange(data?.clubsRange)) : ''}
        ${data?.transport ? row('Transport', fmtRange(data?.transportRange)) : ''}
        ${row('Dining', fmtRange(data?.dining))}
        ${row('Accommodation', fmtRange(data?.accommodation))}
      </table>
      <div style="background:#2D4A3E;border-radius:4px;padding:20px 24px;margin-bottom:20px;">
        <p style="margin:0 0 4px;font-family:'Jost',Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(247,244,239,0.6);">Total estimate</p>
        <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:26px;color:#F7F4EF;">${fmtRange(data?.total)}</p>
        <p style="margin:6px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:rgba(247,244,239,0.6);">${fmtRange(data?.perGolfer)} per golfer</p>
      </div>
      <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8A7F74;">These are planning estimates. Tee times, bookings, and exact pricing are confirmed when you book with Andy.</p>`
}

function buildCourseSelectorBody(data) {
  const courses = Array.isArray(data?.topCourses) ? data.topCourses.slice(0, 3) : []
  return courses.map((c, i) => {
    const label = ['Strongest match', 'Close second', 'Worth the trip'][i] || 'Recommended'
    const diff10 = num(c?.diff10)
    const diffLabel = diff10 === null ? '' : diff10 >= 9 ? `Hard · ${diff10}/10` : diff10 >= 7 ? `Testing · ${diff10}/10` : diff10 >= 5 ? `Fair · ${diff10}/10` : `Gentle · ${diff10}/10`
    return `<div style="margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid #EDE9E1;">
        <p style="margin:0 0 4px;font-family:'Jost',Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#B8973C;">${label}</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:19px;font-weight:400;color:#1A1916;">${str(c?.name)}</h3>
        <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:14px;line-height:1.6;color:#2C2A27;">${str(c?.bestFor, 300)}</p>
        <p style="margin:0 0 ${c?.membersOnly ? '10px' : '0'};font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8A7F74;">${str(c?.areaLabel, 80)} · ${diffLabel} · ${str(c?.greenFee, 80)}</p>
        ${c?.membersOnly ? `<p style="margin:0;padding:8px 12px;background:#f0f4ff;border-left:3px solid #4a6fa5;border-radius:0 4px 4px 0;font-family:'Jost',Arial,sans-serif;font-size:11px;color:#2a3f6f;line-height:1.5;">Members-only course. Andy arranges access for clients — mention it when you enquire.</p>` : ''}
      </div>`
  }).join('')
}

const BODY_BUILDERS = {
  'golf-day-builder': buildGolfDayBuilderBody,
  'hotel-recommender': buildHotelRecommenderBody,
  'golf-cost-calculator': buildGolfCostCalculatorBody,
  'course-selector': buildCourseSelectorBody,
}

function buildEmail(tool, bodyHtml) {
  const label = TOOL_LABELS[tool] || 'Your Mallorca golf plan'
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F4EF;font-family:Georgia,serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Who I am and why this might actually be useful.</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EF;padding:48px 24px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">
        <tr><td style="padding-bottom:24px;">
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#B8973C;">Mr Mallorca Golf</p>
        </td></tr>
        <tr><td style="background:#2D4A3E;border-radius:4px 4px 0 0;padding:32px 40px 24px;">
          <h1 style="margin:0;font-family:Georgia,serif;font-size:24px;font-weight:400;color:#F7F4EF;line-height:1.2;">${label}</h1>
          <p style="margin:12px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:rgba(247,244,239,0.7);">Built for you at mrmallorcagolf.com</p>
        </td></tr>
        <tr><td style="background:#fff;border-radius:0 0 4px 4px;padding:32px 40px 40px;">
          ${bodyHtml}
          <hr style="border:none;border-top:1px solid #EDE9E1;margin:32px 0;">
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Wanted to say hello properly too.</p>
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">I'm Andy. UK PGA Advanced Professional, based in Mallorca. I moved here from Shanghai in early 2025 after eleven years coaching there. I play the courses here most weeks and I know all 24 of them well: which ones are worth the green fee, which ones look better in photos than they play, and which ones most visitors miss entirely.</p>
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Everything I write comes from that. No tourism copy, no padding. Practical information from someone who actually plays here.</p>
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">If you have a question about courses, timing, what to budget, or whether to bring your own clubs, reply to this email. I read everything.</p>
          <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Ready to make this real? Reply to this email or message me on WhatsApp.</p>
          <p style="margin:24px 0 0;font-family:Georgia,serif;font-size:15px;line-height:1.45;color:#2C2A27;">Andy</p>
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;line-height:1.45;color:#8a8784;">UKPGA Advanced Professional</p>
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;line-height:1.45;color:#8a8784;">Mr Mallorca Golf</p>
          <table cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td>
                <a href="https://wa.me/34624466702" style="display:inline-block;padding:12px 20px;background:#2D4A3E;border-radius:3px;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#fff;text-decoration:none;">WhatsApp Andy</a>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:24px 0 0;text-align:center;">
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:11px;color:#aaa;">Mr Mallorca Golf · Mallorca, Spain</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 })
  }

  if (!isJsonRequest(request)) {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 })
  }

  // Larger cap than the other tools: this endpoint carries the built plan HTML.
  if (isPayloadTooLarge(request, 128 * 1024)) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
  }

  // Lower than the other tool endpoints: this one sends mail from andy@mrmallorcagolf.com
  // to a caller-supplied address, so it's the one most worth throttling hard.
  if (!await checkRateLimit(getClientKey(request, 'send-itinerary'), 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a few minutes and try again.' }, { status: 429 })
  }

  try {
    const { email, tool, subject, data, subscribeNewsletter } = await request.json()

    if (!email || !isValidEmail(email) || !tool || !data || typeof data !== 'object') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Restrict to known tools so this endpoint cannot be used to send arbitrary
    // branded email from andy@mrmallorcagolf.com to any address.
    const bodyBuilder = BODY_BUILDERS[tool]
    if (!TOOL_LABELS[tool] || !bodyBuilder) {
      return NextResponse.json({ error: 'Unknown tool' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // The email HTML is always rebuilt server-side from structured data (never
    // from a client-supplied HTML string), so every value is escaped before use.
    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Andy Griffiths <andy@mrmallorcagolf.com>',
      to: email,
      subject: sanitizeText(subject, 160) || TOOL_LABELS[tool],
      html: buildEmail(tool, bodyBuilder(data)),
    })

    // Optional newsletter opt-in via MailerLite
    if (subscribeNewsletter) {
      const mlToken = process.env.MAILERLITE_API_TOKEN
      const mlGroup = process.env.MAILERLITE_TOOLS_GROUP_ID
      if (mlToken && mlGroup) {
        await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${mlToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email,
            groups: [mlGroup],
            fields: { source: tool },
          }),
        }).catch(() => {})
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
