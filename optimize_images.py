#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Batch image optimization for Mr Mallorca Golf.
Converts JPG/PNG to WebP, maintains source originals, logs results.
"""

import os
import subprocess
import sys
from pathlib import Path
from PIL import Image

# Fix encoding for Windows
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Configuration
IMAGES_ROOT = Path('public/images')
QUALITY_BLOG = 82
QUALITY_LOGO = 85
QUALITY_CARD = 80

# Categories with quality settings
CATEGORIES = {
    'blog': {'quality': QUALITY_BLOG, 'max_width': 1600},
    'logo': {'quality': QUALITY_LOGO, 'max_width': None},
    'courses': {'quality': QUALITY_CARD, 'max_width': 900},
    'winners': {'quality': QUALITY_CARD, 'max_width': 1200},
}

def get_file_size_mb(path):
    """Return file size in MB."""
    return os.path.getsize(path) / (1024 * 1024)

def convert_to_webp(source_path, dest_path, quality=80, max_width=None):
    """
    Convert image to WebP using PIL.
    Returns (success, original_size_mb, new_size_mb).
    """
    try:
        img = Image.open(source_path)

        # Resize if max_width specified
        if max_width and img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

        orig_size = get_file_size_mb(source_path)

        # Save as WebP
        img.save(dest_path, 'WEBP', quality=quality, method=6)

        new_size = get_file_size_mb(dest_path)
        return True, orig_size, new_size

    except Exception as e:
        print(f"  ❌ Error converting {source_path}: {e}")
        return False, 0, 0

def process_directory(dir_path, category='blog'):
    """Process all images in a directory."""
    if not dir_path.exists():
        return

    quality = CATEGORIES.get(category, {}).get('quality', 80)
    max_width = CATEGORIES.get(category, {}).get('max_width')

    files = list(dir_path.glob('*.jpg')) + list(dir_path.glob('*.jpeg')) + list(dir_path.glob('*.png'))

    if not files:
        return

    print(f"\n{dir_path.name}/")
    print(f"   Quality: {quality} | Max width: {max_width or 'none'}")

    total_orig = 0
    total_new = 0
    converted = 0

    for source in sorted(files):
        if source.suffix.lower() == '.webp':
            continue  # Skip already-converted

        dest = source.with_suffix('.webp')

        # Skip if WebP already exists with same mtime
        if dest.exists() and dest.stat().st_mtime > source.stat().st_mtime:
            print(f"  ✅ {source.name} (already optimized)")
            continue

        success, orig_size, new_size = convert_to_webp(source, dest, quality, max_width)

        if success:
            savings = ((orig_size - new_size) / orig_size) * 100
            print(f"  OK {source.name}")
            print(f"     {orig_size:.2f}MB -> {new_size:.2f}MB ({savings:.0f}% smaller)")
            total_orig += orig_size
            total_new += new_size
            converted += 1

    if converted > 0:
        savings = ((total_orig - total_new) / total_orig) * 100
        print(f"\n   Subtotal: {converted} images | {total_orig:.2f}MB -> {total_new:.2f}MB ({savings:.0f}% smaller)")

def main():
    if not IMAGES_ROOT.exists():
        print(f"❌ {IMAGES_ROOT} not found. Run from repo root.")
        sys.exit(1)

    print("\nMr Mallorca Golf — Image Optimizer\n")

    # Process all blog directories
    for blog_dir in IMAGES_ROOT.glob('*-blog'):
        process_directory(blog_dir, 'blog')

    # Process other blog directories
    for special_dir in ['blog-best-golf-courses', 'blog-golf-cost', 'blog-trip-planning']:
        process_directory(IMAGES_ROOT / special_dir, 'blog')

    # Process logos
    process_directory(IMAGES_ROOT / 'logo', 'logo')

    # Process course cards
    process_directory(IMAGES_ROOT / 'courses', 'courses')

    # Process winners/social
    process_directory(IMAGES_ROOT / 'winners', 'winners')

    print("\nDone!\n")
    print("Next steps:")
    print("  1. Review generated .webp files")
    print("  2. Update file references in src/lib/guide-post-content.js")
    print("  3. Update logo imports in components")
    print("  4. Run: npm run build")
    print("  5. Test locally: npm run dev")
    print("  6. Deploy: git add -A && git commit -m 'optimize: convert all images to WebP'")

if __name__ == '__main__':
    main()
