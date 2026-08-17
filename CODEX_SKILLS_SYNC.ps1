# MMG Skills Sync Script — Codex variant
# Twin of SKILLS_SYNC.ps1, same mapping table, targeting ~/.codex/skills/
# instead of ~/.claude/skills/. Only copies into a target folder that
# already exists — it does not auto-discover or auto-create new folders.
# Create the empty target folder (with a placeholder SKILL.md) for any
# new skill you want this script to start populating, then re-run.
#
# Naming rule: every Codex target below must carry an unambiguous "mmg-"
# (or clearly MMG-branded) prefix — same collision risk as the Claude
# sync script. Never add a bare generic name here.

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

$codex = Join-Path $env:USERPROFILE ".codex\skills"

# Keep this mapping identical to SKILLS_SYNC.ps1's $skills table (same
# Drive file -> same target name) so Claude and Codex never drift apart
# on which skill maps to which folder name.
$skills = @(
    @{Drive="MMG_SKILL_BLOG_WRITING.md"; Target="mmg-blog-writing"},
    @{Drive="MMG_SKILL_SEO_CONTENT.md"; Target="mmg-seo-content"},
    @{Drive="MMG_SKILL_SOCIAL_MEDIA.md"; Target="social-media-mmg"},
    @{Drive="MMG_SKILL_CAROUSEL.md"; Target="mr-mallorca-golf-carousel"},
    @{Drive="MMG_SKILL_CHINESE_CONTENT.md"; Target="mmg-chinese-content"},
    @{Drive="MMG_SKILL_CONTENT_PIPELINE.md"; Target="mmg-content-pipeline"},
    @{Drive="MMG_SKILL_FRONTEND_DESIGN.md"; Target="frontend-design-mmg"},
    @{Drive="MMG_SKILL_NEXTJS.md"; Target="nextjs-mrmallorcagolf"},
    @{Drive="MMG_SKILL_BUSINESS_OPERATIONS.md"; Target="mmg-business-operations"},
    @{Drive="MMG_SKILL_PARTNERSHIPS.md"; Target="mmg-partnerships"},
    @{Drive="MMG_SKILL_REPURPOSE.md"; Target="mmg-repurpose"},
    @{Drive="MMG_SKILL_CHINESE_BACKLOG.md"; Target="mmg-chinese-backlog"},
    @{Drive="MMG_SKILL_EMAIL_MANAGEMENT.md"; Target="mmg-email-management"},
    @{Drive="MMG_SKILL_SITE_OPERATIONS_MMG.md"; Target="site-operations-mmg"},
    @{Drive="MMG_SKILL_AUTONOMO_FILING.md"; Target="mmg-autonomo-filing"},
    @{Drive="MMG_SKILL_CLIENT_DOCS.md"; Target="mmg-client-docs"},
    @{Drive="MMG_SKILL_HERMES_OPS.md"; Target="mmg-hermes-ops"}
)

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
