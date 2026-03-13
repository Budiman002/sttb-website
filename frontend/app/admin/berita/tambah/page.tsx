import type { Metadata } from "next";
import { CmsBeritaForm } from "@/components/admin/CmsBeritaForm";

export const metadata: Metadata = {
  title: "Tambah Berita — STTB CMS",
  description: "Buat artikel berita atau pengumuman baru",
};

export default function AdminBeritaTambahPage() {
  return <CmsBeritaForm />;
}
