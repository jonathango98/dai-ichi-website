# Brand & Design Strategy: CV Dai Ichi Indonesia

This document is the single source of truth for CV Dai Ichi Indonesia — covering company facts, brand identity, design system, and website implementation.

> **IMPORTANT — AI instruction:** Do not fabricate, infer, or invent any company information, copy, statistics, quotes, dates, names, or other content that is not explicitly stated in this document. If information is missing or marked as a placeholder, leave it as a placeholder or ask the owner — never fill it in with assumed or generated content.

---

## 0. Dev Environment Notes

* **ngrok tunnel:** When exposing the dev server via ngrok, add the ngrok host to `server.allowedHosts` in `vite.config.js` to prevent the "Blocked request" error:
  ```js
  server: {
    allowedHosts: ['your-subdomain.ngrok-free.app'],
  }
  ```
  Current allowed host: `unnoticed-kiara-untired.ngrok-free.dev`

---

## 1. Company Overview

CV Dai Ichi Indonesia is a precision exhaust system manufacturer based in Bulusidokare, Sidoarjo, Indonesia. Founded in 1985, the company has over 40 years of experience producing OEM, daily, and custom performance exhaust systems using industrial-grade fabrication technology — including gas cutting, MIG welding, polishing machines, and precision pipe bending.

**Key Stats** *(mark [CONFIRM] = value conflicts between source documents — owner to verify)*

| Metric | Value |
|---|---|
| Units sold | 500,000+ |
| Years in operation | 40+ years (since 1985) |
| Product brands | 3 |
| Vehicle models covered | 100+ |
| Partner workshops | 100+ |
| Cities covered | 50+ |

---

## 2. Brand Name Origin — 第一 (Dai-ichi)

"Dai-ichi" (第一) is Japanese for **"The Big One"**. The name carries a dual family heritage:

* **"Dai"** — from **Daisy**, wife of founder **Yahya Goenadibrata**
* **"ichi"** — from **Ichikawa**, the city in Japan where Yahya's brother **Teguh Goenadibrata** (also referred to as Tjhiang) and his wife lived and worked, which inspired the monozukuri (craftsmanship) philosophy that Yahya carried into the business

The name is both an aspiration and a family legacy — precision without compromise, quality without exception.

---

## 3. Three Brands

### 3a. Dai-ichi — Premium OEM & Sport

High-grade SUS304 stainless steel exhaust systems for OEM fitment and sport applications.

| Feature | Detail |
|---|---|
| Material | High-Grade SUS304 Stainless Steel |
| Technology | MIG Welding, Gas Cutting, Heat Resistant Paint |
| Fitment | OEM Precision |
| Availability | Ready Stock |
| Warranty | Yes |

* **Asset:** `public/dai-ichi-logo.png` — white lettermark, transparent background. Used in navbar, footer, and Dai-ichi product card.

### 3b. Pegasus — Daily OEM Premium Standard

Reliable daily exhaust systems using aluminized and galvanized steel. Covers all popular vehicle models at competitive pricing.

| Feature | Detail |
|---|---|
| Material | Aluminized & Galvanized Steel |
| Market | Daily drivers, popular models |
| Availability | Ready Stock |
| Price Point | Competitive |

