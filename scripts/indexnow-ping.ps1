#!/usr/bin/env pwsh
# IndexNow pinger for Bing re-indexing
# Usage: .\scripts\indexnow-ping.ps1 "guides/new-guide-slug" "guides/another-slug"
# Or:    .\scripts\indexnow-ping.ps1 -urls "https://www.mrmallorcagolf.com/guides/new-guide-slug"

param(
  [Parameter(ValueFromRemainingArguments=$true)]
  [string[]]$args,

  [string[]]$urls
)

$baseUrl = "https://www.mrmallorcagolf.com"
$endpoint = "$baseUrl/api/cron/indexnow"

# Convert slug args to full URLs if needed
$urlsToSubmit = @()
foreach ($arg in $args) {
  if ($arg -match "^https?://") {
    $urlsToSubmit += $arg
  } else {
    $urlsToSubmit += "$baseUrl/$arg"
  }
}

# Add explicit -urls parameter
if ($urls) {
  $urlsToSubmit += $urls
}

if ($urlsToSubmit.Count -eq 0) {
  Write-Host "Usage: .\scripts\indexnow-ping.ps1 'guides/slug' 'guides/another-slug'"
  Write-Host "   or: .\scripts\indexnow-ping.ps1 -urls 'https://www.mrmallorcagolf.com/guides/slug'"
  exit 1
}

$payload = @{
  urls = @($urlsToSubmit)
} | ConvertTo-Json

Write-Host "🔔 Pinging IndexNow for $(($urlsToSubmit | Measure-Object).Count) URL(s)..."
Write-Host "Endpoint: $endpoint"

try {
  $response = Invoke-WebRequest -Uri $endpoint `
    -Method POST `
    -ContentType "application/json" `
    -Body $payload `
    -ErrorAction Stop

  $result = $response.Content | ConvertFrom-Json
  Write-Host "✅ Success: $($result.urlCount) URL(s) submitted to Bing IndexNow" -ForegroundColor Green
} catch {
  Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
  exit 1
}
