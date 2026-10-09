import { describe, expect, test } from 'vitest'

import { buildEnquiryBrief, describeSource, stillToAsk } from '../../src/lib/enquiry-brief.js'

const now = new Date('2026-10-09T16:30:00Z')

describe('enquiry brief', () => {
  test('summarises the request in one line and states the reply deadline in Mallorca time', () => {
    const brief = buildEnquiryBrief({
      serviceType: 'whole-trip',
      serviceTypeLabel: 'Plan the whole trip',
      dates: '10-14 May 2027',
      handicap: '12-20',
      groupsize: '5+ - larger group / corporate',
    }, now)
    expect(brief.headline).toBe('Plan the whole trip · 5+ - larger group / corporate · 10-14 May 2027 · handicap 12-20')
    expect(brief.received).toContain('18:30')
    expect(brief.received).toContain('Sat 10 Oct')
    expect(brief.subjectSuffix).toBe('Whole trip')
  })

  test('says so plainly when the visitor came straight to the form', () => {
    expect(describeSource({ entryPage: '/contact' })).toMatch(/^Direct visit/)
  })

  test('names the page, referrer and campaign when they exist', () => {
    const text = describeSource({
      entryPage: '/guides/best-golf-courses-mallorca',
      enquirySourcePage: '/plan-your-trip',
      referrerHost: 'google.com',
      utmSource: 'instagram',
      utmCampaign: 'son-vida',
    })
    expect(text).toContain('Came from google.com')
    expect(text).toContain('Campaign: instagram / son-vida')
    expect(text).toContain('Last page before the form: /plan-your-trip')
    expect(text).toContain('First page they landed on: /guides/best-golf-courses-mallorca')
  })

  test('lists what is still missing, with extra questions for a whole trip', () => {
    const text = stillToAsk({ serviceType: 'whole-trip', groupsize: '5+ - larger group / corporate' }).join(' | ')
    expect(text).toContain('Dates: none given')
    expect(text).toContain('Exact number of golfers')
    expect(text).toContain('Handicap range')
    expect(text).toContain('Hotel: area or base')
    expect(text).toContain('Transfers')
    expect(text).toContain('short call')
  })

  test('does not ask for what the visitor already gave', () => {
    const text = stillToAsk({ serviceType: 'tee-time-booking', dates: 'May', handicap: '10', groupsize: '3-4 - small group' }).join(' | ')
    expect(text).not.toContain('Dates')
    expect(text).not.toContain('Handicap')
    expect(text).not.toContain('Hotel')
    expect(text).toContain('Courses already in mind')
  })
})
