import { Resend } from 'resend'

import {
  checkRateLimit,
  escapeHtml,
  getClientKey,
  isValidEmail,
  sanitizeMultilineText,
  sanitizeText,
} from '../../../lib/request-safety'
import { getExperienceLabel, OFFER_IDS } from '../../../lib/offers-content.js'

const EXPERIENCE_LABELS = {
  [OFFER_IDS.solo]: getExperienceLabel(OFFER_IDS.solo),
  [OFFER_IDS.group]: getExperienceLabel(OFFER_IDS.group),
  [OFFER_IDS.premium]: getExperienceLabel(OFFER_IDS.premium),
  [OFFER_IDS.undecided]: getExperienceLabel(OFFER_IDS.undecided),
}

function renderRow(label, value) {
  return `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;width:140px">${escapeHtml(label)}</td><td style="padding:8px 0;border-bottom:1px solid #eee">${escapeHtml(value)}</td></tr>`
}

export async function POST(request) {
  if (!checkRateLimit(getClientKey(request, 'contact'), 12, 10 * 60 * 1000)) {
    return Response.json(
      { ok: false, error: 'Too many enquiries from this connection. Please wait a few minutes and try again.' },
      { status: 429 },
    )
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ ok: false, error: 'Email service is not configured.' }, { status: 500 })
  }

  try {
    const payload = await request.json()

    if (payload?.website) {
      return Response.json({ ok: true })
    }

    const fname = sanitizeText(payload?.fname, 80)
    const lname = sanitizeText(payload?.lname, 80)
    const email = sanitizeText(payload?.email, 160).toLowerCase()
    const dates = sanitizeText(payload?.dates, 120)
    const handicap = sanitizeText(payload?.handicap, 120)
    const groupsize = sanitizeText(payload?.groupsize, 120)
    const experience = sanitizeText(payload?.experience, 80)
    const message = sanitizeMultilineText(payload?.message, 4000)
    const lang = sanitizeText(payload?.lang, 12).toUpperCase() || 'EN'

    if (!fname || !lname || !isValidEmail(email)) {
      return Response.json(
        { ok: false, error: 'Please provide your first name, last name, and a valid email address.' },
        { status: 400 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const experienceLabel = EXPERIENCE_LABELS[experience] || experience || 'Not specified'
    const fullName = `${fname} ${lname}`.trim()
    const safeEmail = escapeHtml(email)

    const { error } = await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      replyTo: email,
      subject: `New enquiry from ${fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#2D4A3E;margin-bottom:24px">New enquiry - Mr Mallorca Golf</h2>
          <table style="width:100%;border-collapse:collapse">
            ${renderRow('Name', fullName)}
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            ${renderRow('Dates', dates || 'Not specified')}
            ${renderRow('Handicap', handicap || 'Not specified')}
            ${renderRow('Group size', groupsize || 'Not specified')}
            ${renderRow('Experience', experienceLabel)}
            ${renderRow('Language', lang)}
          </table>
          ${message ? `<div style="margin-top:24px"><p style="color:#666;margin-bottom:8px">Message:</p><p style="white-space:pre-wrap;background:#f7f4ef;padding:16px;border-radius:4px">${escapeHtml(message)}</p></div>` : ''}
          <p style="margin-top:32px;color:#999;font-size:12px">Reply directly to this email to respond to ${escapeHtml(fname)}.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend contact error:', error)
      return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
  }
}
