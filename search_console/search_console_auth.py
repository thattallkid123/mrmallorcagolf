"""
Search Console OAuth setup for Mr Mallorca Golf.

Uses the same Google OAuth client as GA4, but saves a separate Search Console
token so the two tools do not interfere with each other.
"""

import json
import os

from google.auth.exceptions import RefreshError
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

HERE = os.path.dirname(__file__)
TOKEN_FILE = os.path.join(HERE, "search_console_token.json")
CLIENT_SECRETS_FILE = os.path.join(
    os.path.dirname(HERE), "ga4_analytics", "ga4_oauth_client.json"
)


def run_login_flow():
    if not os.path.exists(CLIENT_SECRETS_FILE):
        raise FileNotFoundError(
            f"OAuth client secrets not found at {CLIENT_SECRETS_FILE}\n"
            "Run the GA4 OAuth setup first, or place the Google OAuth client JSON there."
        )
    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
    return flow.run_local_server(port=0)


def get_credentials():
    creds = None

    if os.path.exists(TOKEN_FILE):
        try:
            creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
        except (ValueError, json.JSONDecodeError):
            creds = None

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            try:
                creds.refresh(Request())
            except RefreshError as exc:
                if os.path.exists(TOKEN_FILE):
                    os.remove(TOKEN_FILE)
                print(f"Saved Search Console token is no longer valid ({exc}). Starting login...")
                creds = None

        if not creds or not creds.valid:
            creds = run_login_flow()

        with open(TOKEN_FILE, "w", encoding="utf-8") as f:
            f.write(creds.to_json())
        print(f"Token saved to {TOKEN_FILE}")

    return creds


if __name__ == "__main__":
    get_credentials()
    print("Search Console authentication successful.")
