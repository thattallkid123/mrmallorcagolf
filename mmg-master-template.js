/**
 * MMG Master Template — Instagram Carousel Generator
 *
 * Usage:
 *   node mmg-master-template.js
 *
 * Requires:
 *   npm install pptxgenjs sharp   (run once from this folder)
 *   Fonts: Cormorant Garamond + Jost (free on Google Fonts — install system-wide)
 *
 * Output:
 *   MMG-Master-Template.pptx  (8.1" × 10.125" — 4:5 Instagram ratio)
 *
 * Slides 1–6   Reference/instructions — keep these, don't edit
 * Slides 7–11  Son Gual example carousel — read-only reference
 * Slides 12–16 BLANK template carousel — duplicate these for every new course
 *
 * HOW TO MAKE A NEW CAROUSEL:
 *   1. Select slides 12–16, right-click → Duplicate
 *   2. On each slide, right-click the slide → Format Background →
 *      Picture or texture fill → Insert from File → choose your course photo
 *   3. The gradient overlay (left panel) is already built in — leave it.
 *   4. Click any text box and retype. All fonts/sizes are pre-set.
 *   5. Export: File → Export → Change File Type → JPEG → Save → choose All Slides
 *
 * HOW TO RECREATE THE GRADIENT SHADED OVERLAY (if ever needed):
 *   The left-panel gradient that fades the photo into the dark green text area
 *   is a PNG image embedded into the slide — not a PowerPoint gradient shape.
 *   To recreate it manually in PowerPoint:
 *     Insert → Shapes → Rectangle → draw full slide width/height
 *     Format Shape → Fill → Gradient fill
 *     Type: Linear | Angle: 0° (left to right)
 *     Stop 1 (left,  pos 0%):   Color #2D4A3E, Transparency 0%
 *     Stop 2 (mid,   pos 55%):  Color #2D4A3E, Transparency 0%
 *     Stop 3 (right, pos 100%): Color #2D4A3E, Transparency 100%
 *     No line. Send to back (behind text, in front of photo).
 *   This script generates and embeds the gradient automatically.
 */

"use strict";

const fs   = require("fs");
const path = require("path");
const pptx = require("pptxgenjs");

let sharp;
try {
  sharp = require("sharp");
} catch (e) {
  console.error("ERROR: sharp not found. Run:  npm install sharp");
  process.exit(1);
}

// ─── Constants ──────────────────────────────────────────────────────────────

const W = 8.1;   // inches (4:5 ratio)
const H = 10.125;

const C = {
  deep:     "1A1916",
  pine:     "2D4A3E",
  gold:     "B8973C",
  cream:    "F7F4EF",
  taupe:    "8A7F74",
  charcoal: "2C2A27",
  white:    "FFFFFF",
};

const F = {
  serif: "Cormorant Garamond",
  sans:  "Jost",
};

const LOGO_DIR = "C:\\Users\\andyg\\My Drive\\Mr Mallorca Golf\\Logos and Signature";
const OUT_PATH = "C:\\Users\\andyg\\Desktop\\cursor\\mrmallorcagolf-real\\MMG-Master-Template.pptx";

// ─── Gradient overlay PNG ────────────────────────────────────────────────────
// Pine (#2D4A3E) fully opaque on the left, fading to fully transparent on the
// right. This is what creates the signature left-panel look on every slide.
// We render it at 810×1013px (100× slide dimensions) for crisp edges.

async function makeGradientPng() {
  const PX_W = 810;
  const PX_H = 1013;

  // Build a raw RGBA buffer: each pixel gets full pine colour on the left,
  // fading to 0 alpha on the right. The fade starts at 55% across.
  const buf = Buffer.alloc(PX_W * PX_H * 4);
  const r = 0x2D, g = 0x4A, b = 0x3E;
  const FADE_START = 0.45; // solid until here
  const FADE_END   = 1.0;  // fully transparent here

  for (let y = 0; y < PX_H; y++) {
    for (let x = 0; x < PX_W; x++) {
      const idx = (y * PX_W + x) * 4;
      const t = x / PX_W; // 0 = left, 1 = right
      let alpha;
      if (t <= FADE_START) {
        alpha = 255;
      } else if (t >= FADE_END) {
        alpha = 0;
      } else {
        const prog = (t - FADE_START) / (FADE_END - FADE_START);
        // ease-in curve for a more photographic look
        alpha = Math.round(255 * (1 - prog * prog));
      }
      buf[idx]     = r;
      buf[idx + 1] = g;
      buf[idx + 2] = b;
      buf[idx + 3] = alpha;
    }
  }

  const pngBuf = await sharp(buf, {
    raw: { width: PX_W, height: PX_H, channels: 4 },
  }).png().toBuffer();

  return "image/png;base64," + pngBuf.toString("base64");
}

