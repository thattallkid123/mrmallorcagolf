import { buildToolEmail, emailParagraph, emailSection, emailField } from '../_lib/tool-email'
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
  sanitizeMultilineText,
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
  if (Math.round(lo) === Math.round(hi)) return fmtEUR(lo)
  return `${fmtEUR(lo)} – ${fmtEUR(hi)}`
}

function buildGolfDayBuilderBody(data) {
  const itineraries = Array.isArray(data?.itineraries) ? data.itineraries.slice(0, 3) : []
  const brief = data?.answerSummary ? emailSection('Your golf day brief', emailParagraph(escapeHtml(sanitizeMultilineText(data.answerSummary, 1800)).replaceAll('\n', '<br>'))) : ''
  const arrival = itineraries[0]?.steps?.filter(step => step.kind === 'arrival') || []
  const arrivalHtml = arrival.length ? emailSection('Before you play', arrival.map(step => emailField(str(step?.title,120), str(step?.desc,800))).join('')) : ''
  return brief + itineraries.map((it, index) => emailSection(str(it?.name),
    emailField(str(it?.courseName), str(it?.tagline, 400)) +
    (it?.courseSummary ? emailParagraph(str(it.courseSummary, 800)) : '') +
    (it?.why ? emailParagraph(str(it.why, 600)) : '') +
    (Array.isArray(it?.steps) ? it.steps.slice(0, 10).filter(step => step.kind !== 'arrival') : []).map(step => emailField(str(step?.time, 80) + ': ' + str(step?.title, 120), str(step?.desc, 800))).join('') +
    (index === 0 || it?.note !== itineraries[0]?.note ? emailParagraph(str(it?.note, 800), 'font-size:13px;color:#6F665B;') : '')
  )).join('') + arrivalHtml
}

function buildHotelRecommenderBody(data) {
  const results = Array.isArray(data?.results) ? data.results.slice(0, 3) : []
  return (data?.answerSummary ? emailSection('Your hotel brief', emailParagraph(str(data.answerSummary, 1000))) : '') +
    results.map(x => emailSection(str(x?.name), emailParagraph(str(x?.subname)) + emailParagraph(str(x?.why, 800)) + emailField('Golf fit', str(x?.golf, 800)))).join('')
}

function buildGolfCostCalculatorBody(data) {
  const days = num(data?.days)
  const golfers = num(data?.golfers)
  const rounds = num(data?.rounds)
  const row = (label, val) =>
    `<tr><td style="padding:8px 0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#2C2A27;border-bottom:1px solid #EDE9E1;">${label}</td><td style="padding:8px 0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${val}</td></tr>`

  return `
      <p style="margin:0 0 20px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#2C2A27;">Here is your planning estimate for a ${days ?? ''}-day trip with ${golfers ?? ''} golfer${golfers > 1 ? 's' : ''}, ${rounds ?? ''} round${rounds > 1 ? 's' : ''} of golf.</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        ${row('Green fees', fmtRange(data?.greenFees))}
        ${row('Daily licences', fmtRange(data?.licences))}
        ${data?.buggy ? row('Buggy hire allowance', fmtRange(data?.buggyRange)) : ''}
        ${data?.clubs ? row('Club hire', fmtRange(data?.clubsRange)) : ''}
        ${data?.transport ? row('Transport allowance', fmtRange(data?.transportRange)) : ''}
        ${row('Dining allowance', fmtRange(data?.dining))}
        ${row('Accommodation allowance', fmtRange(data?.accommodation))}
      </table>
      <p style="margin:0 0 20px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#2C2A27;"><strong>Suggested courses</strong><br>${(Array.isArray(data?.courses) ? data.courses.slice(0, 20) : []).map(c => str(c, 120)).join(', ')}. Additional rounds repeat this mix.</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr><td bgcolor="#2D4A3E" style="background:#2D4A3E;padding:20px 24px;color:#F7F4EF;">
        <p style="margin:0 0 5px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#F7F4EF;">Estimate per golfer</p>
        <p style="margin:0 0 18px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:28px;line-height:1.3;color:#F7F4EF;">${fmtRange(data?.perGolfer)}</p>
        <p style="margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:14px;color:#F7F4EF;">Trip total for ${golfers ?? ''} golfer${golfers === 1 ? '' : 's'}: ${fmtRange(data?.total)}</p>
      </td></tr></table>
      <p style="margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:13px;line-height:1.65;color:#6F665B;">Hotels, dining and transport are planning allowances, not live quotes. Buggy hire uses the recorded standard rates and may cost less on some dates. ${str(data?.assumptions, 1400)} Exact prices, access and responsibilities are agreed before booking.</p>`
}

function buildCourseSelectorBody(data) {
  const courses = Array.isArray(data?.topCourses) ? data.topCourses.slice(0, 3) : []
  return courses.map((course, index) => {
    const difficulty = num(course?.diff10)
    return emailSection(str(course?.name),
      emailParagraph(['Strongest match', 'Close second', 'Worth considering'][index], 'font-weight:600;') +
      emailParagraph(str(course?.bestFor, 300)) +
      emailField('At a glance', [str(course?.areaLabel, 80), difficulty === null ? '' : 'Difficulty ' + difficulty + '/10', str(course?.greenFee, 120)].filter(Boolean).join(' · ')) +
      (course?.andy ? emailField("Andy's note", str(course.andy, 1000)) : '') +
      (course?.buggyNote ? emailField('Walking and buggies', str(course.buggyNote, 600)) : '') +
      (course?.accessRequirement ? emailField('Access', str(course.accessRequirement, 240)) : '') +
      (course?.membersOnly ? emailParagraph('Members-only course. Ask me about access before planning the rest of your rounds.') : '')
    )
  }).join('')
}

const BODY_BUILDERS = {
  'golf-day-builder': buildGolfDayBuilderBody,
  'hotel-recommender': buildHotelRecommenderBody,
  'golf-cost-calculator': buildGolfCostCalculatorBody,
  'course-selector': buildCourseSelectorBody,
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
    const { error } = await resend.emails.send({
      from: 'Andy Griffiths <andy@mrmallorcagolf.com>',
      to: email,
      subject: sanitizeText(subject, 160) || TOOL_LABELS[tool],
      html: buildToolEmail(TOOL_LABELS[tool], bodyBuilder(data)),
    })

    if (error) {
      console.error('[send-itinerary] Delivery failed:', error)
      return NextResponse.json({ error: 'Server error' }, { status: 502 })
    }

    // Optional newsletter opt-in via MailerLite
    if (subscribeNewsletter === true) {
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
