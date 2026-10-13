import { beforeEach, describe, expect, test, vi } from 'vitest'
const send = vi.hoisted(() => vi.fn())
vi.mock('resend', () => ({ Resend: class { emails = { send } } }))
vi.mock('../../src/lib/request-safety', async (original) => ({ ...(await original()), checkRateLimit: vi.fn().mockResolvedValue(true) }))
import { POST } from '../../src/app/api/send-itinerary/route'
import { buildItineraries } from '../../src/lib/golf-day-planner'

const post = data => POST(new Request('http://localhost:3000/api/send-itinerary', {
  method:'POST', headers:{origin:'http://localhost:3000','content-type':'application/json'},
  body:JSON.stringify({email:'test@example.com',tool:'golf-day-builder',data,subscribeNewsletter:false}),
}))
describe('day plan result email', () => {
  beforeEach(() => { process.env.RESEND_API_KEY='test-key'; send.mockReset().mockResolvedValue({data:{id:'test'},error:null}) })
  test('keeps the route, daylight and partner caveats from the displayed plan', async () => {
    const plans = buildItineraries({region:'palma',dayStyle:'relaxed',level:'casual',handicap:'low',start:'pm',courseType:'close',addons:['village'],transport:'yes',group:'vip'})
    const response=await post({itineraries:plans.map(p=>({...p,courseName:p.course.name}))})
    expect(response.status).toBe(200)
    const html=send.mock.calls[0][0].html
    expect(html).toContain('daylight')
    expect(html).toContain('local travel partner')
    expect(html).toContain('4–5 hours')
    expect(html).not.toContain('5 minutes')
    expect(html).not.toContain('table is booked')
  })
  test('escapes the newly included note and step descriptions', async () => {
    const response=await post({itineraries:[{name:'Day',courseName:'Course',tagline:'Plan',note:'<script>bad()</script>',steps:[{time:'Morning',title:'Golf',desc:'<img src=x onerror=bad()>'}]}]})
    expect(response.status).toBe(200)
    const html=send.mock.calls[0][0].html
    expect(html).not.toContain('<script>')
    expect(html).not.toContain('<img src=x')
    expect(html).toContain('&lt;script&gt;')
    expect(html).toContain('&lt;img src=x')
  })
})
