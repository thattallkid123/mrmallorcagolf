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

export const TIER_NAMES = Object.keys(TIER_CONFIG);
