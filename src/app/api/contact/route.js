import { buildToolEmail, emailParagraph } from '../_lib/tool-email'
import { randomUUID } from 'node:crypto'
import { sealEnquiry } from '../../../lib/enquiry-context.js'
import { Resend } from 'resend'

import {
  checkRateLimit,
  escapeHtml,
  getClientKey,
  isAllowedOrigin,
  isJsonRequest,
  isPayloadTooLarge,
  isValidEmail,
  sanitizeMultilineText,
  sanitizeText,
} from '../../../lib/request-safety'
import { getExperienceLabel, OFFER_IDS } from '../../../lib/offers-content.js'
import { getContactContent } from '../../../lib/contact-content.js'
import { buildEnquiryBrief } from '../../../lib/enquiry-brief.js'
import { properName, tidyCourses } from '../../../lib/golf-brief.js'

const SERVICE_TYPE_LABELS = {
  pwap: 'Play With A Pro',
  'trip-planning': 'Plan My Golf Trip',
  'whole-trip': 'Plan the whole trip (golf plus hotel, transfers, dining)',
  'tee-time-booking': 'Book tee times for my group',
  both: 'Both',
  'not-sure': 'Not Sure Yet',
}

const HOTEL_HELP_LABELS = {
  help: 'Yes, please suggest options',
  booked: 'No, the hotel is already booked',
  own: 'No, will arrange it themselves',
  unsure: 'Not sure yet',
}

const EXPERIENCE_LABELS = {
  [OFFER_IDS.solo]: getExperienceLabel(OFFER_IDS.solo),
  [OFFER_IDS.group]: getExperienceLabel(OFFER_IDS.group),
  [OFFER_IDS.premium]: getExperienceLabel(OFFER_IDS.premium),
  [OFFER_IDS.undecided]: getExperienceLabel(OFFER_IDS.undecided),
  'pwap-not-sure': 'Play With A Pro - Not sure yet',
}

function cleanTrackingPath(value) {
  const path = sanitizeText(value, 160)
  return /^\/[a-z0-9/_-]*$/i.test(path) ? path : ''
}

function cleanTrackingValue(value, max = 80) {
  const cleaned = sanitizeText(value, max)
  return /^[\w .-]*$/.test(cleaned) ? cleaned : ''
}

// Rows with nothing to show are left out instead of printing "Not recorded".
// clients-sync.py reads rows by label and treats a missing row as empty.
// Vercel adds the visitor's country (two letters) from their connection; only the code is used.
function describeCountry(request) {
  const code = String(request.headers.get('x-vercel-ip-country') || '').toUpperCase()
  if (!/^[A-Z]{2}$/.test(code)) return ''
  try {
    const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(code)
    return name && name !== code ? `${name} (${code})` : code
  } catch {
    return code
  }
}

