import type { Metadata } from "next";
import { CmsMediaVideoForm } from "@/components/admin/CmsMediaVideoForm";

export const metadata: Metadata = {
  title: "Edit Video — STTB CMS",
};

export default async function AdminMediaVideoEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CmsMediaVideoForm mode="edit" editSlug={slug} />;
}
