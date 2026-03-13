import type { Metadata } from "next";
import { CmsKegiatanForm } from "@/components/admin/CmsKegiatanForm";

export const metadata: Metadata = {
  title: "Tambah Kegiatan — STTB CMS",
  description: "Buat kegiatan atau event kampus baru",
};

export default function AdminKegiatanTambahPage() {
  return <CmsKegiatanForm />;
}
