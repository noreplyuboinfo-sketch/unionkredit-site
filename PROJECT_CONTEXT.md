# 🏦 Union-Kredit — Project Context (AI Agent Reference)

> **Purpose of this file:** Provide any AI coding agent with a complete understanding of this project — its architecture, design system, components, business logic, i18n setup, and conventions — so it can contribute immediately without re-exploring the codebase.

---

## 1. Project Overview

**Union-Kredit** is a multilingual **landing page / lead-generation website** for a European online lending company. It is a single-page application presenting loan products, a loan simulator, testimonials, FAQ, and a contact form that sends leads via email.

- **URL structure:** `/{locale}` (e.g. `/fr`, `/en`, `/de`)
- **Default locale:** `fr` (French)
- **Target audience:** European consumers looking for personal, mortgage, or renovation loans
- **Unique Selling Point:** Fixed 2% interest rate, 24h response, 100% online process

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | `16.2.6` |
| **Language** | TypeScript | `^5` |
| **React** | React + React DOM | `19.2.4` |
| **Styling** | Tailwind CSS | `^3.4.19` |
| **CSS Utility** | `clsx` + `tailwind-merge` via `cn()` | — |
| **i18n** | `next-intl` | `^4.11.0` |
| **Forms** | `react-hook-form` + `@hookform/resolvers` + `zod` | `^7.75` / `^5.2` / `^4.4` |
| **Icons** | `lucide-react` | `^1.14.0` |
| **Email** | `resend` (server action) | `^6.12.3` |
| **Fonts** | Google Fonts: **Inter** (body) + **Manrope** (headings) | via `next/font/google` |
| **PostCSS** | autoprefixer | `^10.5` |

### Commands
```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # ESLint
```

### Environment Variables (`.env.local`)
```
RESEND_API_KEY="re_..."   # Resend API key for sending lead emails
```

---

## 3. Project Structure

```
📁 Root
├── app/
│   ├── globals.css                 # Tailwind directives + base styles + reveal animation
│   ├── actions/
│   │   └── sendEmail.ts            # Server Action: sends lead form data via Resend
│   └── [locale]/
│       ├── layout.tsx              # Root layout: fonts, NextIntlClientProvider, HTML shell
│       └── page.tsx                # Single landing page: assembles all sections in order
│
├── components/
│   ├── sections/                   # Full-page sections (each is a self-contained block)
│   │   ├── Header.tsx              # Sticky header with nav, logo, lang switcher, mobile menu
│   │   ├── Hero.tsx                # Main hero with headline, CTAs, features badges, + Simulator
│   │   ├── Problem.tsx             # "Why choose us" — 3 benefit cards (Clock, FileText, AlertCircle)
│   │   ├── Offers.tsx              # 3 loan product cards (Personal, Mortgage, Renovation)
│   │   ├── Features.tsx            # 4 advantages in 2-column grid
│   │   ├── HowItWorks.tsx          # 3-step accordion + decorative blue panel
│   │   ├── Simulator.tsx           # Interactive loan calculator (amount/duration sliders)
│   │   ├── ApplicationForm.tsx     # Lead capture form (react-hook-form + zod validation)
│   │   ├── Testimonials.tsx        # Auto-scrolling horizontal carousel (10 testimonials × 2)
│   │   ├── Stats.tsx               # 4 stats in a branded banner (with CountUp animation)
│   │   ├── Faq.tsx                 # 5 FAQ items via Accordion
│   │   ├── CtaFinal.tsx            # Final call-to-action section
│   │   └── Footer.tsx              # Footer with links, legal modals, copyright
│   │
│   ├── ui/                         # Reusable UI primitives
│   │   ├── Button.tsx              # Primary / Outline variants, optional chevron
│   │   ├── Card.tsx                # Rounded card with optional hover shadow
│   │   ├── Accordion.tsx           # Expandable items with optional step numbers
│   │   ├── Slider.tsx              # Custom range slider with branded track/thumb
│   │   ├── Reveal.tsx              # Scroll-triggered fade-in-up animation wrapper
│   │   ├── LangSwitcher.tsx        # Dropdown language selector (globe icon)
│   │   ├── LegalModal.tsx          # Privacy/Terms modal overlay
│   │   └── Logo.tsx                # "UK" icon + "Union Kredit" text + optional slogan
│   │
│   └── decor/                      # Decorative / visual elements
│       ├── BlurStar.tsx            # Large blurred gradient circle
│       ├── DotGrid.tsx             # SVG dot pattern background
│       ├── FloatingElements.tsx    # Animated floating finance icons (Banknote, Wallet, etc.)
│       └── ScribbleArrow.tsx       # Hand-drawn SVG arrow
│
├── hooks/
│   └── useReveal.ts                # IntersectionObserver hook for scroll-reveal animations
│
├── i18n/
│   ├── routing.ts                  # defineRouting + createNavigation (Link, redirect, etc.)
│   └── request.ts                  # getRequestConfig — loads locale messages dynamically
│
├── lib/
│   ├── loan.ts                     # monthlyPayment(), totalCost(), LOAN_CONSTANTS
│   ├── locales.ts                  # Locale list, default locale, locale display names
│   └── utils.ts                    # cn() — clsx + tailwind-merge helper
│
├── messages/                       # i18n JSON translation files
│   ├── fr.json                     # 🇫🇷 French (default, most complete — 148 lines)
│   ├── en.json                     # 🇬🇧 English
│   ├── de.json                     # 🇩🇪 German
│   ├── nl.json                     # 🇳🇱 Dutch
│   ├── it.json                     # 🇮🇹 Italian
│   ├── pt.json                     # 🇵🇹 Portuguese
│   ├── es.json                     # 🇪🇸 Spanish
│   ├── no.json                     # 🇳🇴 Norwegian
│   └── da.json                     # 🇩🇰 Danish
│
├── public/
│   ├── favicon.svg                 # SVG favicon
│   └── *.svg                       # Other SVG assets (file, globe, next, vercel, window)
│
├── next.config.ts                  # Next.js config wrapped with next-intl plugin
├── tailwind.config.ts              # Custom design tokens (colors, fonts, shadows, animations)
├── tsconfig.json                   # TypeScript config (paths: @/* → ./*)
├── postcss.config.mjs              # PostCSS with Tailwind + autoprefixer
├── eslint.config.mjs               # ESLint config
└── package.json                    # Dependencies & scripts
```

