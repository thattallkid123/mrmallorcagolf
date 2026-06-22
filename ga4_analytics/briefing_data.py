"""
Structured GA4 data for the MMG weekly briefing.

This is intentionally JSON-only so local tools can turn analytics into a
readable action report without scraping the text GA4 report.
"""

import argparse
import json
from datetime import date, timedelta

from google.analytics.data_v1beta.types import DateRange, Dimension, Metric, RunReportRequest

from ga4_report import PROPERTY_ID, get_client


TRACKING_START = "2024-01-01"


def iso(day):
    return day.isoformat()


def ranges():
    today = date.today()
    return {
        "week": (iso(today - timedelta(days=7)), iso(today)),
        "previous_week": (iso(today - timedelta(days=14)), iso(today - timedelta(days=7))),
        "month": (iso(today - timedelta(days=30)), iso(today)),
        "previous_month": (iso(today - timedelta(days=60)), iso(today - timedelta(days=30))),
        "total": (TRACKING_START, iso(today)),
    }


def run(client, dimensions, metrics, start_date, end_date, limit=20):
    request = RunReportRequest(
        property=f"properties/{PROPERTY_ID}",
        dimensions=[Dimension(name=name) for name in dimensions],
        metrics=[Metric(name=name) for name in metrics],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
        limit=limit,
    )
    return client.run_report(request)


def aggregate(client, start_date, end_date):
    response = run(
        client,
        [],
        ["sessions", "activeUsers", "newUsers", "screenPageViews", "averageSessionDuration", "engagementRate"],
        start_date,
        end_date,
        limit=1,
    )
    if not response.rows:
        return {
            "sessions": 0,
            "activeUsers": 0,
            "newUsers": 0,
            "views": 0,
            "averageSessionDuration": 0,
            "engagementRate": 0,
        }
    values = response.rows[0].metric_values
    return {
        "sessions": int(float(values[0].value or 0)),
        "activeUsers": int(float(values[1].value or 0)),
        "newUsers": int(float(values[2].value or 0)),
        "views": int(float(values[3].value or 0)),
        "averageSessionDuration": float(values[4].value or 0),
        "engagementRate": float(values[5].value or 0),
    }


def table(client, dimensions, metrics, start_date, end_date, limit=10):
    response = run(client, dimensions, metrics, start_date, end_date, limit=limit)
    rows = []
    for row in response.rows:
        rows.append({
            "dimensions": [value.value for value in row.dimension_values],
            "metrics": [value.value for value in row.metric_values],
        })
    return rows


def build():
    client = get_client()
    period_ranges = ranges()
    week_start, week_end = period_ranges["week"]
    month_start, month_end = period_ranges["month"]

    data = {
        "trackingStart": TRACKING_START,
        "ranges": period_ranges,
        "summary": {
            name: aggregate(client, start, end)
            for name, (start, end) in period_ranges.items()
        },
        "week": {
            "topPages": table(
                client,
                ["pagePath", "pageTitle"],
                ["screenPageViews", "activeUsers", "averageSessionDuration"],
                week_start,
                week_end,
                limit=20,
            ),
            "sources": table(
                client,
                ["sessionDefaultChannelGroup"],
                ["sessions", "activeUsers", "newUsers"],
                week_start,
                week_end,
                limit=12,
            ),
            "countries": table(
                client,
                ["country"],
                ["sessions", "activeUsers"],
                week_start,
                week_end,
                limit=12,
            ),
            "events": table(
                client,
                ["eventName"],
                ["eventCount"],
                week_start,
                week_end,
                limit=50,
            ),
        },
        "month": {
            "topPages": table(
                client,
                ["pagePath", "pageTitle"],
                ["screenPageViews", "activeUsers", "averageSessionDuration"],
                month_start,
                month_end,
                limit=20,
            )
        },
    }
    return data


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    data = build()
    if args.json:
        print(json.dumps(data, indent=2))
    else:
        print(json.dumps(data, indent=2))


if __name__ == "__main__":
    main()
