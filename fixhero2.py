path = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src\styles\globals.css'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    '  justify-content: flex-end;\n  padding: 0 40px 80px;',
    '  justify-content: center;\n  padding: 80px 40px 80px;'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
print('Done')
