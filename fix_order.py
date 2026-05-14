"""
Reorder English liveGuides in guides-content.js
New order: alcanada, son-gual, t-golf-calvia, son-muntaner, santa-ponsa-1, golf-andratx, son-termes
(a-day-at-son-gual and articles stay in place after)
Run: python fix_order.py
"""

path = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\src\lib\guides-content.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# The 7 review slugs in their NEW desired order
new_order = [
    'alcanada-review',
    'son-gual-review',
    't-golf-calvia-review',
    'son-muntaner-review',
    'santa-ponsa-1-review',
    'golf-andratx-review',
    'son-termes-review',
]

# Extract each slug's full object block from the English liveGuides
# Each block starts at "      {\n        slug: '<slug>'," and ends at the closing "      },"
import re

def extract_block(text, slug):
    # Find the block that contains this slug in the English section (first occurrence)
    pattern = r'(      \{\n        slug: \'' + re.escape(slug) + r'\'.*?      \},\n)'
    m = re.search(pattern, text, re.DOTALL)
    if not m:
        raise ValueError(f"Could not find block for slug: {slug}")
    return m.group(1)

blocks = {slug: extract_block(content, slug) for slug in new_order}

# Find the start/end of the English review section (before a-day-at-son-gual)
# Strategy: replace the 7 review blocks in old order with them in new order
# Old order in file: son-muntaner, son-gual, alcanada, santa-ponsa-1, son-termes, golf-andratx, t-golf-calvia

old_order = [
    'son-muntaner-review',
    'son-gual-review',
    'alcanada-review',
    'santa-ponsa-1-review',
    'son-termes-review',
    'golf-andratx-review',
    't-golf-calvia-review',
]

# Build old concatenated block and new concatenated block
old_combined = ''.join(extract_block(content, slug) for slug in old_order)
new_combined = ''.join(blocks[slug] for slug in new_order)

if old_combined not in content:
    raise ValueError("Could not find old combined block in file — check ordering")

new_content = content.replace(old_combined, new_combined, 1)  # only replace English (first occurrence)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Order updated successfully.")
print("New order: " + ", ".join(new_order))
