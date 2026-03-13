"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { deleteKegiatan } from "@/lib/api";

interface KegiatanItem {
  id: number | string;
  slug: string;
  thumbnail: string;
  judul: string;
  lokasi: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  status: string;
}

const KEGIATAN_DATA_INITIAL: KegiatanItem[] = [
  {
    id: 1,
    slug: "konferensi-teologi-urban-2026",
    thumbnail:
      "https://images.unsplash.com/photo-1602022578110-fbfad5644f7f?w=1080",
    judul: "Konferensi Teologi Urban 2026",
    lokasi: "Auditorium STTB",
    tanggalMulai: "15 Apr 2026",
    tanggalSelesai: "17 Apr 2026",
    status: "Upcoming",
  },
  {
    id: 2,
    slug: "seminar-kepemimpinan-kristen-kontemporer",
    thumbnail:
      "https://images.unsplash.com/photo-1759922378100-89dca9fe3c98?w=1080",
    judul: "Seminar Kepemimpinan Kristen Kontemporer",
    lokasi: "Ruang Seminar Lt. 3",
    tanggalMulai: "10 Mar 2026",
    tanggalSelesai: "12 Mar 2026",
    status: "Ongoing",
  },
  {
    id: 3,
    slug: "retret-mahasiswa-menemukan-panggilan",
    thumbnail:
      "https://images.unsplash.com/photo-1631801752478-f45b08891d66?w=1080",
    judul: "Retret Mahasiswa: Menemukan Panggilan",
    lokasi: "Villa Ciater, Subang",
    tanggalMulai: "20 Feb 2026",
    tanggalSelesai: "23 Feb 2026",
    status: "Selesai",
  },
  {
    id: 4,
    slug: "ibadah-pemuda-generasi-pemulihan",
    thumbnail:
      "https://images.unsplash.com/photo-1767990376039-dcb8bfdcb6c3?w=1080",
    judul: "Ibadah Pemuda: Generasi Pemulihan",
    lokasi: "Kapel STTB",
    tanggalMulai: "01 Feb 2026",
    tanggalSelesai: "01 Feb 2026",
    status: "Selesai",
  },
  {
    id: 5,
    slug: "bakti-sosial-melayani-kota-bandung",
    thumbnail:
      "https://images.unsplash.com/photo-1769837230054-7f3a7356dde1?w=1080",
    judul: "Bakti Sosial: Melayani Kota Bandung",
    lokasi: "Desa Cibiru, Bandung",
    tanggalMulai: "25 May 2026",
    tanggalSelesai: "26 May 2026",
    status: "Upcoming",
  },
  {
    id: 6,
    slug: "wisuda-sarjana-teologi-2026",
    thumbnail:
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1080",
    judul: "Wisuda Sarjana Teologi 2026",
    lokasi: "Gedung Serba Guna Bandung",
    tanggalMulai: "10 Jul 2026",
    tanggalSelesai: "10 Jul 2026",
    status: "Upcoming",
  },
];

const STATUSES = ["Semua", "Upcoming", "Ongoing", "Selesai"];

const TABLE_HEADERS = [
  { label: "Thumbnail", className: "w-[80px]" },
  { label: "Judul" },
  { label: "Lokasi" },
  { label: "Tanggal Mulai" },
  { label: "Tanggal Selesai" },
  { label: "Status" },
  { label: "Aksi", className: "w-[120px] text-center" },
];

function getStatusClass(status: string) {
  switch (status) {
    case "Upcoming":
      return "bg-[#E8F0FB] text-[#0056B3]";
    case "Ongoing":
      return "bg-emerald-100 text-emerald-600";
    case "Selesai":
      return "bg-[#F5F7FA] text-[#9AA3B5]";
    default:
      return "bg-[#F5F7FA] text-[#9AA3B5]";
  }
}

const totalPages = 3;

export function CmsKegiatan({ initialItems }: { initialItems?: KegiatanItem[] } = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<KegiatanItem[]>(initialItems ?? KEGIATAN_DATA_INITIAL);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus kegiatan ini?")) return;
    try {
      await deleteKegiatan(id);
      setItems((prev) => prev.filter((item) => String(item.id) !== id));
    } catch {
      alert("Gagal menghapus. Coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-body">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-[40px] font-bold text-sttb-navy-dark mb-2">
              Kelola Kegiatan
            </h1>
            <p className="text-base text-[#6B7A99]">
              Manajemen kegiatan dan event kampus STTB
            </p>
          </div>
          <Link
            href="/admin/kegiatan/tambah"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sttb-navy hover:bg-sttb-navy-dark text-white font-semibold text-[15px] transition-colors hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Tambah Kegiatan
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
                {items.map((kegiatan) => (
                  <tr
                    key={kegiatan.id}
                    className="border-b border-[#E8ECF2] hover:bg-gray-50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <td className="px-6 py-4">
                      <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden bg-[#F5F7FA]">
                        {kegiatan.thumbnail ? (
                          <Image
                            src={kegiatan.thumbnail}
                            alt={kegiatan.judul}
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
                    <td className="px-6 py-4 text-sm font-medium text-[#1A2340] max-w-[250px]">
                      {kegiatan.judul}
                    </td>

                    {/* Lokasi */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {kegiatan.lokasi}
                    </td>

                    {/* Tanggal Mulai */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {kegiatan.tanggalMulai}
                    </td>

                    {/* Tanggal Selesai */}
                    <td className="px-6 py-4 text-sm text-[#6B7A99]">
                      {kegiatan.tanggalSelesai}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(kegiatan.status)}`}
                      >
                        {kegiatan.status}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/admin/kegiatan/${kegiatan.slug}/edit`}
                          className="p-2 rounded-lg text-sttb-navy hover:bg-blue-50 transition-colors"
                          aria-label="Edit kegiatan"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-2 rounded-lg text-sttb-red hover:bg-red-50 transition-colors"
                          aria-label="Hapus kegiatan"
                          onClick={() => handleDelete(String(kegiatan.id))}
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
              <span className="font-semibold text-[#1A2340]">6</span> kegiatan
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
