---
name: api-route-safety
description: The security contract for API routes and data-collecting features on mrmallorcagolf.com — the four request guards every route needs, the cron-route exception, and the privacy-policy re-check that any new form/tool/integration triggers. Use when adding or editing anything under src/app/api/, adding a form or lead-magnet flow, or wiring up a new third-party integration (email, list host, analytics, storage).
---

# API route & data-collection safety

`npm run check:api-safety` enforces the route guards automatically (wired into `check:content`). This file is the *why* and the parts a script can't check — especially the privacy surface, which no automated check catches.

Origin: 2026-08-14 security review. No committed secrets or injection paths found. Fixed then: an unauthenticated `/api/cron/indexnow` (now `CRON_SECRET`-gated, plus a missing `GET` handler — Vercel cron sends GET, not POST), an SSRF in `/api/og`'s `image` param (now same-origin-only), and a too-high rate limit on `/api/send-itinerary` (it mails a caller-supplied address).

## 1. The four guards — every JSON route

Open every route under `src/app/api/` with these, in this order, from `src/lib/request-safety.js`. **Copy `src/app/api/contact/route.js`** rather than writing them fresh.

1. `isAllowedOrigin(request)` → 403
2. `isJsonRequest(request)` → 415
3. `isPayloadTooLarge(request, <cap>)` → 413
4. `await checkRateLimit(getClientKey(request, '<scope>'), <n>, <windowMs>)` → 429

Then:
- Every user string through `sanitizeText` / `sanitizeMultilineText` with a length cap.
- Every value reaching email HTML through `escapeHtml`.
- Every `tool` / `guide` / type discriminator checked against an allow-list object — **never** used to build a path, URL, or template name.
- A `website` honeypot on any route a form posts to.
- Never return a raw `error.message` to the caller.

**Never** interpolate a request value into a `fetch()` host, a filesystem path, or a `dangerouslySetInnerHTML` payload. Server-side `fetch`/image targets must be same-origin (a path, not an absolute URL) or a hardcoded third-party host.

## 2. Cron routes — the exception

Cron routes get no `Origin` header, so the four guards don't apply. They need `Authorization: Bearer ${process.env.CRON_SECRET}` instead (Vercel injects this once `CRON_SECRET` is set as a Vercel env var — it must match `.env.local`). **Vercel cron sends GET, not POST** — a cron route with only a POST handler is silently dead.

## 3. Public GET routes

Rare and deliberate. None currently exist — `/api/og` was the one example (deleted when og:image switched to plain course photos; see "Drop redundant text-on-image OG cards" in git log). A route that must stay fetchable by crawlers or scrapers needs allowlisting in `scripts/check-api-safety.mjs` with a stated reason and a required-property check (e.g. a same-origin constraint on any param that builds a fetch/image target) — that friction is intentional.

## 4. Privacy surface — no script catches this

**Any new form, tool, quiz, integration, or API route means the privacy policy is presumed stale until checked.** This is a code task, not a legal one: keep `src/app/(en)/privacy-policy/page.jsx` and `src/app/es/privacy-policy/page.jsx` factually matched to what the code does. Andy makes the legal calls; you keep the description honest.

Before shipping anything that accepts a visitor keystroke or fires a third-party request:

1. **New field collected?** If it reaches a third party it must be named in Data Sharing (§7). "Email address and related signup data" does not cover handicap, trip dates, budget band, group size, or free-text notes — list what actually leaves the site.
2. **New processor?** Any new vendor receiving personal data goes in §7 *by name*, with where it processes. Adding a key to `.env.local` and adding the vendor to §7 are the same task — do both or neither.
3. **New cookie, localStorage key, or third-party script?** §6 claims cookies are analytics-only. Functional/UI state (e.g. `HomepageLeadPopup` dismissal) is consent-exempt and fine; advertising or cross-site anything is not.
4. **Does it enrol anyone in email they didn't ask for?** §3 promises no unsolicited marketing without explicit consent. A form whose stated purpose is a PDF but which also adds the address to a nurture group breaks that promise in code. Keep the marketing opt-in a separate, unchecked, clearly-labelled box — the `subscribeNewsletter` pattern in `LeadMagnetPage.jsx` is the reference.
5. **Point-of-collection notice.** GDPR Art. 13 wants it where data is entered, not only in the footer. New forms get a privacy-policy link next to the submit button.
6. **Bump `Last updated:`** on both EN and ES policy pages in the same commit, and mirror wording changes into ES — they drift because only EN gets edited.
7. **New locale-facing legal need?** `LEGAL_LOCALES` in `src/lib/site.js` is `{en, es}`; other locales fall back to English via `getLegalPath`. That's graceful, not a 404 — don't "fix" it by adding broken routes.

**Why this is a standing rule:** audited 2026-08-14 — the policy was last edited 7 June 2026 while five data-collecting routes landed 14 June – 4 July. Nothing malicious; each feature just shipped without anyone re-reading the policy, so it silently stopped describing the site. `check:content` validates structure and copy, never whether a stated data practice is still true.

Two rules from the same audit:
- **Verify vendor compliance claims live before writing them into policy text.** Certifications change and training knowledge goes stale. Confirmed live 2026-08-14: MailerLite is Lithuania/EU-based (no transfer clause needed); Google, Resend and Vercel hold DPF certification; Upstash does not (named under Standard Contractual Clauses instead).
- **Keep compliance-driven UI minimal.** Reuse existing small-print styling (the `ToolTrustLine` / "No spam. Unsubscribe any time." pattern) rather than adding a prominent new element. Andy has explicitly ruled out a cookie banner, matching peer sites his size — compliance UI here stays quiet.

## 5. Periodic (quarterly, or before a batch of new routes)

- `npm audit` — DoS-only advisories in build-time deps are low priority, don't chase them.
- Confirm `UPSTASH_REDIS_REST_URL` / `_TOKEN` are still set in Vercel. Without them the rate limiter silently degrades to per-instance in-memory and the configured limits stop meaning much.
- New third-party integration? Key goes in `.env.local` + Vercel env vars, never a source file, never a log line. Confirm the vendor's outbound domain is in the `connect-src` CSP directive in `next.config.js`.
