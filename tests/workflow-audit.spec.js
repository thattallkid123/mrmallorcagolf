const {test,expect}=require('@playwright/test')
const ref='83b55c94-476f-47a3-8ff6-0b338299a4ec'
const url='/trip-preferences.html?ref='+ref+'#context=test-context'
const enquiry={name:'TEST Workflow',email:'workflow@example.com',dates:'November, flexible',groupsize:'8 golfers',courses:'Son Vida, Alcanada'}
const step=(page,n)=>page.locator('[data-step="'+n+'"]')

test('questionnaire review follows the selected stay, transfer and activity choices',async({page})=>{
  let submissions=0
  await page.route('**/api/trip-preferences',route=>{const p=route.request().postDataJSON();if(p.action!=='load-enquiry')submissions++;return route.fulfill({json:p.action==='load-enquiry'?{ok:true,enquiry}:{ok:true}})})
  await page.goto(url)
  await expect(page.getByText('Your original enquiry',{exact:true})).toBeVisible()
  await page.locator('[data-choice="stayHelp"][data-value="booked"]').click()
  await page.locator('[data-field="hotelName"]').fill('Already booked in Palma')
  await page.locator('[data-choice="transfer"][data-value="airport"]').click()
  await expect(page.locator('[data-field="arrivalPattern"]')).toBeVisible()
  await page.locator('[data-choice="transfer"][data-value="self"]').click()
  await expect(page.locator('[data-choice="transfer"][data-value="airport"]')).toHaveAttribute('aria-pressed','false')
  await expect(page.locator('[data-field="arrivalPattern"]')).toHaveCount(0)
  await step(page,1).click()
  await expect(page.getByText('The balloon needs a slot with no golf booked.',{exact:true})).toHaveCount(0)
  await page.locator('[data-choice="extras"][data-value="balloon"]').click()
  await expect(page.getByText('The balloon needs a slot with no golf booked.',{exact:true})).toBeVisible()
  await page.locator('[data-choice="moreInterests"][data-value="none"]').click()
  await expect(page.getByText('The balloon needs a slot with no golf booked.',{exact:true})).toHaveCount(0)
  await step(page,2).click()
  const stay=page.locator('.review-card').filter({has:page.getByRole('heading',{name:'Stay',exact:true})})
  await expect(stay.getByText('Already booked in Palma',{exact:true})).toBeVisible()
  await expect(stay.locator('dt').filter({hasText:/^Area$/})).toHaveCount(0)
  await expect(stay.getByText('Single occupancy rooms',{exact:true})).toHaveCount(0)
  await expect(page.getByText('Flight pattern',{exact:true})).toHaveCount(0)
  await expect(page.getByText('Will everyone arrive together?',{exact:true})).toHaveCount(0)
  expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false)
  expect(submissions).toBe(0)
  if(process.env.MMG_WORKFLOW_PROOF)await page.screenshot({path:require('node:path').join(process.env.MMG_WORKFLOW_PROOF,'questionnaire-review-'+test.info().project.name+'.png'),fullPage:true})
})

test('failed questionnaire delivery keeps answers and offers a clear retry',async({page})=>{
  let fail=true,payloads=[]
  await page.route('**/api/trip-preferences',async route=>{
    const p=route.request().postDataJSON()
    if(p.action==='load-enquiry')return route.fulfill({json:{ok:true,enquiry}})
    payloads.push(p)
    return fail?route.fulfill({status:503,contentType:'text/html',body:'<html>Temporary upstream error</html>'}):route.fulfill({json:{ok:true}})
  })
  await page.goto(url)
  await expect(page.getByText('Your original enquiry',{exact:true})).toBeVisible()
  await page.locator('[data-field="success"]').fill('A birthday trip with friends')
  await step(page,2).click()
  await page.getByRole('button',{name:'Send preferences to Andy',exact:true}).click()
  await expect(page.getByText('Could not send your preferences. Please try again.',{exact:true})).toBeVisible()
  await expect(page.getByRole('button',{name:'Send preferences to Andy',exact:true})).toBeEnabled()
  expect(await page.evaluate(()=>Object.keys(sessionStorage).some(k=>k.startsWith('mmg-trip-draft:')))).toBe(true)
  fail=false
  await page.getByRole('button',{name:'Send preferences to Andy',exact:true}).click()
  await expect(page.getByRole('button',{name:'Sent to Andy',exact:true})).toBeVisible()
  expect(payloads).toHaveLength(2)
  expect(payloads[1].trip.success).toBe('A birthday trip with friends')
  expect(payloads[1].enquiryContext).toBe('test-context')
  expect(await page.evaluate(()=>Object.keys(sessionStorage).filter(k=>k.startsWith('mmg-trip-draft:')))).toEqual([])
})

test('an unavailable original enquiry cannot be submitted against the broken link',async({page})=>{
  let sends=0
  await page.route('**/api/trip-preferences',route=>{const p=route.request().postDataJSON();if(p.action!=='load-enquiry')sends++;return route.fulfill({status:404,json:{ok:false}})})
  await page.goto(url)
  await expect(page.getByText('Your original enquiry could not be loaded. Please contact Andy before sending your choices.',{exact:true})).toBeVisible()
  await step(page,2).click()
  await page.getByLabel('Your name',{exact:true}).fill('TEST Workflow')
  await page.getByLabel('Email from your enquiry',{exact:true}).fill('workflow@example.com')
  await expect(page.getByRole('button',{name:'Send preferences to Andy',exact:true})).toBeDisabled()
  expect(sends).toBe(0)
})
