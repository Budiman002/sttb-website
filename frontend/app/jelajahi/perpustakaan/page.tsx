import type { Metadata } from "next";
import { getPerpustakaanList } from "@/lib/api";
import { PerpustakaanListClient } from "@/components/perpustakaan/PerpustakaanListClient";

export const metadata: Metadata = {
  title: "Perpustakaan — STTB Bandung",
  description:
    "Koleksi buku, jurnal teologi, dan sumber akademis Sekolah Tinggi Teologi Bandung.",
};

export default async function JelajahiPerpustakaanPage() {
  let items = [];
  let totalCount = 0;

  try {
    const data = await getPerpustakaanList(1, 8);
    items = data.items;
    totalCount = data.totalCount;
  } catch {
    // API unreachable — show empty state
  }

  return <PerpustakaanListClient items={items} totalCount={totalCount} />;
}
