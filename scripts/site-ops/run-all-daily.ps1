$ErrorActionPreference = "Stop"
$repo = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
Set-Location $repo

node scripts/site-ops/run-daily-health-check.mjs
node scripts/site-ops/generate-master-priority-report.mjs

Write-Host "Daily health automation complete."
