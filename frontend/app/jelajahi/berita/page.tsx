import type { Metadata } from "next";
import { getBeritaList } from "@/lib/api";
import { BeritaListClient } from "@/components/berita/BeritaListClient";

export const metadata: Metadata = {
  title: "Berita — STTB Bandung",
  description:
    "Berita dan dokumentasi terbaru dari Sekolah Tinggi Teologi Bandung.",
};

export default async function JelajahiBeritaPage() {
  let items = [];
  let totalCount = 0;

  try {
    const data = await getBeritaList(1, 9);
    items = data.items;
    totalCount = data.totalCount;
  } catch {
    // API unreachable — show empty state
  }

  return <BeritaListClient items={items} totalCount={totalCount} />;
}
