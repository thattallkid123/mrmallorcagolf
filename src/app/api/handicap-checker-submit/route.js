import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Stable, non-secret MailerLite group id for the Handicap Access Checker.
const MAILERLITE_HANDICAP_GROUP_ID = '192009044036159243'

export async function POST(request) {
  try {
    const { email, handicap, gender, area, tier, recommendations, summary } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Missing or invalid email' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const recs = Array.isArray(recommendations) ? recommendations : []
    const rows = Array.isArray(summary) ? summary : []

    const recHtml = recs.length
      ? `<p style="margin:0 0 8px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;"><strong>Andy's pick for you:</strong> ${recs.join(', ')}.</p>`
      : ''

    const listHtml = rows
      .map((line) => `<tr><td style="padding:7px 0;font-family:Georgia,serif;font-size:14px;color:#1A1916;border-bottom:1px solid #EDE9E1;">${line}</td></tr>`)
      .join('')

    const bodyHtml = `
      <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:16px;line-height:1.7;color:#2C2A27;">Here's your Mallorca course access list${handicap && handicap !== 'none' ? ` playing off <strong>${handicap}</strong>` : ''}${area ? `, based around ${area}` : ''}.</p>
      ${recHtml}
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0 24px;">${listHtml}</table>
      <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">Handicap limits in Mallorca are sometimes more flexible than the published numbers, especially midweek and outside peak season. If you're a few shots over a limit I'm happy to enquire on your behalf — I can't promise it, as access is always the club's call. Tell me your dates and group and I'll build the round order and tee times around your golf.</p>
      <p style="margin:0 0 24px;"><a href="https://www.mrmallorcagolf.com/contact" style="display:inline-block;background:#B8973C;color:#fff;text-decoration:none;font-family:'Jost',Arial,sans-serif;font-size:13px;letter-spacing:0.06em;text-transform:uppercase;padding:12px 24px;border-radius:3px;">Plan my trip with Andy</a></p>
      <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8a8784;line-height:1.6;">Handicap and certificate rules are set by each club and can change without notice — always confirmed at booking. A daily Spanish Golf Federation licence (&euro;3) applies at most member clubs for non-federated visitors.</p>
    `

    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Andy at Mr Mallorca Golf <andy@mrmallorcagolf.com>',
      to: email,
      replyTo: 'andy@mrmallorcagolf.com',
      subject: 'Your Mallorca course access list',
      html: bodyHtml,
    })

    // Add to MailerLite (non-blocking) for the Handicap Access Checker nurture group.
    const mlToken = process.env.MAILERLITE_API_TOKEN
    if (mlToken) {
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
            hcp_checker_handicap: String(handicap ?? ''),
            hcp_checker_summary: rows.join('; ').slice(0, 950),
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
