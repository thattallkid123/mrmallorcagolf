# MMG Workflows

Quick reference for all recurring tasks. When Andy asks how to do something, check here first.

---

## Updating an HTML tool (guide / deals / day-cost)

These live at `C:\Users\andyg\Desktop\cursor\mmg-tools\`

### Option A — Edit on GitHub (no terminal needed, recommended)
1. Go to github.com/thattallkid123/mmg-tools
2. Open the file (e.g. `calculator/index.html`)
3. Click the pencil icon (Edit)
4. Make changes
5. Click **Commit changes**
6. Netlify auto-deploys in ~30 seconds

### Option B — Edit locally then push
1. Edit the file in Cursor / Claude / any editor
2. Open terminal:
```bash
cd C:\Users\andyg\Desktop\cursor\mmg-tools
git add .
git commit -m "describe what you changed"
git push
```
3. Netlify auto-deploys in ~30 seconds

### Live URLs
| Tool | URL |
|---|---|
| Course Guide 2026 | guide.mrmallorcagolf.com |
| Deal Calculator | deals.mrmallorcagolf.com |
| Day Cost Guide | day-cost.mrmallorcagolf.com |

---

## Publishing a blog post on mrmallorcagolf.com

Blog posts are guide pages that live in `src/app/guides/[slug]/`.

### Steps
1. Tell Claude: "Write a blog post about [topic]" — use the `blog-writing` and `seo-content` skills
2. Claude creates the page file in `src/app/guides/[slug]/page.jsx`
3. Claude adds translations for all 7 languages
4. Run checks: `npm run check:text && npm run check:i18n-release && npm run build`
5. Push to GitHub:
```bash
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
git add .
git commit -m "add guide: [post name]"
git push
```
6. Vercel auto-deploys to mrmallorcagolf.com in ~60 seconds

### Languages
English is always written first. Translations are generated for: de, es, fr, nl, sv, zh.
Never add content to a language page that isn't in the English version.

---

## Making a change to the main MMG website

1. Tell Claude what you want changed (copy, layout, new section, etc.)
2. Claude edits the relevant file in `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\`
3. Claude runs build check before pushing
4. Push:
```bash
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
git add .
git commit -m "describe the change"
git push
```
5. Live on Vercel in ~60 seconds

---

## WhatsApp / social preview (OG tags)

If a link shared on WhatsApp shows the wrong image or no image:
1. Go to developers.facebook.com/tools/debug
2. Paste the URL → click **Scrape Again**
3. WhatsApp cache clears within 24-72hrs after that

The 3 HTML tools and main site all have OG tags set. Image used: `mrmallorcagolf.com/images/hero-main.jpg`

---

## Adding a new HTML tool (future)

1. Create a new folder in `C:\Users\andyg\Desktop\cursor\mmg-tools\` (e.g. `new-tool/`)
2. Put the HTML file inside as `index.html`
3. Add a `netlify.toml` in that folder (copy from any existing folder)
4. Add OG meta tags to the HTML `<head>` (title, description, og:image, twitter:card)
5. Push to GitHub
6. Create a new Netlify site → Import from GitHub → thattallkid123/mmg-tools → base dir: `new-tool`
7. Add custom domain in Netlify + CNAME in Cloudflare

---

## Non-MMG projects (e.g. Mallorca Hub)

These use a separate GitHub repo per project → Netlify (no custom domain unless you buy one).

### Setup (one-time per project)
1. Create new GitHub repo
2. Add `index.html` to root
3. Connect to new Netlify site
4. Use Netlify URL (e.g. mallorca-hub.netlify.app)

### Update workflow
Same as Option B above — edit locally or on GitHub, push, auto-deploys.

---

## Syncing docs folder

The `docs/` folder in the MMG repo has copies of key files from Google Drive.
To sync after updating a source file, tell Claude: "sync docs"
Current synced files: `docs/MMG_BEEHIIV_SETUP.md`, `docs/MMG_CONTACTS_PUBLIC.xlsx`
