# STTB Website — Backend

REST API untuk website STTB, dibangun dengan ASP.NET Core .NET 10.

## Tech Stack

- **Framework:** ASP.NET Core .NET 10
- **Database:** PostgreSQL 15+
- **ORM:** Entity Framework Core + Npgsql
- **Pattern:** Clean Architecture + CQRS + MediatR
- **Validasi:** FluentValidation
- **Auth:** JWT Bearer Token
- **Logging:** Serilog

## Struktur Project

```
backend/
├── Sttb.WebAPI/        # Entry point, Controllers, Program.cs
├── Sttb.Commons/       # Request Handlers (CQRS)
├── Sttb.Contracts/     # Request & Response Models
├── Sttb.Entities/      # Entities, DbContext, Migrations
└── Sttb.slnx           # Solution file
```

## Prasyarat

- .NET 10 SDK
- PostgreSQL 15+
- Database `sttb_db` sudah dibuat

## Setup

### 1. Buat database PostgreSQL

```sql
CREATE DATABASE sttb_db;
```

### 2. Set konfigurasi via user-secrets

```bash
cd Sttb.WebAPI

dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=5432;Database=sttb_db;Username=postgres;Password=YOUR_PASSWORD"

dotnet user-secrets set "Jwt:Secret" "sttb-super-secret-key-2026-minimum-32-chars"
```

> Ganti `YOUR_PASSWORD` dengan password PostgreSQL kamu.

### 3. Jalankan backend

```bash
dotnet run
```

Migrasi database akan berjalan otomatis saat pertama kali dijalankan.

Backend berjalan di: `https://localhost:7080`

## API Endpoints

### Public (tanpa autentikasi)

```
GET /api/Berita/list?page=&pageSize=&category=
GET /api/Berita/{slug}
GET /api/Kegiatan/list?page=&pageSize=&status=
GET /api/Kegiatan/{slug}
GET /api/Media/list?page=&pageSize=&type=
GET /api/Media/artikel/{slug}
GET /api/Media/video/{slug}
GET /api/Perpustakaan/list?page=&pageSize=&category=
GET /api/Perpustakaan/{slug}
```

### Auth

```
POST /api/Auth/login
Body: { "email": "admin@sttb.ac.id", "password": "Admin@2026" }
```

### Protected (JWT required)

```
POST/PUT/{id}/DELETE/{id} → Berita, Kegiatan, Perpustakaan
POST/PUT/{id}/DELETE/{id} → Media/artikel, Media/video
```

## Catatan Keamanan

Konfigurasi sensitif (connection string, JWT secret) tidak disimpan di repo — menggunakan `dotnet user-secrets` untuk keamanan.
