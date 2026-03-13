import type { Metadata } from "next";
import { CmsBeritaForm } from "@/components/admin/CmsBeritaForm";

export const metadata: Metadata = {
  title: "Edit Berita — STTB CMS",
};

export default async function AdminBeritaEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CmsBeritaForm mode="edit" editSlug={slug} />;
}