---

## 4. Page Flow (Section Order)

The landing page (`app/[locale]/page.tsx`) renders sections in this exact order:

```
┌─────────────────────────────────┐
│  Header (sticky, z-50)          │  — Logo, nav links (#loans, #how-it-works, #reviews), LangSwitcher, CTA button
├─────────────────────────────────┤
│  Hero                           │  — Badge, H1 with <highlight> rich text, 2 CTAs, feature badges, embedded Simulator
├─────────────────────────────────┤
│  Problem                        │  — "Why choose us" — 3 cards (Rapide, 100% en ligne, Transparent)
├─────────────────────────────────┤
│  Offers         id="loans"      │  — 3 loan product cards (Personal, Mortgage, Renovation) with amounts
├─────────────────────────────────┤
│  Features                       │  — 4 advantages in split layout (text left, grid right)
├─────────────────────────────────┤
│  HowItWorks  id="how-it-works"  │  — 3-step numbered accordion + blue decorative panel
├─────────────────────────────────┤
│  ApplicationForm id="application-form"  │  — Lead form (blue bg), 6 fields, zod validation, server action
├─────────────────────────────────┤
│  Testimonials   id="reviews"    │  — Auto-scrolling carousel, 10 testimonials, pause on hover
├─────────────────────────────────┤
│  Stats                          │  — Branded blue banner, 4 stats with CountUp animation
├─────────────────────────────────┤
│  Faq                            │  — 5 FAQ accordion items
├─────────────────────────────────┤
│  CtaFinal                       │  — Final CTA with radial gradient background
├─────────────────────────────────┤
│  Footer                         │  — Dark bg, logo, nav links, legal modal buttons, copyright
└─────────────────────────────────┘
```

---

## 5. Design System (Tailwind Tokens)

