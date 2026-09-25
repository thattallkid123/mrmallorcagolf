"""Register the three event dimensions used by the lead funnel report.

Run --authorize once and open the printed Google URL on this computer. Then
run --register. The edit token is kept separate from the read-only report token.
"""

import argparse
import os

from google.auth.transport.requests import AuthorizedSession, Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

PROPERTY_ID = "529404785"
DIRECTORY = os.path.dirname(__file__)
TOKEN_FILE = os.path.join(DIRECTORY, "ga4_admin_token.json")
CLIENT_FILE = os.path.join(DIRECTORY, "ga4_oauth_client.json")
SCOPES = ["https://www.googleapis.com/auth/analytics.edit"]
BASE_URL = f"https://analyticsadmin.googleapis.com/v1beta/properties/{PROPERTY_ID}/customDimensions"
DIMENSIONS = {
    "service_type": "Enquiry service",
    "entry_page": "Enquiry entry page",
    "enquiry_source_page": "Page before enquiry",
}


def authorize():
    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_FILE, SCOPES)
    credentials = flow.run_local_server(
        host="127.0.0.1",
        port=9187,
        timeout_seconds=3600,
        open_browser=False,
        authorization_prompt_message="Open this Google authorization URL on this computer:\n{url}\n",
        success_message="Analytics access granted. You can close this tab.",
    )
    with open(TOKEN_FILE, "w", encoding="utf-8") as token_file:
        token_file.write(credentials.to_json())
    print("Analytics edit token saved locally.")


def register():
    credentials = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not credentials.valid:
        credentials.refresh(Request())
        with open(TOKEN_FILE, "w", encoding="utf-8") as token_file:
            token_file.write(credentials.to_json())
    session = AuthorizedSession(credentials)
    existing = {}
    page_token = None
    while True:
        params = {"pageSize": 200}
        if page_token:
            params["pageToken"] = page_token
        response = session.get(BASE_URL, params=params, timeout=30)
        response.raise_for_status()
        body = response.json()
        existing.update({item["parameterName"]: item for item in body.get("customDimensions", [])})
        page_token = body.get("nextPageToken")
        if not page_token:
            break
    for parameter_name, display_name in DIMENSIONS.items():
        if parameter_name in existing:
            print(f"Already registered: {parameter_name} ({existing[parameter_name]['name']})")
            continue
        response = session.post(
            BASE_URL,
            json={
                "parameterName": parameter_name,
                "displayName": display_name,
                "scope": "EVENT",
                "description": "Mr Mallorca Golf confirmed contact form enquiry attribution.",
            },
            timeout=30,
        )
        response.raise_for_status()
        print(f"Registered: {parameter_name} ({response.json()['name']})")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument("--authorize", action="store_true")
    action.add_argument("--register", action="store_true")
    args = parser.parse_args()
    authorize() if args.authorize else register()
