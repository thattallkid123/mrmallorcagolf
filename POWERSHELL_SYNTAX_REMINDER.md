# PowerShell Syntax Reminder

## ⚠️ IMPORTANT: PowerShell Does NOT Support `&&`

**Windows PowerShell and PowerShell Core do NOT recognize `&&` as a command separator.**

### ❌ WRONG - This will fail:
```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real" && git add -A && git commit -m "message"
```

Error: `The token '&&' is not a valid statement separator in this version.`

### ✅ CORRECT - Use semicolons or separate commands:

**Option 1: Use semicolons (same session)**
```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"; git add -A; git commit -m "message"
```

**Option 2: Use separate commands (run each line individually)**
```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
git add -A
git commit -m "message"
```

**Option 3: Use pipe (for conditional execution - advanced)**
```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real" | % { git add -A }
```

## Standard Git Workflow for This Repo

```powershell
# 1. Navigate to repo
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"

# 2. Stage all changes
git add -A

# 3. Commit with message
git commit -m "Brief description of changes"

# 4. Push to main
git push
```

## Why This Matters

- `&&` works in Bash/Linux/Mac but NOT Windows PowerShell
- This repo uses Windows paths, so use PowerShell syntax
- When copying commands from docs, check if they use `&&` and convert to `;` if needed

## Reference

| Shell | Command Separator | Notes |
|-------|------------------|-------|
| Bash/Linux | `&&` or `;` | Both work |
| Mac (zsh/bash) | `&&` or `;` | Both work |
| Windows PowerShell | `;` only | Use semicolon, NOT `&&` |
| Windows CMD | `&&` | Different syntax than PowerShell |

## Quick Fix

If you see `&&` in instructions:
1. Replace `&&` with `;`
2. Run in PowerShell
3. Done

Example:
```
WRONG: git add -A && git commit -m "message"
RIGHT: git add -A; git commit -m "message"
```
