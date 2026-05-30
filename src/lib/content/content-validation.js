/**
 * Content Validation & Schema Checks
 *
 * Runs at build time to catch structural errors before deploy.
 * Used by: check:content npm script
 */

import { TIER_CONFIG, TIER_NAMES, validateTierFlags } from './tier-definitions.js';

/**
 * Validate tier objects in content
 * @param {object} tiersArray - Array of tier objects from content file
 * @param {string} source - File name for error reporting
 * @throws if any tier is invalid
 */
export function validateTiers(tiersArray, source) {
  if (!Array.isArray(tiersArray)) {
    throw new Error(
      `[${source}] tiers must be an array, got ${typeof tiersArray}`
    );
  }

  if (tiersArray.length !== TIER_NAMES.length) {
    throw new Error(
      `[${source}] Expected ${TIER_NAMES.length} tiers, got ${tiersArray.length}. Tier names: ${TIER_NAMES.join(', ')}`
    );
  }

  tiersArray.forEach((tier, idx) => {
    // Check required fields
    if (!tier.name) {
      throw new Error(`[${source}] Tier ${idx} missing required field: name`);
    }
    if (typeof tier.href !== 'string') {
      throw new Error(
        `[${source}] Tier "${tier.name}" missing required field: href`
      );
    }
    if (!Array.isArray(tier.features) || tier.features.length < 3) {
      throw new Error(
        `[${source}] Tier "${tier.name}" must have at least 3 features`
      );
    }

    // Validate tier flags match TIER_CONFIG
    try {
      validateTierFlags(tier);
    } catch (err) {
      throw new Error(`[${source}] ${err.message}`);
    }
  });
}

/**
 * Validate PWAP content structure
 * @param {object} content - PLAY_WITH_A_PRO_CONTENT
 * @throws if structure is invalid
 */
export function validatePWAPContent(content) {
  const languages = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'];

  languages.forEach((lang) => {
    if (!content[lang]) {
      throw new Error(`[play-with-a-pro-content.js] Missing language: ${lang}`);
    }

    const langContent = content[lang];

    // Check required sections exist
    const requiredSections = ['hero', 'day', 'included', 'packages'];
    requiredSections.forEach((section) => {
      if (!langContent[section]) {
        throw new Error(
          `[play-with-a-pro-content.js] Language "${lang}" missing section: ${section}`
        );
      }
    });

    // Validate tiers
    if (!langContent.packages.tiers) {
      throw new Error(
        `[play-with-a-pro-content.js] Language "${lang}" missing packages.tiers`
      );
    }

    validateTiers(langContent.packages.tiers, `play-with-a-pro-content.js [${lang}]`);
  });
}

/**
 * Validate homepage content structure
 * @param {object} content - HOMEPAGE_CONTENT
 * @throws if structure is invalid
 */
export function validateHomepageContent(content) {
  const languages = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'];

  languages.forEach((lang) => {
    if (!content[lang]) {
      throw new Error(`[homepage-content.js] Missing language: ${lang}`);
    }

    const langContent = content[lang];

    if (!langContent.packages || !langContent.packages.tiers) {
      throw new Error(
        `[homepage-content.js] Language "${lang}" missing packages.tiers`
      );
    }

    validateTiers(
      langContent.packages.tiers,
      `homepage-content.js [${lang}]`
    );
  });
}

/**
 * Run all content validations
 * Call this in check:content script
 */
export async function runAllValidations() {
  try {
    const { PLAY_WITH_A_PRO_CONTENT } = await import('../play-with-a-pro-content.js');
    const { HOMEPAGE_CONTENT } = await import('../homepage-content.js');

    validatePWAPContent(PLAY_WITH_A_PRO_CONTENT);
    validateHomepageContent(HOMEPAGE_CONTENT);

    console.log('✅ Content validation passed');
    return { success: true };
  } catch (err) {
    console.error('❌ Content validation failed:', err.message);
    return { success: false, error: err.message };
  }
}
