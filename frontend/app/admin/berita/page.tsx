import type { Metadata } from "next";
import { CmsBerita } from "@/components/admin/CmsBerita";
import { getCmsBeritaList } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kelola Berita — STTB CMS",
  description: "Manajemen artikel berita dan pengumuman STTB Bandung",
};

export default async function AdminBeritaPage() {
  try {
    const data = await getCmsBeritaList(1, 10);
    const initialItems = data.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      thumbnail: item.thumbnailUrl ?? "",
      judul: item.judul,
      kategori: item.kategori,
      penulis: item.penulis,
      tanggalPublish: formatDate(item.tanggalPublish),
      status: item.isPublished ? "Published" : "Draft",
    }));
    return <CmsBerita initialItems={initialItems} totalCount={data.totalCount} />;
  } catch {
    return <CmsBerita />;
  }
}
