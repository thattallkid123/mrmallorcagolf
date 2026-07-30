"""
Weekly SEO export: Search Console + GA4 -> CSV files in Downloads/MMG Reports.

Usage:
  python seo_analytics/weekly_search_analytics_export.py --days 7
  python seo_analytics/weekly_search_analytics_export.py --reauth
"""

from __future__ import annotations

import argparse
import csv
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Iterable

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import DateRange, Dimension, Metric, RunReportRequest
from googleapiclient.discovery import build

from google_oauth import TOKEN_FILE, get_credentials

GA4_PROPERTY_ID = "529404785"
SITE_CANDIDATES = [
    "sc-domain:mrmallorcagolf.com",
    "https://www.mrmallorcagolf.com/",
]
DOWNLOADS_ROOT = Path.home() / "Downloads" / "MMG Reports" / "Weekly SEO"


def daterange(days: int) -> tuple[str, str]:
    end = date.today() - timedelta(days=1)
    start = end - timedelta(days=days - 1)
    return start.isoformat(), end.isoformat()


def previous_daterange(days: int) -> tuple[str, str]:
    current_start, _ = daterange(days)
    current_start_date = date.fromisoformat(current_start)
    prev_end = current_start_date - timedelta(days=1)
    prev_start = prev_end - timedelta(days=days - 1)
    return prev_start.isoformat(), prev_end.isoformat()


