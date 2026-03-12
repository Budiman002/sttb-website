"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Play } from "lucide-react";

type MediaCard = {
  type: "ARTIKEL" | "VIDEO";
  category: string;
  date: string;
  title: string;
  excerpt?: string;
  duration?: string;
  image: string;
  slug: string;
};

const mediaCards: MediaCard[] = [
  {
    type: "ARTIKEL",
    category: "PENDIDIKAN KRISTEN",
    date: "22 Maret 2022",
    title: "Integrasi Iman dan Ilmu: Menuju Pendekatan yang Lebih Holistik",
    excerpt:
      "Memahami integrasi sebagai disposisi dan metode dalam pendidikan Kristen...",
    image:
      "https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBsZWN0dXJlJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzczMjkwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "integrasi-iman-dan-ilmu-menuju-pendekatan-yang-lebih-holistik",
  },
  {
    type: "VIDEO",
    category: "LEAD",
    date: "20 April 2023",
    title: "City TransForMission #2: Fokus Strategis Misi Urban",
    duration: "18 mnt",
    image:
      "https://images.unsplash.com/photo-1697057406467-60340e993e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBtaXNzaW9ufGVufDF8fHx8MTc3MzI5MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "city-transformission-2-fokus-strategis-misi-urban",
  },
  {
    type: "VIDEO",
    category: "LEAD",
    date: "3 Maret 2023",
    title: "City TransForMission #1: Urbanisasi & Misi",
    duration: "22 mnt",
    image:
      "https://images.unsplash.com/photo-1697057406467-60340e993e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBtaXNzaW9ufGVufDF8fHx8MTc3MzI5MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "city-transformission-1-urbanisasi-misi",
  },
  {
    type: "ARTIKEL",
    category: "MONOGRAF",
    date: "Agustus 2024",
    title: "Buku Penulisan Ilmiah Bidang Teologi",
    excerpt: "Panduan penulisan akademis untuk bidang studi teologi...",
    image:
      "https://images.unsplash.com/photo-1626118711692-716dae857f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHdyaXRpbmclMjBib29rc3xlbnwxfHx8fDE3NzMyOTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "buku-penulisan-ilmiah-bidang-teologi",
  },
  {
    type: "VIDEO",
    category: "STT BANDUNG",
    date: "Desember 2022",
    title: "Persembahan Pujian STTB untuk Pelayanan Sekolah Minggu",
    duration: "8 mnt",
    image:
      "https://images.unsplash.com/photo-1629143935265-73c99997212e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY2h1cmNoJTIwcHJhaXNlfGVufDF8fHx8MTc3MzI5MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "persembahan-pujian-sttb-pelayanan-sekolah-minggu",
  },
  {
    type: "ARTIKEL",
    category: "BULETIN",
    date: "Agustus 2024",
    title: "Buletin STTB #56 Agustus 2024",
    excerpt:
      "Edisi terbaru buletin STTB membahas perkembangan terkini kampus...",
    image:
      "https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNhbXB1cyUyMGxpZmV8ZW58MXx8fHwxNzczMjkwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "buletin-sttb-56-agustus-2024",
  },
];

