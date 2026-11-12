import { beforeEach, describe, expect, test, vi } from 'vitest'

const send = vi.hoisted(() => vi.fn())
vi.mock('resend', () => ({ Resend: class { emails = { send } } }))

import { POST } from '../../src/app/api/contact/route'

const body = {
  fname: 'Sam', lname: 'Example', email: 'sam@example.com', lang: 'en',
  serviceType: 'whole-trip', experience: 'whole-trip', groupsize: '9-12 - large group',
  courses: 'Son Gual, Alcanada', hotelHelp: 'help', message: 'Hello',
}

const post = (payload, headers = {}) => POST(new Request('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: { origin: 'http://localhost:3000', 'content-type': 'application/json', ...headers },
  body: JSON.stringify(payload),
}))

const andyMail = () => send.mock.calls.map((call) => call[0]).find((message) => message.to === 'andy@mrmallorcagolf.com')

describe('contact enquiry email', () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key'
    send.mockReset().mockResolvedValue({ data: { id: 'id' }, error: null })
  })

  test('shows courses, hotel help and the visitor country, and keeps the enquiry reference in the body', async () => {
    expect((await post(body, { 'x-vercel-ip-country': 'GB' })).status).toBe(200)
    const mail = andyMail()
    expect(mail.subject).toBe('New enquiry from Sam Example - Whole trip')
    expect(mail.html).toMatch(/Enquiry reference<\/td><td[^>]*>[0-9a-f-]{36}<\/td>/)
    expect(mail.html).toContain('/trip-preferences.html?ref=')
    expect(mail.html).toContain('Visiting from:</strong> United Kingdom (GB)')
    expect(mail.html).toContain('Son Gual, Alcanada')
    expect(mail.html).toContain('Yes, please suggest options')
    expect(mail.html).toContain('9-12 - large group')
    expect(mail.html).not.toContain('Not recorded')
  })

  test('shows lower-case names and courses capitalised to Andy, and leaves mixed case alone', async () => {
    await post({ ...body, fname: 'sam', lname: 'example', courses: 'son gual /son quint/alcanada' })
    const mail = andyMail()
    expect(mail.subject).toBe('New enquiry from Sam Example - Whole trip')
    expect(mail.html).toContain('Son Gual, Son Quint, Alcanada')
    send.mockClear()
    await post({ ...body, fname: 'Sam', lname: 'McDonald', courses: 'I would like Son Gual first. Then Alcanada if open.' })
    expect(andyMail().subject).toBe('New enquiry from Sam McDonald - Whole trip')
    expect(andyMail().html).toContain('I would like Son Gual first. Then Alcanada if open.')
  })

  test('ignores a malformed country header and an unknown hotel option', async () => {
    await post({ ...body, hotelHelp: '<script>' }, { 'x-vercel-ip-country': 'not-a-country' })
    const mail = andyMail()
    expect(mail.html).not.toContain('Visiting from')
    expect(mail.html).not.toContain('Hotel help')
    expect(mail.html).not.toContain('<script>')
  })

  test('English enquirers get the golf questionnaire in their confirmation; Andy gets the trip-preferences reply only', async () => {
    process.env.GOLF_BRIEF_ENABLED = '1'
    try {
      await post(body)
      const confirmation = send.mock.calls.map((call) => call[0]).find((message) => message.to === 'sam@example.com')
      expect(confirmation.html).toMatch(/href="https:\/\/[^"]+\/golf-brief\.html\?ref=[0-9a-f-]{36}#context=/)
      expect(confirmation.html).toContain('Open the golf questionnaire')
      expect(confirmation.html).toContain('reply with a good time for a call, or message me on WhatsApp')
      const html = andyMail().html
      expect(html).toContain('went to them automatically')
      expect(html).not.toContain('Reply with golf questionnaire')
      expect(html).not.toContain('Reply with both')
      expect(html).toContain('Reply with trip preferences')
      const trip = [...html.matchAll(/href="(mailto:[^"]+)"/g)].map((m) => decodeURIComponent(m[1].replace(/&amp;/g, '&').split('body=')[1] || '')).filter(Boolean)
      expect(trip).toHaveLength(1)
      expect(trip[0]).toMatch(/trip-preferences\.html\?ref=[0-9a-f-]{36}#context=/)

      // a PWAP enquiry has no golf questionnaire, so nothing automatic goes out
      send.mockClear()
      await post({ ...body, serviceType: 'pwap', experience: 'pwap' })
      const pwapConfirmation = send.mock.calls.map((call) => call[0]).find((message) => message.to === 'sam@example.com')
      expect(pwapConfirmation.html).not.toContain('golf-brief')
      expect(andyMail().html).toContain('Most of these need a normal reply first.')

      // other languages keep the manual route, because the questionnaire is English only
      send.mockClear()
      await post({ ...body, lang: 'de' })
      const deConfirmation = send.mock.calls.map((call) => call[0]).find((message) => message.to === 'sam@example.com')
      expect(deConfirmation.html).not.toContain('golf-brief')
      expect(andyMail().html).toContain('Reply with golf questionnaire')
    } finally {
      delete process.env.GOLF_BRIEF_ENABLED
    }
  })

  test('with the questionnaire switched off nothing about it is sent', async () => {
    await post(body)
    const confirmation = send.mock.calls.map((call) => call[0]).find((message) => message.to === 'sam@example.com')
    expect(confirmation.html).not.toContain('golf-brief')
    expect(andyMail().html).not.toContain('went to them automatically')
  })

  test('the follow-up link carries the visitor language so the questionnaire opens in it', async () => {
    await post({ ...body, lang: 'de' })
    expect(andyMail().html).toMatch(/trip-preferences\.html\?ref=[0-9a-f-]{36}&amp;lang=de/)
    send.mockClear()
    await post({ ...body, lang: 'en' })
    expect(andyMail().html).not.toContain('lang=')
  })
})
