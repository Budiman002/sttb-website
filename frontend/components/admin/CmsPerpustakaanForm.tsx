"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Upload, X } from "lucide-react";
import {
  createPerpustakaan,
  updatePerpustakaan,
  getPerpustakaanDetail,
} from "@/lib/api";

interface CmsPerpustakaanFormProps {
  mode?: "create" | "edit";
  editSlug?: string;
}

export function CmsPerpustakaanForm({
  mode = "create",
  editSlug,
}: CmsPerpustakaanFormProps) {
  const [judul, setJudul] = useState("");
  const [slug, setSlug] = useState("");
  const [penulis, setPenulis] = useState("");
  const [kategori, setKategori] = useState("");
  const [tahun, setTahun] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [itemId, setItemId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (mode === "edit" && editSlug) {
      getPerpustakaanDetail(editSlug)
        .then((data) => {
          setItemId(data.id);
          setJudul(data.judul ?? "");
          setSlug(data.slug ?? "");
          setPenulis(data.penulis ?? "");
          setKategori(data.kategori ?? "");
          setTahun(String(data.tahun ?? ""));
          setPenerbit(data.penerbit ?? "");
          setDeskripsi(data.deskripsi ?? "");
          setFileUrl(data.fileUrl ?? "");
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
        penulis,
        kategori,
        tahun: parseInt(tahun) || 0,
        penerbit: penerbit || undefined,
        deskripsi: deskripsi || undefined,
        thumbnailUrl: thumbnail ?? undefined,
        fileUrl: fileUrl || undefined,
        isPublished,
      };
      if (mode === "edit") {
        await updatePerpustakaan(itemId, payload);
      } else {
        await createPerpustakaan(payload);
      }
      router.push("/admin/perpustakaan");
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
            href="/admin/perpustakaan"
            className="text-sm text-[#6B7A99] hover:underline"
          >
            Perpustakaan
          </Link>
          <ChevronRight className="w-4 h-4 text-[#9AA3B5]" />
          <span className="text-sm font-semibold text-[#1A2340]">
            {mode === "edit" ? "Edit" : "Tambah"}
          </span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-heading text-[40px] font-bold text-sttb-navy-dark mb-2">
            {mode === "edit" ? "Edit Koleksi" : "Tambah Koleksi"}
          </h1>
          <p className="text-base text-[#6B7A99]">
            Tambahkan buku atau literatur baru ke perpustakaan STTB
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
                placeholder="Masukkan judul buku atau koleksi..."
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
                placeholder="slug-url-koleksi"
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] bg-[#F5F7FA] font-mono text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
            </div>

            {/* Penulis */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label
                htmlFor="penulis"
                className="block mb-3 text-sm font-semibold text-[#1A2340]"
              >
                Penulis <span className="text-sttb-red">*</span>
              </label>
              <input
                id="penulis"
                type="text"
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                placeholder="Nama penulis atau pengarang"
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
            </div>

            {/* Kategori & Tahun */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <label
                  htmlFor="kategori"
                  className="block mb-3 text-sm font-semibold text-[#1A2340]"
                >
                  Kategori <span className="text-sttb-red">*</span>
                </label>
                <input
                  id="kategori"
                  type="text"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  placeholder="Teologi Sistematis, Biblika, dll."
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <label
                  htmlFor="tahun"
                  className="block mb-3 text-sm font-semibold text-[#1A2340]"
                >
                  Tahun <span className="text-sttb-red">*</span>
                </label>
                <input
                  id="tahun"
                  type="number"
                  value={tahun}
                  onChange={(e) => setTahun(e.target.value)}
                  placeholder="2026"
                  min="1900"
                  max="2100"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] font-mono text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                />
              </div>
            </div>

            {/* Penerbit */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label
                htmlFor="penerbit"
                className="block mb-3 text-sm font-semibold text-[#1A2340]"
              >
                Penerbit{" "}
                <span className="text-xs font-normal text-[#6B7A99]">
                  (opsional)
                </span>
              </label>
              <input
                id="penerbit"
                type="text"
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
                placeholder="Nama penerbit atau institusi"
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
            </div>

            {/* Deskripsi */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label
                htmlFor="deskripsi"
                className="block mb-3 text-sm font-semibold text-[#1A2340]"
              >
                Deskripsi{" "}
                <span className="text-xs font-normal text-[#6B7A99]">
                  (ringkasan buku)
                </span>
              </label>
              <textarea
                id="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Tulis deskripsi singkat tentang buku atau koleksi ini..."
                rows={8}
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm leading-relaxed text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy resize-none"
              />
            </div>

            {/* File URL */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label
                htmlFor="fileUrl"
                className="block mb-3 text-sm font-semibold text-[#1A2340]"
              >
                File URL{" "}
                <span className="text-xs font-normal text-[#6B7A99]">
                  (opsional — link ke PDF atau dokumen)
                </span>
              </label>
              <input
                id="fileUrl"
                type="url"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                placeholder="https://example.com/path/to/document.pdf"
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] font-mono text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
              <p className="mt-2 text-[12px] text-[#9AA3B5]">
                Masukkan link ke PDF, Google Drive, atau dokumen online lainnya
              </p>
            </div>
          </div>

          {/* RIGHT — Meta sidebar (30%) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Publikasi Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#1A2340] mb-4">
                Publikasi
              </h3>

              {/* Status toggle */}
              <div className="mb-6">
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
                    className="w-full rounded-lg object-cover aspect-[3/4]"
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
              <p className="mt-3 text-center text-[12px] text-[#9AA3B5]">
                Rekomendasi: rasio 3:4 untuk tampilan cover buku
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