### 5.1 Colors
```
ink:       #0E1015    — Primary text (near black)
ink2:      #5A6072    — Secondary text (gray)
brand:     #2D6FF2    — Primary brand blue
brand-dark:#1F4FB8    — Hover/active state
brand-light:#E8EFFE   — Light brand backgrounds
surface:   #FFFFFF    — Card backgrounds
bg:        #F4F5FA    — Page background (light gray)
star:      #F5B400    — Star rating color (gold)
```

### 5.2 Typography
```
font-display: Manrope (--font-manrope) — Headings (weights: 400-800)
font-sans:    Inter   (--font-inter)   — Body text
```
- All headings (`h1`–`h6`) use `font-display text-ink`
- Body uses `font-sans antialiased`

### 5.3 Border Radius
```
rounded-card:  16px   — Cards, modals
rounded-pill:  999px  — Buttons, badges
```

### 5.4 Shadows
```
shadow-card:      0 8px 24px rgba(20,30,60,0.06)   — Default card
shadow-cardHover: 0 16px 40px rgba(20,30,60,0.10)  — Hover state
```

### 5.5 Animations
```
animate-float:         6s ease-in-out infinite        — Floating icons
animate-float-delayed: 8s ease-in-out infinite 2s     — Delayed variant
animate-float-slow:    10s ease-in-out infinite 1s    — Slow variant
```

### 5.6 Custom CSS Classes
```css
.reveal          — opacity:0, translateY(24px), transition 600ms cubic-bezier(0.16,1,0.3,1)
.reveal.is-visible — opacity:1, translateY(0)
```

### 5.7 Global Base Styles
```css
body: bg-bg text-ink font-sans antialiased selection:bg-brand selection:text-white
```

---

## 6. Component API Reference

### 6.1 UI Components

#### `Button` — `components/ui/Button.tsx`
```tsx
<Button variant="primary|outline" withChevron={boolean} className={string} onClick={fn}>
  Label
</Button>
```
- Uses `forwardRef`, extends `ButtonHTMLAttributes`
- `primary`: blue bg white text | `outline`: blue border, transparent bg
- `withChevron`: appends `<ChevronRight>` icon

#### `Card` — `components/ui/Card.tsx`
```tsx
<Card hoverEffect={boolean} className={string}>content</Card>
```
- `hoverEffect`: adds `hover:shadow-cardHover` transition

#### `Accordion` — `components/ui/Accordion.tsx`
```tsx
<Accordion items={[{id, title, content}]} showNumbers={boolean} />
```
- Single open at a time (state: `openIndex`)
- Grid-based expand/collapse animation
- `showNumbers`: shows 01, 02, 03… prefix

#### `Slider` — `components/ui/Slider.tsx`
```tsx
<Slider min={number} max={number} step={number} value={number} onChange={(n) => void} />
```
- Custom styled range input with branded blue track and thumb

#### `Reveal` — `components/ui/Reveal.tsx`
```tsx
<Reveal delay={ms} className={string}>children</Reveal>
```
- Uses `useReveal` hook (IntersectionObserver)
- Applies `.reveal` / `.is-visible` CSS classes

#### `LangSwitcher` — `components/ui/LangSwitcher.tsx`
- Dropdown with globe icon, shows current locale
- Uses `useRouter().replace(pathname, { locale })` to switch
- Click-outside-to-close via `useRef` + `mousedown` listener

#### `LegalModal` — `components/ui/LegalModal.tsx`
```tsx
<LegalModal isOpen={boolean} onClose={fn} type="privacy|terms|null" />
```
- Full-screen overlay with backdrop blur
- Locks body scroll when open
- Uses `legal` translation namespace

#### `Logo` — `components/ui/Logo.tsx`
```tsx
<Logo showText={boolean} showSlogan={boolean} className={string} />
```
- Blue rounded square with "UK" text + "Union Kredit" + localized slogan
- Slogan comes from `header.slogan` translation key

### 6.2 Decorative Components

| Component | Description |
|---|---|
| `BlurStar` | Large blurred `brand/30` circle, `blur-[80px]` |
| `DotGrid` | SVG 404×404 dot pattern via `<pattern>` |
| `FloatingElements` | 6 floating finance icons (Banknote, Wallet, Coins, TrendingUp, PiggyBank, ShieldCheck) with staggered float animations. Client-only (mounted check). |
| `ScribbleArrow` | Hand-drawn SVG arrow in brand color |

