const { defineConfig, devices } = require('@playwright/test')
const port = Number(process.env.PLAYWRIGHT_PORT || 3000)
const baseURL = `http://127.0.0.1:${port}`

module.exports = defineConfig({
  testDir: './tests',
  // tests/unit/*.test.js are Vitest specs (npm test), not Playwright - without
  // this, `playwright test` tries to load them too and crashes on Vitest's
  // ESM-only import before running a single real visual check (found
  // 2026-08-23 via the Monthly Visual Regression Check Hermes job).
  testIgnore: '**/unit/**',
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  reporter: [['list']],
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1100 } },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: `npm run dev -- --hostname 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
})
