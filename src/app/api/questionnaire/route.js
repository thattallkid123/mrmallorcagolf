import { Resend } from 'resend'

import {
  checkRateLimit,
  escapeHtml,
  getClientKey,
  isValidEmail,
  sanitizeMultilineText,
  sanitizeText,
} from '../../../lib/request-safety'

export async function POST(request) {
  if (!checkRateLimit(getClientKey(request, 'questionnaire'), 5)) {
    return Response.json(
      { ok: false, error: 'Too many submissions from this connection. Please try again shortly.' },
      { status: 429 },
    )
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ ok: false, error: 'Email service is not configured.' }, { status: 500 })
  }

  try {
    const { summaryData } = await request.json()
    const safeSummary = Array.isArray(summaryData) ? summaryData : []

    const name = sanitizeText(safeSummary.find((item) => item.q === 'Name')?.a, 120) || 'Guest'
    const email = sanitizeText(safeSummary.find((item) => item.q === 'Email')?.a, 160).toLowerCase()

    const rows = safeSummary
      .map((item) => ({
        question: sanitizeText(item?.q, 200),
        answer: sanitizeMultilineText(item?.a, 1000),
      }))
      .filter((item) => item.answer && item.answer !== '-')
      .map(
        (item) =>
          `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;width:200px;vertical-align:top">${escapeHtml(item.question)}</td><td style="padding:8px 0;border-bottom:1px solid #eee">${escapeHtml(item.answer)}</td></tr>`,
      )
      .join('')

    const resend = new Resend(process.env.RESEND_API_KEY)
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const canReply = isValidEmail(email)

    const { error } = await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      replyTo: canReply ? email : undefined,
      subject: `Pre-round questionnaire from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:24px">
          <h2 style="color:#2D4A3E;margin-bottom:8px">Pre-Round Questionnaire</h2>
          <p style="color:#666;margin-bottom:24px">Submitted by ${safeName}${canReply ? ` &lt;<a href="mailto:${safeEmail}">${safeEmail}</a>&gt;` : ''}</p>
          <table style="width:100%;border-collapse:collapse">
            ${rows}
          </table>
          <p style="margin-top:32px;color:#999;font-size:12px">
            ${canReply ? `Reply directly to this email to respond to ${safeName}.` : 'No valid email address was provided.'}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend questionnaire error:', error)
      return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Questionnaire Resend error:', err)
    return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
  }
}
