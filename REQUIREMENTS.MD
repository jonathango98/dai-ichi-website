# Brand & Design Strategy: CV Dai Ichi Indonesia

This document reflects the current state of the CV Dai Ichi Indonesia website as built.

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

## 1. Brand Identity & Logo Assets

The brand architecture consists of a parent manufacturer brand and two specialised sub-brands, plus a virtual storefront.

### 1a. Manufacturers

* **Dai-ichi (Parent / OEM):**
    * **Asset:** `public/dai-ichi-logo.png` — white lettermark with transparent background. Used in navbar, footer, and Dai-ichi product card.
    * **Focus:** OEM exhaust systems, high-grade SUS304 Stainless Steel, and corporate authority.
* **Pegasus (Value):**
    * **Asset:** `public/pegasus-logo.png` — white pegasus silhouette with transparent background. Used in Pegasus product card.
    * **Focus:** Daily drivers, Aluminized/Galvanized steel, and mass-market reliability.
* **Cobra Sport (Performance):**
    * **Asset:** `public/cobra-sports-logo.png` — white cobra silhouette with transparent background. Used in Cobra Sport product card.
    * **Focus:** Custom/modified stainless steel fabrication, sound profiles, and enthusiast aesthetics.

### 1b. Virtual Shop — Pegasus Knalpot

* **Name:** Pegasus Knalpot (also referred to as "Toko Virtual").
* **Purpose:** Online storefront where customers can purchase any product from the three brands and choose delivery to a partnered mechanic shop (for installation) or directly to their home.
* **Instagram:** [@pegasusknalpot](https://instagram.com/pegasusknalpot)
* **WhatsApp:** `PLACEHOLDER_WA_NUMBER` *(to be replaced with actual number/link)*
* **Facebook:** `PLACEHOLDER_FB_URL` *(to be replaced with actual page URL)*

---

## 2. Brand Tone of Voice

The communication style is **"The Master Craftsman"**:
* **Authoritative:** Demonstrating deep technical knowledge of metallurgy and precision welding.
* **Legacy-Rich:** Honoring the 1985 foundation and the story behind the Dai-ichi name.
* **Technical:** Using precise terms like MIG Welding, SUS304, and Laser Cutting to build professional trust.
* **Ambitious:** Reflecting the "Dai-ichi" (Number 1) name, bold and market-leading.

---

## 3. Color Scheme & Typography

| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary** | Industrial Charcoal | `#2B2B2B` | Main text, dark backgrounds, and headers. |
| **Secondary** | Heritage Red | `#D32F2F` | CTA buttons, "Number 1" highlights, and branding accents. |
| **Accent** | Stainless Silver | `#C0C0C0` | Technical icons, dividers, and metallic accents. |
| **Neutral** | Steel Frost | `#F8F9FA` | Page backgrounds and clean content sections. |

* **Headlines:** *Montserrat* (Bold/All-caps) — loaded via Google Fonts.
* **Body Text:** *Inter* — loaded via Google Fonts.

---

## 4. Overall Mood & Visual Style

* **Mood:** Industrial, Precise, Powerful, and Trustworthy.
* **Imagery Style (Future):**
    * **Action Shots:** Close-ups of MIG welding sparks, laser cutting, and polishing machines — for the Technical Excellence section.
    * **Product Shots:** Hero shots of finished stainless steel systems — for product cards.
    * **Heritage:** Historical photos of the original 1985 Bulusidokare site and the Jl. Gajahmada store — for the Our Story timeline.

---

## 5. SEO & Meta Data

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

Each route should dynamically set `<title>` and `<meta name="description">` via a shared `usePageMeta` hook or `<Helmet>` equivalent.

| Route | Title (EN) | Description (EN) |
| :--- | :--- | :--- |
| `/` | Dai Ichi Indonesia — OEM, Custom & Performance Exhaust | CV Dai Ichi Indonesia — manufacturer of exhaust systems since 1985. 3 brands, SUS304 stainless steel, nationwide delivery. |
| `/our-story` | Our Story — Dai Ichi Indonesia | The story behind Dai Ichi Indonesia: from a 1985 Sidoarjo workshop to Indonesia's trusted exhaust manufacturer. |
| `/contact` | Contact Us — Dai Ichi Indonesia | Consult with a fabrication expert. Reach us via WhatsApp, Instagram, or our online form. |

### Structured Data (JSON-LD)

Add `Organization` and `LocalBusiness` schema to the homepage for rich search results.

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

## 6. Website Structure (As Built)

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
* **Achievements Section:** Highlight key milestones with animated counters or stat cards (see §9 for data).
* **Technical Excellence:** Four cards — Laser Cutting, MIG Welding, Polishing Machine, Precision Bending.
* **CTA Section:** Full-width prompt driving to Contact page.

### Page 2: Our Story (`/our-story`)
* **Hero:** Dark header with page title.
* **The Meaning of "Dai-ichi":** Explanation of the name origin with Japanese kanji visual card.
* **Timeline of Resilience:**
    * **1983:** Fire at Jl. Gajahmada 33, Surabaya (Agung Motor).
    * **1985:** Official founding — factory built at Bulusidokare, **Sidoarjo**.
    * **1995:** Expansion — Pegasus Knalpot launched at Ngagel Jaya, Surabaya *(historical; that location is now closed)*.
    * **2000s:** Modernisation with precision machinery.
    * **Today:** Three-brand operation with virtual shop.
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

## 7. Scroll Animations

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

## 8. Operational Facts

* **Manufacturer location:** **Sidoarjo**, Jawa Timur.
* **No physical showroom, no opening hours displayed.** All purchases go through the Pegasus Knalpot virtual shop.
* **Delivery options:**
    * Ship to a partnered mechanic shop (for professional installation).
    * Ship directly to customer's home.
    * installed inhouse in Sidoarjo
* **Lead Times:**
    * *Custom Orders (Cobra Sport):* ~2 weeks.
    * *Standard Lines (Dai-ichi & Pegasus):* Ready stock.
* **Warranty:** 1 year on all standard product lines.
* **Language:** Bilingual — professional Indonesian (default) with English toggle. English technical terms (SUS304, MIG Welding, etc.) used in both languages.

---

## 9. Achievements & Social Proof

Display on the Home page as animated stat cards or counters. Use placeholders until real data is confirmed.

| Achievement | Placeholder Value | Notes |
| :--- | :--- | :--- |
| Units sold | 1,000,000+ units sold | Lifetime total across all brands. |
| Years in operation | 40+ years | Since 1985. |
| Brands offered | 3 brands | Dai-ichi, Pegasus, Cobra Sport. |
| Car models supported | 200+ car brands | Number of distinct vehicle fitments. |
| Partnered mechanic shops | 1,000+ mechanic partners | Nationwide network. |
| Cities covered | 100+ cities in Indonesia | Geographic reach of mechanic network. |

These values should be stored in `src/i18n/translations.js` so they can be updated in one place and displayed bilingually.

---

## 10. Brand Name Origin (Corrected)

* **Yahya Goenadibrata** is the founder of the brand.
* His brother, **Tjhiang** and wife, previously lived and worked in **Ichikawa**, Japan. This experience with Japanese precision craftsmanship became a lasting inspiration.
* Yahya married a woman named **Daisy**.
* The brand name combines: **"Dai"** (from *Daisy*) + **"ichi"** (from *Ichikawa*) = **Dai-ichi**.
* "Dai-ichi" (第一) also means **"Big One"** in Japanese, a dual meaning that reflects both family heritage and market ambition.
