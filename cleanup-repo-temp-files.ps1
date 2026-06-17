# Safe cleanup script - sends files to recycle bin, not permanent delete
# Run this in PowerShell in the repo root directory

$repoRoot = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"

# List of temp/old files to delete to recycle bin
$filesToDelete = @(
    "b64imgs.txt",
    "lu101114u6.tmp",
    "lu383o4a.tmp",
    "lu433hx8.tmp",
    "server-err.log",
    "server-out.log",
    "control-panel-test.err.log",
    "control-panel-test.log",
    "globals_edit.css",
    "mmg-master-template.js",
    "control-panel-config.json",
    "control-panel-frontend.html",
    "control-panel-server.js",
    "Load Control Panel.bat",
    "CONSOLIDATION_COMPLETE.md",
    "CONSOLIDATION_COMPLETE.txt",
    "COMMIT_NOTES.txt",
    "EXECUTION_SUMMARY_JUNE_5_2026.txt",
    "GIT_PUSH.txt",
    "PUSH_NOW.txt",
    "GOOGLE_CLOUD_OAUTH_SETUP.ps1",
    "GOOGLE_CLOUD_OAUTH_SETUP.sh",
    "GOOGLE_CLOUD_SETUP_AUTOMATED.md",
    "OAUTH_SETUP_ACTIONS.md",
    # Audit/working docs - delete after verified
    "GOOGLE_DRIVE_STRUCTURE_AUDIT_JUNE2026.md",
    "GOOGLE_DRIVE_CLEANUP_PLAN_FINAL_JUNE2026.md",
    "FINAL_CLEANUP_AND_CONSOLIDATION_JUNE2026.md",
    "AUDIT_FILE_ORGANIZATION_REPORT_JUNE2026.md",
    "AUDIT_VISUAL_SUMMARY_JUNE2026.md",
    "AUDIT_EXECUTIVE_BRIEF_JUNE2026.md",
    "DEEP_AUDIT_RESEARCH_FINDINGS_JUNE2026.md",
    "MASTER_CLEANUP_PLAN_CORRECTED_JUNE2026.md",
    "AUTONOMO_ASSESSMENT_JUNE2026.md",
    "BUSINESS_OPERATIONS_STRUCTURE_FINAL.md",
    "CLEANUP_EXECUTION_SUMMARY_JUNE2026.md",
    "CLEANUP_COMPLETED_JUNE2026.md",
    # Partnership contracts - should be moved to Drive already
    "MMG-Partnership-Aethos-Mallorca.docx",
    "MMG-Partnership-Belmond-La-Residencia.docx",
    "MMG-Partnership-Four-Seasons-Resort-Mallorca-at-Formentor.docx",
    "MMG-Partnership-Mandarin-Oriental-Punta-Negra.docx",
    "MMG-Partnership-The-Lodge-Mallorca.docx",
    "MMG-Partnership-v2-Aethos-Mallorca.docx",
    "MMG-Partnership-v2-Belmond-La-Residencia.docx",
    "MMG-Partnership-v2-Four-Seasons-Resort-Mallorca-at-Formentor.docx",
    "MMG-Partnership-v2-Mandarin-Oriental-Punta-Negra.docx",
    "MMG-Partnership-v2-The-Lodge-Mallorca.docx",
    "MMG-Booking-Terms-Sep2026.docx",
    "mmg-booking-business-logic.md",
    "MMG_TODO_SYNC_ARCHITECTURE.md",
    "MMG_TODO_SYNC_SETUP.md",
    "MMG_SYSTEMS_CONTROL_PANEL.md",
    "MMG_CONTROL_PANEL_INTEGRATED.md",
    "CONTROL_PANEL_RUN.md",
    "CONTROL_PANEL_SETUP_GUIDE.md",
    "MMG_CHINA_SITE_COMPLETE.md",
    "MMG-Review-Julien-May-17-2026-one-page.pdf",
    "MMG-Review-Julien-May-17-2026-one-page.pptx",
    "MMG-Review-Jo-May-17-2026-one-page.pptx",
    "MMG-Review-Synove-June-05-2026.pdf",
    # Logo images - should be moved to /public/images/ already
    "MMG_Logo_Green_Transparent.png",
    "mmg-review-logo.png"
)

# Function to send file to recycle bin
function Send-ToRecycleBin {
    param([string]$filePath)

    if (Test-Path $filePath) {
        try {
            $item = Get-Item $filePath -Force
            $shell = New-Object -ComObject Shell.Application
            $folder = $shell.Namespace((Split-Path $filePath))
            $file = $folder.ParseName((Split-Path $filePath -Leaf))
            $file.InvokeVerb("delete")
            Write-Host "✓ Deleted: $(Split-Path $filePath -Leaf)"
            return $true
        } catch {
            Write-Host "✗ Error deleting: $(Split-Path $filePath -Leaf) - $_"
            return $false
        }
    } else {
        Write-Host "⊘ Not found: $(Split-Path $filePath -Leaf)"
        return $false
    }
}

# Main cleanup
Write-Host "Starting repo cleanup - sending files to recycle bin..."
Write-Host ""

$deleted = 0
$notfound = 0
$errors = 0

foreach ($file in $filesToDelete) {
    $fullPath = Join-Path $repoRoot $file
    if (Send-ToRecycleBin $fullPath) {
        $deleted++
    } else {
        $notfound++
    }
}

Write-Host ""
Write-Host "Cleanup complete!"
Write-Host "Deleted: $deleted files"
Write-Host "Not found: $notfound files"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Verify repo is clean (should be website code only)"
Write-Host "2. Check /public/images/ has the PNG files"
Write-Host "3. git status to see what changed"
Write-Host "4. git add -A && git commit -m 'Cleanup: move business docs to Drive, remove temp files'"
