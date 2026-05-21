$ErrorActionPreference = "Stop"
$Root = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
Set-Location $Root

python ga4_analytics\weekly_ga4_email.py --days 7 --send
