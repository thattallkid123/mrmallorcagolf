import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TOOL_LABELS = {
  'golf-day-builder':   'Your Mallorca golf day plan',
  'course-selector':    'Your Mallorca course recommendations',
  'hotel-recommender':  'Your Mallorca hotel recommendations',
  'golf-cost-calculator': 'Your Mallorca golf trip cost estimate',
}

function buildEmail(tool, bodyHtml) {
  const label = TOOL_LABELS[tool] || 'Your Mallorca golf plan'
  return `<!DOCTYPE html>
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
          <h1 style="margin:0;font-family:Georgia,serif;font-size:24px;font-weight:400;color:#F7F4EF;line-height:1.2;">${label}</h1>
          <p style="margin:12px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:rgba(247,244,239,0.7);">Built for you at mrmallorcagolf.com</p>
        </td></tr>
        <tr><td style="background:#fff;border-radius:0 0 4px 4px;padding:32px 40px 40px;">
          ${bodyHtml}
          <hr style="border:none;border-top:1px solid #EDE9E1;margin:32px 0;">
          <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Ready to make this real? Reply to this email or message me on WhatsApp and I will build it around your group.</p>
          <p style="margin:20px 0 4px;font-family:Georgia,serif;font-size:15px;color:#2C2A27;">Andy</p>
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8a8784;">PGA Advanced Professional, Mr Mallorca Golf</p>
          <table cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td style="padding-right:8px;">
                <a href="https://wa.me/34611931088" style="display:inline-block;padding:12px 20px;background:#2D4A3E;border-radius:3px;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#fff;text-decoration:none;">WhatsApp Andy</a>
              </td>
              <td>
                <a href="https://www.mrmallorcagolf.com/contact" style="display:inline-block;padding:12px 20px;border:1px solid #2D4A3E;border-radius:3px;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#2D4A3E;text-decoration:none;">Send a message</a>
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
  try {
    const { email, tool, subject, bodyHtml, subscribeNewsletter } = await request.json()

    if (!email || !tool || !bodyHtml) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Andy Griffiths <andy@mrmallorcagolf.com>',
      to: email,
      subject: subject || TOOL_LABELS[tool] || 'Your Mallorca golf plan',
      html: buildEmail(tool, bodyHtml),
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
