"""
CTR watchdog for Mr Mallorca Golf.

Finds pages that rank decently but get clicked far less than expected -
the exact "good position, nobody clicks" gap the 2026-08-14 CTR review
found and fixed for the worst offenders. Metadata rewrites decay: new
guides ship, queries drift, competitors change their snippets. This is
meant to catch the next round before it needs a full manual pull again.

Deliberately does NOT auto-fix anything - title/description rewrites are
public copy and go through the voice guide (see CLAUDE.md Public Copy
Preflight) and human judgment, same as every other content change. This
only flags.

Also flags the "near me" / local-intent pattern discovered in the same
review: those queries often lose the click to Google's Local Pack, which
no title rewrite fixes - a real Local SEO gap, not a copy problem. This
script tells the two apart so effort doesn't get wasted rewriting
metadata against a page-type mismatch.

Run: python search_console/check_ctr_watch.py [--days 28] [--threshold 0.4]
"""

import argparse
import sys
from pathlib import Path

# Windows' console defaults to cp1252, which can't encode the checkmark/
# warning glyphs below and crashes with UnicodeEncodeError. Force UTF-8
# rather than stripping the glyphs - same fix as elsewhere in this repo
# for Windows console encoding gotchas.
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

sys.path.insert(0, str(Path(__file__).resolve().parent))
from search_console_report import get_session, choose_site, date_range, query  # noqa: E402

MIN_IMPRESSIONS = 40  # below this, CTR is too noisy to act on
MAX_POSITION = 15  # below this rank, low CTR is a position problem, not a copy problem
EXPECTED_CTR_AT_GOOD_POSITION = 0.05  # rough benchmark for position <= 10
LOCAL_INTENT_MARKERS = ["near me", "in de buurt", "cerca de mi", "cerca", "in der nähe"]


def is_local_intent(q):
    ql = q.lower()
    return any(marker in ql for marker in LOCAL_INTENT_MARKERS)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--days", type=int, default=28)
    parser.add_argument(
        "--threshold",
        type=float,
        default=0.4,
        help="flag if actual clicks < threshold * expected clicks (default 0.4)",
    )
    args = parser.parse_args()

    session = get_session()
    site, _ = choose_site(session)
    start, end = date_range(args.days)

    page_rows = query(session, site, start, end, ["page"], row_limit=250)
    page_rows = [r for r in page_rows if r["impressions"] >= MIN_IMPRESSIONS and r["position"] <= MAX_POSITION]

    flagged = []
    for r in page_rows:
        expected = r["impressions"] * EXPECTED_CTR_AT_GOOD_POSITION
        if r["clicks"] < expected * args.threshold:
            flagged.append(r)

    if not flagged:
        print(f"✅ check:ctr-watch — no pages with impr>={MIN_IMPRESSIONS}, pos<={MAX_POSITION} falling below {args.threshold:.0%} of expected CTR over the last {args.days} days.")
        return

    flagged.sort(key=lambda r: r["impressions"], reverse=True)

    query_rows = query(session, site, start, end, ["page", "query"], row_limit=1000)

    print(f"⚠️  check:ctr-watch — {len(flagged)} page(s) with real impression volume clicking far below expectation:\n")
    for r in flagged:
        page = r["keys"][0].replace("https://www.mrmallorcagolf.com", "").replace("https://mrmallorcagolf.com", "")
        expected = r["impressions"] * EXPECTED_CTR_AT_GOOD_POSITION
        ctr = r["clicks"] / r["impressions"] * 100
        print(f"  {page}")
        print(f"    impr={r['impressions']}  clicks={r['clicks']}  pos={r['position']:.1f}  CTR={ctr:.1f}%  (expected ~{expected:.0f} clicks)")

        top_queries = sorted(
            [q for q in query_rows if q["keys"][0].replace("https://www.mrmallorcagolf.com", "").replace("https://mrmallorcagolf.com", "") == page],
            key=lambda q: q["impressions"], reverse=True,
        )[:3]
        for q in top_queries:
            tag = "  <- local-pack intent, not a copy fix" if is_local_intent(q["keys"][1]) else ""
            print(f"      \"{q['keys'][1]}\" impr={q['impressions']} pos={q['position']:.1f}{tag}")
        print()

    print("Not auto-fixed: title/description rewrites are public copy, read the voice guide first (CLAUDE.md Public Copy Preflight).")
    print("If every top query on a page is local-intent, this is a Local SEO / Google Business Profile gap, not a metadata gap.")


if __name__ == "__main__":
    main()
