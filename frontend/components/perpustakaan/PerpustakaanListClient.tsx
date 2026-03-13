"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Mail, Phone } from "lucide-react";
import type { PerpustakaanListItem } from "@/types/api";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1637969732183-671049493fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const operatingHours = [
  { day: "Senin — Jumat", hours: "08.00 — 17.00 WIB" },
  { day: "Sabtu", hours: "08.00 — 12.00 WIB" },
  { day: "Minggu & Hari Libur", hours: "Tutup" },
];

const filters = ["Semua", "Buku Teks", "Jurnal", "Monograf", "Tesis & Skripsi"];

const filterMap: Record<string, string> = {
  "Buku Teks": "BUKU TEKS",
  Jurnal: "JURNAL",
  Monograf: "MONOGRAF",
  "Tesis & Skripsi": "TESIS",
};

function getCategoryColor(kategori: string): string {
  switch (kategori.toUpperCase()) {
    case "JURNAL":
      return "#C41E3A";
    case "TESIS":
    case "TESIS & SKRIPSI":
      return "#4B5563";
    case "MONOGRAF":
      return "#6B7280";
    default:
      return "#00276B";
  }
}

interface Props {
  items: PerpustakaanListItem[];
  totalCount: number;
}

export function PerpustakaanListClient({ items, totalCount }: Props) {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = items.filter((item) => {
    const matchesFilter =
      activeFilter === "Semua" ||
      item.kategori.toUpperCase() === filterMap[activeFilter];
    const matchesSearch =
      searchQuery === "" ||
      item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.penulis.toLowerCase().includes(searchQuery.toLowerCase());
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
            <div className="relative">
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
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3rem, 8vw, 4.5rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  PERPUSTAKAAN
                </h1>
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(2.5rem, 7vw, 4rem)",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  STTB BANDUNG
                </h1>
              </div>

              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  lineHeight: 1.7,
                  maxWidth: "420px",
                }}
              >
                Akses koleksi buku, jurnal teologi, dan sumber akademis untuk
                mendukung studi dan penelitian Anda.
              </p>

              <div className="flex flex-wrap gap-4">
                <div
                  className="bg-white rounded-full px-5 py-2"
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#00276B",
                      marginRight: "8px",
                    }}
                  >
                    5.000+
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    Koleksi Buku
                  </span>
                </div>
                <div
                  className="bg-white rounded-full px-5 py-2"
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#00276B",
                      marginRight: "8px",
                    }}
                  >
                    120+
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    Jurnal Teologi
                  </span>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1724391688440-9b9b9f145216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzaGVsdmVzfGVufDF8fHx8MTc3MzI5MjU1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Perpustakaan STTB"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SEARCH & FILTER BAR */}
      <section
        className="sticky top-0 z-10"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="relative w-full lg:max-w-[400px]">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ width: "18px", height: "18px", color: "#6B7280" }}
              />
              <input
                type="text"
                placeholder="Cari judul, penulis, atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg pl-11 pr-4 py-2.5 w-full outline-none"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  border: "1px solid #00276B",
                  color: "#00276B",
                }}
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="rounded-full px-4 py-2 transition-all"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
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
          </div>
        </div>
      </section>

      {/* SECTION 3 — KATALOG PERPUSTAKAAN */}
      <section className="py-12 lg:py-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
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
              KOLEKSI
            </p>
            <div className="flex justify-between items-end flex-wrap gap-4">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Katalog Perpustakaan
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "#6B7280",
                }}
              >
                Menampilkan {filteredCards.length} dari {totalCount}+ koleksi
              </p>
            </div>
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
              Tidak ada koleksi yang sesuai dengan pencarian Anda.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCards.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden"
                  style={{
                    boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={item.thumbnailUrl ?? FALLBACK_IMAGE}
                      alt={item.judul}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                    />

                    <div
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background: getCategoryColor(item.kategori),
                        color: "#FFFFFF",
                      }}
                    >
                      {item.kategori}
                    </div>
                  </div>

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
                      {item.judul}
                    </h3>

                    <p
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "#6B7280",
                      }}
                    >
                      {item.penulis}
                    </p>

                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "#9CA3AF",
                      }}
                    >
                      {item.tahunTerbit ?? "—"}
                    </p>

                    <Link
                      href={`/jelajahi/perpustakaan/${item.slug}`}
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
          )}
        </div>
      </section>

      {/* SECTION 4 — LOAD MORE */}
      <section className="py-8 text-center" style={{ background: "#FFFFFF" }}>
        <button
          className="px-8 py-3 rounded-lg transition-all mb-3"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 600,
            color: "#00276B",
            border: "1px solid #00276B",
            background: "transparent",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#00276B";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#00276B";
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
          Menampilkan {filteredCards.length} dari {totalCount}+ koleksi
        </p>
      </section>

      {/* SECTION 5 — INFO AKSES */}
      <section className="py-12 lg:py-16" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p
                className="uppercase font-bold mb-4"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "#C41E3A",
                  letterSpacing: "0.12em",
                }}
              >
                INFORMASI
              </p>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Jam Operasional
              </h3>

              <div className="space-y-4">
                {operatingHours.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center pb-4"
                    style={{
                      borderBottom:
                        idx < operatingHours.length - 1
                          ? "1px solid #E5E7EB"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#00276B",
                      }}
                    >
                      {item.day}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        color: "#6B7280",
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p
                className="uppercase font-bold mb-4"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "#C41E3A",
                  letterSpacing: "0.12em",
                }}
              >
                BANTUAN
              </p>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Hubungi Pustakawan
              </h3>

              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                }}
              >
                Butuh bantuan menemukan sumber referensi? Tim pustakawan kami
                siap membantu.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail
                    className="flex-shrink-0"
                    style={{ width: "18px", height: "18px", color: "#00276B" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#00276B",
                    }}
                  >
                    perpustakaan@sttb.ac.id
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className="flex-shrink-0"
                    style={{ width: "18px", height: "18px", color: "#00276B" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#00276B",
                    }}
                  >
                    (022) 123-4567
                  </span>
                </div>
              </div>

              <button
                className="px-7 py-3 rounded-lg transition-all"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "#00276B",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#C41E3A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#00276B";
                }}
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
