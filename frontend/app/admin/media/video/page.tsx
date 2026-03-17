import type { Metadata } from "next";
import { CmsMediaVideo } from "@/components/admin/CmsMediaVideo";
import { getCmsMediaVideoList } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kelola Media Video — STTB CMS",
  description: "Manajemen video dan konten multimedia STTB Bandung",
};

export default async function AdminMediaVideoPage() {
  try {
    const data = await getCmsMediaVideoList(1, 10);
    const initialItems = data.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      thumbnail: item.thumbnailUrl ?? "",
      judul: item.judul,
      durasi: "",
      videoUrl: "",
      tanggal: formatDate(item.tanggalPublish),
      status: item.isPublished ? "Published" : "Draft",
    }));
    return <CmsMediaVideo initialItems={initialItems} totalCount={data.totalCount} />;
  } catch {
    return <CmsMediaVideo />;
  }
}
