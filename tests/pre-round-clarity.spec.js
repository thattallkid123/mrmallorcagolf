const {test,expect}=require('@playwright/test')

test('pre-round delivery retains the grouped trip and working course links in every language',async({page})=>{
  const failed=[]
  page.on('pageerror',e=>failed.push(e.message))
  const q='son_vida~2026-11-10~0800,son_vida~2026-11-10~0810,alcanada~2026-11-12~0930'
  for(const lang of ['en','de','es','fr','nl','sv','zh']){
    const response=await page.goto((process.env.MMG_PRE_ROUND_ROUTE||'/pre-round.html')+'?r='+q+'&lang='+lang,{waitUntil:'domcontentloaded'})
    expect(response.status()).toBe(200)
    await expect(page.locator('.trip-overview a')).toHaveCount(2)
    await expect(page.locator('.round')).toHaveCount(2)
    await expect(page.locator('html')).toHaveAttribute('lang',lang)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content',/noindex/)
    await expect(page.locator('.booking-contact .btn').first()).toHaveAttribute('href','https://wa.me/34624466702')
    await expect(page.locator('.round .copy-info').first()).toHaveAttribute('data-copy',/0800,son_vida~2026-11-10~0810/)
    expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false)
    const fonts=await page.locator('.trip-overview').evaluate(el=>({body:getComputedStyle(el.querySelector('p')).fontFamily,title:getComputedStyle(el.querySelector('h2')).fontFamily}))
    expect(fonts.body).toContain('Jost')
    expect(fonts.title).toContain('Cormorant Garamond')
    if(lang==='en'&&process.env.MMG_PRE_ROUND_PROOF){
      await page.screenshot({path:require('node:path').join(process.env.MMG_PRE_ROUND_PROOF,'website-'+test.info().project.name+'.png')})
    }
    await page.locator('.trip-overview a').nth(1).click()
    await expect(page).toHaveURL(/#round-2$/)
    await expect(page.locator('#round-2 h1')).toHaveText('Alcanada')
  }
  expect(failed).toEqual([])
})
