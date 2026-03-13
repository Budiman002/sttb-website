# STTB Website — Frontend

Public website dan CMS admin panel untuk Sekolah Tinggi Teologi Bandung, dibangun dengan Next.js 15.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Rich Text Editor:** Tiptap
- **Icons:** Lucide React

## Prasyarat

- Node.js 18+
- Backend STTB sudah berjalan (lihat ../backend/README.md)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Buat file environment
Buat file `.env.local` di folder `frontend/` dengan isi:
```
NEXT_PUBLIC_API_URL=https://localhost:7080
```

### 3. Jalankan development server
```bash
npm run dev
```

Buka http://localhost:3000

## Struktur Folder

```
frontend/
├── app/
│   ├── (public)/           # Halaman public website
│   │   ├── page.tsx        # Beranda
│   │   ├── tentang-kami/
│   │   ├── admisi/
│   │   ├── keuangan/
│   │   ├── kehidupan-kampus/
│   │   └── jelajahi/
│   └── admin/              # CMS Admin Panel
│       ├── login/
│       ├── dashboard/
│       ├── berita/
│       ├── kegiatan/
│       ├── media/
│       └── perpustakaan/
├── components/
│   ├── layout/             # Navbar, Footer
│   └── admin/              # Komponen CMS
├── lib/
│   └── api.ts              # API helper functions
└── types/
    └── api.ts              # TypeScript interfaces
```

## Akses CMS Admin

| | |
|---|---|
| URL | http://localhost:3000/admin/login |
| Email | admin@sttb.ac.id |
| Password | Admin@2026 |
