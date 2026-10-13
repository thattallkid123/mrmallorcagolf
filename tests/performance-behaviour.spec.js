const { test, expect } = require('@playwright/test')

test('photo strips pause off screen and restart when reached', async ({ page }) => {
  for (const [route, selectors] of [
    ['/about', ['.career-strip__viewport', '.winners-proof']],
    ['/play-with-a-pro', ['.pwap-day-strip']],
    ['/guides/play-with-a-pro-explained', ['.pwap-day-strip']],
  ]) {
    await page.goto(route, { waitUntil: 'networkidle' })
    for (const selector of selectors) {
      const strip = page.locator(selector)
      await page.locator('h1').scrollIntoViewIfNeeded()
      await expect.poll(() => strip.evaluate(e => e.getBoundingClientRect().top >= innerHeight || e.getBoundingClientRect().bottom <= 0)).toBe(true)
      const paused = await strip.evaluate(e => e.scrollLeft)
      await page.waitForTimeout(350)
      expect(await strip.evaluate(e => e.scrollLeft)).toBe(paused)
      await strip.scrollIntoViewIfNeeded()
      await expect.poll(() => strip.evaluate(e => e.scrollLeft), { timeout: 5000 }).toBeGreaterThan(paused)
    }
  }
})

test('reduced motion keeps strips still and manual scrolling usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/play-with-a-pro', { waitUntil: 'networkidle' })
  const strip = page.locator('.pwap-day-strip')
  await strip.scrollIntoViewIfNeeded()
  await page.waitForTimeout(350)
  expect(await strip.evaluate(e => e.scrollLeft)).toBe(0)
  await strip.press('ArrowRight')
  await expect.poll(() => strip.evaluate(e => e.scrollLeft)).toBeGreaterThan(0)
})

test('hero photos have high priority and route styles do not affect other pages', async ({ page }) => {
  for (const route of ['/', '/about', '/play-with-a-pro', '/plan-your-trip', '/golf-courses', '/guides', '/contact']) {
    await page.goto(route, { waitUntil: 'networkidle' })
    const hero = page.locator('main img[fetchpriority="high"]').first()
    await expect(hero).toHaveAttribute('loading', 'eager')
    await expect.poll(() => hero.evaluate(e => e.complete && e.naturalWidth > 0)).toBe(true)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  }
  // Tools intentionally uses a text header, rather than a photo, in both routes.
  for (const route of ['/tools', '/zh/tools']) {
    await page.goto(route, { waitUntil: 'networkidle' })
    await expect(page.locator('.tools-hero h1')).toBeVisible()
    await expect(page.locator('.tools-hero img')).toHaveCount(0)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  }
})

test('server-rendered review cards retain their scroll control', async ({ page }) => {
  await page.goto('/play-with-a-pro', { waitUntil: 'networkidle' })
  const grid = page.locator('.testimonials__grid')
  const overflows = await grid.evaluate(e => e.scrollWidth > e.clientWidth + 4)
  await expect(grid.locator('.testimonial')).toHaveCount(13)
  if (overflows) {
    await page.getByRole('button', { name: 'Scroll for more reviews' }).click()
    await expect.poll(() => grid.evaluate(e => e.scrollLeft)).toBeGreaterThan(0)
  }
})
