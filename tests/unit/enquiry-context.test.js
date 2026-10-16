import { beforeEach, describe, expect, test, vi } from 'vitest'
const send = vi.hoisted(() => vi.fn())
vi.mock('resend', () => ({ Resend: class { emails = { send } } }))
import { sealEnquiry, openEnquiry } from '../../src/lib/enquiry-context.js'
import { POST } from '../../src/app/api/trip-preferences/route'
import { POST as contactPOST } from '../../src/app/api/contact/route'

const ref = '83b55c94-476f-47a3-8ff6-0b338299a4ec'
const original = { name: 'Alex Example', email: 'alex@example.com', dates: 'May, flexible', groupsize: '9–12 golfers', courses: 'Son Gual', message: '<script>hello</script>' }
let sequence = 0
const request = (payload, path = 'trip-preferences', origin = 'http://localhost:3000') => new Request(`http://localhost:3000/api/${path}`, {
  method: 'POST', headers: { origin, 'content-type': 'application/json', 'x-forwarded-for': `192.0.2.${++sequence}` }, body: JSON.stringify(payload),
})

describe('private enquiry context', () => {
  beforeEach(() => { process.env.RESEND_API_KEY = 'test-key'; send.mockReset().mockResolvedValue({ error: null }) })
  test('round-trips without exposing personal details and binds the original reference', () => {
    const token = sealEnquiry(ref, original, 1000)
    expect(openEnquiry(ref, token, 1001)).toEqual(original)
    expect(token).not.toContain('alex')
    expect(openEnquiry('13b55c94-476f-47a3-8ff6-0b338299a4ec', token, 1001)).toBeNull()
    const damaged = Buffer.from(token, 'base64url'); damaged[15] ^= 1
    expect(openEnquiry(ref, damaged.toString('base64url'), 1001)).toBeNull()
    expect(openEnquiry(ref, token, 1000 + 30 * 86400000)).toBeNull()
    process.env.RESEND_API_KEY = 'rotated-key'
    expect(openEnquiry(ref, token, 1001)).toBeNull()
  })
  test('loads a valid snapshot without emailing or allowing caching', async () => {
    const response = await POST(request({ action: 'load-enquiry', enquiryRef: ref, enquiryContext: sealEnquiry(ref, original) }))
    expect(response.status).toBe(200)
    expect(response.headers.get('cache-control')).toContain('no-store')
    expect(await response.json()).toEqual({ ok: true, enquiry: original })
    expect(send).not.toHaveBeenCalled()
  })
  test('does not disclose data with a wrong reference or external origin', async () => {
    const payload = { action: 'load-enquiry', enquiryRef: ref, enquiryContext: sealEnquiry(ref, original) }
    expect((await POST(request(payload, undefined, 'https://external.example'))).status).toBe(403)
    expect((await POST(request({ ...payload, enquiryRef: '13b55c94-476f-47a3-8ff6-0b338299a4ec' }))).status).toBe(404)
    expect(send).not.toHaveBeenCalled()
  })
  test('uses the verified original in the email and escapes it, ignoring forged snapshots', async () => {
    const response = await POST(request({ enquiryRef: ref, enquiryContext: sealEnquiry(ref, original), originalEnquiry: { message: 'forged context' }, contact: original, trip: {}, preferences: {} }))
    expect(response.status).toBe(200)
    expect(send.mock.calls[0][0].html).toContain('May, flexible')
    expect(send.mock.calls[0][0].html).toContain('&lt;script&gt;hello&lt;/script&gt;')
    expect(send.mock.calls[0][0].html).not.toContain('forged context')
  })
  test('generates a personal link only in Andy’s email, with the snapshot in a fragment', async () => {
    const response = await contactPOST(request({ fname: 'Alex', lname: 'Example', email: original.email, dates: original.dates, groupsize: original.groupsize, courses: original.courses, message: original.message, lang: 'de' }, 'contact'))
    expect(response.status).toBe(200)
    const { enquiryRef } = await response.json()
    const mail = send.mock.calls[0][0]
    const token = mail.html.match(/#context=([\w-]+)/)[1]
    expect(mail.html).toContain(`ref=${enquiryRef}&amp;lang=de#context=`)
    expect(openEnquiry(enquiryRef, token)).toMatchObject(original)
    expect(send.mock.calls[1][0].html).not.toContain('#context=')
  })
})
