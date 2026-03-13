import type { Metadata } from "next";
import { CmsPerpustakaanForm } from "@/components/admin/CmsPerpustakaanForm";

export const metadata: Metadata = {
  title: "Edit Koleksi — STTB CMS",
};

export default async function AdminPerpustakaanEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CmsPerpustakaanForm mode="edit" editSlug={slug} />;
}
