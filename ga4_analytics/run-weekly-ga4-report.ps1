$ErrorActionPreference = "Stop"
$Root = if ($env:MMG_SITE_REPO_ROOT) { $env:MMG_SITE_REPO_ROOT } else { (Resolve-Path (Join-Path $PSScriptRoot "..")).Path }
Set-Location $Root

python ga4_analytics\weekly_ga4_email.py --days 7 --send
