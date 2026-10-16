import { buildLocalePath } from './site.js'

// Only planning choices travel in the fragment. Names and email addresses are
// collected by the enquiry form, never embedded by a tool in a URL.
export function buildToolEnquiryHref(locale, { courses = '', message = '', serviceType = 'trip-planning' } = {}) {
  const fields = { courses: String(courses).slice(0, 600), message: String(message).slice(0, 1800) }
  return `${buildLocalePath('/contact', locale)}?service=${serviceType}#plan=${encodeURIComponent(JSON.stringify(fields))}`
}

export function readToolEnquiry(hash) {
  try {
    const raw = new URLSearchParams(String(hash).replace(/^#/, '')).get('plan')
    if (!raw || raw.length > 5000) return {}
    const fields = JSON.parse(raw)
    return Object.fromEntries(['courses', 'message'].filter(key => typeof fields[key] === 'string').map(key => [key, fields[key].slice(0, key === 'courses' ? 600 : 1800)]))
  } catch { return {} }
}
