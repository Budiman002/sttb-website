# STTB Website — Frontend Standard
# Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
# Applies to: /frontend directory

---

## 1. Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | NOT Pages Router |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS | Custom STTB tokens in tailwind.config.ts |
| UI Components | shadcn/ui (Radix UI) | Accessible primitives |
| Icons | Lucide React | Consistent icon set |
| Forms | React Hook Form + Zod | Validation on both client and server |
| Data Fetching | TanStack Query (React Query) | For dynamic/CMS data only |
| HTTP Client | fetch (native) | Wrapped in lib/api.ts |
| Fonts | next/font (Google Fonts) | Playfair Display, DM Serif Display, Plus Jakarta Sans |

---

## 2. Project Structure

```
frontend/
├── app/                        # App Router — routes live here
│   ├── layout.tsx              # Root layout (navbar + footer)
│   ├── page.tsx                # Homepage
│   ├── tentang-kami/
│   │   ├── sejarah/page.tsx
│   │   ├── visi-misi/page.tsx
│   │   └── ...
│   ├── admisi/
│   │   ├── faq/page.tsx
│   │   ├── info-persyaratan/page.tsx
│   │   └── ...
│   ├── jelajahi/
│   │   ├── berita/
│   │   │   ├── page.tsx        # Berita list
│   │   │   └── [slug]/page.tsx # Berita detail
│   │   ├── kegiatan/
│   │   ├── media/
│   │   │   ├── page.tsx
│   │   │   ├── artikel/[slug]/page.tsx
│   │   │   └── video/[slug]/page.tsx
│   │   └── perpustakaan/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   └── api/                    # API Route Handlers (proxy only)
│       └── [...slug]/route.ts
├── components/
│   ├── layout/                 # Navbar, Footer, Layout wrappers
│   │   ├── Navbar.tsx
│   │   ├── NavbarDropdown.tsx
│   │   └── Footer.tsx
│   ├── shared/                 # Reusable across multiple features
│   │   ├── HeroSection.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── ImagePlaceholder.tsx
│   │   └── CTASection.tsx
│   ├── berita/                 # Feature-specific components
│   │   ├── BeritaCard.tsx
│   │   ├── BeritaGrid.tsx
│   │   └── BeritaFilterBar.tsx
│   ├── kegiatan/
│   ├── media/
│   ├── perpustakaan/
│   └── ui/                     # shadcn/ui primitives (auto-generated)
├── lib/
│   ├── api.ts                  # Base fetch wrapper + error handling
│   ├── queryClient.ts          # TanStack Query client config
│   └── utils.ts                # cn() utility + misc helpers
├── hooks/
│   ├── useScrollPosition.ts
│   └── useActiveSection.ts
├── types/
│   ├── berita.ts
│   ├── kegiatan.ts
│   ├── media.ts
│   └── perpustakaan.ts
├── constants/
│   ├── routes.ts               # All internal URL paths
│   └── mockData.ts             # Mock data for dynamic pages (pre-API)
├── public/
│   ├── images/
│   └── icons/
└── styles/
    └── globals.css
```

---

## 3. App Router Conventions

### Server vs Client Components
- Default: **Server Component** (no `"use client"`)
- Add `"use client"` only when the component needs: useState, useEffect, event handlers, browser APIs
- Keep client components as small/deep in the tree as possible

```tsx
// Good — server component fetches data
// app/jelajahi/berita/page.tsx
export default async function BeritaPage() {
  const posts = await getBeritaList();
  return <BeritaGrid posts={posts} />;
}

// Good — client component only for interactive part
// components/berita/BeritaFilterBar.tsx
"use client";
export function BeritaFilterBar({ onFilter }: Props) {
  const [active, setActive] = useState("Semua");
  ...
}
```

### Data Fetching Strategy
| Content type | Strategy | Why |
|---|---|---|
| Static pages (Tentang Kami, Admisi, etc.) | Hardcoded / import from constants | Never changes |
| Dynamic list pages (Berita, Kegiatan) | Server Component + fetch (or mock import during dev) | SEO-friendly |
| Dynamic detail pages | generateStaticParams + ISR | Pre-rendered, revalidated |
| Interactive filters/search | Client Component + TanStack Query | UX responsiveness |

### Route Metadata
Every page must export metadata:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita — STTB Bandung",
  description: "...",
};
```

---

## 4. Component Patterns

### Standard component file structure

```tsx
// components/berita/BeritaCard.tsx

import type { Berita } from "@/types/berita";
import { cn } from "@/lib/utils";

interface BeritaCardProps {
  berita: Berita;
  className?: string;
}

