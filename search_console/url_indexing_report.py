"""
URL Inspection report for Mr Mallorca Golf.

Checks URLs from the live sitemap and writes a simple actionable report.
"""

import argparse
import csv
import json
import sys
import time
import xml.etree.ElementTree as ET
from datetime import datetime
from pathlib import Path
from urllib.request import urlopen

from google.auth.transport.requests import AuthorizedSession

sys.path.insert(0, str(Path(__file__).resolve().parent))
from search_console_auth import get_credentials  # noqa: E402
from search_console_report import choose_site  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
REPORTS_DIR = ROOT / "search_console" / "reports"
DOWNLOADS_TXT = Path(r"C:\Users\andyg\Downloads\MMG Reports\MMG URL Indexing Latest.txt")
DOWNLOADS_CSV = Path(r"C:\Users\andyg\Downloads\MMG Reports\MMG URL Indexing Latest.csv")
SITEMAP_URL = "https://www.mrmallorcagolf.com/sitemap.xml"
INSPECTION_ENDPOINT = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"


def fetch_sitemap_urls(limit=None):
    with urlopen(SITEMAP_URL, timeout=30) as response:
        xml = response.read()
    root = ET.fromstring(xml)
    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [node.text for node in root.findall(".//sm:loc", namespace) if node.text]
    return urls[:limit] if limit else urls


def inspect_url(session, site_url, url):
    response = session.post(
        INSPECTION_ENDPOINT,
        json={"inspectionUrl": url, "siteUrl": site_url},
        timeout=60,
    )
    if response.status_code >= 400:
        return {"url": url, "error": response.text[:300]}
    result = response.json().get("inspectionResult", {}).get("indexStatusResult", {})
    return {
        "url": url,
        "verdict": result.get("verdict", ""),
        "coverage_state": result.get("coverageState", ""),
        "indexing_state": result.get("indexingState", ""),
        "robots_state": result.get("robotsTxtState", ""),
        "google_canonical": result.get("googleCanonical", ""),
        "user_canonical": result.get("userCanonical", ""),
        "last_crawl": result.get("lastCrawlTime", ""),
        "referring_urls": ", ".join(result.get("referringUrls", [])[:3]),
        "sitemap": ", ".join(result.get("sitemap", [])[:2]),
        "error": "",
    }


def action_for(row):
    text = " ".join([
        row.get("verdict", ""),
        row.get("coverage_state", ""),
        row.get("indexing_state", ""),
        row.get("robots_state", ""),
    ]).lower()
    if row.get("error"):
        return "API error - retry later or check property access"
    if "page with redirect" in text:
        return "Redirecting URL - OK if target is the intended canonical page"
    if "redirect error" in text:
        return "Redirect error - verify the URL returns one clean 301/308 to the intended target"
    if "not found" in text or "404" in text:
        return "404 - redirect if the URL has a useful replacement, otherwise leave excluded"
    if "blocked" in text or "robots" in text:
        return "Check robots/noindex rules"
    if row.get("google_canonical") and row.get("user_canonical") and row["google_canonical"] != row["user_canonical"]:
        return "Canonical mismatch - review page canonical/internal links"
    if "not indexed" in text or "excluded" in text or "fail" in text:
        return "Improve page quality/internal links, then request indexing in GSC"
    if "pass" in text or "indexed" in text:
        return "OK"
    return "Review in Search Console"


def build_report(limit=None, delay=0.25):
    session = AuthorizedSession(get_credentials())
    site_url, sites = choose_site(session)
    if not site_url:
        return {
            "ok": False,
            "output": "No matching Search Console property found.\n" + "\n".join(sites),
            "rows": [],
        }

    urls = fetch_sitemap_urls(limit)
    rows = []
    for idx, url in enumerate(urls, 1):
        row = inspect_url(session, site_url, url)
        row["action"] = action_for(row)
        rows.append(row)
        if delay and idx < len(urls):
            time.sleep(delay)

    problem_rows = [row for row in rows if row["action"] != "OK"]
    lines = [
        "Mr Mallorca Golf - URL Indexing Report",
        f"Property: {site_url}",
        f"Sitemap: {SITEMAP_URL}",
        f"Checked: {len(rows)} URL(s)",
        "",
        "=" * 60,
        "  SUMMARY",
        "=" * 60,
        f"  OK:       {sum(1 for row in rows if row['action'] == 'OK')}",
        f"  Review:   {len(problem_rows)}",
        "",
        "=" * 60,
        "  URLS TO REVIEW",
        "=" * 60,
    ]

    if not problem_rows:
        lines.append("  No obvious indexing issues returned by the API.")
    else:
        for row in problem_rows:
            lines.append(f"- {row['url']}")
            lines.append(f"  Status: {row.get('coverage_state') or row.get('verdict') or row.get('error')}")
            lines.append(f"  Action: {row['action']}")
            if row.get("google_canonical") or row.get("user_canonical"):
                lines.append(f"  Google canonical: {row.get('google_canonical') or '-'}")
                lines.append(f"  User canonical:   {row.get('user_canonical') or '-'}")
            if row.get("last_crawl"):
                lines.append(f"  Last crawl: {row['last_crawl']}")

    return {"ok": True, "output": "\n".join(lines), "rows": rows}


def save_report(result):
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    DOWNLOADS_TXT.parent.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y-%m-%d")
    archive_txt = REPORTS_DIR / f"url-indexing-{stamp}.txt"
    archive_csv = REPORTS_DIR / f"url-indexing-{stamp}.csv"
    archive_txt.write_text(result["output"], encoding="utf-8")
    DOWNLOADS_TXT.write_text(result["output"], encoding="utf-8")

    fields = [
        "url", "verdict", "coverage_state", "indexing_state", "robots_state",
        "google_canonical", "user_canonical", "last_crawl", "referring_urls", "sitemap", "action", "error",
    ]
    with archive_csv.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows([{field: row.get(field, "") for field in fields} for row in result["rows"]])
    DOWNLOADS_CSV.write_text(archive_csv.read_text(encoding="utf-8"), encoding="utf-8")
    return archive_txt, archive_csv


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=None, help="How many sitemap URLs to inspect")
    parser.add_argument("--all", action="store_true", help="Inspect every sitemap URL")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    try:
        result = build_report(limit=None if args.all else args.limit)
    except Exception as exc:
        result = {"ok": False, "output": f"URL indexing error: {exc}", "rows": []}

    if result["ok"]:
        archive_txt, archive_csv = save_report(result)
        result["output"] += f"\n\nSaved: {archive_txt}\nCSV: {archive_csv}\nLatest copy: {DOWNLOADS_TXT}"

    if args.json:
        print(json.dumps(result, indent=2))
    else:
        print(result["output"])


if __name__ == "__main__":
    main()
