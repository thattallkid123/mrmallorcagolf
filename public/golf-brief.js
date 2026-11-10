const byId = id => document.getElementById(id);
const form = byId('brief-form');
const stepPanels = [...form.querySelectorAll('[data-step]')];
const stepLabels = [...document.querySelectorAll('.step-list li')];
const currency = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 });
const dateLabel = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, symbol => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[symbol]);
const formatDate = value => dateLabel.format(new Date(`${value}T12:00:00Z`));
const labels = {
  dateMode: { fixed: 'Fixed', flexible: 'Flexible', unknown: 'Dates to decide' },
  window: { any: 'Any time', early: 'Before 09:00', 'before-ten': 'Before 10:00', morning: '09:00 to 12:00', afternoon: 'After 12:00' },
  priority: { balance: 'Balance of price and time', price: 'Lower price', times: 'Preferred times' },
  nearby: { yes: 'Tee off close together', flexible: 'A wider gap is fine', unknown: 'To decide' }
};

let step = 0;

function feedback(id, message = '') {
  const element = byId(id);
  element.textContent = message;
  element.hidden = !message;
}

function readBrief() {
  const data = Object.fromEntries([...new FormData(form)].map(([key, value]) => [key, String(value).trim()]));
  return { ...data, golfers: Number(data.golfers), rounds: Number(data.rounds) || null, budget: Number(data.budget) || null };
}

function syncQuestions() {
  const dateUnknown = form.elements.dateMode.value === 'unknown';
  byId('date-fields').hidden = dateUnknown;
  for (const id of ['from', 'to']) byId(id).disabled = dateUnknown;
  const players = Number(byId('golfers').value);
  byId('nearby-field').hidden = players <= 4;
  byId('nearby').disabled = players <= 4;
  byId('windowRule').disabled = byId('window').value === 'any';
  for (const id of ['buggies', 'clubs']) {
    const select = byId(id);
    const previous = select.value;
    const count = Number.isInteger(players) && players <= 40 ? Math.max(0, players) : 0;
    select.replaceChildren(new Option('Not sure yet', ''), new Option('None', '0'));
    for (let i = 1; i <= count; i++) select.add(new Option(String(i), String(i)));
    if ([...select.options].some(option => option.value === previous)) select.value = previous;
  }
}

