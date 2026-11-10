function clean(value, limit) { return typeof value === 'string' ? value.trim().slice(0, limit) : ''; }
function choice(value, options) { return options.includes(value) ? value : ''; }
function number(value, max, min = 1) {
  if (value === '' || value == null) return null;
  const n = Number(value);
  return Number.isInteger(n) && n >= min && n <= max ? n : null;
}
function date(value) {
  if (!/^20\d\d-\d\d-\d\d$/.test(value || '')) return '';
  const time = Date.parse(value);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? value : '';
}

// Clients often type their name in lower case ("gijs verkaik") or all capitals. Fix only those two cases and
// leave a name that already has mixed case alone, so "McDonald" and "de Vries" are never overwritten.
const NAME_PARTICLES = new Set(['van', 'von', 'de', 'der', 'den', 'del', 'della', 'di', 'da', 'la', 'le', 'ter', 'ten', 'af', 'av']);
export function properName(value) {
  const name = typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
  if (!name || (name !== name.toLowerCase() && name !== name.toUpperCase())) return name;
  return name.toLowerCase().split(' ').map((word, i) => i > 0 && NAME_PARTICLES.has(word)
    ? word : word.replace(/(^|[-'’])(\p{L})/gu, (_, lead, letter) => lead + letter.toUpperCase())).join(' ');
}

// The courses box is prefilled from the enquiry, where clients type "son vida /son quint/alcanada". A short list of
// names is rewritten as "Son Vida, Son Quint, Alcanada", keeping de, del, la, of and the lower case inside a name.
// Anything that reads like a sentence (full stops, long phrases) is left exactly as the client wrote it.
const COURSE_LOWER = new Set(['de', 'del', 'della', 'la', 'las', 'el', 'los', 'des', 'da', 'do', 'di', 'of', 'the', 'at']);
export function tidyCourses(value) {
  const text = typeof value === 'string' ? value.trim() : '';
  if (!text || /[.!?:;]/.test(text)) return text;
  const parts = text.split(/\s*(?:\/|,|&|\+|\n|\band\b)\s*/i).map(part => part.trim()).filter(Boolean);
  if (!parts.length || parts.some(part => part.split(/\s+/).length > 5)) return text;
  return parts.map(part => part.split(/\s+/).map((word, i) => i > 0 && COURSE_LOWER.has(word.toLowerCase()) ? word.toLowerCase()
    : word.replace(/(^|[-'’])(\p{L})/gu, (_, lead, letter) => lead + letter.toUpperCase())).join(' ')).join(', ');
}

export function normalize(data) {
  const dateMode = choice(data.dateMode, ['fixed', 'flexible', 'unknown']);
  const golfers = number(data.golfers, 40);
  const window = choice(data.window, ['any', 'early', 'before-ten', 'morning', 'afternoon']);
  return {
    name: properName(clean(data.name, 120)), email: clean(data.email, 180).toLowerCase(), dateMode,
    from: dateMode === 'unknown' ? '' : date(data.from), to: dateMode === 'unknown' ? '' : date(data.to),
    golfers, rounds: number(data.rounds, 14), handicap: clean(data.handicap, 100), window,
    windowRule: window === 'any' ? '' : choice(data.windowRule, ['fixed', 'flexible']),
    priority: choice(data.priority, ['balance', 'price', 'times']),
    nearby: golfers > 4 ? choice(data.nearby, ['yes', 'flexible', 'unknown']) : '',
    courses: clean(data.courses, 500), area: clean(data.area, 120), budget: number(data.budget, 20000),
    buggies: number(data.buggies, golfers || 40, 0), clubs: number(data.clubs, golfers || 40, 0), notes: clean(data.notes, 700)
  };
}

export function valid(data) {
  return data.name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.golfers && data.window && data.priority
    && (data.dateMode === 'unknown' || (data.dateMode && data.from && data.to && data.from <= data.to));
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function shortDate(iso) { const [y, m, d] = iso.split('-').map(Number); return d + ' ' + MONTHS[m - 1] + ' ' + y; }
function datesText(brief) {
  if (!brief.from) return 'Not decided';
  const text = brief.to && brief.to !== brief.from ? shortDate(brief.from) + ' to ' + shortDate(brief.to) : shortDate(brief.from);
  return text + (brief.dateMode === 'flexible' ? ' (flexible)' : '');
}
const WINDOWS = { any: 'Any start time', early: 'Before 09:00', 'before-ten': 'Before 10:00', morning: '09:00 to 12:00', afternoon: 'After 12:00' };
const PRIORITIES = { balance: 'balance of price and time', price: 'lower price', times: 'preferred start times' };

// The facts Andy needs to judge a brief from the email alone, in the order he answers them.
export function briefSummaryLines(brief) {
  const lines = [['Dates', datesText(brief)]];
  lines.push(['Golfers', brief.golfers + (brief.rounds ? ', ' + brief.rounds + (brief.rounds === 1 ? ' round' : ' rounds') : '')]);
  if (brief.handicap) lines.push(['Handicap', brief.handicap]);
  lines.push(['Start times', (WINDOWS[brief.window] || '') + (brief.window !== 'any' && brief.windowRule ? (brief.windowRule === 'fixed' ? ', keep to this window' : ', other times welcome') : '') + ', priority ' + (PRIORITIES[brief.priority] || '')]);
  if (brief.courses) lines.push(['Must-play courses', brief.courses]);
  if (brief.area) lines.push(['Staying', brief.area]);
  if (brief.budget) lines.push(['Budget', '€' + brief.budget + ' per person']);
  if (brief.buggies != null || brief.clubs != null) lines.push(['Hire per round', (brief.buggies ?? 'not sure') + ' buggies, ' + (brief.clubs ?? 'not sure') + ' club sets']);
  if (brief.notes) lines.push(['Notes', brief.notes]);
  return lines;
}
