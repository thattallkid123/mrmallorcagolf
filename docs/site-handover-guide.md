# Site Handover Guide

This file is intentionally short now.

The old version had outdated repo paths and duplicate workflow guidance, which made multilingual maintenance less safe instead of more safe.

## Use These Files Instead

- [site-quickstart.md](c:/Users/andyg/Desktop/cursor/mrmallorca-audit/docs/site-quickstart.md)
- [translation-workflow.md](c:/Users/andyg/Desktop/cursor/mrmallorca-audit/docs/translation-workflow.md)

## Current Rule

For any future copy or translation work:

1. edit the English master source
2. update every affected locale source in the same pass
3. run `npm run check:ready`
4. only review preview for polish, not for basic untranslated leakage

If a non-English page still shows visible English, the release is not ready.
