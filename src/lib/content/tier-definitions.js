/**
 * Tier Definitions (Single Source of Truth)
 *
 * This is the canonical definition of tier structure and flags.
 * All content files that reference tiers MUST use these values.
 *
 * Changes here automatically apply to all pages.
 * Last updated: 2026-05-30 (Added Plan Your Trip, fixed featured flags)
 */

export const TIER_CONFIG = {
  Solo: {
    featured: false,
    signature: false,
  },
  Group: {
    featured: true, // GREEN tier
    signature: false,
  },
  'Signature Day': {
    featured: false,
    signature: true, // GOLD tier
  },
  'Plan Your Trip': {
    featured: false,
    signature: false, // CREAM tier
  },
};

/**
 * Get tier flags by name
 * @param {string} tierName - e.g., 'Solo', 'Group', 'Signature Day', 'Plan Your Trip'
 * @returns {object} { featured: boolean, signature: boolean }
 */
export function getTierFlags(tierName) {
  const config = TIER_CONFIG[tierName];
  if (!config) {
    throw new Error(
      `Unknown tier: "${tierName}". Valid tiers: ${Object.keys(TIER_CONFIG).join(', ')}`
    );
  }
  return config;
}

/**
 * Validate that a tier object has correct flags
 * @param {object} tier - { name, featured, signature, ... }
 * @throws if tier flags don't match TIER_CONFIG
 */
export function validateTierFlags(tier) {
  const expected = TIER_CONFIG[tier.name];
  if (!expected) {
    throw new Error(
      `Validation error: unknown tier "${tier.name}". Valid tiers: ${Object.keys(TIER_CONFIG).join(', ')}`
    );
  }

  if (tier.featured !== expected.featured) {
    throw new Error(
      `Validation error: Tier "${tier.name}" has featured=${tier.featured}, expected ${expected.featured}`
    );
  }

  if (tier.signature !== expected.signature) {
    throw new Error(
      `Validation error: Tier "${tier.name}" has signature=${tier.signature}, expected ${expected.signature}`
    );
  }
}

/**
 * All valid tier names (in display order)
 */
export const TIER_NAMES = Object.keys(TIER_CONFIG);

/**
 * Count of tiers (should always be 4)
 */
export const TIER_COUNT = TIER_NAMES.length;
