#!/usr/bin/env node

/**
 * Refactor Tier Flags
 *
 * Removes manual featured/signature flags from tier definitions and wraps them
 * with applyTierFlags() to use TIER_CONFIG as single source of truth.
 *
 * Run: node scripts/refactor-tier-flags.js
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const PWAP_FILE = path.join(REPO_ROOT, 'src/lib/play-with-a-pro-content.js');
const HOME_FILE = path.join(REPO_ROOT, 'src/lib/homepage-content.js');

/**
 * Remove featured/signature flags from a tier object definition
 */
function removeFlagsFromTier(tierCode) {
  // Remove featured: false, or featured: true,
  tierCode = tierCode.replace(/,?\s*featured:\s*(true|false),?\s*\n/g, '\n');
  // Remove signature: true, or signature: undefined,
  tierCode = tierCode.replace(/,?\s*signature:\s*(true|false|undefined),?\s*\n/g, '\n');
  // Clean up any trailing commas before closing brace
  tierCode = tierCode.replace(/,(\s*\})/g, '$1');
  return tierCode;
}

/**
 * Wrap tier object with applyTierFlags
 */
function wrapWithApplyTierFlags(tierCode) {
  return `applyTierFlags(${tierCode.trim()})`;
}

/**
 * Process PWAP file
 */
function processPWAPFile() {
  console.log('📝 Processing play-with-a-pro-content.js...');

  let content = fs.readFileSync(PWAP_FILE, 'utf8');

  // Find all tier objects (looking for { name: 'X', ... })
  // This is a simplified approach - match tier definitions
  const tierRegex = /\{\s*name:\s*['"](?:Solo|Group|Signature Day|Plan Your Trip|[^'"]+)['"],[^}]*?\}/gs;

  let count = 0;
  content = content.replace(tierRegex, (match) => {
    const cleaned = removeFlagsFromTier(match);
    const wrapped = wrapWithApplyTierFlags(cleaned);
    count++;
    return wrapped;
  });

  // Only write if changes were made
  if (count > 0) {
    fs.writeFileSync(PWAP_FILE, content, 'utf8');
    console.log(`  ✅ Wrapped ${count} tier definitions`);
  } else {
    console.log(`  ⚠️  No tier definitions found to wrap`);
  }
}

/**
 * Process homepage file
 */
function processHomepageFile() {
  console.log('📝 Processing homepage-content.js...');

  let content = fs.readFileSync(HOME_FILE, 'utf8');

  // For homepage, items are different structure - just remove the flags
  // Don't wrap since homepage isn't using applyTierFlags pattern
  let count = 0;
  const original = content;

  content = content.replace(/,?\s*featured:\s*(true|false),?\s*\n/g, '\n');
  content = content.replace(/,?\s*signature:\s*(true|false|undefined),?\s*\n/g, '\n');

  if (content !== original) {
    fs.writeFileSync(HOME_FILE, content, 'utf8');
    console.log(`  ✅ Removed featured/signature flags from homepage items`);
  } else {
    console.log(`  ⚠️  No changes needed`);
  }
}

console.log('🔧 Refactoring tier flags to use TIER_CONFIG...\n');

try {
  processPWAPFile();
  processHomepageFile();

  console.log('\n✅ Refactoring complete');
  console.log('⚠️  Review changes before committing');
  process.exit(0);
} catch (err) {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
}
