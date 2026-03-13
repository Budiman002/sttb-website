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
import { deleteMediaArtikel } from "@/lib/api";

interface ArtikelItem {
  id: number | string;
  slug: string;
  thumbnail: string;
  judul: string;
  kategori: string;
  penulis: string;
  tanggal: string;
  status: string;
}

const ARTIKEL_DATA_INITIAL: ArtikelItem[] = [
  {
    id: 1,
    slug: "memahami-teologi-kontekstual-dalam-masyarakat-urban",
    thumbnail:
      "https://images.unsplash.com/photo-1704380636634-0f078fca0a8c?w=1080",
    judul: "Memahami Teologi Kontekstual dalam Masyarakat Urban",
    kategori: "Teologi",
    penulis: "Dr. Yusak Tanaka",
    tanggal: "10 Mar 2026",
    status: "Published",
  },
  {
    id: 2,
    slug: "hermeneutika-alkitab-prinsip-dan-praktik",
    thumbnail:
      "https://images.unsplash.com/photo-1613412007998-214b3bd9f760?w=1080",
    judul: "Hermeneutika Alkitab: Prinsip dan Praktik",
    kategori: "Biblika",
    penulis: "Rev. Maria Santoso",
    tanggal: "08 Mar 2026",
    status: "Published",
  },
  {
    id: 3,
    slug: "strategi-pelayanan-gereja-di-era-digital",
    thumbnail:
      "https://images.unsplash.com/photo-1577136258061-7b901cfe14bc?w=1080",
    judul: "Strategi Pelayanan Gereja di Era Digital",
    kategori: "Pelayanan",
    penulis: "Prof. Daniel Wibowo",
    tanggal: "05 Mar 2026",
    status: "Draft",
  },
  {
    id: 4,
    slug: "kepemimpinan-kristen-yang-transformatif",
    thumbnail:
      "https://images.unsplash.com/photo-1607332796965-436d1bf61731?w=1080",
    judul: "Kepemimpinan Kristen yang Transformatif",
    kategori: "Kepemimpinan",
    penulis: "Dr. Esther Halim",
    tanggal: "03 Mar 2026",
    status: "Published",
  },
  {
    id: 5,
    slug: "jurnal-teologi-refleksi-atas-penderitaan",
    thumbnail:
      "https://images.unsplash.com/photo-1612907527100-f02bb2b26b1d?w=1080",
    judul: "Jurnal Teologi: Refleksi atas Penderitaan",
    kategori: "Teologi",
    penulis: "Rev. Samuel Gunawan",
    tanggal: "01 Mar 2026",
    status: "Published",
  },
  {
    id: 6,
    slug: "spiritualitas-kristen-kontemporer",
    thumbnail:
      "https://images.unsplash.com/photo-1643122032473-0adaae81c4e8?w=1080",
    judul: "Spiritualitas Kristen Kontemporer",
    kategori: "Spiritualitas",
    penulis: "Dr. Yusak Tanaka",
    tanggal: "28 Feb 2026",
    status: "Draft",
  },
];

const CATEGORIES = [
  "Semua",
  "Teologi",
  "Biblika",
  "Pelayanan",
  "Kepemimpinan",
  "Spiritualitas",
];

const TABLE_HEADERS = [
  { label: "Thumbnail", className: "w-[80px]" },
  { label: "Judul" },
  { label: "Kategori" },
  { label: "Penulis" },
  { label: "Tanggal" },
  { label: "Status" },
  { label: "Aksi", className: "w-[120px] text-center" },
];

function getStatusClass(status: string) {
  return status === "Published"
    ? "bg-emerald-100 text-emerald-600"
    : "bg-[#F5F7FA] text-[#9AA3B5]";
}

const totalPages = 3;

export function CmsMedia({ initialItems }: { initialItems?: ArtikelItem[] } = {}) {
  const pathname = usePathname();
  const isVideoTab = pathname.includes("/video");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<ArtikelItem[]>(initialItems ?? ARTIKEL_DATA_INITIAL);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus artikel ini?")) return;
    try {
      await deleteMediaArtikel(id);
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
              Manajemen artikel dan konten media STTB
            </p>
          </div>
          <Link
            href={
              isVideoTab
                ? "/admin/media/video/tambah"
                : "/admin/media/artikel/tambah"
            }
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sttb-navy hover:bg-sttb-navy-dark text-white font-semibold text-[15px] transition-colors hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            {isVideoTab ? "Tambah Video" : "Tambah Artikel"}
          </Link>
        </div>

        {/* Tab Navigation */}
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

        {/* Filter Bar */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none w-[18px] h-[18px] text-[#9AA3B5]" />
              <input
                type="text"
                placeholder="Cari judul..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
            </div>
            <select
              value={selectedKategori}
              onChange={(e) => setSelectedKategori(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
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
                {items.map((artikel) => (
                  <tr
                    key={artikel.id}
                    className="border-b border-[#E8ECF2] hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden bg-[#F5F7FA]">
                        {artikel.thumbnail ? (
                          <Image
                            src={artikel.thumbnail}
                            alt={artikel.judul}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[#1A2340] max-w-[300px]">
                      {artikel.judul}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {artikel.kategori}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {artikel.penulis}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {artikel.tanggal}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(artikel.status)}`}
                      >
                        {artikel.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/admin/media/artikel/${artikel.slug}/edit`}
                          className="p-2 rounded-lg text-sttb-navy hover:bg-blue-50 transition-colors"
                          aria-label="Edit artikel"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-2 rounded-lg text-sttb-red hover:bg-red-50 transition-colors"
                          aria-label="Hapus artikel"
                          onClick={() => handleDelete(String(artikel.id))}
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
              <span className="font-semibold text-[#1A2340]">6</span> artikel
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
