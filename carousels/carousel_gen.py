#!/usr/bin/env python3
"""
Mr Mallorca Golf — Carousel Generator v3
Faithful recreation of the Son Gual gold standard.
"""
from PIL import Image, ImageDraw, ImageFont
import os

LORA_B  = "/tmp/lora-static/Lora-Bold.ttf"
LORA_BI = "/tmp/lora-static/Lora-BoldItalic.ttf"
LORA_R  = "/tmp/lora-static/Lora-Regular.ttf"
LORA_I  = "/tmp/lora-static/Lora-Italic.ttf"

IMG_BASE = "/sessions/blissful-epic-davinci/mnt/mrmallorcagolf-real/public/images"
OUT_BASE = "/sessions/blissful-epic-davinci/mnt/outputs"
LOGO     = f"{IMG_BASE}/logo/MMG_Logo_White_Transparent.png"

DEEP  = (28,  43,  28)
CREAM = (240, 237, 232)
GOLD  = (200, 185, 122)
SAGE  = (122, 158, 122)
WHITE = (255, 255, 255)
W, H  = 1080, 1350

def fB(s):  return ImageFont.truetype(LORA_B,  s)
def fBI(s): return ImageFont.truetype(LORA_BI, s)
def fR(s):  return ImageFont.truetype(LORA_R,  s)
def fI(s):  return ImageFont.truetype(LORA_I,  s)

def stext(draw, xy, text, fnt, fill, sha=170, off=(3,4)):
    draw.text((xy[0]+off[0], xy[1]+off[1]), text, font=fnt, fill=(0,0,0,sha))
    draw.text(xy, text, font=fnt, fill=fill)

def wrap(text, fnt, max_w, draw):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        t = (cur+" "+w).strip()
        if draw.textlength(t, font=fnt) <= max_w:
            cur = t
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def load_photo(path, crop_top=0.0, crop_focus=0.5):
    img = Image.open(path).convert("RGB")
    iw, ih = img.size
    ratio = W/H
    if iw/ih > ratio:
        nw = int(ih*ratio)
        left = int((iw-nw)*crop_focus)
        img = img.crop((left, 0, left+nw, ih))
    else:
        nh = int(iw/ratio)
        top = int((ih-nh)*crop_top)
        img = img.crop((0, top, iw, top+nh))
    return img.resize((W,H), Image.LANCZOS).convert("RGBA")

def gradient(img, mode="bottom", strength=0.85):
    ov = Image.new("RGBA",(W,H),(0,0,0,0))
    d  = ImageDraw.Draw(ov)
    for i in range(H):
        t = i/H
        if mode == "bottom":
            a = int(255*strength*max(0,(t-0.10)/0.90)**1.8)
        elif mode == "top":
            a = int(255*strength*max(0,(0.75-t)/0.75)**1.6)
        elif mode == "left":
            # dark left panel fading right — for split shots
            a = int(255*strength*max(0,(0.55-t*0.3)))
        else:
            a = int(255*strength*max(0,(t-0.10)/0.90)**1.8)
        d.line([(0,i),(W,i)], fill=(*DEEP,a))
    return Image.alpha_composite(img, ov)

def draw_logo(img, x=54, y=54, size=96):
    """Paste MMG circle logo + 'MR MALLORCA GOLF' wordmark."""
    logo = Image.open(LOGO).convert("RGBA")
    logo = logo.resize((size, size), Image.LANCZOS)
    img.paste(logo, (x, y), logo)
    d = ImageDraw.Draw(img)
    # wordmark below logo
    f = fB(26)
    wy = y + size + 14
    stext(d, (x, wy), "MR MALLORCA GOLF", f, WHITE, sha=150)
    # gold rule under wordmark
    ry = wy + 36
    d.rectangle([x, ry, x+80, ry+2], fill=GOLD)
    return ry + 16  # y after rule

def save(img, path):
    img.convert("RGB").save(path, "JPEG", quality=95)
    print(f"  ✓ {os.path.basename(path)}")


# ─────────────────────────────────────────────────────────────
# SLIDE 1 — COVER
# Matches Son Gual: logo TL, COURSE GUIDE eyebrow, giant course
# name, subtitle, location·year bottom-left
# ─────────────────────────────────────────────────────────────
def slide_cover(photo, eyebrow_label, course_name, subtitle_lines,
                location_year, n, total, out,
                mode="bottom", crop_top=0.0):
    img = gradient(load_photo(photo, crop_top=crop_top), mode)
    draw_logo(img)
    d = ImageDraw.Draw(img)

    # COURSE GUIDE eyebrow — gold, spaced caps, mid-page
    ey = 580
    ex = 64
    stext(d, (ex, ey), eyebrow_label, fB(26), GOLD, sha=120)

    # Course name — huge italic serif
    ny = ey + 52
    stext(d, (ex, ny), course_name, fBI(130), WHITE, sha=200, off=(4,5))
    ny += 138

    # Subtitle lines — italic, smaller
    for line in subtitle_lines:
        stext(d, (ex, ny), line, fI(52), WHITE, sha=160)
        ny += 64

    # Location · Year — gold italic, bottom-left
    ly = H - 110
    stext(d, (ex, ly), location_year, fI(34), GOLD, sha=140)

    save(img, out)


