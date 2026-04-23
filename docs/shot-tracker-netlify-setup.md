# Deploy The Shot Tracker On Netlify

This project is a Next.js app. Netlify supports Next.js through its framework integration, so the setup is simple.

## Files That Matter

- `netlify.toml`
  - Sets the build command to `npm run build`.
- `src/app/shot-tracker/page.jsx`
  - The `/shot-tracker` page.
- `src/app/shot-tracker/shot-tracker-prototype.jsx`
  - The tracker app.
- `src/app/manifest.js`
  - Makes the deployed URL installable on a phone home screen.

## Netlify Dashboard Steps

1. Push the repo to GitHub.
2. Open Netlify.
3. Click `Add new project`.
4. Choose `Import an existing project`.
5. Select the GitHub repo.
6. Build command should be:

```bash
npm run build
```

7. If Netlify asks for publish directory, leave the detected Next.js default.
8. Deploy.
9. Open:

```text
https://your-netlify-site.netlify.app/shot-tracker
```

10. On the phone, allow location access.

## Why HTTPS Matters

Phone GPS in the browser requires a secure origin. A Netlify HTTPS URL works; `localhost` only works on the development machine.

## Before Playing

Do this quick test before going to the first tee:

1. Open `/shot-tracker` on your phone.
2. Choose a course and hole.
3. Tap `Refresh GPS`.
4. Confirm the browser asks for location and does not show an error.
5. Add the page to your phone home screen.

## Current Limitation

Rounds are stored in browser local storage for now. Use `Export backup` after testing or after a round if you want to keep a copy before cloud sync is added.
