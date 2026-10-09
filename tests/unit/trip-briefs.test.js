import { createRequire } from 'node:module'
import { describe, expect, test } from 'vitest'

const require = createRequire(import.meta.url)
const { call, handoff, agenda } = require('../../public/shane-trip-preview-assets/briefs.js')

const data = {
  contact: { name: 'Example organiser', email: 'example@example.com' },
  trip: {},
  preferences: { stayHelp: 'quote', rooms: { single: '6', twin: '', double: '0' }, transfers: ['airport', 'golf'], experiences: ['boat'] },
}

describe('call and partner briefs', () => {
  test('flags unavailable original facts and distinguishes incomplete rooming', () => {
    const text = call(data)
    expect(text).toContain('First enquiry; not loaded in this page')
    expect(text).toContain('Confirm exact golfers')
    expect(text).toContain('room types are not needed')
    expect(handoff(data).status).toContain('Draft')
    expect(handoff(data).pending).toContain('Travel dates')
  })

  test('uses client updates for the call and post-call figures for Shane', () => {
    const updated = { ...data, trip: { arrival: '2026-11-01', departure: '2026-11-04', golfers: '8' } }
    const staff = { arrival: '2026-11-02', departure: '2026-11-05', golfers: '6', nonGolfers: '0', children: '0' }
    expect(call(updated, staff)).toContain('Golfers: 8')
    const brief = handoff(updated, staff).text
    expect(brief).toContain('Golfers: 6')
    expect(brief).toContain('Total travellers: 6')
    expect(brief).toContain('2026-11-02 to 2026-11-05')
    expect(brief).toContain('Children: 0')
  })

  test('requires explicit review and quote requests even with complete group facts', () => {
    const staff = { reference: 'EX-1', arrival: '2026-11-01', departure: '2026-11-04', golfers: '6', nonGolfers: '0', children: '0', deadline: '2026-10-20', roomPlan: '6 single rooms, €200–€300 per room per night', golfPlan: 'Two morning rounds', flights: 'Flights not booked; one arrival group expected' }
    expect(handoff(data, staff).status).toContain('Draft')
    const ready = handoff(data, { ...staff, reviewed: true, requests: 'Two Palma hotels and transfer options' })
    expect(ready.pending).toEqual([])
    expect(ready.status).toContain('ready to request options')
    expect(ready.text).toContain('No booking or spend is authorised')
  })

  test('keeps sensitive client notes out of partner text unless Andy adds relevant details', () => {
    const sensitive = { ...data, preferences: { ...data.preferences, specialNeeds: 'PRIVATE CLIENT NOTE' } }
    expect(call(sensitive)).toContain('PRIVATE CLIENT NOTE')
    expect(handoff(sensitive).text).not.toContain('PRIVATE CLIENT NOTE')
    expect(handoff(sensitive, { partnerNeeds: 'Step-free access required' }).text).toContain('Step-free access required')
    expect(handoff(sensitive).text).not.toContain('example@example.com')
  })

  test('flags timing and villa conflicts as specific questions', () => {
    const conflicting = { ...data, preferences: { ...data.preferences, experiences: ['chef', 'balloon'], extraTiming: 'after-golf' } }
    expect(agenda(conflicting, {}).join(' ')).toContain('free morning')
    expect(agenda(conflicting, {}).join(' ')).toContain('villa stay')
  })
})