# ─────────────────────────────────────────────────────────────
# SLIDE 2 — AT A GLANCE
# Logo TL, course eyebrow gold, "At a glance" huge italic,
# distance italic, cream box 2×2 grid
# ─────────────────────────────────────────────────────────────
def slide_atglance(photo, course_eyebrow, distance, stats,
                   n, total, out, crop_top=0.0):
    img = gradient(load_photo(photo, crop_top=crop_top), "bottom", 0.72)
    draw_logo(img)
    d = ImageDraw.Draw(img)

    x = 64
    # Course eyebrow
    ey = 210
    stext(d, (x, ey), course_eyebrow.upper(), fB(24), GOLD, sha=100)

    # "At a glance" — big italic
    stext(d, (x, ey+40), "At a glance", fBI(96), WHITE, sha=190, off=(4,5))

    # Distance
    stext(d, (x, ey+148), distance, fI(34), CREAM, sha=140)

    # Stats box
    bx1, by1 = x, ey+200
    bx2, by2 = W-x, by1+440
    box = Image.new("RGBA",(W,H),(0,0,0,0))
    bd = ImageDraw.Draw(box)
    bd.rounded_rectangle([bx1,by1,bx2,by2], radius=8, fill=(240,237,232,230))
    img = Image.alpha_composite(img, box)
    d = ImageDraw.Draw(img)

    mx = (bx1+bx2)//2
    my = (by1+by2)//2
    d.line([(mx,by1+20),(mx,by2-20)], fill=(*GOLD,255), width=1)
    d.line([(bx1+20,my),(bx2-20,my)], fill=(*GOLD,255), width=1)

    cells = [(bx1,by1,mx,my),(mx,by1,bx2,my),(bx1,my,mx,by2),(mx,my,bx2,by2)]
    fv = fI(50)
    fl = fB(20)
    for (val, lbl), (cx1,cy1,cx2,cy2) in zip(stats, cells):
        cw = cx2-cx1; ch = cy2-cy1
        vlines = wrap(val, fv, cw-32, d)
        th = len(vlines)*(fv.size+6) + fl.size + 16
        sy = cy1 + (ch-th)//2
        for ln in vlines:
            lw = int(d.textlength(ln, font=fv))
            d.text((cx1+(cw-lw)//2, sy), ln, font=fv, fill=DEEP)
            sy += fv.size+6
        lw = int(d.textlength(lbl.upper(), font=fl))
        d.text((cx1+(cw-lw)//2, sy+8), lbl.upper(), font=fl, fill=SAGE)

    save(img, out)


# ─────────────────────────────────────────────────────────────
# SLIDE 3 — WHY IT STANDS OUT
# Logo TL, sage eyebrow, bold headline, body, gold-ruled bullets
# ─────────────────────────────────────────────────────────────
def slide_standout(photo, headline, body_intro, bullets,
                   n, total, out, mode="bottom"):
    img = gradient(load_photo(photo), mode, 0.92)
    draw_logo(img)
    d = ImageDraw.Draw(img)

    x = 64
    # Sage eyebrow
    ey = 220
    stext(d, (x, ey), "WHY IT STANDS OUT", fB(24), SAGE, sha=100)

    # Headline
    hy = ey + 46
    for ln in wrap(headline, fB(76), W-x*2, d):
        stext(d, (x, hy), ln, fB(76), WHITE, sha=190, off=(3,4))
        hy += 86
    hy += 4

    # Body intro
    for ln in wrap(body_intro, fI(36), W-x*2, d):
        stext(d, (x, hy), ln, fI(36), CREAM, sha=140)
        hy += 44
    hy += 16

    # Bullets
    for label, text in bullets:
        d.line([(x, hy),(W-x, hy)], fill=(*GOLD,160), width=1)
        hy += 14
        stext(d, (x, hy), label, fI(32), GOLD, sha=120)
        hy += 40
        for ln in wrap(text, fI(30), W-x*2, d):
            stext(d, (x, hy), ln, fI(30), CREAM, sha=120)
            hy += 36
        hy += 6

    # "Course notes" footer label (matches Son Gual)
    stext(d, (x, H-110), "Course notes", fI(28), GOLD, sha=100)
    save(img, out)


# ─────────────────────────────────────────────────────────────
# SLIDE 4 — WHY I RECOMMEND IT (quote/people)
# Logo TL (no rule), sage eyebrow, huge stacked BoldItalic,
# gold italic tagline bottom
# ─────────────────────────────────────────────────────────────
def slide_recommend(photo, headline_lines, tagline, location_label,
                    n, total, out, mode="top", crop_top=0.0):
    img = gradient(load_photo(photo, crop_top=crop_top), mode, 0.90)
    draw_logo(img)
    d = ImageDraw.Draw(img)

    x = 64
    # Sage eyebrow — below logo area
    ey = 300
    stext(d, (x, ey), "WHY I RECOMMEND IT", fB(24), GOLD, sha=100)

    # Big stacked headline
    hy = ey + 52
    for line in headline_lines:
        stext(d, (x, hy), line, fBI(72), WHITE, sha=190, off=(3,4))
        hy += 84

    # Gold italic tagline
    tly = H - 160
    stext(d, (x, tly), tagline, fI(34), GOLD, sha=130)
    tly += 46
    stext(d, (x, tly), location_label, fI(28), CREAM, sha=110)

    save(img, out)


# ─────────────────────────────────────────────────────────────
# SLIDE 5 — CTA (read the full guide)
# Logo TL, sage eyebrow, huge course name italic left,
# "Full course guide on the blog." italic,
# url + @handle, phone mockup right
# ─────────────────────────────────────────────────────────────
def slide_cta(photo, course_name, instagram,
              n, total, out, mode="bottom", crop_top=0.0):
    img = gradient(load_photo(photo, crop_top=crop_top), mode, 0.88)
    draw_logo(img)
    d = ImageDraw.Draw(img)

    x = 64
    # Sage eyebrow
    ey = 560
    stext(d, (x, ey), "READ THE FULL GUIDE", fB(24), SAGE, sha=100)

    # Course name — huge italic
    ny = ey + 52
    name_lines = course_name.split("/")  # allow manual line breaks
    for ln in name_lines:
        stext(d, (x, ny), ln.strip(), fBI(96), WHITE, sha=200, off=(4,5))
        ny += 110

    # "Full course guide on the blog."
    ny += 4
    stext(d, (x, ny), "Full course guide", fI(44), WHITE, sha=160)
    ny += 54
    stext(d, (x, ny), "on the blog.", fI(44), WHITE, sha=160)
    ny += 70

    # URL
    stext(d, (x, ny), "mrmallorcagolf.com", fB(34), WHITE, sha=150)
    ny += 50
    # Instagram handle — gold italic
    stext(d, (x, ny), instagram, fI(32), GOLD, sha=130)

    save(img, out)


# ══════════════════════════════════════════════════════════════
# ALCANADA
# ══════════════════════════════════════════════════════════════
def make_alcanada():
    d = f"{OUT_BASE}/alcanada_carousel"; os.makedirs(d, exist_ok=True)
    B = f"{IMG_BASE}/alcanada-blog"; T=5

    slide_cover(f"{B}/alc-7.jpg",
        "COURSE GUIDE",
        "Alcanada",
        ["A PGA Professional's", "Honest Review"],
        "Mallorca  ·  2026",
        1,T,f"{d}/alc_01.jpg", mode="bottom", crop_top=0.1)

    slide_atglance(f"{B}/alc-7.jpg",
        "Alcanada",
        "55 km from Palma",
        [("Peak €220 / Low €115","2026 price guide"),
         ("7/10","Difficulty"),
         ("Par 72","Championship layout"),
         ("Oct 2026","Rolex Grand Final")],
        2,T,f"{d}/alc_02.jpg")

    slide_standout(f"{B}/alc-5.jpg",
        "A serious course.",
        "Fast greens, 58 bunkers, and a setting that hosts elite events.",
        [("Setting",  "Robert Trent Jones Jr. Lighthouse visible from 16 of 18 holes."),
         ("Greens",   "Severely undulating and fast. Accurate approaches required on almost every hole."),
         ("Pedigree", "Rolex Challenge Tour Grand Final — returning for its sixth time, October 2026.")],
        3,T,f"{d}/alc_03.jpg")

    slide_recommend(f"{B}/alc-6.jpg",
        ["If I want someone to go home",
         "talking about one round,",
         "I take them to Alcanada.",
         "The one course that does",
         "both: views and a proper test."],
        "The lighthouse helps. The course stands up on its own.",
        "Alcanada  ·  Mallorca",
        4,T,f"{d}/alc_04.jpg", mode="bottom")

    slide_cta(f"{B}/alc-hero.jpg",
        "Alcanada\nreview",
        "@clubgolfalcanada",
        5,T,f"{d}/alc_05.jpg")

# ══════════════════════════════════════════════════════════════
# SON MUNTANER
# ══════════════════════════════════════════════════════════════
def make_son_muntaner():
    d = f"{OUT_BASE}/son_muntaner_carousel"; os.makedirs(d, exist_ok=True)
    B = f"{IMG_BASE}/son-muntaner-blog"; T=5

    slide_cover(f"{B}/sm-6.jpg",
        "COURSE GUIDE",
        "Son Muntaner",
        ["A PGA Professional's", "Honest Review"],
        "Mallorca  ·  2026",
        1,T,f"{d}/sm_01.jpg", mode="bottom")

    slide_atglance(f"{B}/sm-6.jpg",
        "Son Muntaner",
        "5 minutes from central Palma",
        [("Peak €250 / Low €125","2026 price guide"),
         ("7/10","Difficulty"),
         ("Par 72","Championship layout"),
         ("Included","Buggy in green fee")],
        2,T,f"{d}/sm_02.jpg")

    slide_standout(f"{B}/sm-4.jpg",
        "Rewards precision.",
        "The course reveals itself through approach play, not from the tee.",
        [("Routing",  "Through the Na Burguesa mountains. Serious elevation. Buggy included."),
         ("Greens",   "Pure and fast. Held pace on a packed Saturday. Best in Spain makes sense here."),
         ("The 15th", "Ancient olive tree, 1,000 years old. Declared a natural monument. Hole built around it.")],
        3,T,f"{d}/sm_03.jpg")

    slide_recommend(f"{B}/sm-8.jpg",
        ["Best Golf Course in Spain",
         "is not marketing.",
         "It tests positioning,",
         "discipline, and decision-making",
         "from the first hole to the last."],
        "Five minutes from Palma. Worth every minute.",
        "Son Muntaner  ·  Mallorca",
        4,T,f"{d}/sm_04.jpg", mode="top")

    slide_cta(f"{B}/sm-2.jpg",
        "Son Muntaner\nreview",
        "@arabellagolfmallorca",
        5,T,f"{d}/sm_05.jpg")

# ══════════════════════════════════════════════════════════════
# SANTA PONSA 1
# ══════════════════════════════════════════════════════════════
def make_santa_ponsa():
    d = f"{OUT_BASE}/santa_ponsa_carousel"; os.makedirs(d, exist_ok=True)
    B = f"{IMG_BASE}/santa-ponsa-blog"; T=5

    slide_cover(f"{B}/sp-hero.jpg",
        "COURSE GUIDE",
        "Santa Ponsa 1",
        ["A PGA Professional's", "Honest Review"],
        "Mallorca  ·  2026",
        1,T,f"{d}/sp_01.jpg", mode="bottom")

    slide_atglance(f"{B}/sp-hero.jpg",
        "Santa Ponsa 1",
        "SW Mallorca  ·  Public access",
        [("Peak €125 / Low €75","2026 price guide"),
         ("8/10","Difficulty"),
         ("Par 72","Championship layout"),
         ("2021","European Tour host")],
        2,T,f"{d}/sp_02.jpg")

    slide_standout(f"{B}/sp-1.jpg",
        "Wide fairways. Proper history.",
        "One of Europe's longest courses. The place to enjoy hitting driver.",
        [("Length",  "590m 10th — one of the longest par 5s in Europe. Into wind it plays every metre."),
         ("Tour",    "2021 DP World Tour Mallorca Open. First European Tour on the island in 10 years."),
         ("Views",   "Holes 5, 6, 7: the best Tramuntana mountain views on this side of Mallorca.")],
        3,T,f"{d}/sp_03.jpg")

    slide_recommend(f"{B}/sp-5.jpg",
        ["After Son Gual and Alcanada,",
         "Santa Ponsa 1 feels different.",
         "The fairways are wide.",
         "The course rewards an",
         "aggressive tee shot."],
        "DP World Tour history. Public access. Go and enjoy your driver.",
        "Santa Ponsa 1  ·  Mallorca",
        4,T,f"{d}/sp_04.jpg", mode="top")

    slide_cta(f"{B}/sp-2.jpg",
        "Santa Ponsa 1\nreview",
        "@golfsantaponsa",
        5,T,f"{d}/sp_05.jpg")


if __name__ == "__main__":
    print("Alcanada..."); make_alcanada()
    print("Son Muntaner..."); make_son_muntaner()
    print("Santa Ponsa 1..."); make_santa_ponsa()
    print("\nAll done.")
