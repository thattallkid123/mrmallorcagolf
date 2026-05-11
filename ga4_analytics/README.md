# GA4 Analytics — Mr Mallorca Golf

One-time setup, then run from terminal whenever you want a report.

## One-time setup

### 1. Install dependencies

```
pip install google-analytics-data google-auth google-auth-oauthlib
```

### 2. Create an OAuth Client ID in Google Cloud Console

1. Go to [console.cloud.google.com](https://console.cloud.google.com) → project **MMG Analytics**
2. APIs & Services → Credentials → **Create Credentials → OAuth client ID**
3. Application type: **Desktop app** → Name: `MMG Analytics Script` → Create
4. Click **Download JSON** → save as `ga4_analytics/ga4_oauth_client.json`
5. Go to **OAuth consent screen** → add your email as a test user if the app is in testing mode

### 3. Authenticate (once)

```
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
python ga4_analytics/ga4_auth.py
```

A browser window opens → log in with `mrmallorcagolf@gmail.com` → done.
Token is saved to `ga4_analytics/ga4_token.json` — no login needed after this.

## Usage

```
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real

# Full report — last 30 days
python ga4_analytics/ga4_report.py

# Last 7 days
python ga4_analytics/ga4_report.py --days 7

# Specific sections
python ga4_analytics/ga4_report.py --report pages
python ga4_analytics/ga4_report.py --report sources
python ga4_analytics/ga4_report.py --report countries
python ga4_analytics/ga4_report.py --report events
```

## What it reports

- **Overview** — sessions, users, new users, avg session duration
- **Top pages** — views, users, time on page per URL
- **Traffic sources** — organic, direct, referral, social breakdown
- **Countries** — where visitors are coming from
- **Contact events** — form submits and conversion events

## Files (none committed to git)

- `ga4_oauth_client.json` — OAuth client secret from Google Cloud
- `ga4_token.json` — saved login token (auto-refreshes)
- `ga4_credentials.json` — old service account key, can be deleted
