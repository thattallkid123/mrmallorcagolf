"""
Check or create GA4 key events for Mr Mallorca Golf.

By default this runs in non-interactive mode. If an admin OAuth token with
Analytics edit scope already exists, it verifies/creates the key events. If not,
it writes a clear setup note to Downloads/MMG Reports.

Run with --login once if you want the script to open a Google login flow and
save an admin token for future automatic checks.
"""

import argparse
import json
from datetime import datetime
from pathlib import Path

from google.auth.exceptions import RefreshError
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

from google.analytics.admin_v1beta import AnalyticsAdminServiceClient, KeyEvent

ROOT = Path(__file__).resolve().parents[2]
GA4_DIR = ROOT / "ga4_analytics"
CLIENT_SECRETS_FILE = GA4_DIR / "ga4_oauth_client.json"
ADMIN_TOKEN_FILE = GA4_DIR / "ga4_admin_token.json"
DOWNLOADS_DIR = Path.home() / "Downloads" / "MMG Reports"
PROPERTY_ID = "529404785"
PROPERTY_PARENT = f"properties/{PROPERTY_ID}"
SCOPES = ["https://www.googleapis.com/auth/analytics.edit"]

KEY_EVENTS = [
    "generate_lead",
    "contact_form_submit",
    "whatsapp_click",
    "email_click",
    "phone_click",
    "contact_page_click",
    "play_with_a_pro_click",
    "tool_click",
    "sign_up",
    "lead_magnet_signup",
]


def load_credentials(interactive=False):
    creds = None
    if ADMIN_TOKEN_FILE.exists():
        try:
            creds = Credentials.from_authorized_user_file(str(ADMIN_TOKEN_FILE), SCOPES)
        except (ValueError, json.JSONDecodeError):
            creds = None

    if creds and creds.expired and creds.refresh_token:
        try:
            creds.refresh(Request())
        except RefreshError:
            creds = None

    if creds and creds.valid:
        return creds

    if not interactive:
        return None

    if not CLIENT_SECRETS_FILE.exists():
        raise FileNotFoundError(f"OAuth client secrets not found at {CLIENT_SECRETS_FILE}")

    flow = InstalledAppFlow.from_client_secrets_file(str(CLIENT_SECRETS_FILE), SCOPES)
    creds = flow.run_local_server(port=0)
    ADMIN_TOKEN_FILE.write_text(creds.to_json(), encoding="utf-8")
    return creds


def write_report(lines):
    DOWNLOADS_DIR.mkdir(parents=True, exist_ok=True)
    content = "\n".join(lines).rstrip() + "\n"
    dated = DOWNLOADS_DIR / f"MMG GA4 Key Events {datetime.now().strftime('%Y-%m-%d')}.txt"
    latest = DOWNLOADS_DIR / "MMG GA4 Key Events Latest.txt"
    dated.write_text(content, encoding="utf-8")
    latest.write_text(content, encoding="utf-8")
    return dated, latest


def manual_steps():
    return [
        "# MMG GA4 Key Events Setup",
        "",
        f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "",
        "The site is now sending the right business-intent events, but GA4 still needs to mark them as key events.",
        "",
        "Automatic GA4 Admin setup could not run because no admin OAuth token is saved yet.",
        "",
        "To let this script manage key events automatically, run:",
        "",
        "```powershell",
        "cd C:\\Users\\andyg\\Desktop\\cursor\\mrmallorcagolf-real",
        "python scripts/site-ops/ga4-key-events-setup.py --login",
        "```",
        "",
        "Or do it manually in GA4:",
        "",
        "1. Open GA4 Admin for Mr Mallorca Golf.",
        "2. Go to Data display / Events or Key events.",
        "3. Mark these event names as key events:",
        "",
        *[f"- {event}" for event in KEY_EVENTS],
        "",
        "Most important for business reporting:",
        "",
        "- generate_lead",
        "- contact_form_submit",
        "- whatsapp_click",
        "- email_click",
        "- phone_click",
        "",
        "After this is done, the monthly snapshot can report real enquiry/contact intent instead of just visits and searches.",
    ]


def setup_key_events(creds):
    client = AnalyticsAdminServiceClient(credentials=creds)
    existing = {event.event_name for event in client.list_key_events(parent=PROPERTY_PARENT)}
    created = []
    already = []
    failed = []

    for event_name in KEY_EVENTS:
        if event_name in existing:
            already.append(event_name)
            continue
        try:
            client.create_key_event(parent=PROPERTY_PARENT, key_event=KeyEvent(event_name=event_name))
            created.append(event_name)
        except Exception as exc:
            failed.append((event_name, str(exc)))

    lines = [
        "# MMG GA4 Key Events Setup",
        "",
        f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        f"GA4 property: {PROPERTY_ID}",
        "",
        "## Result",
        "",
    ]

    if created:
        lines.append("Created key events:")
        lines.extend(f"- {event}" for event in created)
        lines.append("")
    if already:
        lines.append("Already existed:")
        lines.extend(f"- {event}" for event in already)
        lines.append("")
    if failed:
        lines.append("Could not create:")
        for event_name, error in failed:
            lines.append(f"- {event_name}: {error}")
        lines.append("")
    if not failed:
        lines.append("All requested key events are present or were created successfully.")
        lines.append("")
    lines.extend([
        "## Why This Matters",
        "",
        "Future monthly snapshots can now separate casual traffic from business-intent actions such as contact forms, WhatsApp clicks, email clicks, phone clicks, tool clicks, and lead events.",
    ])
    return lines


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--login", action="store_true", help="Open browser login and save an Analytics Admin token")
    args = parser.parse_args()

    try:
        creds = load_credentials(interactive=args.login)
        if creds is None:
            lines = manual_steps()
        else:
            lines = setup_key_events(creds)
    except Exception as exc:
        lines = manual_steps()
        lines.extend(["", f"Automatic setup error: {exc}"])

    dated, latest = write_report(lines)
    print(f"Saved GA4 key events report: {dated}")
    print(f"Saved latest copy: {latest}")


if __name__ == "__main__":
    main()
