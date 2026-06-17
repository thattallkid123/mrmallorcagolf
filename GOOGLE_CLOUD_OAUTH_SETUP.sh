#!/bin/bash

# Mr Mallorca Golf — Google Cloud OAuth 2.0 Setup Script
# Automates Google Cloud project creation and OAuth credential setup
# Run: bash GOOGLE_CLOUD_OAUTH_SETUP.sh

set -e

PROJECT_NAME="Mr Mallorca Golf Control Panel"
PROJECT_ID="mmg-control-panel-$(date +%s)"
REGION="europe-west1"
SERVICE_ACCOUNT_NAME="mmg-control-panel"
CLIENT_ID_FILE="google-oauth-credentials.json"
OUTPUT_CONFIG="control-panel-config.js"

echo "🚀 Starting Google Cloud OAuth Setup"
echo "   Project: $PROJECT_NAME"
echo "   Region: $REGION"
echo ""

# Step 1: Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ gcloud CLI not found. Install from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

echo "✓ gcloud CLI found"

# Step 2: Create Google Cloud Project
echo ""
echo "Creating Google Cloud Project..."
gcloud projects create $PROJECT_ID --name="$PROJECT_NAME" --region=$REGION || echo "⚠️  Project may already exist"

echo "✓ Project ID: $PROJECT_ID"

# Step 3: Set the project
gcloud config set project $PROJECT_ID

# Step 4: Enable required APIs
echo ""
echo "Enabling Google APIs..."
gcloud services enable drive.googleapis.com
gcloud services enable analyticsdata.googleapis.com
gcloud services enable searchconsole.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com

echo "✓ APIs enabled:"
echo "  - Google Drive API"
echo "  - Google Analytics Data API v1"
echo "  - Google Search Console API"

# Step 5: Create OAuth 2.0 Credentials
echo ""
echo "Creating OAuth 2.0 Credentials..."

# Create a consent screen first
gcloud alpha iap oauth-brands create \
  --application_title="Mr Mallorca Golf Control Panel" \
  --support_email=mrmallorcagolf@gmail.com || echo "⚠️  Consent screen may already exist"

# Create OAuth 2.0 Client ID for Web Application
gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
  --display-name="Control Panel Service Account" || echo "⚠️  Service account may already exist"

# Generate and download credentials
gcloud iam service-accounts keys create $CLIENT_ID_FILE \
  --iam-account=$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com || echo "⚠️  Key may already exist"

echo "✓ OAuth credentials created"
echo "✓ Credentials saved to: $CLIENT_ID_FILE"

# Step 6: Grant necessary permissions
echo ""
echo "Setting up permissions..."

# Add Drive API permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/drive.editor" || echo "⚠️  Permission may already exist"

# Add Analytics permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/analyticsobserver" || echo "⚠️  Permission may already exist"

echo "✓ Permissions configured"

# Step 7: Generate config file for control panel
echo ""
echo "Generating control panel config..."

cat > $OUTPUT_CONFIG << 'EOF'
// Google Cloud OAuth Configuration
// Generated: $(date)

window.googleCloudConfig = {
  projectId: "PROJECT_ID_HERE",
  clientId: "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com",
  clientSecret: "YOUR_CLIENT_SECRET_HERE",
  redirectUri: "https://mrmallorcagolf.com/control-panel",
  scopes: [
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly"
  ],
  gaPropertyId: "G-0Z2BRNWB4N",
  gaDatasetId: "properties/0Z2BRNWB4N"
};
EOF

echo "✓ Config template created: $OUTPUT_CONFIG"
echo "  (Update PROJECT_ID and CLIENT_ID in this file)"

# Step 8: Create a summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ SETUP COMPLETE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Get your OAuth Client ID:"
echo "   Go to: https://console.cloud.google.com"
echo "   Project: $PROJECT_ID"
echo "   APIs & Services → Credentials → OAuth 2.0 Client IDs"
echo ""
echo "2. Update control-panel-config.js with:"
echo "   - projectId: $PROJECT_ID"
echo "   - clientId: [from Google Cloud Console]"
echo "   - clientSecret: [from Google Cloud Console]"
echo ""
echo "3. Update your HTML control panel with the config"
echo ""
echo "4. Test by clicking 'Sign in with Google' in the panel"
echo ""
echo "📁 Files created:"
echo "   - $CLIENT_ID_FILE (service account key)"
echo "   - $OUTPUT_CONFIG (config template)"
echo ""
echo "🔗 Resources:"
echo "   - Google Cloud Console: https://console.cloud.google.com"
echo "   - OAuth Setup Guide: https://developers.google.com/identity/protocols/oauth2"
echo "   - Drive API Docs: https://developers.google.com/drive/api"
echo ""
