"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Globe,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  ZoomIn,
  ZoomOut,
  Maximize,
  Expand,
  MoreVertical,
} from "lucide-react";

// Same image as in the listing page for this book
const BOOK_IMAGE =
  "https://images.unsplash.com/photo-1630197158266-bfe9ce8ed653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWl0aCUyMGxlYXJuaW5nJTIwaW50ZWdyYXRpb258ZW58MXx8fHwxNzczMjkyNTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080";

const relatedBooks = [
  {
    category: "JURNAL",
    categoryColor: "#C41E3A",
    title: "Jurnal Teologi Berita Hidup Vol. 4",
    author: "Tim Redaksi STTB",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1621912498418-99cc5b7f7775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGpvdXJuYWwlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NzMyOTI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "jurnal-teologi-berita-hidup-vol-4",
  },
  {
    category: "BUKU TEKS",
    categoryColor: "#00276B",
    title: "Teologi Sistematika: Pengantar Komprehensif",
    author: "Wayne Grudem",
    year: "2018",
    image:
      "https://images.unsplash.com/photo-1637969732183-671049493fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW1hdGljJTIwdGhlb2xvZ3klMjBib29rc3xlbnwxfHx8fDE3NzMyOTI1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "teologi-sistematika-pengantar-komprehensif",
  },
  {
    category: "TESIS",
    categoryColor: "#4B5563",
    title: "Peran Gereja dalam Transformasi Masyarakat Urban",
    author: "Andreas Santoso",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1710002580784-6e4f0eaf4fc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNodXJjaCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMyOTI1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "peran-gereja-dalam-transformasi-masyarakat-urban",
  },
  {
    category: "BUKU TEKS",
    categoryColor: "#00276B",
    title: "Dasar-Dasar Pendidikan Kristen",
    author: "Robert W. Pazmiño",
    year: "2019",
    image:
      "https://images.unsplash.com/photo-1626897559266-d529d0389421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBlZHVjYXRpb24lMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NzMyOTI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "dasar-dasar-pendidikan-kristen",
  },
];

const toolbarIcons = [Grid3x3, ZoomOut, ZoomIn, Maximize, Expand, MoreVertical];

