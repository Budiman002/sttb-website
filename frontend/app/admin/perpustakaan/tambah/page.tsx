import type { Metadata } from "next";
import { CmsPerpustakaanForm } from "@/components/admin/CmsPerpustakaanForm";

export const metadata: Metadata = {
  title: "Tambah Koleksi — STTB CMS",
  description: "Tambahkan buku atau literatur baru ke perpustakaan STTB",
};

export default function AdminPerpustakaanTambahPage() {
  return <CmsPerpustakaanForm />;
}
