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

const globalsCss = read('src/styles/globals.css');

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
