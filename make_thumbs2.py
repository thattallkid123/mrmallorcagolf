from PIL import Image, ImageOps
imgs = [
    'pwap-hero-client.webp',
    'pwap-hero-mandarin.webp',
    'pwap-hero.webp',
    'client-alcanada.webp',
    'client-son-gual-banner.webp',
    'client-son-gual2-banner.webp',
    'client-coaching.webp',
    'client-swing-bw.webp',
]
for name in imgs:
    img = Image.open(f'public/images/{name}')
    img = ImageOps.exif_transpose(img)
    img.thumbnail((700, 700))
    out = f'public/images/_show_{name.replace(".webp",".jpg")}'
    img.save(out, quality=85)
    print(f'{name}: {img.size} -> {out}')
