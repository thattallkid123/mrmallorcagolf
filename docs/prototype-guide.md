# Prototype Image Reference & Deployment Checklist

Reference for interactive tools, quizzes, and selectors in `prototypes/`. Used by the `/new-prototype` skill.

## Image sourcing rule

All prototype images come from `public/images/`. Do NOT use external stock photos (Unsplash, Pexels, etc.). All images are WebP, optimized, and deployed with the site.

**Available image paths:**

| Path | Courses Covered | Use Case |
|------|---|---|
| `/images/*-card.webp` | alcanada, son-gual, t-golf-calvia, son-muntaner, santa-ponsa, andratx | Guide listing cards (homepage, guides page) |
| `/images/courses/*.webp` | All 24 courses including son-vida, son-quint, bendinat, capdepera, canyamel, pula, son-servera, maioris, vall-dor, + others | Detail pages, quizzes, recommenders |

**How to use in prototypes:**

```html
<!-- For guide card images (if available) -->
<img src="/images/son-gual-card.webp" alt="Son Gual course view">

<!-- For course detail images (fallback for all courses) -->
<img src="/images/courses/bendinat.webp" alt="Bendinat coastal course">
```

**When adding a new prototype:**
1. Check if card images exist for your courses (`/images/*-card.webp`)
2. If not, use course detail images (`/images/courses/*.webp`)
3. Never hardcode Unsplash, Pexels, or other external URLs
4. Add `loading="lazy"` and appropriate `alt` text to all images
5. Test that images load when prototype is served from the site

**If an image is missing:**
- For guide cards: request from `Drive/Media/` or use course detail image as fallback
- For course detail images: check `public/images/courses/` first; if missing, it needs to be added to the project

## Prototype Deployment Checklist (/zh site)

**Before deploying any prototype to the /zh site:**

1. **Images**
   - [ ] All course images load via `/images/` paths (not external Unsplash/Pexels)
   - [ ] WeChat QR code exists at `public/images/wechat-qr.png`
   - [ ] Images tested on site (not just standalone HTML)

2. **Contact details**
   - [ ] WeChat ID: `andygriffiths1` (in code + image)
   - [ ] WhatsApp: `+34624466702` (from `WhatsAppButton.jsx`)
   - [ ] Contact links point to `/zh/contact`, `/zh/play-with-a-pro`, `/zh/guides`

3. **Email integration**
   - [ ] Email endpoint exists (`/api/zh-selector-email` for course selector)
   - [ ] Resend API key configured (not MailerLite)
   - [ ] Email template tested with real data

4. **Analytics**
   - [ ] Baidu Analytics wired up (GA4 blocked in mainland China)
   - [ ] Track events: `zh_selector_start`, `zh_answer_selected`, `zh_recommendation_viewed`, `zh_email_results`, `zh_wechat_click`, `zh_booking_click`

5. **Localization**
   - [ ] Run `npm run check:locale-parity` to verify /zh consistency
   - [ ] Check for English leaks in Chinese content
   - [ ] Verify all contact labels use Chinese (not English WhatsApp/WeChat)
