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
    await expect(page.locator('.pyt-page .cst-wrap')).toHaveCount(0)
    const supportLinks = page.locator('.pyt-hero__links a')
    await expect(supportLinks).toHaveCount(2)
    for (const support of await supportLinks.all()) {
      await expect(support).not.toHaveClass(/\bbtn\b/)
      await expect(support).toHaveCSS('font-weight', '400')
      await expect(support).toHaveCSS('text-transform', 'none')
      await expect(support.locator('svg')).toHaveAttribute('aria-hidden', 'true')
      expect(await support.evaluate(e => e.getBoundingClientRect().height)).toBeGreaterThanOrEqual(44)
    }
    for (const action of await page.locator(".pyt-hero__actions a, .pyt-working-mode__link, .pyt-trip-ideas__cta a, .pyt-itin-invite__btn, .pyt-addon__btn").all()) {
      await expect(action).toHaveClass(/\bbtn\b/)
      await expect(action).toHaveCSS("text-align", "center")
      await expect(action).toHaveCSS("font-size", "10px")
    }
    await expect(supportLinks.first()).toHaveAttribute('href', '#sample-itinerary')
    await expect(supportLinks.last()).toHaveAttribute('href', prefix + '/tools/course-selector')
    const explanation = page.locator('.pyt-itin-why')
    await expect(explanation.locator('summary')).toHaveCount(0)
    await expect(explanation.locator('.pyt-itin-why__list')).toBeVisible()
    await expect(explanation.locator('li')).toHaveCount(4)
    await expect(page.locator('#client-proof details, #client-proof img')).toHaveCount(0)
    await expect(page.locator('#client-proof .testimonial')).toHaveCount(2)
    await expect(page.locator('#client-proof .testimonial__author')).toHaveText(['John H.', 'Adam'])
    for (const quote of await page.locator('#client-proof .testimonial p').all()) await expect(quote).toBeVisible()
    const sequence = await page.locator('#whole-trip, #sample-itinerary, .pyt-support, #client-proof').evaluateAll(els => els.map(el => el.id || 'pwap-option'))
    expect(sequence).toEqual(['whole-trip','sample-itinerary','pwap-option','client-proof'])
    await expect(page.locator('.pyt-process ol li')).toHaveCount(4)
    await expect(page.locator('.pyt-includes li')).toHaveCount(6)
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

test('Tools trust panel is centred and course explanation has readable contrast', async ({ page }) => {
  await page.goto('/tools', { waitUntil: 'networkidle' })
  const centred = await page.locator('.tools-trust__panel').evaluate(el => {
    const r=el.getBoundingClientRect()
    return Math.abs((r.left+r.right)/2-innerWidth/2)
  })
  expect(centred).toBeLessThan(2)
  await expect(page.locator('.tools-trust__actions a')).toHaveCount(2)
  await page.goto('/golf-courses', { waitUntil: 'networkidle' })
  await expect(page.locator('.course-controls-copy')).not.toContainText('We display')
  const contrasts = await page.locator('.course-controls-copy p').evaluateAll(els => {
    const luminance = value => {
      const parts = value.match(/[\d.]+/g).slice(0,3).map(Number).map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4})
      return parts[0]*.2126+parts[1]*.7152+parts[2]*.0722
    }
    return els.map(el=>{
      let parent=el, bg
      while(parent){ bg=getComputedStyle(parent).backgroundColor; if(bg!=='rgba(0, 0, 0, 0)') break; parent=parent.parentElement }
      const fg=luminance(getComputedStyle(el).color), back=luminance(bg||'rgb(255,255,255)')
      return (Math.max(fg,back)+.05)/(Math.min(fg,back)+.05)
    })
  })
  for(const ratio of contrasts) expect(ratio).toBeGreaterThanOrEqual(4.5)
})

test('short quotes and standalone service headings use the available wide-screen space', async ({ page }) => {
  await page.setViewportSize({ width: 1880, height: 1100 })
  await page.goto('/about', { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const quote = page.locator('.pull-quote p').first()
  const lineCount = await quote.evaluate(el => {
    const range = document.createRange()
    range.selectNodeContents(el)
    return new Set([...range.getClientRects()].map(r=>Math.round(r.top))).size
  })
  expect(lineCount).toBe(1)
  await page.goto('/play-with-a-pro', { waitUntil: 'networkidle' })
  await expect(page.locator('.pwap-section-title').first()).toHaveCSS('max-width','100%')
  await page.setViewportSize({ width: 320, height: 900 })
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.goto('/about', { waitUntil: 'networkidle' })
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
