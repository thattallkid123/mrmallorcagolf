"""
Weekly Google Search Console report for Mr Mallorca Golf.
"""

import argparse
import csv
import json
import sys
from datetime import date, datetime, timedelta
from pathlib import Path
from urllib.parse import quote, urlparse

from google.auth.transport.requests import AuthorizedSession

sys.path.insert(0, str(Path(__file__).resolve().parent))
from search_console_auth import get_credentials  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
REPORTS_DIR = ROOT / "search_console" / "reports"
DOWNLOADS_TXT = Path(r"C:\Users\andyg\Downloads\MMG Reports\MMG Search Console Latest.txt")
DOWNLOADS_CSV = Path(r"C:\Users\andyg\Downloads\MMG Reports\MMG Search Console Latest.csv")
API_ROOT = "https://www.googleapis.com/webmasters/v3"
DEFAULT_SITE_CANDIDATES = [
    "sc-domain:mrmallorcagolf.com",
    "https://www.mrmallorcagolf.com/",
    "https://mrmallorcagolf.com/",
]

STRATEGIC_PAGE_HINTS = [
    ("/golf-courses", "Course hub: make the first-choice path clearer and keep the enquiry CTA visible."),
    ("/contact", "Contact: strengthen trust above the form and make enquiry types feel simpler."),
    ("/plan-your-trip", "Trip planner: show enough guidance to help users ask better questions, without over-explaining."),
    ("/play-with-a-pro", "Private day: keep the premium value, inclusions, and booking path obvious."),
    ("/signature-day", "Signature Day: keep the premium positioning sharp and make pricing/inclusions easy to scan."),
    ("/coaching", "Coaching: if it stays public, make it clearly about Andy as coach and what a lesson solves."),
]


def date_range(days: int):
    end = date.today() - timedelta(days=2)
    start = end - timedelta(days=days)
    return start.isoformat(), end.isoformat()


def get_session():
    return AuthorizedSession(get_credentials())


def list_sites(session):
    response = session.get(f"{API_ROOT}/sites", timeout=30)
    if response.status_code == 403:
        raise PermissionError(
            "Search Console returned 403 Forbidden.\n\n"
            "Most likely one of these is true:\n"
            "1. Search Console API is not enabled in the Google Cloud project used by GA4.\n"
            "2. The Google account you logged in with does not have Search Console access.\n"
            "3. The Search Console token was created before the right API/permission was available.\n\n"
            "Fix: enable 'Google Search Console API' in Google Cloud for the MMG Analytics project, "
            "make sure the same Google account can open Search Console for mrmallorcagolf.com, "
            "then click Connect/Fix Search Console again."
        )
    response.raise_for_status()
    return [entry["siteUrl"] for entry in response.json().get("siteEntry", [])]


def choose_site(session, preferred=None):
    sites = list_sites(session)
    if preferred and preferred in sites:
        return preferred, sites
    for candidate in DEFAULT_SITE_CANDIDATES:
        if candidate in sites:
            return candidate, sites
    for site in sites:
        if "mrmallorcagolf.com" in site:
            return site, sites
    return None, sites


def query(session, site_url, start_date, end_date, dimensions, row_limit=25):
    endpoint = f"{API_ROOT}/sites/{quote(site_url, safe='')}/searchAnalytics/query"
    body = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": dimensions,
        "rowLimit": row_limit,
        "startRow": 0,
    }
    response = session.post(endpoint, json=body, timeout=60)
    response.raise_for_status()
    return response.json().get("rows", [])


def path_from_url(url):
    parsed = urlparse(url)
    return parsed.path or "/"


def page_hint(path):
    if path == "/":
        return "Homepage: lift service clarity and push visitors toward golf-courses, play-with-a-pro, and plan-your-trip."
    for prefix, hint in STRATEGIC_PAGE_HINTS:
        if path == prefix or path.startswith(prefix.rstrip("/") + "/"):
            return hint
    if path.startswith("/guides/"):
        return "Guide page: improve the title/meta/intro and link to the most relevant next step."
    return "Page opportunity: tighten the intro and add a clearer next step."


def page_kind(path):
    if path == "/":
        return "homepage"
    if path.startswith("/guides/"):
        return "guide"
    if any(path == prefix for prefix, _ in STRATEGIC_PAGE_HINTS):
        return "service"
    return "other"


def fmt_pct(value):
    return f"{value * 100:.1f}%"


