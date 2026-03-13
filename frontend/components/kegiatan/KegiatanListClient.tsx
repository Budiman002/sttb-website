"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, MapPin } from "lucide-react";
import type { KegiatanListItem } from "@/types/api";
import { formatDate } from "@/lib/utils";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const filterStatuses = ["Semua", "Upcoming", "Ongoing", "Selesai"];

function getStatusColor(status: string): string {
  switch (status.toUpperCase()) {
    case "UPCOMING":
      return "#0056B3";
    case "ONGOING":
      return "#16A34A";
    default:
      return "#6B7280";
  }
}

function formatDateRange(mulai: string, selesai: string | null): string {
  const start = new Date(mulai).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  if (!selesai) return start;
  const end = new Date(selesai).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${start} — ${end}`;
}

interface Props {
  items: KegiatanListItem[];
  totalCount: number;
}

export function KegiatanListClient({ items, totalCount }: Props) {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = items.filter((item) => {
    const matchesFilter =
      activeFilter === "Semua" ||
      item.status.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      item.judul.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div
          className="grid lg:grid-cols-[60%_40%]"
          style={{ background: "#00276B" }}
        >
          <div className="relative px-8 lg:px-16 xl:px-24 py-20 lg:py-28">
            <p
              className="uppercase font-bold mb-8"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.15em",
              }}
            >
              JELAJAHI STTB
            </p>

            <h1 className="mb-8">
              <span
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(3rem, 8vw, 5rem)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                KEGIATAN
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.2rem, 9vw, 5.5rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                KAMPUS
              </span>
            </h1>

            <p
              className="max-w-xl"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                color: "#FFFFFF",
                lineHeight: 1.7,
              }}
            >
              Temukan berbagai kegiatan akademik, pelayanan, dan komunitas yang
              diselenggarakan oleh STTB Bandung.
            </p>
          </div>

          <div
            className="absolute left-[60%] top-1/2 -translate-y-1/2 hidden lg:block"
            style={{
              width: "4px",
              height: "60px",
              background: "#C41E3A",
            }}
          />

          <div
            className="relative flex items-center justify-center py-20 lg:py-28"
            style={{ background: "#003F8A" }}
          >
            <div className="relative w-64 h-64" style={{ opacity: 0.3 }}>
              <Image
                src="/images/Image (STTB Logo).png"
                alt="STTB Logo"
                fill
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FILTER BAR */}
      <section
        className="py-4 px-6 lg:px-12"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {filterStatuses.map((status) => (
              <button
                key={status}
                onClick={() => setActiveFilter(status)}
                className="rounded-full px-5 py-2 transition-all"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: activeFilter === status ? 700 : 500,
                  background: activeFilter === status ? "#00276B" : "#FFFFFF",
                  color: activeFilter === status ? "#FFFFFF" : "#00276B",
                  border:
                    activeFilter === status ? "none" : "1px solid #00276B",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== status) {
                    e.currentTarget.style.background = "#C41E3A";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.border = "none";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== status) {
                    e.currentTarget.style.background = "#FFFFFF";
                    e.currentTarget.style.color = "#00276B";
                    e.currentTarget.style.border = "1px solid #00276B";
                  }
                }}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Cari kegiatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg px-4 py-2 pr-10 outline-none"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                width: "240px",
                border: "1px solid #00276B",
                background: "#FFFFFF",
                color: "#00276B",
              }}
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ width: "18px", height: "18px", color: "#00276B" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — KEGIATAN UNGGULAN (static featured) */}
      <section className="py-12 lg:py-16" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div
            className="grid lg:grid-cols-2 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.12)" }}
          >
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px]">
              <Image
                src="https://images.unsplash.com/photo-1662151820001-0c8d949304a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY2h1cmNoJTIwc2VydmljZXxlbnwxfHx8fDE3NzMyODQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kelas Sit In Magister Pendidikan Kristen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-md"
                style={{
                  background: "#C41E3A",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                UNGGULAN
              </div>
              <div
                className="absolute top-4 right-4 px-4 py-2 rounded-md"
                style={{
                  background: "#16A34A",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                ONGOING
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="inline-block rounded-full px-3 py-1"
                  style={{
                    background: "#16A34A",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  ONGOING
                </span>
                <span
                  className="inline-block rounded-full px-3 py-1"
                  style={{
                    background: "#C41E3A",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  AKADEMIK
                </span>
              </div>

              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#00276B",
                  lineHeight: 1.3,
                }}
              >
                Kelas Sit In Magister Pendidikan Kristen
              </h2>

              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                }}
              >
                Kuliah ini membantu mahasiswa melakukan riset literatur yang
                baik untuk penulisan tugas paper dan tugas akhir.
              </p>

              <Link
                href="/jelajahi/kegiatan/kelas-sit-in-magister-pendidikan-kristen"
                className="px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl self-start inline-block"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "#FFFFFF",
                  background: "#C41E3A",
                }}
              >
                Lihat Detail →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — GRID KEGIATAN */}
      <section className="py-16 lg:py-24" style={{ background: "#FFFFFF" }}>
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
              SEMUA KEGIATAN
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Kegiatan STTB
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
              Tidak ada kegiatan yang sesuai dengan pencarian Anda.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCards.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.thumbnailUrl ?? FALLBACK_IMAGE}
                      alt={item.judul}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-md"
                      style={{
                        background: getStatusColor(item.status),
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.status}
                    </div>
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1 rounded-md"
                      style={{
                        background: "#C41E3A",
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.kategori}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <Calendar
                          className="w-3 h-3 flex-shrink-0 mt-0.5"
                          style={{ color: "#6B7280" }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            color: "#6B7280",
                          }}
                        >
                          {formatDateRange(
                            item.tanggalMulai,
                            item.tanggalSelesai,
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin
                          className="w-3 h-3 flex-shrink-0 mt-0.5"
                          style={{ color: "#6B7280" }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            color: "#6B7280",
                          }}
                        >
                          {item.lokasi}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="mb-4"
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
                      {item.judul}
                    </h3>

                    <Link
                      href={`/jelajahi/kegiatan/${item.slug}`}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
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

      {/* SECTION 5 — LOAD MORE */}
      <section className="py-12 text-center" style={{ background: "#FFFFFF" }}>
        <button
          className="px-10 py-3 rounded-lg transition-all mb-4"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 600,
            color: "#00276B",
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#00276B")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
        >
          Muat Lebih Banyak
        </button>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "#6B7280",
          }}
        >
          Menampilkan {filteredCards.length} dari {totalCount} kegiatan
        </p>
      </section>
    </main>
  );
}
