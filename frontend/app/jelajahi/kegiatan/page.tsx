"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, MapPin, DollarSign } from "lucide-react";

type EventCard = {
  status: string;
  statusColor: string;
  category: string;
  date: string;
  time: string;
  location: string;
  title: string;
  image: string;
  slug: string;
};

const eventCards: EventCard[] = [
  {
    status: "UPCOMING",
    statusColor: "#0056B3",
    category: "AKADEMIK",
    date: "15 April — 30 Juni 2026",
    time: "Rabu, 19.00 – 21.00 WIB",
    location: "Zoom",
    title: "Kelas Sit In Magister Teologi Pelayanan Pastoral",
    image:
      "https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzE5ODE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "kelas-sit-in-magister-teologi-pelayanan-pastoral",
  },
  {
    status: "ONGOING",
    statusColor: "#16A34A",
    category: "AKADEMIK",
    date: "9 Jan — 18 Mei 2026",
    time: "Jumat–Sabtu, 16.00–21.00 WIB",
    location: "Onsite & Zoom",
    title: "Kelas Sit In Magister Ministri Marketplace",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3MzI4NDg5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "kelas-sit-in-magister-ministri-marketplace",
  },
  {
    status: "UPCOMING",
    statusColor: "#0056B3",
    category: "KOMUNITAS",
    date: "20 April 2026",
    time: "09.00 – 12.00 WIB",
    location: "Kampus STTB",
    title: "Open House Penerimaan Mahasiswa Baru 2026–2027",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    slug: "open-house-penerimaan-mahasiswa-baru-2026-2027",
  },
  {
    status: "SELESAI",
    statusColor: "#6B7280",
    category: "PELAYANAN",
    date: "10 Maret 2026",
    time: "08.00 – 17.00 WIB",
    location: "Onsite",
    title: "Rekoleksi Alumni STTB 2025",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    slug: "rekoleksi-alumni-sttb-2025",
  },
  {
    status: "SELESAI",
    statusColor: "#6B7280",
    category: "AKADEMIK",
    date: "2 Januari 2026",
    time: "16.00 – 21.00 WIB",
    location: "Onsite & Zoom",
    title: "Magister Ministri Marketplace Kohort Balikpapan",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    slug: "magister-ministri-marketplace-kohort-balikpapan",
  },
  {
    status: "UPCOMING",
    statusColor: "#0056B3",
    category: "KOMUNITAS",
    date: "5 Mei 2026",
    time: "18.00 – 20.00 WIB",
    location: "Zoom",
    title: "Bincang Rame: Menemukan Panggilan Hidupmu",
    image:
      "https://images.unsplash.com/photo-1726250873230-5bccf790a886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb252ZXJzYXRpb24lMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3MzI4NDg5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "bincang-rame-menemukan-panggilan-hidupmu",
  },
];

const filterStatuses = ["Semua", "Upcoming", "Ongoing", "Selesai"];

export default function JelajahiKegiatanPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = eventCards.filter((card) => {
    const matchesFilter =
      activeFilter === "Semua" ||
      card.status.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      card.title.toLowerCase().includes(searchQuery.toLowerCase());
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
          {/* Left Column */}
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

          {/* Red Vertical Accent Bar */}
          <div
            className="absolute left-[60%] top-1/2 -translate-y-1/2 hidden lg:block"
            style={{
              width: "4px",
              height: "60px",
              background: "#C41E3A",
            }}
          />

          {/* Right Column — Logo Watermark */}
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
          {/* Status Filter Pills */}
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

          {/* Search Bar */}
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

      {/* SECTION 3 — KEGIATAN UNGGULAN */}
      <section className="py-12 lg:py-16" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div
            className="grid lg:grid-cols-2 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.12)" }}
          >
            {/* Left: Image */}
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px]">
              <Image
                src="https://images.unsplash.com/photo-1662151820001-0c8d949304a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY2h1cmNoJTIwc2VydmljZXxlbnwxfHx8fDE3NzMyODQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kelas Sit In Magister Pendidikan Kristen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Unggulan Badge */}
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
              {/* Ongoing Badge */}
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

            {/* Right: Content */}
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

              <div className="space-y-3 mb-6">
                {[
                  { Icon: Calendar, text: "9 Januari — 18 Mei 2026" },
                  { Icon: Clock, text: "Jumat–Sabtu, 16.00 – 21.00 WIB" },
                  { Icon: MapPin, text: "Onsite & Zoom" },
                  { Icon: DollarSign, text: "Rp500.000 / mata kuliah" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#00276B" }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        color: "#00276B",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
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
                    {/* Status Badge */}
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-md"
                      style={{
                        background: card.statusColor,
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {card.status}
                    </div>
                    {/* Category Badge */}
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
                      {card.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="space-y-2 mb-4">
                      {[
                        { Icon: Calendar, text: card.date },
                        { Icon: Clock, text: card.time },
                        { Icon: MapPin, text: card.location },
                      ].map(({ Icon, text }, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Icon
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
                            {text}
                          </span>
                        </div>
                      ))}
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
                      {card.title}
                    </h3>

                    <Link
                      href={`/jelajahi/kegiatan/${card.slug}`}
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
          Menampilkan {filteredCards.length} dari 24 kegiatan
        </p>
      </section>
    </main>
  );
}
