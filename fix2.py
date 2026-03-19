import os, re, glob

src = r'C:\Users\andyg\Downloads\mrmallorcagolf-nextjs\mrmallorcagolf\src'

# First fix the French about page syntax error
fr_about = src + r'\app\fr\about\page.jsx'
with open(fr_about, 'r', encoding='utf-8', errors='replace') as f:
    text = f.read()

# The apostrophe in French text inside JS strings needs escaping
# d'Andy should be d\'Andy inside single-quoted JS strings
text = text.replace("d'Andy", "d\\'Andy")
text = text.replace("l'ile", "l\\'ile")
text = text.replace("d'un", "d\\'un")
text = text.replace("d'une", "d\\'une")
text = text.replace("c'est", "c\\'est")
text = text.replace("n'est", "n\\'est")
text = text.replace("qu'il", "qu\\'il")
text = text.replace("j'ai", "j\\'ai")
text = text.replace("s'est", "s\\'est")

with open(fr_about, 'w', encoding='utf-8') as f:
    f.write(text)
print('Fixed French about page')
