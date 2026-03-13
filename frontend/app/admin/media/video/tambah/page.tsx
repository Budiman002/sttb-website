import type { Metadata } from "next";
import { CmsMediaVideoForm } from "@/components/admin/CmsMediaVideoForm";

export const metadata: Metadata = {
  title: "Tambah Video — STTB CMS",
  description: "Tambahkan konten video baru ke media STTB",
};

export default function AdminMediaVideoTambahPage() {
  return <CmsMediaVideoForm />;
}