function briefMarkup(data) {
  const dates = data.dateMode === 'unknown' ? labels.dateMode.unknown
    : [formatDate(data.from), data.from === data.to ? '' : formatDate(data.to)].filter(Boolean).join(' to ');
  const time = labels.window[data.window] + (data.windowRule === 'fixed' ? ' · keep to this window' : data.windowRule ? ' · other times welcome' : '');
  const hire = value => value === '' ? 'To decide' : value === '0' ? 'None' : value;
  const fields = [
    ['Name', data.name, true], ['Email', data.email, true], ['Playing dates', dates, true],
    ['Date flexibility', data.dateMode === 'unknown' ? '' : labels.dateMode[data.dateMode]],
    ['Golfers', data.golfers], ['Rounds to play', data.rounds || 'To decide'], ['Handicaps', data.handicap],
    ['Tee-off time', time], ['Priority', labels.priority[data.priority]], ['Groups tee off', labels.nearby[data.nearby]],
    ['Must-play courses', data.courses, true], ['Hotel or area', data.area, true],
    ['Golf budget per person', data.budget ? currency.format(data.budget) : 'Flexible'],
    ['Buggies per round', hire(data.buggies)], ['Hire club sets per round', hire(data.clubs)], ['Other notes', data.notes, true]
  ];
  return fields.filter(([, value]) => value !== '' && value != null)
    .map(([label, value, wide]) => `<div${wide ? ' class="brief-wide"' : ''}><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('');
}

function setStep(next, focus = true) {
  step = next;
  stepPanels.forEach((panel, index) => { panel.hidden = index !== step; });
  stepLabels.forEach((item, index) => index === step ? item.setAttribute('aria-current', 'step') : item.removeAttribute('aria-current'));
  byId('back').hidden = step === 0;
  byId('continue').textContent = step === 3 ? 'Send golf brief' : 'Continue';
  feedback('form-feedback');
  if (step === 3) byId('client-review').innerHTML = briefMarkup(readBrief());
  if (focus) focusView(`step-${step}-title`);
}

function focusView(id) {
  const heading = byId(id);
  heading.focus({ preventScroll: true });
  heading.scrollIntoView({ block: 'start' });
}


const context = new URLSearchParams(location.hash.slice(1)).get('context');
const ref = new URLSearchParams(location.search).get('ref');
const clientPanel = byId('client-view');
const complete = byId('client-complete');
const emailField = byId('email');
let sending = false;

async function request(action, brief) {
  const response = await fetch('/api/golf-brief', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ref, context, action, brief })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Could not open the golf brief.');
  return data;
}
form.addEventListener('change', event => {
  if (['dateMode', 'golfers', 'window'].includes(event.target.name)) syncQuestions();
});
byId('back').addEventListener('click', () => setStep(step - 1));
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (sending) return;
  feedback('form-feedback');
  const invalid = [...stepPanels[step].querySelectorAll('input, select, textarea')]
    .find(input => !input.checkValidity() || (input.required && !input.disabled && !input.value.trim()));
  if (invalid) {
    feedback('form-feedback', 'Check the highlighted answer before continuing.');
    invalid.focus();
    invalid.reportValidity();
    return;
  }
  const first = byId('from'), last = byId('to');
  if (step === 0 && !first.disabled && last.value < first.value) {
    feedback('form-feedback', 'The last playing day must be on or after the first.');
    last.focus();
    return;
  }
  if (step < 3) return setStep(step + 1);
  sending = true;
  byId('continue').disabled = true;
  try {
    const result = await request('submit', readBrief());
    if (result.alreadyReceived) byId('brief-received').textContent = 'I already have a brief for this enquiry. Please reply to my email if anything has changed.';
    clientPanel.hidden = true;
    complete.hidden = false;
    focusView('client-complete-title');
  } catch (error) { feedback('form-feedback', error.message); }
  finally { sending = false; byId('continue').disabled = false; }
});

// Turns the client's own wording ("12-13 December 2026", "10 Mar to 14 Mar 2027") into two dates.
// It answers only when the text is a plain day range with a year; anything else stays blank for the client.
function datesFromEnquiry(text) {
  const months = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12 };
  const mon = '(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)';
  const sep = '\\s*(?:-|to|until)\\s*';
  const t = String(text || '').toLowerCase().replace(/[–—]/g, '-').replace(/(\d)(?:st|nd|rd|th)\b/g, '$1').replace(/[.,]+$/, '').trim();
  const month = name => months[name.slice(0, name.startsWith('sept') ? 4 : 3)];
  let m, parts;
  if ((m = t.match(new RegExp('^' + mon + '\\s*(\\d{1,2})' + sep + '(\\d{1,2}),?\\s*(\\d{4})$')))) parts = [[+m[4], month(m[1]), +m[2]], [+m[4], month(m[1]), +m[3]]];
  else if ((m = t.match(new RegExp('^(\\d{1,2})' + sep + '(\\d{1,2})\\s+' + mon + '\\s+(\\d{4})$')))) parts = [[+m[4], month(m[3]), +m[1]], [+m[4], month(m[3]), +m[2]]];
  else if ((m = t.match(new RegExp('^(\\d{1,2})\\s+' + mon + sep + '(\\d{1,2})\\s+' + mon + '\\s+(\\d{4})$')))) parts = [[+m[5], month(m[2]), +m[1]], [+m[5], month(m[4]), +m[3]]];
  else if ((m = t.match(new RegExp('^(\\d{1,2})\\s+' + mon + '\\s+(\\d{4})' + sep + '(\\d{1,2})\\s+' + mon + '\\s+(\\d{4})$')))) parts = [[+m[3], month(m[2]), +m[1]], [+m[6], month(m[5]), +m[4]]];
  else if ((m = t.match(new RegExp('^(\\d{1,2})\\s+' + mon + '\\s+(\\d{4})$')))) parts = [[+m[3], month(m[2]), +m[1]]];
  if (!parts) return null;
  const iso = ([y, mo, d]) => {
    const date = new Date(Date.UTC(y, mo - 1, d));
    return date.getUTCFullYear() === y && date.getUTCMonth() === mo - 1 && date.getUTCDate() === d ? date.toISOString().slice(0, 10) : '';
  };
  const from = iso(parts[0]), to = iso(parts[1] || parts[0]);
  return from && to && to >= from ? { from, to } : null;
}

async function initBrief() {
  try {
    const { brief, originalDates } = await request('load');
    const guessed = !brief.from && !brief.to ? datesFromEnquiry(originalDates) : null;
    if (guessed) Object.assign(brief, guessed);
    if (originalDates) {
      const hint = document.createElement('p');
      hint.className = 'hint wide';
      hint.textContent = 'Dates from your enquiry: ' + originalDates;
      byId('date-fields').before(hint);
    }
    for (const [key, value] of Object.entries(brief)) {
      if (value !== '' && value != null && !['buggies', 'clubs'].includes(key) && form.elements[key]) form.elements[key].value = value;
    }
    if (brief.email) emailField.readOnly = true;
    syncQuestions();
    setStep(0, false);
    clientPanel.hidden = false;
    byId('client-loading').hidden = true;
  } catch (error) { byId('client-loading').textContent = error.message; }
}
initBrief();
