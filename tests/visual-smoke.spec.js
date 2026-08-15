const { expect, test } = require('@playwright/test')

const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']
const BASE_ROUTES = ['/', '/about', '/play-with-a-pro', '/guides', '/contact', '/golf-courses']
const ROUTES = [
  ...BASE_ROUTES,
  ...LOCALES.flatMap((locale) => ['/', '/about', '/play-with-a-pro', '/guides', '/contact', '/golf-courses'].map((p) => `/${locale}${p === '/' ? '' : p}`)),
]

test.describe('visual smoke checks', () => {
  for (const route of ROUTES) {
    test(`${route} has no broken key visuals`, async ({ page }) => {
      const consoleErrors = []
      const failedImages = []
      page.on('console', (message) => {
        if (message.type() === 'error') consoleErrors.push(message.text())
      })
      page.on('pageerror', (error) => consoleErrors.push(error.message))
      page.on('response', (response) => {
        if (response.request().resourceType() === 'image' && response.status() >= 400) {
          failedImages.push(`${response.status()} ${response.url()}`)
        }
      })

      await page.goto(route, { waitUntil: 'domcontentloaded' })
      await page.waitForLoadState('load', { timeout: 15000 }).catch(() => {})

      await expect(page.locator('body')).toBeVisible()
      await expect(page.locator('img').first()).toBeVisible()

      const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2)
      expect(hasHorizontalOverflow, `Unexpected horizontal overflow on ${route}`).toBe(false)

      if (route === '/') {
        const packages = page.locator('.packages')
        await packages.scrollIntoViewIfNeeded()
        await expect(packages.locator('.tier')).toHaveCount(4)
        await expect(packages.locator('.tier__btn')).toHaveCount(4)
      }

      if (route === '/play-with-a-pro') {
        const packages = page.locator('#packages')
        await packages.scrollIntoViewIfNeeded()
        await expect(packages.locator('.tier')).toHaveCount(4)
        await expect(packages.locator('.tier__btn')).toHaveCount(4)
      }

      if (route.endsWith('/play-with-a-pro') && test.info().project.name === 'desktop-chrome') {
        const daySection = page.locator('.pwap-day')
        const dayLead = page.locator('.pwap-day__lead')
        await daySection.scrollIntoViewIfNeeded()
        const widths = await page.evaluate(() => {
          const section = document.querySelector('.pwap-day')
          const lead = document.querySelector('.pwap-day__lead')
          if (!section || !lead) return null
          return {
            section: section.getBoundingClientRect().width,
            lead: lead.getBoundingClientRect().width,
          }
        })
        expect(widths, `Missing PWAP day layout nodes on ${route}`).not.toBeNull()
        // .pwap-day is a two-column grid (lead + .pwap-day__details sidebar), roughly 0.92fr : 0.78fr.
        // Bounds catch a real regression (column collapsed or overlapping) without pinning the exact split.
        const ratio = widths.lead / widths.section
        expect(ratio, `PWAP day lead column outside expected range on ${route}`).toBeGreaterThan(0.35)
        expect(ratio, `PWAP day lead column outside expected range on ${route}`).toBeLessThan(0.7)
      }

      if (route === '/about') {
        await page.locator('.winners-proof').scrollIntoViewIfNeeded()
        await expect(page.locator('.winners-proof__card')).toHaveCount(74)
        await expect.poll(async () => page.locator('.winners-proof img').first().evaluate((image) => image.naturalWidth)).toBeGreaterThan(0)
        await page.locator('.career-strip').scrollIntoViewIfNeeded()
        await expect(page.locator('.career-strip__card')).toHaveCount(16)
        await expect.poll(async () => page.locator('.career-strip img').first().evaluate((image) => image.naturalWidth)).toBeGreaterThan(0)
      }

      expect(failedImages, `Failed image responses on ${route}`).toEqual([])
      expect(consoleErrors, `Console errors on ${route}`).toEqual([])
    })
  }
})
