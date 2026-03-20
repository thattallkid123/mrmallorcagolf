from pathlib import Path

files = [
    "src/app/de/guides/page.jsx",
    "src/app/es/guides/page.jsx",
    "src/app/fr/guides/page.jsx",
    "src/app/zh/guides/page.jsx",
    "src/app/sv/guides/page.jsx",
    "src/app/nl/guides/page.jsx",
    "src/app/de/guides/son-gual-review/page.jsx",
    "src/app/es/guides/son-gual-review/page.jsx",
    "src/app/fr/guides/son-gual-review/page.jsx",
    "src/app/zh/guides/son-gual-review/page.jsx",
    "src/app/sv/guides/son-gual-review/page.jsx",
    "src/app/nl/guides/son-gual-review/page.jsx",
]

def repair_text(text: str) -> str:
    current = text

    for _ in range(3):
        try:
            new = current.encode("latin1", errors="ignore").decode("utf-8", errors="ignore")
        except Exception:
            break
        if new == current:
            break
        current = new

    replacements = {
        "â€”": "—",
        "â€“": "–",
        "â†’": "→",
        "â˜…": "★",
        "â‚¬": "€",
        "Â¿": "¿",
        "Â¡": "¡",
        "Â ": "",
        "Ã¡": "á",
        "Ã©": "é",
        "Ã­": "í",
        "Ã³": "ó",
        "Ãº": "ú",
        "Ã±": "ñ",
    }

    for bad, good in replacements.items():
        current = current.replace(bad, good)

    return current

for file in files:
    path = Path(file)
    if not path.exists():
        continue

    text = path.read_text(encoding="utf-8", errors="ignore")
    fixed = repair_text(text)
    path.write_text(fixed, encoding="utf-8", newline="\n")

print("Done.")
