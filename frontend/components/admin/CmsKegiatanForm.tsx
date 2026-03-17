"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Link as LinkIcon,
  Upload,
  X,
  Calendar,
} from "lucide-react";
import { createKegiatan, updateKegiatan, getKegiatanDetail } from "@/lib/api";

const STATUS_KEGIATAN_OPTIONS = ["Upcoming", "Ongoing", "Selesai"];

const TOOLBAR_BUTTONS = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: Heading1, label: "Heading 1" },
  { icon: Heading2, label: "Heading 2" },
  { icon: List, label: "Bullet List" },
  { icon: ListOrdered, label: "Numbered List" },
  { icon: LinkIcon, label: "Link" },
];

interface CmsKegiatanFormProps {
  mode?: "create" | "edit";
  editSlug?: string;
}

export function CmsKegiatanForm({
  mode = "create",
  editSlug,
}: CmsKegiatanFormProps) {
  const [judul, setJudul] = useState("");
  const [slug, setSlug] = useState("");
  const [penyelenggara, setPenyelenggara] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState("2026-03-15");
  const [tanggalSelesai, setTanggalSelesai] = useState("2026-03-17");
  const [deskripsi, setDeskripsi] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [statusKegiatan, setStatusKegiatan] = useState("upcoming");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [itemId, setItemId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (mode === "edit" && editSlug) {
      getKegiatanDetail(editSlug)
        .then((data) => {
          setItemId(data.id);
          setJudul(data.judul ?? "");
          setSlug(data.slug ?? "");
          setPenyelenggara((data as any).penyelenggara ?? "");
          setLokasi(data.lokasi ?? "");
          setTanggalMulai(data.tanggalMulai?.split("T")[0] ?? "");
          setTanggalSelesai(data.tanggalSelesai?.split("T")[0] ?? "");
          setDeskripsi(data.deskripsi ?? "");
          setStatusKegiatan(data.status.toLowerCase());
          setThumbnail(data.thumbnailUrl ?? null);
          setStatus(data.isPublished ? "published" : "draft");
        })
        .catch(() => setError("Gagal memuat data"));
    }
  }, [mode, editSlug]);

  const handleSubmit = async (isPublished: boolean) => {
    setIsLoading(true);
    setError("");
    try {
      const payload = {
        judul,
        slug,
        deskripsi,
        lokasi,
        tanggalMulai,
        tanggalSelesai,
        status: statusKegiatan,
        penyelenggara,
        thumbnailUrl: thumbnail ?? undefined,
        isPublished,
      };
      if (mode === "edit") {
        await updateKegiatan(itemId, payload);
      } else {
        await createKegiatan(payload);
      }
      router.push("/admin/kegiatan");
    } catch {
      setError("Gagal menyimpan data. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleJudulChange = (value: string) => {
    setJudul(value);
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    );
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setThumbnail(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-body">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4">
          <Link
            href="/admin/kegiatan"
            className="text-sm text-[#6B7A99] hover:underline"
          >
            Kegiatan
          </Link>
          <ChevronRight className="w-4 h-4 text-[#9AA3B5]" />
          <span className="text-sm font-semibold text-[#1A2340]">
            {mode === "edit" ? "Edit" : "Tambah"}
          </span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-heading text-[40px] font-bold text-sttb-navy-dark mb-2">
            {mode === "edit" ? "Edit Kegiatan" : "Tambah Kegiatan"}
          </h1>
          <p className="text-base text-[#6B7A99]">
            Buat kegiatan atau event kampus baru
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* LEFT — Main Content (70%) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Judul */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label
                htmlFor="judul"
                className="block mb-3 text-sm font-semibold text-[#1A2340]"
              >
                Judul <span className="text-sttb-red">*</span>
              </label>
              <input
                id="judul"
                type="text"
                value={judul}
                onChange={(e) => handleJudulChange(e.target.value)}
                placeholder="Masukkan judul kegiatan..."
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-base text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
            </div>

            {/* Slug */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label
                htmlFor="slug"
                className="block mb-3 text-sm font-semibold text-[#1A2340]"
              >
                Slug{" "}
                <span className="text-xs font-normal text-[#6B7A99]">
                  (otomatis dari judul, dapat diedit)
                </span>
              </label>
              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="slug-url-kegiatan"
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] bg-[#F5F7FA] font-mono text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
            </div>

            {/* Penyelenggara & Lokasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <label
                  htmlFor="penyelenggara"
                  className="block mb-3 text-sm font-semibold text-[#1A2340]"
                >
                  Penyelenggara <span className="text-sttb-red">*</span>
                </label>
                <input
                  id="penyelenggara"
                  type="text"
                  value={penyelenggara}
                  onChange={(e) => setPenyelenggara(e.target.value)}
                  placeholder="Nama penyelenggara"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <label
                  htmlFor="lokasi"
                  className="block mb-3 text-sm font-semibold text-[#1A2340]"
                >
                  Lokasi <span className="text-sttb-red">*</span>
                </label>
                <input
                  id="lokasi"
                  type="text"
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  placeholder="Lokasi kegiatan"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                />
              </div>
            </div>

            {/* Tanggal Mulai & Tanggal Selesai */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <label
                  htmlFor="tanggalMulai"
                  className="block mb-3 text-sm font-semibold text-[#1A2340]"
                >
                  Tanggal Mulai <span className="text-sttb-red">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#9AA3B5]" />
                  <input
                    id="tanggalMulai"
                    type="date"
                    value={tanggalMulai}
                    onChange={(e) => setTanggalMulai(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <label
                  htmlFor="tanggalSelesai"
                  className="block mb-3 text-sm font-semibold text-[#1A2340]"
                >
                  Tanggal Selesai <span className="text-sttb-red">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#9AA3B5]" />
                  <input
                    id="tanggalSelesai"
                    type="date"
                    value={tanggalSelesai}
                    onChange={(e) => setTanggalSelesai(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                  />
                </div>
              </div>
            </div>

            {/* Rich Text Editor */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 pt-6 pb-4">
                <label
                  htmlFor="deskripsi"
                  className="block text-sm font-semibold text-[#1A2340]"
                >
                  Deskripsi <span className="text-sttb-red">*</span>
                </label>
              </div>

              {/* Toolbar */}
              <div className="px-6 py-3 border-t border-b border-[#E8ECF2] bg-[#F5F7FA] flex items-center gap-1">
                {TOOLBAR_BUTTONS.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    title={label}
                    className="p-2 rounded text-[#6B7A99] hover:bg-white hover:text-[#1A2340] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {/* Editor */}
              <div className="p-6">
                <textarea
                  id="deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Tulis deskripsi kegiatan di sini..."
                  rows={16}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-[15px] leading-[1.7] text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy resize-none"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Meta sidebar (30%) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Publikasi Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#1A2340] mb-4">
                Publikasi
              </h3>

              {/* Status publikasi toggle */}
              <div className="mb-4">
                <p className="text-[13px] font-semibold text-[#6B7A99] uppercase tracking-wide mb-2">
                  Status
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStatus("draft")}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                      status === "draft"
                        ? "bg-[#9AA3B5] text-white"
                        : "bg-[#F5F7FA] text-[#6B7A99] border border-[#E8ECF2] hover:bg-gray-100"
                    }`}
                  >
                    Draft
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus("published")}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                      status === "published"
                        ? "bg-emerald-500 text-white"
                        : "bg-[#F5F7FA] text-[#6B7A99] border border-[#E8ECF2] hover:bg-gray-100"
                    }`}
                  >
                    Published
                  </button>
                </div>
              </div>

              {/* Status Kegiatan */}
              <div className="mb-6">
                <label
                  htmlFor="statusKegiatan"
                  className="block mb-2 text-[13px] font-semibold text-[#6B7A99] uppercase tracking-wide"
                >
                  Status Kegiatan
                </label>
                <select
                  id="statusKegiatan"
                  value={statusKegiatan}
                  onChange={(e) => setStatusKegiatan(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy cursor-pointer"
                >
                  {STATUS_KEGIATAN_OPTIONS.map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="mb-3 text-xs font-semibold text-sttb-red">
                  {error}
                </p>
              )}

              {/* Action buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleSubmit(true)}
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-lg bg-sttb-navy hover:bg-sttb-navy-dark text-white text-sm font-semibold transition-colors hover:shadow-lg"
                >
                  {isLoading ? "Menyimpan..." : "Publikasikan"}
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit(false)}
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-lg bg-transparent text-sttb-navy border border-sttb-navy hover:bg-sttb-navy/5 text-sm font-semibold transition-colors"
                >
                  {isLoading ? "Menyimpan..." : "Simpan Draft"}
                </button>
              </div>
            </div>

            {/* Thumbnail Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#1A2340] mb-4">
                Thumbnail
              </h3>

              {!thumbnail ? (
                <label
                  htmlFor="thumbnailUpload"
                  className="block cursor-pointer"
                >
                  <div className="border-2 border-dashed border-[#E8ECF2] rounded-lg p-8 text-center transition-colors hover:border-blue-400 hover:bg-blue-50">
                    <Upload className="mx-auto mb-3 w-8 h-8 text-[#9AA3B5]" />
                    <p className="mb-1 text-sm font-semibold text-[#1A2340]">
                      Klik untuk upload gambar
                    </p>
                    <p className="text-[12px] text-[#9AA3B5]">
                      PNG, JPG, JPEG (Max 2MB)
                    </p>
                  </div>
                  <input
                    id="thumbnailUpload"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleThumbnailUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnail}
                    alt="Thumbnail preview"
                    className="w-full rounded-lg object-cover aspect-video"
                  />
                  <button
                    type="button"
                    onClick={() => setThumbnail(null)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-sttb-red hover:bg-sttb-red-hover transition-colors"
                    aria-label="Hapus thumbnail"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
