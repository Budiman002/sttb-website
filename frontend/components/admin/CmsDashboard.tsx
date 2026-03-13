"use client";

import Link from "next/link";
import {
  FileText,
  Calendar,
  Video,
  BookOpen,
  TrendingUp,
  Clock,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DashboardStats {
  berita: number;
  kegiatan: number;
  media: number;
  perpustakaan: number;
}

interface DashboardActivity {
  id: string | number;
  judul: string;
  tipe: string;
  status: string;
  tanggal: string;
}

// ─── Static Configs ───────────────────────────────────────────────────────────

const STAT_CONFIGS: {
  key: keyof DashboardStats;
  label: string;
  icon: typeof FileText;
  change: string;
}[] = [
  { key: "berita", label: "Berita", icon: FileText, change: "+5 bulan ini" },
  { key: "kegiatan", label: "Kegiatan", icon: Calendar, change: "+8 bulan ini" },
  { key: "media", label: "Media", icon: Video, change: "+12 bulan ini" },
  { key: "perpustakaan", label: "Perpustakaan", icon: BookOpen, change: "+23 bulan ini" },
];

const DEFAULT_ACTIVITIES: DashboardActivity[] = [
  { id: 1, judul: "Wisuda STTB Angkatan 2026", tipe: "Berita", status: "Published", tanggal: "12 Mar 2026" },
  { id: 2, judul: "Seminar Teologi Urban", tipe: "Kegiatan", status: "Draft", tanggal: "11 Mar 2026" },
  { id: 3, judul: "Podcast: Theological Reflection", tipe: "Media", status: "Published", tanggal: "10 Mar 2026" },
  { id: 4, judul: "Systematic Theology Vol. 2", tipe: "Perpustakaan", status: "Published", tanggal: "09 Mar 2026" },
  { id: 5, judul: "Pembukaan Pendaftaran S2", tipe: "Berita", status: "Scheduled", tanggal: "08 Mar 2026" },
];

const quickActions = [
  { label: "Tambah Berita", icon: FileText, href: "/admin/berita/tambah" },
  { label: "Tambah Kegiatan", icon: Calendar, href: "/admin/kegiatan/tambah" },
  { label: "Tambah Media", icon: Video, href: "/admin/media/tambah" },
  { label: "Tambah Koleksi", icon: BookOpen, href: "/admin/perpustakaan/tambah" },
];

function getStatusClass(status: string) {
  switch (status) {
    case "Published":
      return "bg-emerald-100 text-emerald-600";
    case "Draft":
      return "bg-amber-100 text-amber-600";
    case "Scheduled":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-[#6B7A99]";
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function CmsDashboard({
  stats = { berita: 0, kegiatan: 0, media: 0, perpustakaan: 0 },
  recentActivities,
}: {
  stats?: DashboardStats;
  recentActivities?: DashboardActivity[];
} = {}) {
  const activities = recentActivities?.length ? recentActivities : DEFAULT_ACTIVITIES;

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-body">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="font-heading text-[40px] font-bold text-sttb-navy-dark mb-2">
            Dashboard
          </h1>
          <p className="font-body text-base text-[#6B7A99]">
            Ringkasan aktivitas dan statistik konten STTB
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {STAT_CONFIGS.map((config) => {
            const Icon = config.icon;
            return (
              <div
                key={config.label}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border-t-4 border-sttb-navy"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#E8F0FB] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sttb-navy" />
                    </div>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="font-body text-[32px] font-bold text-[#1A2340] leading-none mb-2">
                    {stats[config.key]}
                  </div>
                  <div className="font-body text-base font-semibold text-[#1A2340] mb-1">
                    {config.label}
                  </div>
                  <div className="font-body text-[13px] text-[#9AA3B5]">
                    {config.change}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent activity table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#E8ECF2] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sttb-navy" />
                  <h2 className="font-body text-lg font-bold text-[#1A2340]">
                    Aktivitas Terbaru
                  </h2>
                </div>
                <button className="font-body text-sm font-medium text-sttb-navy hover:text-sttb-navy-dark transition-colors">
                  Lihat Semua
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F5F7FA]">
                    <tr>
                      {["Judul", "Tipe", "Status", "Tanggal"].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-left font-body text-[13px] font-semibold text-[#6B7A99] uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((activity) => (
                      <tr
                        key={activity.id}
                        className="border-b border-[#E8ECF2] hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-body text-sm font-medium text-[#1A2340]">
                          {activity.judul}
                        </td>
                        <td className="px-6 py-4 font-body text-sm text-[#6B7A99]">
                          {activity.tipe}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full font-body text-xs font-semibold ${getStatusClass(activity.status)}`}
                          >
                            {activity.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-body text-sm text-[#6B7A99]">
                          {activity.tanggal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#E8ECF2]">
                <h2 className="font-body text-lg font-bold text-[#1A2340]">
                  Aksi Cepat
                </h2>
              </div>
              <div className="p-6 space-y-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-sttb-navy hover:bg-sttb-navy-dark font-body text-sm font-semibold text-white transition-all hover:shadow-md"
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {action.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
