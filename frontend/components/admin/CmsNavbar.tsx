"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Video,
  BookOpen,
  LogOut,
  User,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Berita", href: "/admin/berita", icon: FileText },
  { label: "Kegiatan", href: "/admin/kegiatan", icon: Calendar },
  { label: "Media", href: "/admin/media", icon: Video },
  { label: "Perpustakaan", href: "/admin/perpustakaan", icon: BookOpen },
];

export function CmsNavbar() {
  const pathname = usePathname();

  // Hide on login page — full-screen layout handles its own design
  if (pathname === "/admin/login") return null;

  return (
    <nav className="bg-sttb-navy border-b border-sttb-navy-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/admin/dashboard"
              className="font-heading text-xl font-bold text-white tracking-wide shrink-0"
            >
              STTB <span className="text-sttb-red">CMS</span>
            </Link>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-body text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* User + Logout */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="font-body text-sm text-white/90 hidden sm:inline">
                Admin
              </span>
            </div>
            <Link
              href="/admin/login"
              className="flex items-center gap-2 px-3 py-2 rounded-lg font-body text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Keluar</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
