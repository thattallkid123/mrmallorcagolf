import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
  try {
    const { email, golfers, days, rounds, budget, courses, estimate, perGolfer, dates, notes } = await request.json()

    if (!email || !golfers) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // Build email to Andy with structured lead
    const bodyHtml = `
      <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;"><strong>New trip quote request from the cost calculator.</strong></p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Client email</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Preferred dates</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${dates || 'Not given'}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Golfers</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${golfers}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Trip length</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${days} days</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Rounds</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${rounds}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Budget style</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${budget}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Suggested courses</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${courses}</td></tr>
        <tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">Estimated total</td><td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;"><strong>${estimate}</strong> (${perGolfer} per golfer)</td></tr>
      </table>

      ${notes ? `<p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;"><strong>Anything else about the trip:</strong></p>
      <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#2C2A27;">${notes}</p>` : ''}

      <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8a8784;">From: Mallorca Golf Trip Cost Calculator</p>
    `

    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Trip Quote Builder <quotes@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      subject: `Trip quote request — ${golfers} golfer${golfers > 1 ? 's' : ''}, ${rounds} round${rounds > 1 ? 's' : ''} (${budget})`,
      html: bodyHtml,
    })

    // Optional: add to MailerLite if configured (doesn't block the response)
    const mlToken = process.env.MAILERLITE_API_TOKEN
    const mlGroup = process.env.MAILERLITE_QUOTE_BUILDER_GROUP_ID
    if (mlToken && mlGroup) {
      fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${mlToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          groups: [mlGroup],
          fields: {
            golfers: String(golfers),
            trip_days: String(days),
            rounds: String(rounds),
            budget_style: budget,
            suggested_courses: courses,
            estimated_total: estimate,
            preferred_dates: dates || '',
            trip_notes: notes || '',
          },
        }),
      }).catch(() => {})
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[trip-quote-submit]', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
