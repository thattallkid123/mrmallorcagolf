import os, re, glob

src = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src'
count = 0

for path in glob.glob(src + '/**/*.jsx', recursive=True):
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        text = f.read()
    original = text
    text = re.sub(r"\\+'", '', text)
    text = re.sub(r" \\+$", '', text, flags=re.MULTILINE)
    text = re.sub(r"\\+>", '>', text)
    if text != original:
        count += 1
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        print('Fixed: ' + os.path.basename(path))

print('Done - fixed ' + str(count) + ' files')
