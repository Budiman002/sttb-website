"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Facebook, MessageCircle, Share2 } from "lucide-react";

const galleryImages = [
  "/images/jelajahi-berita/detail-berita/dummy%20detail-Image%20(Gallery%20Image%203).png",
  "/images/jelajahi-berita/Image%20(KUNJUNGAN%20DARI%20SCHOLAR%20LEADERS)for-hero-carousal.png",
  "/images/jelajahi-berita/Image%20(IBADAH%20PEMBUKAAN%20SEMESTER)for-hero-carousal.png",
];

const relatedArticles = [
  {
    category: "AKADEMIK",
    date: "10 Maret 2026",
    title: "Pendaftaran Semester Baru 2025-2026 Dibuka",
    excerpt:
      "STTB membuka pendaftaran mahasiswa baru untuk tahun akademik 2025-2026...",
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
      "Seluruh civitas akademika STTB berkumpul dalam ibadah pembukaan semester...",
    image: "/images/jelajahi-berita/dummy-ibadah-pembukaan-semester.png",
  },
];

export default function BeritaDetailPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <main>
        {/* SECTION 1 — ARTICLE HERO */}
        <section
          className="relative overflow-hidden pt-8 pb-24"
          style={{ background: "#00276B" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
            {/* Breadcrumb */}
            <nav className="mb-12">
              <p
                className="text-xs"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>{" "}
                &rsaquo;{" "}
                <Link
                  href="/jelajahi/berita"
                  className="hover:text-white transition-colors"
                >
                  Berita
                </Link>{" "}
                &rsaquo; Institusi
              </p>
            </nav>

            {/* Centered Content */}
            <div className="max-w-[800px] mx-auto text-center">
              <div className="flex justify-center mb-4">
                <span
                  className="inline-block rounded-full px-4 py-1 text-xs font-bold text-white uppercase"
                  style={{
                    background: "#C41E3A",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.08em",
                  }}
                >
                  INSTITUSI
                </span>
              </div>

              <p
                className="mb-8 text-sm"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                24 Oktober 2025
              </p>

              <h1
                className="mb-6 text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Kunjungan ECLAS International ke STTB Bandung
              </h1>

              <p
                className="mx-auto mb-16"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  maxWidth: "700px",
                }}
              >
                STT Bandung menyambut kunjungan pimpinan ECLAS dari Eropa untuk
                membahas kerja sama kurikulum, penelitian, dan proyek bersama.
              </p>
            </div>

            {/* Hero Image */}
            <div
              className="relative mx-auto"
              style={{ maxWidth: "1200px", transform: "translateY(40px)" }}
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  aspectRatio: "21/9",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="/images/jelajahi-berita/Grand%20Templeton%20untuk%20Proyek%20ECLAS%20International.png"
                  alt="ECLAS International Visit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — ARTICLE BODY */}
        <section className="pt-24 pb-16" style={{ background: "#F8F7F4" }}>
          <div className="max-w-[720px] mx-auto px-6">
            {/* Author Row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#00276B",
                  }}
                />
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-sans)", color: "#00276B" }}
                >
                  Ditulis oleh <strong>Tim Redaksi STTB</strong> &bull; 5 menit
                  baca
                </p>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-2">
                {[Share2, Facebook, MessageCircle].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#00276B",
                    }}
                    aria-label="Share"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Red Divider */}
            <div className="mb-10 h-0.5 bg-[#C41E3A]" />

            {/* Body Text */}
            <div className="space-y-6 mb-12">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "#1F2937",
                  lineHeight: 1.8,
                }}
              >
                Kota mempengaruhi budaya karena kota seperti magnet (menarik
                berbagai kelompok orang), amplifier (mengembangkan pengaruh
                seseorang), dan pintu gerbang (jalan masuk untuk melayani).
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote
              className="my-12 py-6 pl-6"
              style={{ borderLeft: "4px solid #C41E3A" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "#00276B",
                  lineHeight: 1.5,
                }}
              >
                &ldquo;STT Bandung dipercaya mendapatkan Grand dari Templeton
                untuk mengerjakan project ECLAS &mdash; Equipping Christian
                Leadership in an Age of Science.&rdquo;
              </p>
            </blockquote>

            {/* Body Continued */}
            <div className="space-y-6 mb-12">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "#1F2937",
                  lineHeight: 1.8,
                }}
              >
                Pada hari Jumat, 24 Oktober 2025, STT Bandung menyambut
                kunjungan David Wilkinson &amp; Lucas Mix yang merupakan
                pimpinan dari ECLAS di Eropa yang akan menghadiri rapat di
                Singapore, untuk membahas mengenai kerja sama yang sudah
                terjalin dengan STT Bandung dalam berbagai bidang seperti
                kurikulum, penelitian, dan proyek lainnya.
              </p>
            </div>

            {/* Photo Gallery */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow: "0 4px 16px rgba(0,39,107,0.08)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Gray Divider */}
            <div className="mb-8 h-px bg-gray-200" />

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="text-sm text-gray-500"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Topik:
              </span>
              {["Institusi", "ECLAS", "Internasional", "Penelitian"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full px-4 py-1 text-sm border border-[#00276B] text-[#00276B] bg-white"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* SECTION 3 — ARTIKEL TERKAIT */}
        <section className="py-16 lg:py-20 bg-white">
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
                BACA JUGA
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Artikel Terkait
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 16px rgba(0,39,107,0.08)" }}
                >
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — BACK NAVIGATION */}
        <section className="py-8 text-center" style={{ background: "#F8F7F4" }}>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-colors hover:bg-[#00276B] hover:text-white"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 600,
              color: "#00276B",
              border: "1px solid #00276B",
              background: "transparent",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </button>
        </section>
      </main>
    </div>
  );
}
