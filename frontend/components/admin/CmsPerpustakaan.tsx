"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { deletePerpustakaan } from "@/lib/api";

const CATEGORIES = [
  "Semua Kategori",
  "Teologi Sistematis",
  "Biblika",
  "Hermeneutika",
  "Sejarah Gereja",
  "Teologi Praktis",
  "Pendidikan Kristen",
  "Misiologi",
];

const TABLE_HEADERS = [
  { label: "Thumbnail", className: "w-[80px]" },
  { label: "Judul" },
  { label: "Penulis", className: "w-[180px]" },
  { label: "Kategori", className: "w-[160px]" },
  { label: "Tahun", className: "w-[100px]" },
  { label: "Status", className: "w-[110px]" },
  { label: "Aksi", className: "w-[120px] text-center" },
];

interface PerpustakaanItem {
  id: number | string;
  slug: string;
  thumbnail: string;
  judul: string;
  penulis: string;
  kategori: string;
  tahun: string;
  status: string;
}

const PERPUSTAKAAN_DATA_INITIAL: PerpustakaanItem[] = [
  {
    id: 1,
    slug: "teologi-sistematika-fondasi-iman-kristen",
    thumbnail:
      "https://images.unsplash.com/photo-1654193404293-886297721ca7?w=1080",
    judul: "Teologi Sistematika: Fondasi Iman Kristen",
    penulis: "Dr. Yusak Tanaka",
    kategori: "Teologi Sistematis",
    tahun: "2024",
    status: "Published",
  },
  {
    id: 2,
    slug: "tafsiran-kitab-roma-perspektif-kontekstual",
    thumbnail:
      "https://images.unsplash.com/photo-1769211154033-b3f55daabc67?w=1080",
    judul: "Tafsiran Kitab Roma: Perspektif Kontekstual",
    penulis: "Prof. Daniel Wibowo",
    kategori: "Biblika",
    tahun: "2025",
    status: "Published",
  },
  {
    id: 3,
    slug: "hermeneutika-reformed-metode-interpretasi-alkitab",
    thumbnail:
      "https://images.unsplash.com/photo-1634044060889-7e8fcf0e415c?w=1080",
    judul: "Hermeneutika Reformed: Metode Interpretasi Alkitab",
    penulis: "Rev. Maria Santoso",
    kategori: "Hermeneutika",
    tahun: "2023",
    status: "Draft",
  },
  {
    id: 4,
    slug: "sejarah-gereja-indonesia-dari-masa-ke-masa",
    thumbnail:
      "https://images.unsplash.com/photo-1763336222526-dc8dc76e7858?w=1080",
    judul: "Sejarah Gereja Indonesia: Dari Masa ke Masa",
    penulis: "Dr. Esther Halim",
    kategori: "Sejarah Gereja",
    tahun: "2022",
    status: "Published",
  },
  {
    id: 5,
    slug: "pastoral-gereja-urban-tantangan-dan-peluang",
    thumbnail:
      "https://images.unsplash.com/photo-1728284105715-46d74acdcbec?w=1080",
    judul: "Pastoral Gereja Urban: Tantangan dan Peluang",
    penulis: "Dr. Andreas Kurniawan",
    kategori: "Teologi Praktis",
    tahun: "2026",
    status: "Published",
  },
  {
    id: 6,
    slug: "pendidikan-kristen-transformatif",
    thumbnail:
      "https://images.unsplash.com/photo-1605141313843-b333b7bde62d?w=1080",
    judul: "Pendidikan Kristen Transformatif",
    penulis: "Dr. Ruth Simanjuntak",
    kategori: "Pendidikan Kristen",
    tahun: "2025",
    status: "Draft",
  },
];

function getStatusClass(status: string) {
  return status === "Published"
    ? "bg-emerald-100 text-emerald-600"
    : "bg-[#F5F7FA] text-[#9AA3B5]";
}

const totalPages = 3;

export function CmsPerpustakaan({ initialItems }: { initialItems?: PerpustakaanItem[] } = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [items, setItems] = useState<PerpustakaanItem[]>(initialItems ?? PERPUSTAKAAN_DATA_INITIAL);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowCategoryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus koleksi ini?")) return;
    try {
      await deletePerpustakaan(id);
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
              Kelola Perpustakaan
            </h1>
            <p className="text-base text-[#6B7A99]">
              Manajemen koleksi perpustakaan dan literatur STTB
            </p>
          </div>
          <Link
            href="/admin/perpustakaan/tambah"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sttb-navy hover:bg-sttb-navy-dark text-white font-semibold text-[15px] transition-colors hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Tambah Koleksi
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
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

            {/* Category Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setShowCategoryDropdown((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#E8ECF2] bg-white text-sm text-[#1A2340] transition-colors focus:outline-none hover:border-[#9AA3B5]"
              >
                <span>{selectedCategory}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#6B7A99] transition-transform duration-200 ${
                    showCategoryDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showCategoryDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-[#E8ECF2] shadow-lg overflow-hidden z-10 bg-white">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm border-b border-[#E8ECF2] last:border-b-0 transition-colors hover:bg-blue-50 ${
                        selectedCategory === category
                          ? "font-semibold text-sttb-navy"
                          : "font-normal text-[#1A2340]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
                {items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#E8ECF2] hover:bg-gray-50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <td className="px-6 py-4">
                      <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden bg-[#F5F7FA]">
                        {item.thumbnail ? (
                          <Image
                            src={item.thumbnail}
                            alt={item.judul}
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

                    {/* Judul */}
                    <td className="px-6 py-4 text-sm font-medium text-[#1A2340] max-w-[320px]">
                      {item.judul}
                    </td>

                    {/* Penulis */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {item.penulis}
                    </td>

                    {/* Kategori */}
                    <td className="px-6 py-4 text-[13px] text-[#6B7A99]">
                      {item.kategori}
                    </td>

                    {/* Tahun */}
                    <td className="px-6 py-4 font-mono text-sm text-[#6B7A99]">
                      {item.tahun}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/admin/perpustakaan/${item.slug}/edit`}
                          className="p-2 rounded-lg text-sttb-navy hover:bg-blue-50 transition-colors"
                          aria-label="Edit koleksi"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-2 rounded-lg text-sttb-red hover:bg-red-50 transition-colors"
                          aria-label="Hapus koleksi"
                          onClick={() => handleDelete(String(item.id))}
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
              <span className="font-semibold text-[#1A2340]">6</span> koleksi
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
