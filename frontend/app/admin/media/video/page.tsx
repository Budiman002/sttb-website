import type { Metadata } from "next";
import { CmsMediaVideo } from "@/components/admin/CmsMediaVideo";
import { getMediaList } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kelola Media Video — STTB CMS",
  description: "Manajemen video dan konten multimedia STTB Bandung",
};

export default async function AdminMediaVideoPage() {
  try {
    const data = await getMediaList(1, 10, "video");
    const initialItems = data.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      thumbnail: item.thumbnailUrl ?? "",
      judul: item.judul,
      durasi: "",
      videoUrl: "",
      tanggal: formatDate(item.tanggalPublish),
      status: "",
    }));
    return <CmsMediaVideo initialItems={initialItems} />;
  } catch {
    return <CmsMediaVideo />;
  }
}
