# Hill Country Media Group — Next.js Website

Corporate website for Hill Country Media Group LLC, operating brands:
- **LoneStar Network** (thelonestarnetwork.com)
- **Local-SEO.co** (local-seo.co)

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom color system in `tailwind.config.ts`)
- **next/font** (Cormorant Garamond + DM Sans)
- **Supabase** (ready to wire — see Contact.tsx)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Main page — assembles all sections
  globals.css       # CSS variables, custom animations, noise overlay

components/
  Nav.tsx           # Fixed navbar with scroll effect
  Hero.tsx          # Full-height hero with stat row
  Ticker.tsx        # Scrolling services ticker
  About.tsx         # Company overview + DBA cards
  Services.tsx      # 4-service grid (programmatic, SEO, social, OTT)
  LoneStarNetwork.tsx  # Brand feature section with animated star
  LocalSEO.tsx      # Local-SEO.co section with 5-step process
  Advertising.tsx   # 6-capability deep dive grid
  WhyUs.tsx         # Split-panel differentiators section
  Contact.tsx       # CTA + email capture (wire to Supabase/Resend)
  Footer.tsx        # 4-column footer
  SectionEyebrow.tsx  # Reusable eyebrow label component
```

## Custom Colors (tailwind.config.ts)

| Token       | Value     | Usage                        |
|-------------|-----------|------------------------------|
| `black`     | `#06080F` | Page background              |
| `deep`      | `#090C17` | Section backgrounds          |
| `surface`   | `#0E1220` | Card backgrounds             |
| `border`    | `#1A2240` | Borders, dividers            |
| `muted`     | `#2E3D60` | Subtle text, metadata        |
| `cream`     | `#C8D8F5` | Primary body text            |
| `cream-dim` | `#607090` | Secondary body text          |
| `blue`      | `#0099DD` | Primary accent (neon blue)   |
| `blue-lt`   | `#33BBFF` | Hover states                 |
| `blue-dk`   | `#005F8A` | Dark accent variant          |
| `white`     | `#E8F2FF` | Headings, high-contrast text |

## Next Steps

1. **Contact form** — wire `Contact.tsx` to Supabase table + Resend for email notifications
2. **Individual brand pages** — `/lonestar` and `/local-seo` with own branding
3. **Mobile responsive** — add `md:` breakpoints throughout components
4. **CMS** — Sanity or Contentlayer for editable copy
5. **Analytics** — add Vercel Analytics or PostHog
6. **Deploy** — `vercel deploy` or connect repo to Vercel for auto-deploys
