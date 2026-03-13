import type { Metadata } from "next";
import { CmsMediaArtikelForm } from "@/components/admin/CmsMediaArtikelForm";

export const metadata: Metadata = {
  title: "Tambah Artikel — STTB CMS",
  description: "Buat artikel atau konten media baru",
};

export default function AdminMediaArtikelTambahPage() {
  return <CmsMediaArtikelForm />;
}
