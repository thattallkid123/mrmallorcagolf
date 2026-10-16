// Source changes require all four downloads to be regenerated and reviewed.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { getLeadMagnetData } from './export-lead-magnet-data.mjs'
const data = getLeadMagnetData()
if (data.courses.length !== 24 || data.courses.some(c => c.access !== 'Public' && (c.low !== null || c.peak !== null))) throw new Error('Export must cover 24 courses and hide restricted visitor rates')
for (const slug of ['cost-guide', 'trip-planner', 'beginners-guide', 'course-comparison']) {
  const pdf = readFileSync(fileURLToPath(new URL(`../public/downloads/${slug}.pdf`, import.meta.url)))
  if (!pdf.subarray(0, 5).equals(Buffer.from('%PDF-')) || !pdf.includes(Buffer.from(`MMG_LEAD_MAGNET_DATA_SHA256:${data.fingerprint}`))) throw new Error(`${slug}.pdf is missing or stale. Run npm run generate:lead-magnet-pdfs, then render and review all four PDFs.`)
}
console.log('Lead magnet data check passed: four PDFs match all 24 current course records.')
