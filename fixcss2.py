import re

path = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src\styles\globals.css'

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

original = text

# Fix html base font size back to 10px (the rem scale was designed around this)
text = re.sub(r'(html\b[^{]*\{[^}]*?)font-size:\s*16px', r'\1font-size: 10px', text, flags=re.DOTALL)

# Fix body text to be readable (1.6rem = 16px with 10px base)
text = re.sub(r'(body\b[^{]*\{[^}]*?)font-size:\s*[\d.]+(?:px|rem)', r'\1font-size: 1.6rem', text, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print('CSS font fix done')

# Now fix the hero top padding/margin
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Find and reduce hero padding-top if it's large
text = re.sub(r'(\.hero\b[^{]*\{[^}]*?)padding-top:\s*[\d.]+(?:px|rem|vh)', r'\1padding-top: 0', text, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print('Hero padding fix done')
