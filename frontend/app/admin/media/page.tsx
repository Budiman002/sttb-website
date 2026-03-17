import type { Metadata } from "next";
import { CmsMedia } from "@/components/admin/CmsMedia";
import { getCmsMediaArtikelList } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kelola Media — STTB CMS",
  description: "Manajemen artikel dan konten media STTB Bandung",
};

export default async function AdminMediaPage() {
  try {
    const data = await getCmsMediaArtikelList(1, 10);
    const initialItems = data.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      thumbnail: item.thumbnailUrl ?? "",
      judul: item.judul,
      kategori: item.kategori,
      penulis: item.penulis,
      tanggal: formatDate(item.tanggalPublish),
      status: item.isPublished ? "Published" : "Draft",
    }));
    return <CmsMedia initialItems={initialItems} totalCount={data.totalCount} />;
  } catch {
    return <CmsMedia />;
  }
}
