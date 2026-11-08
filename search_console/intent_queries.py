"""
Search Console check for the lessons, coach, trip and experience searches.

    cd C:\\MMG\\cursor\\mrmallorcagolf-real
    python search_console\\intent_queries.py            (last 90 days)
    python search_console\\intent_queries.py --days 28  (shorter window)

Read-only. It lists every page/query row whose query matches one of four intents, with impressions, clicks and
average position, and flags the rows that land on the golf lessons guide (/guides/on-course-coaching-mallorca) or
the group page (/guides/corporate-golf-days-mallorca). Use it to see whether the lessons work is moving.

Baseline before the 2026-11-08 lessons work (90 days to 2026-11-06): "golf lessons mallorca" had 6 impressions at
average position 9.3, landing on the homepage; "pga golf instructor mallorca" was spread over seven pages at
positions 17 to 75. Lessons-intent rows in total: 15 rows, 49 impressions, 1 click.
"""

import argparse
import re
import sys
from datetime import date, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from google.auth.transport.requests import AuthorizedSession  # noqa: E402
from search_console_auth import get_credentials  # noqa: E402
from search_console_report import choose_site, path_from_url, query  # noqa: E402

GROUPS = {
    "LESSONS / TEACHING": r"lesson|teach|tuition|instruct|academy|learn",
    "COACH / PRO": r"coach|\bpro\b|pga|professional|trackman",
    "TRIP / HOLIDAY / PACKAGE": r"trip|holiday|vacation|package|itinerar|tour|break|stay",
    "EXPERIENCE / PRIVATE / GROUP": r"experience|private|luxury|day with|play with|corporate|team|group|cruise|clinic|scramble",
}
WATCHED = ("/guides/on-course-coaching-mallorca", "/guides/corporate-golf-days-mallorca")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--days", type=int, default=90)
    args = parser.parse_args()

    session = AuthorizedSession(get_credentials())
    site, _ = choose_site(session)
    end = date.today() - timedelta(days=2)  # Search Console data lags by about two days
    start = end - timedelta(days=args.days)
    rows = query(session, site, start.isoformat(), end.isoformat(), ["query", "page"], 5000)

    print(f"site={site}  {start}..{end}  query/page rows={len(rows)}")
    for name, pattern in GROUPS.items():
        hits = [r for r in rows if re.search(pattern, r["keys"][0], re.I)]
        hits.sort(key=lambda r: -r["impressions"])
        print(f"\n== {name}: {len(hits)} rows, {sum(r['impressions'] for r in hits):.0f} impressions, {sum(r['clicks'] for r in hits):.0f} clicks")
        for r in hits[:14]:
            page = path_from_url(r["keys"][1])
            flag = "  <== lessons/group page" if page.endswith(WATCHED) or any(w in page for w in WATCHED) else ""
            print(f"  {r['impressions']:>5.0f} imp {r['clicks']:>3.0f} clk pos {r['position']:>5.1f}  {r['keys'][0][:48]:<48} {page[:46]}{flag}")

    watched_rows = [r for r in rows if any(w in path_from_url(r["keys"][1]) for w in WATCHED)]
    print(f"\n== Rows landing on the lessons or group page: {len(watched_rows)}, {sum(r['impressions'] for r in watched_rows):.0f} impressions, {sum(r['clicks'] for r in watched_rows):.0f} clicks")
    for r in sorted(watched_rows, key=lambda r: -r["impressions"])[:20]:
        print(f"  {r['impressions']:>5.0f} imp {r['clicks']:>3.0f} clk pos {r['position']:>5.1f}  {r['keys'][0][:60]}  ->  {path_from_url(r['keys'][1])}")


if __name__ == "__main__":
    main()
