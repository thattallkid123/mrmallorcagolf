# MMG Site Security Audit (2026-05-27)

## Summary
- Overall posture: good baseline with modern security headers and no obvious critical vulnerabilities in app routes.
- Immediate critical issues: none found.
- High-priority improvements: completed in this pass for API origin/content-type/payload controls.
- Remaining risks are mostly hardening and operational monitoring tasks.

## Findings

### P0 (Critical)
- None identified in current review.

### P1 (High)
1. API request-origin enforcement was missing on form endpoints.
- Impact: increased abuse surface for automated cross-origin submissions.
- Status: fixed.
- Files:
  - `src/app/api/contact/route.js`
  - `src/app/api/questionnaire/route.js`
  - `src/lib/request-safety.js`

2. API content-type and payload-size validation was missing.
- Impact: easier abuse through oversized or malformed request bodies.
- Status: fixed.
- Files:
  - `src/app/api/contact/route.js`
  - `src/app/api/questionnaire/route.js`
  - `src/lib/request-safety.js`

### P2 (Medium)
1. Rate limiting uses in-memory store (per instance).
- Impact: limits can be bypassed across multi-instance/serverless scale.
- Recommendation: move to shared KV/Redis-backed limiter.
- Status: pending.

2. CSP still allows `'unsafe-inline'` and `'unsafe-eval'` in scripts.
- Impact: weaker XSS defense than strict nonce/hash CSP.
- Recommendation: migrate to nonce-based CSP and remove unsafe directives where feasible.
- Status: pending (requires careful framework/script migration).

3. No explicit bot challenge/captcha on high-value form flows.
- Impact: possible spam increase under targeted bot pressure.
- Recommendation: add Turnstile/hCaptcha on contact/questionnaire forms if abuse rises.
- Status: pending (optional unless abuse seen).

### P3 (Low)
1. Security observability can be expanded.
- Recommendation: add alerting on 4xx/5xx spikes and rate-limit hit rates.
- Status: pending.

## Controls Verified
- HSTS enabled.
- X-Frame-Options set.
- X-Content-Type-Options set.
- Referrer-Policy set.
- Permissions-Policy set.
- CSP present.
- API input sanitization and email validation present.
- Basic per-IP rate limiting present.

## Changes Applied In This Pass
- Added reusable request hardening helpers:
  - `isAllowedOrigin`
  - `isJsonRequest`
  - `isPayloadTooLarge`
- Enforced these checks on both API POST routes before parsing body.
- Preserved existing behavior for valid user submissions.

## Recommended Next Security Steps
1. Replace in-memory limiter with shared persistent limiter (KV/Redis).
2. Add structured security logging for rejected origins/oversize requests.
3. Plan CSP tightening roadmap to reduce/remove `unsafe-inline` and `unsafe-eval`.
4. Add optional anti-bot challenge if submission abuse appears.
