$ErrorActionPreference = "Stop"

$Root = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
Set-Location $Root

python -m pip install --quiet google-api-python-client
python seo_analytics\weekly_search_analytics_export.py --days 7
