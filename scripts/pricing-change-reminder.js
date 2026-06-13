#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const [, , subject = 'pricing change', oldValue = '', newValue = ''] = process.argv

const inventoryPath = path.join(__dirname, '..', 'docs', 'pricing-surfaces-inventory.md')
const inventoryExists = fs.existsSync(inventoryPath)

const sections = [
  `Pricing change reminder: ${subject}`,
  '',
  oldValue || newValue ? `Change: ${oldValue || '[old value]'} -> ${newValue || '[new value]'}` : null,
  '',
  '1. Update the source of truth',
  '- Excel master',
  '- Canonical site data',
  '- Shared content files',
  '',
  '2. Update repo surfaces',
  '- Course pages and cards',
  '- Blog posts and guides',
  '- MMG tools',
  '- Static apps',
  '- Internal docs and reference notes',
  '',
  '3. Update manual channels',
  '- LinkedIn',
  '- Google Business Profile',
  '- Trustpilot',
  '- Email / WhatsApp canned text',
  '- PDFs and screenshots',
  '',
  '4. Search before you finish',
  '- old price',
  '- new price',
  '- course name variants',
  '- recurring offer values like €495 and €950',
  '',
  inventoryExists ? `Inventory: ${path.relative(process.cwd(), inventoryPath)}` : null,
]

for (const line of sections) {
  if (line !== null) console.log(line)
}