def write_csv(path: Path, headers: Iterable[str], rows: Iterable[Iterable[object]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        writer.writerow(list(headers))
        writer.writerows(rows)


def build_search_console_service():
    creds = get_credentials()
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def first_available_site(service) -> str:
    site_list = service.sites().list().execute().get("siteEntry", [])
    available = {entry.get("siteUrl") for entry in site_list}
    for candidate in SITE_CANDIDATES:
        if candidate in available:
            return candidate
    if available:
        return sorted(available)[0]
    raise RuntimeError("No Search Console properties available for this account.")


def fetch_gsc_tables(service, site_url: str, start_date: str, end_date: str):
    base = {"startDate": start_date, "endDate": end_date, "rowLimit": 25000}

    q_rows = service.searchanalytics().query(
        siteUrl=site_url,
        body={**base, "dimensions": ["query", "page"]},
    ).execute().get("rows", [])
    query_page = [
        [
            r.get("keys", ["", ""])[0],
            r.get("keys", ["", ""])[1],
            r.get("clicks", 0),
            r.get("impressions", 0),
            r.get("ctr", 0),
            r.get("position", 0),
        ]
        for r in q_rows
    ]

    d_rows = service.searchanalytics().query(
        siteUrl=site_url,
        body={**base, "dimensions": ["date", "device"]},
    ).execute().get("rows", [])
    by_day_device = [
        [
            r.get("keys", ["", ""])[0],
            r.get("keys", ["", ""])[1],
            r.get("clicks", 0),
            r.get("impressions", 0),
            r.get("ctr", 0),
            r.get("position", 0),
        ]
        for r in d_rows
    ]

    return query_page, by_day_device


def build_action_queue(
    current_query_page: list[list[object]],
    previous_query_page: list[list[object]],
) -> list[list[object]]:
    prev_map: dict[tuple[str, str], dict[str, float]] = {}
    for row in previous_query_page:
        query, page, clicks, impressions, ctr, position = row
        key = (str(query), str(page))
        prev_map[key] = {
            "clicks": float(clicks or 0),
            "impressions": float(impressions or 0),
            "ctr": float(ctr or 0),
            "position": float(position or 0),
        }

    opportunities: list[list[object]] = []
    fallback_candidates: list[list[object]] = []
    for row in current_query_page:
        query, page, clicks, impressions, ctr, position = row
        q = str(query)
        p = str(page)
        c_clicks = float(clicks or 0)
        c_impr = float(impressions or 0)
        c_ctr = float(ctr or 0)
        c_pos = float(position or 0)
        prev = prev_map.get((q, p), {"clicks": 0.0, "impressions": 0.0, "ctr": 0.0, "position": 0.0})
        delta_clicks = c_clicks - prev["clicks"]

        if c_impr >= 40 and c_ctr < 0.03:
            opportunities.append(
                [
                    1,
                    "CTR Opportunity",
                    p,
                    q,
                    int(c_clicks),
                    int(prev["clicks"]),
                    int(delta_clicks),
                    int(c_impr),
                    round(c_ctr, 4),
                    round(c_pos, 2),
                    "Rewrite title/meta for stronger intent match, then resubmit URL for recrawl.",
                ]
            )

        if c_impr >= 60 and 4 <= c_pos <= 15:
            opportunities.append(
                [
                    2,
                    "Rank Lift",
                    p,
                    q,
                    int(c_clicks),
                    int(prev["clicks"]),
                    int(delta_clicks),
                    int(c_impr),
                    round(c_ctr, 4),
                    round(c_pos, 2),
                    "Add internal links and expand section depth around this query cluster.",
                ]
            )

        if delta_clicks <= -3 and c_impr >= 30:
            opportunities.append(
                [
                    1,
                    "Click Drop WoW",
                    p,
                    q,
                    int(c_clicks),
                    int(prev["clicks"]),
                    int(delta_clicks),
                    int(c_impr),
                    round(c_ctr, 4),
                    round(c_pos, 2),
                    "Check SERP changes and refresh content snippet/section targeting this query.",
                ]
            )

        if c_impr >= 25:
            fallback_candidates.append(
                [
                    3,
                    "Steady Opportunity",
                    p,
                    q,
                    int(c_clicks),
                    int(prev["clicks"]),
                    int(delta_clicks),
                    int(c_impr),
                    round(c_ctr, 4),
                    round(c_pos, 2),
                    "Refine this page section for the exact query wording and add one internal link.",
                ]
            )

    deduped: dict[tuple[str, str], list[object]] = {}
    for row in opportunities:
        key = (str(row[2]), str(row[3]))
        if key not in deduped:
            deduped[key] = row
            continue
        if int(row[0]) < int(deduped[key][0]):
            deduped[key] = row

    result = list(deduped.values())
    result.sort(key=lambda r: (int(r[0]), int(r[6]), -int(r[7])))

    if len(result) < 12:
        for row in sorted(fallback_candidates, key=lambda r: (-int(r[7]), float(r[8]), float(r[9]))):
            key = (str(row[2]), str(row[3]))
            if key in deduped:
                continue
            deduped[key] = row
            result.append(row)
            if len(result) >= 12:
                break

    return result[:200]


def write_usage_guide(path: Path) -> None:
    guide = """MMG Weekly SEO - How To Use

What this folder contains:
- action_queue.csv: priority task list to execute first.
- gsc_query_page.csv: full query/page performance from Search Console.
- gsc_day_device.csv: daily performance by device.
- ga4_pages.csv: GA4 page traffic context.
- ga4_channels.csv: channel mix context.

Weekly routine (30-45 min):
1) Open action_queue.csv and complete the top 5 rows.
2) For each row, update one of:
   - title/meta (CTR opportunity),
   - section depth + internal links (rank lift),
   - refresh content snippet and intent match (click drop).
3) Track completed changes in your notes with date and URL.
4) Next Monday, compare deltas in action_queue.csv and gsc_query_page.csv.

When action_queue is quiet:
- Sort gsc_query_page.csv by impressions descending.
- Pick rows with low CTR (<3%) or position 4-15.
- Create 3 focused edits only, then recheck next week.

AI workflow (optional, faster):
- Paste top 30 rows from action_queue.csv into ChatGPT/Claude.
- Ask for:
  1) exact title/meta rewrite options,
  2) internal link anchor suggestions,
  3) section copy improvements aligned to query intent.
"""
    path.write_text(guide, encoding="utf-8")


def fetch_ga4_tables(start_date: str, end_date: str):
    creds = get_credentials()
    client = BetaAnalyticsDataClient(credentials=creds)

    pages_req = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name="pagePath")],
        metrics=[Metric(name="screenPageViews"), Metric(name="sessions"), Metric(name="activeUsers")],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
        limit=10000,
    )
    pages_res = client.run_report(pages_req)
    pages_rows = [
        [
            r.dimension_values[0].value,
            int(float(r.metric_values[0].value)),
            int(float(r.metric_values[1].value)),
            int(float(r.metric_values[2].value)),
        ]
        for r in pages_res.rows
    ]

    channel_req = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name="sessionDefaultChannelGroup")],
        metrics=[Metric(name="sessions"), Metric(name="activeUsers"), Metric(name="newUsers")],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
        limit=100,
    )
    channel_res = client.run_report(channel_req)
    channel_rows = [
        [
            r.dimension_values[0].value,
            int(float(r.metric_values[0].value)),
            int(float(r.metric_values[1].value)),
            int(float(r.metric_values[2].value)),
        ]
        for r in channel_res.rows
    ]

    return pages_rows, channel_rows


