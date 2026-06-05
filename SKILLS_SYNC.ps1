# MMG Skills Sync Script
# Syncs skills from Google Drive master (source of truth) to:
# 1. Cowork skills directory
# 2. Repo skills directory
#
# Usage: .\SKILLS_SYNC.ps1
# Requires: PowerShell 5+

$ErrorActionPreference = "Stop"

# Define paths
$gdrive = "C:\Users\andyg\My Drive\Mr Mallorca Golf\Active\Skills"
$cowork = "C:\Users\andyg\AppData\Roaming\Claude\local-agent-mode-sessions\skills-plugin\b3bebfb7-33e8-46ab-bd72-6182db69a9e5\fe7a7714-7c35-4970-aaae-5a3d84f73007\skills"
$repo = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\skills"

# Skill mappings: Drive filename -> Cowork folder name -> Repo filename
$skills = @(
    @{Drive="MMG_SKILL_BLOG_WRITING.md"; Cowork="blog-writing"; Repo="blog-writing.skill.md"},
    @{Drive="MMG_SKILL_SEO_CONTENT.md"; Cowork="seo-content"; Repo="seo-content.skill.md"},
    @{Drive="MMG_SKILL_SOCIAL_MEDIA.md"; Cowork="social-media-mmg"; Repo="social-media-mmg.skill.md"},
    @{Drive="MMG_SKILL_CAROUSEL.md"; Cowork="mr-mallorca-golf-carousel"; Repo="mr-mallorca-golf-carousel.skill.md"},
    @{Drive="MMG_SKILL_CHINESE_CONTENT.md"; Cowork="chinese-content"; Repo="chinese-content.skill.md"},
    @{Drive="MMG_SKILL_CONTENT_PIPELINE.md"; Cowork="content-pipeline"; Repo="content-pipeline.skill.md"},
    @{Drive="MMG_SKILL_FRONTEND_DESIGN.md"; Cowork="frontend-design-mmg"; Repo="frontend-design-mmg.skill.md"},
    @{Drive="MMG_SKILL_NEXTJS.md"; Cowork="nextjs-mrmallorcagolf"; Repo="nextjs-mrmallorcagolf.skill.md"},
    @{Drive="MMG_SKILL_BUSINESS_OPERATIONS.md"; Cowork="mmg-business-operations"; Repo="mmg-business-operations.skill.md"},
    @{Drive="MMG_SKILL_PARTNERSHIPS.md"; Cowork="mmg-partnerships"; Repo="mmg-partnerships.skill.md"}
)

Write-Host "MMG Skills Sync Script" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Green
Write-Host ""
Write-Host "Source (master): $gdrive"
Write-Host "Target 1 (Cowork): $cowork"
Write-Host "Target 2 (Repo): $repo"
Write-Host ""

$syncCount = 0
$errorCount = 0

foreach ($skill in $skills) {
    Write-Host "Syncing: $($skill.Drive)" -ForegroundColor Cyan

    $driveFile = "$gdrive\$($skill.Drive)"
    $coworkFile = "$cowork\$($skill.Cowork)\SKILL.md"
    $repoFile = "$repo\$($skill.Repo)"

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

    # Copy to Repo
    if (Test-Path $repo) {
        try {
            Copy-Item $driveFile $repoFile -Force
            Write-Host "  ✓ Copied to Repo" -ForegroundColor Green
        } catch {
            Write-Host "  ❌ Failed to copy to Repo: $_" -ForegroundColor Red
            $errorCount++
            continue
        }
    } else {
        Write-Host "  ⚠ Repo directory not found, skipping: $repo" -ForegroundColor Yellow
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
    Write-Host "  Google Drive is the master. This script keeps Cowork and Repo in sync." -ForegroundColor Gray
    Write-Host "  To update a skill: edit in Drive, then run this script." -ForegroundColor Gray
} else {
    Write-Host "Some syncs failed. Check the errors above." -ForegroundColor Red
    exit 1
}
