# MMG Skills Sync Script
# Syncs knowledge skills from Google Drive master (source of truth) to the
# Cowork skills directory.
#
# NOTE: this covers the Drive-mastered MMG_SKILL_* knowledge skills only.
# The repo's code-workflow skills live in .claude/skills/ (mastered in git,
# mirrored to .codex/skills/ via `npm run skills:sync`) and are NOT part of
# this sync.
#
# Usage: .\SKILLS_SYNC.ps1
# Requires: PowerShell 5+

$ErrorActionPreference = "Stop"

# Define paths
$gdrive = "C:\Users\andyg\My Drive\Mr Mallorca Golf\Systems & Planning\Skills"
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
    @{Drive="MMG_SKILL_PARTNERSHIPS.md"; Cowork="mmg-partnerships"}
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
        Write-Host "  ❌ Source not found: $driveFile" -ForegroundColor Red
        $errorCount++
        continue
    }

    # Copy to Cowork
    if (Test-Path $coworkFile) {
        try {
            Copy-Item $driveFile $coworkFile -Force
            Write-Host "  ✓ Copied to Cowork" -ForegroundColor Green
        } catch {
            Write-Host "  ❌ Failed to copy to Cowork: $_" -ForegroundColor Red
            $errorCount++
            continue
        }
    } else {
        Write-Host "  ⚠ Cowork target not found, skipping: $coworkFile" -ForegroundColor Yellow
    }

    $syncCount++
}

Write-Host ""
Write-Host "Sync Complete" -ForegroundColor Green
Write-Host "  Synced: $syncCount"
Write-Host "  Errors: $errorCount"
Write-Host ""

if ($errorCount -eq 0) {
    Write-Host "All skills synced successfully" -ForegroundColor Green
    Write-Host "  Google Drive is the master. This script keeps Cowork in sync." -ForegroundColor Gray
    Write-Host "  To update a skill: edit in Drive, then run this script." -ForegroundColor Gray
    Write-Host "  Repo code-workflow skills are separate: .claude/skills/ (git-mastered)." -ForegroundColor Gray
} else {
    Write-Host "Some syncs failed. Check the errors above." -ForegroundColor Red
    exit 1
}
