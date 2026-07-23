import fs from 'fs';

const filePath = 'src/lib/guide-article-content.js';
let content = fs.readFileSync(filePath, 'utf-8');

const titleFixes = [
  {
    old: `title: 'The Best Golf Courses in Mallorca - A PGA Professional\'s Honest Guide (2026)',`,
    new: `title: 'Best Golf Courses in Mallorca (2026)',`
  },
  {
    old: `title: 'How to Plan the Perfect Golf Trip to Mallorca | Courses, Base & Tee Times',`,
    new: `title: 'Plan Your Mallorca Golf Trip (2026)',`
  },
  {
    old: `title: 'The Best Time of Year to Play Golf in Mallorca - Month by Month (2026)',`,
    new: `title: 'Best Time to Play Golf (2026)',`
  },
  {
    old: `title: 'Golf Club Hire in Mallorca - Everything You Need to Know (2026)',`,
    new: `title: 'Golf Club Hire in Mallorca (2026)',`
  },
  {
    old: `title: 'How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown',`,
    new: `title: 'Golf Cost in Mallorca (2026)',`
  },
];

titleFixes.forEach(fix => {
  if (content.includes(fix.old)) {
    content = content.replace(fix.old, fix.new);
    console.log(`✓ ${fix.new.slice(8, 30)}...`);
  } else {
    console.log(`⚠ NOT FOUND: ${fix.old.slice(8, 30)}...`);
  }
});

fs.writeFileSync(filePath, content);
console.log('\n✓ guide-article-content.js updated (5 titles)');
