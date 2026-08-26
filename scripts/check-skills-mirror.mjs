#!/usr/bin/env node
// Verifies .codex/skills/ is an exact mirror of .claude/skills/ (the master).
//
// scripts/sync-agent-skills.mjs is a FIXER - it makes the mirror correct when
// someone remembers to run it. Nothing verified it, so drift was silent: on
// 2026-08-26 commit ad892a4 added a whole "4b. Search result / recrawl
// follow-up" section to .claude/skills/pricing-change/SKILL.md and never
// touched the .codex copy, leaving Codex sessions running an incomplete
// pricing procedure with no error anywhere. This check closes that gap by
// failing the build instead of waiting for someone to notice.
//
// Fix on failure: npm run skills:sync, then commit both directories.

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const SRC = join(root, ".claude", "skills");
const DEST = join(root, ".codex", "skills");

function walk(dir, base = dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, base, out);
    else out.push(relative(base, p).replace(/\\/g, "/"));
  }
  return out;
}

const errors = [];

if (!existsSync(SRC)) {
  console.error(`Skills mirror check: source not found: ${SRC}`);
  process.exit(1);
}

const srcFiles = new Set(walk(SRC));
const destFiles = new Set(walk(DEST));

for (const rel of srcFiles) {
  if (!destFiles.has(rel)) {
    errors.push(`missing from .codex/skills/: ${rel}`);
    continue;
  }
  const a = readFileSync(join(SRC, rel), "utf8");
  const b = readFileSync(join(DEST, rel), "utf8");
  // Compare content ignoring line-ending style only - this repo has mixed
  // CRLF/LF working copies and that is not real drift.
  if (a.replace(/\r\n/g, "\n") !== b.replace(/\r\n/g, "\n")) {
    errors.push(`content differs: ${rel}`);
  }
}

for (const rel of destFiles) {
  if (!srcFiles.has(rel)) errors.push(`stale in .codex/skills/ (not in master): ${rel}`);
}

if (errors.length) {
  console.error("Skills mirror check failed:");
  for (const e of errors) console.error(`  - ${e}`);
  console.error("\n.claude/skills/ is the master. Run: npm run skills:sync, then commit both directories.");
  process.exit(1);
}

console.log(`Skills mirror check passed - .codex/skills/ matches .claude/skills/ (${srcFiles.size} file(s)).`);
