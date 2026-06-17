#!/usr/bin/env node
/**
 * Log Claude Code session work to CHANGELOG.md and Google Tasks
 * Usage: node scripts/session-done.js claude
 *        node scripts/session-done.js codex
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CHANGELOG_PATH = path.join(__dirname, '../CHANGELOG.md');
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbw0RzUzzrXzn3inKcggu0deF05wbL2xGlR1r-tiMTR00nwLb03Lrx6lDWg8LGqbhUt7/exec';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

async function main() {
  const type = process.argv[2]?.toLowerCase() || 'claude';

  if (!['claude', 'codex'].includes(type)) {
    console.error('Usage: node scripts/session-done.js [claude|codex]');
    process.exit(1);
  }

  console.log(`\n📝 ${type.toUpperCase()} Session Logger\n`);

  // Get work description
  const description = await question('What was accomplished? ');
  if (!description.trim()) {
    console.log('Cancelled.');
    rl.close();
    return;
  }

  // Get status
  const status = await question('Mark as Done? (y/n): ');
  const isDone = status.toLowerCase() === 'y';

  // Get today's date
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
  const dateHeader = `## ${dateStr}`;

  // Read current changelog
  let changelog = '';
  if (fs.existsSync(CHANGELOG_PATH)) {
    changelog = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
  }

  // Check if today's section exists
  const sectionRegex = new RegExp(`^## ${dateStr.replace(/-/g, '\\-')}`, 'm');
  const typeSection = `### ${type.charAt(0).toUpperCase() + type.slice(1)} Work`;

  let newChangelog;
  if (changelog.includes(dateHeader)) {
    // Today exists, find the type section
    if (changelog.includes(typeSection)) {
      // Type section exists, append to it
      const pattern = new RegExp(
        `(### ${type.charAt(0).toUpperCase() + type.slice(1)} Work[\\s\\S]*?)(?=###|## (?!${dateStr.replace(/-/g, '\\-')})|$)`,
        'm'
      );
      newChangelog = changelog.replace(pattern, `$1- [${type}] ${description}\n\n`);
    } else {
      // Type section doesn't exist, add it under today
      const todayPattern = new RegExp(`(## ${dateStr.replace(/-/g, '\\-')}.*?)(?=##|$)`, 's');
      newChangelog = changelog.replace(todayPattern, `$1\n${typeSection}\n- [${type}] ${description}\n\n`);
    }
  } else {
    // Today doesn't exist, add new section at top
    newChangelog = `${dateHeader}\n\n${typeSection}\n- [${type}] ${description}\n\n${changelog}`;
  }

  // Write to CHANGELOG
  fs.writeFileSync(CHANGELOG_PATH, newChangelog);
  console.log(`✅ Added to CHANGELOG.md`);

  // Create Google Task
  const taskPayload = {
    action: 'create',
    title: `${type.charAt(0).toUpperCase() + type.slice(1)}: ${description.substring(0, 60)}`,
    description: description,
    dueDate: dateStr
  };

  // If done, we'll need to mark it complete
  if (isDone) {
    taskPayload.markComplete = true;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskPayload)
    });

    const result = await response.json();
    if (result.id) {
      console.log(`✅ Google Task created${isDone ? ' (marked done)' : ''}`);
      console.log(`\n📌 Task ID: ${result.id}`);
      console.log(`📅 Date: ${dateStr}`);
      console.log(`📝 Description: ${description}\n`);
    } else {
      console.log(`⚠️  Task creation response: ${JSON.stringify(result)}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not create Google Task (offline?). CHANGELOG updated.`);
  }

  rl.close();
}

main().catch(console.error);
