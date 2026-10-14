const { test, expect } = require('@playwright/test')

for (const tool of ['course-selector', 'handicap-checker', 'green-fees', 'hotel-recommender', 'golf-cost-calculator', 'golf-day-builder']) {
  test(tool + ' leaves the full tool heading below the fixed navigation', async ({ page }) => {
    await page.goto('/tools/' + tool, { waitUntil: 'networkidle' })
    const clearance = await page.locator('main h1').evaluate(el => {
      const hero = el.closest('section')
      const firstLabel = hero.querySelector('[class$="eyebrow"]') || el
      return firstLabel.getBoundingClientRect().top - document.querySelector('.nav').getBoundingClientRect().bottom
    })
    expect(clearance).toBeGreaterThanOrEqual(32)
    const ratios = await page.locator('.tool-trust-line__byline, .tool-trust-line .review-badge__brand').evaluateAll(els => {
      const rgb = value => value.match(/[\d.]+/g).map(Number)
      const lum = parts => {
        const c = parts.slice(0, 3).map(x => { x /= 255; return x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4 })
        return c[0] * .2126 + c[1] * .7152 + c[2] * .0722
      }
      return els.map(el => {
        let parent = el, back = [255, 255, 255]
        while (parent) {
          const value = rgb(getComputedStyle(parent).backgroundColor)
          if ((value[3] ?? 1) === 1) { back = value; break }
          parent = parent.parentElement
        }
        const fg = rgb(getComputedStyle(el).color), alpha = fg[3] ?? 1
        const f = lum(fg.slice(0, 3).map((value, i) => value * alpha + back[i] * (1 - alpha))), b = lum(back)
        return (Math.max(f, b) + .05) / (Math.min(f, b) + .05)
      })
    })
    expect(ratios).toHaveLength(2)
    for (const ratio of ratios) expect(ratio).toBeGreaterThanOrEqual(4.5)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  })
}

test('guide carousel cards fit the narrow phone without clipping their text', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 })
  await page.goto('/guides', { waitUntil: 'networkidle' })
  const track = page.locator('.guides-carousel__track').first()
  const card = track.locator('.guide-photo-card').first()
  await card.scrollIntoViewIfNeeded()
  const fits = await card.evaluate(el => {
    const card = el.getBoundingClientRect(), track = el.parentElement.getBoundingClientRect()
    return card.left >= track.left - 1 && card.right <= track.right + 1
  })
  expect(fits).toBe(true)
  await expect(card).toBeInViewport()
  await track.evaluate(el => el.scrollWidth > el.clientWidth).then(value => expect(value).toBe(true))
  await page.goto('/signature-day', { waitUntil: 'networkidle' })
  await expect(page.getByRole('link', { name: 'Enquire about the Signature Day', exact: true })).toHaveCSS('text-align', 'center')
})

test('trip planning gold action remains readable when hovered on its light section', async ({ page }) => {
  await page.goto('/plan-your-trip', { waitUntil: 'networkidle' })
  const action = page.locator('.pyt-trip-ideas__cta a')
  await action.scrollIntoViewIfNeeded()
  await action.hover()
  await expect(action).toHaveCSS('color', 'rgb(26, 25, 22)')
  await expect(action).toHaveCSS('background-color', 'rgb(212, 176, 104)')
})
