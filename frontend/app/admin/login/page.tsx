import type { Metadata } from "next";
import { CmsLogin } from "@/components/admin/CmsLogin";

export const metadata: Metadata = {
  title: "Masuk — STTB CMS",
  description: "Login ke Content Management System STTB Bandung",
};

export default function AdminLoginPage() {
  return <CmsLogin />;
}
