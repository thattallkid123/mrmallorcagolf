"""Build public downloads from the same course, access and logistics masters as the site."""
import json
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parent.parent
DOWNLOADS_DIR = ROOT / 'public' / 'downloads'
PINE = colors.HexColor('#2D4A3E')
# Embed the actual brand fonts; PDF readers do not need web-font support.
for name, filename in [('MMG', 'Jost-400.ttf'), ('MMGBold', 'Jost-500.ttf'), ('MMGHeading', 'CormorantGaramond-Regular-500.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(ROOT / 'MMG-Fonts' / filename)))
pdfmetrics.registerFontFamily('MMG', normal='MMG', bold='MMGBold')
REGULAR = 'MMG'
BOLD = 'MMGBold'
TITLE = ParagraphStyle('title', fontName='MMGHeading', fontSize=25, leading=28, textColor=PINE, spaceAfter=10)
HEADING = ParagraphStyle('heading', fontName='MMGHeading', fontSize=16, leading=18, textColor=PINE, spaceBefore=10, spaceAfter=5)
BODY = ParagraphStyle('body', fontName=REGULAR, fontSize=10, leading=14, spaceAfter=8)
CELL = ParagraphStyle('cell', fontName=REGULAR, fontSize=8.5, leading=10.5)
HEADER = ParagraphStyle('header', parent=CELL, fontName=BOLD, textColor=colors.white)
BRAND = ParagraphStyle('brand', parent=BODY, fontName=BOLD, fontSize=10, leading=13, textColor=PINE, spaceAfter=8)

def text(value):
    return escape(str(value))

def euro(value):
    return 'On request' if value is None else f'€{value:g}'

def intro(title, description):
    return [Paragraph('MR MALLORCA GOLF', BRAND), Paragraph(title, TITLE), Paragraph(description, BODY)]

def table(rows, widths):
    cells = [[Paragraph(text(value), HEADER if index == 0 else CELL) for value in row] for index, row in enumerate(rows)]
    usable_width = landscape(A4)[0] - 36*mm
    result = Table(cells, colWidths=[usable_width*width/sum(widths) for width in widths], repeatRows=1, hAlign='LEFT')
    result.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PINE),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F7F4EF')]),
        ('GRID', (0,0), (-1,-1), .3, colors.HexColor('#D9D1C5')),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 5), ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ('TOPPADDING', (0,0), (-1,-1), 5), ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    return result

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont(REGULAR, 8)
    canvas.setFillColor(colors.HexColor('#6F685F'))
    canvas.drawCentredString(doc.pagesize[0]/2, 10*mm, f'www.mrmallorcagolf.com | andy@mrmallorcagolf.com | {doc.page}')
    canvas.restoreState()

def build(filename, story, data, wide=False):
    doc = SimpleDocTemplate(str(DOWNLOADS_DIR/filename), pagesize=landscape(A4) if wide else A4,
        leftMargin=18*mm, rightMargin=18*mm, topMargin=16*mm, bottomMargin=18*mm,
        title=filename.replace('-', ' ').replace('.pdf',''), author='Mr Mallorca Golf',
        subject='MMG_LEAD_MAGNET_DATA_SHA256:'+data['fingerprint'])
    doc.build(story, onFirstPage=footer, onLaterPages=footer)

def rate_notes(data, table_notes=True):
    note = 'Course-data review: '+data['reviewed']+'. Prices are planning indications, not quotes. Variable rates change by date and demand. '
    if table_notes:
        note += 'An asterisk marks date-variable rates. Nine-hole courses are marked. Palma Pitch &amp; Putt has nine holes; its listed fees cover 18 holes and vary by weekday. Member-only and hotel-only prices are not public visitor rates. '
    return Paragraph(note+'Confirm access and exact prices before booking.', BODY)

def buggy_label(course):
    if course['access'] != 'Public': return 'On request'
    if not course['buggy']: return 'Not needed'
    if course['buggyIncludedAtPeak']: return euro(course['buggy'])+' low; included peak'
    return euro(course['buggy'])

