const NEXT = {
  day: '.gdb-btn-pine',
  hotel: '.hr-btn-next',
  course: '.cst-nav-row .cst-btn',
}

async function chooseAndContinue(page, option, tool) {
  await option.click()
  await page.locator(NEXT[tool]).click()
}

module.exports = { chooseAndContinue }
