# MMG Skills Sync Script
# Syncs Drive-mastered MMG_SKILL_* knowledge skills to Claude when matching
# folders exist. Repo code-workflow skills remain git-mastered separately.
#
# The Drive -> target mapping lives in Skills-Map.ps1, shared with
# CODEX_SKILLS_SYNC.ps1, so the two sync scripts cannot drift apart.

$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "Skills-Map.ps1")

$driveRoot = if ($env:MMG_DRIVE_ROOT) { $env:MMG_DRIVE_ROOT } else { "G:\My Drive\Mr Mallorca Golf" }
$gdriveCandidates = @(
    (Join-Path $driveRoot "Skills"),
    (Join-Path $driveRoot "Systems & Planning\Skills")
)
$gdrive = $gdriveCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $gdrive) {
    $gdrive = $gdriveCandidates[0]
}

$claude = Join-Path $env:USERPROFILE ".claude\skills"
$claudeMdPath = Join-Path $PSScriptRoot "CLAUDE.md"

$skills = $MmgSkillsMap

Write-Host "MMG Skills Sync Script" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Green
Write-Host ""
Write-Host "Source (master): $gdrive"
Write-Host "Target (Claude): $claude"
Write-Host ""

$syncCount = 0
$skippedCount = 0
$errorCount = 0
$syncedFolders = @()

if (-not (Test-Path $gdrive)) {
    Write-Host "Drive source folder not found: $gdrive" -ForegroundColor Red
    exit 1
}

foreach ($skill in $skills) {
    Write-Host "Syncing: $($skill.Drive)" -ForegroundColor Cyan

    $driveFile = Join-Path $gdrive $skill.Drive
    $claudeFile = Join-Path (Join-Path $claude $skill.Target) "SKILL.md"

    if (-not (Test-Path $driveFile)) {
        Write-Host "  Source not found: $driveFile" -ForegroundColor Red
        $errorCount++
        continue
    }

    if (Test-Path $claudeFile) {
        try {
            Copy-Item $driveFile $claudeFile -Force
            Write-Host "  Copied to Claude" -ForegroundColor Green
            $syncCount++
            $syncedFolders += $skill.Target
        } catch {
            Write-Host "  Failed to copy to Claude: $_" -ForegroundColor Red
            $errorCount++
        }
    } else {
        Write-Host "  Claude target folder not found, skipping: $claudeFile" -ForegroundColor Yellow
        $skippedCount++
    }
}

# Warn about Drive skill files not in the mapping table above - this is the
# only "discovery" this script does; a new file still needs a manual line
# added to $skills before it will ever be copied.
$mappedDriveNames = $skills | ForEach-Object { $_.Drive }
$unmapped = Get-ChildItem -Path $gdrive -Filter "MMG_SKILL_*.md" -File -ErrorAction SilentlyContinue |
    Where-Object { $mappedDriveNames -notcontains $_.Name }
foreach ($u in $unmapped) {
    Write-Host "  Found unmapped Drive skill file: $($u.Name) - add it to `$skills in SKILLS_SYNC.ps1 to sync it" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Sync Complete" -ForegroundColor Green
Write-Host "  Copied: $syncCount"
Write-Host "  Skipped (no matching Claude folder): $skippedCount"
Write-Host "  Errors: $errorCount"
if ($unmapped.Count -gt 0) {
    Write-Host "  Unmapped Drive files: $($unmapped.Count)" -ForegroundColor Yellow
}

if (Test-Path $claudeMdPath) {
    $folderNames = $syncedFolders | Sort-Object -Unique
    $newLine = if ($folderNames.Count -gt 0) {
        '- **Knowledge skills:** `Skills/MMG_SKILL_*.md` (' + $folderNames.Count + ' skills currently synced - ' + ($folderNames -join ', ') + '). Synced to Claude by `SKILLS_SYNC.ps1`. Separate from repo code-workflow skills in `.claude/skills/`.'
    } else {
        '- **Knowledge skills:** `Skills/MMG_SKILL_*.md` - 0 currently synced (no matching folders exist under `~/.claude/skills/`; see `SKILLS_SYNC.ps1` output). Separate from repo code-workflow skills in `.claude/skills/`.'
    }
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    $claudeMdContent = [System.IO.File]::ReadAllText($claudeMdPath, $utf8NoBom)
    $pattern = '(?m)^- \*\*Knowledge skills:\*\*.*$'
    if ($claudeMdContent -match $pattern) {
        $updatedContent = [System.Text.RegularExpressions.Regex]::Replace($claudeMdContent, $pattern, $newLine)
        if ($updatedContent -ne $claudeMdContent) {
            [System.IO.File]::WriteAllText($claudeMdPath, $updatedContent, $utf8NoBom)
            Write-Host "Updated CLAUDE.md Knowledge skills line." -ForegroundColor Green
        }
    }
}

if ($errorCount -ne 0) {
    Write-Host "Some syncs failed. Check the errors above." -ForegroundColor Red
    exit 1
}

if ($skippedCount -gt 0) {
    Write-Host "$skippedCount skill(s) skipped - no matching folder under $claude. Create the folder (with an empty SKILL.md) for any you want this script to populate, then re-run." -ForegroundColor Yellow
}

Write-Host "Done. $syncCount skill(s) copied, $skippedCount skipped." -ForegroundColor Green
