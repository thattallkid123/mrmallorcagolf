const fs = require('fs')
const path = require('path')
const { chromium } = require('playwright')

const LOCALES = [
  { label: 'en', prefix: '' },
  { label: 'zh', prefix: '/zh' },
  { label: 'de', prefix: '/de' },
]

const ROUTES = [
  '/',
  '/about',
  '/play-with-a-pro',
  '/plan-your-trip',
  '/golf-courses',
  '/coaching',
  '/contact',
  '/guides',
  '/guides/son-gual-review',
  '/guides/play-with-a-pro-explained',
  '/signature-day',
]

const VIEWPORTS = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'ipad', width: 1024, height: 1366 },
  { name: 'desktop', width: 1440, height: 1200 },
]

const ROUTE_EXPECTATIONS = {
  '/play-with-a-pro': [
    { selector: '.pricing-grid', label: 'pricing grid' },
    { selector: '.pricing-grid > *', count: 4, label: 'pricing cards' },
  ],
  '/about': [
    { selector: '.story__portrait', label: 'about portrait' },
  ],
  '/guides/son-gual-review': [
    { selector: '.post-cta', label: 'guide CTA' },
    { selector: '.post-cta__button', label: 'guide CTA button' },
  ],
}

function parseArgs(argv) {
  const args = {}
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (!token.startsWith('--')) continue

    const key = token.slice(2)
    const next = argv[index + 1]
    if (!next || next.startsWith('--')) {
      args[key] = true
      continue
    }

    args[key] = next
    index += 1
  }
  return args
}

function buildUrl(baseUrl, prefix, routePath) {
  const normalizedBase = baseUrl.replace(/\/$/, '')
  const joinedPath = routePath === '/' ? '' : routePath
  return `${normalizedBase}${prefix}${joinedPath}`
}

function outputReport(report) {
  const outputDir = path.join(process.cwd(), 'outputs')
  fs.mkdirSync(outputDir, { recursive: true })

  const targetName = report.baseUrl.includes('127.0.0.1') || report.baseUrl.includes('localhost') ? 'local' : 'live'
  const outputPath = path.join(outputDir, `responsive-audit-${targetName}.json`)
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8')
  return outputPath
}

async function evaluatePage(page, routePath, url) {
  const consoleErrors = []
  const pageErrors = []

  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  page.on('pageerror', (error) => {
    pageErrors.push(error.message)
  })

  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
  await page.waitForTimeout(1500)

  const statusCode = response ? response.status() : 0
  const expectations = ROUTE_EXPECTATIONS[routePath] || []
  const pageData = await page.evaluate(({ expectations: selectors }) => {
    const doc = document.documentElement
    const main = document.querySelector('main')
    const overlay = document.querySelector('[data-nextjs-dialog]')
    const textLength = document.body?.innerText?.trim()?.length || 0
    const overflow = doc.scrollWidth - doc.clientWidth
    const offenders = [...document.querySelectorAll('body *')]
      .filter((element) => {
        const rect = element.getBoundingClientRect()
        return rect.right > doc.clientWidth + 2 || rect.left < -2 || rect.width > doc.clientWidth + 2
      })
      .slice(0, 6)
      .map((element) => ({
        tag: element.tagName.toLowerCase(),
        className: String(element.className || '').slice(0, 120),
        text: (element.textContent || '').trim().slice(0, 80),
      }))

    const expectationResults = selectors.map((expectation) => {
      const elements = [...document.querySelectorAll(expectation.selector)]
      return {
        selector: expectation.selector,
        label: expectation.label,
        expectedCount: expectation.count ?? null,
        actualCount: elements.length,
        visible: elements.some((element) => {
          const rect = element.getBoundingClientRect()
          return rect.width > 0 && rect.height > 0
        }),
      }
    })

    return {
      textLength,
      hasMain: Boolean(main),
      hasOverlay: Boolean(overlay),
      overflow,
      offenders,
      expectationResults,
    }
  }, { expectations })

  return {
    statusCode,
    consoleErrors,
    pageErrors,
    pageData,
  }
}

function getIssues(result) {
  const issues = []

  if (result.statusCode >= 400) {
    issues.push(`HTTP ${result.statusCode}`)
  }

  if (!result.pageData.hasMain) {
    issues.push('Missing <main> element')
  }

  if (result.pageData.hasOverlay) {
    issues.push('Framework error overlay detected')
  }

  if (result.pageData.textLength < 80) {
    issues.push(`Very low visible text (${result.pageData.textLength})`)
  }

  if (result.pageData.overflow > 2) {
    issues.push(`Horizontal overflow ${result.pageData.overflow}px`)
  }

  if (result.consoleErrors.length > 0) {
    issues.push(`Console errors: ${result.consoleErrors[0]}`)
  }

  if (result.pageErrors.length > 0) {
    issues.push(`Page errors: ${result.pageErrors[0]}`)
  }

  for (const expectation of result.pageData.expectationResults) {
    if (!expectation.visible) {
      issues.push(`Missing expected element: ${expectation.label}`)
      continue
    }

    if (expectation.expectedCount !== null && expectation.actualCount !== expectation.expectedCount) {
      issues.push(`Unexpected ${expectation.label} count (${expectation.actualCount}/${expectation.expectedCount})`)
    }
  }

  return issues
}

async function run() {
  const args = parseArgs(process.argv.slice(2))
  const baseUrl = args['base-url'] || process.env.QA_BASE_URL || 'http://127.0.0.1:3000'
  const browser = await chromium.launch({ headless: true })
  const startedAt = new Date().toISOString()
  const results = []

  try {
    for (const viewport of VIEWPORTS) {
      for (const locale of LOCALES) {
        for (const routePath of ROUTES) {
          const url = buildUrl(baseUrl, locale.prefix, routePath)
          const page = await browser.newPage({
            viewport: { width: viewport.width, height: viewport.height },
            deviceScaleFactor: 1,
          })

          try {
            const result = await evaluatePage(page, routePath, url)
            const issues = getIssues(result)
            results.push({
              viewport: viewport.name,
              locale: locale.label,
              route: routePath,
              url,
              status: issues.length ? 'fail' : 'pass',
              issues,
              details: result,
            })
          } catch (error) {
            results.push({
              viewport: viewport.name,
              locale: locale.label,
              route: routePath,
              url,
              status: 'fail',
              issues: [error.message.split('\n')[0]],
            })
          } finally {
            await page.close()
          }
        }
      }
    }
  } finally {
    await browser.close()
  }

  const failures = results.filter((result) => result.status === 'fail')
  const report = {
    startedAt,
    finishedAt: new Date().toISOString(),
    baseUrl,
    totals: {
      checks: results.length,
      failures: failures.length,
      passes: results.length - failures.length,
    },
    results,
  }

  const reportPath = outputReport(report)

  console.log(`Responsive audit complete for ${baseUrl}`)
  console.log(`Checks: ${report.totals.checks} | Pass: ${report.totals.passes} | Fail: ${report.totals.failures}`)
  console.log(`Report: ${reportPath}`)

  if (failures.length > 0) {
    console.log('\nFailures:')
    for (const failure of failures) {
      console.log(`- [${failure.viewport}] ${failure.locale} ${failure.route}: ${failure.issues.join(' | ')}`)
    }
    process.exitCode = 1
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
