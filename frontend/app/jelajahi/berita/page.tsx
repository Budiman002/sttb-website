"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "/images/jelajahi-berita/Image%20(SENAT%20DOM%20CUP%20STTB)for-Hero-carousal.png",
    title: "SENAT DOM CUP STTB",
    description: "SENAT STTB mengadakan DOM CUP 2026",
  },
  {
    image:
      "/images/jelajahi-berita/Image%20(KUNJUNGAN%20DARI%20SCHOLAR%20LEADERS)for-hero-carousal.png",
    title: "KUNJUNGAN DARI SCHOLAR LEADERS",
    description:
      "Kunjungan dari Scholar Leaders ke Sekolah Tinggi Teologi Bandung",
  },
  {
    image:
      "/images/jelajahi-berita/Image%20(IBADAH%20PEMBUKAAN%20SEMESTER)for-hero-carousal.png",
    title: "IBADAH PEMBUKAAN SEMESTER",
    description:
      "Sekolah Tinggi Teologi Bandung mengadakan Ibadah pembukaan semester genap 2025/2026 pada hari senin 12 Januari 2026. Bersama seluruh civitas mahasiswa, staff dan dosen hadir menyambut tahun ajaran baru. Bapak Sutrisna Harjanto, Ph.D membawakan firman Tuhan dengan...",
  },
];

const filterCategories = [
  "Semua",
  "Institusi",
  "Kegiatan",
  "Akademik",
  "LEAD",
  "Pelayanan",
];

type NewsCard = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  slug?: string;
};

const newsCards: NewsCard[] = [
  {
    category: "INSTITUSI",
    date: "24 Oktober 2025",
    title: "Kunjungan ECLAS International ke STTB Bandung",
    excerpt:
      "STT Bandung menyambut kunjungan David Wilkinson & Lucas Mix dari ECLAS di Eropa...",
    image:
      "/images/jelajahi-berita/dummy-kunjungan%20Eclas%20international%20ke%20STTB%20bandung.png",
    slug: "kunjungan-eclas-international",
  },
  {
    category: "AKADEMIK",
    date: "10 Maret 2026",
    title: "Pendaftaran Semester Baru 2025-2026 Dibuka",
    excerpt:
      "STTB membuka pendaftaran mahasiswa baru untuk tahun akademik 2025-2026 mulai bulan ini...",
    image:
      "/images/jelajahi-berita/dummy-Pendaftaran%20Semester%20Baru%202025-2026%20Dibuka.png",
  },
  {
    category: "LEAD",
    date: "5 Maret 2026",
    title: "City TransForMission: Fokus Strategis Misi Urban",
    excerpt:
      "Seri video terbaru dari L.E.A.D. Center STTB membahas pemuridan dalam konteks urban...",
    image:
      "/images/jelajahi-berita/dummy-City%20TransForMission-%20Fokus%20Strategis%20Misi%20Urban.png",
  },
  {
    category: "KEGIATAN",
    date: "28 Februari 2026",
    title: "Ibadah Pembukaan Semester Ganjil 2026",
    excerpt:
      "Seluruh civitas akademika STTB berkumpul dalam ibadah pembukaan semester yang penuh sukacita...",
    image: "/images/jelajahi-berita/dummy-ibadah-pembukaan-semester.png",
  },
  {
    category: "PELAYANAN",
    date: "20 Februari 2026",
    title: "Mahasiswa STTB Meraih Juara di Kompetisi Khotbah Nasional",
    excerpt:
      "Dua mahasiswa STTB berhasil meraih juara dalam kompetisi khotbah tingkat nasional 2026...",
    image:
      "/images/jelajahi-berita/dummy-Mahasiswa%20STTB%20Meraih%20Juara%20di%20Kompetisi%20Khotbah%20Nasional.png",
  },
  {
    category: "INSTITUSI",
    date: "14 Februari 2026",
    title: "Rekoleksi Alumni STTB 2025: Bersatu dalam Pelayanan",
    excerpt:
      "Ratusan alumni STTB berkumpul dalam acara rekoleksi tahunan yang digelar di kampus...",
    image:
      "/images/jelajahi-berita/dummy-Rekoleksi%20Alumni%20STTB%202025-%20Bersatu%20dalam%20Pelayanan.png",
  },
];

