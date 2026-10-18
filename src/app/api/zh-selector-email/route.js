import { buildToolEmail, emailParagraph, emailField } from '../_lib/tool-email'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import {
  checkRateLimit,
  escapeHtml,
  getClientKey,
  isAllowedOrigin,
  isJsonRequest,
  isPayloadTooLarge,
  isValidEmail,
  sanitizeText,
} from '../../../lib/request-safety'

// Keeps its own handler to send a Chinese email with the zh WhatsApp number
// (+34624466702) rather than the English wrapper. Guarded the same way as the
// other tool endpoints (origin lock + rate limit).
export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: 'Origin not allowed.' }, { status: 403 })
  }

  if (!isJsonRequest(request)) {
    return NextResponse.json({ ok: false, error: 'Unsupported content type.' }, { status: 415 })
  }

  if (isPayloadTooLarge(request, 64 * 1024)) {
    return NextResponse.json({ ok: false, error: 'Payload too large.' }, { status: 413 })
  }

  if (!await checkRateLimit(getClientKey(request, 'zh-selector'), 10, 10 * 60 * 1000)) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please wait a few minutes and try again.' }, { status: 429 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: 'Email service not configured.' }, { status: 500 })
  }

  try {
    const payload = await request.json()

    if (payload?.website) {
      return NextResponse.json({ ok: true })
    }

    const { email, courses = [] } = payload

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 })
    }

    // Build course list HTML (escape user-supplied labels)
    const courseListHtml = (Array.isArray(courses) ? courses : [])
      .slice(0, 12)
      .map((c) => {
        const en = escapeHtml(sanitizeText(c?.en, 120))
        const zh = escapeHtml(sanitizeText(c?.zh, 120))
        return `
          <div style="margin-bottom:20px;border-left:3px solid #B8973C;padding-left:16px;">
            <p style="margin:0 0 4px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:18px;font-weight:500;color:#2D4A3E;">${en}</p>
            <p style="margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#2C2A27;">${zh}</p>
          </div>
        `
      })
      .join('')

    const emailHtml = buildToolEmail('您的球场推荐', emailParagraph('感谢您使用球场选择器。根据您的球技水平、预算和偏好，以下是最适合您这次行程的3座球场：') + courseListHtml + emailParagraph("请告知您偏好的球场与出行日期。高尔夫的预订由我为您确认并安排，行程中的其他部分，我也可以为您提供规划上的建议。相关细节我们可以用中文沟通，欢迎微信联系。"), {includeIntroduction:false, lang:'zh', footerLabel:'Mr Mallorca Golf · 马略卡高尔夫 · 西班牙', subtitle:'根据您的选择精心推荐', footerHtml:'<div style="margin-top:24px;">'+emailParagraph('Andy 教练<br>PGA 高级职业教练')+'<a href="https://www.mrmallorcagolf.com/zh/contact#wechat" style="display:inline-block;padding:12px 20px;background:#2D4A3E;color:#FFFFFF;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;text-decoration:none;">微信联系</a></div>'})

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: email,
      subject: '您的马略卡球场推荐 · Mr Mallorca Golf',
      html: emailHtml,
    })

    if (error) {
      console.error('[zh-selector-email] Resend error:', error)
      return NextResponse.json({ ok: false, error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[zh-selector-email] Error:', err)
    return NextResponse.json({ ok: false, error: 'Server error.' }, { status: 500 })
  }
}
