"""
GA4 Analytics Report for Mr Mallorca Golf
Property ID: 529404785

Usage:
  python ga4_analytics/ga4_report.py                    # last 30 days overview
  python ga4_analytics/ga4_report.py --days 7           # last 7 days
  python ga4_analytics/ga4_report.py --days 90          # last 90 days
  python ga4_analytics/ga4_report.py --report pages     # top pages only
  python ga4_analytics/ga4_report.py --report sources   # traffic sources only
  python ga4_analytics/ga4_report.py --report all       # full report (default)

Setup:
  1. pip install google-analytics-data google-auth google-auth-oauthlib
  2. Create an OAuth client ID (see README in this folder)
  3. Place as ga4_analytics/ga4_oauth_client.json
  4. Run: python ga4_analytics/ga4_auth.py  (one time, opens browser)
"""

import argparse
import os
from datetime import date, timedelta

PROPERTY_ID = "529404785"
STRATEGIC_PAGES = [
    ("/", "Homepage"),
    ("/golf-courses", "Golf courses hub"),
    ("/plan-your-trip", "Plan your trip"),
    ("/play-with-a-pro", "Play with a pro"),
    ("/signature-day", "Signature Day"),
    ("/contact", "Contact"),
    ("/coaching", "Coaching"),
]


def get_client():
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    import sys, os
    sys.path.insert(0, os.path.dirname(__file__))
    from ga4_auth import get_credentials

    credentials = get_credentials()
    return BetaAnalyticsDataClient(credentials=credentials, transport="rest")


def date_range(days):
    end = date.today()
    start = end - timedelta(days=days)
    return start.strftime("%Y-%m-%d"), end.strftime("%Y-%m-%d")


def run_report(client, dimensions, metrics, start_date, end_date, limit=20):
    from google.analytics.data_v1beta.types import (
        DateRange, Dimension, Metric, RunReportRequest
    )

    request = RunReportRequest(
        property=f"properties/{PROPERTY_ID}",
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
        limit=limit,
    )
    return client.run_report(request)


def print_section(title):
    print(f"\n{'='*60}")
    print(f"  {title}")
    print(f"{'='*60}")


def report_overview(client, start_date, end_date):
    print_section("OVERVIEW")
    response = run_report(
        client,
        dimensions=["date"],
        metrics=["sessions", "activeUsers", "newUsers", "bounceRate", "averageSessionDuration"],
        start_date=start_date,
        end_date=end_date,
        limit=1000,
    )

    total_sessions = 0
    total_users = 0
    total_new = 0

    for row in response.rows:
        total_sessions += int(row.metric_values[0].value)
        total_users += int(row.metric_values[1].value)
        total_new += int(row.metric_values[2].value)

    # Get avg bounce rate and session duration from a single aggregated call
    agg = run_report(
        client,
        dimensions=["country"],
        metrics=["sessions", "activeUsers", "newUsers", "bounceRate", "averageSessionDuration"],
        start_date=start_date,
        end_date=end_date,
        limit=1,
    )

    print(f"  Sessions:      {total_sessions:,}")
    print(f"  Users:         {total_users:,}")
    print(f"  New users:     {total_new:,}")
    if agg.rows:
        bounce = float(agg.rows[0].metric_values[3].value) * 100
        duration = float(agg.rows[0].metric_values[4].value)
        mins = int(duration // 60)
        secs = int(duration % 60)
        print(f"  Avg session:   {mins}m {secs}s")


def report_top_pages(client, start_date, end_date):
    print_section("TOP PAGES")
    response = run_report(
        client,
        dimensions=["pagePath", "pageTitle"],
        metrics=["screenPageViews", "activeUsers", "averageSessionDuration"],
        start_date=start_date,
        end_date=end_date,
        limit=15,
    )

    print(f"  {'Views':>6}  {'Users':>5}  {'Avg time':>8}  Page")
    print(f"  {'-'*6}  {'-'*5}  {'-'*8}  {'-'*40}")
    for row in response.rows:
        path = row.dimension_values[0].value
        views = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)
        duration = float(row.metric_values[2].value)
        mins = int(duration // 60)
        secs = int(duration % 60)
        print(f"  {views:>6,}  {users:>5,}  {mins}m {secs:02d}s    {path}")


def report_strategic_pages(client, start_date, end_date):
    print_section("STRATEGIC PAGES")
    response = run_report(
        client,
        dimensions=["pagePath"],
        metrics=["screenPageViews", "activeUsers", "averageSessionDuration"],
        start_date=start_date,
        end_date=end_date,
        limit=100,
    )

    rows_by_path = {}
    for row in response.rows:
        rows_by_path[row.dimension_values[0].value] = row

    print(f"  {'Views':>6}  {'Users':>5}  {'Avg time':>8}  Page")
    print(f"  {'-'*6}  {'-'*5}  {'-'*8}  {'-'*40}")
    for path, label in STRATEGIC_PAGES:
        row = rows_by_path.get(path)
        if row:
            views = int(row.metric_values[0].value)
            users = int(row.metric_values[1].value)
            duration = float(row.metric_values[2].value)
            mins = int(duration // 60)
            secs = int(duration % 60)
            print(f"  {views:>6,}  {users:>5,}  {mins}m {secs:02d}s    {path}  ({label})")
        else:
            print(f"  {'-':>6}  {'-':>5}  {'-':>8}  {path}  ({label})")


def report_traffic_sources(client, start_date, end_date):
    print_section("TRAFFIC SOURCES")
    response = run_report(
        client,
        dimensions=["sessionDefaultChannelGroup"],
        metrics=["sessions", "activeUsers", "newUsers"],
        start_date=start_date,
        end_date=end_date,
        limit=10,
    )

    print(f"  {'Sessions':>8}  {'Users':>6}  {'New':>6}  Source")
    print(f"  {'-'*8}  {'-'*6}  {'-'*6}  {'-'*30}")
    for row in response.rows:
        source = row.dimension_values[0].value
        sessions = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)
        new_users = int(row.metric_values[2].value)
        print(f"  {sessions:>8,}  {users:>6,}  {new_users:>6,}  {source}")


def report_search_terms(client, start_date, end_date):
    print_section("ORGANIC SEARCH TERMS (from GA4 - limited; use Search Console for full data)")
    response = run_report(
        client,
        dimensions=["sessionGoogleAdsKeyword", "firstUserSourceMedium"],
        metrics=["sessions"],
        start_date=start_date,
        end_date=end_date,
        limit=15,
    )

    if not response.rows:
        print("  No search term data available (most is (not provided))")
        return

    print(f"  {'Sessions':>8}  Keyword")
    print(f"  {'-'*8}  {'-'*40}")
    for row in response.rows:
        keyword = row.dimension_values[0].value
        if keyword and keyword != "(not set)":
            sessions = int(row.metric_values[0].value)
            print(f"  {sessions:>8,}  {keyword}")


def report_countries(client, start_date, end_date):
    print_section("TOP COUNTRIES")
    response = run_report(
        client,
        dimensions=["country"],
        metrics=["sessions", "activeUsers"],
        start_date=start_date,
        end_date=end_date,
        limit=10,
    )

    print(f"  {'Sessions':>8}  {'Users':>6}  Country")
    print(f"  {'-'*8}  {'-'*6}  {'-'*25}")
    for row in response.rows:
        country = row.dimension_values[0].value
        sessions = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)
        print(f"  {sessions:>8,}  {users:>6,}  {country}")


