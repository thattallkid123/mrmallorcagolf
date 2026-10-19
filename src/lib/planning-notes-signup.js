import { PLANNING_NOTES_MAILERLITE_ACTION } from './signup-config'

// All explicit marketing opt-ins use the same double-opt-in form. Never set a
// subscriber active through the API: that would bypass confirmation or revive
// an unsubscribe. PDF/result delivery does not call this without consent.
export async function requestPlanningNotes(email, source, fields = {}) {
  const body = new URLSearchParams({
    'fields[email]': email,
    'fields[signup_source]': source,
    'ml-submit': '1',
    anticsrf: 'true',
  })
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === 'string' && value.trim()) body.set(`fields[${key}]`, value.trim().slice(0, 950))
  }
  const response = await fetch(PLANNING_NOTES_MAILERLITE_ACTION, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: body.toString(),
    signal: AbortSignal.timeout(10000),
  })
  const result = await response.json().catch(() => null)
  if (!response.ok || result?.success !== true) throw new Error('Planning notes signup failed')
}
