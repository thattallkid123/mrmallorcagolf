"""
Monthly Traffic & Interest Snapshot for Mr Mallorca Golf.

Pulls GA4 and Search Console directly, compares the latest completed
calendar month with the previous month, and saves a plain-English report
to Downloads/MMG Reports.
"""

import argparse
import csv
import json
import sys
from datetime import date, datetime, timedelta
from pathlib import Path
from urllib.parse import quote, urlparse

from google.auth.transport.requests import AuthorizedSession

ROOT = Path(__file__).resolve().parents[2]
DOWNLOADS_DIR = Path.home() / "Downloads" / "MMG Reports"
OUTPUT_DIR = ROOT / "outputs" / "site-ops" / "monthly"
GA4_PROPERTY_ID = "529404785"
API_ROOT = "https://www.googleapis.com/webmasters/v3"
DEFAULT_SITE_CANDIDATES = [
    "sc-domain:mrmallorcagolf.com",
    "https://www.mrmallorcagolf.com/",
    "https://mrmallorcagolf.com/",
]
IMPORTANT_EVENTS = {
    "generate_lead",
    "contact_form_submit",
    "contact_form_start",
    "whatsapp_click",
    "email_click",
    "phone_click",
    "contact_page_click",
    "play_with_a_pro_click",
    "tool_click",
    "sign_up",
    "lead_magnet_signup",
}


def add_import_paths():
    sys.path.insert(0, str(ROOT / "ga4_analytics"))
    sys.path.insert(0, str(ROOT / "search_console"))


def previous_month_bounds(today=None):
    today = today or date.today()
    first_this_month = today.replace(day=1)
    end = first_this_month - timedelta(days=1)
    start = end.replace(day=1)
    return start, end


def month_bounds(month):
    start = datetime.strptime(month, "%Y-%m").date().replace(day=1)
    if start.month == 12:
        next_month = start.replace(year=start.year + 1, month=1)
    else:
        next_month = start.replace(month=start.month + 1)
    return start, next_month - timedelta(days=1)


def previous_month(start):
    end = start - timedelta(days=1)
    return end.replace(day=1), end


def iso(d):
    return d.isoformat()


def pct(value):
    return f"{value * 100:.1f}%"


def change(current, previous):
    if previous == 0:
        if current == 0:
            return "flat"
        return "new"
    delta = (current - previous) / previous
    direction = "up" if delta > 0 else "down" if delta < 0 else "flat"
    return f"{direction} {abs(delta) * 100:.0f}%"


def money_number(value):
    return f"{value:,.0f}"


def path_from_url(url):
    parsed = urlparse(url)
    return parsed.path or "/"


def ga4_client():
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from ga4_auth import get_credentials

    return BetaAnalyticsDataClient(credentials=get_credentials())


def ga4_run(client, dimensions, metrics, start, end, limit=50):
    from google.analytics.data_v1beta.types import DateRange, Dimension, Metric, RunReportRequest

    request = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        date_ranges=[DateRange(start_date=iso(start), end_date=iso(end))],
        limit=limit,
    )
    return client.run_report(request)


def ga4_totals(client, start, end):
    response = ga4_run(
        client,
        [],
        [
            "sessions",
            "activeUsers",
            "newUsers",
            "screenPageViews",
            "averageSessionDuration",
            "engagementRate",
        ],
        start,
        end,
        1,
    )
    if not response.rows:
        return {
            "sessions": 0,
            "users": 0,
            "new_users": 0,
            "views": 0,
            "avg_session_seconds": 0,
            "engagement_rate": 0,
        }
    values = [v.value for v in response.rows[0].metric_values]
    return {
        "sessions": int(float(values[0])),
        "users": int(float(values[1])),
        "new_users": int(float(values[2])),
        "views": int(float(values[3])),
        "avg_session_seconds": float(values[4]),
        "engagement_rate": float(values[5]),
    }


def ga4_rows(client, dimensions, metrics, start, end, limit=15):
    response = ga4_run(client, dimensions, metrics, start, end, limit)
    rows = []
    for row in response.rows:
        item = {}
        for idx, dim in enumerate(dimensions):
            item[dim] = row.dimension_values[idx].value
        for idx, metric in enumerate(metrics):
            value = row.metric_values[idx].value
            try:
                if "." in value:
                    item[metric] = float(value)
                else:
                    item[metric] = int(value)
            except ValueError:
                item[metric] = value
        rows.append(item)
    return rows


def search_session():
    from search_console_auth import get_credentials

    return AuthorizedSession(get_credentials())