def print_table(title, rows, columns):
    print(f"\n{'=' * 60}")
    print(f"  {title}")
    print(f"{'=' * 60}")
    if not rows:
        print("  No data.")
        return
    header = "  " + "  ".join(label.rjust(width) for label, width, _ in columns)
    print(header)
    print("  " + "  ".join("-" * width for _, width, _ in columns))
    for row in rows:
        values = []
        for _, width, getter in columns:
            text = str(getter(row))
            if len(text) > width:
                text = text[: width - 1] + "."
            values.append(text.rjust(width))
        print("  " + "  ".join(values))


def build_report(days, site=None):
    start_date, end_date = date_range(days)
    session = get_session()
    site_url, available_sites = choose_site(session, site)
    if not site_url:
        return {
            "ok": False,
            "output": (
                "No matching Search Console property found for mrmallorcagolf.com.\n\n"
                "Available properties:\n"
                + "\n".join(f"- {s}" for s in available_sites)
            ),
            "rows": [],
        }

    by_query = query(session, site_url, start_date, end_date, ["query"], 50)
    by_page = query(session, site_url, start_date, end_date, ["page"], 50)
    by_page_query = query(session, site_url, start_date, end_date, ["page", "query"], 250)

    total_clicks = sum(row.get("clicks", 0) for row in by_page)
    total_impressions = sum(row.get("impressions", 0) for row in by_page)
    avg_ctr = total_clicks / total_impressions if total_impressions else 0
    avg_position = (
        sum(row.get("position", 0) * row.get("impressions", 0) for row in by_page) / total_impressions
        if total_impressions else 0
    )

    opportunities = [
        row for row in by_page_query
        if row.get("impressions", 0) >= 10 and row.get("clicks", 0) == 0 and row.get("position", 99) <= 30
    ][:20]
    title_meta_jobs = [
        row for row in by_page_query
        if row.get("impressions", 0) >= 25 and row.get("ctr", 0) < 0.01 and row.get("position", 99) <= 15
    ][:10]
    internal_link_jobs = [
        row for row in by_page_query
        if row.get("impressions", 0) >= 10 and 15 < row.get("position", 99) <= 35
    ][:10]
    page_rows = [
        {
            **row,
            "path": path_from_url(row["keys"][0]),
            "kind": page_kind(path_from_url(row["keys"][0])),
        }
        for row in by_page
    ]

    page_opportunities = [
        row for row in page_rows
        if row.get("impressions", 0) >= 20 and row.get("ctr", 0) < 0.02
    ]
    page_opportunities.sort(key=lambda row: (row.get("ctr", 0), -row.get("impressions", 0), row.get("position", 99)))

    lines = []
    lines.append(f"Mr Mallorca Golf - Search Console Report")
    lines.append(f"Property: {site_url}")
    lines.append(f"Period: {start_date} to {end_date} ({days} days)")
    lines.append("")
    lines.append("=" * 60)
    lines.append("  OVERVIEW")
    lines.append("=" * 60)
    lines.append(f"  Clicks:       {total_clicks:,}")
    lines.append(f"  Impressions:  {total_impressions:,}")
    lines.append(f"  CTR:          {fmt_pct(avg_ctr)}")
    lines.append(f"  Avg position: {avg_position:.1f}")
    lines.append("")
    lines.append("=" * 60)
    lines.append("  ACTION SUMMARY")
    lines.append("=" * 60)
    if page_opportunities:
        lines.append("  1. Fix these pages first:")
        for row in page_opportunities[:5]:
            lines.append(
                f"     - {row['path']} ({row.get('impressions', 0):.0f} impr, pos {row.get('position', 0):.1f}, CTR {fmt_pct(row.get('ctr', 0))})"
            )
            lines.append(f"       {page_hint(row['path'])}")
    if title_meta_jobs:
        lines.append("  2. Improve titles/meta/intros where position is decent but CTR is weak:")
        for row in title_meta_jobs[:5]:
            lines.append(
                f"     - {path_from_url(row['keys'][0])} for '{row['keys'][1]}' "
                f"({row.get('impressions', 0):.0f} impr, pos {row.get('position', 0):.1f}, CTR {fmt_pct(row.get('ctr', 0))})"
            )
    if internal_link_jobs:
        lines.append("  3. Add internal links / improve page depth for near-ranking queries:")
        for row in internal_link_jobs[:5]:
            lines.append(
                f"     - {path_from_url(row['keys'][0])} for '{row['keys'][1]}' "
                f"(pos {row.get('position', 0):.1f})"
            )
    if not page_opportunities and not title_meta_jobs and not internal_link_jobs:
        lines.append("  No obvious quick actions from current thresholds.")

    from io import StringIO

    buffer = StringIO()
    old_stdout = sys.stdout
    sys.stdout = buffer
    try:
        print_table("TOP QUERIES", by_query[:15], [
            ("Clicks", 6, lambda r: int(r.get("clicks", 0))),
            ("Impr.", 6, lambda r: int(r.get("impressions", 0))),
            ("CTR", 7, lambda r: fmt_pct(r.get("ctr", 0))),
            ("Pos", 5, lambda r: f"{r.get('position', 0):.1f}"),
            ("Query", 36, lambda r: r["keys"][0]),
        ])
        print_table("TOP PAGES", page_rows[:15], [
            ("Clicks", 6, lambda r: int(r.get("clicks", 0))),
            ("Impr.", 6, lambda r: int(r.get("impressions", 0))),
            ("CTR", 7, lambda r: fmt_pct(r.get("ctr", 0))),
            ("Pos", 5, lambda r: f"{r.get('position', 0):.1f}"),
            ("Page", 36, lambda r: r["path"]),
        ])
        print_table("PAGE OPPORTUNITIES", page_opportunities[:10], [
            ("Impr.", 6, lambda r: int(r.get("impressions", 0))),
            ("CTR", 7, lambda r: fmt_pct(r.get("ctr", 0))),
            ("Pos", 5, lambda r: f"{r.get('position', 0):.1f}"),
            ("Type", 10, lambda r: r.get("kind", "")),
            ("Page", 28, lambda r: r["path"]),
        ])
        print_table("QUICK WINS", opportunities, [
            ("Impr.", 6, lambda r: int(r.get("impressions", 0))),
            ("Pos", 5, lambda r: f"{r.get('position', 0):.1f}"),
            ("Page", 28, lambda r: path_from_url(r["keys"][0])),
            ("Query", 32, lambda r: r["keys"][1]),
        ])
    finally:
        sys.stdout = old_stdout
    lines.append(buffer.getvalue().strip())
    lines.append("")
    lines.append("Action notes:")
    lines.append("- Quick wins = impressions, no clicks, position 30 or better.")
    lines.append("- Page opportunities = pages with enough impressions and CTR below 2%.")
    lines.append("- Start with better title/meta/intro/internal links for those page-query pairs.")
    lines.append("- Use the Indexing tab for URL-level coverage checks.")

    csv_rows = []
    for row in by_page_query:
        csv_rows.append({
            "page": row["keys"][0],
            "query": row["keys"][1],
            "clicks": row.get("clicks", 0),
            "impressions": row.get("impressions", 0),
            "ctr": row.get("ctr", 0),
            "position": row.get("position", 0),
        })

    return {
        "ok": True,
        "site_url": site_url,
        "output": "\n".join(lines),
        "rows": csv_rows,
    }


