const { expect, test } = require('@playwright/test')

test('planning, playing and Signature Day have clear routes into enquiry', async ({ page }) => {
  await page.goto('/plan-your-trip', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.pyt-hero__body')).toContainText('You play the rounds on your own schedule')
  await page.locator('.pyt-pro-cta__btn').click()
  await expect(page).toHaveURL(/\/contact$/)
  await page.getByRole('radio', { name: 'Book tee times for my group' }).check()
  await expect(page.getByRole('radio', { name: 'Book tee times for my group' })).toBeChecked()

  await page.goto('/play-with-a-pro', { waitUntil: 'domcontentloaded' })
  const signatureLink = page.locator('.pwap-summary__signature a')
  await expect(signatureLink).toHaveAttribute('href', '/signature-day')
  await signatureLink.click()
  await expect(page).toHaveURL(/\/signature-day$/)
})

test('contact navigation has one visible enquiry button and fits the viewport', async ({ page }) => {
  await page.goto('/contact', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('nav .nav__cta:visible')).toHaveCount(1)
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2)
  expect(hasOverflow).toBe(false)
})

test('beginner shortlist excludes courses needing a handicap or member access', async ({ page }) => {
  await page.goto('/tools/course-selector', { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Beginner/ }).click()
  await page.getByRole('button', { name: /Just me/ }).click()
  await page.getByRole('button', { name: /Luxury/ }).click()
  await page.locator('.cst-opts .cst-btn.gold').click()
  await page.getByRole('button', { name: /Southwest/ }).click()
  await page.getByRole('button', { name: /I like to walk/ }).click()
  await page.locator('.cst-opts .cst-btn.gold').click()

  await expect(page.locator('.cst-course-card')).toHaveCount(1)
  await expect(page.locator('.cst-course-card h3')).toContainText('Palma Pitch & Putt')
  await expect(page.locator('.cst-results-head')).not.toContainText('three courses')
})
