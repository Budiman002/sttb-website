import type { Metadata } from "next";
import { getMediaList } from "@/lib/api";
import { MediaListClient } from "@/components/media/MediaListClient";

export const metadata: Metadata = {
  title: "Media & Publikasi — STTB Bandung",
  description:
    "Artikel akademis, video pelayanan, dan publikasi terbaru dari STTB Bandung.",
};

export default async function JelajahiMediaPage() {
  let items = [];
  let totalCount = 0;

  try {
    const data = await getMediaList(1, 9);
    items = data.items;
    totalCount = data.totalCount;
  } catch {
    // API unreachable — show empty state
  }

  return <MediaListClient items={items} totalCount={totalCount} />;
}
