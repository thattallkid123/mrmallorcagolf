#!/bin/bash
# validate-claude-refs.sh
# Validates that all file references in CLAUDE.md actually exist
# Run before committing to catch broken documentation links

CLAUDE_FILE="CLAUDE.md"
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$REPO_ROOT" || exit 1

if [ ! -f "$CLAUDE_FILE" ]; then
  echo "❌ CLAUDE.md not found"
  exit 1
fi

echo "🔍 Validating file references in CLAUDE.md..."
echo ""

# Extract file references (skip File Hygiene examples section)
# Only check files that exist in the repo
FILES=$(sed '/^## File Hygiene Rule/,$d' CLAUDE.md | \
  grep -oE '\b[A-Za-z_/][A-Za-z0-9_/\-]*\.(md|txt|xlsx|ps1|py)' | \
  grep -v '^Users' | \
  grep -v '^OneDrive' | \
  sort -u)

FOUND=0
MISSING=0
MISSING_LIST=""

while IFS= read -r file; do
  [ -z "$file" ] && continue

  if [ -f "$file" ]; then
    echo "✅ $file"
    ((FOUND++))
  else
    echo "❌ MISSING: $file"
    ((MISSING++))
    MISSING_LIST="$MISSING_LIST  - $file\n"
  fi
done <<< "$FILES"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Found: $FOUND ✅ | Missing: $MISSING ❌"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $MISSING -gt 0 ]; then
  echo ""
  echo "⚠️  Fix these broken references in CLAUDE.md:"
  echo -e "$MISSING_LIST"
  exit 1
fi

echo ""
echo "✅ All references valid!"
exit 0
