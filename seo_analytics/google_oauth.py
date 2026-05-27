"""
Shared Google OAuth helper for weekly GA4 + Search Console exports.
"""

from __future__ import annotations

import json
import os
from pathlib import Path

from google.auth.exceptions import RefreshError
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
]

ROOT = Path(__file__).resolve().parents[1]
TOKEN_FILE = ROOT / "seo_analytics" / "google_token.json"
CLIENT_FILE = ROOT / "ga4_analytics" / "ga4_oauth_client.json"


def _run_login_flow() -> Credentials:
    if not CLIENT_FILE.exists():
        raise FileNotFoundError(
            f"OAuth client file not found at {CLIENT_FILE}.\n"
            "Create/download a Desktop OAuth client and place it there."
        )
    flow = InstalledAppFlow.from_client_secrets_file(str(CLIENT_FILE), SCOPES)
    return flow.run_local_server(port=0)


def get_credentials() -> Credentials:
    creds: Credentials | None = None
    if TOKEN_FILE.exists():
        try:
            creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
        except (ValueError, json.JSONDecodeError):
            creds = None

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            try:
                creds.refresh(Request())
            except RefreshError:
                try:
                    os.remove(TOKEN_FILE)
                except OSError:
                    pass
                creds = None

        if not creds or not creds.valid:
            creds = _run_login_flow()

        TOKEN_FILE.parent.mkdir(parents=True, exist_ok=True)
        TOKEN_FILE.write_text(creds.to_json(), encoding="utf-8")

    return creds


if __name__ == "__main__":
    get_credentials()
    print(f"OAuth ready. Token saved at: {TOKEN_FILE}")
