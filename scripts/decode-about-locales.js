const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'src', 'lib', 'about-content.js')
let source = fs.readFileSync(filePath, 'utf8')

const startMarker = "  de: {"
const endMarker = "\n}\n\nexport function getAboutContent"
const start = source.indexOf(startMarker)
const end = source.indexOf(endMarker, start)

if (start === -1 || end === -1) {
  throw new Error('Could not find locale section in about-content.js')
}

const prefix = source.slice(0, start)
const localeSection = source.slice(start, end)
const suffix = source.slice(end)

const decoded = Buffer.from(localeSection, 'latin1').toString('utf8')

source = prefix + decoded + suffix
fs.writeFileSync(filePath, source)
