"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { deleteBerita, getCmsBeritaList } from "@/lib/api";
import { formatDate } from "@/lib/utils";

interface BeritaItem {
  id: number | string;
  slug: string;
  thumbnail: string;
  judul: string;
  kategori: string;
  penulis: string;
  tanggalPublish: string;
  status: string;
}

const BERITA_DATA_INITIAL: BeritaItem[] = [
  {
    id: 1,
    slug: "wisuda-sttb-angkatan-2026-dihadiri-120-lulusan",
    thumbnail:
      "https://images.unsplash.com/photo-1759328381007-64559a862aa6?w=1080",
    judul: "Wisuda STTB Angkatan 2026 Dihadiri 120 Lulusan",
    kategori: "Kegiatan Kampus",
    penulis: "Dr. Yusak Tanaka",
    tanggalPublish: "12 Mar 2026",
    status: "Published",
  },
  {
    id: 2,
    slug: "pembukaan-pendaftaran-program-magister-teologi-2026-2027",
    thumbnail:
      "https://images.unsplash.com/photo-1758270705657-f28eec1a5694?w=1080",
    judul: "Pembukaan Pendaftaran Program Magister Teologi 2026/2027",
    kategori: "Pengumuman",
    penulis: "Rev. Maria Santoso",
    tanggalPublish: "10 Mar 2026",
    status: "Draft",
  },
  {
    id: 3,
    slug: "ibadah-pembekalan-mahasiswa-baru-tema-called-to-serve",
    thumbnail:
      "https://images.unsplash.com/photo-1554355793-1d8a778113ba?w=1080",
    judul: "Ibadah Pembekalan Mahasiswa Baru: Tema 'Called to Serve'",
    kategori: "Rohani",
    penulis: "Prof. Daniel Wibowo",
    tanggalPublish: "08 Mar 2026",
    status: "Published",
  },
  {
    id: 4,
    slug: "seminar-nasional-teologi-dalam-konteks-urban-modern",
    thumbnail:
      "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?w=1080",
    judul: "Seminar Nasional: Teologi dalam Konteks Urban Modern",
    kategori: "Akademik",
    penulis: "Dr. Esther Halim",
    tanggalPublish: "05 Mar 2026",
    status: "Published",
  },
  {
    id: 5,
    slug: "perpustakaan-sttb-tambah-200-koleksi-buku-teologi-baru",
    thumbnail:
      "https://images.unsplash.com/photo-1567787387614-b0ae86dc7d6f?w=1080",
    judul: "Perpustakaan STTB Tambah 200 Koleksi Buku Teologi Baru",
    kategori: "Kegiatan Kampus",
    penulis: "Rev. Maria Santoso",
    tanggalPublish: "03 Mar 2026",
    status: "Draft",
  },
  {
    id: 6,
    slug: "renovasi-gedung-kuliah-sttb-selesai-siap-sambut-semester-baru",
    thumbnail:
      "https://images.unsplash.com/photo-1600903308878-bf5e554ab841?w=1080",
    judul: "Renovasi Gedung Kuliah STTB Selesai, Siap Sambut Semester Baru",
    kategori: "Pengumuman",
    penulis: "Dr. Yusak Tanaka",
    tanggalPublish: "01 Mar 2026",
    status: "Published",
  },
];

const CATEGORIES = [
  "Semua",
  "Kegiatan Kampus",
  "Akademik",
  "Rohani",
  "Pengumuman",
  "Alumni",
];
const STATUSES = ["Semua", "Published", "Draft"];

function getStatusClass(status: string) {
  return status === "Published"
    ? "bg-emerald-100 text-emerald-600"
    : "bg-[#F5F7FA] text-[#9AA3B5]";
}

const TABLE_HEADERS = [
  { label: "Thumbnail", className: "w-[80px]" },
  { label: "Judul" },
  { label: "Kategori" },
  { label: "Penulis" },
  { label: "Tanggal Publish" },
  { label: "Status" },
  { label: "Aksi", className: "w-[120px] text-center" },
];

const PAGE_SIZE = 10;