export default function PerpustakaanDetailPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — HERO */}
      <section className="py-20" style={{ background: "#00276B" }}>
        <div className="max-w-[800px] mx-auto px-12 text-center">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Link href="/" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                Home
              </Link>{" "}
              ›{" "}
              <Link
                href="/jelajahi/perpustakaan"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                Perpustakaan
              </Link>
            </p>
          </nav>

          {/* Category Badge + Year */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <span
              className="inline-block rounded-full px-4 py-1"
              style={{
                background: "#6B7280",
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              MONOGRAF
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              • 2022
            </span>
          </div>

          {/* Title */}
          <h1
            className="mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 52px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            Integrasi Iman dan Ilmu dalam Pendidikan Kristen
          </h1>

          {/* Author Row */}
          <div className="flex justify-center items-center gap-3 mb-4">
            <div
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                width: "40px",
                height: "40px",
                background: "#00276B",
                border: "2px solid #FFFFFF",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              SL
            </div>
            <div className="text-left">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Sarinah Lo, Ph.D.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Dosen Tetap Studi Magister Pendidikan Kristen
              </p>
            </div>
          </div>

          {/* Red Divider */}
          <div className="flex justify-center mb-4">
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#C41E3A",
              }}
            />
          </div>

          {/* Meta Pills */}
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Monograf • 156 halaman</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              <Globe className="w-4 h-4" />
              <span>Bahasa Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PDF VIEWER */}
      <section className="pb-10" style={{ background: "#FFFFFF" }}>
        <div
          className="max-w-[900px] mx-auto px-6"
          style={{ marginTop: "-40px" }}
        >
          {/* PDF Viewer Container */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(0, 39, 107, 0.15)" }}
          >
            {/* Toolbar */}
            <div
              className="flex justify-between items-center px-5 py-3"
              style={{
                background: "#F3F4F6",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              {/* Left: Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  disabled
                  style={{
                    padding: "4px",
                    opacity: 0.4,
                    cursor: "not-allowed",
                  }}
                >
                  <ChevronLeft
                    className="w-5 h-5"
                    style={{ color: "#6B7280" }}
                  />
                </button>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "#00276B",
                    fontWeight: 600,
                  }}
                >
                  1 / 7
                </span>
                <button style={{ padding: "4px", cursor: "pointer" }}>
                  <ChevronRight
                    className="w-5 h-5"
                    style={{ color: "#6B7280" }}
                  />
                </button>
              </div>

              {/* Right: Toolbar Icons */}
              <div className="flex items-center gap-2">
                {toolbarIcons.map((Icon, idx) => (
                  <button
                    key={idx}
                    className="rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
                    style={{
                      width: "32px",
                      height: "32px",
                      cursor: "pointer",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#6B7280" }} />
                  </button>
                ))}
              </div>
            </div>

            {/* PDF Content Area */}
            <div
              className="relative flex items-center justify-center"
              style={{
                background: "#003F8A",
                aspectRatio: "3/4",
              }}
            >
              {/* Book cover as background */}
              <Image
                src={BOOK_IMAGE}
                alt="Integrasi Iman dan Ilmu"
                fill
                className="object-cover opacity-20"
                sizes="(max-width: 900px) 100vw, 900px"
              />

              {/* Simulated PDF Page */}
              <div
                className="relative bg-white rounded z-10"
                style={{
                  width: "60%",
                  height: "70%",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  padding: "40px 30px",
                }}
              >
                {/* Simulated Text Lines */}
                <div className="space-y-6">
                  {[1, 2, 3].map((block) => (
                    <div key={block} className="space-y-1.5">
                      {[1, 2, 3, 4, 5].map((line) => (
                        <div
                          key={line}
                          style={{
                            height: "8px",
                            background: "#D1D5DB",
                            borderRadius: "2px",
                            width: line === 5 ? "70%" : "100%",
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div
              className="text-center py-3"
              style={{
                background: "#F3F4F6",
                borderTop: "1px solid #E5E7EB",
              }}
            >
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                Pratinjau terbatas. Login untuk akses penuh.
              </p>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#00276B",
                }}
              >
                Masuk dengan akun mahasiswa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DESKRIPSI KOLEKSI */}
      <section className="py-12" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[680px] mx-auto px-12">
          {/* Section Heading */}
          <h2
            className="mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              color: "#00276B",
            }}
          >
            Tentang Koleksi Ini
          </h2>

          {/* Red Accent Underline */}
          <div
            className="mb-6"
            style={{
              width: "40px",
              height: "3px",
              background: "#C41E3A",
            }}
          />

          {/* Lead Paragraph */}
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              fontWeight: 500,
              color: "#003F8A",
              lineHeight: 1.8,
            }}
          >
            Monograf ini membahas konsep integrasi iman dan ilmu sebagai fondasi
            pendidikan Kristen yang holistik.
          </p>

          {/* Body Paragraph */}
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              color: "#374151",
              lineHeight: 1.9,
            }}
          >
            Ditulis oleh Sarinah Lo, Ph.D., buku ini mengeksplorasi empat model
            integrasi yang kerap digunakan pendidik Kristen, mulai dari
            pendekatan Arthur Holmes hingga perspektif kontekstual Asia. Setiap
            model dibahas secara mendalam dengan contoh implementasi praktis di
            kelas maupun lembaga pendidikan.
          </p>

          {/* Detail Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "PENULIS", value: "Sarinah Lo, Ph.D." },
              { label: "TAHUN TERBIT", value: "2022" },
              { label: "HALAMAN", value: "156 halaman" },
              { label: "BAHASA", value: "Indonesia" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#C41E3A",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#00276B",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA AKSES */}
      <section className="py-12 text-center" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[480px] mx-auto px-6">
          <h3
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              fontWeight: 700,
              color: "#00276B",
            }}
          >
            Ingin Akses Koleksi Lengkap?
          </h3>

          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "#6B7280",
              lineHeight: 1.7,
            }}
          >
            Koleksi perpustakaan digital tersedia penuh untuk mahasiswa dan
            alumni STTB yang terdaftar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              className="px-8 py-3.5 rounded-lg transition-all"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "#00276B",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#003F8A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#00276B";
              }}
            >
              Masuk dengan Akun STTB
            </button>
            <button
              className="px-8 py-3.5 rounded-lg transition-all"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#00276B",
                background: "#FFFFFF",
                border: "1px solid #00276B",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00276B";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.color = "#00276B";
              }}
            >
              Hubungi Perpustakaan
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — KOLEKSI LAINNYA */}
      <section className="py-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              TERKAIT
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Koleksi Lainnya
            </h2>
          </div>

          {/* 4-Column Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedBooks.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden"
                style={{
                  boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)",
                }}
              >
                {/* Book Cover Area */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                  />

                  {/* Category Badge (Top-Right) */}
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "10px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      background: card.categoryColor,
                      color: "#FFFFFF",
                    }}
                  >
                    {card.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#00276B",
                      lineHeight: 1.4,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    {card.author}
                  </p>

                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      color: "#9CA3AF",
                    }}
                  >
                    {card.year}
                  </p>

                  <Link
                    href={`/jelajahi/perpustakaan/${card.slug}`}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#C41E3A",
                    }}
                  >
                    Lihat Detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BACK NAVIGATION */}
      <section className="py-8 text-center" style={{ background: "#FFFFFF" }}>
        <button
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 600,
            color: "#00276B",
            border: "1px solid #00276B",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => router.back()}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#00276B";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#00276B";
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Perpustakaan
        </button>
      </section>
    </main>
  );
}
