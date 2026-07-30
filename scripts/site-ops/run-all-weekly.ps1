$ErrorActionPreference = "Stop"
$repo = if ($env:MMG_SITE_REPO_ROOT) { $env:MMG_SITE_REPO_ROOT } else { (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path }
Set-Location $repo

node scripts/site-ops/run-weekly-seo-performance.mjs
node scripts/site-ops/generate-master-priority-report.mjs

Write-Host "Weekly SEO/performance automation complete."
