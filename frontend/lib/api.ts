import https from "https";
import type {
  PagedResponse,
  BeritaListItem,
  BeritaDetailItem,
  KegiatanListItem,
  KegiatanDetailItem,
  MediaListItem,
  MediaArtikelDetail,
  MediaVideoDetail,
  PerpustakaanListItem,
  PerpustakaanDetail,
  AuthResponse,
  CreateBeritaPayload,
  UpdateBeritaPayload,
  CreateKegiatanPayload,
  UpdateKegiatanPayload,
  CreateMediaArtikelPayload,
  UpdateMediaArtikelPayload,
  CreateMediaVideoPayload,
  UpdateMediaVideoPayload,
  CreatePerpustakaanPayload,
  UpdatePerpustakaanPayload,
} from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Bypass self-signed certificate in development
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    // @ts-ignore — Node.js fetch supports agent for self-signed TLS
    agent: BASE_URL?.startsWith("https") ? httpsAgent : undefined,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

function buildQuery(
  params: Record<string, string | number | undefined>,
): string {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      query.set(key, String(value));
    }
  }
  const str = query.toString();
  return str ? `?${str}` : "";
}

// ─── Berita ───────────────────────────────────────────────────────────────────

export function getBeritaList(
  page = 1,
  pageSize = 9,
  kategori?: string,
): Promise<PagedResponse<BeritaListItem>> {
  const query = buildQuery({ page, pageSize, category: kategori });
  return apiFetch(`/api/Berita/list${query}`);
}

export function getBeritaDetail(slug: string): Promise<BeritaDetailItem> {
  return apiFetch(`/api/Berita/${slug}`);
}

// ─── Kegiatan ─────────────────────────────────────────────────────────────────

export function getKegiatanList(
  page = 1,
  pageSize = 9,
  status?: string,
): Promise<PagedResponse<KegiatanListItem>> {
  const query = buildQuery({ page, pageSize, status });
  return apiFetch(`/api/Kegiatan/list${query}`);
}

export function getKegiatanDetail(slug: string): Promise<KegiatanDetailItem> {
  return apiFetch(`/api/Kegiatan/${slug}`);
}

// ─── Media ────────────────────────────────────────────────────────────────────

export function getMediaList(
  page = 1,
  pageSize = 9,
  type?: string,
): Promise<PagedResponse<MediaListItem>> {
  const query = buildQuery({ page, pageSize, type });
  return apiFetch(`/api/Media/list${query}`);
}

export function getMediaArtikelDetail(
  slug: string,
): Promise<MediaArtikelDetail> {
  return apiFetch(`/api/Media/artikel/${slug}`);
}

export function getMediaVideoDetail(slug: string): Promise<MediaVideoDetail> {
  return apiFetch(`/api/Media/video/${slug}`);
}

// ─── Perpustakaan ─────────────────────────────────────────────────────────────

export function getPerpustakaanList(
  page = 1,
  pageSize = 9,
  kategori?: string,
): Promise<PagedResponse<PerpustakaanListItem>> {
  const query = buildQuery({ page, pageSize, category: kategori });
  return apiFetch(`/api/Perpustakaan/list${query}`);
}

export function getPerpustakaanDetail(
  slug: string,
): Promise<PerpustakaanDetail> {
  return apiFetch(`/api/Perpustakaan/${slug}`);
}

// ─── Mutation helper ──────────────────────────────────────────────────────────

async function apiMutate<T>(
  endpoint: string,
  options: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    // @ts-ignore — Node.js fetch supports agent for self-signed TLS
    agent: BASE_URL?.startsWith("https") ? httpsAgent : undefined,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  // DELETE responses may have no body
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as T;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export function loginAdmin(
  email: string,
  password: string,
): Promise<AuthResponse> {
  return apiMutate("/api/Auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * Returns Authorization header with the stored JWT token.
 * Only usable in Client Components — localStorage is not available in Server Components.
 */
export function getAuthHeaders(): { Authorization: string } {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("sttb_admin_token") ?? ""
      : "";
  return { Authorization: `Bearer ${token}` };
}

// ─── Berita mutations ─────────────────────────────────────────────────────────

export function createBerita(data: CreateBeritaPayload): Promise<BeritaDetailItem> {
  return apiMutate("/api/Berita", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function updateBerita(
  id: string,
  data: UpdateBeritaPayload,
): Promise<BeritaDetailItem> {
  return apiMutate(`/api/Berita/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function deleteBerita(id: string): Promise<void> {
  return apiMutate(`/api/Berita/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
}

// ─── Kegiatan mutations ───────────────────────────────────────────────────────

export function createKegiatan(
  data: CreateKegiatanPayload,
): Promise<KegiatanDetailItem> {
  return apiMutate("/api/Kegiatan", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function updateKegiatan(
  id: string,
  data: UpdateKegiatanPayload,
): Promise<KegiatanDetailItem> {
  return apiMutate(`/api/Kegiatan/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function deleteKegiatan(id: string): Promise<void> {
  return apiMutate(`/api/Kegiatan/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
}

// ─── Media Artikel mutations ──────────────────────────────────────────────────

export function createMediaArtikel(
  data: CreateMediaArtikelPayload,
): Promise<MediaArtikelDetail> {
  return apiMutate("/api/Media/artikel", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function updateMediaArtikel(
  id: string,
  data: UpdateMediaArtikelPayload,
): Promise<MediaArtikelDetail> {
  return apiMutate(`/api/Media/artikel/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function deleteMediaArtikel(id: string): Promise<void> {
  return apiMutate(`/api/Media/artikel/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
}

// ─── Media Video mutations ────────────────────────────────────────────────────

export function createMediaVideo(
  data: CreateMediaVideoPayload,
): Promise<MediaVideoDetail> {
  return apiMutate("/api/Media/video", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function updateMediaVideo(
  id: string,
  data: UpdateMediaVideoPayload,
): Promise<MediaVideoDetail> {
  return apiMutate(`/api/Media/video/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function deleteMediaVideo(id: string): Promise<void> {
  return apiMutate(`/api/Media/video/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
}

// ─── Perpustakaan mutations ───────────────────────────────────────────────────

export function createPerpustakaan(
  data: CreatePerpustakaanPayload,
): Promise<PerpustakaanDetail> {
  return apiMutate("/api/Perpustakaan", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function updatePerpustakaan(
  id: string,
  data: UpdatePerpustakaanPayload,
): Promise<PerpustakaanDetail> {
  return apiMutate(`/api/Perpustakaan/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
}

export function deletePerpustakaan(id: string): Promise<void> {
  return apiMutate(`/api/Perpustakaan/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
}
