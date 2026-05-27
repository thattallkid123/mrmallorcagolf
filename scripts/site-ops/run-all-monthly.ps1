$ErrorActionPreference = "Stop"
$repo = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
Set-Location $repo

node scripts/site-ops/run-monthly-technical-audit.mjs
node scripts/site-ops/generate-master-priority-report.mjs

Write-Host "Monthly technical audit automation complete."
