# STTB Website — Full Stack Monorepo

Revamp website beserta CMS admin panel.

## Tech Stack

| Layer | Teknologi |
|---|---|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui |
| Backend | ASP.NET Core .NET 10, PostgreSQL, EF Core |
| Pattern | Clean Architecture + CQRS + MediatR + JWT Auth |

## Struktur Repo

```
sttb-website/
├── frontend/       # Next.js 15 — public website + CMS admin
├── backend/        # ASP.NET Core .NET 10 — REST API
├── docs/           # Dokumentasi project
└── README.md
```

## Cara Setup & Run

### Prasyarat
- Node.js 18+
- .NET 10 SDK
- PostgreSQL 15+

### 1. Clone repo
```bash
git clone https://github.com/Budiman002/sttb-website.git
cd sttb-website
```

### 2. Setup Backend
Lihat panduan lengkap di [backend/README.md](./backend/README.md)

```bash
cd backend/Sttb.WebAPI

# Set konfigurasi sensitif via user-secrets
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=5432;Database=sttb_db;Username=postgres;Password=YOUR_PASSWORD"
dotnet user-secrets set "Jwt:Secret" "sttb-super-secret-key-2026-minimum-32-chars"

# Jalankan backend
dotnet run
```

Backend berjalan di: `https://localhost:7080`

### 3. Setup Frontend
Lihat panduan lengkap di [frontend/README.md](./frontend/README.md)

```bash
cd frontend

# Install dependencies
npm install

# Buat file .env.local
echo "NEXT_PUBLIC_API_URL=https://localhost:7080" > .env.local

# Jalankan frontend
npm run dev
```

Frontend berjalan di: `http://localhost:3000`

## Akses CMS Admin

| | |
|---|---|
| URL | http://localhost:3000/admin/login |
| Email | admin@sttb.ac.id |
| Password | Admin@2026 |

## Fitur

**Public Website (25+ halaman)**
- Beranda, Tentang Kami, Admisi, Keuangan, Kehidupan Kampus, Jelajahi
- Halaman detail dinamis (Berita, Kegiatan, Media, Perpustakaan)

**CMS Admin Panel (12 halaman)**
- Kelola Berita, Kegiatan, Media Artikel, Media Video, Koleksi Perpustakaan
- Rich text editor (Tiptap)
- Upload thumbnail via URL
- Status Published / Draft
