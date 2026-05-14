"""
Targeted fixes:
1. Rake (photo 7): crop starting higher so full rake handle is visible
2. Card: use photo 5 (sweeping fairway + mountains, better composition)
"""
from PIL import Image, ImageOps

SRC = r'C:\Users\andyg\My Drive\Mr Mallorca Golf\Media\My Photos'
BLOG = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\t-golf-calvia-blog'
CARD_PATH = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\t-golf-calvia-card.webp'

# --- Fix 1: Rake ---
# After exif_transpose: 3024 wide x 4032 tall
# The rake handle goes from top-right to bottom-left
# Current save at 1200x1600 is cropping the bottom — the handle tip is at the very bottom
# Fix: keep full height, just resize — do NOT crop at all
img = Image.open(f'{SRC}\\T Golf Calvia7.jpg')
img = ImageOps.exif_transpose(img)
w, h = img.size
print(f'Rake source: {w}x{h}')
# Resize to max 1600px on longest side, no crop
ratio = 1600 / max(w, h)
img = img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)
img.save(f'{BLOG}\\t-golf-calvia-7.webp', 'WEBP', quality=82)
print(f'Rake saved: {img.size}')

# --- Fix 2: Card from photo 5 ---
# Photo 5 after transpose: landscape with fairway, bunker, trees, mountains
img = Image.open(f'{SRC}\\T Golf Calvia5.jpg')
img = ImageOps.exif_transpose(img)
w, h = img.size
print(f'Card source (photo5): {w}x{h}')
# Target 900x386. After transpose photo5 is portrait (3024x4032 -> 3024 wide, 4032 tall)
# Crop a landscape band from the upper portion (sky + mountains + fairway)
# top ~20% to capture the scenic view
target_ratio = 900 / 386
new_h = int(w / target_ratio)
top = int(h * 0.20)
if top + new_h > h:
    top = h - new_h
card = img.crop((0, top, w, top + new_h))
card = card.resize((900, 386), Image.LANCZOS)
card.save(CARD_PATH, 'WEBP', quality=82)
print(f'Card saved: {card.size}')
print('Done.')
