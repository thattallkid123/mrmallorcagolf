# MMG Skills Sync Script
# Syncs Drive-mastered MMG_SKILL_* knowledge skills to Claude when matching
# folders exist. Repo code-workflow skills remain git-mastered separately.

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
    @{Drive="MMG_SKILL_BLOG_WRITING.md"; Claude="blog-writing"},
    @{Drive="MMG_SKILL_SEO_CONTENT.md"; Claude="seo-content"},
    @{Drive="MMG_SKILL_SOCIAL_MEDIA.md"; Claude="social-media-mmg"},
    @{Drive="MMG_SKILL_CAROUSEL.md"; Claude="mr-mallorca-golf-carousel"},
    @{Drive="MMG_SKILL_CHINESE_CONTENT.md"; Claude="chinese-content"},
    @{Drive="MMG_SKILL_CONTENT_PIPELINE.md"; Claude="content-pipeline"},
    @{Drive="MMG_SKILL_FRONTEND_DESIGN.md"; Claude="frontend-design-mmg"},
    @{Drive="MMG_SKILL_NEXTJS.md"; Claude="nextjs-mrmallorcagolf"},
    @{Drive="MMG_SKILL_BUSINESS_OPERATIONS.md"; Claude="mmg-business-operations"},
    @{Drive="MMG_SKILL_PARTNERSHIPS.md"; Claude="mmg-partnerships"},
    @{Drive="MMG_SKILL_REPURPOSE.md"; Claude="repurpose"},
    @{Drive="MMG_SKILL_CHINESE_BACKLOG.md"; Claude="chinese-backlog"},
    @{Drive="MMG_SKILL_EMAIL_MANAGEMENT.md"; Claude="email-management"},
    @{Drive="MMG_SKILL_SITE_OPERATIONS_MMG.md"; Claude="site-operations-mmg"}
)

Write-Host "MMG Skills Sync Script" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Green
Write-Host ""
Write-Host "Source (master): $gdrive"
Write-Host "Target (Claude): $claude"
Write-Host ""

$syncCount = 0
$errorCount = 0

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
        } catch {
            Write-Host "  Failed to copy to Claude: $_" -ForegroundColor Red
            $errorCount++
            continue
        }
    } else {
        Write-Host "  Claude target not found, skipping: $claudeFile" -ForegroundColor Yellow
    }

    $syncCount++
}

Write-Host ""
Write-Host "Sync Complete" -ForegroundColor Green
Write-Host "  Synced: $syncCount"
Write-Host "  Errors: $errorCount"

if ((Test-Path $claudeMdPath) -and $syncCount -gt 0) {
    $folderNames = $skills | ForEach-Object { $_.Claude } | Sort-Object -Unique
    $newLine = '- **Knowledge skills:** `Skills/MMG_SKILL_*.md` (' + $folderNames.Count + ' skills - ' + ($folderNames -join ', ') + '). Synced to Claude by `SKILLS_SYNC.ps1`. Separate from repo code-workflow skills in `.claude/skills/`.'
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

Write-Host "All available skills synced successfully." -ForegroundColor Green
