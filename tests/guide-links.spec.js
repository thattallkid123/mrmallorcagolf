const { test, expect } = require('@playwright/test')

for (const locale of ['de','es','fr','nl','sv','zh']) {
  test(`${locale} cost-guide button reaches the available download page`, async ({ page }) => {
    await page.goto(`/${locale}/guides/golf-cost-mallorca`, { waitUntil: 'domcontentloaded' })
    const buttons = page.locator('a[href$="/guides/cost-guide"]')
    await expect(buttons).toHaveCount(1)
    await expect(buttons).toHaveAttribute('href','/guides/cost-guide')
  })
}
for (const locale of ['nl','sv']) {
  test(`${locale} comparison buttons reach the available download page`, async ({ page }) => {
    await page.goto(`/${locale}/guides/best-golf-courses-mallorca`, { waitUntil: 'domcontentloaded' })
    const buttons = page.locator('a[href$="/guides/course-comparison"]')
    await expect(buttons).toHaveCount(2)
    for (const button of await buttons.all()) await expect(button).toHaveAttribute('href','/guides/course-comparison')
  })
}
