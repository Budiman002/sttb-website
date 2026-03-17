// ─── Shared ──────────────────────────────────────────────────────────────────

export interface PagedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ─── Berita ───────────────────────────────────────────────────────────────────

export interface BeritaListItem {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  excerpt: string;
  thumbnailUrl: string | null;
  tanggalPublish: string;
  penulis: string;
  isPublished: boolean;
  createdAt: string;
}

export interface BeritaDetailItem {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  konten: string;
  excerpt: string;
  thumbnailUrl: string | null;
  tanggalPublish: string;
  penulis: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string | null;
}

// ─── Kegiatan ─────────────────────────────────────────────────────────────────

export interface KegiatanListItem {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  deskripsi: string;
  thumbnailUrl: string | null;
  tanggalMulai: string;
  tanggalSelesai: string | null;
  lokasi: string;
  status: string;
  isPublished: boolean;
  createdAt: string;
}

export interface KegiatanDetailItem {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  konten: string;
  deskripsi: string;
  thumbnailUrl: string | null;
  tanggalMulai: string;
  tanggalSelesai: string | null;
  lokasi: string;
  status: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string | null;
}

// ─── Media ────────────────────────────────────────────────────────────────────

export interface MediaListItem {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  type: "artikel" | "video";
  excerpt: string;
  thumbnailUrl: string | null;
  tanggalPublish: string;
  penulis: string;
  isPublished: boolean;
  createdAt: string;
}

export interface MediaArtikelDetail {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  konten: string;
  excerpt: string;
  thumbnailUrl: string | null;
  tanggalPublish: string;
  penulis: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface MediaVideoDetail {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  deskripsi: string;
  videoUrl: string;
  thumbnailUrl: string | null;
  durasi: string | null;
  tanggalPublish: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string | null;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export interface AuthResponse {
  token: string;
  expiresAt: string;
}

// ─── CMS Payload Types ────────────────────────────────────────────────────────

export interface CreateBeritaPayload {
  judul: string;
  slug: string;
  deskripsi: string;
  konten: string;
  kategori: string;
  penulis: string;
  thumbnailUrl?: string;
  tanggalPublish: string;
  isPublished: boolean;
}

export type UpdateBeritaPayload = CreateBeritaPayload;

export interface CreateKegiatanPayload {
  judul: string;
  slug: string;
  deskripsi: string;
  lokasi: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  status: string;
  penyelenggara: string;
  thumbnailUrl?: string;
  isPublished: boolean;
}

export type UpdateKegiatanPayload = CreateKegiatanPayload;

export interface CreateMediaArtikelPayload {
  judul: string;
  slug: string;
  deskripsi: string;
  konten: string;
  kategori: string;
  penulis: string;
  thumbnailUrl?: string;
  isPublished: boolean;
}

export type UpdateMediaArtikelPayload = CreateMediaArtikelPayload;

export interface CreateMediaVideoPayload {
  judul: string;
  slug: string;
  deskripsi: string;
  videoUrl: string;
  durasi: string;
  thumbnailUrl?: string;
  isPublished: boolean;
}

export type UpdateMediaVideoPayload = CreateMediaVideoPayload;

export interface CreatePerpustakaanPayload {
  judul: string;
  slug: string;
  penulis: string;
  kategori: string;
  tahun: number;
  penerbit?: string;
  deskripsi?: string;
  thumbnailUrl?: string;
  fileUrl?: string;
  isPublished: boolean;
}

export type UpdatePerpustakaanPayload = CreatePerpustakaanPayload;

// ─── Perpustakaan ─────────────────────────────────────────────────────────────

export interface PerpustakaanListItem {
  id: string;
  slug: string;
  judul: string;
  penulis: string;
  kategori: string;
  thumbnailUrl: string | null;
  tahun: number | null;
  isPublished: boolean;
  createdAt: string;
}

export interface PerpustakaanDetail {
  id: string;
  slug: string;
  judul: string;
  penulis: string;
  penerbit: string | null;
  kategori: string;
  deskripsi: string;
  thumbnailUrl: string | null;
  fileUrl: string | null;
  tahun: number | null;
  isbn: string | null;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string | null;
}
