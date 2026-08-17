# MMG Skills Sync Script
# Syncs Drive-mastered MMG_SKILL_* knowledge skills to Claude when matching
# folders exist. Repo code-workflow skills remain git-mastered separately.
#
# Naming rule: every Claude target below must carry an unambiguous "mmg-"
# (or clearly MMG-branded) prefix. On 2026-08-14 the generic target
# "seo-content" collided with an unrelated pre-existing SEO-plugin skill of
# the same name and silently overwrote it — this script only checks whether
# a target folder exists, not whether it's the right one. Never add a bare
# generic name (e.g. "seo-content", "repurpose", "content-pipeline") here.

$ErrorActionPreference = "Stop"

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

$skills = @(
    @{Drive="MMG_SKILL_BLOG_WRITING.md"; Claude="mmg-blog-writing"},
    @{Drive="MMG_SKILL_SEO_CONTENT.md"; Claude="mmg-seo-content"},
    @{Drive="MMG_SKILL_SOCIAL_MEDIA.md"; Claude="social-media-mmg"},
    @{Drive="MMG_SKILL_CAROUSEL.md"; Claude="mr-mallorca-golf-carousel"},
    @{Drive="MMG_SKILL_CHINESE_CONTENT.md"; Claude="mmg-chinese-content"},
    @{Drive="MMG_SKILL_FRONTEND_DESIGN.md"; Claude="frontend-design-mmg"},
    @{Drive="MMG_SKILL_NEXTJS.md"; Claude="nextjs-mrmallorcagolf"},
    @{Drive="MMG_SKILL_PARTNERSHIPS.md"; Claude="mmg-partnerships"},
    @{Drive="MMG_SKILL_REPURPOSE.md"; Claude="mmg-repurpose"},
    @{Drive="MMG_SKILL_CHINESE_BACKLOG.md"; Claude="mmg-chinese-backlog"},
    @{Drive="MMG_SKILL_EMAIL_MANAGEMENT.md"; Claude="mmg-email-management"},
    @{Drive="MMG_SKILL_SITE_OPERATIONS_MMG.md"; Claude="site-operations-mmg"},
    @{Drive="MMG_SKILL_AUTONOMO_FILING.md"; Claude="mmg-autonomo-filing"},
    @{Drive="MMG_SKILL_CLIENT_DOCS.md"; Claude="mmg-client-docs"},
    @{Drive="MMG_SKILL_HERMES_OPS.md"; Claude="mmg-hermes-ops"}
)

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
    $claudeFile = Join-Path (Join-Path $claude $skill.Claude) "SKILL.md"

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
            $syncedFolders += $skill.Claude
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
