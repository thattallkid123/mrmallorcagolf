import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CONSENT_KEY, GA_ID, analyticsAllowed, readAnalyticsConsent, saveAnalyticsConsent, startAnalytics } from '../../src/lib/analytics-consent'
import { ANALYTICS_CONSENT_COPY } from '../../src/lib/analytics-consent-content'
import { trackEvent } from '../../src/lib/analytics'

let values, scripts
beforeEach(() => {
  values = new Map(); scripts = []
  vi.stubGlobal('window', {
    location: { hostname: 'www.mrmallorcagolf.com', pathname: '/', search: '', href: 'https://www.mrmallorcagolf.com/', reload: vi.fn() },
    localStorage: { getItem: k => values.get(k) || null, setItem: (k, v) => values.set(k, v) },
    dispatchEvent: vi.fn(),
  })
  vi.stubGlobal('document', { cookie: '', getElementById: id => scripts.find(s => s.id === id), createElement: () => ({}), head: { appendChild: s => scripts.push(s) } })
})
afterEach(() => vi.unstubAllGlobals())

describe('explicit analytics permission', () => {
  it('never queues or loads Google before acceptance, including rejected/corrupt/expired choices', () => {
    for (const value of [null, 'broken', JSON.stringify({ choice: 'rejected', at: Date.now() }), JSON.stringify({ choice: 'accepted', at: 1 })]) {
      values.set(CONSENT_KEY, value)
      startAnalytics(); trackEvent('test')
      expect(scripts).toHaveLength(0)
      expect(window.dataLayer).toBeUndefined()
      expect(analyticsAllowed()).toBe(false)
    }
  })
  it('starts once after consent with defaults preceding config, then blocks events on withdrawal', () => {
    saveAnalyticsConsent('accepted'); startAnalytics()
    expect(scripts).toHaveLength(1)
    expect(Array.from(window.dataLayer[0])).toEqual(['consent', 'default', expect.objectContaining({ analytics_storage: 'denied', ad_storage: 'denied' })])
    expect(Array.from(window.dataLayer[1])).toEqual(['consent', 'update', { analytics_storage: 'granted' }])
    trackEvent('allowed')
    const count = window.dataLayer.length
    saveAnalyticsConsent('rejected'); trackEvent('blocked')
    expect(window.dataLayer).toHaveLength(count)
    expect(window[`ga-disable-${GA_ID}`]).toBe(true)
    expect(window.location.reload).toHaveBeenCalledOnce()
    expect(readAnalyticsConsent()).toBe('rejected')
  })
  it('never loads Google on Chinese routes even with permission', () => {
    window.location.pathname = '/zh/contact'
    saveAnalyticsConsent('accepted'); trackEvent('blocked')
    expect(scripts).toHaveLength(0)
    expect(window.dataLayer).toBeUndefined()
  })
  it('fails closed when browser storage is unavailable', () => {
    window.localStorage.getItem = () => { throw new Error('blocked') }
    saveAnalyticsConsent('accepted')
    expect(readAnalyticsConsent()).toBe(null)
    expect(scripts).toHaveLength(0)
  })
})

it('every analytics locale has all rendered consent labels and legal routes have their notice', () => {
  const labels = ['title', 'body', 'accept', 'reject', 'settings', 'privacy', 'close', 'saved']
  for (const locale of ['en', 'de', 'es', 'fr', 'nl', 'sv']) {
    for (const label of labels) expect(ANALYTICS_CONSENT_COPY[locale][label]).toBeTruthy()
  }
  for (const locale of ['en', 'de', 'es', 'fr']) expect(ANALYTICS_CONSENT_COPY[locale].policy).toBeTruthy()
})
