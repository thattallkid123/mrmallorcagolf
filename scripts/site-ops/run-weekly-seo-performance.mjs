import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const OUTPUT_DIR = path.resolve('outputs', 'site-ops', 'weekly')

function run(command, args, label) {
  const result = spawnSync(command, args, { encoding: 'utf8', shell: true })
  return {
    label,
    ok: result.status === 0,
    status: result.status,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
  }
}

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, '-')
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const steps = [
    run('python', ['search_console/search_console_report.py', '--days', '28'], 'search_console_report'),
    run('python', ['search_console/url_indexing_report.py', '--limit', '25'], 'url_indexing_report'),
    run('python', ['ga4_analytics/ga4_report.py', '--days', '30'], 'ga4_report_30d'),
    run('npm', ['run', 'check:lighthouse'], 'lighthouse_scorecard'),
  ]

  const summary = {
    ran_at: new Date().toISOString(),
    ok: steps.every((step) => step.ok),
    steps: steps.map((step) => ({
      label: step.label,
      ok: step.ok,
      status: step.status,
    })),
  }

  const datedJson = path.join(OUTPUT_DIR, `weekly-seo-performance-${stamp()}.json`)
  const latestJson = path.join(OUTPUT_DIR, 'weekly-seo-performance-latest.json')
  fs.writeFileSync(datedJson, JSON.stringify({ summary, steps }, null, 2))
  fs.writeFileSync(latestJson, JSON.stringify({ summary, steps }, null, 2))

  const lines = [
    '# Weekly SEO + Performance Run',
    `Ran: ${summary.ran_at}`,
    `Status: ${summary.ok ? 'OK' : 'PARTIAL/FAILED'}`,
    '',
    '## Steps',
    ...summary.steps.map((step) => `- ${step.label}: ${step.ok ? 'OK' : `FAILED (${step.status})`}`),
    '',
  ]

  for (const step of steps) {
    lines.push(`## ${step.label}`)
    lines.push('```text')
    lines.push(step.stdout.trim() || '(no stdout)')
    if (step.stderr.trim()) {
      lines.push('')
      lines.push('[stderr]')
      lines.push(step.stderr.trim())
    }
    lines.push('```')
    lines.push('')
  }

  const datedMd = path.join(OUTPUT_DIR, `weekly-seo-performance-${stamp()}.md`)
  const latestMd = path.join(OUTPUT_DIR, 'weekly-seo-performance-latest.md')
  fs.writeFileSync(datedMd, `${lines.join('\n')}\n`)
  fs.writeFileSync(latestMd, `${lines.join('\n')}\n`)

  console.log(`Saved weekly report JSON: ${datedJson}`)
  console.log(`Saved weekly report Markdown: ${datedMd}`)
}

main().catch((error) => {
  console.error(`Weekly SEO performance run failed: ${error.message}`)
  process.exit(1)
})
