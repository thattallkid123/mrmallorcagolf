import { Resend } from 'resend'

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { summaryData } = await request.json()

    const name  = summaryData?.find(i => i.q === 'Name')?.a  || 'Guest'
    const email = summaryData?.find(i => i.q === 'Email')?.a || ''

    const rows = (summaryData || [])
      .filter(i => i.a && i.a !== '—')
      .map(i => `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;width:200px;vertical-align:top">${i.q}</td><td style="padding:8px 0;border-bottom:1px solid #eee">${i.a}</td></tr>`)
      .join('')

    await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      replyTo: email || undefined,
      subject: `Pre-round questionnaire from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:24px">
          <h2 style="color:#2D4A3E;margin-bottom:8px">Pre-Round Questionnaire</h2>
          <p style="color:#666;margin-bottom:24px">Submitted by ${name}${email ? ` &lt;<a href="mailto:${email}">${email}</a>&gt;` : ''}</p>
          <table style="width:100%;border-collapse:collapse">
            ${rows}
          </table>
          <p style="margin-top:32px;color:#999;font-size:12px">
            ${email ? `Reply directly to this email to respond to ${name}.` : 'No email address was provided.'}
          </p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Questionnaire Resend error:', err)
    return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
  }
}
