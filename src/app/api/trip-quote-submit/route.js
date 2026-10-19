import { requestPlanningNotes } from '../../../lib/planning-notes-signup'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createPreferencesLink } from '../../../lib/enquiry-context.js'

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

  if (!await checkRateLimit(getClientKey(request, 'trip-quote'), 10, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a few minutes and try again.' }, { status: 429 })
  }

  try {
    const payload = await request.json()

    if (payload?.website) {
      return NextResponse.json({ success: true })
    }

    const { email, golfers, days, rounds, budget, courses, estimate, perGolfer, dates, notes, planningDetails, lang } = payload

    if (!email || !isValidEmail(email) || !golfers) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const safeEmail = escapeHtml(sanitizeText(email, 160))
    const safeGolfers = escapeHtml(sanitizeText(String(golfers), 40))
    const safeDays = escapeHtml(sanitizeText(String(days), 40))
    const safeRounds = escapeHtml(sanitizeText(String(rounds), 40))
    const safeBudget = escapeHtml(sanitizeText(budget, 80))
    const safeCourses = escapeHtml(sanitizeText(courses, 400))
    const safeEstimate = escapeHtml(sanitizeText(estimate, 60))
    const safePerGolfer = escapeHtml(sanitizeText(perGolfer, 60))
    const safeDates = escapeHtml(sanitizeText(dates, 120))
    const safeNotes = escapeHtml(sanitizeMultilineText(notes, 2000))
    const details = sanitizeMultilineText(planningDetails, 2000)
    const { enquiryRef, preferencesUrl } = createPreferencesLink({
      name: '', email, dates: sanitizeText(dates, 120), groupsize: sanitizeText(String(golfers), 40),
      courses: sanitizeText(courses, 400), service: 'Trip cost estimate enquiry',
      message: [`${sanitizeText(String(days), 40)} days; ${sanitizeText(String(rounds), 40)} rounds; ${sanitizeText(budget, 80)}. Planning estimate: ${sanitizeText(estimate, 60)} total, ${sanitizeText(perGolfer, 60)} per golfer.`, sanitizeMultilineText(notes, 2000), details].filter(Boolean).join('\n\n'),
    }, sanitizeText(lang, 10))

    // Build email to Andy with structured lead
    const bodyHtml = `
      <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;"><strong>New trip quote request from the cost calculator.</strong></p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Client email</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Preferred dates</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${safeDates || 'Not given'}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Golfers</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${safeGolfers}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Trip length</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${safeDays} days</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Rounds</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${safeRounds}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Budget style</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${safeBudget}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Suggested courses</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${safeCourses}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Estimated total</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;"><strong>${safeEstimate}</strong> (${safePerGolfer} per golfer)</td></tr>
      </table>

      ${safeNotes ? `<p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;"><strong>Anything else about the trip:</strong></p>
      <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;white-space:pre-wrap;">${safeNotes}</p>` : ''}

      <p><strong>Planning choices:</strong><br/>${escapeHtml(details).replaceAll('\n', '<br/>')}</p>
      <p><strong>Enquiry reference:</strong> ${enquiryRef}</p>
      <p>After reviewing the enquiry, you can send this <a href="${escapeHtml(preferencesUrl)}">personal trip preferences link</a> before your call. It loads the original request for 30 days. Keep the link private.</p>
      <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8a8784;">From: Mallorca Golf Trip Cost Calculator</p>
    `

    if (payload.subscribeNewsletter === true) await requestPlanningNotes(email, 'trip-quote')

    const resend = new Resend(resendKey)
    const sent = await resend.emails.send({
      from: 'Trip Quote Builder <quotes@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      replyTo: email,
      subject: `Trip quote request — ${sanitizeText(String(golfers), 40)} golfer${golfers > 1 ? 's' : ''}, ${sanitizeText(String(rounds), 40)} round${rounds > 1 ? 's' : ''} (${sanitizeText(budget, 80)})`,
      html: bodyHtml,
    })

    if (sent.error) throw new Error('Quote email delivery failed')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[trip-quote-submit]', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
