"""
Fix T Golf Calvia card image — use photo 4 (fairway + windmill + Tramuntana mountains)
Run: python fix_photos.py
"""
from PIL import Image, ImageOps

src = r'C:\Users\andyg\My Drive\Mr Mallorca Golf\Media\My Photos\T Golf Calvia4.jpg'
dst = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\t-golf-calvia-card.webp'

img = Image.open(src)
img = ImageOps.exif_transpose(img)
w, h = img.size
print(f"Source size after rotation: {w}x{h}")

# Card target: 900x386 landscape
# After rotation this is a landscape shot — crop centre strip
target_ratio = 900 / 386
new_h = int(w / target_ratio)

# Position: go about 35% down to catch fairway + mountains nicely, skip excess sky
top = int(h * 0.30)
if top + new_h > h:
    top = h - new_h

card = img.crop((0, top, w, top + new_h))
card = card.resize((900, 386), Image.LANCZOS)
card.save(dst, 'WEBP', quality=82)
print(f"Card saved: {card.size} -> {dst}")
