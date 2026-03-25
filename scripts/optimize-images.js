// Image optimisation script for Mr Mallorca Golf
// Run once: node scripts/optimize-images.js
// Writes web-sized copies back to public/images/ (overwrites originals)
// Keep originals backed up elsewhere before running

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '../public/images');

const jobs = [
  // Full-viewport hero backgrounds — 2400px wide preserves quality on wide displays
  // hero-main.jpg is 2.42:1 panoramic — needs extra width
  { file: 'hero-main.jpg',      width: 2400, quality: 83 },
  // Standard 3:2 landscape hero shots
  { file: 'pwap-hero.jpg',      width: 1920, quality: 83 },
  { file: 'coaching-hero.jpg',  width: 1920, quality: 83 },
  { file: 'about-secondary.jpg',width: 1920, quality: 83 },
  { file: 'coaching-action.jpg',width: 1920, quality: 83 },
  // Portrait — 1200px wide is plenty for editorial use
  { file: 'about-portrait.jpg', width: 1200, quality: 83 },
  { file: 'about-andy-colour.jpg', width: 1200, quality: 83 },
  // Course aerial — keep at source width, just compress
  { file: 'golf-courses.jpg',   width: 1920, quality: 85 },
  // Contact page hero — was 31MB, reduce to web-appropriate size
  { file: 'contact.jpg',        width: 1920, quality: 82 },
  // Guides hero
  { file: 'guide.jpg',          width: 1920, quality: 83 },
];

async function run() {
  for (const job of jobs) {
    const filepath = path.join(IMAGES_DIR, job.file);
    if (!fs.existsSync(filepath)) {
      console.log(`SKIP  ${job.file} — not found`);
      continue;
    }

    const before = fs.statSync(filepath).size;
    const tmp = filepath + '.tmp';

    await sharp(filepath)
      .resize({ width: job.width, withoutEnlargement: true })
      .jpeg({ quality: job.quality, mozjpeg: true })
      .toFile(tmp);

    const after = fs.statSync(tmp).size;
    fs.renameSync(tmp, filepath);

    const saved = Math.round((1 - after / before) * 100);
    console.log(
      `OK    ${job.file.padEnd(28)}` +
      `${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(2)}MB` +
      `  (${saved}% smaller)`
    );
  }
  console.log('\nDone. Run npm run dev to check locally.');
}

run().catch(console.error);
