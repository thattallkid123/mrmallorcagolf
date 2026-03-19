path = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src\styles\globals.css'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Hero should align content to flex-start (top) not center/end, and have top padding matching nav height
text = text.replace(
    '.hero {',
    '.hero { padding-top: 80px !important;'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
print('Done')
