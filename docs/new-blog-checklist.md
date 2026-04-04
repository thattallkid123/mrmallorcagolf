# New Blog Checklist

Use this every time a new blog, guide, or course review is added.

## 1. Finalize The English Source

- Write the English article first.
- Confirm the title, slug, sections, and CTA.
- Confirm whether it is:
  - a guide article
  - a live course review post

## 2. Prepare Images

- Choose the final image set.
- Put images into the correct `public/images/...` folder.
- Prefer WebP when sensible.
- Avoid oversized files.
- Do not rely on guessed captions.

## 3. Add The English Content

### If it is a guide article

- add the English article to `src/lib/guide-article-content.js`
- add or confirm the route under `src/app/guides/<slug>/page.jsx`
- add the card/list entry in `src/lib/guides-content.js`

### If it is a live course review

- add or update the English content in `src/lib/guide-post-content.js`
- make sure the review route uses the shared review renderer/content path

## 4. Add Localized Content

### For guide articles

- add the localized versions in `src/lib/guide-article-content-localized.js`

### For live review posts

- add the localized versions in `src/lib/guide-post-content-localized.js`

### Important rule

- localized pages should mirror English structure
- same block order
- same image order
- same CTA structure
- same fact-box rhythm

## 5. Link Strategy

- if the course has its own blog or review post, link to that
- if it does not, link to the correct course-guide anchor instead

Examples:

- dedicated post: `/guides/son-gual-review`
- guide anchor fallback: `/golf-courses#son-muntaner`

Important:

- featured-course destinations are now controlled through:
  - [golf-courses-helpers.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-helpers.js)
- release checks will fail if a featured homepage course is missing a destination mapping

## 6. Translation Workflow

1. use the English page as source of truth
2. draft translation with the premium translation prompt
3. run the second-pass review prompt
4. insert the final localized copy into the shared files

## 7. Checks Before Push

Run:

```powershell
npm run check:i18n-release
npm run build
```

If either fails, do not push.

That release check now covers:

- text corruption / mojibake
- obvious locale drift
- missing shared-locale coverage
- missing local image references
- missing homepage featured-course destinations

## 8. Visual Check

Check:

- desktop
- mobile
- image crop
- caption treatment
- CTA alignment
- localized parity against English

## 9. Branch Flow

Recommended:

1. work in `i18n-premium-draft`
2. run checks
3. review preview
4. move to `main` only when safe

## 10. Final Rule

If a localized page differs structurally from English, fix the shared system first.
