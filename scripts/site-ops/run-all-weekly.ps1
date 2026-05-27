$ErrorActionPreference = "Stop"
$repo = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
Set-Location $repo

node scripts/site-ops/run-weekly-seo-performance.mjs
node scripts/site-ops/generate-master-priority-report.mjs

Write-Host "Weekly SEO/performance automation complete."