* **Asset:** `public/pegasus-logo.png` — white pegasus silhouette, transparent background. Used in Pegasus product card.
* **Online Store:** Instagram [@pegasusknalpot](https://instagram.com/pegasusknalpot) · WhatsApp · Facebook

### 3c. Cobra Sport — Performance & Custom Fabrication

Full custom high-grade stainless steel fabrication for enthusiasts who want a unique sound profile and performance output. Every unit is built to the customer's vehicle specification.

| Feature | Detail |
|---|---|
| Material | High-Grade SUS304 Stainless Steel |
| Fabrication | Full Custom |
| Sound Profile | Custom-tuned per spec |
| Use | Track & Street |
| Lead Time | ~2 weeks |

* **Asset:** `public/cobra-sports-logo.png` — white cobra silhouette, transparent background. Used in Cobra Sport product card.

### 3d. Virtual Shop — Pegasus Knalpot

* **Name:** Pegasus Knalpot (also referred to as "Toko Virtual").
* **Purpose:** Online storefront where customers can purchase any product from the three brands and choose delivery to a partnered mechanic shop (for installation) or directly to their home.
* **Instagram:** [@pegasusknalpot](https://instagram.com/pegasusknalpot)
* **WhatsApp:** `PLACEHOLDER_WA_NUMBER` *(to be replaced with actual number/link)*
* **Facebook:** `PLACEHOLDER_FB_URL` *(to be replaced with actual page URL)*

---

## 4. Company Timeline

**1985** — Founded as an exhaust workshop in the back lot of spare parts store **Agung Motor**, Jl. Gajahmada 31, Sidoarjo. Agung Motor served as the retail and distribution front for Dai-ichi's exhaust production. The company supplied OEM replacement exhaust for popular Japanese vehicles including Honda and Daihatsu, at a time when importing original parts from Japan was prohibitively expensive.

**1993** — A fire at Jl. Gajahmada 33, Sidoarjo destroyed Agung Motor and the workshop entirely. Rather than closing, the company took this as a turning point — a resolve to rebuild stronger.

**1995** — A new factory was established in **Bulusidokare, Sidoarjo** on approximately 7,000 m² of land, marking the start of a full-scale manufacturing operation. The same year, a second brand — **Pegasus Knalpot** — was launched and operated from Ngagel Jaya 73, later expanding to Jl. Ngagel Jaya 31, Surabaya. This marked the transition from a single workshop to a multi-brand group.

**2000s** — Era of modernisation. Investment in precision industrial equipment: automated MIG welding, gas cutting machines, and polishing systems. Quality standards rose significantly, opening access to larger OEM markets.

**2015** — Founder **Yahya Goenadibrata** passed away. The company transitioned to second-generation family leadership. The Pegasus Knalpot retail and installation outlet in Surabaya was closed and all operations — including equipment, modification, and installation — were consolidated into the Sidoarjo factory.

**Today** — Three brands, one factory, one commitment. Dai-ichi for OEM standard, Pegasus for daily premium OEM, Cobra Sport for custom performance fabrication. Yahya Goenadibrata's legacy lives on in every weld.

---

## 5. Manufacturing Technology

| Process | Description |
|---|---|
| **Gas Cutting** | Precision cutting for consistent dimensional accuracy |
| **MIG Welding** | Metal Inert Gas welding — strong, sealed, corrosion-resistant joints |
| **Polishing Machine** | Multi-stage polishing for high-quality mirror finish |
| **Precision Bending** | Controlled-radius pipe bending for optimal exhaust flow and perfect fitment |

---

## 6. Brand Tone of Voice

The communication style is **"The Master Craftsman"**:
* **Authoritative:** Demonstrating deep technical knowledge of metallurgy and precision welding.
* **Legacy-Rich:** Honoring the 1985 foundation and the story behind the Dai-ichi name.
* **Technical:** Using precise terms like MIG Welding, SUS304, and Laser Cutting to build professional trust.
* **Ambitious:** Reflecting the "Dai-ichi" (Number 1) name, bold and market-leading.

---

## 7. Color Scheme & Typography

| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary** | Industrial Charcoal | `#2B2B2B` | Main text, dark backgrounds, and headers. |
| **Secondary** | Heritage Red | `#D32F2F` | CTA buttons, "Number 1" highlights, and branding accents. |
| **Accent** | Stainless Silver | `#C0C0C0` | Technical icons, dividers, and metallic accents. |
| **Neutral** | Steel Frost | `#F8F9FA` | Page backgrounds and clean content sections. |

* **Headlines:** *Montserrat* (Bold/All-caps) — loaded via Google Fonts.
* **Body Text:** *Inter* — loaded via Google Fonts.
* **CSS vars:** `--charcoal`, `--red`, `--silver`, `--frost`, `--white`, `--font-headline`, `--font-body`

---

## 8. Overall Mood & Visual Style

* **Mood:** Industrial, Precise, Powerful, and Trustworthy.
* **Imagery Style (Future):**
    * **Action Shots:** Close-ups of MIG welding sparks, laser cutting, and polishing machines — for the Technical Excellence section.
    * **Product Shots:** Hero shots of finished stainless steel systems — for product cards.
    * **Heritage:** Historical photos of the original 1985 Sidoarjo site and the Jl. Gajahmada store — for the Our Story timeline.

---

## 9. SEO & Meta Data

Every page must include complete meta tags for search engines and social sharing. All strings live in `src/i18n/translations.js` and switch with the active language.

### Global Defaults (in `index.html` `<head>`)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://PLACEHOLDER_DOMAIN/" />

<!-- Primary Meta -->
<title>Dai Ichi Indonesia — Knalpot OEM, Custom & Performance Exhaust</title>
<meta name="description" content="CV Dai Ichi Indonesia — manufacturer of OEM, custom, and performance exhaust systems since 1985. SUS304 stainless steel. Shop online via Pegasus Knalpot." />
<meta name="keywords" content="knalpot, exhaust, OEM, SUS304, stainless steel, custom exhaust, Dai Ichi, Pegasus Knalpot, Cobra Sport, Indonesia, Sidoarjo" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dai Ichi Indonesia — Knalpot OEM, Custom & Performance Exhaust" />
<meta property="og:description" content="Manufacturer of OEM, custom, and performance exhaust systems since 1985. Shop online via Pegasus Knalpot." />
<meta property="og:image" content="https://PLACEHOLDER_DOMAIN/og-image.jpg" />
<meta property="og:url" content="https://PLACEHOLDER_DOMAIN/" />
<meta property="og:locale" content="id_ID" />
<meta property="og:locale:alternate" content="en_US" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Dai Ichi Indonesia — Knalpot OEM, Custom & Performance Exhaust" />
<meta name="twitter:description" content="Manufacturer of OEM, custom, and performance exhaust systems since 1985." />
<meta name="twitter:image" content="https://PLACEHOLDER_DOMAIN/og-image.jpg" />
```

### Per-Page Overrides

| Route | Title (EN) | Description (EN) |
| :--- | :--- | :--- |
| `/` | Dai Ichi Indonesia — OEM, Custom & Performance Exhaust | CV Dai Ichi Indonesia — manufacturer of exhaust systems since 1985. 3 brands, SUS304 stainless steel, nationwide delivery. |
| `/our-story` | Our Story — Dai Ichi Indonesia | The story behind Dai Ichi Indonesia: from a 1985 Sidoarjo workshop to Indonesia's trusted exhaust manufacturer. |
| `/contact` | Contact Us — Dai Ichi Indonesia | Consult with a fabrication expert. Reach us via WhatsApp, Instagram, or our online form. |

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CV Dai Ichi Indonesia",
  "url": "https://PLACEHOLDER_DOMAIN",
  "logo": "https://PLACEHOLDER_DOMAIN/dai-ichi-logo.png",
  "description": "Manufacturer of OEM, custom, and performance exhaust systems since 1985.",
  "foundingDate": "1985",
  "sameAs": [
    "https://instagram.com/pegasusknalpot",
    "PLACEHOLDER_FB_URL"
  ]
}
```

---

## 10. Website Structure (As Built)

### Tech Stack
* Vite + React 19, React Router DOM v7
* CSS Modules (no Tailwind)
* Bilingual: Indonesian (ID) and English (EN), toggled via navbar
* All strings in `src/i18n/translations.js`

### Social Media Buttons

Persistent social media buttons accessible from every page (footer and/or floating sidebar):

| Platform | Link | Icon |
| :--- | :--- | :--- |
| **Instagram** | `https://instagram.com/pegasusknalpot` | IG icon |
| **WhatsApp** | `https://wa.me/PLACEHOLDER_WA_NUMBER` | WA icon |
| **Facebook** | `PLACEHOLDER_FB_URL` | FB icon |

### Page 1: Home (`/`)
* **Hero Section:** Full-viewport dark hero with animated accents, stat bar (1985 / 40+ years / 3 brands), and two CTAs.
* **Trust Bar:** Red strip — 1-year warranty, ready stock, SUS304, custom fabrication.
* **"Big Three" Product Grid:** Each card shows brand logo, tag, description, feature list, and consult CTA.
    * **Dai-ichi:** Premium OEM (SUS304).
    * **Pegasus:** The Daily Standard (Aluminized/Galvanized).
    * **Cobra Sport:** Performance & Custom/Modified Fabrication.
* **Virtual Shop CTA:** Banner or card promoting Pegasus Knalpot as the online purchase channel — links to Instagram/WhatsApp. Emphasise: "Buy online, ship to your nearest partnered mechanic or direct to your door."
* **Achievements Section:** Highlight key milestones with animated counters or stat cards (see §11 for data).
* **Technical Excellence:** Four cards — Laser Cutting, MIG Welding, Polishing Machine, Precision Bending.
* **CTA Section:** Full-width prompt driving to Contact page.

### Page 2: Our Story (`/our-story`)
* **Hero:** Dark header with page title.
* **The Meaning of "Dai-ichi":** Explanation of the name origin with Japanese kanji visual card.
* **Timeline of Resilience:** Based on §4 above.
* **Values Grid:** 40+ years / 3 brands / SUS304 / 1-year warranty.

### Page 3: Contact Us (`/contact`)
* **Primary CTA:** "Consult with a Fabrication Expert."
* **Inquiry Form Fields:**
    * Name *(required)*
    * Email *(optional)*
    * WhatsApp Number *(required)*
    * Zip/Postal Code *(required)*
    * Information textbox *(required)*
    * Client-side validation with success state.
* **Info Sidebar:**
    * **Virtual Shop links:** Instagram (@pegasusknalpot) and WhatsApp button.
    * **Lead times:** Custom Orders (Cobra Sport) ~2 weeks; Standard Lines (Dai-ichi & Pegasus) ready stock.
    * **Warranty badge:** 1-year warranty on all standard product lines.

---

## 11. Scroll Animations

All scroll-triggered animations use the **IntersectionObserver API** via a shared `useInView` hook (`src/hooks/useInView.js`). Animations run **once** — elements do not re-animate on scroll-up. Respects `prefers-reduced-motion`.

### Global Utility Classes (`src/index.css`)
| Class | Effect |
| :--- | :--- |
| `.reveal` | Fade up (opacity 0→1, translateY 28px→0) |
| `.reveal-left` | Fade in from left (translateX -36px→0) |
| `.reveal-right` | Fade in from right (translateX 36px→0) |
| `.visible` | Modifier applied when element enters viewport |

Stagger delay is set via inline CSS `--reveal-delay` (e.g. `style={{ '--reveal-delay': '130ms' }}`).

### Animated Elements Per Page

**Home (`/`):**
- Trust bar items — `.reveal` with 80ms stagger
- Products section header — `.reveal`
- Product cards — `.reveal` with 130ms stagger (per card)
- Virtual Shop CTA — `.reveal`
- Achievements cards — `.reveal` with 100ms stagger
- Tech section header — `.reveal`
- Tech cards — `.reveal` with 90ms stagger
- CTA section — `.reveal`

**Our Story (`/our-story`):**
- Meaning text — `.reveal-left`
- Kanji card — `.reveal-right` (120ms delay)
- Timeline header — `.reveal`
- Timeline events — `.reveal` with 100ms stagger
- Values header — `.reveal`
- Value cards — `.reveal` with 100ms stagger

**Contact (`/contact`):**
- Form panel — `.reveal-left`
- Info sidebar — `.reveal-right` (150ms delay)

---

## 12. Achievements & Social Proof

Display on the Home page as animated stat cards or counters. Values stored in `src/i18n/translations.js` for bilingual support. **Confirm the [CONFIRM] values with the owner before publishing.**

| Achievement | Value | Notes |
| :--- | :--- | :--- |
| Units sold | 500,000+ | Lifetime total across all brands. |
| Years in operation | 40+ years | Since 1985. |
| Brands offered | 3 brands | Dai-ichi, Pegasus, Cobra Sport. |
| Car models supported | 100+ | Distinct vehicle fitments. |
| Partnered mechanic shops | 100+ | Nationwide network. |
| Cities covered | 50+ | Geographic reach of mechanic network. |

---

## 13. Operational Facts

* **Manufacturer location:** **Bulusidokare, Sidoarjo**, Jawa Timur.
* **No physical showroom, no opening hours displayed.** All purchases go through the Pegasus Knalpot virtual shop.
* **Delivery options:**
    * Ship to a partnered mechanic shop (for professional installation).
    * Ship directly to customer's home.
    * Installed in-house in Sidoarjo.
* **Lead Times:**
    * *Custom Orders (Cobra Sport):* ~2 weeks.
    * *Standard Lines (Dai-ichi & Pegasus):* Ready stock.
* **Warranty:** 1 year on all standard product lines.
* **Language:** Bilingual — professional Indonesian (default) with English toggle. English technical terms (SUS304, MIG Welding, etc.) used in both languages.

---

## 14. Contact & Legal

* **Location:** Bulusidokare, Sidoarjo, Indonesia
* **Online Store:** Instagram [@pegasusknalpot](https://instagram.com/pegasusknalpot)
* **Legal:** © 2026 CV Dai Ichi Indonesia. All rights reserved. Est. 1985 — Sidoarjo, Indonesia.
