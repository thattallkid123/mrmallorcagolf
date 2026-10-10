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

  test('shows courses, hotel help and the visitor country, and tags the subject', async () => {
    expect((await post(body, { 'x-vercel-ip-country': 'GB' })).status).toBe(200)
    const mail = andyMail()
    expect(mail.subject).toMatch(/^New enquiry from Sam Example - Whole trip \[[0-9a-f-]{36}\]$/)
    expect(mail.html).toContain('/trip-preferences.html?ref=')
    expect(mail.html).toContain('Visiting from:</strong> United Kingdom (GB)')
    expect(mail.html).toContain('Son Gual, Alcanada')
    expect(mail.html).toContain('Yes, please suggest options')
    expect(mail.html).toContain('9-12 - large group')
    expect(mail.html).not.toContain('Not recorded')
  })

  test('ignores a malformed country header and an unknown hotel option', async () => {
    await post({ ...body, hotelHelp: '<script>' }, { 'x-vercel-ip-country': 'not-a-country' })
    const mail = andyMail()
    expect(mail.html).not.toContain('Visiting from')
    expect(mail.html).not.toContain('Hotel help')
    expect(mail.html).not.toContain('<script>')
  })

  test('the follow-up link carries the visitor language so the questionnaire opens in it', async () => {
    await post({ ...body, lang: 'de' })
    expect(andyMail().html).toMatch(/trip-preferences\.html\?ref=[0-9a-f-]{36}&amp;lang=de/)
    send.mockClear()
    await post({ ...body, lang: 'en' })
    expect(andyMail().html).not.toContain('lang=')
  })
})
