const { spawnSync } = require('child_process')

const STEPS = [
  ['node', ['scripts/check-text-corruption.js']],
  ['node', ['scripts/check-locale-content.js']],
  ['node', ['scripts/check-shared-locale-fallbacks.js']],
  ['node', ['scripts/check-guide-locale-coverage.js']],
  ['node', ['scripts/check-image-references.js']],
  ['node', ['scripts/check-course-destinations.js']],
  ['node', ['scripts/check-locale-page-files.js']],
]

for (const [command, args] of STEPS) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

console.log('\nLocale content checks completed successfully.')
console.log('Run `npm run build` separately as the final step before release.')
