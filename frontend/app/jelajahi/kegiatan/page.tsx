import type { Metadata } from "next";
import { getKegiatanList } from "@/lib/api";
import { KegiatanListClient } from "@/components/kegiatan/KegiatanListClient";

export const metadata: Metadata = {
  title: "Kegiatan — STTB Bandung",
  description:
    "Kegiatan akademik, pelayanan, dan komunitas Sekolah Tinggi Teologi Bandung.",
};

export default async function JelajahiKegiatanPage() {
  let items = [];
  let totalCount = 0;

  try {
    const data = await getKegiatanList(1, 9);
    items = data.items;
    totalCount = data.totalCount;
  } catch {
    // API unreachable — show empty state
  }

  return <KegiatanListClient items={items} totalCount={totalCount} />;
}