def save_report(result):
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    DOWNLOADS_TXT.parent.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y-%m-%d")
    archive_txt = REPORTS_DIR / f"search-console-{stamp}.txt"
    archive_csv = REPORTS_DIR / f"search-console-{stamp}.csv"
    archive_txt.write_text(result["output"], encoding="utf-8")
    DOWNLOADS_TXT.write_text(result["output"], encoding="utf-8")

    rows = result.get("rows", [])
    with archive_csv.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["page", "query", "clicks", "impressions", "ctr", "position"])
        writer.writeheader()
        writer.writerows(rows)
    DOWNLOADS_CSV.write_text(archive_csv.read_text(encoding="utf-8"), encoding="utf-8")
    return archive_txt, archive_csv


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--days", type=int, default=28)
    parser.add_argument("--site")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    try:
        result = build_report(args.days, args.site)
    except Exception as exc:
        result = {"ok": False, "output": f"Search Console error: {exc}", "rows": []}

    if result["ok"]:
        archive_txt, archive_csv = save_report(result)
        result["output"] += f"\n\nSaved: {archive_txt}\nCSV: {archive_csv}\nLatest copy: {DOWNLOADS_TXT}"

    if args.json:
        print(json.dumps(result, indent=2))
    else:
        print(result["output"])


if __name__ == "__main__":
    main()
