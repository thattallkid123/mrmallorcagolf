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
    const { email, itinerary = {} } = payload

    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 })
    }

    // Build itinerary timeline HTML
    const stepsHtml = (itinerary.steps || [])
      .map(
        step => `
          <div style="margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #EDE9E1;">
            <p style="margin:0 0 8px;font-family:'Jost',Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#B8973C;">${step.time || ''}</p>
            <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:15px;font-weight:500;color:#2D4A3E;">${step.title || ''}</p>
            <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:13px;color:#666;line-height:1.6;">${step.desc || ''}</p>
          </div>
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
          <h1 style="margin:0;font-family:Georgia,serif;font-size:24px;font-weight:400;color:#F7F4EF;line-height:1.2;">Your Golf Day Plan</h1>
          <p style="margin:12px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:rgba(247,244,239,0.7);">${itinerary.name || 'Your personalized itinerary'}</p>
        </td></tr>
        <tr><td style="background:#fff;border-radius:0 0 4px 4px;padding:32px 40px 40px;">
          <p style="margin:0 0 20px;font-family:'Jost',Arial,sans-serif;font-size:13px;color:#666;line-height:1.6;">${itinerary.tagline || 'A full day of golf in Mallorca, planned around your preferences.'}</p>

          <div style="background:#F7F4EF;padding:20px;border-left:3px solid #B8973C;margin-bottom:24px;">
            <p style="margin:0;font-family:Georgia,serif;font-size:14px;font-weight:500;color:#2D4A3E;">${itinerary.course?.name || 'Course'}</p>
            <p style="margin:6px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#666;">${itinerary.course?.blurb || ''}</p>
          </div>

          <h3 style="margin:0 0 16px;font-family:Georgia,serif;font-size:16px;font-weight:500;color:#2D4A3E;">Your Schedule</h3>
          ${stepsHtml}

          <hr style="border:none;border-top:1px solid #EDE9E1;margin:32px 0;">
          <p style="margin:0 0 12px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">This plan is a starting point. I can adjust the course, tee time, restaurants, and timing around your exact group when you book.</p>
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
      subject: 'Your Mallorca Golf Day Plan',
      html: emailHtml,
    })

    if (error) {
      console.error('[golf-day-email] Resend error:', error)
      return NextResponse.json({ ok: false, error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[golf-day-email] Error:', err)
    return NextResponse.json({ ok: false, error: 'Server error.' }, { status: 500 })
  }
}