def generate_cost_guide(data):
    story = intro('Mallorca Golf Cost Breakdown 2026', 'Green fees, buggy hire and daily licences for all 24 courses. Buggy prices are per vehicle, normally shared by two golfers. The table distinguishes visitor rates from restricted access.')
    rows=[['Course','Holes','Low','Peak','Buggy','Licence / player','Handicap','Access']]
    for c in data['courses']:
        rows.append([c['name'],c['holes'],euro(c['low']),euro(c['peak'])+(' *' if c['dynamic'] else ''),buggy_label(c),euro(c['licence']),c['handicap']+(' + certificate' if c['certificate'] else ''),c['access']])
    story.extend([table(rows,[49,12,18,18,31,21,37,35]),Spacer(1,10),rate_notes(data)])
    chosen=[next(c for c in data['courses'] if c['canonicalName']==name) for name in ['Golf Son Gual','Club de Golf Alcanada','Golf Santa Ponsa 1']]
    hire=sum(c['buggy'] for c in chosen)/2
    low=sum(c['low']+c['licence'] for c in chosen)+hire
    peak=sum(c['peak']+c['licence'] for c in chosen)+hire
    story.extend([Paragraph('A three-round golf budget',HEADING),Paragraph(f'Two golfers playing Son Gual, Alcanada and Santa Ponsa 1, sharing one buggy each round: {euro(low)} to {euro(peak)} per golfer. This includes the three green fees, shared buggy hire and published daily licences. It excludes club hire, meals, transport, accommodation, golf-booking fees and coaching.',BODY),Paragraph('Rental clubs and off-course costs',HEADING),Paragraph('Club hire depends on equipment, course and the number of days. Ask for the hire-company quote before deciding whether to bring your own clubs. Hotels, transfers and dining are priced separately for your dates and group. Golf booking carries a fee of 5% of green fees; full planning is quoted separately.',BODY),Paragraph('For your own dates and group, use the <link href="https://www.mrmallorcagolf.com/tools/golf-cost-calculator" color="#2D4A3E">trip cost calculator</link> or <link href="https://www.mrmallorcagolf.com/contact?service=tee-time-booking" color="#2D4A3E">ask me to book the golf</link>.',BODY)])
    return story

def generate_course_comparison(data):
    story=intro('Mallorca Course Comparison Chart', 'All 24 courses compared by green fees, difficulty, holes, walking, published access rules and approximate drive time from Palma. Difficulty is my course-guide rating, out of ten. Travel depends on your exact hotel and traffic.')
    rows=[['Course','Holes / par','Difficulty','Low','Peak','Walk','Palma drive','Access / handicap']]
    for c in data['courses']:
        access=c['access']+'; '+c['handicap']+('; certificate' if c['certificate'] else '')
        rows.append([c['name'],str(c['holes'])+' / '+str(c['par']),c['difficulty'],euro(c['low']),euro(c['peak'])+(' *' if c['dynamic'] else ''),c['walk'],str(c['fromPalma'])+' min' if c['fromPalma'] else 'Confirm',access])
    story.extend([table(rows,[46,17,18,18,18,34,23,47]),Spacer(1,10),rate_notes(data),Paragraph('Start with your handicap, where you are staying and how much driving you want. A short course can suit an arrival afternoon; a full 18-hole round needs more time. The <link href="https://www.mrmallorcagolf.com/tools/handicap-checker" color="#2D4A3E">handicap checker</link> separates courses you can book from those that need a certificate or an enquiry.',BODY)])
    return story

