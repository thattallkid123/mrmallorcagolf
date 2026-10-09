(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MMGTripBriefs = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const known = value => value !== '' && value !== null && value !== undefined;
  const value = (item, fallback = 'To confirm') => known(item) ? String(item) : fallback;
  const line = (label, item, fallback) => `${label}: ${value(item, fallback)}`;
  const section = (title, rows) => `${title}\n${rows.map(row => `• ${row}`).join('\n')}`;
  const dates = (arrival, departure) => !arrival && !departure ? 'To confirm from first enquiry' : `${value(arrival, 'Arrival to confirm')} to ${value(departure, 'departure to confirm')}`;
  function facts(data, staff, afterCall = false) {
    const trip = data.trip || {};
    return Object.fromEntries(['arrival','departure','golfers','nonGolfers','children'].map(key => [key,
      afterCall && known(staff[key]) ? staff[key] : known(trip[key]) ? trip[key] : known(staff[key]) ? staff[key] : ''
    ]));
  }
  function agenda(data, staff, readable) {
    const f = facts(data, staff), p = data.preferences || {}, t = data.trip || {}, questions = [];
    if (!t.success) questions.push('Ask what would make the trip a success: the occasion and what matters most.');
    if (!f.arrival || !f.departure || f.departure <= f.arrival) questions.push('Check arrival, departure and date flexibility against the first enquiry.');
    if (!known(f.golfers) || !known(f.nonGolfers) || !known(f.children)) questions.push('Confirm exact golfers, non-golfing adults and children. A group-size band is enough for the first enquiry.');
    if (!staff.golfPlan) questions.push('Bring the golf route, preferred tee times and buggy requests from the first enquiry.');
    if (!p.stayHelp || p.stayHelp === 'open') questions.push('Decide whether the group needs accommodation help.');
    if (p.stayHelp === 'quote' && (!p.area || p.area === 'open')) questions.push('Choose a suitable base around the golf route and evening plans.');
    if (p.stayHelp === 'quote' && (!staff.roomPlan && (!known(p.rooms?.single) || !known(p.rooms?.twin) || !known(p.rooms?.double)))) questions.push('Agree the room mix, including which room types are not needed.');
    if (p.stayHelp === 'quote' && !p.hotelBudget) questions.push('Agree the accommodation budget per room, per night.');
    if (!p.transfers?.length) questions.push('Decide which transfers are needed.');
    if (p.transfers?.includes('airport') && !staff.flights && !(t.landingTime && t.departureTime)) questions.push('Confirm flight groups, timings and luggage, or when flight details will follow.');
    if ((p.restaurants?.length || p.presentation === 'yes' || p.presentation === 'maybe') && (!p.dinnerHelp || p.dinnerHelp === 'none')) questions.push('Clarify restaurant suggestions, booking help and the private-room request.');
    if (p.experiences?.length && !p.experienceHelp) questions.push('Decide which experiences need prices and which are just ideas.');
    if (p.experiences?.includes('balloon') && p.extraTiming === 'after-golf') questions.push('A balloon needs a free morning; check the golf schedule.');
    if (!staff.deadline) questions.push('Agree who decides for the group and their decision deadline.');
    return questions;
  }
  function call(data, staff = {}, r = {}) {
    const f = facts(data, staff), p = data.preferences || {}, questions = agenda(data, staff, r);
    return [
      'ANDY’S CALL PREPARATION',
      'Pre-call preferences. Read alongside the original enquiry; selections are not reservations.',
      section('CLIENT AND ENQUIRY', [line('Name', data.contact?.name), line('Email', data.contact?.email), line('Reference', data.enquiryRef, 'Planning draft; match manually')]),
      section('WHAT MATTERS MOST', [line('What would make it a success', data.trip?.success, 'Not added; ask first on the call')]),
      section('GROUP AND GOLF', [line('Trip type', r.tripType), line('Travel dates', dates(f.arrival, f.departure)), line('Dates source', data.trip?.arrival || data.trip?.departure ? 'Client update; compare with first enquiry' : staff.arrival || staff.departure ? 'Added by Andy from the enquiry' : 'First enquiry; not loaded in this page'), line('Flexibility', r.dateFlex), line('Golfers', f.golfers), line('Non-golfing adults', f.nonGolfers), line('Children', f.children), line('Golf plan from enquiry', staff.golfPlan), line('Golf update from client', data.trip?.courseNotes, 'No update added'), line('Play or coaching interest', r.golfFocus, 'None selected')]),
      section('HELP REQUESTED', [line('Accommodation', r.stayHelp), line('Area', r.area), line('Stay styles', r.stayStyle, 'None selected'), line('Hotel or villa in mind', p.hotelName, 'None named'), line('A hotel they have loved', p.lovedHotel, 'Not added'), line('Rooms', staff.roomPlan || r.rooms), line('Room budget per night', r.hotelBudget), line('Transfers', r.transfers), line('Landing time, day one', data.trip?.landingTime, 'Not known yet'), line('Flight time, last day', data.trip?.departureTime, 'Not known yet'), line('Hiring a car', r.carHire), line('Flight pattern', r.arrivalPattern), line('Restaurant help', r.dinnerHelp), line('Experience help', r.experienceHelp)]),
      section('IDEAS TO DISCUSS', [line('Restaurants', r.restaurants, 'None selected'), line('Dining style', r.diningStyle), line('Private room for golf prizes', r.presentation), line('Experiences', r.experiences, 'None selected'), line('Activity timing', r.extraTiming), line('Other interests', r.moreInterests, 'None selected'), line('Ages and practical needs shared by client', p.specialNeeds, 'None stated; check if relevant'), line('Client notes', p.notes, 'None added')]),
      section('QUESTIONS FOR THE CALL', questions.length ? questions : ['Check the priorities, budget and selected ideas with the group organiser.']),
      section('30-MINUTE CALL', ['0–5 min: group, occasion and what matters most.', '5–15 min: golf route, base, rooming and budget.', '15–25 min: transfers, meals and one or two useful extras.', '25–30 min: agree what to quote, decision deadline and next reply.']),
    ].join('\n\n');
  }
  function handoff(data, staff = {}, r = {}) {
    const f = facts(data, staff, true), p = data.preferences || {}, pending = [];
    if (!staff.reviewed) pending.push('Andy to review and confirm this brief after the call.');
    if (!staff.reference && !data.enquiryRef) pending.push('A group or enquiry reference');
    if (!f.arrival || !f.departure || f.departure <= f.arrival) pending.push('Travel dates');
    if (!known(f.golfers) || !known(f.nonGolfers) || !known(f.children)) pending.push('Exact travellers, including zero non-golfers or children');
    if (!staff.requests?.trim()) pending.push('A specific list of options or prices requested from Shane');
    if (!staff.deadline) pending.push('Client decision deadline');
    if (p.stayHelp === 'quote' && !staff.roomPlan) pending.push('Agreed room mix and accommodation budget');
    if (p.transfers?.includes('golf') && !staff.golfPlan) pending.push('Golf route and timings for transfers');
    if (p.transfers?.includes('airport') && !staff.flights) pending.push('Flight groups or provisional airport-transfer assumptions');
    if (p.specialNeeds && !staff.partnerNeeds) pending.push('Review the client’s practical needs and add the supplier-relevant details');
    const status = pending.length ? 'Draft: details still to confirm' : 'Reviewed by Andy: ready to request options';
    const total = [f.golfers, f.nonGolfers, f.children].every(known) ? Number(f.golfers) + Number(f.nonGolfers) + Number(f.children) : 'To confirm';
    return { status, pending, text: [
      'SHANE’S NON-GOLF BRIEF', status,
      section('REFERENCE AND TIMING', [line('Group reference', staff.reference || data.enquiryRef, 'Andy to assign'), 'Client contact: Andy', line('Travel dates', dates(f.arrival, f.departure)), line('Date flexibility', r.dateFlex), line('Total travellers', total), line('Golfers', f.golfers), line('Non-golfing adults', f.nonGolfers), line('Children', f.children), line('Client decision deadline', staff.deadline)]),
      section('PLEASE RETURN OPTIONS / PRICES FOR', [value(staff.requests, 'Andy to agree specific requests with the client on the call.')]),
      section('PLANNING DETAILS', [line('Trip type', r.tripType), line('Accommodation help', r.stayHelp), line('Area / base', r.area), line('Stay styles', r.stayStyle, 'No preference stated'), line('Hotel / villa in mind', p.hotelName, 'None named'), line('A hotel they have loved (taste guide)', p.lovedHotel, 'Not added'), line('Agreed rooms and accommodation budget', staff.roomPlan), line('Golf route / timing for transfers', staff.golfPlan), line('Transfers interested in', r.transfers), line('Hiring a car', r.carHire), line('Flight groups / assumptions', staff.flights || [data.trip?.landingTime && `Lands ${data.trip.landingTime} on day one`, data.trip?.departureTime && `Flies ${data.trip.departureTime} on the last day`].filter(Boolean).join('; ')), line('Dining style', r.diningStyle), line('Private room for prizes', r.presentation), line('Activity timing', r.extraTiming)]),
      section('CLIENT INTERESTS FOR CONTEXT', [line('Restaurant ideas', r.restaurants, 'None selected'), line('Experience ideas', r.experiences, 'None selected'), 'Andy’s request list above defines what needs checking and pricing.']),
      section('RECOMMENDATIONS ONLY', [value(staff.recommendations, 'None agreed. Confirm with Andy if an idea is outside the request list.')]),
      section('RELEVANT PRACTICAL NEEDS', [value(staff.partnerNeeds, p.specialNeeds ? 'Andy to review the client’s practical needs before sending.' : 'None stated in preferences; check any supplier requirements with Andy.')]),
      section('OPEN BEFORE SENDING', pending.length ? pending : ['No missing core details in this working brief. Supplier availability and terms still need checking.']),
      section('PLEASE REPLY WITH', ['Two or three feasible options for the agreed requests; flag anything unsuitable or unavailable.', 'Prices with currency, whether per person / room / group, and all inclusions and exclusions.', 'Availability, quote expiry, deposit and cancellation terms.', 'Who books, invoices and handles changes for each item; confirm with Andy.', 'Any missing information and when you expect to return the options.']),
      'This is a request for options. No booking or spend is authorised by this brief.',
    ].join('\n\n') };
  }
  return { call, handoff, agenda };
});
