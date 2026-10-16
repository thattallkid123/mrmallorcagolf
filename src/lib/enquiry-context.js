import { createCipheriv, createDecipheriv, hkdfSync, randomBytes } from 'node:crypto'
import { deflateRawSync, inflateRawSync } from 'node:zlib'

const UUID = /^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const LIFETIME = 30 * 24 * 60 * 60 * 1000

// Purpose-separated key; rotating the server credential also invalidates old links.
// No personal data is stored in a new database. The encrypted snapshot travels in
// the URL fragment, which browsers do not send in HTTP requests or referrers.
function key() {
  const secret = process.env.TRIP_PREFERENCES_LINK_SECRET || process.env.RESEND_API_KEY
  if (!secret) throw new Error('Trip link service is not configured')
  return hkdfSync('sha256', secret, 'mmg-trip-preferences-v1', 'enquiry-context', 32)
}

export function sealEnquiry(enquiryRef, enquiry, now = Date.now()) {
  if (!UUID.test(enquiryRef)) throw new Error('Invalid enquiry reference')
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', key(), iv)
  cipher.setAAD(Buffer.from(enquiryRef))
  const body = deflateRawSync(Buffer.from(JSON.stringify({ enquiry, expires: now + LIFETIME })))
  const encrypted = Buffer.concat([cipher.update(body), cipher.final()])
  return Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString('base64url')
}

export function openEnquiry(enquiryRef, token, now = Date.now()) {
  try {
    if (!UUID.test(enquiryRef) || typeof token !== 'string' || token.length > 16000 || !/^[\w-]+$/.test(token)) return null
    const packed = Buffer.from(token, 'base64url')
    if (packed.length < 29) return null
    const decipher = createDecipheriv('aes-256-gcm', key(), packed.subarray(0, 12))
    decipher.setAAD(Buffer.from(enquiryRef))
    decipher.setAuthTag(packed.subarray(12, 28))
    const decrypted = Buffer.concat([decipher.update(packed.subarray(28)), decipher.final()])
    const data = JSON.parse(inflateRawSync(decrypted, { maxOutputLength: 24 * 1024 }).toString('utf8'))
    if (!Number.isFinite(data.expires) || data.expires <= now || !data.enquiry?.email) return null
    return data.enquiry
  } catch {
    return null
  }
}
