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

export function normalize(data) {
  const dateMode = choice(data.dateMode, ['fixed', 'flexible', 'unknown']);
  const golfers = number(data.golfers, 40);
  const window = choice(data.window, ['any', 'early', 'before-ten', 'morning', 'afternoon']);
  return {
    name: clean(data.name, 120), email: clean(data.email, 180).toLowerCase(), dateMode,
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
