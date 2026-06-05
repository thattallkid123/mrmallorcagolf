# Personalized Shortlist Next Steps

Date: 2026-06-06

## What Changed In The Site

The course selector signup now sends extra MailerLite fields alongside the email address.

Files:

- `src/components/EmailSignup.jsx`
- `src/app/course-selector/CourseSelectorClient.jsx`

Current extra fields sent on signup:

- `selector_answers`
- `selector_shortlist`
- `selector_shortlist_names`

## What Each Field Contains

### `selector_answers`

One-line summary of the five answers from the selector.

Example:

`What's your handicap? Intermediate | What matters most? Scenery and setting | Trip length? Weekend | Budget preference? €150-250 | When are you visiting? Not sure yet`

### `selector_shortlist`

One-line summary of the five recommended courses with location and fee band.

Example:

`1. Club de Golf Alcanada - Port d'Alcudia - Peak €220 / Low €115 | 2. T Golf Calvia - Calvia - Peak €210 / Low €170 | 3. Son Muntaner - Son Vida, Palma - Peak €250 / Low €125`

### `selector_shortlist_names`

Just the course names, comma-separated.

Example:

`Club de Golf Alcanada, T Golf Calvia, Son Muntaner, Golf Son Termes, Golf Son Gual`

## What To Do In MailerLite

Create these custom fields in MailerLite with the exact same keys:

1. `selector_answers`
2. `selector_shortlist`
3. `selector_shortlist_names`

After that, new signups from the course selector should store those values against the subscriber.

## Better Email 1 Direction

The current Email 1 is a generic planning email.

The stronger version should:

1. Acknowledge that they used the selector
2. Show their shortlist names
3. Give one short line of context around that type of shortlist
4. Link them back to the course pages or course guide
5. Keep the CTA soft

### Suggested Structure For Personalized Email 1

Subject:

`Your Mallorca course shortlist`

Opening:

`Thanks for using the Mallorca Course Selector. Based on your answers, this is the shortlist the selector produced for you:`

Shortlist block:

`{{ selector_shortlist_names }}`

Follow-up:

`That is not a final trip plan, but it is a much better starting point than choosing courses by name alone.`

Then:

- one paragraph on why order, travel, budget, and group fit still matter
- one link back to `/golf-courses`
- one soft CTA to `/plan-your-trip`

## Recommended Sequence After That

Keep Emails 2 to 4 mostly generic, because they are teaching emails:

1. mistakes golfers make planning Mallorca
2. best course logic for different groups
3. soft CTA if they want help planning it

## Important Limitation

This only helps with new signups after the MailerLite custom fields are created.

It does not retroactively personalize old subscribers.

## Most Useful Next Move

1. Create the three MailerLite custom fields
2. Confirm one new signup stores values in those fields
3. Update Email 1 to reference the stored shortlist names
4. Leave Emails 2 to 4 as trust-building follow-up emails
