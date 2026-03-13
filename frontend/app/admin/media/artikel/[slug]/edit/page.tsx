import type { Metadata } from "next";
import { CmsMediaArtikelForm } from "@/components/admin/CmsMediaArtikelForm";

export const metadata: Metadata = {
  title: "Edit Artikel — STTB CMS",
};

export default async function AdminMediaArtikelEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CmsMediaArtikelForm mode="edit" editSlug={slug} />;
}
