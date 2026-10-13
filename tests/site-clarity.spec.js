const { test, expect } = require('@playwright/test')

for (const locale of ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh']) {
  const prefix = locale === 'en' ? '' : '/' + locale
  test(locale + ' trip planning keeps the offers, proof and supporting details accessible', async ({ page }) => {
    await page.goto(prefix + '/plan-your-trip', { waitUntil: 'networkidle' })
    await expect(page.locator('.pyt-working-mode')).toHaveCount(3)
    const offerLinks = page.locator('.pyt-working-mode__link')
    for (const [index, service] of ['tee-time-booking', 'trip-planning', 'whole-trip'].entries()) {
      await expect(offerLinks.nth(index)).toHaveAttribute('href', prefix + '/contact?service=' + service)
    }
    await expect(page.locator('.pyt-pro-cta')).toContainText(/5\s*%/)
    await expect(page.locator('.pyt-proof__photos img')).toHaveCount(1)
    await expect(page.locator('.pyt-proof__photos img')).toHaveAttribute('src', /client-son-gual-john/)
    await expect(page.locator('.pyt-page .cst-wrap')).toHaveCount(0)
    await expect(page.locator('.pyt-option-card').last()).toHaveAttribute('href', prefix + '/tools/course-selector')
    const alignment = await page.locator('.pyt-option-strip').evaluate(el => {
      const parent = el.parentElement.getBoundingClientRect()
      const row = el.getBoundingClientRect()
      return { left: Math.abs(row.left - parent.left), right: Math.abs(row.right - parent.right) }
    })
    expect(alignment.left).toBeLessThan(2)
    expect(alignment.right).toBeLessThan(2)
    const explanation = page.locator('.pyt-itin-why')
    await expect(explanation).not.toHaveAttribute('open', '')
    await explanation.locator('summary').click()
    await expect(explanation.locator('.pyt-itin-why__list')).toBeVisible()
    const otherReview = page.locator('.pyt-proof__review').first()
    await otherReview.locator('summary').click()
    await expect(otherReview.locator('blockquote')).toBeVisible()
    const ideas = page.locator('.pyt-trip-ideas')
    await expect(ideas.locator('article')).toHaveCount(8)
    await ideas.scrollIntoViewIfNeeded()
    await page.locator('#trip-ideas .tool-choices__nav button').last().click()
    await expect.poll(() => ideas.evaluate(el => el.scrollLeft)).toBeGreaterThan(0)
    await expect(page.locator('.pyt-enquiry .pyt-hero__btn').first()).toHaveAttribute('href', prefix + '/contact?service=trip-planning')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  })
}

test('booking policy is linked from pricing and footer without the large content box', async ({ page }) => {
  await page.goto('/play-with-a-pro', { waitUntil: 'networkidle' })
  await expect(page.locator('.pwap-day .booking-policy')).toHaveCount(0)
  await expect(page.locator('.pwap-booking-terms a')).toHaveAttribute('href', '/terms')
  await expect(page.locator('footer').getByRole('link', { name: 'Booking confidence', exact: true })).toHaveAttribute('href', '/terms')
})

test('guide navigation lands on the right original heading and course details expand', async ({ page }) => {
  await page.goto('/guides/5-day-mallorca-golf-itinerary', { waitUntil: 'networkidle' })
  const nav = page.locator('.guide-section-nav')
  await nav.locator('summary').click()
  const link = nav.getByRole('link', { name: 'Day 3 - Golf Son Gual', exact: true })
  const target = await link.getAttribute('href')
  await link.click()
  await expect(page.locator(target)).toBeInViewport()
  await page.goto('/golf-courses', { waitUntil: 'networkidle' })
  const details = page.locator('.course__more').first()
  await details.locator('summary').click()
  await expect(details).toHaveAttribute('open', '')
  await expect(details.locator('p').first()).toBeVisible()
})
