const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.route(url => url.protocol === 'https:', r => r.abort())
})

test('newsletter has a persistent label and keyboard focus; a timeout keeps the address for retry', async ({ page }) => {
  let pending = true
  await page.route('https://assets.mailerlite.com/jsonp/**', r => {
    if (!pending) return r.fulfill({ headers: { 'access-control-allow-origin': '*' }, json: { success: true } })
  })
  await page.goto('/subscribe', { waitUntil: 'networkidle' })
  const email = page.getByRole('textbox', { name: 'Email address', exact: true })
  await email.scrollIntoViewIfNeeded()
  await email.focus()
  await email.pressSequentially('audit@example.com')
  await expect(page.locator(`label[for="${await email.getAttribute('id')}"]`)).toBeVisible()
  await expect(email).toHaveCSS('outline-style', 'solid')
  await expect(email).toHaveCSS('outline-width', '2px')
  await email.press('Tab')
  const send = page.locator('.email-capture-form button')
  await expect(send).toBeFocused()
  await expect(send).toHaveCSS('outline-width', '2px')
  await send.press('Enter')
  await expect(send).toBeDisabled()
  await expect(page.getByRole('alert').filter({ hasText: 'This is taking longer than expected.' })).toContainText('Check your inbox for the confirmation email', { timeout: 25000 })
  await expect(email).toHaveValue('audit@example.com')
  await expect(send).toBeEnabled()
  pending = false
  await send.click()
  await expect(page).toHaveURL(/course-selector\/check-email/)
})

test('a delayed PDF request preserves the address and optional consent, then retries successfully', async ({ page }) => {
  let pending = true
  const requests = []
  await page.route('**/api/lead-magnet-signup', r => {
    requests.push(r.request().postDataJSON())
    if (!pending) return r.fulfill({ json: { success: true } })
  })
  await page.goto('/guides/trip-planner', { waitUntil: 'networkidle' })
  const email = page.getByRole('textbox', { name: 'Email address', exact: true })
  await email.pressSequentially('audit@example.com')
  const consent = page.getByRole('checkbox')
  await expect(consent).not.toBeChecked()
  await consent.check()
  const send = page.locator('.email-capture-form button')
  await send.click()
  await expect(send).toBeDisabled()
  await expect(page.getByRole('alert').filter({ hasText: 'This is taking longer than expected.' })).toContainText('Check your inbox for the guide', { timeout: 25000 })
  await expect(email).toHaveValue('audit@example.com')
  await expect(consent).toBeChecked()
  pending = false
  await send.click()
  await expect(page.getByRole('link', { name: 'Download PDF', exact: true })).toBeVisible()
  expect(requests).toHaveLength(2)
  expect(requests.every(r => r.email === 'audit@example.com' && r.subscribeNewsletter === true && r.guide === 'trip-planner')).toBe(true)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

for (const slug of ['trip-planner', 'cost-guide', 'course-comparison', 'beginners-guide']) {
  test(`${slug} email field and button remain usable on one line`, async ({page}, info) => {
    const widths = info.project.name === 'mobile-chrome' ? [320, 393, 430] : [1440]
    for (const width of widths) {
      await page.setViewportSize({width, height: 1000})
      await page.goto(`/guides/${slug}`, {waitUntil:'networkidle'})
      const email=page.getByRole('textbox', {name:'Email address', exact:true})
      const send=page.locator('.email-capture-form button')
      await email.scrollIntoViewIfNeeded()
      const input=await email.boundingBox(), button=await send.boundingBox()
      expect(Math.abs(input.y-button.y)).toBeLessThanOrEqual(1)
      expect(input.width).toBeGreaterThanOrEqual(120)
      expect(input.height).toBeGreaterThanOrEqual(44)
      expect(button.height).toBeGreaterThanOrEqual(44)
      if(width<481) {
        await expect(send).toHaveAccessibleName('Email PDF')
        await expect(email).toHaveCSS('font-size','16px')
      }
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
    }
  })
}