// ─── Logo loader ─────────────────────────────────────────────────────────────

function imgData(fileName) {
  const full = path.join(LOGO_DIR, fileName);
  return "data:image/png;base64," + fs.readFileSync(full).toString("base64");
}

// ─── Low-level helpers ───────────────────────────────────────────────────────

function rect(s, x, y, w, h, color, transparency = 0) {
  s.addShape("rect", {
    x, y, w, h,
    fill: { color, transparency },
    line: { color, transparency: 100 },
  });
}

function rule(s, x, y, w = 0.85, color = C.gold, h = 0.018) {
  rect(s, x, y, w, h, color);
}

function txt(s, text, x, y, w, h, opts = {}) {
  s.addText(text, {
    x, y, w, h,
    margin: 0,
    fit: "shrink",
    valign: opts.valign || "top",
    fontFace: opts.fontFace || F.sans,
    fontSize: opts.fontSize || 14,
    color: opts.color || C.deep,
    bold: opts.bold || false,
    italic: opts.italic || false,
    align: opts.align || "left",
    charSpacing: opts.charSpacing,
    lineSpacingMultiple: opts.lineSpacingMultiple,
    breakLine: opts.breakLine,
  });
}

function eyebrow(s, text, x, y, w = 5.5, color = C.gold) {
  txt(s, text, x, y, w, 0.22, {
    fontFace: F.sans,
    fontSize: 9,
    color,
    charSpacing: 5,
  });
}

// ─── Carousel base ────────────────────────────────────────────────────────────
// Every carousel slide shares this foundation:
//   1. Pine background (visible only where gradient doesn't cover and photo not set)
//   2. Gradient overlay PNG — pine → transparent, left to right
//   3. White logo + brand name top-left
//   4. Gold rule below brand name
// The photo goes in as the SLIDE BACKGROUND (right-click slide → Format Background)
// so it sits behind everything. The gradient then fades it into the text panel.

function carouselBase(pres, gradData) {
  const s = pres.addSlide();
  s.background = { color: C.pine };

  // Gradient overlay — full slide, pine→transparent
  s.addImage({
    data: gradData,
    x: 0, y: 0, w: W, h: H,
  });

  // Logo
  s.addImage({ data: logos.whiteT, x: 0.45, y: 0.42, w: 0.72, h: 0.72 });

  // Brand name
  txt(s, "MR MALLORCA GOLF", 0.45, 1.32, 2.55, 0.2, {
    fontFace: F.sans,
    fontSize: 9,
    color: C.white,
    charSpacing: 4,
  });

  // Rule under brand name
  rule(s, 0.45, 1.79, 0.85, C.white, 0.014);

  return s;
}

// ─── Reference slides ────────────────────────────────────────────────────────

function slideHowToUse(pres) {
  const s = pres.addSlide();
  s.background = { color: C.deep };

  txt(s, "HOW TO USE THIS TEMPLATE", 0.5, 0.48, 7.1, 0.22, {
    fontFace: F.sans, fontSize: 9, color: C.gold, charSpacing: 4,
  });
  txt(s, "MMG Master\nTemplate", 0.5, 0.82, 7.1, 1.55, {
    fontFace: F.serif, fontSize: 72, color: C.cream, lineSpacingMultiple: 0.78,
  });
  rule(s, 0.5, 2.56, 1.1, C.gold);

  const steps = [
    {
      n: "01",
      head: "Add your photo",
      body: "Insert → Pictures → This Device → choose your course photo. Then right-click the photo → Send to Back → Send to Back. The gradient appears instantly.",
    },
    {
      n: "02",
      head: "The gradient is already built in",
      body: "The pine→transparent fade is a PNG baked into every slide. It's invisible on the green background — the moment your photo goes behind it, the fade shows.",
    },
    {
      n: "03",
      head: "Edit the text boxes",
      body: "Click any text box and retype. Fonts, sizes and colours are pre-set. Don't change the font — Cormorant Garamond + Jost only.",
    },
    {
      n: "04",
      head: "Duplicate slides 12–16 for each new course",
      body: "Select slides 12–16 in the panel, right-click → Duplicate. Slides 7–11 are the Son Gual example — keep them as reference.",
    },
    {
      n: "05",
      head: "Export for Instagram",
      body: "File → Export → Change File Type → JPEG → Save As → choose All Slides. Upload the 5 JPEGs as a carousel post.",
    },
  ];

  steps.forEach((st, i) => {
    const y = 2.8 + i * 1.44;
    txt(s, st.n, 0.5, y, 0.42, 0.28, {
      fontFace: F.sans, fontSize: 8, color: C.gold, charSpacing: 2,
    });
    txt(s, st.head, 1.02, y - 0.02, 6.58, 0.3, {
      fontFace: F.sans, fontSize: 13, color: C.cream, bold: true,
    });
    txt(s, st.body, 1.02, y + 0.35, 6.58, 0.82, {
      fontFace: F.sans, fontSize: 12, color: C.taupe, lineSpacingMultiple: 0.88,
    });
  });
}

