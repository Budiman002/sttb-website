import { CmsNavbar } from "@/components/admin/CmsNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CmsNavbar />
      {children}
    </>
  );
}
