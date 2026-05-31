const { expect, test } = require('@playwright/test')

const ROUTES = ['/', '/about', '/play-with-a-pro', '/guides', '/es', '/fr/play-with-a-pro']

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

      if (route === '/about') {
        await page.locator('.winners-proof').scrollIntoViewIfNeeded()
        await expect(page.locator('.winners-proof__card')).toHaveCount(16)
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
