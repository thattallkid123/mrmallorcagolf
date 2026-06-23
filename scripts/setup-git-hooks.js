const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')

const repoRoot = process.cwd()
const gitDir = path.join(repoRoot, '.git')
const hooksDir = path.join(repoRoot, '.githooks')

function hasGitRepo() {
  return fs.existsSync(gitDir)
}

function configureHooksPath() {
  execFileSync('git', ['config', 'core.hooksPath', '.githooks'], {
    cwd: repoRoot,
    stdio: 'ignore',
  })
}

function ensureHooksExecutable() {
  if (!fs.existsSync(hooksDir)) return

  for (const hookFile of fs.readdirSync(hooksDir)) {
    const hookPath = path.join(hooksDir, hookFile)
    if (!fs.statSync(hookPath).isFile()) continue

    try {
      fs.chmodSync(hookPath, 0o755)
    } catch {
      // Ignore chmod failures on filesystems that do not support POSIX modes.
    }
  }
}

if (!hasGitRepo()) {
  console.log('Skipping git hook setup: no .git directory found.')
  process.exit(0)
}

try {
  configureHooksPath()
  ensureHooksExecutable()
  console.log('Git hooks configured to use .githooks.')
} catch (error) {
  console.warn(`Skipping git hook setup: ${error.message}`)
}