function slideGradientInstructions(pres, gradData) {
  const s = pres.addSlide();
  s.background = { color: C.deep };

  txt(s, "GRADIENT OVERLAY — HOW IT WORKS", 0.5, 0.48, 7.1, 0.22, {
    fontFace: F.sans, fontSize: 9, color: C.gold, charSpacing: 4,
  });
  txt(s, "The left-panel\ngradient", 0.5, 0.82, 7.1, 1.2, {
    fontFace: F.serif, fontSize: 64, color: C.cream, lineSpacingMultiple: 0.8,
  });
  rule(s, 0.5, 2.18, 1.1, C.gold);

  // Live demo of the gradient — mini preview
  s.addImage({ data: gradData, x: 0.5, y: 2.42, w: 4.2, h: 1.6 });
  txt(s, "← The actual gradient embedded in every slide", 0.5, 4.1, 5.8, 0.22, {
    fontFace: F.sans, fontSize: 9, color: C.taupe, charSpacing: 1.5,
  });

  rule(s, 0.5, 4.52, 7.1, C.gold, 0.014);

  // Manual recreation instructions
  txt(s, "TO RECREATE MANUALLY IN POWERPOINT (if ever needed):", 0.5, 4.75, 7.1, 0.22, {
    fontFace: F.sans, fontSize: 9, color: C.gold, charSpacing: 3,
  });

  const manualSteps = [
    "Insert → Shapes → Rectangle → drag to cover the full slide",
    "Right-click the shape → Format Shape → Fill → Gradient fill",
    "Type: Linear   |   Angle: 0° (left to right)",
    "Stop 1 (pos 0%,  left):  Color #2D4A3E, Transparency 0%",
    "Stop 2 (pos 55%, mid):   Color #2D4A3E, Transparency 0%",
    "Stop 3 (pos 100%, right): Color #2D4A3E, Transparency 100%",
    "Line: No line. Then right-click → Send to Back (behind text, in front of photo).",
  ];

  manualSteps.forEach((st, i) => {
    const y = 5.22 + i * 0.64;
    txt(s, `${i + 1}.`, 0.5, y, 0.3, 0.28, {
      fontFace: F.sans, fontSize: 11, color: C.gold,
    });
    txt(s, st, 0.88, y, 6.72, 0.48, {
      fontFace: F.sans, fontSize: 11, color: C.cream, lineSpacingMultiple: 0.9,
    });
  });

  txt(s, "This script (mmg-master-template.js) generates and embeds the gradient automatically.", 0.5, 9.6, 7.1, 0.32, {
    fontFace: F.sans, fontSize: 9, color: C.taupe, charSpacing: 1,
  });
}

function slideColours(pres) {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  eyebrow(s, "BRAND SYSTEM", 0.5, 0.52);
  txt(s, "Colours", 0.5, 0.85, 7.1, 0.72, {
    fontFace: F.serif, fontSize: 64, color: C.deep,
  });
  rule(s, 0.5, 1.75, 1.0, C.gold);

  const rows = [
    ["Deep",    "1A1916", "Headlines on light | dark backgrounds",          C.deep,     C.cream, false],
    ["Pine",    "2D4A3E", "Gradient overlay | CTA buttons | card fills",    C.pine,     C.cream, false],
    ["Gold",    "B8973C", "Eyebrow labels | rules | prices | italic quotes", C.gold,     C.deep,  false],
    ["Cream",   "F7F4EF", "Main background | body text on dark",            C.cream,    C.deep,  true ],
    ["Taupe",   "8A7F74", "Secondary labels | captions | muted text",       C.taupe,    C.cream, false],
  ];

  rows.forEach(([name, hex, usage, swatch, textOn, border], i) => {
    const y = 2.18 + i * 1.52;
    s.addShape("roundRect", {
      x: 0.5, y, w: 1.55, h: 1.02,
      rectRadius: 0.05,
      fill: { color: swatch },
      line: { color: border ? C.taupe : swatch, transparency: border ? 30 : 100, width: 0.5 },
    });
    txt(s, name, 2.35, y + 0.06, 1.5, 0.36, {
      fontFace: F.serif, fontSize: 30, color: C.deep,
    });
    txt(s, `#${hex}`, 2.35, y + 0.52, 1.2, 0.2, {
      fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 1.5,
    });
    txt(s, usage, 4.0, y + 0.3, 3.7, 0.28, {
      fontFace: F.sans, fontSize: 12, color: C.charcoal,
    });
  });
}

