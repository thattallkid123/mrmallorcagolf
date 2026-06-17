import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { isAllowedOrigin, isJsonRequest } from '../../../lib/request-safety'

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: 'Origin not allowed.' }, { status: 403 })
  }

  if (!isJsonRequest(request)) {
    return NextResponse.json({ ok: false, error: 'Unsupported content type.' }, { status: 415 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: 'Email service not configured.' }, { status: 500 })
  }

  try {
    const payload = await request.json()
    const { email, estimate = {} } = payload

    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 })
    }

    // Build breakdown table HTML
    const breakdownHtml = (estimate.breakdown || [])
      .map(
        item => `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #EDE9E1;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#666;">${item.label || ''}</td>
            <td style="padding:10px 0;border-bottom:1px solid #EDE9E1;font-family:Georgia,serif;font-size:14px;font-weight:500;color:#2D4A3E;text-align:right;">${item.amount || '€0'}</td>
          </tr>
        `
      )
      .join('')

    const emailHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F4EF;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EF;padding:48px 24px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">
        <tr><td style="padding-bottom:24px;">
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#B8973C;">Mr Mallorca Golf</p>
        </td></tr>
        <tr><td style="background:#2D4A3E;border-radius:4px 4px 0 0;padding:32px 40px 24px;">
          <h1 style="margin:0;font-family:Georgia,serif;font-size:24px;font-weight:400;color:#F7F4EF;line-height:1.2;">Your Trip Cost Estimate</h1>
          <p style="margin:12px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:rgba(247,244,239,0.7);">Planning estimate for your Mallorca golf trip</p>
        </td></tr>
        <tr><td style="background:#fff;border-radius:0 0 4px 4px;padding:32px 40px 40px;">
          <p style="margin:0 0 20px;font-family:'Jost',Arial,sans-serif;font-size:13px;color:#666;line-height:1.6;">${estimate.summary || 'Here is your planning estimate for a Mallorca golf trip.'}</p>

          <div style="background:#F7F4EF;border-left:3px solid #B8973C;padding:20px;margin-bottom:24px;">
            <p style="margin:0 0 4px;font-family:'Jost',Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#B8973C;">Total Estimate</p>
            <p style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:500;color:#2D4A3E;">${estimate.total || '€0'}</p>
            <p style="margin:6px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#666;">${estimate.perGolfer || ''}</p>
          </div>

          <h3 style="margin:0 0 16px;font-family:Georgia,serif;font-size:16px;font-weight:500;color:#2D4A3E;">Cost Breakdown</h3>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            ${breakdownHtml}
          </table>

          <hr style="border:none;border-top:1px solid #EDE9E1;margin:32px 0;">
          <p style="margin:0 0 12px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">This is a planning estimate. Green fees, hotels, and dining prices vary by season. I'll confirm exact pricing and refine the plan around your group when you book.</p>
          <table cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td style="padding-right:8px;">
                <a href="https://wa.me/34624466702" style="display:inline-block;padding:12px 20px;background:#2D4A3E;border-radius:3px;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#fff;text-decoration:none;">WhatsApp</a>
              </td>
              <td>
                <a href="https://www.mrmallorcagolf.com/contact" style="display:inline-block;padding:12px 20px;border:1px solid #2D4A3E;border-radius:3px;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#2D4A3E;text-decoration:none;">Send a Message</a>
              </td>
            </tr>
          </table>
          <p style="margin:24px 0 4px;font-family:Georgia,serif;font-size:15px;color:#2C2A27;">Andy Griffiths</p>
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8a8784;">PGA Advanced Professional</p>
        </td></tr>
        <tr><td style="padding:24px 0 0;text-align:center;">
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:11px;color:#aaa;">Mr Mallorca Golf · Mallorca, Spain</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: email,
      subject: 'Your Mallorca Golf Trip Cost Estimate',
      html: emailHtml,
    })

    if (error) {
      console.error('[cost-estimate-email] Resend error:', error)
      return NextResponse.json({ ok: false, error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[cost-estimate-email] Error:', err)
    return NextResponse.json({ ok: false, error: 'Server error.' }, { status: 500 })
  }
}
