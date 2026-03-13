"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { deleteMediaVideo } from "@/lib/api";

interface VideoItem {
  id: number | string;
  slug: string;
  thumbnail: string;
  judul: string;
  durasi: string;
  videoUrl: string;
  tanggal: string;
  status: string;
}

const VIDEO_DATA_INITIAL: VideoItem[] = [
  {
    id: 1,
    slug: "khotbah-teologi-kota-dalam-konteks-urban",
    thumbnail:
      "https://images.unsplash.com/photo-1624499843552-7347d9f6d285?w=1080",
    judul: "Khotbah: Teologi Kota dalam Konteks Urban",
    durasi: "45:23",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tanggal: "10 Mar 2026",
    status: "Published",
  },
  {
    id: 2,
    slug: "kebaktian-chapel-sttb-maret-2026",
    thumbnail:
      "https://images.unsplash.com/photo-1696946909337-8ff953da87a8?w=1080",
    judul: "Kebaktian Chapel STTB: Maret 2026",
    durasi: "1:15:30",
    videoUrl: "https://www.youtube.com/watch?v=xYz789AbCdE",
    tanggal: "08 Mar 2026",
    status: "Published",
  },
  {
    id: 3,
    slug: "kuliah-umum-hermeneutika-perjanjian-baru",
    thumbnail:
      "https://images.unsplash.com/photo-1572615399747-3533275ad22d?w=1080",
    judul: "Kuliah Umum: Hermeneutika Perjanjian Baru",
    durasi: "52:18",
    videoUrl: "https://www.youtube.com/watch?v=abc123DefGh",
    tanggal: "05 Mar 2026",
    status: "Draft",
  },
  {
    id: 4,
    slug: "testimoni-alumni-perjalanan-pelayanan",
    thumbnail:
      "https://images.unsplash.com/photo-1605141450911-71256810c12a?w=1080",
    judul: "Testimoni Alumni: Perjalanan Pelayanan",
    durasi: "18:45",
    videoUrl: "https://www.youtube.com/watch?v=testAlumni123",
    tanggal: "03 Mar 2026",
    status: "Published",
  },
  {
    id: 5,
    slug: "virtual-tour-kampus-sttb-2026",
    thumbnail:
      "https://images.unsplash.com/photo-1715808167149-ed6212906224?w=1080",
    judul: "Virtual Tour Kampus STTB 2026",
    durasi: "12:30",
    videoUrl: "https://www.youtube.com/watch?v=campusTour2026",
    tanggal: "01 Mar 2026",
    status: "Published",
  },
  {
    id: 6,
    slug: "seminar-kepemimpinan-pastoral-transformatif",
    thumbnail:
      "https://images.unsplash.com/photo-1582192904915-d89c7250b235?w=1080",
    judul: "Seminar: Kepemimpinan Pastoral Transformatif",
    durasi: "2:05:15",
    videoUrl: "https://www.youtube.com/watch?v=leadershipSeminar",
    tanggal: "28 Feb 2026",
    status: "Draft",
  },
];

const TABLE_HEADERS = [
  { label: "Thumbnail", className: "w-[80px]" },
  { label: "Judul" },
  { label: "Durasi", className: "w-[100px]" },
  { label: "Video URL" },
  { label: "Tanggal", className: "w-[120px]" },
  { label: "Status", className: "w-[110px]" },
  { label: "Aksi", className: "w-[120px] text-center" },
];

function getStatusClass(status: string) {
  return status === "Published"
    ? "bg-emerald-100 text-emerald-600"
    : "bg-[#F5F7FA] text-[#9AA3B5]";
}

function truncateUrl(url: string, maxLength = 35) {
  return url.length <= maxLength ? url : url.substring(0, maxLength) + "...";
}

const totalPages = 3;