export function BeritaCard({ berita, className }: BeritaCardProps) {
  return (
    <div className={cn("rounded-lg bg-white shadow-sm", className)}>
      {/* ... */}
    </div>
  );
}
```

### Rules
- Always define explicit TypeScript interfaces for props
- Export named exports for components (not default, except for `page.tsx` and `layout.tsx`)
- `page.tsx` and `layout.tsx` use default exports (required by Next.js App Router)
- Never use `React.FC` — use plain function with typed props
- Keep components focused — if a component exceeds ~150 lines, split it

---

## 5. Styling Rules

### Tailwind CSS
- Use Tailwind utility classes exclusively — no inline styles, no CSS modules
- Use `cn()` (from `@/lib/utils`) for conditional class merging
- All STTB brand colors must be used via semantic Tailwind aliases:

```tsx
// Good
<div className="bg-sttb-navy text-white">

// Bad
<div style={{ backgroundColor: "#003F8A" }}>
```

### Custom Tailwind tokens (defined in tailwind.config.ts)
```
bg-sttb-navy       → #003F8A
bg-sttb-navy-dark  → #00276B
bg-sttb-navy-accent→ #0056B3
bg-sttb-red        → #C41E3A
bg-sttb-red-hover  → #E63950
bg-sttb-offwhite   → #F8F7F4
text-sttb-navy     → #003F8A
text-sttb-red      → #C41E3A
```

### Typography classes (consistent usage)
```
font-display  → Playfair Display (hero display text)
font-heading  → DM Serif Display (H2, H3, card titles)
font-body     → Plus Jakarta Sans (body, UI, labels)
```

---

## 6. Image Placeholder Standard

During development (before real assets are available), all image placeholders use:

```tsx
// components/shared/ImagePlaceholder.tsx
export function ImagePlaceholder({ aspectRatio = "16/9", caption }: Props) {
  return (
    <div className="relative bg-sttb-navy rounded-lg overflow-hidden"
         style={{ aspectRatio }}>
      <img
        src="/images/sttb-logo-white.png"
        alt="STTB"
        className="absolute inset-0 m-auto w-1/3 opacity-30"
      />
      {caption && (
        <p className="absolute bottom-3 left-0 right-0 text-center
                      text-white/60 text-sm font-body">{caption}</p>
      )}
    </div>
  );
}
```

Rules:
- Navy solid background (#003F8A)
- STTB logo centered, 30% white opacity
- Never use grey boxes or gradient placeholders
- Aspect ratios: `16/9` for articles/events, `3/4` for book covers

---

## 7. API Communication

### Base fetch wrapper (`lib/api.ts`)

```ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
```

### API endpoint constants (`constants/routes.ts`)

```ts
export const API_ROUTES = {
  berita: {
    list: "/api/Berita/list",
    detail: (slug: string) => `/api/Berita/${slug}`,
  },
  kegiatan: {
    list: "/api/Kegiatan/list",
    detail: (slug: string) => `/api/Kegiatan/${slug}`,
  },
  // ...
};
```

Never hardcode endpoint strings inside components.

---

## 8. Mock Data Strategy (Pre-API Phase)

While the backend is not ready, dynamic pages use mock data:

```ts
// constants/mockData.ts
export const MOCK_BERITA: Berita[] = [
  {
    id: "1",
    slug: "contoh-berita",
    title: "Contoh Berita STTB",
    category: "Institusi",
    date: "2025-03-01",
    excerpt: "...",
    content: "...",
  },
  // ...
];
```

When the API is ready, replace the mock import with an `apiFetch` call.
The component interface should not change — only the data source.

---

## 9. TypeScript Rules

- Strict mode enabled in `tsconfig.json`
- No `any` — use `unknown` with type guards
- Define all API response types in `types/`
- Export interfaces, not types, for object shapes
- Use `type` for unions, intersections, and utility types

---

## 10. Performance

- Use `next/image` for ALL images (automatic optimization)
- Use `next/link` for ALL internal navigation
- Lazy load heavy non-critical components with `dynamic()`
- Static pages must have NO client-side data fetching
- Memoize expensive calculations with `useMemo`/`useCallback` only when profiling confirms a need (don't premature-optimize)

---

## 11. Accessibility

- Use semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`
- All interactive elements must be keyboard-navigable
- All images must have `alt` text (empty string `alt=""` for decorative images)
- All icon-only buttons must have `aria-label`
- Color contrast must meet WCAG AA (4.5:1 for body text)

---

## 12. Security

- All external links: `rel="noopener noreferrer"`
- Never store tokens in `localStorage` or `sessionStorage`
- Never expose API keys or secrets in `NEXT_PUBLIC_` env vars
- Sanitize any user-generated content before rendering
- Security headers configured in `next.config.ts`
