const { spawnSync } = require('child_process')

const STEPS = [
  ['node', ['--no-warnings', 'scripts/check-text-corruption.js']],
  ['node', ['--no-warnings', 'scripts/check-locale-content.js']],
  ['node', ['--no-warnings', 'scripts/check-locale-english-leaks.js']],
  ['node', ['--no-warnings', 'scripts/check-shared-locale-fallbacks.js']],
  ['node', ['--no-warnings', 'scripts/check-localized-overlay-integrity.js']],
  ['node', ['--no-warnings', 'scripts/check-guide-locale-coverage.js']],
  ['node', ['--no-warnings', 'scripts/check-guide-locale-english-leaks.js']],
  ['node', ['--no-warnings', 'scripts/audit-locale-parity.js']],
  ['node', ['--no-warnings', 'scripts/check-image-references.js']],
  ['node', ['--no-warnings', 'scripts/check-course-destinations.js']],
  ['node', ['--no-warnings', 'scripts/check-locale-page-files.js']],
]

for (const [command, args] of STEPS) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

console.log('\nLocale content checks completed successfully.')
console.log('Run `npm run build` separately as the final step before release.')