def generate_trip_planner(data):
    # Seven compact days fit on one A4 page without an orphaned closing CTA.
    body = ParagraphStyle('trip-body', parent=BODY, fontSize=9.5, leading=12.5, spaceAfter=5)
    heading = ParagraphStyle('trip-heading', parent=HEADING, fontSize=15, leading=16, spaceBefore=7, spaceAfter=4)
    story=intro('7-Day Mallorca Golf Itinerary', 'A sample week from a Palma hotel, with four planned rounds, a rest day and optional golf around arrival and departure. Change the length and pace to suit your group. This is an example, not a fixed trip or booking.')
    days=[('Day 1: arrive and settle in',None,'Leave time for the flight, luggage and check-in. A short round is optional once the arrival time and daylight are known.'),('Day 2: Santa Ponsa 1','Golf Santa Ponsa 1','A full round near the southwest. Choose tees for the group and leave the evening open.'),('Day 3: Son Gual','Golf Son Gual','Put the more technical round after the group has settled. Play With A Pro can be discussed for this day.'),('Day 4: a day without a tee time',None,'Keep the day for Palma, a coastal visit or a quieter afternoon.'),('Day 5: Alcanada','Club de Golf Alcanada','Give the northern round its own day. Check the drive and tee time before adding evening plans.'),('Day 6: Son Vida','Golf Son Vida','Return to golf near Palma. Keep the course choice flexible for the group and the week’s weather.'),('Day 7: departure',None,'Only add another round if the flight time leaves space for golf, traffic, returning a hire car and airport check-in. An early flight means no golf.')]
    for title,name,description in days:
        story.append(Paragraph(title,heading))
        if name:
            c=next(c for c in data['courses'] if c['canonicalName']==name)
            description = f'{text(c["name"])}: {euro(c["low"])} to {euro(c["peak"])} green fee; {c["holes"]} holes, par {c["par"]}; about {c["fromPalma"]} minutes from Palma. {text(c["handicap"])}'+('; certificate required. ' if c['certificate'] else '. ')+description
        story.append(Paragraph(description,body))
    # Venue facts checked against their official sites on 21 October 2026.
    story.extend([
        Paragraph('A Palma base and two meal ideas', heading),
        Paragraph('<b>Stay: Hotel Saratoga.</b> A central Palma hotel for evenings in the city. Each round in this example needs a drive; it is not a course-side base. Use the <link href="https://www.mrmallorcagolf.com/tools/hotel-recommender" color="#2D4A3E">hotel recommender</link> to compare options for your group.', body),
        Paragraph('<b>After Son Vida: Son Vida Restaurant.</b> Tapas beside the 18th green make it a straightforward lunch stop on day 6, with no extra drive between golf and lunch.', body),
        Paragraph('<b>A Palma dinner: Marc Fosh.</b> Contemporary Mediterranean cooking in the old Convent de la Missió. Put a longer dinner on the rest day, rather than tying it to the return from Alcanada. Book tables ahead for your group.', body),
    ])
    story.extend([rate_notes(data, table_notes=False),Paragraph('Before booking',heading),Paragraph('Confirm the group’s handicaps, dates, hotel, walking or buggy needs, and a budget per person. Prices above are green fees, not a whole-trip price. I plan and book the golf. For hotels, transfers and other arrangements, I work with a local travel partner. We agree the scope, prices and who handles each part before booking.',BODY),Paragraph('<link href="https://www.mrmallorcagolf.com/contact?service=trip-planning" color="#2D4A3E">Send your dates and group details</link>. For another example, read the <link href="https://www.mrmallorcagolf.com/guides/5-day-mallorca-golf-itinerary" color="#2D4A3E">five-round Palma itinerary</link>.',BODY)])
    return story

def generate_beginners_guide(data):
    story=intro('Beginner’s Guide to Playing Golf in Mallorca', 'Start with course access, then choose a layout and length that suit your group. An approachable layout does not remove a club’s handicap or certificate rules.')
    for name in ['Palma Pitch & Putt','Golf Son Quint','Golf Son Antem East','Golf Maioris','Golf Pollença']:
        c=next(c for c in data['courses'] if c['canonicalName']==name)
        price_line = f'{c["holes"]} holes, par {c["par"]}; green fees {euro(c["low"])} to {euro(c["peak"])}. '
        if name == 'Palma Pitch & Putt':
            price_line = f'9 holes, par 27. The published {euro(c["low"])} to {euro(c["peak"])} fee covers 18 holes. '
        story.extend([Paragraph(text(c['name']),HEADING),Paragraph(price_line+text(c['handicap'])+('; a valid handicap certificate is required.' if c['certificate'] else '. No official handicap certificate is required.'),BODY)])
    story.extend([rate_notes(data, table_notes=False),Paragraph('Before the round',HEADING),Paragraph('Pack a golf polo, tailored shorts or trousers and golf shoes without metal spikes. Dress rules vary: Son Quint permits jeans and T-shirts, but that is not a rule for every club. Confirm access, rental equipment and check-in time. Bring balls, tees, water, a hat and sun protection. Repair pitch marks, keep up with the group ahead, and let the club know if you are new to the game.',BODY),Paragraph('A first day with me',HEADING),Paragraph('My coaching takes place on the course through Play With A Pro. We choose the course around your game. Send me your experience level, dates and where you are staying before deciding on a format.',BODY),Paragraph('<link href="https://www.mrmallorcagolf.com/tools/handicap-checker" color="#2D4A3E">Check course access</link> or <link href="https://www.mrmallorcagolf.com/contact?service=pwap" color="#2D4A3E">enquire about Play With A Pro</link>.',BODY)])
    return story

def main():
    result=subprocess.run(['node','--no-warnings','scripts/export-lead-magnet-data.mjs'],cwd=ROOT,check=True,capture_output=True,encoding='utf-8')
    data=json.loads(result.stdout)
    assert len(data['courses'])==24
    DOWNLOADS_DIR.mkdir(parents=True,exist_ok=True)
    for name,generator,wide in [('cost-guide',generate_cost_guide,True),('course-comparison',generate_course_comparison,True),('trip-planner',generate_trip_planner,False),('beginners-guide',generate_beginners_guide,False)]:
        build(name+'.pdf',generator(data),data,wide)
    print('Generated four PDFs from 24 canonical course records; fingerprint '+data['fingerprint'])

if __name__=='__main__': main()