function slideTypeStyles(pres) {
  const s = pres.addSlide();
  s.background = { color: C.deep };

  eyebrow(s, "TYPOGRAPHY REFERENCE", 0.5, 0.45);
  txt(s, "Text styles", 0.5, 0.76, 7.1, 0.6, {
    fontFace: F.serif, fontSize: 52, color: C.cream,
  });
  rule(s, 0.5, 1.54, 1.0, C.gold);

  function styleRow(label, sample, y, opts, h = 0.45) {
    txt(s, label, 0.5, y, 1.7, 0.18, {
      fontFace: F.sans, fontSize: 7, color: C.taupe, charSpacing: 2,
    });
    txt(s, sample, 2.3, y - 0.08, 5.4, h, opts);
  }

  styleRow("EYEBROW",    "COURSE GUIDE · SON GUAL",            1.88, { fontFace: F.sans,  fontSize: 9,  color: C.gold,  charSpacing: 5 });
  styleRow("HERO TITLE", "Son Gual",                            2.38, { fontFace: F.serif, fontSize: 86, color: C.cream }, 1.0);
  styleRow("SECTION H1", "At a glance",                        3.64, { fontFace: F.serif, fontSize: 64, color: C.white }, 0.82);
  styleRow("SECTION H2", "A serious course.",                  4.66, { fontFace: F.serif, fontSize: 48, color: C.white }, 0.65);

  txt(s, "GOLD RULE", 0.5, 5.54, 1.7, 0.18, { fontFace: F.sans, fontSize: 7, color: C.taupe, charSpacing: 2 });
  rule(s, 2.32, 5.62, 0.85, C.gold, 0.018);

  styleRow("PULL QUOTE", "Demanding in the wind. Worth the trip.", 6.12, { fontFace: F.serif, fontSize: 22, color: C.gold, italic: true }, 0.5);
  styleRow("BODY COPY",  "Fast greens, excellent conditioning.",    6.88, { fontFace: F.sans,  fontSize: 14, color: C.cream });
  styleRow("CAPTION",    "SON GUAL GOLF CLUB · MALLORCA",          7.55, { fontFace: F.sans,  fontSize: 9,  color: C.taupe, charSpacing: 4 });
  styleRow("SITE NAME",  "MR MALLORCA GOLF",                       8.2,  { fontFace: F.sans,  fontSize: 13, color: C.taupe, charSpacing: 2 });

  txt(s, "Fonts: Cormorant Garamond (serif) + Jost (sans) — install from Google Fonts", 0.5, 9.62, 7.1, 0.28, {
    fontFace: F.sans, fontSize: 9, color: C.taupe, charSpacing: 1,
  });
}

function slideLogos(pres) {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  eyebrow(s, "BRAND LOGOS", 0.5, 0.5);
  txt(s, "Logo variants", 0.5, 0.82, 7.1, 0.6, {
    fontFace: F.serif, fontSize: 52, color: C.deep,
  });
  rule(s, 0.5, 1.6, 1.0, C.gold);

  // ── Row 1: logos that work on DARK backgrounds (pine panel) ────────────
  txt(s, "ON DARK BACKGROUNDS", 0.5, 1.84, 7.1, 0.18, {
    fontFace: F.sans, fontSize: 7, color: C.taupe, charSpacing: 2,
  });
  rect(s, 0.5, 2.08, 7.1, 1.72, C.pine);
  const darkLogos = [
    [logos.whiteT, "White transparent"],
    [logos.white,  "White solid"],
    [logos.greyT,  "Grey transparent"],
    [logos.grey,   "Grey solid"],
  ];
  const colW = 7.1 / 4;
  darkLogos.forEach(([data, label], i) => {
    const x = 0.5 + i * colW;
    s.addImage({ data, x: x + (colW - 1.1) / 2, y: 2.18, w: 1.1, h: 1.1 });
    txt(s, label, x, 3.38, colW, 0.2, {
      fontFace: F.sans, fontSize: 7.5, color: C.taupe, charSpacing: 0.5, align: "center",
    });
  });

  // ── Row 2: logos that work on LIGHT backgrounds (cream panel) ──────────
  txt(s, "ON LIGHT BACKGROUNDS", 0.5, 4.0, 7.1, 0.18, {
    fontFace: F.sans, fontSize: 7, color: C.taupe, charSpacing: 2,
  });
  rect(s, 0.5, 4.24, 7.1, 1.72, C.cream);
  // Add a subtle border so the cream box is visible on cream slide bg
  s.addShape("rect", {
    x: 0.5, y: 4.24, w: 7.1, h: 1.72,
    fill: { color: C.cream },
    line: { color: C.taupe, transparency: 60, width: 0.5 },
  });
  const lightLogos = [
    [logos.blackT, "Black transparent"],
    [logos.black,  "Black solid"],
    [logos.greenT, "Green transparent"],
    [logos.green,  "Green solid"],
  ];
  lightLogos.forEach(([data, label], i) => {
    const x = 0.5 + i * colW;
    s.addImage({ data, x: x + (colW - 1.1) / 2, y: 4.34, w: 1.1, h: 1.1 });
    txt(s, label, x, 5.54, colW, 0.2, {
      fontFace: F.sans, fontSize: 7.5, color: C.taupe, charSpacing: 0.5, align: "center",
    });
  });

  rule(s, 0.5, 6.18, 7.1, C.taupe, 0.01);

  txt(s, "Use White Transparent on all carousel slides (dark/photo backgrounds)  ·  Use Black Transparent or Green Transparent on light backgrounds", 0.5, 6.38, 7.1, 0.4, {
    fontFace: F.sans, fontSize: 9, color: C.taupe, charSpacing: 0.5, align: "center",
  });
}

