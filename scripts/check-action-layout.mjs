import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), 'utf8');
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertIncludes(source, needle, label) {
  assert(source.includes(needle), `${label} is missing expected source: ${needle}`);
}

function assertRegex(source, pattern, label) {
  assert(pattern.test(source), `${label} is missing expected pattern: ${pattern}`);
}

const shotTrackerJs = read('src/app/(en)/shot-tracker/shot-tracker-prototype.jsx');
const shotTrackerCss = read('src/app/(en)/shot-tracker/shot-tracker.module.css');
const globalsCss = read('src/styles/globals.css');

assertIncludes(
  shotTrackerJs,
  '`${styles.buttonRow} ${styles.trackingActionRow}`',
  'Shot Tracker tracking action group',
);
assertIncludes(
  shotTrackerJs,
  '`${styles.buttonRow} ${styles.roundActionRow}`',
  'Shot Tracker round action group',
);
assertIncludes(
  shotTrackerJs,
  '`${styles.buttonRow} ${styles.shotActionRow}`',
  'Shot Tracker single-shot action group',
);
assertRegex(
  shotTrackerCss,
  /\.trackingActionRow,\s*\.roundActionRow\s*\{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/m,
  'Shot Tracker peer action rows',
);
assertRegex(
  shotTrackerCss,
  /\.trackingActionRow \.primaryButton,\s*\.roundActionRow \.primaryButton\s*\{[\s\S]*?grid-column:\s*1 \/ -1;/m,
  'Shot Tracker primary action span',
);
assertRegex(
  shotTrackerCss,
  /\.buttonRow:not\(\.trackingActionRow\):not\(\.roundActionRow\)\s*\{[\s\S]*?flex-direction:\s*column;/m,
  'Shot Tracker intentional single-action stacks',
);

assertRegex(
  globalsCss,
  /@media \(max-width:\s*520px\)\s*\{[\s\S]*?\.gdb-nav-row\s*\{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*1fr 1fr;/m,
  'Golf Day Builder mobile nav row',
);
assertRegex(
  globalsCss,
  /\.gdb-cta-grid\s*\{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*1fr 1fr;/m,
  'Golf Day Builder mobile CTA row',
);
assertRegex(
  globalsCss,
  /\.gdb-cta-grid > \.gdb-btn-gold,\s*\.gdb-cta-grid > \.gdb-btn-pine\s*\{[\s\S]*?grid-column:\s*auto;/m,
  'Golf Day Builder peer CTA pair',
);

console.log('Action layout source guard passed.');