export default function JelajahiMediaPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = mediaCards.filter((card) => {
    const matchesFilter =
      activeFilter === "Semua" ||
      card.type.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      card.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — HERO */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "#00276B" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[60%_40%] gap-8 items-center">
            {/* Left Column */}
            <div className="relative">
              {/* Red vertical accent bar */}
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
                style={{
                  width: "4px",
                  height: "60px",
                  background: "#C41E3A",
                }}
              />

              <p
                className="uppercase mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#C41E3A",
                  letterSpacing: "0.15em",
                }}
              >
                JELAJAHI STTB
              </p>

              <div className="mb-6">
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(3rem, 8vw, 5rem)",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  MEDIA &amp;
                </h1>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  PUBLIKASI
                </h1>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  lineHeight: 1.7,
                  maxWidth: "500px",
                }}
              >
                Artikel akademis, video pelayanan, dan publikasi terbaru dari
                STTB Bandung.
              </p>
            </div>

            {/* Right Column */}
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1736620095844-ed92d21d4d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBwdWJsaWNhdGlvbnN8ZW58MXx8fHwxNzczMjkxMDI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Media STTB"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FILTER BAR */}
      <section
        className="sticky top-0 z-10"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-3 flex-wrap">
              {["Semua", "Artikel", "Video"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="rounded-full px-5 py-2 transition-all"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 700,
                    background: activeFilter === filter ? "#00276B" : "#FFFFFF",
                    color: activeFilter === filter ? "#FFFFFF" : "#00276B",
                    border:
                      activeFilter === filter ? "none" : "1px solid #00276B",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.background = "#C41E3A";
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.border = "none";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.color = "#00276B";
                      e.currentTarget.style.border = "1px solid #00276B";
                    }
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ width: "16px", height: "16px", color: "#6B7280" }}
              />
              <input
                type="text"
                placeholder="Cari media..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg pl-10 pr-4 py-2 w-full md:w-60 outline-none"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  border: "1px solid #00276B",
                  color: "#00276B",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — KONTEN TERBARU */}
      <section className="py-12 lg:py-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              TERBARU
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Media &amp; Publikasi
            </h2>
          </div>

          {filteredCards.length === 0 ? (
            <p
              className="text-center py-16"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                color: "#6B7280",
              }}
            >
              Tidak ada konten yang sesuai dengan pencarian Anda.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Type Badge (Top-Left) */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background:
                          card.type === "ARTIKEL" ? "#FFFFFF" : "#C41E3A",
                        color: card.type === "ARTIKEL" ? "#00276B" : "#FFFFFF",
                        border:
                          card.type === "ARTIKEL"
                            ? "1px solid #00276B"
                            : "none",
                      }}
                    >
                      {card.type}
                    </div>

                    {/* Category Badge (Bottom-Left) */}
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1 rounded-md"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background:
                          card.type === "ARTIKEL" ? "#C41E3A" : "#00276B",
                        color: "#FFFFFF",
                      }}
                    >
                      {card.category}
                    </div>

                    {/* Play Button Overlay (Videos Only) */}
                    {card.type === "VIDEO" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="rounded-full flex items-center justify-center bg-white"
                          style={{ width: "48px", height: "48px" }}
                        >
                          <Play
                            className="ml-1"
                            style={{
                              width: "16px",
                              height: "16px",
                              fill: "#C41E3A",
                              color: "#C41E3A",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "#6B7280",
                      }}
                    >
                      {card.date}
                    </p>

                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#00276B",
                        lineHeight: 1.3,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {card.title}
                    </h3>

                    {card.type === "ARTIKEL" && card.excerpt && (
                      <p
                        className="mb-4"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          color: "#6B7280",
                          lineHeight: 1.6,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {card.excerpt}
                      </p>
                    )}

                    {card.type === "VIDEO" && card.duration && (
                      <div
                        className="inline-block rounded-md px-3 py-1 mb-4"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "12px",
                          background: "#F3F4F6",
                          color: "#6B7280",
                        }}
                      >
                        {card.duration}
                      </div>
                    )}

                    <Link
                      href={
                        card.type === "ARTIKEL"
                          ? `/jelajahi/media/artikel/${card.slug}`
                          : `/jelajahi/media/video/${card.slug}`
                      }
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#C41E3A",
                      }}
                    >
                      {card.type === "ARTIKEL"
                        ? "Baca Selengkapnya →"
                        : "Tonton Sekarang →"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4 — LOAD MORE */}
      <section className="py-12 text-center" style={{ background: "#FFFFFF" }}>
        <button
          className="px-8 py-3 rounded-lg transition-all mb-4"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 600,
            color: "#6B7280",
            border: "1px solid #6B7280",
            background: "transparent",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#00276B";
            e.currentTarget.style.color = "#00276B";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#6B7280";
            e.currentTarget.style.color = "#6B7280";
          }}
        >
          Muat Lebih Banyak
        </button>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "#6B7280",
          }}
        >
          Menampilkan {filteredCards.length} dari 32 konten
        </p>
      </section>
    </main>
  );
}
