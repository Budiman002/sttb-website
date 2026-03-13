import type { Metadata } from "next";
import { CmsKegiatanForm } from "@/components/admin/CmsKegiatanForm";

export const metadata: Metadata = {
  title: "Edit Kegiatan — STTB CMS",
};

export default async function AdminKegiatanEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CmsKegiatanForm mode="edit" editSlug={slug} />;
}
