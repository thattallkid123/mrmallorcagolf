## MailerLite automation status

Date: 2026-06-04

Automation:
- `Course Selector Welcome Sequence`
- Status: `Active`
- Trigger group: `Course Selector Leads`
- Sender email: `info@mrmallorcagolf.com`

Current live step order:
1. `Time delay 1` -> wait `2 day(s)`
2. `Email 1 - Shortlist`
3. `Time delay 2` -> wait `3 day(s)`
4. `Email 2 - Planning mistakes`
5. `Email 3 - Group choice`
6. `Time delay 3` -> wait `4 day(s)`
7. `Email 4 - Planning help`

Email subjects:
- `Your Mallorca course shortlist`
- `The mistake most golfers make planning Mallorca`
- `How to choose courses for your group`
- `If you want help planning the trip`

Important note:
- The workflow is active and structurally complete.
- The current timing is not the original "immediate first email" version. Email 1 currently sends after a `2 day(s)` delay because that was the existing step order in the active workflow build.
- If we want the first email to send immediately, we should pause the automation, rebuild the opening step order, and then reactivate.