def export_week(days: int) -> Path:
    start_date, end_date = daterange(days)
    prev_start_date, prev_end_date = previous_daterange(days)
    stamp = datetime.now().strftime("%Y-%m-%d")
    out_dir = DOWNLOADS_ROOT / stamp
    out_dir.mkdir(parents=True, exist_ok=True)

    gsc = build_search_console_service()
    site_url = first_available_site(gsc)
    gsc_query_page, gsc_day_device = fetch_gsc_tables(gsc, site_url, start_date, end_date)
    prev_query_page, _ = fetch_gsc_tables(gsc, site_url, prev_start_date, prev_end_date)

    ga4_pages, ga4_channels = fetch_ga4_tables(start_date, end_date)
    action_queue = build_action_queue(gsc_query_page, prev_query_page)

    write_csv(
        out_dir / "gsc_query_page.csv",
        ["query", "page", "clicks", "impressions", "ctr", "position"],
        gsc_query_page,
    )
    write_csv(
        out_dir / "gsc_day_device.csv",
        ["date", "device", "clicks", "impressions", "ctr", "position"],
        gsc_day_device,
    )
    write_csv(
        out_dir / "ga4_pages.csv",
        ["pagePath", "screenPageViews", "sessions", "activeUsers"],
        ga4_pages,
    )
    write_csv(
        out_dir / "ga4_channels.csv",
        ["channelGroup", "sessions", "activeUsers", "newUsers"],
        ga4_channels,
    )
    write_csv(
        out_dir / "export_meta.csv",
        ["key", "value"],
        [
            ["generated_at", datetime.now().isoformat(timespec="seconds")],
            ["start_date", start_date],
            ["end_date", end_date],
            ["gsc_property", site_url],
            ["ga4_property_id", GA4_PROPERTY_ID],
            ["days", str(days)],
            ["previous_start_date", prev_start_date],
            ["previous_end_date", prev_end_date],
        ],
    )
    write_csv(
        out_dir / "action_queue.csv",
        ["priority", "opportunity_type", "page", "query", "current_clicks", "previous_clicks", "delta_clicks", "impressions", "ctr", "position", "recommended_action"],
        action_queue,
    )
    write_usage_guide(out_dir / "HOW_TO_USE_WEEKLY_SEO_EXPORT.txt")
    return out_dir


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--days", type=int, default=7)
    parser.add_argument("--reauth", action="store_true")
    args = parser.parse_args()

    if args.reauth and TOKEN_FILE.exists():
        TOKEN_FILE.unlink()
        print(f"Removed token: {TOKEN_FILE}")

    out_dir = export_week(args.days)
    print(f"Weekly SEO exports written to: {out_dir}")


if __name__ == "__main__":
    main()
