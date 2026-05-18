const { expect, test } = require('@playwright/test')

const ROUTES = ['/', '/about']

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

      await page.goto(route, { waitUntil: 'networkidle' })

      await expect(page.locator('body')).toBeVisible()
      await expect(page.locator('img').first()).toBeVisible()

      const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2)
      expect(hasHorizontalOverflow, `Unexpected horizontal overflow on ${route}`).toBe(false)

      if (route === '/') {
        await page.locator('.cred-logo-bar').scrollIntoViewIfNeeded()
        await expect(page.locator('.cred-logo-bar__img')).toHaveCount(4)
        for (const logo of await page.locator('.cred-logo-bar__img').all()) {
          await expect(logo).toBeVisible()
          await expect.poll(async () => logo.evaluate((image) => image.naturalWidth)).toBeGreaterThan(0)
          const box = await logo.boundingBox()
          expect(box?.width || 0).toBeGreaterThan(80)
          expect(box?.height || 0).toBeGreaterThan(80)
        }
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