---

## 7. Internationalization (i18n)

### Setup
- **Library:** `next-intl` v4.11
- **Plugin:** `next.config.ts` wraps config with `createNextIntlPlugin('./i18n/request.ts')`
- **Routing:** `i18n/routing.ts` — `defineRouting()` + `createNavigation()` exports `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname`
- **Request:** `i18n/request.ts` — dynamically imports `messages/{locale}.json`
- **Provider:** `<NextIntlClientProvider>` in `app/[locale]/layout.tsx`

### Supported Locales
```typescript
const locales = ['fr', 'en', 'nl', 'de', 'it', 'pt', 'es', 'no', 'da'] as const;
const defaultLocale = 'fr';
```

### Translation Structure (per `messages/{locale}.json`)
```
header     — loans, howItWorks, reviews, cta, slogan
hero       — badge, title (with <highlight> rich text), subtitle, ctaPrimary, ctaSecondary, feature1, feature2
simulator  — title, amountLabel, durationLabel, months, monthlyPayment, taeg, totalCost, cta
problem    — title, items[0-2]{title, desc}
offers     — title, subtitle, upTo, conso{title,desc,amount}, immo{...}, travaux{...}
features   — title, subtitle, items[0-3]{title, desc}
howItWorks — title, items[0-2]{title, desc}
form       — title, subtitle, fields{firstName,lastName,email,phone,amount,months}, errors{required,email,phone}, submit, secureInfo, success{title,desc}
testimonials — title, items[0-9]{name, role, text}
stats      — items[0-3]{value, label}
faq        — title, subtitle, items[0-4]{q, a}
ctaFinal   — title, subtitle, cta
footer     — about, links{title,loans,howItWorks,reviews}, legal{title,privacy,terms}, copyright, responsible
legal      — privacyTitle, privacyBody, termsTitle, termsBody, close
```

### Adding a New Translation Key
1. Add the key to **all 9 JSON files** in `messages/`
2. Use `const t = useTranslations('namespace')` in your component
3. Access via `t('key')` or `t('nested.key')`
4. For rich text (HTML-like tags): `t.rich('key', { tagName: (chunks) => <span>{chunks}</span> })`

### Adding a New Locale
1. Add locale code to `lib/locales.ts` → `locales` array + `localeNames` map
2. Create `messages/{newLocale}.json` with all keys (copy from `fr.json` as base)

---

## 8. Business Logic

### Loan Calculator (`lib/loan.ts`)
```typescript
// Monthly payment using standard annuity formula
monthlyPayment(principal: number, annualRate: number, months: number): number

// Total interest cost
totalCost(monthly: number, months: number, principal: number): number

// Constants
LOAN_CONSTANTS = {
  MIN_AMOUNT: 3000,      // € minimum loan
  MAX_AMOUNT: 100000,    // € maximum loan
  MIN_MONTHS: 6,         // Minimum duration
  MAX_MONTHS: 120,       // Maximum duration (10 years)
  RATE: 0.02,            // 2% annual fixed rate
}
```

### Lead Form (`app/actions/sendEmail.ts`)
- **Server Action** (`'use server'`)
- Uses **Resend** API to send formatted HTML email
- Sends to: `unionkredit2@gmail.com`
- From: `Union-Kredit Form <onboarding@resend.dev>`
- Form fields: firstName, lastName, email, phone, amount, months
- Validation via Zod schema in `ApplicationForm.tsx`

### Form Validation Schema
```typescript
z.object({
  firstName: z.string().min(2),
  lastName:  z.string().min(2),
  email:     z.string().email(),
  phone:     z.string().min(8),
  amount:    z.number().min(3000).max(100000),
  months:    z.number().min(6).max(120),
})
```

---

## 9. Key Patterns & Conventions

### Component Pattern
- All section components are `'use client'` (they use `useTranslations`)
- All sections use `<Reveal>` wrapper for scroll-triggered animations
- Sections use `max-w-7xl mx-auto px-6` for consistent content width
- Sections alternate between `bg-white`, `bg-bg`, and `bg-brand` backgrounds

