# MMG Booking & Pricing — Business Logic Reference

*For use in Claude Code / Cowork. Covers all booking, pricing, and cancellation rules for Mr Mallorca Golf client proposals.*

---

## Business Model — Tee Time Bookings

Andy books tee times **directly with golf courses** using contracted tour operator rates (typically 10% off rack rate). He adds a **5% management fee** on the total cost (green fees + extras) and passes everything else to the client at cost.

**Not a travel agent. Not a tour operator. A PGA professional who has negotiated direct contracts with Mallorca's courses.**

---

## Pricing Structure

| Line item | How it's calculated |
|---|---|
| Green fees | Contracted TO rate per player per round |
| Buggy hire | Course rate x number of buggies x number of rounds |
| Compulsory extras | Passed at cost (e.g. insurance licence at Alcanada EUR3pp, Capdepera EUR3pp) |
| Management fee | 5% of (green fees + buggy + extras) total |
| **Client total** | Sum of all above |

**Always itemise.** Clients should see exactly what they're paying for.

---

## Payment Schedule

| Payment | Amount | Due |
|---|---|---|
| Deposit | **5% of total** (management fee, rounded to nearest €10) | On confirmation -- secures tee times |
| Balance | **Remainder** | **30 days before first round** |

For a trip starting 26 Sep 2026 -> balance due **26 August 2026**.

**The deposit equals Andy's management fee and is non-refundable** — this covers the work done to source and hold tee times. The balance covers the course costs and is subject to the cancellation policy below.

**No tee times are held until deposit is received.**

Payment by bank transfer. Invoice issued for each payment.

---

## Cancellation Policy (client-facing)

Based on direct course contracts. Uses the strictest policy across courses on the itinerary.

**Cancellation window is per individual round, not the start of the trip.**

| Notice before each individual round | Green fee charge | Service fee |
|---|---|---|
| 7+ days | No charge | No charge |
| 3-6 days | 50% | Non-refundable |
| 0-2 days | 100% | Non-refundable |
| No show | 100% | Non-refundable |

**Key principle:** Andy passes on exactly what the courses charge. No markup on cancellation costs.

Cancellations must be received **in writing** (email to andy@mrmallorcagolf.com).

---

## Course-Specific Cancellation Terms (verified May 2026)

| Course | Individual (1-5 players) | Notes |
|---|---|---|
| Son Gual | Cancel 2+ days free | More lenient -- use Son Servera as client-facing standard |
| Son Servera | 0-2 days = 100%, 3-6 days = 50%, 7+ = free | Strictest policy -- use this as baseline |
| Voli contract (Pula, Vall d'Or, Canyamel, Capdepera) | 0-3 days = 100%, 4-6 days = 50%, 7+ = free | Slightly stricter on the 0-3 day window |

*Andy's 3-player groups fall under "individual" at Son Gual and Son Servera. Use Son Servera's policy (3-6 days = 50%) as the client-facing standard -- it's the strictest and safest.*

---

## Itinerary -- September 2026 Booking (live booking as of May 2026)

| Date | Course | Time | Players | Buggies |
|---|---|---|---|---|
| Fri 26 Sep 2026 | Son Servera | 09:10 | 3 | 2 |
| Sat 27 Sep 2026 | Pula Golf | 09:33 | 3 | 2 |
| Sun 28 Sep 2026 | Capdepera Golf | 09:45 | 3 | 2 |
| Mon 29 Sep 2026 | Son Gual | 10:00 | 3 | 2 |
| Wed 1 Oct 2026 | Vall d'Or Golf | 10:00 | 3 | 2 |
| Thu 2 Oct 2026 | Canyamel Golf | 09:50 | 3 | 2 |
| Fri 3 Oct 2026 | Club de Golf Alcanada | 10:12 | 3 | 2 |

**Deposit deadline:** Immediately (tee times being held, not confirmed)
**Balance deadline:** 26 August 2026 (30 days before first round)
**Client total (3 players, 7 rounds):** ~EUR4,000 (confirm exact figure once all course invoices locked in)

---

## Status -- Autonomo

Andy is in the process of registering as autonomo (Spanish self-employed) as of May 2026. Until registration is complete, invoices should note this. Once registered, add fiscal ID (NIF) to all invoices.

---

## Client Document

The branded Word doc for attaching to proposals is: `MMG-Booking-Terms-Sep2026.docx`

**Before sending to client:**
- Add bank transfer details to the invoice section
- Confirm the final green fee total once all course bookings are locked (currently shown as ~EUR4,000)
- Add NIF once autonomo registration is complete

---

## Notes for Proposal Copy

- Always say tee times are booked "directly with the courses" -- this is a differentiator vs. booking apps like OnTee, Mallorca Golf, Tee One
- Never say "tour operator" to describe Andy -- he's a PGA professional using trade access
- Travel insurance recommendation should appear in every proposal with cancellation terms
- Deposit language: "This is the management fee and is non-refundable -- your tee times are confirmed once this is received"
- Balance language: "Due 30 days before your first round" (always give the specific date)
- Management fee is the deposit (5%, rounded to nearest €10) and is non-refundable once tee times are booked (work already done)
- The 30-day balance deadline gives Andy a 15-day window to pay courses before their latest cancellation deadline
