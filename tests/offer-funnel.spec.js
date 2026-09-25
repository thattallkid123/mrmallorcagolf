const { expect, test } = require('@playwright/test')

test('planning, playing and Signature Day have clear routes into enquiry', async ({ page }) => {
  await page.goto('/plan-your-trip', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.pyt-hero__body')).toContainText('You play the rounds on your own schedule')
  await page.locator('.pyt-pro-cta__btn').click()
  await expect(page).toHaveURL(/\/contact\?service=trip-planning$/)
  await expect(page.getByRole('radio', { name: 'Plan My Golf Trip' })).toBeChecked()
  await page.getByRole('radio', { name: 'Book tee times for my group' }).check()
  await expect(page.getByRole('radio', { name: 'Book tee times for my group' })).toBeChecked()

  await page.goto('/play-with-a-pro', { waitUntil: 'domcontentloaded' })
  const signatureLink = page.locator('.pwap-summary__signature a')
  await expect(signatureLink).toHaveAttribute('href', '/signature-day')
  await signatureLink.click()
  await expect(page).toHaveURL(/\/signature-day$/)
})

test('guide enquiry keeps booking choice and campaign source through submission', async ({ page }) => {
  await page.addInitScript(() => {
    window.__trackedEvents = []
    window.gtag = (...args) => window.__trackedEvents.push(args)
  })

  let submittedPayload
  await page.route('**/api/contact', async (route) => {
    submittedPayload = JSON.parse(route.request().postData())
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) })
  })

  await page.goto('/guides/best-golf-courses-mallorca?utm_source=hotel&utm_medium=referral&utm_campaign=autumn', { waitUntil: 'domcontentloaded' })
  await page.locator('a[href="/contact?service=tee-time-booking"]').click()
  await expect(page.getByRole('radio', { name: 'Book tee times for my group' })).toBeChecked()
  await page.getByLabel('First name').fill('Test')
  await page.getByLabel('Email address').fill('test@example.com')
  await page.getByRole('button', { name: /Send enquiry/ }).click()
  await expect(page.locator('.form-success')).toBeVisible()

  expect(submittedPayload.serviceType).toBe('tee-time-booking')
  expect(submittedPayload.attribution).toMatchObject({
    entry_page: '/guides/best-golf-courses-mallorca',
    enquiry_source_page: '/guides/best-golf-courses-mallorca',
    utm_source: 'hotel',
    utm_medium: 'referral',
    utm_campaign: 'autumn',
  })
  const leads = await page.evaluate(() => window.__trackedEvents.filter(([command, name]) => command === 'event' && name === 'generate_lead'))
  expect(leads.at(-1)?.[2]).toMatchObject({ service_type: 'tee-time-booking', entry_page: '/guides/best-golf-courses-mallorca' })
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