// ─── Son Gual example slides (slides 7–11) ───────────────────────────────────

function exampleCover(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "EXAMPLE — SON GUAL", 0.45, 2.1, 5.5, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 3,
  });

  eyebrow(s, "COURSE GUIDE", 0.65, 3.55);
  txt(s, "Son Gual", 0.65, 4.05, 6.8, 1.05, {
    fontFace: F.serif, fontSize: 86, color: C.white,
  });
  txt(s, "A PGA Professional's\nHonest Review", 0.68, 5.42, 5.5, 1.0, {
    fontFace: F.serif, fontSize: 38, color: C.cream, lineSpacingMultiple: 0.76,
  });
  txt(s, "Mallorca · 2026", 0.7, 9.08, 2.4, 0.26, {
    fontFace: F.serif, fontSize: 15, color: C.gold, italic: true,
  });
}

function exampleWhy(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "EXAMPLE — SON GUAL", 0.45, 2.1, 5.5, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 3,
  });

  eyebrow(s, "WHY I RECOMMEND IT", 0.65, 3.28);
  txt(s, "My most-played\ncourse on the island.", 0.65, 3.85, 4.8, 1.05, {
    fontFace: F.serif, fontSize: 44, color: C.white, lineSpacingMultiple: 0.82,
  });
  txt(s, "The one I\nrecommend most\nconsistently when\nclients ask where\nto play.", 0.65, 5.55, 4.2, 2.2, {
    fontFace: F.serif, fontSize: 36, color: C.white, lineSpacingMultiple: 0.82,
  });
  txt(s, "Demanding in the wind.\nWorth the trip.", 0.68, 8.22, 3.4, 0.58, {
    fontFace: F.serif, fontSize: 20, color: C.gold, italic: true, lineSpacingMultiple: 0.82,
  });
  txt(s, "Son Gual · Mallorca", 0.68, 9.42, 2.4, 0.2, {
    fontFace: F.sans, fontSize: 10, color: C.taupe, charSpacing: 2,
  });
}

function exampleStandsOut(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "EXAMPLE — SON GUAL", 0.45, 2.1, 5.5, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 3,
  });

  eyebrow(s, "WHY IT STANDS OUT", 0.65, 2.98);
  txt(s, "A serious course.", 0.65, 3.56, 6.8, 0.72, {
    fontFace: F.serif, fontSize: 54, color: C.white,
  });
  txt(s, "Fast greens, excellent conditioning,\nand a closing stretch that is as good\nas anything in Mallorca.", 0.68, 4.46, 4.1, 0.84, {
    fontFace: F.serif, fontSize: 17, color: C.cream, lineSpacingMultiple: 0.86,
  });
  rule(s, 0.66, 5.62, 3.2, C.white, 0.012);

  const rows = [
    ["Wind",   "Fickle and always part of\nthe challenge."],
    ["Greens", "Raised, quick, and demanding\non approach shots."],
    ["Finish", "One of the strongest closing\nstretches on the island."],
  ];
  rows.forEach(([head, body], i) => {
    const y = 5.9 + i * 1.26;
    txt(s, head, 0.66, y, 1.5, 0.3, {
      fontFace: F.serif, fontSize: 22, color: C.gold, italic: true,
    });
    txt(s, body, 0.66, y + 0.38, 3.2, 0.5, {
      fontFace: F.serif, fontSize: 16, color: C.cream, lineSpacingMultiple: 0.86,
    });
    if (i < 2) rule(s, 0.66, y + 1.02, 3.2, C.white, 0.01);
  });
  txt(s, "Course notes", 0.66, 9.58, 1.5, 0.22, {
    fontFace: F.serif, fontSize: 13, color: C.gold, italic: true,
  });
}

