const { test, expect } = require('@playwright/test')
const ref = '83b55c94-476f-47a3-8ff6-0b338299a4ec'

test('personal questionnaire loads the original enquiry and preserves it through submission', async ({ page }) => {
  let submission
  await page.route('**/api/trip-preferences', async route => {
    const data = route.request().postDataJSON()
    if (data.action === 'load-enquiry') {
      expect(data.enquiryRef).toBe(ref)
      expect(data.enquiryContext).toBe('test-context')
      await route.fulfill({ json: { ok: true, enquiry: { name: 'Alex Example', email: 'alex@example.com', dates: 'May, flexible', groupsize: '9–12 golfers', courses: 'Son Gual', hotelHelp: 'No, the hotel is already booked', message: '<b>One birthday dinner</b>' } } })
    } else {
      submission = data
      await route.fulfill({ json: { ok: true } })
    }
  })
  await page.goto(`/trip-preferences.html?ref=${ref}#context=test-context`)
  await expect(page.getByText('Your original enquiry', { exact: true })).toBeVisible()
  await page.getByText('Your original enquiry', { exact: true }).click()
  await expect(page.getByText('9–12 golfers', { exact: true })).toBeVisible()
  await expect(page.getByText('<b>One birthday dinner</b>', { exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Already arranged', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('heading', { name: 'Rooms and budget', exact: true })).toHaveCount(0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.getByRole('button', { name: /Review/, exact: false }).first().click()
  await expect(page.getByLabel('Your name', { exact: true })).toHaveValue('Alex Example')
  await expect(page.getByLabel('Email from your enquiry', { exact: true })).toHaveValue('alex@example.com')
  await page.getByRole('button', { name: 'Send preferences to Andy', exact: true }).click()
  await expect(page.getByText('Thanks, your choices have reached Andy. He will use them to prepare for your call.', { exact: true })).toBeVisible()
  expect(submission.enquiryContext).toBe('test-context')
  expect(submission.trip.golfers).toBe('')
  expect(submission.trip.arrival).toBe('')
})

test('staff preview never loads an enquiry or enables sending even with a personal reference', async ({ page }) => {
  let requests = 0
  await page.route('**/api/trip-preferences', async route => { requests++; await route.abort() })
  // Production rewrites this staff path in vercel.json; mirror that rewrite locally.
  await page.route('**/trip-planning-preview?**', route => route.fulfill({ path: 'public/trip-preferences.html', contentType: 'text/html' }))
  await page.goto(`/trip-planning-preview?ref=${ref}#context=test-context`)
  await page.getByRole('button', { name: /Review/, exact: false }).first().click()
  await expect(page.getByRole('button', { name: 'Send preferences to Andy', exact: true })).toHaveCount(0)
  await expect(page.getByText('Planning preview.', { exact: true })).toBeVisible()
  expect(requests).toBe(0)
})
