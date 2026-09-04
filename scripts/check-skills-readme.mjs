#!/usr/bin/env node
// Verifies .claude/skills/README.md's table lists every actual skill folder,
// and doesn't list one that no longer exists.
//
// This is the check-doc-pointers/check-doc-commands gap: those two catch a
// skill telling you to open a dead file or run a dead npm script, but neither
// notices when the README's own hand-written index quietly falls out of sync
// with the skill folders themselves. Confirmed drifting 2026-09-05:
// api-route-safety existed as a real skill folder with no row in the table at
// all, found only by a manual side-by-side comparison - the README's own
// stated editing rule ("update this table in the same commit") had already
// been in place and still didn't prevent it, because updating a skill file
// and updating its separate summary row are two different edits.
//
// This check only verifies the table's COVERAGE (every skill has a row, no
// row points at a dead skill) - it cannot verify a row's one-line
// description is still accurate, which is a semantic judgement call, not a
// mechanical one. See the README's own note on this.
//
// Run standalone:
//   node scripts/check-skills-readme.mjs

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const SKILLS_DIR = join(REPO_ROOT, ".claude", "skills");
const README_PATH = join(SKILLS_DIR, "README.md");

if (!existsSync(SKILLS_DIR)) {
  console.error(`Skills README check: skills dir not found: ${SKILLS_DIR}`);
  process.exit(1);
}
if (!existsSync(README_PATH)) {
  console.error(`Skills README check: README not found: ${README_PATH}`);
  process.exit(1);
}

const actualSkills = new Set(
  readdirSync(SKILLS_DIR).filter((name) => {
    const p = join(SKILLS_DIR, name);
    return statSync(p).isDirectory();
  }),
);

const readmeText = readFileSync(README_PATH, "utf8");
// Table rows look like: | `skill-name` | description |
const rowPattern = /^\|\s*`([a-z0-9-]+)`\s*\|/gm;
const listedSkills = new Set();
let match;
while ((match = rowPattern.exec(readmeText)) !== null) {
  listedSkills.add(match[1]);
}

const missingFromTable = [...actualSkills].filter((s) => !listedSkills.has(s));
const staleInTable = [...listedSkills].filter((s) => !actualSkills.has(s));

if (missingFromTable.length === 0 && staleInTable.length === 0) {
  console.log(
    `Skills README check passed - all ${actualSkills.size} skill(s) have a table row, no stale rows.`,
  );
  process.exit(0);
}

console.error("Skills README check FAILED:");
for (const s of missingFromTable) {
  console.error(`  - skill folder exists but has no README row: ${s}`);
}
for (const s of staleInTable) {
  console.error(`  - README row names a skill folder that no longer exists: ${s}`);
}
console.error(
  "\nFix: add/remove the row in .claude/skills/README.md, then npm run skills:sync and commit both directories.",
);
process.exit(1);
