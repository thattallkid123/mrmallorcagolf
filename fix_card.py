from PIL import Image, ImageOps

src = r'C:\Users\andyg\My Drive\Mr Mallorca Golf\Media\My Photos\T Golf Calvia4.jpg'
dst = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\t-golf-calvia-card.webp'

img = Image.open(src)
img = ImageOps.exif_transpose(img)
w, h = img.size
print(f'Source: {w}x{h}')

# Crop: full width, rows 42%-67% of height = fairway + windmill + tower + mountains
top = int(h * 0.42)
bot = int(h * 0.67)
crop = img.crop((0, top, w, bot))
card = crop.resize((900, 386), Image.LANCZOS)
card.save(dst, 'WEBP', quality=82)
print(f'Card saved: {card.size}')
