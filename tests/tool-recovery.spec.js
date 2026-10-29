const {test,expect} = require('@playwright/test')
const {chooseAndContinue}=require('./helpers/planning-quiz')

test('villa searches offer an enquiry for small groups and preserve preferences when changing style', async ({page}, info) => {
  await page.goto('/tools/hotel-recommender',{waitUntil:'networkidle'})
  await chooseAndContinue(page,page.getByRole('button',{name:/Northwest Mallorca/}),'hotel')
  await page.getByRole('button',{name:/Close to the golf/}).click()
  await page.getByRole('button',{name:'Continue',exact:true}).click()
  await chooseAndContinue(page,page.getByRole('button',{name:'Corporate group',exact:true}),'hotel')
  await chooseAndContinue(page,page.getByRole('button',{name:'1 or 2',exact:true}),'hotel')
  await chooseAndContinue(page,page.getByRole('button',{name:/Private villa/}),'hotel')
  await expect(page.locator('#villa-nightly-budget')).toBeVisible()
  await page.locator('.hr-btn-next').click()
  await expect(page.locator('.hr-results-hero h2')).toHaveText('Enquire about a villa')
  await expect(page.locator('.hr-villa-summary')).toContainText('1 or 2')
  await expect(page.locator('.hr-villa-summary')).toContainText('Not sure yet')
  await expect(page.locator('.tool-empty-result')).toHaveCount(0)
  await expect(page.getByRole('button',{name:/Email my shortlist/})).toHaveCount(0)
  await expect(page.locator('.hr-email-section')).toHaveCount(0)
  await expect(page.locator('.hr-villa-enquiry button')).toHaveCount(3)
  const buttonBounds = await page.locator('.hr-villa-enquiry button').evaluateAll(buttons => buttons.map(button => ({top: Math.round(button.getBoundingClientRect().top),width: Math.round(button.getBoundingClientRect().width),height: Math.round(button.getBoundingClientRect().height)})))
  expect(new Set(buttonBounds.map(b=>b.width)).size).toBe(1)
  expect(new Set(buttonBounds.map(b=>b.height)).size).toBe(1)
  if(info.project.name === 'desktop-chrome') expect(new Set(buttonBounds.map(b=>b.top)).size).toBe(1)
  else expect(new Set(buttonBounds.map(b=>b.top)).size).toBe(3)
  await page.mouse.move(0, 0)
  // Read the settled normal colours, not a frame mid-way through a hover transition.
  for (const button of await page.locator('.hr-villa-enquiry button').all()) {
    await expect(button).toHaveCSS('color', 'rgb(45, 74, 62)')
    await expect(button).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  }
  const contrast = await page.locator('.hr-villa-enquiry button').evaluateAll(buttons => {
    const rgb = value => value.match(/[0-9.]+/g).map(Number)
    const lum = channels => channels.slice(0,3).map(v => { const n=v/255; return n<=.04045 ? n/12.92 : ((n+.055)/1.055)**2.4 }).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0)
    return buttons.map(button => {
      const background=rgb(getComputedStyle(button).backgroundColor)
      const color=rgb(getComputedStyle(button).color)
      const panel=rgb(getComputedStyle(button.closest('.hr-villa-enquiry')).backgroundColor)
      const bg=background.slice(0,3).map((v,i)=>v*(background[3]??1)+panel[i]*(1-(background[3]??1)))
      const fg=color.slice(0,3).map((v,i)=>v*(color[3]??1)+bg[i]*(1-(color[3]??1)))
      const a=lum(fg),b=lum(bg)
      return (Math.max(a,b)+.05)/(Math.min(a,b)+.05)
    })
  })
  for(const ratio of contrast) expect(ratio).toBeGreaterThanOrEqual(4.5)
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
  await page.getByRole('button',{name:'Change style',exact:true}).click()
  await expect(page.getByRole('button',{name:/Private villa/})).toHaveClass(/selected/)
  await chooseAndContinue(page,page.getByRole('button',{name:/Classic hotel/}),'hotel')
  await expect(page.getByRole('button',{name:/Up to €250/})).not.toHaveClass(/selected/)
  await chooseAndContinue(page,page.getByRole('button',{name:/Up to €250/}),'hotel')
  await expect(page.locator('.hr-hotel-card').first()).toBeVisible()
  await expect(page.locator('.hr-email-section')).toBeVisible()
})

