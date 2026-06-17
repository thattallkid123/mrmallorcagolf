#!/usr/bin/env node
/**
 * Backfill Google Tasks from CHANGELOG.md
 *
 * Parses CHANGELOG.md to extract completed work and creates Google Tasks
 * with original timestamps so Google Tasks becomes single source of truth.
 *
 * Usage: node scripts/backfill-google-tasks.mjs [--dry-run] [--webhook-url URL]
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CHANGELOG_PATH = path.join(__dirname, '../CHANGELOG.md')

// Default webhook URL (update in environment or args)
const WEBHOOK_URL =
  process.env.GOOGLE_TASKS_WEBHOOK ||
  'https://script.google.com/macros/s/AKfycbw0RzUzzrXzn3inKcggu0deF05wbL2xGlR1r-tiMTR00nwLb03Lrx6lDWg8LGqbhUt7/exec'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const customWebhook = args.find((arg) => arg.startsWith('--webhook-url='))
if (customWebhook) {
  const url = customWebhook.split('=')[1]
  console.log(`Using custom webhook: ${url}`)
}

console.log(`📋 Backfilling Google Tasks from CHANGELOG.md`)
console.log(`📝 Source: ${CHANGELOG_PATH}`)
console.log(`🌐 Webhook: ${dryRun ? '(dry-run, no actual calls)' : WEBHOOK_URL}`)
console.log()

// Parse changelog
const changelogContent = fs.readFileSync(CHANGELOG_PATH, 'utf-8')

// Extract entries by date
const datePattern = /^## (\d{4}-\d{2}-\d{2})$/gm
const entries = []
let match

while ((match = datePattern.exec(changelogContent)) !== null) {
  const date = match[1]
  const startIdx = match.index + match[0].length
  const nextMatch = datePattern.exec(changelogContent)
  const endIdx = nextMatch ? nextMatch.index : changelogContent.length
  datePattern.lastIndex = match.index + match[0].length // Reset for next iteration

  const sectionContent = changelogContent.substring(startIdx, endIdx).trim()

  // Extract bullet points and categories
  const lines = sectionContent.split('\n')
  let currentCategory = null
  const tasks = []

  for (const line of lines) {
    if (line.startsWith('### ')) {
      currentCategory = line.replace('### ', '').trim()
    } else if (line.startsWith('- ')) {
      const bullet = line.replace('- ', '').trim()
      tasks.push({
        date,
        category: currentCategory,
        description: bullet,
      })
    }
  }

  if (tasks.length > 0) {
    entries.push({
      date,
      category: currentCategory,
      tasks,
    })
  }
}

console.log(`✅ Parsed ${entries.length} date entries with ${entries.reduce((sum, e) => sum + e.tasks.length, 0)} total tasks\n`)

// Group by category for better task organization
const tasksByCategory = {}
entries.forEach(({ date, tasks }) => {
  tasks.forEach(({ category, description }) => {
    if (!tasksByCategory[category]) {
      tasksByCategory[category] = []
    }
    tasksByCategory[category].push({
      date,
      description,
    })
  })
})

// Format tasks for Google Tasks API
const googleTasks = []
Object.entries(tasksByCategory).forEach(([category, items]) => {
  items.forEach(({ date, description }) => {
    // Extract tag (e.g., "[site]", "[content]", "[admin]")
    const tagMatch = description.match(/^\[([^\]]+)\]/)
    const tag = tagMatch ? tagMatch[1] : 'general'
    const cleanDescription = description.replace(/^\[[^\]]+\]\s*/, '')

    googleTasks.push({
      title: `${category}: ${tag}`,
      description: cleanDescription,
      dueDate: date,
      action: 'create',
    })
  })
})

console.log(`📌 Prepared ${googleTasks.length} Google Tasks:`)
console.log()

// Show first 5 as preview
googleTasks.slice(0, 5).forEach((task, idx) => {
  console.log(`${idx + 1}. "${task.title}"`)
  console.log(`   ${task.description.substring(0, 60)}${task.description.length > 60 ? '...' : ''}`)
  console.log(`   📅 ${task.dueDate}`)
  console.log()
})

if (googleTasks.length > 5) {
  console.log(`... and ${googleTasks.length - 5} more\n`)
}

if (dryRun) {
  console.log(`🎯 Dry-run complete. Run without --dry-run to create tasks.\n`)
  process.exit(0)
}

// Create tasks via webhook
console.log(`⏳ Creating tasks via webhook...\n`)

let successCount = 0
let errorCount = 0

for (const task of googleTasks) {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })

    const result = await response.json()

    if (response.ok && result.id) {
      successCount++
      console.log(`✅ Created: ${task.title}`)
    } else {
      errorCount++
      console.log(`❌ Failed: ${task.title} — ${result.error || response.statusText}`)
    }
  } catch (error) {
    errorCount++
    console.log(`❌ Error: ${task.title} — ${error.message}`)
  }
}

console.log()
console.log(`✅ Success: ${successCount}`)
console.log(`❌ Errors: ${errorCount}`)
console.log()
console.log(`🎉 Backfill complete! Check Google Tasks to verify.`)
