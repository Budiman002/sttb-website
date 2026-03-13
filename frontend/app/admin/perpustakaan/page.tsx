import type { Metadata } from "next";
import { CmsPerpustakaan } from "@/components/admin/CmsPerpustakaan";
import { getPerpustakaanList } from "@/lib/api";

export const metadata: Metadata = {
  title: "Kelola Perpustakaan — STTB CMS",
  description: "Manajemen koleksi perpustakaan dan literatur STTB Bandung",
};

export default async function AdminPerpustakaanPage() {
  try {
    const data = await getPerpustakaanList(1, 10);
    const initialItems = data.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      thumbnail: item.thumbnailUrl ?? "",
      judul: item.judul,
      penulis: item.penulis,
      kategori: item.kategori,
      tahun: String(item.tahunTerbit ?? ""),
      status: item.isPublished ? "Published" : "Draft",
    }));
    return <CmsPerpustakaan initialItems={initialItems} />;
  } catch {
    return <CmsPerpustakaan />;
  }
}
