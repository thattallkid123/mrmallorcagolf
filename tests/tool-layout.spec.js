const { test, expect } = require('@playwright/test')
const { chooseAndContinue } = require('./helpers/planning-quiz')

test.beforeEach(async ({ page }) => {
  // Layout checks wait for their controls, not third-party analytics traffic.
  await page.route(/googletagmanager|google-analytics|\/\_vercel\/insights\//, route => route.abort())
})

test('hotel choices align and use the available width', async ({ page }, info) => {
  await page.goto('/tools/hotel-recommender', { waitUntil: 'load' })
  const track = page.locator('.tool-choice-track')
  await expect(track.locator('button')).toHaveCount(5)
  const bounds = await track.locator('img').evaluateAll(images => images.map(image => ({top:image.getBoundingClientRect().top, height:image.getBoundingClientRect().height, width:image.getBoundingClientRect().width})))
  expect(new Set(bounds.map(b => Math.round(b.top))).size).toBe(1)
  expect(new Set(bounds.map(b => Math.round(b.height))).size).toBe(1)
  expect(bounds.every(b => b.width >= 258 && b.width <= 320 && b.height >= 170)).toBe(true)
  await expect(track.locator('img').first()).toHaveCSS('object-fit', 'contain')
  if (await track.evaluate(e => e.scrollWidth - e.clientWidth) > 2) {
    await page.getByRole('button', { name:'Next choices', exact:true }).click()
    await expect.poll(() => track.evaluate(e => e.scrollLeft)).toBeGreaterThan(0)
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('text choices keep uniform widths and make multiple selections visible',async({page})=>{
  await page.goto('/tools/hotel-recommender',{waitUntil:'load'})
  await chooseAndContinue(page,page.locator('.hr-opt').first(),'hotel')
  const buttons=page.locator('.tool-choice-track >button')
  await expect(buttons).toHaveCount(5)
  const widths=await buttons.evaluateAll(es=>es.map(e=>e.getBoundingClientRect().width))
  expect(Math.max(...widths)-Math.min(...widths)).toBeLessThanOrEqual(1)
  const spacing=await buttons.evaluateAll(es=>es.map(e=>({
    copyRight:e.querySelector('.hr-opt-body').getBoundingClientRect().right,
    markerLeft:e.querySelector('.tool-choice-marker').getBoundingClientRect().left,
  })))
  expect(spacing.every(item=>item.markerLeft-item.copyRight>=8)).toBe(true)
  await expect(page.locator('.tool-choice-marker--multiple')).toHaveCount(5)
  await buttons.nth(0).click()
  await buttons.nth(2).click()
  await expect(buttons.nth(0)).toHaveAttribute('aria-pressed','true')
  await expect(buttons.nth(2)).toHaveAttribute('aria-pressed','true')
  await expect(buttons.nth(0).locator('.tool-choice-marker')).toHaveText('✓')
  await expect(buttons.nth(2).locator('.tool-choice-marker')).toHaveText('✓')
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
})

test('six day-planner regions fit desktop and explain certificates clearly', async ({ page }, info) => {
  if (info.project.name === 'desktop-chrome') await page.setViewportSize({ width: 1920, height: 980 })
  await page.goto('/tools/golf-day-builder', { waitUntil: 'load' })
  const track = page.locator('.tool-choice-track')
  await expect(track.locator('button')).toHaveCount(6)
  const cards = await track.locator('button').evaluateAll(buttons => buttons.map(button => {
    const bounds = button.getBoundingClientRect()
    const media = button.querySelector('.tool-photo,.tool-choice-placeholder')?.getBoundingClientRect()
    return { width: bounds.width, height: bounds.height, mediaHeight: media?.height }
  }))
  expect(Math.max(...cards.map(card => card.width))).toBeLessThanOrEqual(320)
  expect(Math.max(...cards.map(card => card.height))).toBeLessThan(340)
  expect(new Set(cards.map(card => Math.round(card.mediaHeight))).size).toBe(1)
  expect(cards.every(card => card.mediaHeight >= 170 && card.mediaHeight <= 215)).toBe(true)
  await expect(track.locator('.tool-choice-placeholder')).toHaveCount(1)
  await expect(track.locator('img')).toHaveCount(5)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await chooseAndContinue(page,page.getByRole('button', {name:/Palma and around/}),'day')
  await chooseAndContinue(page,page.getByRole('button', {name:/Relaxed golf/}),'day')
  await chooseAndContinue(page,page.getByRole('button', {name:/Casual/}),'day')
  await expect(page.getByRole('heading', {name:'What is the highest handicap in your group?'})).toBeVisible()
  await expect(page.locator('.gdb-qcard .sub')).toContainText('every player can show a current handicap certificate')
  await expect(page.getByRole('button', {name:/Missing a certificate/})).toContainText('One or more players')
  await expect(page.getByRole('button', {name:/Not confirmed yet/})).toContainText('everyone’s handicap or certificate status')
})

test('five-course comparison resolves T Golf Palma and aligns external labels', async ({ page }, info) => {
  await page.goto('/tools/green-fees', { waitUntil: 'load' })
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
test('blocked planner gives practical checks and preserves answers when editing', async ({ page }) => {
  await page.goto('/tools/golf-day-builder', { waitUntil: 'load' })
  for (const name of [/Palma and around/, /Relaxed golf/, /Confident/, /Missing a certificate/, /Mid-morning/, /Wider fairways/]) {
    await chooseAndContinue(page,page.getByRole('button', {name}),'day')
  }
  await expect(page.getByRole('heading',{name:'What would round out the day?'})).toBeVisible()
  const widths=await page.locator('.gdb-opt').evaluateAll(es=>es.map(e=>e.getBoundingClientRect().width))
  expect(Math.min(...widths)).toBeGreaterThanOrEqual(120)
  await page.getByRole('button',{name:'Continue',exact:true}).click()
  await chooseAndContinue(page,page.getByRole('button',{name:/We will drive/}),'day')
  await chooseAndContinue(page,page.getByRole('button',{name:/A couple/}),'day')
  const result = page.locator('.gdb-no-match')
  await expect(result.getByRole('heading',{name:'Check access before choosing a course'})).toBeVisible()
  await expect(result).toContainText('This does not mean your group cannot play.')
  await expect(result.locator('li')).toHaveCount(3)
  await expect(result.getByRole('link',{name:'Check course access',exact:true})).toHaveAttribute('href','/tools/handicap-checker')
  await expect(result.getByRole('link',{name:'Compare course requirements',exact:true})).toHaveAttribute('href','/tools/green-fees')
  const titleFont = await result.locator('h2').evaluate(e=>getComputedStyle(e).fontFamily)
  expect(titleFont).toEqual(await page.locator('h1').evaluate(e=>getComputedStyle(e).fontFamily))
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
  await result.getByRole('button',{name:'Edit handicap details',exact:true}).click()
  await expect(page.getByRole('heading',{name:'What is the highest handicap in your group?'})).toBeVisible()
  await expect(page.getByRole('button',{name:/Missing a certificate/})).toHaveClass(/selected/)
})

for (const width of [1280, 1920]) test(`day choices use readable single rows and compact small sets at ${width}px`, async ({page}, info) => {
  test.skip(info.project.name !== 'desktop-chrome')
  await page.setViewportSize({width,height:1000})
  await page.goto('/tools/golf-day-builder',{waitUntil:'domcontentloaded'})
  await page.evaluate(() => document.fonts.ready)
  await chooseAndContinue(page,page.getByRole('button',{name:/Palma and around/}),'day')
  await expect(page.locator('.gdb-step-label')).toHaveText('2 / 9')
  const sixRows=await page.locator('.gdb-opt').evaluateAll(es=>Object.values(es.reduce((rows,e)=>{const y=Math.round(e.getBoundingClientRect().top);rows[y]=(rows[y]||0)+1;return rows},{})))
  expect(sixRows).toEqual([3,3])
  await page.locator('.tool-choice-track').screenshot({path:info.outputPath('six-choices.png')})
  for (const name of [/Relaxed golf/, /Confident/]) await chooseAndContinue(page,page.getByRole('button',{name}),'day')
  await expect(page.locator('.gdb-step-label')).toHaveText('4 / 9')
  const cards=page.locator('.tool-choice-track >button')
  let bounds=await cards.evaluateAll(es=>es.map(e=>({top:Math.round(e.getBoundingClientRect().top),width:e.getBoundingClientRect().width,scroll:e.scrollWidth-e.clientWidth})))
  expect(new Set(bounds.map(b=>b.top)).size).toBe(1)
  expect(Math.max(...bounds.slice(0,3).map(b=>b.width))).toBeLessThan(Math.min(...bounds.slice(3).map(b=>b.width)))
  expect(bounds.every(b=>b.scroll<=1)).toBe(true)
  const numerical=await cards.evaluateAll(es=>es.slice(0,3).map(e=>{
    const card=e.getBoundingClientRect(),label=e.querySelector('.t').getBoundingClientRect(),marker=e.querySelector('.tool-choice-marker').getBoundingClientRect()
    return {label:Math.abs(label.top+label.height/2-card.top-card.height/2),marker:Math.abs(marker.top+marker.height/2-card.top-card.height/2)}
  }))
  expect(numerical.every(x=>x.label<2&&x.marker<2)).toBe(true)

  await chooseAndContinue(page,page.getByRole('button',{name:'Up to 28',exact:true}),'day')
  await chooseAndContinue(page,page.getByRole('button',{name:/Mid-morning/}),'day')
  await expect(page.locator('.gdb-step-label')).toHaveText('6 / 9')
  bounds=await cards.evaluateAll(es=>es.map(e=>({top:Math.round(e.getBoundingClientRect().top),scroll:e.scrollWidth-e.clientWidth})))
  expect(new Set(bounds.map(b=>b.top)).size).toBe(1)
  expect(bounds.every(b=>b.scroll<=1)).toBe(true)
  await chooseAndContinue(page,page.getByRole('button',{name:/Wider fairways/}),'day')
  await expect(page.locator('.gdb-step-label')).toHaveText('7 / 9')
  const rows=await cards.evaluateAll(es=>Object.values(es.reduce((rows,e)=>{const y=Math.round(e.getBoundingClientRect().top);rows[y]=(rows[y]||0)+1;return rows},{})))
  expect(rows).toEqual([4,3])
  await page.getByRole('button',{name:'Continue',exact:true}).click()
  await expect(page.locator('.gdb-step-label')).toHaveText('8 / 9')
  const pair=await cards.evaluateAll(es=>es.map(e=>({left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right,width:e.getBoundingClientRect().width})))
  expect(pair.every(b=>b.width<=340)).toBe(true)
  expect(Math.abs((pair[0].left+pair[1].right)/2-width/2)).toBeLessThan(2)
  expect(await page.locator('.tool-choice-track').evaluate(e=>e.scrollWidth-e.clientWidth)).toBeLessThanOrEqual(2)
})

for(const lang of ['en','de','fr','zh'])test(`day results have a readable timeline and no generic suitability box: ${lang}`,async({page},info)=>{
  test.setTimeout(90000)
  let emailed
  await page.route('**/api/send-itinerary',async route=>{emailed=route.request().postDataJSON();await route.fulfill({json:{success:true}})})
  await page.goto((lang==='en'?'':'/'+lang)+'/tools/golf-day-builder',{waitUntil:'load'})
  for(const index of [1,0,2,0,2,0])await chooseAndContinue(page,page.locator('.gdb-opt').nth(index),'day')
  await chooseAndContinue(page,page.locator('.gdb-opt').last(),'day')
  await chooseAndContinue(page,page.locator('.gdb-opt').nth(1),'day')
  await chooseAndContinue(page,page.locator('.gdb-opt').first(),'day')
  const active=page.locator('.gdb-itin.active')
  await expect(active).toBeVisible()
  await expect(page.locator('.gdb-why-card')).toHaveCount(0)
  const tabs=page.locator('.gdb-tab')
  for(let i=0;i<await tabs.count();i++){
    await tabs.nth(i).click()
    const timeline=active.locator('.gdb-timeline')
    const geometry=await timeline.evaluate(e=>{
      const r=e.getBoundingClientRect(),card=e.parentElement.querySelector('.gdb-course-card').getBoundingClientRect()
      return {width:r.width,centre:Math.abs(r.left+r.width/2-card.left-card.width/2),line:getComputedStyle(e,'::before').content}
    })
    expect(geometry.width).toBeLessThanOrEqual(780)
    expect(geometry.centre).toBeLessThan(2)
    expect(['none','normal']).toContain(geometry.line)
    await timeline.screenshot({path:info.outputPath(`timeline-${i}.png`)})
    const rows=await active.locator('.gdb-tl-item').evaluateAll(es=>es.map(e=>{
      const n=e.querySelector('.gdb-tl-dot').getBoundingClientRect()
      const text=[...e.querySelectorAll('.gdb-tl-time,.gdb-tl-title,.gdb-tl-desc')].map(x=>({left:x.getBoundingClientRect().left,overflow:x.scrollWidth-x.clientWidth}))
      return {right:n.right,text}
    }))
    expect(rows.every(row=>row.text.every(t=>t.left-row.right>=12&&t.overflow<=1))).toBe(true)
    await expect(active.locator('.gdb-pills')).not.toBeEmpty()
    await expect(active.locator('.tool-photo img')).toHaveCount(1)
  }
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
  if(lang==='en'){
    await page.locator('.gdb-cta-block input[type="email"]').fill('test@example.com')
    await page.locator('.gdb-cta-block button').first().click()
    await expect.poll(()=>emailed?.data?.itineraries?.length).toBeGreaterThan(0)
    expect(emailed.data.itineraries.every(it=>!Object.hasOwn(it,'why'))).toBe(true)
  }
})

for(const lang of ['en','de'])test(`six course preferences retain complete rows: ${lang}`,async({page},info)=>{
  await page.goto((lang==='en'?'':'/'+lang)+'/tools/course-selector',{waitUntil:'load'})
  await chooseAndContinue(page,page.locator('.cst-opt').last(),'course')
  await chooseAndContinue(page,page.locator('.cst-opt').nth(2),'course')
  await expect(page.locator('.cst-opt')).toHaveCount(6)
  await page.mouse.move(0,0)
  // Hover lifts a card by 2px; measure the settled rows rather than that animation.
  await expect.poll(()=>page.locator('.cst-opt').evaluateAll(es=>Object.values(es.reduce((rows,e)=>{const y=Math.round(e.getBoundingClientRect().top);rows[y]=(rows[y]||0)+1;return rows},{})))).toEqual(info.project.name==='desktop-chrome'?[3,3]:[1,1,1,1,1,1])
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
})
