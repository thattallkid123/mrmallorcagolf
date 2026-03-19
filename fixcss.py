path = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src\styles\globals.css'

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

original = text

# Fix the accidental 1610px introduced last night
text = text.replace('1610px', '10px')

# The real fix: html base font-size 10px -> 16px
# This makes 1rem = 16px, matching browser default and the live site
import re
text = re.sub(r'(html\s*\{[^}]*?)font-size:\s*10px', r'\1font-size: 16px', text, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print('Done')
