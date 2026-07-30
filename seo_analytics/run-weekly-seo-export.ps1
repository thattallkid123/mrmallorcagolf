$ErrorActionPreference = "Stop"

$Root = if ($env:MMG_SITE_REPO_ROOT) { $env:MMG_SITE_REPO_ROOT } else { (Resolve-Path (Join-Path $PSScriptRoot "..")).Path }
Set-Location $Root

python -m pip install --quiet google-api-python-client
python seo_analytics\weekly_search_analytics_export.py --days 7
