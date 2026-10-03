const path = require('path')
const { pathToFileURL } = require('url')

const { LOCALES, OVERLAY_CONFIGS } = require('./lib/overlay-configs.cjs')

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
