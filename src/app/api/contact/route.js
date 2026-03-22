import { Resend } from 'resend'

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { fname, lname, email, dates, handicap, groupsize, experience, message, lang } = await request.json()

    const experienceLabels = {
      'mallorca-round': 'The Mallorca Round',
      'signature-day': 'The Signature Day',
      'full-experience': 'The Full Experience',
      'not-sure': 'Not sure yet — advise me',
    }

    const experienceLabel = experienceLabels[experience] || experience || 'Not specified'

    await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      replyTo: email,
      subject: `New enquiry from ${fname} ${lname}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#2D4A3E;margin-bottom:24px">New enquiry — Mr Mallorca Golf</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;width:140px">Name</td><td style="padding:8px 0;border-bottom:1px solid #eee">${fname} ${lname}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Dates</td><td style="padding:8px 0;border-bottom:1px solid #eee">${dates || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Handicap</td><td style="padding:8px 0;border-bottom:1px solid #eee">${handicap || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Group size</td><td style="padding:8px 0;border-bottom:1px solid #eee">${groupsize || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Experience</td><td style="padding:8px 0;border-bottom:1px solid #eee">${experienceLabel}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Language</td><td style="padding:8px 0;border-bottom:1px solid #eee">${lang || 'EN'}</td></tr>
          </table>
          ${message ? `<div style="margin-top:24px"><p style="color:#666;margin-bottom:8px">Message:</p><p style="white-space:pre-wrap;background:#f7f4ef;padding:16px;border-radius:4px">${message}</p></div>` : ''}
          <p style="margin-top:32px;color:#999;font-size:12px">Reply directly to this email to respond to ${fname}.</p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
  }
}
