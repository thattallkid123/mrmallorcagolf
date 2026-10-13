const { test, expect } = require('@playwright/test')

test('hotel choices align and use the available width', async ({ page }, info) => {
  await page.goto('/tools/hotel-recommender', { waitUntil: 'networkidle' })
  const track = page.locator('.tool-choice-track')
  await expect(track.locator('button')).toHaveCount(5)
  const bounds = await track.locator('img').evaluateAll(images => images.map(image => ({top:image.getBoundingClientRect().top, height:image.getBoundingClientRect().height})))
  expect(new Set(bounds.map(b => Math.round(b.top))).size).toBe(1)
  expect(new Set(bounds.map(b => Math.round(b.height))).size).toBe(1)
  if (info.project.name === 'desktop-chrome') {
    expect(await track.evaluate(e => e.scrollWidth - e.clientWidth)).toBeLessThanOrEqual(2)
    await expect(page.getByRole('button', { name:'Next choices', exact:true })).toHaveCount(0)
  } else {
    await page.getByRole('button', { name:'Next choices', exact:true }).click()
    await expect.poll(() => track.evaluate(e => e.scrollLeft)).toBeGreaterThan(0)
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('six day-planner regions fit desktop and explain certificates clearly', async ({ page }, info) => {
  await page.goto('/tools/golf-day-builder', { waitUntil: 'networkidle' })
  const track = page.locator('.tool-choice-track')
  await expect(track.locator('button')).toHaveCount(6)
  if (info.project.name === 'desktop-chrome') expect(await track.evaluate(e => e.scrollWidth - e.clientWidth)).toBeLessThanOrEqual(2)
  await page.getByRole('button', {name:/Palma and around/}).click()
  await page.getByRole('button', {name:/Relaxed golf/}).click()
  await page.getByRole('button', {name:/Casual/}).click()
  await expect(page.getByRole('heading', {name:'What is the highest handicap in your group?'})).toBeVisible()
  await expect(page.locator('.gdb-qcard .sub')).toContainText('every player can show a current handicap certificate')
  await expect(page.getByRole('button', {name:/Missing a certificate/})).toContainText('One or more players')
  await expect(page.getByRole('button', {name:/Not confirmed yet/})).toContainText('everyone’s handicap or certificate status')
})

test('five-course comparison resolves T Golf Palma and aligns external labels', async ({ page }, info) => {
  await page.goto('/tools/green-fees', { waitUntil: 'networkidle' })
  await page.getByRole('tab', {name:'Head-to-head (up to 5)',exact:true}).click()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.locator('#cmp-2').selectOption('T Golf Calvià')
  await page.locator('#cmp-3').selectOption('T Golf Palma Puntiró')
  await page.locator('#cmp-4').selectOption('Son Antem East')
  const columns = page.locator('.gf-compare__column')
  await expect(columns).toHaveCount(5)
  const palma = columns.filter({hasText:'T Golf Palma (Puntiró)'})
  await expect(palma.locator('img')).toHaveAttribute('src', /t-golf-palma/)
  await expect(palma.locator('dl').filter({hasText:'Par'}).locator('dd')).toHaveText('71')
  await expect(palma.locator('dl').filter({hasText:'Difficulty'}).locator('dd')).toHaveText('7/10')
  await expect(page.locator('.gf-compare table')).toHaveCount(0)
  const alignment = await page.locator('.gf-compare__matrix').evaluate(e => ({
    labels:[...e.querySelectorAll('.gf-compare__labels > span')].slice(1).map(x=>Math.round(x.getBoundingClientRect().top)),
    columns:[...e.querySelectorAll('.gf-compare__column')].map(c=>[...c.querySelectorAll('dl')].map(x=>Math.round(x.getBoundingClientRect().top)))
  }))
  for(const rows of alignment.columns) expect(rows).toEqual(alignment.labels)
  if(info.project.name === 'desktop-chrome') expect(await page.locator('.gf-compare__scroll').evaluate(e=>e.scrollWidth-e.clientWidth)).toBeLessThanOrEqual(2)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
