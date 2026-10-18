const {test,expect}=require('@playwright/test')

test.beforeEach(async({page})=>{await page.route(url=>url.protocol==='https:',route=>route.abort())})
test('pre-round failure preserves answers; a retry confirms only after acceptance and displays answers as text',async({page})=>{
 let rejected=true
 await page.route('**/api/questionnaire',r=>r.fulfill({status:rejected?502:200,json:rejected?{ok:false}:{ok:true}}))
 await page.goto('/questionnaire.html',{waitUntil:'networkidle'})
 await page.locator('#q-name').fill('Audit <guest>');await page.locator('#q-email').fill('test@example.com')
 for(let i=0;i<4;i++)await page.locator('.section.active button').filter({hasText:/Continue/}).click()
 await page.locator('#q-good-day').fill('<img src=x onerror=alert(1)>')
 await page.getByRole('button',{name:/Submit questionnaire/}).click()
 await expect(page.locator('#submission-error')).toBeVisible();await expect(page.locator('#thankyou')).not.toBeVisible()
 await expect(page.locator('#q-good-day')).toHaveValue('<img src=x onerror=alert(1)>')
 rejected=false;await page.getByRole('button',{name:/Submit questionnaire/}).click()
 await expect(page.locator('#thankyou')).toBeVisible();await expect(page.locator('#summary-items')).toContainText('<img src=x onerror=alert(1)>')
 await expect(page.locator('#summary-items img')).toHaveCount(0)
})
test('cost PDF request shows a delivery failure and allows retry',async({page})=>{
 await page.route('**/api/send-itinerary',r=>r.fulfill({json:{success:true}}))
 let fail=true
 await page.route('**/api/lead-magnet-signup',r=>r.fulfill({status:fail?502:200,json:fail?{error:'Delivery failed'}:{success:true}}))
 await page.goto('/tools/golf-cost-calculator',{waitUntil:'load'})
 await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByRole('button',{name:'See my estimate',exact:true}).click()
 await page.locator('input[type=email]').fill('test@example.com');await page.getByRole('button',{name:'Email me the breakdown',exact:true}).click()
 const link=page.locator('.gcc-cta-box a[href$=".pdf"]');await expect(link).toBeVisible()
 await link.click();await expect(page.locator('.gcc-cta-box')).toContainText(/didn.t go through/);await expect(link).toBeVisible()
 fail=false;await link.click();await expect(link).toHaveCount(0)
})
test('a Palma family hotel brief can find Saratoga and preserves the complete hotel summary',async({page})=>{
 let payload
 await page.route('**/api/send-itinerary',async r=>{payload=r.request().postDataJSON();await r.fulfill({json:{success:true}})})
 await page.goto('/tools/hotel-recommender',{waitUntil:'networkidle'})
 const choices=[3,2,2,1,2,0]
 for(let i=0;i<choices.length;i++){
  await expect.poll(async()=>Number((await page.locator('.hr-step-num').textContent()).match(/[0-9]+/)[0])).toBe(i+1)
  await page.locator('.hr-opt').nth(choices[i]).click();if(i===1)await page.locator('.hr-btn-next').click()
 }
 await expect(page.locator('.hr-hotel-card').first()).toContainText('Hotel Saratoga')
 await expect(page.locator('.hr-hotel-card')).toHaveCount(1)
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
 await page.locator('input[type=email]').fill('test@example.com');await page.locator('.hr-btn-email').click()
 await expect.poll(()=>payload?.data?.results?.length).toBe(1)
 expect(payload.data.results[0].name).toBe('Hotel Saratoga');expect(payload.data.answerSummary).toContain('Palma')
 expect(payload.subscribeNewsletter).not.toBe(true)
})

test('golf-only and golf-with-lunch give distinct choices and a named restaurant',async({page})=>{
 await page.goto('/tools/golf-day-builder',{waitUntil:'networkidle'})
 for(const name of [/^Palma and around/,/^Relaxed golf/,/^Confident/,/^Up to 28/,/^Mid-morning/,/^Scenery/])await page.getByRole('button',{name}).click()
 await page.getByRole('button',{name:/^Lunch/}).click();await page.locator('.gdb-nav-row .gdb-btn-pine').click()
 await page.getByRole('button',{name:/^Ask about transfers/}).click();await page.getByRole('button',{name:/^Friends/}).click()
 await expect(page.locator('.gdb-itin.active h3')).toContainText('Son Termes')
 await page.getByRole('button',{name:'Golf and lunch',exact:true}).click()
 await expect(page.locator('.gdb-itin.active h3')).toContainText('Son Quint')
 await expect(page.locator('.gdb-result-head')).toContainText('par 71')
 await expect(page.locator('.gdb-itin.active')).toContainText('Lunch at Son Quint Restaurant')
 await expect(page.locator('.gdb-itin.active')).not.toContainText('local travel partner')
 await page.getByRole('button',{name:'Ask me to build this for your group',exact:true}).click()
 await expect(page.locator('[name=courses]')).toHaveValue(/Son Quint/)
 await expect(page.locator('[name=message]')).toHaveValue(/Ask about transfers/)
 await expect(page.locator('[name=message]')).toHaveValue(/Up to 28/)
 await expect(page.locator('[name=message]')).toHaveValue(/Lunch at Son Quint Restaurant/)
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
})
