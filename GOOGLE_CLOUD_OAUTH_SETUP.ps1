# Mr Mallorca Golf — Google Cloud OAuth 2.0 Setup (PowerShell)
# Automates Google Cloud project creation and OAuth credential setup
# Run: .\GOOGLE_CLOUD_OAUTH_SETUP.ps1

$ProjectName = "Mr Mallorca Golf Control Panel"
$ProjectId = "mmg-control-panel-$(Get-Date -Format 'yyyyMMddHHmmss')"
$Region = "europe-west1"
$ServiceAccountName = "mmg-control-panel"
$ClientIdFile = "google-oauth-credentials.json"
$OutputConfig = "control-panel-config.js"
$Email = "mrmallorcagolf@gmail.com"

Write-Host "🚀 Starting Google Cloud OAuth Setup" -ForegroundColor Green
Write-Host "   Project: $ProjectName"
Write-Host "   Region: $Region"
Write-Host ""

# Step 1: Check if gcloud is installed
try {
    $gcloud = gcloud --version 2>$null
    Write-Host "✓ gcloud CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ gcloud CLI not found. Install from: https://cloud.google.com/sdk/docs/install" -ForegroundColor Red
    exit 1
}

# Step 2: Create Google Cloud Project
Write-Host ""
Write-Host "Creating Google Cloud Project..."
gcloud projects create $ProjectId --name="$ProjectName" --region=$Region 2>$null | Out-Null
Write-Host "✓ Project ID: $ProjectId" -ForegroundColor Green

# Step 3: Set the project
gcloud config set project $ProjectId

# Step 4: Enable required APIs
Write-Host ""
Write-Host "Enabling Google APIs..."
gcloud services enable drive.googleapis.com
gcloud services enable analyticsdata.googleapis.com
gcloud services enable searchconsole.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com

Write-Host "✓ APIs enabled:" -ForegroundColor Green
Write-Host "  - Google Drive API"
Write-Host "  - Google Analytics Data API v1"
Write-Host "  - Google Search Console API"

# Step 5: Create Service Account
Write-Host ""
Write-Host "Creating service account..."
gcloud iam service-accounts create $ServiceAccountName `
  --display-name="Control Panel Service Account" 2>$null | Out-Null

Write-Host "✓ Service account created" -ForegroundColor Green

# Step 6: Generate keys
Write-Host ""
Write-Host "Generating OAuth credentials..."
$ServiceAccountEmail = "$ServiceAccountName@$ProjectId.iam.gserviceaccount.com"
gcloud iam service-accounts keys create $ClientIdFile `
  --iam-account=$ServiceAccountEmail

Write-Host "✓ Credentials saved to: $ClientIdFile" -ForegroundColor Green

# Step 7: Grant permissions
Write-Host ""
Write-Host "Setting up permissions..."

gcloud projects add-iam-policy-binding $ProjectId `
  --member="serviceAccount:$ServiceAccountEmail" `
  --role="roles/drive.editor" 2>$null | Out-Null

gcloud projects add-iam-policy-binding $ProjectId `
  --member="serviceAccount:$ServiceAccountEmail" `
  --role="roles/analyticsobserver" 2>$null | Out-Null

Write-Host "✓ Permissions configured" -ForegroundColor Green

# Step 8: Generate config template
Write-Host ""
Write-Host "Generating control panel config..."

$ConfigContent = @"
// Google Cloud OAuth Configuration
// Generated: $(Get-Date)
// Project: $ProjectId

window.googleCloudConfig = {
  projectId: "$ProjectId",
  clientId: "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com",
  clientSecret: "YOUR_CLIENT_SECRET_HERE",
  redirectUri: "https://mrmallorcagolf.com/control-panel",
  scopes: [
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly"
  ],
  gaPropertyId: "G-0Z2BRNWB4N"
};
"@

$ConfigContent | Out-File -FilePath $OutputConfig -Encoding UTF8
Write-Host "✓ Config template created: $OutputConfig" -ForegroundColor Green

# Step 9: Display summary
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✅ SETUP COMPLETE" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 NEXT STEPS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Open Google Cloud Console:"
Write-Host "   https://console.cloud.google.com"
Write-Host ""
Write-Host "2. Select project: $ProjectId"
Write-Host ""
Write-Host "3. Go to: APIs & Services → Credentials"
Write-Host ""
Write-Host "4. Click: + CREATE CREDENTIALS → OAuth 2.0 Client ID"
Write-Host "   - Application type: Web application"
Write-Host "   - Authorized JavaScript origins: https://mrmallorcagolf.com"
Write-Host "   - Authorized redirect URIs: https://mrmallorcagolf.com/control-panel"
Write-Host ""
Write-Host "5. Copy the Client ID and Secret"
Write-Host ""
Write-Host "6. Update control-panel-config.js:"
Write-Host "   clientId: [PASTE HERE]"
Write-Host "   clientSecret: [PASTE HERE]"
Write-Host ""
Write-Host "7. Copy control-panel-config.js content into your HTML panel"
Write-Host ""
Write-Host "📁 FILES CREATED:" -ForegroundColor Yellow
Write-Host "   - $ClientIdFile (service account key - KEEP PRIVATE)"
Write-Host "   - $OutputConfig (config template - UPDATE WITH YOUR IDS)"
Write-Host ""
Write-Host "🔗 RESOURCES:" -ForegroundColor Yellow
Write-Host "   - Google Cloud Console: https://console.cloud.google.com"
Write-Host "   - OAuth Guide: https://developers.google.com/identity/protocols/oauth2"
Write-Host "   - Drive API: https://developers.google.com/drive/api"
Write-Host ""
Write-Host "💡 Need help? Check: GOOGLE_CLOUD_SETUP_AUTOMATED.md" -ForegroundColor Cyan
Write-Host ""
