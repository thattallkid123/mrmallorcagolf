import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { LEAD_MAGNET_GROUPS, LEAD_MAGNETS } from '../../../lib/signup-config'
import {
  checkRateLimit,
  getClientKey,
  isAllowedOrigin,
  isJsonRequest,
  isPayloadTooLarge,
  isValidEmail,
} from '../../../lib/request-safety'

const DELIVERY_EMAILS = {
  'cost-guide': {
    subject: 'Your Mallorca golf cost breakdown is ready',
    guideName: 'Mallorca Golf Cost Breakdown 2026',
    downloadUrl: 'https://mrmallorcagolf.com/downloads/cost-guide.pdf',
  },
  'trip-planner': {
    subject: 'Your 7-day Mallorca golf itinerary is ready',
    guideName: '7-Day Mallorca Golf Itinerary',
    downloadUrl: 'https://mrmallorcagolf.com/downloads/trip-planner.pdf',
  },
  'beginners-guide': {
    subject: "Your beginner's guide to golf in Mallorca is ready",
    guideName: "Beginner's Guide to Golf in Mallorca",
    downloadUrl: 'https://mrmallorcagolf.com/downloads/beginners-guide.pdf',
  },
  'course-comparison': {
    subject: 'Your Mallorca golf course comparison chart is ready',
    guideName: 'Mallorca Golf Course Comparison Chart',
    downloadUrl: 'https://mrmallorcagolf.com/downloads/course-comparison.pdf',
  },
}

function buildDeliveryEmail(guideName, downloadUrl) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F4EF;font-family:Georgia,serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Who I am and why this might actually be useful.</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EF;padding:48px 24px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
        <tr><td style="padding-bottom:32px;">
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#B8973C;">Mr Mallorca Golf</p>
        </td></tr>
        <tr><td style="background:#fff;border-radius:4px;padding:40px 40px 32px;">
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Hi,</p>
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Here is your ${guideName}. Click the link below to download it.</p>
          <table cellpadding="0" cellspacing="0" style="margin:28px 0;">
            <tr><td style="background:#2D4A3E;border-radius:3px;">
              <a href="${downloadUrl}" style="display:inline-block;padding:14px 28px;font-family:'Jost',Arial,sans-serif;font-size:12px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:#fff;text-decoration:none;">Download PDF</a>
            </td></tr>
          </table>
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Wanted to say hello properly too.</p>
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">I'm Andy. UK PGA Advanced Professional, based in Mallorca. I moved here from Shanghai in early 2025 after eleven years coaching there. I play the courses here most weeks and I know all 24 of them well: which ones are worth the green fee, which ones look better in photos than they play, and which ones most visitors miss entirely.</p>
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Everything I write comes from that. No tourism copy, no padding. Practical information from someone who actually plays here.</p>
          <p style="margin:0 0 24px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">If you have a question about courses, timing, what to budget, or whether to bring your own clubs, reply to this email. I read everything.</p>
          <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.45;color:#2C2A27;">Andy</p>
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;line-height:1.45;color:#8a8784;">UKPGA Advanced Professional</p>
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;line-height:1.45;color:#8a8784;">Mr Mallorca Golf</p>
        </td></tr>
        <tr><td style="padding:24px 0 0;text-align:center;">
          <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:11px;color:#aaa;">Mr Mallorca Golf, Mallorca, Spain</p>
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

  if (isPayloadTooLarge(request, 16 * 1024)) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
  }

  if (!await checkRateLimit(getClientKey(request, 'lead-magnet'), 10, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a few minutes and try again.' }, { status: 429 })
  }

  try {
    const { email, guide, subscribeNewsletter, website } = await request.json()

    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!email || !isValidEmail(email) || !guide) {
      return NextResponse.json({ error: 'Missing or invalid email or guide' }, { status: 400 })
    }

    const groupId = LEAD_MAGNET_GROUPS[guide]
    if (!groupId) {
      return NextResponse.json({ error: 'Unknown guide' }, { status: 400 })
    }

    const apiToken = process.env.MAILERLITE_API_TOKEN
    const resendKey = process.env.RESEND_API_KEY
    if (!apiToken || !resendKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // Add to MailerLite group (for the nurture sequence)
    const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        groups: [groupId],
        fields: { source: guide },
      }),
    })

    const mlData = await mlResponse.json()
    if (!mlResponse.ok && mlResponse.status !== 200 && mlResponse.status !== 201) {
      const message = mlData?.message || 'Subscription failed'
      return NextResponse.json({ error: message }, { status: mlResponse.status })
    }

    // Optional newsletter/planning-notes opt-in
    if (subscribeNewsletter) {
      const newsletterGroupId = process.env.MAILERLITE_TOOLS_GROUP_ID
      if (newsletterGroupId) {
        await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email,
            groups: [newsletterGroupId],
            fields: { source: `${guide}-planning-notes` },
          }),
        }).catch(() => {})
      }
    }

    // Send instant delivery email via Resend
    const delivery = DELIVERY_EMAILS[guide]
    if (delivery) {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'Andy Griffiths <andy@mrmallorcagolf.com>',
        to: email,
        subject: delivery.subject,
        html: buildDeliveryEmail(delivery.guideName, delivery.downloadUrl),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
