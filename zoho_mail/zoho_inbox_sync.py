"""
Read-only Zoho inbox sync for Mr Mallorca Golf.

Copies every message (all folders) into Drive Private as plain text, one file per
message, plus an index. Only GET requests are made. Nothing is sent, moved,
marked or deleted.

Privacy rules:
  - Output goes to Drive Private/Chat Histories/Email/_all_mail (never the repo).
  - Messages sent from andy@ are flagged VOICE_SOURCE: own-sent. Only those may
    feed the voice guide or reply library. Inbound mail is for business records.

Usage:
  python zoho_inbox_sync.py            # sync new messages
  python zoho_inbox_sync.py --limit 50 # stop after 50 new messages (test run)
"""

import argparse
import html
import json
import os
import re
import sys
import datetime

import requests

CONFIG_FILE = os.path.join(os.path.dirname(__file__), "zoho_config.json")
DRIVE_ROOT = os.environ.get("MMG_DRIVE_ROOT", r"G:\My Drive\Mr Mallorca Golf")
OUT_DIR = os.path.join(DRIVE_ROOT, "Private", "Chat Histories", "Email", "_all_mail")
INDEX_FILE = os.path.join(OUT_DIR, "_index.json")
OWN_ADDRESS = "andy@mrmallorcagolf.com"
PAGE = 200


def load_config():
    with open(CONFIG_FILE, encoding="utf-8") as f:
        return json.load(f)


def access_token(cfg):
    r = requests.post(
        cfg["accounts_server"] + "/oauth/v2/token",
        data={
            "refresh_token": cfg["refresh_token"],
            "client_id": cfg["client_id"],
            "client_secret": cfg["client_secret"],
            "grant_type": "refresh_token",
        },
        timeout=30,
    )
    r.raise_for_status()
    return r.json()["access_token"]


def account_id(cfg, headers):
    r = requests.get(cfg["api_base"] + "/accounts", headers=headers, timeout=30)
    r.raise_for_status()
    return r.json()["data"][0]["accountId"]


SEARCHES = [
    f"sender:{OWN_ADDRESS}",  # sent mail (all folders)
    f"to:{OWN_ADDRESS}",  # inbound mail (all folders)
]


def paged(cfg, headers, url, params, page_size):
    start = 1
    while True:
        r = requests.get(
            url,
            params={**params, "start": start, "limit": page_size},
            headers=headers,
            timeout=60,
        )
        r.raise_for_status()
        rows = r.json().get("data") or []
        yield from rows
        if len(rows) < page_size:
            return
        start += page_size


def list_messages(cfg, headers, aid, limit):
    # messages/view alone misses most sent mail, so the search passes cover
    # both directions. Duplicates are skipped by message ID in main().
    sources = [
        (f"{cfg['api_base']}/accounts/{aid}/messages/view", {}),
    ] + [
        (f"{cfg['api_base']}/accounts/{aid}/messages/search", {"searchKey": key})
        for key in SEARCHES
    ]
    seen_ids = set()
    count = 0
    for url, params in sources:
        for row in paged(cfg, headers, url, params, PAGE if "view" in url else 100):
            if row["messageId"] in seen_ids:
                continue
            seen_ids.add(row["messageId"])
            yield row
            count += 1
            if limit and count >= limit:
                return


def fetch_content(cfg, headers, aid, folder_id, message_id):
    r = requests.get(
        f"{cfg['api_base']}/accounts/{aid}/folders/{folder_id}/messages/{message_id}/content",
        headers=headers,
        timeout=60,
    )
    r.raise_for_status()
    return r.json().get("data", {}).get("content", "")


def fetch_attachment_names(cfg, headers, aid, folder_id, message_id):
    r = requests.get(
        f"{cfg['api_base']}/accounts/{aid}/folders/{folder_id}/messages/{message_id}/attachmentinfo",
        headers=headers,
        timeout=30,
    )
    if not r.ok:
        return []
    return [a.get("attachmentName", "") for a in r.json().get("data", {}).get("attachments", [])]


def html_to_text(raw):
    text = re.sub(r"(?is)<(script|style).*?</\1>", "", raw)
    text = re.sub(r"(?i)<br\s*/?>|</p>|</div>|</tr>", "\n", text)
    text = re.sub(r"<[^>]+>", "", text)
    text = html.unescape(text)
    text = re.sub(r"[ \t\xa0]+", " ", text)
    return re.sub(r"\n\s*\n+", "\n\n", text).strip()


def safe_name(s):
    return re.sub(r"[^A-Za-z0-9._-]+", "_", s)[:60].strip("_")


def load_index():
    if os.path.exists(INDEX_FILE):
        with open(INDEX_FILE, encoding="utf-8") as f:
            return json.load(f)
    return {}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    cfg = load_config()
    token = access_token(cfg)
    headers = {"Authorization": "Zoho-oauthtoken " + token}
    aid = account_id(cfg, headers)

    os.makedirs(OUT_DIR, exist_ok=True)
    index = load_index()
    new = 0
    skipped = 0
    failed = 0

    for row in list_messages(cfg, headers, aid, args.limit):
        mid = row["messageId"]
        if mid in index:
            skipped += 1
            continue
        folder_id = row.get("folderId", "")
        sender = html.unescape(row.get("fromAddress", ""))
        own = OWN_ADDRESS in sender.lower()
        sent_ms = int(row.get("sentDateInGMT", "0") or 0)
        sent = datetime.datetime.fromtimestamp(sent_ms / 1000, datetime.timezone.utc)
        subject = html.unescape(row.get("subject", ""))
        try:
            body = html_to_text(fetch_content(cfg, headers, aid, folder_id, mid))
            attachments = fetch_attachment_names(cfg, headers, aid, folder_id, mid)
        except requests.RequestException as e:
            failed += 1
            print(f"FAILED {mid}: {e}", file=sys.stderr)
            continue

        fname = f"{sent:%Y-%m-%d}_{mid}_{safe_name(subject) or 'no-subject'}.txt"
        header = [
            f"MESSAGE_ID: {mid}",
            f"THREAD_ID: {row.get('threadId', '')}",
            f"DATE_UTC: {sent:%Y-%m-%d %H:%M}",
            f"FROM: {sender}",
            f"TO: {html.unescape(row.get('toAddress', ''))}",
            f"SUBJECT: {subject}",
            f"ATTACHMENTS: {', '.join(attachments) if attachments else 'none'}",
            f"VOICE_SOURCE: {'own-sent' if own else 'inbound-business-record-only'}",
            "",
            "-----",
            "",
        ]
        with open(os.path.join(OUT_DIR, fname), "w", encoding="utf-8") as f:
            f.write("\n".join(header) + body + "\n")
        index[mid] = {"file": fname, "date": f"{sent:%Y-%m-%d}", "from": sender, "subject": subject, "voice_source": own}
        new += 1

    with open(INDEX_FILE, "w", encoding="utf-8") as f:
        json.dump(index, f, ensure_ascii=False, indent=1)
    print(f"new={new} already_synced={skipped} failed={failed} total_indexed={len(index)}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
