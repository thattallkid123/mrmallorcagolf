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
import datetime
import json
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
LOCAL_INTENT_MARKERS = ["near me", "in de buurt", "cerca de mi", "cerca", "in der nähe"]

# Rough published organic CTR-by-position benchmarks (industry aggregate
# studies, e.g. Backlinko/Advanced Web Ranking). Position-adjusted rather
# than a single flat rate - a flat 5% (this script's number through
# 2026-09-05, calibrated for position <=10 per its own since-removed
# comment) overstated the "expected" clicks for anything ranking below
# ~10 by 3-4x. Confirmed 2026-09-05: /golf-courses at position 14.6 was
# flagged "6 clicks vs ~38 expected" under the flat benchmark; the
# realistic expected figure at that position is ~10 clicks - a real but
# much smaller gap, and one where climbing rank (not another copy
# rewrite) is the actual lever. Interpolated linearly between the nearest
# two anchor points; positions beyond 20 use the pos-20 floor.
EXPECTED_CTR_BY_POSITION = {
    1: 0.28, 2: 0.15, 3: 0.11, 4: 0.08, 5: 0.07, 6: 0.05, 7: 0.04, 8: 0.03,
    9: 0.028, 10: 0.025, 11: 0.02, 12: 0.018, 13: 0.016, 14: 0.014, 15: 0.013,
    20: 0.007,
}


def expected_ctr_for_position(position):
    anchors = sorted(EXPECTED_CTR_BY_POSITION)
    if position <= anchors[0]:
        return EXPECTED_CTR_BY_POSITION[anchors[0]]
    if position >= anchors[-1]:
        return EXPECTED_CTR_BY_POSITION[anchors[-1]]
    for lo, hi in zip(anchors, anchors[1:]):
        if lo <= position <= hi:
            span = hi - lo
            frac = (position - lo) / span if span else 0
            return EXPECTED_CTR_BY_POSITION[lo] + (EXPECTED_CTR_BY_POSITION[hi] - EXPECTED_CTR_BY_POSITION[lo]) * frac
    return EXPECTED_CTR_BY_POSITION[anchors[-1]]


EDIT_LOG_PATH = Path(__file__).resolve().parent / "ctr-edit-log.json"
TOO_SOON_DAYS = 21  # GSC needs real accumulated impressions before a CTR change is trustworthy


def load_edit_log():
    if not EDIT_LOG_PATH.exists():
        return {}
    return json.loads(EDIT_LOG_PATH.read_text(encoding="utf-8")).get("pages", {})


def edit_history_for(page, edit_log):
    """Return (days_since_last_edit, sorted edits list) for a page, or (None, []) if never logged."""
    entry = edit_log.get(page)
    if not entry or not entry.get("edits"):
        return None, []
    edits = sorted(entry["edits"], key=lambda e: e["date"])
    last = datetime.date.fromisoformat(edits[-1]["date"])
    days_since = (datetime.date.today() - last).days
    return days_since, edits


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
        expected = r["impressions"] * expected_ctr_for_position(r["position"])
        if r["clicks"] < expected * args.threshold:
            flagged.append(r)

    if not flagged:
        print(f"✅ check:ctr-watch — no pages with impr>={MIN_IMPRESSIONS}, pos<={MAX_POSITION} falling below {args.threshold:.0%} of expected CTR over the last {args.days} days.")
        return

    flagged.sort(key=lambda r: r["impressions"], reverse=True)

    query_rows = query(session, site, start, end, ["page", "query"], row_limit=1000)
    edit_log = load_edit_log()

    print(f"⚠️  check:ctr-watch — {len(flagged)} page(s) with real impression volume clicking far below expectation:\n")
    too_soon = []
    for r in flagged:
        page = r["keys"][0].replace("https://www.mrmallorcagolf.com", "").replace("https://mrmallorcagolf.com", "")
        expected = r["impressions"] * expected_ctr_for_position(r["position"])
        ctr = r["clicks"] / r["impressions"] * 100
        print(f"  {page}")
        print(f"    impr={r['impressions']}  clicks={r['clicks']}  pos={r['position']:.1f}  CTR={ctr:.1f}%  (expected ~{expected:.0f} clicks)")

        days_since, edits = edit_history_for(page, edit_log)
        if edits:
            print(f"    Edit history ({len(edits)} prior change(s)):")
            for e in edits:
                print(f"      {e['date']} ({e['commit']}): {e['summary']}")
            if days_since is not None and days_since < TOO_SOON_DAYS:
                print(f"    ⏳ TOO SOON TO JUDGE — last edited {days_since}d ago (needs {TOO_SOON_DAYS}d+ of impressions before CTR here means anything). Don't re-edit yet.")
                too_soon.append(page)
            else:
                print(f"    Last edited {days_since}d ago — old enough to judge. Still below expectation, so pick a genuinely different angle from the ones above, not a variant of one already tried.")
        else:
            print("    No logged prior edits — first real attempt on this page.")

        top_queries = sorted(
            [q for q in query_rows if q["keys"][0].replace("https://www.mrmallorcagolf.com", "").replace("https://mrmallorcagolf.com", "") == page],
            key=lambda q: q["impressions"], reverse=True,
        )[:3]
        for q in top_queries:
            tag = "  <- local-pack intent, not a copy fix" if is_local_intent(q["keys"][1]) else ""
            print(f"      \"{q['keys'][1]}\" impr={q['impressions']} pos={q['position']:.1f}{tag}")
        print()

    if too_soon:
        print(f"{len(too_soon)} page(s) flagged above are too recently edited to act on — listed for visibility only, not as new action items.")
    print("Not auto-fixed: title/description rewrites are public copy, read the voice guide first (CLAUDE.md Public Copy Preflight).")
    print("If every top query on a page is local-intent, this is a Local SEO / Google Business Profile gap, not a metadata gap.")
    print(f"After making a CTR-motivated title/meta edit, log it in {EDIT_LOG_PATH.name} (date, commit, one-line summary) so future runs know it's been tried.")


if __name__ == "__main__":
    main()