export default function JelajahiBeritaPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = newsCards.filter((card) => {
    const matchesFilter =
      activeFilter === "Semua" ||
      card.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <main>
        {/* SECTION 1 — HERO CAROUSEL */}
        <section className="relative overflow-hidden">
          <div className="relative h-[65vh] lg:h-[75vh]">
            {slides.map((slide, index) => {
              const isActive = currentSlide === index;
              return (
                <div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(1.05)",
                    transition:
                      "opacity 800ms ease-in-out, transform 800ms ease-in-out",
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 1 : 0,
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,39,107,0.3) 0%, rgba(0,39,107,0.5) 100%)",
                    }}
                  />
                  {/* Content */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 600ms ease-in-out 200ms, transform 600ms ease-in-out 200ms",
                    }}
                  >
                    <h2
                      className="mb-4 uppercase text-white"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        fontWeight: 800,
                        letterSpacing: "0.02em",
                        textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      }}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className="mb-8 max-w-2xl text-white"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(1rem, 2vw, 1.25rem)",
                        lineHeight: 1.6,
                        textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      }}
                    >
                      {slide.description}
                    </p>
                    <button
                      className="px-10 py-4 rounded-lg font-bold transition-transform hover:scale-105"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "15px",
                        color: "#C41E3A",
                        background: "#FFFFFF",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full transition-all hover:scale-110 hover:bg-white/30"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                zIndex: 10,
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full transition-all hover:scale-110 hover:bg-white/30"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                zIndex: 10,
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </button>

            {/* Indicator Dots */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
              style={{ zIndex: 10 }}
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: currentSlide === index ? "40px" : "12px",
                    height: "12px",
                    background:
                      currentSlide === index
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — FILTER BAR */}
        <section className="py-4 px-6 lg:px-12 bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-3">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className="rounded-full px-5 py-2 text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: activeFilter === category ? 700 : 500,
                    background:
                      activeFilter === category ? "#00276B" : "#FFFFFF",
                    color: activeFilter === category ? "#FFFFFF" : "#00276B",
                    border:
                      activeFilter === category
                        ? "1px solid #00276B"
                        : "1px solid #00276B",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none"
                style={{
                  fontFamily: "var(--font-sans)",
                  width: "240px",
                  border: "1px solid #00276B",
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

        {/* SECTION 3 — BERITA UNGGULAN */}
        <section className="py-12 lg:py-16" style={{ background: "#F8F7F4" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
            <div
              className="grid lg:grid-cols-[55%_45%] rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 4px 16px rgba(0,39,107,0.12)" }}
            >
              {/* Left: Image */}
              <div className="relative aspect-video lg:aspect-auto min-h-[300px]">
                <Image
                  src="/images/jelajahi-berita/Grand%20Templeton%20untuk%20Proyek%20ECLAS%20International.png"
                  alt="STTB Bandung Terima Grand Templeton untuk Proyek ECLAS International"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute top-4 left-4 px-4 py-2 rounded-md text-white text-xs font-bold uppercase"
                  style={{
                    background: "#C41E3A",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.08em",
                  }}
                >
                  UNGGULAN
                </div>
              </div>

              {/* Right: Content */}
              <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
                <p
                  className="mb-4 uppercase text-xs font-semibold"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#C41E3A",
                    letterSpacing: "0.08em",
                  }}
                >
                  INSTITUSI &bull; 15 Maret 2026
                </p>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#00276B",
                    lineHeight: 1.3,
                  }}
                >
                  STTB Bandung Terima Grand Templeton untuk Proyek ECLAS
                  International
                </h2>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#00276B",
                    lineHeight: 1.7,
                  }}
                >
                  STT Bandung dipercaya mendapatkan Grand dari Templeton untuk
                  mengerjakan project ECLAS (Equipping Christian Leadership in
                  an Age of Science)...
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-sans)", color: "#C41E3A" }}
                >
                  Baca Selengkapnya &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — GRID BERITA TERBARU */}
        <section className="py-16 lg:py-24 bg-white">
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
                Berita &amp; Dokumentasi
              </h2>
            </div>

            {filteredCards.length === 0 && (
              <p
                className="text-gray-400 text-sm mb-8"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Tidak ada berita yang sesuai dengan filter.
              </p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 16px rgba(0,39,107,0.08)" }}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1 rounded-md text-white text-xs font-bold uppercase"
                      style={{
                        background: "#C41E3A",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {card.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p
                      className="mb-2 text-xs text-gray-500"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {card.date}
                    </p>
                    <h3
                      className="mb-3 line-clamp-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#00276B",
                        lineHeight: 1.3,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="mb-4 text-sm text-gray-500 leading-relaxed line-clamp-2"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {card.excerpt}
                    </p>
                    {card.slug ? (
                      <Link
                        href={`/jelajahi/berita/${card.slug}`}
                        className="text-xs font-semibold"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "#C41E3A",
                        }}
                      >
                        Baca Selengkapnya &rarr;
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-xs font-semibold"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "#C41E3A",
                        }}
                      >
                        Baca Selengkapnya &rarr;
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — LOAD MORE */}
        <section className="py-12 text-center bg-white">
          <button
            className="px-10 py-3 rounded-lg text-sm font-semibold border border-gray-200 transition-colors duration-200 hover:border-[#00276B] hover:text-[#00276B]"
            style={{ fontFamily: "var(--font-sans)", color: "#374151" }}
          >
            Muat Lebih Banyak
          </button>
          <p
            className="mt-4 text-xs text-gray-400"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Menampilkan 6 dari 48 berita
          </p>
        </section>
      </main>
    </div>
  );
}
