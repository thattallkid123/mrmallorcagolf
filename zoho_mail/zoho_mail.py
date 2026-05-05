"""
Zoho Mail Tool for Mr Mallorca Golf
Usage:
  python zoho_mail.py send --to "email@example.com" --subject "Subject" --body "Body text"
  python zoho_mail.py send-all    # sends all TO outreach emails
  python zoho_mail.py accounts    # list your Zoho mail accounts

Note: Zoho EU API sends immediately — no drafts endpoint available.
"""

import json
import requests
import argparse
import sys
import os

CONFIG_FILE = os.path.join(os.path.dirname(__file__), "zoho_config.json")

EMAILS = [
    {
        "id": "son_gual",
        "to": "info@son-gual.com",
        "contact": "Vivien / Maja",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Vivien / Maja,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am reaching out to enquire whether Son Gual offers a Tour Operator rate for professionals in my position, and if so, what the process would be to set up a formal agreement.

I already have a courtesy arrangement in place with Son Gual and have played the course a number of times — it is one I recommend to guests regularly. I would very much like to formalise this on a commercial basis.

If you could let me know what details you would need from my side (NIF, address, etc.) I can get those across to you.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "son_servera",
        "to": "reservas@golfsonservera.com",
        "contact": "Francisco Martínez",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Francisco,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am writing to ask whether Golf Son Servera offers a Tour Operator rate for professionals in my position, and what would be involved in setting up a formal agreement.

Could you let me know what information you would need from my side — such as NIF number and address — and I will get that across to you.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "pula",
        "to": "reservas@pulagolf.com",
        "contact": None,
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Sir / Madam,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I have been in touch previously and wanted to follow up to ask whether Pula Golf offers a Tour Operator rate for professionals in this position, and what the process would be to set up a formal agreement.

If you could let me know what details would be needed from my side — NIF, address, etc. — I will get those across to you promptly.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "arabella",
        "to": "golf.mallorca@arabellagolf.com",
        "contact": "Inés Sanchez",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Inés,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am writing to enquire whether the Arabella Golf group offers a Tour Operator rate for professionals in my position across your Mallorca properties, and if so, what would be involved in setting up a formal agreement.

Could you let me know what information you would need — NIF number, address, and any other details — and I will send those across.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "canyamel",
        "to": "casaclub@canyamelgolf.com",
        "contact": "Tomasi",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Tomasi,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am reaching out to ask whether Canyamel Golf offers a Tour Operator rate for professionals in this position, and what would be needed to set up a formal agreement.

If you could let me know what details you require — NIF, address, and anything else — I will send those across.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "andratx",
        "to": "info@golfdeandratx.com",
        "contact": "Frank Schossig",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Frank,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am writing to enquire whether Golf de Andratx offers a Tour Operator rate for professionals in my position, and what would be involved in putting a formal agreement in place.

Could you let me know what information you would need from my side and I will get that across to you.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "santa_ponsa",
        "to": "golf1@golf-santaponsa.com",
        "contact": None,
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Sir / Madam,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service. I am currently a member at Santa Ponsa.

I am writing to ask whether Habitat Golf offers a Tour Operator rate across the Santa Ponsa courses for professionals in my position, and what would be involved in setting up a formal agreement.

Could you let me know what details you would need — NIF, address, etc. — and I will send those across.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "bendinat",
        "to": "info@realgolfbendinat.com",
        "contact": "Elena Ramos",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Elena,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am reaching out to ask whether Real Golf de Bendinat offers a Tour Operator rate for professionals in this position, and what would be needed to put a formal agreement in place.

Please let me know what information you would require from my side and I will get that across to you.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "son_termes",
        "to": "reservas@golfsontermes.com",
        "contact": "Carlos Sastre",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Carlos,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am writing to enquire whether Golf Son Termes offers a Tour Operator rate for professionals in my position, and what would be involved in setting up a formal agreement.

Could you let me know what details you would need — NIF, address, and anything else — and I will send those across.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "pollensa",
        "to": "rec@golfpollensa.com",
        "contact": None,
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Sir / Madam,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am writing to ask whether Golf Pollensa offers a Tour Operator rate for professionals in my position, and what would be needed to set up a formal agreement.

Please let me know what information you would require and I will get that across to you.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "vallor",
        "to": "valldorgolf@valldorgolf.com",
        "contact": None,
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Sir / Madam,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am reaching out to ask whether Vall d'Or Golf offers a Tour Operator rate for professionals in this position, and what would be involved in putting a formal agreement in place.

Could you let me know what details you would need from my side and I will send those across.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "maioris",
        "to": "recepcion@golfmaioris.es",
        "contact": None,
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Sir / Madam,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am writing to enquire whether Golf Maioris offers a Tour Operator rate for professionals in my position, and what would be needed to set up a formal agreement.

Please let me know what information you would require — NIF, address, etc. — and I will get that across to you.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "capdepera",
        "to": "info@golfcapdepera.com",
        "contact": None,
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Sir / Madam,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am writing to ask whether Capdepera Golf offers a Tour Operator rate for professionals in my position, and what would be involved in putting a formal agreement in place.

Could you let me know what details you would need and I will send those across promptly.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "son_antem",
        "to": "mallorca.golfclub@vacationclub.com",
        "contact": "Sophie Duroisin",
        "subject": "Tour Operator Rate Enquiry — PGA Professional",
        "body": """Dear Sophie,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca, operating as an autónomo, and I bring small groups of guests to play the island's courses as part of a private golf experience service.

I am reaching out to ask whether Golf Son Antem offers a Tour Operator rate across the East and West courses for professionals in my position, and what would be needed to set up a formal agreement.

Could you let me know what information you would require from my side — NIF, address, and anything else — and I will get that across to you.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
andy@mrmallorcagolf.com
mrmallorcagolf.com"""
    },
    {
        "id": "t_golf",
        "to": "ataronji@t-golf.club",
        "contact": "Alejandra / Borja Ochoa",
        "subject": "Tour Operator Rate Enquiry + Follow-up",
        "body": """Dear Alejandra,

My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca after spending eleven years coaching in Shanghai, China, and I wanted to follow up on an email I sent a while ago that may not have reached the right person.

I am working my way through the island's courses and produce written and video content about golf in Mallorca for both European and Chinese audiences. Part of what I do is highlight the best courses honestly, so if and when I visit T Golf I want to represent it accurately for people who are planning a trip.

Alongside the content side, I bring small groups of guests to play as part of a private "play with a pro" experience service, and I am building up formal arrangements with courses across the island.

I wanted to ask two things. First, whether T Golf extends a courtesy or professional rate to visiting PGA professionals. Second, whether you offer a Tour Operator rate for green fees at Calvia and Palma, and whether there are any TO rates or packages covering buggies, club hire, or group services.

If it is easier to speak briefly by phone I am happy to do that.

Many thanks,
Andy Griffiths
UK PGA Advanced Professional
+34 624 466 702"""
    },
]


