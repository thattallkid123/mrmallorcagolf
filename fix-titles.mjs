import fs from 'fs';

const filePath = 'src/lib/guide-post-content.js';
let content = fs.readFileSync(filePath, 'utf-8');

const titleFixes = [
  {
    old: `title: "Son Muntaner Golf Mallorca Review (2026) - Best in Spain, But Is It Worth It?",`,
    new: `title: "Son Muntaner Golf - Best in Spain? (2026)",`
  },
  {
    old: `title: "Golf Santa Ponsa 1, Mallorca - A PGA Professional's Honest Review (2026)",`,
    new: `title: "Santa Ponsa 1 Golf - Review (2026)",`
  },
  {
    old: `title: "Son Termes Golf, Mallorca: A PGA Professional's Honest Review (2026)",`,
    new: `title: "Son Termes Golf - Review (2026)",`
  },
  {
    old: `title: "Club de Golf Alcanada - A PGA Professional's Honest Review (2026)",`,
    new: `title: "Alcanada Golf - Review (2026)",`
  },
  {
    old: `title: "Golf de Andratx Review - A PGA Professional's Honest Take (2026)",`,
    new: `title: "Golf de Andratx - Review (2026)",`
  },
  {
    old: `title: "T Golf Calvià Review - A PGA Professional's Honest Take (2026)",`,
    new: `title: "T Golf Calvià - Review (2026)",`
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
console.log('\n✓ guide-post-content.js updated (8 titles)');