function renderRow(label, value) {
  if (!value) return ''
  return `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;width:140px">${escapeHtml(label)}</td><td style="padding:8px 0;border-bottom:1px solid #eee">${escapeHtml(value)}</td></tr>`
}

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return Response.json({ ok: false, error: 'Origin not allowed.' }, { status: 403 })
  }

  if (!isJsonRequest(request)) {
    return Response.json({ ok: false, error: 'Unsupported content type.' }, { status: 415 })
  }

  if (isPayloadTooLarge(request, 48 * 1024)) {
    return Response.json({ ok: false, error: 'Payload too large.' }, { status: 413 })
  }

  if (!await checkRateLimit(getClientKey(request, 'contact'), 12, 10 * 60 * 1000)) {
    return Response.json(
      { ok: false, error: 'Too many enquiries from this connection. Please wait a few minutes and try again.' },
      { status: 429 },
    )
  }

  try {
    const payload = await request.json()

    if (payload?.website) {
      return Response.json({ ok: true })
    }

    const fname = sanitizeText(payload?.fname, 80)
    const lname = sanitizeText(payload?.lname, 80)
    const email = sanitizeText(payload?.email, 160).toLowerCase()
    const dates = sanitizeText(payload?.dates, 120)
    const handicap = sanitizeText(payload?.handicap, 120)
    const groupsize = sanitizeText(payload?.groupsize, 120)
    const courses = sanitizeText(payload?.courses, 160)
    const hotelHelpKey = sanitizeText(payload?.hotelHelp, 20)
    const hotelHelp = Object.hasOwn(HOTEL_HELP_LABELS, hotelHelpKey) ? hotelHelpKey : ''
    const serviceType = sanitizeText(payload?.serviceType, 80)
    const pwapFormat = sanitizeText(payload?.pwapFormat, 80)
    const experience = sanitizeText(payload?.experience, 80)
    const message = sanitizeMultilineText(payload?.message, 4000)
    const lang = sanitizeText(payload?.lang, 12).toUpperCase() || 'EN'
    const attribution = payload?.attribution || {}
    const entryPage = cleanTrackingPath(attribution.entry_page)
    const enquirySourcePage = cleanTrackingPath(attribution.enquiry_source_page)
    const utmSource = cleanTrackingValue(attribution.utm_source)
    const utmMedium = cleanTrackingValue(attribution.utm_medium)
    const utmCampaign = cleanTrackingValue(attribution.utm_campaign)
    const referrerHost = cleanTrackingValue(attribution.referrer_host, 120)

    if (!fname || !isValidEmail(email)) {
      return Response.json(
        { ok: false, error: 'Please provide your first name and a valid email address.' },
        { status: 400 },
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ ok: false, error: 'Email service is not configured.' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const serviceTypeLabel = SERVICE_TYPE_LABELS[serviceType] || serviceType || 'Not specified'
    const pwapFormatLabel = EXPERIENCE_LABELS[pwapFormat] || pwapFormat || ''
    const experienceLabel = EXPERIENCE_LABELS[experience] || SERVICE_TYPE_LABELS[experience] || experience || ''
    // clients often type names and courses in lower case: show them capitalised to Andy (a name or list already in mixed case is left alone)
    const fullName = properName(`${fname} ${lname}`.trim())
    const safeEmail = escapeHtml(email)

    const country = describeCountry(request)
    const enquiryRef = randomUUID()
    const preferencesHost = process.env.VERCEL_ENV === 'production'
      ? 'www.mrmallorcagolf.com'
      : process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL || 'www.mrmallorcagolf.com'
    const enquiryContext = sealEnquiry(enquiryRef, { name: fullName, email, dates, groupsize, handicap, courses, hotelHelp: HOTEL_HELP_LABELS[hotelHelp] || '', service: serviceTypeLabel, format: pwapFormatLabel, message })
    const preferencesUrl = `https://${preferencesHost}/trip-preferences.html?ref=${enquiryRef}${/^(DE|ES|FR|NL|SV|ZH)$/.test(lang) ? `&lang=${lang.toLowerCase()}` : ''}#context=${enquiryContext}`
    const golfBriefUrl = process.env.GOLF_BRIEF_ENABLED === '1' && ['trip-planning', 'tee-time-booking', 'both', 'whole-trip'].includes(serviceType)
      ? `https://${preferencesHost}/golf-brief.html?ref=${enquiryRef}#context=${sealEnquiry(enquiryRef, { name: fullName, email, dates, groupsize, handicap, courses }, undefined, 'golf-brief')}`
      : ''
    // The golf questionnaire goes to English-language enquirers automatically, in their confirmation email, so Andy has the answers
    // without a manual reply. The questionnaire itself is English only, so other languages keep the manual route.
    const autoGolfBrief = Boolean(golfBriefUrl) && lang === 'EN'
    // One-tap replies for Andy: each opens a reply to the client with the message and the personal link already in it.
    const LINE = String.fromCharCode(10)
    const replyBody = (paragraphs) => [`Hi ${fname},`, ...paragraphs, 'Fill in what you know and leave the rest blank. I will come back to you once I have your answers.', 'Andy'].join(LINE + LINE)
    const replyHref = (paragraphs) => `mailto:${email}?subject=${encodeURIComponent('Your Mallorca golf trip')}&body=${encodeURIComponent(replyBody(paragraphs))}`
    const replies = []
    if (golfBriefUrl && !autoGolfBrief) replies.push({ key: 'golf', label: 'Reply with golf questionnaire', href: replyHref(['Thanks for your enquiry. To price this accurately I need a few more details. This short golf questionnaire covers your dates, tee times, budget and equipment, and takes about five minutes:', golfBriefUrl]) })
    if (golfBriefUrl && !autoGolfBrief) replies.push({ key: 'both', label: 'Reply with both', href: replyHref(['Thanks for your enquiry. Two short questionnaires will help me plan this properly. The first covers the golf: dates, tee times, budget and equipment.', golfBriefUrl, 'The second covers the rest of the trip, such as hotels, transfers and restaurants:', preferencesUrl]) })
    replies.push({ key: 'trip', label: 'Reply with trip preferences', href: replyHref(['Thanks for your enquiry. This short questionnaire covers the rest of the trip, such as hotels, transfers and restaurants, and takes about five minutes:', preferencesUrl]) })
    const suggestedReply = autoGolfBrief ? '' : serviceType === 'whole-trip' && golfBriefUrl ? 'both' : golfBriefUrl ? 'golf' : ''
    const replyAdvice = autoGolfBrief
      ? 'The golf questionnaire link went to them automatically in their confirmation email. Their answers will arrive in Internal. Send the trip preferences only if they want help with hotels or transfers.'
      : suggestedReply === 'both'
      ? 'Suggested: both. The golf answers feed your quote; hotel, transfer and restaurant wishes are for the call and for Shane.'
      : suggestedReply === 'golf'
        ? 'Suggested: the golf questionnaire. It gives you dates, tee times, budget and hire for the quote.'
        : 'Most of these need a normal reply first. Send the trip preferences only if they want help with the wider trip.'
    const replyButton = (reply) => `<a href="${escapeHtml(reply.href)}" style="display:inline-block;margin:0 8px 8px 0;padding:10px 14px;border:1px solid #2D4A3E;border-radius:3px;text-decoration:none;font-size:14px;${reply.key === suggestedReply ? 'background:#2D4A3E;color:#ffffff' : 'background:#ffffff;color:#2D4A3E'}">${escapeHtml(reply.label)}</a>`

    const brief = buildEnquiryBrief({
      serviceType,
      serviceTypeLabel,
      dates,
      handicap,
      groupsize,
      courses,
      hotelHelp,
      country,
      entryPage,
      enquirySourcePage,
      utmSource,
      utmMedium,
      utmCampaign,
      referrerHost,
    })
    const isPwap = serviceType === 'pwap' || serviceType === 'both'
    const subjectSuffix = brief.subjectSuffix ? ` - ${brief.subjectSuffix}` : ''

    const { error } = await resend.emails.send({
      from: 'Mr Mallorca Golf <enquiries@mrmallorcagolf.com>',
      to: 'andy@mrmallorcagolf.com',
      replyTo: email,
      subject: `New enquiry from ${fullName}${subjectSuffix}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#2D4A3E;margin-bottom:16px">New enquiry - Mr Mallorca Golf</h2>
          <div style="background:#f7f4ef;padding:16px;border-radius:4px;margin-bottom:24px">
            <p style="margin:0 0 8px;font-size:16px;color:#2D4A3E"><strong>${escapeHtml(brief.headline || serviceTypeLabel)}</strong></p>
            <p style="margin:0 0 8px;font-size:13px;color:#555">${escapeHtml(brief.received)}</p>
            ${country ? `<p style="margin:0 0 8px;font-size:13px;color:#555"><strong>Visiting from:</strong> ${escapeHtml(country)} <span style="color:#999">(approximate, from their connection)</span></p>` : ''}
            <p style="margin:0;font-size:13px;color:#555"><strong>How they found you:</strong> ${escapeHtml(brief.source)}</p>
          </div>
          <table style="width:100%;border-collapse:collapse">
            ${renderRow('Enquiry reference', enquiryRef)}
            ${renderRow('Name', fullName)}
            <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            ${renderRow('Dates', dates)}
            ${renderRow('Handicap', handicap)}
            ${renderRow('Group size', groupsize)}
            ${renderRow('Courses in mind', tidyCourses(courses))}
            ${renderRow('Hotel help', HOTEL_HELP_LABELS[hotelHelp] || '')}
            ${renderRow('Country', country)}
            ${renderRow('Main enquiry', serviceTypeLabel)}
            ${renderRow('Play With A Pro format', isPwap ? pwapFormatLabel : '')}
            ${renderRow('Experience', experienceLabel && experienceLabel !== serviceTypeLabel ? experienceLabel : '')}
            ${renderRow('Language', lang)}
            ${renderRow('Entry page', entryPage)}
            ${renderRow('Page before enquiry', enquirySourcePage)}
            ${renderRow('Campaign source', utmSource)}
            ${renderRow('Campaign medium', utmMedium)}
            ${renderRow('Campaign name', utmCampaign)}
            ${renderRow('Referrer site', referrerHost)}
          </table>
          ${message ? `<div style="margin-top:24px"><p style="color:#666;margin-bottom:8px">Message:</p><p style="white-space:pre-wrap;background:#f7f4ef;padding:16px;border-radius:4px">${escapeHtml(message)}</p></div>` : ''}
          <div style="margin-top:24px">
            <p style="color:#666;margin:0 0 8px">Details to check if needed</p>
            <ul style="margin:0;padding-left:20px;color:#333;line-height:1.6">${brief.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join('')}</ul>
          </div>
          <div style="margin-top:24px;font-size:13px;line-height:1.5">
            <p style="margin:0 0 8px"><strong>Reply with a questionnaire</strong></p>
            <p style="margin:0 0 12px;color:#333">${escapeHtml(replyAdvice)}</p>
            <div>${replies.map(replyButton).join('')}</div>
            <p style="color:#666">Each button opens a reply to ${escapeHtml(fname)} with the message and link filled in, ready to edit and send.${lang !== 'EN' ? ` They wrote from the ${escapeHtml(lang)} site, and the message is in English.` : ''} The links are personal and expire after 30 days.</p>
            <p style="color:#666">Links on their own: ${golfBriefUrl ? `<a href="${escapeHtml(golfBriefUrl)}">golf questionnaire</a>, ` : ''}<a href="${escapeHtml(preferencesUrl)}">trip preferences</a>.</p>
          </div>
          <p style="margin-top:32px;color:#999;font-size:12px">Reply directly to this email to respond to ${escapeHtml(fname)}.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend contact error:', error)
      return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
    }

    const localeKey = lang.toLowerCase()
    const whatsappHref = localeKey === 'zh' ? 'https://www.mrmallorcagolf.com/zh/contact#wechat' : 'https://wa.me/34624466702'
    try {
      const confirmContent = getContactContent(localeKey)
      const briefHtml = autoGolfBrief
        ? emailParagraph('To price this accurately I need a few more details. This short golf questionnaire covers your dates, tee times, budget and hire, and takes about five minutes. Fill in what you know and leave the rest blank.')
          + '<p style="margin:0 0 24px;"><a href="' + escapeHtml(golfBriefUrl) + '" style="display:inline-block;padding:12px 20px;background:#2D4A3E;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;font-weight:500;color:#FFFFFF;text-decoration:none;">Open the golf questionnaire</a></p>'
          + emailParagraph('If you would rather talk it through, reply with a good time for a call, or message me on WhatsApp.')
        : ''
      const { error: confirmationError } = await resend.emails.send({
        from: 'Andy Griffiths <andy@mrmallorcagolf.com>',
        to: email,
        subject: confirmContent.success.title,
        html: buildToolEmail(escapeHtml(confirmContent.success.title), emailParagraph(escapeHtml(confirmContent.success.body)) + briefHtml + '<p style="margin:24px 0 0;"><a href="'+whatsappHref+'" style="display:inline-block;padding:12px 20px;background:#2D4A3E;font-family:Jost,Arial,Helvetica,sans-serif;font-size:15px;font-weight:500;color:#FFFFFF;text-decoration:none;">'+escapeHtml(confirmContent.cards.whatsappValue)+'</a></p>', {includeIntroduction:false, footerHtml:'', lang:localeKey}),
      })
      if (confirmationError) console.error('Resend confirmation email error:', confirmationError)
    } catch (confirmError) {
      console.error('Resend confirmation email error:', confirmError)
    }

    return Response.json({ ok: true, enquiryRef })
  } catch (err) {
    console.error('Resend error:', err)
    return Response.json({ ok: false, error: 'Failed to send' }, { status: 500 })
  }
}
