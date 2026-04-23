# Mr Mallorca Golf Shot Tracker Setup

This is the fastest path to use `/shot-tracker` on course.

## What Is Included

- Mallorca course selector with priority courses.
- Custom hole overview maps with target, carry, lay-up, and green distances.
- GPS start/end shot tracking using the phone browser.
- Round scorecard, fairways, GIR, putts, penalties, club distances, handicap history, and strokes-gained-style snapshot.
- Local device storage plus `Export backup` for saved tracker data.
- Mr Mallorca Golf branding using the transparent logo assets in `public`.

## Quick Local Check

From the project folder:

```bash
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
npm install
npm run dev
```

Open this on the computer:

```text
http://localhost:3000/shot-tracker
```

This is only for checking the app at home. Localhost will not work on the course.

## Use On Course Today

The tracker needs an HTTPS URL for phone GPS access. The simplest flow is Netlify or Vercel.

### Netlify Web Dashboard

1. Push this project to GitHub.
2. Go to Netlify.
3. Choose `Add new project`.
4. Import the GitHub repository.
5. Use build command:

```bash
npm run build
```

6. Leave publish directory/default framework settings as Netlify detects Next.js.
7. Deploy.
8. Open the deployed URL on your phone.
9. Add `/shot-tracker` to the end of the URL.
10. Allow location access when the browser asks.

### Phone Home Screen

On iPhone:

1. Open the deployed `/shot-tracker` URL in Safari.
2. Tap Share.
3. Tap `Add to Home Screen`.

On Android:

1. Open the deployed `/shot-tracker` URL in Chrome.
2. Tap the browser menu.
3. Tap `Install app` or `Add to Home screen`.

## On-Course Flow

1. Select the course and tee.
2. Select the current hole.
3. Before hitting, enter club and optional note.
4. Tap `Start tracking`.
5. Walk to the ball.
6. Tap `End tracking`.
7. Add score, putts, penalties, fairway, and GIR.
8. Tap `Next hole`.
9. After the round, tap `Save round`.
10. Tap `Export backup` if you want a local JSON copy before cloud sync exists.

## Important Notes

- GPS accuracy depends on the phone signal and browser permission.
- Data currently stays on that device until cloud sync is added.
- The hole maps are custom Mr Mallorca Golf concept maps, not licensed satellite/green-contour maps.
- If you change phone or clear browser data, export a backup first.
