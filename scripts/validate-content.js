#!/usr/bin/env node

/**
 * Content Validation Script
 * Run: npm run check:content-validation
 *
 * Validates:
 * - PWAP tier structure (4 tiers, correct flags)
 * - Homepage tier structure
 * - All required fields present
 * - No structural errors before build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LANGUAGES = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'];
const TIER_CONFIG = {
  Solo: { featured: false, signature: false },
  Group: { featured: true, signature: false },
  'Signature Day': { featured: false, signature: true },
  'Plan Your Trip': { featured: false, signature: false },
};

/**
 * Validate tier structure
 */
function validateTiers(tiersArray, source) {
  if (!Array.isArray(tiersArray)) {
    throw new Error(`${source}: tiers must be an array`);
  }

  if (tiersArray.length !== 4) {
    throw new Error(
      `${source}: expected 4 tiers, got ${tiersArray.length}`
    );
  }

  tiersArray.forEach((tier, idx) => {
    if (!tier.name) {
      throw new Error(`${source}: Tier ${idx} missing name`);
    }
    if (typeof tier.href !== 'string') {
      throw new Error(`${source}: Tier "${tier.name}" missing href`);
    }
    if (!Array.isArray(tier.features) || tier.features.length < 3) {
      throw new Error(
        `${source}: Tier "${tier.name}" must have at least 3 features`
      );
    }

    const expected = TIER_CONFIG[tier.name];
    if (!expected) {
      throw new Error(`${source}: Unknown tier "${tier.name}"`);
    }

    if (tier.featured !== expected.featured) {
      throw new Error(
        `${source}: Tier "${tier.name}" featured=${tier.featured}, expected ${expected.featured}`
      );
    }

    if (tier.signature !== expected.signature) {
      throw new Error(
        `${source}: Tier "${tier.name}" signature=${tier.signature}, expected ${expected.signature}`
      );
    }
  });
}

/**
 * Validate PWAP content
 */
function validatePWAPContent(filePath) {
  const content = extractContent(filePath);
  if (!content) return false;

  LANGUAGES.forEach((lang) => {
    if (!content[lang]) {
      throw new Error(`[play-with-a-pro-content.js] Missing language: ${lang}`);
    }

    const langContent = content[lang];
    if (!langContent.packages || !langContent.packages.tiers) {
      throw new Error(
        `[play-with-a-pro-content.js] Language "${lang}" missing packages.tiers`
      );
    }

    validateTiers(langContent.packages.tiers, `play-with-a-pro-content.js [${lang}]`);
  });

  return true;
}

/**
 * Validate homepage content
 */
function validateHomepageContent(filePath) {
  const content = extractContent(filePath);
  if (!content) return false;

  LANGUAGES.forEach((lang) => {
    if (!content[lang]) {
      throw new Error(`[homepage-content.js] Missing language: ${lang}`);
    }

    const langContent = content[lang];
    if (!langContent.packages || !langContent.packages.tiers) {
      throw new Error(
        `[homepage-content.js] Language "${lang}" missing packages.tiers`
      );
    }

    validateTiers(langContent.packages.tiers, `homepage-content.js [${lang}]`);
  });

  return true;
}

/**
 * Main
 */
async function main() {
  console.log('🔍 Running content validation...\n');

  try {
    const repoRoot = path.join(__dirname, '..');

    // Import content files
    const { PLAY_WITH_A_PRO_CONTENT } = await import(
      path.join(repoRoot, 'src/lib/play-with-a-pro-content.js')
    );
    const { HOMEPAGE_CONTENT } = await import(
      path.join(repoRoot, 'src/lib/homepage-content.js')
    );

    // Validate PWAP
    LANGUAGES.forEach((lang) => {
      if (!PLAY_WITH_A_PRO_CONTENT[lang]?.packages?.tiers) {
        throw new Error(
          `[play-with-a-pro-content.js] Missing packages.tiers for ${lang}`
        );
      }
      validateTiers(
        PLAY_WITH_A_PRO_CONTENT[lang].packages.tiers,
        `play-with-a-pro-content.js [${lang}]`
      );
    });
    console.log('✅ play-with-a-pro-content.js validated');

    // Validate Homepage
    LANGUAGES.forEach((lang) => {
      if (!HOMEPAGE_CONTENT[lang]?.packages?.tiers) {
        throw new Error(
          `[homepage-content.js] Missing packages.tiers for ${lang}`
        );
      }
      validateTiers(
        HOMEPAGE_CONTENT[lang].packages.tiers,
        `homepage-content.js [${lang}]`
      );
    });
    console.log('✅ homepage-content.js validated');

    console.log('\n✅ Content validation passed');
    process.exit(0);
  } catch (err) {
    console.error('\n❌ Content validation failed:', err.message);
    process.exit(1);
  }
}

main();
