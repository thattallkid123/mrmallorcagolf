import { findCourseByName, getCourseDestination, getShortCourseId } from '../../../lib/golf-courses-helpers'
import { buildToolEmail, emailSection, emailParagraph, emailField } from '../_lib/tool-email'
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

// Stable, non-secret MailerLite group id for the Handicap Access Checker.
const MAILERLITE_HANDICAP_GROUP_ID = '192009044036159243'

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 })
  }

  if (!isJsonRequest(request)) {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 })
  }

  if (isPayloadTooLarge(request, 64 * 1024)) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
  }

  if (!await checkRateLimit(getClientKey(request, 'handicap-checker'), 10, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a few minutes and try again.' }, { status: 429 })
  }

  try {
    const payload = await request.json()

    if (payload?.website) {
      return NextResponse.json({ success: true })
    }

    const { email, handicap, gender, area, tier, recommendations, summary, accessResults } = payload

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Missing or invalid email' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const safeHandicap = escapeHtml(sanitizeText(String(handicap ?? ''), 40))
    const safeArea = escapeHtml(sanitizeText(area, 80))
    const recs = (Array.isArray(recommendations) ? recommendations : [])
      .map((r) => escapeHtml(sanitizeText(String(r), 120)))
      .filter(Boolean)
    const rows = (Array.isArray(summary) ? summary : [])
      .map((line) => escapeHtml(sanitizeText(String(line), 200)))
      .filter(Boolean)

    const recHtml = recs.length
      ? emailSection("Andy's picks for you", emailParagraph(recs.map(name => { const course = findCourseByName(name); const href = course && (getCourseDestination(name) || (course.reviewSlug ? '/guides/' + course.reviewSlug : '/golf-courses#' + getShortCourseId(course.name))); return href ? '<a href="https://www.mrmallorcagolf.com'+escapeHtml(href)+'" style="color:#2D4A3E;text-decoration:underline;">'+name+'</a>' : name }).join(', ') + '.'))
      : ''

    const entries = Array.isArray(accessResults) ? accessResults.slice(0, 24).map(item => ({
      name: escapeHtml(sanitizeText(item?.name, 120)),
      status: ['ok','warn','info','no'].includes(item?.status) ? item.status : 'info',
      label: escapeHtml(sanitizeText(item?.label, 160)),
      detail: escapeHtml(sanitizeText(item?.detail, 600)),
    })).filter(item => item.name) : []
    const groups = [
      ['ok', 'Can be booked'], ['warn', 'Check access with me'],
      ['info', 'Certificate or access check needed'], ['no', 'Restricted access'],
    ]
    const listHtml = entries.length ? groups.map(([status, title]) => {
      let items = entries.filter(item => item.status === status)
      const santa2 = items.find(item => item.name === 'Santa Ponsa 2')
      const santa3 = items.find(item => item.name === 'Santa Ponsa 3')
      if (status !== 'ok' && santa2 && santa3 && santa2.label === santa3.label && santa2.detail === santa3.detail) {
        items = items.filter(item => item !== santa3).map(item => item === santa2 ? {...item, name:'Santa Ponsa 2 and 3'} : item)
      }
      if (!items.length) return ''
      return emailSection(title, status === 'ok'
        ? emailParagraph(items.map(item => item.name).join(', ') + '.')
        : items.map(item => emailField(item.name, item.label + (item.detail ? '. ' + item.detail : ''))).join(''))
    }).join('') : `<p style="font-family:Jost,Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#2C2A27;">${rows.map(line => line.replace(/: You can book$/, '')).join('<br/>')}</p>`

    const bodyHtml = `
      <p style="margin:0 0 16px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#2C2A27;">Here's your Mallorca course access list${safeHandicap && safeHandicap !== 'none' ? ` playing off <strong>${safeHandicap}</strong>` : ''}${safeArea ? `, based around ${safeArea}` : ''}.</p>
      <p style="font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#2C2A27;">I can check the available rates, recommend tee times that fit your trip and handle the bookings for you.</p>
      ${recHtml}
      ${listHtml}
      <p style="margin:0 0 20px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#2C2A27;">If you’re just over a published handicap limit, ask me. I can enquire with the club before you choose the rest of the rounds. Access remains the club’s decision.</p>
      <p style="margin:0 0 24px;"><a href="https://www.mrmallorcagolf.com/contact" style="display:inline-block;background:#B8973C;color:#1A1916;text-decoration:none;font-family:Jost,Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.06em;text-transform:uppercase;padding:12px 24px;border-radius:3px;">Plan your trip with me</a></p>
      <p style="margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:12px;color:#8a8784;line-height:1.6;">The club sets its handicap and certificate rules. I confirm access and any daily licence charge before booking.</p>
    `

    const resend = new Resend(resendKey)
    const { error } = await resend.emails.send({
      from: 'Andy at Mr Mallorca Golf <andy@mrmallorcagolf.com>',
      to: email,
      replyTo: 'andy@mrmallorcagolf.com',
      subject: 'Your Mallorca course access list',
      html: buildToolEmail('Your Mallorca course access list', bodyHtml, { includeIntroduction:false }),
    })

    if (error) {
      console.error('[handicap-checker-submit] Delivery failed:', error)
      return NextResponse.json({ error: 'Server error' }, { status: 502 })
    }

    // Add to MailerLite (non-blocking) for the Handicap Access Checker nurture group.
    const mlToken = process.env.MAILERLITE_API_TOKEN
    if (payload.subscribeNewsletter === true && mlToken) {
      fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${mlToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          groups: [MAILERLITE_HANDICAP_GROUP_ID],
          fields: {
            hcp_checker_handicap: sanitizeText(handicap, 40),
            hcp_checker_summary: (Array.isArray(summary) ? summary : []).join('; ').slice(0, 950),
          },
        }),
      }).catch(() => {})
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[handicap-checker-submit]', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
