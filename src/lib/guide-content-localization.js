const LOCALIZED_OVERLAY_KEYS = new Set([
  'title',
  'description',
  'image',
  'imageAlt',
  'imagePath',
  'badge',
  'badgeGold',
  'readTime',
  'updated',
  'intro',
  'related',
  'headers',
  'rows',
  'items',
  'text',
  'caption',
  'alt',
  'label',
  'attribution',
  'linkLabel',
  'href',
  'internal',
  'external',
])

export function mergeLocalizedContent(baseValue, localizedValue) {
  if (localizedValue == null) return baseValue

  if (Array.isArray(baseValue) && Array.isArray(localizedValue)) {
    if (baseValue.length !== localizedValue.length) return localizedValue
    if (baseValue.some(Array.isArray)) return localizedValue
    if (baseValue.every((item) => item == null || typeof item !== 'object')) return localizedValue

    return baseValue.map((item, index) => mergeLocalizedContent(item, localizedValue[index]))
  }

  if (
    baseValue &&
    localizedValue &&
    typeof baseValue === 'object' &&
    typeof localizedValue === 'object' &&
    !Array.isArray(baseValue) &&
    !Array.isArray(localizedValue)
  ) {
    const merged = { ...baseValue }

    for (const [childKey, childValue] of Object.entries(localizedValue)) {
      if (childKey === 'type') continue
      merged[childKey] = childKey in baseValue ? mergeLocalizedContent(baseValue[childKey], childValue) : childValue
    }

    return merged
  }

  return localizedValue
}

export function mergeGuideContent(baseValue, localizedValue, key) {
  if (localizedValue == null) return baseValue

  if (Array.isArray(baseValue) && Array.isArray(localizedValue)) {
    if (key === 'blocks') return mergeBlockOverlays(baseValue, localizedValue)
    if (key === 'related') return localizedValue
    if (baseValue.some(Array.isArray)) return localizedValue
    if (baseValue.every((item) => item == null || typeof item !== 'object')) return localizedValue

    return baseValue.map((item, index) => mergeGuideContent(item, localizedValue[index], key))
  }

  if (
    baseValue &&
    localizedValue &&
    typeof baseValue === 'object' &&
    typeof localizedValue === 'object' &&
    !Array.isArray(baseValue) &&
    !Array.isArray(localizedValue)
  ) {
    const merged = { ...baseValue }

    for (const [childKey, childValue] of Object.entries(localizedValue)) {
      if (childKey === 'type') continue

      if (childKey in baseValue) {
        merged[childKey] = mergeGuideContent(baseValue[childKey], childValue, childKey)
      } else if (LOCALIZED_OVERLAY_KEYS.has(childKey)) {
        merged[childKey] = childValue
      }
    }

    return merged
  }

  if (LOCALIZED_OVERLAY_KEYS.has(key)) return localizedValue

  return baseValue
}

function mergeBlockOverlays(baseBlocks, localizedBlocks) {
  if (!Array.isArray(baseBlocks) || !Array.isArray(localizedBlocks) || localizedBlocks.length === 0) {
    return baseBlocks
  }

  return baseBlocks.map((baseBlock, index) => mergeGuideContent(baseBlock, localizedBlocks[index]))
}