export function CmsBerita({
  initialItems,
  totalCount: initialTotalCount,
}: {
  initialItems?: BeritaItem[];
  totalCount?: number;
} = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("semua");
  const [selectedStatus, setSelectedStatus] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<BeritaItem[]>(initialItems ?? []);
  const [totalCount, setTotalCount] = useState(initialTotalCount ?? 0);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const isFirstRender = useRef(true);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  // Fetch data when page or filter changes (skip initial mount — server already fetched page 1)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const fetchPage = async () => {
      setIsLoadingPage(true);
      try {
        const kategoriParam =
          selectedKategori === "semua" ? undefined : selectedKategori;
        const data = await getCmsBeritaList(
          currentPage,
          PAGE_SIZE,
          kategoriParam,
        );
        setItems(
          data.items.map((item) => ({
            id: item.id,
            slug: item.slug,
            thumbnail: item.thumbnailUrl ?? "",
            judul: item.judul,
            kategori: item.kategori,
            penulis: item.penulis,
            tanggalPublish: formatDate(item.tanggalPublish),
            status: item.isPublished ? "Published" : "Draft",
          })),
        );
        setTotalCount(data.totalCount);
      } catch (error) {
        console.error("Failed to fetch page:", error);
      } finally {
        setIsLoadingPage(false);
      }
    };

    fetchPage();
  }, [currentPage, selectedKategori]);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus berita ini?")) return;
    try {
      await deleteBerita(id);
      setItems((prev) => prev.filter((item) => String(item.id) !== id));
    } catch {
      alert("Gagal menghapus. Coba lagi.");
    }
  };

  const filteredItems = items.filter((berita) => {
    const matchesKategori =
      selectedKategori === "semua" ||
      berita.kategori.toLowerCase() === selectedKategori;
    const matchesStatus =
      selectedStatus === "semua" ||
      berita.status.toLowerCase() === selectedStatus;
    const matchesSearch =
      searchQuery === "" ||
      berita.judul.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesKategori && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-body">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-[40px] font-bold text-sttb-navy-dark mb-2">
              Kelola Berita
            </h1>
            <p className="text-base text-[#6B7A99]">
              Manajemen artikel berita dan pengumuman STTB
            </p>
          </div>
          <Link
            href="/admin/berita/tambah"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sttb-navy hover:bg-sttb-navy-dark text-white font-semibold text-[15px] transition-colors hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Tambah Berita
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Kategori */}
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

            {/* Status */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy cursor-pointer"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s.toLowerCase()}>
                  {s}
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
                {filteredItems.map((berita) => (
                  <tr
                    key={berita.id}
                    className="border-b border-[#E8ECF2] hover:bg-gray-50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <td className="px-6 py-4">
                      <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden bg-[#F5F7FA]">
                        {berita.thumbnail ? (
                          <Image
                            src={berita.thumbnail}
                            alt={berita.judul}
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
                    <td className="px-6 py-4 text-sm font-medium text-[#1A2340] max-w-[300px]">
                      {berita.judul}
                    </td>

                    {/* Kategori */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {berita.kategori}
                    </td>

                    {/* Penulis */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {berita.penulis}
                    </td>

                    {/* Tanggal */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {berita.tanggalPublish}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(berita.status)}`}
                      >
                        {berita.status}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/admin/berita/${berita.slug}/edit`}
                          className="p-2 rounded-lg text-sttb-navy hover:bg-blue-50 transition-colors"
                          aria-label="Edit berita"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-2 rounded-lg text-sttb-red hover:bg-red-50 transition-colors"
                          aria-label="Hapus berita"
                          onClick={() => handleDelete(String(berita.id))}
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
              <span className="font-semibold text-[#1A2340]">
                {(() => {
                  const startItem =
                    totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
                  const endItem = Math.min(currentPage * PAGE_SIZE, totalCount);
                  const displayStart = Math.min(startItem, endItem);
                  return totalCount === 0
                    ? "0–0"
                    : `${displayStart}–${endItem}`;
                })()}
              </span>{" "}
              dari{" "}
              <span className="font-semibold text-[#1A2340]">{totalCount}</span>{" "}
              berita
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
