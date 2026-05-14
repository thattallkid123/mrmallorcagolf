"""
Definitive photo fix for T Golf Calvia blog images.
Reads DIRECTLY from Google Drive originals (JPG), applies EXIF rotation ONCE,
resizes to max 1600px, saves as WebP to the blog folder.
Also regenerates the card image from photo 4 (windmill/fairway/mountains).
"""
from PIL import Image, ImageOps, ExifTags
import os

SRC = r'C:\Users\andyg\My Drive\Mr Mallorca Golf\Media\My Photos'
BLOG = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\t-golf-calvia-blog'
CARD = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\t-golf-calvia-card.webp'

def process_blog(src_file, dst_file, max_px=1600, quality=82):
    src_path = os.path.join(SRC, src_file)
    dst_path = os.path.join(BLOG, dst_file)
    img = Image.open(src_path)
    # Check EXIF orientation tag before and after
    try:
        exif = img._getexif() or {}
        orient = exif.get(274, 1)
    except:
        orient = 1
    print(f"  {src_file}: raw size={img.size}, EXIF orientation={orient}")
    img = ImageOps.exif_transpose(img)
    print(f"  After transpose: {img.size}")
    w, h = img.size
    if max(w, h) > max_px:
        ratio = max_px / max(w, h)
        img = img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)
    img.save(dst_path, 'WEBP', quality=quality)
    print(f"  Saved: {img.size} -> {dst_file}")

def process_card(src_file, crop_top_pct=0.28):
    src_path = os.path.join(SRC, src_file)
    img = Image.open(src_path)
    img = ImageOps.exif_transpose(img)
    w, h = img.size
    print(f"Card source {src_file}: {w}x{h}")
    # Landscape crop for 900x386
    target_ratio = 900 / 386
    new_h = int(w / target_ratio)
    top = int(h * crop_top_pct)
    if top + new_h > h:
        top = h - new_h
    card = img.crop((0, top, w, top + new_h))
    card = card.resize((900, 386), Image.LANCZOS)
    card.save(CARD, 'WEBP', quality=82)
    print(f"Card saved: {card.size}")

print("=== Processing blog images from Drive originals ===")
process_blog('T Golf Calvia.jpg',  't-golf-calvia-1.webp')
process_blog('T Golf Calvia2.jpg', 't-golf-calvia-2.webp')
process_blog('T Golf Calvia3.jpg', 't-golf-calvia-3.webp')
process_blog('T Golf Calvia4.jpg', 't-golf-calvia-4.webp')
process_blog('T Golf Calvia5.jpg', 't-golf-calvia-5.webp')
process_blog('T Golf Calvia6.jpg', 't-golf-calvia-6.webp')
process_blog('T Golf Calvia7.jpg', 't-golf-calvia-7.webp')

print("\n=== Processing card from photo 4 ===")
process_card('T Golf Calvia4.jpg', crop_top_pct=0.28)

print("\nAll done.")