function exampleAtAGlance(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "EXAMPLE — SON GUAL", 0.45, 2.1, 5.5, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 3,
  });

  eyebrow(s, "SON GUAL", 0.65, 2.42);
  txt(s, "At a glance", 0.65, 2.95, 6.7, 0.9, {
    fontFace: F.serif, fontSize: 72, color: C.white,
  });
  txt(s, "11 km from Palma", 0.68, 3.85, 3.2, 0.32, {
    fontFace: F.serif, fontSize: 18, color: C.cream,
  });

  // Cream data card
  const cX = 0.48, cY = 4.22, cW = W - 0.96, cH = 5.2;
  s.addShape("roundRect", {
    x: cX, y: cY, w: cW, h: cH,
    rectRadius: 0.05,
    fill: { color: C.cream },
    line: { color: C.cream, transparency: 100 },
    shadow: { type: "outer", color: "000000", opacity: 0.18, blur: 3, angle: 45, offset: 1 },
  });
  // Dividers
  rule(s, cX + cW / 2 - 0.006, cY + 0.52, 0.012, C.gold, cH - 1.04);
  rule(s, cX + 0.4, cY + cH / 2 - 0.006, cW - 0.8, C.gold, 0.012);

  // Quadrant labels and values
  function quad(label, value, sub, qx, qy) {
    txt(s, value, qx, qy, 2.8, 0.88, {
      fontFace: F.serif, fontSize: 36, color: C.pine, align: "center", lineSpacingMultiple: 0.76,
    });
    txt(s, sub, qx, qy + 1.0, 2.8, 0.2, {
      fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 2, align: "center",
    });
  }

  quad("", "Peak €165 /\nLow €110", "2026 PRICE GUIDE", cX + 0.1,        cY + 0.62);
  quad("", "9/10",                  "DIFFICULTY",        cX + cW / 2 + 0.1, cY + 0.78);
  quad("", "Par 72",                "CHAMPIONSHIP LAYOUT", cX + 0.1,      cY + cH / 2 + 0.3);
  quad("", "2007",                  "DESIGNED BY THOMAS\nHIMMEL", cX + cW / 2 + 0.1, cY + cH / 2 + 0.3);

  // Fix sub for 2007 — multi-line
  txt(s, "DESIGNED BY THOMAS\nHIMMEL", cX + cW / 2 + 0.1, cY + cH / 2 + 1.22, 2.8, 0.36, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 1.8, align: "center", lineSpacingMultiple: 0.82,
  });
}

function exampleCta(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "EXAMPLE — SON GUAL", 0.45, 2.1, 5.5, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 3,
  });

  eyebrow(s, "READ THE FULL GUIDE", 0.65, 2.98);
  txt(s, "Son Gual\nreview", 0.65, 3.65, 4.8, 1.9, {
    fontFace: F.serif, fontSize: 78, color: C.white, lineSpacingMultiple: 0.76,
  });
  txt(s, "Full course guide\non the blog.", 0.68, 5.92, 4.0, 0.88, {
    fontFace: F.serif, fontSize: 34, color: C.cream, lineSpacingMultiple: 0.78,
  });
  txt(s, "mrmallorcagolf.com", 0.68, 7.28, 3.2, 0.28, {
    fontFace: F.sans, fontSize: 14, color: C.white,
  });
  txt(s, "Link in bio", 0.68, 7.98, 2.4, 0.42, {
    fontFace: F.serif, fontSize: 28, color: C.gold, italic: true,
  });
  txt(s, "@mrmallorcagolf", 0.68, 9.36, 2.4, 0.2, {
    fontFace: F.sans, fontSize: 10, color: C.taupe,
  });
}

// ─── Blank template slides (slides 12–16) ────────────────────────────────────
// These are ready-to-use. Duplicate the set for each new course.
// Placeholder text in [brackets] = replace with your content.

function blankCover(pres, gradData) {
  const s = carouselBase(pres, gradData);

  // Placeholder label
  txt(s, "SLIDE 1 OF 5 — COVER  |  Add photo as slide background, then retype below", 0.45, 2.05, 7.2, 0.2, {
    fontFace: F.sans, fontSize: 7.5, color: C.taupe, charSpacing: 1.5,
  });

  eyebrow(s, "COURSE GUIDE", 0.65, 3.55);
  txt(s, "[Course Name]", 0.65, 4.05, 6.8, 1.05, {
    fontFace: F.serif, fontSize: 86, color: C.white,
  });
  txt(s, "A PGA Professional's\nHonest Review", 0.68, 5.42, 5.5, 1.0, {
    fontFace: F.serif, fontSize: 38, color: C.cream, lineSpacingMultiple: 0.76,
  });
  txt(s, "Mallorca · 2026", 0.7, 9.08, 2.4, 0.26, {
    fontFace: F.serif, fontSize: 15, color: C.gold, italic: true,
  });
}

