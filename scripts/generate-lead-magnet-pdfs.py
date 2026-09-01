from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parent.parent
DOWNLOADS_DIR = ROOT / "public" / "downloads"


def register_fonts():
    regular = Path(r"C:\Windows\Fonts\arial.ttf")
    bold = Path(r"C:\Windows\Fonts\arialbd.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("MMGSans", str(regular)))
        pdfmetrics.registerFont(TTFont("MMGSans-Bold", str(bold)))
        return "MMGSans", "MMGSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT_REGULAR, FONT_BOLD = register_fonts()
styles = getSampleStyleSheet()
TITLE = ParagraphStyle(
    "MMGTitle",
    parent=styles["Title"],
    fontName=FONT_BOLD,
    fontSize=20,
    leading=24,
    textColor=colors.HexColor("#2D4A3E"),
    spaceAfter=8,
)
SUBTITLE = ParagraphStyle(
    "MMGSubtitle",
    parent=styles["BodyText"],
    fontName=FONT_REGULAR,
    fontSize=10.5,
    leading=14,
    textColor=colors.HexColor("#4D4A45"),
    spaceAfter=10,
)
SECTION = ParagraphStyle(
    "MMGSection",
    parent=styles["Heading2"],
    fontName=FONT_BOLD,
    fontSize=12.5,
    leading=15,
    textColor=colors.HexColor("#2D4A3E"),
    spaceBefore=8,
    spaceAfter=6,
)
BODY = ParagraphStyle(
    "MMGBody",
    parent=styles["BodyText"],
    fontName=FONT_REGULAR,
    fontSize=10,
    leading=13.5,
    textColor=colors.HexColor("#1A1916"),
    spaceAfter=6,
)
SMALL = ParagraphStyle(
    "MMGSmall",
    parent=styles["BodyText"],
    fontName=FONT_REGULAR,
    fontSize=8.5,
    leading=11,
    textColor=colors.HexColor("#6F685F"),
    spaceAfter=4,
)


COURSE_COST_ROWS = [
    ["Alcanada", "€230", "€115", "35-48", "25-38", "8/10"],
    ["Andratx", "€140", "€90", "€45", "35-40", "9/10"],
    ["Bendinat", "€123", "€74", "33-43", "30-40", "7/10"],
    ["Canyamel", "€145", "€85", "30-45", "€35", "6/10"],
    ["Capdepera", "€125", "€75", "35-45", "€35", "7/10"],
    ["Maioris", "€110", "€91", "36-47", "€33", "5/10"],
    ["Palma Pitch & Putt", "€30", "€27", "-", "5-8", "2/10"],
    ["Pollenca", "€75", "€65", "35-45", "30-40", "6/10"],
    ["Pula", "€135", "€75", "€40", "€35", "7/10"],
    ["Reserva Rotana", "€130", "€85", "35-45", "€35", "6/10"],
    ["Santa Ponsa 1", "€126", "€77", "30-45", "30-40", "7/10"],
    ["Santa Ponsa 2", "Members only", "Guest w/ member", "-", "-", "7/10"],
    ["Santa Ponsa 3", "Members only", "Guest w/ member", "-", "-", "6/10"],
    ["Son Antem East", "€140", "€105", "32-48", "28-42", "5/10"],
    ["Son Antem West", "€145", "€109", "32-48", "28-42", "6/10"],
    ["Son Gual", "€165", "€115", "35-45", "25-38", "8/10"],
    ["Son Muntaner", "€260", "€110", "Incl.", "€40", "8/10"],
    ["Son Quint", "€172", "€70", "45-55", "35-40", "6/10"],
    ["Son Servera", "€145", "€80", "35-45", "30-40", "6/10"],
    ["Son Termes", "€110", "€90", "36-47", "€33", "6/10"],
    ["Son Vida", "€190", "€85", "€55", "€38", "8/10"],
    ["T Golf Calvia", "€210", "€80", "45-55", "35-50", "7/10"],
    ["T Golf Palma", "€150", "€80", "45-50", "30-50", "6/10"],
    ["Vall d'Or", "€132", "€99", "35-45", "30-40", "6/10"],
]


def footer(canvas, _doc):
    canvas.saveState()
    canvas.setFont(FONT_REGULAR, 8)
    canvas.setFillColor(colors.HexColor("#8A7F74"))
    canvas.drawCentredString(
        A4[0] / 2,
        10 * mm,
        "www.mrmallorcagolf.com | andy@mrmallorcagolf.com | Copyright 2026",
    )
    canvas.restoreState()


def build_table(data, col_widths):
    table = Table(data, colWidths=col_widths, repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#2D4A3E")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), FONT_BOLD),
                ("FONTNAME", (0, 1), (-1, -1), FONT_REGULAR),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("LEADING", (0, 0), (-1, -1), 10.5),
                ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#D9D1C5")),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F7F4EF")]),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("ALIGN", (1, 0), (-1, -1), "CENTER"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return table


def story_intro(title, description):
    return [
        Paragraph("MR MALLORCA GOLF", SMALL),
        Paragraph(title, TITLE),
        Paragraph(description, SUBTITLE),
        Spacer(1, 4),
    ]


def generate_trip_planner():
    story = story_intro(
        "7-Day Mallorca Golf Itinerary",
        "A complete day-by-day plan for seven days of golf in Mallorca. Balances championship courses, scenic rounds, value rounds, and rest days. Includes driving times, difficulty progression, and customization tips.",
    )
    story.extend(
        [
            Paragraph("Days 1-3: Palma and Southwest Foundation", SECTION),
            Paragraph("<b>Day 1: Arrival and Easy Warm-Up</b><br/>Santa Ponsa 1 - €126 peak | Par 72 | Walkable | 25 mins from airport<br/>Public access, forgiving layout, confidence-building. Perfect warm-up after travel.", BODY),
            Paragraph("<b>Day 2: Championship Round</b><br/>Son Gual - €165 peak | Par 72 | Championship | 20 mins from Palma<br/>Andy's favourite. Fast greens, proper test, excellent conditioning. Early tee time recommended.", BODY),
            Paragraph("<b>Day 3: Scenic and Wild</b><br/>Golf de Andratx - €140 peak | Par 72 | Mountain course | 40 mins from Palma<br/>Dramatic views, challenging terrain. New environment adds variety to your week.", BODY),
            PageBreak(),
            Paragraph("MR MALLORCA GOLF", SMALL),
            Paragraph("Days 4-7: Northeast and Rest", SECTION),
            Paragraph("<b>Day 4: Travel / Rest Day</b><br/>Optional: Palma Pitch & Putt (9-hole course, €27-30 for 18 holes) - recovery day. Explore Palma or rest.", BODY),
            Paragraph("<b>Day 5: Northeast Adventure</b><br/>Club de Golf Alcanada - €230 peak | Lighthouse views | 50 mins from Palma", BODY),
            Paragraph("<b>Day 6: Value and Local Gem</b><br/>Pollenca - €75 peak | Scenic | Less crowded", BODY),
            Paragraph("<b>Day 7: Grand Finale</b><br/>Son Muntaner - €260 peak | Premium finish near Palma", BODY),
            Spacer(1, 8),
            Paragraph("<b>7-Day Budget:</b> €2,200-€3,240 per player (peak season, including accommodation and meals).", BODY),
        ]
    )
    return story


def generate_cost_guide():
    header = [["Course", "Peak", "Low", "Buggy", "Clubs", "Diff"]]
    story = story_intro(
        "Mallorca Golf Cost Breakdown 2026",
        "Complete breakdown of green fees, equipment hire, and sample trip budgets for all 24 Mallorca courses. Plan your budget by season, course, and group size. Updated June 2026.",
    )
    story.append(build_table(header + COURSE_COST_ROWS[:17], [56 * mm, 21 * mm, 21 * mm, 21 * mm, 21 * mm, 16 * mm]))
    story.extend(
        [
            PageBreak(),
            Paragraph("MR MALLORCA GOLF", SMALL),
            build_table(header + COURSE_COST_ROWS[17:], [56 * mm, 21 * mm, 21 * mm, 21 * mm, 21 * mm, 16 * mm]),
            Spacer(1, 8),
            Paragraph("<b>Best Value:</b> Maioris (€91-110), Palma Pitch & Putt (€27-30), Son Antem East (€105-140).", BODY),
            Paragraph("<b>Best Premium:</b> Son Muntaner (€110-260), Son Vida (€85-190), Alcanada (€115-230).", BODY),
            Paragraph("<b>Sample Trip Budgets</b>", SECTION),
            Paragraph("3-Day: Son Gual + Alcanada + Santa Ponsa 1 = €510 (peak) | €300 (low) fees + buggy €120 + clubs €90 + meals €150 = €750-860 peak | €450-540 low", BODY),
            Paragraph("5-Day: Green fees €850-950 + buggy €200 + clubs €150 + meals €250 = €1,350-1,550 peak | €850-1,050 low", BODY),
            Paragraph("7-Day: Green fees €1,100-1,300 + buggy €280 + clubs €210 + meals €350 = €1,800-2,140 peak | €1,200-1,500 low", BODY),
        ]
    )
    return story


def generate_course_comparison():
    rows = [
        ["Course", "Difficulty", "Cost (Peak)", "Views", "Facilities", "From Palma", "Best For"],
        ["Son Gual", "5/5", "€165", "4/5", "5/5", "10 min", "Championship"],
        ["Alcanada", "4/5", "€220", "5/5", "4/5", "50 min", "Scenic"],
        ["T Golf Calvia", "4/5", "€210", "3/5", "4/5", "20 min", "Premium"],
        ["Son Muntaner", "4/5", "€260", "3/5", "5/5", "15 min", "Luxury"],
        ["Golf de Andratx", "5/5", "€140", "4/5", "3/5", "45 min", "Challenge"],
        ["Santa Ponsa 1", "3/5", "€125", "2/5", "3/5", "25 min", "Value"],
        ["Son Quint", "3/5", "€172", "2/5", "3/5", "15 min", "Budget"],
        ["Pollenca", "3/5", "€110", "4/5", "3/5", "55 min", "Scenic Value"],
        ["Maioris", "2/5", "€81", "2/5", "2/5", "25 min", "Budget"],
        ["Palma Pitch & Putt", "1/5", "€30", "N/A", "2/5", "2 min", "Beginners"],
    ]
    story = story_intro(
        "Mallorca Course Comparison Chart",
        "Compare 10 popular Mallorca courses by difficulty, cost, views, facilities, and distance from Palma. Use this to decide which courses match your priorities.",
    )
    story.append(build_table(rows, [38 * mm, 20 * mm, 24 * mm, 16 * mm, 20 * mm, 21 * mm, 30 * mm]))
    story.extend(
        [
            Spacer(1, 8),
            Paragraph("Best for championship golf: Son Gual, Golf de Andratx, Alcanada.", BODY),
            Paragraph("Best budget options: Maioris, Son Quint, Palma Pitch & Putt.", BODY),
            Paragraph("Best views: Alcanada, Son Termes, Pollenca.", BODY),
            Paragraph("Best for beginners: Santa Ponsa 1 and 3, Son Quint, Palma Pitch & Putt.", BODY),
        ]
    )
    return story


def generate_beginners_guide():
    story = story_intro(
        "Beginner's Guide to Playing Golf in Mallorca",
        "Everything you need to know before your first round in Mallorca. Whether you're nervous or new to holiday golf, this guide covers the five best beginner courses, what to bring, what to expect, and answers to common questions.",
    )
    story.extend(
        [
            Paragraph("5 Best Beginner Courses", SECTION),
            Paragraph("<b>Palma Pitch & Putt</b> - €27-30 | Difficulty 1/10<br/>Central, par-3 focused, no long drives. Perfect starter round.", BODY),
            Paragraph("<b>Golf Maioris</b> - €91-110 | Difficulty 5/10<br/>Open public play, broad landing areas, and a calmer resort-style round for newer golfers.", BODY),
            Paragraph("<b>Son Quint</b> - €70-172 | Difficulty 5/10<br/>Near Palma, manageable par-4s, good facilities. Accessible difficulty.", BODY),
            Paragraph("<b>Son Antem East</b> - €105-140 | Difficulty 5/10<br/>Resort course, buggy-friendly, coaching available. Gentle terrain.", BODY),
            Paragraph("<b>Pollenca</b> - €65-75 | Difficulty 6/10<br/>Less crowded, beautiful setting, scenery plus slight challenge.", BODY),
            Paragraph("What to Bring", SECTION),
            Paragraph("Golf gear: clubs (rent €30-40), shoes, balls, tees. Clothing: hat, sunscreen, light layers, trousers or shorts, collared shirt. Accessories: water bottle, snacks, towel, phone. Optional: golf glove, notebook for scores.", BODY),
            PageBreak(),
            Paragraph("MR MALLORCA GOLF", SMALL),
            Paragraph("What to Expect on the Day", SECTION),
            Paragraph("Most Mallorca courses expect standard golf etiquette: arrive early, repair pitch marks, keep pace, and respect dress codes. If you are renting clubs or a buggy, confirm this at booking stage.", BODY),
            Paragraph("Beginner-friendly Mallorca rounds are best when you choose a forgiving course, play the right tee, and do not over-schedule the day. A calmer setup nearly always leads to a better first experience.", BODY),
            Paragraph("Need help choosing the right course? Andy can narrow it down based on your level, dates, and where you are staying.", BODY),
        ]
    )
    return story


def build_pdf(filename, story, pagesize=A4):
    doc = SimpleDocTemplate(
        str(DOWNLOADS_DIR / filename),
        pagesize=pagesize,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=16 * mm,
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)


def main():
    DOWNLOADS_DIR.mkdir(parents=True, exist_ok=True)
    build_pdf("trip-planner.pdf", generate_trip_planner())
    build_pdf("cost-guide.pdf", generate_cost_guide(), pagesize=landscape(A4))
    build_pdf("course-comparison.pdf", generate_course_comparison(), pagesize=landscape(A4))
    build_pdf("beginners-guide.pdf", generate_beginners_guide())
    print("Generated lead magnet PDFs in", DOWNLOADS_DIR)


if __name__ == "__main__":
    main()