test('zero comparison filters explain the result and reset to all 24 courses',async({page})=>{
  await page.goto('/tools/green-fees',{waitUntil:'networkidle'})
  await page.locator('#f-area').selectOption('North')
  await page.locator('#f-budget').selectOption('low')
  await page.locator('#f-walking').selectOption('buggy')
  const empty=page.locator('.tool-empty-result')
  await expect(empty.getByRole('heading',{name:'No courses match these filters'})).toBeVisible()
  await empty.getByRole('button').click()
  await expect(empty).toHaveCount(0)
  await expect(page.locator('.gf-count')).toContainText('24')
  await expect(page.locator('#f-area')).toHaveValue('')
  await expect(page.locator('#f-budget')).toHaveValue('')
  await expect(page.locator('#f-walking')).toHaveValue('')
})
for (const lang of ['de','es','fr','nl','sv','zh']) {
  test(`translated villa enquiry actions remain balanced: ${lang}`, async ({page}, info) => {
    await page.goto(`/${lang}/tools/hotel-recommender`,{waitUntil:'networkidle'})
    const choices=[4,0,4,0,3,0]
    for(let i=0;i<choices.length;i++) {
      await expect.poll(async()=>Number((await page.locator('.hr-step-num').textContent()).match(/[0-9]+/)[0])).toBe(i+1)
      if(i===5) {
        await expect(page.locator('#villa-nightly-budget')).toBeVisible()
        await page.locator('.hr-btn-next').click()
      } else await chooseAndContinue(page,page.locator('.hr-opt').nth(choices[i]),'hotel')
    }
    const buttons=page.locator('.tool-empty-result__actions button')
    await expect(buttons).toHaveCount(3)
    const bounds=await buttons.evaluateAll(elements=>elements.map(e=>({top:Math.round(e.getBoundingClientRect().top),width:Math.round(e.getBoundingClientRect().width),height:Math.round(e.getBoundingClientRect().height),overflow:e.scrollWidth-e.clientWidth})))
    expect(new Set(bounds.map(b=>b.width)).size).toBe(1)
    expect(new Set(bounds.map(b=>b.height)).size).toBe(1)
    expect(new Set(bounds.map(b=>b.top)).size).toBe(info.project.name==='desktop-chrome'?1:3)
    expect(bounds.every(b=>b.height>=44 && b.overflow<=1)).toBe(true)
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
  })
}

test('every villa area and group-size combination reaches an enquiry rather than an empty shortlist',async({page},info)=>{
  test.skip(info.project.name!=='desktop-chrome')
  test.setTimeout(180000)
  for(let area=0;area<5;area++) for(let size=0;size<4;size++){
    await page.goto('/tools/hotel-recommender',{waitUntil:'load'})
    for(const [step,index] of [[1,area],[2,4],[3,1],[4,size],[5,3]]){
      await expect(page.locator('.hr-step-num')).toHaveText(`Question ${step} of 6`)
      await chooseAndContinue(page,page.locator('.hr-opt').nth(index),'hotel')
    }
    await page.locator('.hr-btn-next').click()
    await expect(page.locator('.hr-results-hero h2')).toHaveText('Enquire about a villa')
    await expect(page.locator('.hr-villa-summary >div')).toHaveCount(6)
    await expect(page.locator('.hr-villa-enquiry .hr-cta-link-primary')).toBeVisible()
    await expect(page.locator('.tool-empty-result,.hr-hotel-card,.hr-email-section')).toHaveCount(0)
  }
})