function blankWhy(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "SLIDE 2 OF 5 — WHY I RECOMMEND IT  |  Add photo as slide background", 0.45, 2.05, 7.2, 0.2, {
    fontFace: F.sans, fontSize: 7.5, color: C.taupe, charSpacing: 1.5,
  });

  eyebrow(s, "WHY I RECOMMEND IT", 0.65, 3.28);
  txt(s, "[Bold headline —\n2–3 words.]", 0.65, 3.85, 4.8, 1.05, {
    fontFace: F.serif, fontSize: 44, color: C.white, lineSpacingMultiple: 0.82,
  });
  txt(s, "[Body copy — 2–3 sentences.\nPersonal, specific, practical.\nNo filler.]", 0.65, 5.55, 4.2, 1.8, {
    fontFace: F.serif, fontSize: 32, color: C.white, lineSpacingMultiple: 0.82,
  });
  txt(s, "[Short pull quote.\nOne sharp line.]", 0.68, 8.22, 3.4, 0.58, {
    fontFace: F.serif, fontSize: 20, color: C.gold, italic: true, lineSpacingMultiple: 0.82,
  });
  txt(s, "[Course Name] · Mallorca", 0.68, 9.42, 2.8, 0.2, {
    fontFace: F.sans, fontSize: 10, color: C.taupe, charSpacing: 2,
  });
}

function blankStandsOut(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "SLIDE 3 OF 5 — WHY IT STANDS OUT  |  Add photo as slide background", 0.45, 2.05, 7.2, 0.2, {
    fontFace: F.sans, fontSize: 7.5, color: C.taupe, charSpacing: 1.5,
  });

  eyebrow(s, "WHY IT STANDS OUT", 0.65, 2.98);
  txt(s, "[Punchy headline.]", 0.65, 3.56, 6.8, 0.72, {
    fontFace: F.serif, fontSize: 54, color: C.white,
  });
  txt(s, "[2–3 sentence overview of what makes\nthis course worth playing. Specific\ndetails over adjectives.]", 0.68, 4.46, 4.1, 0.84, {
    fontFace: F.serif, fontSize: 16, color: C.cream, lineSpacingMultiple: 0.86,
  });
  rule(s, 0.66, 5.62, 3.2, C.white, 0.012);

  const rows = [
    ["[Aspect 1]", "[One specific observation about this course feature.]"],
    ["[Aspect 2]", "[One specific observation about this course feature.]"],
    ["[Aspect 3]", "[One specific observation about this course feature.]"],
  ];
  rows.forEach(([head, body], i) => {
    const y = 5.9 + i * 1.26;
    txt(s, head, 0.66, y, 2.5, 0.3, {
      fontFace: F.serif, fontSize: 22, color: C.gold, italic: true,
    });
    txt(s, body, 0.66, y + 0.38, 3.2, 0.5, {
      fontFace: F.serif, fontSize: 15, color: C.cream, lineSpacingMultiple: 0.86,
    });
    if (i < 2) rule(s, 0.66, y + 1.02, 3.2, C.white, 0.01);
  });
  txt(s, "Course notes", 0.66, 9.58, 1.5, 0.22, {
    fontFace: F.serif, fontSize: 13, color: C.gold, italic: true,
  });
}

function blankAtAGlance(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "SLIDE 4 OF 5 — AT A GLANCE  |  Add photo as slide background, edit numbers in card", 0.45, 2.05, 7.2, 0.2, {
    fontFace: F.sans, fontSize: 7.5, color: C.taupe, charSpacing: 1.5,
  });

  eyebrow(s, "[COURSE NAME]", 0.65, 2.42);
  txt(s, "At a glance", 0.65, 2.95, 6.7, 0.9, {
    fontFace: F.serif, fontSize: 72, color: C.white,
  });
  txt(s, "[X km from Palma]", 0.68, 3.85, 3.2, 0.32, {
    fontFace: F.serif, fontSize: 18, color: C.cream,
  });

  const cX = 0.48, cY = 4.22, cW = W - 0.96, cH = 5.2;
  s.addShape("roundRect", {
    x: cX, y: cY, w: cW, h: cH,
    rectRadius: 0.05,
    fill: { color: C.cream },
    line: { color: C.cream, transparency: 100 },
    shadow: { type: "outer", color: "000000", opacity: 0.18, blur: 3, angle: 45, offset: 1 },
  });
  rule(s, cX + cW / 2 - 0.006, cY + 0.52, 0.012, C.gold, cH - 1.04);
  rule(s, cX + 0.4, cY + cH / 2 - 0.006, cW - 0.8, C.gold, 0.012);

  txt(s, "Peak €xxx /\nLow €xxx", cX + 0.1, cY + 0.62, 2.8, 0.88, {
    fontFace: F.serif, fontSize: 36, color: C.pine, align: "center", lineSpacingMultiple: 0.76,
  });
  txt(s, "2026 PRICE GUIDE", cX + 0.1, cY + 1.62, 2.8, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 2, align: "center",
  });
  txt(s, "?/10", cX + cW / 2 + 0.1, cY + 0.78, 2.8, 0.68, {
    fontFace: F.serif, fontSize: 52, color: C.pine, align: "center",
  });
  txt(s, "DIFFICULTY", cX + cW / 2 + 0.1, cY + 1.62, 2.8, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 2, align: "center",
  });
  txt(s, "Par ??", cX + 0.1, cY + cH / 2 + 0.3, 2.8, 0.62, {
    fontFace: F.serif, fontSize: 48, color: C.pine, align: "center",
  });
  txt(s, "[LAYOUT TYPE]", cX + 0.1, cY + cH / 2 + 1.02, 2.8, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 1.8, align: "center",
  });
  txt(s, "????", cX + cW / 2 + 0.1, cY + cH / 2 + 0.3, 2.8, 0.62, {
    fontFace: F.serif, fontSize: 48, color: C.pine, align: "center",
  });
  txt(s, "YEAR OPENED", cX + cW / 2 + 0.1, cY + cH / 2 + 1.02, 2.8, 0.2, {
    fontFace: F.sans, fontSize: 8, color: C.taupe, charSpacing: 1.8, align: "center",
  });
}

