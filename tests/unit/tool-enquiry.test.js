import { expect, test } from 'vitest'
import { buildToolEnquiryHref, readToolEnquiry } from '../../src/lib/tool-enquiry'
test('localised enquiry retains course and itinerary choices', () => {
  const href = buildToolEnquiryHref('de', { courses: 'Golf Son Gual', message: 'Golf & lunch → Palma' })
  expect(href.split('#')[0]).toBe('/de/contact?service=trip-planning')
  expect(readToolEnquiry(href.slice(href.indexOf('#')))).toEqual({ courses: 'Golf Son Gual', message: 'Golf & lunch → Palma' })
})
test('invalid fragments and unexpected fields cannot prefill identity', () => {
  expect(readToolEnquiry('#plan=oops')).toEqual({})
  expect(readToolEnquiry('#plan=null')).toEqual({})
  expect(readToolEnquiry('#plan=' + encodeURIComponent(JSON.stringify({ email: 'x@example.com', courses: 'a'.repeat(800) })))).toEqual({ courses: 'a'.repeat(600) })
})