def load_config():
    if not os.path.exists(CONFIG_FILE):
        print(f"Config not found at {CONFIG_FILE}. Run zoho_auth.py first.")
        sys.exit(1)
    with open(CONFIG_FILE) as f:
        return json.load(f)


def get_access_token(config):
    resp = requests.post(
        f"{config['accounts_server']}/oauth/v2/token",
        data={
            "refresh_token": config["refresh_token"],
            "client_id": config["client_id"],
            "client_secret": config["client_secret"],
            "grant_type": "refresh_token",
        }
    )
    resp.raise_for_status()
    data = resp.json()
    if "access_token" not in data:
        print(f"Failed to get access token: {data}")
        sys.exit(1)
    return data["access_token"]


def get_accounts(config, token):
    resp = requests.get(
        f"{config['api_base']}/accounts",
        headers={"Authorization": f"Zoho-oauthtoken {token}"}
    )
    resp.raise_for_status()
    accounts = resp.json().get("data", [])
    # Normalise emailAddress — API returns it as a list of dicts
    for a in accounts:
        raw = a.get("emailAddress", [])
        if isinstance(raw, list):
            # Find primary, or just first
            primary = next((e["mailId"] for e in raw if e.get("isPrimary")), None)
            a["_primaryEmail"] = primary or (raw[0]["mailId"] if raw else "unknown")
        else:
            a["_primaryEmail"] = raw
    return accounts


def create_message(config, token, account_id, to_email, subject, body, send=False):
    # Zoho EU API only supports /messages (sends immediately) — no drafts endpoint
    payload = {
        "fromAddress": "andy@mrmallorcagolf.com",
        "toAddress": to_email,
        "subject": subject,
        "content": body,
        "mailFormat": "plaintext",
    }
    resp = requests.post(
        f"{config['api_base']}/accounts/{account_id}/messages",
        headers={
            "Authorization": f"Zoho-oauthtoken {token}",
            "Content-Type": "application/json"
        },
        json=payload
    )
    return resp


def main():
    parser = argparse.ArgumentParser(description="Zoho Mail Tool — Mr Mallorca Golf")
    parser.add_argument("action", choices=["accounts", "send", "send-all"])
    parser.add_argument("--to", help="Recipient email")
    parser.add_argument("--subject", help="Email subject")
    parser.add_argument("--body", help="Email body")
    args = parser.parse_args()

    config = load_config()
    token = get_access_token(config)

    if args.action == "accounts":
        accounts = get_accounts(config, token)
        print(f"\nFound {len(accounts)} account(s):")
        for a in accounts:
            print(f"  ID: {a['accountId']}  Email: {a['_primaryEmail']}")
        return

    accounts = get_accounts(config, token)
    # Find andy@mrmallorcagolf.com account
    account = next((a for a in accounts if "andy@mrmallorcagolf.com" in a["_primaryEmail"]), None)
    if not account:
        account = accounts[0] if accounts else None
    if not account:
        print("No Zoho account found.")
        sys.exit(1)

    account_id = account["accountId"]
    print(f"Using account: {account['_primaryEmail']} (ID: {account_id})")

    if args.action == "send":
        if not all([args.to, args.subject, args.body]):
            print("--to, --subject, and --body are required.")
            sys.exit(1)
        resp = create_message(config, token, account_id, args.to, args.subject, args.body)
        if resp.status_code in (200, 201):
            print(f"Sent: {args.subject} → {args.to}")
        else:
            print(f"Error ({resp.status_code}): {resp.text}")

    elif args.action == "send-all":
        print(f"\nSending {len(EMAILS)} emails...\n")
        ok = 0
        for e in EMAILS:
            resp = create_message(config, token, account_id, e["to"], e["subject"], e["body"])
            status = "OK" if resp.status_code in (200, 201) else f"ERROR {resp.status_code}: {resp.text[:100]}"
            print(f"  [{status}] {e['id']} → {e['to']}")
            if resp.status_code in (200, 201):
                ok += 1
        print(f"\nDone: {ok}/{len(EMAILS)} succeeded.")


if __name__ == "__main__":
    main()
