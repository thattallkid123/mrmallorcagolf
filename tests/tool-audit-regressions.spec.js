const {test,expect}=require('@playwright/test')
test.use({trace:'off',reducedMotion:'reduce'})
test.setTimeout(180000)

test.beforeEach(async({page})=>{
 await page.addInitScript(()=>{
  const originalFetch=window.fetch.bind(window)
  window.fetch=(resource,options)=>options?.method==='POST' && new URL(typeof resource==='string'?resource:resource.url,location.origin).pathname.startsWith('/api/')
   ? Promise.resolve(new Response(JSON.stringify({ok:true,success:true}),{status:200,headers:{'Content-Type':'application/json'}}))
   : originalFetch(resource,options)
 })
 await page.route(/googletagmanager|google-analytics|\/_vercel\/insights\//,r=>r.abort())
 await page.route('**/api/**',r=>r.request().method()==='POST'?r.fulfill({status:200,json:{ok:true,success:true}}):r.continue())
})

test('handicap rejects an invalid index and explains an area fallback',async({page})=>{
 await page.goto('/tools/handicap-checker')
 await page.locator('#hcp').fill('99')
 await page.locator('.hc-check').click()
 await expect(page.locator('#hcp-error')).toBeVisible()
 await expect(page.locator('.hc-summary')).toHaveCount(0)
 await expect(page.locator('#hcp')).toHaveValue('99')
 await page.locator('.hc-nohcp input').check()
 await page.locator('#area').selectOption('north')
 await page.locator('.hc-check').click()
 await expect(page.locator('#hcp-error')).toHaveCount(0)
 await expect(page.locator('.hc-rec')).toContainText('elsewhere on the island')
 const href=await page.locator('.hc-cta .btn').getAttribute('href')
 const fields=JSON.parse(new URLSearchParams(href.split('#')[1]).get('plan'))
 expect(fields.message).toContain('North')
 expect(fields.message).toContain('Group size: 2')
 const wa=new URL(await page.locator('.hc-cta a[href*="wa.me"]').getAttribute('href'))
 expect(wa.searchParams.get('text')).toBe(fields.message)
 await expect(page.locator('.hc-seg button[aria-pressed="true"]')).toHaveCount(2)
})

test('calculator prevents six rounds in a day and retains a revised email action',async({page})=>{
 await page.goto('/tools/golf-cost-calculator')
 const minus=page.getByRole('button',{name:'− Trip length (days)',exact:true})
 for(let i=0;i<3;i++)await minus.click()
 for(let i=0;i<3;i++)await page.getByRole('button',{name:'+ Rounds of golf',exact:true}).click()
 await page.getByRole('button',{name:'Continue',exact:true}).click()
 await expect(page.locator('.planning-tool [role=alert]')).toContainText('Reduce the rounds')
 await page.getByRole('button',{name:'+ Trip length (days)',exact:true}).click()
 await page.getByRole('button',{name:'+ Trip length (days)',exact:true}).click()
 for(let i=0;i<2;i++)await page.getByRole('button',{name:'Continue',exact:true}).click()
 await expect(page.locator('.gcc-options button[aria-pressed="true"]')).toHaveCount(5)
 if(test.info().project.name==='mobile-chrome') {
  const widths=await page.locator('.gcc-options').evaluateAll(groups=>groups.map(group=>({width:group.clientWidth,buttons:[...group.children].map(button=>button.getBoundingClientRect().width)})))
  expect(widths.every(group=>group.buttons.every(width=>Math.abs(width-group.width)<3))).toBe(true)
  const buttons=await page.locator('.gcc-nav button').evaluateAll(items=>items.map(item=>({left:item.getBoundingClientRect().left,width:item.getBoundingClientRect().width})))
  expect(buttons[0].left).toBeLessThan(buttons[1].left)
  expect(buttons[0].width).toBeLessThan(buttons[1].width)
 }
 if(test.info().project.name==='desktop-chrome') {
  const rows=await page.locator('.gcc-options').evaluateAll(groups=>groups.map(group=>new Set([...group.children].map(button=>Math.round(button.getBoundingClientRect().top))).size))
  expect(rows.every(count=>count===1)).toBe(true)
 }
 await page.locator('.gcc-card').screenshot({path:test.info().outputPath('calculator-extras.png'),style:'nav { visibility:hidden !important; }'})
 await page.getByRole('button',{name:'See my estimate',exact:true}).click()
 const input=page.locator('.gcc-email-capture input[type=email]')
 await input.fill('audit@example.com')
 await page.getByRole('button',{name:'Email me the breakdown',exact:true}).click()
 await expect(input).toHaveCount(0,{timeout:30000})
 await page.getByRole('button',{name:'Adjust my answers',exact:true}).click()
 await page.getByRole('button',{name:'3-star',exact:true}).click()
 await page.getByRole('button',{name:'See my estimate',exact:true}).click()
 await expect(input).toBeVisible()
 const wa=new URL(await page.locator('.planning-tool a[href*="wa.me"][data-analytics-manual]').getAttribute('href'))
 expect(wa.searchParams.get('text')).toContain('3-star')
 expect(wa.searchParams.get('text')).not.toContain('accommodation: 3star')
})

for(const [slug,opts,next,steps,emailBox,send]of[
 ['course-selector','.cst-opt','.cst-nav-row .cst-btn',[2,1,2,2,0,0,0,0],'.cst-email-row input[type=email]','.cst-email-row button'],
 ['golf-day-builder','.gdb-opt','.gdb-btn-pine',[1,1,2,0,2,3,null,1,1],'.gdb-email-row input[type=email]','.gdb-email-row button'],
])test(`${slug} permits emailing a changed result`,async({page})=>{
 await page.goto('/tools/'+slug)
 for(const index of steps){if(index!==null)await page.locator(opts).nth(index).click();await page.locator(next).click()}
 const input=page.locator(emailBox)
 await input.fill('audit@example.com')
 await page.locator(send).click()
 await expect(input).toHaveCount(0,{timeout:30000})
 await page.getByRole('button',{name:'Adjust my answers',exact:true}).click()
 await page.locator(opts).last().click()
 await page.locator(next).click()
 await expect(input).toBeVisible()
})

test('hotel hand-offs preserve group size, hotel style and room budget',async({page})=>{
 await page.goto('/tools/hotel-recommender')
 for(const index of [3,2,2,1,2,0]){await page.locator('.hr-opt').nth(index).click();await page.locator('.hr-btn-next').click()}
 const href=await page.locator('.hr-andy-cta .hr-cta-link-primary').getAttribute('href')
 const fields=JSON.parse(new URLSearchParams(href.split('#')[1]).get('plan'))
 for(const text of ['3 to 5','Classic hotel','€250'])expect(fields.message).toContain(text)
 const wa=new URL(await page.locator('.hr-andy-cta .hr-cta-link-secondary').getAttribute('href'))
 expect(wa.searchParams.get('text')).toBe(fields.message)
 await expect(page.locator('.hr-results-hero')).not.toContainText('staying in Near Palma')
})

test('Chinese beginners receive public no-handicap courses and a complete enquiry',async({page})=>{
 await page.goto('/zh/tools/course-selector')
 for(const index of [0,1,4,0,0,2,2]){await page.locator('.zh-opt').nth(index).click();await page.locator('.q-nav .btn-action').click()}
 await expect(page.locator('.cc-btn-gold').first()).toBeVisible()
 const href=await page.locator('.cc-btn-gold').first().getAttribute('href')
 const fields=JSON.parse(new URLSearchParams(href.split('#')[1]).get('plan'))
 expect(fields.message).toContain('暂时不需要')
 expect(fields.message).toContain('初学者')
 expect(fields.courses).not.toContain('Santa Ponsa 3')
 expect(await page.locator('.result-card h3').allTextContents()).not.toContain('Golf Son Quint')
})

for(const [lang,summary]of[['de','4 Tage'],['es','3 vueltas'],['fr','Équilibré'],['nl','3 rondes'],['sv','3 rundor'],['zh','3 轮']])test(`calculator results use localized units and budget: ${lang}`,async({page})=>{
 await page.goto('/'+lang+'/tools/golf-cost-calculator')
 for(let i=0;i<2;i++)await page.locator('.gcc-nav button').last().click()
 await page.locator('.gcc-nav button').last().click()
 await expect(page.locator('.gcc-hero-est .per')).toContainText(summary)
 await expect(page.locator('.gcc-hero-est .per')).not.toContainText('balanced')
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
})
