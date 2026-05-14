from PIL import Image, ImageOps

src = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\courses\t-golf-calvia.webp'
dst = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\t-golf-calvia-card.webp'

img = Image.open(src)
img = ImageOps.exif_transpose(img)
w, h = img.size
print(f'Source: {w}x{h}')

# Already landscape — crop to 900x386 ratio, keep full width, centre vertically
target_ratio = 900 / 386
new_h = int(w / target_ratio)
top = (h - new_h) // 2
if top < 0: top = 0
if top + new_h > h: new_h = h - top
card = img.crop((0, top, w, top + new_h))
card = card.resize((900, 386), Image.LANCZOS)
card.save(dst, 'WEBP', quality=88)
print(f'Card saved: {card.size}')