function blankCta(pres, gradData) {
  const s = carouselBase(pres, gradData);

  txt(s, "SLIDE 5 OF 5 — CTA  |  Add photo as slide background, retype course name", 0.45, 2.05, 7.2, 0.2, {
    fontFace: F.sans, fontSize: 7.5, color: C.taupe, charSpacing: 1.5,
  });

  eyebrow(s, "READ THE FULL GUIDE", 0.65, 2.98);
  txt(s, "[Course]\nreview", 0.65, 3.65, 4.8, 1.9, {
    fontFace: F.serif, fontSize: 78, color: C.white, lineSpacingMultiple: 0.76,
  });
  txt(s, "Full course guide\non the blog.", 0.68, 5.92, 4.0, 0.88, {
    fontFace: F.serif, fontSize: 34, color: C.cream, lineSpacingMultiple: 0.78,
  });
  txt(s, "mrmallorcagolf.com", 0.68, 7.28, 3.2, 0.28, {
    fontFace: F.sans, fontSize: 14, color: C.white,
  });
  txt(s, "Link in bio", 0.68, 7.98, 2.4, 0.42, {
    fontFace: F.serif, fontSize: 28, color: C.gold, italic: true,
  });
  txt(s, "@mrmallorcagolf", 0.68, 9.36, 2.4, 0.2, {
    fontFace: F.sans, fontSize: 10, color: C.taupe,
  });
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Generating gradient overlay PNG…");
  const gradData = await makeGradientPng();
  console.log("Gradient ready.");

  // Load logos
  global.logos = {
    greenT: imgData("MMG_Logo_Green_Transparent.png"),
    blackT: imgData("MMG_Logo_Black_Transparent.png"),
    greyT:  imgData("MMG_Logo_Grey_Transparent.png"),
    whiteT: imgData("MMG_Logo_White_Transparent.png"),
    green:  imgData("MMG_Logo_Green.png"),
    black:  imgData("MMG_Logo_Black.png"),
    grey:   imgData("MMG_Logo_Grey.png"),
    white:  imgData("MMG_Logo_White.png"),
  };

  const pres = new pptx();
  pres.author  = "Mr Mallorca Golf";
  pres.company = "Mr Mallorca Golf";
  pres.subject = "MMG Instagram master template";
  pres.title   = "MMG Master Template";
  pres.lang    = "en-GB";
  pres.defineLayout({ name: "MMG_4_5", width: W, height: H });
  pres.layout  = "MMG_4_5";
  pres.theme   = { headFontFace: F.serif, bodyFontFace: F.sans, lang: "en-GB" };

  // Reference slides
  console.log("Building reference slides…");
  slideHowToUse(pres);               // 1
  slideGradientInstructions(pres, gradData); // 2
  slideColours(pres);                // 3
  slideTypeStyles(pres);             // 4
  slideLogos(pres);                  // 5

  // Son Gual example carousel
  console.log("Building Son Gual example slides…");
  exampleCover(pres, gradData);      // 6
  exampleWhy(pres, gradData);        // 7
  exampleStandsOut(pres, gradData);  // 8
  exampleAtAGlance(pres, gradData);  // 9
  exampleCta(pres, gradData);        // 10

  // Blank template carousel
  console.log("Building blank template slides…");
  blankCover(pres, gradData);        // 11
  blankWhy(pres, gradData);          // 12
  blankStandsOut(pres, gradData);    // 13
  blankAtAGlance(pres, gradData);    // 14
  blankCta(pres, gradData);          // 15

  console.log(`Writing to ${OUT_PATH}…`);
  await pres.writeFile({ fileName: OUT_PATH, compression: true });
  console.log("Done! Open MMG-Master-Template.pptx to review.");
}

main().catch(err => { console.error(err); process.exit(1); });
