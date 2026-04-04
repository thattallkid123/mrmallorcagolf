# Translation Notes

Working notes gathered during the multilingual rebuild and kept here as a live reference.

## Brand And Tone

- English source copy is premium, calm, direct, and personal.
- Localized pages should feel written for golfers, not tourists.
- The site should sound knowledgeable and understated, not over-polished or salesy.
- Chinese copy should stay concise and practical rather than overly literal.

## Golf Vocabulary To Keep Consistent

- `green fee` is often left as-is rather than fully translated
- `PGA Advanced Professional` should stay in English as a credential
- `Trackman Master` should stay branded and untranslated
- `handicap` is usually kept as the standard golf term
- `tee time` may be translated by locale, but should stay consistent within each language
- `on-course coaching` should use one preferred phrase per language and not drift page to page

## Content Rules

- Non-English pages should not contain fallback English body copy unless explicitly intended.
- Metadata, CTA copy, and captions should match the same tone as the body copy.
- Numbers, currency, and separators should match locale expectations where appropriate.
- Golf course names remain unchanged.
- Localized pages should mirror English structure unless there is a deliberate design reason not to.

## Design Rules For Localized Pages

- The English page is the layout model.
- Localized pages should not invent a different image order.
- Full-width editorial media is the safe default.
- Half-width media should only be used if text intentionally pairs with it.
- Image cropping should be improved through the shared renderers, not per-locale hacks.

## Branch Context

- `main` = current live site
- `legacy-live-pre-i18n` = old site before the multilingual rebuild
- `live-i18n-premium` = named branch for the multilingual premium site
- `i18n-premium-draft` = staging/work branch

## Useful Reminder

If a localized page differs structurally from English, treat that as a system bug first and a translation issue second.
