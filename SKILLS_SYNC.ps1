# MMG Skills Sync Script
# Syncs knowledge skills from Google Drive master (source of truth) to the
# Cowork skills directory.
#
# NOTE: this covers the Drive-mastered MMG_SKILL_* knowledge skills only.
# The repo's code-workflow skills live in .claude/skills/ (mastered in git,
# mirrored to .codex/skills/ via "npm run skills:sync") and are NOT part of
# this sync.
#
# ASCII only on purpose: Windows PowerShell 5.1 reads BOM-less scripts as the
# system ANSI codepage, which corrupts non-ASCII bytes (emoji) and breaks
# string parsing. Keep this file plain ASCII.
#
# Usage: .\SKILLS_SYNC.ps1
# Requires: PowerShell 5+

$ErrorActionPreference = "Stop"

# Define paths
$gdrive = "C:\Users\andyg\My Drive\Mr Mallorca Golf\Skills"
$cowork = "C:\Users\andyg\AppData\Roaming\Claude\local-agent-mode-sessions\skills-plugin\b3bebfb7-33e8-46ab-bd72-6182db69a9e5\fe7a7714-7c35-4970-aaae-5a3d84f73007\skills"

# Skill mappings: Drive filename -> Cowork folder name
$skills = @(
    @{Drive="MMG_SKILL_BLOG_WRITING.md"; Cowork="blog-writing"},
    @{Drive="MMG_SKILL_SEO_CONTENT.md"; Cowork="seo-content"},
    @{Drive="MMG_SKILL_SOCIAL_MEDIA.md"; Cowork="social-media-mmg"},
    @{Drive="MMG_SKILL_CAROUSEL.md"; Cowork="mr-mallorca-golf-carousel"},
    @{Drive="MMG_SKILL_CHINESE_CONTENT.md"; Cowork="chinese-content"},
    @{Drive="MMG_SKILL_CONTENT_PIPELINE.md"; Cowork="content-pipeline"},
    @{Drive="MMG_SKILL_FRONTEND_DESIGN.md"; Cowork="frontend-design-mmg"},
    @{Drive="MMG_SKILL_NEXTJS.md"; Cowork="nextjs-mrmallorcagolf"},
    @{Drive="MMG_SKILL_BUSINESS_OPERATIONS.md"; Cowork="mmg-business-operations"},
    @{Drive="MMG_SKILL_PARTNERSHIPS.md"; Cowork="mmg-partnerships"},
    @{Drive="MMG_SKILL_REPURPOSE.md"; Cowork="repurpose"},
    @{Drive="MMG_SKILL_CHINESE_BACKLOG.md"; Cowork="chinese-backlog"},
    @{Drive="MMG_SKILL_EMAIL_MANAGEMENT.md"; Cowork="email-management"}
)

Write-Host "MMG Skills Sync Script" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Green
Write-Host ""
Write-Host "Source (master): $gdrive"
Write-Host "Target (Cowork): $cowork"
Write-Host ""

$syncCount = 0
$errorCount = 0

foreach ($skill in $skills) {
    Write-Host "Syncing: $($skill.Drive)" -ForegroundColor Cyan

    $driveFile = "$gdrive\$($skill.Drive)"
    $coworkFile = "$cowork\$($skill.Cowork)\SKILL.md"

    # Check if source exists
    if (-not (Test-Path $driveFile)) {
        Write-Host "  [ERROR] Source not found: $driveFile" -ForegroundColor Red
        $errorCount++
        continue
    }

    # Copy to Cowork, creating the skill folder if Cowork does not have it yet.
    # The parent skills root must already exist; if it does not, the cowork
    # path is stale (Cowork session changed) and needs updating at the top.
    $coworkDir = Split-Path $coworkFile -Parent
    $coworkRoot = Split-Path $coworkDir -Parent
    if (-not (Test-Path $coworkRoot)) {
        Write-Host "  [ERROR] Cowork skills root missing: $coworkRoot" -ForegroundColor Red
        Write-Host "          Update the cowork path at the top of this script." -ForegroundColor Red
        $errorCount++
        continue
    }
    try {
        if (-not (Test-Path $coworkDir)) {
            New-Item -ItemType Directory -Path $coworkDir -Force | Out-Null
            Write-Host "  [NEW] Created Cowork folder: $($skill.Cowork)" -ForegroundColor Cyan
        }
        Copy-Item $driveFile $coworkFile -Force
        Write-Host "  [OK] Copied to Cowork" -ForegroundColor Green
    } catch {
        Write-Host "  [ERROR] Failed to copy to Cowork: $_" -ForegroundColor Red
        $errorCount++
        continue
    }

    $syncCount++
}

Write-Host ""
Write-Host "Sync Complete" -ForegroundColor Green
Write-Host "  Synced: $syncCount"
Write-Host "  Errors: $errorCount"
Write-Host ""

# Drift check: warn about any MMG_SKILL_*.md in Drive that this script does not map.
# Catches the case where a new skill is added to Drive but never wired into the mapping.
if (Test-Path $gdrive) {
    $mapped = $skills | ForEach-Object { $_.Drive }
    $onDrive = Get-ChildItem "$gdrive\MMG_SKILL_*.md" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Name
    $unmapped = $onDrive | Where-Object { $mapped -notcontains $_ }
    if ($unmapped) {
        Write-Host "[WARN] Unmapped skills found in Drive (add them to the mapping above):" -ForegroundColor Yellow
        $unmapped | ForEach-Object { Write-Host "    $_" -ForegroundColor Yellow }
        Write-Host ""
    }
} else {
    Write-Host "[ERROR] Drive source folder not found: $gdrive" -ForegroundColor Red
    Write-Host "   Check the gdrive source path at the top of this script." -ForegroundColor Red
    Write-Host ""
}

if ($errorCount -eq 0) {
    Write-Host "All skills synced successfully" -ForegroundColor Green
    Write-Host "  Google Drive is the master. This script keeps Cowork in sync." -ForegroundColor Gray
    Write-Host "  To update a skill: edit in Drive, then run this script." -ForegroundColor Gray
    Write-Host "  Repo code-workflow skills are separate: .claude/skills/ (git-mastered)." -ForegroundColor Gray
} else {
    Write-Host "Some syncs failed. Check the errors above." -ForegroundColor Red
    exit 1
}
