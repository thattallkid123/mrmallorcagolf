from PIL import Image, ImageOps
import os

UPLOADS = "C:/Users/andyg/AppData/Roaming/Claude/local-agent-mode-sessions/fe7a7714-7c35-4970-aaae-5a3d84f73007/b3bebfb7-33e8-46ab-bd72-6182db69a9e5/local_e1bcc099-88c5-434f-b368-c9c5b296cb14/uploads"
OUT = "C:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/public/images"

# List uploaded files
files = sorted(os.listdir(UPLOADS))
for f in files:
    p = os.path.join(UPLOADS, f)
    try:
        img = Image.open(p)
        img = ImageOps.exif_transpose(img)
        print(f"{f}: {img.size}")
    except Exception as e:
        print(f"{f}: skip ({e})")
