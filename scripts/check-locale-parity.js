#!/usr/bin/env node

/**
 * Locale Parity Checker
 *
 * Verifies that all 7 language versions have identical package/tier structure
 * and featured/signature flags. Run: npm run check:locale-parity
 *
 * Checks (per locale, compared positionally — tier NAMES are localized so they
 * can't be matched by an English key):
 * - play-with-a-pro-content.js: packages.tiers — 4 tiers, canonical flag pattern
 * - homepage-content.js: packages.items — canonical flag pattern
 *
 * Data is pulled through the real getter functions (getPlayWithAProContent /
 * getHomeContent) via dynamic ESM import, so locale overrides are applied — the
 * same approach as check-offers-consistency.js. The previous version used a
 * `module.exports` regex + eval (silently failed on these `export const` ESM
 * modules) and matched tiers by English name (broken once names are translated).
 */

const path = require('path');
const { pathToFileURL } = require('url');

const LANGUAGES = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'];

// Canonical flag pattern by tier position: [featured, signature].
// index 0 Solo, 1 Group, 2 Signature Day, 3 Plan Your Trip.
const EXPECTED_FLAGS = [
  { featured: false, signature: false },
  { featured: true, signature: false },
  { featured: false, signature: true },
  { featured: false, signature: false },
];

let hasErrors = false;

async function importModule(relativePath) {
  const absolutePath = path.join(__dirname, '..', relativePath);
  return import(pathToFileURL(absolutePath).href);
}

// PWAP uses packages.tiers, homepage uses packages.items. Normalize flags to
// booleans (some items omit the keys entirely, meaning false).
function tiersFor(content) {
  const list = content?.packages?.tiers || content?.packages?.items;
  if (!list) return null;
  return list.map((t) => ({ featured: !!t.featured, signature: !!t.signature }));
}

function checkFile(label, relPath, getContent, expectExactCount) {
  console.log(`\n📋 Checking ${label}...`);

  const enFlags = tiersFor(getContent('en'));
  if (!enFlags) {
    console.log('  ❌ [EN] Missing packages.tiers/items');
    hasErrors = true;
    return;
  }

  const errors = [];

  // 1. English must match the canonical pattern (guards against a global drift).
  if (JSON.stringify(enFlags) !== JSON.stringify(EXPECTED_FLAGS)) {
    errors.push(`  ❌ [EN] Flag pattern ${JSON.stringify(enFlags)} != expected ${JSON.stringify(EXPECTED_FLAGS)}`);
  }

  LANGUAGES.forEach((lang) => {
    const flags = tiersFor(getContent(lang));
    if (!flags) {
      errors.push(`  ❌ [${lang.toUpperCase()}] Missing packages.tiers/items`);
      return;
    }
    if (expectExactCount && flags.length !== EXPECTED_FLAGS.length) {
      errors.push(`  ❌ [${lang.toUpperCase()}] Expected ${EXPECTED_FLAGS.length} tiers, found ${flags.length}`);
    }
    if (JSON.stringify(flags) !== JSON.stringify(enFlags)) {
      errors.push(`  ❌ [${lang.toUpperCase()}] Flags differ from English: ${JSON.stringify(flags)}`);
    }
  });

  if (errors.length > 0) {
    console.log(errors.join('\n'));
    hasErrors = true;
  } else {
    console.log(`  ✅ All ${LANGUAGES.length} locales match the canonical flag pattern`);
  }
}

async function main() {
  console.log('🚀 Running locale parity checks...\n');

  const { getPlayWithAProContent } = await importModule('src/lib/play-with-a-pro-content.js');
  const { getHomeContent } = await importModule('src/lib/homepage-content.js');

  checkFile('play-with-a-pro-content.js', 'play', getPlayWithAProContent, true);
  checkFile('homepage-content.js', 'home', getHomeContent, false);

  console.log('\n' + '='.repeat(60));
  if (hasErrors) {
    console.log('❌ Locale parity check FAILED');
    process.exit(1);
  }
  console.log('✅ Locale parity check PASSED');
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Locale parity check crashed:', err.message);
  process.exit(1);
});
