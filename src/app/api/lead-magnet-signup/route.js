import { requestPlanningNotes } from '../../../lib/planning-notes-signup'
import { buildToolEmail, emailParagraph } from '../_lib/tool-email'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { LEAD_MAGNET_GROUPS, PDF_REQUEST_GROUPS, PDF_REQUEST_LEADS_GROUP_ID } from '../../../lib/signup-config'
import {
  checkRateLimit,
  getClientKey,
  isAllowedOrigin,
  isJsonRequest,
  isPayloadTooLarge,
  isValidEmail,
  escapeHtml,
} from '../../../lib/request-safety'

const DELIVERY_EMAILS = {
  'cost-guide': {
    subject: 'Your Mallorca golf cost breakdown is ready',
    guideName: 'Mallorca Golf Cost Breakdown 2026',
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/cost-guide.pdf',
  },
  'trip-planner': {
    subject: 'Your 7-day Mallorca golf itinerary is ready',
    guideName: '7-Day Mallorca Golf Itinerary',
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/trip-planner.pdf',
  },
  'beginners-guide': {
    subject: "Your beginner's guide to golf in Mallorca is ready",
    guideName: "Beginner's Guide to Golf in Mallorca",
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/beginners-guide.pdf',
  },
  'course-comparison': {
    subject: 'Your Mallorca golf course comparison chart is ready',
    guideName: 'Mallorca Golf Course Comparison Chart',
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/course-comparison.pdf',
  },
}

function buildDeliveryEmail(guideName, downloadUrl) {
  return buildToolEmail(guideName, emailParagraph('Here is your ' + guideName + '. You can keep the PDF and use it while planning your trip.') + '<p style="margin:24px 0;"><a href="'+downloadUrl+'" style="display:inline-block;padding:12px 20px;background:#2D4A3E;color:#FFFFFF;text-decoration:none;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;font-weight:500;letter-spacing:0.02em;border-radius:3px;">Download PDF</a></p>')
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

    if (!Object.hasOwn(LEAD_MAGNET_GROUPS, guide)) {
      return NextResponse.json({ error: 'Unknown guide' }, { status: 400 })
    }

    const apiToken = process.env.MAILERLITE_API_TOKEN
    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey || !apiToken) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // Preserve existing subscriptions and unsubscribes. New PDF-only contacts
    // are unconfirmed, so the request record cannot become a marketing opt-in.
    const mlHeaders = { Authorization: `Bearer ${apiToken}`, 'Content-Type': 'application/json', Accept: 'application/json' }
    const existing = await fetch(`https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}`, { headers: mlHeaders })
    if (!existing.ok && existing.status !== 404) {
      console.error('[lead-magnet-signup] Lead lookup failed:', existing.status)
      return NextResponse.json({ error: 'Please try again.' }, { status: 502 })
    }
    const leadResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST', headers: mlHeaders,
      body: JSON.stringify({
        email,
        groups: [PDF_REQUEST_LEADS_GROUP_ID, PDF_REQUEST_GROUPS[guide]],
        ...(existing.status === 404 ? { status: 'unconfirmed' } : {}),
      }),
    })
    if (!leadResponse.ok) {
      console.error('[lead-magnet-signup] Lead capture failed:', leadResponse.status)
      return NextResponse.json({ error: 'Please try again.' }, { status: 502 })
    }

    // Only the unchecked, optional planning-notes box starts double opt-in.
    if (subscribeNewsletter === true) await requestPlanningNotes(email, guide)

    // Send instant delivery email via Resend
    const delivery = DELIVERY_EMAILS[guide]
    if (delivery) {
      const resend = new Resend(resendKey)
      const { error } = await resend.emails.send({
        from: 'Andy Griffiths <andy@mrmallorcagolf.com>',
        to: email,
        subject: delivery.subject,
        html: buildDeliveryEmail(delivery.guideName, delivery.downloadUrl),
      })
      if (error) {
        console.error('[lead-magnet-signup] Delivery failed:', error)
        return NextResponse.json({ error: 'Server error' }, { status: 502 })
      }

      // Set PDF_REQUEST_NOTIFICATIONS_ENABLED=false in Vercel to silence
      // owner notifications while keeping lead capture and PDF delivery.
      if (process.env.PDF_REQUEST_NOTIFICATIONS_ENABLED !== 'false') {
        try {
          const { error: notificationError } = await resend.emails.send({
            from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
            to: 'andy@mrmallorcagolf.com',
            replyTo: email,
            subject: `PDF guide request: ${delivery.guideName}`,
            text: `Email: ${email}\nGuide: ${delivery.guideName}\nPlanning emails opted in: ${subscribeNewsletter === true ? 'Yes' : 'No'}\n\nSaved to the PDF requests lead list in MailerLite.\nhttps://dashboard.mailerlite.com/groups/${PDF_REQUEST_LEADS_GROUP_ID}`,
            html: `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#2C2A27;"><h2>PDF guide request</h2><p><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Guide:</strong> ${escapeHtml(delivery.guideName)}<br><strong>Planning emails opted in:</strong> ${subscribeNewsletter === true ? 'Yes' : 'No'}</p><p>Saved to the <a href="https://dashboard.mailerlite.com/groups/${PDF_REQUEST_LEADS_GROUP_ID}">PDF requests lead list in MailerLite</a>.</p></div>`,
          })
          if (notificationError) console.error('[lead-magnet-signup] Owner notification failed')
        } catch {
          console.error('[lead-magnet-signup] Owner notification failed')
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
