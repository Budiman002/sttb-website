import type { Metadata } from "next";
import { CmsDashboard } from "@/components/admin/CmsDashboard";
import {
  getBeritaList,
  getKegiatanList,
  getMediaList,
  getPerpustakaanList,
} from "@/lib/api";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard — STTB CMS",
  description: "Ringkasan aktivitas dan statistik konten STTB Bandung",
};

export default async function AdminDashboardPage() {
  const stats = { berita: 0, kegiatan: 0, media: 0, perpustakaan: 0 };
  let recentActivities: {
    id: string;
    judul: string;
    tipe: string;
    status: string;
    tanggal: string;
  }[] = [];

  const results = await Promise.allSettled([
    getBeritaList(1, 1),
    getKegiatanList(1, 1),
    getMediaList(1, 1),
    getPerpustakaanList(1, 1),
    getBeritaList(1, 3),
    getKegiatanList(1, 3),
  ]);

  if (results[0].status === "fulfilled") stats.berita = results[0].value.totalCount;
  if (results[1].status === "fulfilled") stats.kegiatan = results[1].value.totalCount;
  if (results[2].status === "fulfilled") stats.media = results[2].value.totalCount;
  if (results[3].status === "fulfilled") stats.perpustakaan = results[3].value.totalCount;

  const combined: Array<{
    id: string;
    judul: string;
    tipe: string;
    status: string;
    tanggal: string;
    rawDate: string;
  }> = [];

  if (results[4].status === "fulfilled") {
    for (const item of results[4].value.items) {
      combined.push({
        id: item.id,
        judul: item.judul,
        tipe: "Berita",
        status: item.isPublished ? "Published" : "Draft",
        tanggal: formatDate(item.tanggalPublish),
        rawDate: item.tanggalPublish,
      });
    }
  }

  if (results[5].status === "fulfilled") {
    for (const item of results[5].value.items) {
      combined.push({
        id: item.id,
        judul: item.judul,
        tipe: "Kegiatan",
        status: item.isPublished ? "Published" : "Draft",
        tanggal: formatDate(item.tanggalMulai),
        rawDate: item.tanggalMulai,
      });
    }
  }

  recentActivities = combined
    .sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime())
    .slice(0, 5)
    .map(({ id, judul, tipe, status, tanggal }) => ({ id, judul, tipe, status, tanggal }));

  return <CmsDashboard stats={stats} recentActivities={recentActivities} />;
}
