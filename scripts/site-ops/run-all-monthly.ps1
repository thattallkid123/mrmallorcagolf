$ErrorActionPreference = "Stop"
$repo = if ($env:MMG_SITE_REPO_ROOT) { $env:MMG_SITE_REPO_ROOT } else { (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path }
Set-Location $repo

node scripts/site-ops/run-monthly-technical-audit.mjs
python scripts/site-ops/ga4-key-events-setup.py
python scripts/site-ops/monthly-traffic-interest-snapshot.py
node scripts/site-ops/generate-master-priority-report.mjs

Write-Host "Monthly technical audit and traffic snapshot automation complete."