### Naming Conventions
- **Sections:** PascalCase, export named function (`export function Hero()`)
- **UI components:** PascalCase with `forwardRef` pattern for Button/Card
- **Hooks:** camelCase prefixed with `use` (`useReveal`)
- **Translations:** camelCase namespace keys (`howItWorks`, `ctaFinal`)

### Styling Pattern
- Tailwind utility classes exclusively (no CSS modules, no styled-components)
- `cn()` helper for conditional class merging
- Custom design tokens in `tailwind.config.ts` — always use token names over raw values
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Navigation
- In-page scrolling via `document.getElementById('section-id')?.scrollIntoView({behavior: 'smooth'})`
- Anchor IDs: `#loans`, `#how-it-works`, `#application-form`, `#reviews`
- Locale switching via `useRouter().replace(pathname, { locale })`

### Animation System
- **Scroll reveal:** `useReveal` hook → IntersectionObserver → `.reveal` / `.is-visible` classes
- **Float animation:** Tailwind keyframes (`animate-float`, `animate-float-delayed`, `animate-float-slow`)
- **Testimonials:** `requestAnimationFrame` auto-scroll (1px/frame), pause on hover/touch
- **Stats CountUp:** `requestAnimationFrame` with easeOutExpo easing

---

## 10. Layout Architecture

```
<html lang={locale} className="font-inter font-manrope scroll-smooth">
  <body className="overflow-x-hidden w-full">
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Header />          ← sticky top-0 z-50
        <main className="flex-grow">
          <Hero />           ← contains <Simulator /> embedded
          <Problem />
          <Offers />
          <Features />
          <HowItWorks />
          <ApplicationForm />
          <Testimonials />
          <Stats />
          <Faq />
          <CtaFinal />
        </main>
        <Footer />          ← contains <LegalModal />
      </div>
    </NextIntlClientProvider>
  </body>
</html>
```

---

## 11. Important Notes

### ⚠️ Next.js 16 Specifics
- `params` in layouts/pages is a **Promise** — must `await params` before accessing `.locale`
- Using App Router (`app/` directory) — no `pages/` directory
- Server Actions use `'use server'` directive
- Read `node_modules/next/dist/docs/` for any API questions about this version

### ⚠️ Known Patterns
- `@ts-ignore` used in `routing.ts` (locale type narrowing) and `LangSwitcher.tsx` (router.replace locale param)
- `suppressHydrationWarning` on `<html>` and `<body>` tags to prevent hydration mismatch warnings
- Testimonials carousel duplicates the array (`[...testimonials, ...testimonials]`) for infinite scroll illusion
- `FloatingElements` renders `null` until client-side mount to avoid hydration issues

### ⚠️ Email Configuration
- Resend API key is in `.env.local`
- Currently using `onboarding@resend.dev` as sender (Resend sandbox domain)
- Emails go to `unionkredit2@gmail.com`

---

## 12. Quick Reference: File → Purpose Map

| File | What it does |
|---|---|
| `app/[locale]/layout.tsx` | HTML shell, fonts, i18n provider |
| `app/[locale]/page.tsx` | Assembles all 12 sections |
| `app/globals.css` | Tailwind setup + reveal animation classes |
| `app/actions/sendEmail.ts` | Server action to email lead data via Resend |
| `components/sections/*.tsx` | 13 page sections (see §4 for order) |
| `components/ui/*.tsx` | 8 reusable UI primitives |
| `components/decor/*.tsx` | 4 decorative/visual elements |
| `hooks/useReveal.ts` | IntersectionObserver for scroll animations |
| `i18n/routing.ts` | Locale routing config + navigation helpers |
| `i18n/request.ts` | Server-side locale resolution + message loading |
| `lib/loan.ts` | Loan math (monthly payment, total cost, constants) |
| `lib/locales.ts` | Locale list, default, display names |
| `lib/utils.ts` | `cn()` class merge utility |
| `messages/*.json` | 9 translation files (fr, en, nl, de, it, pt, es, no, da) |
| `tailwind.config.ts` | Design tokens (colors, fonts, shadows, animations) |
| `next.config.ts` | Next.js config with next-intl plugin |

---

*Last updated: 2026-05-13*
