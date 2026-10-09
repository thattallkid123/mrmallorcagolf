import { beforeEach, describe, expect, test, vi } from 'vitest'

const send = vi.hoisted(() => vi.fn())
vi.mock('resend', () => ({ Resend: class { emails = { send } } }))

import { POST } from '../../src/app/api/trip-preferences/route'
import { POST as contactPOST } from '../../src/app/api/contact/route'

const reference = '83b55c94-476f-47a3-8ff6-0b338299a4ec'
const validPayload = {
  enquiryRef: reference,
  contact: { name: 'Alex Example', email: 'alex@example.com' },
  trip: { arrival: '2026-05-08', departure: '2026-05-13', golfers: '6', golfFocus: ['pro'] },
  preferences: {
    area: 'east',
    rooms: { single: '6' },
    transfers: ['airport', 'golf'],
    restaurants: ['voro'],
    experiences: ['boat'],
  },
}

const requestFor = (payload, origin = 'http://localhost:3000') => new Request('http://localhost:3000/api/trip-preferences', {
  method: 'POST',
  headers: { origin, 'content-type': 'application/json' },
  body: JSON.stringify(payload),
})

describe('trip preferences submission', () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key'
    send.mockReset().mockResolvedValue({ data: { id: 'email-id' }, error: null })
  })

  test('matches the first enquiry and emails Andy a readable brief', async () => {
    const response = await POST(requestFor(validPayload))
    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ ok: true })
    expect(send).toHaveBeenCalledOnce()
    const message = send.mock.calls[0][0]
    expect(message.to).toBe('andy@mrmallorcagolf.com')
    expect(message.replyTo).toBe('alex@example.com')
    expect(message.subject).toContain(reference)
    expect(message.html).toContain('East Mallorca')
    expect(message.html).toContain('Airport transfers, Golf transfers')
    expect(message.html).toContain('VORO')
  })

  test('uses the first enquiry when dates are unchanged and includes stay help', async () => {
    const response = await POST(requestFor({ ...validPayload, trip: {}, preferences: { stayHelp: 'booked', transfers: ['golf'] } }))
    expect(response.status).toBe(200)
    const html = send.mock.calls[0][0].html
    expect(html).toContain('Use dates from first enquiry')
    expect(html).toContain('Already arranged')
  })

  test('requires a valid enquiry reference and email', async () => {
    const response = await POST(requestFor({ ...validPayload, enquiryRef: 'wrong' }))
    expect(response.status).toBe(400)
    expect(send).not.toHaveBeenCalled()
  })

  test('escapes free text and ignores unknown choices', async () => {
    const response = await POST(requestFor({
      ...validPayload,
      trip: { ...validPayload.trip, courseNotes: '<script>alert(1)</script>' },
      preferences: { ...validPayload.preferences, experiences: ['boat', '__proto__'] },
    }))
    expect(response.status).toBe(200)
    const html = send.mock.calls[0][0].html
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(html).not.toContain('<script>')
    expect(html).toContain('Private boat')
    expect(html).not.toContain('[object Object]')
  })

  test('rejects another site and oversized bodies without emailing', async () => {
    expect((await POST(requestFor(validPayload, 'https://elsewhere.example'))).status).toBe(403)
    const big = { ...validPayload, preferences: { ...validPayload.preferences, notes: 'x'.repeat(50_000) } }
    expect((await POST(requestFor(big))).status).toBe(413)
    expect(send).not.toHaveBeenCalled()
  })
})

test('first enquiry email includes the matching follow-up link for Andy', async () => {
  process.env.RESEND_API_KEY = 'test-key'
  process.env.VERCEL_ENV = 'preview'
  process.env.VERCEL_URL = 'mmg-preview.example.vercel.app'
  send.mockReset().mockResolvedValue({ data: { id: 'email-id' }, error: null })
  const response = await contactPOST(requestFor({
    fname: 'Alex', lname: 'Example', email: 'alex@example.com',
    serviceType: 'trip-planning', lang: 'EN',
  }))
  const result = await response.json()
  expect(result.ok).toBe(true)
  expect(result.enquiryRef).toMatch(/^[0-9a-f-]{36}$/)
  expect(send.mock.calls[0][0].subject).toContain(result.enquiryRef)
  expect(send.mock.calls[0][0].html).toContain(`https://mmg-preview.example.vercel.app/shane-trip-preview.html?ref=${result.enquiryRef}`)
  delete process.env.VERCEL_URL
  delete process.env.VERCEL_ENV
})
