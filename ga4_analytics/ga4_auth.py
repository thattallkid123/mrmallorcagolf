"""
GA4 OAuth setup for Mr Mallorca Golf.
Run this once to authenticate. Saves token to ga4_token.json.

Usage:
  python ga4_analytics/ga4_auth.py
"""

import os
import json
from google_auth_oauthlib.flow import InstalledAppFlow
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request

SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
]

TOKEN_FILE = os.path.join(os.path.dirname(__file__), "ga4_token.json")
CLIENT_SECRETS_FILE = os.path.join(os.path.dirname(__file__), "ga4_oauth_client.json")


def get_credentials():
    creds = None

    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CLIENT_SECRETS_FILE):
                raise FileNotFoundError(
                    f"OAuth client secrets not found at {CLIENT_SECRETS_FILE}\n"
                    "See ga4_analytics/README.md for setup instructions."
                )
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)

        with open(TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
        print(f"Token saved to {TOKEN_FILE}")

    return creds


if __name__ == "__main__":
    creds = get_credentials()
    print("Authentication successful!")
    print(f"Token saved — future runs will not require login.")
