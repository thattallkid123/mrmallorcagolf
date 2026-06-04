# MailerLite Handover

Date: 2026-06-03

## Current Status

- Cloudflare DNS is correctly configured for both Zoho Mail and MailerLite.
- MailerLite shows `mrmallorcagolf.com` as authenticated.
- Zoho MX remains live:
  - `mx.zoho.eu`
  - `mx2.zoho.eu`
  - `mx3.zoho.eu`
- The main English site signup flow now uses MailerLite as the backend.

## DNS State

Published TXT records on `mrmallorcagolf.com`:

```txt
mailerlite-domain-verification=fd5c5dc16776a4159c8e697179e2e07cd841a4ad
v=spf1 include:_spf.mlsend.com include:spf.mlsend.com include:zohomail.eu ~all
zoho-verification=zb17868552.zmverify.zoho.eu
```

Published DKIM CNAME:

```txt
litesrv._domainkey.mrmallorcagolf.com -> litesrv._domainkey.mlsend.com
```

## MailerLite Assets

- Form name: `Course Selector Results`
- Group: `Course Selector Leads`
- Share URL:
  - `https://preview.mailerlite.io/forms/2404105/189284603205256243/share`
- Native site form action:
  - `https://dashboard.mailerlite.com/jsonp/2404105/forms/189284603205256243/subscribe`

## Important Site Decision

The site no longer needs to depend on the MailerLite hosted iframe for the main English signup flow.

Instead, the site posts directly to the MailerLite form endpoint using the MMG-styled form component.

That means:

- `/course-selector` uses a native MMG form with MailerLite backend submission.
- `/subscribe` uses the same native MMG form with MailerLite backend submission.
- The MailerLite hosted share page can be cleaned up later without blocking the site.

## Files Changed

- [signup-config.js](C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/signup-config.js)
- [EmailSignup.jsx](C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/components/EmailSignup.jsx)
- [CourseSelectorClient.jsx](C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/course-selector/CourseSelectorClient.jsx)
- [SubscribeClient.jsx](C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/subscribe/SubscribeClient.jsx)
- [PlanningGuideCta.jsx](C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/components/PlanningGuideCta.jsx)
- [Footer.jsx](C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/components/Footer.jsx)
- [globals.css](C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/styles/globals.css)

## Sender Address Guidance

Recommended now:

- Use `andy@mrmallorcagolf.com` first if that mailbox is already active and monitored.

Possible later:

- Use `info@mrmallorcagolf.com` if it exists as a real mailbox or alias in Zoho and you want a more generic sender identity.

Important:

- MailerLite can authenticate the domain.
- Zoho must still actually receive the replies for whichever sender address is used.

## Next Steps

1. Decide the sender identity inside MailerLite:
   - `andy@mrmallorcagolf.com`
   - or `info@mrmallorcagolf.com` after confirming the mailbox or alias exists in Zoho

2. Create the first MailerLite automation for `Course Selector Leads`:
   - Email 1: shortlist / planning note delivery
   - Email 2: Mallorca planning mistakes
   - Email 3: what a day with Andy looks like
   - Email 4: soft booking CTA

3. Clean or recreate the hosted MailerLite form if you want to use the public share page directly.

4. Improve the recommendation logic on `/course-selector` so the shortlist feels more like Andy's actual judgment.

5. If desired, create a second dedicated MailerLite form for general planning notes separate from the course selector flow.
