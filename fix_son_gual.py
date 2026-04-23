"""
Re-crop client-son-gual-banner.webp to show full faces.
The original Son Gual selfie (client-son-gual.webp) is 935x1247 portrait.
Previous crop was rows 100-780 = 680px tall (too low start, cut top of heads).
New crop: rows 0-680 (start from very top, keep same height) — shows full heads.
Run from: C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
"""
from PIL import Image, ImageOps
import os

src = 'public/images/client-son-gual.webp'
dst = 'public/images/client-son-gual-banner.webp'

img = Image.open(src)
img = ImageOps.exif_transpose(img)
print(f'Original size: {img.size}')  # expected 935x1247

# Crop from row 0 to row 680 — keeps heads at top edge
cropped = img.crop((0, 0, 935, 680))
print(f'Cropped size: {cropped.size}')

cropped.save(dst, 'webp', quality=85)
print(f'Saved to {dst}')