def report_contact_events(client, start_date, end_date):
    print_section("CONTACT / CONVERSION EVENTS")
    response = run_report(
        client,
        dimensions=["eventName"],
        metrics=["eventCount"],
        start_date=start_date,
        end_date=end_date,
        limit=20,
    )

    contact_events = [
        r for r in response.rows
        if any(k in r.dimension_values[0].value.lower()
               for k in ["contact", "form", "submit", "lead", "click", "phone", "email", "whatsapp"])
    ]

    if not contact_events:
        print("  No contact/conversion events found.")
        print("  Tip: set up GA4 event tracking on your contact form submit.")
        return

    print(f"  {'Count':>6}  Event")
    print(f"  {'-'*6}  {'-'*40}")
    for row in contact_events:
        name = row.dimension_values[0].value
        count = int(row.metric_values[0].value)
        print(f"  {count:>6,}  {name}")


def main():
    parser = argparse.ArgumentParser(description="GA4 report for Mr Mallorca Golf")
    parser.add_argument("--days", type=int, default=30, help="Number of days to report on (default: 30)")
    parser.add_argument("--report", choices=["all", "pages", "sources", "countries", "events", "search"],
                        default="all", help="Which report to run")
    args = parser.parse_args()

    start_date, end_date = date_range(args.days)

    print(f"\nMr Mallorca Golf - GA4 Report")
    print(f"Period: {start_date} to {end_date} ({args.days} days)")

    try:
        client = get_client()
    except FileNotFoundError as e:
        print(f"\nERROR: {e}")
        return
    except Exception as e:
        print(f"\nERROR connecting to GA4: {e}")
        return

    if args.report in ("all", "overview"):
        report_overview(client, start_date, end_date)
    if args.report in ("all", "pages"):
        report_top_pages(client, start_date, end_date)
        report_strategic_pages(client, start_date, end_date)
    if args.report in ("all", "sources"):
        report_traffic_sources(client, start_date, end_date)
    if args.report in ("all", "countries"):
        report_countries(client, start_date, end_date)
    if args.report in ("all", "events"):
        report_contact_events(client, start_date, end_date)
    if args.report in ("all", "search"):
        report_search_terms(client, start_date, end_date)

    print(f"\n{'='*60}\n")


if __name__ == "__main__":
    main()
