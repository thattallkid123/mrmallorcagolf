import os, glob, re

src = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src'
count = 0

for path in glob.glob(src + '/**/*.jsx', recursive=True):
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        text = f.read()
    original = text
    # Replace -> inside JSX Link/button text with the correct JSX syntax
    text = re.sub(r'(>)([^<]*?) ->(</)', r'\1\2 {">"}' + r'\3', text)
    # Also catch any remaining -> not yet converted
    text = re.sub(r' ->(<\/)', r' {">"}\1', text)
    if text != original:
        count += 1
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        print('Fixed: ' + os.path.basename(path))

print('Done - ' + str(count) + ' files fixed')
