"use client";

import { useState, useEffect, useRef } from "react";
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
  Upload,
  X,
  Calendar,
} from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExtension from "@tiptap/extension-underline";
import { createBerita, updateBerita, getBeritaDetail } from "@/lib/api";

const CATEGORIES = [
  "Institusi",
  "Kegiatan Kampus",
  "Akademik",
  "Rohani",
  "Pengumuman",
  "Alumni",
  "LEAD",
  "Pelayanan",
];

interface CmsBeritaFormProps {
  mode?: "create" | "edit";
  editSlug?: string;
}

export function CmsBeritaForm({
  mode = "create",
  editSlug,
}: CmsBeritaFormProps) {
  const [judul, setJudul] = useState("");
  const [slug, setSlug] = useState("");
  const [kategori, setKategori] = useState("");
  const [penulis, setPenulis] = useState("");
  const [konten, setKonten] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [tanggalPublish, setTanggalPublish] = useState("2026-03-12");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [itemId, setItemId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, UnderlineExtension],
    content: "",
    onCreate: ({ editor }) => {
      if (pendingKonten.current) {
        editor.commands.setContent(pendingKonten.current);
        pendingKonten.current = null;
      }
    },
    onUpdate: ({ editor }) => {
      setKonten(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[320px] px-4 py-3 text-[15px] leading-[1.7] text-[#1A2340] focus:outline-none",
      },
    },
  });

  const pendingKonten = useRef<string | null>(null);

  useEffect(() => {
    if (editor && pendingKonten.current !== null) {
      editor.commands.setContent(pendingKonten.current);
      pendingKonten.current = null;
    }
  }, [editor]);

  // Fallback: fires when either editor or konten changes — whichever resolves last wins
  useEffect(() => {
    if (editor && konten) {
      editor.commands.setContent(konten);
    }
  }, [editor, konten]);

  useEffect(() => {
    if (mode === "edit" && editSlug) {
      getBeritaDetail(editSlug)
        .then((data) => {
          setItemId(data.id);
          setJudul(data.judul ?? "");
          setSlug(data.slug ?? "");
          setKategori(data.kategori ?? "");
          setPenulis(data.penulis ?? "");
          setKonten(data.konten ?? "");
          setDeskripsi(data.deskripsi ?? data.excerpt ?? "");
          setTanggalPublish(data.tanggalPublish?.split("T")[0] ?? "");
          setThumbnail(data.thumbnailUrl ?? null);
          setStatus(data.isPublished ? "published" : "draft");
          // Apply to editor: direct if already ready, ref if not yet
          if (editor) {
            editor.commands.setContent(data.konten ?? "");
          } else {
            pendingKonten.current = data.konten ?? "";
          }
        })
        .catch(() => setError("Gagal memuat data"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, editSlug]);

  const handleSubmit = async (isPublished: boolean) => {
    setIsLoading(true);
    setError("");
    try {
      const payload = {
        judul,
        slug,
        deskripsi: deskripsi,
        konten,
        kategori,
        penulis,
        thumbnailUrl: thumbnail ?? undefined,
        tanggalPublish,
        isPublished,
      };
      if (mode === "edit") {
        await updateBerita(itemId, payload);
      } else {
        await createBerita(payload);
      }
      router.push("/admin/berita");
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
            href="/admin/berita"
            className="text-sm text-[#6B7A99] hover:underline"
          >
            Berita
          </Link>
          <ChevronRight className="w-4 h-4 text-[#9AA3B5]" />
          <span className="text-sm font-semibold text-[#1A2340]">
            {mode === "edit" ? "Edit" : "Tambah"}
          </span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-heading text-[40px] font-bold text-sttb-navy-dark mb-2">
            {mode === "edit" ? "Edit Berita" : "Tambah Berita"}
          </h1>
          <p className="text-base text-[#6B7A99]">
            Buat artikel berita atau pengumuman baru
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
                placeholder="Masukkan judul berita..."
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
                placeholder="slug-url-berita"
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] bg-[#F5F7FA] font-mono text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
              />
            </div>

            {/* Kategori & Penulis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <label
                  htmlFor="kategori"
                  className="block mb-3 text-sm font-semibold text-[#1A2340]"
                >
                  Kategori <span className="text-sttb-red">*</span>
                </label>
                <select
                  id="kategori"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy cursor-pointer"
                >
                  <option value="">Pilih kategori</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

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
                  placeholder="Nama penulis"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                />
              </div>
            </div>

            {/* Rich Text Editor */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 pt-6 pb-4">
                <label className="block text-sm font-semibold text-[#1A2340]">
                  Konten <span className="text-sttb-red">*</span>
                </label>
              </div>

              {/* Toolbar */}
              <div className="px-6 py-3 border-t border-b border-[#E8ECF2] bg-[#F5F7FA] flex items-center gap-1">
                {[
                  {
                    icon: Bold,
                    label: "Bold",
                    action: () => editor?.chain().focus().toggleBold().run(),
                    isActive: editor?.isActive("bold"),
                  },
                  {
                    icon: Italic,
                    label: "Italic",
                    action: () => editor?.chain().focus().toggleItalic().run(),
                    isActive: editor?.isActive("italic"),
                  },
                  {
                    icon: Underline,
                    label: "Underline",
                    action: () =>
                      editor?.chain().focus().toggleUnderline().run(),
                    isActive: editor?.isActive("underline"),
                  },
                  {
                    icon: Heading1,
                    label: "Heading 1",
                    action: () =>
                      editor?.chain().focus().toggleHeading({ level: 1 }).run(),
                    isActive: editor?.isActive("heading", { level: 1 }),
                  },
                  {
                    icon: Heading2,
                    label: "Heading 2",
                    action: () =>
                      editor?.chain().focus().toggleHeading({ level: 2 }).run(),
                    isActive: editor?.isActive("heading", { level: 2 }),
                  },
                  {
                    icon: List,
                    label: "Bullet List",
                    action: () =>
                      editor?.chain().focus().toggleBulletList().run(),
                    isActive: editor?.isActive("bulletList"),
                  },
                  {
                    icon: ListOrdered,
                    label: "Numbered List",
                    action: () =>
                      editor?.chain().focus().toggleOrderedList().run(),
                    isActive: editor?.isActive("orderedList"),
                  },
                ].map(({ icon: Icon, label, action, isActive }) => (
                  <button
                    key={label}
                    type="button"
                    title={label}
                    onClick={action}
                    className={`p-2 rounded transition-colors ${
                      isActive
                        ? "bg-sttb-navy text-white"
                        : "text-[#6B7A99] hover:bg-white hover:text-[#1A2340]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {/* Editor */}
              <div className="p-6">
                <div className="rounded-lg border border-[#E8ECF2] transition-colors focus-within:border-sttb-navy">
                  <EditorContent
                    editor={editor}
                    className="[&_.ProseMirror]:min-h-[320px] [&_.ProseMirror]:px-4 [&_.ProseMirror]:py-3 [&_.ProseMirror]:outline-none [&_.ProseMirror_p]:my-2 [&_.ProseMirror_h1]:text-2xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h1]:my-3 [&_.ProseMirror_h2]:text-xl [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h2]:my-2 [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:ml-6 [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:ml-6 [&_.ProseMirror_p.is-editor-empty:first-child]:text-[#9AA3B5] [&_.ProseMirror_p.is-editor-empty:first-child]:before:content-[attr(data-placeholder)]"
                  />
                </div>
              </div>
            </div>

            {/* Deskripsi / Excerpt */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label
                htmlFor="deskripsi"
                className="block mb-3 text-sm font-semibold text-[#1A2340]"
              >
                Deskripsi / Excerpt
              </label>
              <textarea
                id="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Ringkasan singkat untuk preview berita (maks 160 karakter)"
                rows={4}
                maxLength={160}
                className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] text-sm leading-relaxed text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy resize-none"
              />
              <p className="mt-2 text-right text-[12px] text-[#9AA3B5]">
                {deskripsi?.length ?? 0} / 160
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

              {/* Tanggal Publish */}
              <div className="mb-6">
                <label
                  htmlFor="tanggalPublish"
                  className="block mb-2 text-[13px] font-semibold text-[#6B7A99] uppercase tracking-wide"
                >
                  Tanggal Publish
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#9AA3B5]" />
                  <input
                    id="tanggalPublish"
                    type="date"
                    value={tanggalPublish}
                    onChange={(e) => setTanggalPublish(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#E8ECF2] text-sm text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                  />
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
