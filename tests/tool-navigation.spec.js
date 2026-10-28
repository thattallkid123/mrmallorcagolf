const {test,expect}=require('@playwright/test')

test.beforeEach(async({page})=>{
  await page.route(/googletagmanager|google-analytics|\/_vercel\/insights\//,r=>r.abort())
})

for(const [slug,options,next,progress]of[
  ['golf-day-builder','.gdb-opt','.gdb-btn-pine','.gdb-step-label'],
  ['hotel-recommender','.hr-opt','.hr-btn-next','.hr-step-num'],
  ['course-selector','.cst-opt','.cst-nav-row .cst-btn','.cst-progress-label'],
])test(`${slug}: fast Continue advances once and Back stays on the prior question`,async({page})=>{
  await page.goto('/tools/'+slug,{waitUntil:'load'})
  await expect(page.locator(options).first()).toBeVisible()
  const first=await page.locator(options).first().innerText()
  await page.locator(options).first().click()
  // Exercise the same manual action while the automatic selection is pending.
  await page.locator(next).evaluate(button=>button.click())
  await page.waitForTimeout(450)
  const second=await page.locator(options).first().innerText()
  expect(second).not.toBe(first)
  const text=await page.locator(progress).textContent()
  expect(text).toMatch(/2/)
  const back=page.locator(slug==='golf-day-builder'?'.gdb-btn-ghost':slug==='hotel-recommender'?'.hr-btn-back':'.cst-btn-ghost').first()
  await back.click()
  await page.waitForTimeout(450)
  await expect.poll(() => page.locator(options).first().innerText()).toBe(first)
})

test('Hotel Finder keeps Back before Continue in DOM and visual order',async({page})=>{
  await page.goto('/tools/hotel-recommender',{waitUntil:'load'})
  await page.locator('.hr-opt').first().click()
  await expect(page.locator('.hr-step-num')).toContainText('2')
  const nav=page.locator('.hr-nav')
  expect(await nav.locator('button').evaluateAll(es=>es.map(e=>e.className))).toEqual(expect.arrayContaining([expect.stringContaining('hr-btn-back'),expect.stringContaining('hr-btn-next')]))
  const positions=await nav.locator('button').evaluateAll(es=>es.map(e=>({isBack:e.className.includes('hr-btn-back'),left:e.getBoundingClientRect().left})))
  expect(positions[0].isBack).toBe(true)
  expect(positions[0].left).toBeLessThan(positions[1].left)
  await expect(page.locator('.planning-tool')).toHaveAttribute('data-tool-active','true')
  await expect(page.locator('.tool-trust-line')).toBeHidden()
})
