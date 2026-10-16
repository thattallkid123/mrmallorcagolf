import { beforeEach, expect, test, vi } from 'vitest'
const send = vi.hoisted(() => vi.fn())
vi.mock('resend', () => ({ Resend: class { emails = { send } } }))
vi.mock('../../src/lib/request-safety', async original => ({ ...(await original()), checkRateLimit: vi.fn().mockResolvedValue(true) }))
import { POST } from '../../src/app/api/trip-quote-submit/route'
import { openEnquiry } from '../../src/lib/enquiry-context'
const payload = { email:'alex@example.com', golfers:3, days:5, rounds:4, budget:'premium', courses:'Golf Son Gual', planningDetails:'Hotel: 4-star\nTransfers: Yes\n<b>notes</b>', notes:'Birthday', lang:'de' }
const request = (body,origin='http://localhost:3000') => new Request('http://localhost:3000/api/trip-quote-submit',{ method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(body) })
beforeEach(() => {
  process.env.RESEND_API_KEY='test-key'
  process.env.MAILERLITE_API_TOKEN='test-token'
  process.env.MAILERLITE_QUOTE_BUILDER_GROUP_ID='test-group'
  send.mockReset().mockResolvedValue({error:null})
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ok:true}))
})
test('retains planning choices in a private link for Andy without subscribing a quote request', async () => {
  const response=await POST(request(payload))
  expect(response.status).toBe(200)
  const message=send.mock.calls[0][0]
  expect(message.to).toBe('andy@mrmallorcagolf.com')
  expect(message.html).toContain('&lt;b&gt;notes&lt;/b&gt;')
  const ref=message.html.match(/ref=([\w-]+)/)[1]
  const token=message.html.match(/#context=([\w-]+)/)[1]
  expect(openEnquiry(ref,token)).toMatchObject({ email:payload.email, courses:payload.courses })
  expect(openEnquiry(ref,token).message).toContain('Birthday\n\n'+payload.planningDetails)
  expect(openEnquiry(ref,token).message).toContain('5 days; 4 rounds; premium')
  expect(message.html).toContain('lang=de')
  expect(fetch).not.toHaveBeenCalled()
  expect(await response.json()).toEqual({success:true})
})
test('rejects external origins and ignores honeypots without email', async () => {
  expect((await POST(request(payload,'https://external.example'))).status).toBe(403)
  expect((await POST(request({...payload,website:'bot'}))).status).toBe(200)
  expect(send).not.toHaveBeenCalled()
})
test('does not report success when the email provider refuses delivery', async () => {
  send.mockResolvedValue({error:{message:'provider refused'}})
  expect((await POST(request(payload))).status).toBe(500)
})
