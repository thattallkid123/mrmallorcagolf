# MMG Skills Sync Script — Codex variant
# Twin of SKILLS_SYNC.ps1, targeting ~/.codex/skills/ instead of
# ~/.claude/skills/. Only copies into a target folder that already
# exists — it does not auto-discover or auto-create new folders. Create
# the empty target folder (with a placeholder SKILL.md) for any new
# skill you want this script to start populating, then re-run.
#
# The Drive -> target mapping lives in Skills-Map.ps1, shared with
# SKILLS_SYNC.ps1, so the two sync scripts cannot drift apart.

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

$codex = Join-Path $env:USERPROFILE ".codex\skills"

$skills = $MmgSkillsMap

Write-Host "MMG Skills Sync Script (Codex)" -ForegroundColor Green
Write-Host "===============================" -ForegroundColor Green
Write-Host ""
Write-Host "Source (master): $gdrive"
Write-Host "Target (Codex): $codex"
Write-Host ""

$syncCount = 0
$skippedCount = 0
$errorCount = 0

if (-not (Test-Path $gdrive)) {
    Write-Host "Drive source folder not found: $gdrive" -ForegroundColor Red
    exit 1
}

foreach ($skill in $skills) {
    Write-Host "Syncing: $($skill.Drive)" -ForegroundColor Cyan

    $driveFile = Join-Path $gdrive $skill.Drive
    $codexFile = Join-Path (Join-Path $codex $skill.Target) "SKILL.md"

    if (-not (Test-Path $driveFile)) {
        Write-Host "  Source not found: $driveFile" -ForegroundColor Red
        $errorCount++
        continue
    }

    if (Test-Path $codexFile) {
        try {
            Copy-Item $driveFile $codexFile -Force
            Write-Host "  Copied to Codex" -ForegroundColor Green
            $syncCount++
        } catch {
            Write-Host "  Failed to copy to Codex: $_" -ForegroundColor Red
            $errorCount++
        }
    } else {
        Write-Host "  Codex target folder not found, skipping: $codexFile" -ForegroundColor Yellow
        $skippedCount++
    }
}

Write-Host ""
Write-Host "Sync Complete" -ForegroundColor Green
Write-Host "  Copied: $syncCount"
Write-Host "  Skipped (no matching Codex folder): $skippedCount"
Write-Host "  Errors: $errorCount"

if ($errorCount -ne 0) {
    Write-Host "Some syncs failed. Check the errors above." -ForegroundColor Red
    exit 1
}

if ($skippedCount -gt 0) {
    Write-Host "$skippedCount skill(s) skipped - no matching folder under $codex. Create the folder (with an empty SKILL.md) for any you want this script to populate, then re-run." -ForegroundColor Yellow
}

Write-Host "Done. $syncCount skill(s) copied, $skippedCount skipped." -ForegroundColor Green
