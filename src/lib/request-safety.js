const DEFAULT_WINDOW_MS = 5 * 60 * 1000

function getStore() {
  if (!globalThis.__mrmallorcagolfRateLimitStore) {
    globalThis.__mrmallorcagolfRateLimitStore = new Map()
  }

  return globalThis.__mrmallorcagolfRateLimitStore
}

export function getClientKey(request, scope = 'default') {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown'
  return `${scope}:${ip}`
}

export function checkRateLimit(key, limit = 5, windowMs = DEFAULT_WINDOW_MS) {
  const store = getStore()
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now - entry.startedAt > windowMs) {
    store.set(key, { count: 1, startedAt: now })
    return true
  }

  if (entry.count >= limit) {
    return false
  }

  entry.count += 1
  store.set(key, entry)
  return true
}

export function sanitizeText(value, maxLength = 1000) {
  if (typeof value !== 'string') return ''
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength)
}

export function sanitizeMultilineText(value, maxLength = 4000) {
  if (typeof value !== 'string') return ''
  return value.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim().slice(0, maxLength)
}

export function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
