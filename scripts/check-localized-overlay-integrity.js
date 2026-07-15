const path = require('path')
const { pathToFileURL } = require('url')

const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

const OVERLAY_CONFIGS = [
  {
    label: 'HOME',
    baseModulePath: 'src/lib/homepage-content.js',
    baseGetterName: 'getHomeContent',
    overlayModulePath: 'src/lib/homepage-content-localized.js',
    overlayGetterName: 'getLocalizedHomeContent',
    overlayExportName: 'HOME_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^HOME\.[^.]+\.whyMallorca\.stats$/,
      /^HOME\.[^.]+\.packages\.multiDay\.(detail|button)$/,
    ],
  },
  {
    label: 'ABOUT',
    baseModulePath: 'src/lib/about-content.js',
    baseGetterName: 'getAboutContent',
    overlayModulePath: 'src/lib/about-content-localized.js',
    overlayGetterName: 'getLocalizedAboutContent',
    overlayExportName: 'ABOUT_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^ABOUT\.[^.]+\.sidebarCta$/,
      /^ABOUT\.[^.]+\.careerStripProps\.(label|heading)$/,
    ],
  },
  {
    label: 'COACHING',
    baseModulePath: 'src/lib/coaching-content.js',
    baseGetterName: 'getCoachingContent',
    overlayModulePath: 'src/lib/coaching-content-localized.js',
    overlayGetterName: 'getLocalizedCoachingContent',
    overlayExportName: 'COACHING_LOCALIZED_CONTENT',
  },
  {
    label: 'CONTACT',
    baseModulePath: 'src/lib/contact-content.js',
    baseGetterName: 'getContactContent',
    overlayModulePath: 'src/lib/contact-content-localized.js',
    overlayGetterName: 'getLocalizedContactContent',
    overlayExportName: 'CONTACT_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^CONTACT\.zh\.cards\.(wechatLabel|wechatValue)$/,
      /^CONTACT\.zh\.form\.(sendPromptLabel|handicapOptional)$/,
    ],
  },
  {
    label: 'GOLF_COURSES',
    baseModulePath: 'src/lib/golf-courses-content.js',
    baseGetterName: 'getGolfCoursesContent',
    overlayModulePath: 'src/lib/golf-courses-content-localized.js',
    overlayGetterName: 'getLocalizedGolfCoursesContent',
    overlayExportName: 'GOLF_COURSES_LOCALIZED_CONTENT',
  },
  {
    label: 'GUIDES_INDEX',
    baseModulePath: 'src/lib/guides-content.js',
    baseGetterName: 'getGuidesContent',
    overlayModulePath: 'src/lib/guides-content-localized.js',
    overlayGetterName: 'getLocalizedGuidesContent',
    overlayExportName: 'GUIDES_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^GUIDES_INDEX\.[^.]+\.liveGuides$/,
    ],
  },
  {
    label: 'PLAN_YOUR_TRIP',
    baseModulePath: 'src/lib/plan-your-trip-content.js',
    baseGetterName: 'getPlanYourTripContent',
    overlayModulePath: 'src/lib/plan-your-trip-content-localized.js',
    overlayGetterName: 'getLocalizedPlanYourTripContent',
    overlayExportName: 'PLAN_YOUR_TRIP_LOCALIZED_CONTENT',
  },
  {
    label: 'PLAY_WITH_A_PRO',
    baseModulePath: 'src/lib/play-with-a-pro-content.js',
    baseGetterName: 'getPlayWithAProContent',
    overlayModulePath: 'src/lib/play-with-a-pro-content-localized.js',
    overlayGetterName: 'getLocalizedPlayWithAProContent',
    overlayExportName: 'PLAY_WITH_A_PRO_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^PLAY_WITH_A_PRO\.[^.]+\.packages\.multiDay\.detail$/,
    ],
  },
]

function toFileUrl(relPath) {
  return pathToFileURL(path.join(__dirname, '..', relPath)).href
}

function isPlainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
}

function compareOverlayShape(base, overlay, trail, findings, isAllowedPath) {
  if (overlay == null) return
  if (isAllowedPath(trail)) return

  if (Array.isArray(overlay)) {
    if (!Array.isArray(base)) {
      findings.push(`${trail}: expected ${describe(base)}, got array`)
      return
    }

    if (base.length !== overlay.length) {
      findings.push(`${trail}: array length ${overlay.length} != English ${base.length}`)
    }

    const sampleCount = Math.min(base.length, overlay.length)
    for (let index = 0; index < sampleCount; index += 1) {
      compareOverlayShape(base[index], overlay[index], `${trail}[${index}]`, findings, isAllowedPath)
    }
    return
  }

  if (isPlainObject(overlay)) {
    if (!isPlainObject(base)) {
      findings.push(`${trail}: expected ${describe(base)}, got object`)
      return
    }

    for (const [key, value] of Object.entries(overlay)) {
      if (!(key in base)) {
        if (!isAllowedPath(`${trail}.${key}`)) {
          findings.push(`${trail}.${key}: key is not present in English canonical content`)
        }
        continue
      }
      compareOverlayShape(base[key], value, `${trail}.${key}`, findings, isAllowedPath)
    }
    return
  }

  if (typeof base !== typeof overlay) {
    findings.push(`${trail}: expected ${typeof base}, got ${typeof overlay}`)
  }
}

function describe(value) {
  if (Array.isArray(value)) return 'array'
  return typeof value
}

function buildAllowedPathMatcher(patterns = []) {
  return (trail) => patterns.some((pattern) => pattern.test(trail))
}

async function main() {
  const findings = []

  for (const config of OVERLAY_CONFIGS) {
    const [baseModule, overlayModule] = await Promise.all([
      import(toFileUrl(config.baseModulePath)),
      import(toFileUrl(config.overlayModulePath)),
    ])

    const getBase = baseModule[config.baseGetterName]
    const getOverlay = overlayModule[config.overlayGetterName]
    const rawOverlayContent = overlayModule[config.overlayExportName]

    if (typeof getBase !== 'function') {
      findings.push(`${config.label}: missing base getter ${config.baseGetterName}`)
      continue
    }

    if (typeof getOverlay !== 'function') {
      findings.push(`${config.label}: missing overlay getter ${config.overlayGetterName}`)
      continue
    }

    const overlayLocales = Object.keys(rawOverlayContent || {})
    const unknownLocales = overlayLocales.filter((locale) => !LOCALES.includes(locale))
    const missingLocales = LOCALES.filter((locale) => !(locale in (rawOverlayContent || {})))

    unknownLocales.forEach((locale) => findings.push(`${config.label}: unsupported overlay locale ${locale}`))
    missingLocales.forEach((locale) => findings.push(`${config.label}: missing overlay locale ${locale}`))

    const english = getBase('en')
    const isAllowedPath = buildAllowedPathMatcher(config.allowedPathPatterns)

    for (const locale of LOCALES) {
      const overlay = getOverlay(locale)
      if (!overlay) {
        findings.push(`${config.label}.${locale}: overlay getter returned nothing`)
        continue
      }

      compareOverlayShape(english, overlay, `${config.label}.${locale}`, findings, isAllowedPath)
    }
  }

  if (findings.length > 0) {
    console.error('Localized overlay integrity issues found:\n')
    findings.forEach((finding) => console.error(`- ${finding}`))
    process.exit(1)
  }

  console.log('Localized overlay integrity checks passed.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
