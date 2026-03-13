import type { Metadata } from "next";
import { CmsKegiatan } from "@/components/admin/CmsKegiatan";
import { getKegiatanList } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kelola Kegiatan — STTB CMS",
  description: "Manajemen kegiatan dan event kampus STTB Bandung",
};

export default async function AdminKegiatanPage() {
  try {
    const data = await getKegiatanList(1, 10);
    const initialItems = data.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      thumbnail: item.thumbnailUrl ?? "",
      judul: item.judul,
      lokasi: item.lokasi,
      tanggalMulai: formatDate(item.tanggalMulai),
      tanggalSelesai: item.tanggalSelesai ? formatDate(item.tanggalSelesai) : "",
      status: item.isPublished ? "Published" : "Draft",
    }));
    return <CmsKegiatan initialItems={initialItems} />;
  } catch {
    return <CmsKegiatan />;
  }
}
