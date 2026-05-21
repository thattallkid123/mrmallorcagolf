# MMG Search Console Tools

Local PC tools for Search Console reports and URL inspection.

## One-Time Login

```powershell
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
python search_console\search_console_auth.py
```

This uses `ga4_analytics\ga4_oauth_client.json` and saves a separate token at:

```text
search_console\search_console_token.json
```

## Weekly Search Report

```powershell
python search_console\search_console_report.py --days 28
```

Latest copies are written to Downloads:

```text
C:\Users\andyg\Downloads\MMG-Search-Console-latest.txt
C:\Users\andyg\Downloads\MMG-Search-Console-latest.csv
```

## URL Indexing Report

```powershell
python search_console\url_indexing_report.py --limit 25
```

Latest copies are written to Downloads:

```text
C:\Users\andyg\Downloads\MMG-URL-Indexing-latest.txt
C:\Users\andyg\Downloads\MMG-URL-Indexing-latest.csv
```

Notes:

- The URL Inspection API diagnoses indexing state.
- Normal website pages cannot usually be submitted for indexing through the API.
- Use the report to find causes, then fix the site or request indexing manually in Search Console.