def list_sites(session):
    response = session.get(f"{API_ROOT}/sites", timeout=30)
    response.raise_for_status()
    return [entry["siteUrl"] for entry in response.json().get("siteEntry", [])]


def choose_site(session):
    sites = list_sites(session)
    for candidate in DEFAULT_SITE_CANDIDATES:
        if candidate in sites:
            return candidate
    for site in sites:
        if "mrmallorcagolf.com" in site:
            return site
    raise RuntimeError("No Search Console property found for mrmallorcagolf.com")


def search_query(session, site_url, start, end, dimensions, row_limit=50):
    endpoint = f"{API_ROOT}/sites/{quote(site_url, safe='')}/searchAnalytics/query"
    body = {
        "startDate": iso(start),
        "endDate": iso(end),
        "dimensions": dimensions,
        "rowLimit": row_limit,
        "startRow": 0,
    }
    response = session.post(endpoint, json=body, timeout=60)
    response.raise_for_status()
    return response.json().get("rows", [])


def search_totals(session, site_url, start, end):
    rows = search_query(session, site_url, start, end, [], 1)
    if not rows:
        return {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
    row = rows[0]
    return {
        "clicks": row.get("clicks", 0),
        "impressions": row.get("impressions", 0),
        "ctr": row.get("ctr", 0),
        "position": row.get("position", 0),
    }


def trend_rows(session, site_url, month_start):
    rows = []
    cursor = month_start
    for _ in range(4):
        start, end = month_bounds(cursor.strftime("%Y-%m"))
        totals = search_totals(session, site_url, start, end)
        rows.append((start.strftime("%Y-%m"), totals))
        cursor = start - timedelta(days=1)
    return list(reversed(rows))


def top_search_rows(session, site_url, start, end):
    pages = search_query(session, site_url, start, end, ["page"], 20)
    queries = search_query(session, site_url, start, end, ["query"], 20)
    countries = search_query(session, site_url, start, end, ["country"], 12)
    devices = search_query(session, site_url, start, end, ["device"], 5)
    page_query = search_query(session, site_url, start, end, ["page", "query"], 200)
    return pages, queries, countries, devices, page_query


def format_duration(seconds):
    seconds = int(seconds or 0)
    return f"{seconds // 60}m {seconds % 60:02d}s"


def table(lines, headers, rows):
    lines.append("| " + " | ".join(headers) + " |")
    lines.append("|" + "|".join("---" for _ in headers) + "|")
    for row in rows:
        lines.append("| " + " | ".join(str(cell) for cell in row) + " |")
    lines.append("")


def build_snapshot(month=None):
    add_import_paths()
    month_start, month_end = month_bounds(month) if month else previous_month_bounds()
    prev_start, prev_end = previous_month(month_start)
    month_label = month_start.strftime("%B %Y")
    prev_label = prev_start.strftime("%B %Y")

    ga4_error = None
    search_error = None
    ga4 = {}
    search = {}

    try:
        client = ga4_client()
        ga4["current"] = ga4_totals(client, month_start, month_end)
        ga4["previous"] = ga4_totals(client, prev_start, prev_end)
        ga4["pages"] = ga4_rows(
            client,
            ["pagePath"],
            ["screenPageViews", "activeUsers", "averageSessionDuration"],
            month_start,
            month_end,
            20,
        )
        ga4["countries"] = ga4_rows(client, ["country"], ["sessions", "activeUsers"], month_start, month_end, 12)
        ga4["sources"] = ga4_rows(
            client,
            ["sessionDefaultChannelGroup"],
            ["sessions", "activeUsers", "newUsers"],
            month_start,
            month_end,
            12,
        )
        ga4["events"] = [
            row for row in ga4_rows(client, ["eventName"], ["eventCount"], month_start, month_end, 50)
            if row["eventName"] in IMPORTANT_EVENTS
            or any(token in row["eventName"].lower() for token in ["lead", "contact", "whatsapp", "email", "phone", "tool"])
        ]
    except Exception as exc:
        ga4_error = str(exc)

    try:
        session = search_session()
        site_url = choose_site(session)
        search["site_url"] = site_url
        search["current"] = search_totals(session, site_url, month_start, month_end)
        search["previous"] = search_totals(session, site_url, prev_start, prev_end)
        search["trend"] = trend_rows(session, site_url, month_start.replace(day=1))
        pages, queries, countries, devices, page_query = top_search_rows(session, site_url, month_start, month_end)
        search["pages"] = pages
        search["queries"] = queries
        search["countries"] = countries
        search["devices"] = devices
        search["quick_wins"] = [
            row for row in page_query
            if row.get("impressions", 0) >= 20 and row.get("ctr", 0) < 0.02 and row.get("position", 99) <= 25
        ][:12]
    except Exception as exc:
        search_error = str(exc)

    lines = [
        f"# MMG Monthly Traffic & Interest Snapshot - {month_label}",
        "",
        f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        f"Compared with: {prev_label}",
        "",
        "This is for Andy's own understanding and conversation prep. It is not a hotel-facing sales document.",
        "",
        "## Headline",
        "",
    ]

    if ga4_error and search_error:
        lines.extend([
            "Could not pull GA4 or Search Console data.",
            "",
            f"- GA4 error: {ga4_error}",
            f"- Search Console error: {search_error}",
            "",
            "Reconnect the Google auth tokens, then rerun this report.",
        ])
        return month_start, "\n".join(lines) + "\n"

    if ga4_error:
        lines.append(f"- GA4 data unavailable: {ga4_error}")
    if search_error:
        lines.append(f"- Search Console data unavailable: {search_error}")

    if "current" in ga4:
        cur = ga4["current"]
        prev = ga4["previous"]
        lines.extend([
            f"- Users: {money_number(cur['users'])} ({change(cur['users'], prev['users'])} vs {prev_label})",
            f"- Sessions: {money_number(cur['sessions'])} ({change(cur['sessions'], prev['sessions'])})",
            f"- Page views: {money_number(cur['views'])} ({change(cur['views'], prev['views'])})",
            f"- Avg session: {format_duration(cur['avg_session_seconds'])}",
            f"- Engagement rate: {pct(cur['engagement_rate'])}",
        ])
    if "current" in search:
        cur = search["current"]
        prev = search["previous"]
        lines.extend([
            f"- Google clicks: {money_number(cur['clicks'])} ({change(cur['clicks'], prev['clicks'])})",
            f"- Google impressions: {money_number(cur['impressions'])} ({change(cur['impressions'], prev['impressions'])})",
            f"- Search CTR: {pct(cur['ctr'])}",
            f"- Average search position: {cur['position']:.1f}",
        ])
    lines.append("")

    lines.append("## What Changed This Month")
    lines.append("")
    quick_read = []
    if "current" in ga4:
        cur = ga4["current"]
        prev = ga4["previous"]
        quick_read.append(f"Site users were {change(cur['users'], prev['users'])}, with {money_number(cur['users'])} users and {money_number(cur['views'])} page views.")
    if "current" in search:
        cur = search["current"]
        prev = search["previous"]
        quick_read.append(f"Google discovery was {change(cur['impressions'], prev['impressions'])}: {money_number(cur['impressions'])} impressions and {money_number(cur['clicks'])} clicks.")
        if cur["impressions"] and cur["clicks"]:
            quick_read.append(f"People clicked through on {pct(cur['ctr'])} of searches, with an average position of {cur['position']:.1f}.")
    if ga4.get("pages"):
        top_page = ga4["pages"][0]
        quick_read.append(f"The most viewed page was {top_page['pagePath']} with {money_number(top_page['screenPageViews'])} views.")
    if search.get("queries"):
        top_query = search["queries"][0]
        quick_read.append(f"The top search by clicks was \"{top_query['keys'][0]}\".")
    if ga4.get("events"):
        event_total = sum(row["eventCount"] for row in ga4["events"])
        quick_read.append(f"Tracked contact/tool/lead actions found: {money_number(event_total)}.")
    elif not ga4_error:
        quick_read.append("No lead/contact/tool events were found, so GA4 key event setup still needs checking.")

    if quick_read:
        for item in quick_read[:6]:
            lines.append(f"- {item}")
    else:
        lines.append("- Not enough data was available to produce a simple monthly read.")
    lines.append("")

    if "trend" in search:
        lines.append("## Search Growth Trend")
        lines.append("")
        table(
            lines,
            ["Month", "Clicks", "Impressions", "CTR", "Avg position"],
            [
                [
                    label,
                    money_number(row["clicks"]),
                    money_number(row["impressions"]),
                    pct(row["ctr"]),
                    f"{row['position']:.1f}",
                ]
                for label, row in search["trend"]
            ],
        )

    if "pages" in ga4:
        lines.append("## Most Viewed Pages")
        lines.append("")
        table(
            lines,
            ["Views", "Users", "Avg time", "Page"],
            [
                [
                    money_number(row["screenPageViews"]),
                    money_number(row["activeUsers"]),
                    format_duration(row["averageSessionDuration"]),
                    row["pagePath"],
                ]
                for row in ga4["pages"][:12]
            ],
        )

    if "pages" in search:
        lines.append("## Top Google Landing Pages")
        lines.append("")
        table(
            lines,
            ["Clicks", "Impressions", "CTR", "Pos", "Page"],
            [
                [
                    money_number(row.get("clicks", 0)),
                    money_number(row.get("impressions", 0)),
                    pct(row.get("ctr", 0)),
                    f"{row.get('position', 0):.1f}",
                    path_from_url(row["keys"][0]),
                ]
                for row in search["pages"][:12]
            ],
        )

    if "queries" in search:
        lines.append("## Top Searches")
        lines.append("")
        table(
            lines,
            ["Clicks", "Impressions", "CTR", "Pos", "Query"],
            [
                [
                    money_number(row.get("clicks", 0)),
                    money_number(row.get("impressions", 0)),
                    pct(row.get("ctr", 0)),
                    f"{row.get('position', 0):.1f}",
                    row["keys"][0],
                ]
                for row in search["queries"][:15]
            ],
        )

    if "countries" in ga4:
        lines.append("## Countries")
        lines.append("")
        table(
            lines,
            ["Sessions", "Users", "Country"],
            [[money_number(row["sessions"]), money_number(row["activeUsers"]), row["country"]] for row in ga4["countries"][:10]],
        )

    if "sources" in ga4:
        lines.append("## Traffic Sources")
        lines.append("")
        table(
            lines,
            ["Sessions", "Users", "New users", "Source"],
            [
                [
                    money_number(row["sessions"]),
                    money_number(row["activeUsers"]),
                    money_number(row["newUsers"]),
                    row["sessionDefaultChannelGroup"],
                ]
                for row in ga4["sources"][:10]
            ],
        )

    lines.append("## Tools, Leads And Contact Signals")
    lines.append("")
    if ga4.get("events"):
        table(
            lines,
            ["Count", "Event"],
            [[money_number(row["eventCount"]), row["eventName"]] for row in ga4["events"][:20]],
        )
    elif ga4_error:
        lines.append("GA4 event data unavailable this month.")
        lines.append("")
    else:
        lines.append("No tracked lead/contact/tool events found. If enquiries happened, GA4 key events still need checking.")
        lines.append("")

    if "quick_wins" in search:
        lines.append("## Pages To Improve Next")
        lines.append("")
        if search["quick_wins"]:
            table(
                lines,
                ["Impressions", "Clicks", "Pos", "Page", "Query"],
                [
                    [
                        money_number(row.get("impressions", 0)),
                        money_number(row.get("clicks", 0)),
                        f"{row.get('position', 0):.1f}",
                        path_from_url(row["keys"][0]),
                        row["keys"][1],
                    ]
                    for row in search["quick_wins"][:10]
                ],
            )
        else:
            lines.append("No obvious high-impression, low-CTR quick wins from this month's thresholds.")
            lines.append("")

    lines.extend([
        "## Plain-English Read",
        "",
        "- Look first at whether users, page views, Google clicks, and Google impressions are rising month over month.",
        "- Treat impressions as demand: Google is showing the site for those golf topics.",
        "- Treat clicks and engaged page views as proof that people are choosing the site.",
        "- Treat WhatsApp, email, phone, contact, tool and lead events as business intent once GA4 key events are confirmed.",
        "- Use the 'Pages To Improve Next' section for practical site work, not as a generic SEO list.",
        "",
    ])

    return month_start, "\n".join(lines) + "\n"


def save_report(month_start, content):
    DOWNLOADS_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    month_code = month_start.strftime("%Y-%m")
    filename = f"MMG Monthly Traffic Interest Snapshot {month_code}.txt"
    latest = "MMG Monthly Traffic Interest Snapshot Latest.txt"

    download_path = DOWNLOADS_DIR / filename
    latest_path = DOWNLOADS_DIR / latest
    repo_path = OUTPUT_DIR / filename
    repo_latest = OUTPUT_DIR / latest

    for path in [download_path, latest_path, repo_path, repo_latest]:
        path.write_text(content, encoding="utf-8")

    return download_path, latest_path, repo_path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--month", help="Month to report in YYYY-MM format. Defaults to latest completed month.")
    args = parser.parse_args()

    month_start, content = build_snapshot(args.month)
    download_path, latest_path, repo_path = save_report(month_start, content)

    print(f"Saved monthly snapshot: {download_path}")
    print(f"Saved latest copy: {latest_path}")
    print(f"Saved repo copy: {repo_path}")


if __name__ == "__main__":
    main()
