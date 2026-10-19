import { afterEach, describe, expect, it, vi } from 'vitest'
import { requestPlanningNotes } from '../../src/lib/planning-notes-signup'
import { PLANNING_NOTES_MAILERLITE_ACTION } from '../../src/lib/signup-config'

afterEach(() => vi.unstubAllGlobals())

describe('planning-notes double opt-in', () => {
  it('uses the one confirmation form without forcing an active status', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', fetch)
    await requestPlanningNotes('golfer@example.com', 'cost-guide')
    const [url, request] = fetch.mock.calls[0]
    expect(url).toBe(PLANNING_NOTES_MAILERLITE_ACTION)
    const fields = new URLSearchParams(request.body)
    expect(fields.get('fields[email]')).toBe('golfer@example.com')
    expect(fields.get('fields[signup_source]')).toBe('cost-guide')
    expect(fields.has('status')).toBe(false)
    expect(request.body).not.toContain('active')
  })

  it.each([
    { ok: false, json: async () => ({ success: true }) },
    { ok: true, json: async () => ({ success: false }) },
    { ok: true, json: async () => { throw new Error('Invalid JSON') } },
  ])('does not silently accept a failed signup', async response => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response))
    await expect(requestPlanningNotes('golfer@example.com', 'course-selector')).rejects.toThrow('Planning notes signup failed')
  })
})