export function CmsMediaVideo({ initialItems }: { initialItems?: VideoItem[] } = {}) {
  const pathname = usePathname();
  const isVideoTab = pathname.includes("/video");

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<VideoItem[]>(initialItems ?? VIDEO_DATA_INITIAL);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus video ini?")) return;
    try {
      await deleteMediaVideo(id);
      setItems((prev) => prev.filter((item) => String(item.id) !== id));
    } catch {
      alert("Gagal menghapus. Coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-body">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-heading text-[40px] font-bold text-sttb-navy-dark mb-2">
              Kelola Media
            </h1>
            <p className="text-base text-[#6B7A99]">
              Manajemen video dan konten multimedia STTB
            </p>
          </div>
          <Link
            href="/admin/media/video/tambah"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sttb-navy hover:bg-sttb-navy-dark text-white font-semibold text-[15px] transition-colors hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Tambah Video
          </Link>
        </div>

        {/* Tab Navigation — same pattern as CmsMedia */}
        <div className="flex items-center gap-1 mb-6 border-b border-[#E8ECF2]">
          <Link
            href="/admin/media"
            className={`px-6 py-3 relative text-[15px] transition-colors ${
              !isVideoTab
                ? "font-semibold text-sttb-navy"
                : "font-normal text-[#6B7A99] hover:text-[#1A2340]"
            }`}
          >
            Artikel
            {!isVideoTab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sttb-navy" />
            )}
          </Link>
          <Link
            href="/admin/media/video"
            className={`px-6 py-3 relative text-[15px] transition-colors ${
              isVideoTab
                ? "font-semibold text-sttb-navy"
                : "font-normal text-[#6B7A99] hover:text-[#1A2340]"
            }`}
          >
            Video
            {isVideoTab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sttb-navy" />
            )}
          </Link>
        </div>

        {/* Filter Bar (search only) */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <div className="relative max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none w-[18px] h-[18px] text-[#9AA3B5]" />
            <input
              type="text"
              placeholder="Cari judul..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F5F7FA]">
                <tr>
                  {TABLE_HEADERS.map(({ label, className }) => (
                    <th
                      key={label}
                      className={`px-6 py-4 text-left text-[13px] font-semibold text-[#6B7A99] uppercase tracking-wide ${className ?? ""}`}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((video) => (
                  <tr
                    key={video.id}
                    className="border-b border-[#E8ECF2] hover:bg-gray-50 transition-colors"
                  >
                    {/* Thumbnail + play overlay */}
                    <td className="px-6 py-4">
                      <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden bg-[#F5F7FA]">
                        {video.thumbnail ? (
                          <>
                            <Image
                              src={video.thumbnail}
                              alt={video.judul}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                                <div className="w-2 h-2.5 bg-sttb-navy ml-0.5 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Judul */}
                    <td className="px-6 py-4 text-sm font-medium text-[#1A2340] max-w-[280px]">
                      {video.judul}
                    </td>

                    {/* Durasi */}
                    <td className="px-6 py-4 font-mono text-[13px] text-[#6B7A99]">
                      {video.durasi}
                    </td>

                    {/* Video URL */}
                    <td className="px-6 py-4 font-mono text-[12px] text-[#0056B3] max-w-[200px]">
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        title={video.videoUrl}
                      >
                        {truncateUrl(video.videoUrl)}
                      </a>
                    </td>

                    {/* Tanggal */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {video.tanggal}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(video.status)}`}
                      >
                        {video.status}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/admin/media/video/${video.slug}/edit`}
                          className="p-2 rounded-lg text-sttb-navy hover:bg-blue-50 transition-colors"
                          aria-label="Edit video"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-2 rounded-lg text-sttb-red hover:bg-red-50 transition-colors"
                          aria-label="Hapus video"
                          onClick={() => handleDelete(String(video.id))}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-[#E8ECF2] flex items-center justify-between">
            <p className="text-sm text-[#6B7A99]">
              Menampilkan{" "}
              <span className="font-semibold text-[#1A2340]">1-6</span> dari{" "}
              <span className="font-semibold text-[#1A2340]">6</span> video
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-[#E8ECF2] text-sm font-medium text-[#6B7A99] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors ${
                        currentPage === page
                          ? "bg-sttb-navy text-white"
                          : "border border-[#E8ECF2] text-[#6B7A99] hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-[#E8ECF2] text-sm font-medium text-[#6B7A99] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
