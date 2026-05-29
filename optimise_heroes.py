from PIL import Image, ImageOps

# pwap-hero-client.webp: 1601x1200, 511KB -> target ~180KB, resize to 1400px wide
img = Image.open('public/images/pwap-hero-client.webp')
img = ImageOps.exif_transpose(img)
img.thumbnail((1400, 1400), Image.LANCZOS)
img.save('public/images/pwap-hero-client.webp', 'webp', quality=78)
print(f'pwap-hero-client: {img.size}')

# pwap-hero-mandarin.webp: 2200x1467, 402KB -> target ~160KB, resize to 1600px wide
img = Image.open('public/images/pwap-hero-mandarin.webp')
img = ImageOps.exif_transpose(img)
img.thumbnail((1600, 1600), Image.LANCZOS)
img.save('public/images/pwap-hero-mandarin.webp', 'webp', quality=78)
print(f'pwap-hero-mandarin: {img.size}')

# client-alcanada.webp: 1200x1320, 166KB -> fine for inline but could compress more
img = Image.open('public/images/client-alcanada.webp')
img = ImageOps.exif_transpose(img)
img.save('public/images/client-alcanada.webp', 'webp', quality=80)
print(f'client-alcanada: {img.size}')

import os
for name in ['pwap-hero-client.webp','pwap-hero-mandarin.webp','client-alcanada.webp']:
    kb = os.path.getsize(f'public/images/{name}') // 1024
    print(f'  -> {name}: {kb}KB')
