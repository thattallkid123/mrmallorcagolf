import os, glob

src = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src'

fixes = {
    'Die Erlebnisse entdecken \ufffd': 'Die Erlebnisse entdecken ->',
    'Anfragen \ufffd': 'Anfragen ->',
    'Ihren Tag buchen \ufffd': 'Ihren Tag buchen ->',
    'Voir les experiences \ufffd': 'Voir les experiences ->',
    'Voir les exp\u00e9riences \ufffd': 'Voir les exp\u00e9riences ->',
    'Demander \ufffd': 'Demander ->',
    'R\u00e9servez votre journ\u00e9e \ufffd': 'R\u00e9servez votre journ\u00e9e ->',
    'Ver las experiencias \ufffd': 'Ver las experiencias ->',
    'Consultar \ufffd': 'Consultar ->',
    'Reserve su d\u00eda \ufffd': 'Reserve su d\u00eda ->',
    '\u4e86\u89e3\u4f53\u9a8c\u9879\u76ee \ufffd': '\u4e86\u89e3\u4f53\u9a8c\u9879\u76ee ->',
    '\u7acb\u5373\ufffd\ufffd\u8be2 \ufffd': '\u7acb\u5373\u548c\u8be2 ->',
    '\u9884\u8ba2\u60a8\u7684\u9ad8\u5c14\u592b\u65e5 \ufffd': '\u9884\u8ba2\u60a8\u7684\u9ad8\u5c14\u592b\u65e5 ->',
    'Se upplevelserna \ufffd': 'Se upplevelserna ->',
    'F\u00f6rfr\u00e5gan \ufffd': 'F\u00f6rfr\u00e5gan ->',
    'Boka din dag \ufffd': 'Boka din dag ->',
    'Bekijk de ervaringen \ufffd': 'Bekijk de ervaringen ->',
    'Aanvragen \ufffd': 'Aanvragen ->',
    'Reserveer uw dag \ufffd': 'Reserveer uw dag ->',
}

count = 0
for path in glob.glob(src + '/**/*.jsx', recursive=True):
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        text = f.read()
    original = text
    for broken, fixed in fixes.items():
        text = text.replace(broken, fixed)
    if text != original:
        count += 1
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        print('Fixed: ' + os.path.basename(path))

print('Done - ' + str(count) + ' files fixed')
