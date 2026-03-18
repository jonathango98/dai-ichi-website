# Dai Ichi Indonesia — Website

Official website for Dai Ichi Indonesia, a precision exhaust system manufacturer based in Bulusidokare, Sidoarjo since 1985.

## Stack

- **Vite** + **React 19**
- **React Router DOM v7** (client-side routing)
- **CSS Modules** — no Tailwind; uses CSS custom properties for theming
- Bilingual: Indonesian (default) and English via language toggle

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.module.css
│   └── Footer.jsx / Footer.module.css
├── contexts/
│   └── LanguageContext.jsx   # language state (ID/EN), useLanguage() hook
├── hooks/
│   ├── useInView.js          # IntersectionObserver scroll-reveal
│   └── usePageMeta.js        # per-page <title> and <meta description>
├── i18n/
│   └── translations.js       # all UI strings for both languages
└── pages/
    ├── Home.jsx / Home.module.css
    ├── OurStory.jsx / OurStory.module.css
    └── Contact.jsx / Contact.module.css
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, Trust Bar, Product Grid (3 brands), Virtual Shop CTA, Achievements, Tech Excellence, CTA |
| `/our-story` | Brand origin story, Timeline of Resilience, Values Grid |
| `/contact` | Consultation form, Contact info, Lead times, Brand sidebar |

## Brands

| Brand | Segment | Material |
| --- | --- | --- |
| **Dai-ichi** | Premium OEM & Sport | SUS304 Stainless Steel |
| **Pegasus** | Daily Standard | Aluminized / Galvanized |
| **Cobra Sport** | Performance Custom | SUS304 Stainless Steel |

Online sales via **Pegasus Knalpot** — [@pegasusknalpot](https://instagram.com/pegasusknalpot)

## Design Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--charcoal` | `#2B2B2B` | Backgrounds, text |
| `--red` | `#D32F2F` | CTAs, accents |
| `--silver` | `#C0C0C0` | Secondary text, dividers |
| `--frost` | `#F8F9FA` | Page backgrounds |
| `--font-headline` | Montserrat 700–900 | All headings |
| `--font-body` | Inter 400–600 | Body copy |

## Scroll Animations

Handled by `useInView` (IntersectionObserver). Apply utility classes from `src/index.css`:

- `.reveal` — fade up
- `.reveal-left` — fade from left
- `.reveal-right` — fade from right

Add `.visible` (applied automatically) to trigger. Set stagger via `--reveal-delay` CSS variable.

## Placeholders to Replace Before Launch

Search the codebase for these strings and replace with real values:

| Placeholder | Where |
| --- | --- |
| `PLACEHOLDER_DOMAIN` | `index.html` (canonical, OG, Twitter, JSON-LD) |
| `PLACEHOLDER_WA_NUMBER` | `Footer.jsx`, `Home.jsx` (WhatsApp links) |
| `PLACEHOLDER_FB_URL` | `Footer.jsx`, `index.html` (JSON-LD sameAs) |

## Dev Notes

- ngrok tunnel: add your subdomain to `server.allowedHosts` in `vite.config.js`
- Current allowed host: `unnoticed-kiara-untired.ngrok-free.dev`
